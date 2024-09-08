import { downloadAwsResourceSchemas } from "@awboost/cfn-resource-schemas";
import { NodeBase, SchemaFileNode } from "@awboost/cfn-resource-schemas/nodes";
import type { ResourceTypeSchema } from "@awboost/cfn-resource-schemas/types";
import chalk from "chalk";
import { Command, Option } from "commander";
import { mkdir, readFile, readdir, stat, writeFile } from "node:fs/promises";
import { basename, extname, join } from "node:path";
import { format } from "prettier";
import ts from "typescript";
import {
  generateDefinitionTypes,
  generateLegacyAttributeNameConstant,
  generateLegacyAttributeNameConstantType,
  generateLegacyAttributeNameMapType,
  generateLegacyAttributeTypeMap,
  generateLegacyAttributeTypeUtility,
  generateLegacyResourceTypeConstant,
  generateLegacyResourceTypeConstantType,
  generateLegacyResourceTypeMap,
  generateModelType,
  generateResourceAttributesType,
  generateResourceClass,
  generateResourceImports,
  generateResourcePropsType,
  getAttributeNames,
  hasAttributes,
} from "../internal/codegen.js";

export function addGenerateCommand(program: Command): void {
  program
    .command("generate")
    .description("generate code for the given schema files")
    .argument("[input...]", "the schema file(s) to generate code for")
    .option("--download [url]", "download the resource schemas from AWS")
    .option(
      "--ignore-broken-refs",
      "output `unknown` for broken refs in schemas",
    )
    .option(
      "--input-file-names",
      "name the output files according to the input file names",
    )
    .option("--legacy", "generate code in the previous structure")
    .option("--model", "generate the full model type")
    .option("--output-dir <path>", "the directory to output code to")
    .option("--output-file <path>", "the path to output code to")
    .option("--resource", "generate the resource class and associate types")
    .addOption(
      new Option(
        "--schema-validation-errors <level>",
        "what level to log schema validation errors at",
      ).choices(["error", "silent", "warn"]),
    )
    .action(
      async (
        input: string[],
        {
          download,
          ignoreBrokenRefs,
          inputFileNames,
          legacy,
          model: generateModel,
          outputDir,
          outputFile,
          resource: generateResource,
          schemaValidationErrors,
        }: {
          download?: string | boolean;
          ignoreBrokenRefs?: boolean;
          inputFileNames?: boolean;
          legacy?: boolean;
          model?: boolean;
          outputDir?: string;
          outputFile?: string;
          resource?: boolean;
          schemaValidationErrors?: "error" | "silent" | "warn";
        },
      ) => {
        if (legacy && (generateModel || outputDir)) {
          console.error(
            `can't specify --legacy with --generate-model or --output-dir`,
          );
          process.exit(2);
        }
        if ((generateResource || legacy) === generateModel) {
          console.error(`must specify --resource or --model`);
          process.exit(2);
        }
        if (!input.length === !download) {
          console.error(`must pass input files or pass --download`);
          process.exit(2);
        }
        if (outputDir && outputFile) {
          console.error(`can't specify --output-file with --output-dir`);
          process.exit(2);
        }
        if (outputDir) {
          await mkdir(outputDir, { recursive: true });
        }

        const paths = await collectInputs(input);

        if (outputFile && !legacy && (download || input.length > 1)) {
          console.error(`option --output-file not valid with multiple inputs`);
          process.exit(2);
        }

        let schemas: AsyncIterable<ResourceTypeSchema & { $id: string }>;
        if (download) {
          schemas = downloadAwsResourceSchemas({
            url: typeof download === "string" ? download : undefined,
          });
        } else {
          schemas = readSchemas(paths);
        }

        if (legacy) {
          if (!outputFile) {
            console.error(`must specify --output-file with --legacy`);
            process.exit(2);
          }
          await legacyGenerate(schemas, {
            outputFile,
            ignoreBrokenRefs,
            validationProblemLevel: schemaValidationErrors,
          });
        } else {
          await generate(schemas, {
            generateResource,
            ignoreBrokenRefs,
            outputDir,
            outputFile,
            useSchemaFileName: inputFileNames,
            validationProblemLevel: schemaValidationErrors,
          });
        }
      },
    );
}

