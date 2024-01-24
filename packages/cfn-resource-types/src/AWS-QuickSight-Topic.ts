import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Definition of the AWS::QuickSight::Topic Resource Type.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-topic.html}
 */
export type QuickSightTopicProperties = {
  /**
   * @minLength `12`
   * @maxLength `12`
   * @pattern `^[0-9]{12}$`
   */
  AwsAccountId?: string;
  DataSets?: DatasetMetadata[];
  /**
   * @minLength `0`
   * @maxLength `256`
   */
  Description?: string;
  /**
   * @minLength `1`
   * @maxLength `128`
   */
  Name?: string;
  /**
   * @minLength `0`
   * @maxLength `256`
   * @pattern `^[A-Za-z0-9-_.\\+]*$`
   */
  TopicId?: string;
  UserExperienceVersion?: TopicUserExperienceVersion;
};
/**
 * Attribute type definition for `AWS::QuickSight::Topic`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-topic.html#aws-resource-quicksight-topic-return-values}
 */
export type QuickSightTopicAttributes = {
  Arn: string;
};
/**
 * Type definition for `AWS::QuickSight::Topic.AggregationFunctionParameters`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-topic-aggregationfunctionparameters.html}
 */
export type AggregationFunctionParameters = Record<string, string>;
/**
 * Type definition for `AWS::QuickSight::Topic.AuthorSpecifiedAggregation`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-topic-authorspecifiedaggregation.html}
 */
export type AuthorSpecifiedAggregation =
  | "COUNT"
  | "DISTINCT_COUNT"
  | "MIN"
  | "MAX"
  | "MEDIAN"
  | "SUM"
  | "AVERAGE"
  | "STDEV"
  | "STDEVP"
  | "VAR"
  | "VARP"
  | "PERCENTILE";
/**
 * Type definition for `AWS::QuickSight::Topic.CategoryFilterFunction`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-topic-categoryfilterfunction.html}
 */
export type CategoryFilterFunction = "EXACT" | "CONTAINS";
/**
 * Type definition for `AWS::QuickSight::Topic.CategoryFilterType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-topic-categoryfiltertype.html}
 */
export type CategoryFilterType =
  | "CUSTOM_FILTER"
  | "CUSTOM_FILTER_LIST"
  | "FILTER_LIST";
/**
 * Type definition for `AWS::QuickSight::Topic.CellValueSynonym`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-topic-cellvaluesynonym.html}
 */
export type CellValueSynonym = {
  /**
   * @minLength `0`
   * @maxLength `256`
   */
  CellValue?: string;
  Synonyms?: string[];
};
/**
 * Type definition for `AWS::QuickSight::Topic.CollectiveConstant`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-topic-collectiveconstant.html}
 */
export type CollectiveConstant = {
  ValueList?: string[];
};
/**
 * Type definition for `AWS::QuickSight::Topic.ColumnDataRole`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-topic-columndatarole.html}
 */
export type ColumnDataRole = "DIMENSION" | "MEASURE";
/**
 * Type definition for `AWS::QuickSight::Topic.ColumnOrderingType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-topic-columnorderingtype.html}
 */
export type ColumnOrderingType =
  | "GREATER_IS_BETTER"
  | "LESSER_IS_BETTER"
  | "SPECIFIED";
/**
 * Type definition for `AWS::QuickSight::Topic.ComparativeOrder`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-topic-comparativeorder.html}
 */
export type ComparativeOrder = {
  SpecifedOrder?: string[];
  TreatUndefinedSpecifiedValues?: UndefinedSpecifiedValueType;
  UseOrdering?: ColumnOrderingType;
};
/**
 * Type definition for `AWS::QuickSight::Topic.ConstantType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-topic-constanttype.html}
 */
export type ConstantType = "SINGULAR" | "RANGE" | "COLLECTIVE";
/**
 * Type definition for `AWS::QuickSight::Topic.DataAggregation`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-topic-dataaggregation.html}
 */
