import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::ElastiCache::SecurityGroup
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-securitygroup.html}
 */
export type ElastiCacheSecurityGroupProperties = {
  Description: string;
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::ElastiCache::SecurityGroup`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-securitygroup.html#aws-resource-elasticache-securitygroup-return-values}
 */
export type ElastiCacheSecurityGroupAttributes = {
  Id: string;
};
/**
 * Type definition for `AWS::ElastiCache::SecurityGroup.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticache-securitygroup-tag.html}
 */
export type Tag = {
  Key: string;
  Value: string;
};
/**
 * Resource Type definition for AWS::ElastiCache::SecurityGroup
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-securitygroup.html}
 */
export class ElastiCacheSecurityGroup extends $Resource<
  "AWS::ElastiCache::SecurityGroup",
  ElastiCacheSecurityGroupProperties,
  ElastiCacheSecurityGroupAttributes
> {
  public static readonly Type = "AWS::ElastiCache::SecurityGroup";
  constructor(
    logicalId: string,
    properties: ElastiCacheSecurityGroupProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, ElastiCacheSecurityGroup.Type, properties, options);
  }
}
