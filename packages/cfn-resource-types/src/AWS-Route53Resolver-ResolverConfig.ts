import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource schema for AWS::Route53Resolver::ResolverConfig.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53resolver-resolverconfig.html}
 */
export type Route53ResolverResolverConfigProperties = {
  /**
   * Represents the desired status of AutodefinedReverse. The only supported value on creation is DISABLE. Deletion of this resource will return AutodefinedReverse to its default value (ENABLED).
   */
  AutodefinedReverseFlag: "DISABLE";
  /**
   * ResourceId
   * @minLength `1`
   * @maxLength `64`
   */
  ResourceId: string;
};
/**
 * Attribute type definition for `AWS::Route53Resolver::ResolverConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53resolver-resolverconfig.html#aws-resource-route53resolver-resolverconfig-return-values}
 */
export type Route53ResolverResolverConfigAttributes = {
  /**
   * ResolverAutodefinedReverseStatus, possible values are ENABLING, ENABLED, DISABLING AND DISABLED.
   */
  AutodefinedReverse: "ENABLING" | "ENABLED" | "DISABLING" | "DISABLED";
  /**
   * Id
   * @minLength `1`
   * @maxLength `64`
   */
  Id: string;
  /**
   * AccountId
   * @minLength `12`
   * @maxLength `32`
   */
  OwnerId: string;
};
/**
 * Resource schema for AWS::Route53Resolver::ResolverConfig.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53resolver-resolverconfig.html}
 */
export class Route53ResolverResolverConfig extends $Resource<
  "AWS::Route53Resolver::ResolverConfig",
  Route53ResolverResolverConfigProperties,
  Route53ResolverResolverConfigAttributes
> {
  public static readonly Type = "AWS::Route53Resolver::ResolverConfig";
  constructor(
    logicalId: string,
    properties: Route53ResolverResolverConfigProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, Route53ResolverResolverConfig.Type, properties, options);
  }
}
