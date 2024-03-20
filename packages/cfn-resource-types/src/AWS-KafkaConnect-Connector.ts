import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::KafkaConnect::Connector
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kafkaconnect-connector.html}
 */
export type KafkaConnectConnectorProperties = {
  /**
   * Information about the capacity allocated to the connector.
   */
  Capacity: Capacity;
  /**
   * The configuration for the connector.
   */
  ConnectorConfiguration: Record<string, string>;
  /**
   * A summary description of the connector.
   * @maxLength `1024`
   */
  ConnectorDescription?: string;
  /**
   * The name of the connector.
   * @minLength `1`
   * @maxLength `128`
   */
  ConnectorName: string;
  /**
   * Details of how to connect to the Kafka cluster.
   */
  KafkaCluster: KafkaCluster;
  /**
   * Details of the client authentication used by the Kafka cluster.
   */
  KafkaClusterClientAuthentication: KafkaClusterClientAuthentication;
  /**
   * Details of encryption in transit to the Kafka cluster.
   */
  KafkaClusterEncryptionInTransit: KafkaClusterEncryptionInTransit;
  /**
   * The version of Kafka Connect. It has to be compatible with both the Kafka cluster's version and the plugins.
   */
  KafkaConnectVersion: string;
  /**
   * Details of what logs are delivered and where they are delivered.
   */
  LogDelivery?: LogDelivery;
  /**
   * List of plugins to use with the connector.
   * @minLength `1`
   */
  Plugins: Plugin[];
  /**
   * The Amazon Resource Name (ARN) of the IAM role used by the connector to access Amazon S3 objects and other external resources.
   * @pattern `arn:(aws|aws-us-gov|aws-cn):iam:.*`
   */
  ServiceExecutionRoleArn: string;
  /**
   * A collection of tags associated with a resource
   */
  Tags?: Tag[];
  /**
   * Specifies the worker configuration to use with the connector.
   */
  WorkerConfiguration?: WorkerConfiguration;
};
/**
 * Attribute type definition for `AWS::KafkaConnect::Connector`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kafkaconnect-connector.html#aws-resource-kafkaconnect-connector-return-values}
 */
export type KafkaConnectConnectorAttributes = {
  /**
   * Amazon Resource Name for the created Connector.
   * @pattern `arn:(aws|aws-us-gov|aws-cn):kafkaconnect:.*`
   */
  ConnectorArn: string;
};
/**
 * Type definition for `AWS::KafkaConnect::Connector.ApacheKafkaCluster`.
 * Details of how to connect to an Apache Kafka cluster.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kafkaconnect-connector-apachekafkacluster.html}
 */
export type ApacheKafkaCluster = {
  /**
   * The bootstrap servers string of the Apache Kafka cluster.
   */
  BootstrapServers: string;
  /**
   * Information about a VPC used with the connector.
   */
  Vpc: Vpc;
};
/**
 * Type definition for `AWS::KafkaConnect::Connector.AutoScaling`.
 * Details about auto scaling of a connector.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kafkaconnect-connector-autoscaling.html}
 */
export type AutoScaling = {
  /**
   * The maximum number of workers for a connector.
   */
  MaxWorkerCount: number;
  /**
   * Specifies how many MSK Connect Units (MCU) as the minimum scaling unit.
   */
  McuCount: 1 | 2 | 4 | 8;
  /**
   * The minimum number of workers for a connector.
   */
  MinWorkerCount: number;
  /**
   * Information about the scale in policy of the connector.
   */
  ScaleInPolicy: ScaleInPolicy;
  /**
   * Information about the scale out policy of the connector.
   */
  ScaleOutPolicy: ScaleOutPolicy;
};
/**
 * Type definition for `AWS::KafkaConnect::Connector.Capacity`.
 * Information about the capacity allocated to the connector.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kafkaconnect-connector-capacity.html}
 */
export type Capacity = {
  /**
   * Details about auto scaling of a connector.
   */
  AutoScaling?: AutoScaling;
  /**
   * Details about a fixed capacity allocated to a connector.
   */
  ProvisionedCapacity?: ProvisionedCapacity;
};
/**
 * Type definition for `AWS::KafkaConnect::Connector.CloudWatchLogsLogDelivery`.
 * Details about delivering logs to Amazon CloudWatch Logs.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kafkaconnect-connector-cloudwatchlogslogdelivery.html}
 */
