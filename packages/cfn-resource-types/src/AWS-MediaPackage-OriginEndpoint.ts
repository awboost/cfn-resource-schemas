import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource schema for AWS::MediaPackage::OriginEndpoint
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackage-originendpoint.html}
 */
export type MediaPackageOriginEndpointProperties = {
  /**
   * CDN Authorization credentials
   */
  Authorization?: Authorization;
  /**
   * The ID of the Channel the OriginEndpoint is associated with.
   */
  ChannelId: string;
  /**
   * A Common Media Application Format (CMAF) packaging configuration.
   */
  CmafPackage?: CmafPackage;
  /**
   * A Dynamic Adaptive Streaming over HTTP (DASH) packaging configuration.
   */
  DashPackage?: DashPackage;
  /**
   * A short text description of the OriginEndpoint.
   */
  Description?: string;
  /**
   * An HTTP Live Streaming (HLS) packaging configuration.
   */
  HlsPackage?: HlsPackage;
  /**
   * The ID of the OriginEndpoint.
   * @minLength `1`
   * @maxLength `256`
   * @pattern `\A[0-9a-zA-Z-_]+\Z`
   */
  Id: string;
  /**
   * A short string appended to the end of the OriginEndpoint URL.
   */
  ManifestName?: string;
  /**
   * A Microsoft Smooth Streaming (MSS) packaging configuration.
   */
  MssPackage?: MssPackage;
  /**
   * Control whether origination of video is allowed for this OriginEndpoint. If set to ALLOW, the OriginEndpoint may by requested, pursuant to any other form of access control. If set to DENY, the OriginEndpoint may not be requested. This can be helpful for Live to VOD harvesting, or for temporarily disabling origination
   */
  Origination?: "ALLOW" | "DENY";
  /**
   * Maximum duration (seconds) of content to retain for startover playback. If not specified, startover playback will be disabled for the OriginEndpoint.
   */
  StartoverWindowSeconds?: number;
  /**
   * A collection of tags associated with a resource
   */
  Tags?: Tag[];
  /**
   * Amount of delay (seconds) to enforce on the playback of live content. If not specified, there will be no time delay in effect for the OriginEndpoint.
   */
  TimeDelaySeconds?: number;
  /**
   * A list of source IP CIDR blocks that will be allowed to access the OriginEndpoint.
   */
  Whitelist?: string[];
};
/**
 * Attribute type definition for `AWS::MediaPackage::OriginEndpoint`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackage-originendpoint.html#aws-resource-mediapackage-originendpoint-return-values}
 */
export type MediaPackageOriginEndpointAttributes = {
  /**
   * The Amazon Resource Name (ARN) assigned to the OriginEndpoint.
   */
  Arn: string;
  /**
   * The URL of the packaged OriginEndpoint for consumption.
   */
  Url: string;
};
/**
 * Type definition for `AWS::MediaPackage::OriginEndpoint.AdsOnDeliveryRestrictions`.
 * This setting allows the delivery restriction flags on SCTE-35 segmentation descriptors to determine whether a message signals an ad.  Choosing "NONE" means no SCTE-35 messages become ads.  Choosing "RESTRICTED" means SCTE-35 messages of the types specified in AdTriggers that contain delivery restrictions will be treated as ads.  Choosing "UNRESTRICTED" means SCTE-35 messages of the types specified in AdTriggers that do not contain delivery restrictions will be treated as ads.  Choosing "BOTH" means all SCTE-35 messages of the types specified in AdTriggers will be treated as ads.  Note that Splice Insert messages do not have these flags and are always treated as ads if specified in AdTriggers.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediapackage-originendpoint-adsondeliveryrestrictions.html}
 */
export type AdsOnDeliveryRestrictions =
  | "NONE"
  | "RESTRICTED"
  | "UNRESTRICTED"
  | "BOTH";
/**
 * Type definition for `AWS::MediaPackage::OriginEndpoint.Authorization`.
 * CDN Authorization credentials
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediapackage-originendpoint-authorization.html}
 */
export type Authorization = {
  /**
   * The Amazon Resource Name (ARN) for the secret in Secrets Manager that your Content Distribution Network (CDN) uses for authorization to access your endpoint.
   */
  CdnIdentifierSecret: string;
  /**
   * The Amazon Resource Name (ARN) for the IAM role that allows MediaPackage to communicate with AWS Secrets Manager.
   */
  SecretsRoleArn: string;
};
/**
 * Type definition for `AWS::MediaPackage::OriginEndpoint.CmafEncryption`.
 * A Common Media Application Format (CMAF) encryption configuration.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediapackage-originendpoint-cmafencryption.html}
 */