export type DataAggregation = {
  DatasetRowDateGranularity?: TopicTimeGranularity;
  /**
   * @minLength `0`
   * @maxLength `256`
   */
  DefaultDateColumnName?: string;
};
/**
 * Type definition for `AWS::QuickSight::Topic.DatasetMetadata`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-topic-datasetmetadata.html}
 */
export type DatasetMetadata = {
  CalculatedFields?: TopicCalculatedField[];
  Columns?: TopicColumn[];
  DataAggregation?: DataAggregation;
  DatasetArn: string;
  /**
   * @minLength `0`
   * @maxLength `256`
   */
  DatasetDescription?: string;
  /**
   * @minLength `0`
   * @maxLength `256`
   */
  DatasetName?: string;
  Filters?: TopicFilter[];
  NamedEntities?: TopicNamedEntity[];
};
/**
 * Type definition for `AWS::QuickSight::Topic.DefaultAggregation`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-topic-defaultaggregation.html}
 */
export type DefaultAggregation =
  | "SUM"
  | "MAX"
  | "MIN"
  | "COUNT"
  | "DISTINCT_COUNT"
  | "AVERAGE"
  | "MEDIAN"
  | "STDEV"
  | "STDEVP"
  | "VAR"
  | "VARP";
/**
 * Type definition for `AWS::QuickSight::Topic.DefaultFormatting`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-topic-defaultformatting.html}
 */
export type DefaultFormatting = {
  DisplayFormat?: DisplayFormat;
  DisplayFormatOptions?: DisplayFormatOptions;
};
/**
 * Type definition for `AWS::QuickSight::Topic.DisplayFormat`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-topic-displayformat.html}
 */
export type DisplayFormat =
  | "AUTO"
  | "PERCENT"
  | "CURRENCY"
  | "NUMBER"
  | "DATE"
  | "STRING";
/**
 * Type definition for `AWS::QuickSight::Topic.DisplayFormatOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-topic-displayformatoptions.html}
 */
export type DisplayFormatOptions = {
  /**
   * @minLength `0`
   * @maxLength `256`
   */
  BlankCellFormat?: string;
  /**
   * @minLength `0`
   * @maxLength `256`
   */
  CurrencySymbol?: string;
  /**
   * @minLength `0`
   * @maxLength `256`
   */
  DateFormat?: string;
  DecimalSeparator?: TopicNumericSeparatorSymbol;
  FractionDigits?: number;
  /**
   * @minLength `0`
   * @maxLength `256`
   */
  GroupingSeparator?: string;
  NegativeFormat?: NegativeFormat;
  /**
   * @minLength `0`
   * @maxLength `256`
   */
  Prefix?: string;
  /**
   * @minLength `0`
   * @maxLength `256`
   */
  Suffix?: string;
  UnitScaler?: NumberScale;
  UseBlankCellFormat?: boolean;
  UseGrouping?: boolean;
};
/**
 * Type definition for `AWS::QuickSight::Topic.FilterClass`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-topic-filterclass.html}
 */
export type FilterClass =
  | "ENFORCED_VALUE_FILTER"
  | "CONDITIONAL_VALUE_FILTER"
  | "NAMED_VALUE_FILTER";
/**
 * Type definition for `AWS::QuickSight::Topic.NamedEntityAggType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-topic-namedentityaggtype.html}
 */
export type NamedEntityAggType =
  | "SUM"
  | "MIN"
  | "MAX"
  | "COUNT"
  | "AVERAGE"
  | "DISTINCT_COUNT"
  | "STDEV"
  | "STDEVP"
  | "VAR"
  | "VARP"
  | "PERCENTILE"
  | "MEDIAN"
  | "CUSTOM";
/**
 * Type definition for `AWS::QuickSight::Topic.NamedEntityDefinition`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-topic-namedentitydefinition.html}
 */
export type NamedEntityDefinition = {
  /**
   * @minLength `0`
   * @maxLength `256`
   */
  FieldName?: string;
  Metric?: NamedEntityDefinitionMetric;
  /**
   * @minLength `0`
   * @maxLength `256`
   */
  PropertyName?: string;
  PropertyRole?: PropertyRole;
  PropertyUsage?: PropertyUsage;
};
/**
 * Type definition for `AWS::QuickSight::Topic.NamedEntityDefinitionMetric`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-topic-namedentitydefinitionmetric.html}
 */
