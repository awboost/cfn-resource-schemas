import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource Type definition for AWS::EC2::NetworkAclEntry
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-networkaclentry.html}
 */
export type EC2NetworkAclEntryProperties = {
  /**
   * The IPv4 CIDR range to allow or deny, in CIDR notation (for example, 172.16.0.0/24). Requirement is conditional: You must specify the CidrBlock or Ipv6CidrBlock property
   */
  CidrBlock?: string;
  /**
   * Indicates whether this is an egress rule (rule is applied to traffic leaving the subnet)
   */
  Egress?: boolean;
  /**
   * The Internet Control Message Protocol (ICMP) code and type. Requirement is conditional: Required if specifying 1 (ICMP) for the protocol parameter
   */
  Icmp?: Icmp;
  /**
   * The IPv6 network range to allow or deny, in CIDR notation (for example 2001:db8:1234:1a00::/64)
   */
  Ipv6CidrBlock?: string;
  /**
   * The ID of the network ACL
   */
  NetworkAclId: string;
  /**
   * The IPv4 network range to allow or deny, in CIDR notation (for example 172.16.0.0/24). We modify the specified CIDR block to its canonical form; for example, if you specify 100.68.0.18/18, we modify it to 100.68.0.0/18
   */
  PortRange?: PortRange;
  /**
   * The protocol number. A value of "-1" means all protocols. If you specify "-1" or a protocol number other than "6" (TCP), "17" (UDP), or "1" (ICMP), traffic on all ports is allowed, regardless of any ports or ICMP types or codes that you specify. If you specify protocol "58" (ICMPv6) and specify an IPv4 CIDR block, traffic for all ICMP types and codes allowed, regardless of any that you specify. If you specify protocol "58" (ICMPv6) and specify an IPv6 CIDR block, you must specify an ICMP type and code
   */
  Protocol: number;
  /**
   * Indicates whether to allow or deny the traffic that matches the rule
   */
  RuleAction: string;
  /**
   * Rule number to assign to the entry, such as 100. ACL entries are processed in ascending order by rule number. Entries can't use the same rule number unless one is an egress rule and the other is an ingress rule
   */
  RuleNumber: number;
};
/**
 * Attribute type definition for `AWS::EC2::NetworkAclEntry`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-networkaclentry.html#aws-resource-ec2-networkaclentry-return-values}
 */
export type EC2NetworkAclEntryAttributes = {
  Id: string;
};
/**
 * Type definition for `AWS::EC2::NetworkAclEntry.Icmp`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-networkaclentry-icmp.html}
 */
export type Icmp = {
  Code?: number;
  Type?: number;
};
/**
 * Type definition for `AWS::EC2::NetworkAclEntry.PortRange`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-networkaclentry-portrange.html}
 */
export type PortRange = {
  From?: number;
  To?: number;
};
/**
 * Resource Type definition for AWS::EC2::NetworkAclEntry
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-networkaclentry.html}
 */
export class EC2NetworkAclEntry extends $Resource<
  "AWS::EC2::NetworkAclEntry",
  EC2NetworkAclEntryProperties,
  EC2NetworkAclEntryAttributes
> {
  public static readonly Type = "AWS::EC2::NetworkAclEntry";
  public static readonly AttributeNames = ["Id" as const];
  constructor(
    logicalId: string,
    properties: EC2NetworkAclEntryProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      EC2NetworkAclEntry.Type,
      properties,
      EC2NetworkAclEntry.AttributeNames,
      options,
    );
  }
}
