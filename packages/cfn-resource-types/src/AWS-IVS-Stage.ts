import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Definition for type AWS::IVS::Stage.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ivs-stage.html}
 */
export type IVSStageProperties = {
  /**
   * Configuration object for individual participant recording, to attach to the new stage.
   */
  AutoParticipantRecordingConfiguration?: AutoParticipantRecordingConfiguration;
  /**
   * Stage name
   * @minLength `0`
   * @maxLength `128`
   * @pattern `^[a-zA-Z0-9-_]*$`
   */
  Name?: string;
  /**
   * An array of key-value pairs to apply to this resource.
   * @maxLength `50`
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::IVS::Stage`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ivs-stage.html#aws-resource-ivs-stage-return-values}
 */
export type IVSStageAttributes = {
  /**
   * ID of the active session within the stage.
   * @minLength `0`
   * @maxLength `128`
   */
  ActiveSessionId: string;
  /**
   * Stage ARN is automatically generated on creation and assigned as the unique identifier.
   * @minLength `0`
   * @maxLength `128`
   * @pattern `^arn:aws[-a-z]*:ivs:[a-z0-9-]+:[0-9]+:stage/[a-zA-Z0-9-]+$`
   */
  Arn: string;
};
/**
 * Type definition for `AWS::IVS::Stage.AutoParticipantRecordingConfiguration`.
 * Configuration object for individual participant recording, to attach to the new stage.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ivs-stage-autoparticipantrecordingconfiguration.html}
 */
export type AutoParticipantRecordingConfiguration = {
  /**
   * HLS configuration object for individual participant recording.
   */
  HlsConfiguration?: {
    /**
     * An object representing a configuration of participant HLS recordings for individual participant recording.
     */
    ParticipantRecordingHlsConfiguration?: {
      /**
       * Defines the target duration for recorded segments generated when recording a stage participant. Segments may have durations longer than the specified value when needed to ensure each segment begins with a keyframe. Default: 6.
       * @min `2`
       * @max `10`
       */
      TargetSegmentDurationSeconds?: number;
    };
  };
  /**
   * Types of media to be recorded. Default: AUDIO_VIDEO.
   * @minLength `0`
   * @maxLength `1`
   */
  MediaTypes?: ("AUDIO_VIDEO" | "AUDIO_ONLY")[];
  /**
   * If a stage publisher disconnects and then reconnects within the specified interval, the multiple recordings will be considered a single recording and merged together. The default value is 0, which disables merging.
   * @min `0`
   * @max `300`
   */
  RecordingReconnectWindowSeconds?: number;
  /**
   * ARN of the StorageConfiguration resource to use for individual participant recording.
   * @minLength `0`
   * @maxLength `128`
   * @pattern `^$|^arn:aws:ivs:[a-z0-9-]+:[0-9]+:storage-configuration/[a-zA-Z0-9-]+$`
   */
  StorageConfigurationArn: string;
  /**
   * A complex type that allows you to enable/disable the recording of thumbnails for individual participant recording and modify the interval at which thumbnails are generated for the live session.
   */
  ThumbnailConfiguration?: {
    /**
     * An object representing a configuration of thumbnails for recorded video from an individual participant.
     */
    ParticipantThumbnailConfiguration?: {
      /**
       * Thumbnail recording mode. Default: DISABLED.
       */
      RecordingMode?: "INTERVAL" | "DISABLED";
      /**
       * Indicates the format in which thumbnails are recorded. SEQUENTIAL records all generated thumbnails in a serial manner, to the media/thumbnails/high directory. LATEST saves the latest thumbnail in media/latest_thumbnail/high/thumb.jpg and overwrites it at the interval specified by targetIntervalSeconds. You can enable both SEQUENTIAL and LATEST. Default: SEQUENTIAL.
       * @minLength `0`
       * @maxLength `2`
       */
      Storage?: ("SEQUENTIAL" | "LATEST")[];
      /**
       * The targeted thumbnail-generation interval in seconds. This is configurable only if recordingMode is INTERVAL. Default: 60.
       * @min `1`
       * @max `86400`
       */
      TargetIntervalSeconds?: number;
    };
  };
};
/**
 * Type definition for `AWS::IVS::Stage.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ivs-stage-tag.html}
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
 * Resource Definition for type AWS::IVS::Stage.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ivs-stage.html}
 */
export class IVSStage extends $Resource<
  "AWS::IVS::Stage",
  IVSStageProperties,
  IVSStageAttributes
> {
  public static readonly Type = "AWS::IVS::Stage";
  constructor(
    logicalId: string,
    properties: IVSStageProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, IVSStage.Type, properties, options);
  }
}
