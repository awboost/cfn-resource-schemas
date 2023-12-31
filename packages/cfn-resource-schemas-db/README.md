# @awboost/cfn-resource-schemas-db

A stable source of truth for [CloudFormation Resource Schemas](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/resource-type-schemas.html).

```typescript
import { getResourceSchemas } from "@awboost/cfn-resource-schemas-db";

// returns async generator
for await (const schema of getResourceSchemas()) {
  // do something
}
```
