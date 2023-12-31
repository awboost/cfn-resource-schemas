import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource Type definition for AWS::EC2::TransitGatewayRouteTableAssociation
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-transitgatewayroutetableassociation.html}
 */
export type EC2TransitGatewayRouteTableAssociationProperties = {
  TransitGatewayAttachmentId: string;
  TransitGatewayRouteTableId: string;
};
/**
 * Attribute type definition for `AWS::EC2::TransitGatewayRouteTableAssociation`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-transitgatewayroutetableassociation.html#aws-resource-ec2-transitgatewayroutetableassociation-return-values}
 */
export type EC2TransitGatewayRouteTableAssociationAttributes = {
  Id: string;
};
/**
 * Resource Type definition for AWS::EC2::TransitGatewayRouteTableAssociation
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-transitgatewayroutetableassociation.html}
 */
export class EC2TransitGatewayRouteTableAssociation extends $Resource<
  "AWS::EC2::TransitGatewayRouteTableAssociation",
  EC2TransitGatewayRouteTableAssociationProperties,
  EC2TransitGatewayRouteTableAssociationAttributes
> {
  public static readonly Type = "AWS::EC2::TransitGatewayRouteTableAssociation";
  public static readonly AttributeNames = ["Id" as const];
  constructor(
    logicalId: string,
    properties: EC2TransitGatewayRouteTableAssociationProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      EC2TransitGatewayRouteTableAssociation.Type,
      properties,
      EC2TransitGatewayRouteTableAssociation.AttributeNames,
      options,
    );
  }
}
