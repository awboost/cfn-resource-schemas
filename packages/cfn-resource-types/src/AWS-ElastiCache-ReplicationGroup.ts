import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for AWS::ElastiCache::ReplicationGroup
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-replicationgroup.html}
 */
export type ElastiCacheReplicationGroupProperties = {
  /**
   * A flag that enables encryption at rest when set to true.AtRestEncryptionEnabled after the replication group is created. To enable encryption at rest on a replication group you must set AtRestEncryptionEnabled to true when you create the replication group.
   */
  AtRestEncryptionEnabled?: boolean;
  /**
   * Reserved parameter. The password used to access a password protected server.AuthToken can be specified only on replication groups where TransitEncryptionEnabled is true. For more information.
   */
  AuthToken?: string;
  /**
   * This parameter is currently disabled.
   */
  AutoMinorVersionUpgrade?: boolean;
  /**
   * Specifies whether a read-only replica is automatically promoted to read/write primary if the existing primary fails. AutomaticFailoverEnabled must be enabled for Redis (cluster mode enabled) replication groups.
   */
  AutomaticFailoverEnabled?: boolean;
  /**
   * The compute and memory capacity of the nodes in the node group (shard).
   */
  CacheNodeType?: string;
  /**
   * The name of the parameter group to associate with this replication group. If this argument is omitted, the default cache parameter group for the specified engine is used.
   */
  CacheParameterGroupName?: string;
  /**
   * A list of cache security group names to associate with this replication group.
   */
  CacheSecurityGroupNames?: string[];
  /**
   * The name of the cache subnet group to be used for the replication group.
   */
  CacheSubnetGroupName?: string;
  /**
   * Enabled or Disabled. To modify cluster mode from Disabled to Enabled, you must first set the cluster mode to Compatible. Compatible mode allows your Redis OSS clients to connect using both cluster mode enabled and cluster mode disabled. After you migrate all Redis OSS clients to use cluster mode enabled, you can then complete cluster mode configuration and set the cluster mode to Enabled. For more information, see Modify cluster mode.
   */
  ClusterMode?: string;
  /**
   * Enables data tiering. Data tiering is only supported for replication groups using the r6gd node type. This parameter must be set to true when using r6gd nodes.
   */
  DataTieringEnabled?: boolean;
  /**
   * The name of the cache engine to be used for the clusters in this replication group.
   */
  Engine?: string;
  /**
   * The version number of the cache engine to be used for the clusters in this replication group. To view the supported cache engine versions, use the DescribeCacheEngineVersions operation.
   */
  EngineVersion?: string;
  /**
   * The name of the Global datastore
   */
  GlobalReplicationGroupId?: string;
  /**
   * The network type you choose when creating a replication group, either ipv4 | ipv6. IPv6 is supported for workloads using Redis OSS engine version 6.2 onward or Memcached engine version 1.6.6 on all instances built on the Nitro system.
   */
  IpDiscovery?: string;
  /**
   * The ID of the KMS key used to encrypt the disk on the cluster.
   */
  KmsKeyId?: string;
  /**
   * Specifies the destination, format and type of the logs.
   */
  LogDeliveryConfigurations?: LogDeliveryConfigurationRequest[];
  /**
   * A flag indicating if you have Multi-AZ enabled to enhance fault tolerance. For more information, see Minimizing Downtime: Multi-AZ.
   */
  MultiAZEnabled?: boolean;
  /**
   * Must be either ipv4 | ipv6 | dual_stack. IPv6 is supported for workloads using Redis OSS engine version 6.2 onward or Memcached engine version 1.6.6 on all instances built on the Nitro system
   */
  NetworkType?: string;
  /**
   * NodeGroupConfiguration is a property of the AWS::ElastiCache::ReplicationGroup resource that configures an Amazon ElastiCache (ElastiCache) Redis cluster node group.
   */
  NodeGroupConfiguration?: NodeGroupConfiguration[];
  /**
   * The Amazon Resource Name (ARN) of the Amazon Simple Notification Service (SNS) topic to which notifications are sent.
   */
  NotificationTopicArn?: string;
  /**
   * The number of clusters this replication group initially has.This parameter is not used if there is more than one node group (shard). You should use ReplicasPerNodeGroup instead.
   */
  NumCacheClusters?: number;
  /**
   * An optional parameter that specifies the number of node groups (shards) for this Redis (cluster mode enabled) replication group. For Redis (cluster mode disabled) either omit this parameter or set it to 1.
   */
  NumNodeGroups?: number;
  /**
   * The port number on which each member of the replication group accepts connections.
   */
  Port?: number;
  /**
   * A list of EC2 Availability Zones in which the replication group's clusters are created. The order of the Availability Zones in the list is the order in which clusters are allocated. The primary cluster is created in the first AZ in the list. This parameter is not used if there is more than one node group (shard). You should use NodeGroupConfiguration instead.
   */
  PreferredCacheClusterAZs?: string[];
  /**
   * Specifies the weekly time range during which maintenance on the cluster is performed. It is specified as a range in the format ddd:hh24:mi-ddd:hh24:mi (24H Clock UTC). The minimum maintenance window is a 60 minute period.
   */
  PreferredMaintenanceWindow?: string;
  /**
   * The identifier of the cluster that serves as the primary for this replication group. This cluster must already exist and have a status of available.
   */
  PrimaryClusterId?: string;
  /**
   * An optional parameter that specifies the number of replica nodes in each node group (shard). Valid values are 0 to 5.
   */
  ReplicasPerNodeGroup?: number;
  /**
   * A user-created description for the replication group.
   */
  ReplicationGroupDescription: string;
  /**
   * The replication group identifier. This parameter is stored as a lowercase string.
   */
  ReplicationGroupId?: string;
  /**
   * One or more Amazon VPC security groups associated with this replication group.
   */
  SecurityGroupIds?: string[];
  /**
   * A list of Amazon Resource Names (ARN) that uniquely identify the Redis RDB snapshot files stored in Amazon S3.
   */
  SnapshotArns?: string[];
  /**
   * The name of a snapshot from which to restore data into the new replication group. The snapshot status changes to restoring while the new replication group is being created.
   */
  SnapshotName?: string;
  /**
   * The number of days for which ElastiCache retains automatic snapshots before deleting them. For example, if you set SnapshotRetentionLimit to 5, a snapshot that was taken today is retained for 5 days before being deleted.
   */
  SnapshotRetentionLimit?: number;
  /**
   * The daily time range (in UTC) during which ElastiCache begins taking a daily snapshot of your node group (shard).
   */
  SnapshotWindow?: string;
  /**
   * The cluster ID that is used as the daily snapshot source for the replication group. This parameter cannot be set for Redis (cluster mode enabled) replication groups.
   */
  SnapshottingClusterId?: string;
  /**
   * A list of cost allocation tags to be added to this resource. Tags are comma-separated key,value pairs (e.g. Key=myKey, Value=myKeyValue. You can include multiple tags as shown following: Key=myKey, Value=myKeyValue Key=mySecondKey, Value=mySecondKeyValue.
   */
  Tags?: Tag[];
  /**
   * A flag that enables in-transit encryption when set to true.
   */
  TransitEncryptionEnabled?: boolean;
  /**
   * A setting that allows you to migrate your clients to use in-transit encryption, with no downtime. When setting TransitEncryptionEnabled to true, you can set your TransitEncryptionMode to preferred in the same request, to allow both encrypted and unencrypted connections at the same time. Once you migrate all your Redis OSS clients to use encrypted connections you can modify the value to required to allow encrypted connections only. Setting TransitEncryptionMode to required is a two-step process that requires you to first set the TransitEncryptionMode to preferred, after that you can set TransitEncryptionMode to required. This process will not trigger the replacement of the replication group.
   */
  TransitEncryptionMode?: string;
  /**
   * The ID of user group to associate with the replication group.
   */
  UserGroupIds?: string[];
};
/**
 * Attribute type definition for `AWS::ElastiCache::ReplicationGroup`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-replicationgroup.html#aws-resource-elasticache-replicationgroup-return-values}
 */
