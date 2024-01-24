import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * AWS::NetworkManager::VpcAttachment Resoruce Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-vpcattachment.html}
 */
export type NetworkManagerVpcAttachmentProperties = {
  /**
   * The ID of a core network for the VPC attachment.
   */
  CoreNetworkId: string;
  /**
   * Vpc options of the attachment.
   */
  Options?: VpcOptions;
  /**
   * The attachment to move from one segment to another.
   */
  ProposedSegmentChange?: ProposedSegmentChange;
  /**
   * Subnet Arn list
   */
  SubnetArns: string[];
  /**
   * Tags for the attachment.
   */
  Tags?: Tag[];
  /**
   * The ARN of the VPC.
   */
  VpcArn: string;
};
/**
 * Attribute type definition for `AWS::NetworkManager::VpcAttachment`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-vpcattachment.html#aws-resource-networkmanager-vpcattachment-return-values}
 */
export type NetworkManagerVpcAttachmentAttributes = {
  /**
   * Id of the attachment.
   */
  AttachmentId: string;
  /**
   * The policy rule number associated with the attachment.
   */
  AttachmentPolicyRuleNumber: number;
  /**
   * Attachment type.
   */
  AttachmentType: string;
  /**
   * The ARN of a core network for the VPC attachment.
   */
  CoreNetworkArn: string;
  /**
   * Creation time of the attachment.
   */
  CreatedAt: string;
  /**
   * The Region where the edge is located.
   */
  EdgeLocation: string;
  /**
   * Owner account of the attachment.
   */
  OwnerAccountId: string;
  /**
   * The ARN of the Resource.
   */
  ResourceArn: string;
  /**
   * The name of the segment attachment..
   */
  SegmentName: string;
  /**
   * State of the attachment.
   */
  State: string;
  /**
   * Last update time of the attachment.
   */
  UpdatedAt: string;
};
/**
 * Type definition for `AWS::NetworkManager::VpcAttachment.ProposedSegmentChange`.
 * The attachment to move from one segment to another.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkmanager-vpcattachment-proposedsegmentchange.html}
 */
export type ProposedSegmentChange = {
  /**
   * The rule number in the policy document that applies to this change.
   */
  AttachmentPolicyRuleNumber?: number;
  /**
   * The name of the segment to change.
   */
  SegmentName?: string;
  /**
   * The key-value tags that changed for the segment.
   */
  Tags?: Tag[];
};
/**
 * Type definition for `AWS::NetworkManager::VpcAttachment.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkmanager-vpcattachment-tag.html}
 */
export type Tag = {
  /**
   * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   */
  Key: string;
  /**
   * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   */
  Value: string;
};
/**
 * Type definition for `AWS::NetworkManager::VpcAttachment.VpcOptions`.
 * Vpc options of the attachment.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkmanager-vpcattachment-vpcoptions.html}
 */
export type VpcOptions = {
  /**
   * Indicates whether to enable ApplianceModeSupport Support for Vpc Attachment. Valid Values: true | false
   */
  ApplianceModeSupport?: boolean;
  /**
   * Indicates whether to enable Ipv6 Support for Vpc Attachment. Valid Values: enable | disable
   */
  Ipv6Support?: boolean;
};
/**
 * AWS::NetworkManager::VpcAttachment Resoruce Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-vpcattachment.html}
 */
export class NetworkManagerVpcAttachment extends $Resource<
  "AWS::NetworkManager::VpcAttachment",
  NetworkManagerVpcAttachmentProperties,
  NetworkManagerVpcAttachmentAttributes
> {
  public static readonly Type = "AWS::NetworkManager::VpcAttachment";
  constructor(
    logicalId: string,
    properties: NetworkManagerVpcAttachmentProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, NetworkManagerVpcAttachment.Type, properties, options);
  }
}
