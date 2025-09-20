import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::MediaLive::Channel
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-channel.html}
 */
export type MediaLiveChannelProperties = {
  AnywhereSettings?: AnywhereSettings;
  CdiInputSpecification?: CdiInputSpecification;
  ChannelClass?: string;
  ChannelEngineVersion?: ChannelEngineVersionRequest;
  Destinations?: OutputDestination[];
  DryRun?: boolean;
  EncoderSettings?: EncoderSettings;
  InputAttachments?: InputAttachment[];
  InputSpecification?: InputSpecification;
  LogLevel?: string;
  Maintenance?: MaintenanceCreateSettings;
  Name?: string;
  RoleArn?: string;
  Tags?: Record<string, any>;
  Vpc?: VpcOutputSettings;
};
/**
 * Attribute type definition for `AWS::MediaLive::Channel`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-channel.html#aws-resource-medialive-channel-return-values}
 */
export type MediaLiveChannelAttributes = {
  Arn: string;
  Id: string;
  Inputs: string[];
};
/**
 * Type definition for `AWS::MediaLive::Channel.AacSettings`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-aacsettings.html}
 */
export type AacSettings = {
  Bitrate?: number;
  CodingMode?: string;
  InputType?: string;
  Profile?: string;
  RateControlMode?: string;
  RawFormat?: string;
  SampleRate?: number;
  Spec?: string;
  VbrQuality?: string;
};
/**
 * Type definition for `AWS::MediaLive::Channel.Ac3Settings`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-ac3settings.html}
 */
export type Ac3Settings = {
  AttenuationControl?: string;
  Bitrate?: number;
  BitstreamMode?: string;
  CodingMode?: string;
  Dialnorm?: number;
  DrcProfile?: string;
  LfeFilter?: string;
  MetadataControl?: string;
};
/**
 * Type definition for `AWS::MediaLive::Channel.AdditionalDestinations`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-additionaldestinations.html}
 */
export type AdditionalDestinations = {
  Destination?: OutputLocationRef;
};
/**
 * Type definition for `AWS::MediaLive::Channel.AncillarySourceSettings`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-ancillarysourcesettings.html}
 */
export type AncillarySourceSettings = {
  SourceAncillaryChannelNumber?: number;
};
/**
 * Type definition for `AWS::MediaLive::Channel.AnywhereSettings`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-anywheresettings.html}
 */
export type AnywhereSettings = {
  ChannelPlacementGroupId?: string;
  ClusterId?: string;
};
/**
 * Type definition for `AWS::MediaLive::Channel.ArchiveCdnSettings`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-archivecdnsettings.html}
 */
export type ArchiveCdnSettings = {
  ArchiveS3Settings?: ArchiveS3Settings;
};
/**
 * Type definition for `AWS::MediaLive::Channel.ArchiveContainerSettings`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-archivecontainersettings.html}
 */
export type ArchiveContainerSettings = {
  M2tsSettings?: M2tsSettings;
  RawSettings?: RawSettings;
};
/**
 * Type definition for `AWS::MediaLive::Channel.ArchiveGroupSettings`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-archivegroupsettings.html}
 */
export type ArchiveGroupSettings = {
  ArchiveCdnSettings?: ArchiveCdnSettings;
  Destination?: OutputLocationRef;
  RolloverInterval?: number;
};
/**
 * Type definition for `AWS::MediaLive::Channel.ArchiveOutputSettings`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-archiveoutputsettings.html}
 */
export type ArchiveOutputSettings = {
  ContainerSettings?: ArchiveContainerSettings;
  Extension?: string;
  NameModifier?: string;
};
/**
 * Type definition for `AWS::MediaLive::Channel.ArchiveS3Settings`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-archives3settings.html}
 */
export type ArchiveS3Settings = {
  CannedAcl?: string;
};
/**
 * Type definition for `AWS::MediaLive::Channel.AribDestinationSettings`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-aribdestinationsettings.html}
 */
export type AribDestinationSettings = Record<string, any>;
/**
 * Type definition for `AWS::MediaLive::Channel.AribSourceSettings`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-aribsourcesettings.html}
 */
export type AribSourceSettings = Record<string, any>;
/**
 * Type definition for `AWS::MediaLive::Channel.AudioChannelMapping`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-audiochannelmapping.html}
 */
export type AudioChannelMapping = {
  InputChannelLevels?: InputChannelLevel[];
  OutputChannel?: number;
};
/**
 * Type definition for `AWS::MediaLive::Channel.AudioCodecSettings`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-audiocodecsettings.html}
 */
export type AudioCodecSettings = {
  AacSettings?: AacSettings;
  Ac3Settings?: Ac3Settings;
  Eac3AtmosSettings?: Eac3AtmosSettings;
  Eac3Settings?: Eac3Settings;
  Mp2Settings?: Mp2Settings;
  PassThroughSettings?: PassThroughSettings;
  WavSettings?: WavSettings;
};
/**
 * Type definition for `AWS::MediaLive::Channel.AudioDescription`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-audiodescription.html}
 */
export type AudioDescription = {
  AudioDashRoles?: string[];
  AudioNormalizationSettings?: AudioNormalizationSettings;
  AudioSelectorName?: string;
  AudioType?: string;
  AudioTypeControl?: string;
  AudioWatermarkingSettings?: AudioWatermarkSettings;
  CodecSettings?: AudioCodecSettings;
  DvbDashAccessibility?: string;
  LanguageCode?: string;
  LanguageCodeControl?: string;
  Name?: string;
  RemixSettings?: RemixSettings;
  StreamName?: string;
};
/**
 * Type definition for `AWS::MediaLive::Channel.AudioDolbyEDecode`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-audiodolbyedecode.html}
 */
export type AudioDolbyEDecode = {
  ProgramSelection?: string;
};
/**
 * Type definition for `AWS::MediaLive::Channel.AudioHlsRenditionSelection`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-audiohlsrenditionselection.html}
 */
export type AudioHlsRenditionSelection = {
  GroupId?: string;
  Name?: string;
};
/**
 * Type definition for `AWS::MediaLive::Channel.AudioLanguageSelection`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-audiolanguageselection.html}
 */
export type AudioLanguageSelection = {
  LanguageCode?: string;
  LanguageSelectionPolicy?: string;
};
/**
 * Type definition for `AWS::MediaLive::Channel.AudioNormalizationSettings`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-audionormalizationsettings.html}
 */
export type AudioNormalizationSettings = {
  Algorithm?: string;
  AlgorithmControl?: string;
  TargetLkfs?: number;
};
/**
 * Type definition for `AWS::MediaLive::Channel.AudioOnlyHlsSettings`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-audioonlyhlssettings.html}
 */
export type AudioOnlyHlsSettings = {
  AudioGroupId?: string;
  AudioOnlyImage?: InputLocation;
  AudioTrackType?: string;
  SegmentType?: string;
};
/**
 * Type definition for `AWS::MediaLive::Channel.AudioPidSelection`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-audiopidselection.html}
 */
export type AudioPidSelection = {
  Pid?: number;
};
/**
 * Type definition for `AWS::MediaLive::Channel.AudioSelector`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-audioselector.html}
 */
export type AudioSelector = {
  Name?: string;
  SelectorSettings?: AudioSelectorSettings;
};
/**
 * Type definition for `AWS::MediaLive::Channel.AudioSelectorSettings`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-audioselectorsettings.html}
 */
export type AudioSelectorSettings = {
  AudioHlsRenditionSelection?: AudioHlsRenditionSelection;
  AudioLanguageSelection?: AudioLanguageSelection;
  AudioPidSelection?: AudioPidSelection;
  AudioTrackSelection?: AudioTrackSelection;
};
/**
 * Type definition for `AWS::MediaLive::Channel.AudioSilenceFailoverSettings`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-audiosilencefailoversettings.html}
 */
export type AudioSilenceFailoverSettings = {
  AudioSelectorName?: string;
  AudioSilenceThresholdMsec?: number;
};
/**
 * Type definition for `AWS::MediaLive::Channel.AudioTrack`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-audiotrack.html}
 */
