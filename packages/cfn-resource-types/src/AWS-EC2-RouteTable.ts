import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::EC2::RouteTable`.
 * Specifies a route table for the specified VPC. After you create a route table, you can add routes and associate the table with a subnet.
 For more information, see [Route tables](https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Route_Tables.html) in the *Amazon VPC User Guide*.
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
  RouteTableId: string;
};
/**
 * Type definition for `AWS::EC2::RouteTable.Tag`.
 * Specifies a tag. For more information, see [Resource tags](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html).
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-routetable-tag.html}
 */
export type Tag = {
  /**
   * The tag key.
   */
  Key: string;
  /**
   * The tag value.
   */
  Value: string;
};
/**
 * Resource type definition for `AWS::EC2::RouteTable`.
 * Specifies a route table for the specified VPC. After you create a route table, you can add routes and associate the table with a subnet.
 For more information, see [Route tables](https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Route_Tables.html) in the *Amazon VPC User Guide*.
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
