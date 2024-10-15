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
  /**
     * Indicate whether to enable acceleration for the VPN connection.
     Default: ``false``
     */
  EnableAcceleration?: boolean;
  /**
     * The IPv4 CIDR on the customer gateway (on-premises) side of the VPN connection.
     Default: ``0.0.0.0/0``
     */
  LocalIpv4NetworkCidr?: string;
  /**
     * The IPv6 CIDR on the customer gateway (on-premises) side of the VPN connection.
     Default: ``::/0``
     */
  LocalIpv6NetworkCidr?: string;
  /**
     * The type of IPv4 address assigned to the outside interface of the customer gateway device.
     Valid values: ``PrivateIpv4`` | ``PublicIpv4``
     Default: ``PublicIpv4``
     */
  OutsideIpAddressType?: string;
  /**
     * The IPv4 CIDR on the AWS side of the VPN connection.
     Default: ``0.0.0.0/0``
     */
  RemoteIpv4NetworkCidr?: string;
  /**
     * The IPv6 CIDR on the AWS side of the VPN connection.
     Default: ``::/0``
     */
  RemoteIpv6NetworkCidr?: string;
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
     * The transit gateway attachment ID to use for the VPN tunnel.
     Required if ``OutsideIpAddressType`` is set to ``PrivateIpv4``.
     */
  TransportTransitGatewayAttachmentId?: string;
  /**
     * Indicate whether the VPN tunnels process IPv4 or IPv6 traffic.
     Default: ``ipv4``
     */
  TunnelInsideIpVersion?: string;
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
 * Type definition for `AWS::EC2::VPNConnection.CloudwatchLogOptionsSpecification`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-vpnconnection-cloudwatchlogoptionsspecification.html}
 */
export type CloudwatchLogOptionsSpecification = {
  LogEnabled?: boolean;
  LogGroupArn?: string;
  LogOutputFormat?: "json" | "text";
};
/**
 * Type definition for `AWS::EC2::VPNConnection.IKEVersionsRequestListValue`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-vpnconnection-ikeversionsrequestlistvalue.html}
 */
export type IKEVersionsRequestListValue = {
  Value?: "ikev1" | "ikev2";
};
/**
 * Type definition for `AWS::EC2::VPNConnection.Phase1DHGroupNumbersRequestListValue`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-vpnconnection-phase1dhgroupnumbersrequestlistvalue.html}
 */
export type Phase1DHGroupNumbersRequestListValue = {
  Value?: 2 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24;
};
/**
 * Type definition for `AWS::EC2::VPNConnection.Phase1EncryptionAlgorithmsRequestListValue`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-vpnconnection-phase1encryptionalgorithmsrequestlistvalue.html}
 */
export type Phase1EncryptionAlgorithmsRequestListValue = {
  Value?: "AES128" | "AES256" | "AES128-GCM-16" | "AES256-GCM-16";
};
/**
 * Type definition for `AWS::EC2::VPNConnection.Phase1IntegrityAlgorithmsRequestListValue`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-vpnconnection-phase1integrityalgorithmsrequestlistvalue.html}
 */
export type Phase1IntegrityAlgorithmsRequestListValue = {
  Value?: "SHA1" | "SHA2-256" | "SHA2-384" | "SHA2-512";
};
/**
 * Type definition for `AWS::EC2::VPNConnection.Phase2DHGroupNumbersRequestListValue`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-vpnconnection-phase2dhgroupnumbersrequestlistvalue.html}
 */
export type Phase2DHGroupNumbersRequestListValue = {
  Value?: 2 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24;
};
/**
 * Type definition for `AWS::EC2::VPNConnection.Phase2EncryptionAlgorithmsRequestListValue`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-vpnconnection-phase2encryptionalgorithmsrequestlistvalue.html}
 */
export type Phase2EncryptionAlgorithmsRequestListValue = {
  Value?: "AES128" | "AES256" | "AES128-GCM-16" | "AES256-GCM-16";
};
/**
 * Type definition for `AWS::EC2::VPNConnection.Phase2IntegrityAlgorithmsRequestListValue`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-vpnconnection-phase2integrityalgorithmsrequestlistvalue.html}
 */
export type Phase2IntegrityAlgorithmsRequestListValue = {
  Value?: "SHA1" | "SHA2-256" | "SHA2-384" | "SHA2-512";
};
/**
 * Type definition for `AWS::EC2::VPNConnection.Tag`.
 * Specifies a tag. For more information, see [Resource tags](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html).
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
 * Type definition for `AWS::EC2::VPNConnection.VpnTunnelLogOptionsSpecification`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-vpnconnection-vpntunnellogoptionsspecification.html}
 */
export type VpnTunnelLogOptionsSpecification = {
  CloudwatchLogOptions?: CloudwatchLogOptionsSpecification;
};
/**
 * Type definition for `AWS::EC2::VPNConnection.VpnTunnelOptionsSpecification`.
 * The tunnel options for a single VPN tunnel.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-vpnconnection-vpntunneloptionsspecification.html}
 */
export type VpnTunnelOptionsSpecification = {
  DPDTimeoutAction?: "clear" | "none" | "restart";
  /**
   * @min `30`
   */
  DPDTimeoutSeconds?: number;
  EnableTunnelLifecycleControl?: boolean;
  IKEVersions?: IKEVersionsRequestListValue[];
  LogOptions?: VpnTunnelLogOptionsSpecification;
  Phase1DHGroupNumbers?: Phase1DHGroupNumbersRequestListValue[];
  Phase1EncryptionAlgorithms?: Phase1EncryptionAlgorithmsRequestListValue[];
  Phase1IntegrityAlgorithms?: Phase1IntegrityAlgorithmsRequestListValue[];
  /**
   * @min `900`
   * @max `28800`
   */
  Phase1LifetimeSeconds?: number;
  Phase2DHGroupNumbers?: Phase2DHGroupNumbersRequestListValue[];
  Phase2EncryptionAlgorithms?: Phase2EncryptionAlgorithmsRequestListValue[];
  Phase2IntegrityAlgorithms?: Phase2IntegrityAlgorithmsRequestListValue[];
  /**
   * @min `900`
   * @max `3600`
   */
  Phase2LifetimeSeconds?: number;
  /**
     * The pre-shared key (PSK) to establish initial authentication between the virtual private gateway and customer gateway.
     Constraints: Allowed characters are alphanumeric characters, periods (.), and underscores (_). Must be between 8 and 64 characters in length and cannot start with zero (0).
     */
  PreSharedKey?: string;
  /**
   * @min `0`
   * @max `100`
   */
  RekeyFuzzPercentage?: number;
  /**
   * @min `60`
   */
  RekeyMarginTimeSeconds?: number;
  /**
   * @min `64`
   * @max `2048`
   */
  ReplayWindowSize?: number;
  StartupAction?: "add" | "start";
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
  TunnelInsideIpv6Cidr?: string;
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
