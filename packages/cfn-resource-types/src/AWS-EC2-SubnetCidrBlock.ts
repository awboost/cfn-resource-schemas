import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * The AWS::EC2::SubnetCidrBlock resource creates association between subnet and IPv6 CIDR
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-subnetcidrblock.html}
 */
export type EC2SubnetCidrBlockProperties = {
  /**
   * The IPv6 network range for the subnet, in CIDR notation. The subnet size must use a /64 prefix length
   * @maxLength `42`
   */
  Ipv6CidrBlock?: string;
  /**
   * The ID of an IPv6 Amazon VPC IP Address Manager (IPAM) pool from which to allocate, to get the subnet's CIDR
   */
  Ipv6IpamPoolId?: string;
  /**
   * The netmask length of the IPv6 CIDR to allocate to the subnet from an IPAM pool
   * @min `0`
   * @max `128`
   */
  Ipv6NetmaskLength?: number;
  /**
   * The ID of the subnet
   */
  SubnetId: string;
};
/**
 * Attribute type definition for `AWS::EC2::SubnetCidrBlock`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-subnetcidrblock.html#aws-resource-ec2-subnetcidrblock-return-values}
 */
export type EC2SubnetCidrBlockAttributes = {
  /**
   * Information about the IPv6 association.
   */
  Id: string;
};
/**
 * The AWS::EC2::SubnetCidrBlock resource creates association between subnet and IPv6 CIDR
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-subnetcidrblock.html}
 */
export class EC2SubnetCidrBlock extends $Resource<
  "AWS::EC2::SubnetCidrBlock",
  EC2SubnetCidrBlockProperties,
  EC2SubnetCidrBlockAttributes
> {
  public static readonly Type = "AWS::EC2::SubnetCidrBlock";
  constructor(
    logicalId: string,
    properties: EC2SubnetCidrBlockProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, EC2SubnetCidrBlock.Type, properties, options);
  }
}
