import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * The AWS::RDS::DBCluster resource creates an Amazon Aurora DB cluster.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbcluster.html}
 */
export type RDSDBClusterProperties = {
  /**
   * The amount of storage in gibibytes (GiB) to allocate to each DB instance in the Multi-AZ DB cluster.
   */
  AllocatedStorage?: number;
  /**
   * Provides a list of the AWS Identity and Access Management (IAM) roles that are associated with the DB cluster. IAM roles that are associated with a DB cluster grant permission for the DB cluster to access other AWS services on your behalf.
   */
  AssociatedRoles?: DBClusterRole[];
  /**
   * A value that indicates whether minor engine upgrades are applied automatically to the DB cluster during the maintenance window. By default, minor engine upgrades are applied automatically.
   */
  AutoMinorVersionUpgrade?: boolean;
  /**
   * A list of Availability Zones (AZs) where instances in the DB cluster can be created. For information on AWS Regions and Availability Zones, see Choosing the Regions and Availability Zones in the Amazon Aurora User Guide.
   */
  AvailabilityZones?: string[];
  /**
   * The target backtrack window, in seconds. To disable backtracking, set this value to 0.
   * @min `0`
   */
  BacktrackWindow?: number;
  /**
   * The number of days for which automated backups are retained.
   * @min `1`
   */
  BackupRetentionPeriod?: number;
  /**
   * A value that indicates whether to copy all tags from the DB cluster to snapshots of the DB cluster. The default is not to copy them.
   */
  CopyTagsToSnapshot?: boolean;
  /**
   * The DB cluster identifier. This parameter is stored as a lowercase string.
   * @minLength `1`
   * @maxLength `63`
   * @pattern `^[a-zA-Z]{1}(?:-?[a-zA-Z0-9]){0,62}$`
   */
  DBClusterIdentifier?: string;
  /**
   * The compute and memory capacity of each DB instance in the Multi-AZ DB cluster, for example db.m6g.xlarge.
   */
  DBClusterInstanceClass?: string;
  /**
   * The name of the DB cluster parameter group to associate with this DB cluster.
   */
  DBClusterParameterGroupName?: string;
  /**
   * The name of the DB parameter group to apply to all instances of the DB cluster.
   */
  DBInstanceParameterGroupName?: string;
  /**
   * A DB subnet group that you want to associate with this DB cluster.
   */
  DBSubnetGroupName?: string;
  /**
   * Reserved for future use.
   */
  DBSystemId?: string;
  /**
   * The name of your database. If you don't provide a name, then Amazon RDS won't create a database in this DB cluster. For naming constraints, see Naming Constraints in the Amazon RDS User Guide.
   */
  DatabaseName?: string;
  /**
   * A value that indicates whether the DB cluster has deletion protection enabled. The database can't be deleted when deletion protection is enabled. By default, deletion protection is disabled.
   */
  DeletionProtection?: boolean;
  /**
   * The Active Directory directory ID to create the DB cluster in.
   */
  Domain?: string;
  /**
   * Specify the name of the IAM role to be used when making API calls to the Directory Service.
   */
  DomainIAMRoleName?: string;
  /**
   * The list of log types that need to be enabled for exporting to CloudWatch Logs. The values in the list depend on the DB engine being used. For more information, see Publishing Database Logs to Amazon CloudWatch Logs in the Amazon Aurora User Guide.
   */
  EnableCloudwatchLogsExports?: string[];
  /**
   * Specifies whether to enable this DB cluster to forward write operations to the primary cluster of a global cluster (Aurora global database). By default, write operations are not allowed on Aurora DB clusters that are secondary clusters in an Aurora global database.
   */
  EnableGlobalWriteForwarding?: boolean;
  /**
   * A value that indicates whether to enable the HTTP endpoint for DB cluster. By default, the HTTP endpoint is disabled.
   */
  EnableHttpEndpoint?: boolean;
  /**
   * A value that indicates whether to enable mapping of AWS Identity and Access Management (IAM) accounts to database accounts. By default, mapping is disabled.
   */
  EnableIAMDatabaseAuthentication?: boolean;
  /**
   * The name of the database engine to be used for this DB cluster. Valid Values: aurora (for MySQL 5.6-compatible Aurora), aurora-mysql (for MySQL 5.7-compatible Aurora), and aurora-postgresql
   */
  Engine?: string;
  /**
   * The DB engine mode of the DB cluster, either provisioned, serverless, parallelquery, global, or multimaster.
   */
  EngineMode?: string;
  /**
   * The version number of the database engine to use.
   */
  EngineVersion?: string;
  /**
     * If you are configuring an Aurora global database cluster and want your Aurora DB cluster to be a secondary member in the global database cluster, specify the global cluster ID of the global database cluster. To define the primary database cluster of the global cluster, use the AWS::RDS::GlobalCluster resource.
    
    If you aren't configuring a global database cluster, don't specify this property.
     * @minLength `0`
     * @maxLength `63`
     * @pattern `^$|^[a-zA-Z]{1}(?:-?[a-zA-Z0-9]){0,62}$`
     */
  GlobalClusterIdentifier?: string;
  /**
   * The amount of Provisioned IOPS (input/output operations per second) to be initially allocated for each DB instance in the Multi-AZ DB cluster.
   */
  Iops?: number;
  /**
   * The Amazon Resource Name (ARN) of the AWS Key Management Service master key that is used to encrypt the database instances in the DB cluster, such as arn:aws:kms:us-east-1:012345678910:key/abcd1234-a123-456a-a12b-a123b4cd56ef. If you enable the StorageEncrypted property but don't specify this property, the default master key is used. If you specify this property, you must set the StorageEncrypted property to true.
   */
  KmsKeyId?: string;
  /**
   * A value that indicates whether to manage the master user password with AWS Secrets Manager.
   */
  ManageMasterUserPassword?: boolean;
  /**
   * The master password for the DB instance.
   */
  MasterUserPassword?: string;
  /**
   * Contains the secret managed by RDS in AWS Secrets Manager for the master user password.
   */
  MasterUserSecret?: MasterUserSecret;
  /**
   * The name of the master user for the DB cluster. You must specify MasterUsername, unless you specify SnapshotIdentifier. In that case, don't specify MasterUsername.
   * @minLength `1`
   * @pattern `^[a-zA-Z]{1}[a-zA-Z0-9_]*$`
   */
  MasterUsername?: string;
  /**
   * The interval, in seconds, between points when Enhanced Monitoring metrics are collected for the DB cluster. To turn off collecting Enhanced Monitoring metrics, specify 0. The default is 0.
   */
  MonitoringInterval?: number;
  /**
   * The Amazon Resource Name (ARN) for the IAM role that permits RDS to send Enhanced Monitoring metrics to Amazon CloudWatch Logs.
   */
  MonitoringRoleArn?: string;
  /**
   * The network type of the DB cluster.
   */
  NetworkType?: string;
  /**
   * A value that indicates whether to turn on Performance Insights for the DB cluster.
   */
  PerformanceInsightsEnabled?: boolean;
  /**
   * The Amazon Web Services KMS key identifier for encryption of Performance Insights data.
   */
  PerformanceInsightsKmsKeyId?: string;
  /**
   * The amount of time, in days, to retain Performance Insights data.
   */
  PerformanceInsightsRetentionPeriod?: number;
  /**
   * The port number on which the instances in the DB cluster accept connections. Default: 3306 if engine is set as aurora or 5432 if set to aurora-postgresql.
   */
  Port?: number;
  /**
   * The daily time range during which automated backups are created if automated backups are enabled using the BackupRetentionPeriod parameter. The default is a 30-minute window selected at random from an 8-hour block of time for each AWS Region. To see the time blocks available, see Adjusting the Preferred DB Cluster Maintenance Window in the Amazon Aurora User Guide.
   */
  PreferredBackupWindow?: string;
  /**
   * The weekly time range during which system maintenance can occur, in Universal Coordinated Time (UTC). The default is a 30-minute window selected at random from an 8-hour block of time for each AWS Region, occurring on a random day of the week. To see the time blocks available, see Adjusting the Preferred DB Cluster Maintenance Window in the Amazon Aurora User Guide.
   */
  PreferredMaintenanceWindow?: string;
  /**
   * A value that indicates whether the DB cluster is publicly accessible.
   */
  PubliclyAccessible?: boolean;
  /**
   * The Amazon Resource Name (ARN) of the source DB instance or DB cluster if this DB cluster is created as a Read Replica.
   */
  ReplicationSourceIdentifier?: string;
  /**
   * The date and time to restore the DB cluster to. Value must be a time in Universal Coordinated Time (UTC) format. An example: 2015-03-07T23:45:00Z
   */
  RestoreToTime?: string;
  /**
     * The type of restore to be performed. You can specify one of the following values:
    full-copy - The new DB cluster is restored as a full copy of the source DB cluster.
    copy-on-write - The new DB cluster is restored as a clone of the source DB cluster.
     */
  RestoreType?: string;
  /**
   * The ScalingConfiguration property type specifies the scaling configuration of an Aurora Serverless DB cluster.
   */
  ScalingConfiguration?: ScalingConfiguration;
  /**
   * Contains the scaling configuration of an Aurora Serverless v2 DB cluster.
   */
  ServerlessV2ScalingConfiguration?: ServerlessV2ScalingConfiguration;
  /**
     * The identifier for the DB snapshot or DB cluster snapshot to restore from.
    You can use either the name or the Amazon Resource Name (ARN) to specify a DB cluster snapshot. However, you can use only the ARN to specify a DB snapshot.
    After you restore a DB cluster with a SnapshotIdentifier property, you must specify the same SnapshotIdentifier property for any future updates to the DB cluster. When you specify this property for an update, the DB cluster is not restored from the snapshot again, and the data in the database is not changed. However, if you don't specify the SnapshotIdentifier property, an empty DB cluster is created, and the original DB cluster is deleted. If you specify a property that is different from the previous snapshot restore property, the DB cluster is restored from the specified SnapshotIdentifier property, and the original DB cluster is deleted.
     */
  SnapshotIdentifier?: string;
  /**
   * The identifier of the source DB cluster from which to restore.
   */
  SourceDBClusterIdentifier?: string;
  /**
   * The AWS Region which contains the source DB cluster when replicating a DB cluster. For example, us-east-1.
   */
  SourceRegion?: string;
  /**
     * Indicates whether the DB instance is encrypted.
    If you specify the DBClusterIdentifier, SnapshotIdentifier, or SourceDBInstanceIdentifier property, don't specify this property. The value is inherited from the cluster, snapshot, or source DB instance.
     */
  StorageEncrypted?: boolean;
  /**
   * Specifies the storage type to be associated with the DB cluster.
   */
  StorageType?: string;
  /**
   * An array of key-value pairs to apply to this resource.
   * @maxLength `50`
   */
  Tags?: Tag[];
  /**
   * A value that indicates whether to restore the DB cluster to the latest restorable backup time. By default, the DB cluster is not restored to the latest restorable backup time.
   */
  UseLatestRestorableTime?: boolean;
  /**
   * A list of EC2 VPC security groups to associate with this DB cluster.
   */
  VpcSecurityGroupIds?: string[];
};
/**
 * Attribute type definition for `AWS::RDS::DBCluster`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbcluster.html#aws-resource-rds-dbcluster-return-values}
 */
