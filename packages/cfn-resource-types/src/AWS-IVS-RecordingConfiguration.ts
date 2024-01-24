import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::IVS::RecordingConfiguration
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ivs-recordingconfiguration.html}
 */
export type IVSRecordingConfigurationProperties = {
  /**
   * Recording Destination Configuration.
   */
  DestinationConfiguration: DestinationConfiguration;
  /**
   * Recording Configuration Name.
   * @minLength `0`
   * @maxLength `128`
   * @pattern `^[a-zA-Z0-9-_]*$`
   */
  Name?: string;
  /**
   * Recording Reconnect Window Seconds. (0 means disabled)
   * @min `0`
   * @max `300`
   */
  RecordingReconnectWindowSeconds?: number;
  /**
   * Rendition Configuration describes which renditions should be recorded for a stream.
   */
  RenditionConfiguration?: RenditionConfiguration;
  /**
   * A list of key-value pairs that contain metadata for the asset model.
   * @maxLength `50`
   */
  Tags?: Tag[];
  /**
   * Recording Thumbnail Configuration.
   */
  ThumbnailConfiguration?: ThumbnailConfiguration;
};
/**
 * Attribute type definition for `AWS::IVS::RecordingConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ivs-recordingconfiguration.html#aws-resource-ivs-recordingconfiguration-return-values}
 */
export type IVSRecordingConfigurationAttributes = {
  /**
   * Recording Configuration ARN is automatically generated on creation and assigned as the unique identifier.
   * @minLength `0`
   * @maxLength `128`
   * @pattern `^arn:aws[-a-z]*:ivs:[a-z0-9-]+:[0-9]+:recording-configuration/[a-zA-Z0-9-]+$`
   */
  Arn: string;
  /**
   * Recording Configuration State.
   */
  State: "CREATING" | "CREATE_FAILED" | "ACTIVE";
};
/**
 * Type definition for `AWS::IVS::RecordingConfiguration.DestinationConfiguration`.
 * Recording Destination Configuration.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ivs-recordingconfiguration-destinationconfiguration.html}
 */
export type DestinationConfiguration = {
  /**
   * Recording S3 Destination Configuration.
   */
  S3?: S3DestinationConfiguration;
};
/**
 * Type definition for `AWS::IVS::RecordingConfiguration.RenditionConfiguration`.
 * Rendition Configuration describes which renditions should be recorded for a stream.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ivs-recordingconfiguration-renditionconfiguration.html}
 */
export type RenditionConfiguration = {
  /**
   * Resolution Selection indicates which set of renditions are recorded for a stream.
   */
  RenditionSelection?: "ALL" | "NONE" | "CUSTOM";
  /**
   * Renditions indicates which renditions are recorded for a stream.
   * @minLength `0`
   * @maxLength `4`
   */
  Renditions?: ("FULL_HD" | "HD" | "SD" | "LOWEST_RESOLUTION")[];
};
/**
 * Type definition for `AWS::IVS::RecordingConfiguration.S3DestinationConfiguration`.
 * Recording S3 Destination Configuration.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ivs-recordingconfiguration-s3destinationconfiguration.html}
 */
export type S3DestinationConfiguration = {
  /**
   * @minLength `3`
   * @maxLength `63`
   * @pattern `^[a-z0-9-.]+$`
   */
  BucketName: string;
};
/**
 * Type definition for `AWS::IVS::RecordingConfiguration.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ivs-recordingconfiguration-tag.html}
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
 * Type definition for `AWS::IVS::RecordingConfiguration.ThumbnailConfiguration`.
 * Recording Thumbnail Configuration.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ivs-recordingconfiguration-thumbnailconfiguration.html}
 */
export type ThumbnailConfiguration = {
  /**
   * Thumbnail Recording Mode, which determines whether thumbnails are recorded at an interval or are disabled.
   */
  RecordingMode?: "INTERVAL" | "DISABLED";
  /**
   * Resolution indicates the desired resolution of recorded thumbnails.
   */
  Resolution?: "FULL_HD" | "HD" | "SD" | "LOWEST_RESOLUTION";
  /**
   * Storage indicates the format in which thumbnails are recorded.
   * @minLength `0`
   * @maxLength `2`
   */
  Storage?: ("SEQUENTIAL" | "LATEST")[];
  /**
   * Target Interval Seconds defines the interval at which thumbnails are recorded. This field is required if RecordingMode is INTERVAL.
   * @min `1`
   * @max `60`
   */
  TargetIntervalSeconds?: number;
};
/**
 * Resource Type definition for AWS::IVS::RecordingConfiguration
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ivs-recordingconfiguration.html}
 */
export class IVSRecordingConfiguration extends $Resource<
  "AWS::IVS::RecordingConfiguration",
  IVSRecordingConfigurationProperties,
  IVSRecordingConfigurationAttributes
> {
  public static readonly Type = "AWS::IVS::RecordingConfiguration";
  constructor(
    logicalId: string,
    properties: IVSRecordingConfigurationProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, IVSRecordingConfiguration.Type, properties, options);
  }
}
