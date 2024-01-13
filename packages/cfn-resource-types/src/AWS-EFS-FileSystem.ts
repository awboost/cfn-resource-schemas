import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::EFS::FileSystem
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-efs-filesystem.html}
 */
export type EFSFileSystemProperties = {
  AvailabilityZoneName?: string;
  BackupPolicy?: BackupPolicy;
  /**
   * Whether to bypass the FileSystemPolicy lockout safety check. The policy lockout safety check determines whether the policy in the request will prevent the principal making the request to be locked out from making future PutFileSystemPolicy requests on the file system. Set BypassPolicyLockoutSafetyCheck to True only when you intend to prevent the principal that is making the request from making a subsequent PutFileSystemPolicy request on the file system. Defaults to false
   */
  BypassPolicyLockoutSafetyCheck?: boolean;
  Encrypted?: boolean;
  FileSystemPolicy?: Record<string, any>;
  FileSystemProtection?: FileSystemProtection;
  FileSystemTags?: ElasticFileSystemTag[];
  KmsKeyId?: string;
  LifecyclePolicies?: LifecyclePolicy[];
  PerformanceMode?: string;
  ProvisionedThroughputInMibps?: number;
  ReplicationConfiguration?: ReplicationConfiguration;
  ThroughputMode?: string;
};
/**
 * Attribute type definition for `AWS::EFS::FileSystem`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-efs-filesystem.html#aws-resource-efs-filesystem-return-values}
 */
export type EFSFileSystemAttributes = {
  Arn: string;
  FileSystemId: string;
};
/**
 * Type definition for `AWS::EFS::FileSystem.BackupPolicy`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-efs-filesystem-backuppolicy.html}
 */
export type BackupPolicy = {
  Status: string;
};
/**
 * Type definition for `AWS::EFS::FileSystem.ElasticFileSystemTag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-efs-filesystem-elasticfilesystemtag.html}
 */
export type ElasticFileSystemTag = {
  Key: string;
  Value: string;
};
/**
 * Type definition for `AWS::EFS::FileSystem.FileSystemProtection`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-efs-filesystem-filesystemprotection.html}
 */
export type FileSystemProtection = {
  ReplicationOverwriteProtection?: "DISABLED" | "ENABLED";
};
/**
 * Type definition for `AWS::EFS::FileSystem.LifecyclePolicy`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-efs-filesystem-lifecyclepolicy.html}
 */
export type LifecyclePolicy = {
  TransitionToArchive?: string;
  TransitionToIA?: string;
  TransitionToPrimaryStorageClass?: string;
};
/**
 * Type definition for `AWS::EFS::FileSystem.ReplicationConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-efs-filesystem-replicationconfiguration.html}
 */
export type ReplicationConfiguration = {
  /**
   * @minLength `1`
   * @maxLength `1`
   */
  Destinations?: ReplicationDestination[];
};
/**
 * Type definition for `AWS::EFS::FileSystem.ReplicationDestination`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-efs-filesystem-replicationdestination.html}
 */
export type ReplicationDestination = {
  AvailabilityZoneName?: string;
  FileSystemId?: string;
  KmsKeyId?: string;
  Region?: string;
};
/**
 * Resource Type definition for AWS::EFS::FileSystem
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-efs-filesystem.html}
 */
export class EFSFileSystem extends $Resource<
  "AWS::EFS::FileSystem",
  EFSFileSystemProperties,
  EFSFileSystemAttributes
> {
  public static readonly Type = "AWS::EFS::FileSystem";
  constructor(
    logicalId: string,
    properties: EFSFileSystemProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, EFSFileSystem.Type, properties, options);
  }
}
