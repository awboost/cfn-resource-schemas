import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::IVS::Channel
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ivs-channel.html}
 */
export type IVSChannelProperties = {
  /**
   * Whether the channel is authorized.
   */
  Authorized?: boolean;
  /**
   * Whether the channel allows insecure ingest.
   */
  InsecureIngest?: boolean;
  /**
   * Channel latency mode.
   */
  LatencyMode?: "NORMAL" | "LOW";
  /**
   * Channel
   * @minLength `0`
   * @maxLength `128`
   * @pattern `^[a-zA-Z0-9-_]*$`
   */
  Name?: string;
  /**
   * Optional transcode preset for the channel. This is selectable only for ADVANCED_HD and ADVANCED_SD channel types. For those channel types, the default preset is HIGHER_BANDWIDTH_DELIVERY. For other channel types (BASIC and STANDARD), preset is the empty string ("").
   */
  Preset?: "HIGHER_BANDWIDTH_DELIVERY" | "CONSTRAINED_BANDWIDTH_DELIVERY";
  /**
   * Recording Configuration ARN. A value other than an empty string indicates that recording is enabled. Default: "" (recording is disabled).
   * @minLength `0`
   * @maxLength `128`
   * @pattern `^$|arn:aws:ivs:[a-z0-9-]+:[0-9]+:recording-configuration/[a-zA-Z0-9-]+$`
   */
  RecordingConfigurationArn?: string;
  /**
   * A list of key-value pairs that contain metadata for the asset model.
   * @maxLength `50`
   */
  Tags?: Tag[];
  /**
   * Channel type, which determines the allowable resolution and bitrate. If you exceed the allowable resolution or bitrate, the stream probably will disconnect immediately.
   */
  Type?: "STANDARD" | "BASIC" | "ADVANCED_SD" | "ADVANCED_HD";
};
/**
 * Attribute type definition for `AWS::IVS::Channel`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ivs-channel.html#aws-resource-ivs-channel-return-values}
 */
export type IVSChannelAttributes = {
  /**
   * Channel ARN is automatically generated on creation and assigned as the unique identifier.
   * @minLength `1`
   * @maxLength `128`
   * @pattern `^arn:aws:ivs:[a-z0-9-]+:[0-9]+:channel/[a-zA-Z0-9-]+$`
   */
  Arn: string;
  /**
   * Channel ingest endpoint, part of the definition of an ingest server, used when you set up streaming software.
   */
  IngestEndpoint: string;
  /**
   * Channel Playback URL.
   */
  PlaybackUrl: string;
};
/**
 * Type definition for `AWS::IVS::Channel.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ivs-channel-tag.html}
 */
export type Tag = {
  /**
   * @minLength `1`
   * @maxLength `128`
   */
  Key: string;
  /**
   * @minLength `1`
   * @maxLength `256`
   */
  Value: string;
};
/**
 * Resource Type definition for AWS::IVS::Channel
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ivs-channel.html}
 */
export class IVSChannel extends $Resource<
  "AWS::IVS::Channel",
  IVSChannelProperties,
  IVSChannelAttributes
> {
  public static readonly Type = "AWS::IVS::Channel";
  constructor(
    logicalId: string,
    properties: IVSChannelProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, IVSChannel.Type, properties, options);
  }
}