export type CmafEncryption = {
  /**
   * An optional 128-bit, 16-byte hex value represented by a 32-character string, used in conjunction with the key for encrypting blocks. If you don't specify a value, then MediaPackage creates the constant initialization vector (IV).
   * @minLength `32`
   * @maxLength `32`
   * @pattern `\A[0-9a-fA-F]+\Z`
   */
  ConstantInitializationVector?: string;
  /**
   * The encryption method used
   */
  EncryptionMethod?: "SAMPLE_AES" | "AES_CTR";
  /**
   * Time (in seconds) between each encryption key rotation.
   */
  KeyRotationIntervalSeconds?: number;
  /**
   * A configuration for accessing an external Secure Packager and Encoder Key Exchange (SPEKE) service that will provide encryption keys.
   */
  SpekeKeyProvider: SpekeKeyProvider;
};
/**
 * Type definition for `AWS::MediaPackage::OriginEndpoint.CmafPackage`.
 * A Common Media Application Format (CMAF) packaging configuration.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediapackage-originendpoint-cmafpackage.html}
 */
export type CmafPackage = {
  /**
   * A Common Media Application Format (CMAF) encryption configuration.
   */
  Encryption?: CmafEncryption;
  /**
   * A list of HLS manifest configurations
   */
  HlsManifests?: HlsManifest[];
  /**
   * Duration (in seconds) of each segment. Actual segments will be rounded to the nearest multiple of the source segment duration.
   */
  SegmentDurationSeconds?: number;
  /**
   * An optional custom string that is prepended to the name of each segment. If not specified, it defaults to the ChannelId.
   */
  SegmentPrefix?: string;
  /**
   * A StreamSelection configuration.
   */
  StreamSelection?: StreamSelection;
};
/**
 * Type definition for `AWS::MediaPackage::OriginEndpoint.DashEncryption`.
 * A Dynamic Adaptive Streaming over HTTP (DASH) encryption configuration.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediapackage-originendpoint-dashencryption.html}
 */
export type DashEncryption = {
  /**
   * Time (in seconds) between each encryption key rotation.
   */
  KeyRotationIntervalSeconds?: number;
  /**
   * A configuration for accessing an external Secure Packager and Encoder Key Exchange (SPEKE) service that will provide encryption keys.
   */
  SpekeKeyProvider: SpekeKeyProvider;
};
/**
 * Type definition for `AWS::MediaPackage::OriginEndpoint.DashPackage`.
 * A Dynamic Adaptive Streaming over HTTP (DASH) packaging configuration.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediapackage-originendpoint-dashpackage.html}
 */
