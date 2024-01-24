import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource schema for AWS::MediaPackage::PackagingConfiguration
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackage-packagingconfiguration.html}
 */
export type MediaPackagePackagingConfigurationProperties = {
  /**
   * A CMAF packaging configuration.
   */
  CmafPackage?: CmafPackage;
  /**
   * A Dynamic Adaptive Streaming over HTTP (DASH) packaging configuration.
   */
  DashPackage?: DashPackage;
  /**
   * An HTTP Live Streaming (HLS) packaging configuration.
   */
  HlsPackage?: HlsPackage;
  /**
   * The ID of the PackagingConfiguration.
   */
  Id: string;
  /**
   * A Microsoft Smooth Streaming (MSS) PackagingConfiguration.
   */
  MssPackage?: MssPackage;
  /**
   * The ID of a PackagingGroup.
   */
  PackagingGroupId: string;
  /**
   * A collection of tags associated with a resource
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::MediaPackage::PackagingConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackage-packagingconfiguration.html#aws-resource-mediapackage-packagingconfiguration-return-values}
 */
export type MediaPackagePackagingConfigurationAttributes = {
  /**
   * The ARN of the PackagingConfiguration.
   */
  Arn: string;
};
/**
 * Type definition for `AWS::MediaPackage::PackagingConfiguration.CmafEncryption`.
 * A CMAF encryption configuration.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediapackage-packagingconfiguration-cmafencryption.html}
 */
export type CmafEncryption = {
  /**
   * A configuration for accessing an external Secure Packager and Encoder Key Exchange (SPEKE) service that will provide encryption keys.
   */
  SpekeKeyProvider: SpekeKeyProvider;
};
/**
 * Type definition for `AWS::MediaPackage::PackagingConfiguration.CmafPackage`.
 * A CMAF packaging configuration.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediapackage-packagingconfiguration-cmafpackage.html}
 */
export type CmafPackage = {
  /**
   * A CMAF encryption configuration.
   */
  Encryption?: CmafEncryption;
  /**
   * A list of HLS manifest configurations.
   */
  HlsManifests: HlsManifest[];
  /**
   * When includeEncoderConfigurationInSegments is set to true, MediaPackage places your encoder's Sequence Parameter Set (SPS), Picture Parameter Set (PPS), and Video Parameter Set (VPS) metadata in every video segment instead of in the init fragment. This lets you use different SPS/PPS/VPS settings for your assets during content playback.
   */
  IncludeEncoderConfigurationInSegments?: boolean;
  /**
   * Duration (in seconds) of each fragment. Actual fragments will be rounded to the nearest multiple of the source fragment duration.
   */
  SegmentDurationSeconds?: number;
};
/**
 * Type definition for `AWS::MediaPackage::PackagingConfiguration.DashEncryption`.
 * A Dynamic Adaptive Streaming over HTTP (DASH) encryption configuration.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediapackage-packagingconfiguration-dashencryption.html}
 */
export type DashEncryption = {
  /**
   * A configuration for accessing an external Secure Packager and Encoder Key Exchange (SPEKE) service that will provide encryption keys.
   */
  SpekeKeyProvider: SpekeKeyProvider;
};
/**
 * Type definition for `AWS::MediaPackage::PackagingConfiguration.DashManifest`.
 * A DASH manifest configuration.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediapackage-packagingconfiguration-dashmanifest.html}
 */
export type DashManifest = {
  /**
   * Determines the position of some tags in the Media Presentation Description (MPD). When set to FULL, elements like SegmentTemplate and ContentProtection are included in each Representation. When set to COMPACT, duplicate elements are combined and presented at the AdaptationSet level.
   */
  ManifestLayout?: "FULL" | "COMPACT";
  /**
   * An optional string to include in the name of the manifest.
   */
  ManifestName?: string;
  /**
   * Minimum duration (in seconds) that a player will buffer media before starting the presentation.
   */
  MinBufferTimeSeconds?: number;
  /**
   * The Dynamic Adaptive Streaming over HTTP (DASH) profile type. When set to "HBBTV_1_5", HbbTV 1.5 compliant output is enabled.
   */
  Profile?: "NONE" | "HBBTV_1_5";
  /**
   * The source of scte markers used. When set to SEGMENTS, the scte markers are sourced from the segments of the ingested content. When set to MANIFEST, the scte markers are sourced from the manifest of the ingested content.
   */
  ScteMarkersSource?: "SEGMENTS" | "MANIFEST";
  /**
   * A StreamSelection configuration.
   */
  StreamSelection?: StreamSelection;
};
/**
 * Type definition for `AWS::MediaPackage::PackagingConfiguration.DashPackage`.
 * A Dynamic Adaptive Streaming over HTTP (DASH) packaging configuration.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediapackage-packagingconfiguration-dashpackage.html}
 */
export type DashPackage = {
  /**
   * A list of DASH manifest configurations.
   */
  DashManifests: DashManifest[];
  /**
   * A Dynamic Adaptive Streaming over HTTP (DASH) encryption configuration.
   */
  Encryption?: DashEncryption;
  /**
   * When includeEncoderConfigurationInSegments is set to true, MediaPackage places your encoder's Sequence Parameter Set (SPS), Picture Parameter Set (PPS), and Video Parameter Set (VPS) metadata in every video segment instead of in the init fragment. This lets you use different SPS/PPS/VPS settings for your assets during content playback.
   */
  IncludeEncoderConfigurationInSegments?: boolean;
  /**
   * When enabled, an I-Frame only stream will be included in the output.
   */
  IncludeIframeOnlyStream?: boolean;
  /**
   * A list of triggers that controls when the outgoing Dynamic Adaptive Streaming over HTTP (DASH) Media Presentation Description (MPD) will be partitioned into multiple periods. If empty, the content will not be partitioned into more than one period. If the list contains "ADS", new periods will be created where the Asset contains SCTE-35 ad markers.
   */
  PeriodTriggers?: "ADS"[];
  /**
   * Duration (in seconds) of each fragment. Actual fragments will be rounded to the nearest multiple of the source fragment duration.
   */
  SegmentDurationSeconds?: number;
  /**
   * Determines the type of SegmentTemplate included in the Media Presentation Description (MPD). When set to NUMBER_WITH_TIMELINE, a full timeline is presented in each SegmentTemplate, with $Number$ media URLs. When set to TIME_WITH_TIMELINE, a full timeline is presented in each SegmentTemplate, with $Time$ media URLs. When set to NUMBER_WITH_DURATION, only a duration is included in each SegmentTemplate, with $Number$ media URLs.
   */
  SegmentTemplateFormat?:
    | "NUMBER_WITH_TIMELINE"
    | "TIME_WITH_TIMELINE"
    | "NUMBER_WITH_DURATION";
};
/**
 * Type definition for `AWS::MediaPackage::PackagingConfiguration.EncryptionContractConfiguration`.
 * The configuration to use for encrypting one or more content tracks separately for endpoints that use SPEKE 2.0.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediapackage-packagingconfiguration-encryptioncontractconfiguration.html}
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
 * Type definition for `AWS::MediaPackage::PackagingConfiguration.HlsEncryption`.
 * An HTTP Live Streaming (HLS) encryption configuration.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediapackage-packagingconfiguration-hlsencryption.html}
 */
export type HlsEncryption = {
  /**
   * An HTTP Live Streaming (HLS) encryption configuration.
   */
  ConstantInitializationVector?: string;
  /**
   * The encryption method to use.
   */
  EncryptionMethod?: "AES_128" | "SAMPLE_AES";
  /**
   * A configuration for accessing an external Secure Packager and Encoder Key Exchange (SPEKE) service that will provide encryption keys.
   */
  SpekeKeyProvider: SpekeKeyProvider;
};
/**
 * Type definition for `AWS::MediaPackage::PackagingConfiguration.HlsManifest`.
 * An HTTP Live Streaming (HLS) manifest configuration.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediapackage-packagingconfiguration-hlsmanifest.html}
 */
export type HlsManifest = {
  /**
   * This setting controls how ad markers are included in the packaged OriginEndpoint. "NONE" will omit all SCTE-35 ad markers from the output. "PASSTHROUGH" causes the manifest to contain a copy of the SCTE-35 ad markers (comments) taken directly from the input HTTP Live Streaming (HLS) manifest. "SCTE35_ENHANCED" generates ad markers and blackout tags based on SCTE-35 messages in the input source.
   */
  AdMarkers?: "NONE" | "SCTE35_ENHANCED" | "PASSTHROUGH";
  /**
   * When enabled, an I-Frame only stream will be included in the output.
   */
  IncludeIframeOnlyStream?: boolean;
  /**
   * An optional string to include in the name of the manifest.
   */
  ManifestName?: string;
  /**
   * The interval (in seconds) between each EXT-X-PROGRAM-DATE-TIME tag inserted into manifests. Additionally, when an interval is specified ID3Timed Metadata messages will be generated every 5 seconds using the ingest time of the content. If the interval is not specified, or set to 0, then no EXT-X-PROGRAM-DATE-TIME tags will be inserted into manifests and no ID3Timed Metadata messages will be generated. Note that irrespective of this parameter, if any ID3 Timed Metadata is found in HTTP Live Streaming (HLS) input, it will be passed through to HLS output.
   */
  ProgramDateTimeIntervalSeconds?: number;
  /**
   * When enabled, the EXT-X-KEY tag will be repeated in output manifests.
   */
  RepeatExtXKey?: boolean;
  /**
   * A StreamSelection configuration.
   */
  StreamSelection?: StreamSelection;
};
/**
 * Type definition for `AWS::MediaPackage::PackagingConfiguration.HlsPackage`.
 * An HTTP Live Streaming (HLS) packaging configuration.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediapackage-packagingconfiguration-hlspackage.html}
 */
export type HlsPackage = {
  /**
   * An HTTP Live Streaming (HLS) encryption configuration.
   */
  Encryption?: HlsEncryption;
  /**
   * A list of HLS manifest configurations.
   */
  HlsManifests: HlsManifest[];
  /**
   * When enabled, MediaPackage passes through digital video broadcasting (DVB) subtitles into the output.
   */
  IncludeDvbSubtitles?: boolean;
  /**
   * Duration (in seconds) of each fragment. Actual fragments will be rounded to the nearest multiple of the source fragment duration.
   */
  SegmentDurationSeconds?: number;
  /**
   * When enabled, audio streams will be placed in rendition groups in the output.
   */
  UseAudioRenditionGroup?: boolean;
};
/**
 * Type definition for `AWS::MediaPackage::PackagingConfiguration.MssEncryption`.
 * A CMAF encryption configuration.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediapackage-packagingconfiguration-mssencryption.html}
 */
export type MssEncryption = {
  /**
   * A configuration for accessing an external Secure Packager and Encoder Key Exchange (SPEKE) service that will provide encryption keys.
   */
  SpekeKeyProvider: SpekeKeyProvider;
};
/**
 * Type definition for `AWS::MediaPackage::PackagingConfiguration.MssManifest`.
 * A Microsoft Smooth Streaming (MSS) manifest configuration.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediapackage-packagingconfiguration-mssmanifest.html}
 */
export type MssManifest = {
  /**
   * An optional string to include in the name of the manifest.
   */
  ManifestName?: string;
  /**
   * A StreamSelection configuration.
   */
  StreamSelection?: StreamSelection;
};
/**
 * Type definition for `AWS::MediaPackage::PackagingConfiguration.MssPackage`.
 * A Microsoft Smooth Streaming (MSS) PackagingConfiguration.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediapackage-packagingconfiguration-msspackage.html}
 */
export type MssPackage = {
  /**
   * A CMAF encryption configuration.
   */
  Encryption?: MssEncryption;
  /**
   * A list of MSS manifest configurations.
   */
  MssManifests: MssManifest[];
  /**
   * Duration (in seconds) of each fragment. Actual fragments will be rounded to the nearest multiple of the source fragment duration.
   */
  SegmentDurationSeconds?: number;
};
/**
 * Type definition for `AWS::MediaPackage::PackagingConfiguration.SpekeKeyProvider`.
 * A configuration for accessing an external Secure Packager and Encoder Key Exchange (SPEKE) service that will provide encryption keys.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediapackage-packagingconfiguration-spekekeyprovider.html}
 */
export type SpekeKeyProvider = {
  /**
   * The configuration to use for encrypting one or more content tracks separately for endpoints that use SPEKE 2.0.
   */
  EncryptionContractConfiguration?: EncryptionContractConfiguration;
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
 * Type definition for `AWS::MediaPackage::PackagingConfiguration.StreamSelection`.
 * A StreamSelection configuration.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediapackage-packagingconfiguration-streamselection.html}
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
 * Type definition for `AWS::MediaPackage::PackagingConfiguration.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediapackage-packagingconfiguration-tag.html}
 */
export type Tag = {
  Key: string;
  Value: string;
};
/**
 * Resource schema for AWS::MediaPackage::PackagingConfiguration
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackage-packagingconfiguration.html}
 */
export class MediaPackagePackagingConfiguration extends $Resource<
  "AWS::MediaPackage::PackagingConfiguration",
  MediaPackagePackagingConfigurationProperties,
  MediaPackagePackagingConfigurationAttributes
> {
  public static readonly Type = "AWS::MediaPackage::PackagingConfiguration";
  constructor(
    logicalId: string,
    properties: MediaPackagePackagingConfigurationProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      MediaPackagePackagingConfiguration.Type,
      properties,
      options,
    );
  }
}
