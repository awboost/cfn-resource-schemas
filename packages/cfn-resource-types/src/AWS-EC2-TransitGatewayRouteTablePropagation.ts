import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource Type definition for AWS::EC2::TransitGatewayRouteTablePropagation
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-transitgatewayroutetablepropagation.html}
 */
export type EC2TransitGatewayRouteTablePropagationProperties = {
  TransitGatewayAttachmentId: string;
  TransitGatewayRouteTableId: string;
};
/**
 * Attribute type definition for `AWS::EC2::TransitGatewayRouteTablePropagation`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-transitgatewayroutetablepropagation.html#aws-resource-ec2-transitgatewayroutetablepropagation-return-values}
 */
export type EC2TransitGatewayRouteTablePropagationAttributes = {
  Id: string;
};
/**
 * Resource Type definition for AWS::EC2::TransitGatewayRouteTablePropagation
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-transitgatewayroutetablepropagation.html}
 */
export class EC2TransitGatewayRouteTablePropagation extends $Resource<
  "AWS::EC2::TransitGatewayRouteTablePropagation",
  EC2TransitGatewayRouteTablePropagationProperties,
  EC2TransitGatewayRouteTablePropagationAttributes
> {
  public static readonly Type = "AWS::EC2::TransitGatewayRouteTablePropagation";
  public static readonly AttributeNames = ["Id" as const];
  constructor(
    logicalId: string,
    properties: EC2TransitGatewayRouteTablePropagationProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      EC2TransitGatewayRouteTablePropagation.Type,
      properties,
      EC2TransitGatewayRouteTablePropagation.AttributeNames,
      options,
    );
  }
}
