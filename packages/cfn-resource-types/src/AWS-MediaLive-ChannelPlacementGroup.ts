import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Definition of AWS::MediaLive::ChannelPlacementGroup Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-channelplacementgroup.html}
 */
export type MediaLiveChannelPlacementGroupProperties = {
  /**
   * The ID of the cluster the node is on.
   */
  ClusterId?: string;
  /**
   * The name of the channel placement group.
   */
  Name?: string;
  /**
   * List of nodes added to the channel placement group
   */
  Nodes?: string[];
  /**
   * A collection of key-value pairs.
   */
  Tags?: Tags[];
};
/**
 * Attribute type definition for `AWS::MediaLive::ChannelPlacementGroup`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-channelplacementgroup.html#aws-resource-medialive-channelplacementgroup-return-values}
 */
export type MediaLiveChannelPlacementGroupAttributes = {
  /**
   * The ARN of the channel placement group.
   */
  Arn: string;
  /**
   * List of channel IDs added to the channel placement group.
   */
  Channels: string[];
  /**
   * Unique internal identifier.
   */
  Id: string;
  /**
   * The current state of the ChannelPlacementGroupState
   */
  State: ChannelPlacementGroupState;
};
/**
 * Type definition for `AWS::MediaLive::ChannelPlacementGroup.ChannelPlacementGroupState`.
 * The current state of the ChannelPlacementGroupState
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channelplacementgroup-channelplacementgroupstate.html}
 */
export type ChannelPlacementGroupState =
  | "UNASSIGNED"
  | "ASSIGNING"
  | "ASSIGNED"
  | "DELETING"
  | "DELETED"
  | "UNASSIGNING";
/**
 * Type definition for `AWS::MediaLive::ChannelPlacementGroup.Tags`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channelplacementgroup-tags.html}
 */
export type Tags = {
  Key?: string;
  Value?: string;
};
/**
 * Definition of AWS::MediaLive::ChannelPlacementGroup Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-channelplacementgroup.html}
 */
export class MediaLiveChannelPlacementGroup extends $Resource<
  "AWS::MediaLive::ChannelPlacementGroup",
  MediaLiveChannelPlacementGroupProperties,
  MediaLiveChannelPlacementGroupAttributes
> {
  public static readonly Type = "AWS::MediaLive::ChannelPlacementGroup";
  constructor(
    logicalId: string,
    properties: MediaLiveChannelPlacementGroupProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, MediaLiveChannelPlacementGroup.Type, properties, options);
  }
}
