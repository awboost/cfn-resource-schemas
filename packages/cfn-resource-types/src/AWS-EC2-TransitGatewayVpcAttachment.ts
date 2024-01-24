import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::EC2::TransitGatewayVpcAttachment
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-transitgatewayvpcattachment.html}
 */
export type EC2TransitGatewayVpcAttachmentProperties = {
  AddSubnetIds?: string[];
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
  RemoveSubnetIds?: string[];
  SubnetIds: string[];
  Tags?: Tag[];
  TransitGatewayId: string;
  VpcId: string;
};
/**
 * Attribute type definition for `AWS::EC2::TransitGatewayVpcAttachment`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-transitgatewayvpcattachment.html#aws-resource-ec2-transitgatewayvpcattachment-return-values}
 */
export type EC2TransitGatewayVpcAttachmentAttributes = {
  Id: string;
};
/**
 * Type definition for `AWS::EC2::TransitGatewayVpcAttachment.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-transitgatewayvpcattachment-tag.html}
 */
export type Tag = {
  Key: string;
  Value: string;
};
/**
 * Resource Type definition for AWS::EC2::TransitGatewayVpcAttachment
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-transitgatewayvpcattachment.html}
 */
export class EC2TransitGatewayVpcAttachment extends $Resource<
  "AWS::EC2::TransitGatewayVpcAttachment",
  EC2TransitGatewayVpcAttachmentProperties,
  EC2TransitGatewayVpcAttachmentAttributes
> {
  public static readonly Type = "AWS::EC2::TransitGatewayVpcAttachment";
  constructor(
    logicalId: string,
    properties: EC2TransitGatewayVpcAttachmentProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, EC2TransitGatewayVpcAttachment.Type, properties, options);
  }
}
