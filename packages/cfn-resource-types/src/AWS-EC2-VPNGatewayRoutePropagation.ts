import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource Type definition for AWS::EC2::VPNGatewayRoutePropagation
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpngatewayroutepropagation.html}
 */
export type EC2VPNGatewayRoutePropagationProperties = {
  RouteTableIds: string[];
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
  public static readonly AttributeNames = ["Id" as const];
  constructor(
    logicalId: string,
    properties: EC2VPNGatewayRoutePropagationProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      EC2VPNGatewayRoutePropagation.Type,
      properties,
      EC2VPNGatewayRoutePropagation.AttributeNames,
      options,
    );
  }
}
