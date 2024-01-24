import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Definition of AWS::MediaTailor::Channel Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediatailor-channel.html}
 */
export type MediaTailorChannelProperties = {
  ChannelName: string;
  /**
   * <p>Slate VOD source configuration.</p>
   */
  FillerSlate?: SlateSource;
  /**
   * <p>The log configuration for the channel.</p>
   */
  LogConfiguration?: LogConfigurationForChannel;
  /**
   * <p>The channel's output properties.</p>
   */
  Outputs: RequestOutputItem[];
  PlaybackMode: PlaybackMode;
  /**
   * The tags to assign to the channel.
   */
  Tags?: Tag[];
  Tier?: Tier;
  /**
   * <p>The configuration for time-shifted viewing.</p>
   */
  TimeShiftConfiguration?: TimeShiftConfiguration;
};
/**
 * Attribute type definition for `AWS::MediaTailor::Channel`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediatailor-channel.html#aws-resource-mediatailor-channel-return-values}
 */
export type MediaTailorChannelAttributes = {
  /**
   * <p>The ARN of the channel.</p>
   */
  Arn: string;
};
/**
 * Type definition for `AWS::MediaTailor::Channel.AdMarkupType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediatailor-channel-admarkuptype.html}
 */
export type AdMarkupType = "DATERANGE" | "SCTE35_ENHANCED";
/**
 * Type definition for `AWS::MediaTailor::Channel.DashPlaylistSettings`.
 * <p>Dash manifest configuration parameters.</p>
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediatailor-channel-dashplaylistsettings.html}
 */
export type DashPlaylistSettings = {
  /**
   * <p>The total duration (in seconds) of each manifest. Minimum value: <code>30</code> seconds. Maximum value: <code>3600</code> seconds.</p>
   */
  ManifestWindowSeconds?: number;
  /**
   * <p>Minimum amount of content (measured in seconds) that a player must keep available in the buffer. Minimum value: <code>2</code> seconds. Maximum value: <code>60</code> seconds.</p>
   */
  MinBufferTimeSeconds?: number;
  /**
   * <p>Minimum amount of time (in seconds) that the player should wait before requesting updates to the manifest. Minimum value: <code>2</code> seconds. Maximum value: <code>60</code> seconds.</p>
   */
  MinUpdatePeriodSeconds?: number;
  /**
   * <p>Amount of time (in seconds) that the player should be from the live point at the end of the manifest. Minimum value: <code>2</code> seconds. Maximum value: <code>60</code> seconds.</p>
   */
  SuggestedPresentationDelaySeconds?: number;
};
/**
 * Type definition for `AWS::MediaTailor::Channel.HlsPlaylistSettings`.
 * <p>HLS playlist configuration parameters.</p>
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediatailor-channel-hlsplaylistsettings.html}
 */
export type HlsPlaylistSettings = {
  /**
   * <p>Determines the type of SCTE 35 tags to use in ad markup. Specify <code>DATERANGE</code> to use <code>DATERANGE</code> tags (for live or VOD content). Specify <code>SCTE35_ENHANCED</code> to use <code>EXT-X-CUE-OUT</code> and <code>EXT-X-CUE-IN</code> tags (for VOD content only).</p>
   */
  AdMarkupType?: AdMarkupType[];
  /**
   * <p>The total duration (in seconds) of each manifest. Minimum value: <code>30</code> seconds. Maximum value: <code>3600</code> seconds.</p>
   */
  ManifestWindowSeconds?: number;
};
/**
 * Type definition for `AWS::MediaTailor::Channel.LogConfigurationForChannel`.
 * <p>The log configuration for the channel.</p>
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediatailor-channel-logconfigurationforchannel.html}
 */
export type LogConfigurationForChannel = {
  /**
   * <p>The log types.</p>
   */
  LogTypes?: LogType[];
};
/**
 * Type definition for `AWS::MediaTailor::Channel.LogType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediatailor-channel-logtype.html}
 */
export type LogType = "AS_RUN";
/**
 * Type definition for `AWS::MediaTailor::Channel.PlaybackMode`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediatailor-channel-playbackmode.html}
 */
export type PlaybackMode = "LOOP" | "LINEAR";
/**
 * Type definition for `AWS::MediaTailor::Channel.RequestOutputItem`.
 * <p>The output configuration for this channel.</p>
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediatailor-channel-requestoutputitem.html}
 */
export type RequestOutputItem = {
  /**
   * <p>Dash manifest configuration parameters.</p>
   */
  DashPlaylistSettings?: DashPlaylistSettings;
  /**
   * <p>HLS playlist configuration parameters.</p>
   */
  HlsPlaylistSettings?: HlsPlaylistSettings;
  /**
   * <p>The name of the manifest for the channel. The name appears in the <code>PlaybackUrl</code>.</p>
   */
  ManifestName: string;
  /**
   * <p>A string used to match which <code>HttpPackageConfiguration</code> is used for each <code>VodSource</code>.</p>
   */
  SourceGroup: string;
};
/**
 * Type definition for `AWS::MediaTailor::Channel.SlateSource`.
 * <p>Slate VOD source configuration.</p>
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediatailor-channel-slatesource.html}
 */
export type SlateSource = {
  /**
   * <p>The name of the source location where the slate VOD source is stored.</p>
   */
  SourceLocationName?: string;
  /**
   * <p>The slate VOD source name. The VOD source must already exist in a source location before it can be used for slate.</p>
   */
  VodSourceName?: string;
};
/**
 * Type definition for `AWS::MediaTailor::Channel.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediatailor-channel-tag.html}
 */
export type Tag = {
  Key: string;
  Value: string;
};
/**
 * Type definition for `AWS::MediaTailor::Channel.Tier`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediatailor-channel-tier.html}
 */
export type Tier = "BASIC" | "STANDARD";
/**
 * Type definition for `AWS::MediaTailor::Channel.TimeShiftConfiguration`.
 * <p>The configuration for time-shifted viewing.</p>
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediatailor-channel-timeshiftconfiguration.html}
 */
export type TimeShiftConfiguration = {
  /**
   * <p>The maximum time delay for time-shifted viewing. The minimum allowed maximum time delay is 0 seconds, and the maximum allowed maximum time delay is 21600 seconds (6 hours).</p>
   */
  MaxTimeDelaySeconds: number;
};
/**
 * Definition of AWS::MediaTailor::Channel Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediatailor-channel.html}
 */
export class MediaTailorChannel extends $Resource<
  "AWS::MediaTailor::Channel",
  MediaTailorChannelProperties,
  MediaTailorChannelAttributes
> {
  public static readonly Type = "AWS::MediaTailor::Channel";
  constructor(
    logicalId: string,
    properties: MediaTailorChannelProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, MediaTailorChannel.Type, properties, options);
  }
}
