import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::DocDB::DBCluster
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-docdb-dbcluster.html}
 */
export type DocDBDBClusterProperties = {
  AvailabilityZones?: string[];
  BackupRetentionPeriod?: number;
  CopyTagsToSnapshot?: boolean;
  DBClusterIdentifier?: string;
  DBClusterParameterGroupName?: string;
  DBSubnetGroupName?: string;
  DeletionProtection?: boolean;
  EnableCloudwatchLogsExports?: string[];
  EngineVersion?: string;
  GlobalClusterIdentifier?: string;
  KmsKeyId?: string;
  ManageMasterUserPassword?: boolean;
  MasterUserPassword?: string;
  MasterUserSecretKmsKeyId?: string;
  MasterUsername?: string;
  NetworkType?: string;
  Port?: number;
  PreferredBackupWindow?: string;
  PreferredMaintenanceWindow?: string;
  RestoreToTime?: string;
  RestoreType?: string;
  RotateMasterUserPassword?: boolean;
  ServerlessV2ScalingConfiguration?: ServerlessV2ScalingConfiguration;
  SnapshotIdentifier?: string;
  SourceDBClusterIdentifier?: string;
  StorageEncrypted?: boolean;
  StorageType?: string;
  Tags?: Tag[];
  UseLatestRestorableTime?: boolean;
  VpcSecurityGroupIds?: string[];
};
/**
 * Attribute type definition for `AWS::DocDB::DBCluster`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-docdb-dbcluster.html#aws-resource-docdb-dbcluster-return-values}
 */
export type DocDBDBClusterAttributes = {
  ClusterResourceId: string;
  Endpoint: string;
  Id: string;
  ReadEndpoint: string;
};
/**
 * Type definition for `AWS::DocDB::DBCluster.ServerlessV2ScalingConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-docdb-dbcluster-serverlessv2scalingconfiguration.html}
 */
export type ServerlessV2ScalingConfiguration = {
  MaxCapacity: number;
  MinCapacity: number;
};
/**
 * Type definition for `AWS::DocDB::DBCluster.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-docdb-dbcluster-tag.html}
 */
export type Tag = {
  Key: string;
  Value: string;
};
/**
 * Resource Type definition for AWS::DocDB::DBCluster
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-docdb-dbcluster.html}
 */
export class DocDBDBCluster extends $Resource<
  "AWS::DocDB::DBCluster",
  DocDBDBClusterProperties,
  DocDBDBClusterAttributes
> {
  public static readonly Type = "AWS::DocDB::DBCluster";
  constructor(
    logicalId: string,
    properties: DocDBDBClusterProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, DocDBDBCluster.Type, properties, options);
  }
}
