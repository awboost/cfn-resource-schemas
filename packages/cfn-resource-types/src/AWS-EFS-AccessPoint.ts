import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * The ``AWS::EFS::AccessPoint`` resource creates an EFS access point. An access point is an application-specific view into an EFS file system that applies an operating system user and group, and a file system path, to any file system request made through the access point. The operating system user and group override any identity information provided by the NFS client. The file system path is exposed as the access point's root directory. Applications using the access point can only access data in its own directory and below. To learn more, see [Mounting a file system using EFS access points](https://docs.aws.amazon.com/efs/latest/ug/efs-access-points.html).
 This operation requires permissions for the ``elasticfilesystem:CreateAccessPoint`` action.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-efs-accesspoint.html}
 */
export type EFSAccessPointProperties = {
  /**
     * An array of key-value pairs to apply to this resource.
     For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html).
     */
  AccessPointTags?: AccessPointTag[];
  /**
   * The opaque string specified in the request to ensure idempotent creation.
   */
  ClientToken?: string;
  /**
   * The ID of the EFS file system that the access point applies to. Accepts only the ID format for input when specifying a file system, for example ``fs-0123456789abcedf2``.
   */
  FileSystemId: string;
  /**
   * The full POSIX identity, including the user ID, group ID, and secondary group IDs on the access point that is used for all file operations by NFS clients using the access point.
   */
  PosixUser?: PosixUser;
  /**
   * The directory on the EFS file system that the access point exposes as the root directory to NFS clients using the access point.
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
 * A tag is a key-value pair attached to a file system. Allowed characters in the ``Key`` and ``Value`` properties are letters, white space, and numbers that can be represented in UTF-8, and the following characters:``+ - = . _ : /``
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-efs-accesspoint-accesspointtag.html}
 */
export type AccessPointTag = {
  /**
   * The tag key (String). The key can't start with ``aws:``.
   * @minLength `1`
   * @maxLength `128`
   */
  Key?: string;
  /**
   * The value of the tag key.
   * @minLength `1`
   * @maxLength `256`
   */
  Value?: string;
};
/**
 * Type definition for `AWS::EFS::AccessPoint.CreationInfo`.
 * Required if the ``RootDirectory`` > ``Path`` specified does not exist. Specifies the POSIX IDs and permissions to apply to the access point's ``RootDirectory`` > ``Path``. If the access point root directory does not exist, EFS creates it with these settings when a client connects to the access point. When specifying ``CreationInfo``, you must include values for all properties.
 Amazon EFS creates a root directory only if you have provided the CreationInfo: OwnUid, OwnGID, and permissions for the directory. If you do not provide this information, Amazon EFS does not create the root directory. If the root directory does not exist, attempts to mount using the access point will fail.
  If you do not provide ``CreationInfo`` and the specified ``RootDirectory`` does not exist, attempts to mount the file system using the access point will fail.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-efs-accesspoint-creationinfo.html}
 */
export type CreationInfo = {
  /**
   * Specifies the POSIX group ID to apply to the ``RootDirectory``. Accepts values from 0 to 2^32 (4294967295).
   */
  OwnerGid: string;
  /**
   * Specifies the POSIX user ID to apply to the ``RootDirectory``. Accepts values from 0 to 2^32 (4294967295).
   */
  OwnerUid: string;
  /**
   * Specifies the POSIX permissions to apply to the ``RootDirectory``, in the format of an octal number representing the file's mode bits.
   * @pattern `^[0-7]{3,4}$`
   */
  Permissions: string;
};
/**
 * Type definition for `AWS::EFS::AccessPoint.PosixUser`.
 * The full POSIX identity, including the user ID, group ID, and any secondary group IDs, on the access point that is used for all file system operations performed by NFS clients using the access point.
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
 * Specifies the directory on the Amazon EFS file system that the access point provides access to. The access point exposes the specified file system path as the root directory of your file system to applications using the access point. NFS clients using the access point can only access data in the access point's ``RootDirectory`` and its subdirectories.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-efs-accesspoint-rootdirectory.html}
 */
export type RootDirectory = {
  /**
     * (Optional) Specifies the POSIX IDs and permissions to apply to the access point's ``RootDirectory``. If the ``RootDirectory`` > ``Path`` specified does not exist, EFS creates the root directory using the ``CreationInfo`` settings when a client connects to an access point. When specifying the ``CreationInfo``, you must provide values for all properties.
      If you do not provide ``CreationInfo`` and the specified ``RootDirectory`` > ``Path`` does not exist, attempts to mount the file system using the access point will fail.
     */
  CreationInfo?: CreationInfo;
  /**
   * Specifies the path on the EFS file system to expose as the root directory to NFS clients using the access point to access the EFS file system. A path can have up to four subdirectories. If the specified path does not exist, you are required to provide the ``CreationInfo``.
   * @minLength `1`
   * @maxLength `100`
   */
  Path?: string;
};
/**
 * The ``AWS::EFS::AccessPoint`` resource creates an EFS access point. An access point is an application-specific view into an EFS file system that applies an operating system user and group, and a file system path, to any file system request made through the access point. The operating system user and group override any identity information provided by the NFS client. The file system path is exposed as the access point's root directory. Applications using the access point can only access data in its own directory and below. To learn more, see [Mounting a file system using EFS access points](https://docs.aws.amazon.com/efs/latest/ug/efs-access-points.html).
 This operation requires permissions for the ``elasticfilesystem:CreateAccessPoint`` action.
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
