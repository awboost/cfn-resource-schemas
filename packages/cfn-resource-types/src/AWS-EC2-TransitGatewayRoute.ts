import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
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
  public static readonly AttributeNames = ["Id" as const];
  constructor(
    logicalId: string,
    properties: EC2TransitGatewayRouteProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      EC2TransitGatewayRoute.Type,
      properties,
      EC2TransitGatewayRoute.AttributeNames,
      options,
    );
  }
}
