import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * The AWS::EC2::TransitGatewayConnect type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-transitgatewayconnect.html}
 */
export type EC2TransitGatewayConnectProperties = {
  /**
   * The Connect attachment options.
   */
  Options: TransitGatewayConnectOptions;
  /**
   * The tags for the attachment.
   */
  Tags?: Tag[];
  /**
   * The ID of the attachment from which the Connect attachment was created.
   */
  TransportTransitGatewayAttachmentId: string;
};
/**
 * Attribute type definition for `AWS::EC2::TransitGatewayConnect`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-transitgatewayconnect.html#aws-resource-ec2-transitgatewayconnect-return-values}
 */
export type EC2TransitGatewayConnectAttributes = {
  /**
   * The creation time.
   */
  CreationTime: string;
  /**
   * The state of the attachment.
   */
  State: string;
  /**
   * The ID of the Connect attachment.
   */
  TransitGatewayAttachmentId: string;
  /**
   * The ID of the transit gateway.
   */
  TransitGatewayId: string;
};
/**
 * Type definition for `AWS::EC2::TransitGatewayConnect.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-transitgatewayconnect-tag.html}
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
 * Type definition for `AWS::EC2::TransitGatewayConnect.TransitGatewayConnectOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-transitgatewayconnect-transitgatewayconnectoptions.html}
 */
export type TransitGatewayConnectOptions = {
  /**
   * The tunnel protocol.
   */
  Protocol?: string;
};
/**
 * The AWS::EC2::TransitGatewayConnect type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-transitgatewayconnect.html}
 */
export class EC2TransitGatewayConnect extends $Resource<
  "AWS::EC2::TransitGatewayConnect",
  EC2TransitGatewayConnectProperties,
  EC2TransitGatewayConnectAttributes
> {
  public static readonly Type = "AWS::EC2::TransitGatewayConnect";
  constructor(
    logicalId: string,
    properties: EC2TransitGatewayConnectProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, EC2TransitGatewayConnect.Type, properties, options);
  }
}