export type DashPackage = {
  /**
   * A list of SCTE-35 message types that are treated as ad markers in the output.  If empty, no ad markers are output.  Specify multiple items to create ad markers for all of the included message types.
   */
  AdTriggers?: (
    | "SPLICE_INSERT"
    | "BREAK"
    | "PROVIDER_ADVERTISEMENT"
    | "DISTRIBUTOR_ADVERTISEMENT"
    | "PROVIDER_PLACEMENT_OPPORTUNITY"
    | "DISTRIBUTOR_PLACEMENT_OPPORTUNITY"
    | "PROVIDER_OVERLAY_PLACEMENT_OPPORTUNITY"
    | "DISTRIBUTOR_OVERLAY_PLACEMENT_OPPORTUNITY"
  )[];
  /**
   * This setting allows the delivery restriction flags on SCTE-35 segmentation descriptors to determine whether a message signals an ad.  Choosing "NONE" means no SCTE-35 messages become ads.  Choosing "RESTRICTED" means SCTE-35 messages of the types specified in AdTriggers that contain delivery restrictions will be treated as ads.  Choosing "UNRESTRICTED" means SCTE-35 messages of the types specified in AdTriggers that do not contain delivery restrictions will be treated as ads.  Choosing "BOTH" means all SCTE-35 messages of the types specified in AdTriggers will be treated as ads.  Note that Splice Insert messages do not have these flags and are always treated as ads if specified in AdTriggers.
   */
  AdsOnDeliveryRestrictions?: AdsOnDeliveryRestrictions;
  /**
   * A Dynamic Adaptive Streaming over HTTP (DASH) encryption configuration.
   */
  Encryption?: DashEncryption;
  /**
   * When enabled, an I-Frame only stream will be included in the output.
   */
  IncludeIframeOnlyStream?: boolean;
  /**
   * Determines the position of some tags in the Media Presentation Description (MPD).  When set to FULL, elements like SegmentTemplate and ContentProtection are included in each Representation.  When set to COMPACT, duplicate elements are combined and presented at the AdaptationSet level.
   */
  ManifestLayout?: "FULL" | "COMPACT" | "DRM_TOP_LEVEL_COMPACT";
  /**
   * Time window (in seconds) contained in each manifest.
   */
  ManifestWindowSeconds?: number;
  /**
   * Minimum duration (in seconds) that a player will buffer media before starting the presentation.
   */
  MinBufferTimeSeconds?: number;
  /**
   * Minimum duration (in seconds) between potential changes to the Dynamic Adaptive Streaming over HTTP (DASH) Media Presentation Description (MPD).
   */
  MinUpdatePeriodSeconds?: number;
  /**
   * A list of triggers that controls when the outgoing Dynamic Adaptive Streaming over HTTP (DASH) Media Presentation Description (MPD) will be partitioned into multiple periods. If empty, the content will not be partitioned into more than one period. If the list contains "ADS", new periods will be created where the Channel source contains SCTE-35 ad markers.
   */
  PeriodTriggers?: "ADS"[];
  /**
   * The Dynamic Adaptive Streaming over HTTP (DASH) profile type.  When set to "HBBTV_1_5", HbbTV 1.5 compliant output is enabled.
   */
  Profile?: "NONE" | "HBBTV_1_5" | "HYBRIDCAST" | "DVB_DASH_2014";
  /**
   * Duration (in seconds) of each segment. Actual segments will be rounded to the nearest multiple of the source segment duration.
   */
  SegmentDurationSeconds?: number;
  /**
   * Determines the type of SegmentTemplate included in the Media Presentation Description (MPD).  When set to NUMBER_WITH_TIMELINE, a full timeline is presented in each SegmentTemplate, with $Number$ media URLs.  When set to TIME_WITH_TIMELINE, a full timeline is presented in each SegmentTemplate, with $Time$ media URLs. When set to NUMBER_WITH_DURATION, only a duration is included in each SegmentTemplate, with $Number$ media URLs.
   */
  SegmentTemplateFormat?:
    | "NUMBER_WITH_TIMELINE"
    | "TIME_WITH_TIMELINE"
    | "NUMBER_WITH_DURATION";
  /**
   * A StreamSelection configuration.
   */
  StreamSelection?: StreamSelection;
  /**
   * Duration (in seconds) to delay live content before presentation.
   */
  SuggestedPresentationDelaySeconds?: number;
  /**
   * Determines the type of UTCTiming included in the Media Presentation Description (MPD)
   */
  UtcTiming?: "HTTP-XSDATE" | "HTTP-ISO" | "HTTP-HEAD" | "NONE";
  /**
   * Specifies the value attribute of the UTCTiming field when utcTiming is set to HTTP-ISO, HTTP-HEAD or HTTP-XSDATE
   */
  UtcTimingUri?: string;
};
/**
 * Type definition for `AWS::MediaPackage::OriginEndpoint.EncryptionContractConfiguration`.
 * The configuration to use for encrypting one or more content tracks separately for endpoints that use SPEKE 2.0.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediapackage-originendpoint-encryptioncontractconfiguration.html}
 */
export type EncryptionContractConfiguration = {
  /**
   * A collection of audio encryption presets.
   */
  PresetSpeke20Audio:
    | "PRESET-AUDIO-1"
    | "PRESET-AUDIO-2"
    | "PRESET-AUDIO-3"
    | "SHARED"
    | "UNENCRYPTED";
  /**
   * A collection of video encryption presets.
   */
  PresetSpeke20Video:
    | "PRESET-VIDEO-1"
    | "PRESET-VIDEO-2"
    | "PRESET-VIDEO-3"
    | "PRESET-VIDEO-4"
    | "PRESET-VIDEO-5"
    | "PRESET-VIDEO-6"
    | "PRESET-VIDEO-7"
    | "PRESET-VIDEO-8"
    | "SHARED"
    | "UNENCRYPTED";
};
/**
 * Type definition for `AWS::MediaPackage::OriginEndpoint.HlsEncryption`.
 * An HTTP Live Streaming (HLS) encryption configuration.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediapackage-originendpoint-hlsencryption.html}
 */
