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
  ContainerType: ContainerType;
  /**
   * <p>A DASH manifest configuration.</p>
   */
  DashManifests?: DashManifestConfiguration[];
  /**
   * <p>Enter any descriptive text that helps you to identify the origin endpoint.</p>
   * @minLength `0`
   * @maxLength `1024`
   */
  Description?: string;
  /**
   * <p>The failover settings for the endpoint.</p>
   */
  ForceEndpointErrorConfiguration?: ForceEndpointErrorConfiguration;
  /**
   * <p>An HTTP live streaming (HLS) manifest configuration.</p>
   */
  HlsManifests?: HlsManifestConfiguration[];
  /**
   * <p>A low-latency HLS manifest configuration.</p>
   */
  LowLatencyHlsManifests?: LowLatencyHlsManifestConfiguration[];
  /**
   * <p>The Microsoft Smooth Streaming (MSS) manifest configurations associated with this origin endpoint.</p>
   */
  MssManifests?: MssManifestConfiguration[];
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
  DashManifestUrls: string[];
  HlsManifestUrls: string[];
  /**
   * <p>An HTTP live streaming (HLS) manifest configuration.</p>
   */
  HlsManifests: {
    /**
     * <p>The egress domain URL for stream delivery from MediaPackage.</p>
     */
    Url: string;
  }[];
  LowLatencyHlsManifestUrls: string[];
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
  MssManifestUrls: string[];
};
/**
 * Type definition for `AWS::MediaPackageV2::OriginEndpoint.AdMarkerDash`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediapackagev2-originendpoint-admarkerdash.html}
 */
export type AdMarkerDash = "BINARY" | "XML";
/**
 * Type definition for `AWS::MediaPackageV2::OriginEndpoint.AdMarkerHls`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediapackagev2-originendpoint-admarkerhls.html}
 */
export type AdMarkerHls = "DATERANGE" | "SCTE35_ENHANCED";
/**
 * Type definition for `AWS::MediaPackageV2::OriginEndpoint.CmafEncryptionMethod`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediapackagev2-originendpoint-cmafencryptionmethod.html}
 */
export type CmafEncryptionMethod = "CENC" | "CBCS";
/**
 * Type definition for `AWS::MediaPackageV2::OriginEndpoint.ContainerType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediapackagev2-originendpoint-containertype.html}
 */
export type ContainerType = "TS" | "CMAF" | "ISM";
/**
 * Type definition for `AWS::MediaPackageV2::OriginEndpoint.DashBaseUrl`.
 * <p>The base URLs to use for retrieving segments. You can specify multiple locations and indicate the priority and weight for when each should be used, for use in mutli-CDN workflows.</p>
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediapackagev2-originendpoint-dashbaseurl.html}
 */
export type DashBaseUrl = {
  /**
   * <p>For use with DVB-DASH profiles only. The priority of this location for servings segments. The lower the number, the higher the priority.</p>
   * @min `1`
   * @max `15000`
   */
  DvbPriority?: number;
  /**
   * <p>For use with DVB-DASH profiles only. The weighting for source locations that have the same priority. </p>
   * @min `1`
   * @max `15000`
   */
  DvbWeight?: number;
  /**
   * <p>The name of the source location.</p>
   * @minLength `1`
   * @maxLength `2048`
   */
  ServiceLocation?: string;
  /**
   * <p>A source location for segments.</p>
   * @minLength `1`
   * @maxLength `2048`
   */
  Url: string;
};
/**
 * Type definition for `AWS::MediaPackageV2::OriginEndpoint.DashCompactness`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediapackagev2-originendpoint-dashcompactness.html}
 */
export type DashCompactness = "STANDARD" | "NONE";
/**
 * Type definition for `AWS::MediaPackageV2::OriginEndpoint.DashDrmSignaling`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediapackagev2-originendpoint-dashdrmsignaling.html}
 */
export type DashDrmSignaling = "INDIVIDUAL" | "REFERENCED";
/**
 * Type definition for `AWS::MediaPackageV2::OriginEndpoint.DashDvbFontDownload`.
 * <p>For use with DVB-DASH profiles only. The settings for font downloads that you want Elemental MediaPackage to pass through to the manifest.</p>
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediapackagev2-originendpoint-dashdvbfontdownload.html}
 */
