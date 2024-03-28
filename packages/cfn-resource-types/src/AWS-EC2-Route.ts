import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Specifies a route in a route table. For more information, see [Routes](https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Route_Tables.html#route-table-routes) in the *Amazon VPC User Guide*.
 You must specify either a destination CIDR block or prefix list ID. You must also specify exactly one of the resources as the target.
 If you create a route that references a transit gateway in the same template where you create the transit gateway, you must declare a dependency on the transit gateway attachment. The route table cannot use the transit gateway until it has successfully attached to the VPC. Add a [DependsOn Attribute](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-dependson.html) in the ``AWS::EC2::Route`` resource to explicitly declare a dependency on the ``AWS::EC2::TransitGatewayAttachment`` resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-route.html}
 */
export type EC2RouteProperties = {
  /**
     * The ID of the carrier gateway.
     You can only use this option when the VPC contains a subnet which is associated with a Wavelength Zone.
     */
  CarrierGatewayId?: string;
  /**
   * The Amazon Resource Name (ARN) of the core network.
   */
  CoreNetworkArn?: string;
  /**
   * The IPv4 CIDR address block used for the destination match. Routing decisions are based on the most specific match. We modify the specified CIDR block to its canonical form; for example, if you specify ``100.68.0.18/18``, we modify it to ``100.68.0.0/18``.
   */
  DestinationCidrBlock?: string;
  /**
   * The IPv6 CIDR block used for the destination match. Routing decisions are based on the most specific match.
   */
  DestinationIpv6CidrBlock?: string;
  /**
   * The ID of a prefix list used for the destination match.
   */
  DestinationPrefixListId?: string;
  /**
   * [IPv6 traffic only] The ID of an egress-only internet gateway.
   */
  EgressOnlyInternetGatewayId?: string;
  /**
   * The ID of an internet gateway or virtual private gateway attached to your VPC.
   */
  GatewayId?: string;
  /**
   * The ID of a NAT instance in your VPC. The operation fails if you specify an instance ID unless exactly one network interface is attached.
   */
  InstanceId?: string;
  /**
   * The ID of the local gateway.
   */
  LocalGatewayId?: string;
  /**
   * [IPv4 traffic only] The ID of a NAT gateway.
   */
  NatGatewayId?: string;
  /**
   * The ID of a network interface.
   */
  NetworkInterfaceId?: string;
  /**
   * The ID of the route table for the route.
   */
  RouteTableId: string;
  /**
   * The ID of a transit gateway.
   */
  TransitGatewayId?: string;
  /**
   * The ID of a VPC endpoint. Supported for Gateway Load Balancer endpoints only.
   */
  VpcEndpointId?: string;
  /**
   * The ID of a VPC peering connection.
   */
  VpcPeeringConnectionId?: string;
};
/**
 * Attribute type definition for `AWS::EC2::Route`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-route.html#aws-resource-ec2-route-return-values}
 */
export type EC2RouteAttributes = {
  CidrBlock: string;
};
/**
 * Specifies a route in a route table. For more information, see [Routes](https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Route_Tables.html#route-table-routes) in the *Amazon VPC User Guide*.
 You must specify either a destination CIDR block or prefix list ID. You must also specify exactly one of the resources as the target.
 If you create a route that references a transit gateway in the same template where you create the transit gateway, you must declare a dependency on the transit gateway attachment. The route table cannot use the transit gateway until it has successfully attached to the VPC. Add a [DependsOn Attribute](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-dependson.html) in the ``AWS::EC2::Route`` resource to explicitly declare a dependency on the ``AWS::EC2::TransitGatewayAttachment`` resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-route.html}
 */
export class EC2Route extends $Resource<
  "AWS::EC2::Route",
  EC2RouteProperties,
  EC2RouteAttributes
> {
  public static readonly Type = "AWS::EC2::Route";
  constructor(
    logicalId: string,
    properties: EC2RouteProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, EC2Route.Type, properties, options);
  }
}
