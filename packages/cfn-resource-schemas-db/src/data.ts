import type { ResourceTypeSchema } from "@awboost/cfn-resource-schemas/types";
import { readFile, readdir } from "fs/promises";
import { dirname, join, resolve } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const SchemaOutputDir = resolve(__dirname, "../schemas");

export type IntegrityProps = {
  $hash: string;
  $id: string;
};

export async function* getResourceSchemas(): AsyncGenerator<
  ResourceTypeSchema & IntegrityProps
> {
  const specsDir = resolve(__dirname, "../", SchemaOutputDir);
  const files = await readdir(specsDir);

  for (const file of files) {
    if (!file.endsWith(".json")) {
      continue;
    }
    yield JSON.parse(await readFile(join(specsDir, file), "utf8"));
  }
}
