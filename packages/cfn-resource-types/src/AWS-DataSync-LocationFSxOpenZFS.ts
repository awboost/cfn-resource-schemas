import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource schema for AWS::DataSync::LocationFSxOpenZFS.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationfsxopenzfs.html}
 */
export type DataSyncLocationFSxOpenZFSProperties = {
  /**
   * The Amazon Resource Name (ARN) for the FSx OpenZFS file system.
   * @maxLength `128`
   * @pattern `^arn:(aws|aws-cn|aws-us-gov|aws-iso|aws-iso-b):fsx:[a-z\-0-9]+:[0-9]{12}:file-system/fs-[0-9a-f]+$`
   */
  FsxFilesystemArn?: string;
  /**
   * Configuration settings for an NFS or SMB protocol, currently only support NFS
   */
  Protocol: Protocol;
  /**
   * The ARNs of the security groups that are to use to configure the FSx OpenZFS file system.
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
 * Attribute type definition for `AWS::DataSync::LocationFSxOpenZFS`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationfsxopenzfs.html#aws-resource-datasync-locationfsxopenzfs-return-values}
 */
export type DataSyncLocationFSxOpenZFSAttributes = {
  /**
   * The Amazon Resource Name (ARN) of the Amazon FSx OpenZFS file system location that is created.
   * @maxLength `128`
   * @pattern `^arn:(aws|aws-cn|aws-us-gov|aws-iso|aws-iso-b):datasync:[a-z\-0-9]+:[0-9]{12}:location/loc-[0-9a-z]{17}$`
   */
  LocationArn: string;
  /**
   * The URL of the FSx OpenZFS that was described.
   * @maxLength `4356`
   * @pattern `^(efs|nfs|s3|smb|fsxw|hdfs|fsxl|fsxz)://[a-zA-Z0-9.:/\-]+$`
   */
  LocationUri: string;
};
/**
 * Type definition for `AWS::DataSync::LocationFSxOpenZFS.MountOptions`.
 * The NFS mount options that DataSync can use to mount your NFS share.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datasync-locationfsxopenzfs-mountoptions.html}
 */
export type MountOptions = {
  /**
   * The specific NFS version that you want DataSync to use to mount your NFS share.
   */
  Version?: "AUTOMATIC" | "NFS3" | "NFS4_0" | "NFS4_1";
};
/**
 * Type definition for `AWS::DataSync::LocationFSxOpenZFS.NFS`.
 * FSx OpenZFS file system NFS protocol information
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datasync-locationfsxopenzfs-nfs.html}
 */
export type NFS = {
  /**
   * The NFS mount options that DataSync can use to mount your NFS share.
   */
  MountOptions: MountOptions;
};
/**
 * Type definition for `AWS::DataSync::LocationFSxOpenZFS.Protocol`.
 * Configuration settings for an NFS or SMB protocol, currently only support NFS
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datasync-locationfsxopenzfs-protocol.html}
 */
export type Protocol = {
  /**
   * FSx OpenZFS file system NFS protocol information
   */
  NFS?: NFS;
};
/**
 * Type definition for `AWS::DataSync::LocationFSxOpenZFS.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datasync-locationfsxopenzfs-tag.html}
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
 * Resource schema for AWS::DataSync::LocationFSxOpenZFS.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationfsxopenzfs.html}
 */
export class DataSyncLocationFSxOpenZFS extends $Resource<
  "AWS::DataSync::LocationFSxOpenZFS",
  DataSyncLocationFSxOpenZFSProperties,
  DataSyncLocationFSxOpenZFSAttributes
> {
  public static readonly Type = "AWS::DataSync::LocationFSxOpenZFS";
  constructor(
    logicalId: string,
    properties: DataSyncLocationFSxOpenZFSProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, DataSyncLocationFSxOpenZFS.Type, properties, options);
  }
}
