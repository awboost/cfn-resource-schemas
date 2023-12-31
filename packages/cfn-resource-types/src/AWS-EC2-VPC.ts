import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource Type definition for AWS::EC2::VPC
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpc.html}
 */
export type EC2VPCProperties = {
  /**
   * The primary IPv4 CIDR block for the VPC.
   */
  CidrBlock?: string;
  /**
   * Indicates whether the instances launched in the VPC get DNS hostnames. If enabled, instances in the VPC get DNS hostnames; otherwise, they do not. Disabled by default for nondefault VPCs.
   */
  EnableDnsHostnames?: boolean;
  /**
   * Indicates whether the DNS resolution is supported for the VPC. If enabled, queries to the Amazon provided DNS server at the 169.254.169.253 IP address, or the reserved IP address at the base of the VPC network range "plus two" succeed. If disabled, the Amazon provided DNS service in the VPC that resolves public DNS hostnames to IP addresses is not enabled. Enabled by default.
   */
  EnableDnsSupport?: boolean;
  /**
     * The allowed tenancy of instances launched into the VPC.
    
    "default": An instance launched into the VPC runs on shared hardware by default, unless you explicitly specify a different tenancy during instance launch.
    
    "dedicated": An instance launched into the VPC is a Dedicated Instance by default, unless you explicitly specify a tenancy of host during instance launch. You cannot specify a tenancy of default during instance launch.
    
    Updating InstanceTenancy requires no replacement only if you are updating its value from "dedicated" to "default". Updating InstanceTenancy from "default" to "dedicated" requires replacement.
     */
  InstanceTenancy?: string;
  /**
   * The ID of an IPv4 IPAM pool you want to use for allocating this VPC's CIDR
   */
  Ipv4IpamPoolId?: string;
  /**
   * The netmask length of the IPv4 CIDR you want to allocate to this VPC from an Amazon VPC IP Address Manager (IPAM) pool
   */
  Ipv4NetmaskLength?: number;
  /**
   * The tags for the VPC.
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::EC2::VPC`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpc.html#aws-resource-ec2-vpc-return-values}
 */
export type EC2VPCAttributes = {
  /**
   * A list of IPv4 CIDR block association IDs for the VPC.
   */
  CidrBlockAssociations: string[];
  /**
   * The default network ACL ID that is associated with the VPC.
   */
  DefaultNetworkAcl: string;
  /**
   * The default security group ID that is associated with the VPC.
   */
  DefaultSecurityGroup: string;
  /**
   * A list of IPv6 CIDR blocks that are associated with the VPC.
   */
  Ipv6CidrBlocks: string[];
  /**
   * The Id for the model.
   */
  VpcId: string;
};
/**
 * Type definition for `AWS::EC2::VPC.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-vpc-tag.html}
 */
export type Tag = {
  Key: string;
  Value: string;
};
/**
 * Resource Type definition for AWS::EC2::VPC
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpc.html}
 */
export class EC2VPC extends $Resource<
  "AWS::EC2::VPC",
  EC2VPCProperties,
  EC2VPCAttributes
> {
  public static readonly Type = "AWS::EC2::VPC";
  public static readonly AttributeNames = [
    "CidrBlockAssociations" as const,
    "DefaultNetworkAcl" as const,
    "DefaultSecurityGroup" as const,
    "Ipv6CidrBlocks" as const,
    "VpcId" as const,
  ];
  constructor(
    logicalId: string,
    properties: EC2VPCProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, EC2VPC.Type, properties, EC2VPC.AttributeNames, options);
  }
}