export type ElastiCacheReplicationGroupAttributes = {
  /**
   * The configuration details of the replication group.
   */
  ConfigurationEndPoint: {
    /**
     * The DNS hostname of the cache node.
     */
    Address: string;
    /**
     * The port number that the cache engine is listening on.
     */
    Port: string;
  };
  /**
   * The primary endpoint configuration
   */
  PrimaryEndPoint: {
    /**
     * The DNS hostname of the cache node.
     */
    Address: string;
    /**
     * The port number that the cache engine is listening on.
     */
    Port: string;
  };
  ReadEndPoint: {
    /**
     * A string containing a comma-separated list of endpoints for the primary and read-only replicas, formatted as [address1, address2, ...]. The order of the addresses maps to the order of the ports from the ReadEndPoint.Ports attribute.
     */
    Addresses: string;
    /**
     * A list of endpoints for the read-only replicas. The order of the addresses maps to the order of the ports from the ReadEndPoint.Ports attribute.
     */
    AddressesList: string[];
    /**
     * A string containing a comma-separated list of ports for the read-only replicas, formatted as [port1, port2, ...]. The order of the ports maps to the order of the addresses from the ReadEndPoint.Addresses attribute.
     */
    Ports: string;
    /**
     * A list of ports for the read-only replicas. The order of the ports maps to the order of the addresses from the ReadEndPoint.Addresses attribute.
     */
    PortsList: string[];
  };
  /**
   * The endpoint of the reader node in the replication group.
   */
  ReaderEndPoint: {
    /**
     * The DNS hostname of the cache node.
     */
    Address: string;
    /**
     * The port number that the cache engine is listening on.
     */
    Port: string;
  };
};
/**
 * Type definition for `AWS::ElastiCache::ReplicationGroup.CloudWatchLogsDestinationDetails`.
 * The configuration details of the CloudWatch Logs destination. Note that this field is marked as required but only if CloudWatch Logs was chosen as the destination.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticache-replicationgroup-cloudwatchlogsdestinationdetails.html}
 */
