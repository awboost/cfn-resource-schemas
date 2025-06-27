import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for AWS::FSx::S3AccessPointAttachment
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-s3accesspointattachment.html}
 */
export type FSxS3AccessPointAttachmentProperties = {
  /**
   * The Name of the S3AccessPointAttachment
   * @minLength `3`
   * @maxLength `50`
   * @pattern `^(?=[a-z0-9])[a-z0-9-]{1,48}[a-z0-9]$`
   */
  Name: string;
  OpenZFSConfiguration: S3AccessPointOpenZFSConfiguration;
  S3AccessPoint?: S3AccessPoint;
  Type: "OPENZFS";
};
/**
 * Type definition for `AWS::FSx::S3AccessPointAttachment.FileSystemGID`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-s3accesspointattachment-filesystemgid.html}
 */
export type FileSystemGID = {
  /**
   * @min `0`
   * @max `4294967295`
   */
  Gid: number;
};
/**
 * Type definition for `AWS::FSx::S3AccessPointAttachment.OpenZFSFileSystemIdentity`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-s3accesspointattachment-openzfsfilesystemidentity.html}
 */
export type OpenZFSFileSystemIdentity = {
  PosixUser: OpenZFSPosixFileSystemUser;
  Type: "POSIX";
};
/**
 * Type definition for `AWS::FSx::S3AccessPointAttachment.OpenZFSPosixFileSystemUser`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-s3accesspointattachment-openzfsposixfilesystemuser.html}
 */
export type OpenZFSPosixFileSystemUser = {
  /**
   * @min `0`
   * @max `4294967295`
   */
  Gid: number;
  SecondaryGids?: FileSystemGID[];
  /**
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
  Policy?: Record<string, any> | string;
  VpcConfiguration?: S3AccessPointVpcConfiguration;
};
/**
 * Type definition for `AWS::FSx::S3AccessPointAttachment.S3AccessPointOpenZFSConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-s3accesspointattachment-s3accesspointopenzfsconfiguration.html}
 */
export type S3AccessPointOpenZFSConfiguration = {
  FileSystemIdentity: OpenZFSFileSystemIdentity;
  /**
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
