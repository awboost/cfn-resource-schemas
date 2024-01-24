import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::EC2::RouteTable
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-routetable.html}
 */
export type EC2RouteTableProperties = {
  /**
   * Any tags assigned to the route table.
   */
  Tags?: Tag[];
  /**
   * The ID of the VPC.
   */
  VpcId: string;
};
/**
 * Attribute type definition for `AWS::EC2::RouteTable`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-routetable.html#aws-resource-ec2-routetable-return-values}
 */
export type EC2RouteTableAttributes = {
  /**
   * The route table ID.
   */
  RouteTableId: string;
};
/**
 * Type definition for `AWS::EC2::RouteTable.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-routetable-tag.html}
 */
export type Tag = {
  Key: string;
  Value: string;
};
/**
 * Resource Type definition for AWS::EC2::RouteTable
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-routetable.html}
 */
export class EC2RouteTable extends $Resource<
  "AWS::EC2::RouteTable",
  EC2RouteTableProperties,
  EC2RouteTableAttributes
> {
  public static readonly Type = "AWS::EC2::RouteTable";
  constructor(
    logicalId: string,
    properties: EC2RouteTableProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, EC2RouteTable.Type, properties, options);
  }
}
