import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource type definition for `AWS::DMS::ReplicationConfig`.
 * A replication configuration that you later provide to configure and start a AWS DMS Serverless replication
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-replicationconfig.html}
 */
export type DMSReplicationConfigProperties = {
  /**
   * Configuration parameters for provisioning a AWS DMS Serverless replication
   */
  ComputeConfig?: ComputeConfig;
  /**
   * The Amazon Resource Name (ARN) of the Replication Config
   */
  ReplicationConfigArn?: string;
  /**
   * A unique identifier of replication configuration
   */
  ReplicationConfigIdentifier?: string;
  /**
   * JSON settings for Servereless replications that are provisioned using this replication configuration
   */
  ReplicationSettings?: Record<string, any>;
  /**
   * The type of AWS DMS Serverless replication to provision using this replication configuration
   */
  ReplicationType?: "full-load" | "full-load-and-cdc" | "cdc";
  /**
   * A unique value or name that you get set for a given resource that can be used to construct an Amazon Resource Name (ARN) for that resource
   */
  ResourceIdentifier?: string;
  /**
   * The Amazon Resource Name (ARN) of the source endpoint for this AWS DMS Serverless replication configuration
   */
  SourceEndpointArn?: string;
  /**
   * JSON settings for specifying supplemental data
   */
  SupplementalSettings?: Record<string, any>;
  /**
   * JSON table mappings for AWS DMS Serverless replications that are provisioned using this replication configuration
   */
  TableMappings?: Record<string, any>;
  /**
   * <p>Contains a map of the key-value pairs for the resource tag or tags assigned to the dataset.</p>
   * @minLength `1`
   * @maxLength `200`
   */
  Tags?: Tag[];
  /**
   * The Amazon Resource Name (ARN) of the target endpoint for this AWS DMS Serverless replication configuration
   */
  TargetEndpointArn?: string;
};
/**
 * Type definition for `AWS::DMS::ReplicationConfig.ComputeConfig`.
 * Configuration parameters for provisioning a AWS DMS Serverless replication
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-replicationconfig-computeconfig.html}
 */
export type ComputeConfig = {
  AvailabilityZone?: string;
  DnsNameServers?: string;
  KmsKeyId?: string;
  MaxCapacityUnits: number;
  MinCapacityUnits?: number;
  MultiAZ?: boolean;
  PreferredMaintenanceWindow?: string;
  ReplicationSubnetGroupId?: string;
  VpcSecurityGroupIds?: string[];
};
/**
 * Type definition for `AWS::DMS::ReplicationConfig.Tag`.
 * <p>The key or keys of the key-value pairs for the resource tag or tags assigned to the
            resource.</p>
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-replicationconfig-tag.html}
 */
export type Tag = {
  /**
   * <p>Tag key.</p>
   * @minLength `1`
   * @maxLength `128`
   */
  Key: string;
  /**
   * <p>Tag value.</p>
   * @minLength `1`
   * @maxLength `256`
   */
  Value: string;
};
/**
 * Resource type definition for `AWS::DMS::ReplicationConfig`.
 * A replication configuration that you later provide to configure and start a AWS DMS Serverless replication
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-replicationconfig.html}
 */
export class DMSReplicationConfig extends $Resource<
  "AWS::DMS::ReplicationConfig",
  DMSReplicationConfigProperties,
  Record<string, never>
> {
  public static readonly Type = "AWS::DMS::ReplicationConfig";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: DMSReplicationConfigProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      DMSReplicationConfig.Type,
      properties,
      DMSReplicationConfig.AttributeNames,
      options,
    );
  }
}
