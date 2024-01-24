import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource schema for AWS::DataBrew::Recipe.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-databrew-recipe.html}
 */
export type DataBrewRecipeProperties = {
  /**
   * Description of the recipe
   * @minLength `0`
   * @maxLength `1024`
   */
  Description?: string;
  /**
   * Recipe name
   * @minLength `1`
   * @maxLength `255`
   */
  Name: string;
  Steps: RecipeStep[];
  Tags?: Tag[];
};
/**
 * Type definition for `AWS::DataBrew::Recipe.Action`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-recipe-action.html}
 */
export type Action = {
  /**
   * Step action operation
   */
  Operation: string;
  Parameters?: RecipeParameters | ParameterMap;
};
/**
 * Type definition for `AWS::DataBrew::Recipe.ConditionExpression`.
 * Condition expressions applied to the step action
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-recipe-conditionexpression.html}
 */
export type ConditionExpression = {
  /**
   * Input condition to be applied to the target column
   */
  Condition: string;
  /**
   * Name of the target column
   */
  TargetColumn: string;
  /**
   * Value of the condition
   */
  Value?: string;
};
/**
 * Type definition for `AWS::DataBrew::Recipe.DataCatalogInputDefinition`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-recipe-datacataloginputdefinition.html}
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
 * Type definition for `AWS::DataBrew::Recipe.ParameterMap`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-recipe-parametermap.html}
 */
export type ParameterMap = Record<string, string>;
/**
 * Type definition for `AWS::DataBrew::Recipe.RecipeParameters`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-recipe-recipeparameters.html}
 */
export type RecipeParameters = {
  AggregateFunction?: string;
  Base?: string;
  CaseStatement?: string;
  CategoryMap?: string;
  CharsToRemove?: string;
  CollapseConsecutiveWhitespace?: string;
  ColumnDataType?: string;
  ColumnRange?: string;
  Count?: string;
  CustomCharacters?: string;
  CustomStopWords?: string;
  CustomValue?: string;
  DatasetsColumns?: string;
  DateAddValue?: string;
  DateTimeFormat?: string;
  DateTimeParameters?: string;
  DeleteOtherRows?: string;
  Delimiter?: string;
  EndPattern?: string;
  EndPosition?: string;
  EndValue?: string;
  ExpandContractions?: string;
  Exponent?: string;
  FalseString?: string;
  GroupByAggFunctionOptions?: string;
  GroupByColumns?: string;
  HiddenColumns?: string;
  IgnoreCase?: string;
  IncludeInSplit?: string;
  /**
   * Input
   */
  Input?: {
    DataCatalogInputDefinition?: DataCatalogInputDefinition;
    /**
     * Input location
     */
    S3InputDefinition?: S3Location;
  };
  Interval?: string;
  IsText?: string;
  JoinKeys?: string;
  JoinType?: string;
  LeftColumns?: string;
  Limit?: string;
  LowerBound?: string;
  MapType?: string;
  ModeType?: string;
  MultiLine?: boolean;
  NumRows?: string;
  NumRowsAfter?: string;
  NumRowsBefore?: string;
  OrderByColumn?: string;
  OrderByColumns?: string;
  Other?: string;
  Pattern?: string;
  PatternOption1?: string;
  PatternOption2?: string;
  PatternOptions?: string;
  Period?: string;
  Position?: string;
  RemoveAllPunctuation?: string;
  RemoveAllQuotes?: string;
  RemoveAllWhitespace?: string;
  RemoveCustomCharacters?: string;
  RemoveCustomValue?: string;
  RemoveLeadingAndTrailingPunctuation?: string;
  RemoveLeadingAndTrailingQuotes?: string;
  RemoveLeadingAndTrailingWhitespace?: string;
  RemoveLetters?: string;
  RemoveNumbers?: string;
  RemoveSourceColumn?: string;
  RemoveSpecialCharacters?: string;
  RightColumns?: string;
  SampleSize?: string;
  SampleType?: string;
  SecondInput?: string;
  SecondaryInputs?: SecondaryInput[];
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
  SourceColumn?: string;
  SourceColumn1?: string;
  SourceColumn2?: string;
  SourceColumns?: string;
  StartColumnIndex?: string;
  StartPattern?: string;
  StartPosition?: string;
  StartValue?: string;
  StemmingMode?: string;
  StepCount?: string;
  StepIndex?: string;
  StopWordsMode?: string;
  Strategy?: string;
  TargetColumn?: string;
  TargetColumnNames?: string;
  TargetDateFormat?: string;
  TargetIndex?: string;
  TimeZone?: string;
  TokenizerPattern?: string;
  TrueString?: string;
  UdfLang?: string;
  Units?: string;
  UnpivotColumn?: string;
  UpperBound?: string;
  UseNewDataFrame?: string;
  Value?: string;
  Value1?: string;
  Value2?: string;
  ValueColumn?: string;
  ViewFrame?: string;
};
/**
 * Type definition for `AWS::DataBrew::Recipe.RecipeStep`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-recipe-recipestep.html}
 */
export type RecipeStep = {
  Action: Action;
  /**
   * Condition expressions applied to the step action
   */
  ConditionExpressions?: ConditionExpression[];
};
/**
 * Type definition for `AWS::DataBrew::Recipe.S3Location`.
 * Input location
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-recipe-s3location.html}
 */
export type S3Location = {
  Bucket: string;
  Key?: string;
};
/**
 * Type definition for `AWS::DataBrew::Recipe.SecondaryInput`.
 * Secondary input
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-recipe-secondaryinput.html}
 */
export type SecondaryInput = {
  DataCatalogInputDefinition?: DataCatalogInputDefinition;
  /**
   * Input location
   */
  S3InputDefinition?: S3Location;
};
/**
 * Type definition for `AWS::DataBrew::Recipe.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-recipe-tag.html}
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
 * Resource schema for AWS::DataBrew::Recipe.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-databrew-recipe.html}
 */
export class DataBrewRecipe extends $Resource<
  "AWS::DataBrew::Recipe",
  DataBrewRecipeProperties,
  Record<string, never>
> {
  public static readonly Type = "AWS::DataBrew::Recipe";
  constructor(
    logicalId: string,
    properties: DataBrewRecipeProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, DataBrewRecipe.Type, properties, options);
  }
}
