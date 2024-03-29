import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * The AWS::EC2::TransitGatewayPeeringAttachment type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-transitgatewaypeeringattachment.html}
 */
export type EC2TransitGatewayPeeringAttachmentProperties = {
  /**
   * The ID of the peer account
   */
  PeerAccountId: string;
  /**
   * Peer Region
   */
  PeerRegion: string;
  /**
   * The ID of the peer transit gateway.
   */
  PeerTransitGatewayId: string;
  /**
   * The tags for the transit gateway peering attachment.
   */
  Tags?: Tag[];
  /**
   * The ID of the transit gateway.
   */
  TransitGatewayId: string;
};
/**
 * Attribute type definition for `AWS::EC2::TransitGatewayPeeringAttachment`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-transitgatewaypeeringattachment.html#aws-resource-ec2-transitgatewaypeeringattachment-return-values}
 */
export type EC2TransitGatewayPeeringAttachmentAttributes = {
  /**
   * The time the transit gateway peering attachment was created.
   */
  CreationTime: string;
  /**
   * The state of the transit gateway peering attachment. Note that the initiating state has been deprecated.
   */
  State: string;
  /**
   * The status of the transit gateway peering attachment.
   */
  Status: {
    /**
     * The status code.
     */
    Code: string;
    /**
     * The status message, if applicable.
     */
    Message: string;
  };
  /**
   * The ID of the transit gateway peering attachment.
   */
  TransitGatewayAttachmentId: string;
};
/**
 * Type definition for `AWS::EC2::TransitGatewayPeeringAttachment.PeeringAttachmentStatus`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-transitgatewaypeeringattachment-peeringattachmentstatus.html}
 */
export type PeeringAttachmentStatus = {
  /**
   * The status code.
   */
  Code?: string;
  /**
   * The status message, if applicable.
   */
  Message?: string;
};
/**
 * Type definition for `AWS::EC2::TransitGatewayPeeringAttachment.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-transitgatewaypeeringattachment-tag.html}
 */
export type Tag = {
  /**
   * The key of the tag. Constraints: Tag keys are case-sensitive and accept a maximum of 127 Unicode characters. May not begin with aws:.
   */
  Key?: string;
  /**
   * The value of the tag. Constraints: Tag values are case-sensitive and accept a maximum of 255 Unicode characters.
   */
  Value?: string;
};
/**
 * The AWS::EC2::TransitGatewayPeeringAttachment type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-transitgatewaypeeringattachment.html}
 */
export class EC2TransitGatewayPeeringAttachment extends $Resource<
  "AWS::EC2::TransitGatewayPeeringAttachment",
  EC2TransitGatewayPeeringAttachmentProperties,
  EC2TransitGatewayPeeringAttachmentAttributes
> {
  public static readonly Type = "AWS::EC2::TransitGatewayPeeringAttachment";
  constructor(
    logicalId: string,
    properties: EC2TransitGatewayPeeringAttachmentProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      EC2TransitGatewayPeeringAttachment.Type,
      properties,
      options,
    );
  }
}
