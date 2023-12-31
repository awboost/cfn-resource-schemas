# @awboost/cfn-resource-types

Strong types for all AWS CloudFormation Resource Schemas.

```typescript
import { Stack } from "@awboost/cfn-template-builder/stack";
import { Asset } from "@awboost/cfn-template-builder/template/Asset";
import { LambdaFunction } from "@awboost/cfn-resource-types/AWS-Lambda-Function";

const stack = new Stack();

const codeAsset = Asset.fromFile("LambdaCode", "my-code.zip");

const lambda = stack.use(
  new LambdaFunction("MyFunction", {
    // properties have accurate types now
    Code: codeAsset.ref,
    Role: "arn:etc:...:...",
  }),
);
```
