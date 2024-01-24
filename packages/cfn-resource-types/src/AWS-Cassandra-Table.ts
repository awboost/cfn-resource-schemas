import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource schema for AWS::Cassandra::Table
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cassandra-table.html}
 */
export type CassandraTableProperties = {
  BillingMode?: BillingMode;
  /**
   * Indicates whether client side timestamps are enabled (true) or disabled (false) on the table. False by default, once it is enabled it cannot be disabled again.
   */
  ClientSideTimestampsEnabled?: boolean;
  /**
   * Clustering key columns of the table
   */
  ClusteringKeyColumns?: ClusteringKeyColumn[];
  /**
   * Default TTL (Time To Live) in seconds, where zero is disabled. If the value is greater than zero, TTL is enabled for the entire table and an expiration timestamp is added to each column.
   * @min `0`
   */
  DefaultTimeToLive?: number;
  /**
   * Represents the settings used to enable server-side encryption
   */
  EncryptionSpecification?: EncryptionSpecification;
  /**
   * Name for Cassandra keyspace
   * @pattern `^[a-zA-Z0-9][a-zA-Z0-9_]{1,47}$`
   */
  KeyspaceName: string;
  /**
   * Partition key columns of the table
   * @minLength `1`
   */
  PartitionKeyColumns: Column[];
  /**
   * Indicates whether point in time recovery is enabled (true) or disabled (false) on the table
   */
  PointInTimeRecoveryEnabled?: boolean;
  /**
   * Non-key columns of the table
   */
  RegularColumns?: Column[];
  /**
   * Name for Cassandra table
   * @pattern `^[a-zA-Z0-9][a-zA-Z0-9_]{1,47}$`
   */
  TableName?: string;
  /**
   * An array of key-value pairs to apply to this resource
   * @minLength `0`
   * @maxLength `50`
   */
  Tags?: Tag[];
};
/**
 * Type definition for `AWS::Cassandra::Table.BillingMode`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cassandra-table-billingmode.html}
 */
export type BillingMode = {
  /**
   * Capacity mode for the specified table
   */
  Mode: Mode;
  /**
   * Throughput for the specified table, which consists of values for ReadCapacityUnits and WriteCapacityUnits
   */
  ProvisionedThroughput?: ProvisionedThroughput;
};
/**
 * Type definition for `AWS::Cassandra::Table.ClusteringKeyColumn`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cassandra-table-clusteringkeycolumn.html}
 */
export type ClusteringKeyColumn = {
  Column: Column;
  OrderBy?: "ASC" | "DESC";
};
/**
 * Type definition for `AWS::Cassandra::Table.Column`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cassandra-table-column.html}
 */
export type Column = {
  /**
   * @pattern `^[a-zA-Z0-9][a-zA-Z0-9_]{1,47}$`
   */
  ColumnName: string;
  ColumnType: string;
};
/**
 * Type definition for `AWS::Cassandra::Table.EncryptionSpecification`.
 * Represents the settings used to enable server-side encryption
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cassandra-table-encryptionspecification.html}
 */
export type EncryptionSpecification = {
  /**
   * Server-side encryption type
   */
  EncryptionType: EncryptionType;
  /**
   * The AWS KMS customer master key (CMK) that should be used for the AWS KMS encryption. To specify a CMK, use its key ID, Amazon Resource Name (ARN), alias name, or alias ARN.
   */
  KmsKeyIdentifier?: string;
};
/**
 * Type definition for `AWS::Cassandra::Table.EncryptionType`.
 * Server-side encryption type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cassandra-table-encryptiontype.html}
 */
export type EncryptionType = "AWS_OWNED_KMS_KEY" | "CUSTOMER_MANAGED_KMS_KEY";
/**
 * Type definition for `AWS::Cassandra::Table.Mode`.
 * Capacity mode for the specified table
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cassandra-table-mode.html}
 */
export type Mode = "PROVISIONED" | "ON_DEMAND";
/**
 * Type definition for `AWS::Cassandra::Table.ProvisionedThroughput`.
 * Throughput for the specified table, which consists of values for ReadCapacityUnits and WriteCapacityUnits
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cassandra-table-provisionedthroughput.html}
 */
export type ProvisionedThroughput = {
  /**
   * @min `1`
   */
  ReadCapacityUnits: number;
  /**
   * @min `1`
   */
  WriteCapacityUnits: number;
};
/**
 * Type definition for `AWS::Cassandra::Table.Tag`.
 * A key-value pair to apply to the resource
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cassandra-table-tag.html}
 */
export type Tag = {
  /**
   * @minLength `1`
   * @maxLength `128`
   */
  Key: string;
  /**
   * @minLength `1`
   * @maxLength `256`
   */
  Value: string;
};
/**
 * Resource schema for AWS::Cassandra::Table
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cassandra-table.html}
 */
export class CassandraTable extends $Resource<
  "AWS::Cassandra::Table",
  CassandraTableProperties,
  Record<string, never>
> {
  public static readonly Type = "AWS::Cassandra::Table";
  constructor(
    logicalId: string,
    properties: CassandraTableProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, CassandraTable.Type, properties, options);
  }
}
