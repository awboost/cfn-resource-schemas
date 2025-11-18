import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::S3Tables::TableBucket`.
 * Creates an Amazon S3 Tables table bucket in the same AWS Region where you create the AWS CloudFormation stack.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3tables-tablebucket.html}
 */
export type S3TablesTableBucketProperties = {
  /**
   * Specifies encryption settings for the table bucket
   */
  EncryptionConfiguration?: EncryptionConfiguration;
  /**
   * Settings governing the Metric configuration for the table bucket.
   */
  MetricsConfiguration?: MetricsConfiguration;
  /**
   * A name for the table bucket.
   * @minLength `3`
   * @maxLength `63`
   */
  TableBucketName: string;
  /**
   * User tags (key-value pairs) to associate with the table bucket.
   */
  Tags?: Tag[];
  /**
   * Settings governing the Unreferenced File Removal maintenance action. Unreferenced file removal identifies and deletes all objects that are not referenced by any table snapshots.
   */
  UnreferencedFileRemoval?: UnreferencedFileRemoval;
};
/**
 * Attribute type definition for `AWS::S3Tables::TableBucket`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3tables-tablebucket.html#aws-resource-s3tables-tablebucket-return-values}
 */
export type S3TablesTableBucketAttributes = {
  /**
   * The Amazon Resource Name (ARN) of the specified table bucket.
   */
  TableBucketARN: string;
};
/**
 * Type definition for `AWS::S3Tables::TableBucket.EncryptionConfiguration`.
 * Specifies encryption settings for the table bucket
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3tables-tablebucket-encryptionconfiguration.html}
 */
export type EncryptionConfiguration = {
  /**
   * ARN of the KMS key to use for encryption
   */
  KMSKeyArn?: string;
  /**
   * Server-side encryption algorithm
   */
  SSEAlgorithm?: "AES256" | "aws:kms";
};
/**
 * Type definition for `AWS::S3Tables::TableBucket.MetricsConfiguration`.
 * Settings governing the Metric configuration for the table bucket.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3tables-tablebucket-metricsconfiguration.html}
 */
export type MetricsConfiguration = {
  /**
   * Indicates whether Metrics are enabled.
   */
  Status?: "Enabled" | "Disabled";
};
/**
 * Type definition for `AWS::S3Tables::TableBucket.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3tables-tablebucket-tag.html}
 */
export type Tag = {
  /**
   * Tag key must be between 1 to 128 characters in length. Tag key cannot start with 'aws:' and can only contain alphanumeric characters, spaces, _, ., /, =, +, -, and @.
   * @minLength `1`
   * @maxLength `128`
   */
  Key: string;
  /**
   * Tag value must be between 0 to 256 characters in length. Tag value can only contain alphanumeric characters, spaces, _, ., /, =, +, -, and @.
   * @maxLength `256`
   */
  Value: string;
};
/**
 * Type definition for `AWS::S3Tables::TableBucket.UnreferencedFileRemoval`.
 * Settings governing the Unreferenced File Removal maintenance action. Unreferenced file removal identifies and deletes all objects that are not referenced by any table snapshots.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3tables-tablebucket-unreferencedfileremoval.html}
 */
export type UnreferencedFileRemoval = {
  /**
   * S3 permanently deletes noncurrent objects after the number of days specified by the NoncurrentDays property.
   * @min `1`
   */
  NoncurrentDays?: number;
  /**
   * Indicates whether the Unreferenced File Removal maintenance action is enabled.
   */
  Status?: "Enabled" | "Disabled";
  /**
   * For any object not referenced by your table and older than the UnreferencedDays property, S3 creates a delete marker and marks the object version as noncurrent.
   * @min `1`
   */
  UnreferencedDays?: number;
};
/**
 * Resource type definition for `AWS::S3Tables::TableBucket`.
 * Creates an Amazon S3 Tables table bucket in the same AWS Region where you create the AWS CloudFormation stack.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3tables-tablebucket.html}
 */
export class S3TablesTableBucket extends $Resource<
  "AWS::S3Tables::TableBucket",
  S3TablesTableBucketProperties,
  S3TablesTableBucketAttributes
> {
  public static readonly Type = "AWS::S3Tables::TableBucket";
  constructor(
    logicalId: string,
    properties: S3TablesTableBucketProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, S3TablesTableBucket.Type, properties, options);
  }
}
