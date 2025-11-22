import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::FSx::FileSystem
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-filesystem.html}
 */
export type FSxFileSystemProperties = {
  BackupId?: string;
  FileSystemType: string;
  FileSystemTypeVersion?: string;
  KmsKeyId?: string;
  LustreConfiguration?: LustreConfiguration;
  NetworkType?: string;
  OntapConfiguration?: OntapConfiguration;
  OpenZFSConfiguration?: OpenZFSConfiguration;
  SecurityGroupIds?: string[];
  StorageCapacity?: number;
  StorageType?: string;
  SubnetIds: string[];
  Tags?: Tag[];
  WindowsConfiguration?: WindowsConfiguration;
};
/**
 * Attribute type definition for `AWS::FSx::FileSystem`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-filesystem.html#aws-resource-fsx-filesystem-return-values}
 */
export type FSxFileSystemAttributes = {
  DNSName: string;
  Id: string;
  LustreMountName: string;
  ResourceARN: string;
  RootVolumeId: string;
};
/**
 * Type definition for `AWS::FSx::FileSystem.AuditLogConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-filesystem-auditlogconfiguration.html}
 */
export type AuditLogConfiguration = {
  AuditLogDestination?: string;
  FileAccessAuditLogLevel: string;
  FileShareAccessAuditLogLevel: string;
};
/**
 * Type definition for `AWS::FSx::FileSystem.ClientConfigurations`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-filesystem-clientconfigurations.html}
 */
export type ClientConfigurations = {
  Clients?: string;
  Options?: string[];
};
/**
 * Type definition for `AWS::FSx::FileSystem.DataReadCacheConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-filesystem-datareadcacheconfiguration.html}
 */
export type DataReadCacheConfiguration = {
  SizeGiB?: number;
  SizingMode?: string;
};
/**
 * Type definition for `AWS::FSx::FileSystem.DiskIopsConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-filesystem-diskiopsconfiguration.html}
 */
export type DiskIopsConfiguration = {
  Iops?: number;
  Mode?: string;
};
/**
 * Type definition for `AWS::FSx::FileSystem.LustreConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-filesystem-lustreconfiguration.html}
 */
export type LustreConfiguration = {
  AutoImportPolicy?: string;
  AutomaticBackupRetentionDays?: number;
  CopyTagsToBackups?: boolean;
  DailyAutomaticBackupStartTime?: string;
  DataCompressionType?: string;
  DataReadCacheConfiguration?: DataReadCacheConfiguration;
  DeploymentType?: string;
  DriveCacheType?: string;
  EfaEnabled?: boolean;
  ExportPath?: string;
  ImportPath?: string;
  ImportedFileChunkSize?: number;
  MetadataConfiguration?: MetadataConfiguration;
  PerUnitStorageThroughput?: number;
  ThroughputCapacity?: number;
  WeeklyMaintenanceStartTime?: string;
};
/**
 * Type definition for `AWS::FSx::FileSystem.MetadataConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-filesystem-metadataconfiguration.html}
 */
export type MetadataConfiguration = {
  Iops?: number;
  Mode?: string;
};
/**
 * Type definition for `AWS::FSx::FileSystem.NfsExports`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-filesystem-nfsexports.html}
 */
export type NfsExports = {
  ClientConfigurations?: ClientConfigurations[];
};
/**
 * Type definition for `AWS::FSx::FileSystem.OntapConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-filesystem-ontapconfiguration.html}
 */
export type OntapConfiguration = {
  AutomaticBackupRetentionDays?: number;
  DailyAutomaticBackupStartTime?: string;
  DeploymentType: string;
  DiskIopsConfiguration?: DiskIopsConfiguration;
  EndpointIpAddressRange?: string;
  EndpointIpv6AddressRange?: string;
  FsxAdminPassword?: string;
  HAPairs?: number;
  PreferredSubnetId?: string;
  RouteTableIds?: string[];
  ThroughputCapacity?: number;
  ThroughputCapacityPerHAPair?: number;
  WeeklyMaintenanceStartTime?: string;
};
/**
 * Type definition for `AWS::FSx::FileSystem.OpenZFSConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-filesystem-openzfsconfiguration.html}
 */
