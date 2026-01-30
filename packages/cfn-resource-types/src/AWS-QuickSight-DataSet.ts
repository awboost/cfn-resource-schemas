import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
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
   * <p>Groupings of columns that work together in certain Quick Suite features. Currently, only geospatial hierarchy is supported.</p>
   * @minLength `1`
   * @maxLength `8`
   */
  ColumnGroups?: ColumnGroup[];
  /**
     * <p>A set of one or more definitions of a <code>
                   <a href="https://docs.aws.amazon.com/quicksight/latest/APIReference/API_ColumnLevelPermissionRule.html">ColumnLevelPermissionRule</a>
                </code>.</p>
     * @minLength `1`
     */
  ColumnLevelPermissionRules?: ColumnLevelPermissionRule[];
  DataPrepConfiguration?: DataPrepConfiguration;
  DataSetId?: string;
  /**
   * <p>The refresh properties of a dataset.</p>
   */
  DataSetRefreshProperties?: DataSetRefreshProperties;
  /**
   * <p>The usage configuration to apply to child datasets that reference this dataset as a source.</p>
   */
  DataSetUsageConfiguration?: DataSetUsageConfiguration;
  /**
   * <p>The parameter declarations of the dataset.</p>
   * @minLength `0`
   * @maxLength `32`
   */
  DatasetParameters?: DatasetParameter[];
  FieldFolders?: FieldFolderMap;
  /**
   * <p>When you create the dataset, Quick Suite adds the dataset to these folders.</p>
   * @minLength `0`
   * @maxLength `10`
   */
  FolderArns?: string[];
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
  PerformanceConfiguration?: PerformanceConfiguration;
  /**
   * <p>A list of resource permissions on the dataset.</p>
   * @minLength `1`
   * @maxLength `64`
   */
  Permissions?: ResourcePermission[];
  PhysicalTableMap?: PhysicalTableMap;
  /**
     * <p>Information about a dataset that contains permissions for row-level security (RLS).
                The permissions dataset maps fields to users or groups. For more information, see
                <a href="https://docs.aws.amazon.com/quicksight/latest/user/restrict-access-to-a-data-set-using-row-level-security.html">Using Row-Level Security (RLS) to Restrict Access to a Dataset</a> in the <i>Amazon Quick Suite User
                    Guide</i>.</p>
             <p>The option to deny permissions by setting <code>PermissionPolicy</code> to <code>DENY_ACCESS</code> is
                not supported for new RLS datasets.</p>
     */
  RowLevelPermissionDataSet?: RowLevelPermissionDataSet;
  /**
   * <p>The configuration of tags on a dataset to set row-level security. </p>
   */
  RowLevelPermissionTagConfiguration?: RowLevelPermissionTagConfiguration;
  SemanticModelConfiguration?: SemanticModelConfiguration;
  /**
   * <p>Contains a map of the key-value pairs for the resource tag or tags assigned to the dataset.</p>
   * @minLength `1`
   * @maxLength `200`
   */
  Tags?: Tag[];
  UseAs?: DataSetUseAs;
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
  OutputColumns: {
    /**
     * <p>A description for a column.</p>
     * @minLength `0`
     * @maxLength `500`
     */
    Description: string;
    /**
     * @minLength `1`
     * @maxLength `64`
     */
    Id: string;
    /**
     * <p>The display name of the column..</p>
     * @minLength `1`
     * @maxLength `127`
     */
    Name: string;
    SubType: ColumnDataSubType;
    Type: ColumnDataType;
  }[];
};
/**
 * Type definition for `AWS::QuickSight::DataSet.AggregateOperation`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dataset-aggregateoperation.html}
 */
export type AggregateOperation = {
  /**
   * @minLength `0`
   * @maxLength `128`
   */
  Aggregations: Aggregation[];
  /**
   * @minLength `1`
   * @maxLength `64`
   */
  Alias: string;
  /**
   * @minLength `0`
   * @maxLength `128`
   */
  GroupByColumnNames?: string[];
  Source: TransformOperationSource;
};
/**
 * Type definition for `AWS::QuickSight::DataSet.Aggregation`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dataset-aggregation.html}
 */
export type Aggregation = {
  AggregationFunction: DataPrepAggregationFunction;
  /**
   * @minLength `1`
   * @maxLength `64`
   */
  NewColumnId: string;
  /**
   * @minLength `1`
   * @maxLength `127`
   */
  NewColumnName: string;
};
/**
 * Type definition for `AWS::QuickSight::DataSet.AppendedColumn`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dataset-appendedcolumn.html}
 */
export type AppendedColumn = {
  /**
   * @minLength `1`
   * @maxLength `127`
   */
  ColumnName: string;
  /**
   * @minLength `1`
   * @maxLength `64`
   */
  NewColumnId: string;
};
/**
 * Type definition for `AWS::QuickSight::DataSet.AppendOperation`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dataset-appendoperation.html}
 */
export type AppendOperation = {
  /**
   * @minLength `1`
   * @maxLength `64`
   */
  Alias: string;
  /**
   * @minLength `0`
   * @maxLength `2048`
   */
  AppendedColumns: AppendedColumn[];
  FirstSource?: TransformOperationSource;
  SecondSource?: TransformOperationSource;
};
/**
 * Type definition for `AWS::QuickSight::DataSet.CalculatedColumn`.
 * <p>A calculated column for a dataset.</p>
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dataset-calculatedcolumn.html}
 */
export type CalculatedColumn = {
  /**
     * <p>A unique ID to identify a calculated column. During a dataset update, if the column ID
                of a calculated column matches that of an existing calculated column, Amazon Quick Suite
                preserves the existing calculated column.</p>
     * @minLength `1`
     * @maxLength `64`
     */
  ColumnId: string;
  /**
   * <p>Column name.</p>
   * @minLength `1`
   * @maxLength `127`
   */
  ColumnName: string;
  /**
   * <p>An expression that defines the calculated column.</p>
   * @minLength `1`
   * @maxLength `250000`
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
   * @maxLength `127`
   */
  ColumnName: string;
  /**
     * <p>When casting a column from string to datetime type, you can supply a string in a
                format supported by Amazon Quick Suite to denote the source data format.</p>
     * @minLength `0`
     * @maxLength `32`
     */
  Format?: string;
  NewColumnType: ColumnDataType;
  SubType?: ColumnDataSubType;
};
/**
 * Type definition for `AWS::QuickSight::DataSet.CastColumnTypesOperation`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dataset-castcolumntypesoperation.html}
 */
