import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::ElastiCache::CacheCluster
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-cachecluster.html}
 */
export type ElastiCacheCacheClusterProperties = {
  AZMode?: string;
  AutoMinorVersionUpgrade?: boolean;
  CacheNodeType: string;
  CacheParameterGroupName?: string;
  CacheSecurityGroupNames?: string[];
  CacheSubnetGroupName?: string;
  ClusterName?: string;
  ConfigurationEndpointAddress?: string;
  ConfigurationEndpointPort?: string;
  Engine: string;
  EngineVersion?: string;
  IpDiscovery?: string;
  LogDeliveryConfigurations?: LogDeliveryConfigurationRequest[];
  NetworkType?: string;
  NotificationTopicArn?: string;
  NumCacheNodes: number;
  Port?: number;
  PreferredAvailabilityZone?: string;
  PreferredAvailabilityZones?: string[];
  PreferredMaintenanceWindow?: string;
  RedisEndpointAddress?: string;
  RedisEndpointPort?: string;
  SnapshotArns?: string[];
  SnapshotName?: string;
  SnapshotRetentionLimit?: number;
  SnapshotWindow?: string;
  Tags?: Tag[];
  TransitEncryptionEnabled?: boolean;
  VpcSecurityGroupIds?: string[];
};
/**
 * Attribute type definition for `AWS::ElastiCache::CacheCluster`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-cachecluster.html#aws-resource-elasticache-cachecluster-return-values}
 */
export type ElastiCacheCacheClusterAttributes = {
  Id: string;
};
/**
 * Type definition for `AWS::ElastiCache::CacheCluster.CloudWatchLogsDestinationDetails`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticache-cachecluster-cloudwatchlogsdestinationdetails.html}
 */
export type CloudWatchLogsDestinationDetails = {
  LogGroup: string;
};
/**
 * Type definition for `AWS::ElastiCache::CacheCluster.DestinationDetails`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticache-cachecluster-destinationdetails.html}
 */
export type DestinationDetails = {
  CloudWatchLogsDetails?: CloudWatchLogsDestinationDetails;
  KinesisFirehoseDetails?: KinesisFirehoseDestinationDetails;
};
/**
 * Type definition for `AWS::ElastiCache::CacheCluster.KinesisFirehoseDestinationDetails`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticache-cachecluster-kinesisfirehosedestinationdetails.html}
 */
export type KinesisFirehoseDestinationDetails = {
  DeliveryStream: string;
};
/**
 * Type definition for `AWS::ElastiCache::CacheCluster.LogDeliveryConfigurationRequest`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticache-cachecluster-logdeliveryconfigurationrequest.html}
 */
export type LogDeliveryConfigurationRequest = {
  DestinationDetails: DestinationDetails;
  DestinationType: string;
  LogFormat: string;
  LogType: string;
};
/**
 * Type definition for `AWS::ElastiCache::CacheCluster.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticache-cachecluster-tag.html}
 */
export type Tag = {
  Key: string;
  Value: string;
};
/**
 * Resource Type definition for AWS::ElastiCache::CacheCluster
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-cachecluster.html}
 */
export class ElastiCacheCacheCluster extends $Resource<
  "AWS::ElastiCache::CacheCluster",
  ElastiCacheCacheClusterProperties,
  ElastiCacheCacheClusterAttributes
> {
  public static readonly Type = "AWS::ElastiCache::CacheCluster";
  constructor(
    logicalId: string,
    properties: ElastiCacheCacheClusterProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, ElastiCacheCacheCluster.Type, properties, options);
  }
}