export type RDSDBClusterAttributes = {
  /**
   * The Amazon Resource Name (ARN) for the DB cluster.
   */
  DBClusterArn: string;
  /**
   * The AWS Region-unique, immutable identifier for the DB cluster.
   */
  DBClusterResourceId: string;
  Endpoint: {
    /**
     * The connection endpoint for the DB cluster.
     */
    Address: string;
    /**
     * The port number that will accept connections on this DB cluster.
     */
    Port: string;
  };
  /**
   * Contains the secret managed by RDS in AWS Secrets Manager for the master user password.
   */
  MasterUserSecret: {
    /**
     * The Amazon Resource Name (ARN) of the secret.
     */
    SecretArn: string;
  };
  ReadEndpoint: {
    /**
     * The reader endpoint for the DB cluster.
     */
    Address: string;
  };
};
/**
 * Type definition for `AWS::RDS::DBCluster.DBClusterRole`.
 * Describes an AWS Identity and Access Management (IAM) role that is associated with a DB cluster.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rds-dbcluster-dbclusterrole.html}
 */
export type DBClusterRole = {
  /**
   * The name of the feature associated with the AWS Identity and Access Management (IAM) role. For the list of supported feature names, see DBEngineVersion in the Amazon RDS API Reference.
   */
  FeatureName?: string;
  /**
   * The Amazon Resource Name (ARN) of the IAM role that is associated with the DB cluster.
   */
  RoleArn: string;
};
/**
 * Type definition for `AWS::RDS::DBCluster.MasterUserSecret`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rds-dbcluster-masterusersecret.html}
 */
