import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::EC2::SecurityGroupEgress
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-securitygroupegress.html}
 */
export type EC2SecurityGroupEgressProperties = {
  /**
   * The IPv4 ranges
   */
  CidrIp?: string;
  /**
   * [VPC only] The IPv6 ranges
   */
  CidrIpv6?: string;
  /**
   * Resource Type definition for an egress (outbound) security group rule.
   */
  Description?: string;
  /**
   * [EC2-VPC only] The ID of a prefix list.
   */
  DestinationPrefixListId?: string;
  /**
   * You must specify a destination security group (DestinationPrefixListId or DestinationSecurityGroupId) or a CIDR range (CidrIp or CidrIpv6).
   */
  DestinationSecurityGroupId?: string;
  /**
   * The start of port range for the TCP and UDP protocols, or an ICMP/ICMPv6 type number. A value of -1 indicates all ICMP/ICMPv6 types. If you specify all ICMP/ICMPv6 types, you must specify all codes.
   */
  FromPort?: number;
  /**
   * The ID of the security group. You must specify either the security group ID or the security group name in the request. For security groups in a nondefault VPC, you must specify the security group ID.
   */
  GroupId: string;
  /**
   * [VPC only] Use -1 to specify all protocols. When authorizing security group rules, specifying -1 or a protocol number other than tcp, udp, icmp, or icmpv6 allows traffic on all ports, regardless of any port range you specify. For tcp, udp, and icmp, you must specify a port range. For icmpv6, the port range is optional; if you omit the port range, traffic for all types and codes is allowed.
   */
  IpProtocol: string;
  /**
   * The end of port range for the TCP and UDP protocols, or an ICMP/ICMPv6 code. A value of -1 indicates all ICMP/ICMPv6 codes. If you specify all ICMP/ICMPv6 types, you must specify all codes.
   */
  ToPort?: number;
};
/**
 * Attribute type definition for `AWS::EC2::SecurityGroupEgress`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-securitygroupegress.html#aws-resource-ec2-securitygroupegress-return-values}
 */
export type EC2SecurityGroupEgressAttributes = {
  /**
   * The Security Group Rule Id
   */
  Id: string;
};
/**
 * Resource Type definition for AWS::EC2::SecurityGroupEgress
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-securitygroupegress.html}
 */
export class EC2SecurityGroupEgress extends $Resource<
  "AWS::EC2::SecurityGroupEgress",
  EC2SecurityGroupEgressProperties,
  EC2SecurityGroupEgressAttributes
> {
  public static readonly Type = "AWS::EC2::SecurityGroupEgress";
  constructor(
    logicalId: string,
    properties: EC2SecurityGroupEgressProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, EC2SecurityGroupEgress.Type, properties, options);
  }
}
