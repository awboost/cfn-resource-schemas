import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::EC2::TransitGatewayAttachment
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-transitgatewayattachment.html}
 */
export type EC2TransitGatewayAttachmentProperties = {
  /**
   * The options for the transit gateway vpc attachment.
   */
  Options?: {
    /**
     * Indicates whether to enable Ipv6 Support for Vpc Attachment. Valid Values: enable | disable
     */
    ApplianceModeSupport?: string;
    /**
     * Indicates whether to enable DNS Support for Vpc Attachment. Valid Values: enable | disable
     */
    DnsSupport?: string;
    /**
     * Indicates whether to enable Ipv6 Support for Vpc Attachment. Valid Values: enable | disable
     */
    Ipv6Support?: string;
  };
  SubnetIds: string[];
  Tags?: Tag[];
  TransitGatewayId: string;
  VpcId: string;
};
/**
 * Attribute type definition for `AWS::EC2::TransitGatewayAttachment`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-transitgatewayattachment.html#aws-resource-ec2-transitgatewayattachment-return-values}
 */
export type EC2TransitGatewayAttachmentAttributes = {
  Id: string;
};
/**
 * Type definition for `AWS::EC2::TransitGatewayAttachment.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-transitgatewayattachment-tag.html}
 */
export type Tag = {
  Key: string;
  Value: string;
};
/**
 * Resource Type definition for AWS::EC2::TransitGatewayAttachment
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-transitgatewayattachment.html}
 */
export class EC2TransitGatewayAttachment extends $Resource<
  "AWS::EC2::TransitGatewayAttachment",
  EC2TransitGatewayAttachmentProperties,
  EC2TransitGatewayAttachmentAttributes
> {
  public static readonly Type = "AWS::EC2::TransitGatewayAttachment";
  constructor(
    logicalId: string,
    properties: EC2TransitGatewayAttachmentProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, EC2TransitGatewayAttachment.Type, properties, options);
  }
}
