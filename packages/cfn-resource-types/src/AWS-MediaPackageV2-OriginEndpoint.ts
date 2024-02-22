import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::MediaPackageV2::OriginEndpoint`.
 * <p>Represents an origin endpoint that is associated with a channel, offering a dynamically repackaged version of its content through various streaming media protocols. The content can be efficiently disseminated to end-users via a Content Delivery Network (CDN), like Amazon CloudFront.</p>
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackagev2-originendpoint.html}
 */
export type MediaPackageV2OriginEndpointProperties = {
  /**
   * @minLength `1`
   * @maxLength `256`
   * @pattern `^[a-zA-Z0-9_-]+$`
   */
  ChannelGroupName: string;
  /**
   * @minLength `1`
   * @maxLength `256`
   * @pattern `^[a-zA-Z0-9_-]+$`
   */
  ChannelName: string;
  ContainerType?: ContainerType;
  /**
   * <p>Enter any descriptive text that helps you to identify the origin endpoint.</p>
   * @minLength `0`
   * @maxLength `1024`
   */
  Description?: string;
  /**
   * <p>An HTTP live streaming (HLS) manifest configuration.</p>
   */
  HlsManifests?: HlsManifestConfiguration[];
  /**
   * <p>A low-latency HLS manifest configuration.</p>
   */
  LowLatencyHlsManifests?: LowLatencyHlsManifestConfiguration[];
  /**
   * @minLength `1`
   * @maxLength `256`
   * @pattern `^[a-zA-Z0-9_-]+$`
   */
  OriginEndpointName: string;
  /**
   * <p>The segment configuration, including the segment name, duration, and other configuration values.</p>
   */
  Segment?: Segment;
  /**
   * <p>The size of the window (in seconds) to create a window of the live stream that's available for on-demand viewing. Viewers can start-over or catch-up on content that falls within the window. The maximum startover window is 1,209,600 seconds (14 days).</p>
   * @min `60`
   * @max `1209600`
   */
  StartoverWindowSeconds?: number;
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::MediaPackageV2::OriginEndpoint`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackagev2-originendpoint.html#aws-resource-mediapackagev2-originendpoint-return-values}
 */
export type MediaPackageV2OriginEndpointAttributes = {
  /**
   * <p>The Amazon Resource Name (ARN) associated with the resource.</p>
   */
  Arn: string;
  /**
   * <p>The date and time the origin endpoint was created.</p>
   */
  CreatedAt: string;
  /**
   * <p>An HTTP live streaming (HLS) manifest configuration.</p>
   */
  HlsManifests: {
    /**
     * <p>The egress domain URL for stream delivery from MediaPackage.</p>
     */
    Url: string;
  }[];
  /**
   * <p>A low-latency HLS manifest configuration.</p>
   */
  LowLatencyHlsManifests: {
    /**
     * <p>The egress domain URL for stream delivery from MediaPackage.</p>
     */
    Url: string;
  }[];
  /**
   * <p>The date and time the origin endpoint was modified.</p>
   */
  ModifiedAt: string;
};
/**
 * Type definition for `AWS::MediaPackageV2::OriginEndpoint.AdMarkerHls`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediapackagev2-originendpoint-admarkerhls.html}
 */
export type AdMarkerHls = "DATERANGE";
/**
 * Type definition for `AWS::MediaPackageV2::OriginEndpoint.CmafEncryptionMethod`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediapackagev2-originendpoint-cmafencryptionmethod.html}
 */
export type CmafEncryptionMethod = "CENC" | "CBCS";
/**
 * Type definition for `AWS::MediaPackageV2::OriginEndpoint.ContainerType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediapackagev2-originendpoint-containertype.html}
 */
export type ContainerType = "TS" | "CMAF";
/**
 * Type definition for `AWS::MediaPackageV2::OriginEndpoint.DrmSystem`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediapackagev2-originendpoint-drmsystem.html}
 */
export type DrmSystem =
  | "CLEAR_KEY_AES_128"
  | "FAIRPLAY"
  | "PLAYREADY"
  | "WIDEVINE";
/**
 * Type definition for `AWS::MediaPackageV2::OriginEndpoint.Encryption`.
 * <p>The parameters for encrypting content.</p>
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediapackagev2-originendpoint-encryption.html}
 */
