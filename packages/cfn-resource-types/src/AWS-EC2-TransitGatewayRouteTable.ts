import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::EC2::TransitGatewayRouteTable
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-transitgatewayroutetable.html}
 */
export type EC2TransitGatewayRouteTableProperties = {
  /**
   * Tags are composed of a Key/Value pair. You can use tags to categorize and track each parameter group. The tag value null is permitted.
   */
  Tags?: Tag[];
  /**
   * The ID of the transit gateway.
   */
  TransitGatewayId: string;
};
/**
 * Attribute type definition for `AWS::EC2::TransitGatewayRouteTable`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-transitgatewayroutetable.html#aws-resource-ec2-transitgatewayroutetable-return-values}
 */
export type EC2TransitGatewayRouteTableAttributes = {
  /**
   * Transit Gateway Route Table primary identifier
   */
  TransitGatewayRouteTableId: string;
};
/**
 * Type definition for `AWS::EC2::TransitGatewayRouteTable.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-transitgatewayroutetable-tag.html}
 */
export type Tag = {
  /**
   * The key of the associated tag key-value pair
   */
  Key: string;
  /**
   * The value of the associated tag key-value pair
   */
  Value: string;
};
/**
 * Resource Type definition for AWS::EC2::TransitGatewayRouteTable
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-transitgatewayroutetable.html}
 */
export class EC2TransitGatewayRouteTable extends $Resource<
  "AWS::EC2::TransitGatewayRouteTable",
  EC2TransitGatewayRouteTableProperties,
  EC2TransitGatewayRouteTableAttributes
> {
  public static readonly Type = "AWS::EC2::TransitGatewayRouteTable";
  constructor(
    logicalId: string,
    properties: EC2TransitGatewayRouteTableProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, EC2TransitGatewayRouteTable.Type, properties, options);
  }
}
