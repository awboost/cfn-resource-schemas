import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::IoT::TopicRule
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-topicrule.html}
 */
export type IoTTopicRuleProperties = {
  RuleName?: string;
  Tags?: Tag[];
  TopicRulePayload: TopicRulePayload;
};
/**
 * Attribute type definition for `AWS::IoT::TopicRule`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-topicrule.html#aws-resource-iot-topicrule-return-values}
 */
export type IoTTopicRuleAttributes = {
  Arn: string;
};
/**
 * Type definition for `AWS::IoT::TopicRule.Action`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-action.html}
 */
export type Action = {
  CloudwatchAlarm?: CloudwatchAlarmAction;
  CloudwatchLogs?: CloudwatchLogsAction;
  CloudwatchMetric?: CloudwatchMetricAction;
  DynamoDB?: DynamoDBAction;
  DynamoDBv2?: DynamoDBv2Action;
  Elasticsearch?: ElasticsearchAction;
  Firehose?: FirehoseAction;
  Http?: HttpAction;
  IotAnalytics?: IotAnalyticsAction;
  IotEvents?: IotEventsAction;
  IotSiteWise?: IotSiteWiseAction;
  Kafka?: KafkaAction;
  Kinesis?: KinesisAction;
  Lambda?: LambdaAction;
  Location?: LocationAction;
  OpenSearch?: OpenSearchAction;
  Republish?: RepublishAction;
  S3?: S3Action;
  Sns?: SnsAction;
  Sqs?: SqsAction;
  StepFunctions?: StepFunctionsAction;
  Timestream?: TimestreamAction;
};
/**
 * Type definition for `AWS::IoT::TopicRule.AssetPropertyTimestamp`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-assetpropertytimestamp.html}
 */
export type AssetPropertyTimestamp = {
  OffsetInNanos?: string;
  TimeInSeconds: string;
};
/**
 * Type definition for `AWS::IoT::TopicRule.AssetPropertyValue`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-assetpropertyvalue.html}
 */
export type AssetPropertyValue = {
  Quality?: string;
  Timestamp: AssetPropertyTimestamp;
  Value: AssetPropertyVariant;
};
/**
 * Type definition for `AWS::IoT::TopicRule.AssetPropertyVariant`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-assetpropertyvariant.html}
 */
export type AssetPropertyVariant = {
  BooleanValue?: string;
  DoubleValue?: string;
  IntegerValue?: string;
  StringValue?: string;
};
/**
 * Type definition for `AWS::IoT::TopicRule.BatchConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-batchconfig.html}
 */
export type BatchConfig = {
  MaxBatchOpenMs?: number;
  MaxBatchSize?: number;
  MaxBatchSizeBytes?: number;
};
/**
 * Type definition for `AWS::IoT::TopicRule.CannedAccessControlList`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-cannedaccesscontrollist.html}
 */
export type CannedAccessControlList =
  | "private"
  | "public-read"
  | "public-read-write"
  | "aws-exec-read"
  | "authenticated-read"
  | "bucket-owner-read"
  | "bucket-owner-full-control"
  | "log-delivery-write";
/**
 * Type definition for `AWS::IoT::TopicRule.CloudwatchAlarmAction`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-cloudwatchalarmaction.html}
 */
export type CloudwatchAlarmAction = {
  AlarmName: string;
  RoleArn: string;
  StateReason: string;
  StateValue: string;
};
/**
 * Type definition for `AWS::IoT::TopicRule.CloudwatchLogsAction`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-cloudwatchlogsaction.html}
 */
export type CloudwatchLogsAction = {
  BatchMode?: boolean;
  LogGroupName: string;
  RoleArn: string;
};
/**
 * Type definition for `AWS::IoT::TopicRule.CloudwatchMetricAction`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-cloudwatchmetricaction.html}
 */
export type CloudwatchMetricAction = {
  MetricName: string;
  MetricNamespace: string;
  MetricTimestamp?: string;
  MetricUnit: string;
  MetricValue: string;
  RoleArn: string;
};
/**
 * Type definition for `AWS::IoT::TopicRule.DynamoDBAction`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-dynamodbaction.html}
 */
export type DynamoDBAction = {
  HashKeyField: string;
  HashKeyType?: string;
  HashKeyValue: string;
  PayloadField?: string;
  RangeKeyField?: string;
  RangeKeyType?: string;
  RangeKeyValue?: string;
  RoleArn: string;
  TableName: string;
};
/**
 * Type definition for `AWS::IoT::TopicRule.DynamoDBv2Action`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-dynamodbv2action.html}
 */