export type AudioTrack = {
  Track?: number;
};
/**
 * Type definition for `AWS::MediaLive::Channel.AudioTrackSelection`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-audiotrackselection.html}
 */
export type AudioTrackSelection = {
  DolbyEDecode?: AudioDolbyEDecode;
  Tracks?: AudioTrack[];
};
/**
 * Type definition for `AWS::MediaLive::Channel.AudioWatermarkSettings`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-audiowatermarksettings.html}
 */
export type AudioWatermarkSettings = {
  NielsenWatermarksSettings?: NielsenWatermarksSettings;
};
/**
 * Type definition for `AWS::MediaLive::Channel.AutomaticInputFailoverSettings`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-automaticinputfailoversettings.html}
 */
export type AutomaticInputFailoverSettings = {
  ErrorClearTimeMsec?: number;
  FailoverConditions?: FailoverCondition[];
  InputPreference?: string;
  SecondaryInputId?: string;
};
/**
 * Type definition for `AWS::MediaLive::Channel.Av1ColorSpaceSettings`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-av1colorspacesettings.html}
 */
export type Av1ColorSpaceSettings = {
  ColorSpacePassthroughSettings?: ColorSpacePassthroughSettings;
  Hdr10Settings?: Hdr10Settings;
  Rec601Settings?: Rec601Settings;
  Rec709Settings?: Rec709Settings;
};
/**
 * Type definition for `AWS::MediaLive::Channel.Av1Settings`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-av1settings.html}
 */
export type Av1Settings = {
  AfdSignaling?: string;
  Bitrate?: number;
  BufSize?: number;
  ColorSpaceSettings?: Av1ColorSpaceSettings;
  FixedAfd?: string;
  FramerateDenominator?: number;
  FramerateNumerator?: number;
  GopSize?: number;
  GopSizeUnits?: string;
  Level?: string;
  LookAheadRateControl?: string;
  MaxBitrate?: number;
  MinIInterval?: number;
  ParDenominator?: number;
  ParNumerator?: number;
  QvbrQualityLevel?: number;
  RateControlMode?: string;
  SceneChangeDetect?: string;
  TimecodeBurninSettings?: TimecodeBurninSettings;
};
/**
 * Type definition for `AWS::MediaLive::Channel.AvailBlanking`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-availblanking.html}
 */
export type AvailBlanking = {
  AvailBlankingImage?: InputLocation;
  State?: string;
};
/**
 * Type definition for `AWS::MediaLive::Channel.AvailConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-availconfiguration.html}
 */
export type AvailConfiguration = {
  AvailSettings?: AvailSettings;
  Scte35SegmentationScope?: string;
};
/**
 * Type definition for `AWS::MediaLive::Channel.AvailSettings`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-availsettings.html}
 */
export type AvailSettings = {
  Esam?: Esam;
  Scte35SpliceInsert?: Scte35SpliceInsert;
  Scte35TimeSignalApos?: Scte35TimeSignalApos;
};
/**
 * Type definition for `AWS::MediaLive::Channel.BandwidthReductionFilterSettings`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-bandwidthreductionfiltersettings.html}
 */
export type BandwidthReductionFilterSettings = {
  PostFilterSharpening?: string;
  Strength?: string;
};
/**
 * Type definition for `AWS::MediaLive::Channel.BlackoutSlate`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-blackoutslate.html}
 */
export type BlackoutSlate = {
  BlackoutSlateImage?: InputLocation;
  NetworkEndBlackout?: string;
  NetworkEndBlackoutImage?: InputLocation;
  NetworkId?: string;
  State?: string;
};
/**
 * Type definition for `AWS::MediaLive::Channel.BurnInDestinationSettings`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-burnindestinationsettings.html}
 */
export type BurnInDestinationSettings = {
  Alignment?: string;
  BackgroundColor?: string;
  BackgroundOpacity?: number;
  Font?: InputLocation;
  FontColor?: string;
  FontOpacity?: number;
  FontResolution?: number;
  FontSize?: string;
  OutlineColor?: string;
  OutlineSize?: number;
  ShadowColor?: string;
  ShadowOpacity?: number;
  ShadowXOffset?: number;
  ShadowYOffset?: number;
  SubtitleRows?: string;
  TeletextGridControl?: string;
  XPosition?: number;
  YPosition?: number;
};
/**
 * Type definition for `AWS::MediaLive::Channel.CaptionDescription`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-captiondescription.html}
 */
export type CaptionDescription = {
  Accessibility?: string;
  CaptionDashRoles?: string[];
  CaptionSelectorName?: string;
  DestinationSettings?: CaptionDestinationSettings;
  DvbDashAccessibility?: string;
  LanguageCode?: string;
  LanguageDescription?: string;
  Name?: string;
};
/**
 * Type definition for `AWS::MediaLive::Channel.CaptionDestinationSettings`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-captiondestinationsettings.html}
 */
export type CaptionDestinationSettings = {
  AribDestinationSettings?: AribDestinationSettings;
  BurnInDestinationSettings?: BurnInDestinationSettings;
  DvbSubDestinationSettings?: DvbSubDestinationSettings;
  EbuTtDDestinationSettings?: EbuTtDDestinationSettings;
  EmbeddedDestinationSettings?: EmbeddedDestinationSettings;
  EmbeddedPlusScte20DestinationSettings?: EmbeddedPlusScte20DestinationSettings;
  RtmpCaptionInfoDestinationSettings?: RtmpCaptionInfoDestinationSettings;
  Scte20PlusEmbeddedDestinationSettings?: Scte20PlusEmbeddedDestinationSettings;
  Scte27DestinationSettings?: Scte27DestinationSettings;
  SmpteTtDestinationSettings?: SmpteTtDestinationSettings;
  TeletextDestinationSettings?: TeletextDestinationSettings;
  TtmlDestinationSettings?: TtmlDestinationSettings;
  WebvttDestinationSettings?: WebvttDestinationSettings;
};
/**
 * Type definition for `AWS::MediaLive::Channel.CaptionLanguageMapping`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-captionlanguagemapping.html}
 */
export type CaptionLanguageMapping = {
  CaptionChannel?: number;
  LanguageCode?: string;
  LanguageDescription?: string;
};
/**
 * Type definition for `AWS::MediaLive::Channel.CaptionRectangle`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-captionrectangle.html}
 */
export type CaptionRectangle = {
  Height?: number;
  LeftOffset?: number;
  TopOffset?: number;
  Width?: number;
};
/**
 * Type definition for `AWS::MediaLive::Channel.CaptionSelector`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-captionselector.html}
 */
export type CaptionSelector = {
  LanguageCode?: string;
  Name?: string;
  SelectorSettings?: CaptionSelectorSettings;
};
/**
 * Type definition for `AWS::MediaLive::Channel.CaptionSelectorSettings`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-captionselectorsettings.html}
 */
export type CaptionSelectorSettings = {
  AncillarySourceSettings?: AncillarySourceSettings;
  AribSourceSettings?: AribSourceSettings;
  DvbSubSourceSettings?: DvbSubSourceSettings;
  EmbeddedSourceSettings?: EmbeddedSourceSettings;
  Scte20SourceSettings?: Scte20SourceSettings;
  Scte27SourceSettings?: Scte27SourceSettings;
  TeletextSourceSettings?: TeletextSourceSettings;
};
/**
 * Type definition for `AWS::MediaLive::Channel.CdiInputSpecification`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-cdiinputspecification.html}
 */
export type CdiInputSpecification = {
  Resolution?: string;
};
/**
 * Type definition for `AWS::MediaLive::Channel.ChannelEngineVersionRequest`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-channelengineversionrequest.html}
 */
export type ChannelEngineVersionRequest = {
  Version?: string;
};
/**
 * Type definition for `AWS::MediaLive::Channel.CmafIngestCaptionLanguageMapping`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-cmafingestcaptionlanguagemapping.html}
 */
export type CmafIngestCaptionLanguageMapping = {
  CaptionChannel?: number;
  LanguageCode?: string;
};
/**
 * Type definition for `AWS::MediaLive::Channel.CmafIngestGroupSettings`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-cmafingestgroupsettings.html}
 */
