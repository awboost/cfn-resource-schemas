import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Schema of AWS::EC2::IPAMPoolCidr Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-ipampoolcidr.html}
 */
export type EC2IPAMPoolCidrProperties = {
  /**
   * Represents a single IPv4 or IPv6 CIDR
   */
  Cidr?: string;
  /**
   * Id of the IPAM Pool.
   */
  IpamPoolId: string;
  /**
   * The desired netmask length of the provision. If set, IPAM will choose a block of free space with this size and return the CIDR representing it.
   */
  NetmaskLength?: number;
};
/**
 * Attribute type definition for `AWS::EC2::IPAMPoolCidr`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-ipampoolcidr.html#aws-resource-ec2-ipampoolcidr-return-values}
 */
export type EC2IPAMPoolCidrAttributes = {
  /**
   * Id of the IPAM Pool Cidr.
   */
  IpamPoolCidrId: string;
  /**
   * Provisioned state of the cidr.
   */
  State: string;
};
/**
 * Resource Schema of AWS::EC2::IPAMPoolCidr Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-ipampoolcidr.html}
 */
export class EC2IPAMPoolCidr extends $Resource<
  "AWS::EC2::IPAMPoolCidr",
  EC2IPAMPoolCidrProperties,
  EC2IPAMPoolCidrAttributes
> {
  public static readonly Type = "AWS::EC2::IPAMPoolCidr";
  constructor(
    logicalId: string,
    properties: EC2IPAMPoolCidrProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, EC2IPAMPoolCidr.Type, properties, options);
  }
}