export type CastColumnTypesOperation = {
  /**
   * @minLength `1`
   * @maxLength `64`
   */
  Alias: string;
  /**
   * @minLength `0`
   * @maxLength `2048`
   */
  CastColumnTypeOperations: CastColumnTypeOperation[];
  Source: TransformOperationSource;
};
/**
 * Type definition for `AWS::QuickSight::DataSet.ColumnDataSubType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dataset-columndatasubtype.html}
 */
export type ColumnDataSubType = "FLOAT" | "FIXED";
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
   * @minLength `0`
   * @maxLength `500`
   */
  Text?: string;
};
/**
 * Type definition for `AWS::QuickSight::DataSet.ColumnGroup`.
 * <p>Groupings of columns that work together in certain Amazon Quick Suite features. This is
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
 * <p>A rule defined to grant access on one or more restricted columns.
            Each dataset can have multiple rules.
            To create a restricted column, you add it to one or more rules.
            Each rule must contain at least one column and at least one user or group.
            To be able to see a restricted column, a user or group needs to be added
            to a rule for that column.</p>
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dataset-columnlevelpermissionrule.html}
 */
export type ColumnLevelPermissionRule = {
  /**
   * <p>An array of column names.</p>
   * @minLength `1`
   */
  ColumnNames?: string[];
  /**
   * <p>An array of Amazon Resource Names (ARNs) for Quick Suite users or groups.</p>
   * @minLength `1`
   * @maxLength `100`
   */
  Principals?: string[];
};
/**
 * Type definition for `AWS::QuickSight::DataSet.ColumnTag`.
 * <p>A tag for a column in a
            <code>
               <a href="https://docs.aws.amazon.com/quicksight/latest/APIReference/API_TagColumnOperation.html">TagColumnOperation</a>
            </code>
            structure. This is a
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
 * Type definition for `AWS::QuickSight::DataSet.ColumnTagName`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dataset-columntagname.html}
 */
export type ColumnTagName = "COLUMN_GEOGRAPHIC_ROLE" | "COLUMN_DESCRIPTION";
/**
 * Type definition for `AWS::QuickSight::DataSet.ColumnToUnpivot`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dataset-columntounpivot.html}
 */
export type ColumnToUnpivot = {
  /**
   * @minLength `1`
   * @maxLength `127`
   */
  ColumnName?: string;
  /**
   * @minLength `0`
   * @maxLength `2047`
   */
  NewValue?: string;
};
/**
 * Type definition for `AWS::QuickSight::DataSet.CreateColumnsOperation`.
 * <p>A transform operation that creates calculated columns. Columns created in one such
            operation form a lexical closure.</p>
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dataset-createcolumnsoperation.html}
 */
export type CreateColumnsOperation = {
  /**
   * @minLength `1`
   * @maxLength `64`
   */
  Alias?: string;
  /**
   * <p>Calculated columns to create.</p>
   * @minLength `0`
   * @maxLength `256`
   */
  Columns: CalculatedColumn[];
  Source?: TransformOperationSource;
};
/**
 * Type definition for `AWS::QuickSight::DataSet.CustomSql`.
 * <p>A physical table type built from the results of the custom SQL query.</p>
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dataset-customsql.html}
 */
export type CustomSql = {
  /**
   * <p>The column schema from the SQL query result set.</p>
   * @minLength `0`
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
   * @maxLength `168000`
   */
  SqlQuery: string;
};
/**
 * Type definition for `AWS::QuickSight::DataSet.DataPrepAggregationFunction`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dataset-dataprepaggregationfunction.html}
 */
export type DataPrepAggregationFunction = {
  ListAggregation?: DataPrepListAggregationFunction;
  PercentileAggregation?: DataPrepPercentileAggregationFunction;
  SimpleAggregation?: DataPrepSimpleAggregationFunction;
};
/**
 * Type definition for `AWS::QuickSight::DataSet.DataPrepConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dataset-dataprepconfiguration.html}
 */
export type DataPrepConfiguration = {
  DestinationTableMap: DestinationTableMap;
  SourceTableMap: SourceTableMap;
  TransformStepMap: TransformStepMap;
};
/**
 * Type definition for `AWS::QuickSight::DataSet.DataPrepListAggregationFunction`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dataset-datapreplistaggregationfunction.html}
 */
export type DataPrepListAggregationFunction = {
  Distinct: boolean;
  /**
   * @minLength `1`
   * @maxLength `127`
   */
  InputColumnName?: string;
  Separator: string;
};
/**
 * Type definition for `AWS::QuickSight::DataSet.DataPrepPercentileAggregationFunction`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dataset-datapreppercentileaggregationfunction.html}
 */
export type DataPrepPercentileAggregationFunction = {
  /**
   * @minLength `1`
   * @maxLength `127`
   */
  InputColumnName?: string;
  /**
   * @min `0`
   * @max `100`
   */
  PercentileValue: number;
};
/**
 * Type definition for `AWS::QuickSight::DataSet.DataPrepSimpleAggregationFunction`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dataset-dataprepsimpleaggregationfunction.html}
 */
export type DataPrepSimpleAggregationFunction = {
  FunctionType: DataPrepSimpleAggregationFunctionType;
  /**
   * @minLength `1`
   * @maxLength `127`
   */
  InputColumnName?: string;
};
/**
 * Type definition for `AWS::QuickSight::DataSet.DataPrepSimpleAggregationFunctionType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dataset-dataprepsimpleaggregationfunctiontype.html}
 */
export type DataPrepSimpleAggregationFunctionType =
  | "COUNT"
  | "DISTINCT_COUNT"
  | "SUM"
  | "AVERAGE"
  | "MEDIAN"
  | "MAX"
  | "MIN"
  | "VARIANCE"
  | "STANDARD_DEVIATION";
/**
 * Type definition for `AWS::QuickSight::DataSet.DataSetColumnIdMapping`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dataset-datasetcolumnidmapping.html}
 */
export type DataSetColumnIdMapping = {
  /**
   * @minLength `1`
   * @maxLength `64`
   */
  SourceColumnId: string;
  /**
   * @minLength `1`
   * @maxLength `64`
   */
  TargetColumnId: string;
};
/**
 * Type definition for `AWS::QuickSight::DataSet.DataSetDateComparisonFilterCondition`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dataset-datasetdatecomparisonfiltercondition.html}
 */