export type Encryption = {
  /**
   * <p>A 128-bit, 16-byte hex value represented by a 32-character string, used in conjunction with the key for encrypting content. If you don't specify a value, then MediaPackage creates the constant initialization vector (IV).</p>
   * @minLength `32`
   * @maxLength `32`
   * @pattern `^[0-9a-fA-F]+$`
   */
  ConstantInitializationVector?: string;
  /**
   * <p>The encryption type.</p>
   */
  EncryptionMethod: EncryptionMethod;
  /**
     * <p>The frequency (in seconds) of key changes for live workflows, in which content is streamed real time. The service retrieves content keys before the live content begins streaming, and then retrieves them as needed over the lifetime of the workflow. By default, key rotation is set to 300 seconds (5 minutes), the minimum rotation interval, which is equivalent to setting it to 300. If you don't enter an interval, content keys aren't rotated.</p>
             <p>The following example setting causes the service to rotate keys every thirty minutes: <code>1800</code>
             </p>
     * @min `300`
     * @max `31536000`
     */
  KeyRotationIntervalSeconds?: number;
  /**
   * <p>The parameters for the SPEKE key provider.</p>
   */
  SpekeKeyProvider: SpekeKeyProvider;
};
/**
 * Type definition for `AWS::MediaPackageV2::OriginEndpoint.EncryptionContractConfiguration`.
 * <p>Configure one or more content encryption keys for your endpoints that use SPEKE Version 2.0. The encryption contract defines which content keys are used to encrypt the audio and video tracks in your stream. To configure the encryption contract, specify which audio and video encryption presets to use.</p>
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediapackagev2-originendpoint-encryptioncontractconfiguration.html}
 */
export type EncryptionContractConfiguration = {
  PresetSpeke20Audio: PresetSpeke20Audio;
  PresetSpeke20Video: PresetSpeke20Video;
};
/**
 * Type definition for `AWS::MediaPackageV2::OriginEndpoint.EncryptionMethod`.
 * <p>The encryption type.</p>
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediapackagev2-originendpoint-encryptionmethod.html}
 */
export type EncryptionMethod = {
  CmafEncryptionMethod?: CmafEncryptionMethod;
  TsEncryptionMethod?: TsEncryptionMethod;
};
/**
 * Type definition for `AWS::MediaPackageV2::OriginEndpoint.FilterConfiguration`.
 * <p>Filter configuration includes settings for manifest filtering, start and end times, and time delay that apply to all of your egress requests for this manifest. </p>
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediapackagev2-originendpoint-filterconfiguration.html}
 */
export type FilterConfiguration = {
  /**
   * <p>Optionally specify the end time for all of your manifest egress requests. When you include end time, note that you cannot use end time query parameters for this manifest's endpoint URL.</p>
   */
  End?: string;
  /**
   * <p>Optionally specify one or more manifest filters for all of your manifest egress requests. When you include a manifest filter, note that you cannot use an identical manifest filter query parameter for this manifest's endpoint URL.</p>
   * @minLength `1`
   * @maxLength `1024`
   */
  ManifestFilter?: string;
  /**
   * <p>Optionally specify the start time for all of your manifest egress requests. When you include start time, note that you cannot use start time query parameters for this manifest's endpoint URL.</p>
   */
  Start?: string;
  /**
   * <p>Optionally specify the time delay for all of your manifest egress requests. Enter a value that is smaller than your endpoint's startover window. When you include time delay, note that you cannot use time delay query parameters for this manifest's endpoint URL.</p>
   * @min `0`
   * @max `1209600`
   */
  TimeDelaySeconds?: number;
};
/**
 * Type definition for `AWS::MediaPackageV2::OriginEndpoint.HlsManifestConfiguration`.
 * <p>Retrieve the HTTP live streaming (HLS) manifest configuration.</p>
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediapackagev2-originendpoint-hlsmanifestconfiguration.html}
 */
