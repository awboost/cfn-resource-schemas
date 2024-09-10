# CloudFormation Resource Schemas

Tools and libraries for working with [AWS CloudFormation Resource Schemas](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/resource-type-schemas.html).

This is a monorepo containing the following packages:

- [@awboost/cfn-codgen](packages/cfn-codegen/README.md): CLI tool to download schemas and generate code
- [@awboost/cfn-resource-schemas](packages/cfn-resource-schemas/README.md): Fetch and validate the latest CloudFormation Resource Schemas from AWS
- [@awboost/cfn-resource-schemas-db](packages/cfn-resource-schemas-db/README.md): A stable source of truth for CloudFormation Resource Schemas
- [@awboost/cfn-resource-types](packages/cfn-resource-types/README.md): Strong types for all CloudFormation Resource Schemas
- [@awboost/cfntypes](packages/cfntypes/README.md): Strong types for all CloudFormation Resource Schemas (legacy format)
