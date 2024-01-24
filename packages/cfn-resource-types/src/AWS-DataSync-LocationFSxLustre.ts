import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource schema for AWS::DataSync::LocationFSxLustre.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationfsxlustre.html}
 */
export type DataSyncLocationFSxLustreProperties = {
  /**
   * The Amazon Resource Name (ARN) for the FSx for Lustre file system.
   * @maxLength `128`
   * @pattern `^arn:(aws|aws-cn|aws-us-gov|aws-iso|aws-iso-b):fsx:[a-z\-0-9]+:[0-9]{12}:file-system/fs-[0-9a-f]+$`
   */
  FsxFilesystemArn?: string;
  /**
   * The ARNs of the security groups that are to use to configure the FSx for Lustre file system.
   * @minLength `1`
   * @maxLength `5`
   */
  SecurityGroupArns: string[];
  /**
   * A subdirectory in the location's path.
   * @maxLength `4096`
   * @pattern `^[a-zA-Z0-9_\-\+\./\(\)\$\p{Zs}]+$`
   */
  Subdirectory?: string;
  /**
   * An array of key-value pairs to apply to this resource.
   * @minLength `0`
   * @maxLength `50`
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::DataSync::LocationFSxLustre`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationfsxlustre.html#aws-resource-datasync-locationfsxlustre-return-values}
 */
export type DataSyncLocationFSxLustreAttributes = {
  /**
   * The Amazon Resource Name (ARN) of the Amazon FSx for Lustre file system location that is created.
   * @maxLength `128`
   * @pattern `^arn:(aws|aws-cn|aws-us-gov|aws-iso|aws-iso-b):datasync:[a-z\-0-9]+:[0-9]{12}:location/loc-[0-9a-z]{17}$`
   */
  LocationArn: string;
  /**
   * The URL of the FSx for Lustre location that was described.
   * @maxLength `4356`
   * @pattern `^(efs|nfs|s3|smb|fsxw|hdfs|fsxl)://[a-zA-Z0-9.:/\-]+$`
   */
  LocationUri: string;
};
/**
 * Type definition for `AWS::DataSync::LocationFSxLustre.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datasync-locationfsxlustre-tag.html}
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
 * Resource schema for AWS::DataSync::LocationFSxLustre.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationfsxlustre.html}
 */
export class DataSyncLocationFSxLustre extends $Resource<
  "AWS::DataSync::LocationFSxLustre",
  DataSyncLocationFSxLustreProperties,
  DataSyncLocationFSxLustreAttributes
> {
  public static readonly Type = "AWS::DataSync::LocationFSxLustre";
  constructor(
    logicalId: string,
    properties: DataSyncLocationFSxLustreProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, DataSyncLocationFSxLustre.Type, properties, options);
  }
}
