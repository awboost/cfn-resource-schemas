import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::EC2::VPNConcentrator
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpnconcentrator.html}
 */
export type EC2VPNConcentratorProperties = {
  /**
   * Any tags assigned to the VPN concentrator.
   */
  Tags?: Tag[];
  /**
   * The ID of the transit gateway
   */
  TransitGatewayId: string;
  /**
   * The type of VPN concentrator
   */
  Type: string;
};
/**
 * Attribute type definition for `AWS::EC2::VPNConcentrator`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpnconcentrator.html#aws-resource-ec2-vpnconcentrator-return-values}
 */
export type EC2VPNConcentratorAttributes = {
  /**
   * The ID of the transit gateway attachment
   */
  TransitGatewayAttachmentId: string;
  /**
   * The provider-assigned unique ID for this managed resource
   */
  VpnConcentratorId: string;
};
/**
 * Type definition for `AWS::EC2::VPNConcentrator.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-vpnconcentrator-tag.html}
 */
export type Tag = {
  Key: string;
  Value: string;
};
/**
 * Resource Type definition for AWS::EC2::VPNConcentrator
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpnconcentrator.html}
 */
export class EC2VPNConcentrator extends $Resource<
  "AWS::EC2::VPNConcentrator",
  EC2VPNConcentratorProperties,
  EC2VPNConcentratorAttributes
> {
  public static readonly Type = "AWS::EC2::VPNConcentrator";
  constructor(
    logicalId: string,
    properties: EC2VPNConcentratorProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, EC2VPNConcentrator.Type, properties, options);
  }
}
