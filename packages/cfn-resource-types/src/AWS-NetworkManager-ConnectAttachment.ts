import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * AWS::NetworkManager::ConnectAttachment Resource Type Definition
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-connectattachment.html}
 */
export type NetworkManagerConnectAttachmentProperties = {
  /**
   * ID of the CoreNetwork that the attachment will be attached to.
   */
  CoreNetworkId: string;
  /**
   * Edge location of the attachment.
   */
  EdgeLocation: string;
  /**
   * Protocol options for connect attachment
   */
  Options: ConnectAttachmentOptions;
  /**
   * The attachment to move from one segment to another.
   */
  ProposedSegmentChange?: ProposedSegmentChange;
  /**
   * Tags for the attachment.
   */
  Tags?: Tag[];
  /**
   * Id of transport attachment
   */
  TransportAttachmentId: string;
};
/**
 * Attribute type definition for `AWS::NetworkManager::ConnectAttachment`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-connectattachment.html#aws-resource-networkmanager-connectattachment-return-values}
 */
export type NetworkManagerConnectAttachmentAttributes = {
  /**
   * The ID of the attachment.
   */
  AttachmentId: string;
  /**
   * The policy rule number associated with the attachment.
   */
  AttachmentPolicyRuleNumber: number;
  /**
   * The type of attachment.
   */
  AttachmentType: string;
  /**
   * The ARN of a core network.
   */
  CoreNetworkArn: string;
  /**
   * Creation time of the attachment.
   */
  CreatedAt: string;
  /**
   * The ID of the attachment account owner.
   */
  OwnerAccountId: string;
  /**
   * The attachment resource ARN.
   */
  ResourceArn: string;
  /**
   * The name of the segment attachment.
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
 * Type definition for `AWS::NetworkManager::ConnectAttachment.ConnectAttachmentOptions`.
 * Connect attachment options for protocol
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkmanager-connectattachment-connectattachmentoptions.html}
 */
export type ConnectAttachmentOptions = {
  /**
   * Tunnel protocol for connect attachment
   */
  Protocol?: string;
};
/**
 * Type definition for `AWS::NetworkManager::ConnectAttachment.ProposedSegmentChange`.
 * The attachment to move from one segment to another.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkmanager-connectattachment-proposedsegmentchange.html}
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
   * The list of key-value tags that changed for the segment.
   */
  Tags?: Tag[];
};
/**
 * Type definition for `AWS::NetworkManager::ConnectAttachment.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkmanager-connectattachment-tag.html}
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
 * AWS::NetworkManager::ConnectAttachment Resource Type Definition
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-connectattachment.html}
 */
export class NetworkManagerConnectAttachment extends $Resource<
  "AWS::NetworkManager::ConnectAttachment",
  NetworkManagerConnectAttachmentProperties,
  NetworkManagerConnectAttachmentAttributes
> {
  public static readonly Type = "AWS::NetworkManager::ConnectAttachment";
  constructor(
    logicalId: string,
    properties: NetworkManagerConnectAttachmentProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, NetworkManagerConnectAttachment.Type, properties, options);
  }
}
