import { downloadAwsResourceSchemas } from "@awboost/cfn-resource-schemas";
import type { ResourceTypeSchema } from "@awboost/cfn-resource-schemas/types";
import chalk from "chalk";
import type { Command } from "commander";
import { canonicalize } from "json-canonicalize";
import { createHash } from "node:crypto";
import { mkdir, readFile, readdir, unlink, writeFile } from "node:fs/promises";
import { join } from "node:path";
import { format } from "prettier";
import { formatSchemaDiff } from "../internal/diff.js";

type FileChange = {
  type: "added" | "removed" | "updated";
  typeName: string;
  fileName: string;
  changes?: string[];
};

type IntegrityProps = { $hash: string };

export function addDownloadCommand(program: Command): void {
  program
    .command("download")
    .description("download the resource schemas from AWS")
    .argument("<outputDir>", "the folder to write schemas to")
    .option("--changelog <path>", "a file to write a markdown changelog to")
    .option(
      "--exit-code",
      "end with a failing exit code if there are no changes",
    )
    .option(
      "--url <url>",
      "the URL to download from",
      `https://schema.cloudformation.us-east-1.amazonaws.com/CloudformationSchema.zip`,
    )
    .action(downloadAction);
}

async function downloadAction(
  outputDir: string,
  opts: { changelog?: string; exitCode: boolean; url: string },
): Promise<void> {
  await mkdir(outputDir, { recursive: true });
  const existing = new Set(await readdir(outputDir));
  const changes: FileChange[] = [];

  const schemas = withHash(
    downloadAwsResourceSchemas({
      url: opts.url,
    }),
  );

  for await (const newSchema of schemas) {
    const fileName =
      newSchema.typeName.replace(/::/g, "-").toLowerCase() + ".json";

    const filepath = join(outputDir, fileName);
    existing.delete(fileName);

    let changed = false;

    try {
      const oldSchema = JSON.parse(
        await readFile(filepath, "utf8"),
      ) as ResourceTypeSchema & IntegrityProps;

      if (oldSchema.$hash !== newSchema.$hash) {
        console.log(`${chalk.yellow("updated")} ${fileName}`);

        const diff = formatSchemaDiff(oldSchema, newSchema);
        for (const description of diff) {
          console.log(`  - ${description}`);
        }

        changes.push({
          type: "updated",
          fileName,
          typeName: newSchema.typeName,
          changes: diff,
        });
        changed = true;
      }
    } catch (err: any) {
      if (err?.code === "ENOENT") {
        console.log(`${chalk.green("added")} ${fileName}`);

        changes.push({
          type: "added",
          fileName,
          typeName: newSchema.typeName,
        });
        changed = true;
      } else {
        throw err;
      }
    }

    if (changed) {
      const output = await format(canonicalize(newSchema), {
        filepath,
      });
      await writeFile(filepath, output);
    }
  }

  for (const fileName of existing) {
    console.log(`${chalk.red("removed")} ${fileName}`);

    changes.push({
      type: "removed",
      fileName,
      typeName: JSON.parse(await readFile(join(outputDir, fileName), "utf8"))
        .typeName,
    });
    await unlink(join(outputDir, fileName));
  }

  if (!changes.length) {
    console.log(`No changes`);
    process.exit(opts.exitCode ? 1 : 0);
  }

  if (opts.changelog) {
    const sortedChanges = changes
      .slice()
      .sort((a, b) => a.type.localeCompare(b.type));

    let changelog = "";

    for (const change of sortedChanges) {
      changelog += `- ${change.type} \`${change.typeName}\`\n`;

      if (change.changes) {
        for (const fileChange of [...change.changes].sort()) {
          changelog += `  - ${fileChange}\n`;
        }
      }
    }

    await writeFile(opts.changelog, changelog);
  }
}

async function* withHash<T>(
  iterator: AsyncIterable<T>,
): AsyncGenerator<T & IntegrityProps> {
  for await (const item of iterator) {
    // exclude $id from hash calculation if present
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { $id, ...rest } = item as any;
    const hash = createHash("sha1");
    hash.update(canonicalize(rest));

    yield {
      ...item,
      $hash: hash.digest("hex"),
    };
  }
}