export type OpenZFSConfiguration = {
  AutomaticBackupRetentionDays?: number;
  CopyTagsToBackups?: boolean;
  CopyTagsToVolumes?: boolean;
  DailyAutomaticBackupStartTime?: string;
  DeploymentType: string;
  DiskIopsConfiguration?: DiskIopsConfiguration;
  EndpointIpAddressRange?: string;
  EndpointIpv6AddressRange?: string;
  Options?: string[];
  PreferredSubnetId?: string;
  ReadCacheConfiguration?: ReadCacheConfiguration;
  RootVolumeConfiguration?: RootVolumeConfiguration;
  RouteTableIds?: string[];
  ThroughputCapacity?: number;
  WeeklyMaintenanceStartTime?: string;
};
/**
 * Type definition for `AWS::FSx::FileSystem.ReadCacheConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-filesystem-readcacheconfiguration.html}
 */
export type ReadCacheConfiguration = {
  SizeGiB?: number;
  SizingMode?: string;
};
/**
 * Type definition for `AWS::FSx::FileSystem.RootVolumeConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-filesystem-rootvolumeconfiguration.html}
 */
export type RootVolumeConfiguration = {
  CopyTagsToSnapshots?: boolean;
  DataCompressionType?: string;
  NfsExports?: NfsExports[];
  ReadOnly?: boolean;
  RecordSizeKiB?: number;
  UserAndGroupQuotas?: UserAndGroupQuotas[];
};
/**
 * Type definition for `AWS::FSx::FileSystem.SelfManagedActiveDirectoryConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-filesystem-selfmanagedactivedirectoryconfiguration.html}
 */
export type SelfManagedActiveDirectoryConfiguration = {
  DnsIps?: string[];
  DomainJoinServiceAccountSecret?: string;
  DomainName?: string;
  FileSystemAdministratorsGroup?: string;
  OrganizationalUnitDistinguishedName?: string;
  Password?: string;
  UserName?: string;
};
/**
 * Type definition for `AWS::FSx::FileSystem.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-filesystem-tag.html}
 */
export type Tag = {
  Key: string;
  Value: string;
};
/**
 * Type definition for `AWS::FSx::FileSystem.UserAndGroupQuotas`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-filesystem-userandgroupquotas.html}
 */
export type UserAndGroupQuotas = {
  Id?: number;
  StorageCapacityQuotaGiB?: number;
  Type?: string;
};
/**
 * Type definition for `AWS::FSx::FileSystem.WindowsConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-filesystem-windowsconfiguration.html}
 */
export type WindowsConfiguration = {
  ActiveDirectoryId?: string;
  Aliases?: string[];
  AuditLogConfiguration?: AuditLogConfiguration;
  AutomaticBackupRetentionDays?: number;
  CopyTagsToBackups?: boolean;
  DailyAutomaticBackupStartTime?: string;
  DeploymentType?: string;
  DiskIopsConfiguration?: DiskIopsConfiguration;
  PreferredSubnetId?: string;
  SelfManagedActiveDirectoryConfiguration?: SelfManagedActiveDirectoryConfiguration;
  ThroughputCapacity: number;
  WeeklyMaintenanceStartTime?: string;
};
/**
 * Resource Type definition for AWS::FSx::FileSystem
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-filesystem.html}
 */
export class FSxFileSystem extends $Resource<
  "AWS::FSx::FileSystem",
  FSxFileSystemProperties,
  FSxFileSystemAttributes
> {
  public static readonly Type = "AWS::FSx::FileSystem";
  constructor(
    logicalId: string,
    properties: FSxFileSystemProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, FSxFileSystem.Type, properties, options);
  }
}
