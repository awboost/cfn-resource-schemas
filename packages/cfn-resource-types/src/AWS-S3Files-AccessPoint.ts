import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::S3Files::AccessPoint
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3files-accesspoint.html}
 */
export type S3FilesAccessPointProperties = {
  /**
   * (optional) A string of up to 64 ASCII characters that Amazon EFS uses to ensure idempotent creation.
   * @minLength `1`
   * @maxLength `64`
   * @pattern `^(.+)$`
   */
  ClientToken?: string;
  /**
   * The ID of the S3 Files file system that the access point provides access to.
   * @maxLength `128`
   * @pattern `^(arn:aws[-a-z]*:s3files:[0-9a-z-:]+:file-system/fs-[0-9a-f]{17,40}|fs-[0-9a-f]{17,40})$`
   */
  FileSystemId: string;
  /**
   * The operating system user and group applied to all compute drive requests made using the access point.
   */
  PosixUser?: PosixUser;
  /**
   * Specifies the directory on the Amazon EFS file system that the access point exposes as the root directory of your file system to NFS clients using the access point. The clients using the access point can only access the root directory and below. If the RootDirectory>Path specified does not exist, EFS creates it and applies the CreationPermissions settings when a client connects to an access point. When specifying a RootDirectory, you need to provide the Path, and the CreationPermissions is optional.
   */
  RootDirectory?: RootDirectory;
  /**
   * @maxLength `50`
   */
  Tags?: AccessPointTag[];
};
/**
 * Attribute type definition for `AWS::S3Files::AccessPoint`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3files-accesspoint.html#aws-resource-s3files-accesspoint-return-values}
 */
export type S3FilesAccessPointAttributes = {
  /**
   * @maxLength `256`
   * @pattern `^arn:aws[-a-z]*:s3files:[0-9a-z-:]+:file-system/fs-[0-9a-f]{17,40}/access-point/fsap-[0-9a-f]{17,40}$`
   */
  AccessPointArn: string;
  /**
   * @maxLength `256`
   * @pattern `^(arn:aws[-a-z]*:s3files:[0-9a-z-:]+:file-system/fs-[0-9a-f]{17,40}/access-point/fsap-[0-9a-f]{17,40}|fsap-[0-9a-f]{17,40})$`
   */
  AccessPointId: string;
  /**
   * @maxLength `12`
   * @pattern `^((\d{12})|(\d{4}-\d{4}-\d{4}))$`
   */
  OwnerId: string;
  Status:
    | "available"
    | "creating"
    | "updating"
    | "deleting"
    | "deleted"
    | "error";
};
/**
 * Type definition for `AWS::S3Files::AccessPoint.AccessPointTag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3files-accesspoint-accesspointtag.html}
 */
export type AccessPointTag = {
  /**
   * @minLength `1`
   * @maxLength `128`
   */
  Key?: string;
  /**
   * @maxLength `256`
   */
  Value?: string;
};
/**
 * Type definition for `AWS::S3Files::AccessPoint.CreationPermissions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3files-accesspoint-creationpermissions.html}
 */
export type CreationPermissions = {
  /**
   * Specifies the POSIX group ID to apply to the RootDirectory. Accepts values from 0 to 2^32 (4294967295).
   * @pattern `^[0-9]+$`
   */
  OwnerGid: string;
  /**
   * Specifies the POSIX user ID to apply to the RootDirectory. Accepts values from 0 to 2^32 (4294967295).
   * @pattern `^[0-9]+$`
   */
  OwnerUid: string;
  /**
   * Specifies the POSIX permissions to apply to the RootDirectory, in the format of an octal number representing the file's mode bits.
   * @pattern `^[0-7]{3,4}$`
   */
  Permissions: string;
};
/**
 * Type definition for `AWS::S3Files::AccessPoint.PosixUser`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3files-accesspoint-posixuser.html}
 */
export type PosixUser = {
  /**
   * The POSIX group ID used for all file system operations using this access point.
   * @pattern `^[0-9]+$`
   */
  Gid: string;
  /**
   * Secondary POSIX group IDs used for all file system operations using this access point.
   */
  SecondaryGids?: string[];
  /**
   * The POSIX user ID used for all file system operations using this access point.
   * @pattern `^[0-9]+$`
   */
  Uid: string;
};
/**
 * Type definition for `AWS::S3Files::AccessPoint.RootDirectory`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3files-accesspoint-rootdirectory.html}
 */
export type RootDirectory = {
  /**
   * (Optional) Specifies the POSIX IDs and permissions to apply to the access point's RootDirectory. If the RootDirectory>Path specified does not exist, EFS creates the root directory using the CreationPermissions settings when a client connects to an access point. When specifying the CreationPermissions, you must provide values for all properties.   If you do not provide CreationPermissions and the specified RootDirectory>Path does not exist, attempts to mount the file system using the access point will fail.
   */
  CreationPermissions?: CreationPermissions;
  /**
   * Specifies the path on the EFS file system to expose as the root directory to NFS clients using the access point to access the EFS file system. A path can have up to four subdirectories. If the specified path does not exist, you are required to provide the CreationPermissions.
   * @minLength `1`
   * @maxLength `100`
   * @pattern `^(\/|(\/(?!\.)+[^$#<>;;`|&?{}^/‍*\n]+){1,4})$`
   */
  Path?: string;
};
/**
 * Resource Type definition for AWS::S3Files::AccessPoint
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3files-accesspoint.html}
 */
export class S3FilesAccessPoint extends $Resource<
  "AWS::S3Files::AccessPoint",
  S3FilesAccessPointProperties,
  S3FilesAccessPointAttributes
> {
  public static readonly Type = "AWS::S3Files::AccessPoint";
  constructor(
    logicalId: string,
    properties: S3FilesAccessPointProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, S3FilesAccessPoint.Type, properties, options);
  }
}
