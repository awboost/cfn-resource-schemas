import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::Lambda::EventSourceMapping
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-eventsourcemapping.html}
 */
export type LambdaEventSourceMappingProperties = {
  /**
   * Specific configuration settings for an MSK event source.
   */
  AmazonManagedKafkaEventSourceConfig?: AmazonManagedKafkaEventSourceConfig;
  /**
   * The maximum number of items to retrieve in a single batch.
   * @min `1`
   * @max `10000`
   */
  BatchSize?: number;
  /**
   * (Streams) If the function returns an error, split the batch in two and retry.
   */
  BisectBatchOnFunctionError?: boolean;
  /**
   * (Streams) An Amazon SQS queue or Amazon SNS topic destination for discarded records.
   */
  DestinationConfig?: DestinationConfig;
  /**
   * Document db event source config.
   */
  DocumentDBEventSourceConfig?: DocumentDBEventSourceConfig;
  /**
   * Disables the event source mapping to pause polling and invocation.
   */
  Enabled?: boolean;
  /**
   * The Amazon Resource Name (ARN) of the event source.
   * @minLength `12`
   * @maxLength `1024`
   * @pattern `arn:(aws[a-zA-Z0-9-]*):([a-zA-Z0-9\-])+:([a-z]{2}(-gov)?-[a-z]+-\d{1})?:(\d{12})?:(.*)`
   */
  EventSourceArn?: string;
  /**
   * The filter criteria to control event filtering.
   */
  FilterCriteria?: FilterCriteria;
  /**
   * The name of the Lambda function.
   * @minLength `1`
   * @maxLength `140`
   * @pattern `(arn:(aws[a-zA-Z-]*)?:lambda:)?([a-z]{2}(-gov)?-[a-z]+-\d{1}:)?(\d{12}:)?(function:)?([a-zA-Z0-9-_]+)(:(\$LATEST|[a-zA-Z0-9-_]+))?`
   */
  FunctionName: string;
  /**
   * (Streams) A list of response types supported by the function.
   */
  FunctionResponseTypes?: "ReportBatchItemFailures"[];
  /**
   * (Streams) The maximum amount of time to gather records before invoking the function, in seconds.
   * @min `0`
   * @max `300`
   */
  MaximumBatchingWindowInSeconds?: number;
  /**
   * (Streams) The maximum age of a record that Lambda sends to a function for processing.
   * @min `-1`
   * @max `604800`
   */
  MaximumRecordAgeInSeconds?: number;
  /**
   * (Streams) The maximum number of times to retry when the function returns an error.
   * @min `-1`
   * @max `10000`
   */
  MaximumRetryAttempts?: number;
  /**
   * (Streams) The number of batches to process from each shard concurrently.
   * @min `1`
   * @max `10`
   */
  ParallelizationFactor?: number;
  /**
   * (ActiveMQ) A list of ActiveMQ queues.
   * @minLength `1`
   * @maxLength `1`
   */
  Queues?: string[];
  /**
   * The scaling configuration for the event source.
   */
  ScalingConfig?: ScalingConfig;
  /**
   * Self-managed event source endpoints.
   */
  SelfManagedEventSource?: SelfManagedEventSource;
  /**
   * Specific configuration settings for a Self-Managed Apache Kafka event source.
   */
  SelfManagedKafkaEventSourceConfig?: SelfManagedKafkaEventSourceConfig;
  /**
   * A list of SourceAccessConfiguration.
   * @minLength `1`
   * @maxLength `22`
   */
  SourceAccessConfigurations?: SourceAccessConfiguration[];
  /**
   * The position in a stream from which to start reading. Required for Amazon Kinesis and Amazon DynamoDB Streams sources.
   * @minLength `6`
   * @maxLength `12`
   * @pattern `(LATEST|TRIM_HORIZON|AT_TIMESTAMP)+`
   */
  StartingPosition?: string;
  /**
   * With StartingPosition set to AT_TIMESTAMP, the time from which to start reading, in Unix time seconds.
   */
  StartingPositionTimestamp?: number;
  /**
   * (Kafka) A list of Kafka topics.
   * @minLength `1`
   * @maxLength `1`
   */
  Topics?: string[];
  /**
   * (Streams) Tumbling window (non-overlapping time window) duration to perform aggregations.
   * @min `0`
   * @max `900`
   */
  TumblingWindowInSeconds?: number;
};
/**
 * Attribute type definition for `AWS::Lambda::EventSourceMapping`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-eventsourcemapping.html#aws-resource-lambda-eventsourcemapping-return-values}
 */
export type LambdaEventSourceMappingAttributes = {
  /**
   * Event Source Mapping Identifier UUID.
   * @minLength `36`
   * @maxLength `36`
   * @pattern `[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}`
   */
  Id: string;
};
/**
 * Type definition for `AWS::Lambda::EventSourceMapping.AmazonManagedKafkaEventSourceConfig`.
 * Specific configuration settings for an MSK event source.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-eventsourcemapping-amazonmanagedkafkaeventsourceconfig.html}
 */
export type AmazonManagedKafkaEventSourceConfig = {
  /**
   * The identifier for the Kafka Consumer Group to join.
   * @minLength `1`
   * @maxLength `200`
   * @pattern `[a-zA-Z0-9-\/*:_+=.@-]*`
   */
  ConsumerGroupId?: string;
};
/**
 * Type definition for `AWS::Lambda::EventSourceMapping.DestinationConfig`.
 * (Streams) An Amazon SQS queue or Amazon SNS topic destination for discarded records.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-eventsourcemapping-destinationconfig.html}
 */