async function generate(
  schemas: AsyncIterable<ResourceTypeSchema & { $id: string }>,
  options: {
    generateResource?: boolean;
    ignoreBrokenRefs?: boolean;
    outputDir?: string;
    outputFile?: string;
    useSchemaFileName?: boolean;
    validationProblemLevel?: "error" | "silent" | "warn";
  },
): Promise<void> {
  const {
    generateResource,
    ignoreBrokenRefs,
    outputDir,
    outputFile,
    useSchemaFileName,
    validationProblemLevel,
  } = options;

  let totalErrorCount = 0;
  let totalWarnCount = 0;
  let count = 0;

  for await (const schema of schemas) {
    ++count;
    delete (schema as any)["$hash"];

    const schemaFile = new SchemaFileNode(schema, schema.$id, {
      ignoreBrokenRefs,
      validationProblemLevel,
    });

    const [errorCount, warnCount] = reportProblems(
      schema.$id,
      schemaFile.problems,
    );
    totalErrorCount += errorCount;
    totalWarnCount += warnCount;

    if (errorCount === 0) {
      const statements: ts.Statement[] = [];

      if (generateResource) {
        statements.push(...generateResourceImports());
        statements.push(generateResourcePropsType(schemaFile));

        if (hasAttributes(schemaFile)) {
          statements.push(generateResourceAttributesType(schemaFile));
        }
        statements.push(...generateDefinitionTypes(schemaFile, "resource"));
        statements.push(generateResourceClass(schemaFile));
      } else {
        statements.push(generateModelType(schemaFile));
        statements.push(...generateDefinitionTypes(schemaFile, "model"));
      }

      let outputPath: string;
      if (outputDir) {
        if (outputFile) {
          throw new Error(`must provide either outputDir or outputFile`);
        }
        const outputBasename = useSchemaFileName
          ? basename(schemaFile.fileName, extname(schemaFile.fileName))
          : schemaFile.typeName.replace(/::/g, "-");

        outputPath = join(outputDir, outputBasename + ".ts");
      } else if (outputFile) {
        outputPath = outputFile;
      } else {
        throw new Error(`must provide either outputDir or outputFile`);
      }

      await printFile(outputPath, statements);
    }
  }

  console.error(
    `\n\n` +
      (totalErrorCount ? chalk.red("fail") : chalk.green("done")) +
      ` processed ${count} files with ${totalErrorCount} errors and ${totalWarnCount} warnings`,
  );

  if (totalErrorCount) {
    process.exit(1);
  }
}

async function legacyGenerate(
  schemas: AsyncIterable<ResourceTypeSchema & { $id: string }>,
  options: {
    ignoreBrokenRefs?: boolean;
    outputFile: string;
    validationProblemLevel?: "error" | "silent" | "warn";
  },
): Promise<void> {
  const { ignoreBrokenRefs, outputFile, validationProblemLevel } = options;

  let count = 0;
  let totalErrorCount = 0;
  let totalWarnCount = 0;

  const attributeMap: Record<string, ts.TypeAliasDeclaration> = {};
  const attributeNameMap: Record<string, string[]> = {};
  const resourceMap: Record<string, ts.TypeAliasDeclaration> = {};
  const statements: ts.Statement[] = [];

  for await (const schema of schemas) {
    ++count;
    delete (schema as any)["$hash"];

    const schemaFile = new SchemaFileNode(schema, schema.$id, {
      ignoreBrokenRefs,
      validationProblemLevel,
    });

    const [errorCount, warnCount] = reportProblems(
      schema.$id,
      schemaFile.problems,
    );
    totalErrorCount += errorCount;
    totalWarnCount += warnCount;

    if (errorCount === 0) {
      const result = generateLegacyResources(schemaFile);
      statements.push(...result.statements);
      resourceMap[schema.typeName] = result.propsType;
      attributeNameMap[schema.typeName] = result.attributeNames;

      if (result.attribsType) {
        attributeMap[schema.typeName] = result.attribsType;
      }
    }
  }

  if (totalErrorCount > 0) {
    console.error(
      `\n\n` +
        chalk.red("fail") +
        ` processed ${count} files with ${totalErrorCount} errors and ${totalWarnCount} warnings`,
    );
    process.exit(1);
  }

  statements.push(generateLegacyResourceTypeMap(resourceMap));
  statements.push(generateLegacyAttributeTypeMap(attributeMap));
  statements.push(generateLegacyResourceTypeConstant(Object.keys(resourceMap)));
  statements.push(generateLegacyResourceTypeConstantType());
  statements.push(generateLegacyAttributeTypeUtility());
  statements.push(generateLegacyAttributeNameMapType());
  statements.push(generateLegacyAttributeNameConstantType());
  statements.push(generateLegacyAttributeNameConstant(attributeNameMap));

  await printFile(outputFile, statements);

  console.error(
    `\n\n` +
      chalk.green("done") +
      ` processed ${count} files with ${totalErrorCount} errors and ${totalWarnCount} warnings`,
  );
}

