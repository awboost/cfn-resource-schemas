import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource schema for AWS::MediaLive::Multiplex
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-multiplex.html}
 */
export type MediaLiveMultiplexProperties = {
  /**
   * A list of availability zones for the multiplex.
   */
  AvailabilityZones: string[];
  /**
   * A list of the multiplex output destinations.
   */
  Destinations?: MultiplexOutputDestination[];
  /**
   * Configuration for a multiplex event.
   */
  MultiplexSettings: MultiplexSettings;
  /**
   * Name of multiplex.
   */
  Name: string;
  /**
   * A collection of key-value pairs.
   */
  Tags?: Tags[];
};
/**
 * Attribute type definition for `AWS::MediaLive::Multiplex`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-multiplex.html#aws-resource-medialive-multiplex-return-values}
 */
export type MediaLiveMultiplexAttributes = {
  /**
   * The unique arn of the multiplex.
   */
  Arn: string;
  /**
   * The unique id of the multiplex.
   */
  Id: string;
  /**
   * The number of currently healthy pipelines.
   */
  PipelinesRunningCount: number;
  /**
   * The number of programs in the multiplex.
   */
  ProgramCount: number;
  State:
    | "CREATING"
    | "CREATE_FAILED"
    | "IDLE"
    | "STARTING"
    | "RUNNING"
    | "RECOVERING"
    | "STOPPING"
    | "DELETING"
    | "DELETED";
};
/**
 * Type definition for `AWS::MediaLive::Multiplex.MultiplexOutputDestination`.
 * Multiplex MediaConnect output destination settings.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-multiplex-multiplexoutputdestination.html}
 */
export type MultiplexOutputDestination = {
  /**
   * Multiplex MediaConnect output destination settings.
   */
  MultiplexMediaConnectOutputDestinationSettings?: {
    /**
     * The MediaConnect entitlement ARN available as a Flow source.
     * @minLength `1`
     */
    EntitlementArn?: string;
  };
};
/**
 * Type definition for `AWS::MediaLive::Multiplex.MultiplexSettings`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-multiplex-multiplexsettings.html}
 */
export type MultiplexSettings = {
  /**
   * Maximum video buffer delay in milliseconds.
   * @min `800`
   * @max `3000`
   */
  MaximumVideoBufferDelayMilliseconds?: number;
  /**
   * Transport stream bit rate.
   * @min `1000000`
   * @max `100000000`
   */
  TransportStreamBitrate: number;
  /**
   * Transport stream ID.
   * @max `65535`
   */
  TransportStreamId: number;
  /**
   * Transport stream reserved bit rate.
   * @max `100000000`
   */
  TransportStreamReservedBitrate?: number;
};
/**
 * Type definition for `AWS::MediaLive::Multiplex.Tags`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-multiplex-tags.html}
 */
export type Tags = {
  Key?: string;
  Value?: string;
};
/**
 * Resource schema for AWS::MediaLive::Multiplex
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-multiplex.html}
 */
export class MediaLiveMultiplex extends $Resource<
  "AWS::MediaLive::Multiplex",
  MediaLiveMultiplexProperties,
  MediaLiveMultiplexAttributes
> {
  public static readonly Type = "AWS::MediaLive::Multiplex";
  public static readonly AttributeNames = [
    "Arn" as const,
    "Id" as const,
    "PipelinesRunningCount" as const,
    "ProgramCount" as const,
    "State" as const,
  ];
  constructor(
    logicalId: string,
    properties: MediaLiveMultiplexProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      MediaLiveMultiplex.Type,
      properties,
      MediaLiveMultiplex.AttributeNames,
      options,
    );
  }
}
