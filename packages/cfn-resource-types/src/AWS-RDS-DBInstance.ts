import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * The AWS::RDS::DBInstance resource creates an Amazon RDS DB instance.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbinstance.html}
 */
export type RDSDBInstanceProperties = {
  /**
   * The amount of storage (in gigabytes) to be initially allocated for the database instance.
   * @pattern `^[0-9]*$`
   */
  AllocatedStorage?: string;
  /**
   * A value that indicates whether major version upgrades are allowed. Changing this parameter doesn't result in an outage and the change is asynchronously applied as soon as possible.
   */
  AllowMajorVersionUpgrade?: boolean;
  /**
   * The AWS Identity and Access Management (IAM) roles associated with the DB instance.
   */
  AssociatedRoles?: DBInstanceRole[];
  /**
   * A value that indicates whether minor engine upgrades are applied automatically to the DB instance during the maintenance window. By default, minor engine upgrades are applied automatically.
   */
  AutoMinorVersionUpgrade?: boolean;
  /**
   * Enables replication of automated backups to a different Amazon Web Services Region.
   */
  AutomaticBackupReplicationRegion?: string;
  /**
   * The Availability Zone (AZ) where the database will be created. For information on AWS Regions and Availability Zones.
   */
  AvailabilityZone?: string;
  /**
   * The number of days for which automated backups are retained. Setting this parameter to a positive number enables backups. Setting this parameter to 0 disables automated backups.
   * @min `0`
   */
  BackupRetentionPeriod?: number;
  /**
   * The identifier of the CA certificate for this DB instance.
   */
  CACertificateIdentifier?: string;
  /**
     * A value that indicates whether the DB instance is restarted when you rotate your SSL/TLS certificate.
    By default, the DB instance is restarted when you rotate your SSL/TLS certificate. The certificate is not updated until the DB instance is restarted.
    If you are using SSL/TLS to connect to the DB instance, follow the appropriate instructions for your DB engine to rotate your SSL/TLS certificate
    This setting doesn't apply to RDS Custom.
     */
  CertificateRotationRestart?: boolean;
  /**
   * For supported engines, indicates that the DB instance should be associated with the specified character set.
   */
  CharacterSetName?: string;
  /**
   * A value that indicates whether to copy tags from the DB instance to snapshots of the DB instance. By default, tags are not copied.
   */
  CopyTagsToSnapshot?: boolean;
  /**
     * The instance profile associated with the underlying Amazon EC2 instance of an RDS Custom DB instance. The instance profile must meet the following requirements:
     * The profile must exist in your account.
     * The profile must have an IAM role that Amazon EC2 has permissions to assume.
     * The instance profile name and the associated IAM role name must start with the prefix AWSRDSCustom .
    For the list of permissions required for the IAM role, see Configure IAM and your VPC in the Amazon RDS User Guide .
    
    This setting is required for RDS Custom.
     */
  CustomIAMInstanceProfile?: string;
  /**
   * The identifier of the DB cluster that the instance will belong to.
   */
  DBClusterIdentifier?: string;
  /**
     * The identifier for the RDS for MySQL Multi-AZ DB cluster snapshot to restore from. For more information on Multi-AZ DB clusters, see Multi-AZ deployments with two readable standby DB instances in the Amazon RDS User Guide .
    
    Constraints:
     * Must match the identifier of an existing Multi-AZ DB cluster snapshot.
     * Can't be specified when DBSnapshotIdentifier is specified.
     * Must be specified when DBSnapshotIdentifier isn't specified.
     * If you are restoring from a shared manual Multi-AZ DB cluster snapshot, the DBClusterSnapshotIdentifier must be the ARN of the shared snapshot.
     * Can't be the identifier of an Aurora DB cluster snapshot.
     * Can't be the identifier of an RDS for PostgreSQL Multi-AZ DB cluster snapshot.
     */
  DBClusterSnapshotIdentifier?: string;
  /**
   * The compute and memory capacity of the DB instance, for example, db.m4.large. Not all DB instance classes are available in all AWS Regions, or for all database engines.
   */
  DBInstanceClass?: string;
  /**
   * A name for the DB instance. If you specify a name, AWS CloudFormation converts it to lowercase. If you don't specify a name, AWS CloudFormation generates a unique physical ID and uses that ID for the DB instance.
   * @minLength `1`
   * @maxLength `63`
   * @pattern `^$|^[a-zA-Z]{1}(?:-?[a-zA-Z0-9]){0,62}$`
   */
  DBInstanceIdentifier?: string;
  /**
   * The meaning of this parameter differs according to the database engine you use.
   */
  DBName?: string;
  /**
   * The name of an existing DB parameter group or a reference to an AWS::RDS::DBParameterGroup resource created in the template.
   */
  DBParameterGroupName?: string;
  /**
   * A list of the DB security groups to assign to the DB instance. The list can include both the name of existing DB security groups or references to AWS::RDS::DBSecurityGroup resources created in the template.
   */
  DBSecurityGroups?: string[];
  /**
   * The name or Amazon Resource Name (ARN) of the DB snapshot that's used to restore the DB instance. If you're restoring from a shared manual DB snapshot, you must specify the ARN of the snapshot.
   */
  DBSnapshotIdentifier?: string;
  /**
   * A DB subnet group to associate with the DB instance. If you update this value, the new subnet group must be a subnet group in a new VPC.
   */
  DBSubnetGroupName?: string;
  /**
   * Indicates whether the DB instance has a dedicated log volume (DLV) enabled.
   */
  DedicatedLogVolume?: boolean;
  /**
   * A value that indicates whether to remove automated backups immediately after the DB instance is deleted. This parameter isn't case-sensitive. The default is to remove automated backups immediately after the DB instance is deleted.
   */
  DeleteAutomatedBackups?: boolean;
  /**
   * A value that indicates whether the DB instance has deletion protection enabled. The database can't be deleted when deletion protection is enabled. By default, deletion protection is disabled.
   */
  DeletionProtection?: boolean;
  /**
   * The Active Directory directory ID to create the DB instance in. Currently, only MySQL, Microsoft SQL Server, Oracle, and PostgreSQL DB instances can be created in an Active Directory Domain.
   */
  Domain?: string;
  /**
   * The ARN for the Secrets Manager secret with the credentials for the user joining the domain.
   */
  DomainAuthSecretArn?: string;
  /**
   * The IPv4 DNS IP addresses of your primary and secondary Active Directory domain controllers.
   */
  DomainDnsIps?: string[];
  /**
   * The fully qualified domain name (FQDN) of an Active Directory domain.
   */
  DomainFqdn?: string;
  /**
   * Specify the name of the IAM role to be used when making API calls to the Directory Service.
   */
  DomainIAMRoleName?: string;
  /**
   * The Active Directory organizational unit for your DB instance to join.
   */
  DomainOu?: string;
  /**
   * The list of log types that need to be enabled for exporting to CloudWatch Logs. The values in the list depend on the DB engine being used.
   */
  EnableCloudwatchLogsExports?: string[];
  /**
   * A value that indicates whether to enable mapping of AWS Identity and Access Management (IAM) accounts to database accounts. By default, mapping is disabled.
   */
  EnableIAMDatabaseAuthentication?: boolean;
  /**
   * A value that indicates whether to enable Performance Insights for the DB instance.
   */
  EnablePerformanceInsights?: boolean;
  /**
   * The name of the database engine that you want to use for this DB instance.
   */
  Engine?: string;
  /**
   * The version number of the database engine to use.
   */
  EngineVersion?: string;
  /**
   * The number of I/O operations per second (IOPS) that the database provisions.
   */
  Iops?: number;
  /**
   * The ARN of the AWS Key Management Service (AWS KMS) master key that's used to encrypt the DB instance.
   */
  KmsKeyId?: string;
  /**
   * License model information for this DB instance.
   */
  LicenseModel?: string;
  /**
   * A value that indicates whether to manage the master user password with AWS Secrets Manager.
   */
  ManageMasterUserPassword?: boolean;
  /**
   * The password for the master user.
   */
  MasterUserPassword?: string;
  /**
   * Contains the secret managed by RDS in AWS Secrets Manager for the master user password.
   */
  MasterUserSecret?: MasterUserSecret;
  /**
   * The master user name for the DB instance.
   * @minLength `1`
   * @maxLength `128`
   * @pattern `^[a-zA-Z][a-zA-Z0-9_]{0,127}$`
   */
  MasterUsername?: string;
  /**
   * The upper limit to which Amazon RDS can automatically scale the storage of the DB instance.
   */
  MaxAllocatedStorage?: number;
  /**
   * The interval, in seconds, between points when Enhanced Monitoring metrics are collected for the DB instance. To disable collecting Enhanced Monitoring metrics, specify 0. The default is 0.
   */
  MonitoringInterval?: number;
  /**
   * The ARN for the IAM role that permits RDS to send enhanced monitoring metrics to Amazon CloudWatch Logs.
   */
  MonitoringRoleArn?: string;
  /**
   * Specifies whether the database instance is a multiple Availability Zone deployment.
   */
  MultiAZ?: boolean;
  /**
   * The name of the NCHAR character set for the Oracle DB instance. This parameter doesn't apply to RDS Custom.
   */
  NcharCharacterSetName?: string;
  /**
   * The network type of the DB cluster.
   */
  NetworkType?: string;
  /**
   * Indicates that the DB instance should be associated with the specified option group.
   */
  OptionGroupName?: string;
  /**
   * The AWS KMS key identifier for encryption of Performance Insights data. The KMS key ID is the Amazon Resource Name (ARN), KMS key identifier, or the KMS key alias for the KMS encryption key.
   */
  PerformanceInsightsKMSKeyId?: string;
  /**
   * The amount of time, in days, to retain Performance Insights data. Valid values are 7 or 731 (2 years).
   */
  PerformanceInsightsRetentionPeriod?: number;
  /**
   * The port number on which the database accepts connections.
   * @pattern `^\d*$`
   */
  Port?: string;
  /**
   * The daily time range during which automated backups are created if automated backups are enabled, using the BackupRetentionPeriod parameter.
   */
  PreferredBackupWindow?: string;
  /**
   * he weekly time range during which system maintenance can occur, in Universal Coordinated Time (UTC).
   */
  PreferredMaintenanceWindow?: string;
  /**
   * The number of CPU cores and the number of threads per core for the DB instance class of the DB instance.
   */
  ProcessorFeatures?: ProcessorFeature[];
  /**
   * A value that specifies the order in which an Aurora Replica is promoted to the primary instance after a failure of the existing primary instance.
   * @min `0`
   */
  PromotionTier?: number;
  /**
   * Indicates whether the DB instance is an internet-facing instance. If you specify true, AWS CloudFormation creates an instance with a publicly resolvable DNS name, which resolves to a public IP address. If you specify false, AWS CloudFormation creates an internal instance with a DNS name that resolves to a private IP address.
   */
  PubliclyAccessible?: boolean;
  /**
   * The open mode of an Oracle read replica. The default is open-read-only.
   */
  ReplicaMode?: string;
  /**
   * The date and time to restore from.
   */
  RestoreTime?: string;
  /**
   * The identifier of the Multi-AZ DB cluster that will act as the source for the read replica. Each DB cluster can have up to 15 read replicas.
   */
  SourceDBClusterIdentifier?: string;
  /**
   * The Amazon Resource Name (ARN) of the replicated automated backups from which to restore.
   */
  SourceDBInstanceAutomatedBackupsArn?: string;
  /**
   * If you want to create a Read Replica DB instance, specify the ID of the source DB instance. Each DB instance can have a limited number of Read Replicas.
   */
  SourceDBInstanceIdentifier?: string;
  /**
   * The resource ID of the source DB instance from which to restore.
   */
  SourceDbiResourceId?: string;
  /**
   * The ID of the region that contains the source DB instance for the Read Replica.
   */
  SourceRegion?: string;
  /**
   * A value that indicates whether the DB instance is encrypted. By default, it isn't encrypted.
   */
  StorageEncrypted?: boolean;
  /**
   * Specifies the storage throughput for the DB instance.
   */
  StorageThroughput?: number;
  /**
   * Specifies the storage type to be associated with the DB instance.
   */
  StorageType?: string;
  /**
   * Tags to assign to the DB instance.
   */
  Tags?: Tag[];
  /**
   * The ARN from the key store with which to associate the instance for TDE encryption.
   */
  TdeCredentialArn?: string;
  /**
   * The password for the given ARN from the key store in order to access the device.
   */
  TdeCredentialPassword?: string;
  /**
   * The time zone of the DB instance. The time zone parameter is currently supported only by Microsoft SQL Server.
   */
  Timezone?: string;
  /**
   * A value that indicates whether the DB instance class of the DB instance uses its default processor features.
   */
  UseDefaultProcessorFeatures?: boolean;
  /**
   * A value that indicates whether the DB instance is restored from the latest backup time. By default, the DB instance isn't restored from the latest backup time.
   */
  UseLatestRestorableTime?: boolean;
  /**
   * A list of the VPC security group IDs to assign to the DB instance. The list can include both the physical IDs of existing VPC security groups and references to AWS::EC2::SecurityGroup resources created in the template.
   */
  VPCSecurityGroups?: string[];
};
/**
 * Attribute type definition for `AWS::RDS::DBInstance`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbinstance.html#aws-resource-rds-dbinstance-return-values}
 */
