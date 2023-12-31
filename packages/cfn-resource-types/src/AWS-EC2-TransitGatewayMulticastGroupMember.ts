import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * The AWS::EC2::TransitGatewayMulticastGroupMember registers and deregisters members and sources (network interfaces) with the transit gateway multicast group
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-transitgatewaymulticastgroupmember.html}
 */
export type EC2TransitGatewayMulticastGroupMemberProperties = {
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
 * Attribute type definition for `AWS::EC2::TransitGatewayMulticastGroupMember`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-transitgatewaymulticastgroupmember.html#aws-resource-ec2-transitgatewaymulticastgroupmember-return-values}
 */
export type EC2TransitGatewayMulticastGroupMemberAttributes = {
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
 * The AWS::EC2::TransitGatewayMulticastGroupMember registers and deregisters members and sources (network interfaces) with the transit gateway multicast group
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-transitgatewaymulticastgroupmember.html}
 */
export class EC2TransitGatewayMulticastGroupMember extends $Resource<
  "AWS::EC2::TransitGatewayMulticastGroupMember",
  EC2TransitGatewayMulticastGroupMemberProperties,
  EC2TransitGatewayMulticastGroupMemberAttributes
> {
  public static readonly Type = "AWS::EC2::TransitGatewayMulticastGroupMember";
  public static readonly AttributeNames = [
    "GroupMember" as const,
    "GroupSource" as const,
    "MemberType" as const,
    "ResourceId" as const,
    "ResourceType" as const,
    "SourceType" as const,
    "SubnetId" as const,
    "TransitGatewayAttachmentId" as const,
  ];
  constructor(
    logicalId: string,
    properties: EC2TransitGatewayMulticastGroupMemberProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      EC2TransitGatewayMulticastGroupMember.Type,
      properties,
      EC2TransitGatewayMulticastGroupMember.AttributeNames,
      options,
    );
  }
}
