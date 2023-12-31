import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource Schema of AWS::EC2::IPAMAllocation Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-ipamallocation.html}
 */
export type EC2IPAMAllocationProperties = {
  /**
   * Represents a single IPv4 or IPv6 CIDR
   */
  Cidr?: string;
  Description?: string;
  /**
   * Id of the IPAM Pool.
   */
  IpamPoolId: string;
  /**
   * The desired netmask length of the allocation. If set, IPAM will choose a block of free space with this size and return the CIDR representing it.
   */
  NetmaskLength?: number;
};
/**
 * Attribute type definition for `AWS::EC2::IPAMAllocation`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-ipamallocation.html#aws-resource-ec2-ipamallocation-return-values}
 */
export type EC2IPAMAllocationAttributes = {
  /**
   * Id of the allocation.
   */
  IpamPoolAllocationId: string;
};
/**
 * Resource Schema of AWS::EC2::IPAMAllocation Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-ipamallocation.html}
 */
export class EC2IPAMAllocation extends $Resource<
  "AWS::EC2::IPAMAllocation",
  EC2IPAMAllocationProperties,
  EC2IPAMAllocationAttributes
> {
  public static readonly Type = "AWS::EC2::IPAMAllocation";
  public static readonly AttributeNames = ["IpamPoolAllocationId" as const];
  constructor(
    logicalId: string,
    properties: EC2IPAMAllocationProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      EC2IPAMAllocation.Type,
      properties,
      EC2IPAMAllocation.AttributeNames,
      options,
    );
  }
}