export type DynamoDBv2Action = {
  PutItem?: PutItemInput;
  RoleArn?: string;
};
/**
 * Type definition for `AWS::IoT::TopicRule.ElasticsearchAction`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-elasticsearchaction.html}
 */
export type ElasticsearchAction = {
  Endpoint: string;
  Id: string;
  Index: string;
  RoleArn: string;
  Type: string;
};
/**
 * Type definition for `AWS::IoT::TopicRule.FirehoseAction`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-firehoseaction.html}
 */
export type FirehoseAction = {
  BatchMode?: boolean;
  DeliveryStreamName: string;
  RoleArn: string;
  Separator?: string;
};
/**
 * Type definition for `AWS::IoT::TopicRule.HttpAction`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-httpaction.html}
 */
export type HttpAction = {
  Auth?: HttpAuthorization;
  BatchConfig?: BatchConfig;
  ConfirmationUrl?: string;
  EnableBatching?: boolean;
  Headers?: HttpActionHeader[];
  Url: string;
};
/**
 * Type definition for `AWS::IoT::TopicRule.HttpActionHeader`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-httpactionheader.html}
 */
export type HttpActionHeader = {
  Key: string;
  Value: string;
};
/**
 * Type definition for `AWS::IoT::TopicRule.HttpAuthorization`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-httpauthorization.html}
 */
export type HttpAuthorization = {
  Sigv4?: SigV4Authorization;
};
/**
 * Type definition for `AWS::IoT::TopicRule.IotAnalyticsAction`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-iotanalyticsaction.html}
 */
export type IotAnalyticsAction = {
  BatchMode?: boolean;
  ChannelName: string;
  RoleArn: string;
};
/**
 * Type definition for `AWS::IoT::TopicRule.IotEventsAction`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-ioteventsaction.html}
 */
export type IotEventsAction = {
  BatchMode?: boolean;
  InputName: string;
  MessageId?: string;
  RoleArn: string;
};
/**
 * Type definition for `AWS::IoT::TopicRule.IotSiteWiseAction`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-iotsitewiseaction.html}
 */
export type IotSiteWiseAction = {
  PutAssetPropertyValueEntries: PutAssetPropertyValueEntry[];
  RoleArn: string;
};
/**
 * Type definition for `AWS::IoT::TopicRule.KafkaAction`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-kafkaaction.html}
 */
export type KafkaAction = {
  ClientProperties: Record<string, string>;
  DestinationArn: string;
  Headers?: KafkaActionHeader[];
  Key?: string;
  Partition?: string;
  Topic: string;
};
/**
 * Type definition for `AWS::IoT::TopicRule.KafkaActionHeader`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-kafkaactionheader.html}
 */
export type KafkaActionHeader = {
  Key: string;
  Value: string;
};
/**
 * Type definition for `AWS::IoT::TopicRule.KinesisAction`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-kinesisaction.html}
 */
export type KinesisAction = {
  PartitionKey?: string;
  RoleArn: string;
  StreamName: string;
};
/**
 * Type definition for `AWS::IoT::TopicRule.LambdaAction`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-lambdaaction.html}
 */
export type LambdaAction = {
  FunctionArn?: string;
};
/**
 * Type definition for `AWS::IoT::TopicRule.LocationAction`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-locationaction.html}
 */
export type LocationAction = {
  DeviceId: string;
  Latitude: string;
  Longitude: string;
  RoleArn: string;
  Timestamp?: Timestamp;
  TrackerName: string;
};
/**
 * Type definition for `AWS::IoT::TopicRule.OpenSearchAction`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-opensearchaction.html}
 */
export type OpenSearchAction = {
  Endpoint: string;
  Id: string;
  Index: string;
  RoleArn: string;
  Type: string;
};
/**
 * Type definition for `AWS::IoT::TopicRule.PutAssetPropertyValueEntry`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-putassetpropertyvalueentry.html}
 */
export type PutAssetPropertyValueEntry = {
  AssetId?: string;
  EntryId?: string;
  PropertyAlias?: string;
  PropertyId?: string;
  PropertyValues: AssetPropertyValue[];
};
/**
 * Type definition for `AWS::IoT::TopicRule.PutItemInput`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-putiteminput.html}
 */
export type PutItemInput = {
  TableName: string;
};
/**
 * Type definition for `AWS::IoT::TopicRule.RepublishAction`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-republishaction.html}
 */
