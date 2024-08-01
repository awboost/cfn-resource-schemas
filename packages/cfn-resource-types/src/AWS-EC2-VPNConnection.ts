import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::EC2::VPNConnection`.
 * Specifies a VPN connection between a virtual private gateway and a VPN customer gateway or a transit gateway and a VPN customer gateway.
 To specify a VPN connection between a transit gateway and customer gateway, use the ``TransitGatewayId`` and ``CustomerGatewayId`` properties.
 To specify a VPN connection between a virtual private gateway and customer gateway, use the ``VpnGatewayId`` and ``CustomerGatewayId`` properties.
 For more information, see [](https://docs.aws.amazon.com/vpn/latest/s2svpn/VPC_VPN.html) in the *User Guide*.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpnconnection.html}
 */
export type EC2VPNConnectionProperties = {
  /**
   * The ID of the customer gateway at your end of the VPN connection.
   */
  CustomerGatewayId: string;
  EnableAcceleration?: boolean;
  /**
     * Indicates whether the VPN connection uses static routes only. Static routes must be used for devices that don't support BGP.
     If you are creating a VPN connection for a device that does not support Border Gateway Protocol (BGP), you must specify ``true``.
     */
  StaticRoutesOnly?: boolean;
  /**
   * Any tags assigned to the VPN connection.
   */
  Tags?: Tag[];
  /**
     * The ID of the transit gateway associated with the VPN connection.
     You must specify either ``TransitGatewayId`` or ``VpnGatewayId``, but not both.
     */
  TransitGatewayId?: string;
  /**
   * The type of VPN connection.
   */
  Type: string;
  /**
     * The ID of the virtual private gateway at the AWS side of the VPN connection.
     You must specify either ``TransitGatewayId`` or ``VpnGatewayId``, but not both.
     */
  VpnGatewayId?: string;
  /**
   * The tunnel options for the VPN connection.
   */
  VpnTunnelOptionsSpecifications?: VpnTunnelOptionsSpecification[];
};
/**
 * Attribute type definition for `AWS::EC2::VPNConnection`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpnconnection.html#aws-resource-ec2-vpnconnection-return-values}
 */
export type EC2VPNConnectionAttributes = {
  VpnConnectionId: string;
};
/**
 * Type definition for `AWS::EC2::VPNConnection.Tag`.
 * Specifies a tag. For more information, see [Add tags to a resource](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Using_Tags.html#cloudformation-add-tag-specifications).
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-vpnconnection-tag.html}
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
 * Type definition for `AWS::EC2::VPNConnection.VpnTunnelOptionsSpecification`.
 * The tunnel options for a single VPN tunnel.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-vpnconnection-vpntunneloptionsspecification.html}
 */
export type VpnTunnelOptionsSpecification = {
  /**
     * The pre-shared key (PSK) to establish initial authentication between the virtual private gateway and customer gateway.
     Constraints: Allowed characters are alphanumeric characters, periods (.), and underscores (_). Must be between 8 and 64 characters in length and cannot start with zero (0).
     */
  PreSharedKey?: string;
  /**
     * The range of inside IP addresses for the tunnel. Any specified CIDR blocks must be unique across all VPN connections that use the same virtual private gateway.
     Constraints: A size /30 CIDR block from the ``169.254.0.0/16`` range. The following CIDR blocks are reserved and cannot be used:
      +   ``169.254.0.0/30``
      +   ``169.254.1.0/30``
      +   ``169.254.2.0/30``
      +   ``169.254.3.0/30``
      +   ``169.254.4.0/30``
      +   ``169.254.5.0/30``
      +   ``169.254.169.252/30``
     */
  TunnelInsideCidr?: string;
};
/**
 * Resource type definition for `AWS::EC2::VPNConnection`.
 * Specifies a VPN connection between a virtual private gateway and a VPN customer gateway or a transit gateway and a VPN customer gateway.
 To specify a VPN connection between a transit gateway and customer gateway, use the ``TransitGatewayId`` and ``CustomerGatewayId`` properties.
 To specify a VPN connection between a virtual private gateway and customer gateway, use the ``VpnGatewayId`` and ``CustomerGatewayId`` properties.
 For more information, see [](https://docs.aws.amazon.com/vpn/latest/s2svpn/VPC_VPN.html) in the *User Guide*.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpnconnection.html}
 */
export class EC2VPNConnection extends $Resource<
  "AWS::EC2::VPNConnection",
  EC2VPNConnectionProperties,
  EC2VPNConnectionAttributes
> {
  public static readonly Type = "AWS::EC2::VPNConnection";
  constructor(
    logicalId: string,
    properties: EC2VPNConnectionProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, EC2VPNConnection.Type, properties, options);
  }
}
