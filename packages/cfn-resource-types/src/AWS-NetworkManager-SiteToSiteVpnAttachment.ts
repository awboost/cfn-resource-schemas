import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * AWS::NetworkManager::SiteToSiteVpnAttachment Resource Type definition.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-sitetositevpnattachment.html}
 */
export type NetworkManagerSiteToSiteVpnAttachmentProperties = {
  /**
   * The ID of a core network where you're creating a site-to-site VPN attachment.
   */
  CoreNetworkId: string;
  /**
   * The attachment to move from one segment to another.
   */
  ProposedSegmentChange?: ProposedSegmentChange;
  /**
   * Tags for the attachment.
   */
  Tags?: Tag[];
  /**
   * The ARN of the site-to-site VPN attachment.
   */
  VpnConnectionArn: string;
};
/**
 * Attribute type definition for `AWS::NetworkManager::SiteToSiteVpnAttachment`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-sitetositevpnattachment.html#aws-resource-networkmanager-sitetositevpnattachment-return-values}
 */
export type NetworkManagerSiteToSiteVpnAttachmentAttributes = {
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
   * The name of the segment that attachment is in.
   */
  SegmentName: string;
  /**
   * The state of the attachment.
   */
  State: string;
  /**
   * Last update time of the attachment.
   */
  UpdatedAt: string;
};
/**
 * Type definition for `AWS::NetworkManager::SiteToSiteVpnAttachment.ProposedSegmentChange`.
 * The attachment to move from one segment to another.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkmanager-sitetositevpnattachment-proposedsegmentchange.html}
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
 * Type definition for `AWS::NetworkManager::SiteToSiteVpnAttachment.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkmanager-sitetositevpnattachment-tag.html}
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
 * AWS::NetworkManager::SiteToSiteVpnAttachment Resource Type definition.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-sitetositevpnattachment.html}
 */
export class NetworkManagerSiteToSiteVpnAttachment extends $Resource<
  "AWS::NetworkManager::SiteToSiteVpnAttachment",
  NetworkManagerSiteToSiteVpnAttachmentProperties,
  NetworkManagerSiteToSiteVpnAttachmentAttributes
> {
  public static readonly Type = "AWS::NetworkManager::SiteToSiteVpnAttachment";
  public static readonly AttributeNames = [
    "AttachmentId" as const,
    "AttachmentPolicyRuleNumber" as const,
    "AttachmentType" as const,
    "CoreNetworkArn" as const,
    "CreatedAt" as const,
    "EdgeLocation" as const,
    "OwnerAccountId" as const,
    "ResourceArn" as const,
    "SegmentName" as const,
    "State" as const,
    "UpdatedAt" as const,
  ];
  constructor(
    logicalId: string,
    properties: NetworkManagerSiteToSiteVpnAttachmentProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      NetworkManagerSiteToSiteVpnAttachment.Type,
      properties,
      NetworkManagerSiteToSiteVpnAttachment.AttributeNames,
      options,
    );
  }
}
