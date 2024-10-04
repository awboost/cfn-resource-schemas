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
   * Specifies a name for the bucket. The bucket name must contain only lowercase letters, numbers, and hyphens (-). A directory bucket name must be unique in the chosen Availability Zone. The bucket name must also follow the format 'bucket_base_name--az_id--x-s3' (for example, 'DOC-EXAMPLE-BUCKET--usw2-az1--x-s3'). If you don't specify a name, AWS CloudFormation generates a unique physical ID and uses that ID for the bucket name.
   * @maxLength `63`
   * @pattern `^[a-z0-9][a-z0-9//.//-]*[a-z0-9]$`
   */
  BucketName?: string;
  /**
   * Specifies the number of Availability Zone that's used for redundancy for the bucket.
   */
  DataRedundancy: "SingleAvailabilityZone";
  /**
   * Specifies the AZ ID of the Availability Zone where the directory bucket will be created. An example AZ ID value is 'use1-az5'.
   */
  LocationName: string;
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
   * Returns the code for the Availability Zone where the directory bucket was created.
   */
  AvailabilityZoneName: string;
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
