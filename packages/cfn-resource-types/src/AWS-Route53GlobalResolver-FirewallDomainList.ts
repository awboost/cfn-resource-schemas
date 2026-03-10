import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource schema for AWS::Route53GlobalResolver::FirewallDomainList
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53globalresolver-firewalldomainlist.html}
 */
export type Route53GlobalResolverFirewallDomainListProperties = {
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
  /**
   * S3 URL to import domains from.
   * @minLength `1`
   * @maxLength `1024`
   */
  DomainFileUrl?: string;
  /**
   * An inline list of domains to use for this domain list.
   */
  Domains?: string[];
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
 * Attribute type definition for `AWS::Route53GlobalResolver::FirewallDomainList`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53globalresolver-firewalldomainlist.html#aws-resource-route53globalresolver-firewalldomainlist-return-values}
 */
export type Route53GlobalResolverFirewallDomainListAttributes = {
  /**
   * @minLength `1`
   * @maxLength `2048`
   */
  Arn: string;
  CreatedAt: string;
  DomainCount: number;
  /**
   * @minLength `1`
   * @maxLength `64`
   */
  FirewallDomainListId: string;
  Status: CRResourceStatus;
  StatusMessage: string;
  UpdatedAt: string;
};
/**
 * Type definition for `AWS::Route53GlobalResolver::FirewallDomainList.CRResourceStatus`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53globalresolver-firewalldomainlist-crresourcestatus.html}
 */
export type CRResourceStatus =
  | "CREATING"
  | "OPERATIONAL"
  | "UPDATING"
  | "DELETING";
/**
 * Type definition for `AWS::Route53GlobalResolver::FirewallDomainList.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53globalresolver-firewalldomainlist-tag.html}
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
 * Resource schema for AWS::Route53GlobalResolver::FirewallDomainList
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53globalresolver-firewalldomainlist.html}
 */
export class Route53GlobalResolverFirewallDomainList extends $Resource<
  "AWS::Route53GlobalResolver::FirewallDomainList",
  Route53GlobalResolverFirewallDomainListProperties,
  Route53GlobalResolverFirewallDomainListAttributes
> {
  public static readonly Type =
    "AWS::Route53GlobalResolver::FirewallDomainList";
  constructor(
    logicalId: string,
    properties: Route53GlobalResolverFirewallDomainListProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      Route53GlobalResolverFirewallDomainList.Type,
      properties,
      options,
    );
  }
}
