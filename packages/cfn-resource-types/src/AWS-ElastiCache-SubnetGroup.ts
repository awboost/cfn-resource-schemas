import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::ElastiCache::SubnetGroup
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-subnetgroup.html}
 */
export type ElastiCacheSubnetGroupProperties = {
  /**
   * The name for the cache subnet group. This value is stored as a lowercase string.
   */
  CacheSubnetGroupName?: string;
  /**
   * The description for the cache subnet group.
   */
  Description: string;
  /**
   * The EC2 subnet IDs for the cache subnet group.
   */
  SubnetIds: string[];
  Tags?: Tag[];
};
/**
 * Type definition for `AWS::ElastiCache::SubnetGroup.Tag`.
 * A tag that can be added to an ElastiCache subnet group. Tags are composed of a Key/Value pair. You can use tags to categorize and track all your subnet groups. A tag with a null Value is permitted.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticache-subnetgroup-tag.html}
 */
export type Tag = {
  Key: string;
  Value: string;
};
/**
 * Resource Type definition for AWS::ElastiCache::SubnetGroup
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-subnetgroup.html}
 */
export class ElastiCacheSubnetGroup extends $Resource<
  "AWS::ElastiCache::SubnetGroup",
  ElastiCacheSubnetGroupProperties,
  Record<string, never>
> {
  public static readonly Type = "AWS::ElastiCache::SubnetGroup";
  constructor(
    logicalId: string,
    properties: ElastiCacheSubnetGroupProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, ElastiCacheSubnetGroup.Type, properties, options);
  }
}
