import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource type definition for `AWS::EC2::LocalGatewayRouteTableVPCAssociation`.
 * Describes an association between a local gateway route table and a VPC.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-localgatewayroutetablevpcassociation.html}
 */
export type EC2LocalGatewayRouteTableVPCAssociationProperties = {
  /**
   * The ID of the local gateway route table.
   */
  LocalGatewayRouteTableId: string;
  /**
   * The tags for the association.
   */
  Tags?: Tag[];
  /**
   * The ID of the VPC.
   */
  VpcId: string;
};
/**
 * Attribute type definition for `AWS::EC2::LocalGatewayRouteTableVPCAssociation`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-localgatewayroutetablevpcassociation.html#aws-resource-ec2-localgatewayroutetablevpcassociation-return-values}
 */
export type EC2LocalGatewayRouteTableVPCAssociationAttributes = {
  /**
   * The ID of the local gateway.
   */
  LocalGatewayId: string;
  /**
   * The ID of the association.
   */
  LocalGatewayRouteTableVpcAssociationId: string;
  /**
   * The state of the association.
   */
  State: string;
};
/**
 * Type definition for `AWS::EC2::LocalGatewayRouteTableVPCAssociation.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-localgatewayroutetablevpcassociation-tag.html}
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
 * Resource type definition for `AWS::EC2::LocalGatewayRouteTableVPCAssociation`.
 * Describes an association between a local gateway route table and a VPC.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-localgatewayroutetablevpcassociation.html}
 */
export class EC2LocalGatewayRouteTableVPCAssociation extends $Resource<
  "AWS::EC2::LocalGatewayRouteTableVPCAssociation",
  EC2LocalGatewayRouteTableVPCAssociationProperties,
  EC2LocalGatewayRouteTableVPCAssociationAttributes
> {
  public static readonly Type =
    "AWS::EC2::LocalGatewayRouteTableVPCAssociation";
  public static readonly AttributeNames = [
    "LocalGatewayId" as const,
    "LocalGatewayRouteTableVpcAssociationId" as const,
    "State" as const,
  ];
  constructor(
    logicalId: string,
    properties: EC2LocalGatewayRouteTableVPCAssociationProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      EC2LocalGatewayRouteTableVPCAssociation.Type,
      properties,
      EC2LocalGatewayRouteTableVPCAssociation.AttributeNames,
      options,
    );
  }
}
