import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
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
   * Indicates which content-packaging format is used (MPEG-TS or fMP4). If multitrackInputConfiguration is specified and enabled is true, then containerFormat is required and must be set to FRAGMENTED_MP4. Otherwise, containerFormat may be set to TS or FRAGMENTED_MP4. Default: TS.
   */
  ContainerFormat?: "TS" | "FRAGMENTED_MP4";
  /**
   * Whether the channel allows insecure ingest.
   */
  InsecureIngest?: boolean;
  /**
   * Channel latency mode.
   */
  LatencyMode?: "NORMAL" | "LOW";
  MultitrackInputConfiguration?: MultitrackInputConfiguration;
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
  Preset?: "" | "HIGHER_BANDWIDTH_DELIVERY" | "CONSTRAINED_BANDWIDTH_DELIVERY";
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
 * Type definition for `AWS::IVS::Channel.MultitrackInputConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ivs-channel-multitrackinputconfiguration.html}
 */
export type MultitrackInputConfiguration = {
  /**
   * Indicates whether multitrack input is enabled. Can be set to true only if channel type is STANDARD. Setting enabled to true with any other channel type will cause an exception. If true, then policy, maximumResolution, and containerFormat are required, and containerFormat must be set to FRAGMENTED_MP4. Default: false.
   */
  Enabled?: boolean;
  /**
   * Maximum resolution for multitrack input. Required if enabled is true.
   */
  MaximumResolution?: "SD" | "HD" | "FULL_HD";
  /**
   * Indicates whether multitrack input is allowed or required. Required if enabled is true.
   */
  Policy?: "ALLOW" | "REQUIRE";
};
/**
 * Type definition for `AWS::IVS::Channel.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ivs-channel-tag.html}
 */
export type Tag = {
  /**
   * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @minLength `1`
   * @maxLength `128`
   */
  Key: string;
  /**
   * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @minLength `0`
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