async function collectInputs(paths: string[]): Promise<string[]> {
  const input = paths.slice();
  const output: string[] = [];

  for (;;) {
    const path = input.shift();
    if (!path) {
      break;
    }
    try {
      const stats = await stat(path);
      if (stats.isDirectory()) {
        const files = await readdir(path);
        input.unshift(...files.map((x) => join(path, x)));
        continue;
      } else if (stats.isFile()) {
        output.push(path);
      }
    } catch (err: any) {
      if (err?.code === "ENOENT") {
        console.error(`ERROR: path not found: "${path}"`);
        process.exit(2);
      }
      throw err;
    }
  }

  return output;
}

function generateLegacyResources(schemaFile: SchemaFileNode): {
  attribsType?: ts.TypeAliasDeclaration;
  attributeNames: string[];
  propsType: ts.TypeAliasDeclaration;
  statements: ts.Statement[];
} {
  const statements: ts.Statement[] = [];

  const propsType = generateResourcePropsType(schemaFile, {
    legacySuffix: true,
    prefixNames: true,
  });
  statements.push(propsType);

  const attributeNames = getAttributeNames(schemaFile);
  let attribsType: ts.TypeAliasDeclaration | undefined;

  if (hasAttributes(schemaFile)) {
    attribsType = generateResourceAttributesType(schemaFile, {
      prefixNames: true,
    });
    statements.push(attribsType);
  }

  const defTypes = generateDefinitionTypes(schemaFile, "resource", {
    prefixNames: true,
  });
  statements.push(...defTypes);

  return {
    attribsType,
    attributeNames,
    propsType,
    statements,
  };
}

async function* readSchemas(
  paths: string[],
): AsyncGenerator<ResourceTypeSchema & { $id: string }> {
  for (const path of paths) {
    const schema = JSON.parse(await readFile(path, "utf8"));
    schema.$id = path;
    yield schema;
  }
}

type Problem = {
  level: "error" | "warn";
  message: string;
  node?: NodeBase;
  path?: string;
};

function reportProblems(
  fileName: string,
  problems: Problem[],
): [number, number] {
  if (!problems.length) {
    return [0, 0];
  }

  let errorCount = 0;
  let warnCount = 0;

  for (const problem of problems) {
    switch (problem.level) {
      case "error":
        ++errorCount;
        break;
      case "warn":
        ++warnCount;
        break;
    }
  }

  console.error(
    "\n" +
      chalk.underline(chalk.whiteBright(fileName)) +
      ` (${errorCount} errors, ${warnCount} warnings)`,
  );

  for (const problem of problems) {
    let message: string;

    if (problem.level === "error") {
      message = chalk.red("error ");
    } else if (problem.level === "warn") {
      message = chalk.yellow("warn  ");
    } else {
      message = "";
    }

    const path = problem.node?.path ?? problem.path;
    if (path) {
      message += chalk.gray(path) + " ";
    }

    message += problem.message;
    console.error(message);
  }

  return [errorCount, warnCount];
}

async function printFile(
  outputPath: string,
  statements: ts.Statement[],
): Promise<void> {
  const printer = ts.createPrinter();

  const output = printer.printFile(
    ts.factory.createSourceFile(
      statements,
      ts.factory.createToken(ts.SyntaxKind.EndOfFileToken),
      ts.NodeFlags.None,
    ),
  );

  await writeFile(
    outputPath,
    await format(output, {
      filepath: outputPath,
    }),
  );
}
