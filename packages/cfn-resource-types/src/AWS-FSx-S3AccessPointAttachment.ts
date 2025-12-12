import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for AWS::FSx::S3AccessPointAttachment
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-s3accesspointattachment.html}
 */
export type FSxS3AccessPointAttachmentProperties = {
  /**
   * The name of the S3 access point attachment; also used for the name of the S3 access point.
   * @minLength `3`
   * @maxLength `50`
   * @pattern `^(?=[a-z0-9])[a-z0-9-]{1,48}[a-z0-9]$`
   */
  Name: string;
  /**
   * The OntapConfiguration of the S3 access point attachment.
   */
  OntapConfiguration?: S3AccessPointOntapConfiguration;
  /**
   * The OpenZFSConfiguration of the S3 access point attachment.
   */
  OpenZFSConfiguration?: S3AccessPointOpenZFSConfiguration;
  /**
   * The S3 access point configuration of the S3 access point attachment.
   */
  S3AccessPoint?: S3AccessPoint;
  /**
   * The type of Amazon FSx volume that the S3 access point is attached to.
   */
  Type: "OPENZFS" | "ONTAP";
};
/**
 * Type definition for `AWS::FSx::S3AccessPointAttachment.FileSystemGID`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-s3accesspointattachment-filesystemgid.html}
 */
export type FileSystemGID = {
  /**
   * The GID of the file system user.
   * @min `0`
   * @max `4294967295`
   */
  Gid: number;
};
/**
 * Type definition for `AWS::FSx::S3AccessPointAttachment.OntapFileSystemIdentity`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-s3accesspointattachment-ontapfilesystemidentity.html}
 */
export type OntapFileSystemIdentity = {
  /**
   * Specifies the FSx for ONTAP user identity type, accepts either UNIX or WINDOWS.
   */
  Type: "UNIX" | "WINDOWS";
  /**
   * Specifies the properties of the file system UNIX user.
   */
  UnixUser?: OntapUnixFileSystemUser;
  /**
   * Specifies the properties of the file system Windows user.
   */
  WindowsUser?: OntapWindowsFileSystemUser;
};
/**
 * Type definition for `AWS::FSx::S3AccessPointAttachment.OntapUnixFileSystemUser`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-s3accesspointattachment-ontapunixfilesystemuser.html}
 */
export type OntapUnixFileSystemUser = {
  /**
   * The name of the UNIX user.
   * @minLength `1`
   * @maxLength `256`
   * @pattern `^[^\u0000\u0085\u2028\u2029\r\n]{1,256}$`
   */
  Name: string;
};
/**
 * Type definition for `AWS::FSx::S3AccessPointAttachment.OntapWindowsFileSystemUser`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-s3accesspointattachment-ontapwindowsfilesystemuser.html}
 */
export type OntapWindowsFileSystemUser = {
  /**
   * The name of the Windows user.
   * @minLength `1`
   * @maxLength `256`
   * @pattern `^[^\u0000\u0085\u2028\u2029\r\n]{1,256}$`
   */
  Name: string;
};
/**
 * Type definition for `AWS::FSx::S3AccessPointAttachment.OpenZFSFileSystemIdentity`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-s3accesspointattachment-openzfsfilesystemidentity.html}
 */
export type OpenZFSFileSystemIdentity = {
  /**
   * Specifies the UID and GIDs of the file system POSIX user.
   */
  PosixUser: OpenZFSPosixFileSystemUser;
  /**
   * Specifies the FSx for OpenZFS user identity type, accepts only POSIX.
   */
  Type: "POSIX";
};
/**
 * Type definition for `AWS::FSx::S3AccessPointAttachment.OpenZFSPosixFileSystemUser`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-s3accesspointattachment-openzfsposixfilesystemuser.html}
 */
export type OpenZFSPosixFileSystemUser = {
  /**
   * The GID of the file system user.
   * @min `0`
   * @max `4294967295`
   */
  Gid: number;
  /**
   * The list of secondary GIDs for the file system user.
   */
  SecondaryGids?: FileSystemGID[];
  /**
   * The UID of the file system user.
   * @min `0`
   * @max `4294967295`
   */
  Uid: number;
};
/**
 * Type definition for `AWS::FSx::S3AccessPointAttachment.S3AccessPoint`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-s3accesspointattachment-s3accesspoint.html}
 */
export type S3AccessPoint = {
  /**
   * The S3 access point's policy.
   */
  Policy?: Record<string, any> | string;
  /**
   * The S3 access point's virtual private cloud (VPC) configuration.
   */
  VpcConfiguration?: S3AccessPointVpcConfiguration;
};
/**
 * Type definition for `AWS::FSx::S3AccessPointAttachment.S3AccessPointOntapConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-s3accesspointattachment-s3accesspointontapconfiguration.html}
 */
export type S3AccessPointOntapConfiguration = {
  /**
   * The file system identity used to authorize file access requests made using the S3 access point.
   */
  FileSystemIdentity: OntapFileSystemIdentity;
  /**
   * The ID of the FSx for ONTAP volume that the S3 access point is attached to.
   * @minLength `23`
   * @maxLength `23`
   * @pattern `^(fsvol-[0-9a-f]{17,})$`
   */
  VolumeId: string;
};
/**
 * Type definition for `AWS::FSx::S3AccessPointAttachment.S3AccessPointOpenZFSConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-s3accesspointattachment-s3accesspointopenzfsconfiguration.html}
 */
export type S3AccessPointOpenZFSConfiguration = {
  /**
   * The file system identity used to authorize file access requests made using the S3 access point.
   */
  FileSystemIdentity: OpenZFSFileSystemIdentity;
  /**
   * The ID of the FSx for OpenZFS volume that the S3 access point is attached to.
   * @minLength `23`
   * @maxLength `23`
   * @pattern `^(fsvol-[0-9a-f]{17,})$`
   */
  VolumeId: string;
};
/**
 * Type definition for `AWS::FSx::S3AccessPointAttachment.S3AccessPointVpcConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-s3accesspointattachment-s3accesspointvpcconfiguration.html}
 */
export type S3AccessPointVpcConfiguration = {
  /**
   * Specifies the virtual private cloud (VPC) for the S3 access point VPC configuration, if one exists.
   * @minLength `12`
   * @maxLength `21`
   * @pattern `^(vpc-[0-9a-f]{8,})$`
   */
  VpcId: string;
};
/**
 * Resource type definition for AWS::FSx::S3AccessPointAttachment
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-s3accesspointattachment.html}
 */
export class FSxS3AccessPointAttachment extends $Resource<
  "AWS::FSx::S3AccessPointAttachment",
  FSxS3AccessPointAttachmentProperties,
  Record<string, never>
> {
  public static readonly Type = "AWS::FSx::S3AccessPointAttachment";
  constructor(
    logicalId: string,
    properties: FSxS3AccessPointAttachmentProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, FSxS3AccessPointAttachment.Type, properties, options);
  }
}
