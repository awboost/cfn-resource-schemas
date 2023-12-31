import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource Type Definition for AWS::KinesisVideo::SignalingChannel
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisvideo-signalingchannel.html}
 */
export type KinesisVideoSignalingChannelProperties = {
  /**
   * The period of time a signaling channel retains undelivered messages before they are discarded.
   * @min `5`
   * @max `120`
   */
  MessageTtlSeconds?: number;
  /**
   * The name of the Kinesis Video Signaling Channel.
   * @minLength `1`
   * @maxLength `256`
   * @pattern `[a-zA-Z0-9_.-]+`
   */
  Name?: string;
  /**
   * An array of key-value pairs to apply to this resource.
   * @minLength `1`
   * @maxLength `50`
   */
  Tags?: Tag[];
  /**
   * The type of the Kinesis Video Signaling Channel to create. Currently, SINGLE_MASTER is the only supported channel type.
   */
  Type?: "SINGLE_MASTER";
};
/**
 * Attribute type definition for `AWS::KinesisVideo::SignalingChannel`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisvideo-signalingchannel.html#aws-resource-kinesisvideo-signalingchannel-return-values}
 */
export type KinesisVideoSignalingChannelAttributes = {
  /**
   * The Amazon Resource Name (ARN) of the Kinesis Video Signaling Channel.
   */
  Arn: string;
};
/**
 * Type definition for `AWS::KinesisVideo::SignalingChannel.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisvideo-signalingchannel-tag.html}
 */
export type Tag = {
  /**
   * The key name of the tag. Specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. The following characters can be used: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @minLength `1`
   * @maxLength `128`
   */
  Key: string;
  /**
   * The value for the tag. Specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:.  The following characters can be used: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @maxLength `256`
   */
  Value: string;
};
/**
 * Resource Type Definition for AWS::KinesisVideo::SignalingChannel
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisvideo-signalingchannel.html}
 */
export class KinesisVideoSignalingChannel extends $Resource<
  "AWS::KinesisVideo::SignalingChannel",
  KinesisVideoSignalingChannelProperties,
  KinesisVideoSignalingChannelAttributes
> {
  public static readonly Type = "AWS::KinesisVideo::SignalingChannel";
  public static readonly AttributeNames = ["Arn" as const];
  constructor(
    logicalId: string,
    properties: KinesisVideoSignalingChannelProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      KinesisVideoSignalingChannel.Type,
      properties,
      KinesisVideoSignalingChannel.AttributeNames,
      options,
    );
  }
}
