import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
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
  public static readonly AttributeNames = ["AttachmentType" as const];
  constructor(
    logicalId: string,
    properties: EC2VPCGatewayAttachmentProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      EC2VPCGatewayAttachment.Type,
      properties,
      EC2VPCGatewayAttachment.AttributeNames,
      options,
    );
  }
}