export type HlsEncryption = {
  /**
   * A constant initialization vector for encryption (optional). When not specified the initialization vector will be periodically rotated.
   */
  ConstantInitializationVector?: string;
  /**
   * The encryption method to use.
   */
  EncryptionMethod?: "AES_128" | "SAMPLE_AES";
  /**
   * Interval (in seconds) between each encryption key rotation.
   */
  KeyRotationIntervalSeconds?: number;
  /**
   * When enabled, the EXT-X-KEY tag will be repeated in output manifests.
   */
  RepeatExtXKey?: boolean;
  /**
   * A configuration for accessing an external Secure Packager and Encoder Key Exchange (SPEKE) service that will provide encryption keys.
   */
  SpekeKeyProvider: SpekeKeyProvider;
};
/**
 * Type definition for `AWS::MediaPackage::OriginEndpoint.HlsManifest`.
 * A HTTP Live Streaming (HLS) manifest configuration.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediapackage-originendpoint-hlsmanifest.html}
 */
export type HlsManifest = {
  /**
   * This setting controls how ad markers are included in the packaged OriginEndpoint. "NONE" will omit all SCTE-35 ad markers from the output. "PASSTHROUGH" causes the manifest to contain a copy of the SCTE-35 ad markers (comments) taken directly from the input HTTP Live Streaming (HLS) manifest. "SCTE35_ENHANCED" generates ad markers and blackout tags based on SCTE-35 messages in the input source. "DATERANGE" inserts EXT-X-DATERANGE tags to signal ad and program transition events in HLS and CMAF manifests. For this option, you must set a programDateTimeIntervalSeconds value that is greater than 0.
   */
  AdMarkers?: "NONE" | "SCTE35_ENHANCED" | "PASSTHROUGH" | "DATERANGE";
  /**
   * A list of SCTE-35 message types that are treated as ad markers in the output.  If empty, no ad markers are output.  Specify multiple items to create ad markers for all of the included message types.
   */
  AdTriggers?: (
    | "SPLICE_INSERT"
    | "BREAK"
    | "PROVIDER_ADVERTISEMENT"
    | "DISTRIBUTOR_ADVERTISEMENT"
    | "PROVIDER_PLACEMENT_OPPORTUNITY"
    | "DISTRIBUTOR_PLACEMENT_OPPORTUNITY"
    | "PROVIDER_OVERLAY_PLACEMENT_OPPORTUNITY"
    | "DISTRIBUTOR_OVERLAY_PLACEMENT_OPPORTUNITY"
  )[];
  /**
   * This setting allows the delivery restriction flags on SCTE-35 segmentation descriptors to determine whether a message signals an ad.  Choosing "NONE" means no SCTE-35 messages become ads.  Choosing "RESTRICTED" means SCTE-35 messages of the types specified in AdTriggers that contain delivery restrictions will be treated as ads.  Choosing "UNRESTRICTED" means SCTE-35 messages of the types specified in AdTriggers that do not contain delivery restrictions will be treated as ads.  Choosing "BOTH" means all SCTE-35 messages of the types specified in AdTriggers will be treated as ads.  Note that Splice Insert messages do not have these flags and are always treated as ads if specified in AdTriggers.
   */
  AdsOnDeliveryRestrictions?: AdsOnDeliveryRestrictions;
  /**
   * The ID of the manifest. The ID must be unique within the OriginEndpoint and it cannot be changed after it is created.
   */
  Id: string;
  /**
   * When enabled, an I-Frame only stream will be included in the output.
   */
  IncludeIframeOnlyStream?: boolean;
  /**
   * An optional short string appended to the end of the OriginEndpoint URL. If not specified, defaults to the manifestName for the OriginEndpoint.
   */
  ManifestName?: string;
  /**
   * The HTTP Live Streaming (HLS) playlist type. When either "EVENT" or "VOD" is specified, a corresponding EXT-X-PLAYLIST-TYPE entry will be included in the media playlist.
   */
  PlaylistType?: "NONE" | "EVENT" | "VOD";
  /**
   * Time window (in seconds) contained in each parent manifest.
   */
  PlaylistWindowSeconds?: number;
  /**
   * The interval (in seconds) between each EXT-X-PROGRAM-DATE-TIME tag inserted into manifests. Additionally, when an interval is specified ID3Timed Metadata messages will be generated every 5 seconds using the ingest time of the content. If the interval is not specified, or set to 0, then no EXT-X-PROGRAM-DATE-TIME tags will be inserted into manifests and no ID3Timed Metadata messages will be generated. Note that irrespective of this parameter, if any ID3 Timed Metadata is found in HTTP Live Streaming (HLS) input, it will be passed through to HLS output.
   */
  ProgramDateTimeIntervalSeconds?: number;
  /**
   * The URL of the packaged OriginEndpoint for consumption.
   */
  Url?: string;
};
/**
 * Type definition for `AWS::MediaPackage::OriginEndpoint.HlsPackage`.
 * An HTTP Live Streaming (HLS) packaging configuration.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediapackage-originendpoint-hlspackage.html}
 */
