import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource Type definition for AWS::AppSync::GraphQLApi
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-graphqlapi.html}
 */
export type AppSyncGraphQLApiProperties = {
  AdditionalAuthenticationProviders?: AdditionalAuthenticationProvider[];
  ApiType?: string;
  AuthenticationType: string;
  LambdaAuthorizerConfig?: LambdaAuthorizerConfig;
  LogConfig?: LogConfig;
  MergedApiExecutionRoleArn?: string;
  Name: string;
  OpenIDConnectConfig?: OpenIDConnectConfig;
  OwnerContact?: string;
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
  public static readonly AttributeNames = [
    "ApiId" as const,
    "Arn" as const,
    "GraphQLDns" as const,
    "GraphQLUrl" as const,
    "Id" as const,
    "RealtimeDns" as const,
    "RealtimeUrl" as const,
  ];
  constructor(
    logicalId: string,
    properties: AppSyncGraphQLApiProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      AppSyncGraphQLApi.Type,
      properties,
      AppSyncGraphQLApi.AttributeNames,
      options,
    );
  }
}
