import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource schema for AWS::DataBrew::Dataset.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-databrew-dataset.html}
 */
export type DataBrewDatasetProperties = {
  /**
   * Dataset format
   */
  Format?: "CSV" | "JSON" | "PARQUET" | "EXCEL" | "ORC";
  /**
   * Format options for dataset
   */
  FormatOptions?: FormatOptions;
  /**
   * Input
   */
  Input: Input;
  /**
   * Dataset name
   * @minLength `1`
   * @maxLength `255`
   */
  Name: string;
  /**
   * PathOptions
   */
  PathOptions?: PathOptions;
  Tags?: Tag[];
};
/**
 * Type definition for `AWS::DataBrew::Dataset.CsvOptions`.
 * Csv options
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-dataset-csvoptions.html}
 */
export type CsvOptions = {
  /**
   * @minLength `1`
   * @maxLength `1`
   */
  Delimiter?: string;
  HeaderRow?: boolean;
};
/**
 * Type definition for `AWS::DataBrew::Dataset.DatabaseInputDefinition`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-dataset-databaseinputdefinition.html}
 */
export type DatabaseInputDefinition = {
  /**
   * Database table name
   */
  DatabaseTableName?: string;
  /**
   * Glue connection name
   */
  GlueConnectionName: string;
  /**
   * Custom SQL to run against the provided AWS Glue connection. This SQL will be used as the input for DataBrew projects and jobs.
   */
  QueryString?: string;
  /**
   * Input location
   */
  TempDirectory?: S3Location;
};
/**
 * Type definition for `AWS::DataBrew::Dataset.DataCatalogInputDefinition`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-dataset-datacataloginputdefinition.html}
 */
export type DataCatalogInputDefinition = {
  /**
   * Catalog id
   */
  CatalogId?: string;
  /**
   * Database name
   */
  DatabaseName?: string;
  /**
   * Table name
   */
  TableName?: string;
  /**
   * Input location
   */
  TempDirectory?: S3Location;
};
/**
 * Type definition for `AWS::DataBrew::Dataset.DatasetParameter`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-dataset-datasetparameter.html}
 */
export type DatasetParameter = {
  /**
   * Add the value of this parameter as a column in a dataset.
   */
  CreateColumn?: boolean;
  DatetimeOptions?: DatetimeOptions;
  Filter?: FilterExpression;
  /**
   * Parameter name
   * @minLength `1`
   * @maxLength `255`
   */
  Name: string;
  /**
   * Parameter type
   */
  Type: "String" | "Number" | "Datetime";
};
/**
 * Type definition for `AWS::DataBrew::Dataset.DatetimeOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-dataset-datetimeoptions.html}
 */
export type DatetimeOptions = {
  /**
   * Date/time format of a date parameter
   * @minLength `2`
   * @maxLength `100`
   */
  Format: string;
  /**
   * Locale code for a date parameter
   * @minLength `2`
   * @maxLength `100`
   * @pattern `^[A-Za-z0-9_\.#@\-]+$`
   */
  LocaleCode?: string;
  /**
   * Timezone offset
   * @minLength `1`
   * @maxLength `6`
   * @pattern `^(Z|[-+](\d|\d{2}|\d{2}:?\d{2}))$`
   */
  TimezoneOffset?: string;
};
/**
 * Type definition for `AWS::DataBrew::Dataset.ExcelOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-dataset-exceloptions.html}
 */
export type ExcelOptions = {
  HeaderRow?: boolean;
  /**
   * @minLength `1`
   * @maxLength `1`
   */
  SheetIndexes?: number[];
  /**
   * @minLength `1`
   * @maxLength `1`
   */
  SheetNames?: string[];
};
/**
 * Type definition for `AWS::DataBrew::Dataset.FilesLimit`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-dataset-fileslimit.html}
 */