export type CmafIngestGroupSettings = {
  AdditionalDestinations?: AdditionalDestinations[];
  CaptionLanguageMappings?: CmafIngestCaptionLanguageMapping[];
  Destination?: OutputLocationRef;
  Id3Behavior?: string;
  Id3NameModifier?: string;
  KlvBehavior?: string;
  KlvNameModifier?: string;
  NielsenId3Behavior?: string;
  NielsenId3NameModifier?: string;
  Scte35NameModifier?: string;
  Scte35Type?: string;
  SegmentLength?: number;
  SegmentLengthUnits?: string;
  SendDelayMs?: number;
  TimedMetadataId3Frame?: string;
  TimedMetadataId3Period?: number;
  TimedMetadataPassthrough?: string;
};
/**
 * Type definition for `AWS::MediaLive::Channel.CmafIngestOutputSettings`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-cmafingestoutputsettings.html}
 */
export type CmafIngestOutputSettings = {
  NameModifier?: string;
};
/**
 * Type definition for `AWS::MediaLive::Channel.ColorCorrection`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-colorcorrection.html}
 */
export type ColorCorrection = {
  InputColorSpace?: string;
  OutputColorSpace?: string;
  Uri?: string;
};
/**
 * Type definition for `AWS::MediaLive::Channel.ColorCorrectionSettings`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-colorcorrectionsettings.html}
 */
export type ColorCorrectionSettings = {
  GlobalColorCorrections?: ColorCorrection[];
};
/**
 * Type definition for `AWS::MediaLive::Channel.ColorSpacePassthroughSettings`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-colorspacepassthroughsettings.html}
 */
export type ColorSpacePassthroughSettings = Record<string, any>;
/**
 * Type definition for `AWS::MediaLive::Channel.DolbyVision81Settings`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-dolbyvision81settings.html}
 */
export type DolbyVision81Settings = Record<string, any>;
/**
 * Type definition for `AWS::MediaLive::Channel.DvbNitSettings`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-dvbnitsettings.html}
 */
export type DvbNitSettings = {
  NetworkId?: number;
  NetworkName?: string;
  RepInterval?: number;
};
/**
 * Type definition for `AWS::MediaLive::Channel.DvbSdtSettings`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-dvbsdtsettings.html}
 */
export type DvbSdtSettings = {
  OutputSdt?: string;
  RepInterval?: number;
  ServiceName?: string;
  ServiceProviderName?: string;
};
/**
 * Type definition for `AWS::MediaLive::Channel.DvbSubDestinationSettings`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-dvbsubdestinationsettings.html}
 */
export type DvbSubDestinationSettings = {
  Alignment?: string;
  BackgroundColor?: string;
  BackgroundOpacity?: number;
  Font?: InputLocation;
  FontColor?: string;
  FontOpacity?: number;
  FontResolution?: number;
  FontSize?: string;
  OutlineColor?: string;
  OutlineSize?: number;
  ShadowColor?: string;
  ShadowOpacity?: number;
  ShadowXOffset?: number;
  ShadowYOffset?: number;
  SubtitleRows?: string;
  TeletextGridControl?: string;
  XPosition?: number;
  YPosition?: number;
};
/**
 * Type definition for `AWS::MediaLive::Channel.DvbSubSourceSettings`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-dvbsubsourcesettings.html}
 */
export type DvbSubSourceSettings = {
  OcrLanguage?: string;
  Pid?: number;
};
/**
 * Type definition for `AWS::MediaLive::Channel.DvbTdtSettings`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-dvbtdtsettings.html}
 */
export type DvbTdtSettings = {
  RepInterval?: number;
};
/**
 * Type definition for `AWS::MediaLive::Channel.Eac3AtmosSettings`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-eac3atmossettings.html}
 */
export type Eac3AtmosSettings = {
  Bitrate?: number;
  CodingMode?: string;
  Dialnorm?: number;
  DrcLine?: string;
  DrcRf?: string;
  HeightTrim?: number;
  SurroundTrim?: number;
};
/**
 * Type definition for `AWS::MediaLive::Channel.Eac3Settings`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-eac3settings.html}
 */
export type Eac3Settings = {
  AttenuationControl?: string;
  Bitrate?: number;
  BitstreamMode?: string;
  CodingMode?: string;
  DcFilter?: string;
  Dialnorm?: number;
  DrcLine?: string;
  DrcRf?: string;
  LfeControl?: string;
  LfeFilter?: string;
  LoRoCenterMixLevel?: number;
  LoRoSurroundMixLevel?: number;
  LtRtCenterMixLevel?: number;
  LtRtSurroundMixLevel?: number;
  MetadataControl?: string;
  PassthroughControl?: string;
  PhaseControl?: string;
  StereoDownmix?: string;
  SurroundExMode?: string;
  SurroundMode?: string;
};
/**
 * Type definition for `AWS::MediaLive::Channel.EbuTtDDestinationSettings`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-ebuttddestinationsettings.html}
 */
export type EbuTtDDestinationSettings = {
  CopyrightHolder?: string;
  DefaultFontSize?: number;
  DefaultLineHeight?: number;
  FillLineGap?: string;
  FontFamily?: string;
  StyleControl?: string;
};
/**
 * Type definition for `AWS::MediaLive::Channel.EmbeddedDestinationSettings`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-embeddeddestinationsettings.html}
 */
export type EmbeddedDestinationSettings = Record<string, any>;
/**
 * Type definition for `AWS::MediaLive::Channel.EmbeddedPlusScte20DestinationSettings`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-embeddedplusscte20destinationsettings.html}
 */
export type EmbeddedPlusScte20DestinationSettings = Record<string, any>;
/**
 * Type definition for `AWS::MediaLive::Channel.EmbeddedSourceSettings`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-embeddedsourcesettings.html}
 */
export type EmbeddedSourceSettings = {
  Convert608To708?: string;
  Scte20Detection?: string;
  Source608ChannelNumber?: number;
  Source608TrackNumber?: number;
};
/**
 * Type definition for `AWS::MediaLive::Channel.EncoderSettings`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-encodersettings.html}
 */
export type EncoderSettings = {
  AudioDescriptions?: AudioDescription[];
  AvailBlanking?: AvailBlanking;
  AvailConfiguration?: AvailConfiguration;
  BlackoutSlate?: BlackoutSlate;
  CaptionDescriptions?: CaptionDescription[];
  ColorCorrectionSettings?: ColorCorrectionSettings;
  FeatureActivations?: FeatureActivations;
  GlobalConfiguration?: GlobalConfiguration;
  MotionGraphicsConfiguration?: MotionGraphicsConfiguration;
  NielsenConfiguration?: NielsenConfiguration;
  OutputGroups?: OutputGroup[];
  ThumbnailConfiguration?: ThumbnailConfiguration;
  TimecodeConfig?: TimecodeConfig;
  VideoDescriptions?: VideoDescription[];
};
/**
 * Type definition for `AWS::MediaLive::Channel.EpochLockingSettings`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-epochlockingsettings.html}
 */
export type EpochLockingSettings = {
  CustomEpoch?: string;
  JamSyncTime?: string;
};
/**
 * Type definition for `AWS::MediaLive::Channel.Esam`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-esam.html}
 */
export type Esam = {
  AcquisitionPointId?: string;
  AdAvailOffset?: number;
  PasswordParam?: string;
  PoisEndpoint?: string;
  Username?: string;
  ZoneIdentity?: string;
};
/**
 * Type definition for `AWS::MediaLive::Channel.FailoverCondition`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-failovercondition.html}
 */
export type FailoverCondition = {
  FailoverConditionSettings?: FailoverConditionSettings;
};
/**
 * Type definition for `AWS::MediaLive::Channel.FailoverConditionSettings`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-failoverconditionsettings.html}
 */
