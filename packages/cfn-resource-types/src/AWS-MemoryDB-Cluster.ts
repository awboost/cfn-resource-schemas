import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * The AWS::MemoryDB::Cluster resource creates an Amazon MemoryDB Cluster.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-memorydb-cluster.html}
 */
export type MemoryDBClusterProperties = {
  /**
   * The name of the Access Control List to associate with the cluster.
   * @pattern `[a-zA-Z][a-zA-Z0-9\-]*`
   */
  ACLName: string;
  /**
     * A flag that enables automatic minor version upgrade when set to true.
    
    You cannot modify the value of AutoMinorVersionUpgrade after the cluster is created. To enable AutoMinorVersionUpgrade on a cluster you must set AutoMinorVersionUpgrade to true when you create a cluster.
     */
  AutoMinorVersionUpgrade?: boolean;
  /**
   * The cluster endpoint.
   */
  ClusterEndpoint?: Endpoint;
  /**
   * The name of the cluster. This value must be unique as it also serves as the cluster identifier.
   * @pattern `[a-z][a-z0-9\-]*`
   */
  ClusterName: string;
  /**
   * Enables data tiering. Data tiering is only supported for clusters using the r6gd node type. This parameter must be set when using r6gd nodes.
   */
  DataTiering?: DataTieringStatus;
  /**
   * An optional description of the cluster.
   */
  Description?: string;
  /**
   * The Redis engine version used by the cluster.
   */
  EngineVersion?: string;
  /**
   * The user-supplied name of a final cluster snapshot. This is the unique name that identifies the snapshot. MemoryDB creates the snapshot, and then deletes the cluster immediately afterward.
   */
  FinalSnapshotName?: string;
  /**
   * The ID of the KMS key used to encrypt the cluster.
   */
  KmsKeyId?: string;
  /**
   * Specifies the weekly time range during which maintenance on the cluster is performed. It is specified as a range in the format ddd:hh24:mi-ddd:hh24:mi (24H Clock UTC). The minimum maintenance window is a 60 minute period.
   */
  MaintenanceWindow?: string;
  /**
   * The compute and memory capacity of the nodes in the cluster.
   */
  NodeType: string;
  /**
   * The number of replicas to apply to each shard. The limit is 5.
   */
  NumReplicasPerShard?: number;
  /**
   * The number of shards the cluster will contain.
   */
  NumShards?: number;
  /**
   * The name of the parameter group associated with the cluster.
   */
  ParameterGroupName?: string;
  /**
   * The port number on which each member of the cluster accepts connections.
   */
  Port?: number;
  /**
   * One or more Amazon VPC security groups associated with this cluster.
   */
  SecurityGroupIds?: string[];
  /**
   * A list of Amazon Resource Names (ARN) that uniquely identify the RDB snapshot files stored in Amazon S3. The snapshot files are used to populate the new cluster. The Amazon S3 object name in the ARN cannot contain any commas.
   */
  SnapshotArns?: string[];
  /**
   * The name of a snapshot from which to restore data into the new cluster. The snapshot status changes to restoring while the new cluster is being created.
   */
  SnapshotName?: string;
  /**
   * The number of days for which MemoryDB retains automatic snapshots before deleting them. For example, if you set SnapshotRetentionLimit to 5, a snapshot that was taken today is retained for 5 days before being deleted.
   */
  SnapshotRetentionLimit?: number;
  /**
   * The daily time range (in UTC) during which MemoryDB begins taking a daily snapshot of your cluster.
   */
  SnapshotWindow?: string;
  /**
   * The Amazon Resource Name (ARN) of the Amazon Simple Notification Service (SNS) topic to which notifications are sent.
   */
  SnsTopicArn?: string;
  /**
   * The status of the Amazon SNS notification topic. Notifications are sent only if the status is enabled.
   */
  SnsTopicStatus?: string;
  /**
   * The name of the subnet group to be used for the cluster.
   */
  SubnetGroupName?: string;
  /**
     * A flag that enables in-transit encryption when set to true.
    
    You cannot modify the value of TransitEncryptionEnabled after the cluster is created. To enable in-transit encryption on a cluster you must set TransitEncryptionEnabled to true when you create a cluster.
     */
  TLSEnabled?: boolean;
  /**
   * An array of key-value pairs to apply to this cluster.
   * @maxLength `50`
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::MemoryDB::Cluster`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-memorydb-cluster.html#aws-resource-memorydb-cluster-return-values}
 */
export type MemoryDBClusterAttributes = {
  /**
   * The Amazon Resource Name (ARN) of the cluster.
   */
  ARN: string;
  /**
   * The status of the parameter group used by the cluster.
   */
  ParameterGroupStatus: string;
  /**
   * The status of the cluster. For example, Available, Updating, Creating.
   */
  Status: string;
};
/**
 * Type definition for `AWS::MemoryDB::Cluster.DataTieringStatus`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-memorydb-cluster-datatieringstatus.html}
 */
export type DataTieringStatus = "true" | "false";
/**
 * Type definition for `AWS::MemoryDB::Cluster.Endpoint`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-memorydb-cluster-endpoint.html}
 */
export type Endpoint = {
  /**
   * The DNS address of the primary read-write node.
   */
  Address?: string;
  /**
   * The port number that the engine is listening on.
   */
  Port?: number;
};
/**
 * Type definition for `AWS::MemoryDB::Cluster.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-memorydb-cluster-tag.html}
 */
export type Tag = {
  /**
   * The key for the tag. May not be null.
   * @minLength `1`
   * @maxLength `128`
   * @pattern `^(?!aws:)(?!memorydb:)[a-zA-Z0-9 _\.\/=+:\-@]{1,128}$`
   */
  Key: string;
  /**
   * The tag's value. May be null.
   * @minLength `1`
   * @maxLength `256`
   * @pattern `^(?!aws:)(?!memorydb:)[a-zA-Z0-9 _\.\/=+:\-@]{1,256}$`
   */
  Value: string;
};
/**
 * The AWS::MemoryDB::Cluster resource creates an Amazon MemoryDB Cluster.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-memorydb-cluster.html}
 */
export class MemoryDBCluster extends $Resource<
  "AWS::MemoryDB::Cluster",
  MemoryDBClusterProperties,
  MemoryDBClusterAttributes
> {
  public static readonly Type = "AWS::MemoryDB::Cluster";
  public static readonly AttributeNames = [
    "ARN" as const,
    "ParameterGroupStatus" as const,
    "Status" as const,
  ];
  constructor(
    logicalId: string,
    properties: MemoryDBClusterProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      MemoryDBCluster.Type,
      properties,
      MemoryDBCluster.AttributeNames,
      options,
    );
  }
}
