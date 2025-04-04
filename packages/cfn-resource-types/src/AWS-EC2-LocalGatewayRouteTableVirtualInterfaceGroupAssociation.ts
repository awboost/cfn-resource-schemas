import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::EC2::LocalGatewayRouteTableVirtualInterfaceGroupAssociation`.
 * Resource Type definition for Local Gateway Route Table Virtual Interface Group Association which describes a local gateway route table virtual interface group association for a local gateway.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-localgatewayroutetablevirtualinterfacegroupassociation.html}
 */
export type EC2LocalGatewayRouteTableVirtualInterfaceGroupAssociationProperties =
  {
    /**
     * The ID of the local gateway route table.
     */
    LocalGatewayRouteTableId: string;
    /**
     * The ID of the local gateway route table virtual interface group.
     */
    LocalGatewayVirtualInterfaceGroupId: string;
    /**
     * The tags for the local gateway route table virtual interface group association.
     */
    Tags?: Tag[];
  };
/**
 * Attribute type definition for `AWS::EC2::LocalGatewayRouteTableVirtualInterfaceGroupAssociation`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-localgatewayroutetablevirtualinterfacegroupassociation.html#aws-resource-ec2-localgatewayroutetablevirtualinterfacegroupassociation-return-values}
 */
export type EC2LocalGatewayRouteTableVirtualInterfaceGroupAssociationAttributes =
  {
    /**
     * The ID of the local gateway.
     */
    LocalGatewayId: string;
    /**
     * The ARN of the local gateway route table.
     */
    LocalGatewayRouteTableArn: string;
    /**
     * The ID of the local gateway route table virtual interface group association.
     */
    LocalGatewayRouteTableVirtualInterfaceGroupAssociationId: string;
    /**
     * The owner of the local gateway route table virtual interface group association.
     */
    OwnerId: string;
    /**
     * The state of the local gateway route table virtual interface group association.
     */
    State: string;
  };
/**
 * Type definition for `AWS::EC2::LocalGatewayRouteTableVirtualInterfaceGroupAssociation.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-localgatewayroutetablevirtualinterfacegroupassociation-tag.html}
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
 * Resource type definition for `AWS::EC2::LocalGatewayRouteTableVirtualInterfaceGroupAssociation`.
 * Resource Type definition for Local Gateway Route Table Virtual Interface Group Association which describes a local gateway route table virtual interface group association for a local gateway.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-localgatewayroutetablevirtualinterfacegroupassociation.html}
 */
export class EC2LocalGatewayRouteTableVirtualInterfaceGroupAssociation extends $Resource<
  "AWS::EC2::LocalGatewayRouteTableVirtualInterfaceGroupAssociation",
  EC2LocalGatewayRouteTableVirtualInterfaceGroupAssociationProperties,
  EC2LocalGatewayRouteTableVirtualInterfaceGroupAssociationAttributes
> {
  public static readonly Type =
    "AWS::EC2::LocalGatewayRouteTableVirtualInterfaceGroupAssociation";
  constructor(
    logicalId: string,
    properties: EC2LocalGatewayRouteTableVirtualInterfaceGroupAssociationProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      EC2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.Type,
      properties,
      options,
    );
  }
}
