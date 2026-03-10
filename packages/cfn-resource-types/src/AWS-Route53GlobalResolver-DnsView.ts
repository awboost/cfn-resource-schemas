import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource schema for AWS::Route53GlobalResolver::DnsView
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53globalresolver-dnsview.html}
 */
export type Route53GlobalResolverDnsViewProperties = {
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
  DnssecValidation?: DnsSecValidationType;
  EdnsClientSubnet?: EdnsClientSubnetType;
  FirewallRulesFailOpen?: FirewallRulesFailOpenType;
  /**
   * @minLength `1`
   * @maxLength `64`
   */
  GlobalResolverId: string;
  /**
   * @minLength `1`
   * @maxLength `64`
   * @pattern `(?!^[0-9]+$)([a-zA-Z0-9-_' ']+)`
   */
  Name: string;
  /**
   * @maxLength `50`
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::Route53GlobalResolver::DnsView`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53globalresolver-dnsview.html#aws-resource-route53globalresolver-dnsview-return-values}
 */
export type Route53GlobalResolverDnsViewAttributes = {
  /**
   * @minLength `1`
   * @maxLength `2048`
   */
  Arn: string;
  CreatedAt: string;
  /**
   * @minLength `1`
   * @maxLength `64`
   */
  DnsViewId: string;
  Status: ProfileResourceStatus;
  UpdatedAt: string;
};
/**
 * Type definition for `AWS::Route53GlobalResolver::DnsView.DnsSecValidationType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53globalresolver-dnsview-dnssecvalidationtype.html}
 */
export type DnsSecValidationType = "ENABLED" | "DISABLED";
/**
 * Type definition for `AWS::Route53GlobalResolver::DnsView.EdnsClientSubnetType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53globalresolver-dnsview-ednsclientsubnettype.html}
 */
export type EdnsClientSubnetType = "ENABLED" | "DISABLED";
/**
 * Type definition for `AWS::Route53GlobalResolver::DnsView.FirewallRulesFailOpenType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53globalresolver-dnsview-firewallrulesfailopentype.html}
 */
export type FirewallRulesFailOpenType = "ENABLED" | "DISABLED";
/**
 * Type definition for `AWS::Route53GlobalResolver::DnsView.ProfileResourceStatus`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53globalresolver-dnsview-profileresourcestatus.html}
 */
export type ProfileResourceStatus =
  | "CREATING"
  | "OPERATIONAL"
  | "UPDATING"
  | "ENABLING"
  | "DISABLING"
  | "DISABLED"
  | "DELETING";
/**
 * Type definition for `AWS::Route53GlobalResolver::DnsView.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53globalresolver-dnsview-tag.html}
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
 * Resource schema for AWS::Route53GlobalResolver::DnsView
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53globalresolver-dnsview.html}
 */
export class Route53GlobalResolverDnsView extends $Resource<
  "AWS::Route53GlobalResolver::DnsView",
  Route53GlobalResolverDnsViewProperties,
  Route53GlobalResolverDnsViewAttributes
> {
  public static readonly Type = "AWS::Route53GlobalResolver::DnsView";
  constructor(
    logicalId: string,
    properties: Route53GlobalResolverDnsViewProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, Route53GlobalResolverDnsView.Type, properties, options);
  }
}
