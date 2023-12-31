import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::FSx::Volume
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-volume.html}
 */
export type FSxVolumeProperties = {
  BackupId?: string;
  Name: string;
  OntapConfiguration?: OntapConfiguration;
  OpenZFSConfiguration?: OpenZFSConfiguration;
  Tags?: Tag[];
  VolumeType?: string;
};
/**
 * Attribute type definition for `AWS::FSx::Volume`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-volume.html#aws-resource-fsx-volume-return-values}
 */
export type FSxVolumeAttributes = {
  ResourceARN: string;
  UUID: string;
  VolumeId: string;
};
/**
 * Type definition for `AWS::FSx::Volume.AutocommitPeriod`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-volume-autocommitperiod.html}
 */
export type AutocommitPeriod = {
  Type: string;
  Value?: number;
};
/**
 * Type definition for `AWS::FSx::Volume.ClientConfigurations`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-volume-clientconfigurations.html}
 */
export type ClientConfigurations = {
  Clients: string;
  Options: string[];
};
/**
 * Type definition for `AWS::FSx::Volume.NfsExports`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-volume-nfsexports.html}
 */
export type NfsExports = {
  ClientConfigurations: ClientConfigurations[];
};
/**
 * Type definition for `AWS::FSx::Volume.OntapConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-volume-ontapconfiguration.html}
 */
export type OntapConfiguration = {
  CopyTagsToBackups?: string;
  JunctionPath?: string;
  OntapVolumeType?: string;
  SecurityStyle?: string;
  SizeInMegabytes: string;
  SnaplockConfiguration?: SnaplockConfiguration;
  SnapshotPolicy?: string;
  StorageEfficiencyEnabled?: string;
  StorageVirtualMachineId: string;
  TieringPolicy?: TieringPolicy;
};
/**
 * Type definition for `AWS::FSx::Volume.OpenZFSConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-volume-openzfsconfiguration.html}
 */
export type OpenZFSConfiguration = {
  CopyTagsToSnapshots?: boolean;
  DataCompressionType?: string;
  NfsExports?: NfsExports[];
  Options?: string[];
  OriginSnapshot?: OriginSnapshot;
  ParentVolumeId: string;
  ReadOnly?: boolean;
  RecordSizeKiB?: number;
  StorageCapacityQuotaGiB?: number;
  StorageCapacityReservationGiB?: number;
  UserAndGroupQuotas?: UserAndGroupQuotas[];
};
/**
 * Type definition for `AWS::FSx::Volume.OriginSnapshot`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-volume-originsnapshot.html}
 */
export type OriginSnapshot = {
  CopyStrategy: string;
  SnapshotARN: string;
};
/**
 * Type definition for `AWS::FSx::Volume.RetentionPeriod`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-volume-retentionperiod.html}
 */
export type RetentionPeriod = {
  Type: string;
  Value?: number;
};
/**
 * Type definition for `AWS::FSx::Volume.SnaplockConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-volume-snaplockconfiguration.html}
 */
export type SnaplockConfiguration = {
  AuditLogVolume?: string;
  AutocommitPeriod?: AutocommitPeriod;
  PrivilegedDelete?: string;
  RetentionPeriod?: SnaplockRetentionPeriod;
  SnaplockType: string;
  VolumeAppendModeEnabled?: string;
};
/**
 * Type definition for `AWS::FSx::Volume.SnaplockRetentionPeriod`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-volume-snaplockretentionperiod.html}
 */
export type SnaplockRetentionPeriod = {
  DefaultRetention: RetentionPeriod;
  MaximumRetention: RetentionPeriod;
  MinimumRetention: RetentionPeriod;
};
/**
 * Type definition for `AWS::FSx::Volume.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-volume-tag.html}
 */
export type Tag = {
  Key: string;
  Value: string;
};
/**
 * Type definition for `AWS::FSx::Volume.TieringPolicy`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-volume-tieringpolicy.html}
 */
export type TieringPolicy = {
  CoolingPeriod?: number;
  Name?: string;
};
/**
 * Type definition for `AWS::FSx::Volume.UserAndGroupQuotas`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-volume-userandgroupquotas.html}
 */
export type UserAndGroupQuotas = {
  Id: number;
  StorageCapacityQuotaGiB: number;
  Type: string;
};
/**
 * Resource Type definition for AWS::FSx::Volume
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-volume.html}
 */
export class FSxVolume extends $Resource<
  "AWS::FSx::Volume",
  FSxVolumeProperties,
  FSxVolumeAttributes
> {
  public static readonly Type = "AWS::FSx::Volume";
  constructor(
    logicalId: string,
    properties: FSxVolumeProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, FSxVolume.Type, properties, options);
  }
}
