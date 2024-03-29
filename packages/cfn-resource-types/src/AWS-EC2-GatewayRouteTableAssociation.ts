import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::EC2::GatewayRouteTableAssociation`.
 * Associates a gateway with a route table. The gateway and route table must be in the same VPC. This association causes the incoming traffic to the gateway to be routed according to the routes in the route table.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-gatewayroutetableassociation.html}
 */
export type EC2GatewayRouteTableAssociationProperties = {
  /**
   * The ID of the gateway.
   */
  GatewayId: string;
  /**
   * The ID of the route table.
   */
  RouteTableId: string;
};
/**
 * Attribute type definition for `AWS::EC2::GatewayRouteTableAssociation`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-gatewayroutetableassociation.html#aws-resource-ec2-gatewayroutetableassociation-return-values}
 */
export type EC2GatewayRouteTableAssociationAttributes = {
  /**
   * The route table association ID.
   */
  AssociationId: string;
};
/**
 * Resource type definition for `AWS::EC2::GatewayRouteTableAssociation`.
 * Associates a gateway with a route table. The gateway and route table must be in the same VPC. This association causes the incoming traffic to the gateway to be routed according to the routes in the route table.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-gatewayroutetableassociation.html}
 */
export class EC2GatewayRouteTableAssociation extends $Resource<
  "AWS::EC2::GatewayRouteTableAssociation",
  EC2GatewayRouteTableAssociationProperties,
  EC2GatewayRouteTableAssociationAttributes
> {
  public static readonly Type = "AWS::EC2::GatewayRouteTableAssociation";
  constructor(
    logicalId: string,
    properties: EC2GatewayRouteTableAssociationProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, EC2GatewayRouteTableAssociation.Type, properties, options);
  }
}
