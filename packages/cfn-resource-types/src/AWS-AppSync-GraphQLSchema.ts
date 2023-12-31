import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
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
  public static readonly AttributeNames = ["Id" as const];
  constructor(
    logicalId: string,
    properties: AppSyncGraphQLSchemaProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      AppSyncGraphQLSchema.Type,
      properties,
      AppSyncGraphQLSchema.AttributeNames,
      options,
    );
  }
}
