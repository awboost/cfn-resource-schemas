import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::EC2::SubnetRouteTableAssociation`.
 * Associates a subnet with a route table. The subnet and route table must be in the same VPC. This association causes traffic originating from the subnet to be routed according to the routes in the route table. A route table can be associated with multiple subnets. To create a route table, see [AWS::EC2::RouteTable](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-routetable.html).
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-subnetroutetableassociation.html}
 */
export type EC2SubnetRouteTableAssociationProperties = {
  /**
     * The ID of the route table.
     The physical ID changes when the route table ID is changed.
     */
  RouteTableId: string;
  /**
   * The ID of the subnet.
   */
  SubnetId: string;
};
/**
 * Attribute type definition for `AWS::EC2::SubnetRouteTableAssociation`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-subnetroutetableassociation.html#aws-resource-ec2-subnetroutetableassociation-return-values}
 */
export type EC2SubnetRouteTableAssociationAttributes = {
  Id: string;
};
/**
 * Resource type definition for `AWS::EC2::SubnetRouteTableAssociation`.
 * Associates a subnet with a route table. The subnet and route table must be in the same VPC. This association causes traffic originating from the subnet to be routed according to the routes in the route table. A route table can be associated with multiple subnets. To create a route table, see [AWS::EC2::RouteTable](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-routetable.html).
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-subnetroutetableassociation.html}
 */
export class EC2SubnetRouteTableAssociation extends $Resource<
  "AWS::EC2::SubnetRouteTableAssociation",
  EC2SubnetRouteTableAssociationProperties,
  EC2SubnetRouteTableAssociationAttributes
> {
  public static readonly Type = "AWS::EC2::SubnetRouteTableAssociation";
  constructor(
    logicalId: string,
    properties: EC2SubnetRouteTableAssociationProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, EC2SubnetRouteTableAssociation.Type, properties, options);
  }
}
