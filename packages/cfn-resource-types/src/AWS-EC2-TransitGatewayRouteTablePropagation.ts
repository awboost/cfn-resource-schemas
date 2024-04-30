import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * AWS::EC2::TransitGatewayRouteTablePropagation Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-transitgatewayroutetablepropagation.html}
 */
export type EC2TransitGatewayRouteTablePropagationProperties = {
  /**
   * The ID of transit gateway attachment.
   */
  TransitGatewayAttachmentId: string;
  /**
   * The ID of transit gateway route table.
   */
  TransitGatewayRouteTableId: string;
};
/**
 * AWS::EC2::TransitGatewayRouteTablePropagation Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-transitgatewayroutetablepropagation.html}
 */
export class EC2TransitGatewayRouteTablePropagation extends $Resource<
  "AWS::EC2::TransitGatewayRouteTablePropagation",
  EC2TransitGatewayRouteTablePropagationProperties,
  Record<string, never>
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
