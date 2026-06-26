import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Definition of AWS::MediaLive::Node Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-node.html}
 */
export type MediaLiveNodeProperties = {
  /**
   * The ID of the Cluster that the Node belongs to.
   */
  ClusterId: string;
  /**
   * The user-specified name of the Node.
   */
  Name?: string;
  /**
   * An array of interface mappings for the Node.
   */
  NodeInterfaceMappings?: NodeInterfaceMapping[];
  /**
   * The role of the Node in the Cluster. ACTIVE means the Node is available for encoding. BACKUP means the Node is a redundant Node and might get used if an ACTIVE Node fails.
   */
  Role?: NodeRole;
  /**
   * An array of SDI source mappings.
   */
  SdiSourceMappings?: SdiSourceMapping[];
  /**
   * A collection of key-value pairs.
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::MediaLive::Node`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-node.html#aws-resource-medialive-node-return-values}
 */
export type MediaLiveNodeAttributes = {
  /**
   * The ARN of the Node. It is automatically assigned when the Node is created.
   */
  Arn: string;
  /**
   * An array of IDs. Each ID is one ChannelPlacementGroup that is associated with this Node.
   */
  ChannelPlacementGroups: string[];
  /**
   * The current connection state of the Node.
   */
  ConnectionState: NodeConnectionState;
  /**
   * The unique ID of the Node. Unique in the Cluster. The ID is the resource-id portion of the ARN.
   */
  Id: string;
  /**
   * The ARN of the EC2 instance hosting the Node.
   */
  InstanceArn: string;
  /**
   * The current state of the Node.
   */
  State: NodeState;
};
/**
 * Type definition for `AWS::MediaLive::Node.NodeConnectionState`.
 * The current connection state of the Node.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-node-nodeconnectionstate.html}
 */
export type NodeConnectionState = "CONNECTED" | "DISCONNECTED";
/**
 * Type definition for `AWS::MediaLive::Node.NodeInterfaceMapping`.
 * Node interface mapping.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-node-nodeinterfacemapping.html}
 */
export type NodeInterfaceMapping = {
  /**
   * The logical name for this interface.
   */
  LogicalInterfaceName?: string;
  /**
   * The network interface mode.
   */
  NetworkInterfaceMode?: "NAT" | "BRIDGE";
  /**
   * The physical interface name.
   */
  PhysicalInterfaceName?: string;
};
/**
 * Type definition for `AWS::MediaLive::Node.NodeRole`.
 * The role of the Node in the Cluster. ACTIVE means the Node is available for encoding. BACKUP means the Node is a redundant Node and might get used if an ACTIVE Node fails.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-node-noderole.html}
 */
export type NodeRole = "BACKUP" | "ACTIVE";
/**
 * Type definition for `AWS::MediaLive::Node.NodeState`.
 * The current state of the Node.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-node-nodestate.html}
 */
export type NodeState =
  | "CREATED"
  | "REGISTERING"
  | "READY_TO_ACTIVATE"
  | "REGISTRATION_FAILED"
  | "ACTIVATION_FAILED"
  | "ACTIVE"
  | "READY"
  | "IN_USE"
  | "DEREGISTERING"
  | "DRAINING"
  | "DEREGISTRATION_FAILED"
  | "DEREGISTERED";
/**
 * Type definition for `AWS::MediaLive::Node.SdiSourceMapping`.
 * SDI source mapping.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-node-sdisourcemapping.html}
 */
export type SdiSourceMapping = {
  /**
   * The card number.
   */
  CardNumber?: number;
  /**
   * The channel number.
   */
  ChannelNumber?: number;
  /**
   * The SDI source.
   */
  SdiSource?: string;
};
/**
 * Type definition for `AWS::MediaLive::Node.Tag`.
 * A key-value pair to associate with the resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-node-tag.html}
 */
export type Tag = {
  /**
   * The key name of the tag.
   */
  Key: string;
  /**
   * The value for the tag.
   */
  Value: string;
};
/**
 * Definition of AWS::MediaLive::Node Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-node.html}
 */
export class MediaLiveNode extends $Resource<
  "AWS::MediaLive::Node",
  MediaLiveNodeProperties,
  MediaLiveNodeAttributes
> {
  public static readonly Type = "AWS::MediaLive::Node";
  constructor(
    logicalId: string,
    properties: MediaLiveNodeProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, MediaLiveNode.Type, properties, options);
  }
}