export type DataSetDateComparisonFilterCondition = {
  Operator: DataSetDateComparisonFilterOperator;
  Value?: DataSetDateFilterValue;
};
/**
 * Type definition for `AWS::QuickSight::DataSet.DataSetDateComparisonFilterOperator`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dataset-datasetdatecomparisonfilteroperator.html}
 */
export type DataSetDateComparisonFilterOperator =
  | "BEFORE"
  | "BEFORE_OR_EQUALS_TO"
  | "AFTER"
  | "AFTER_OR_EQUALS_TO";
/**
 * Type definition for `AWS::QuickSight::DataSet.DataSetDateFilterCondition`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dataset-datasetdatefiltercondition.html}
 */
export type DataSetDateFilterCondition = {
  /**
   * @minLength `1`
   * @maxLength `127`
   */
  ColumnName?: string;
  ComparisonFilterCondition?: DataSetDateComparisonFilterCondition;
  RangeFilterCondition?: DataSetDateRangeFilterCondition;
};
/**
 * Type definition for `AWS::QuickSight::DataSet.DataSetDateFilterValue`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dataset-datasetdatefiltervalue.html}
 */
export type DataSetDateFilterValue = {
  StaticValue?: string;
};
/**
 * Type definition for `AWS::QuickSight::DataSet.DataSetDateRangeFilterCondition`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dataset-datasetdaterangefiltercondition.html}
 */
export type DataSetDateRangeFilterCondition = {
  IncludeMaximum?: boolean;
  IncludeMinimum?: boolean;
  RangeMaximum?: DataSetDateFilterValue;
  RangeMinimum?: DataSetDateFilterValue;
};
/**
 * Type definition for `AWS::QuickSight::DataSet.DataSetImportMode`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dataset-datasetimportmode.html}
 */
export type DataSetImportMode = "SPICE" | "DIRECT_QUERY";
/**
 * Type definition for `AWS::QuickSight::DataSet.DataSetNumericComparisonFilterCondition`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dataset-datasetnumericcomparisonfiltercondition.html}
 */
export type DataSetNumericComparisonFilterCondition = {
  Operator: DataSetNumericComparisonFilterOperator;
  Value?: DataSetNumericFilterValue;
};
/**
 * Type definition for `AWS::QuickSight::DataSet.DataSetNumericComparisonFilterOperator`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dataset-datasetnumericcomparisonfilteroperator.html}
 */
export type DataSetNumericComparisonFilterOperator =
  | "EQUALS"
  | "DOES_NOT_EQUAL"
  | "GREATER_THAN"
  | "GREATER_THAN_OR_EQUALS_TO"
  | "LESS_THAN"
  | "LESS_THAN_OR_EQUALS_TO";
/**
 * Type definition for `AWS::QuickSight::DataSet.DataSetNumericFilterCondition`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dataset-datasetnumericfiltercondition.html}
 */
export type DataSetNumericFilterCondition = {
  /**
   * @minLength `1`
   * @maxLength `127`
   */
  ColumnName?: string;
  ComparisonFilterCondition?: DataSetNumericComparisonFilterCondition;
  RangeFilterCondition?: DataSetNumericRangeFilterCondition;
};
/**
 * Type definition for `AWS::QuickSight::DataSet.DataSetNumericFilterValue`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dataset-datasetnumericfiltervalue.html}
 */
export type DataSetNumericFilterValue = {
  StaticValue?: number;
};
/**
 * Type definition for `AWS::QuickSight::DataSet.DataSetNumericRangeFilterCondition`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dataset-datasetnumericrangefiltercondition.html}
 */
export type DataSetNumericRangeFilterCondition = {
  IncludeMaximum?: boolean;
  IncludeMinimum?: boolean;
  RangeMaximum?: DataSetNumericFilterValue;
  RangeMinimum?: DataSetNumericFilterValue;
};
/**
 * Type definition for `AWS::QuickSight::DataSet.DatasetParameter`.
 * <p>A dataset parameter.</p>
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dataset-datasetparameter.html}
 */
export type DatasetParameter = {
  /**
   * <p>A date time parameter for a dataset.</p>
   */
  DateTimeDatasetParameter?: DateTimeDatasetParameter;
  /**
   * <p>A decimal parameter for a dataset.</p>
   */
  DecimalDatasetParameter?: DecimalDatasetParameter;
  /**
   * <p>An integer parameter for a dataset.</p>
   */
  IntegerDatasetParameter?: IntegerDatasetParameter;
  /**
   * <p>A string parameter for a dataset.</p>
   */
  StringDatasetParameter?: StringDatasetParameter;
};
/**
 * Type definition for `AWS::QuickSight::DataSet.DatasetParameterValueType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dataset-datasetparametervaluetype.html}
 */
export type DatasetParameterValueType = "MULTI_VALUED" | "SINGLE_VALUED";
/**
 * Type definition for `AWS::QuickSight::DataSet.DataSetRefreshProperties`.
 * <p>The refresh properties of a dataset.</p>
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dataset-datasetrefreshproperties.html}
 */
export type DataSetRefreshProperties = {
  FailureConfiguration?: RefreshFailureConfiguration;
  /**
   * <p>The refresh configuration of a dataset.</p>
   */
  RefreshConfiguration?: RefreshConfiguration;
};
/**
 * Type definition for `AWS::QuickSight::DataSet.DataSetStringComparisonFilterCondition`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dataset-datasetstringcomparisonfiltercondition.html}
 */
export type DataSetStringComparisonFilterCondition = {
  Operator: DataSetStringComparisonFilterOperator;
  Value?: DataSetStringFilterValue;
};
/**
 * Type definition for `AWS::QuickSight::DataSet.DataSetStringComparisonFilterOperator`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dataset-datasetstringcomparisonfilteroperator.html}
 */
export type DataSetStringComparisonFilterOperator =
  | "EQUALS"
  | "DOES_NOT_EQUAL"
  | "CONTAINS"
  | "DOES_NOT_CONTAIN"
  | "STARTS_WITH"
  | "ENDS_WITH";
/**
 * Type definition for `AWS::QuickSight::DataSet.DataSetStringFilterCondition`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dataset-datasetstringfiltercondition.html}
 */
export type DataSetStringFilterCondition = {
  /**
   * @minLength `1`
   * @maxLength `127`
   */
  ColumnName?: string;
  ComparisonFilterCondition?: DataSetStringComparisonFilterCondition;
  ListFilterCondition?: DataSetStringListFilterCondition;
};
/**
 * Type definition for `AWS::QuickSight::DataSet.DataSetStringFilterValue`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dataset-datasetstringfiltervalue.html}
 */
