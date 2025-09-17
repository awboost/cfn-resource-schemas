import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * The AWS::ODB::CloudVmCluster resource creates a Cloud VM Cluster
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-odb-cloudvmcluster.html}
 */
export type ODBCloudVmClusterProperties = {
  /**
   * The unique identifier of the Exadata infrastructure that this VM cluster belongs to.
   */
  CloudExadataInfrastructureId?: string;
  /**
   * The name of the Grid Infrastructure (GI) cluster.
   * @minLength `1`
   * @maxLength `11`
   * @pattern `^[a-zA-Z][a-zA-Z0-9-]*$`
   */
  ClusterName?: string;
  /**
   * The number of CPU cores enabled on the VM cluster.
   * @min `0`
   * @max `368`
   */
  CpuCoreCount?: number;
  /**
   * The set of diagnostic collection options enabled for the VM cluster.
   */
  DataCollectionOptions?: DataCollectionOptions;
  /**
   * The size of the data disk group, in terabytes (TB), that's allocated for the VM cluster.
   */
  DataStorageSizeInTBs?: number;
  /**
   * The amount of local node storage, in gigabytes (GB), that's allocated for the VM cluster.
   */
  DbNodeStorageSizeInGBs?: number;
  /**
   * The DB nodes that are implicitly created and managed as part of this VM Cluster.
   */
  DbNodes?: DbNode[];
  /**
   * The list of database servers for the VM cluster.
   */
  DbServers?: string[];
  /**
   * The user-friendly name for the VM cluster.
   * @minLength `1`
   * @maxLength `255`
   * @pattern `^[a-zA-Z_](?!.*--)[a-zA-Z0-9_-]*$`
   */
  DisplayName?: string;
  /**
   * The software version of the Oracle Grid Infrastructure (GI) for the VM cluster.
   * @minLength `1`
   * @maxLength `255`
   */
  GiVersion?: string;
  /**
   * The host name for the VM cluster.
   * @minLength `1`
   * @maxLength `12`
   * @pattern `^[a-zA-Z][a-zA-Z0-9-]*[a-zA-Z0-9]$`
   */
  Hostname?: string;
  /**
   * Indicates whether database backups to local Exadata storage is enabled for the VM cluster.
   */
  IsLocalBackupEnabled?: boolean;
  /**
   * Indicates whether the VM cluster is configured with a sparse disk group.
   */
  IsSparseDiskgroupEnabled?: boolean;
  /**
   * The Oracle license model applied to the VM cluster.
   */
  LicenseModel?: "BRING_YOUR_OWN_LICENSE" | "LICENSE_INCLUDED";
  /**
   * The amount of memory, in gigabytes (GB), that's allocated for the VM cluster.
   */
  MemorySizeInGBs?: number;
  /**
   * The unique identifier of the ODB network for the VM cluster.
   */
  OdbNetworkId?: string;
  /**
   * Property description not available.
   * @min `1024`
   * @max `8999`
   */
  ScanListenerPortTcp?: number;
  /**
   * The public key portion of one or more key pairs used for SSH access to the VM cluster.
   */
  SshPublicKeys?: string[];
  /**
   * The operating system version of the image chosen for the VM cluster.
   * @minLength `1`
   * @maxLength `255`
   */
  SystemVersion?: string;
  /**
   * Tags to assign to the Vm Cluster.
   */
  Tags?: Tag[];
  /**
   * The time zone of the VM cluster.
   * @minLength `1`
   * @maxLength `255`
   */
  TimeZone?: string;
};
/**
 * Attribute type definition for `AWS::ODB::CloudVmCluster`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-odb-cloudvmcluster.html#aws-resource-odb-cloudvmcluster-return-values}
 */
