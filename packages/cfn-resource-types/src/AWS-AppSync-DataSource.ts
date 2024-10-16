import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::AppSync::DataSource
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-datasource.html}
 */
export type AppSyncDataSourceProperties = {
  /**
   * Unique AWS AppSync GraphQL API identifier where this data source will be created.
   */
  ApiId: string;
  /**
   * The description of the data source.
   */
  Description?: string;
  /**
   * AWS Region and TableName for an Amazon DynamoDB table in your account.
   */
  DynamoDBConfig?: DynamoDBConfig;
  /**
     * AWS Region and Endpoints for an Amazon OpenSearch Service domain in your account.
    As of September 2021, Amazon Elasticsearch Service is Amazon OpenSearch Service. This property is deprecated. For new data sources, use OpenSearchServiceConfig to specify an OpenSearch Service data source.
     */
  ElasticsearchConfig?: ElasticsearchConfig;
  /**
   * ARN for the EventBridge bus.
   */
  EventBridgeConfig?: EventBridgeConfig;
  /**
   * Endpoints for an HTTP data source.
   */
  HttpConfig?: HttpConfig;
  /**
   * An ARN of a Lambda function in valid ARN format. This can be the ARN of a Lambda function that exists in the current account or in another account.
   */
  LambdaConfig?: LambdaConfig;
  MetricsConfig?: "DISABLED" | "ENABLED";
  /**
   * Friendly name for you to identify your AppSync data source after creation.
   */
  Name: string;
  /**
   * AWS Region and Endpoints for an Amazon OpenSearch Service domain in your account.
   */
  OpenSearchServiceConfig?: OpenSearchServiceConfig;
  /**
   * Relational Database configuration of the relational database data source.
   */
  RelationalDatabaseConfig?: RelationalDatabaseConfig;
  /**
   * The AWS Identity and Access Management service role ARN for the data source. The system assumes this role when accessing the data source.
   */
  ServiceRoleArn?: string;
  /**
   * The type of the data source.
   */
  Type: string;
};
/**
 * Attribute type definition for `AWS::AppSync::DataSource`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-datasource.html#aws-resource-appsync-datasource-return-values}
 */
export type AppSyncDataSourceAttributes = {
  /**
   * The Amazon Resource Name (ARN) of the API key, such as arn:aws:appsync:us-east-1:123456789012:apis/graphqlapiid/datasources/datasourcename.
   */
  DataSourceArn: string;
};
/**
 * Type definition for `AWS::AppSync::DataSource.AuthorizationConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appsync-datasource-authorizationconfig.html}
 */
export type AuthorizationConfig = {
  /**
   * The authorization type that the HTTP endpoint requires.
   */
  AuthorizationType: string;
  /**
   * The AWS Identity and Access Management settings.
   */
  AwsIamConfig?: AwsIamConfig;
};
/**
 * Type definition for `AWS::AppSync::DataSource.AwsIamConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appsync-datasource-awsiamconfig.html}
 */
export type AwsIamConfig = {
  /**
   * The signing Region for AWS Identity and Access Management authorization.
   */
  SigningRegion?: string;
  /**
   * The signing service name for AWS Identity and Access Management authorization.
   */
  SigningServiceName?: string;
};
/**
 * Type definition for `AWS::AppSync::DataSource.DeltaSyncConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appsync-datasource-deltasyncconfig.html}
 */
export type DeltaSyncConfig = {
  /**
   * The number of minutes that an Item is stored in the data source.
   */
  BaseTableTTL: string;
  /**
   * The Delta Sync table name.
   */
  DeltaSyncTableName: string;
  /**
   * The number of minutes that a Delta Sync log entry is stored in the Delta Sync table.
   */
  DeltaSyncTableTTL: string;
};
/**
 * Type definition for `AWS::AppSync::DataSource.DynamoDBConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appsync-datasource-dynamodbconfig.html}
 */
export type DynamoDBConfig = {
  /**
   * The AWS Region.
   */
  AwsRegion: string;
  /**
   * The DeltaSyncConfig for a versioned datasource.
   */
  DeltaSyncConfig?: DeltaSyncConfig;
  /**
   * The table name.
   */
  TableName: string;
  /**
   * Set to TRUE to use AWS Identity and Access Management with this data source.
   */
  UseCallerCredentials?: boolean;
  /**
   * Set to TRUE to use Conflict Detection and Resolution with this data source.
   */
  Versioned?: boolean;
};
/**
 * Type definition for `AWS::AppSync::DataSource.ElasticsearchConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appsync-datasource-elasticsearchconfig.html}
 */
export type ElasticsearchConfig = {
  /**
   * The AWS Region.
   */
  AwsRegion: string;
  /**
   * The endpoint.
   */
  Endpoint: string;
};
/**
 * Type definition for `AWS::AppSync::DataSource.EventBridgeConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appsync-datasource-eventbridgeconfig.html}
 */
export type EventBridgeConfig = {
  /**
   * ARN for the EventBridge bus.
   */
  EventBusArn: string;
};
/**
 * Type definition for `AWS::AppSync::DataSource.HttpConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appsync-datasource-httpconfig.html}
 */
export type HttpConfig = {
  /**
   * The authorization configuration.
   */
  AuthorizationConfig?: AuthorizationConfig;
  /**
   * The endpoint.
   */
  Endpoint: string;
};
/**
 * Type definition for `AWS::AppSync::DataSource.LambdaConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appsync-datasource-lambdaconfig.html}
 */
export type LambdaConfig = {
  /**
   * The ARN for the Lambda function.
   */
  LambdaFunctionArn: string;
};
/**
 * Type definition for `AWS::AppSync::DataSource.OpenSearchServiceConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appsync-datasource-opensearchserviceconfig.html}
 */
export type OpenSearchServiceConfig = {
  /**
   * The AWS Region.
   */
  AwsRegion: string;
  /**
   * The endpoint.
   */
  Endpoint: string;
};
/**
 * Type definition for `AWS::AppSync::DataSource.RdsHttpEndpointConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appsync-datasource-rdshttpendpointconfig.html}
 */
export type RdsHttpEndpointConfig = {
  /**
   * AWS Region for RDS HTTP endpoint.
   */
  AwsRegion: string;
  /**
   * The ARN for database credentials stored in AWS Secrets Manager.
   */
  AwsSecretStoreArn: string;
  /**
   * Logical database name.
   */
  DatabaseName?: string;
  /**
   * Amazon RDS cluster Amazon Resource Name (ARN).
   */
  DbClusterIdentifier: string;
  /**
   * Logical schema name.
   */
  Schema?: string;
};
/**
 * Type definition for `AWS::AppSync::DataSource.RelationalDatabaseConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appsync-datasource-relationaldatabaseconfig.html}
 */
export type RelationalDatabaseConfig = {
  /**
   * Information about the Amazon RDS resource.
   */
  RdsHttpEndpointConfig?: RdsHttpEndpointConfig;
  /**
   * The type of relational data source.
   */
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
  constructor(
    logicalId: string,
    properties: AppSyncDataSourceProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, AppSyncDataSource.Type, properties, options);
  }
}
