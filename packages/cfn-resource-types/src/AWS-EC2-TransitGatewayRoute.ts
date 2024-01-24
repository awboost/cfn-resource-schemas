import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::EC2::TransitGatewayRoute
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-transitgatewayroute.html}
 */
export type EC2TransitGatewayRouteProperties = {
  Blackhole?: boolean;
  DestinationCidrBlock?: string;
  TransitGatewayAttachmentId?: string;
  TransitGatewayRouteTableId: string;
};
/**
 * Attribute type definition for `AWS::EC2::TransitGatewayRoute`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-transitgatewayroute.html#aws-resource-ec2-transitgatewayroute-return-values}
 */
export type EC2TransitGatewayRouteAttributes = {
  Id: string;
};
/**
 * Resource Type definition for AWS::EC2::TransitGatewayRoute
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-transitgatewayroute.html}
 */
export class EC2TransitGatewayRoute extends $Resource<
  "AWS::EC2::TransitGatewayRoute",
  EC2TransitGatewayRouteProperties,
  EC2TransitGatewayRouteAttributes
> {
  public static readonly Type = "AWS::EC2::TransitGatewayRoute";
  constructor(
    logicalId: string,
    properties: EC2TransitGatewayRouteProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, EC2TransitGatewayRoute.Type, properties, options);
  }
}
