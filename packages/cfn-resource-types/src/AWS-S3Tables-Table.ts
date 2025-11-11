import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::S3Tables::Table
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3tables-table.html}
 */
export type S3TablesTableProperties = {
  /**
   * Settings governing the Compaction maintenance action. Contains details about the compaction settings for an Iceberg table.
   */
  Compaction?: Compaction;
  /**
   * Contains details about the metadata for an Iceberg table.
   */
  IcebergMetadata?: IcebergMetadata;
  /**
   * The namespace that the table belongs to.
   */
  Namespace: string;
  /**
   * Format of the table.
   */
  OpenTableFormat: OpenTableFormat;
  /**
   * Contains details about the snapshot management settings for an Iceberg table. A snapshot is expired when it exceeds MinSnapshotsToKeep and MaxSnapshotAgeHours.
   */
  SnapshotManagement?: SnapshotManagement;
  /**
   * The Amazon Resource Name (ARN) of the specified table bucket.
   */
  TableBucketARN: string;
  /**
   * The name for the table.
   */
  TableName: string;
  /**
   * User tags (key-value pairs) to associate with the table.
   */
  Tags?: Tag[];
  /**
   * Indicates that you don't want to specify a schema for the table. This property is mutually exclusive to 'IcebergMetadata', and its only possible value is 'Yes'.
   */
  WithoutMetadata?: WithoutMetadata;
};
/**
 * Attribute type definition for `AWS::S3Tables::Table`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3tables-table.html#aws-resource-s3tables-table-return-values}
 */
export type S3TablesTableAttributes = {
  /**
   * The Amazon Resource Name (ARN) of the specified table.
   */
  TableARN: string;
  /**
   * The version token of the table
   */
  VersionToken: string;
  /**
   * The warehouse location of the table.
   */
  WarehouseLocation: string;
};
/**
 * Type definition for `AWS::S3Tables::Table.Compaction`.
 * Settings governing the Compaction maintenance action. Contains details about the compaction settings for an Iceberg table.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3tables-table-compaction.html}
 */
export type Compaction = {
  /**
   * Indicates whether the Compaction maintenance action is enabled.
   */
  Status?: "enabled" | "disabled";
  /**
   * The target file size for the table in MB.
   * @min `64`
   */
  TargetFileSizeMB?: number;
};
/**
 * Type definition for `AWS::S3Tables::Table.IcebergMetadata`.
 * Contains details about the metadata for an Iceberg table.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3tables-table-icebergmetadata.html}
 */
export type IcebergMetadata = {
  /**
   * Contains details about the schema for an Iceberg table
   */
  IcebergSchema: IcebergSchema;
};
/**
 * Type definition for `AWS::S3Tables::Table.IcebergSchema`.
 * Contains details about the schema for an Iceberg table
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3tables-table-icebergschema.html}
 */
export type IcebergSchema = {
  /**
   * Contains details about the schema for an Iceberg table
   */
  SchemaFieldList: SchemaField[];
};
/**
 * Type definition for `AWS::S3Tables::Table.OpenTableFormat`.
 * Format of the table.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3tables-table-opentableformat.html}
 */
export type OpenTableFormat = "ICEBERG";
/**
 * Type definition for `AWS::S3Tables::Table.SchemaField`.
 * Contains details about the schema for an Iceberg table
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3tables-table-schemafield.html}
 */
export type SchemaField = {
  /**
   * The name of the field
   */
  Name: string;
  /**
   * A Boolean value that specifies whether values are required for each row in this field
   */
  Required?: boolean;
  /**
   * The field type
   */
  Type: string;
};
/**
 * Type definition for `AWS::S3Tables::Table.SnapshotManagement`.
 * Contains details about the snapshot management settings for an Iceberg table. A snapshot is expired when it exceeds MinSnapshotsToKeep and MaxSnapshotAgeHours.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3tables-table-snapshotmanagement.html}
 */
export type SnapshotManagement = {
  /**
   * The maximum age of a snapshot before it can be expired.
   * @min `1`
   */
  MaxSnapshotAgeHours?: number;
  /**
   * The minimum number of snapshots to keep.
   * @min `1`
   */
  MinSnapshotsToKeep?: number;
  /**
   * Indicates whether the SnapshotManagement maintenance action is enabled.
   */
  Status?: "enabled" | "disabled";
};
/**
 * Type definition for `AWS::S3Tables::Table.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3tables-table-tag.html}
 */
export type Tag = {
  /**
   * Tag key must be between 1 to 128 characters in length. Tag key cannot start with 'aws:' and can only contain alphanumeric characters, spaces, _, ., /, =, +, -, and @.
   * @minLength `1`
   * @maxLength `128`
   */
  Key: string;
  /**
   * Tag value must be between 0 to 256 characters in length. Tag value can only contain alphanumeric characters, spaces, _, ., /, =, +, -, and @.
   * @maxLength `256`
   */
  Value: string;
};
/**
 * Type definition for `AWS::S3Tables::Table.WithoutMetadata`.
 * Indicates that you don't want to specify a schema for the table. This property is mutually exclusive to 'IcebergMetadata', and its only possible value is 'Yes'.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3tables-table-withoutmetadata.html}
 */
export type WithoutMetadata = "Yes";
/**
 * Resource Type definition for AWS::S3Tables::Table
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3tables-table.html}
 */
export class S3TablesTable extends $Resource<
  "AWS::S3Tables::Table",
  S3TablesTableProperties,
  S3TablesTableAttributes
> {
  public static readonly Type = "AWS::S3Tables::Table";
  constructor(
    logicalId: string,
    properties: S3TablesTableProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, S3TablesTable.Type, properties, options);
  }
}
