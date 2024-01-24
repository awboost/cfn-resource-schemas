import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
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
  constructor(
    logicalId: string,
    properties: EC2TransitGatewayRouteTablePropagationProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      EC2TransitGatewayRouteTablePropagation.Type,
      properties,
      options,
    );
  }
}
