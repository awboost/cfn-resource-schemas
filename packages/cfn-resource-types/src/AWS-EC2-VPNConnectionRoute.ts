import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
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
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: EC2VPNConnectionRouteProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      EC2VPNConnectionRoute.Type,
      properties,
      EC2VPNConnectionRoute.AttributeNames,
      options,
    );
  }
}