export type HlsManifestConfiguration = {
  /**
   * <p>A short string that's appended to the endpoint URL. The child manifest name creates a unique path to this endpoint. If you don't enter a value, MediaPackage uses the default child manifest name, index_1. The manifestName on the HLSManifest object overrides the manifestName you provided on the originEndpoint object.</p>
   * @minLength `1`
   * @maxLength `256`
   * @pattern `^[a-zA-Z0-9_-]+$`
   */
  ChildManifestName?: string;
  /**
   * <p>Filter configuration includes settings for manifest filtering, start and end times, and time delay that apply to all of your egress requests for this manifest. </p>
   */
  FilterConfiguration?: FilterConfiguration;
  /**
   * <p>A short short string that's appended to the endpoint URL. The manifest name creates a unique path to this endpoint. If you don't enter a value, MediaPackage uses the default manifest name, index. MediaPackage automatically inserts the format extension, such as .m3u8. You can't use the same manifest name if you use HLS manifest and low-latency HLS manifest. The manifestName on the HLSManifest object overrides the manifestName you provided on the originEndpoint object.</p>
   * @minLength `1`
   * @maxLength `256`
   * @pattern `^[a-zA-Z0-9_-]+$`
   */
  ManifestName: string;
  /**
   * <p>The total duration (in seconds) of the manifest's content.</p>
   */
  ManifestWindowSeconds?: number;
  /**
     * <p>Inserts EXT-X-PROGRAM-DATE-TIME tags in the output manifest at the interval that you specify. If you don't enter an interval,
             EXT-X-PROGRAM-DATE-TIME tags aren't included in the manifest.
             The tags sync the stream to the wall clock so that viewers can seek to a specific time in the playback timeline on the player.
             ID3Timed metadata messages generate every 5 seconds whenever the content is ingested.</p>
             <p>Irrespective of this parameter, if any ID3Timed metadata is in the HLS input, it is passed through to the HLS output.</p>
     */
  ProgramDateTimeIntervalSeconds?: number;
  /**
   * <p>The SCTE configuration.</p>
   */
  ScteHls?: ScteHls;
};
/**
 * Type definition for `AWS::MediaPackageV2::OriginEndpoint.LowLatencyHlsManifestConfiguration`.
 * <p>Retrieve the low-latency HTTP live streaming (HLS) manifest configuration.</p>
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediapackagev2-originendpoint-lowlatencyhlsmanifestconfiguration.html}
 */
export type LowLatencyHlsManifestConfiguration = {
  /**
   * <p>A short string that's appended to the endpoint URL. The child manifest name creates a unique path to this endpoint. If you don't enter a value, MediaPackage uses the default child manifest name, index_1. The manifestName on the HLSManifest object overrides the manifestName you provided on the originEndpoint object.</p>
   * @minLength `1`
   * @maxLength `256`
   * @pattern `^[a-zA-Z0-9_-]+$`
   */
  ChildManifestName?: string;
  /**
   * <p>Filter configuration includes settings for manifest filtering, start and end times, and time delay that apply to all of your egress requests for this manifest. </p>
   */
  FilterConfiguration?: FilterConfiguration;
  /**
   * <p>A short short string that's appended to the endpoint URL. The manifest name creates a unique path to this endpoint. If you don't enter a value, MediaPackage uses the default manifest name, index. MediaPackage automatically inserts the format extension, such as .m3u8. You can't use the same manifest name if you use HLS manifest and low-latency HLS manifest. The manifestName on the HLSManifest object overrides the manifestName you provided on the originEndpoint object.</p>
   * @minLength `1`
   * @maxLength `256`
   * @pattern `^[a-zA-Z0-9_-]+$`
   */
  ManifestName: string;
  /**
   * <p>The total duration (in seconds) of the manifest's content.</p>
   */
  ManifestWindowSeconds?: number;
  /**
     * <p>Inserts EXT-X-PROGRAM-DATE-TIME tags in the output manifest at the interval that you specify. If you don't enter an interval,
             EXT-X-PROGRAM-DATE-TIME tags aren't included in the manifest.
             The tags sync the stream to the wall clock so that viewers can seek to a specific time in the playback timeline on the player.
             ID3Timed metadata messages generate every 5 seconds whenever the content is ingested.</p>
             <p>Irrespective of this parameter, if any ID3Timed metadata is in the HLS input, it is passed through to the HLS output.</p>
     */
  ProgramDateTimeIntervalSeconds?: number;
  /**
   * <p>The SCTE configuration.</p>
   */
  ScteHls?: ScteHls;
};
/**
 * Type definition for `AWS::MediaPackageV2::OriginEndpoint.PresetSpeke20Audio`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediapackagev2-originendpoint-presetspeke20audio.html}
 */
