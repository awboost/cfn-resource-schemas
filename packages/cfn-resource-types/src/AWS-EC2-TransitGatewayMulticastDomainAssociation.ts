import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * The AWS::EC2::TransitGatewayMulticastDomainAssociation type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-transitgatewaymulticastdomainassociation.html}
 */
export type EC2TransitGatewayMulticastDomainAssociationProperties = {
  /**
   * The IDs of the subnets to associate with the transit gateway multicast domain.
   */
  SubnetId: string;
  /**
   * The ID of the transit gateway attachment.
   */
  TransitGatewayAttachmentId: string;
  /**
   * The ID of the transit gateway multicast domain.
   */
  TransitGatewayMulticastDomainId: string;
};
/**
 * Attribute type definition for `AWS::EC2::TransitGatewayMulticastDomainAssociation`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-transitgatewaymulticastdomainassociation.html#aws-resource-ec2-transitgatewaymulticastdomainassociation-return-values}
 */
export type EC2TransitGatewayMulticastDomainAssociationAttributes = {
  /**
   * The ID of the resource.
   */
  ResourceId: string;
  /**
   * The type of resource, for example a VPC attachment.
   */
  ResourceType: string;
  /**
   * The state of the subnet association.
   */
  State: string;
};
/**
 * The AWS::EC2::TransitGatewayMulticastDomainAssociation type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-transitgatewaymulticastdomainassociation.html}
 */
export class EC2TransitGatewayMulticastDomainAssociation extends $Resource<
  "AWS::EC2::TransitGatewayMulticastDomainAssociation",
  EC2TransitGatewayMulticastDomainAssociationProperties,
  EC2TransitGatewayMulticastDomainAssociationAttributes
> {
  public static readonly Type =
    "AWS::EC2::TransitGatewayMulticastDomainAssociation";
  constructor(
    logicalId: string,
    properties: EC2TransitGatewayMulticastDomainAssociationProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      EC2TransitGatewayMulticastDomainAssociation.Type,
      properties,
      options,
    );
  }
}
