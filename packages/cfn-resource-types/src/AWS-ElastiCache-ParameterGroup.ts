import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource Type definition for AWS::ElastiCache::ParameterGroup
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-parametergroup.html}
 */
export type ElastiCacheParameterGroupProperties = {
  CacheParameterGroupFamily: string;
  Description: string;
  Properties?: Record<string, string>;
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::ElastiCache::ParameterGroup`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-parametergroup.html#aws-resource-elasticache-parametergroup-return-values}
 */
export type ElastiCacheParameterGroupAttributes = {
  Id: string;
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
  public static readonly AttributeNames = ["Id" as const];
  constructor(
    logicalId: string,
    properties: ElastiCacheParameterGroupProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      ElastiCacheParameterGroup.Type,
      properties,
      ElastiCacheParameterGroup.AttributeNames,
      options,
    );
  }
}
