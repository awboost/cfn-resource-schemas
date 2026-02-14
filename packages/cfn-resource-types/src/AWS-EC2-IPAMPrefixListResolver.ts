import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::EC2::IPAMPrefixListResolver
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-ipamprefixlistresolver.html}
 */
export type EC2IPAMPrefixListResolverProperties = {
  /**
   * The address family of the address space in this Prefix List Resolver. Either IPv4 or IPv6.
   */
  AddressFamily: string;
  Description?: string;
  /**
   * The Id of the IPAM this Prefix List Resolver is a part of.
   */
  IpamId?: string;
  /**
   * Rules define the business logic for selecting CIDRs from IPAM.
   */
  Rules?: IpamPrefixListResolverRule[];
  /**
   * An array of key-value pairs to apply to this resource.
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::EC2::IPAMPrefixListResolver`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-ipamprefixlistresolver.html#aws-resource-ec2-ipamprefixlistresolver-return-values}
 */
export type EC2IPAMPrefixListResolverAttributes = {
  /**
   * The Amazon Resource Name (ARN) of the IPAM this Prefix List Resolver is a part of.
   */
  IpamArn: string;
  /**
   * The Amazon Resource Name (ARN) of the IPAM Prefix List Resolver
   */
  IpamPrefixListResolverArn: string;
  /**
   * Id of the IPAM Prefix List Resolver.
   */
  IpamPrefixListResolverId: string;
};
/**
 * Type definition for `AWS::EC2::IPAMPrefixListResolver.IpamPrefixListResolverRule`.
 * CIDR selection rules define the business logic for selecting CIDRs from IPAM.  If a CIDR matches any of the rules, it will be included. If a rule has multiple conditions, the CIDR has to match every condition of that rule. You can create a prefix list resolver without rules, but you'll need to add at least one rule before it can actually automate your prefix list updates.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-ipamprefixlistresolver-ipamprefixlistresolverrule.html}
 */
export type IpamPrefixListResolverRule = {
  /**
   * Two of the rule types allow you to add conditions to the rules. (1) For IPAM Pool CIDR rules, you can specify an ipamPoolId; if not specified, the rule will apply to all IPAM Pool CIDRs in the scope.  (2) For IPAM Resource CIDR rules, you can specify resourceId, resourceOwner, resourceRegion, cidr, or resourceTag.
   */
  Conditions?: IpamPrefixListResolverRuleCondition[];
  /**
   * This rule will only match resources that are in this IPAM Scope.
   */
  IpamScopeId?: string;
  /**
   * The resourceType property only applies to ipam-resource-cidr rules; this property specifies what type of resources this rule will apply to, such as VPCs or Subnets.
   */
  ResourceType?: "vpc" | "subnet" | "eip" | "public-ipv4-pool";
  /**
   * There are three rule types: (1) Static CIDR: A fixed list of CIDRs that don't change (like a manual list replicated across Regions). (2) IPAM pool CIDR: CIDRs from specific IPAM pools (like all CIDRs from your IPAM production pool).  (3) IPAM resource CIDR: CIDRs for AWS resources like VPCs, subnets, and EIPs within a specific IPAM scope.
   */
  RuleType: "static-cidr" | "ipam-resource-cidr" | "ipam-pool-cidr";
  /**
   * A fixed CIDR that doesn't change
   */
  StaticCidr?: string;
};
/**
 * Type definition for `AWS::EC2::IPAMPrefixListResolver.IpamPrefixListResolverRuleCondition`.
 * Two of the rule types allow you to add conditions to the rules. (1) For IPAM Pool CIDR rules, you can specify an ipamPoolId; if not specified, the rule will apply to all IPAM Pool CIDRs in the scope.  (2) For IPAM Resource CIDR rules, you can specify resourceId, resourceOwner, resourceRegion, cidr, or resourceTag.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-ipamprefixlistresolver-ipamprefixlistresolverrulecondition.html}
 */
export type IpamPrefixListResolverRuleCondition = {
  /**
   * Condition for the IPAM Resource CIDR rule type.  CIDR (like 10.24.34.0/23).
   */
  Cidr?: string;
  /**
   * Condition for the IPAM Pool CIDR rule type.  If not chosen, the resolver applies to all IPAM Pool CIDRs in the scope.
   */
  IpamPoolId?: string;
  /**
   * Equals, Not equals, or Subnet Of.  The subnet-of operation only applies to cidr conditions.
   */
  Operation?: "equals" | "not-equals" | "subnet-of";
  /**
   * Condition for the IPAM Resource CIDR rule type.  The unique ID of a resource (like vpc-1234567890abcdef0).
   */
  ResourceId?: string;
  /**
   * Condition for the IPAM Resource CIDR rule type.  Resource owner (like 111122223333).
   */
  ResourceOwner?: string;
  /**
   * Condition for the IPAM Resource CIDR rule type.  Resource region (like us-east-1).
   */
  ResourceRegion?: string;
  /**
   * Condition for the IPAM Resource CIDR rule type.  Resource Tag (like dev-vpc-1).
   */
  ResourceTag?: Tag;
};
/**
 * Type definition for `AWS::EC2::IPAMPrefixListResolver.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-ipamprefixlistresolver-tag.html}
 */
export type Tag = {
  /**
   * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @minLength `1`
   * @maxLength `128`
   */
  Key: string;
  /**
   * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @minLength `0`
   * @maxLength `256`
   */
  Value: string;
};
/**
 * Resource Type definition for AWS::EC2::IPAMPrefixListResolver
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-ipamprefixlistresolver.html}
 */
export class EC2IPAMPrefixListResolver extends $Resource<
  "AWS::EC2::IPAMPrefixListResolver",
  EC2IPAMPrefixListResolverProperties,
  EC2IPAMPrefixListResolverAttributes
> {
  public static readonly Type = "AWS::EC2::IPAMPrefixListResolver";
  constructor(
    logicalId: string,
    properties: EC2IPAMPrefixListResolverProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, EC2IPAMPrefixListResolver.Type, properties, options);
  }
}
