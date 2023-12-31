import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::MSK::Replicator
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-replicator.html}
 */
export type MSKReplicatorProperties = {
  /**
   * The current version of the MSK replicator.
   */
  CurrentVersion?: string;
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
 * Type definition for `AWS::MSK::Replicator.ConsumerGroupReplication`.
 * Configuration relating to consumer group replication.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-replicator-consumergroupreplication.html}
 */
export type ConsumerGroupReplication = {
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
 * Type definition for `AWS::MSK::Replicator.KafkaCluster`.
 * Details of a Kafka cluster for replication.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-replicator-kafkacluster.html}
 */
export type KafkaCluster = {
  /**
   * Details of an Amazon MSK cluster. Exactly one of AmazonMskCluster is required.
   */
  AmazonMskCluster: AmazonMskCluster;
  /**
   * Details of an Amazon VPC which has network connectivity to the Apache Kafka cluster.
   */
  VpcConfig: KafkaClusterClientVpcConfig;
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
  SourceKafkaClusterArn: string;
  /**
   * The type of compression to use writing records to target Kafka cluster.
   */
  TargetCompressionType: "NONE" | "GZIP" | "SNAPPY" | "LZ4" | "ZSTD";
  /**
   * Amazon Resource Name of the target Kafka cluster.
   * @pattern `arn:(aws|aws-us-gov|aws-cn):kafka:.*`
   */
  TargetKafkaClusterArn: string;
  /**
   * Configuration relating to topic replication.
   */
  TopicReplication: TopicReplication;
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