export type RepublishAction = {
  Headers?: RepublishActionHeaders;
  Qos?: number;
  RoleArn: string;
  Topic: string;
};
/**
 * Type definition for `AWS::IoT::TopicRule.RepublishActionHeaders`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-republishactionheaders.html}
 */
export type RepublishActionHeaders = {
  /**
   * @minLength `0`
   * @maxLength `1024`
   */
  ContentType?: string;
  /**
   * @minLength `0`
   * @maxLength `1024`
   */
  CorrelationData?: string;
  /**
   * @minLength `0`
   * @maxLength `1024`
   */
  MessageExpiry?: string;
  /**
   * @minLength `0`
   * @maxLength `1024`
   */
  PayloadFormatIndicator?: string;
  /**
   * @minLength `0`
   * @maxLength `1024`
   */
  ResponseTopic?: string;
  /**
   * @minLength `1`
   * @maxLength `100`
   */
  UserProperties?: UserProperty[];
};
/**
 * Type definition for `AWS::IoT::TopicRule.S3Action`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-s3action.html}
 */
export type S3Action = {
  BucketName: string;
  CannedAcl?: CannedAccessControlList;
  Key: string;
  RoleArn: string;
};
/**
 * Type definition for `AWS::IoT::TopicRule.SigV4Authorization`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-sigv4authorization.html}
 */
export type SigV4Authorization = {
  RoleArn: string;
  ServiceName: string;
  SigningRegion: string;
};
/**
 * Type definition for `AWS::IoT::TopicRule.SnsAction`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-snsaction.html}
 */
export type SnsAction = {
  MessageFormat?: string;
  RoleArn: string;
  TargetArn: string;
};
/**
 * Type definition for `AWS::IoT::TopicRule.SqsAction`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-sqsaction.html}
 */
export type SqsAction = {
  QueueUrl: string;
  RoleArn: string;
  UseBase64?: boolean;
};
/**
 * Type definition for `AWS::IoT::TopicRule.StepFunctionsAction`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-stepfunctionsaction.html}
 */
export type StepFunctionsAction = {
  ExecutionNamePrefix?: string;
  RoleArn: string;
  StateMachineName: string;
};
/**
 * Type definition for `AWS::IoT::TopicRule.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-tag.html}
 */
export type Tag = {
  Key: string;
  Value: string;
};
/**
 * Type definition for `AWS::IoT::TopicRule.Timestamp`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-timestamp.html}
 */
export type Timestamp = {
  Unit?: string;
  Value: string;
};
/**
 * Type definition for `AWS::IoT::TopicRule.TimestreamAction`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-timestreamaction.html}
 */
export type TimestreamAction = {
  DatabaseName: string;
  /**
   * @minLength `1`
   * @maxLength `128`
   */
  Dimensions: TimestreamDimension[];
  RoleArn: string;
  TableName: string;
  Timestamp?: TimestreamTimestamp;
};
/**
 * Type definition for `AWS::IoT::TopicRule.TimestreamDimension`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-timestreamdimension.html}
 */
export type TimestreamDimension = {
  Name: string;
  Value: string;
};
/**
 * Type definition for `AWS::IoT::TopicRule.TimestreamTimestamp`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-timestreamtimestamp.html}
 */
export type TimestreamTimestamp = {
  Unit: string;
  Value: string;
};
/**
 * Type definition for `AWS::IoT::TopicRule.TopicRulePayload`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-topicrulepayload.html}
 */
export type TopicRulePayload = {
  Actions: Action[];
  AwsIotSqlVersion?: string;
  Description?: string;
  ErrorAction?: Action;
  RuleDisabled?: boolean;
  Sql: string;
};
/**
 * Type definition for `AWS::IoT::TopicRule.UserProperty`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-userproperty.html}
 */
export type UserProperty = {
  /**
   * @minLength `0`
   * @maxLength `1024`
   */
  Key: string;
  /**
   * @minLength `0`
   * @maxLength `1024`
   */
  Value: string;
};
/**
 * Resource Type definition for AWS::IoT::TopicRule
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-topicrule.html}
 */
export class IoTTopicRule extends $Resource<
  "AWS::IoT::TopicRule",
  IoTTopicRuleProperties,
  IoTTopicRuleAttributes
> {
  public static readonly Type = "AWS::IoT::TopicRule";
  constructor(
    logicalId: string,
    properties: IoTTopicRuleProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, IoTTopicRule.Type, properties, options);
  }
}