export type FilesLimit = {
  /**
   * Maximum number of files
   */
  MaxFiles: number;
  /**
   * Order
   */
  Order?: "ASCENDING" | "DESCENDING";
  /**
   * Ordered by
   */
  OrderedBy?: "LAST_MODIFIED_DATE";
};
/**
 * Type definition for `AWS::DataBrew::Dataset.FilterExpression`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-dataset-filterexpression.html}
 */
export type FilterExpression = {
  /**
   * Filtering expression for a parameter
   * @minLength `4`
   * @maxLength `1024`
   * @pattern `^[><0-9A-Za-z_.,:)(!= ]+$`
   */
  Expression: string;
  ValuesMap: FilterValue[];
};
/**
 * Type definition for `AWS::DataBrew::Dataset.FilterValue`.
 * A key-value pair to associate expression variable names with their values
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-dataset-filtervalue.html}
 */
export type FilterValue = {
  /**
   * @minLength `0`
   * @maxLength `1024`
   */
  Value: string;
  /**
   * Variable name
   * @minLength `2`
   * @maxLength `128`
   * @pattern `^:[A-Za-z0-9_]+$`
   */
  ValueReference: string;
};
/**
 * Type definition for `AWS::DataBrew::Dataset.FormatOptions`.
 * Format options for dataset
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-dataset-formatoptions.html}
 */
export type FormatOptions = {
  /**
   * Csv options
   */
  Csv?: CsvOptions;
  Excel?: ExcelOptions;
  /**
   * Json options
   */
  Json?: JsonOptions;
};
/**
 * Type definition for `AWS::DataBrew::Dataset.Input`.
 * Input
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-dataset-input.html}
 */
export type Input = {
  DataCatalogInputDefinition?: DataCatalogInputDefinition;
  DatabaseInputDefinition?: DatabaseInputDefinition;
  Metadata?: Metadata;
  /**
   * Input location
   */
  S3InputDefinition?: S3Location;
};
/**
 * Type definition for `AWS::DataBrew::Dataset.JsonOptions`.
 * Json options
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-dataset-jsonoptions.html}
 */
export type JsonOptions = {
  MultiLine?: boolean;
};
/**
 * Type definition for `AWS::DataBrew::Dataset.Metadata`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-dataset-metadata.html}
 */
export type Metadata = {
  /**
   * Arn of the source of the dataset. For e.g.: AppFlow Flow ARN.
   */
  SourceArn?: string;
};
/**
 * Type definition for `AWS::DataBrew::Dataset.PathOptions`.
 * Path options for dataset
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-dataset-pathoptions.html}
 */
export type PathOptions = {
  FilesLimit?: FilesLimit;
  LastModifiedDateCondition?: FilterExpression;
  Parameters?: PathParameter[];
};
/**
 * Type definition for `AWS::DataBrew::Dataset.PathParameter`.
 * A key-value pair to associate dataset parameter name with its definition.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-dataset-pathparameter.html}
 */
export type PathParameter = {
  DatasetParameter: DatasetParameter;
  /**
   * Parameter name
   * @minLength `1`
   * @maxLength `255`
   */
  PathParameterName: string;
};
/**
 * Type definition for `AWS::DataBrew::Dataset.S3Location`.
 * Input location
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-dataset-s3location.html}
 */
export type S3Location = {
  Bucket: string;
  Key?: string;
};
/**
 * Type definition for `AWS::DataBrew::Dataset.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-dataset-tag.html}
 */
export type Tag = {
  /**
   * @minLength `1`
   * @maxLength `128`
   */
  Key: string;
  /**
   * @minLength `0`
   * @maxLength `256`
   */
  Value: string;
};
/**
 * Resource schema for AWS::DataBrew::Dataset.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-databrew-dataset.html}
 */
export class DataBrewDataset extends $Resource<
  "AWS::DataBrew::Dataset",
  DataBrewDatasetProperties,
  Record<string, never>
> {
  public static readonly Type = "AWS::DataBrew::Dataset";
  constructor(
    logicalId: string,
    properties: DataBrewDatasetProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, DataBrewDataset.Type, properties, options);
  }
}