export type ODBCloudVmClusterAttributes = {
  /**
   * The Amazon Resource Name (ARN) of the VM cluster.
   */
  CloudVmClusterArn: string;
  /**
   * The unique identifier of the VM cluster.
   */
  CloudVmClusterId: string;
  /**
   * The OCI model compute model used when you create or clone an instance: ECPU or OCPU. An ECPU is an abstracted measure of compute resources. ECPUs are based on the number of cores elastically allocated from a pool of compute and storage servers. An OCPU is a legacy physical measure of compute resources. OCPUs are based on the physical core of a processor with hyper-threading enabled.
   */
  ComputeModel: string;
  /**
   * The DB nodes that are implicitly created and managed as part of this VM Cluster.
   */
  DbNodes: {
    /**
     * The Oracle Cloud ID (OCID) of the backup IP address that's associated with the DB node.
     */
    BackupIpId: string;
    /**
     * The OCID of the second backup virtual network interface card (VNIC) for the DB node.
     */
    BackupVnic2Id: string;
    /**
     * The number of CPU cores enabled on the DB node.
     */
    CpuCoreCount: number;
    /**
     * The Amazon Resource Name (ARN) of the DB node.
     */
    DbNodeArn: string;
    /**
     * The unique identifier of the DB node.
     */
    DbNodeId: string;
    /**
     * The amount of local node storage, in gigabytes (GB), that's allocated on the DB node.
     */
    DbNodeStorageSizeInGBs: number;
    /**
     * The OCID of the DB system.
     */
    DbSystemId: string;
    /**
     * The OCID of the host IP address that's associated with the DB node.
     */
    HostIpId: string;
    /**
     * The host name for the DB node.
     */
    Hostname: string;
    /**
     * The amount of memory, in gigabytes (GB), that allocated on the DB node.
     */
    MemorySizeInGBs: number;
    /**
     * The OCID of the DB node.
     */
    Ocid: string;
    /**
     * The current status of the DB node.
     */
    Status: string;
    /**
     * The OCID of the second VNIC.
     */
    Vnic2Id: string;
    /**
     * The OCID of the VNIC.
     */
    VnicId: string;
  }[];
  /**
   * The type of redundancy configured for the VM cluster. NORMAL is 2-way redundancy. HIGH is 3-way redundancy.
   */
  DiskRedundancy: string;
  /**
   * The domain of the VM cluster.
   */
  Domain: string;
  /**
   * The port number configured for the listener on the VM cluster.
   */
  ListenerPort: number;
  /**
   * The number of nodes in the VM cluster.
   */
  NodeCount: number;
  /**
   * The name of the OCI resource anchor for the VM cluster.
   */
  OciResourceAnchorName: string;
  /**
   * The HTTPS link to the VM cluster in OCI.
   */
  OciUrl: string;
  /**
   * The OCID of the VM cluster.
   */
  Ocid: string;
  /**
   * The FQDN of the DNS record for the Single Client Access Name (SCAN) IP addresses that are associated with the VM cluster.
   */
  ScanDnsName: string;
  /**
   * The OCID of the SCAN IP addresses that are associated with the VM cluster.
   */
  ScanIpIds: string[];
  /**
   * The hardware model name of the Exadata infrastructure that's running the VM cluster.
   */
  Shape: string;
  /**
   * The amount of local node storage, in gigabytes (GB), that's allocated to the VM cluster.
   */
  StorageSizeInGBs: number;
  /**
   * The virtual IP (VIP) addresses that are associated with the VM cluster. Oracle's Cluster Ready Services (CRS) creates and maintains one VIP address for each node in the VM cluster to enable failover. If one node fails, the VIP is reassigned to another active node in the cluster.
   */
  VipIds: string[];
};
/**
 * Type definition for `AWS::ODB::CloudVmCluster.DataCollectionOptions`.
 * Information about the data collection options enabled for a VM cluster.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-odb-cloudvmcluster-datacollectionoptions.html}
 */
export type DataCollectionOptions = {
  /**
   * Indicates whether diagnostic collection is enabled for the VM cluster.
   */
  IsDiagnosticsEventsEnabled?: boolean;
  /**
   * Indicates whether health monitoring is enabled for the VM cluster.
   */
  IsHealthMonitoringEnabled?: boolean;
  /**
   * Indicates whether incident logs are enabled for the cloud VM cluster.
   */
  IsIncidentLogsEnabled?: boolean;
};
/**
 * Type definition for `AWS::ODB::CloudVmCluster.DbNode`.
 * A DbNode is a virtual machine that hosts Oracle database instances and provides access to shared storage servers within a VM Cluster
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-odb-cloudvmcluster-dbnode.html}
 */
export type DbNode = {
  /**
   * The unique identifier of the database server that's associated with the DB node.
   */
  DbServerId: string;
  Tags?: Tag[];
};
/**
 * Type definition for `AWS::ODB::CloudVmCluster.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-odb-cloudvmcluster-tag.html}
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
 * The AWS::ODB::CloudVmCluster resource creates a Cloud VM Cluster
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-odb-cloudvmcluster.html}
 */
export class ODBCloudVmCluster extends $Resource<
  "AWS::ODB::CloudVmCluster",
  ODBCloudVmClusterProperties,
  ODBCloudVmClusterAttributes
> {
  public static readonly Type = "AWS::ODB::CloudVmCluster";
  constructor(
    logicalId: string,
    properties: ODBCloudVmClusterProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, ODBCloudVmCluster.Type, properties, options);
  }
}
