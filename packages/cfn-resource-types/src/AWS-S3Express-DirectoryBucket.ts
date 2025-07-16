import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::S3Express::DirectoryBucket.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3express-directorybucket.html}
 */
export type S3ExpressDirectoryBucketProperties = {
  /**
   * Specifies default encryption for a bucket using server-side encryption with Amazon S3 managed keys (SSE-S3) or AWS KMS keys (SSE-KMS).
   */
  BucketEncryption?: BucketEncryption;
  /**
   * Specifies a name for the bucket. The bucket name must contain only lowercase letters, numbers, and hyphens (-). A directory bucket name must be unique in the chosen Availability Zone or Local Zone. The bucket name must also follow the format 'bucket_base_name--zone_id--x-s3'. The zone_id can be the ID of an Availability Zone or a Local Zone. If you don't specify a name, AWS CloudFormation generates a unique physical ID and uses that ID for the bucket name.
   * @maxLength `63`
   * @pattern `^[a-z0-9][a-z0-9//.//-]*[a-z0-9]$`
   */
  BucketName?: string;
  /**
   * Specifies the number of Availability Zone or Local Zone that's used for redundancy for the bucket.
   */
  DataRedundancy: "SingleAvailabilityZone" | "SingleLocalZone";
  /**
   * Lifecycle rules that define how Amazon S3 Express manages objects during their lifetime.
   */
  LifecycleConfiguration?: LifecycleConfiguration;
  /**
   * Specifies the Zone ID of the Availability Zone or Local Zone where the directory bucket will be created. An example Availability Zone ID value is 'use1-az5'.
   */
  LocationName: string;
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::S3Express::DirectoryBucket`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3express-directorybucket.html#aws-resource-s3express-directorybucket-return-values}
 */
export type S3ExpressDirectoryBucketAttributes = {
  /**
   * Returns the Amazon Resource Name (ARN) of the specified bucket.
   */
  Arn: string;
  /**
   * Returns the code for the Availability Zone or Local Zone where the directory bucket was created. An example for the code of an Availability Zone is 'us-east-1f'.
   */
  AvailabilityZoneName: string;
};
/**
 * Type definition for `AWS::S3Express::DirectoryBucket.AbortIncompleteMultipartUpload`.
 * Specifies the days since the initiation of an incomplete multipart upload that Amazon S3 will wait before permanently removing all parts of the upload.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3express-directorybucket-abortincompletemultipartupload.html}
 */
export type AbortIncompleteMultipartUpload = {
  /**
   * Specifies the number of days after which Amazon S3 aborts an incomplete multipart upload.
   * @min `0`
   */
  DaysAfterInitiation: number;
};
/**
 * Type definition for `AWS::S3Express::DirectoryBucket.BucketEncryption`.
 * Specifies default encryption for a bucket using server-side encryption with Amazon S3 managed keys (SSE-S3) or AWS KMS keys (SSE-KMS).
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3express-directorybucket-bucketencryption.html}
 */
export type BucketEncryption = {
  /**
   * Specifies the default server-side-encryption configuration.
   */
  ServerSideEncryptionConfiguration: ServerSideEncryptionRule[];
};
/**
 * Type definition for `AWS::S3Express::DirectoryBucket.LifecycleConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3express-directorybucket-lifecycleconfiguration.html}
 */
export type LifecycleConfiguration = {
  /**
   * A lifecycle rule for individual objects in an Amazon S3 Express bucket.
   */
  Rules: Rule[];
};
/**
 * Type definition for `AWS::S3Express::DirectoryBucket.Rule`.
 * You must specify at least one of the following properties: AbortIncompleteMultipartUpload, or ExpirationInDays.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3express-directorybucket-rule.html}
 */
export type Rule = {
  /**
   * Specifies the days since the initiation of an incomplete multipart upload that Amazon S3 will wait before permanently removing all parts of the upload.
   */
  AbortIncompleteMultipartUpload?: AbortIncompleteMultipartUpload;
  ExpirationInDays?: number;
  /**
   * @maxLength `255`
   */
  Id?: string;
  /**
   * @maxLength `20`
   * @pattern `[0-9]+`
   */
  ObjectSizeGreaterThan?: string;
  /**
   * @maxLength `20`
   * @pattern `[0-9]+`
   */
  ObjectSizeLessThan?: string;
  Prefix?: string;
  Status: "Enabled" | "Disabled";
};
/**
 * Type definition for `AWS::S3Express::DirectoryBucket.ServerSideEncryptionByDefault`.
 * Specifies the default server-side encryption to apply to new objects in the bucket. If a PUT Object request doesn't specify any server-side encryption, this default encryption will be applied.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3express-directorybucket-serversideencryptionbydefault.html}
 */
export type ServerSideEncryptionByDefault = {
  /**
   * AWS Key Management Service (KMS) customer managed key ID to use for the default encryption. This parameter is allowed only if SSEAlgorithm is set to aws:kms. You can specify this parameter with the key ID or the Amazon Resource Name (ARN) of the KMS key
   */
  KMSMasterKeyID?: string;
  SSEAlgorithm: "aws:kms" | "AES256";
};
/**
 * Type definition for `AWS::S3Express::DirectoryBucket.ServerSideEncryptionRule`.
 * Specifies the default server-side encryption configuration.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3express-directorybucket-serversideencryptionrule.html}
 */
export type ServerSideEncryptionRule = {
  /**
   * Specifies whether Amazon S3 should use an S3 Bucket Key with server-side encryption using KMS (SSE-KMS) for new objects in the bucket. Existing objects are not affected. Amazon S3 Express One Zone uses an S3 Bucket Key with SSE-KMS and S3 Bucket Key cannot be disabled. It's only allowed to set the BucketKeyEnabled element to true.
   */
  BucketKeyEnabled?: boolean;
  /**
   * Specifies the default server-side encryption to apply to new objects in the bucket. If a PUT Object request doesn't specify any server-side encryption, this default encryption will be applied.
   */
  ServerSideEncryptionByDefault?: ServerSideEncryptionByDefault;
};
/**
 * Type definition for `AWS::S3Express::DirectoryBucket.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3express-directorybucket-tag.html}
 */
export type Tag = {
  /**
   * @minLength `1`
   * @maxLength `128`
   * @pattern `^(?!aws:.*)([\p{L}\p{Z}\p{N}_.:=+\/\-@%]*)$`
   */
  Key: string;
  /**
   * @minLength `0`
   * @maxLength `256`
   * @pattern `^([\p{L}\p{Z}\p{N}_.:=+\/\-@%]*)$`
   */
  Value: string;
};
/**
 * Resource Type definition for AWS::S3Express::DirectoryBucket.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3express-directorybucket.html}
 */
export class S3ExpressDirectoryBucket extends $Resource<
  "AWS::S3Express::DirectoryBucket",
  S3ExpressDirectoryBucketProperties,
  S3ExpressDirectoryBucketAttributes
> {
  public static readonly Type = "AWS::S3Express::DirectoryBucket";
  constructor(
    logicalId: string,
    properties: S3ExpressDirectoryBucketProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, S3ExpressDirectoryBucket.Type, properties, options);
  }
}
