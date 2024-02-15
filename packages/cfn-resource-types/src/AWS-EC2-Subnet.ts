import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::EC2::Subnet
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-subnet.html}
 */
export type EC2SubnetProperties = {
  AssignIpv6AddressOnCreation?: boolean;
  AvailabilityZone?: string;
  AvailabilityZoneId?: string;
  CidrBlock?: string;
  EnableDns64?: boolean;
  /**
   * The ID of an IPv4 IPAM pool you want to use for allocating this subnet's CIDR
   */
  Ipv4IpamPoolId?: string;
  /**
   * The netmask length of the IPv4 CIDR you want to allocate to this subnet from an Amazon VPC IP Address Manager (IPAM) pool
   */
  Ipv4NetmaskLength?: number;
  Ipv6CidrBlock?: string;
  Ipv6CidrBlocks?: string[];
  /**
   * The ID of an IPv6 IPAM pool you want to use for allocating this subnet's CIDR
   */
  Ipv6IpamPoolId?: string;
  Ipv6Native?: boolean;
  /**
   * The netmask length of the IPv6 CIDR you want to allocate to this subnet from an Amazon VPC IP Address Manager (IPAM) pool
   */
  Ipv6NetmaskLength?: number;
  MapPublicIpOnLaunch?: boolean;
  OutpostArn?: string;
  PrivateDnsNameOptionsOnLaunch?: {
    EnableResourceNameDnsAAAARecord?: boolean;
    EnableResourceNameDnsARecord?: boolean;
    HostnameType?: string;
  };
  Tags?: Tag[];
  VpcId: string;
};
/**
 * Attribute type definition for `AWS::EC2::Subnet`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-subnet.html#aws-resource-ec2-subnet-return-values}
 */
export type EC2SubnetAttributes = {
  /**
   * The ID of the network ACL that is associated with the subnet's VPC
   */
  NetworkAclAssociationId: string;
  /**
   * The ID of the subnet
   */
  SubnetId: string;
};
/**
 * Type definition for `AWS::EC2::Subnet.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-subnet-tag.html}
 */
export type Tag = {
  Key: string;
  Value: string;
};
/**
 * Resource Type definition for AWS::EC2::Subnet
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-subnet.html}
 */
export class EC2Subnet extends $Resource<
  "AWS::EC2::Subnet",
  EC2SubnetProperties,
  EC2SubnetAttributes
> {
  public static readonly Type = "AWS::EC2::Subnet";
  constructor(
    logicalId: string,
    properties: EC2SubnetProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, EC2Subnet.Type, properties, options);
  }
}
