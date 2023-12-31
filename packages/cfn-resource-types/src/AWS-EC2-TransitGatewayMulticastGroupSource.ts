import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * The AWS::EC2::TransitGatewayMulticastGroupSource registers and deregisters members and sources (network interfaces) with the transit gateway multicast group
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-transitgatewaymulticastgroupsource.html}
 */
export type EC2TransitGatewayMulticastGroupSourceProperties = {
  /**
   * The IP address assigned to the transit gateway multicast group.
   */
  GroupIpAddress: string;
  /**
   * The ID of the transit gateway attachment.
   */
  NetworkInterfaceId: string;
  /**
   * The ID of the transit gateway multicast domain.
   */
  TransitGatewayMulticastDomainId: string;
};
/**
 * Attribute type definition for `AWS::EC2::TransitGatewayMulticastGroupSource`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-transitgatewaymulticastgroupsource.html#aws-resource-ec2-transitgatewaymulticastgroupsource-return-values}
 */
export type EC2TransitGatewayMulticastGroupSourceAttributes = {
  /**
   * Indicates that the resource is a transit gateway multicast group member.
   */
  GroupMember: boolean;
  /**
   * Indicates that the resource is a transit gateway multicast group member.
   */
  GroupSource: boolean;
  /**
   * The member type (for example, static).
   */
  MemberType: string;
  /**
   * The ID of the resource.
   */
  ResourceId: string;
  /**
   * The type of resource, for example a VPC attachment.
   */
  ResourceType: string;
  /**
   * The source type.
   */
  SourceType: string;
  /**
   * The ID of the subnet.
   */
  SubnetId: string;
  /**
   * The ID of the transit gateway attachment.
   */
  TransitGatewayAttachmentId: string;
};
/**
 * The AWS::EC2::TransitGatewayMulticastGroupSource registers and deregisters members and sources (network interfaces) with the transit gateway multicast group
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-transitgatewaymulticastgroupsource.html}
 */
export class EC2TransitGatewayMulticastGroupSource extends $Resource<
  "AWS::EC2::TransitGatewayMulticastGroupSource",
  EC2TransitGatewayMulticastGroupSourceProperties,
  EC2TransitGatewayMulticastGroupSourceAttributes
> {
  public static readonly Type = "AWS::EC2::TransitGatewayMulticastGroupSource";
  constructor(
    logicalId: string,
    properties: EC2TransitGatewayMulticastGroupSourceProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      EC2TransitGatewayMulticastGroupSource.Type,
      properties,
      options,
    );
  }
}
