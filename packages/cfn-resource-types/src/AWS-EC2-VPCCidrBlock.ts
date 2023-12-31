import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
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
  constructor(
    logicalId: string,
    properties: EC2VPCCidrBlockProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, EC2VPCCidrBlock.Type, properties, options);
  }
}