export type NamedEntityDefinitionMetric = {
  Aggregation?: NamedEntityAggType;
  AggregationFunctionParameters?: AggregationFunctionParameters;
};
/**
 * Type definition for `AWS::QuickSight::Topic.NamedFilterAggType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-topic-namedfilteraggtype.html}
 */
export type NamedFilterAggType =
  | "NO_AGGREGATION"
  | "SUM"
  | "AVERAGE"
  | "COUNT"
  | "DISTINCT_COUNT"
  | "MAX"
  | "MEDIAN"
  | "MIN"
  | "STDEV"
  | "STDEVP"
  | "VAR"
  | "VARP";
/**
 * Type definition for `AWS::QuickSight::Topic.NamedFilterType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-topic-namedfiltertype.html}
 */
export type NamedFilterType =
  | "CATEGORY_FILTER"
  | "NUMERIC_EQUALITY_FILTER"
  | "NUMERIC_RANGE_FILTER"
  | "DATE_RANGE_FILTER"
  | "RELATIVE_DATE_FILTER";
/**
 * Type definition for `AWS::QuickSight::Topic.NegativeFormat`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-topic-negativeformat.html}
 */
export type NegativeFormat = {
  /**
   * @minLength `0`
   * @maxLength `256`
   */
  Prefix?: string;
  /**
   * @minLength `0`
   * @maxLength `256`
   */
  Suffix?: string;
};
/**
 * Type definition for `AWS::QuickSight::Topic.NumberScale`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-topic-numberscale.html}
 */
export type NumberScale =
  | "NONE"
  | "AUTO"
  | "THOUSANDS"
  | "MILLIONS"
  | "BILLIONS"
  | "TRILLIONS";
/**
 * Type definition for `AWS::QuickSight::Topic.PropertyRole`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-topic-propertyrole.html}
 */
export type PropertyRole = "PRIMARY" | "ID";
/**
 * Type definition for `AWS::QuickSight::Topic.PropertyUsage`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-topic-propertyusage.html}
 */
export type PropertyUsage = "INHERIT" | "DIMENSION" | "MEASURE";
/**
 * Type definition for `AWS::QuickSight::Topic.RangeConstant`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-topic-rangeconstant.html}
 */
export type RangeConstant = {
  /**
   * @minLength `0`
   * @maxLength `256`
   */
  Maximum?: string;
  /**
   * @minLength `0`
   * @maxLength `256`
   */
  Minimum?: string;
};
/**
 * Type definition for `AWS::QuickSight::Topic.SemanticEntityType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-topic-semanticentitytype.html}
 */
export type SemanticEntityType = {
  /**
   * @minLength `0`
   * @maxLength `256`
   */
  SubTypeName?: string;
  /**
   * @minLength `0`
   * @maxLength `256`
   */
  TypeName?: string;
  TypeParameters?: TypeParameters;
};
/**
 * Type definition for `AWS::QuickSight::Topic.SemanticType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-topic-semantictype.html}
 */
export type SemanticType = {
  FalseyCellValue?: string;
  FalseyCellValueSynonyms?: string[];
  /**
   * @minLength `0`
   * @maxLength `256`
   */
  SubTypeName?: string;
  TruthyCellValue?: string;
  TruthyCellValueSynonyms?: string[];
  /**
   * @minLength `0`
   * @maxLength `256`
   */
  TypeName?: string;
  TypeParameters?: TypeParameters;
};
/**
 * Type definition for `AWS::QuickSight::Topic.TopicCalculatedField`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-topic-topiccalculatedfield.html}
 */
