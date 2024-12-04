import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * The ``AWS::Lambda::EventSourceMapping`` resource creates a mapping between an event source and an LAMlong function. LAM reads items from the event source and triggers the function.
 For details about each event source type, see the following topics. In particular, each of the topics describes the required and optional parameters for the specific event source.
  +   [Configuring a Dynamo DB stream as an event source](https://docs.aws.amazon.com/lambda/latest/dg/with-ddb.html#services-dynamodb-eventsourcemapping)
  +   [Configuring a Kinesis stream as an event source](https://docs.aws.amazon.com/lambda/latest/dg/with-kinesis.html#services-kinesis-eventsourcemapping)
  +   [Configuring an SQS queue as an event source](https://docs.aws.amazon.com/lambda/latest/dg/with-sqs.html#events-sqs-eventsource)
  +   [Configuring an MQ broker as an event source](https://docs.aws.amazon.com/lambda/latest/dg/with-mq.html#services-mq-eventsourcemapping)
  +   [Configuring MSK as an event source](https://docs.aws.amazon.com/lambda/latest/dg/with-msk.html)
  +   [Configuring Self-Managed Apache Kafka as an event source](https://docs.aws.amazon.com/lambda/latest/dg/kafka-smaa.html)
  +   [Configuring Amazon DocumentDB as an event source](https://docs.aws.amazon.com/lambda/latest/dg/with-documentdb.html)
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-eventsourcemapping.html}
 */
export type LambdaEventSourceMappingProperties = {
  /**
   * Specific configuration settings for an Amazon Managed Streaming for Apache Kafka (Amazon MSK) event source.
   */
  AmazonManagedKafkaEventSourceConfig?: AmazonManagedKafkaEventSourceConfig;
  /**
     * The maximum number of records in each batch that Lambda pulls from your stream or queue and sends to your function. Lambda passes all of the records in the batch to the function in a single call, up to the payload limit for synchronous invocation (6 MB).
      +   *Amazon Kinesis* – Default 100. Max 10,000.
      +   *Amazon DynamoDB Streams* – Default 100. Max 10,000.
      +   *Amazon Simple Queue Service* – Default 10. For standard queues the max is 10,000. For FIFO queues the max is 10.
      +   *Amazon Managed Streaming for Apache Kafka* – Default 100. Max 10,000.
      +   *Self-managed Apache Kafka* – Default 100. Max 10,000.
      +   *Amazon MQ (ActiveMQ and RabbitMQ)* – Default 100. Max 10,000.
      +   *DocumentDB* – Default 100. Max 10,000.
     * @min `1`
     * @max `10000`
     */
  BatchSize?: number;
  /**
   * (Kinesis and DynamoDB Streams only) If the function returns an error, split the batch in two and retry. The default value is false.
   */
  BisectBatchOnFunctionError?: boolean;
  /**
   * (Kinesis, DynamoDB Streams, Amazon MSK, and self-managed Apache Kafka event sources only) A configuration object that specifies the destination of an event after Lambda processes it.
   */
  DestinationConfig?: DestinationConfig;
  /**
   * Specific configuration settings for a DocumentDB event source.
   */
  DocumentDBEventSourceConfig?: DocumentDBEventSourceConfig;
  /**
     * When true, the event source mapping is active. When false, Lambda pauses polling and invocation.
     Default: True
     */
  Enabled?: boolean;
  /**
     * The Amazon Resource Name (ARN) of the event source.
      +   *Amazon Kinesis* – The ARN of the data stream or a stream consumer.
      +   *Amazon DynamoDB Streams* – The ARN of the stream.
      +   *Amazon Simple Queue Service* – The ARN of the queue.
      +   *Amazon Managed Streaming for Apache Kafka* – The ARN of the cluster or the ARN of the VPC connection (for [cross-account event source mappings](https://docs.aws.amazon.com/lambda/latest/dg/with-msk.html#msk-multi-vpc)).
      +   *Amazon MQ* – The ARN of the broker.
      +   *Amazon DocumentDB* – The ARN of the DocumentDB change stream.
     * @minLength `12`
     * @maxLength `1024`
     * @pattern `arn:(aws[a-zA-Z0-9-]*):([a-zA-Z0-9\-])+:([a-z]{2}(-gov)?(-iso([a-z])?)?-[a-z]+-\d{1})?:(\d{12})?:(.*)`
     */
  EventSourceArn?: string;
  /**
   * An object that defines the filter criteria that determine whether Lambda should process an event. For more information, see [Lambda event filtering](https://docs.aws.amazon.com/lambda/latest/dg/invocation-eventfiltering.html).
   */
  FilterCriteria?: FilterCriteria;
  /**
     * The name or ARN of the Lambda function.
      **Name formats**
     +   *Function name* – ``MyFunction``.
      +   *Function ARN* – ``arn:aws:lambda:us-west-2:123456789012:function:MyFunction``.
      +   *Version or Alias ARN* – ``arn:aws:lambda:us-west-2:123456789012:function:MyFunction:PROD``.
      +   *Partial ARN* – ``123456789012:function:MyFunction``.
      
     The length constraint applies only to the full ARN. If you specify only the function name, it's limited to 64 characters in length.
     * @minLength `1`
     * @maxLength `140`
     * @pattern `(arn:(aws[a-zA-Z-]*)?:lambda:)?([a-z]{2}(-gov)?(-iso([a-z])?)?-[a-z]+-\d{1}:)?(\d{12}:)?(function:)?([a-zA-Z0-9-_]+)(:(\$LATEST|[a-zA-Z0-9-_]+))?`
     */
  FunctionName: string;
  /**
     * (Kinesis, DynamoDB Streams, and SQS) A list of current response type enums applied to the event source mapping.
     Valid Values: ``ReportBatchItemFailures``
     */
  FunctionResponseTypes?: "ReportBatchItemFailures"[];
  /**
   * The ARN of the KMSlong (KMS) customer managed key that Lambda uses to encrypt your function's [filter criteria](https://docs.aws.amazon.com/lambda/latest/dg/invocation-eventfiltering.html#filtering-basics).
   * @minLength `12`
   * @maxLength `2048`
   * @pattern `(arn:(aws[a-zA-Z-]*)?:[a-z0-9-.]+:.*)|()`
   */
  KmsKeyArn?: string;
  /**
   * The maximum amount of time, in seconds, that Lambda spends gathering records before invoking the function.
   *Default (, , event sources)*: 0
   *Default (, Kafka, , event sources)*: 500 ms
   *Related setting:* For SQS event sources, when you set ``BatchSize`` to a value greater than 10, you must set ``MaximumBatchingWindowInSeconds`` to at least 1.
   * @min `0`
   * @max `300`
   */
  MaximumBatchingWindowInSeconds?: number;
  /**
     * (Kinesis and DynamoDB Streams only) Discard records older than the specified age. The default value is -1, which sets the maximum age to infinite. When the value is set to infinite, Lambda never discards old records.
      The minimum valid value for maximum record age is 60s. Although values less than 60 and greater than -1 fall within the parameter's absolute range, they are not allowed
     * @min `-1`
     * @max `604800`
     */
  MaximumRecordAgeInSeconds?: number;
  /**
   * (Kinesis and DynamoDB Streams only) Discard records after the specified number of retries. The default value is -1, which sets the maximum number of retries to infinite. When MaximumRetryAttempts is infinite, Lambda retries failed records until the record expires in the event source.
   * @min `-1`
   * @max `10000`
   */
  MaximumRetryAttempts?: number;
  /**
   * The metrics configuration for your event source. For more information, see [Event source mapping metrics](https://docs.aws.amazon.com/lambda/latest/dg/monitoring-metrics-types.html#event-source-mapping-metrics).
   */
  MetricsConfig?: MetricsConfig;
  /**
   * (Kinesis and DynamoDB Streams only) The number of batches to process concurrently from each shard. The default value is 1.
   * @min `1`
   * @max `10`
   */
  ParallelizationFactor?: number;
  /**
   * (Amazon MSK and self-managed Apache Kafka only) The provisioned mode configuration for the event source. For more information, see [provisioned mode](https://docs.aws.amazon.com/lambda/latest/dg/invocation-eventsourcemapping.html#invocation-eventsourcemapping-provisioned-mode).
   */
  ProvisionedPollerConfig?: ProvisionedPollerConfig;
  /**
   * (Amazon MQ) The name of the Amazon MQ broker destination queue to consume.
   * @minLength `1`
   * @maxLength `1`
   */
  Queues?: string[];
  /**
   * (Amazon SQS only) The scaling configuration for the event source. For more information, see [Configuring maximum concurrency for Amazon SQS event sources](https://docs.aws.amazon.com/lambda/latest/dg/with-sqs.html#events-sqs-max-concurrency).
   */
  ScalingConfig?: ScalingConfig;
  /**
   * The self-managed Apache Kafka cluster for your event source.
   */
  SelfManagedEventSource?: SelfManagedEventSource;
  /**
   * Specific configuration settings for a self-managed Apache Kafka event source.
   */
  SelfManagedKafkaEventSourceConfig?: SelfManagedKafkaEventSourceConfig;
  /**
   * An array of the authentication protocol, VPC components, or virtual host to secure and define your event source.
   * @minLength `1`
   * @maxLength `22`
   */
  SourceAccessConfigurations?: SourceAccessConfiguration[];
  /**
     * The position in a stream from which to start reading. Required for Amazon Kinesis and Amazon DynamoDB.
      +   *LATEST* - Read only new records.
      +   *TRIM_HORIZON* - Process all available records.
      +   *AT_TIMESTAMP* - Specify a time from which to start reading records.
     * @minLength `6`
     * @maxLength `12`
     * @pattern `(LATEST|TRIM_HORIZON|AT_TIMESTAMP)+`
     */
  StartingPosition?: string;
  /**
   * With ``StartingPosition`` set to ``AT_TIMESTAMP``, the time from which to start reading, in Unix time seconds. ``StartingPositionTimestamp`` cannot be in the future.
   */
  StartingPositionTimestamp?: number;
  /**
     * A list of tags to add to the event source mapping.
      You must have the ``lambda:TagResource``, ``lambda:UntagResource``, and ``lambda:ListTags`` permissions for your [principal](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_terms-and-concepts.html) to manage the CFN stack. If you don't have these permissions, there might be unexpected behavior with stack-level tags propagating to the resource during resource creation and update.
     */
  Tags?: Tag[];
  /**
   * The name of the Kafka topic.
   * @minLength `1`
   * @maxLength `1`
   */
  Topics?: string[];
  /**
   * (Kinesis and DynamoDB Streams only) The duration in seconds of a processing window for DynamoDB and Kinesis Streams event sources. A value of 0 seconds indicates no tumbling window.
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
   * @minLength `85`
   * @maxLength `120`
   * @pattern `arn:(aws[a-zA-Z-]*)?:lambda:[a-z]{2}((-gov)|(-iso([a-z]?)))?-[a-z]+-\d{1}:\d{12}:event-source-mapping:[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}`
   */
  EventSourceMappingArn: string;
  /**
   * @minLength `36`
   * @maxLength `36`
   * @pattern `[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}`
   */
  Id: string;
};
/**
 * Type definition for `AWS::Lambda::EventSourceMapping.AmazonManagedKafkaEventSourceConfig`.
 * Specific configuration settings for an Amazon Managed Streaming for Apache Kafka (Amazon MSK) event source.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-eventsourcemapping-amazonmanagedkafkaeventsourceconfig.html}
 */
export type AmazonManagedKafkaEventSourceConfig = {
  /**
   * The identifier for the Kafka consumer group to join. The consumer group ID must be unique among all your Kafka event sources. After creating a Kafka event source mapping with the consumer group ID specified, you cannot update this value. For more information, see [Customizable consumer group ID](https://docs.aws.amazon.com/lambda/latest/dg/with-msk.html#services-msk-consumer-group-id).
   * @minLength `1`
   * @maxLength `200`
   * @pattern `[a-zA-Z0-9-\/*:_+=.@-]*`
   */
  ConsumerGroupId?: string;
};
/**
 * Type definition for `AWS::Lambda::EventSourceMapping.DestinationConfig`.
 * A configuration object that specifies the destination of an event after Lambda processes it.
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
 * Specific configuration settings for a DocumentDB event source.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-eventsourcemapping-documentdbeventsourceconfig.html}
 */
export type DocumentDBEventSourceConfig = {
  /**
   * The name of the collection to consume within the database. If you do not specify a collection, Lambda consumes all collections.
   * @minLength `1`
   * @maxLength `57`
   */
  CollectionName?: string;
  /**
   * The name of the database to consume within the DocumentDB cluster.
   * @minLength `1`
   * @maxLength `63`
   */
  DatabaseName?: string;
  /**
   * Determines what DocumentDB sends to your event stream during document update operations. If set to UpdateLookup, DocumentDB sends a delta describing the changes, along with a copy of the entire document. Otherwise, DocumentDB sends only a partial document that contains the changes.
   */
  FullDocument?: "UpdateLookup" | "Default";
};
/**
 * Type definition for `AWS::Lambda::EventSourceMapping.Endpoints`.
 * The list of bootstrap servers for your Kafka brokers in the following format: ``"KafkaBootstrapServers": ["abc.xyz.com:xxxx","abc2.xyz.com:xxxx"]``.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-eventsourcemapping-endpoints.html}
 */
export type Endpoints = {
  /**
   * The list of bootstrap servers for your Kafka brokers in the following format: ``"KafkaBootstrapServers": ["abc.xyz.com:xxxx","abc2.xyz.com:xxxx"]``.
   * @minLength `1`
   * @maxLength `10`
   */
  KafkaBootstrapServers?: string[];
};
/**
 * Type definition for `AWS::Lambda::EventSourceMapping.Filter`.
 * A structure within a ``FilterCriteria`` object that defines an event filtering pattern.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-eventsourcemapping-filter.html}
 */
export type Filter = {
  /**
   * A filter pattern. For more information on the syntax of a filter pattern, see [Filter rule syntax](https://docs.aws.amazon.com/lambda/latest/dg/invocation-eventfiltering.html#filtering-syntax).
   * @minLength `0`
   * @maxLength `4096`
   * @pattern `.*`
   */
  Pattern?: string;
};
/**
 * Type definition for `AWS::Lambda::EventSourceMapping.FilterCriteria`.
 * An object that contains the filters for an event source.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-eventsourcemapping-filtercriteria.html}
 */
export type FilterCriteria = {
  /**
   * A list of filters.
   * @minLength `1`
   * @maxLength `20`
   */
  Filters?: Filter[];
};
/**
 * Type definition for `AWS::Lambda::EventSourceMapping.MetricsConfig`.
 * The metrics configuration for your event source. Use this configuration object to define which metrics you want your event source mapping to produce.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-eventsourcemapping-metricsconfig.html}
 */
export type MetricsConfig = {
  /**
   * The metrics you want your event source mapping to produce. Include ``EventCount`` to receive event source mapping metrics related to the number of events processed by your event source mapping. For more information about these metrics, see [Event source mapping metrics](https://docs.aws.amazon.com/lambda/latest/dg/monitoring-metrics-types.html#event-source-mapping-metrics).
   * @minLength `0`
   * @maxLength `1`
   */
  Metrics?: "EventCount"[];
};
/**
 * Type definition for `AWS::Lambda::EventSourceMapping.OnFailure`.
 * A destination for events that failed processing.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-eventsourcemapping-onfailure.html}
 */
export type OnFailure = {
  /**
     * The Amazon Resource Name (ARN) of the destination resource.
     To retain records of unsuccessful [asynchronous invocations](https://docs.aws.amazon.com/lambda/latest/dg/invocation-async.html#invocation-async-destinations), you can configure an Amazon SNS topic, Amazon SQS queue, Amazon S3 bucket, Lambda function, or Amazon EventBridge event bus as the destination.
     To retain records of failed invocations from [Kinesis](https://docs.aws.amazon.com/lambda/latest/dg/with-kinesis.html), [DynamoDB](https://docs.aws.amazon.com/lambda/latest/dg/with-ddb.html), [self-managed Kafka](https://docs.aws.amazon.com/lambda/latest/dg/with-kafka.html#services-smaa-onfailure-destination) or [Amazon MSK](https://docs.aws.amazon.com/lambda/latest/dg/with-msk.html#services-msk-onfailure-destination), you can configure an Amazon SNS topic, Amazon SQS queue, or Amazon S3 bucket as the destination.
     * @minLength `12`
     * @maxLength `1024`
     * @pattern `arn:(aws[a-zA-Z0-9-]*):([a-zA-Z0-9\-])+:([a-z]{2}(-gov)?(-iso([a-z])?)?-[a-z]+-\d{1})?:(\d{12})?:(.*)`
     */
  Destination?: string;
};
/**
 * Type definition for `AWS::Lambda::EventSourceMapping.ProvisionedPollerConfig`.
 * The [provisioned mode](https://docs.aws.amazon.com/lambda/latest/dg/invocation-eventsourcemapping.html#invocation-eventsourcemapping-provisioned-mode) configuration for the event source. Use provisioned mode to customize the minimum and maximum number of event pollers for your event source.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-eventsourcemapping-provisionedpollerconfig.html}
 */
export type ProvisionedPollerConfig = {
  /**
   * The maximum number of event pollers this event source can scale up to.
   * @min `1`
   * @max `2000`
   */
  MaximumPollers?: number;
  /**
   * The minimum number of event pollers this event source can scale down to.
   * @min `1`
   * @max `200`
   */
  MinimumPollers?: number;
};
/**
 * Type definition for `AWS::Lambda::EventSourceMapping.ScalingConfig`.
 * (Amazon SQS only) The scaling configuration for the event source. To remove the configuration, pass an empty value.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-eventsourcemapping-scalingconfig.html}
 */
export type ScalingConfig = {
  /**
   * Limits the number of concurrent instances that the SQS event source can invoke.
   * @min `2`
   * @max `1000`
   */
  MaximumConcurrency?: number;
};
/**
 * Type definition for `AWS::Lambda::EventSourceMapping.SelfManagedEventSource`.
 * The self-managed Apache Kafka cluster for your event source.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-eventsourcemapping-selfmanagedeventsource.html}
 */
export type SelfManagedEventSource = {
  /**
   * The list of bootstrap servers for your Kafka brokers in the following format: ``"KafkaBootstrapServers": ["abc.xyz.com:xxxx","abc2.xyz.com:xxxx"]``.
   */
  Endpoints?: Endpoints;
};
/**
 * Type definition for `AWS::Lambda::EventSourceMapping.SelfManagedKafkaEventSourceConfig`.
 * Specific configuration settings for a self-managed Apache Kafka event source.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-eventsourcemapping-selfmanagedkafkaeventsourceconfig.html}
 */
export type SelfManagedKafkaEventSourceConfig = {
  /**
   * The identifier for the Kafka consumer group to join. The consumer group ID must be unique among all your Kafka event sources. After creating a Kafka event source mapping with the consumer group ID specified, you cannot update this value. For more information, see [Customizable consumer group ID](https://docs.aws.amazon.com/lambda/latest/dg/with-msk.html#services-msk-consumer-group-id).
   * @minLength `1`
   * @maxLength `200`
   * @pattern `[a-zA-Z0-9-\/*:_+=.@-]*`
   */
  ConsumerGroupId?: string;
};
/**
 * Type definition for `AWS::Lambda::EventSourceMapping.SourceAccessConfiguration`.
 * An array of the authentication protocol, VPC components, or virtual host to secure and define your event source.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-eventsourcemapping-sourceaccessconfiguration.html}
 */
export type SourceAccessConfiguration = {
  /**
     * The type of authentication protocol, VPC components, or virtual host for your event source. For example: ``"Type":"SASL_SCRAM_512_AUTH"``.
      +   ``BASIC_AUTH`` – (Amazon MQ) The ASMlong secret that stores your broker credentials.
      +   ``BASIC_AUTH`` – (Self-managed Apache Kafka) The Secrets Manager ARN of your secret key used for SASL/PLAIN authentication of your Apache Kafka brokers.
      +   ``VPC_SUBNET`` – (Self-managed Apache Kafka) The subnets associated with your VPC. Lambda connects to these subnets to fetch data from your self-managed Apache Kafka cluster.
      +   ``VPC_SECURITY_GROUP`` – (Self-managed Apache Kafka) The VPC security group used to manage access to your self-managed Apache Kafka brokers.
      +   ``SASL_SCRAM_256_AUTH`` – (Self-managed Apache Kafka) The Secrets Manager ARN of your secret key used for SASL SCRAM-256 authentication of your self-managed Apache Kafka brokers.
      +   ``SASL_SCRAM_512_AUTH`` – (Amazon MSK, Self-managed Apache Kafka) The Secrets Manager ARN of your secret key used for SASL SCRAM-512 authentication of your self-managed Apache Kafka brokers.
      +   ``VIRTUAL_HOST`` –- (RabbitMQ) The name of the virtual host in your RabbitMQ broker. Lambda uses this RabbitMQ host as the event source. This property cannot be specified in an UpdateEventSourceMapping API call.
      +   ``CLIENT_CERTIFICATE_TLS_AUTH`` – (Amazon MSK, self-managed Apache Kafka) The Secrets Manager ARN of your secret key containing the certificate chain (X.509 PEM), private key (PKCS#8 PEM), and private key password (optional) used for mutual TLS authentication of your MSK/Apache Kafka brokers.
      +   ``SERVER_ROOT_CA_CERTIFICATE`` – (Self-managed Apache Kafka) The Secrets Manager ARN of your secret key containing the root CA certificate (X.509 PEM) used for TLS encryption of your Apache Kafka brokers.
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
   * The value for your chosen configuration in ``Type``. For example: ``"URI": "arn:aws:secretsmanager:us-east-1:01234567890:secret:MyBrokerSecretName"``.
   * @minLength `1`
   * @maxLength `200`
   * @pattern `[a-zA-Z0-9-\/*:_+=.@-]*`
   */
  URI?: string;
};
/**
 * Type definition for `AWS::Lambda::EventSourceMapping.Tag`.
 * A [tag](https://docs.aws.amazon.com/lambda/latest/dg/tagging.html) to apply to the event source mapping.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-eventsourcemapping-tag.html}
 */
export type Tag = {
  /**
   * The key for this tag.
   * @minLength `1`
   * @maxLength `128`
   */
  Key: string;
  /**
   * The value for this tag.
   * @minLength `0`
   * @maxLength `256`
   */
  Value?: string;
};
/**
 * The ``AWS::Lambda::EventSourceMapping`` resource creates a mapping between an event source and an LAMlong function. LAM reads items from the event source and triggers the function.
 For details about each event source type, see the following topics. In particular, each of the topics describes the required and optional parameters for the specific event source.
  +   [Configuring a Dynamo DB stream as an event source](https://docs.aws.amazon.com/lambda/latest/dg/with-ddb.html#services-dynamodb-eventsourcemapping)
  +   [Configuring a Kinesis stream as an event source](https://docs.aws.amazon.com/lambda/latest/dg/with-kinesis.html#services-kinesis-eventsourcemapping)
  +   [Configuring an SQS queue as an event source](https://docs.aws.amazon.com/lambda/latest/dg/with-sqs.html#events-sqs-eventsource)
  +   [Configuring an MQ broker as an event source](https://docs.aws.amazon.com/lambda/latest/dg/with-mq.html#services-mq-eventsourcemapping)
  +   [Configuring MSK as an event source](https://docs.aws.amazon.com/lambda/latest/dg/with-msk.html)
  +   [Configuring Self-Managed Apache Kafka as an event source](https://docs.aws.amazon.com/lambda/latest/dg/kafka-smaa.html)
  +   [Configuring Amazon DocumentDB as an event source](https://docs.aws.amazon.com/lambda/latest/dg/with-documentdb.html)
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
