import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::EC2::VPNGateway`.
 * Specifies a virtual private gateway. A virtual private gateway is the endpoint on the VPC side of your VPN connection. You can create a virtual private gateway before creating the VPC itself.
 For more information, see [](https://docs.aws.amazon.com/vpn/latest/s2svpn/VPC_VPN.html) in the *User Guide*.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpngateway.html}
 */
export type EC2VPNGatewayProperties = {
  /**
   * The private Autonomous System Number (ASN) for the Amazon side of a BGP session.
   */
  AmazonSideAsn?: number;
  /**
   * Any tags assigned to the virtual private gateway.
   */
  Tags?: Tag[];
  /**
   * The type of VPN connection the virtual private gateway supports.
   */
  Type: string;
};
/**
 * Attribute type definition for `AWS::EC2::VPNGateway`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpngateway.html#aws-resource-ec2-vpngateway-return-values}
 */
export type EC2VPNGatewayAttributes = {
  VPNGatewayId: string;
};
/**
 * Type definition for `AWS::EC2::VPNGateway.Tag`.
 * Specifies a tag. For more information, see [Add tags to a resource](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Using_Tags.html#cloudformation-add-tag-specifications).
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-vpngateway-tag.html}
 */
export type Tag = {
  /**
   * The tag key.
   */
  Key: string;
  /**
   * The tag value.
   */
  Value: string;
};
/**
 * Resource type definition for `AWS::EC2::VPNGateway`.
 * Specifies a virtual private gateway. A virtual private gateway is the endpoint on the VPC side of your VPN connection. You can create a virtual private gateway before creating the VPC itself.
 For more information, see [](https://docs.aws.amazon.com/vpn/latest/s2svpn/VPC_VPN.html) in the *User Guide*.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpngateway.html}
 */
export class EC2VPNGateway extends $Resource<
  "AWS::EC2::VPNGateway",
  EC2VPNGatewayProperties,
  EC2VPNGatewayAttributes
> {
  public static readonly Type = "AWS::EC2::VPNGateway";
  constructor(
    logicalId: string,
    properties: EC2VPNGatewayProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, EC2VPNGateway.Type, properties, options);
  }
}
