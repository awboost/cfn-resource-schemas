import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource schema for AWS::DataSync::LocationS3
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locations3.html}
 */
export type DataSyncLocationS3Properties = {
  /**
   * The Amazon Resource Name (ARN) of the Amazon S3 bucket.
   * @maxLength `156`
   * @pattern `^arn:(aws|aws-cn|aws-us-gov|aws-iso|aws-iso-b):s3:[a-z\-0-9]*:[0-9]*:.*$`
   */
  S3BucketArn?: string;
  /**
   * The Amazon Resource Name (ARN) of the AWS IAM role that is used to access an Amazon S3 bucket.
   */
  S3Config: S3Config;
  /**
   * The Amazon S3 storage class you want to store your files in when this location is used as a task destination.
   */
  S3StorageClass?:
    | "STANDARD"
    | "STANDARD_IA"
    | "ONEZONE_IA"
    | "INTELLIGENT_TIERING"
    | "GLACIER"
    | "GLACIER_INSTANT_RETRIEVAL"
    | "DEEP_ARCHIVE";
  /**
   * A subdirectory in the Amazon S3 bucket. This subdirectory in Amazon S3 is used to read data from the S3 source location or write data to the S3 destination.
   * @maxLength `1024`
   * @pattern `^[\p{L}\p{M}\p{Z}\p{S}\p{N}\p{P}\p{C}]*$`
   */
  Subdirectory?: string;
  /**
   * An array of key-value pairs to apply to this resource.
   * @maxLength `50`
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::DataSync::LocationS3`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locations3.html#aws-resource-datasync-locations3-return-values}
 */
export type DataSyncLocationS3Attributes = {
  /**
   * The Amazon Resource Name (ARN) of the Amazon S3 bucket location.
   * @maxLength `128`
   * @pattern `^arn:(aws|aws-cn|aws-us-gov|aws-iso|aws-iso-b):datasync:[a-z\-0-9]+:[0-9]{12}:location/loc-[0-9a-z]{17}$`
   */
  LocationArn: string;
  /**
   * The URL of the S3 location that was described.
   * @maxLength `4356`
   * @pattern `^(efs|nfs|s3|smb|fsxw)://[a-zA-Z0-9.\-/]+$`
   */
  LocationUri: string;
};
/**
 * Type definition for `AWS::DataSync::LocationS3.S3Config`.
 * The Amazon Resource Name (ARN) of the AWS IAM role that is used to access an Amazon S3 bucket.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datasync-locations3-s3config.html}
 */
export type S3Config = {
  /**
   * The ARN of the IAM role of the Amazon S3 bucket.
   * @maxLength `2048`
   * @pattern `^arn:(aws|aws-cn|aws-us-gov|aws-iso|aws-iso-b):iam::[0-9]{12}:role/.*$`
   */
  BucketAccessRoleArn: string;
};
/**
 * Type definition for `AWS::DataSync::LocationS3.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datasync-locations3-tag.html}
 */
export type Tag = {
  /**
   * The key for an AWS resource tag.
   * @minLength `1`
   * @maxLength `256`
   * @pattern `^[a-zA-Z0-9\s+=._:/-]+$`
   */
  Key: string;
  /**
   * The value for an AWS resource tag.
   * @minLength `1`
   * @maxLength `256`
   * @pattern `^[a-zA-Z0-9\s+=._:@/-]+$`
   */
  Value: string;
};
/**
 * Resource schema for AWS::DataSync::LocationS3
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locations3.html}
 */
export class DataSyncLocationS3 extends $Resource<
  "AWS::DataSync::LocationS3",
  DataSyncLocationS3Properties,
  DataSyncLocationS3Attributes
> {
  public static readonly Type = "AWS::DataSync::LocationS3";
  public static readonly AttributeNames = [
    "LocationArn" as const,
    "LocationUri" as const,
  ];
  constructor(
    logicalId: string,
    properties: DataSyncLocationS3Properties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      DataSyncLocationS3.Type,
      properties,
      DataSyncLocationS3.AttributeNames,
      options,
    );
  }
}