export type FailoverConditionSettings = {
  AudioSilenceSettings?: AudioSilenceFailoverSettings;
  InputLossSettings?: InputLossFailoverSettings;
  VideoBlackSettings?: VideoBlackFailoverSettings;
};
/**
 * Type definition for `AWS::MediaLive::Channel.FeatureActivations`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-featureactivations.html}
 */
export type FeatureActivations = {
  InputPrepareScheduleActions?: string;
  OutputStaticImageOverlayScheduleActions?: string;
};
/**
 * Type definition for `AWS::MediaLive::Channel.FecOutputSettings`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-fecoutputsettings.html}
 */
export type FecOutputSettings = {
  ColumnDepth?: number;
  IncludeFec?: string;
  RowLength?: number;
};
/**
 * Type definition for `AWS::MediaLive::Channel.Fmp4HlsSettings`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-fmp4hlssettings.html}
 */
export type Fmp4HlsSettings = {
  AudioRenditionSets?: string;
  NielsenId3Behavior?: string;
  TimedMetadataBehavior?: string;
};
/**
 * Type definition for `AWS::MediaLive::Channel.FrameCaptureCdnSettings`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-framecapturecdnsettings.html}
 */
export type FrameCaptureCdnSettings = {
  FrameCaptureS3Settings?: FrameCaptureS3Settings;
};
/**
 * Type definition for `AWS::MediaLive::Channel.FrameCaptureGroupSettings`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-framecapturegroupsettings.html}
 */
export type FrameCaptureGroupSettings = {
  Destination?: OutputLocationRef;
  FrameCaptureCdnSettings?: FrameCaptureCdnSettings;
};
/**
 * Type definition for `AWS::MediaLive::Channel.FrameCaptureHlsSettings`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-framecapturehlssettings.html}
 */
export type FrameCaptureHlsSettings = Record<string, any>;
/**
 * Type definition for `AWS::MediaLive::Channel.FrameCaptureOutputSettings`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-framecaptureoutputsettings.html}
 */
export type FrameCaptureOutputSettings = {
  NameModifier?: string;
};
/**
 * Type definition for `AWS::MediaLive::Channel.FrameCaptureS3Settings`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-framecaptures3settings.html}
 */
export type FrameCaptureS3Settings = {
  CannedAcl?: string;
};
/**
 * Type definition for `AWS::MediaLive::Channel.FrameCaptureSettings`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-framecapturesettings.html}
 */
export type FrameCaptureSettings = {
  CaptureInterval?: number;
  CaptureIntervalUnits?: string;
  TimecodeBurninSettings?: TimecodeBurninSettings;
};
/**
 * Type definition for `AWS::MediaLive::Channel.GlobalConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-globalconfiguration.html}
 */
export type GlobalConfiguration = {
  InitialAudioGain?: number;
  InputEndAction?: string;
  InputLossBehavior?: InputLossBehavior;
  OutputLockingMode?: string;
  OutputLockingSettings?: OutputLockingSettings;
  OutputTimingSource?: string;
  SupportLowFramerateInputs?: string;
};
/**
 * Type definition for `AWS::MediaLive::Channel.H264ColorSpaceSettings`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-h264colorspacesettings.html}
 */
export type H264ColorSpaceSettings = {
  ColorSpacePassthroughSettings?: ColorSpacePassthroughSettings;
  Rec601Settings?: Rec601Settings;
  Rec709Settings?: Rec709Settings;
};
/**
 * Type definition for `AWS::MediaLive::Channel.H264FilterSettings`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-h264filtersettings.html}
 */
export type H264FilterSettings = {
  BandwidthReductionFilterSettings?: BandwidthReductionFilterSettings;
  TemporalFilterSettings?: TemporalFilterSettings;
};
/**
 * Type definition for `AWS::MediaLive::Channel.H264Settings`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-h264settings.html}
 */
export type H264Settings = {
  AdaptiveQuantization?: string;
  AfdSignaling?: string;
  Bitrate?: number;
  BufFillPct?: number;
  BufSize?: number;
  ColorMetadata?: string;
  ColorSpaceSettings?: H264ColorSpaceSettings;
  EntropyEncoding?: string;
  FilterSettings?: H264FilterSettings;
  FixedAfd?: string;
  FlickerAq?: string;
  ForceFieldPictures?: string;
  FramerateControl?: string;
  FramerateDenominator?: number;
  FramerateNumerator?: number;
  GopBReference?: string;
  GopClosedCadence?: number;
  GopNumBFrames?: number;
  GopSize?: number;
  GopSizeUnits?: string;
  Level?: string;
  LookAheadRateControl?: string;
  MaxBitrate?: number;
  MinIInterval?: number;
  MinQp?: number;
  NumRefFrames?: number;
  ParControl?: string;
  ParDenominator?: number;
  ParNumerator?: number;
  Profile?: string;
  QualityLevel?: string;
  QvbrQualityLevel?: number;
  RateControlMode?: string;
  ScanType?: string;
  SceneChangeDetect?: string;
  Slices?: number;
  Softness?: number;
  SpatialAq?: string;
  SubgopLength?: string;
  Syntax?: string;
  TemporalAq?: string;
  TimecodeBurninSettings?: TimecodeBurninSettings;
  TimecodeInsertion?: string;
};
/**
 * Type definition for `AWS::MediaLive::Channel.H265ColorSpaceSettings`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-h265colorspacesettings.html}
 */
export type H265ColorSpaceSettings = {
  ColorSpacePassthroughSettings?: ColorSpacePassthroughSettings;
  DolbyVision81Settings?: DolbyVision81Settings;
  Hdr10Settings?: Hdr10Settings;
  Rec601Settings?: Rec601Settings;
  Rec709Settings?: Rec709Settings;
};
/**
 * Type definition for `AWS::MediaLive::Channel.H265FilterSettings`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-h265filtersettings.html}
 */
export type H265FilterSettings = {
  BandwidthReductionFilterSettings?: BandwidthReductionFilterSettings;
  TemporalFilterSettings?: TemporalFilterSettings;
};
/**
 * Type definition for `AWS::MediaLive::Channel.H265Settings`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-h265settings.html}
 */
export type H265Settings = {
  AdaptiveQuantization?: string;
  AfdSignaling?: string;
  AlternativeTransferFunction?: string;
  Bitrate?: number;
  BufSize?: number;
  ColorMetadata?: string;
  ColorSpaceSettings?: H265ColorSpaceSettings;
  Deblocking?: string;
  FilterSettings?: H265FilterSettings;
  FixedAfd?: string;
  FlickerAq?: string;
  FramerateDenominator?: number;
  FramerateNumerator?: number;
  GopClosedCadence?: number;
  GopSize?: number;
  GopSizeUnits?: string;
  Level?: string;
  LookAheadRateControl?: string;
  MaxBitrate?: number;
  MinIInterval?: number;
  MinQp?: number;
  MvOverPictureBoundaries?: string;
  MvTemporalPredictor?: string;
  ParDenominator?: number;
  ParNumerator?: number;
  Profile?: string;
  QvbrQualityLevel?: number;
  RateControlMode?: string;
  ScanType?: string;
  SceneChangeDetect?: string;
  Slices?: number;
  Tier?: string;
  TileHeight?: number;
  TilePadding?: string;
  TileWidth?: number;
  TimecodeBurninSettings?: TimecodeBurninSettings;
  TimecodeInsertion?: string;
  TreeblockSize?: string;
};
/**
 * Type definition for `AWS::MediaLive::Channel.Hdr10Settings`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-hdr10settings.html}
 */
export type Hdr10Settings = {
  MaxCll?: number;
  MaxFall?: number;
};
/**
 * Type definition for `AWS::MediaLive::Channel.HlsAkamaiSettings`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-hlsakamaisettings.html}
 */
export type HlsAkamaiSettings = {
  ConnectionRetryInterval?: number;
  FilecacheDuration?: number;
  HttpTransferMode?: string;
  NumRetries?: number;
  RestartDelay?: number;
  Salt?: string;
  Token?: string;
};
/**
 * Type definition for `AWS::MediaLive::Channel.HlsBasicPutSettings`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-hlsbasicputsettings.html}
 */