export type RDSDBInstanceAttributes = {
  /**
   * Returns the details of the DB instance's server certificate.
   */
  CertificateDetails: {
    /**
     * The CA identifier of the CA certificate used for the DB instance's server certificate.
     */
    CAIdentifier: string;
    /**
     * The expiration date of the DB instance’s server certificate.
     */
    ValidTill: string;
  };
  /**
   * The Amazon Resource Name (ARN) for the DB instance.
   */
  DBInstanceArn: string;
  /**
   * The Oracle system ID (Oracle SID) for a container database (CDB). The Oracle SID is also the name of the CDB. This setting is valid for RDS Custom only.
   */
  DBSystemId: string;
  /**
   * The AWS Region-unique, immutable identifier for the DB instance. This identifier is found in AWS CloudTrail log entries whenever the AWS KMS key for the DB instance is accessed.
   */
  DbiResourceId: string;
  /**
   * Specifies the connection endpoint.
   */
  Endpoint: {
    /**
     * Specifies the DNS address of the DB instance.
     */
    Address: string;
    /**
     * Specifies the ID that Amazon Route 53 assigns when you create a hosted zone.
     */
    HostedZoneId: string;
    /**
     * Specifies the port that the database engine is listening on.
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
};
/**
 * Type definition for `AWS::RDS::DBInstance.DBInstanceRole`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rds-dbinstance-dbinstancerole.html}
 */
export type DBInstanceRole = {
  /**
   * The name of the feature associated with the AWS Identity and Access Management (IAM) role. IAM roles that are associated with a DB instance grant permission for the DB instance to access other AWS services on your behalf.
   */
  FeatureName: string;
  /**
   * The Amazon Resource Name (ARN) of the IAM role that is associated with the DB instance.
   */
  RoleArn: string;
};
/**
 * Type definition for `AWS::RDS::DBInstance.MasterUserSecret`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rds-dbinstance-masterusersecret.html}
 */
export type MasterUserSecret = {
  /**
   * The AWS KMS key identifier that is used to encrypt the secret.
   */
  KmsKeyId?: string;
};
/**
 * Type definition for `AWS::RDS::DBInstance.ProcessorFeature`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rds-dbinstance-processorfeature.html}
 */
export type ProcessorFeature = {
  /**
   * The name of the processor feature. Valid names are coreCount and threadsPerCore.
   */
  Name?: "coreCount" | "threadsPerCore";
  /**
   * The value of a processor feature name.
   */
  Value?: string;
};
/**
 * Type definition for `AWS::RDS::DBInstance.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rds-dbinstance-tag.html}
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
 * The AWS::RDS::DBInstance resource creates an Amazon RDS DB instance.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbinstance.html}
 */
export class RDSDBInstance extends $Resource<
  "AWS::RDS::DBInstance",
  RDSDBInstanceProperties,
  RDSDBInstanceAttributes
> {
  public static readonly Type = "AWS::RDS::DBInstance";
  constructor(
    logicalId: string,
    properties: RDSDBInstanceProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, RDSDBInstance.Type, properties, options);
  }
}
