import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource schema for AWS::Route53GlobalResolver::FirewallRule
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53globalresolver-firewallrule.html}
 */
export type Route53GlobalResolverFirewallRuleProperties = {
  Action: FirewallRuleAction;
  BlockOverrideDnsType?: BlockOverrideDnsQueryType;
  /**
   * @minLength `1`
   * @maxLength `256`
   * @pattern `\*?[-a-zA-Z0-9.]+`
   */
  BlockOverrideDomain?: string;
  /**
   * @min `0`
   * @max `604800`
   */
  BlockOverrideTtl?: number;
  BlockResponse?: FirewallBlockResponse;
  /**
   * @minLength `1`
   * @maxLength `256`
   */
  ClientToken?: string;
  ConfidenceThreshold?: ConfidenceThreshold;
  /**
   * @minLength `1`
   * @maxLength `256`
   */
  Description?: string;
  DnsAdvancedProtection?: DnsAdvancedProtection;
  /**
   * @minLength `1`
   * @maxLength `64`
   */
  DnsViewId: string;
  /**
   * @minLength `1`
   * @maxLength `64`
   */
  FirewallDomainListId?: string;
  /**
   * @minLength `1`
   * @maxLength `64`
   * @pattern `(?!^[0-9]+$)([a-zA-Z0-9-_' ']+)`
   */
  Name: string;
  /**
   * @min `1`
   * @max `10000`
   */
  Priority?: number;
  /**
   * @minLength `0`
   * @maxLength `16`
   */
  QType?: string;
};
/**
 * Attribute type definition for `AWS::Route53GlobalResolver::FirewallRule`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53globalresolver-firewallrule.html#aws-resource-route53globalresolver-firewallrule-return-values}
 */
export type Route53GlobalResolverFirewallRuleAttributes = {
  CreatedAt: string;
  /**
   * @minLength `1`
   * @maxLength `64`
   */
  FirewallRuleId: string;
  /**
   * @minLength `0`
   * @maxLength `16`
   */
  QueryType: string;
  Status: CRResourceStatus;
  UpdatedAt: string;
};
/**
 * Type definition for `AWS::Route53GlobalResolver::FirewallRule.BlockOverrideDnsQueryType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53globalresolver-firewallrule-blockoverridednsquerytype.html}
 */
export type BlockOverrideDnsQueryType = "CNAME";
/**
 * Type definition for `AWS::Route53GlobalResolver::FirewallRule.ConfidenceThreshold`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53globalresolver-firewallrule-confidencethreshold.html}
 */
export type ConfidenceThreshold = "LOW" | "MEDIUM" | "HIGH";
/**
 * Type definition for `AWS::Route53GlobalResolver::FirewallRule.CRResourceStatus`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53globalresolver-firewallrule-crresourcestatus.html}
 */
export type CRResourceStatus =
  | "CREATING"
  | "OPERATIONAL"
  | "UPDATING"
  | "DELETING";
/**
 * Type definition for `AWS::Route53GlobalResolver::FirewallRule.DnsAdvancedProtection`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53globalresolver-firewallrule-dnsadvancedprotection.html}
 */
export type DnsAdvancedProtection = "DGA" | "DNS_TUNNELING" | "DICTIONARY_DGA";
/**
 * Type definition for `AWS::Route53GlobalResolver::FirewallRule.FirewallBlockResponse`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53globalresolver-firewallrule-firewallblockresponse.html}
 */
export type FirewallBlockResponse = "NODATA" | "NXDOMAIN" | "OVERRIDE";
/**
 * Type definition for `AWS::Route53GlobalResolver::FirewallRule.FirewallRuleAction`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53globalresolver-firewallrule-firewallruleaction.html}
 */
export type FirewallRuleAction = "ALLOW" | "ALERT" | "BLOCK";
/**
 * Resource schema for AWS::Route53GlobalResolver::FirewallRule
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53globalresolver-firewallrule.html}
 */
export class Route53GlobalResolverFirewallRule extends $Resource<
  "AWS::Route53GlobalResolver::FirewallRule",
  Route53GlobalResolverFirewallRuleProperties,
  Route53GlobalResolverFirewallRuleAttributes
> {
  public static readonly Type = "AWS::Route53GlobalResolver::FirewallRule";
  constructor(
    logicalId: string,
    properties: Route53GlobalResolverFirewallRuleProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      Route53GlobalResolverFirewallRule.Type,
      properties,
      options,
    );
  }
}