export type HlsBasicPutSettings = {
  ConnectionRetryInterval?: number;
  FilecacheDuration?: number;
  NumRetries?: number;
  RestartDelay?: number;
};
/**
 * Type definition for `AWS::MediaLive::Channel.HlsCdnSettings`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-hlscdnsettings.html}
 */
export type HlsCdnSettings = {
  HlsAkamaiSettings?: HlsAkamaiSettings;
  HlsBasicPutSettings?: HlsBasicPutSettings;
  HlsMediaStoreSettings?: HlsMediaStoreSettings;
  HlsS3Settings?: HlsS3Settings;
  HlsWebdavSettings?: HlsWebdavSettings;
};
/**
 * Type definition for `AWS::MediaLive::Channel.HlsGroupSettings`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-hlsgroupsettings.html}
 */
export type HlsGroupSettings = {
  AdMarkers?: string[];
  BaseUrlContent?: string;
  BaseUrlContent1?: string;
  BaseUrlManifest?: string;
  BaseUrlManifest1?: string;
  CaptionLanguageMappings?: CaptionLanguageMapping[];
  CaptionLanguageSetting?: string;
  ClientCache?: string;
  CodecSpecification?: string;
  ConstantIv?: string;
  Destination?: OutputLocationRef;
  DirectoryStructure?: string;
  DiscontinuityTags?: string;
  EncryptionType?: string;
  HlsCdnSettings?: HlsCdnSettings;
  HlsId3SegmentTagging?: string;
  IFrameOnlyPlaylists?: string;
  IncompleteSegmentBehavior?: string;
  IndexNSegments?: number;
  InputLossAction?: string;
  IvInManifest?: string;
  IvSource?: string;
  KeepSegments?: number;
  KeyFormat?: string;
  KeyFormatVersions?: string;
  KeyProviderSettings?: KeyProviderSettings;
  ManifestCompression?: string;
  ManifestDurationFormat?: string;
  MinSegmentLength?: number;
  Mode?: string;
  OutputSelection?: string;
  ProgramDateTime?: string;
  ProgramDateTimeClock?: string;
  ProgramDateTimePeriod?: number;
  RedundantManifest?: string;
  SegmentLength?: number;
  SegmentationMode?: string;
  SegmentsPerSubdirectory?: number;
  StreamInfResolution?: string;
  TimedMetadataId3Frame?: string;
  TimedMetadataId3Period?: number;
  TimestampDeltaMilliseconds?: number;
  TsFileMode?: string;
};
/**
 * Type definition for `AWS::MediaLive::Channel.HlsInputSettings`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-hlsinputsettings.html}
 */
export type HlsInputSettings = {
  Bandwidth?: number;
  BufferSegments?: number;
  Retries?: number;
  RetryInterval?: number;
  Scte35Source?: string;
};
/**
 * Type definition for `AWS::MediaLive::Channel.HlsMediaStoreSettings`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-hlsmediastoresettings.html}
 */
export type HlsMediaStoreSettings = {
  ConnectionRetryInterval?: number;
  FilecacheDuration?: number;
  MediaStoreStorageClass?: string;
  NumRetries?: number;
  RestartDelay?: number;
};
/**
 * Type definition for `AWS::MediaLive::Channel.HlsOutputSettings`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-hlsoutputsettings.html}
 */
export type HlsOutputSettings = {
  H265PackagingType?: string;
  HlsSettings?: HlsSettings;
  NameModifier?: string;
  SegmentModifier?: string;
};
/**
 * Type definition for `AWS::MediaLive::Channel.HlsS3Settings`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-hlss3settings.html}
 */
export type HlsS3Settings = {
  CannedAcl?: string;
};
/**
 * Type definition for `AWS::MediaLive::Channel.HlsSettings`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-hlssettings.html}
 */
export type HlsSettings = {
  AudioOnlyHlsSettings?: AudioOnlyHlsSettings;
  Fmp4HlsSettings?: Fmp4HlsSettings;
  FrameCaptureHlsSettings?: FrameCaptureHlsSettings;
  StandardHlsSettings?: StandardHlsSettings;
};
/**
 * Type definition for `AWS::MediaLive::Channel.HlsWebdavSettings`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-hlswebdavsettings.html}
 */
export type HlsWebdavSettings = {
  ConnectionRetryInterval?: number;
  FilecacheDuration?: number;
  HttpTransferMode?: string;
  NumRetries?: number;
  RestartDelay?: number;
};
/**
 * Type definition for `AWS::MediaLive::Channel.HtmlMotionGraphicsSettings`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-htmlmotiongraphicssettings.html}
 */
export type HtmlMotionGraphicsSettings = Record<string, any>;
/**
 * Type definition for `AWS::MediaLive::Channel.InputAttachment`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-inputattachment.html}
 */
export type InputAttachment = {
  AutomaticInputFailoverSettings?: AutomaticInputFailoverSettings;
  InputAttachmentName?: string;
  InputId?: string;
  InputSettings?: InputSettings;
  LogicalInterfaceNames?: string[];
};
/**
 * Type definition for `AWS::MediaLive::Channel.InputChannelLevel`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-inputchannellevel.html}
 */
export type InputChannelLevel = {
  Gain?: number;
  InputChannel?: number;
};
/**
 * Type definition for `AWS::MediaLive::Channel.InputLocation`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-inputlocation.html}
 */
export type InputLocation = {
  PasswordParam?: string;
  Uri?: string;
  Username?: string;
};
/**
 * Type definition for `AWS::MediaLive::Channel.InputLossBehavior`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-inputlossbehavior.html}
 */
export type InputLossBehavior = {
  BlackFrameMsec?: number;
  InputLossImageColor?: string;
  InputLossImageSlate?: InputLocation;
  InputLossImageType?: string;
  RepeatFrameMsec?: number;
};
/**
 * Type definition for `AWS::MediaLive::Channel.InputLossFailoverSettings`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-inputlossfailoversettings.html}
 */
export type InputLossFailoverSettings = {
  InputLossThresholdMsec?: number;
};
/**
 * Type definition for `AWS::MediaLive::Channel.InputSettings`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-inputsettings.html}
 */
export type InputSettings = {
  AudioSelectors?: AudioSelector[];
  CaptionSelectors?: CaptionSelector[];
  DeblockFilter?: string;
  DenoiseFilter?: string;
  FilterStrength?: number;
  InputFilter?: string;
  NetworkInputSettings?: NetworkInputSettings;
  Scte35Pid?: number;
  Smpte2038DataPreference?: string;
  SourceEndBehavior?: string;
  VideoSelector?: VideoSelector;
};
/**
 * Type definition for `AWS::MediaLive::Channel.InputSpecification`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-inputspecification.html}
 */
export type InputSpecification = {
  Codec?: string;
  MaximumBitrate?: string;
  Resolution?: string;
};
/**
 * Type definition for `AWS::MediaLive::Channel.KeyProviderSettings`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-keyprovidersettings.html}
 */
export type KeyProviderSettings = {
  StaticKeySettings?: StaticKeySettings;
};
/**
 * Type definition for `AWS::MediaLive::Channel.M2tsSettings`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-m2tssettings.html}
 */
export type M2tsSettings = {
  AbsentInputAudioBehavior?: string;
  Arib?: string;
  AribCaptionsPid?: string;
  AribCaptionsPidControl?: string;
  AudioBufferModel?: string;
  AudioFramesPerPes?: number;
  AudioPids?: string;
  AudioStreamType?: string;
  Bitrate?: number;
  BufferModel?: string;
  CcDescriptor?: string;
  DvbNitSettings?: DvbNitSettings;
  DvbSdtSettings?: DvbSdtSettings;
  DvbSubPids?: string;
  DvbTdtSettings?: DvbTdtSettings;
  DvbTeletextPid?: string;
  Ebif?: string;
  EbpAudioInterval?: string;
  EbpLookaheadMs?: number;
  EbpPlacement?: string;
  EcmPid?: string;
  EsRateInPes?: string;
  EtvPlatformPid?: string;
  EtvSignalPid?: string;
  FragmentTime?: number;
  Klv?: string;
  KlvDataPids?: string;
  NielsenId3Behavior?: string;
  NullPacketBitrate?: number;
  PatInterval?: number;
  PcrControl?: string;
  PcrPeriod?: number;
  PcrPid?: string;
  PmtInterval?: number;
  PmtPid?: string;
  ProgramNum?: number;
  RateMode?: string;
  Scte27Pids?: string;
  Scte35Control?: string;
  Scte35Pid?: string;
  Scte35PrerollPullupMilliseconds?: number;
  SegmentationMarkers?: string;
  SegmentationStyle?: string;
  SegmentationTime?: number;
  TimedMetadataBehavior?: string;
  TimedMetadataPid?: string;
  TransportStreamId?: number;
  VideoPid?: string;
};
/**
 * Type definition for `AWS::MediaLive::Channel.M3u8Settings`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-m3u8settings.html}
 */
