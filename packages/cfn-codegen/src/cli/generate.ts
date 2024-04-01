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
  generateModelType,
  generateResourceAttributesType,
  generateResourceClass,
  generateResourceImports,
  generateResourcePropsType,
  hasAttributes,
} from "../internal/codegen.js";

export function addGenerateCommand(program: Command): void {
  program
    .command("generate")
    .description("generate code for the given schema files")
    .argument("[input...]", "the schema file(s) to generate code for")
    .option("--download [url]", "download the resource schemas from AWS")
    .option(
      "--input-file-names",
      "name the output files according to the input file names",
    )
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
          inputFileNames,
          model: generateModel,
          outputDir,
          outputFile,
          resource: generateResource,
          schemaValidationErrors,
        }: {
          download?: string | boolean;
          inputFileNames?: boolean;
          model?: boolean;
          outputDir?: string;
          outputFile?: string;
          resource?: boolean;
          schemaValidationErrors?: "error" | "silent" | "warn";
        },
      ) => {
        if (generateResource === generateModel) {
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

        if (outputFile && (download || input.length > 1)) {
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

        let totalErrorCount = 0;
        let totalWarnCount = 0;

        for await (const schema of schemas) {
          delete (schema as any)["$hash"];

          const schemaFile = new SchemaFileNode(schema, schema.$id, {
            validationProblemLevel: schemaValidationErrors,
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
              statements.push(
                ...generateDefinitionTypes(schemaFile, "resource"),
              );
              statements.push(generateResourceClass(schemaFile));
            } else {
              statements.push(generateModelType(schemaFile));
              statements.push(...generateDefinitionTypes(schemaFile, "model"));
            }

            const printer = ts.createPrinter();

            const output = printer.printFile(
              ts.factory.createSourceFile(
                statements,
                ts.factory.createToken(ts.SyntaxKind.EndOfFileToken),
                ts.NodeFlags.None,
              ),
            );

            const outputBasename = inputFileNames
              ? basename(schema.$id, extname(schema.$id))
              : schemaFile.typeName.replace(/::/g, "-");

            // we can bang this because we checked the options
            const outputPath =
              outputFile ?? join(outputDir!, outputBasename + ".ts");

            await writeFile(
              outputPath,
              await format(output, { filepath: outputPath }),
            );
          }
        }

        console.error(
          `\n\n` +
            (totalErrorCount ? chalk.red("fail") : chalk.green("done")) +
            ` processed ${paths.length} files with ${totalErrorCount} errors and ${totalWarnCount} warnings`,
        );

        if (totalErrorCount) {
          process.exit(1);
        }
      },
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
