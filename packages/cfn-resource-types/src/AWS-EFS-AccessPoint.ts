import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::EFS::AccessPoint
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-efs-accesspoint.html}
 */
export type EFSAccessPointProperties = {
  AccessPointTags?: AccessPointTag[];
  /**
   * (optional) A string of up to 64 ASCII characters that Amazon EFS uses to ensure idempotent creation.
   */
  ClientToken?: string;
  /**
   * The ID of the EFS file system that the access point provides access to.
   */
  FileSystemId: string;
  /**
   * The operating system user and group applied to all file system requests made using the access point.
   */
  PosixUser?: PosixUser;
  /**
   * Specifies the directory on the Amazon EFS file system that the access point exposes as the root directory of your file system to NFS clients using the access point. The clients using the access point can only access the root directory and below. If the RootDirectory>Path specified does not exist, EFS creates it and applies the CreationInfo settings when a client connects to an access point. When specifying a RootDirectory, you need to provide the Path, and the CreationInfo is optional.
   */
  RootDirectory?: RootDirectory;
};
/**
 * Attribute type definition for `AWS::EFS::AccessPoint`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-efs-accesspoint.html#aws-resource-efs-accesspoint-return-values}
 */
export type EFSAccessPointAttributes = {
  AccessPointId: string;
  Arn: string;
};
/**
 * Type definition for `AWS::EFS::AccessPoint.AccessPointTag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-efs-accesspoint-accesspointtag.html}
 */
export type AccessPointTag = {
  /**
   * @minLength `1`
   * @maxLength `128`
   */
  Key?: string;
  /**
   * @minLength `1`
   * @maxLength `256`
   */
  Value?: string;
};
/**
 * Type definition for `AWS::EFS::AccessPoint.CreationInfo`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-efs-accesspoint-creationinfo.html}
 */
export type CreationInfo = {
  /**
   * Specifies the POSIX group ID to apply to the RootDirectory. Accepts values from 0 to 2^32 (4294967295).
   */
  OwnerGid: string;
  /**
   * Specifies the POSIX user ID to apply to the RootDirectory. Accepts values from 0 to 2^32 (4294967295).
   */
  OwnerUid: string;
  /**
   * Specifies the POSIX permissions to apply to the RootDirectory, in the format of an octal number representing the file's mode bits.
   * @pattern `^[0-7]{3,4}$`
   */
  Permissions: string;
};
/**
 * Type definition for `AWS::EFS::AccessPoint.PosixUser`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-efs-accesspoint-posixuser.html}
 */
export type PosixUser = {
  /**
   * The POSIX group ID used for all file system operations using this access point.
   */
  Gid: string;
  /**
   * Secondary POSIX group IDs used for all file system operations using this access point.
   */
  SecondaryGids?: string[];
  /**
   * The POSIX user ID used for all file system operations using this access point.
   */
  Uid: string;
};
/**
 * Type definition for `AWS::EFS::AccessPoint.RootDirectory`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-efs-accesspoint-rootdirectory.html}
 */
export type RootDirectory = {
  /**
   * (Optional) Specifies the POSIX IDs and permissions to apply to the access point's RootDirectory. If the RootDirectory>Path specified does not exist, EFS creates the root directory using the CreationInfo settings when a client connects to an access point. When specifying the CreationInfo, you must provide values for all properties.   If you do not provide CreationInfo and the specified RootDirectory>Path does not exist, attempts to mount the file system using the access point will fail.
   */
  CreationInfo?: CreationInfo;
  /**
   * Specifies the path on the EFS file system to expose as the root directory to NFS clients using the access point to access the EFS file system. A path can have up to four subdirectories. If the specified path does not exist, you are required to provide the CreationInfo.
   * @minLength `1`
   * @maxLength `100`
   */
  Path?: string;
};
/**
 * Resource Type definition for AWS::EFS::AccessPoint
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-efs-accesspoint.html}
 */
export class EFSAccessPoint extends $Resource<
  "AWS::EFS::AccessPoint",
  EFSAccessPointProperties,
  EFSAccessPointAttributes
> {
  public static readonly Type = "AWS::EFS::AccessPoint";
  constructor(
    logicalId: string,
    properties: EFSAccessPointProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, EFSAccessPoint.Type, properties, options);
  }
}