export type M3u8Settings = {
  AudioFramesPerPes?: number;
  AudioPids?: string;
  EcmPid?: string;
  KlvBehavior?: string;
  KlvDataPids?: string;
  NielsenId3Behavior?: string;
  PatInterval?: number;
  PcrControl?: string;
  PcrPeriod?: number;
  PcrPid?: string;
  PmtInterval?: number;
  PmtPid?: string;
  ProgramNum?: number;
  Scte35Behavior?: string;
  Scte35Pid?: string;
  TimedMetadataBehavior?: string;
  TimedMetadataPid?: string;
  TransportStreamId?: number;
  VideoPid?: string;
};
/**
 * Type definition for `AWS::MediaLive::Channel.MaintenanceCreateSettings`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-maintenancecreatesettings.html}
 */
export type MaintenanceCreateSettings = {
  MaintenanceDay?: string;
  MaintenanceStartTime?: string;
};
/**
 * Type definition for `AWS::MediaLive::Channel.MediaPackageGroupSettings`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-mediapackagegroupsettings.html}
 */
export type MediaPackageGroupSettings = {
  Destination?: OutputLocationRef;
  MediapackageV2GroupSettings?: MediaPackageV2GroupSettings;
};
/**
 * Type definition for `AWS::MediaLive::Channel.MediaPackageOutputDestinationSettings`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-mediapackageoutputdestinationsettings.html}
 */
export type MediaPackageOutputDestinationSettings = {
  ChannelGroup?: string;
  ChannelId?: string;
  ChannelName?: string;
};
/**
 * Type definition for `AWS::MediaLive::Channel.MediaPackageOutputSettings`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-mediapackageoutputsettings.html}
 */
export type MediaPackageOutputSettings = {
  MediaPackageV2DestinationSettings?: MediaPackageV2DestinationSettings;
};
/**
 * Type definition for `AWS::MediaLive::Channel.MediaPackageV2DestinationSettings`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-mediapackagev2destinationsettings.html}
 */
export type MediaPackageV2DestinationSettings = {
  AudioGroupId?: string;
  AudioRenditionSets?: string;
  HlsAutoSelect?: string;
  HlsDefault?: string;
};
/**
 * Type definition for `AWS::MediaLive::Channel.MediaPackageV2GroupSettings`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-mediapackagev2groupsettings.html}
 */
export type MediaPackageV2GroupSettings = {
  CaptionLanguageMappings?: CaptionLanguageMapping[];
};
/**
 * Type definition for `AWS::MediaLive::Channel.MotionGraphicsConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-motiongraphicsconfiguration.html}
 */
export type MotionGraphicsConfiguration = {
  MotionGraphicsInsertion?: string;
  MotionGraphicsSettings?: MotionGraphicsSettings;
};
/**
 * Type definition for `AWS::MediaLive::Channel.MotionGraphicsSettings`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-motiongraphicssettings.html}
 */
export type MotionGraphicsSettings = {
  HtmlMotionGraphicsSettings?: HtmlMotionGraphicsSettings;
};
/**
 * Type definition for `AWS::MediaLive::Channel.Mp2Settings`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-mp2settings.html}
 */
export type Mp2Settings = {
  Bitrate?: number;
  CodingMode?: string;
  SampleRate?: number;
};
/**
 * Type definition for `AWS::MediaLive::Channel.Mpeg2FilterSettings`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-mpeg2filtersettings.html}
 */
export type Mpeg2FilterSettings = {
  TemporalFilterSettings?: TemporalFilterSettings;
};
/**
 * Type definition for `AWS::MediaLive::Channel.Mpeg2Settings`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-mpeg2settings.html}
 */
export type Mpeg2Settings = {
  AdaptiveQuantization?: string;
  AfdSignaling?: string;
  ColorMetadata?: string;
  ColorSpace?: string;
  DisplayAspectRatio?: string;
  FilterSettings?: Mpeg2FilterSettings;
  FixedAfd?: string;
  FramerateDenominator?: number;
  FramerateNumerator?: number;
  GopClosedCadence?: number;
  GopNumBFrames?: number;
  GopSize?: number;
  GopSizeUnits?: string;
  ScanType?: string;
  SubgopLength?: string;
  TimecodeBurninSettings?: TimecodeBurninSettings;
  TimecodeInsertion?: string;
};
/**
 * Type definition for `AWS::MediaLive::Channel.MsSmoothGroupSettings`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-mssmoothgroupsettings.html}
 */
export type MsSmoothGroupSettings = {
  AcquisitionPointId?: string;
  AudioOnlyTimecodeControl?: string;
  CertificateMode?: string;
  ConnectionRetryInterval?: number;
  Destination?: OutputLocationRef;
  EventId?: string;
  EventIdMode?: string;
  EventStopBehavior?: string;
  FilecacheDuration?: number;
  FragmentLength?: number;
  InputLossAction?: string;
  NumRetries?: number;
  RestartDelay?: number;
  SegmentationMode?: string;
  SendDelayMs?: number;
  SparseTrackType?: string;
  StreamManifestBehavior?: string;
  TimestampOffset?: string;
  TimestampOffsetMode?: string;
};
/**
 * Type definition for `AWS::MediaLive::Channel.MsSmoothOutputSettings`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-mssmoothoutputsettings.html}
 */
export type MsSmoothOutputSettings = {
  H265PackagingType?: string;
  NameModifier?: string;
};
/**
 * Type definition for `AWS::MediaLive::Channel.MulticastInputSettings`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-multicastinputsettings.html}
 */
export type MulticastInputSettings = {
  SourceIpAddress?: string;
};
/**
 * Type definition for `AWS::MediaLive::Channel.MultiplexContainerSettings`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-multiplexcontainersettings.html}
 */
export type MultiplexContainerSettings = {
  MultiplexM2tsSettings?: MultiplexM2tsSettings;
};
/**
 * Type definition for `AWS::MediaLive::Channel.MultiplexGroupSettings`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-multiplexgroupsettings.html}
 */
export type MultiplexGroupSettings = Record<string, any>;
/**
 * Type definition for `AWS::MediaLive::Channel.MultiplexM2tsSettings`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-multiplexm2tssettings.html}
 */
export type MultiplexM2tsSettings = {
  AbsentInputAudioBehavior?: string;
  Arib?: string;
  AudioBufferModel?: string;
  AudioFramesPerPes?: number;
  AudioStreamType?: string;
  CcDescriptor?: string;
  Ebif?: string;
  EsRateInPes?: string;
  Klv?: string;
  NielsenId3Behavior?: string;
  PcrControl?: string;
  PcrPeriod?: number;
  Scte35Control?: string;
  Scte35PrerollPullupMilliseconds?: number;
};
/**
 * Type definition for `AWS::MediaLive::Channel.MultiplexOutputSettings`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-multiplexoutputsettings.html}
 */
export type MultiplexOutputSettings = {
  ContainerSettings?: MultiplexContainerSettings;
  Destination?: OutputLocationRef;
};
/**
 * Type definition for `AWS::MediaLive::Channel.MultiplexProgramChannelDestinationSettings`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-multiplexprogramchanneldestinationsettings.html}
 */
