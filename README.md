# @awboost/cfn-resource-schemas

Fetch and validate the latest [CloudFormation Resource Schemas](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/resource-type-schemas.html) from AWS.

```typescript
import { fetchResourceSchemas } from "@awboost/cfn-resource-schemas";

// fetchResourceSchemas returns an async generator
for await (const schema of fetchResourceSchemas()) {
  // do something with the schema
}
```

## Function `fetchResourceSchemas`

Get the latest schemas.

```typescript
import { fetchResourceSchemas } from "@awboost/cfn-resource-schemas";
```

```typescript
export async function* fetchResourceSchemas(
  url = "https://schema.cloudformation.us-east-1.amazonaws.com/CloudformationSchema.zip",
  validate = true,
): AsyncGenerator<ResourceTypeSchema>;
```

## Type `ResourceTypeSchema`

Description of a CloudFormation resource.

```typescript
import { ResourceTypeSchema } from "@awboost/cfn-resource-schemas/types";
```