export type PresetSpeke20Audio =
  | "PRESET_AUDIO_1"
  | "PRESET_AUDIO_2"
  | "PRESET_AUDIO_3"
  | "SHARED"
  | "UNENCRYPTED";
/**
 * Type definition for `AWS::MediaPackageV2::OriginEndpoint.PresetSpeke20Video`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediapackagev2-originendpoint-presetspeke20video.html}
 */
export type PresetSpeke20Video =
  | "PRESET_VIDEO_1"
  | "PRESET_VIDEO_2"
  | "PRESET_VIDEO_3"
  | "PRESET_VIDEO_4"
  | "PRESET_VIDEO_5"
  | "PRESET_VIDEO_6"
  | "PRESET_VIDEO_7"
  | "PRESET_VIDEO_8"
  | "SHARED"
  | "UNENCRYPTED";
/**
 * Type definition for `AWS::MediaPackageV2::OriginEndpoint.Scte`.
 * <p>The SCTE configuration.</p>
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediapackagev2-originendpoint-scte.html}
 */
export type Scte = {
  /**
   * <p>The SCTE-35 message types that you want to be treated as ad markers in the output.</p>
   * @minLength `0`
   * @maxLength `100`
   */
  ScteFilter?: ScteFilter[];
};
/**
 * Type definition for `AWS::MediaPackageV2::OriginEndpoint.ScteFilter`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediapackagev2-originendpoint-sctefilter.html}
 */
export type ScteFilter =
  | "SPLICE_INSERT"
  | "BREAK"
  | "PROVIDER_ADVERTISEMENT"
  | "DISTRIBUTOR_ADVERTISEMENT"
  | "PROVIDER_PLACEMENT_OPPORTUNITY"
  | "DISTRIBUTOR_PLACEMENT_OPPORTUNITY"
  | "PROVIDER_OVERLAY_PLACEMENT_OPPORTUNITY"
  | "DISTRIBUTOR_OVERLAY_PLACEMENT_OPPORTUNITY"
  | "PROGRAM";
/**
 * Type definition for `AWS::MediaPackageV2::OriginEndpoint.ScteHls`.
 * <p>The SCTE configuration.</p>
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediapackagev2-originendpoint-sctehls.html}
 */
export type ScteHls = {
  AdMarkerHls?: AdMarkerHls;
};
/**
 * Type definition for `AWS::MediaPackageV2::OriginEndpoint.Segment`.
 * <p>The segment configuration, including the segment name, duration, and other configuration values.</p>
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediapackagev2-originendpoint-segment.html}
 */
export type Segment = {
  /**
   * <p>The parameters for encrypting content.</p>
   */
  Encryption?: Encryption;
  /**
   * <p>When selected, the stream set includes an additional I-frame only stream, along with the other tracks. If false, this extra stream is not included. MediaPackage generates an I-frame only stream from the first rendition in the manifest. The service inserts EXT-I-FRAMES-ONLY tags in the output manifest, and then generates and includes an I-frames only playlist in the stream. This playlist permits player functionality like fast forward and rewind.</p>
   */
  IncludeIframeOnlyStreams?: boolean;
  /**
   * <p>The SCTE configuration.</p>
   */
  Scte?: Scte;
  /**
   * <p>The duration (in seconds) of each segment. Enter a value equal to, or a multiple of, the input segment duration. If the value that you enter is different from the input segment duration, MediaPackage rounds segments to the nearest multiple of the input segment duration.</p>
   * @min `1`
   * @max `30`
   */
  SegmentDurationSeconds?: number;
  /**
   * <p>The name that describes the segment. The name is the base name of the segment used in all content manifests inside of the endpoint. You can't use spaces in the name.</p>
   * @minLength `1`
   * @maxLength `256`
   * @pattern `^[a-zA-Z0-9_-]+$`
   */
  SegmentName?: string;
  /**
   * <p>By default, MediaPackage excludes all digital video broadcasting (DVB) subtitles from the output. When selected, MediaPackage passes through DVB subtitles into the output.</p>
   */
  TsIncludeDvbSubtitles?: boolean;
  /**
   * <p>When selected, MediaPackage bundles all audio tracks in a rendition group. All other tracks in the stream can be used with any audio rendition from the group.</p>
   */
  TsUseAudioRenditionGroup?: boolean;
};
/**
 * Type definition for `AWS::MediaPackageV2::OriginEndpoint.SpekeKeyProvider`.
 * <p>The parameters for the SPEKE key provider.</p>
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediapackagev2-originendpoint-spekekeyprovider.html}
 */