export type MultiplexProgramChannelDestinationSettings = {
  MultiplexId?: string;
  ProgramName?: string;
};
/**
 * Type definition for `AWS::MediaLive::Channel.NetworkInputSettings`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-networkinputsettings.html}
 */
export type NetworkInputSettings = {
  HlsInputSettings?: HlsInputSettings;
  MulticastInputSettings?: MulticastInputSettings;
  ServerValidation?: string;
};
/**
 * Type definition for `AWS::MediaLive::Channel.NielsenCBET`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-nielsencbet.html}
 */
export type NielsenCBET = {
  CbetCheckDigitString?: string;
  CbetStepaside?: string;
  Csid?: string;
};
/**
 * Type definition for `AWS::MediaLive::Channel.NielsenConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-nielsenconfiguration.html}
 */
export type NielsenConfiguration = {
  DistributorId?: string;
  NielsenPcmToId3Tagging?: string;
};
/**
 * Type definition for `AWS::MediaLive::Channel.NielsenNaesIiNw`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-nielsennaesiinw.html}
 */
export type NielsenNaesIiNw = {
  CheckDigitString?: string;
  Sid?: number;
  Timezone?: string;
};
/**
 * Type definition for `AWS::MediaLive::Channel.NielsenWatermarksSettings`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-nielsenwatermarkssettings.html}
 */
export type NielsenWatermarksSettings = {
  NielsenCbetSettings?: NielsenCBET;
  NielsenDistributionType?: string;
  NielsenNaesIiNwSettings?: NielsenNaesIiNw;
};
/**
 * Type definition for `AWS::MediaLive::Channel.Output`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-output.html}
 */
export type Output = {
  AudioDescriptionNames?: string[];
  CaptionDescriptionNames?: string[];
  OutputName?: string;
  OutputSettings?: OutputSettings;
  VideoDescriptionName?: string;
};
/**
 * Type definition for `AWS::MediaLive::Channel.OutputDestination`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-outputdestination.html}
 */
export type OutputDestination = {
  Id?: string;
  LogicalInterfaceNames?: string[];
  MediaPackageSettings?: MediaPackageOutputDestinationSettings[];
  MultiplexSettings?: MultiplexProgramChannelDestinationSettings;
  Settings?: OutputDestinationSettings[];
  SrtSettings?: SrtOutputDestinationSettings[];
};
/**
 * Type definition for `AWS::MediaLive::Channel.OutputDestinationSettings`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-outputdestinationsettings.html}
 */
export type OutputDestinationSettings = {
  PasswordParam?: string;
  StreamName?: string;
  Url?: string;
  Username?: string;
};
/**
 * Type definition for `AWS::MediaLive::Channel.OutputGroup`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-outputgroup.html}
 */
export type OutputGroup = {
  Name?: string;
  OutputGroupSettings?: OutputGroupSettings;
  Outputs?: Output[];
};
/**
 * Type definition for `AWS::MediaLive::Channel.OutputGroupSettings`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-outputgroupsettings.html}
 */
export type OutputGroupSettings = {
  ArchiveGroupSettings?: ArchiveGroupSettings;
  CmafIngestGroupSettings?: CmafIngestGroupSettings;
  FrameCaptureGroupSettings?: FrameCaptureGroupSettings;
  HlsGroupSettings?: HlsGroupSettings;
  MediaPackageGroupSettings?: MediaPackageGroupSettings;
  MsSmoothGroupSettings?: MsSmoothGroupSettings;
  MultiplexGroupSettings?: MultiplexGroupSettings;
  RtmpGroupSettings?: RtmpGroupSettings;
  SrtGroupSettings?: SrtGroupSettings;
  UdpGroupSettings?: UdpGroupSettings;
};
/**
 * Type definition for `AWS::MediaLive::Channel.OutputLocationRef`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-outputlocationref.html}
 */
export type OutputLocationRef = {
  DestinationRefId?: string;
};
/**
 * Type definition for `AWS::MediaLive::Channel.OutputLockingSettings`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-outputlockingsettings.html}
 */
export type OutputLockingSettings = {
  EpochLockingSettings?: EpochLockingSettings;
  PipelineLockingSettings?: PipelineLockingSettings;
};
/**
 * Type definition for `AWS::MediaLive::Channel.OutputSettings`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-outputsettings.html}
 */
export type OutputSettings = {
  ArchiveOutputSettings?: ArchiveOutputSettings;
  CmafIngestOutputSettings?: CmafIngestOutputSettings;
  FrameCaptureOutputSettings?: FrameCaptureOutputSettings;
  HlsOutputSettings?: HlsOutputSettings;
  MediaPackageOutputSettings?: MediaPackageOutputSettings;
  MsSmoothOutputSettings?: MsSmoothOutputSettings;
  MultiplexOutputSettings?: MultiplexOutputSettings;
  RtmpOutputSettings?: RtmpOutputSettings;
  SrtOutputSettings?: SrtOutputSettings;
  UdpOutputSettings?: UdpOutputSettings;
};
/**
 * Type definition for `AWS::MediaLive::Channel.PassThroughSettings`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-passthroughsettings.html}
 */
export type PassThroughSettings = Record<string, any>;
/**
 * Type definition for `AWS::MediaLive::Channel.PipelineLockingSettings`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-pipelinelockingsettings.html}
 */
export type PipelineLockingSettings = Record<string, any>;
/**
 * Type definition for `AWS::MediaLive::Channel.RawSettings`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-rawsettings.html}
 */
export type RawSettings = Record<string, any>;
/**
 * Type definition for `AWS::MediaLive::Channel.Rec601Settings`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-rec601settings.html}
 */
export type Rec601Settings = Record<string, any>;
/**
 * Type definition for `AWS::MediaLive::Channel.Rec709Settings`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-rec709settings.html}
 */
export type Rec709Settings = Record<string, any>;
/**
 * Type definition for `AWS::MediaLive::Channel.RemixSettings`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-remixsettings.html}
 */
export type RemixSettings = {
  ChannelMappings?: AudioChannelMapping[];
  ChannelsIn?: number;
  ChannelsOut?: number;
};
/**
 * Type definition for `AWS::MediaLive::Channel.RtmpCaptionInfoDestinationSettings`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-rtmpcaptioninfodestinationsettings.html}
 */
export type RtmpCaptionInfoDestinationSettings = Record<string, any>;
/**
 * Type definition for `AWS::MediaLive::Channel.RtmpGroupSettings`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-rtmpgroupsettings.html}
 */
export type RtmpGroupSettings = {
  AdMarkers?: string[];
  AuthenticationScheme?: string;
  CacheFullBehavior?: string;
  CacheLength?: number;
  CaptionData?: string;
  IncludeFillerNalUnits?: string;
  InputLossAction?: string;
  RestartDelay?: number;
};
/**
 * Type definition for `AWS::MediaLive::Channel.RtmpOutputSettings`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-rtmpoutputsettings.html}
 */
export type RtmpOutputSettings = {
  CertificateMode?: string;
  ConnectionRetryInterval?: number;
  Destination?: OutputLocationRef;
  NumRetries?: number;
};
/**
 * Type definition for `AWS::MediaLive::Channel.Scte20PlusEmbeddedDestinationSettings`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-scte20plusembeddeddestinationsettings.html}
 */
export type Scte20PlusEmbeddedDestinationSettings = Record<string, any>;
/**
 * Type definition for `AWS::MediaLive::Channel.Scte20SourceSettings`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-scte20sourcesettings.html}
 */
export type Scte20SourceSettings = {
  Convert608To708?: string;
  Source608ChannelNumber?: number;
};
/**
 * Type definition for `AWS::MediaLive::Channel.Scte27DestinationSettings`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-scte27destinationsettings.html}
 */
export type Scte27DestinationSettings = Record<string, any>;
/**
 * Type definition for `AWS::MediaLive::Channel.Scte27SourceSettings`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-scte27sourcesettings.html}
 */
export type Scte27SourceSettings = {
  OcrLanguage?: string;
  Pid?: number;
};
/**
 * Type definition for `AWS::MediaLive::Channel.Scte35SpliceInsert`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-scte35spliceinsert.html}
 */
