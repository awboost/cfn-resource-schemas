import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::AppSync::GraphQLApi
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-graphqlapi.html}
 */
export type AppSyncGraphQLApiProperties = {
  AdditionalAuthenticationProviders?: AdditionalAuthenticationProvider[];
  ApiType?: string;
  AuthenticationType: string;
  IntrospectionConfig?: string;
  LambdaAuthorizerConfig?: LambdaAuthorizerConfig;
  LogConfig?: LogConfig;
  MergedApiExecutionRoleArn?: string;
  Name: string;
  OpenIDConnectConfig?: OpenIDConnectConfig;
  OwnerContact?: string;
  QueryDepthLimit?: number;
  ResolverCountLimit?: number;
  Tags?: Tag[];
  UserPoolConfig?: UserPoolConfig;
  Visibility?: string;
  XrayEnabled?: boolean;
};
/**
 * Attribute type definition for `AWS::AppSync::GraphQLApi`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-graphqlapi.html#aws-resource-appsync-graphqlapi-return-values}
 */
export type AppSyncGraphQLApiAttributes = {
  ApiId: string;
  Arn: string;
  GraphQLDns: string;
  GraphQLEndpointArn: string;
  GraphQLUrl: string;
  Id: string;
  RealtimeDns: string;
  RealtimeUrl: string;
};
/**
 * Type definition for `AWS::AppSync::GraphQLApi.AdditionalAuthenticationProvider`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appsync-graphqlapi-additionalauthenticationprovider.html}
 */
export type AdditionalAuthenticationProvider = {
  AuthenticationType: string;
  LambdaAuthorizerConfig?: LambdaAuthorizerConfig;
  OpenIDConnectConfig?: OpenIDConnectConfig;
  UserPoolConfig?: CognitoUserPoolConfig;
};
/**
 * Type definition for `AWS::AppSync::GraphQLApi.CognitoUserPoolConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appsync-graphqlapi-cognitouserpoolconfig.html}
 */
export type CognitoUserPoolConfig = {
  AppIdClientRegex?: string;
  AwsRegion?: string;
  UserPoolId?: string;
};
/**
 * Type definition for `AWS::AppSync::GraphQLApi.LambdaAuthorizerConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appsync-graphqlapi-lambdaauthorizerconfig.html}
 */
export type LambdaAuthorizerConfig = {
  AuthorizerResultTtlInSeconds?: number;
  AuthorizerUri?: string;
  IdentityValidationExpression?: string;
};
/**
 * Type definition for `AWS::AppSync::GraphQLApi.LogConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appsync-graphqlapi-logconfig.html}
 */
export type LogConfig = {
  CloudWatchLogsRoleArn?: string;
  ExcludeVerboseContent?: boolean;
  FieldLogLevel?: string;
};
/**
 * Type definition for `AWS::AppSync::GraphQLApi.OpenIDConnectConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appsync-graphqlapi-openidconnectconfig.html}
 */
export type OpenIDConnectConfig = {
  AuthTTL?: number;
  ClientId?: string;
  IatTTL?: number;
  Issuer?: string;
};
/**
 * Type definition for `AWS::AppSync::GraphQLApi.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appsync-graphqlapi-tag.html}
 */
export type Tag = {
  Key: string;
  Value: string;
};
/**
 * Type definition for `AWS::AppSync::GraphQLApi.UserPoolConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appsync-graphqlapi-userpoolconfig.html}
 */
export type UserPoolConfig = {
  AppIdClientRegex?: string;
  AwsRegion?: string;
  DefaultAction?: string;
  UserPoolId?: string;
};
/**
 * Resource Type definition for AWS::AppSync::GraphQLApi
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-graphqlapi.html}
 */
export class AppSyncGraphQLApi extends $Resource<
  "AWS::AppSync::GraphQLApi",
  AppSyncGraphQLApiProperties,
  AppSyncGraphQLApiAttributes
> {
  public static readonly Type = "AWS::AppSync::GraphQLApi";
  constructor(
    logicalId: string,
    properties: AppSyncGraphQLApiProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, AppSyncGraphQLApi.Type, properties, options);
  }
}
