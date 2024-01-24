import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::ElastiCache::ReplicationGroup
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-replicationgroup.html}
 */
export type ElastiCacheReplicationGroupProperties = {
  AtRestEncryptionEnabled?: boolean;
  AuthToken?: string;
  AutoMinorVersionUpgrade?: boolean;
  AutomaticFailoverEnabled?: boolean;
  CacheNodeType?: string;
  CacheParameterGroupName?: string;
  CacheSecurityGroupNames?: string[];
  CacheSubnetGroupName?: string;
  ClusterMode?: string;
  ConfigurationEndPointAddress?: string;
  ConfigurationEndPointPort?: string;
  DataTieringEnabled?: boolean;
  Engine?: string;
  EngineVersion?: string;
  GlobalReplicationGroupId?: string;
  IpDiscovery?: string;
  KmsKeyId?: string;
  LogDeliveryConfigurations?: LogDeliveryConfigurationRequest[];
  MultiAZEnabled?: boolean;
  NetworkType?: string;
  NodeGroupConfiguration?: NodeGroupConfiguration[];
  NotificationTopicArn?: string;
  NumCacheClusters?: number;
  NumNodeGroups?: number;
  Port?: number;
  PreferredCacheClusterAZs?: string[];
  PreferredMaintenanceWindow?: string;
  PrimaryClusterId?: string;
  PrimaryEndPointAddress?: string;
  PrimaryEndPointPort?: string;
  ReadEndPointAddresses?: string;
  ReadEndPointAddressesList?: string[];
  ReadEndPointPorts?: string;
  ReadEndPointPortsList?: string[];
  ReaderEndPointAddress?: string;
  ReaderEndPointPort?: string;
  ReplicasPerNodeGroup?: number;
  ReplicationGroupDescription: string;
  SecurityGroupIds?: string[];
  SnapshotArns?: string[];
  SnapshotName?: string;
  SnapshotRetentionLimit?: number;
  SnapshotWindow?: string;
  SnapshottingClusterId?: string;
  Tags?: Tag[];
  TransitEncryptionEnabled?: boolean;
  TransitEncryptionMode?: string;
  UserGroupIds?: string[];
};
/**
 * Attribute type definition for `AWS::ElastiCache::ReplicationGroup`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-replicationgroup.html#aws-resource-elasticache-replicationgroup-return-values}
 */
export type ElastiCacheReplicationGroupAttributes = {
  ReplicationGroupId: string;
};
/**
 * Type definition for `AWS::ElastiCache::ReplicationGroup.CloudWatchLogsDestinationDetails`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticache-replicationgroup-cloudwatchlogsdestinationdetails.html}
 */
export type CloudWatchLogsDestinationDetails = {
  LogGroup: string;
};
/**
 * Type definition for `AWS::ElastiCache::ReplicationGroup.DestinationDetails`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticache-replicationgroup-destinationdetails.html}
 */
export type DestinationDetails = {
  CloudWatchLogsDetails?: CloudWatchLogsDestinationDetails;
  KinesisFirehoseDetails?: KinesisFirehoseDestinationDetails;
};
/**
 * Type definition for `AWS::ElastiCache::ReplicationGroup.KinesisFirehoseDestinationDetails`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticache-replicationgroup-kinesisfirehosedestinationdetails.html}
 */
export type KinesisFirehoseDestinationDetails = {
  DeliveryStream: string;
};
/**
 * Type definition for `AWS::ElastiCache::ReplicationGroup.LogDeliveryConfigurationRequest`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticache-replicationgroup-logdeliveryconfigurationrequest.html}
 */
export type LogDeliveryConfigurationRequest = {
  DestinationDetails: DestinationDetails;
  DestinationType: string;
  LogFormat: string;
  LogType: string;
};
/**
 * Type definition for `AWS::ElastiCache::ReplicationGroup.NodeGroupConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticache-replicationgroup-nodegroupconfiguration.html}
 */
export type NodeGroupConfiguration = {
  NodeGroupId?: string;
  PrimaryAvailabilityZone?: string;
  ReplicaAvailabilityZones?: string[];
  ReplicaCount?: number;
  Slots?: string;
};
/**
 * Type definition for `AWS::ElastiCache::ReplicationGroup.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticache-replicationgroup-tag.html}
 */
export type Tag = {
  Key: string;
  Value: string;
};
/**
 * Resource Type definition for AWS::ElastiCache::ReplicationGroup
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
