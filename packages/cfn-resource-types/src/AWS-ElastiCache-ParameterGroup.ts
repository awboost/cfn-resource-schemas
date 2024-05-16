import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::ElastiCache::ParameterGroup
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-parametergroup.html}
 */
export type ElastiCacheParameterGroupProperties = {
  /**
   * The name of the cache parameter group family that this cache parameter group is compatible with.
   */
  CacheParameterGroupFamily: string;
  /**
   * The description for this cache parameter group.
   */
  Description: string;
  /**
   * A comma-delimited list of parameter name/value pairs. For more information see ModifyCacheParameterGroup in the Amazon ElastiCache API Reference Guide.
   */
  Properties?: Record<string, string>;
  /**
   * Tags are composed of a Key/Value pair. You can use tags to categorize and track each parameter group. The tag value null is permitted.
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::ElastiCache::ParameterGroup`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-parametergroup.html#aws-resource-elasticache-parametergroup-return-values}
 */
export type ElastiCacheParameterGroupAttributes = {
  /**
   * The name of the Cache Parameter Group.
   */
  CacheParameterGroupName: string;
};
/**
 * Type definition for `AWS::ElastiCache::ParameterGroup.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticache-parametergroup-tag.html}
 */
export type Tag = {
  Key: string;
  Value: string;
};
/**
 * Resource Type definition for AWS::ElastiCache::ParameterGroup
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-parametergroup.html}
 */
export class ElastiCacheParameterGroup extends $Resource<
  "AWS::ElastiCache::ParameterGroup",
  ElastiCacheParameterGroupProperties,
  ElastiCacheParameterGroupAttributes
> {
  public static readonly Type = "AWS::ElastiCache::ParameterGroup";
  constructor(
    logicalId: string,
    properties: ElastiCacheParameterGroupProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, ElastiCacheParameterGroup.Type, properties, options);
  }
}
