import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::EC2::VPNConnectionRoute`.
 * Specifies a static route for a VPN connection between an existing virtual private gateway and a VPN customer gateway. The static route allows traffic to be routed from the virtual private gateway to the VPN customer gateway.
 For more information, see [](https://docs.aws.amazon.com/vpn/latest/s2svpn/VPC_VPN.html) in the *User Guide*.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpnconnectionroute.html}
 */
export type EC2VPNConnectionRouteProperties = {
  /**
   * The CIDR block associated with the local subnet of the customer network.
   */
  DestinationCidrBlock: string;
  /**
   * The ID of the VPN connection.
   */
  VpnConnectionId: string;
};
/**
 * Resource type definition for `AWS::EC2::VPNConnectionRoute`.
 * Specifies a static route for a VPN connection between an existing virtual private gateway and a VPN customer gateway. The static route allows traffic to be routed from the virtual private gateway to the VPN customer gateway.
 For more information, see [](https://docs.aws.amazon.com/vpn/latest/s2svpn/VPC_VPN.html) in the *User Guide*.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpnconnectionroute.html}
 */
export class EC2VPNConnectionRoute extends $Resource<
  "AWS::EC2::VPNConnectionRoute",
  EC2VPNConnectionRouteProperties,
  Record<string, never>
> {
  public static readonly Type = "AWS::EC2::VPNConnectionRoute";
  constructor(
    logicalId: string,
    properties: EC2VPNConnectionRouteProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, EC2VPNConnectionRoute.Type, properties, options);
  }
}
