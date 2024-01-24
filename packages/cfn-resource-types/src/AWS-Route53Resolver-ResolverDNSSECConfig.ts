import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource schema for AWS::Route53Resolver::ResolverDNSSECConfig.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53resolver-resolverdnssecconfig.html}
 */
export type Route53ResolverResolverDNSSECConfigProperties = {
  /**
   * ResourceId
   * @minLength `1`
   * @maxLength `64`
   */
  ResourceId?: string;
};
/**
 * Attribute type definition for `AWS::Route53Resolver::ResolverDNSSECConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53resolver-resolverdnssecconfig.html#aws-resource-route53resolver-resolverdnssecconfig-return-values}
 */
export type Route53ResolverResolverDNSSECConfigAttributes = {
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
  /**
   * ResolverDNSSECValidationStatus, possible values are ENABLING, ENABLED, DISABLING AND DISABLED.
   */
  ValidationStatus: "ENABLING" | "ENABLED" | "DISABLING" | "DISABLED";
};
/**
 * Resource schema for AWS::Route53Resolver::ResolverDNSSECConfig.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53resolver-resolverdnssecconfig.html}
 */
export class Route53ResolverResolverDNSSECConfig extends $Resource<
  "AWS::Route53Resolver::ResolverDNSSECConfig",
  Route53ResolverResolverDNSSECConfigProperties,
  Route53ResolverResolverDNSSECConfigAttributes
> {
  public static readonly Type = "AWS::Route53Resolver::ResolverDNSSECConfig";
  constructor(
    logicalId: string,
    properties: Route53ResolverResolverDNSSECConfigProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      Route53ResolverResolverDNSSECConfig.Type,
      properties,
      options,
    );
  }
}
