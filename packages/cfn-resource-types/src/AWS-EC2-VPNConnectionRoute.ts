import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::EC2::VPNConnectionRoute
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
 * Resource Type definition for AWS::EC2::VPNConnectionRoute
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
