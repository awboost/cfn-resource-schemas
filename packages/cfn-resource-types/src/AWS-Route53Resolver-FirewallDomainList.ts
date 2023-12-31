import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource schema for AWS::Route53Resolver::FirewallDomainList.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53resolver-firewalldomainlist.html}
 */
export type Route53ResolverFirewallDomainListProperties = {
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
   * FirewallDomainListName
   * @minLength `1`
   * @maxLength `64`
   * @pattern `(?!^[0-9]+$)([a-zA-Z0-9\-_' ']+)`
   */
  Name?: string;
  /**
   * Tags
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::Route53Resolver::FirewallDomainList`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53resolver-firewalldomainlist.html#aws-resource-route53resolver-firewalldomainlist-return-values}
 */
export type Route53ResolverFirewallDomainListAttributes = {
  /**
   * Arn
   * @minLength `1`
   * @maxLength `600`
   */
  Arn: string;
  /**
   * Rfc3339TimeString
   * @minLength `20`
   * @maxLength `40`
   */
  CreationTime: string;
  /**
   * The id of the creator request.
   * @minLength `1`
   * @maxLength `255`
   */
  CreatorRequestId: string;
  /**
   * Count
   */
  DomainCount: number;
  /**
   * ResourceId
   * @minLength `1`
   * @maxLength `64`
   */
  Id: string;
  /**
   * ServicePrincipal
   * @minLength `1`
   * @maxLength `512`
   */
  ManagedOwnerName: string;
  /**
   * Rfc3339TimeString
   * @minLength `20`
   * @maxLength `40`
   */
  ModificationTime: string;
  /**
   * ResolverFirewallDomainList, possible values are COMPLETE, DELETING, UPDATING, COMPLETE_IMPORT_FAILED, IMPORTING, and INACTIVE_OWNER_ACCOUNT_CLOSED.
   */
  Status:
    | "COMPLETE"
    | "DELETING"
    | "UPDATING"
    | "COMPLETE_IMPORT_FAILED"
    | "IMPORTING"
    | "INACTIVE_OWNER_ACCOUNT_CLOSED";
  /**
   * FirewallDomainListAssociationStatus
   */
  StatusMessage: string;
};
/**
 * Type definition for `AWS::Route53Resolver::FirewallDomainList.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53resolver-firewalldomainlist-tag.html}
 */
export type Tag = {
  /**
   * The key name of the tag. You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @minLength `1`
   * @maxLength `127`
   */
  Key: string;
  /**
   * The value for the tag. You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @maxLength `255`
   */
  Value: string;
};
/**
 * Resource schema for AWS::Route53Resolver::FirewallDomainList.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53resolver-firewalldomainlist.html}
 */
export class Route53ResolverFirewallDomainList extends $Resource<
  "AWS::Route53Resolver::FirewallDomainList",
  Route53ResolverFirewallDomainListProperties,
  Route53ResolverFirewallDomainListAttributes
> {
  public static readonly Type = "AWS::Route53Resolver::FirewallDomainList";
  public static readonly AttributeNames = [
    "Arn" as const,
    "CreationTime" as const,
    "CreatorRequestId" as const,
    "DomainCount" as const,
    "Id" as const,
    "ManagedOwnerName" as const,
    "ModificationTime" as const,
    "Status" as const,
    "StatusMessage" as const,
  ];
  constructor(
    logicalId: string,
    properties: Route53ResolverFirewallDomainListProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      Route53ResolverFirewallDomainList.Type,
      properties,
      Route53ResolverFirewallDomainList.AttributeNames,
      options,
    );
  }
}
