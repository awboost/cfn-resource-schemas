import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource Type definition for AWS::EC2::VPNConnection
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpnconnection.html}
 */
export type EC2VPNConnectionProperties = {
  /**
   * The ID of the customer gateway at your end of the VPN connection.
   */
  CustomerGatewayId: string;
  /**
   * Indicates whether the VPN connection uses static routes only.
   */
  StaticRoutesOnly?: boolean;
  /**
   * Any tags assigned to the VPN connection.
   */
  Tags?: Tag[];
  /**
   * The ID of the transit gateway associated with the VPN connection.
   */
  TransitGatewayId?: string;
  /**
   * The type of VPN connection.
   */
  Type: string;
  /**
   * The ID of the virtual private gateway at the AWS side of the VPN connection.
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
  /**
   * The provider-assigned unique ID for this managed resource
   */
  VpnConnectionId: string;
};
/**
 * Type definition for `AWS::EC2::VPNConnection.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-vpnconnection-tag.html}
 */
export type Tag = {
  Key: string;
  Value: string;
};
/**
 * Type definition for `AWS::EC2::VPNConnection.VpnTunnelOptionsSpecification`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-vpnconnection-vpntunneloptionsspecification.html}
 */
export type VpnTunnelOptionsSpecification = {
  PreSharedKey?: string;
  TunnelInsideCidr?: string;
};
/**
 * Resource Type definition for AWS::EC2::VPNConnection
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpnconnection.html}
 */
export class EC2VPNConnection extends $Resource<
  "AWS::EC2::VPNConnection",
  EC2VPNConnectionProperties,
  EC2VPNConnectionAttributes
> {
  public static readonly Type = "AWS::EC2::VPNConnection";
  public static readonly AttributeNames = ["VpnConnectionId" as const];
  constructor(
    logicalId: string,
    properties: EC2VPNConnectionProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      EC2VPNConnection.Type,
      properties,
      EC2VPNConnection.AttributeNames,
      options,
    );
  }
}