export type MasterUserSecret = {
  /**
   * The AWS KMS key identifier that is used to encrypt the secret.
   */
  KmsKeyId?: string;
};
/**
 * Type definition for `AWS::RDS::DBCluster.ScalingConfiguration`.
 * The ScalingConfiguration property type specifies the scaling configuration of an Aurora Serverless DB cluster.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rds-dbcluster-scalingconfiguration.html}
 */
export type ScalingConfiguration = {
  /**
   * A value that indicates whether to allow or disallow automatic pause for an Aurora DB cluster in serverless DB engine mode. A DB cluster can be paused only when it's idle (it has no connections).
   */
  AutoPause?: boolean;
  /**
     * The maximum capacity for an Aurora DB cluster in serverless DB engine mode.
    For Aurora MySQL, valid capacity values are 1, 2, 4, 8, 16, 32, 64, 128, and 256.
    For Aurora PostgreSQL, valid capacity values are 2, 4, 8, 16, 32, 64, 192, and 384.
    The maximum capacity must be greater than or equal to the minimum capacity.
     */
  MaxCapacity?: number;
  /**
     * The minimum capacity for an Aurora DB cluster in serverless DB engine mode.
    For Aurora MySQL, valid capacity values are 1, 2, 4, 8, 16, 32, 64, 128, and 256.
    For Aurora PostgreSQL, valid capacity values are 2, 4, 8, 16, 32, 64, 192, and 384.
    The minimum capacity must be less than or equal to the maximum capacity.
     */
  MinCapacity?: number;
  /**
     * The amount of time, in seconds, that Aurora Serverless v1 tries to find a scaling point to perform seamless scaling before enforcing the timeout action.
    The default is 300.
     */
  SecondsBeforeTimeout?: number;
  /**
   * The time, in seconds, before an Aurora DB cluster in serverless mode is paused.
   */
  SecondsUntilAutoPause?: number;
  /**
     * The action to take when the timeout is reached, either ForceApplyCapacityChange or RollbackCapacityChange.
    ForceApplyCapacityChange sets the capacity to the specified value as soon as possible.
    RollbackCapacityChange, the default, ignores the capacity change if a scaling point isn't found in the timeout period.
    
    For more information, see Autoscaling for Aurora Serverless v1 in the Amazon Aurora User Guide.
     */
  TimeoutAction?: string;
};
/**
 * Type definition for `AWS::RDS::DBCluster.ServerlessV2ScalingConfiguration`.
 * Contains the scaling configuration of an Aurora Serverless v2 DB cluster.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rds-dbcluster-serverlessv2scalingconfiguration.html}
 */