export type DashDvbFontDownload = {
  /**
   * <p>The <code>fontFamily</code> name for subtitles, as described in <a href="https://tech.ebu.ch/publications/tech3380">EBU-TT-D Subtitling Distribution Format</a>. </p>
   * @minLength `1`
   * @maxLength `256`
   */
  FontFamily?: string;
  /**
   * <p>The <code>mimeType</code> of the resource that's at the font download URL.</p> <p>For information about font MIME types, see the <a href="https://dvb.org/wp-content/uploads/2021/06/A168r4_MPEG-DASH-Profile-for-Transport-of-ISO-BMFF-Based-DVB-Services_Draft-ts_103-285-v140_November_2021.pdf">MPEG-DASH Profile for Transport of ISO BMFF Based DVB Services over IP Based Networks</a> document. </p>
   * @minLength `1`
   * @maxLength `256`
   * @pattern `^[a-zA-Z0-9][a-zA-Z0-9_/-]*[a-zA-Z0-9]$`
   */
  MimeType?: string;
  /**
   * <p>The URL for downloading fonts for subtitles.</p>
   * @minLength `1`
   * @maxLength `2048`
   */
  Url?: string;
};
/**
 * Type definition for `AWS::MediaPackageV2::OriginEndpoint.DashDvbMetricsReporting`.
 * <p>For use with DVB-DASH profiles only. The settings for error reporting from the playback device that you want Elemental MediaPackage to pass through to the manifest.</p>
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediapackagev2-originendpoint-dashdvbmetricsreporting.html}
 */
export type DashDvbMetricsReporting = {
  /**
   * <p>The number of playback devices per 1000 that will send error reports to the reporting URL. This represents the probability that a playback device will be a reporting player for this session.</p>
   * @min `1`
   * @max `1000`
   */
  Probability?: number;
  /**
   * <p>The URL where playback devices send error reports.</p>
   * @minLength `1`
   * @maxLength `2048`
   */
  ReportingUrl: string;
};
/**
 * Type definition for `AWS::MediaPackageV2::OriginEndpoint.DashDvbSettings`.
 * <p>For endpoints that use the DVB-DASH profile only. The font download and error reporting information that you want MediaPackage to pass through to the manifest.</p>
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediapackagev2-originendpoint-dashdvbsettings.html}
 */
export type DashDvbSettings = {
  /**
   * <p>Playback device error reporting settings.</p>
   * @minLength `0`
   * @maxLength `20`
   */
  ErrorMetrics?: DashDvbMetricsReporting[];
  /**
   * <p>For use with DVB-DASH profiles only. The settings for font downloads that you want Elemental MediaPackage to pass through to the manifest.</p>
   */
  FontDownload?: DashDvbFontDownload;
};
/**
 * Type definition for `AWS::MediaPackageV2::OriginEndpoint.DashManifestConfiguration`.
 * <p>Retrieve the DASH manifest configuration.</p>
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediapackagev2-originendpoint-dashmanifestconfiguration.html}
 */