export type SpekeKeyProvider = {
  /**
   * <p>The DRM solution provider you're using to protect your content during distribution.</p>
   * @minLength `1`
   * @maxLength `4`
   */
  DrmSystems: DrmSystem[];
  /**
   * <p>Configure one or more content encryption keys for your endpoints that use SPEKE Version 2.0. The encryption contract defines which content keys are used to encrypt the audio and video tracks in your stream. To configure the encryption contract, specify which audio and video encryption presets to use.</p>
   */
  EncryptionContractConfiguration: EncryptionContractConfiguration;
  /**
     * <p>The unique identifier for the content. The service sends this to the key server to identify the current endpoint. How unique you make this depends on how fine-grained you want access controls to be. The service does not permit you to use the same ID for two simultaneous encryption processes. The resource ID is also known as the content ID.</p>
             <p>The following example shows a resource ID: <code>MovieNight20171126093045</code>
             </p>
     * @minLength `1`
     * @maxLength `256`
     * @pattern `^[0-9a-zA-Z_-]+$`
     */
  ResourceId: string;
  /**
     * <p>The ARN for the IAM role granted by the key provider that provides access to the key provider API. This role must have a trust policy that allows MediaPackage to assume the role, and it must have a sufficient permissions policy to allow access to the specific key retrieval URL. Get this from your DRM solution provider.</p>
             <p>Valid format: <code>arn:aws:iam::{accountID}:role/{name}</code>. The following example shows a role ARN: <code>arn:aws:iam::444455556666:role/SpekeAccess</code>
             </p>
     * @minLength `1`
     * @maxLength `2048`
     */
  RoleArn: string;
  /**
     * <p>The URL of the API Gateway proxy that you set up to talk to your key server. The API Gateway proxy must reside in the same AWS Region as MediaPackage and must start with https://.</p>
             <p>The following example shows a URL: <code>https://1wm2dx1f33.execute-api.us-west-2.amazonaws.com/SpekeSample/copyProtection</code>
             </p>
     * @minLength `1`
     * @maxLength `1024`
     */
  Url: string;
};
/**
 * Type definition for `AWS::MediaPackageV2::OriginEndpoint.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediapackagev2-originendpoint-tag.html}
 */
export type Tag = {
  Key?: string;
  Value?: string;
};
/**
 * Type definition for `AWS::MediaPackageV2::OriginEndpoint.TsEncryptionMethod`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediapackagev2-originendpoint-tsencryptionmethod.html}
 */
export type TsEncryptionMethod = "AES_128" | "SAMPLE_AES";
/**
 * Resource type definition for `AWS::MediaPackageV2::OriginEndpoint`.
 * <p>Represents an origin endpoint that is associated with a channel, offering a dynamically repackaged version of its content through various streaming media protocols. The content can be efficiently disseminated to end-users via a Content Delivery Network (CDN), like Amazon CloudFront.</p>
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackagev2-originendpoint.html}
 */
export class MediaPackageV2OriginEndpoint extends $Resource<
  "AWS::MediaPackageV2::OriginEndpoint",
  MediaPackageV2OriginEndpointProperties,
  MediaPackageV2OriginEndpointAttributes
> {
  public static readonly Type = "AWS::MediaPackageV2::OriginEndpoint";
  constructor(
    logicalId: string,
    properties: MediaPackageV2OriginEndpointProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, MediaPackageV2OriginEndpoint.Type, properties, options);
  }
}
