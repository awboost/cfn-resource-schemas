import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::EC2::VPCCidrBlock
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpccidrblock.html}
 */
export type EC2VPCCidrBlockProperties = {
  /**
   * Requests an Amazon-provided IPv6 CIDR block with a /56 prefix length for the VPC. You cannot specify the range of IPv6 addresses, or the size of the CIDR block.
   */
  AmazonProvidedIpv6CidrBlock?: boolean;
  /**
   * An IPv4 CIDR block to associate with the VPC.
   */
  CidrBlock?: string;
  /**
   * The ID of the IPv4 IPAM pool to Associate a CIDR from to a VPC.
   */
  Ipv4IpamPoolId?: string;
  /**
   * The netmask length of the IPv4 CIDR you would like to associate from an Amazon VPC IP Address Manager (IPAM) pool.
   */
  Ipv4NetmaskLength?: number;
  /**
   * An IPv6 CIDR block from the IPv6 address pool.
   */
  Ipv6CidrBlock?: string;
  /**
   * The name of the location from which we advertise the IPV6 CIDR block.
   */
  Ipv6CidrBlockNetworkBorderGroup?: string;
  /**
   * The ID of the IPv6 IPAM pool to Associate a CIDR from to a VPC.
   */
  Ipv6IpamPoolId?: string;
  /**
   * The netmask length of the IPv6 CIDR you would like to associate from an Amazon VPC IP Address Manager (IPAM) pool.
   */
  Ipv6NetmaskLength?: number;
  /**
   * The ID of an IPv6 address pool from which to allocate the IPv6 CIDR block.
   */
  Ipv6Pool?: string;
  /**
   * The ID of the VPC.
   */
  VpcId: string;
};
/**
 * Attribute type definition for `AWS::EC2::VPCCidrBlock`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpccidrblock.html#aws-resource-ec2-vpccidrblock-return-values}
 */
export type EC2VPCCidrBlockAttributes = {
  /**
   * The Id of the VPC associated CIDR Block.
   */
  Id: string;
  /**
   * The IP Source of an IPv6 VPC CIDR Block.
   */
  IpSource: string;
  /**
   * The value denoting whether an IPv6 VPC CIDR Block is public or private.
   */
  Ipv6AddressAttribute: string;
};
/**
 * Resource Type definition for AWS::EC2::VPCCidrBlock
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpccidrblock.html}
 */
export class EC2VPCCidrBlock extends $Resource<
  "AWS::EC2::VPCCidrBlock",
  EC2VPCCidrBlockProperties,
  EC2VPCCidrBlockAttributes
> {
  public static readonly Type = "AWS::EC2::VPCCidrBlock";
  constructor(
    logicalId: string,
    properties: EC2VPCCidrBlockProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, EC2VPCCidrBlock.Type, properties, options);
  }
}
