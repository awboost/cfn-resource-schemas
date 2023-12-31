import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource Type definition for AWS::ElastiCache::SecurityGroupIngress
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-securitygroupingress.html}
 */
export type ElastiCacheSecurityGroupIngressProperties = {
  CacheSecurityGroupName: string;
  EC2SecurityGroupName: string;
  EC2SecurityGroupOwnerId?: string;
};
/**
 * Attribute type definition for `AWS::ElastiCache::SecurityGroupIngress`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-securitygroupingress.html#aws-resource-elasticache-securitygroupingress-return-values}
 */
export type ElastiCacheSecurityGroupIngressAttributes = {
  Id: string;
};
/**
 * Resource Type definition for AWS::ElastiCache::SecurityGroupIngress
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-securitygroupingress.html}
 */
export class ElastiCacheSecurityGroupIngress extends $Resource<
  "AWS::ElastiCache::SecurityGroupIngress",
  ElastiCacheSecurityGroupIngressProperties,
  ElastiCacheSecurityGroupIngressAttributes
> {
  public static readonly Type = "AWS::ElastiCache::SecurityGroupIngress";
  public static readonly AttributeNames = ["Id" as const];
  constructor(
    logicalId: string,
    properties: ElastiCacheSecurityGroupIngressProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      ElastiCacheSecurityGroupIngress.Type,
      properties,
      ElastiCacheSecurityGroupIngress.AttributeNames,
      options,
    );
  }
}
