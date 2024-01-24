import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::EC2::VPCGatewayAttachment
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpcgatewayattachment.html}
 */
export type EC2VPCGatewayAttachmentProperties = {
  /**
   * The ID of the internet gateway. You must specify either InternetGatewayId or VpnGatewayId, but not both.
   */
  InternetGatewayId?: string;
  /**
   * The ID of the VPC.
   */
  VpcId: string;
  /**
   * The ID of the virtual private gateway. You must specify either InternetGatewayId or VpnGatewayId, but not both.
   */
  VpnGatewayId?: string;
};
/**
 * Attribute type definition for `AWS::EC2::VPCGatewayAttachment`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpcgatewayattachment.html#aws-resource-ec2-vpcgatewayattachment-return-values}
 */
export type EC2VPCGatewayAttachmentAttributes = {
  /**
   * Used to identify if this resource is an Internet Gateway or Vpn Gateway Attachment
   */
  AttachmentType: string;
};
/**
 * Resource Type definition for AWS::EC2::VPCGatewayAttachment
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpcgatewayattachment.html}
 */
export class EC2VPCGatewayAttachment extends $Resource<
  "AWS::EC2::VPCGatewayAttachment",
  EC2VPCGatewayAttachmentProperties,
  EC2VPCGatewayAttachmentAttributes
> {
  public static readonly Type = "AWS::EC2::VPCGatewayAttachment";
  constructor(
    logicalId: string,
    properties: EC2VPCGatewayAttachmentProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, EC2VPCGatewayAttachment.Type, properties, options);
  }
}
