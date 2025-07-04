import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * The AWS::ODB::CloudAutonomousVmCluster resource creates a Cloud Autonomous VM Cluster
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-odb-cloudautonomousvmcluster.html}
 */
export type ODBCloudAutonomousVmClusterProperties = {
  /**
   * The data storage size allocated for Autonomous Databases in the Autonomous VM cluster, in TB.
   */
  AutonomousDataStorageSizeInTBs?: number;
  /**
   * The unique identifier of the Cloud Exadata Infrastructure containing this Autonomous VM cluster.
   */
  CloudExadataInfrastructureId?: string;
  /**
   * The number of CPU cores enabled per node in the Autonomous VM cluster.
   */
  CpuCoreCountPerNode?: number;
  /**
   * The list of database servers associated with the Autonomous VM cluster.
   */
  DbServers?: string[];
  /**
   * The user-provided description of the Autonomous VM cluster.
   */
  Description?: string;
  /**
   * The display name of the Autonomous VM cluster.
   * @minLength `1`
   * @maxLength `255`
   * @pattern `^[a-zA-Z_](?!.*--)[a-zA-Z0-9_-]*$`
   */
  DisplayName?: string;
  /**
   * Indicates whether mutual TLS (mTLS) authentication is enabled for the Autonomous VM cluster.
   */
  IsMtlsEnabledVmCluster?: boolean;
  /**
   * The Oracle license model that applies to the Autonomous VM cluster. Valid values are LICENSE_INCLUDED or BRING_YOUR_OWN_LICENSE.
   */
  LicenseModel?: "BRING_YOUR_OWN_LICENSE" | "LICENSE_INCLUDED";
  /**
   * The scheduling details for the maintenance window. Patching and system updates take place during the maintenance window.
   */
  MaintenanceWindow?: MaintenanceWindow;
  /**
   * The amount of memory allocated per Oracle Compute Unit, in GB.
   */
  MemoryPerOracleComputeUnitInGBs?: number;
  /**
   * The unique identifier of the ODB network associated with this Autonomous VM cluster.
   */
  OdbNetworkId?: string;
  /**
   * The SCAN listener port for non-TLS (TCP) protocol. The default is 1521.
   * @min `1024`
   * @max `8999`
   */
  ScanListenerPortNonTls?: number;
  /**
   * The SCAN listener port for TLS (TCP) protocol. The default is 2484.
   * @min `1024`
   * @max `8999`
   */
  ScanListenerPortTls?: number;
  /**
   * The tags associated with the Autonomous VM cluster.
   */
  Tags?: Tag[];
  /**
   * The time zone of the Autonomous VM cluster.
   * @minLength `1`
   * @maxLength `255`
   */
  TimeZone?: string;
  /**
   * The total number of Autonomous Container Databases that can be created with the allocated local storage.
   */
  TotalContainerDatabases?: number;
};
/**
 * Attribute type definition for `AWS::ODB::CloudAutonomousVmCluster`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-odb-cloudautonomousvmcluster.html#aws-resource-odb-cloudautonomousvmcluster-return-values}
 */
