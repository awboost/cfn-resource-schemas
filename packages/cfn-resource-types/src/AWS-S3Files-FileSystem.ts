import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::S3Files::FileSystem
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3files-filesystem.html}
 */
export type S3FilesFileSystemProperties = {
  AcceptBucketWarning?: boolean;
  /**
   * @pattern `^(arn:aws[a-zA-Z0-9-]*:s3:::.+)$`
   */
  Bucket: string;
  /**
   * @minLength `1`
   * @maxLength `64`
   * @pattern `^(.+)$`
   */
  ClientToken?: string;
  /**
   * @maxLength `2048`
   * @pattern `^([0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}|mrk-[0-9a-f]{32}|alias/[a-zA-Z0-9/_-]+|(arn:aws[-a-z]*:kms:[a-z0-9-]+:\d{12}:((key/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})|(key/mrk-[0-9a-f]{32})|(alias/[a-zA-Z0-9/_-]+))))$`
   */
  KmsKeyId?: string;
  /**
   * @maxLength `1024`
   * @pattern `^(|./‍*)$`
   */
  Prefix?: string;
  /**
   * @maxLength `2048`
   * @pattern `^arn:(aws[a-zA-Z-]*)?:iam::\d{12}:role/?[a-zA-Z_0-9+=,.@\-_/]+$`
   */
  RoleArn: string;
  SynchronizationConfiguration?: SynchronizationConfiguration;
  /**
   * @maxLength `50`
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::S3Files::FileSystem`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3files-filesystem.html#aws-resource-s3files-filesystem-return-values}
 */
export type S3FilesFileSystemAttributes = {
  CreationTime: string;
  /**
   * @pattern `^(arn:aws[-a-z]*:s3files:[0-9a-z-:]+:file-system/fs-[0-9a-f]{17,40})$`
   */
  FileSystemArn: string;
  /**
   * @maxLength `128`
   * @pattern `^(arn:aws[-a-z]*:s3files:[0-9a-z-:]+:file-system/fs-[0-9a-f]{17,40}|fs-[0-9a-f]{17,40})$`
   */
  FileSystemId: string;
  OwnerId: string;
  Status:
    | "creating"
    | "available"
    | "updating"
    | "deleting"
    | "deleted"
    | "error";
  StatusMessage: string;
  SynchronizationConfiguration: {
    LatestVersionNumber: number;
  };
};
/**
 * Type definition for `AWS::S3Files::FileSystem.ExpirationDataRule`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3files-filesystem-expirationdatarule.html}
 */
export type ExpirationDataRule = {
  /**
   * @min `1`
   * @max `365`
   */
  DaysAfterLastAccess: number;
};
/**
 * Type definition for `AWS::S3Files::FileSystem.ImportDataRule`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3files-filesystem-importdatarule.html}
 */
export type ImportDataRule = {
  /**
   * @minLength `0`
   * @maxLength `1024`
   * @pattern `^(|./‍*)$`
   */
  Prefix: string;
  /**
   * @min `0`
   * @max `52673613135872`
   */
  SizeLessThan: number;
  Trigger: "ON_DIRECTORY_FIRST_ACCESS" | "ON_FILE_ACCESS";
};
/**
 * Type definition for `AWS::S3Files::FileSystem.SynchronizationConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3files-filesystem-synchronizationconfiguration.html}
 */
export type SynchronizationConfiguration = {
  /**
   * @minLength `1`
   * @maxLength `1`
   */
  ExpirationDataRules: ExpirationDataRule[];
  /**
   * @minLength `1`
   * @maxLength `10`
   */
  ImportDataRules: ImportDataRule[];
};
/**
 * Type definition for `AWS::S3Files::FileSystem.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3files-filesystem-tag.html}
 */
export type Tag = {
  /**
   * @minLength `1`
   * @maxLength `128`
   * @pattern `^([\p{L}\p{Z}\p{N}_.:/=+\-@]+)$`
   */
  Key: string;
  /**
   * @maxLength `256`
   * @pattern `^([\p{L}\p{Z}\p{N}_.:/=+\-@]*)$`
   */
  Value: string;
};
/**
 * Resource Type definition for AWS::S3Files::FileSystem
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3files-filesystem.html}
 */
export class S3FilesFileSystem extends $Resource<
  "AWS::S3Files::FileSystem",
  S3FilesFileSystemProperties,
  S3FilesFileSystemAttributes
> {
  public static readonly Type = "AWS::S3Files::FileSystem";
  constructor(
    logicalId: string,
    properties: S3FilesFileSystemProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, S3FilesFileSystem.Type, properties, options);
  }
}