export type HlsPackage = {
  /**
   * This setting controls how ad markers are included in the packaged OriginEndpoint. "NONE" will omit all SCTE-35 ad markers from the output. "PASSTHROUGH" causes the manifest to contain a copy of the SCTE-35 ad markers (comments) taken directly from the input HTTP Live Streaming (HLS) manifest. "SCTE35_ENHANCED" generates ad markers and blackout tags based on SCTE-35 messages in the input source. "DATERANGE" inserts EXT-X-DATERANGE tags to signal ad and program transition events in HLS and CMAF manifests. For this option, you must set a programDateTimeIntervalSeconds value that is greater than 0.
   */
  AdMarkers?: "NONE" | "SCTE35_ENHANCED" | "PASSTHROUGH" | "DATERANGE";
  /**
   * A list of SCTE-35 message types that are treated as ad markers in the output.  If empty, no ad markers are output.  Specify multiple items to create ad markers for all of the included message types.
   */
  AdTriggers?: (
    | "SPLICE_INSERT"
    | "BREAK"
    | "PROVIDER_ADVERTISEMENT"
    | "DISTRIBUTOR_ADVERTISEMENT"
    | "PROVIDER_PLACEMENT_OPPORTUNITY"
    | "DISTRIBUTOR_PLACEMENT_OPPORTUNITY"
    | "PROVIDER_OVERLAY_PLACEMENT_OPPORTUNITY"
    | "DISTRIBUTOR_OVERLAY_PLACEMENT_OPPORTUNITY"
  )[];
  /**
   * This setting allows the delivery restriction flags on SCTE-35 segmentation descriptors to determine whether a message signals an ad.  Choosing "NONE" means no SCTE-35 messages become ads.  Choosing "RESTRICTED" means SCTE-35 messages of the types specified in AdTriggers that contain delivery restrictions will be treated as ads.  Choosing "UNRESTRICTED" means SCTE-35 messages of the types specified in AdTriggers that do not contain delivery restrictions will be treated as ads.  Choosing "BOTH" means all SCTE-35 messages of the types specified in AdTriggers will be treated as ads.  Note that Splice Insert messages do not have these flags and are always treated as ads if specified in AdTriggers.
   */
  AdsOnDeliveryRestrictions?: AdsOnDeliveryRestrictions;
  /**
   * An HTTP Live Streaming (HLS) encryption configuration.
   */
  Encryption?: HlsEncryption;
  /**
   * When enabled, MediaPackage passes through digital video broadcasting (DVB) subtitles into the output.
   */
  IncludeDvbSubtitles?: boolean;
  /**
   * When enabled, an I-Frame only stream will be included in the output.
   */
  IncludeIframeOnlyStream?: boolean;
  /**
   * The HTTP Live Streaming (HLS) playlist type. When either "EVENT" or "VOD" is specified, a corresponding EXT-X-PLAYLIST-TYPE entry will be included in the media playlist.
   */
  PlaylistType?: "NONE" | "EVENT" | "VOD";
  /**
   * Time window (in seconds) contained in each parent manifest.
   */
  PlaylistWindowSeconds?: number;
  /**
   * The interval (in seconds) between each EXT-X-PROGRAM-DATE-TIME tag inserted into manifests. Additionally, when an interval is specified ID3Timed Metadata messages will be generated every 5 seconds using the ingest time of the content. If the interval is not specified, or set to 0, then no EXT-X-PROGRAM-DATE-TIME tags will be inserted into manifests and no ID3Timed Metadata messages will be generated. Note that irrespective of this parameter, if any ID3 Timed Metadata is found in HTTP Live Streaming (HLS) input, it will be passed through to HLS output.
   */
  ProgramDateTimeIntervalSeconds?: number;
  /**
   * Duration (in seconds) of each fragment. Actual fragments will be rounded to the nearest multiple of the source fragment duration.
   */
  SegmentDurationSeconds?: number;
  /**
   * A StreamSelection configuration.
   */
  StreamSelection?: StreamSelection;
  /**
   * When enabled, audio streams will be placed in rendition groups in the output.
   */
  UseAudioRenditionGroup?: boolean;
};
/**
 * Type definition for `AWS::MediaPackage::OriginEndpoint.MssEncryption`.
 * A Microsoft Smooth Streaming (MSS) encryption configuration.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediapackage-originendpoint-mssencryption.html}
 */
