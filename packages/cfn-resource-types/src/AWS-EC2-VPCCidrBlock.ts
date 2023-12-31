import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource Type definition for AWS::EC2::VPCCidrBlock
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpccidrblock.html}
 */
export type EC2VPCCidrBlockProperties = {
  AmazonProvidedIpv6CidrBlock?: boolean;
  CidrBlock?: string;
  Ipv4IpamPoolId?: string;
  Ipv4NetmaskLength?: number;
  Ipv6CidrBlock?: string;
  Ipv6IpamPoolId?: string;
  Ipv6NetmaskLength?: number;
  Ipv6Pool?: string;
  VpcId: string;
};
/**
 * Attribute type definition for `AWS::EC2::VPCCidrBlock`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpccidrblock.html#aws-resource-ec2-vpccidrblock-return-values}
 */
export type EC2VPCCidrBlockAttributes = {
  Id: string;
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
  public static readonly AttributeNames = ["Id" as const];
  constructor(
    logicalId: string,
    properties: EC2VPCCidrBlockProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      EC2VPCCidrBlock.Type,
      properties,
      EC2VPCCidrBlock.AttributeNames,
      options,
    );
  }
}
