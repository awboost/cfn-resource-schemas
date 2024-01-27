import JSZip from "jszip";
import { readUrl } from "./internal/readUrl.js";
import { validateResourceTypeSchema } from "./meta.js";
import type { ResourceTypeSchema } from "./types.js";

const DefaultUrl =
  "https://schema.cloudformation.us-east-1.amazonaws.com/CloudformationSchema.zip";

export type DownloadAwsResourceSchemasOptions = {
  skipValidate?: boolean;
  url?: string;
};

export async function* downloadAwsResourceSchemas({
  skipValidate = false,
  url = DefaultUrl,
}: DownloadAwsResourceSchemasOptions): AsyncGenerator<
  ResourceTypeSchema & { $id: string }
> {
  const reader = await readUrl(url);
  const chunks: Buffer[] = [];

  for await (const chunk of reader) {
    chunks.push(chunk);
  }

  const data = Buffer.concat(chunks);
  const zip = await JSZip.loadAsync(data);

  for (const [path, file] of Object.entries(zip.files)) {
    try {
      const schema = JSON.parse(await file.async("text"));
      if (!skipValidate) {
        const result = validateResourceTypeSchema(schema);
        if (!result.ok) {
          throw new Error(
            result.errors
              .map((x) => x.message)
              .filter(Boolean)
              .join(", "),
          );
        }
      }
      schema.$id = path;
      yield schema;
    } catch (cause) {
      throw new Error(`processing error: ${path}`, { cause });
    }
  }
}