export type MssEncryption = {
  /**
   * A configuration for accessing an external Secure Packager and Encoder Key Exchange (SPEKE) service that will provide encryption keys.
   */
  SpekeKeyProvider: SpekeKeyProvider;
};
/**
 * Type definition for `AWS::MediaPackage::OriginEndpoint.MssPackage`.
 * A Microsoft Smooth Streaming (MSS) packaging configuration.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediapackage-originendpoint-msspackage.html}
 */
export type MssPackage = {
  /**
   * A Microsoft Smooth Streaming (MSS) encryption configuration.
   */
  Encryption?: MssEncryption;
  /**
   * The time window (in seconds) contained in each manifest.
   */
  ManifestWindowSeconds?: number;
  /**
   * The duration (in seconds) of each segment.
   */
  SegmentDurationSeconds?: number;
  /**
   * A StreamSelection configuration.
   */
  StreamSelection?: StreamSelection;
};
/**
 * Type definition for `AWS::MediaPackage::OriginEndpoint.SpekeKeyProvider`.
 * A configuration for accessing an external Secure Packager and Encoder Key Exchange (SPEKE) service that will provide encryption keys.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediapackage-originendpoint-spekekeyprovider.html}
 */
export type SpekeKeyProvider = {
  /**
   * An Amazon Resource Name (ARN) of a Certificate Manager certificate that MediaPackage will use for enforcing secure end-to-end data transfer with the key provider service.
   */
  CertificateArn?: string;
  /**
   * The configuration to use for encrypting one or more content tracks separately for endpoints that use SPEKE 2.0.
   */
  EncryptionContractConfiguration?: EncryptionContractConfiguration;
  /**
   * The resource ID to include in key requests.
   */
  ResourceId: string;
  /**
   * An Amazon Resource Name (ARN) of an IAM role that AWS Elemental MediaPackage will assume when accessing the key provider service.
   */
  RoleArn: string;
  /**
   * The system IDs to include in key requests.
   */
  SystemIds: string[];
  /**
   * The URL of the external key provider service.
   */
  Url: string;
};
/**
 * Type definition for `AWS::MediaPackage::OriginEndpoint.StreamSelection`.
 * A StreamSelection configuration.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediapackage-originendpoint-streamselection.html}
 */
export type StreamSelection = {
  /**
   * The maximum video bitrate (bps) to include in output.
   */
  MaxVideoBitsPerSecond?: number;
  /**
   * The minimum video bitrate (bps) to include in output.
   */
  MinVideoBitsPerSecond?: number;
  /**
   * A directive that determines the order of streams in the output.
   */
  StreamOrder?:
    | "ORIGINAL"
    | "VIDEO_BITRATE_ASCENDING"
    | "VIDEO_BITRATE_DESCENDING";
};
/**
 * Type definition for `AWS::MediaPackage::OriginEndpoint.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediapackage-originendpoint-tag.html}
 */
export type Tag = {
  Key: string;
  Value: string;
};
/**
 * Resource schema for AWS::MediaPackage::OriginEndpoint
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackage-originendpoint.html}
 */
export class MediaPackageOriginEndpoint extends $Resource<
  "AWS::MediaPackage::OriginEndpoint",
  MediaPackageOriginEndpointProperties,
  MediaPackageOriginEndpointAttributes
> {
  public static readonly Type = "AWS::MediaPackage::OriginEndpoint";
  constructor(
    logicalId: string,
    properties: MediaPackageOriginEndpointProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, MediaPackageOriginEndpoint.Type, properties, options);
  }
}