export type DashManifestConfiguration = {
  /**
   * <p>The base URL to use for retrieving segments.</p>
   * @minLength `0`
   * @maxLength `20`
   */
  BaseUrls?: DashBaseUrl[];
  Compactness?: DashCompactness;
  DrmSignaling?: DashDrmSignaling;
  /**
   * <p>For endpoints that use the DVB-DASH profile only. The font download and error reporting information that you want MediaPackage to pass through to the manifest.</p>
   */
  DvbSettings?: DashDvbSettings;
  /**
   * <p>Filter configuration includes settings for manifest filtering, start and end times, and time delay that apply to all of your egress requests for this manifest. </p>
   */
  FilterConfiguration?: FilterConfiguration;
  /**
   * <p>A short string that's appended to the endpoint URL. The manifest name creates a unique path to this endpoint. If you don't enter a value, MediaPackage uses the default manifest name, index. </p>
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
   * <p>Minimum amount of content (in seconds) that a player must keep available in the buffer.</p>
   */
  MinBufferTimeSeconds?: number;
  /**
   * <p>Minimum amount of time (in seconds) that the player should wait before requesting updates to the manifest.</p>
   */
  MinUpdatePeriodSeconds?: number;
  /**
   * <p>A list of triggers that controls when AWS Elemental MediaPackage separates the MPEG-DASH manifest into multiple periods. Leave this value empty to indicate that the manifest is contained all in one period. For more information about periods in the DASH manifest, see <a href="https://docs.aws.amazon.com/mediapackage/latest/userguide/multi-period.html">Multi-period DASH in AWS Elemental MediaPackage</a>.</p>
   * @minLength `0`
   * @maxLength `100`
   */
  PeriodTriggers?: DashPeriodTrigger[];
  /**
   * <p>The profile that the output is compliant with.</p>
   * @minLength `0`
   * @maxLength `5`
   */
  Profiles?: DashProfile[];
  /**
   * <p>Details about the content that you want MediaPackage to pass through in the manifest to the playback device.</p>
   */
  ProgramInformation?: DashProgramInformation;
  /**
   * <p>The SCTE configuration.</p>
   */
  ScteDash?: ScteDash;
  SegmentTemplateFormat?: DashSegmentTemplateFormat;
  /**
   * <p>The configuration for DASH subtitles.</p>
   */
  SubtitleConfiguration?: DashSubtitleConfiguration;
  /**
   * <p>The amount of time (in seconds) that the player should be from the end of the manifest.</p>
   */
  SuggestedPresentationDelaySeconds?: number;
  /**
   * <p>Determines the type of UTC timing included in the DASH Media Presentation Description (MPD).</p>
   */
  UtcTiming?: DashUtcTiming;
};
/**
 * Type definition for `AWS::MediaPackageV2::OriginEndpoint.DashPeriodTrigger`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediapackagev2-originendpoint-dashperiodtrigger.html}
 */
export type DashPeriodTrigger =
  | "AVAILS"
  | "DRM_KEY_ROTATION"
  | "SOURCE_CHANGES"
  | "SOURCE_DISRUPTIONS"
  | "NONE";
/**
 * Type definition for `AWS::MediaPackageV2::OriginEndpoint.DashProfile`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediapackagev2-originendpoint-dashprofile.html}
 */
export type DashProfile = "DVB_DASH";
/**
 * Type definition for `AWS::MediaPackageV2::OriginEndpoint.DashProgramInformation`.
 * <p>Details about the content that you want MediaPackage to pass through in the manifest to the playback device.</p>
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediapackagev2-originendpoint-dashprograminformation.html}
 */
export type DashProgramInformation = {
  /**
   * <p>A copyright statement about the content.</p>
   * @minLength `1`
   * @maxLength `2048`
   */
  Copyright?: string;
  /**
   * <p>The language code for this manifest.</p>
   * @minLength `2`
   * @maxLength `5`
   * @pattern `^[a-zA-Z0-9][a-zA-Z0-9_-]*[a-zA-Z0-9]$`
   */
  LanguageCode?: string;
  /**
   * <p>An absolute URL that contains more information about this content.</p>
   * @minLength `1`
   * @maxLength `2048`
   */
  MoreInformationUrl?: string;
  /**
   * <p>Information about the content provider.</p>
   * @minLength `1`
   * @maxLength `2048`
   */
  Source?: string;
  /**
   * <p>The title for the manifest.</p>
   * @minLength `1`
   * @maxLength `2048`
   */
  Title?: string;
};
/**
 * Type definition for `AWS::MediaPackageV2::OriginEndpoint.DashSegmentTemplateFormat`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediapackagev2-originendpoint-dashsegmenttemplateformat.html}
 */
export type DashSegmentTemplateFormat = "NUMBER_WITH_TIMELINE";
/**
 * Type definition for `AWS::MediaPackageV2::OriginEndpoint.DashSubtitleConfiguration`.
 * <p>The configuration for DASH subtitles.</p>
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediapackagev2-originendpoint-dashsubtitleconfiguration.html}
 */
export type DashSubtitleConfiguration = {
  /**
   * <p>The settings for TTML subtitles.</p>
   */
  TtmlConfiguration?: DashTtmlConfiguration;
};
/**
 * Type definition for `AWS::MediaPackageV2::OriginEndpoint.DashTtmlConfiguration`.
 * <p>The settings for TTML subtitles.</p>
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediapackagev2-originendpoint-dashttmlconfiguration.html}
 */
