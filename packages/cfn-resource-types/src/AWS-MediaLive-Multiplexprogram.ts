import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource schema for AWS::MediaLive::Multiplexprogram
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-multiplexprogram.html}
 */
export type MediaLiveMultiplexprogramProperties = {
  /**
   * The ID of the multiplex that the program belongs to.
   */
  MultiplexId?: string;
  /**
   * The settings for this multiplex program.
   */
  MultiplexProgramSettings?: MultiplexProgramSettings;
  /**
   * The packet identifier map for this multiplex program.
   */
  PacketIdentifiersMap?: MultiplexProgramPacketIdentifiersMap;
  /**
   * Contains information about the current sources for the specified program in the specified multiplex. Keep in mind that each multiplex pipeline connects to both pipelines in a given source channel (the channel identified by the program). But only one of those channel pipelines is ever active at one time.
   */
  PipelineDetails?: MultiplexProgramPipelineDetail[];
  /**
   * The settings for this multiplex program.
   */
  PreferredChannelPipeline?: PreferredChannelPipeline;
  /**
   * The name of the multiplex program.
   */
  ProgramName?: string;
};
/**
 * Attribute type definition for `AWS::MediaLive::Multiplexprogram`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-multiplexprogram.html#aws-resource-medialive-multiplexprogram-return-values}
 */
export type MediaLiveMultiplexprogramAttributes = {
  /**
   * The MediaLive channel associated with the program.
   */
  ChannelId: string;
};
/**
 * Type definition for `AWS::MediaLive::Multiplexprogram.MultiplexProgramPacketIdentifiersMap`.
 * Packet identifiers map for a given Multiplex program.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-multiplexprogram-multiplexprogrampacketidentifiersmap.html}
 */
export type MultiplexProgramPacketIdentifiersMap = {
  AudioPids?: number[];
  DvbSubPids?: number[];
  DvbTeletextPid?: number;
  EtvPlatformPid?: number;
  EtvSignalPid?: number;
  KlvDataPids?: number[];
  PcrPid?: number;
  PmtPid?: number;
  PrivateMetadataPid?: number;
  Scte27Pids?: number[];
  Scte35Pid?: number;
  TimedMetadataPid?: number;
  VideoPid?: number;
};
/**
 * Type definition for `AWS::MediaLive::Multiplexprogram.MultiplexProgramPipelineDetail`.
 * The current source for one of the pipelines in the multiplex.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-multiplexprogram-multiplexprogrampipelinedetail.html}
 */
export type MultiplexProgramPipelineDetail = {
  /**
   * Identifies the channel pipeline that is currently active for the pipeline (identified by PipelineId) in the multiplex.
   */
  ActiveChannelPipeline?: string;
  /**
   * Identifies a specific pipeline in the multiplex.
   */
  PipelineId?: string;
};
/**
 * Type definition for `AWS::MediaLive::Multiplexprogram.MultiplexProgramServiceDescriptor`.
 * Transport stream service descriptor configuration for the Multiplex program.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-multiplexprogram-multiplexprogramservicedescriptor.html}
 */
export type MultiplexProgramServiceDescriptor = {
  /**
   * Name of the provider.
   * @minLength `1`
   * @maxLength `256`
   */
  ProviderName: string;
  /**
   * Name of the service.
   * @minLength `1`
   * @maxLength `256`
   */
  ServiceName: string;
};
/**
 * Type definition for `AWS::MediaLive::Multiplexprogram.MultiplexProgramSettings`.
 * Multiplex Program settings configuration.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-multiplexprogram-multiplexprogramsettings.html}
 */
export type MultiplexProgramSettings = {
  /**
     * Indicates which pipeline is preferred by the multiplex for program ingest.
    If set to \"PIPELINE_0\" or \"PIPELINE_1\" and an unhealthy ingest causes the multiplex to switch to the non-preferred pipeline,
    it will switch back once that ingest is healthy again. If set to \"CURRENTLY_ACTIVE\",
    it will not switch back to the other pipeline based on it recovering to a healthy state,
    it will only switch if the active pipeline becomes unhealthy.
    
     */
  PreferredChannelPipeline?: PreferredChannelPipeline;
  /**
   * Unique program number.
   * @min `0`
   * @max `65535`
   */
  ProgramNumber: number;
  /**
   * Transport stream service descriptor configuration for the Multiplex program.
   */
  ServiceDescriptor?: MultiplexProgramServiceDescriptor;
  /**
   * Program video settings configuration.
   */
  VideoSettings?: MultiplexVideoSettings;
};
/**
 * Type definition for `AWS::MediaLive::Multiplexprogram.MultiplexStatmuxVideoSettings`.
 * Statmux rate control settings
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-multiplexprogram-multiplexstatmuxvideosettings.html}
 */
export type MultiplexStatmuxVideoSettings = {
  /**
   * Maximum statmux bitrate.
   * @min `100000`
   * @max `100000000`
   */
  MaximumBitrate?: number;
  /**
   * Minimum statmux bitrate.
   * @min `100000`
   * @max `100000000`
   */
  MinimumBitrate?: number;
  /**
   * The purpose of the priority is to use a combination of the\nmultiplex rate control algorithm and the QVBR capability of the\nencoder to prioritize the video quality of some channels in a\nmultiplex over others.  Channels that have a higher priority will\nget higher video quality at the expense of the video quality of\nother channels in the multiplex with lower priority.
   * @min `-5`
   * @max `5`
   */
  Priority?: number;
};
/**
 * Type definition for `AWS::MediaLive::Multiplexprogram.MultiplexVideoSettings`.
 * The video configuration for each program in a multiplex.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-multiplexprogram-multiplexvideosettings.html}
 */
export type MultiplexVideoSettings =
  | {
      /**
     * The constant bitrate configuration for the video encode.
    When this field is defined, StatmuxSettings must be undefined.
     * @min `100000`
     * @max `100000000`
     */
      ConstantBitrate: number;
    }
  | {
      /**
     * Statmux rate control settings.
    When this field is defined, ConstantBitrate must be undefined.
     */
      StatmuxSettings: MultiplexStatmuxVideoSettings;
    };
/**
 * Type definition for `AWS::MediaLive::Multiplexprogram.PreferredChannelPipeline`.
 * Indicates which pipeline is preferred by the multiplex for program ingest.
If set to \"PIPELINE_0\" or \"PIPELINE_1\" and an unhealthy ingest causes the multiplex to switch to the non-preferred pipeline,
it will switch back once that ingest is healthy again. If set to \"CURRENTLY_ACTIVE\",
it will not switch back to the other pipeline based on it recovering to a healthy state,
it will only switch if the active pipeline becomes unhealthy.

 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-multiplexprogram-preferredchannelpipeline.html}
 */
export type PreferredChannelPipeline =
  | "CURRENTLY_ACTIVE"
  | "PIPELINE_0"
  | "PIPELINE_1";
/**
 * Resource schema for AWS::MediaLive::Multiplexprogram
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-multiplexprogram.html}
 */
export class MediaLiveMultiplexprogram extends $Resource<
  "AWS::MediaLive::Multiplexprogram",
  MediaLiveMultiplexprogramProperties,
  MediaLiveMultiplexprogramAttributes
> {
  public static readonly Type = "AWS::MediaLive::Multiplexprogram";
  constructor(
    logicalId: string,
    properties: MediaLiveMultiplexprogramProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, MediaLiveMultiplexprogram.Type, properties, options);
  }
}