export type DataSetStringFilterValue = {
  /**
   * @minLength `0`
   * @maxLength `512`
   */
  StaticValue?: string;
};
/**
 * Type definition for `AWS::QuickSight::DataSet.DataSetStringListFilterCondition`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dataset-datasetstringlistfiltercondition.html}
 */
export type DataSetStringListFilterCondition = {
  Operator: DataSetStringListFilterOperator;
  Values?: DataSetStringListFilterValue;
};
/**
 * Type definition for `AWS::QuickSight::DataSet.DataSetStringListFilterOperator`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dataset-datasetstringlistfilteroperator.html}
 */
export type DataSetStringListFilterOperator = "INCLUDE" | "EXCLUDE";
/**
 * Type definition for `AWS::QuickSight::DataSet.DataSetStringListFilterValue`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dataset-datasetstringlistfiltervalue.html}
 */
export type DataSetStringListFilterValue = {
  /**
   * @minLength `0`
   * @maxLength `1000`
   */
  StaticValues?: string[];
};
/**
 * Type definition for `AWS::QuickSight::DataSet.DataSetUsageConfiguration`.
 * <p>The usage configuration to apply to child datasets that reference this dataset as a source.</p>
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dataset-datasetusageconfiguration.html}
 */
export type DataSetUsageConfiguration = {
  /**
   * <p>An option that controls whether a child dataset of a direct query can use this dataset as a source.</p>
   */
  DisableUseAsDirectQuerySource?: boolean;
  /**
   * <p>An option that controls whether a child dataset that's stored in QuickSight can use this dataset as a source.</p>
   */
  DisableUseAsImportedSource?: boolean;
};
/**
 * Type definition for `AWS::QuickSight::DataSet.DataSetUseAs`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dataset-datasetuseas.html}
 */
export type DataSetUseAs = "RLS_RULES";
/**
 * Type definition for `AWS::QuickSight::DataSet.DateTimeDatasetParameter`.
 * <p>A date time parameter for a dataset.</p>
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dataset-datetimedatasetparameter.html}
 */
export type DateTimeDatasetParameter = {
  /**
   * <p>The default values of a date time parameter.</p>
   */
  DefaultValues?: DateTimeDatasetParameterDefaultValues;
  /**
   * <p>An identifier for the parameter that is created in the dataset.</p>
   * @minLength `1`
   * @maxLength `128`
   * @pattern `^[a-zA-Z0-9-]+$`
   */
  Id: string;
  /**
   * <p>The name of the date time parameter that is created in the dataset.</p>
   * @minLength `1`
   * @maxLength `2048`
   * @pattern `^[a-zA-Z0-9]+$`
   */
  Name: string;
  TimeGranularity?: TimeGranularity;
  ValueType: DatasetParameterValueType;
};
/**
 * Type definition for `AWS::QuickSight::DataSet.DateTimeDatasetParameterDefaultValues`.
 * <p>The default values of a date time parameter.</p>
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dataset-datetimedatasetparameterdefaultvalues.html}
 */
export type DateTimeDatasetParameterDefaultValues = {
  /**
   * <p>A list of static default values for a given date time parameter.</p>
   * @minLength `0`
   * @maxLength `32`
   */
  StaticValues?: string[];
};
/**
 * Type definition for `AWS::QuickSight::DataSet.DecimalDatasetParameter`.
 * <p>A decimal parameter for a dataset.</p>
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dataset-decimaldatasetparameter.html}
 */
export type DecimalDatasetParameter = {
  /**
   * <p>The default values of a decimal parameter.</p>
   */
  DefaultValues?: DecimalDatasetParameterDefaultValues;
  /**
   * <p>An identifier for the decimal parameter created in the dataset.</p>
   * @minLength `1`
   * @maxLength `128`
   * @pattern `^[a-zA-Z0-9-]+$`
   */
  Id: string;
  /**
   * <p>The name of the decimal parameter that is created in the dataset.</p>
   * @minLength `1`
   * @maxLength `2048`
   * @pattern `^[a-zA-Z0-9]+$`
   */
  Name: string;
  ValueType: DatasetParameterValueType;
};
/**
 * Type definition for `AWS::QuickSight::DataSet.DecimalDatasetParameterDefaultValues`.
 * <p>The default values of a decimal parameter.</p>
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dataset-decimaldatasetparameterdefaultvalues.html}
 */
export type DecimalDatasetParameterDefaultValues = {
  /**
   * <p>A list of static default values for a given decimal parameter.</p>
   * @minLength `0`
   * @maxLength `32`
   */
  StaticValues?: number[];
};
/**
 * Type definition for `AWS::QuickSight::DataSet.DestinationTable`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dataset-destinationtable.html}
 */
export type DestinationTable = {
  /**
   * @minLength `1`
   * @maxLength `64`
   */
  Alias: string;
  Source: DestinationTableSource;
};
/**
 * Type definition for `AWS::QuickSight::DataSet.DestinationTableMap`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dataset-destinationtablemap.html}
 */
export type DestinationTableMap = Record<string, DestinationTable>;
/**
 * Type definition for `AWS::QuickSight::DataSet.DestinationTableSource`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dataset-destinationtablesource.html}
 */
export type DestinationTableSource = {
  /**
   * @minLength `1`
   * @maxLength `64`
   * @pattern `^[0-9a-zA-Z-]*$`
   */
  TransformOperationId: string;
};
/**
 * Type definition for `AWS::QuickSight::DataSet.FieldFolder`.
 * <p>A FieldFolder element is a folder that contains fields and nested subfolders.</p>
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dataset-fieldfolder.html}
 */
