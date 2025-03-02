import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::EC2::LocalGatewayRouteTable`.
 * Resource Type definition for Local Gateway Route Table which describes a route table for a local gateway.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-localgatewayroutetable.html}
 */
export type EC2LocalGatewayRouteTableProperties = {
  /**
   * The ID of the local gateway.
   */
  LocalGatewayId: string;
  /**
   * The mode of the local gateway route table.
   */
  Mode?: string;
  /**
   * The tags for the local gateway route table.
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::EC2::LocalGatewayRouteTable`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-localgatewayroutetable.html#aws-resource-ec2-localgatewayroutetable-return-values}
 */
export type EC2LocalGatewayRouteTableAttributes = {
  /**
   * The ARN of the local gateway route table.
   */
  LocalGatewayRouteTableArn: string;
  /**
   * The ID of the local gateway route table.
   */
  LocalGatewayRouteTableId: string;
  /**
   * The ARN of the outpost.
   */
  OutpostArn: string;
  /**
   * The owner of the local gateway route table.
   */
  OwnerId: string;
  /**
   * The state of the local gateway route table.
   */
  State: string;
};
/**
 * Type definition for `AWS::EC2::LocalGatewayRouteTable.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-localgatewayroutetable-tag.html}
 */
export type Tag = {
  /**
   * @minLength `1`
   * @maxLength `127`
   * @pattern `^(?!aws:.*)`
   */
  Key?: string;
  /**
   * @minLength `1`
   * @maxLength `255`
   * @pattern `^(?!aws:.*)`
   */
  Value?: string;
};
/**
 * Resource type definition for `AWS::EC2::LocalGatewayRouteTable`.
 * Resource Type definition for Local Gateway Route Table which describes a route table for a local gateway.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-localgatewayroutetable.html}
 */
export class EC2LocalGatewayRouteTable extends $Resource<
  "AWS::EC2::LocalGatewayRouteTable",
  EC2LocalGatewayRouteTableProperties,
  EC2LocalGatewayRouteTableAttributes
> {
  public static readonly Type = "AWS::EC2::LocalGatewayRouteTable";
  constructor(
    logicalId: string,
    properties: EC2LocalGatewayRouteTableProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, EC2LocalGatewayRouteTable.Type, properties, options);
  }
}
