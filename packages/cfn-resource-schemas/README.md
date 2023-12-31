# @awboost/cfn-resource-schemas

Fetch and validate the latest [CloudFormation Resource Schemas](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/resource-type-schemas.html) from AWS.

```typescript
import { fetchResourceSchemas } from "@awboost/cfn-resource-schemas";

// fetchResourceSchemas returns an async generator
for await (const schema of downloadAwsResourceSchemas()) {
  // do something with the schema
}
```

## Function `downloadAwsResourceSchemas`

Get the latest schemas.

```typescript
import { downloadAwsResourceSchemas } from "@awboost/cfn-resource-schemas";
```

```typescript
export async function* downloadAwsResourceSchemas({
  skipValidate = false,
  url = "https://schema.cloudformation.us-east-1.amazonaws.com/CloudformationSchema.zip",
}: DownloadAwsResourceSchemasOptions): AsyncGenerator<
  ResourceTypeSchema & { $id: string }
>;
```

## Type `ResourceTypeSchema`

Description of a CloudFormation resource.

```typescript
import { ResourceTypeSchema } from "@awboost/cfn-resource-schemas/types";
```

## Parsed representation

This package also provides a set of node classes to represent schemas, similar to an AST. There are available from the `"@awboost/cfn-resource-schemas/nodes"` module path.

```typescript
import { SchemaFileNode } from "@awboost/cfn-resource-schemas/nodes";
import { readFile } from "node:fs/promises";

const path = "path-to-schema.json";
const schema = JSON.parse(await readFile(path, "utf-8"));
const schemaFile = new SchemaFileNode(schema, path);
```
