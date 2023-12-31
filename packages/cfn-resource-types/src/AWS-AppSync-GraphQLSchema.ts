import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::AppSync::GraphQLSchema
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-graphqlschema.html}
 */
export type AppSyncGraphQLSchemaProperties = {
  ApiId: string;
  Definition?: string;
  DefinitionS3Location?: string;
};
/**
 * Attribute type definition for `AWS::AppSync::GraphQLSchema`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-graphqlschema.html#aws-resource-appsync-graphqlschema-return-values}
 */
export type AppSyncGraphQLSchemaAttributes = {
  Id: string;
};
/**
 * Resource Type definition for AWS::AppSync::GraphQLSchema
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-graphqlschema.html}
 */
export class AppSyncGraphQLSchema extends $Resource<
  "AWS::AppSync::GraphQLSchema",
  AppSyncGraphQLSchemaProperties,
  AppSyncGraphQLSchemaAttributes
> {
  public static readonly Type = "AWS::AppSync::GraphQLSchema";
  constructor(
    logicalId: string,
    properties: AppSyncGraphQLSchemaProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, AppSyncGraphQLSchema.Type, properties, options);
  }
}
