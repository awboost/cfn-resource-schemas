import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Definition of the AWS::QuickSight::DataSet Resource Type.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-dataset.html}
 */
export type QuickSightDataSetProperties = {
  /**
   * @minLength `12`
   * @maxLength `12`
   * @pattern `^[0-9]{12}$`
   */
  AwsAccountId?: string;
  /**
   * <p>Groupings of columns that work together in certain QuickSight features. Currently, only geospatial hierarchy is supported.</p>
   * @minLength `1`
   * @maxLength `8`
   */
  ColumnGroups?: ColumnGroup[];
  /**
   * @minLength `1`
   */
  ColumnLevelPermissionRules?: ColumnLevelPermissionRule[];
  DataSetId?: string;
  /**
   * <p>The dataset refresh properties for the dataset.</p>
   */
  DataSetRefreshProperties?: DataSetRefreshProperties;
  /**
   * <p>The dataset usage configuration for the dataset.</p>
   */
  DataSetUsageConfiguration?: DataSetUsageConfiguration;
  /**
   * <p>The parameters declared in the dataset.</p>
   * @minLength `1`
   * @maxLength `32`
   */
  DatasetParameters?: DatasetParameter[];
  FieldFolders?: FieldFolderMap;
  ImportMode?: DataSetImportMode;
  /**
   * <p>Wait policy to use when creating/updating dataset. Default is to wait for SPICE ingestion to finish with timeout of 36 hours.</p>
   */
  IngestionWaitPolicy?: IngestionWaitPolicy;
  LogicalTableMap?: LogicalTableMap;
  /**
   * <p>The display name for the dataset.</p>
   * @minLength `1`
   * @maxLength `128`
   */
  Name?: string;
  /**
   * <p>A list of resource permissions on the dataset.</p>
   * @minLength `1`
   * @maxLength `64`
   */
  Permissions?: ResourcePermission[];
  PhysicalTableMap?: PhysicalTableMap;
  /**
   * <p>The row-level security configuration for the dataset.</p>
   */
  RowLevelPermissionDataSet?: RowLevelPermissionDataSet;
  /**
   * <p>The configuration of tags on a dataset to set row-level security.</p>
   */
  RowLevelPermissionTagConfiguration?: RowLevelPermissionTagConfiguration;
  /**
   * <p>Contains a map of the key-value pairs for the resource tag or tags assigned to the dataset.</p>
   * @minLength `1`
   * @maxLength `200`
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::QuickSight::DataSet`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-dataset.html#aws-resource-quicksight-dataset-return-values}
 */
export type QuickSightDataSetAttributes = {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  Arn: string;
  /**
     * <p>The amount of SPICE capacity used by this dataset. This is 0 if the dataset isn't
                imported into SPICE.</p>
     */
  ConsumedSpiceCapacityInBytes: number;
  /**
   * <p>The time that this dataset was created.</p>
   */
  CreatedTime: string;
  /**
   * <p>The last time that this dataset was updated.</p>
   */
  LastUpdatedTime: string;
  /**
     * <p>The list of columns after all transforms. These columns are available in templates,
                analyses, and dashboards.</p>
     */
  OutputColumns: OutputColumn[];
};
/**
 * Type definition for `AWS::QuickSight::DataSet.CalculatedColumn`.
 * <p>A calculated column for a dataset.</p>
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dataset-calculatedcolumn.html}
 */
export type CalculatedColumn = {
  /**
     * <p>A unique ID to identify a calculated column. During a dataset update, if the column ID
                of a calculated column matches that of an existing calculated column, Amazon QuickSight
                preserves the existing calculated column.</p>
     * @minLength `1`
     * @maxLength `64`
     */
  ColumnId: string;
  /**
   * <p>Column name.</p>
   * @minLength `1`
   * @maxLength `128`
   */
  ColumnName: string;
  /**
   * <p>An expression that defines the calculated column.</p>
   * @minLength `1`
   * @maxLength `4096`
   */
  Expression: string;
};
/**
 * Type definition for `AWS::QuickSight::DataSet.CastColumnTypeOperation`.
 * <p>A transform operation that casts a column to a different type.</p>
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dataset-castcolumntypeoperation.html}
 */
export type CastColumnTypeOperation = {
  /**
   * <p>Column name.</p>
   * @minLength `1`
   * @maxLength `128`
   */
  ColumnName: string;
  /**
     * <p>When casting a column from string to datetime type, you can supply a string in a
                format supported by Amazon QuickSight to denote the source data format.</p>
     * @maxLength `32`
     */
  Format?: string;
  NewColumnType: ColumnDataType;
  SubType?: ColumnSubDataType;
};
/**
 * Type definition for `AWS::QuickSight::DataSet.ColumnDataType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dataset-columndatatype.html}
 */
export type ColumnDataType = "STRING" | "INTEGER" | "DECIMAL" | "DATETIME";
/**
 * Type definition for `AWS::QuickSight::DataSet.ColumnDescription`.
 * <p>Metadata that contains a description for a column.</p>
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dataset-columndescription.html}
 */
export type ColumnDescription = {
  /**
   * <p>The text of a description for a column.</p>
   * @maxLength `500`
   */
  Text?: string;
};
/**
 * Type definition for `AWS::QuickSight::DataSet.ColumnGroup`.
 * <p>Groupings of columns that work together in certain Amazon QuickSight features. This is
            a variant type structure. For this structure to be valid, only one of the attributes can
            be non-null.</p>
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dataset-columngroup.html}
 */
export type ColumnGroup = {
  /**
   * <p>Geospatial column group that denotes a hierarchy.</p>
   */
  GeoSpatialColumnGroup?: GeoSpatialColumnGroup;
};
/**
 * Type definition for `AWS::QuickSight::DataSet.ColumnLevelPermissionRule`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dataset-columnlevelpermissionrule.html}
 */
export type ColumnLevelPermissionRule = {
  /**
   * @minLength `1`
   */
  ColumnNames?: string[];
  /**
   * @minLength `1`
   * @maxLength `100`
   */
  Principals?: string[];
};
/**
 * Type definition for `AWS::QuickSight::DataSet.ColumnSubDataType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dataset-columnsubdatatype.html}
 */
export type ColumnSubDataType = "FIXED" | "FLOAT";
/**
 * Type definition for `AWS::QuickSight::DataSet.ColumnTag`.
 * <p>A tag for a column in a <a>TagColumnOperation</a> structure. This is a
            variant type structure. For this structure to be valid, only one of the attributes can
            be non-null.</p>
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dataset-columntag.html}
 */
export type ColumnTag = {
  /**
   * <p>Metadata that contains a description for a column.</p>
   */
  ColumnDescription?: ColumnDescription;
  ColumnGeographicRole?: GeoSpatialDataRole;
};
/**
 * Type definition for `AWS::QuickSight::DataSet.CreateColumnsOperation`.
 * <p>A transform operation that creates calculated columns. Columns created in one such
            operation form a lexical closure.</p>
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dataset-createcolumnsoperation.html}
 */
export type CreateColumnsOperation = {
  /**
   * <p>Calculated columns to create.</p>
   * @minLength `1`
   * @maxLength `128`
   */
  Columns: CalculatedColumn[];
};
/**
 * Type definition for `AWS::QuickSight::DataSet.CustomSql`.
 * <p>A physical table type built from the results of the custom SQL query.</p>
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dataset-customsql.html}
 */
export type CustomSql = {
  /**
   * <p>The column schema from the SQL query result set.</p>
   * @minLength `1`
   * @maxLength `2048`
   */
  Columns: InputColumn[];
  /**
   * <p>The Amazon Resource Name (ARN) of the data source.</p>
   */
  DataSourceArn: string;
  /**
   * <p>A display name for the SQL query result.</p>
   * @minLength `1`
   * @maxLength `128`
   */
  Name: string;
  /**
   * <p>The SQL query.</p>
   * @minLength `1`
   * @maxLength `65536`
   */
  SqlQuery: string;
};
/**
 * Type definition for `AWS::QuickSight::DataSet.DataSetImportMode`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dataset-datasetimportmode.html}
 */
export type DataSetImportMode = "SPICE" | "DIRECT_QUERY";
/**
 * Type definition for `AWS::QuickSight::DataSet.DataSetRefreshProperties`.
 * <p>The dataset refresh properties for the dataset.</p>
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dataset-datasetrefreshproperties.html}
 */
export type DataSetRefreshProperties = {
  /**
   * <p> Refresh Configuration.</p>
   */
  RefreshConfiguration?: RefreshConfiguration;
};
/**
 * Type definition for `AWS::QuickSight::DataSet.DataSetUsageConfiguration`.
 * <p>The dataset usage configuration for the dataset.</p>
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dataset-datasetusageconfiguration.html}
 */
export type DataSetUsageConfiguration = {
  DisableUseAsDirectQuerySource?: boolean;
  DisableUseAsImportedSource?: boolean;
};
/**
 * Type definition for `AWS::QuickSight::DataSet.DatasetParameter`.
 * <p>A parameter created in the dataset that could be of any one data type such as string, integer, decimal or datetime.</p>
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dataset-datasetparameter.html}
 */
export type DatasetParameter = {
  /**
   * <p>A parameter created in the dataset of date time data type.</p>
   */
  DateTimeDatasetParameter?: DateTimeDatasetParameter;
  /**
   * <p>A parameter created in the dataset of decimal data type.</p>
   */
  DecimalDatasetParameter?: DecimalDatasetParameter;
  /**
   * <p>A parameter created in the dataset of integer data type.</p>
   */
  IntegerDatasetParameter?: IntegerDatasetParameter;
  /**
   * <p>A parameter created in the dataset of string data type.</p>
   */
  StringDatasetParameter?: StringDatasetParameter;
};
/**
 * Type definition for `AWS::QuickSight::DataSet.DatasetParameterValueType`.
 * <p>Every parameter value could be either a single value or multi value which helps to validate before evaluation.</p>
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dataset-datasetparametervaluetype.html}
 */
export type DatasetParameterValueType = "MULTI_VALUED" | "SINGLE_VALUED";
/**
 * Type definition for `AWS::QuickSight::DataSet.DateTimeDatasetParameter`.
 * <p>A parameter created in the dataset of date time data type.</p>
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dataset-datetimedatasetparameter.html}
 */
export type DateTimeDatasetParameter = {
  /**
   * <p>List of default values defined for a given string date time parameter type. Currently only static values are supported.</p>
   */
  DefaultValues?: DateTimeDatasetParameterDefaultValues;
  /**
   * <p>Identifier of the parameter created in the dataset.</p>
   * @minLength `1`
   * @maxLength `128`
   * @pattern `^[a-zA-Z0-9-]+$`
   */
  Id: string;
  /**
   * <p>Name of the parameter created in the dataset.</p>
   * @minLength `1`
   * @maxLength `2048`
   * @pattern `^[a-zA-Z0-9]+$`
   */
  Name: string;
  TimeGranularity?: TimeGranularity;
  /**
   * <p>Every parameter value could be either a single value or multi value which helps to validate before evaluation.</p>
   */
  ValueType: DatasetParameterValueType;
};
/**
 * Type definition for `AWS::QuickSight::DataSet.DateTimeDatasetParameterDefaultValues`.
 * <p>List of default values defined for a given string date time parameter type. Currently only static values are supported.</p>
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dataset-datetimedatasetparameterdefaultvalues.html}
 */
export type DateTimeDatasetParameterDefaultValues = {
  /**
   * <p>List of static default values defined for a given string date time parameter type.</p>
   * @minLength `1`
   * @maxLength `32`
   */
  StaticValues?: string[];
};
/**
 * Type definition for `AWS::QuickSight::DataSet.DecimalDatasetParameter`.
 * <p>A parameter created in the dataset of decimal data type.</p>
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dataset-decimaldatasetparameter.html}
 */
export type DecimalDatasetParameter = {
  /**
   * <p>List of default values defined for a given decimal dataset parameter type. Currently only static values are supported.</p>
   */
  DefaultValues?: DecimalDatasetParameterDefaultValues;
  /**
   * <p>Identifier of the parameter created in the dataset.</p>
   * @minLength `1`
   * @maxLength `128`
   * @pattern `^[a-zA-Z0-9-]+$`
   */
  Id: string;
  /**
   * <p>Name of the parameter created in the dataset.</p>
   * @minLength `1`
   * @maxLength `2048`
   * @pattern `^[a-zA-Z0-9]+$`
   */
  Name: string;
  /**
   * <p>Every parameter value could be either a single value or multi value which helps to validate before evaluation.</p>
   */
  ValueType: DatasetParameterValueType;
};
/**
 * Type definition for `AWS::QuickSight::DataSet.DecimalDatasetParameterDefaultValues`.
 * <p>List of default values defined for a given decimal dataset parameter type. Currently only static values are supported.</p>
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dataset-decimaldatasetparameterdefaultvalues.html}
 */
export type DecimalDatasetParameterDefaultValues = {
  /**
   * <p>List of static default values defined for a given decimal dataset parameter type.</p>
   * @minLength `1`
   * @maxLength `32`
   */
  StaticValues?: number[];
};
/**
 * Type definition for `AWS::QuickSight::DataSet.FieldFolder`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dataset-fieldfolder.html}
 */
export type FieldFolder = {
  /**
   * @maxLength `5000`
   */
  Columns?: string[];
  /**
   * @maxLength `500`
   */
  Description?: string;
};
/**
 * Type definition for `AWS::QuickSight::DataSet.FieldFolderMap`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dataset-fieldfoldermap.html}
 */
export type FieldFolderMap = Record<string, FieldFolder>;
/**
 * Type definition for `AWS::QuickSight::DataSet.FileFormat`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dataset-fileformat.html}
 */
export type FileFormat = "CSV" | "TSV" | "CLF" | "ELF" | "XLSX" | "JSON";
/**
 * Type definition for `AWS::QuickSight::DataSet.FilterOperation`.
 * <p>A transform operation that filters rows based on a condition.</p>
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dataset-filteroperation.html}
 */
export type FilterOperation = {
  /**
     * <p>An expression that must evaluate to a Boolean value. Rows for which the expression
                evaluates to true are kept in the dataset.</p>
     * @minLength `1`
     * @maxLength `4096`
     */
  ConditionExpression: string;
};
/**
 * Type definition for `AWS::QuickSight::DataSet.GeoSpatialColumnGroup`.
 * <p>Geospatial column group that denotes a hierarchy.</p>
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dataset-geospatialcolumngroup.html}
 */
export type GeoSpatialColumnGroup = {
  /**
   * <p>Columns in this hierarchy.</p>
   * @minLength `1`
   * @maxLength `16`
   */
  Columns: string[];
  CountryCode?: GeoSpatialCountryCode;
  /**
   * <p>A display name for the hierarchy.</p>
   * @minLength `1`
   * @maxLength `64`
   */
  Name: string;
};
/**
 * Type definition for `AWS::QuickSight::DataSet.GeoSpatialCountryCode`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dataset-geospatialcountrycode.html}
 */
export type GeoSpatialCountryCode = "US";
/**
 * Type definition for `AWS::QuickSight::DataSet.GeoSpatialDataRole`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dataset-geospatialdatarole.html}
 */
export type GeoSpatialDataRole =
  | "COUNTRY"
  | "STATE"
  | "COUNTY"
  | "CITY"
  | "POSTCODE"
  | "LONGITUDE"
  | "LATITUDE"
  | "POLITICAL1";
/**
 * Type definition for `AWS::QuickSight::DataSet.IncrementalRefresh`.
 * <p>Incremental Refresh</p>
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dataset-incrementalrefresh.html}
 */
export type IncrementalRefresh = {
  LookbackWindow?: LookbackWindow;
};
/**
 * Type definition for `AWS::QuickSight::DataSet.IngestionWaitPolicy`.
 * <p>Wait policy to use when creating/updating dataset. Default is to wait for SPICE ingestion to finish with timeout of 36 hours.</p>
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dataset-ingestionwaitpolicy.html}
 */
export type IngestionWaitPolicy = {
  /**
     * <p>The maximum time (in hours) to wait for Ingestion to complete. Default timeout is 36 hours.
     Applicable only when DataSetImportMode mode is set to SPICE and WaitForSpiceIngestion is set to true.</p>
     * @min `1`
     * @max `36`
     */
  IngestionWaitTimeInHours?: number;
  /**
     * <p>Wait for SPICE ingestion to finish to mark dataset creation/update successful. Default (true).
      Applicable only when DataSetImportMode mode is set to SPICE.</p>
     */
  WaitForSpiceIngestion?: boolean;
};
/**
 * Type definition for `AWS::QuickSight::DataSet.InputColumn`.
 * <p>Metadata for a column that is used as the input of a transform operation.</p>
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dataset-inputcolumn.html}
 */
export type InputColumn = {
  /**
   * <p>The name of this column in the underlying data source.</p>
   * @minLength `1`
   * @maxLength `128`
   */
  Name: string;
  SubType?: ColumnSubDataType;
  Type: InputColumnDataType;
};
/**
 * Type definition for `AWS::QuickSight::DataSet.InputColumnDataType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dataset-inputcolumndatatype.html}
 */
export type InputColumnDataType =
  | "STRING"
  | "INTEGER"
  | "DECIMAL"
  | "DATETIME"
  | "BIT"
  | "BOOLEAN"
  | "JSON";
/**
 * Type definition for `AWS::QuickSight::DataSet.IntegerDatasetParameter`.
 * <p>A parameter created in the dataset of integer data type.</p>
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dataset-integerdatasetparameter.html}
 */
export type IntegerDatasetParameter = {
  /**
   * <p>List of default values defined for a given integer dataset parameter type. Currently only static values are supported.</p>
   */
  DefaultValues?: IntegerDatasetParameterDefaultValues;
  /**
   * <p>Identifier of the parameter created in the dataset.</p>
   * @minLength `1`
   * @maxLength `128`
   * @pattern `^[a-zA-Z0-9-]+$`
   */
  Id: string;
  /**
   * <p>Name of the parameter created in the dataset.</p>
   * @minLength `1`
   * @maxLength `2048`
   * @pattern `^[a-zA-Z0-9]+$`
   */
  Name: string;
  /**
   * <p>Every parameter value could be either a single value or multi value which helps to validate before evaluation.</p>
   */
  ValueType: DatasetParameterValueType;
};
/**
 * Type definition for `AWS::QuickSight::DataSet.IntegerDatasetParameterDefaultValues`.
 * <p>List of default values defined for a given integer dataset parameter type. Currently only static values are supported.</p>
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dataset-integerdatasetparameterdefaultvalues.html}
 */
export type IntegerDatasetParameterDefaultValues = {
  /**
   * <p>List of static default values defined for a given integer dataset parameter type.</p>
   * @minLength `1`
   * @maxLength `32`
   */
  StaticValues?: number[];
};
/**
 * Type definition for `AWS::QuickSight::DataSet.JoinInstruction`.
 * <p>Join instruction.</p>
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dataset-joininstruction.html}
 */
export type JoinInstruction = {
  LeftJoinKeyProperties?: JoinKeyProperties;
  /**
   * <p>Left operand.</p>
   * @minLength `1`
   * @maxLength `64`
   * @pattern `[0-9a-zA-Z-]*`
   */
  LeftOperand: string;
  /**
   * <p>On Clause.</p>
   * @minLength `1`
   * @maxLength `512`
   */
  OnClause: string;
  RightJoinKeyProperties?: JoinKeyProperties;
  /**
   * <p>Right operand.</p>
   * @minLength `1`
   * @maxLength `64`
   * @pattern `[0-9a-zA-Z-]*`
   */
  RightOperand: string;
  Type: JoinType;
};
/**
 * Type definition for `AWS::QuickSight::DataSet.JoinKeyProperties`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dataset-joinkeyproperties.html}
 */
export type JoinKeyProperties = {
  UniqueKey?: boolean;
};
/**
 * Type definition for `AWS::QuickSight::DataSet.JoinType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dataset-jointype.html}
 */
export type JoinType = "INNER" | "OUTER" | "LEFT" | "RIGHT";
/**
 * Type definition for `AWS::QuickSight::DataSet.LogicalTable`.
 * <p>A <i>logical table</i> is a unit that joins and that data
            transformations operate on. A logical table has a source, which can be either a physical
            table or result of a join. When a logical table points to a physical table, the logical
            table acts as a mutable copy of that physical table through transform operations.</p>
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dataset-logicaltable.html}
 */
export type LogicalTable = {
  /**
   * <p>A display name for the logical table.</p>
   * @minLength `1`
   * @maxLength `64`
   */
  Alias: string;
  /**
   * <p>Transform operations that act on this logical table.</p>
   * @minLength `1`
   * @maxLength `2048`
   */
  DataTransforms?: TransformOperation[];
  /**
     * <p>Information about the source of a logical table. This is a variant type structure. For
                this structure to be valid, only one of the attributes can be non-null.</p>
     */
  Source: LogicalTableSource;
};
/**
 * Type definition for `AWS::QuickSight::DataSet.LogicalTableMap`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dataset-logicaltablemap.html}
 */
export type LogicalTableMap = Record<string, LogicalTable>;
/**
 * Type definition for `AWS::QuickSight::DataSet.LogicalTableSource`.
 * <p>Information about the source of a logical table. This is a variant type structure. For
            this structure to be valid, only one of the attributes can be non-null.</p>
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dataset-logicaltablesource.html}
 */
export type LogicalTableSource = {
  /**
   * <p>The Amazon Resource Name (ARN) for the dataset.</p>
   */
  DataSetArn?: string;
  /**
   * <p>Join instruction.</p>
   */
  JoinInstruction?: JoinInstruction;
  /**
   * <p>Physical table ID.</p>
   * @minLength `1`
   * @maxLength `64`
   * @pattern `[0-9a-zA-Z-]*`
   */
  PhysicalTableId?: string;
};
/**
 * Type definition for `AWS::QuickSight::DataSet.LookbackWindow`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dataset-lookbackwindow.html}
 */
export type LookbackWindow = {
  /**
   * <p>Column Name</p>
   */
  ColumnName?: string;
  /**
   * <p>Size</p>
   * @min `1`
   */
  Size?: number;
  SizeUnit?: SizeUnit;
};
/**
 * Type definition for `AWS::QuickSight::DataSet.NewDefaultValues`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dataset-newdefaultvalues.html}
 */
export type NewDefaultValues = {
  /**
   * @minLength `1`
   * @maxLength `32`
   */
  DateTimeStaticValues?: string[];
  /**
   * @minLength `1`
   * @maxLength `32`
   */
  DecimalStaticValues?: number[];
  /**
   * @minLength `1`
   * @maxLength `32`
   */
  IntegerStaticValues?: number[];
  /**
   * @minLength `1`
   * @maxLength `32`
   */
  StringStaticValues?: string[];
};
/**
 * Type definition for `AWS::QuickSight::DataSet.OutputColumn`.
 * <p>Output column.</p>
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dataset-outputcolumn.html}
 */
export type OutputColumn = {
  /**
   * <p>A description for a column.</p>
   * @maxLength `500`
   */
  Description?: string;
  /**
   * <p>A display name for the dataset.</p>
   * @minLength `1`
   * @maxLength `128`
   */
  Name?: string;
  SubType?: ColumnSubDataType;
  Type?: ColumnDataType;
};
/**
 * Type definition for `AWS::QuickSight::DataSet.OverrideDatasetParameterOperation`.
 * <p>A transform operation that overrides the dataset parameter values defined in another dataset.</p>
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dataset-overridedatasetparameteroperation.html}
 */
export type OverrideDatasetParameterOperation = {
  /**
   * <p>The new default values for the parameter.</p>
   */
  NewDefaultValues?: NewDefaultValues;
  /**
   * <p>The new name for the parameter.</p>
   * @minLength `1`
   * @maxLength `2048`
   * @pattern `^[a-zA-Z0-9]+$`
   */
  NewParameterName?: string;
  /**
   * <p>The name of the parameter to be overridden with different values.</p>
   * @minLength `1`
   * @maxLength `2048`
   * @pattern `^[a-zA-Z0-9]+$`
   */
  ParameterName: string;
};
/**
 * Type definition for `AWS::QuickSight::DataSet.PhysicalTable`.
 * <p>A view of a data source that contains information about the shape of the data in the
            underlying source. This is a variant type structure. For this structure to be valid,
            only one of the attributes can be non-null.</p>
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dataset-physicaltable.html}
 */
export type PhysicalTable = {
  /**
   * <p>A physical table type built from the results of the custom SQL query.</p>
   */
  CustomSql?: CustomSql;
  /**
   * <p>A physical table type for relational data sources.</p>
   */
  RelationalTable?: RelationalTable;
  /**
   * <p>A physical table type for as S3 data source.</p>
   */
  S3Source?: S3Source;
};
/**
 * Type definition for `AWS::QuickSight::DataSet.PhysicalTableMap`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dataset-physicaltablemap.html}
 */
export type PhysicalTableMap = Record<string, PhysicalTable>;
/**
 * Type definition for `AWS::QuickSight::DataSet.ProjectOperation`.
 * <p>A transform operation that projects columns. Operations that come after a projection
            can only refer to projected columns.</p>
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dataset-projectoperation.html}
 */
export type ProjectOperation = {
  /**
   * <p>Projected columns.</p>
   * @minLength `1`
   * @maxLength `2000`
   */
  ProjectedColumns: string[];
};
/**
 * Type definition for `AWS::QuickSight::DataSet.RefreshConfiguration`.
 * <p> Refresh Configuration.</p>
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dataset-refreshconfiguration.html}
 */
export type RefreshConfiguration = {
  /**
   * <p>Incremental Refresh</p>
   */
  IncrementalRefresh?: IncrementalRefresh;
};
/**
 * Type definition for `AWS::QuickSight::DataSet.RelationalTable`.
 * <p>A physical table type for relational data sources.</p>
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dataset-relationaltable.html}
 */
export type RelationalTable = {
  /**
   * <p>The catalog associated with a table.</p>
   * @maxLength `256`
   */
  Catalog?: string;
  /**
   * <p>The Amazon Resource Name (ARN) for the data source.</p>
   */
  DataSourceArn: string;
  /**
   * <p>The column schema of the table.</p>
   * @minLength `1`
   * @maxLength `2048`
   */
  InputColumns: InputColumn[];
  /**
   * <p>The name of the relational table.</p>
   * @minLength `1`
   * @maxLength `64`
   */
  Name: string;
  /**
   * <p>The schema name. This name applies to certain relational database engines.</p>
   * @maxLength `64`
   */
  Schema?: string;
};
/**
 * Type definition for `AWS::QuickSight::DataSet.RenameColumnOperation`.
 * <p>A transform operation that renames a column.</p>
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dataset-renamecolumnoperation.html}
 */
export type RenameColumnOperation = {
  /**
   * <p>The name of the column to be renamed.</p>
   * @minLength `1`
   * @maxLength `128`
   */
  ColumnName: string;
  /**
   * <p>The new name for the column.</p>
   * @minLength `1`
   * @maxLength `128`
   */
  NewColumnName: string;
};
/**
 * Type definition for `AWS::QuickSight::DataSet.ResourcePermission`.
 * <p>Permission for the resource.</p>
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dataset-resourcepermission.html}
 */
export type ResourcePermission = {
  /**
   * <p>The IAM action to grant or revoke permissions on.</p>
   * @minLength `1`
   * @maxLength `20`
   */
  Actions: string[];
  /**
     * <p>The Amazon Resource Name (ARN) of the principal. This can be one of the
                following:</p>
            <ul>
                <li>
                    <p>The ARN of an Amazon QuickSight user or group associated with a data source or dataset. (This is common.)</p>
                </li>
                <li>
                    <p>The ARN of an Amazon QuickSight user, group, or namespace associated with an analysis, dashboard, template, or theme. (This is common.)</p>
                </li>
                <li>
                    <p>The ARN of an AWS account root: This is an IAM ARN rather than a QuickSight
                        ARN. Use this option only to share resources (templates) across AWS accounts.
                        (This is less common.) </p>
                </li>
             </ul>
     * @minLength `1`
     * @maxLength `256`
     */
  Principal: string;
};
/**
 * Type definition for `AWS::QuickSight::DataSet.RowLevelPermissionDataSet`.
 * <p>The row-level security configuration for the dataset.</p>
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dataset-rowlevelpermissiondataset.html}
 */
export type RowLevelPermissionDataSet = {
  /**
   * <p>The Amazon Resource Name (ARN) of the permission dataset.</p>
   */
  Arn: string;
  FormatVersion?: RowLevelPermissionFormatVersion;
  /**
   * <p>The namespace associated with the row-level permissions dataset.</p>
   * @maxLength `64`
   * @pattern `^[a-zA-Z0-9._-]*$`
   */
  Namespace?: string;
  PermissionPolicy: RowLevelPermissionPolicy;
  Status?: Status;
};
/**
 * Type definition for `AWS::QuickSight::DataSet.RowLevelPermissionFormatVersion`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dataset-rowlevelpermissionformatversion.html}
 */
export type RowLevelPermissionFormatVersion = "VERSION_1" | "VERSION_2";
/**
 * Type definition for `AWS::QuickSight::DataSet.RowLevelPermissionPolicy`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dataset-rowlevelpermissionpolicy.html}
 */
export type RowLevelPermissionPolicy = "GRANT_ACCESS" | "DENY_ACCESS";
/**
 * Type definition for `AWS::QuickSight::DataSet.RowLevelPermissionTagConfiguration`.
 * <p>The configuration of tags on a dataset to set row-level security.</p>
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dataset-rowlevelpermissiontagconfiguration.html}
 */
export type RowLevelPermissionTagConfiguration = {
  Status?: Status;
  /**
   * <p>A list of tag configuration rules to apply to a dataset. All tag configurations have the OR condition. Tags within each tile will be joined (AND). At least one rule in this structure must have all tag values assigned to it to apply Row-level security (RLS) to the dataset.</p>
   * @minLength `1`
   * @maxLength `50`
   */
  TagRuleConfigurations?: string[][];
  /**
   * <p>A set of rules associated with row-level security, such as the tag names and columns that they are assigned to.</p>
   * @minLength `1`
   * @maxLength `50`
   */
  TagRules: RowLevelPermissionTagRule[];
};
/**
 * Type definition for `AWS::QuickSight::DataSet.RowLevelPermissionTagRule`.
 * <p>Permission for the resource.</p>
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dataset-rowlevelpermissiontagrule.html}
 */
export type RowLevelPermissionTagRule = {
  /**
   * <p>The column name that a tag key is assigned to.</p>
   */
  ColumnName: string;
  /**
   * <p>A string that you want to use to filter by all the values in a column in the dataset and don’t want to list the values one by one. For example, you can use an asterisk as your match all value.</p>
   * @minLength `1`
   * @maxLength `256`
   */
  MatchAllValue?: string;
  /**
   * <p>The unique key for a tag.</p>
   * @minLength `1`
   * @maxLength `128`
   */
  TagKey: string;
  /**
   * <p>A string that you want to use to delimit the values when you pass the values at run time. For example, you can delimit the values with a comma.</p>
   * @maxLength `10`
   */
  TagMultiValueDelimiter?: string;
};
/**
 * Type definition for `AWS::QuickSight::DataSet.S3Source`.
 * <p>A physical table type for as S3 data source.</p>
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dataset-s3source.html}
 */
export type S3Source = {
  /**
   * <p>The amazon Resource Name (ARN) for the data source.</p>
   */
  DataSourceArn: string;
  /**
   * <p>A physical table type for as S3 data source.</p>
   * @minLength `1`
   * @maxLength `2048`
   */
  InputColumns: InputColumn[];
  /**
   * <p>Information about the format for a source file or files.</p>
   */
  UploadSettings?: UploadSettings;
};
/**
 * Type definition for `AWS::QuickSight::DataSet.SizeUnit`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dataset-sizeunit.html}
 */
export type SizeUnit = "HOUR" | "DAY" | "WEEK";
/**
 * Type definition for `AWS::QuickSight::DataSet.Status`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dataset-status.html}
 */
export type Status = "ENABLED" | "DISABLED";
/**
 * Type definition for `AWS::QuickSight::DataSet.StringDatasetParameter`.
 * <p>A parameter created in the dataset of string data type.</p>
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dataset-stringdatasetparameter.html}
 */
export type StringDatasetParameter = {
  /**
   * <p>List of default values defined for a given string dataset parameter type. Currently only static values are supported.</p>
   */
  DefaultValues?: StringDatasetParameterDefaultValues;
  /**
   * <p>Identifier of the parameter created in the dataset.</p>
   * @minLength `1`
   * @maxLength `128`
   * @pattern `^[a-zA-Z0-9-]+$`
   */
  Id: string;
  /**
   * <p>Name of the parameter created in the dataset.</p>
   * @minLength `1`
   * @maxLength `2048`
   * @pattern `^[a-zA-Z0-9]+$`
   */
  Name: string;
  /**
   * <p>Every parameter value could be either a single value or multi value which helps to validate before evaluation.</p>
   */
  ValueType: DatasetParameterValueType;
};
/**
 * Type definition for `AWS::QuickSight::DataSet.StringDatasetParameterDefaultValues`.
 * <p>List of default values defined for a given string dataset parameter type. Currently only static values are supported.</p>
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dataset-stringdatasetparameterdefaultvalues.html}
 */
export type StringDatasetParameterDefaultValues = {
  /**
   * <p>List of static default values defined for a given string dataset parameter type.</p>
   * @minLength `1`
   * @maxLength `32`
   */
  StaticValues?: string[];
};
/**
 * Type definition for `AWS::QuickSight::DataSet.Tag`.
 * <p>The key or keys of the key-value pairs for the resource tag or tags assigned to the
            resource.</p>
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dataset-tag.html}
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
 * Type definition for `AWS::QuickSight::DataSet.TagColumnOperation`.
 * <p>A transform operation that tags a column with additional information.</p>
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dataset-tagcolumnoperation.html}
 */
export type TagColumnOperation = {
  /**
   * <p>The column that this operation acts on.</p>
   * @minLength `1`
   * @maxLength `128`
   */
  ColumnName: string;
  /**
     * <p>The dataset column tag, currently only used for geospatial type tagging. .</p>
            <note>
                <p>This is not tags for the AWS tagging feature. .</p>
            </note>
     * @minLength `1`
     * @maxLength `16`
     */
  Tags: ColumnTag[];
};
/**
 * Type definition for `AWS::QuickSight::DataSet.TextQualifier`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dataset-textqualifier.html}
 */
export type TextQualifier = "DOUBLE_QUOTE" | "SINGLE_QUOTE";
/**
 * Type definition for `AWS::QuickSight::DataSet.TimeGranularity`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dataset-timegranularity.html}
 */
export type TimeGranularity =
  | "YEAR"
  | "QUARTER"
  | "MONTH"
  | "WEEK"
  | "DAY"
  | "HOUR"
  | "MINUTE"
  | "SECOND"
  | "MILLISECOND";
/**
 * Type definition for `AWS::QuickSight::DataSet.TransformOperation`.
 * <p>A data transformation on a logical table. This is a variant type structure. For this
            structure to be valid, only one of the attributes can be non-null.</p>
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dataset-transformoperation.html}
 */
export type TransformOperation = {
  /**
   * <p>A transform operation that casts a column to a different type.</p>
   */
  CastColumnTypeOperation?: CastColumnTypeOperation;
  /**
     * <p>A transform operation that creates calculated columns. Columns created in one such
                operation form a lexical closure.</p>
     */
  CreateColumnsOperation?: CreateColumnsOperation;
  /**
   * <p>A transform operation that filters rows based on a condition.</p>
   */
  FilterOperation?: FilterOperation;
  /**
   * <p>A transform operation that overrides the dataset parameter values defined in another dataset.</p>
   */
  OverrideDatasetParameterOperation?: OverrideDatasetParameterOperation;
  /**
     * <p>A transform operation that projects columns. Operations that come after a projection
                can only refer to projected columns.</p>
     */
  ProjectOperation?: ProjectOperation;
  /**
   * <p>A transform operation that renames a column.</p>
   */
  RenameColumnOperation?: RenameColumnOperation;
  /**
   * <p>A transform operation that tags a column with additional information.</p>
   */
  TagColumnOperation?: TagColumnOperation;
};
/**
 * Type definition for `AWS::QuickSight::DataSet.UploadSettings`.
 * <p>Information about the format for a source file or files.</p>
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dataset-uploadsettings.html}
 */
export type UploadSettings = {
  /**
   * <p>Whether the file has a header row, or the files each have a header row.</p>
   */
  ContainsHeader?: boolean;
  /**
   * <p>The delimiter between values in the file.</p>
   * @minLength `1`
   * @maxLength `1`
   */
  Delimiter?: string;
  Format?: FileFormat;
  /**
   * <p>A row number to start reading data from.</p>
   * @min `1`
   */
  StartFromRow?: number;
  TextQualifier?: TextQualifier;
};
/**
 * Definition of the AWS::QuickSight::DataSet Resource Type.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-dataset.html}
 */
export class QuickSightDataSet extends $Resource<
  "AWS::QuickSight::DataSet",
  QuickSightDataSetProperties,
  QuickSightDataSetAttributes
> {
  public static readonly Type = "AWS::QuickSight::DataSet";
  public static readonly AttributeNames = [
    "Arn" as const,
    "ConsumedSpiceCapacityInBytes" as const,
    "CreatedTime" as const,
    "LastUpdatedTime" as const,
    "OutputColumns" as const,
  ];
  constructor(
    logicalId: string,
    properties: QuickSightDataSetProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      QuickSightDataSet.Type,
      properties,
      QuickSightDataSet.AttributeNames,
      options,
    );
  }
}
