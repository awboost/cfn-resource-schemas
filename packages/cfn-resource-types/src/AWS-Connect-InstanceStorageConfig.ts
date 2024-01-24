import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::Connect::InstanceStorageConfig
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-instancestorageconfig.html}
 */
export type ConnectInstanceStorageConfigProperties = {
  /**
   * Connect Instance ID with which the storage config will be associated
   * @pattern `^arn:aws[-a-z0-9]*:connect:[-a-z0-9]*:[0-9]{12}:instance/[-a-zA-Z0-9]*$`
   */
  InstanceArn: string;
  KinesisFirehoseConfig?: KinesisFirehoseConfig;
  KinesisStreamConfig?: KinesisStreamConfig;
  KinesisVideoStreamConfig?: KinesisVideoStreamConfig;
  /**
   * Specifies the type of storage resource available for the instance
   */
  ResourceType: InstanceStorageResourceType;
  S3Config?: S3Config;
  /**
   * Specifies the storage type to be associated with the instance
   */
  StorageType: StorageType;
};
/**
 * Attribute type definition for `AWS::Connect::InstanceStorageConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-instancestorageconfig.html#aws-resource-connect-instancestorageconfig-return-values}
 */
export type ConnectInstanceStorageConfigAttributes = {
  /**
   * An associationID is automatically generated when a storage config is associated with an instance
   * @minLength `1`
   * @maxLength `100`
   * @pattern `^[-a-z0-9]*$`
   */
  AssociationId: string;
};
/**
 * Type definition for `AWS::Connect::InstanceStorageConfig.EncryptionConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-instancestorageconfig-encryptionconfig.html}
 */
export type EncryptionConfig = {
  /**
   * Specifies default encryption using AWS KMS-Managed Keys
   */
  EncryptionType: EncryptionType;
  /**
   * Specifies the encryption key id
   * @minLength `1`
   * @maxLength `128`
   */
  KeyId: string;
};
/**
 * Type definition for `AWS::Connect::InstanceStorageConfig.EncryptionType`.
 * Specifies default encryption using AWS KMS-Managed Keys
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-instancestorageconfig-encryptiontype.html}
 */
export type EncryptionType = "KMS";
/**
 * Type definition for `AWS::Connect::InstanceStorageConfig.InstanceStorageResourceType`.
 * Specifies the type of storage resource available for the instance
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-instancestorageconfig-instancestorageresourcetype.html}
 */
export type InstanceStorageResourceType =
  | "CHAT_TRANSCRIPTS"
  | "CALL_RECORDINGS"
  | "SCHEDULED_REPORTS"
  | "MEDIA_STREAMS"
  | "CONTACT_TRACE_RECORDS"
  | "AGENT_EVENTS";
/**
 * Type definition for `AWS::Connect::InstanceStorageConfig.KinesisFirehoseConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-instancestorageconfig-kinesisfirehoseconfig.html}
 */
export type KinesisFirehoseConfig = {
  /**
   * An ARN is a unique AWS resource identifier.
   * @pattern `^arn:aws[-a-z0-9]*:firehose:[-a-z0-9]*:[0-9]{12}:deliverystream/[-a-zA-Z0-9_.]*$`
   */
  FirehoseArn: string;
};
/**
 * Type definition for `AWS::Connect::InstanceStorageConfig.KinesisStreamConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-instancestorageconfig-kinesisstreamconfig.html}
 */
export type KinesisStreamConfig = {
  /**
   * An ARN is a unique AWS resource identifier.
   * @pattern `^arn:aws[-a-z0-9]*:kinesis:[-a-z0-9]*:[0-9]{12}:stream/[-a-zA-Z0-9_.]*$`
   */
  StreamArn: string;
};
/**
 * Type definition for `AWS::Connect::InstanceStorageConfig.KinesisVideoStreamConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-instancestorageconfig-kinesisvideostreamconfig.html}
 */
export type KinesisVideoStreamConfig = {
  EncryptionConfig: EncryptionConfig;
  /**
   * Prefixes are used to infer logical hierarchy
   * @minLength `1`
   * @maxLength `128`
   */
  Prefix: string;
  /**
   * Number of hours
   */
  RetentionPeriodHours: number;
};
/**
 * Type definition for `AWS::Connect::InstanceStorageConfig.S3Config`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-instancestorageconfig-s3config.html}
 */
export type S3Config = {
  /**
   * A name for the S3 Bucket
   * @minLength `1`
   * @maxLength `128`
   */
  BucketName: string;
  /**
   * Prefixes are used to infer logical hierarchy
   * @minLength `1`
   * @maxLength `128`
   */
  BucketPrefix: string;
  EncryptionConfig?: EncryptionConfig;
};
/**
 * Type definition for `AWS::Connect::InstanceStorageConfig.StorageType`.
 * Specifies the storage type to be associated with the instance
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-instancestorageconfig-storagetype.html}
 */
export type StorageType =
  | "S3"
  | "KINESIS_VIDEO_STREAM"
  | "KINESIS_STREAM"
  | "KINESIS_FIREHOSE";
/**
 * Resource Type definition for AWS::Connect::InstanceStorageConfig
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-instancestorageconfig.html}
 */
export class ConnectInstanceStorageConfig extends $Resource<
  "AWS::Connect::InstanceStorageConfig",
  ConnectInstanceStorageConfigProperties,
  ConnectInstanceStorageConfigAttributes
> {
  public static readonly Type = "AWS::Connect::InstanceStorageConfig";
  constructor(
    logicalId: string,
    properties: ConnectInstanceStorageConfigProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, ConnectInstanceStorageConfig.Type, properties, options);
  }
}