export type ODBCloudAutonomousVmClusterAttributes = {
  /**
   * The percentage of data storage currently in use for Autonomous Databases in the Autonomous VM cluster.
   */
  AutonomousDataStoragePercentage: number;
  /**
   * The available data storage space for Autonomous Databases in the Autonomous VM cluster, in TB.
   */
  AvailableAutonomousDataStorageSizeInTBs: number;
  /**
   * The number of Autonomous CDBs that you can create with the currently available storage.
   */
  AvailableContainerDatabases: number;
  /**
   * The number of CPU cores available for allocation to Autonomous Databases.
   */
  AvailableCpus: number;
  /**
   * The Amazon Resource Name (ARN) for the Autonomous VM cluster.
   */
  CloudAutonomousVmClusterArn: string;
  /**
   * The unique identifier of the Autonomous VM cluster.
   */
  CloudAutonomousVmClusterId: string;
  /**
   * The compute model of the Autonomous VM cluster: ECPU or OCPU.
   */
  ComputeModel: "ECPU" | "OCPU";
  /**
   * The total number of CPU cores in the Autonomous VM cluster.
   */
  CpuCoreCount: number;
  /**
   * The percentage of total CPU cores currently in use in the Autonomous VM cluster.
   */
  CpuPercentage: number;
  /**
   * The total data storage allocated to the Autonomous VM cluster, in GB.
   */
  DataStorageSizeInGBs: number;
  /**
   * The total data storage allocated to the Autonomous VM cluster, in TB.
   */
  DataStorageSizeInTBs: number;
  /**
   * The local node storage allocated to the Autonomous VM cluster, in gigabytes (GB).
   */
  DbNodeStorageSizeInGBs: number;
  /**
   * The domain name for the Autonomous VM cluster.
   */
  Domain: string;
  /**
   * The minimum value to which you can scale down the Exadata storage, in TB.
   */
  ExadataStorageInTBsLowestScaledValue: number;
  /**
   * The hostname for the Autonomous VM cluster.
   */
  Hostname: string;
  /**
   * The minimum value to which you can scale down the maximum number of Autonomous CDBs.
   */
  MaxAcdsLowestScaledValue: number;
  /**
   * The total amount of memory allocated to the Autonomous VM cluster, in gigabytes (GB).
   */
  MemorySizeInGBs: number;
  /**
   * The number of database server nodes in the Autonomous VM cluster.
   */
  NodeCount: number;
  /**
   * The number of Autonomous CDBs that can't be provisioned because of resource constraints.
   */
  NonProvisionableAutonomousContainerDatabases: number;
  /**
   * The name of the OCI resource anchor associated with this Autonomous VM cluster.
   */
  OciResourceAnchorName: string;
  /**
   * The URL for accessing the OCI console page for this Autonomous VM cluster.
   */
  OciUrl: string;
  /**
   * The Oracle Cloud Identifier (OCID) of the Autonomous VM cluster.
   */
  Ocid: string;
  /**
   * The number of Autonomous CDBs that can be provisioned in the Autonomous VM cluster.
   */
  ProvisionableAutonomousContainerDatabases: number;
  /**
   * The number of Autonomous CDBs currently provisioned in the Autonomous VM cluster.
   */
  ProvisionedAutonomousContainerDatabases: number;
  /**
   * The number of CPU cores currently provisioned in the Autonomous VM cluster.
   */
  ProvisionedCpus: number;
  /**
   * The number of CPU cores that can be reclaimed from terminated or scaled-down Autonomous Databases.
   */
  ReclaimableCpus: number;
  /**
   * The number of CPU cores reserved for system operations and redundancy.
   */
  ReservedCpus: number;
  /**
   * The shape of the Exadata infrastructure for the Autonomous VM cluster.
   */
  Shape: string;
};
/**
 * Type definition for `AWS::ODB::CloudAutonomousVmCluster.MaintenanceWindow`.
 * The scheduling details for the maintenance window. Patching and system updates take place during the maintenance window.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-odb-cloudautonomousvmcluster-maintenancewindow.html}
 */
export type MaintenanceWindow = {
  /**
   * The days of the week when maintenance can be performed.
   */
  DaysOfWeek?: (
    | "MONDAY"
    | "TUESDAY"
    | "WEDNESDAY"
    | "THURSDAY"
    | "FRIDAY"
    | "SATURDAY"
    | "SUNDAY"
  )[];
  /**
   * The hours of the day when maintenance can be performed.
   */
  HoursOfDay?: number[];
  /**
   * The lead time in weeks before the maintenance window.
   */
  LeadTimeInWeeks?: number;
  /**
   * The months when maintenance can be performed.
   */
  Months?: (
    | "JANUARY"
    | "FEBRUARY"
    | "MARCH"
    | "APRIL"
    | "MAY"
    | "JUNE"
    | "JULY"
    | "AUGUST"
    | "SEPTEMBER"
    | "OCTOBER"
    | "NOVEMBER"
    | "DECEMBER"
  )[];
  /**
   * The preference for the maintenance window scheduling.
   */
  Preference?: "NO_PREFERENCE" | "CUSTOM_PREFERENCE";
  /**
   * The weeks of the month when maintenance can be performed.
   */
  WeeksOfMonth?: number[];
};
/**
 * Type definition for `AWS::ODB::CloudAutonomousVmCluster.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-odb-cloudautonomousvmcluster-tag.html}
 */
export type Tag = {
  /**
   * The key name of the tag. You can specify a value that's 1 to 128 Unicode characters in length and can't be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., :, /, =, +, @, -, and ".
   * @minLength `1`
   * @maxLength `128`
   */
  Key: string;
  /**
   * The value for the tag. You can specify a value that's 1 to 256 characters in length. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @minLength `0`
   * @maxLength `256`
   */
  Value?: string;
};
/**
 * The AWS::ODB::CloudAutonomousVmCluster resource creates a Cloud Autonomous VM Cluster
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-odb-cloudautonomousvmcluster.html}
 */
export class ODBCloudAutonomousVmCluster extends $Resource<
  "AWS::ODB::CloudAutonomousVmCluster",
  ODBCloudAutonomousVmClusterProperties,
  ODBCloudAutonomousVmClusterAttributes
> {
  public static readonly Type = "AWS::ODB::CloudAutonomousVmCluster";
  constructor(
    logicalId: string,
    properties: ODBCloudAutonomousVmClusterProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, ODBCloudAutonomousVmCluster.Type, properties, options);
  }
}