export type DashTtmlConfiguration = {
  TtmlProfile: DashTtmlProfile;
};
/**
 * Type definition for `AWS::MediaPackageV2::OriginEndpoint.DashTtmlProfile`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediapackagev2-originendpoint-dashttmlprofile.html}
 */
export type DashTtmlProfile = "IMSC_1" | "EBU_TT_D_101";
/**
 * Type definition for `AWS::MediaPackageV2::OriginEndpoint.DashUtcTiming`.
 * <p>Determines the type of UTC timing included in the DASH Media Presentation Description (MPD).</p>
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediapackagev2-originendpoint-dashutctiming.html}
 */
export type DashUtcTiming = {
  TimingMode?: DashUtcTimingMode;
  /**
   * <p>The the method that the player uses to synchronize to coordinated universal time (UTC) wall clock time.</p>
   * @minLength `1`
   * @maxLength `1024`
   */
  TimingSource?: string;
};
/**
 * Type definition for `AWS::MediaPackageV2::OriginEndpoint.DashUtcTimingMode`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediapackagev2-originendpoint-dashutctimingmode.html}
 */
export type DashUtcTimingMode =
  | "HTTP_HEAD"
  | "HTTP_ISO"
  | "HTTP_XSDATE"
  | "UTC_DIRECT";
/**
 * Type definition for `AWS::MediaPackageV2::OriginEndpoint.DrmSystem`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediapackagev2-originendpoint-drmsystem.html}
 */
export type DrmSystem =
  | "CLEAR_KEY_AES_128"
  | "FAIRPLAY"
  | "PLAYREADY"
  | "WIDEVINE"
  | "IRDETO";
/**
 * Type definition for `AWS::MediaPackageV2::OriginEndpoint.Encryption`.
 * <p>The parameters for encrypting content.</p>
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediapackagev2-originendpoint-encryption.html}
 */
export type Encryption = {
  /**
   * <p>Excludes SEIG and SGPD boxes from segment metadata in CMAF containers.</p> <p>When set to <code>true</code>, MediaPackage omits these DRM metadata boxes from CMAF segments, which can improve compatibility with certain devices and players that don't support these boxes.</p> <p>Important considerations:</p> <ul> <li> <p>This setting only affects CMAF container formats</p> </li> <li> <p>Key rotation can still be handled through media playlist signaling</p> </li> <li> <p>PSSH and TENC boxes remain unaffected</p> </li> <li> <p>Default behavior is preserved when this setting is disabled</p> </li> </ul> <p>Valid values: <code>true</code> | <code>false</code> </p> <p>Default: <code>false</code> </p>
   */
  CmafExcludeSegmentDrmMetadata?: boolean;
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
   * <p>The frequency (in seconds) of key changes for live workflows, in which content is streamed real time. The service retrieves content keys before the live content begins streaming, and then retrieves them as needed over the lifetime of the workflow. By default, key rotation is set to 300 seconds (5 minutes), the minimum rotation interval, which is equivalent to setting it to 300. If you don't enter an interval, content keys aren't rotated.</p> <p>The following example setting causes the service to rotate keys every thirty minutes: <code>1800</code> </p>
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
  IsmEncryptionMethod?: IsmEncryptionMethod;
  TsEncryptionMethod?: TsEncryptionMethod;
};
/**
 * Type definition for `AWS::MediaPackageV2::OriginEndpoint.EndpointErrorCondition`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediapackagev2-originendpoint-endpointerrorcondition.html}
 */
export type EndpointErrorCondition =
  | "STALE_MANIFEST"
  | "INCOMPLETE_MANIFEST"
  | "MISSING_DRM_KEY"
  | "SLATE_INPUT";
/**
 * Type definition for `AWS::MediaPackageV2::OriginEndpoint.FilterConfiguration`.
 * <p>Filter configuration includes settings for manifest filtering, start and end times, and time delay that apply to all of your egress requests for this manifest. </p>
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediapackagev2-originendpoint-filterconfiguration.html}
 */
