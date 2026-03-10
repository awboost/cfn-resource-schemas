import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource schema for AWS::Route53GlobalResolver::GlobalResolver
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53globalresolver-globalresolver.html}
 */
export type Route53GlobalResolverGlobalResolverProperties = {
  /**
   * @minLength `1`
   * @maxLength `256`
   */
  ClientToken?: string;
  /**
   * @minLength `1`
   * @maxLength `256`
   */
  Description?: string;
  IpAddressType?: GlobalResolverIpAddressType;
  /**
   * @minLength `1`
   * @maxLength `64`
   * @pattern `(?!^[0-9]+$)([a-zA-Z0-9-_' ']+)`
   */
  Name: string;
  /**
   * @minLength `1`
   * @maxLength `32`
   */
  ObservabilityRegion?: string;
  Regions: string[];
  /**
   * @maxLength `50`
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::Route53GlobalResolver::GlobalResolver`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53globalresolver-globalresolver.html#aws-resource-route53globalresolver-globalresolver-return-values}
 */
export type Route53GlobalResolverGlobalResolverAttributes = {
  /**
   * @minLength `1`
   * @maxLength `2048`
   */
  Arn: string;
  CreatedAt: string;
  /**
   * @minLength `1`
   * @maxLength `128`
   */
  DnsName: string;
  /**
   * @minLength `1`
   * @maxLength `64`
   */
  GlobalResolverId: string;
  IPv4Addresses: string[];
  IPv6Addresses: string[];
  Status: CRResourceStatus;
  UpdatedAt: string;
};
/**
 * Type definition for `AWS::Route53GlobalResolver::GlobalResolver.CRResourceStatus`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53globalresolver-globalresolver-crresourcestatus.html}
 */
export type CRResourceStatus =
  | "CREATING"
  | "OPERATIONAL"
  | "UPDATING"
  | "DELETING";
/**
 * Type definition for `AWS::Route53GlobalResolver::GlobalResolver.GlobalResolverIpAddressType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53globalresolver-globalresolver-globalresolveripaddresstype.html}
 */
export type GlobalResolverIpAddressType = "IPV4" | "DUAL_STACK";
/**
 * Type definition for `AWS::Route53GlobalResolver::GlobalResolver.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53globalresolver-globalresolver-tag.html}
 */
export type Tag = {
  /**
   * @minLength `1`
   * @maxLength `128`
   */
  Key: string;
  /**
   * @minLength `0`
   * @maxLength `256`
   */
  Value: string;
};
/**
 * Resource schema for AWS::Route53GlobalResolver::GlobalResolver
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53globalresolver-globalresolver.html}
 */
export class Route53GlobalResolverGlobalResolver extends $Resource<
  "AWS::Route53GlobalResolver::GlobalResolver",
  Route53GlobalResolverGlobalResolverProperties,
  Route53GlobalResolverGlobalResolverAttributes
> {
  public static readonly Type = "AWS::Route53GlobalResolver::GlobalResolver";
  constructor(
    logicalId: string,
    properties: Route53GlobalResolverGlobalResolverProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      Route53GlobalResolverGlobalResolver.Type,
      properties,
      options,
    );
  }
}
