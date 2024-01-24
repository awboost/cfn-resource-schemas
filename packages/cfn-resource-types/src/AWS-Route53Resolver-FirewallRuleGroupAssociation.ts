import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource schema for AWS::Route53Resolver::FirewallRuleGroupAssociation.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53resolver-firewallrulegroupassociation.html}
 */
export type Route53ResolverFirewallRuleGroupAssociationProperties = {
  /**
   * FirewallRuleGroupId
   * @minLength `1`
   * @maxLength `64`
   */
  FirewallRuleGroupId: string;
  /**
   * MutationProtectionStatus
   */
  MutationProtection?: "ENABLED" | "DISABLED";
  /**
   * FirewallRuleGroupAssociationName
   * @minLength `0`
   * @maxLength `64`
   * @pattern `(?!^[0-9]+$)([a-zA-Z0-9\-_' ']+)`
   */
  Name?: string;
  /**
   * Priority
   */
  Priority: number;
  /**
   * Tags
   */
  Tags?: Tag[];
  /**
   * VpcId
   * @minLength `1`
   * @maxLength `64`
   */
  VpcId: string;
};
/**
 * Attribute type definition for `AWS::Route53Resolver::FirewallRuleGroupAssociation`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53resolver-firewallrulegroupassociation.html#aws-resource-route53resolver-firewallrulegroupassociation-return-values}
 */
export type Route53ResolverFirewallRuleGroupAssociationAttributes = {
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
   * Id
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
   * ResolverFirewallRuleGroupAssociation, possible values are COMPLETE, DELETING, UPDATING, and INACTIVE_OWNER_ACCOUNT_CLOSED.
   */
  Status:
    | "COMPLETE"
    | "DELETING"
    | "UPDATING"
    | "INACTIVE_OWNER_ACCOUNT_CLOSED";
  /**
   * FirewallDomainListAssociationStatus
   */
  StatusMessage: string;
};
/**
 * Type definition for `AWS::Route53Resolver::FirewallRuleGroupAssociation.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53resolver-firewallrulegroupassociation-tag.html}
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
   * @minLength `0`
   * @maxLength `255`
   */
  Value: string;
};
/**
 * Resource schema for AWS::Route53Resolver::FirewallRuleGroupAssociation.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53resolver-firewallrulegroupassociation.html}
 */
export class Route53ResolverFirewallRuleGroupAssociation extends $Resource<
  "AWS::Route53Resolver::FirewallRuleGroupAssociation",
  Route53ResolverFirewallRuleGroupAssociationProperties,
  Route53ResolverFirewallRuleGroupAssociationAttributes
> {
  public static readonly Type =
    "AWS::Route53Resolver::FirewallRuleGroupAssociation";
  constructor(
    logicalId: string,
    properties: Route53ResolverFirewallRuleGroupAssociationProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      Route53ResolverFirewallRuleGroupAssociation.Type,
      properties,
      options,
    );
  }
}
