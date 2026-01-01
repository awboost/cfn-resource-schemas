import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::EC2::VPNConcentrator`.
 * Describes a VPN concentrator.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpnconcentrator.html}
 */
export type EC2VPNConcentratorProperties = {
  /**
   * Any tags assigned to the VPN concentrator.
   */
  Tags?: Tag[];
  /**
   * The ID of the transit gateway associated with the VPN concentrator.
   */
  TransitGatewayId: string;
  /**
   * The type of VPN concentrator.
   */
  Type: string;
};
/**
 * Attribute type definition for `AWS::EC2::VPNConcentrator`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpnconcentrator.html#aws-resource-ec2-vpnconcentrator-return-values}
 */
export type EC2VPNConcentratorAttributes = {
  TransitGatewayAttachmentId: string;
  VpnConcentratorId: string;
};
/**
 * Type definition for `AWS::EC2::VPNConcentrator.Tag`.
 * Describes a tag.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-vpnconcentrator-tag.html}
 */
export type Tag = {
  /**
     * The key of the tag.
     Constraints: Tag keys are case-sensitive and accept a maximum of 127 Unicode characters. May not begin with ``aws:``.
     */
  Key: string;
  /**
     * The value of the tag.
     Constraints: Tag values are case-sensitive and accept a maximum of 256 Unicode characters.
     */
  Value: string;
};
/**
 * Resource type definition for `AWS::EC2::VPNConcentrator`.
 * Describes a VPN concentrator.
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