export type FilterConfiguration = {
  /**
   * <p>Optionally specify the clip start time for all of your manifest egress requests. When you include clip start time, note that you cannot use clip start time query parameters for this manifest's endpoint URL.</p>
   */
  ClipStartTime?: string;
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
 * Type definition for `AWS::MediaPackageV2::OriginEndpoint.ForceEndpointErrorConfiguration`.
 * <p>The failover settings for the endpoint.</p>
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediapackagev2-originendpoint-forceendpointerrorconfiguration.html}
 */
export type ForceEndpointErrorConfiguration = {
  /**
   * <p>The failover conditions for the endpoint. The options are:</p> <ul> <li> <p> <code>STALE_MANIFEST</code> - The manifest stalled and there are no new segments or parts.</p> </li> <li> <p> <code>INCOMPLETE_MANIFEST</code> - There is a gap in the manifest.</p> </li> <li> <p> <code>MISSING_DRM_KEY</code> - Key rotation is enabled but we're unable to fetch the key for the current key period.</p> </li> <li> <p> <code>SLATE_INPUT</code> - The segments which contain slate content are considered to be missing content.</p> </li> </ul>
   */
  EndpointErrorConditions?: EndpointErrorCondition[];
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
   * <p>Inserts EXT-X-PROGRAM-DATE-TIME tags in the output manifest at the interval that you specify. If you don't enter an interval, EXT-X-PROGRAM-DATE-TIME tags aren't included in the manifest. The tags sync the stream to the wall clock so that viewers can seek to a specific time in the playback timeline on the player.</p> <p>Irrespective of this parameter, if any ID3Timed metadata is in the HLS input, it is passed through to the HLS output.</p>
   */
  ProgramDateTimeIntervalSeconds?: number;
  /**
   * <p>The SCTE configuration.</p>
   */
  ScteHls?: ScteHls;
  /**
   * <p>To insert an EXT-X-START tag in your HLS playlist, specify a StartTag configuration object with a valid TimeOffset. When you do, you can also optionally specify whether to include a PRECISE value in the EXT-X-START tag.</p>
   */
  StartTag?: StartTag;
  /**
   * <p>When enabled, MediaPackage URL-encodes the query string for API requests for HLS child manifests to comply with Amazon Web Services Signature Version 4 (SigV4) signature signing protocol. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_sigv.html">Amazon Web Services Signature Version 4 for API requests</a> in <i>Identity and Access Management User Guide</i>.</p>
   */
  UrlEncodeChildManifest?: boolean;
};
/**
 * Type definition for `AWS::MediaPackageV2::OriginEndpoint.IsmEncryptionMethod`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediapackagev2-originendpoint-ismencryptionmethod.html}
 */
export type IsmEncryptionMethod = "CENC";
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
   * <p>Inserts EXT-X-PROGRAM-DATE-TIME tags in the output manifest at the interval that you specify. If you don't enter an interval, EXT-X-PROGRAM-DATE-TIME tags aren't included in the manifest. The tags sync the stream to the wall clock so that viewers can seek to a specific time in the playback timeline on the player.</p> <p>Irrespective of this parameter, if any ID3Timed metadata is in the HLS input, it is passed through to the HLS output.</p>
   */
  ProgramDateTimeIntervalSeconds?: number;
  /**
   * <p>The SCTE configuration.</p>
   */
  ScteHls?: ScteHls;
  /**
   * <p>To insert an EXT-X-START tag in your HLS playlist, specify a StartTag configuration object with a valid TimeOffset. When you do, you can also optionally specify whether to include a PRECISE value in the EXT-X-START tag.</p>
   */
  StartTag?: StartTag;
  /**
   * <p>When enabled, MediaPackage URL-encodes the query string for API requests for LL-HLS child manifests to comply with Amazon Web Services Signature Version 4 (SigV4) signature signing protocol. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_sigv.html">Amazon Web Services Signature Version 4 for API requests</a> in <i>Identity and Access Management User Guide</i>.</p>
   */
  UrlEncodeChildManifest?: boolean;
};
/**
 * Type definition for `AWS::MediaPackageV2::OriginEndpoint.MssManifestConfiguration`.
 * <p>Configuration details for a Microsoft Smooth Streaming (MSS) manifest associated with an origin endpoint. This includes all the settings and properties that define how the MSS content is packaged and delivered.</p>
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediapackagev2-originendpoint-mssmanifestconfiguration.html}
 */
