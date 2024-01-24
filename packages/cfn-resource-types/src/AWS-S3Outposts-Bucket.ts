import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type Definition for AWS::S3Outposts::Bucket
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3outposts-bucket.html}
 */
export type S3OutpostsBucketProperties = {
  /**
   * A name for the bucket.
   * @minLength `3`
   * @maxLength `63`
   * @pattern `(?=^.{3,63}$)(?!^(\d+\.)+\d+$)(^(([a-z0-9]|[a-z0-9][a-z0-9\-]*[a-z0-9])\.)*([a-z0-9]|[a-z0-9][a-z0-9\-]*[a-z0-9])$)`
   */
  BucketName: string;
  /**
   * Rules that define how Amazon S3Outposts manages objects during their lifetime.
   */
  LifecycleConfiguration?: LifecycleConfiguration;
  /**
   * The id of the customer outpost on which the bucket resides.
   * @pattern `^(op-[a-f0-9]{17}|\d{12}|ec2)$`
   */
  OutpostId: string;
  /**
   * An arbitrary set of tags (key-value pairs) for this S3Outposts bucket.
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::S3Outposts::Bucket`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3outposts-bucket.html#aws-resource-s3outposts-bucket-return-values}
 */
export type S3OutpostsBucketAttributes = {
  /**
   * The Amazon Resource Name (ARN) of the specified bucket.
   * @minLength `20`
   * @maxLength `2048`
   * @pattern `^arn:[^:]+:s3-outposts:[a-zA-Z0-9\-]+:\d{12}:outpost\/[^:]+\/bucket\/[^:]+$`
   */
  Arn: string;
};
/**
 * Type definition for `AWS::S3Outposts::Bucket.AbortIncompleteMultipartUpload`.
 * Specifies the days since the initiation of an incomplete multipart upload that Amazon S3Outposts will wait before permanently removing all parts of the upload.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3outposts-bucket-abortincompletemultipartupload.html}
 */
export type AbortIncompleteMultipartUpload = {
  /**
   * Specifies the number of days after which Amazon S3Outposts aborts an incomplete multipart upload.
   * @min `0`
   */
  DaysAfterInitiation: number;
};
/**
 * Type definition for `AWS::S3Outposts::Bucket.FilterAndOperator`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3outposts-bucket-filterandoperator.html}
 */
export type FilterAndOperator = {
  /**
   * Prefix identifies one or more objects to which the rule applies.
   */
  Prefix?: string;
  /**
   * All of these tags must exist in the object's tag set in order for the rule to apply.
   * @minLength `1`
   */
  Tags: FilterTag[];
};
/**
 * Type definition for `AWS::S3Outposts::Bucket.FilterTag`.
 * Tag used to identify a subset of objects for an Amazon S3Outposts bucket.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3outposts-bucket-filtertag.html}
 */
export type FilterTag = {
  /**
   * @minLength `1`
   * @maxLength `1024`
   * @pattern `^([\p{L}\p{Z}\p{N}_.:=+\/\-@%]*)$`
   */
  Key: string;
  /**
   * @minLength `1`
   * @maxLength `1024`
   * @pattern `^([\p{L}\p{Z}\p{N}_.:=+\/\-@%]*)$`
   */
  Value: string;
};
/**
 * Type definition for `AWS::S3Outposts::Bucket.LifecycleConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3outposts-bucket-lifecycleconfiguration.html}
 */
export type LifecycleConfiguration = {
  /**
   * A list of lifecycle rules for individual objects in an Amazon S3Outposts bucket.
   */
  Rules: Rule[];
};
/**
 * Type definition for `AWS::S3Outposts::Bucket.Rule`.
 * Specifies lifecycle rules for an Amazon S3Outposts bucket. You must specify at least one of the following: AbortIncompleteMultipartUpload, ExpirationDate, ExpirationInDays.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3outposts-bucket-rule.html}
 */
export type Rule = {
  /**
   * Specifies a lifecycle rule that stops incomplete multipart uploads to an Amazon S3Outposts bucket.
   */
  AbortIncompleteMultipartUpload?: AbortIncompleteMultipartUpload;
  /**
   * Indicates when objects are deleted from Amazon S3Outposts. The date value must be in ISO 8601 format. The time is always midnight UTC.
   * @pattern `^([0-2]\d{3})-(0[0-9]|1[0-2])-([0-2]\d|3[01])T([01]\d|2[0-4]):([0-5]\d):([0-6]\d)((\.\d{3})?)Z$`
   */
  ExpirationDate?: string;
  /**
   * Indicates the number of days after creation when objects are deleted from Amazon S3Outposts.
   * @min `1`
   */
  ExpirationInDays?: number;
  /**
   * The container for the filter of the lifecycle rule.
   */
  Filter?: {
    /**
     * The container for the AND condition for the lifecycle rule. A combination of Prefix and 1 or more Tags OR a minimum of 2 or more tags.
     */
    AndOperator?: FilterAndOperator;
    /**
     * Object key prefix that identifies one or more objects to which this rule applies.
     */
    Prefix?: string;
    /**
     * Specifies a tag used to identify a subset of objects for an Amazon S3Outposts bucket.
     */
    Tag?: FilterTag;
  };
  /**
   * Unique identifier for the lifecycle rule. The value can't be longer than 255 characters.
   * @maxLength `255`
   */
  Id?: string;
  Status?: "Enabled" | "Disabled";
};
/**
 * Type definition for `AWS::S3Outposts::Bucket.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3outposts-bucket-tag.html}
 */
export type Tag = {
  /**
   * @minLength `1`
   * @maxLength `1024`
   * @pattern `^(?!aws:.*)([\p{L}\p{Z}\p{N}_.:=+\/\-@%]*)$`
   */
  Key: string;
  /**
   * @minLength `1`
   * @maxLength `1024`
   * @pattern `^([\p{L}\p{Z}\p{N}_.:=+\/\-@%]*)$`
   */
  Value: string;
};
/**
 * Resource Type Definition for AWS::S3Outposts::Bucket
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3outposts-bucket.html}
 */
export class S3OutpostsBucket extends $Resource<
  "AWS::S3Outposts::Bucket",
  S3OutpostsBucketProperties,
  S3OutpostsBucketAttributes
> {
  public static readonly Type = "AWS::S3Outposts::Bucket";
  constructor(
    logicalId: string,
    properties: S3OutpostsBucketProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, S3OutpostsBucket.Type, properties, options);
  }
}