export type CloudWatchLogsLogDelivery = {
  /**
   * Specifies whether the logs get sent to the specified CloudWatch Logs destination.
   */
  Enabled: boolean;
  /**
   * The CloudWatch log group that is the destination for log delivery.
   */
  LogGroup?: string;
};
/**
 * Type definition for `AWS::KafkaConnect::Connector.CustomPlugin`.
 * Details about a custom plugin.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kafkaconnect-connector-customplugin.html}
 */
export type CustomPlugin = {
  /**
   * The Amazon Resource Name (ARN) of the custom plugin to use.
   * @pattern `arn:(aws|aws-us-gov|aws-cn):kafkaconnect:.*`
   */
  CustomPluginArn: string;
  /**
   * The revision of the custom plugin to use.
   * @min `1`
   */
  Revision: number;
};
/**
 * Type definition for `AWS::KafkaConnect::Connector.FirehoseLogDelivery`.
 * Details about delivering logs to Amazon Kinesis Data Firehose.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kafkaconnect-connector-firehoselogdelivery.html}
 */
export type FirehoseLogDelivery = {
  /**
   * The Kinesis Data Firehose delivery stream that is the destination for log delivery.
   */
  DeliveryStream?: string;
  /**
   * Specifies whether the logs get sent to the specified Kinesis Data Firehose delivery stream.
   */
  Enabled: boolean;
};
/**
 * Type definition for `AWS::KafkaConnect::Connector.KafkaCluster`.
 * Details of how to connect to the Kafka cluster.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kafkaconnect-connector-kafkacluster.html}
 */
export type KafkaCluster = {
  /**
   * Details of how to connect to an Apache Kafka cluster.
   */
  ApacheKafkaCluster: ApacheKafkaCluster;
};
/**
 * Type definition for `AWS::KafkaConnect::Connector.KafkaClusterClientAuthentication`.
 * Details of the client authentication used by the Kafka cluster.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kafkaconnect-connector-kafkaclusterclientauthentication.html}
 */
export type KafkaClusterClientAuthentication = {
  /**
   * The type of client authentication used to connect to the Kafka cluster. Value NONE means that no client authentication is used.
   */
  AuthenticationType: KafkaClusterClientAuthenticationType;
};
/**
 * Type definition for `AWS::KafkaConnect::Connector.KafkaClusterClientAuthenticationType`.
 * The type of client authentication used to connect to the Kafka cluster. Value NONE means that no client authentication is used.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kafkaconnect-connector-kafkaclusterclientauthenticationtype.html}
 */
export type KafkaClusterClientAuthenticationType = "NONE" | "IAM";
/**
 * Type definition for `AWS::KafkaConnect::Connector.KafkaClusterEncryptionInTransit`.
 * Details of encryption in transit to the Kafka cluster.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kafkaconnect-connector-kafkaclusterencryptionintransit.html}
 */
export type KafkaClusterEncryptionInTransit = {
  /**
   * The type of encryption in transit to the Kafka cluster.
   */
  EncryptionType: KafkaClusterEncryptionInTransitType;
};
/**
 * Type definition for `AWS::KafkaConnect::Connector.KafkaClusterEncryptionInTransitType`.
 * The type of encryption in transit to the Kafka cluster.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kafkaconnect-connector-kafkaclusterencryptionintransittype.html}
 */
export type KafkaClusterEncryptionInTransitType = "PLAINTEXT" | "TLS";
/**
 * Type definition for `AWS::KafkaConnect::Connector.LogDelivery`.
 * Details of what logs are delivered and where they are delivered.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kafkaconnect-connector-logdelivery.html}
 */
export type LogDelivery = {
  /**
   * Specifies where worker logs are delivered.
   */
  WorkerLogDelivery: WorkerLogDelivery;
};
/**
 * Type definition for `AWS::KafkaConnect::Connector.Plugin`.
 * Details about a Kafka Connect plugin which will be used with the connector.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kafkaconnect-connector-plugin.html}
 */
export type Plugin = {
  /**
   * Details about a custom plugin.
   */
  CustomPlugin: CustomPlugin;
};
/**
 * Type definition for `AWS::KafkaConnect::Connector.ProvisionedCapacity`.
 * Details about a fixed capacity allocated to a connector.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kafkaconnect-connector-provisionedcapacity.html}
 */