export type Scte35SpliceInsert = {
  AdAvailOffset?: number;
  NoRegionalBlackoutFlag?: string;
  WebDeliveryAllowedFlag?: string;
};
/**
 * Type definition for `AWS::MediaLive::Channel.Scte35TimeSignalApos`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-scte35timesignalapos.html}
 */
export type Scte35TimeSignalApos = {
  AdAvailOffset?: number;
  NoRegionalBlackoutFlag?: string;
  WebDeliveryAllowedFlag?: string;
};
/**
 * Type definition for `AWS::MediaLive::Channel.SmpteTtDestinationSettings`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-smptettdestinationsettings.html}
 */
export type SmpteTtDestinationSettings = Record<string, any>;
/**
 * Type definition for `AWS::MediaLive::Channel.SrtGroupSettings`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-srtgroupsettings.html}
 */
export type SrtGroupSettings = {
  InputLossAction?: string;
};
/**
 * Type definition for `AWS::MediaLive::Channel.SrtOutputDestinationSettings`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-srtoutputdestinationsettings.html}
 */
export type SrtOutputDestinationSettings = {
  EncryptionPassphraseSecretArn?: string;
  StreamId?: string;
  Url?: string;
};
/**
 * Type definition for `AWS::MediaLive::Channel.SrtOutputSettings`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-srtoutputsettings.html}
 */
export type SrtOutputSettings = {
  BufferMsec?: number;
  ContainerSettings?: UdpContainerSettings;
  Destination?: OutputLocationRef;
  EncryptionType?: string;
  Latency?: number;
};
/**
 * Type definition for `AWS::MediaLive::Channel.StandardHlsSettings`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-standardhlssettings.html}
 */
export type StandardHlsSettings = {
  AudioRenditionSets?: string;
  M3u8Settings?: M3u8Settings;
};
/**
 * Type definition for `AWS::MediaLive::Channel.StaticKeySettings`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-statickeysettings.html}
 */
export type StaticKeySettings = {
  KeyProviderServer?: InputLocation;
  StaticKeyValue?: string;
};
/**
 * Type definition for `AWS::MediaLive::Channel.TeletextDestinationSettings`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-teletextdestinationsettings.html}
 */
export type TeletextDestinationSettings = Record<string, any>;
/**
 * Type definition for `AWS::MediaLive::Channel.TeletextSourceSettings`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-teletextsourcesettings.html}
 */
export type TeletextSourceSettings = {
  OutputRectangle?: CaptionRectangle;
  PageNumber?: string;
};
/**
 * Type definition for `AWS::MediaLive::Channel.TemporalFilterSettings`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-temporalfiltersettings.html}
 */
export type TemporalFilterSettings = {
  PostFilterSharpening?: string;
  Strength?: string;
};
/**
 * Type definition for `AWS::MediaLive::Channel.ThumbnailConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-thumbnailconfiguration.html}
 */
export type ThumbnailConfiguration = {
  State?: string;
};
/**
 * Type definition for `AWS::MediaLive::Channel.TimecodeBurninSettings`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-timecodeburninsettings.html}
 */
export type TimecodeBurninSettings = {
  FontSize?: string;
  Position?: string;
  Prefix?: string;
};
/**
 * Type definition for `AWS::MediaLive::Channel.TimecodeConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-timecodeconfig.html}
 */
export type TimecodeConfig = {
  Source?: string;
  SyncThreshold?: number;
};
/**
 * Type definition for `AWS::MediaLive::Channel.TtmlDestinationSettings`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-ttmldestinationsettings.html}
 */
export type TtmlDestinationSettings = {
  StyleControl?: string;
};
/**
 * Type definition for `AWS::MediaLive::Channel.UdpContainerSettings`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-udpcontainersettings.html}
 */
export type UdpContainerSettings = {
  M2tsSettings?: M2tsSettings;
};
/**
 * Type definition for `AWS::MediaLive::Channel.UdpGroupSettings`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-udpgroupsettings.html}
 */
export type UdpGroupSettings = {
  InputLossAction?: string;
  TimedMetadataId3Frame?: string;
  TimedMetadataId3Period?: number;
};
/**
 * Type definition for `AWS::MediaLive::Channel.UdpOutputSettings`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-udpoutputsettings.html}
 */
export type UdpOutputSettings = {
  BufferMsec?: number;
  ContainerSettings?: UdpContainerSettings;
  Destination?: OutputLocationRef;
  FecOutputSettings?: FecOutputSettings;
};
/**
 * Type definition for `AWS::MediaLive::Channel.VideoBlackFailoverSettings`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-videoblackfailoversettings.html}
 */
export type VideoBlackFailoverSettings = {
  BlackDetectThreshold?: number;
  VideoBlackThresholdMsec?: number;
};
/**
 * Type definition for `AWS::MediaLive::Channel.VideoCodecSettings`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-videocodecsettings.html}
 */
export type VideoCodecSettings = {
  Av1Settings?: Av1Settings;
  FrameCaptureSettings?: FrameCaptureSettings;
  H264Settings?: H264Settings;
  H265Settings?: H265Settings;
  Mpeg2Settings?: Mpeg2Settings;
};
/**
 * Type definition for `AWS::MediaLive::Channel.VideoDescription`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-videodescription.html}
 */
export type VideoDescription = {
  CodecSettings?: VideoCodecSettings;
  Height?: number;
  Name?: string;
  RespondToAfd?: string;
  ScalingBehavior?: string;
  Sharpness?: number;
  Width?: number;
};
/**
 * Type definition for `AWS::MediaLive::Channel.VideoSelector`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-videoselector.html}
 */
export type VideoSelector = {
  ColorSpace?: string;
  ColorSpaceSettings?: VideoSelectorColorSpaceSettings;
  ColorSpaceUsage?: string;
  SelectorSettings?: VideoSelectorSettings;
};
/**
 * Type definition for `AWS::MediaLive::Channel.VideoSelectorColorSpaceSettings`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-videoselectorcolorspacesettings.html}
 */
export type VideoSelectorColorSpaceSettings = {
  Hdr10Settings?: Hdr10Settings;
};
/**
 * Type definition for `AWS::MediaLive::Channel.VideoSelectorPid`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-videoselectorpid.html}
 */
export type VideoSelectorPid = {
  Pid?: number;
};
/**
 * Type definition for `AWS::MediaLive::Channel.VideoSelectorProgramId`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-videoselectorprogramid.html}
 */
export type VideoSelectorProgramId = {
  ProgramId?: number;
};
/**
 * Type definition for `AWS::MediaLive::Channel.VideoSelectorSettings`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-videoselectorsettings.html}
 */
export type VideoSelectorSettings = {
  VideoSelectorPid?: VideoSelectorPid;
  VideoSelectorProgramId?: VideoSelectorProgramId;
};
/**
 * Type definition for `AWS::MediaLive::Channel.VpcOutputSettings`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-vpcoutputsettings.html}
 */
export type VpcOutputSettings = {
  PublicAddressAllocationIds?: string[];
  SecurityGroupIds?: string[];
  SubnetIds?: string[];
};
/**
 * Type definition for `AWS::MediaLive::Channel.WavSettings`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-wavsettings.html}
 */
export type WavSettings = {
  BitDepth?: number;
  CodingMode?: string;
  SampleRate?: number;
};
/**
 * Type definition for `AWS::MediaLive::Channel.WebvttDestinationSettings`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-webvttdestinationsettings.html}
 */
export type WebvttDestinationSettings = {
  StyleControl?: string;
};
/**
 * Resource Type definition for AWS::MediaLive::Channel
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-channel.html}
 */
export class MediaLiveChannel extends $Resource<
  "AWS::MediaLive::Channel",
  MediaLiveChannelProperties,
  MediaLiveChannelAttributes
> {
  public static readonly Type = "AWS::MediaLive::Channel";
  constructor(
    logicalId: string,
    properties: MediaLiveChannelProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, MediaLiveChannel.Type, properties, options);
  }
}
