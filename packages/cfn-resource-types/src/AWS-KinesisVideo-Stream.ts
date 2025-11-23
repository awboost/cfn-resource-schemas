import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type Definition for AWS::KinesisVideo::Stream
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisvideo-stream.html}
 */
export type KinesisVideoStreamProperties = {
  /**
   * The number of hours till which Kinesis Video will retain the data in the stream
   * @min `0`
   * @max `87600`
   */
  DataRetentionInHours?: number;
  /**
   * The name of the device that is writing to the stream.
   * @minLength `1`
   * @maxLength `128`
   * @pattern `[a-zA-Z0-9_.-]+`
   */
  DeviceName?: string;
  /**
   * AWS KMS key ID that Kinesis Video Streams uses to encrypt stream data.
   * @minLength `1`
   * @maxLength `2048`
   * @pattern `.+`
   */
  KmsKeyId?: string;
  /**
   * The media type of the stream. Consumers of the stream can use this information when processing the stream.
   * @minLength `1`
   * @maxLength `128`
   * @pattern `[\w\-\.\+]+/[\w\-\.\+]+(,[\w\-\.\+]+/[\w\-\.\+]+)*`
   */
  MediaType?: string;
  /**
   * The name of the Kinesis Video stream.
   * @minLength `1`
   * @maxLength `256`
   * @pattern `[a-zA-Z0-9_.-]+`
   */
  Name?: string;
  /**
   * Configuration for the storage tier of the Kinesis Video Stream.
   */
  StreamStorageConfiguration?: StreamStorageConfiguration;
  /**
   * An array of key-value pairs associated with the Kinesis Video Stream.
   * @minLength `1`
   * @maxLength `50`
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::KinesisVideo::Stream`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisvideo-stream.html#aws-resource-kinesisvideo-stream-return-values}
 */
export type KinesisVideoStreamAttributes = {
  /**
   * The Amazon Resource Name (ARN) of the Kinesis Video stream.
   */
  Arn: string;
};
/**
 * Type definition for `AWS::KinesisVideo::Stream.StreamStorageConfiguration`.
 * Configuration for the storage tier of the Kinesis Video Stream.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisvideo-stream-streamstorageconfiguration.html}
 */
export type StreamStorageConfiguration = {
  /**
   * The storage tier for the Kinesis Video Stream. Determines the storage class used for stream data.
   */
  DefaultStorageTier?: "HOT" | "WARM";
};
/**
 * Type definition for `AWS::KinesisVideo::Stream.Tag`.
 * A key-value pair to associated with the Kinesis Video Stream.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisvideo-stream-tag.html}
 */
export type Tag = {
  /**
   * The key name of the tag. Specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. The following characters can be used: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @minLength `1`
   * @maxLength `128`
   */
  Key: string;
  /**
   * The value for the tag. Specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. The following characters can be used: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @minLength `0`
   * @maxLength `256`
   */
  Value: string;
};
/**
 * Resource Type Definition for AWS::KinesisVideo::Stream
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisvideo-stream.html}
 */
export class KinesisVideoStream extends $Resource<
  "AWS::KinesisVideo::Stream",
  KinesisVideoStreamProperties,
  KinesisVideoStreamAttributes
> {
  public static readonly Type = "AWS::KinesisVideo::Stream";
  constructor(
    logicalId: string,
    properties: KinesisVideoStreamProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, KinesisVideoStream.Type, properties, options);
  }
}