export type TopicCalculatedField = {
  Aggregation?: DefaultAggregation;
  AllowedAggregations?: AuthorSpecifiedAggregation[];
  /**
   * @minLength `0`
   * @maxLength `256`
   */
  CalculatedFieldDescription?: string;
  /**
   * @minLength `0`
   * @maxLength `256`
   */
  CalculatedFieldName: string;
  CalculatedFieldSynonyms?: string[];
  CellValueSynonyms?: CellValueSynonym[];
  ColumnDataRole?: ColumnDataRole;
  ComparativeOrder?: ComparativeOrder;
  DefaultFormatting?: DefaultFormatting;
  /**
   * @minLength `1`
   * @maxLength `4096`
   */
  Expression: string;
  IsIncludedInTopic?: boolean;
  NeverAggregateInFilter?: boolean;
  NonAdditive?: boolean;
  NotAllowedAggregations?: AuthorSpecifiedAggregation[];
  SemanticType?: SemanticType;
  TimeGranularity?: TopicTimeGranularity;
};
/**
 * Type definition for `AWS::QuickSight::Topic.TopicCategoryFilter`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-topic-topiccategoryfilter.html}
 */
export type TopicCategoryFilter = {
  CategoryFilterFunction?: CategoryFilterFunction;
  CategoryFilterType?: CategoryFilterType;
  Constant?: TopicCategoryFilterConstant;
  Inverse?: boolean;
};
/**
 * Type definition for `AWS::QuickSight::Topic.TopicCategoryFilterConstant`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-topic-topiccategoryfilterconstant.html}
 */
export type TopicCategoryFilterConstant = {
  CollectiveConstant?: CollectiveConstant;
  ConstantType?: ConstantType;
  /**
   * @minLength `0`
   * @maxLength `256`
   */
  SingularConstant?: string;
};
/**
 * Type definition for `AWS::QuickSight::Topic.TopicColumn`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-topic-topiccolumn.html}
 */
export type TopicColumn = {
  Aggregation?: DefaultAggregation;
  AllowedAggregations?: AuthorSpecifiedAggregation[];
  CellValueSynonyms?: CellValueSynonym[];
  ColumnDataRole?: ColumnDataRole;
  /**
   * @minLength `0`
   * @maxLength `256`
   */
  ColumnDescription?: string;
  /**
   * @minLength `0`
   * @maxLength `256`
   */
  ColumnFriendlyName?: string;
  /**
   * @minLength `0`
   * @maxLength `256`
   */
  ColumnName: string;
  ColumnSynonyms?: string[];
  ComparativeOrder?: ComparativeOrder;
  DefaultFormatting?: DefaultFormatting;
  IsIncludedInTopic?: boolean;
  NeverAggregateInFilter?: boolean;
  NonAdditive?: boolean;
  NotAllowedAggregations?: AuthorSpecifiedAggregation[];
  SemanticType?: SemanticType;
  TimeGranularity?: TopicTimeGranularity;
};
/**
 * Type definition for `AWS::QuickSight::Topic.TopicDateRangeFilter`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-topic-topicdaterangefilter.html}
 */
export type TopicDateRangeFilter = {
  Constant?: TopicRangeFilterConstant;
  Inclusive?: boolean;
};
/**
 * Type definition for `AWS::QuickSight::Topic.TopicFilter`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-topic-topicfilter.html}
 */
export type TopicFilter = {
  CategoryFilter?: TopicCategoryFilter;
  DateRangeFilter?: TopicDateRangeFilter;
  FilterClass?: FilterClass;
  /**
   * @minLength `0`
   * @maxLength `256`
   */
  FilterDescription?: string;
  /**
   * @minLength `0`
   * @maxLength `256`
   */
  FilterName: string;
  FilterSynonyms?: string[];
  FilterType?: NamedFilterType;
  NumericEqualityFilter?: TopicNumericEqualityFilter;
  NumericRangeFilter?: TopicNumericRangeFilter;
  /**
   * @minLength `0`
   * @maxLength `256`
   */
  OperandFieldName: string;
  RelativeDateFilter?: TopicRelativeDateFilter;
};
/**
 * Type definition for `AWS::QuickSight::Topic.TopicNamedEntity`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-topic-topicnamedentity.html}
 */
