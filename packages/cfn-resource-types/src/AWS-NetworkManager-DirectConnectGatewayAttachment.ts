import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * AWS::NetworkManager::DirectConnectGatewayAttachment Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-directconnectgatewayattachment.html}
 */
export type NetworkManagerDirectConnectGatewayAttachmentProperties = {
  /**
   * The ID of a core network for the Direct Connect Gateway attachment.
   */
  CoreNetworkId: string;
  /**
   * The ARN of the Direct Connect Gateway.
   */
  DirectConnectGatewayArn: string;
  /**
   * The Regions where the edges are located.
   */
  EdgeLocations: string[];
  /**
   * The attachment to move from one network function group to another.
   */
  ProposedNetworkFunctionGroupChange?: ProposedNetworkFunctionGroupChange;
  /**
   * The attachment to move from one segment to another.
   */
  ProposedSegmentChange?: ProposedSegmentChange;
  /**
   * Routing policy label
   */
  RoutingPolicyLabel?: string;
  /**
   * Tags for the attachment.
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::NetworkManager::DirectConnectGatewayAttachment`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-directconnectgatewayattachment.html#aws-resource-networkmanager-directconnectgatewayattachment-return-values}
 */
export type NetworkManagerDirectConnectGatewayAttachmentAttributes = {
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
   * The ARN of a core network for the Direct Connect Gateway attachment.
   */
  CoreNetworkArn: string;
  /**
   * Creation time of the attachment.
   */
  CreatedAt: string;
  /**
   * Errors from the last modification of the attachment.
   */
  LastModificationErrors: string[];
  /**
   * The name of the network function group attachment.
   */
  NetworkFunctionGroupName: string;
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
 * Type definition for `AWS::NetworkManager::DirectConnectGatewayAttachment.ProposedNetworkFunctionGroupChange`.
 * The attachment to move from one network function group to another.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkmanager-directconnectgatewayattachment-proposednetworkfunctiongroupchange.html}
 */
export type ProposedNetworkFunctionGroupChange = {
  /**
   * The rule number in the policy document that applies to this change.
   */
  AttachmentPolicyRuleNumber?: number;
  /**
   * The name of the network function group to change.
   */
  NetworkFunctionGroupName?: string;
  /**
   * The key-value tags that changed for the network function group.
   */
  Tags?: Tag[];
};
/**
 * Type definition for `AWS::NetworkManager::DirectConnectGatewayAttachment.ProposedSegmentChange`.
 * The attachment to move from one segment to another.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkmanager-directconnectgatewayattachment-proposedsegmentchange.html}
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
 * Type definition for `AWS::NetworkManager::DirectConnectGatewayAttachment.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkmanager-directconnectgatewayattachment-tag.html}
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
 * AWS::NetworkManager::DirectConnectGatewayAttachment Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-directconnectgatewayattachment.html}
 */
export class NetworkManagerDirectConnectGatewayAttachment extends $Resource<
  "AWS::NetworkManager::DirectConnectGatewayAttachment",
  NetworkManagerDirectConnectGatewayAttachmentProperties,
  NetworkManagerDirectConnectGatewayAttachmentAttributes
> {
  public static readonly Type =
    "AWS::NetworkManager::DirectConnectGatewayAttachment";
  constructor(
    logicalId: string,
    properties: NetworkManagerDirectConnectGatewayAttachmentProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      NetworkManagerDirectConnectGatewayAttachment.Type,
      properties,
      options,
    );
  }
}