export type CloudWatchLogsDestinationDetails = {
  /**
   * The name of the CloudWatch Logs log group.
   */
  LogGroup: string;
};
/**
 * Type definition for `AWS::ElastiCache::ReplicationGroup.DestinationDetails`.
 * Configuration details of either a CloudWatch Logs destination or Kinesis Data Firehose destination.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticache-replicationgroup-destinationdetails.html}
 */
export type DestinationDetails = {
  /**
   * The configuration details of the CloudWatch Logs destination. Note that this field is marked as required but only if CloudWatch Logs was chosen as the destination.
   */
  CloudWatchLogsDetails?: CloudWatchLogsDestinationDetails;
  /**
   * The configuration details of the Kinesis Data Firehose destination. Note that this field is marked as required but only if Kinesis Data Firehose was chosen as the destination.
   */
  KinesisFirehoseDetails?: KinesisFirehoseDestinationDetails;
};
/**
 * Type definition for `AWS::ElastiCache::ReplicationGroup.KinesisFirehoseDestinationDetails`.
 * The configuration details of the Kinesis Data Firehose destination. Note that this field is marked as required but only if Kinesis Data Firehose was chosen as the destination.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticache-replicationgroup-kinesisfirehosedestinationdetails.html}
 */
export type KinesisFirehoseDestinationDetails = {
  /**
   * The name of the Kinesis Data Firehose delivery stream.
   */
  DeliveryStream: string;
};
/**
 * Type definition for `AWS::ElastiCache::ReplicationGroup.LogDeliveryConfigurationRequest`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticache-replicationgroup-logdeliveryconfigurationrequest.html}
 */
export type LogDeliveryConfigurationRequest = {
  /**
   * Configuration details of either a CloudWatch Logs destination or Kinesis Data Firehose destination.
   */
  DestinationDetails: DestinationDetails;
  /**
   * Specify either CloudWatch Logs or Kinesis Data Firehose as the destination type. Valid values are either cloudwatch-logs or kinesis-firehose.
   */
  DestinationType: string;
  /**
   * Valid values are either json or text.
   */
  LogFormat: string;
  /**
   * Valid value is either slow-log, which refers to slow-log or engine-log.
   */
  LogType: string;
};
/**
 * Type definition for `AWS::ElastiCache::ReplicationGroup.NodeGroupConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticache-replicationgroup-nodegroupconfiguration.html}
 */
export type NodeGroupConfiguration = {
  /**
   * Either the ElastiCache for Redis supplied 4-digit id or a user supplied id for the node group these configuration values apply to.
   */
  NodeGroupId?: string;
  /**
   * The Availability Zone where the primary node of this node group (shard) is launched.
   */
  PrimaryAvailabilityZone?: string;
  /**
   * A list of Availability Zones to be used for the read replicas. The number of Availability Zones in this list must match the value of ReplicaCount or ReplicasPerNodeGroup if not specified.
   */
  ReplicaAvailabilityZones?: string[];
  /**
   * The number of read replica nodes in this node group (shard).
   */
  ReplicaCount?: number;
  /**
   * A string of comma-separated values where the first set of values are the slot numbers (zero based), and the second set of values are the keyspaces for each slot. The following example specifies three slots (numbered 0, 1, and 2): 0,1,2,0-4999,5000-9999,10000-16,383.
   */
  Slots?: string;
};
/**
 * Type definition for `AWS::ElastiCache::ReplicationGroup.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticache-replicationgroup-tag.html}
 */
export type Tag = {
  /**
   * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   */
  Key: string;
  /**
   * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   */
  Value: string;
};
/**
 * Resource type definition for AWS::ElastiCache::ReplicationGroup
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-replicationgroup.html}
 */
export class ElastiCacheReplicationGroup extends $Resource<
  "AWS::ElastiCache::ReplicationGroup",
  ElastiCacheReplicationGroupProperties,
  ElastiCacheReplicationGroupAttributes
> {
  public static readonly Type = "AWS::ElastiCache::ReplicationGroup";
  constructor(
    logicalId: string,
    properties: ElastiCacheReplicationGroupProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, ElastiCacheReplicationGroup.Type, properties, options);
  }
}
