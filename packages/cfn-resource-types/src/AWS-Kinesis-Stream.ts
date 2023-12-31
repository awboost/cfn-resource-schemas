import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource Type definition for AWS::Kinesis::Stream
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesis-stream.html}
 */
export type KinesisStreamProperties = {
  /**
   * The name of the Kinesis stream.
   * @minLength `1`
   * @maxLength `128`
   * @pattern `^[a-zA-Z0-9_.-]+$`
   */
  Name?: string;
  /**
   * The number of hours for the data records that are stored in shards to remain accessible.
   * @min `24`
   */
  RetentionPeriodHours?: number;
  /**
   * The number of shards that the stream uses. Required when StreamMode = PROVISIONED is passed.
   * @min `1`
   */
  ShardCount?: number;
  /**
   * When specified, enables or updates server-side encryption using an AWS KMS key for a specified stream.
   */
  StreamEncryption?: StreamEncryption;
  /**
   * The mode in which the stream is running.
   */
  StreamModeDetails?: StreamModeDetails;
  /**
   * An arbitrary set of tags (key–value pairs) to associate with the Kinesis stream.
   * @maxLength `50`
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::Kinesis::Stream`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesis-stream.html#aws-resource-kinesis-stream-return-values}
 */
export type KinesisStreamAttributes = {
  /**
   * The Amazon resource name (ARN) of the Kinesis stream
   */
  Arn: string;
};
/**
 * Type definition for `AWS::Kinesis::Stream.StreamEncryption`.
 * When specified, enables or updates server-side encryption using an AWS KMS key for a specified stream. Removing this property from your stack template and updating your stack disables encryption.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesis-stream-streamencryption.html}
 */
export type StreamEncryption = {
  /**
   * The encryption type to use. The only valid value is KMS.
   */
  EncryptionType: "KMS";
  /**
   * The GUID for the customer-managed AWS KMS key to use for encryption. This value can be a globally unique identifier, a fully specified Amazon Resource Name (ARN) to either an alias or a key, or an alias name prefixed by "alias/".You can also use a master key owned by Kinesis Data Streams by specifying the alias aws/kinesis.
   * @minLength `1`
   * @maxLength `2048`
   */
  KeyId: string;
};
/**
 * Type definition for `AWS::Kinesis::Stream.StreamModeDetails`.
 * When specified, enables or updates the mode of stream. Default is PROVISIONED.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesis-stream-streammodedetails.html}
 */
export type StreamModeDetails = {
  /**
   * The mode of the stream
   */
  StreamMode: "ON_DEMAND" | "PROVISIONED";
};
/**
 * Type definition for `AWS::Kinesis::Stream.Tag`.
 * An arbitrary set of tags (key-value pairs) to associate with the Kinesis stream.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesis-stream-tag.html}
 */
export type Tag = {
  /**
   * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @minLength `1`
   * @maxLength `128`
   */
  Key: string;
  /**
   * The value for the tag. You can specify a value that is 0 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @maxLength `255`
   */
  Value: string;
};
/**
 * Resource Type definition for AWS::Kinesis::Stream
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesis-stream.html}
 */
export class KinesisStream extends $Resource<
  "AWS::Kinesis::Stream",
  KinesisStreamProperties,
  KinesisStreamAttributes
> {
  public static readonly Type = "AWS::Kinesis::Stream";
  public static readonly AttributeNames = ["Arn" as const];
  constructor(
    logicalId: string,
    properties: KinesisStreamProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      KinesisStream.Type,
      properties,
      KinesisStream.AttributeNames,
      options,
    );
  }
}
