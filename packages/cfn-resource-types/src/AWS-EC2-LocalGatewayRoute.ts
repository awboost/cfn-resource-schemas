import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource type definition for `AWS::EC2::LocalGatewayRoute`.
 * Describes a route for a local gateway route table.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-localgatewayroute.html}
 */
export type EC2LocalGatewayRouteProperties = {
  /**
   * The CIDR block used for destination matches.
   */
  DestinationCidrBlock?: string;
  /**
   * The ID of the local gateway route table.
   */
  LocalGatewayRouteTableId?: string;
  /**
   * The ID of the virtual interface group.
   */
  LocalGatewayVirtualInterfaceGroupId?: string;
  /**
   * The ID of the network interface.
   */
  NetworkInterfaceId?: string;
};
/**
 * Attribute type definition for `AWS::EC2::LocalGatewayRoute`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-localgatewayroute.html#aws-resource-ec2-localgatewayroute-return-values}
 */
export type EC2LocalGatewayRouteAttributes = {
  /**
   * The state of the route.
   */
  State: string;
  /**
   * The route type.
   */
  Type: string;
};
/**
 * Resource type definition for `AWS::EC2::LocalGatewayRoute`.
 * Describes a route for a local gateway route table.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-localgatewayroute.html}
 */
export class EC2LocalGatewayRoute extends $Resource<
  "AWS::EC2::LocalGatewayRoute",
  EC2LocalGatewayRouteProperties,
  EC2LocalGatewayRouteAttributes
> {
  public static readonly Type = "AWS::EC2::LocalGatewayRoute";
  public static readonly AttributeNames = ["State" as const, "Type" as const];
  constructor(
    logicalId: string,
    properties: EC2LocalGatewayRouteProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      EC2LocalGatewayRoute.Type,
      properties,
      EC2LocalGatewayRoute.AttributeNames,
      options,
    );
  }
}