export type MssManifestConfiguration = {
  /**
   * <p>Filter configuration includes settings for manifest filtering, start and end times, and time delay that apply to all of your egress requests for this manifest. </p>
   */
  FilterConfiguration?: FilterConfiguration;
  ManifestLayout?: MssManifestLayout;
  /**
   * <p>The name of the MSS manifest. This name is appended to the origin endpoint URL to create the unique path for accessing this specific MSS manifest.</p>
   * @minLength `1`
   * @maxLength `256`
   * @pattern `^[a-zA-Z0-9-]+$`
   */
  ManifestName: string;
  /**
   * <p>The duration (in seconds) of the manifest window. This represents the total amount of content available in the manifest at any given time.</p>
   */
  ManifestWindowSeconds?: number;
};
/**
 * Type definition for `AWS::MediaPackageV2::OriginEndpoint.MssManifestLayout`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediapackagev2-originendpoint-mssmanifestlayout.html}
 */
export type MssManifestLayout = "FULL" | "COMPACT";
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
  ScteInSegments?: ScteInSegments;
};
/**
 * Type definition for `AWS::MediaPackageV2::OriginEndpoint.ScteDash`.
 * <p>The SCTE configuration.</p>
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediapackagev2-originendpoint-sctedash.html}
 */
export type ScteDash = {
  AdMarkerDash?: AdMarkerDash;
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
 * Type definition for `AWS::MediaPackageV2::OriginEndpoint.ScteInSegments`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediapackagev2-originendpoint-scteinsegments.html}
 */
export type ScteInSegments = "NONE" | "ALL";
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
   * <p>The unique identifier for the content. The service sends this to the key server to identify the current endpoint. How unique you make this depends on how fine-grained you want access controls to be. The service does not permit you to use the same ID for two simultaneous encryption processes. The resource ID is also known as the content ID.</p> <p>The following example shows a resource ID: <code>MovieNight20171126093045</code> </p>
   * @minLength `1`
   * @maxLength `256`
   * @pattern `^[0-9a-zA-Z_-]+$`
   */
  ResourceId: string;
  /**
   * <p>The ARN for the IAM role granted by the key provider that provides access to the key provider API. This role must have a trust policy that allows MediaPackage to assume the role, and it must have a sufficient permissions policy to allow access to the specific key retrieval URL. Get this from your DRM solution provider.</p> <p>Valid format: <code>arn:aws:iam::{accountID}:role/{name}</code>. The following example shows a role ARN: <code>arn:aws:iam::444455556666:role/SpekeAccess</code> </p>
   * @minLength `1`
   * @maxLength `2048`
   */
  RoleArn: string;
  /**
   * <p>The URL of the API Gateway proxy that you set up to talk to your key server. The API Gateway proxy must reside in the same AWS Region as MediaPackage and must start with https://.</p> <p>The following example shows a URL: <code>https://1wm2dx1f33.execute-api.us-west-2.amazonaws.com/SpekeSample/copyProtection</code> </p>
   * @minLength `1`
   * @maxLength `1024`
   */
  Url: string;
};
/**
 * Type definition for `AWS::MediaPackageV2::OriginEndpoint.StartTag`.
 * <p>To insert an EXT-X-START tag in your HLS playlist, specify a StartTag configuration object with a valid TimeOffset. When you do, you can also optionally specify whether to include a PRECISE value in the EXT-X-START tag.</p>
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediapackagev2-originendpoint-starttag.html}
 */
export type StartTag = {
  /**
   * <p>Specify the value for PRECISE within your EXT-X-START tag. Leave blank, or choose false, to use the default value NO. Choose yes to use the value YES.</p>
   */
  Precise?: boolean;
  /**
   * <p>Specify the value for TIME-OFFSET within your EXT-X-START tag. Enter a signed floating point value which, if positive, must be less than the configured manifest duration minus three times the configured segment target duration. If negative, the absolute value must be larger than three times the configured segment target duration, and the absolute value must be smaller than the configured manifest duration.</p>
   */
  TimeOffset: number;
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