export type TopicNamedEntity = {
  Definition?: NamedEntityDefinition[];
  /**
   * @minLength `0`
   * @maxLength `256`
   */
  EntityDescription?: string;
  /**
   * @minLength `0`
   * @maxLength `256`
   */
  EntityName: string;
  EntitySynonyms?: string[];
  SemanticEntityType?: SemanticEntityType;
};
/**
 * Type definition for `AWS::QuickSight::Topic.TopicNumericEqualityFilter`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-topic-topicnumericequalityfilter.html}
 */
export type TopicNumericEqualityFilter = {
  Aggregation?: NamedFilterAggType;
  Constant?: TopicSingularFilterConstant;
};
/**
 * Type definition for `AWS::QuickSight::Topic.TopicNumericRangeFilter`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-topic-topicnumericrangefilter.html}
 */
export type TopicNumericRangeFilter = {
  Aggregation?: NamedFilterAggType;
  Constant?: TopicRangeFilterConstant;
  Inclusive?: boolean;
};
/**
 * Type definition for `AWS::QuickSight::Topic.TopicNumericSeparatorSymbol`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-topic-topicnumericseparatorsymbol.html}
 */
export type TopicNumericSeparatorSymbol = "COMMA" | "DOT";
/**
 * Type definition for `AWS::QuickSight::Topic.TopicRangeFilterConstant`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-topic-topicrangefilterconstant.html}
 */
export type TopicRangeFilterConstant = {
  ConstantType?: ConstantType;
  RangeConstant?: RangeConstant;
};
/**
 * Type definition for `AWS::QuickSight::Topic.TopicRelativeDateFilter`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-topic-topicrelativedatefilter.html}
 */
export type TopicRelativeDateFilter = {
  Constant?: TopicSingularFilterConstant;
  RelativeDateFilterFunction?: TopicRelativeDateFilterFunction;
  TimeGranularity?: TopicTimeGranularity;
};
/**
 * Type definition for `AWS::QuickSight::Topic.TopicRelativeDateFilterFunction`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-topic-topicrelativedatefilterfunction.html}
 */
export type TopicRelativeDateFilterFunction =
  | "PREVIOUS"
  | "THIS"
  | "LAST"
  | "NEXT"
  | "NOW";
/**
 * Type definition for `AWS::QuickSight::Topic.TopicSingularFilterConstant`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-topic-topicsingularfilterconstant.html}
 */
export type TopicSingularFilterConstant = {
  ConstantType?: ConstantType;
  /**
   * @minLength `0`
   * @maxLength `256`
   */
  SingularConstant?: string;
};
/**
 * Type definition for `AWS::QuickSight::Topic.TopicTimeGranularity`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-topic-topictimegranularity.html}
 */
export type TopicTimeGranularity =
  | "SECOND"
  | "MINUTE"
  | "HOUR"
  | "DAY"
  | "WEEK"
  | "MONTH"
  | "QUARTER"
  | "YEAR";
/**
 * Type definition for `AWS::QuickSight::Topic.TopicUserExperienceVersion`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-topic-topicuserexperienceversion.html}
 */
export type TopicUserExperienceVersion = "LEGACY" | "NEW_READER_EXPERIENCE";
/**
 * Type definition for `AWS::QuickSight::Topic.TypeParameters`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-topic-typeparameters.html}
 */
export type TypeParameters = Record<string, string>;
/**
 * Type definition for `AWS::QuickSight::Topic.UndefinedSpecifiedValueType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-topic-undefinedspecifiedvaluetype.html}
 */
export type UndefinedSpecifiedValueType = "LEAST" | "MOST";
/**
 * Definition of the AWS::QuickSight::Topic Resource Type.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-topic.html}
 */
export class QuickSightTopic extends $Resource<
  "AWS::QuickSight::Topic",
  QuickSightTopicProperties,
  QuickSightTopicAttributes
> {
  public static readonly Type = "AWS::QuickSight::Topic";
  constructor(
    logicalId: string,
    properties: QuickSightTopicProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, QuickSightTopic.Type, properties, options);
  }
}
