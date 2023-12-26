import JSZip from "jszip";
import { readUrl } from "./internal/readUrl.js";
import { validateResourceTypeSchema } from "./meta.js";
import type { ResourceTypeSchema } from "./types.js";

const DefaultUrl =
  "https://schema.cloudformation.us-east-1.amazonaws.com/CloudformationSchema.zip";

export async function* fetchResourceSchemas(
  url = DefaultUrl,
  validate = true,
): AsyncGenerator<ResourceTypeSchema> {
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
      if (validate) {
        validateResourceTypeSchema(schema);
      }
      yield schema;
    } catch (cause) {
      throw new Error(`processing error: ${path}`, { cause });
    }
  }
}
