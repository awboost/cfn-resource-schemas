import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource Type definition for AWS::EC2::SubnetRouteTableAssociation
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-subnetroutetableassociation.html}
 */
export type EC2SubnetRouteTableAssociationProperties = {
  RouteTableId: string;
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
 * Resource Type definition for AWS::EC2::SubnetRouteTableAssociation
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-subnetroutetableassociation.html}
 */
export class EC2SubnetRouteTableAssociation extends $Resource<
  "AWS::EC2::SubnetRouteTableAssociation",
  EC2SubnetRouteTableAssociationProperties,
  EC2SubnetRouteTableAssociationAttributes
> {
  public static readonly Type = "AWS::EC2::SubnetRouteTableAssociation";
  public static readonly AttributeNames = ["Id" as const];
  constructor(
    logicalId: string,
    properties: EC2SubnetRouteTableAssociationProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      EC2SubnetRouteTableAssociation.Type,
      properties,
      EC2SubnetRouteTableAssociation.AttributeNames,
      options,
    );
  }
}
