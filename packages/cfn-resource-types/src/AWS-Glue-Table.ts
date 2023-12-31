import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::Glue::Table
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-table.html}
 */
export type GlueTableProperties = {
  CatalogId: string;
  DatabaseName: string;
  OpenTableFormatInput?: OpenTableFormatInput;
  TableInput: TableInput;
};
/**
 * Attribute type definition for `AWS::Glue::Table`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-table.html#aws-resource-glue-table-return-values}
 */
export type GlueTableAttributes = {
  Id: string;
};
/**
 * Type definition for `AWS::Glue::Table.Column`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-table-column.html}
 */
export type Column = {
  Comment?: string;
  Name: string;
  Type?: string;
};
/**
 * Type definition for `AWS::Glue::Table.IcebergInput`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-table-iceberginput.html}
 */
export type IcebergInput = {
  MetadataOperation?: MetadataOperation;
  Version?: string;
};
/**
 * Type definition for `AWS::Glue::Table.MetadataOperation`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-table-metadataoperation.html}
 */
export type MetadataOperation = Record<string, any>;
/**
 * Type definition for `AWS::Glue::Table.OpenTableFormatInput`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-table-opentableformatinput.html}
 */
export type OpenTableFormatInput = {
  IcebergInput?: IcebergInput;
};
/**
 * Type definition for `AWS::Glue::Table.Order`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-table-order.html}
 */
export type Order = {
  Column: string;
  SortOrder: number;
};
/**
 * Type definition for `AWS::Glue::Table.SchemaId`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-table-schemaid.html}
 */
export type SchemaId = {
  RegistryName?: string;
  SchemaArn?: string;
  SchemaName?: string;
};
/**
 * Type definition for `AWS::Glue::Table.SchemaReference`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-table-schemareference.html}
 */
export type SchemaReference = {
  SchemaId?: SchemaId;
  SchemaVersionId?: string;
  SchemaVersionNumber?: number;
};
/**
 * Type definition for `AWS::Glue::Table.SerdeInfo`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-table-serdeinfo.html}
 */
export type SerdeInfo = {
  Name?: string;
  Parameters?: Record<string, any>;
  SerializationLibrary?: string;
};
/**
 * Type definition for `AWS::Glue::Table.SkewedInfo`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-table-skewedinfo.html}
 */
export type SkewedInfo = {
  SkewedColumnNames?: string[];
  SkewedColumnValueLocationMaps?: Record<string, any>;
  SkewedColumnValues?: string[];
};
/**
 * Type definition for `AWS::Glue::Table.StorageDescriptor`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-table-storagedescriptor.html}
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
 * Type definition for `AWS::Glue::Table.TableIdentifier`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-table-tableidentifier.html}
 */
export type TableIdentifier = {
  CatalogId?: string;
  DatabaseName?: string;
  Name?: string;
  Region?: string;
};
/**
 * Type definition for `AWS::Glue::Table.TableInput`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-table-tableinput.html}
 */
export type TableInput = {
  Description?: string;
  Name?: string;
  Owner?: string;
  Parameters?: Record<string, any>;
  PartitionKeys?: Column[];
  Retention?: number;
  StorageDescriptor?: StorageDescriptor;
  TableType?: string;
  TargetTable?: TableIdentifier;
  ViewExpandedText?: string;
  ViewOriginalText?: string;
};
/**
 * Resource Type definition for AWS::Glue::Table
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-table.html}
 */
export class GlueTable extends $Resource<
  "AWS::Glue::Table",
  GlueTableProperties,
  GlueTableAttributes
> {
  public static readonly Type = "AWS::Glue::Table";
  constructor(
    logicalId: string,
    properties: GlueTableProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, GlueTable.Type, properties, options);
  }
}