export type DestinationConfig = {
  /**
   * The destination configuration for failed invocations.
   */
  OnFailure?: OnFailure;
};
/**
 * Type definition for `AWS::Lambda::EventSourceMapping.DocumentDBEventSourceConfig`.
 * Document db event source config.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-eventsourcemapping-documentdbeventsourceconfig.html}
 */
export type DocumentDBEventSourceConfig = {
  /**
   * The collection name to connect to.
   * @minLength `1`
   * @maxLength `57`
   */
  CollectionName?: string;
  /**
   * The database name to connect to.
   * @minLength `1`
   * @maxLength `63`
   */
  DatabaseName?: string;
  /**
   * Include full document in change stream response. The default option will only send the changes made to documents to Lambda. If you want the complete document sent to Lambda, set this to UpdateLookup.
   */
  FullDocument?: "UpdateLookup" | "Default";
};
/**
 * Type definition for `AWS::Lambda::EventSourceMapping.Endpoints`.
 * The endpoints used by AWS Lambda to access a self-managed event source.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-eventsourcemapping-endpoints.html}
 */
export type Endpoints = {
  /**
   * A list of Kafka server endpoints.
   * @minLength `1`
   * @maxLength `10`
   */
  KafkaBootstrapServers?: string[];
};
/**
 * Type definition for `AWS::Lambda::EventSourceMapping.Filter`.
 * The filter object that defines parameters for ESM filtering.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-eventsourcemapping-filter.html}
 */
export type Filter = {
  /**
   * The filter pattern that defines which events should be passed for invocations.
   * @minLength `0`
   * @maxLength `4096`
   * @pattern `.*`
   */
  Pattern?: string;
};
/**
 * Type definition for `AWS::Lambda::EventSourceMapping.FilterCriteria`.
 * The filter criteria to control event filtering.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-eventsourcemapping-filtercriteria.html}
 */
export type FilterCriteria = {
  /**
   * List of filters of this FilterCriteria
   * @minLength `1`
   * @maxLength `20`
   */
  Filters?: Filter[];
};
/**
 * Type definition for `AWS::Lambda::EventSourceMapping.OnFailure`.
 * A destination for events that failed processing.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-eventsourcemapping-onfailure.html}
 */
export type OnFailure = {
  /**
   * The Amazon Resource Name (ARN) of the destination resource.
   * @minLength `12`
   * @maxLength `1024`
   * @pattern `arn:(aws[a-zA-Z0-9-]*):([a-zA-Z0-9\-])+:([a-z]{2}(-gov)?-[a-z]+-\d{1})?:(\d{12})?:(.*)`
   */
  Destination?: string;
};
/**
 * Type definition for `AWS::Lambda::EventSourceMapping.ScalingConfig`.
 * The scaling configuration for the event source.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-eventsourcemapping-scalingconfig.html}
 */
export type ScalingConfig = {
  /**
   * The maximum number of concurrent functions that the event source can invoke.
   * @min `2`
   * @max `1000`
   */
  MaximumConcurrency?: number;
};
/**
 * Type definition for `AWS::Lambda::EventSourceMapping.SelfManagedEventSource`.
 * The configuration used by AWS Lambda to access a self-managed event source.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-eventsourcemapping-selfmanagedeventsource.html}
 */
export type SelfManagedEventSource = {
  /**
   * The endpoints for a self-managed event source.
   */
  Endpoints?: Endpoints;
};
/**
 * Type definition for `AWS::Lambda::EventSourceMapping.SelfManagedKafkaEventSourceConfig`.
 * Specific configuration settings for a Self-Managed Apache Kafka event source.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-eventsourcemapping-selfmanagedkafkaeventsourceconfig.html}
 */
export type SelfManagedKafkaEventSourceConfig = {
  /**
   * The identifier for the Kafka Consumer Group to join.
   * @minLength `1`
   * @maxLength `200`
   * @pattern `[a-zA-Z0-9-\/*:_+=.@-]*`
   */
  ConsumerGroupId?: string;
};
/**
 * Type definition for `AWS::Lambda::EventSourceMapping.SourceAccessConfiguration`.
 * The configuration used by AWS Lambda to access event source
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-eventsourcemapping-sourceaccessconfiguration.html}
 */
export type SourceAccessConfiguration = {
  /**
   * The type of source access configuration.
   */
  Type?:
    | "BASIC_AUTH"
    | "VPC_SUBNET"
    | "VPC_SECURITY_GROUP"
    | "SASL_SCRAM_512_AUTH"
    | "SASL_SCRAM_256_AUTH"
    | "VIRTUAL_HOST"
    | "CLIENT_CERTIFICATE_TLS_AUTH"
    | "SERVER_ROOT_CA_CERTIFICATE";
  /**
   * The URI for the source access configuration resource.
   * @minLength `1`
   * @maxLength `200`
   * @pattern `[a-zA-Z0-9-\/*:_+=.@-]*`
   */
  URI?: string;
};
/**
 * Resource Type definition for AWS::Lambda::EventSourceMapping
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-eventsourcemapping.html}
 */
export class LambdaEventSourceMapping extends $Resource<
  "AWS::Lambda::EventSourceMapping",
  LambdaEventSourceMappingProperties,
  LambdaEventSourceMappingAttributes
> {
  public static readonly Type = "AWS::Lambda::EventSourceMapping";
  constructor(
    logicalId: string,
    properties: LambdaEventSourceMappingProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, LambdaEventSourceMapping.Type, properties, options);
  }
}
