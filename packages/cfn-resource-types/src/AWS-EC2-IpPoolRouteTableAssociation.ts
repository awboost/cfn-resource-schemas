import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::EC2::IpPoolRouteTableAssociation
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-ippoolroutetableassociation.html}
 */
export type EC2IpPoolRouteTableAssociationProperties = {
  /**
   * The ID of the public IPv4 pool.
   */
  PublicIpv4Pool: string;
  /**
   * The ID of the route table.
   */
  RouteTableId: string;
};
/**
 * Attribute type definition for `AWS::EC2::IpPoolRouteTableAssociation`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-ippoolroutetableassociation.html#aws-resource-ec2-ippoolroutetableassociation-return-values}
 */
export type EC2IpPoolRouteTableAssociationAttributes = {
  /**
   * The route table association ID.
   */
  AssociationId: string;
};
/**
 * Resource Type definition for AWS::EC2::IpPoolRouteTableAssociation
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-ippoolroutetableassociation.html}
 */
export class EC2IpPoolRouteTableAssociation extends $Resource<
  "AWS::EC2::IpPoolRouteTableAssociation",
  EC2IpPoolRouteTableAssociationProperties,
  EC2IpPoolRouteTableAssociationAttributes
> {
  public static readonly Type = "AWS::EC2::IpPoolRouteTableAssociation";
  constructor(
    logicalId: string,
    properties: EC2IpPoolRouteTableAssociationProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, EC2IpPoolRouteTableAssociation.Type, properties, options);
  }
}