export type FieldFolder = {
  /**
   * <p>A folder has a list of columns. A column can only be in one folder.</p>
   * @minLength `0`
   * @maxLength `5000`
   */
  Columns?: string[];
  /**
   * <p>The description for a field folder.</p>
   * @minLength `0`
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
  ConditionExpression?: string;
  DateFilterCondition?: DataSetDateFilterCondition;
  NumericFilterCondition?: DataSetNumericFilterCondition;
  StringFilterCondition?: DataSetStringFilterCondition;
};
/**
 * Type definition for `AWS::QuickSight::DataSet.FiltersOperation`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dataset-filtersoperation.html}
 */
export type FiltersOperation = {
  /**
   * @minLength `1`
   * @maxLength `64`
   */
  Alias: string;
  /**
   * @minLength `0`
   * @maxLength `128`
   */
  FilterOperations: FilterOperation[];
  Source: TransformOperationSource;
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
  | "POLITICAL1"
  | "CENSUS_TRACT"
  | "CENSUS_BLOCK_GROUP"
  | "CENSUS_BLOCK";
/**
 * Type definition for `AWS::QuickSight::DataSet.ImportTableOperation`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dataset-importtableoperation.html}
 */
export type ImportTableOperation = {
  /**
   * @minLength `1`
   * @maxLength `64`
   */
  Alias: string;
  Source: ImportTableOperationSource;
};
/**
 * Type definition for `AWS::QuickSight::DataSet.ImportTableOperationSource`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dataset-importtableoperationsource.html}
 */
export type ImportTableOperationSource = {
  /**
   * @minLength `1`
   * @maxLength `2048`
   */
  ColumnIdMappings?: DataSetColumnIdMapping[];
  /**
   * @minLength `1`
   * @maxLength `64`
   * @pattern `^[0-9a-zA-Z-]*$`
   */
  SourceTableId: string;
};
/**
 * Type definition for `AWS::QuickSight::DataSet.IncrementalRefresh`.
 * <p>The incremental refresh configuration for a dataset.</p>
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dataset-incrementalrefresh.html}
 */
export type IncrementalRefresh = {
  /**
   * <p>The lookback window setup of an incremental refresh configuration.</p>
   */
  LookbackWindow: LookbackWindow;
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
   * @minLength `1`
   * @maxLength `64`
   */
  Id?: string;
  /**
   * <p>The name of this column in the underlying data source.</p>
   * @minLength `1`
   * @maxLength `127`
   */
  Name: string;
  SubType?: ColumnDataSubType;
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
  | "JSON"
  | "SEMISTRUCT";
/**
 * Type definition for `AWS::QuickSight::DataSet.IntegerDatasetParameter`.
 * <p>An integer parameter for a dataset.</p>
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dataset-integerdatasetparameter.html}
 */
export type IntegerDatasetParameter = {
  /**
   * <p>The default values of an integer parameter.</p>
   */
  DefaultValues?: IntegerDatasetParameterDefaultValues;
  /**
   * <p>An identifier for the integer parameter created in the dataset.</p>
   * @minLength `1`
   * @maxLength `128`
   * @pattern `^[a-zA-Z0-9-]+$`
   */
  Id: string;
  /**
   * <p>The name of the integer parameter that is created in the dataset.</p>
   * @minLength `1`
   * @maxLength `2048`
   * @pattern `^[a-zA-Z0-9]+$`
   */
  Name: string;
  ValueType: DatasetParameterValueType;
};
/**
 * Type definition for `AWS::QuickSight::DataSet.IntegerDatasetParameterDefaultValues`.
 * <p>The default values of an integer parameter.</p>
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dataset-integerdatasetparameterdefaultvalues.html}
 */
export type IntegerDatasetParameterDefaultValues = {
  /**
   * <p>A list of static default values for a given integer parameter.</p>
   * @minLength `0`
   * @maxLength `32`
   */
  StaticValues?: number[];
};
/**
 * Type definition for `AWS::QuickSight::DataSet.JoinInstruction`.
 * <p>The instructions associated with a join. </p>
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dataset-joininstruction.html}
 */
export type JoinInstruction = {
  /**
   * <p>Properties associated with the columns participating in a join.</p>
   */
  LeftJoinKeyProperties?: JoinKeyProperties;
  /**
   * <p>The operand on the left side of a join.</p>
   * @minLength `1`
   * @maxLength `64`
   * @pattern `^[0-9a-zA-Z-]*$`
   */
  LeftOperand: string;
  /**
   * <p>The join instructions provided in the <code>ON</code> clause of a join.</p>
   * @minLength `1`
   * @maxLength `512`
   */
  OnClause: string;
  /**
   * <p>Properties associated with the columns participating in a join.</p>
   */
  RightJoinKeyProperties?: JoinKeyProperties;
  /**
   * <p>The operand on the right side of a join.</p>
   * @minLength `1`
   * @maxLength `64`
   * @pattern `^[0-9a-zA-Z-]*$`
   */
  RightOperand: string;
  Type: JoinType;
};
/**
 * Type definition for `AWS::QuickSight::DataSet.JoinKeyProperties`.
 * <p>Properties associated with the columns participating in a join.</p>
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dataset-joinkeyproperties.html}
 */
export type JoinKeyProperties = {
  /**
     * <p>A value that indicates that a row in a table is uniquely identified by the columns in
                a join key. This is used by Quick Suite to optimize query performance.</p>
     */
  UniqueKey?: boolean;
};
/**
 * Type definition for `AWS::QuickSight::DataSet.JoinOperandProperties`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dataset-joinoperandproperties.html}
 */
export type JoinOperandProperties = {
  /**
   * @minLength `1`
   * @maxLength `2048`
   */
  OutputColumnNameOverrides: OutputColumnNameOverride[];
};
/**
 * Type definition for `AWS::QuickSight::DataSet.JoinOperation`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dataset-joinoperation.html}
 */
export type JoinOperation = {
  /**
   * @minLength `1`
   * @maxLength `64`
   */
  Alias: string;
  LeftOperand: TransformOperationSource;
  LeftOperandProperties?: JoinOperandProperties;
  /**
   * @minLength `1`
   * @maxLength `512`
   */
  OnClause: string;
  RightOperand: TransformOperationSource;
  RightOperandProperties?: JoinOperandProperties;
  Type: JoinOperationType;
};
/**
 * Type definition for `AWS::QuickSight::DataSet.JoinOperationType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dataset-joinoperationtype.html}
 */
export type JoinOperationType = "INNER" | "OUTER" | "LEFT" | "RIGHT";
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
   * <p>Transform operations that act on this logical table. For this structure to be valid, only one of the attributes can be non-null. </p>
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
   * <p>The Amazon Resource Number (ARN) of the parent dataset.</p>
   */
  DataSetArn?: string;
  /**
   * <p>The instructions associated with a join. </p>
   */
  JoinInstruction?: JoinInstruction;
  /**
   * <p>Physical table ID.</p>
   * @minLength `1`
   * @maxLength `64`
   * @pattern `^[0-9a-zA-Z-]*$`
   */
  PhysicalTableId?: string;
};
/**
 * Type definition for `AWS::QuickSight::DataSet.LookbackWindow`.
 * <p>The lookback window setup of an incremental refresh configuration.</p>
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dataset-lookbackwindow.html}
 */
export type LookbackWindow = {
  /**
   * <p>The name of the lookback window column.</p>
   */
  ColumnName: string;
  /**
   * <p>The lookback window column size.</p>
   * @min `1`
   */
  Size: number;
  SizeUnit: LookbackWindowSizeUnit;
};
/**
 * Type definition for `AWS::QuickSight::DataSet.LookbackWindowSizeUnit`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dataset-lookbackwindowsizeunit.html}
 */
export type LookbackWindowSizeUnit = "HOUR" | "DAY" | "WEEK";
/**
 * Type definition for `AWS::QuickSight::DataSet.NewDefaultValues`.
 * <p>The configuration that overrides the existing default values for a dataset parameter that is inherited from another dataset.</p>
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dataset-newdefaultvalues.html}
 */
export type NewDefaultValues = {
  /**
   * <p>A list of static default values for a given date time parameter.</p>
   * @minLength `0`
   * @maxLength `32`
   */
  DateTimeStaticValues?: string[];
  /**
   * <p>A list of static default values for a given decimal parameter.</p>
   * @minLength `0`
   * @maxLength `32`
   */
  DecimalStaticValues?: number[];
  /**
   * <p>A list of static default values for a given integer parameter.</p>
   * @minLength `0`
   * @maxLength `32`
   */
  IntegerStaticValues?: number[];
  /**
   * <p>A list of static default values for a given string parameter.</p>
   * @minLength `0`
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
   * @minLength `0`
   * @maxLength `500`
   */
  Description?: string;
  /**
   * @minLength `1`
   * @maxLength `64`
   */
  Id?: string;
  /**
   * <p>The display name of the column..</p>
   * @minLength `1`
   * @maxLength `127`
   */
  Name?: string;
  SubType?: ColumnDataSubType;
  Type?: ColumnDataType;
};
/**
 * Type definition for `AWS::QuickSight::DataSet.OutputColumnNameOverride`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dataset-outputcolumnnameoverride.html}
 */
export type OutputColumnNameOverride = {
  /**
   * @minLength `1`
   * @maxLength `127`
   */
  OutputColumnName: string;
  /**
   * @minLength `1`
   * @maxLength `127`
   */
  SourceColumnName?: string;
};
/**
 * Type definition for `AWS::QuickSight::DataSet.OverrideDatasetParameterOperation`.
 * <p>A transform operation that overrides the dataset parameter values that are defined in another dataset.</p>
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dataset-overridedatasetparameteroperation.html}
 */
export type OverrideDatasetParameterOperation = {
  /**
   * <p>The configuration that overrides the existing default values for a dataset parameter that is inherited from another dataset.</p>
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
 * Type definition for `AWS::QuickSight::DataSet.ParentDataSet`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dataset-parentdataset.html}
 */
export type ParentDataSet = {
  DataSetArn: string;
  /**
   * @minLength `0`
   * @maxLength `2048`
   */
  InputColumns: InputColumn[];
};
/**
 * Type definition for `AWS::QuickSight::DataSet.PerformanceConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dataset-performanceconfiguration.html}
 */
export type PerformanceConfiguration = {
  /**
   * @minLength `1`
   * @maxLength `1`
   */
  UniqueKeys?: UniqueKey[];
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
   * <p>A physical table type for an S3 data source.</p>
   */
  S3Source?: S3Source;
  SaaSTable?: SaaSTable;
};
/**
 * Type definition for `AWS::QuickSight::DataSet.PhysicalTableMap`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dataset-physicaltablemap.html}
 */
export type PhysicalTableMap = Record<string, PhysicalTable>;
/**
 * Type definition for `AWS::QuickSight::DataSet.PivotConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dataset-pivotconfiguration.html}
 */
export type PivotConfiguration = {
  /**
   * @minLength `1`
   * @maxLength `127`
   */
  LabelColumnName?: string;
  /**
   * @minLength `0`
   * @maxLength `100`
   */
  PivotedLabels: PivotedLabel[];
};
/**
 * Type definition for `AWS::QuickSight::DataSet.PivotedLabel`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dataset-pivotedlabel.html}
 */
export type PivotedLabel = {
  /**
   * @minLength `0`
   * @maxLength `2047`
   */
  LabelName: string;
  /**
   * @minLength `1`
   * @maxLength `64`
   */
  NewColumnId: string;
  /**
   * @minLength `1`
   * @maxLength `127`
   */
  NewColumnName: string;
};
/**
 * Type definition for `AWS::QuickSight::DataSet.PivotOperation`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dataset-pivotoperation.html}
 */
export type PivotOperation = {
  /**
   * @minLength `1`
   * @maxLength `64`
   */
  Alias: string;
  /**
   * @minLength `0`
   * @maxLength `128`
   */
  GroupByColumnNames?: string[];
  PivotConfiguration: PivotConfiguration;
  Source: TransformOperationSource;
  ValueColumnConfiguration: ValueColumnConfiguration;
};
/**
 * Type definition for `AWS::QuickSight::DataSet.ProjectOperation`.
 * <p>A transform operation that projects columns. Operations that come after a projection
            can only refer to projected columns.</p>
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dataset-projectoperation.html}
 */
export type ProjectOperation = {
  /**
   * @minLength `1`
   * @maxLength `64`
   */
  Alias?: string;
  /**
   * <p>Projected columns.</p>
   * @minLength `0`
   * @maxLength `2048`
   */
  ProjectedColumns?: string[];
  Source?: TransformOperationSource;
};
/**
 * Type definition for `AWS::QuickSight::DataSet.RefreshConfiguration`.
 * <p>The refresh configuration of a dataset.</p>
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dataset-refreshconfiguration.html}
 */
export type RefreshConfiguration = {
  /**
   * <p>The incremental refresh configuration for a dataset.</p>
   */
  IncrementalRefresh: IncrementalRefresh;
};
/**
 * Type definition for `AWS::QuickSight::DataSet.RefreshFailureAlertStatus`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dataset-refreshfailurealertstatus.html}
 */
export type RefreshFailureAlertStatus = "ENABLED" | "DISABLED";
/**
 * Type definition for `AWS::QuickSight::DataSet.RefreshFailureConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dataset-refreshfailureconfiguration.html}
 */
export type RefreshFailureConfiguration = {
  EmailAlert?: RefreshFailureEmailAlert;
};
/**
 * Type definition for `AWS::QuickSight::DataSet.RefreshFailureEmailAlert`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dataset-refreshfailureemailalert.html}
 */
export type RefreshFailureEmailAlert = {
  AlertStatus?: RefreshFailureAlertStatus;
};
/**
 * Type definition for `AWS::QuickSight::DataSet.RelationalTable`.
 * <p>A physical table type for relational data sources.</p>
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dataset-relationaltable.html}
 */
export type RelationalTable = {
  /**
   * <p>The catalog associated with a table.</p>
   * @minLength `0`
   * @maxLength `256`
   */
  Catalog?: string;
  /**
   * <p>The Amazon Resource Name (ARN) for the data source.</p>
   */
  DataSourceArn: string;
  /**
   * <p>The column schema of the table.</p>
   * @minLength `0`
   * @maxLength `2048`
   */
  InputColumns: InputColumn[];
  /**
   * <p>The name of the relational table.</p>
   * @minLength `1`
   * @maxLength `256`
   */
  Name: string;
  /**
   * <p>The schema name. This name applies to certain relational database engines.</p>
   * @minLength `0`
   * @maxLength `256`
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
   * @maxLength `127`
   */
  ColumnName: string;
  /**
   * <p>The new name for the column.</p>
   * @minLength `1`
   * @maxLength `127`
   */
  NewColumnName: string;
};
/**
 * Type definition for `AWS::QuickSight::DataSet.RenameColumnsOperation`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dataset-renamecolumnsoperation.html}
 */
export type RenameColumnsOperation = {
  /**
   * @minLength `1`
   * @maxLength `64`
   */
  Alias: string;
  /**
   * @minLength `0`
   * @maxLength `2048`
   */
  RenameColumnOperations: RenameColumnOperation[];
  Source: TransformOperationSource;
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
                   <p>The ARN of an Amazon Quick Suite user or group associated with a data source or dataset. (This is common.)</p>
                </li>
                <li>
                   <p>The ARN of an Amazon Quick Suite user, group, or namespace associated with an analysis, dashboard, template, or theme. (This is common.)</p>
                </li>
                <li>
                   <p>The ARN of an Amazon Web Services account root: This is an IAM ARN rather than a QuickSight
                        ARN. Use this option only to share resources (templates) across Amazon Web Services accounts.
                        (This is less common.) </p>
                </li>
             </ul>
     * @minLength `1`
     * @maxLength `256`
     */
  Principal: string;
};
/**
 * Type definition for `AWS::QuickSight::DataSet.RowLevelPermissionConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dataset-rowlevelpermissionconfiguration.html}
 */
export type RowLevelPermissionConfiguration = {
  /**
     * <p>Information about a dataset that contains permissions for row-level security (RLS).
                The permissions dataset maps fields to users or groups. For more information, see
                <a href="https://docs.aws.amazon.com/quicksight/latest/user/restrict-access-to-a-data-set-using-row-level-security.html">Using Row-Level Security (RLS) to Restrict Access to a Dataset</a> in the <i>Amazon Quick Suite User
                    Guide</i>.</p>
             <p>The option to deny permissions by setting <code>PermissionPolicy</code> to <code>DENY_ACCESS</code> is
                not supported for new RLS datasets.</p>
     */
  RowLevelPermissionDataSet?: RowLevelPermissionDataSet;
  /**
   * <p>The configuration of tags on a dataset to set row-level security. </p>
   */
  TagConfiguration?: RowLevelPermissionTagConfiguration;
};
/**
 * Type definition for `AWS::QuickSight::DataSet.RowLevelPermissionDataSet`.
 * <p>Information about a dataset that contains permissions for row-level security (RLS).
            The permissions dataset maps fields to users or groups. For more information, see
            <a href="https://docs.aws.amazon.com/quicksight/latest/user/restrict-access-to-a-data-set-using-row-level-security.html">Using Row-Level Security (RLS) to Restrict Access to a Dataset</a> in the <i>Amazon Quick Suite User
                Guide</i>.</p>
         <p>The option to deny permissions by setting <code>PermissionPolicy</code> to <code>DENY_ACCESS</code> is
            not supported for new RLS datasets.</p>
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dataset-rowlevelpermissiondataset.html}
 */
export type RowLevelPermissionDataSet = {
  /**
   * <p>The Amazon Resource Name (ARN) of the dataset that contains permissions for RLS.</p>
   */
  Arn: string;
  FormatVersion?: RowLevelPermissionFormatVersion;
  /**
   * <p>The namespace associated with the dataset that contains permissions for RLS.</p>
   * @minLength `0`
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
 * <p>The configuration of tags on a dataset to set row-level security. </p>
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
 * <p>A set of rules associated with a tag.</p>
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
   * @minLength `0`
   * @maxLength `10`
   */
  TagMultiValueDelimiter?: string;
};
/**
 * Type definition for `AWS::QuickSight::DataSet.S3Source`.
 * <p>A physical table type for an S3 data source.</p>
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dataset-s3source.html}
 */
export type S3Source = {
  /**
   * <p>The Amazon Resource Name (ARN) for the data source.</p>
   */
  DataSourceArn: string;
  /**
     * <p>A physical table type for an S3 data source.</p>
             <note>
                <p>For files that aren't JSON, only <code>STRING</code> data types are supported in input columns.</p>
             </note>
     * @minLength `0`
     * @maxLength `2048`
     */
  InputColumns: InputColumn[];
  /**
   * <p>Information about the format for a source file or files.</p>
   */
  UploadSettings?: UploadSettings;
};
/**
 * Type definition for `AWS::QuickSight::DataSet.SaaSTable`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dataset-saastable.html}
 */
export type SaaSTable = {
  DataSourceArn: string;
  /**
   * @minLength `0`
   * @maxLength `2048`
   */
  InputColumns: InputColumn[];
  /**
   * @minLength `1`
   * @maxLength `32`
   */
  TablePath: TablePathElement[];
};
/**
 * Type definition for `AWS::QuickSight::DataSet.SemanticModelConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dataset-semanticmodelconfiguration.html}
 */
export type SemanticModelConfiguration = {
  TableMap?: SemanticTableMap;
};
/**
 * Type definition for `AWS::QuickSight::DataSet.SemanticTable`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dataset-semantictable.html}
 */
export type SemanticTable = {
  /**
   * @minLength `1`
   * @maxLength `64`
   */
  Alias: string;
  /**
   * @minLength `1`
   * @maxLength `64`
   * @pattern `^[0-9a-zA-Z-]*$`
   */
  DestinationTableId: string;
  RowLevelPermissionConfiguration?: RowLevelPermissionConfiguration;
};
/**
 * Type definition for `AWS::QuickSight::DataSet.SemanticTableMap`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dataset-semantictablemap.html}
 */
export type SemanticTableMap = Record<string, SemanticTable>;
/**
 * Type definition for `AWS::QuickSight::DataSet.SourceTable`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dataset-sourcetable.html}
 */
export type SourceTable = {
  DataSet?: ParentDataSet;
  /**
   * @minLength `1`
   * @maxLength `64`
   * @pattern `^[0-9a-zA-Z-]*$`
   */
  PhysicalTableId?: string;
};
/**
 * Type definition for `AWS::QuickSight::DataSet.SourceTableMap`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dataset-sourcetablemap.html}
 */
export type SourceTableMap = Record<string, SourceTable>;
/**
 * Type definition for `AWS::QuickSight::DataSet.Status`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dataset-status.html}
 */
export type Status = "ENABLED" | "DISABLED";
/**
 * Type definition for `AWS::QuickSight::DataSet.StringDatasetParameter`.
 * <p>A string parameter for a dataset.</p>
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dataset-stringdatasetparameter.html}
 */
export type StringDatasetParameter = {
  /**
   * <p>The default values of a string parameter.</p>
   */
  DefaultValues?: StringDatasetParameterDefaultValues;
  /**
   * <p>An identifier for the string parameter that is created in the dataset.</p>
   * @minLength `1`
   * @maxLength `128`
   * @pattern `^[a-zA-Z0-9-]+$`
   */
  Id: string;
  /**
   * <p>The name of the string parameter that is created in the dataset.</p>
   * @minLength `1`
   * @maxLength `2048`
   * @pattern `^[a-zA-Z0-9]+$`
   */
  Name: string;
  ValueType: DatasetParameterValueType;
};
/**
 * Type definition for `AWS::QuickSight::DataSet.StringDatasetParameterDefaultValues`.
 * <p>The default values of a string parameter.</p>
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dataset-stringdatasetparameterdefaultvalues.html}
 */
export type StringDatasetParameterDefaultValues = {
  /**
   * <p>A list of static default values for a given string parameter.</p>
   * @minLength `0`
   * @maxLength `32`
   */
  StaticValues?: string[];
};
/**
 * Type definition for `AWS::QuickSight::DataSet.TablePathElement`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dataset-tablepathelement.html}
 */
export type TablePathElement = {
  /**
   * @minLength `1`
   * @maxLength `256`
   */
  Id?: string;
  /**
   * @minLength `1`
   * @maxLength `256`
   */
  Name?: string;
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
   * @maxLength `127`
   */
  ColumnName: string;
  /**
     * <p>The dataset column tag, currently only used for geospatial type tagging.</p>
             <note>
                <p>This is not tags for the Amazon Web Services tagging feature.</p>
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
   * <p>A transform operation that overrides the dataset parameter values that are defined in another dataset.</p>
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
  /**
   * <p>A transform operation that removes tags associated with a column.</p>
   */
  UntagColumnOperation?: UntagColumnOperation;
};
/**
 * Type definition for `AWS::QuickSight::DataSet.TransformOperationSource`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dataset-transformoperationsource.html}
 */
export type TransformOperationSource = {
  /**
   * @minLength `1`
   * @maxLength `2048`
   */
  ColumnIdMappings?: DataSetColumnIdMapping[];
  /**
   * @minLength `1`
   * @maxLength `64`
   * @pattern `^[0-9a-zA-Z-]*$`
   */
  TransformOperationId: string;
};
/**
 * Type definition for `AWS::QuickSight::DataSet.TransformStep`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dataset-transformstep.html}
 */
export type TransformStep = {
  AggregateStep?: AggregateOperation;
  AppendStep?: AppendOperation;
  CastColumnTypesStep?: CastColumnTypesOperation;
  /**
     * <p>A transform operation that creates calculated columns. Columns created in one such
                operation form a lexical closure.</p>
     */
  CreateColumnsStep?: CreateColumnsOperation;
  FiltersStep?: FiltersOperation;
  ImportTableStep?: ImportTableOperation;
  JoinStep?: JoinOperation;
  PivotStep?: PivotOperation;
  /**
     * <p>A transform operation that projects columns. Operations that come after a projection
                can only refer to projected columns.</p>
     */
  ProjectStep?: ProjectOperation;
  RenameColumnsStep?: RenameColumnsOperation;
  UnpivotStep?: UnpivotOperation;
};
/**
 * Type definition for `AWS::QuickSight::DataSet.TransformStepMap`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dataset-transformstepmap.html}
 */
export type TransformStepMap = Record<string, TransformStep>;
/**
 * Type definition for `AWS::QuickSight::DataSet.UniqueKey`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dataset-uniquekey.html}
 */
export type UniqueKey = {
  /**
   * @minLength `1`
   * @maxLength `1`
   */
  ColumnNames: string[];
};
/**
 * Type definition for `AWS::QuickSight::DataSet.UnpivotOperation`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dataset-unpivotoperation.html}
 */
export type UnpivotOperation = {
  /**
   * @minLength `1`
   * @maxLength `64`
   */
  Alias: string;
  /**
   * @minLength `0`
   * @maxLength `100`
   */
  ColumnsToUnpivot: ColumnToUnpivot[];
  Source: TransformOperationSource;
  /**
   * @minLength `1`
   * @maxLength `64`
   */
  UnpivotedLabelColumnId: string;
  /**
   * @minLength `1`
   * @maxLength `127`
   */
  UnpivotedLabelColumnName: string;
  /**
   * @minLength `1`
   * @maxLength `64`
   */
  UnpivotedValueColumnId: string;
  /**
   * @minLength `1`
   * @maxLength `127`
   */
  UnpivotedValueColumnName: string;
};
/**
 * Type definition for `AWS::QuickSight::DataSet.UntagColumnOperation`.
 * <p>A transform operation that removes tags associated with a column.</p>
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dataset-untagcolumnoperation.html}
 */
export type UntagColumnOperation = {
  /**
   * <p>The column that this operation acts on.</p>
   * @minLength `1`
   * @maxLength `127`
   */
  ColumnName: string;
  /**
   * <p>The column tags to remove from this column.</p>
   */
  TagNames: ColumnTagName[];
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
 * Type definition for `AWS::QuickSight::DataSet.ValueColumnConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dataset-valuecolumnconfiguration.html}
 */
export type ValueColumnConfiguration = {
  AggregationFunction?: DataPrepAggregationFunction;
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
  constructor(
    logicalId: string,
    properties: QuickSightDataSetProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, QuickSightDataSet.Type, properties, options);
  }
}
