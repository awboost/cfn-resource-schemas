import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * AWS::NetworkManager::TransitGatewayRouteTableAttachment Resource Type definition.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-transitgatewayroutetableattachment.html}
 */
export type NetworkManagerTransitGatewayRouteTableAttachmentProperties = {
  /**
   * The Id of peering between transit gateway and core network.
   */
  PeeringId: string;
  /**
   * The attachment to move from one segment to another.
   */
  ProposedSegmentChange?: ProposedSegmentChange;
  /**
   * An array of key-value pairs to apply to this resource.
   */
  Tags?: Tag[];
  /**
   * The Arn of transit gateway route table.
   */
  TransitGatewayRouteTableArn: string;
};
/**
 * Attribute type definition for `AWS::NetworkManager::TransitGatewayRouteTableAttachment`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-transitgatewayroutetableattachment.html#aws-resource-networkmanager-transitgatewayroutetableattachment-return-values}
 */
export type NetworkManagerTransitGatewayRouteTableAttachmentAttributes = {
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
   * The ID of a core network where you're creating a site-to-site VPN attachment.
   */
  CoreNetworkId: string;
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
 * Type definition for `AWS::NetworkManager::TransitGatewayRouteTableAttachment.ProposedSegmentChange`.
 * The attachment to move from one segment to another.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkmanager-transitgatewayroutetableattachment-proposedsegmentchange.html}
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
 * Type definition for `AWS::NetworkManager::TransitGatewayRouteTableAttachment.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkmanager-transitgatewayroutetableattachment-tag.html}
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
 * AWS::NetworkManager::TransitGatewayRouteTableAttachment Resource Type definition.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-transitgatewayroutetableattachment.html}
 */
export class NetworkManagerTransitGatewayRouteTableAttachment extends $Resource<
  "AWS::NetworkManager::TransitGatewayRouteTableAttachment",
  NetworkManagerTransitGatewayRouteTableAttachmentProperties,
  NetworkManagerTransitGatewayRouteTableAttachmentAttributes
> {
  public static readonly Type =
    "AWS::NetworkManager::TransitGatewayRouteTableAttachment";
  constructor(
    logicalId: string,
    properties: NetworkManagerTransitGatewayRouteTableAttachmentProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      NetworkManagerTransitGatewayRouteTableAttachment.Type,
      properties,
      options,
    );
  }
}