export type ProvisionedCapacity = {
  /**
   * Specifies how many MSK Connect Units (MCU) are allocated to the connector.
   */
  McuCount?: 1 | 2 | 4 | 8;
  /**
   * Number of workers for a connector.
   */
  WorkerCount: number;
};
/**
 * Type definition for `AWS::KafkaConnect::Connector.S3LogDelivery`.
 * Details about delivering logs to Amazon S3.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kafkaconnect-connector-s3logdelivery.html}
 */
export type S3LogDelivery = {
  /**
   * The name of the S3 bucket that is the destination for log delivery.
   */
  Bucket?: string;
  /**
   * Specifies whether the logs get sent to the specified Amazon S3 destination.
   */
  Enabled: boolean;
  /**
   * The S3 prefix that is the destination for log delivery.
   */
  Prefix?: string;
};
/**
 * Type definition for `AWS::KafkaConnect::Connector.ScaleInPolicy`.
 * Information about the scale in policy of the connector.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kafkaconnect-connector-scaleinpolicy.html}
 */
export type ScaleInPolicy = {
  /**
   * Specifies the CPU utilization percentage threshold at which connector scale in should trigger.
   * @min `1`
   * @max `100`
   */
  CpuUtilizationPercentage: number;
};
/**
 * Type definition for `AWS::KafkaConnect::Connector.ScaleOutPolicy`.
 * Information about the scale out policy of the connector.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kafkaconnect-connector-scaleoutpolicy.html}
 */
export type ScaleOutPolicy = {
  /**
   * Specifies the CPU utilization percentage threshold at which connector scale out should trigger.
   * @min `1`
   * @max `100`
   */
  CpuUtilizationPercentage: number;
};
/**
 * Type definition for `AWS::KafkaConnect::Connector.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kafkaconnect-connector-tag.html}
 */
export type Tag = {
  /**
   * @minLength `1`
   * @maxLength `128`
   */
  Key: string;
  /**
   * @maxLength `256`
   */
  Value: string;
};
/**
 * Type definition for `AWS::KafkaConnect::Connector.Vpc`.
 * Information about a VPC used with the connector.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kafkaconnect-connector-vpc.html}
 */
export type Vpc = {
  /**
   * The AWS security groups to associate with the elastic network interfaces in order to specify what the connector has access to.
   */
  SecurityGroups: string[];
  /**
   * The list of subnets to connect to in the virtual private cloud (VPC). AWS creates elastic network interfaces inside these subnets.
   * @minLength `1`
   */
  Subnets: string[];
};
/**
 * Type definition for `AWS::KafkaConnect::Connector.WorkerConfiguration`.
 * Specifies the worker configuration to use with the connector.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kafkaconnect-connector-workerconfiguration.html}
 */
export type WorkerConfiguration = {
  /**
   * The revision of the worker configuration to use.
   * @min `1`
   */
  Revision: number;
  /**
   * The Amazon Resource Name (ARN) of the worker configuration to use.
   * @pattern `arn:(aws|aws-us-gov|aws-cn):kafkaconnect:.*`
   */
  WorkerConfigurationArn: string;
};
/**
 * Type definition for `AWS::KafkaConnect::Connector.WorkerLogDelivery`.
 * Specifies where worker logs are delivered.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kafkaconnect-connector-workerlogdelivery.html}
 */
export type WorkerLogDelivery = {
  /**
   * Details about delivering logs to Amazon CloudWatch Logs.
   */
  CloudWatchLogs?: CloudWatchLogsLogDelivery;
  /**
   * Details about delivering logs to Amazon Kinesis Data Firehose.
   */
  Firehose?: FirehoseLogDelivery;
  /**
   * Details about delivering logs to Amazon S3.
   */
  S3?: S3LogDelivery;
};
/**
 * Resource Type definition for AWS::KafkaConnect::Connector
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kafkaconnect-connector.html}
 */
export class KafkaConnectConnector extends $Resource<
  "AWS::KafkaConnect::Connector",
  KafkaConnectConnectorProperties,
  KafkaConnectConnectorAttributes
> {
  public static readonly Type = "AWS::KafkaConnect::Connector";
  constructor(
    logicalId: string,
    properties: KafkaConnectConnectorProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, KafkaConnectConnector.Type, properties, options);
  }
}
