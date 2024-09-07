import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::EC2::VPNGatewayRoutePropagation
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpngatewayroutepropagation.html}
 */
export type EC2VPNGatewayRoutePropagationProperties = {
  /**
   * The ID of the route table. The routing table must be associated with the same VPC that the virtual private gateway is attached to
   */
  RouteTableIds: string[];
  /**
   * The ID of the virtual private gateway that is attached to a VPC. The virtual private gateway must be attached to the same VPC that the routing tables are associated with
   */
  VpnGatewayId: string;
};
/**
 * Attribute type definition for `AWS::EC2::VPNGatewayRoutePropagation`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpngatewayroutepropagation.html#aws-resource-ec2-vpngatewayroutepropagation-return-values}
 */
export type EC2VPNGatewayRoutePropagationAttributes = {
  Id: string;
};
/**
 * Resource Type definition for AWS::EC2::VPNGatewayRoutePropagation
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpngatewayroutepropagation.html}
 */
export class EC2VPNGatewayRoutePropagation extends $Resource<
  "AWS::EC2::VPNGatewayRoutePropagation",
  EC2VPNGatewayRoutePropagationProperties,
  EC2VPNGatewayRoutePropagationAttributes
> {
  public static readonly Type = "AWS::EC2::VPNGatewayRoutePropagation";
  constructor(
    logicalId: string,
    properties: EC2VPNGatewayRoutePropagationProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, EC2VPNGatewayRoutePropagation.Type, properties, options);
  }
}
