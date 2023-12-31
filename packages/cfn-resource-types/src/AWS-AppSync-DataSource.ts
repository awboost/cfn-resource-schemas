import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource Type definition for AWS::AppSync::DataSource
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-datasource.html}
 */
export type AppSyncDataSourceProperties = {
  ApiId: string;
  Description?: string;
  DynamoDBConfig?: DynamoDBConfig;
  ElasticsearchConfig?: ElasticsearchConfig;
  EventBridgeConfig?: EventBridgeConfig;
  HttpConfig?: HttpConfig;
  LambdaConfig?: LambdaConfig;
  Name: string;
  OpenSearchServiceConfig?: OpenSearchServiceConfig;
  RelationalDatabaseConfig?: RelationalDatabaseConfig;
  ServiceRoleArn?: string;
  Type: string;
};
/**
 * Attribute type definition for `AWS::AppSync::DataSource`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-datasource.html#aws-resource-appsync-datasource-return-values}
 */
export type AppSyncDataSourceAttributes = {
  DataSourceArn: string;
  Id: string;
};
/**
 * Type definition for `AWS::AppSync::DataSource.AuthorizationConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appsync-datasource-authorizationconfig.html}
 */
export type AuthorizationConfig = {
  AuthorizationType: string;
  AwsIamConfig?: AwsIamConfig;
};
/**
 * Type definition for `AWS::AppSync::DataSource.AwsIamConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appsync-datasource-awsiamconfig.html}
 */
export type AwsIamConfig = {
  SigningRegion?: string;
  SigningServiceName?: string;
};
/**
 * Type definition for `AWS::AppSync::DataSource.DeltaSyncConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appsync-datasource-deltasyncconfig.html}
 */
export type DeltaSyncConfig = {
  BaseTableTTL: string;
  DeltaSyncTableName: string;
  DeltaSyncTableTTL: string;
};
/**
 * Type definition for `AWS::AppSync::DataSource.DynamoDBConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appsync-datasource-dynamodbconfig.html}
 */
export type DynamoDBConfig = {
  AwsRegion: string;
  DeltaSyncConfig?: DeltaSyncConfig;
  TableName: string;
  UseCallerCredentials?: boolean;
  Versioned?: boolean;
};
/**
 * Type definition for `AWS::AppSync::DataSource.ElasticsearchConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appsync-datasource-elasticsearchconfig.html}
 */
export type ElasticsearchConfig = {
  AwsRegion: string;
  Endpoint: string;
};
/**
 * Type definition for `AWS::AppSync::DataSource.EventBridgeConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appsync-datasource-eventbridgeconfig.html}
 */
export type EventBridgeConfig = {
  EventBusArn: string;
};
/**
 * Type definition for `AWS::AppSync::DataSource.HttpConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appsync-datasource-httpconfig.html}
 */
export type HttpConfig = {
  AuthorizationConfig?: AuthorizationConfig;
  Endpoint: string;
};
/**
 * Type definition for `AWS::AppSync::DataSource.LambdaConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appsync-datasource-lambdaconfig.html}
 */
export type LambdaConfig = {
  LambdaFunctionArn: string;
};
/**
 * Type definition for `AWS::AppSync::DataSource.OpenSearchServiceConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appsync-datasource-opensearchserviceconfig.html}
 */
export type OpenSearchServiceConfig = {
  AwsRegion: string;
  Endpoint: string;
};
/**
 * Type definition for `AWS::AppSync::DataSource.RdsHttpEndpointConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appsync-datasource-rdshttpendpointconfig.html}
 */
export type RdsHttpEndpointConfig = {
  AwsRegion: string;
  AwsSecretStoreArn: string;
  DatabaseName?: string;
  DbClusterIdentifier: string;
  Schema?: string;
};
/**
 * Type definition for `AWS::AppSync::DataSource.RelationalDatabaseConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appsync-datasource-relationaldatabaseconfig.html}
 */
export type RelationalDatabaseConfig = {
  RdsHttpEndpointConfig?: RdsHttpEndpointConfig;
  RelationalDatabaseSourceType: string;
};
/**
 * Resource Type definition for AWS::AppSync::DataSource
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-datasource.html}
 */
export class AppSyncDataSource extends $Resource<
  "AWS::AppSync::DataSource",
  AppSyncDataSourceProperties,
  AppSyncDataSourceAttributes
> {
  public static readonly Type = "AWS::AppSync::DataSource";
  public static readonly AttributeNames = [
    "DataSourceArn" as const,
    "Id" as const,
  ];
  constructor(
    logicalId: string,
    properties: AppSyncDataSourceProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      AppSyncDataSource.Type,
      properties,
      AppSyncDataSource.AttributeNames,
      options,
    );
  }
}
