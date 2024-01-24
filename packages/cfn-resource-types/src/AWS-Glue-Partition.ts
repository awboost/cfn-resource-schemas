import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::Glue::Partition
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-partition.html}
 */
export type GluePartitionProperties = {
  CatalogId: string;
  DatabaseName: string;
  PartitionInput: PartitionInput;
  TableName: string;
};
/**
 * Attribute type definition for `AWS::Glue::Partition`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-partition.html#aws-resource-glue-partition-return-values}
 */
export type GluePartitionAttributes = {
  Id: string;
};
/**
 * Type definition for `AWS::Glue::Partition.Column`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-partition-column.html}
 */
export type Column = {
  Comment?: string;
  Name: string;
  Type?: string;
};
/**
 * Type definition for `AWS::Glue::Partition.Order`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-partition-order.html}
 */
export type Order = {
  Column: string;
  SortOrder?: number;
};
/**
 * Type definition for `AWS::Glue::Partition.PartitionInput`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-partition-partitioninput.html}
 */
export type PartitionInput = {
  Parameters?: Record<string, any>;
  StorageDescriptor?: StorageDescriptor;
  Values: string[];
};
/**
 * Type definition for `AWS::Glue::Partition.SchemaId`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-partition-schemaid.html}
 */
export type SchemaId = {
  RegistryName?: string;
  SchemaArn?: string;
  SchemaName?: string;
};
/**
 * Type definition for `AWS::Glue::Partition.SchemaReference`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-partition-schemareference.html}
 */
export type SchemaReference = {
  SchemaId?: SchemaId;
  SchemaVersionId?: string;
  SchemaVersionNumber?: number;
};
/**
 * Type definition for `AWS::Glue::Partition.SerdeInfo`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-partition-serdeinfo.html}
 */
export type SerdeInfo = {
  Name?: string;
  Parameters?: Record<string, any>;
  SerializationLibrary?: string;
};
/**
 * Type definition for `AWS::Glue::Partition.SkewedInfo`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-partition-skewedinfo.html}
 */
export type SkewedInfo = {
  SkewedColumnNames?: string[];
  SkewedColumnValueLocationMaps?: Record<string, any>;
  SkewedColumnValues?: string[];
};
/**
 * Type definition for `AWS::Glue::Partition.StorageDescriptor`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-partition-storagedescriptor.html}
 */
export type StorageDescriptor = {
  BucketColumns?: string[];
  Columns?: Column[];
  Compressed?: boolean;
  InputFormat?: string;
  Location?: string;
  NumberOfBuckets?: number;
  OutputFormat?: string;
  Parameters?: Record<string, any>;
  SchemaReference?: SchemaReference;
  SerdeInfo?: SerdeInfo;
  SkewedInfo?: SkewedInfo;
  SortColumns?: Order[];
  StoredAsSubDirectories?: boolean;
};
/**
 * Resource Type definition for AWS::Glue::Partition
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-partition.html}
 */
export class GluePartition extends $Resource<
  "AWS::Glue::Partition",
  GluePartitionProperties,
  GluePartitionAttributes
> {
  public static readonly Type = "AWS::Glue::Partition";
  constructor(
    logicalId: string,
    properties: GluePartitionProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, GluePartition.Type, properties, options);
  }
}
