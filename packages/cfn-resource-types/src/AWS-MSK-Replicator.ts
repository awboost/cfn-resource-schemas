import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::MSK::Replicator
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-replicator.html}
 */
export type MSKReplicatorProperties = {
  /**
   * A summary description of the replicator.
   * @maxLength `1024`
   */
  Description?: string;
  /**
   * Specifies a list of Kafka clusters which are targets of the replicator.
   * @minLength `2`
   * @maxLength `2`
   */
  KafkaClusters: KafkaCluster[];
  /**
   * Configuration for log delivery for the replicator.
   */
  LogDelivery?: LogDelivery;
  /**
   * A list of replication configurations, where each configuration targets a given source cluster to target cluster replication flow.
   * @minLength `1`
   * @maxLength `1`
   */
  ReplicationInfoList: ReplicationInfo[];
  /**
   * The name of the replicator.
   * @minLength `1`
   * @maxLength `128`
   * @pattern `^[0-9A-Za-z][0-9A-Za-z-]{0,}$`
   */
  ReplicatorName: string;
  /**
   * The Amazon Resource Name (ARN) of the IAM role used by the replicator to access external resources.
   * @pattern `arn:(aws|aws-us-gov|aws-cn):iam:.*`
   */
  ServiceExecutionRoleArn: string;
  /**
   * A collection of tags associated with a resource
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::MSK::Replicator`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-replicator.html#aws-resource-msk-replicator-return-values}
 */
export type MSKReplicatorAttributes = {
  /**
   * The current version of the MSK replicator.
   */
  CurrentVersion: string;
  /**
   * Amazon Resource Name for the created replicator.
   * @pattern `arn:(aws|aws-us-gov|aws-cn):kafka:.*`
   */
  ReplicatorArn: string;
};
/**
 * Type definition for `AWS::MSK::Replicator.AmazonMskCluster`.
 * Details of an Amazon MSK cluster.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-replicator-amazonmskcluster.html}
 */
export type AmazonMskCluster = {
  /**
   * The ARN of an Amazon MSK cluster.
   * @pattern `arn:(aws|aws-us-gov|aws-cn):kafka:.*`
   */
  MskClusterArn: string;
};
/**
 * Type definition for `AWS::MSK::Replicator.ApacheKafkaCluster`.
 * Details of an Apache Kafka cluster.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-replicator-apachekafkacluster.html}
 */
export type ApacheKafkaCluster = {
  /**
   * The ID of the Apache Kafka cluster.
   */
  ApacheKafkaClusterId: string;
  /**
   * The bootstrap broker string of the Apache Kafka cluster.
   */
  BootstrapBrokerString: string;
};
/**
 * Type definition for `AWS::MSK::Replicator.CloudWatchLogs`.
 * Details about delivering logs to CloudWatch Logs.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-replicator-cloudwatchlogs.html}
 */
export type CloudWatchLogs = {
  /**
   * Whether log delivery to CloudWatch Logs is enabled.
   */
  Enabled: boolean;
  /**
   * The CloudWatch log group that is the destination for log delivery.
   */
  LogGroup?: string;
};
/**
 * Type definition for `AWS::MSK::Replicator.ConsumerGroupOffsetSyncMode`.
 * The consumer group offset synchronization mode.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-replicator-consumergroupoffsetsyncmode.html}
 */
export type ConsumerGroupOffsetSyncMode = "LEGACY" | "ENHANCED";
/**
 * Type definition for `AWS::MSK::Replicator.ConsumerGroupReplication`.
 * Configuration relating to consumer group replication.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-replicator-consumergroupreplication.html}
 */
export type ConsumerGroupReplication = {
  /**
   * The consumer group offset synchronization mode.
   */
  ConsumerGroupOffsetSyncMode?: ConsumerGroupOffsetSyncMode;
  /**
   * List of regular expression patterns indicating the consumer groups that should not be replicated.
   * @minLength `1`
   * @maxLength `100`
   */
  ConsumerGroupsToExclude?: string[];
  /**
   * List of regular expression patterns indicating the consumer groups to copy.
   * @minLength `0`
   * @maxLength `100`
   */
  ConsumerGroupsToReplicate: string[];
  /**
   * Whether to periodically check for new consumer groups.
   */
  DetectAndCopyNewConsumerGroups?: boolean;
  /**
   * Whether to periodically write the translated offsets to __consumer_offsets topic in target cluster.
   */
  SynchroniseConsumerGroupOffsets?: boolean;
};
/**
 * Type definition for `AWS::MSK::Replicator.Firehose`.
 * Details about delivering logs to Firehose.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-replicator-firehose.html}
 */
export type Firehose = {
  /**
   * The Firehose delivery stream that is the destination for log delivery.
   */
  DeliveryStream?: string;
  /**
   * Whether log delivery to Firehose is enabled.
   */
  Enabled: boolean;
};
/**
 * Type definition for `AWS::MSK::Replicator.KafkaCluster`.
 * Details of a Kafka cluster for replication.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-replicator-kafkacluster.html}
 */
export type KafkaCluster = {
  /**
   * Details of an Amazon MSK cluster.
   */
  AmazonMskCluster?: AmazonMskCluster;
  /**
   * Details of an Apache Kafka cluster.
   */
  ApacheKafkaCluster?: ApacheKafkaCluster;
  /**
   * Details of the client authentication used by the Apache Kafka cluster.
   */
  ClientAuthentication?: KafkaClusterClientAuthentication;
  /**
   * Details of encryption in transit to the Apache Kafka cluster.
   */
  EncryptionInTransit?: KafkaClusterEncryptionInTransit;
  /**
   * Details of an Amazon VPC which has network connectivity to the Apache Kafka cluster.
   */
  VpcConfig?: KafkaClusterClientVpcConfig;
};
/**
 * Type definition for `AWS::MSK::Replicator.KafkaClusterClientAuthentication`.
 * Details of the client authentication used by the Apache Kafka cluster.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-replicator-kafkaclusterclientauthentication.html}
 */
export type KafkaClusterClientAuthentication = {
  /**
   * Details for SASL/SCRAM client authentication.
   */
  SaslScram: KafkaClusterSaslScramAuthentication;
};
/**
 * Type definition for `AWS::MSK::Replicator.KafkaClusterClientVpcConfig`.
 * Details of an Amazon VPC which has network connectivity to the Kafka cluster.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-replicator-kafkaclusterclientvpcconfig.html}
 */
export type KafkaClusterClientVpcConfig = {
  /**
   * The AWS security groups to associate with the elastic network interfaces in order to specify what the replicator has access to. If a security group is not specified, the default security group associated with the VPC is used.
   * @minLength `1`
   * @maxLength `16`
   */
  SecurityGroupIds?: string[];
  /**
   * The list of subnets to connect to in the virtual private cloud (VPC). AWS creates elastic network interfaces inside these subnets.
   * @minLength `2`
   * @maxLength `3`
   */
  SubnetIds: string[];
};
/**
 * Type definition for `AWS::MSK::Replicator.KafkaClusterEncryptionInTransit`.
 * Details of encryption in transit to the Apache Kafka cluster.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-replicator-kafkaclusterencryptionintransit.html}
 */
export type KafkaClusterEncryptionInTransit = {
  /**
   * The type of encryption in transit to the Apache Kafka cluster.
   */
  EncryptionType: KafkaClusterEncryptionInTransitType;
  /**
   * The root CA certificate.
   */
  RootCaCertificate?: string;
};
/**
 * Type definition for `AWS::MSK::Replicator.KafkaClusterEncryptionInTransitType`.
 * The type of encryption in transit to the Apache Kafka cluster.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-replicator-kafkaclusterencryptionintransittype.html}
 */
export type KafkaClusterEncryptionInTransitType = "TLS";
/**
 * Type definition for `AWS::MSK::Replicator.KafkaClusterSaslScramAuthentication`.
 * Details for SASL/SCRAM client authentication.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-replicator-kafkaclustersaslscramauthentication.html}
 */
export type KafkaClusterSaslScramAuthentication = {
  /**
   * The SASL/SCRAM authentication mechanism.
   */
  Mechanism: KafkaClusterSaslScramMechanism;
  /**
   * The Amazon Resource Name (ARN) of the Secrets Manager secret.
   */
  SecretArn: string;
};
/**
 * Type definition for `AWS::MSK::Replicator.KafkaClusterSaslScramMechanism`.
 * The SASL/SCRAM authentication mechanism.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-replicator-kafkaclustersaslscrammechanism.html}
 */
export type KafkaClusterSaslScramMechanism = "SHA256" | "SHA512";
/**
 * Type definition for `AWS::MSK::Replicator.LogDelivery`.
 * Configuration for log delivery for the replicator.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-replicator-logdelivery.html}
 */
export type LogDelivery = {
  /**
   * The replicator logs configuration.
   */
  ReplicatorLogDelivery?: ReplicatorLogDelivery;
};
/**
 * Type definition for `AWS::MSK::Replicator.ReplicationInfo`.
 * Specifies configuration for replication between a source and target Kafka cluster.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-replicator-replicationinfo.html}
 */
export type ReplicationInfo = {
  /**
   * Configuration relating to consumer group replication.
   */
  ConsumerGroupReplication: ConsumerGroupReplication;
  /**
   * Amazon Resource Name of the source Kafka cluster.
   * @pattern `arn:(aws|aws-us-gov|aws-cn):kafka:.*`
   */
  SourceKafkaClusterArn?: string;
  /**
   * The ID of the source Kafka cluster.
   */
  SourceKafkaClusterId?: string;
  /**
   * The type of compression to use writing records to target Kafka cluster.
   */
  TargetCompressionType: "NONE" | "GZIP" | "SNAPPY" | "LZ4" | "ZSTD";
  /**
   * Amazon Resource Name of the target Kafka cluster.
   * @pattern `arn:(aws|aws-us-gov|aws-cn):kafka:.*`
   */
  TargetKafkaClusterArn?: string;
  /**
   * The ID of the target Kafka cluster.
   */
  TargetKafkaClusterId?: string;
  /**
   * Configuration relating to topic replication.
   */
  TopicReplication: TopicReplication;
};
/**
 * Type definition for `AWS::MSK::Replicator.ReplicationStartingPosition`.
 * Configuration for specifying the position in the topics to start replicating from.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-replicator-replicationstartingposition.html}
 */
export type ReplicationStartingPosition = {
  /**
   * The type of replication starting position.
   */
  Type?: ReplicationStartingPositionType;
};
/**
 * Type definition for `AWS::MSK::Replicator.ReplicationStartingPositionType`.
 * The type of replication starting position.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-replicator-replicationstartingpositiontype.html}
 */
export type ReplicationStartingPositionType = "LATEST" | "EARLIEST";
/**
 * Type definition for `AWS::MSK::Replicator.ReplicationTopicNameConfiguration`.
 * Configuration for specifying replicated topic names should be the same as their corresponding upstream topics or prefixed with source cluster alias.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-replicator-replicationtopicnameconfiguration.html}
 */
export type ReplicationTopicNameConfiguration = {
  /**
   * The type of replicated topic name.
   */
  Type?: ReplicationTopicNameConfigurationType;
};
/**
 * Type definition for `AWS::MSK::Replicator.ReplicationTopicNameConfigurationType`.
 * The type of replicated topic name.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-replicator-replicationtopicnameconfigurationtype.html}
 */
export type ReplicationTopicNameConfigurationType =
  | "PREFIXED_WITH_SOURCE_CLUSTER_ALIAS"
  | "IDENTICAL";
/**
 * Type definition for `AWS::MSK::Replicator.ReplicatorLogDelivery`.
 * Details of the log delivery for the replicator.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-replicator-replicatorlogdelivery.html}
 */
export type ReplicatorLogDelivery = {
  /**
   * Details of the CloudWatch Logs destination for replicator logs.
   */
  CloudWatchLogs?: CloudWatchLogs;
  /**
   * Details of the Kinesis Data Firehose delivery stream that is the destination for replicator logs.
   */
  Firehose?: Firehose;
  /**
   * Details of the Amazon S3 destination for replicator logs.
   */
  S3?: S3;
};
/**
 * Type definition for `AWS::MSK::Replicator.S3`.
 * Details about delivering logs to S3.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-replicator-s3.html}
 */
export type S3 = {
  /**
   * The S3 bucket that is the destination for log delivery.
   */
  Bucket?: string;
  /**
   * Whether log delivery to S3 is enabled.
   */
  Enabled: boolean;
  /**
   * The S3 prefix that is the destination for log delivery.
   */
  Prefix?: string;
};
/**
 * Type definition for `AWS::MSK::Replicator.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-replicator-tag.html}
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
 * Type definition for `AWS::MSK::Replicator.TopicReplication`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-replicator-topicreplication.html}
 */
export type TopicReplication = {
  /**
   * Whether to periodically configure remote topic ACLs to match their corresponding upstream topics.
   */
  CopyAccessControlListsForTopics?: boolean;
  /**
   * Whether to periodically configure remote topics to match their corresponding upstream topics.
   */
  CopyTopicConfigurations?: boolean;
  /**
   * Whether to periodically check for new topics and partitions.
   */
  DetectAndCopyNewTopics?: boolean;
  /**
   * Configuration for specifying the position in the topics to start replicating from.
   */
  StartingPosition?: ReplicationStartingPosition;
  /**
   * Configuration for specifying replicated topic names should be the same as their corresponding upstream topics or prefixed with source cluster alias.
   */
  TopicNameConfiguration?: ReplicationTopicNameConfiguration;
  /**
   * List of regular expression patterns indicating the topics that should not be replicated.
   * @minLength `1`
   * @maxLength `100`
   */
  TopicsToExclude?: string[];
  /**
   * List of regular expression patterns indicating the topics to copy.
   * @minLength `1`
   * @maxLength `100`
   */
  TopicsToReplicate: string[];
};
/**
 * Resource Type definition for AWS::MSK::Replicator
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-replicator.html}
 */
export class MSKReplicator extends $Resource<
  "AWS::MSK::Replicator",
  MSKReplicatorProperties,
  MSKReplicatorAttributes
> {
  public static readonly Type = "AWS::MSK::Replicator";
  constructor(
    logicalId: string,
    properties: MSKReplicatorProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, MSKReplicator.Type, properties, options);
  }
}