export type ServerlessV2ScalingConfiguration = {
  /**
   * The maximum number of Aurora capacity units (ACUs) for a DB instance in an Aurora Serverless v2 cluster. You can specify ACU values in half-step increments, such as 40, 40.5, 41, and so on. The largest value that you can use is 128.
   * @min `0.5`
   * @max `128`
   */
  MaxCapacity?: number;
  /**
   * The minimum number of Aurora capacity units (ACUs) for a DB instance in an Aurora Serverless v2 cluster. You can specify ACU values in half-step increments, such as 8, 8.5, 9, and so on. The smallest value that you can use is 0.5.
   * @min `0.5`
   * @max `128`
   */
  MinCapacity?: number;
};
/**
 * Type definition for `AWS::RDS::DBCluster.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rds-dbcluster-tag.html}
 */
export type Tag = {
  /**
   * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @minLength `1`
   * @maxLength `128`
   */
  Key: string;
  /**
   * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @minLength `0`
   * @maxLength `256`
   */
  Value?: string;
};
/**
 * The AWS::RDS::DBCluster resource creates an Amazon Aurora DB cluster.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbcluster.html}
 */
export class RDSDBCluster extends $Resource<
  "AWS::RDS::DBCluster",
  RDSDBClusterProperties,
  RDSDBClusterAttributes
> {
  public static readonly Type = "AWS::RDS::DBCluster";
  constructor(
    logicalId: string,
    properties: RDSDBClusterProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, RDSDBCluster.Type, properties, options);
  }
}
