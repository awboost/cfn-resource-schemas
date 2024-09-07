import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Definition of the AWS::QuickSight::Template Resource Type.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-template.html}
 */
export type QuickSightTemplateProperties = {
  /**
   * @minLength `12`
   * @maxLength `12`
   * @pattern `^[0-9]{12}$`
   */
  AwsAccountId: string;
  Definition?: TemplateVersionDefinition;
  /**
   * @minLength `1`
   * @maxLength `2048`
   */
  Name?: string;
  /**
   * @minLength `1`
   * @maxLength `64`
   */
  Permissions?: ResourcePermission[];
  /**
   * <p>The source entity of the template.</p>
   */
  SourceEntity?: TemplateSourceEntity;
  /**
   * @minLength `1`
   * @maxLength `200`
   */
  Tags?: Tag[];
  /**
   * @minLength `1`
   * @maxLength `512`
   * @pattern `^[\w\-]+$`
   */
  TemplateId: string;
  /**
   * <p>The option to relax the validation that is required to create and update analyses, dashboards, and templates with definition objects. When you set this value to <code>LENIENT</code>, validation is skipped for specific errors.</p>
   */
  ValidationStrategy?: ValidationStrategy;
  /**
   * @minLength `1`
   * @maxLength `512`
   */
  VersionDescription?: string;
};
/**
 * Attribute type definition for `AWS::QuickSight::Template`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-template.html#aws-resource-quicksight-template-return-values}
 */
export type QuickSightTemplateAttributes = {
  /**
   * <p>The Amazon Resource Name (ARN) of the template.</p>
   */
  Arn: string;
  /**
   * <p>Time when this was created.</p>
   */
  CreatedTime: string;
  /**
   * <p>Time when this was last updated.</p>
   */
  LastUpdatedTime: string;
  /**
   * <p>A version of a template.</p>
   */
  Version: {
    /**
     * <p>The time that this template version was created.</p>
     */
    CreatedTime: string;
    /**
         * <p>Schema of the dataset identified by the placeholder. Any dashboard created from this
                    template should be bound to new datasets matching the same schema described through this
                    API operation.</p>
         * @minLength `0`
         * @maxLength `30`
         */
    DataSetConfigurations: {
      /**
       * <p>A structure containing the list of column group schemas.</p>
       * @minLength `0`
       * @maxLength `500`
       */
      ColumnGroupSchemaList: {
        /**
         * <p>A structure containing the list of schemas for column group columns.</p>
         * @minLength `0`
         * @maxLength `500`
         */
        ColumnGroupColumnSchemaList: {
          /**
           * <p>The name of the column group's column schema.</p>
           */
          Name: string;
        }[];
        /**
         * <p>The name of the column group schema.</p>
         */
        Name: string;
      }[];
      /**
       * <p>Dataset schema.</p>
       */
      DataSetSchema: {
        /**
         * <p>A structure containing the list of column schemas.</p>
         * @minLength `0`
         * @maxLength `500`
         */
        ColumnSchemaList: {
          /**
           * <p>The data type of the column schema.</p>
           */
          DataType: string;
          /**
           * <p>The geographic role of the column schema.</p>
           */
          GeographicRole: string;
          /**
           * <p>The name of the column schema.</p>
           */
          Name: string;
        }[];
      };
      /**
       * <p>Placeholder.</p>
       */
      Placeholder: string;
    }[];
    /**
     * <p>The description of the template.</p>
     * @minLength `1`
     * @maxLength `512`
     */
    Description: string;
    /**
     * <p>Errors associated with this template version.</p>
     * @minLength `1`
     */
    Errors: {
      /**
       * <p>Description of the error type.</p>
       * @pattern `\S`
       */
      Message: string;
      Type: TemplateErrorType;
      /**
       * <p>An error path that shows which entities caused the template error.</p>
       * @minLength `0`
       * @maxLength `200`
       */
      ViolatedEntities: {
        /**
         * @pattern `\S`
         */
        Path: string;
      }[];
    }[];
    /**
     * <p>A list of the associated sheets with the unique identifier and name of each sheet.</p>
     * @minLength `0`
     * @maxLength `20`
     */
    Sheets: {
      /**
             * <p>The name of a sheet. This name is displayed on the sheet's tab in the Amazon QuickSight
                        console.</p>
             * @minLength `1`
             * @maxLength `2048`
             */
      Name: string;
      /**
       * <p>The unique identifier associated with a sheet.</p>
       * @minLength `1`
       * @maxLength `512`
       * @pattern `^[\w\-]+$`
       */
      SheetId: string;
    }[];
    /**
         * <p>The Amazon Resource Name (ARN) of an analysis or template that was used to create this
                    template.</p>
         */
    SourceEntityArn: string;
    Status: ResourceStatus;
    /**
     * <p>The ARN of the theme associated with this version of the template.</p>
     */
    ThemeArn: string;
    /**
     * <p>The version number of the template version.</p>
     * @min `1`
     */
    VersionNumber: number;
  };
};
/**
 * Type definition for `AWS::QuickSight::Template.AggregationFunction`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-aggregationfunction.html}
 */
export type AggregationFunction = {
  AttributeAggregationFunction?: AttributeAggregationFunction;
  CategoricalAggregationFunction?: CategoricalAggregationFunction;
  DateAggregationFunction?: DateAggregationFunction;
  NumericalAggregationFunction?: NumericalAggregationFunction;
};
/**
 * Type definition for `AWS::QuickSight::Template.AggregationSortConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-aggregationsortconfiguration.html}
 */
export type AggregationSortConfiguration = {
  AggregationFunction?: AggregationFunction;
  Column: ColumnIdentifier;
  SortDirection: SortDirection;
};
/**
 * Type definition for `AWS::QuickSight::Template.AllSheetsFilterScopeConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-allsheetsfilterscopeconfiguration.html}
 */
export type AllSheetsFilterScopeConfiguration = Record<string, any>;
/**
 * Type definition for `AWS::QuickSight::Template.AnalysisDefaults`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-analysisdefaults.html}
 */
export type AnalysisDefaults = {
  DefaultNewSheetConfiguration: DefaultNewSheetConfiguration;
};
/**
 * Type definition for `AWS::QuickSight::Template.AnchorDateConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-anchordateconfiguration.html}
 */
export type AnchorDateConfiguration = {
  AnchorOption?: AnchorOption;
  /**
   * @minLength `1`
   * @maxLength `2048`
   * @pattern `^[a-zA-Z0-9]+$`
   */
  ParameterName?: string;
};
/**
 * Type definition for `AWS::QuickSight::Template.AnchorOption`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-anchoroption.html}
 */
export type AnchorOption = "NOW";
/**
 * Type definition for `AWS::QuickSight::Template.ArcAxisConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-arcaxisconfiguration.html}
 */
export type ArcAxisConfiguration = {
  Range?: ArcAxisDisplayRange;
  ReserveRange?: number;
};
/**
 * Type definition for `AWS::QuickSight::Template.ArcAxisDisplayRange`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-arcaxisdisplayrange.html}
 */
export type ArcAxisDisplayRange = {
  Max?: number;
  Min?: number;
};
/**
 * Type definition for `AWS::QuickSight::Template.ArcConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-arcconfiguration.html}
 */
export type ArcConfiguration = {
  ArcAngle?: number;
  ArcThickness?: ArcThicknessOptions;
};
/**
 * Type definition for `AWS::QuickSight::Template.ArcOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-arcoptions.html}
 */
export type ArcOptions = {
  ArcThickness?: ArcThickness;
};
/**
 * Type definition for `AWS::QuickSight::Template.ArcThickness`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-arcthickness.html}
 */
export type ArcThickness = "SMALL" | "MEDIUM" | "LARGE" | "WHOLE";
/**
 * Type definition for `AWS::QuickSight::Template.ArcThicknessOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-arcthicknessoptions.html}
 */
export type ArcThicknessOptions = "SMALL" | "MEDIUM" | "LARGE";
/**
 * Type definition for `AWS::QuickSight::Template.AssetOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-assetoptions.html}
 */
export type AssetOptions = {
  Timezone?: string;
  WeekStart?: DayOfTheWeek;
};
/**
 * Type definition for `AWS::QuickSight::Template.AttributeAggregationFunction`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-attributeaggregationfunction.html}
 */
export type AttributeAggregationFunction = {
  SimpleAttributeAggregation?: SimpleAttributeAggregationFunction;
  ValueForMultipleValues?: string;
};
/**
 * Type definition for `AWS::QuickSight::Template.AxisBinding`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-axisbinding.html}
 */
export type AxisBinding = "PRIMARY_YAXIS" | "SECONDARY_YAXIS";
/**
 * Type definition for `AWS::QuickSight::Template.AxisDataOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-axisdataoptions.html}
 */
export type AxisDataOptions = {
  DateAxisOptions?: DateAxisOptions;
  NumericAxisOptions?: NumericAxisOptions;
};
/**
 * Type definition for `AWS::QuickSight::Template.AxisDisplayDataDrivenRange`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-axisdisplaydatadrivenrange.html}
 */
export type AxisDisplayDataDrivenRange = Record<string, any>;
/**
 * Type definition for `AWS::QuickSight::Template.AxisDisplayMinMaxRange`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-axisdisplayminmaxrange.html}
 */
export type AxisDisplayMinMaxRange = {
  Maximum?: number;
  Minimum?: number;
};
/**
 * Type definition for `AWS::QuickSight::Template.AxisDisplayOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-axisdisplayoptions.html}
 */
export type AxisDisplayOptions = {
  AxisLineVisibility?: Visibility;
  /**
   * String based length that is composed of value and unit in px
   */
  AxisOffset?: string;
  DataOptions?: AxisDataOptions;
  GridLineVisibility?: Visibility;
  ScrollbarOptions?: ScrollBarOptions;
  TickLabelOptions?: AxisTickLabelOptions;
};
/**
 * Type definition for `AWS::QuickSight::Template.AxisDisplayRange`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-axisdisplayrange.html}
 */
export type AxisDisplayRange = {
  DataDriven?: AxisDisplayDataDrivenRange;
  MinMax?: AxisDisplayMinMaxRange;
};
/**
 * Type definition for `AWS::QuickSight::Template.AxisLabelOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-axislabeloptions.html}
 */
export type AxisLabelOptions = {
  ApplyTo?: AxisLabelReferenceOptions;
  CustomLabel?: string;
  FontConfiguration?: FontConfiguration;
};
/**
 * Type definition for `AWS::QuickSight::Template.AxisLabelReferenceOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-axislabelreferenceoptions.html}
 */
export type AxisLabelReferenceOptions = {
  Column: ColumnIdentifier;
  /**
   * @minLength `1`
   * @maxLength `512`
   */
  FieldId: string;
};
/**
 * Type definition for `AWS::QuickSight::Template.AxisLinearScale`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-axislinearscale.html}
 */
export type AxisLinearScale = {
  StepCount?: number;
  StepSize?: number;
};
/**
 * Type definition for `AWS::QuickSight::Template.AxisLogarithmicScale`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-axislogarithmicscale.html}
 */
export type AxisLogarithmicScale = {
  Base?: number;
};
/**
 * Type definition for `AWS::QuickSight::Template.AxisScale`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-axisscale.html}
 */
export type AxisScale = {
  Linear?: AxisLinearScale;
  Logarithmic?: AxisLogarithmicScale;
};
/**
 * Type definition for `AWS::QuickSight::Template.AxisTickLabelOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-axisticklabeloptions.html}
 */
export type AxisTickLabelOptions = {
  LabelOptions?: LabelOptions;
  RotationAngle?: number;
};
/**
 * Type definition for `AWS::QuickSight::Template.BarChartAggregatedFieldWells`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-barchartaggregatedfieldwells.html}
 */
export type BarChartAggregatedFieldWells = {
  /**
   * @minLength `0`
   * @maxLength `200`
   */
  Category?: DimensionField[];
  /**
   * @minLength `0`
   * @maxLength `200`
   */
  Colors?: DimensionField[];
  /**
   * @minLength `0`
   * @maxLength `1`
   */
  SmallMultiples?: DimensionField[];
  /**
   * @minLength `0`
   * @maxLength `200`
   */
  Values?: MeasureField[];
};
/**
 * Type definition for `AWS::QuickSight::Template.BarChartConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-barchartconfiguration.html}
 */
export type BarChartConfiguration = {
  BarsArrangement?: BarsArrangement;
  CategoryAxis?: AxisDisplayOptions;
  CategoryLabelOptions?: ChartAxisLabelOptions;
  ColorLabelOptions?: ChartAxisLabelOptions;
  /**
   * @minLength `1`
   * @maxLength `200`
   */
  ContributionAnalysisDefaults?: ContributionAnalysisDefault[];
  DataLabels?: DataLabelOptions;
  FieldWells?: BarChartFieldWells;
  Legend?: LegendOptions;
  Orientation?: BarChartOrientation;
  /**
   * @minLength `0`
   * @maxLength `20`
   */
  ReferenceLines?: ReferenceLine[];
  SmallMultiplesOptions?: SmallMultiplesOptions;
  SortConfiguration?: BarChartSortConfiguration;
  Tooltip?: TooltipOptions;
  ValueAxis?: AxisDisplayOptions;
  ValueLabelOptions?: ChartAxisLabelOptions;
  VisualPalette?: VisualPalette;
};
/**
 * Type definition for `AWS::QuickSight::Template.BarChartFieldWells`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-barchartfieldwells.html}
 */
export type BarChartFieldWells = {
  BarChartAggregatedFieldWells?: BarChartAggregatedFieldWells;
};
/**
 * Type definition for `AWS::QuickSight::Template.BarChartOrientation`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-barchartorientation.html}
 */
export type BarChartOrientation = "HORIZONTAL" | "VERTICAL";
/**
 * Type definition for `AWS::QuickSight::Template.BarChartSortConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-barchartsortconfiguration.html}
 */
export type BarChartSortConfiguration = {
  CategoryItemsLimit?: ItemsLimitConfiguration;
  /**
   * @minLength `0`
   * @maxLength `100`
   */
  CategorySort?: FieldSortOptions[];
  ColorItemsLimit?: ItemsLimitConfiguration;
  /**
   * @minLength `0`
   * @maxLength `100`
   */
  ColorSort?: FieldSortOptions[];
  SmallMultiplesLimitConfiguration?: ItemsLimitConfiguration;
  /**
   * @minLength `0`
   * @maxLength `100`
   */
  SmallMultiplesSort?: FieldSortOptions[];
};
/**
 * Type definition for `AWS::QuickSight::Template.BarChartVisual`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-barchartvisual.html}
 */
export type BarChartVisual = {
  /**
   * @minLength `0`
   * @maxLength `10`
   */
  Actions?: VisualCustomAction[];
  ChartConfiguration?: BarChartConfiguration;
  /**
   * @minLength `0`
   * @maxLength `2`
   */
  ColumnHierarchies?: ColumnHierarchy[];
  Subtitle?: VisualSubtitleLabelOptions;
  Title?: VisualTitleLabelOptions;
  /**
   * @minLength `1`
   * @maxLength `512`
   * @pattern `^[\w\-]+$`
   */
  VisualId: string;
};
/**
 * Type definition for `AWS::QuickSight::Template.BarsArrangement`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-barsarrangement.html}
 */
export type BarsArrangement = "CLUSTERED" | "STACKED" | "STACKED_PERCENT";
/**
 * Type definition for `AWS::QuickSight::Template.BaseMapStyleType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-basemapstyletype.html}
 */
export type BaseMapStyleType =
  | "LIGHT_GRAY"
  | "DARK_GRAY"
  | "STREET"
  | "IMAGERY";
/**
 * Type definition for `AWS::QuickSight::Template.BinCountOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-bincountoptions.html}
 */
export type BinCountOptions = {
  /**
   * @min `0`
   */
  Value?: number;
};
/**
 * Type definition for `AWS::QuickSight::Template.BinWidthOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-binwidthoptions.html}
 */
export type BinWidthOptions = {
  /**
   * @min `0`
   * @max `1000`
   */
  BinCountLimit?: number;
  /**
   * @min `0`
   */
  Value?: number;
};
/**
 * Type definition for `AWS::QuickSight::Template.BodySectionConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-bodysectionconfiguration.html}
 */
export type BodySectionConfiguration = {
  Content: BodySectionContent;
  PageBreakConfiguration?: SectionPageBreakConfiguration;
  /**
   * @minLength `1`
   * @maxLength `512`
   * @pattern `^[\w\-]+$`
   */
  SectionId: string;
  Style?: SectionStyle;
};
/**
 * Type definition for `AWS::QuickSight::Template.BodySectionContent`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-bodysectioncontent.html}
 */
export type BodySectionContent = {
  Layout?: SectionLayoutConfiguration;
};
/**
 * Type definition for `AWS::QuickSight::Template.BoxPlotAggregatedFieldWells`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-boxplotaggregatedfieldwells.html}
 */
export type BoxPlotAggregatedFieldWells = {
  /**
   * @minLength `0`
   * @maxLength `1`
   */
  GroupBy?: DimensionField[];
  /**
   * @minLength `0`
   * @maxLength `5`
   */
  Values?: MeasureField[];
};
/**
 * Type definition for `AWS::QuickSight::Template.BoxPlotChartConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-boxplotchartconfiguration.html}
 */
export type BoxPlotChartConfiguration = {
  BoxPlotOptions?: BoxPlotOptions;
  CategoryAxis?: AxisDisplayOptions;
  CategoryLabelOptions?: ChartAxisLabelOptions;
  FieldWells?: BoxPlotFieldWells;
  Legend?: LegendOptions;
  PrimaryYAxisDisplayOptions?: AxisDisplayOptions;
  PrimaryYAxisLabelOptions?: ChartAxisLabelOptions;
  /**
   * @minLength `0`
   * @maxLength `20`
   */
  ReferenceLines?: ReferenceLine[];
  SortConfiguration?: BoxPlotSortConfiguration;
  Tooltip?: TooltipOptions;
  VisualPalette?: VisualPalette;
};
/**
 * Type definition for `AWS::QuickSight::Template.BoxPlotFieldWells`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-boxplotfieldwells.html}
 */
export type BoxPlotFieldWells = {
  BoxPlotAggregatedFieldWells?: BoxPlotAggregatedFieldWells;
};
/**
 * Type definition for `AWS::QuickSight::Template.BoxPlotFillStyle`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-boxplotfillstyle.html}
 */
export type BoxPlotFillStyle = "SOLID" | "TRANSPARENT";
/**
 * Type definition for `AWS::QuickSight::Template.BoxPlotOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-boxplotoptions.html}
 */
export type BoxPlotOptions = {
  AllDataPointsVisibility?: Visibility;
  OutlierVisibility?: Visibility;
  StyleOptions?: BoxPlotStyleOptions;
};
/**
 * Type definition for `AWS::QuickSight::Template.BoxPlotSortConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-boxplotsortconfiguration.html}
 */
export type BoxPlotSortConfiguration = {
  /**
   * @minLength `0`
   * @maxLength `100`
   */
  CategorySort?: FieldSortOptions[];
  PaginationConfiguration?: PaginationConfiguration;
};
/**
 * Type definition for `AWS::QuickSight::Template.BoxPlotStyleOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-boxplotstyleoptions.html}
 */
export type BoxPlotStyleOptions = {
  FillStyle?: BoxPlotFillStyle;
};
/**
 * Type definition for `AWS::QuickSight::Template.BoxPlotVisual`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-boxplotvisual.html}
 */
export type BoxPlotVisual = {
  /**
   * @minLength `0`
   * @maxLength `10`
   */
  Actions?: VisualCustomAction[];
  ChartConfiguration?: BoxPlotChartConfiguration;
  /**
   * @minLength `0`
   * @maxLength `2`
   */
  ColumnHierarchies?: ColumnHierarchy[];
  Subtitle?: VisualSubtitleLabelOptions;
  Title?: VisualTitleLabelOptions;
  /**
   * @minLength `1`
   * @maxLength `512`
   * @pattern `^[\w\-]+$`
   */
  VisualId: string;
};
/**
 * Type definition for `AWS::QuickSight::Template.CalculatedField`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-calculatedfield.html}
 */
export type CalculatedField = {
  /**
   * @minLength `1`
   * @maxLength `2048`
   */
  DataSetIdentifier: string;
  /**
   * @minLength `1`
   * @maxLength `32000`
   */
  Expression: string;
  /**
   * @minLength `1`
   * @maxLength `127`
   */
  Name: string;
};
/**
 * Type definition for `AWS::QuickSight::Template.CalculatedMeasureField`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-calculatedmeasurefield.html}
 */
export type CalculatedMeasureField = {
  /**
   * @minLength `1`
   * @maxLength `4096`
   */
  Expression: string;
  /**
   * @minLength `1`
   * @maxLength `512`
   */
  FieldId: string;
};
/**
 * Type definition for `AWS::QuickSight::Template.CascadingControlConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-cascadingcontrolconfiguration.html}
 */
export type CascadingControlConfiguration = {
  /**
   * @minLength `0`
   * @maxLength `200`
   */
  SourceControls?: CascadingControlSource[];
};
/**
 * Type definition for `AWS::QuickSight::Template.CascadingControlSource`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-cascadingcontrolsource.html}
 */
export type CascadingControlSource = {
  ColumnToMatch?: ColumnIdentifier;
  SourceSheetControlId?: string;
};
/**
 * Type definition for `AWS::QuickSight::Template.CategoricalAggregationFunction`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-categoricalaggregationfunction.html}
 */
export type CategoricalAggregationFunction = "COUNT" | "DISTINCT_COUNT";
/**
 * Type definition for `AWS::QuickSight::Template.CategoricalDimensionField`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-categoricaldimensionfield.html}
 */
export type CategoricalDimensionField = {
  Column: ColumnIdentifier;
  /**
   * @minLength `1`
   * @maxLength `512`
   */
  FieldId: string;
  FormatConfiguration?: StringFormatConfiguration;
  /**
   * @minLength `1`
   * @maxLength `512`
   */
  HierarchyId?: string;
};
/**
 * Type definition for `AWS::QuickSight::Template.CategoricalMeasureField`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-categoricalmeasurefield.html}
 */
export type CategoricalMeasureField = {
  AggregationFunction?: CategoricalAggregationFunction;
  Column: ColumnIdentifier;
  /**
   * @minLength `1`
   * @maxLength `512`
   */
  FieldId: string;
  FormatConfiguration?: StringFormatConfiguration;
};
/**
 * Type definition for `AWS::QuickSight::Template.CategoryDrillDownFilter`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-categorydrilldownfilter.html}
 */
export type CategoryDrillDownFilter = {
  /**
   * @minLength `0`
   * @maxLength `100000`
   */
  CategoryValues: string[];
  Column: ColumnIdentifier;
};
/**
 * Type definition for `AWS::QuickSight::Template.CategoryFilter`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-categoryfilter.html}
 */
export type CategoryFilter = {
  Column: ColumnIdentifier;
  Configuration: CategoryFilterConfiguration;
  DefaultFilterControlConfiguration?: DefaultFilterControlConfiguration;
  /**
   * @minLength `1`
   * @maxLength `512`
   * @pattern `^[\w\-]+$`
   */
  FilterId: string;
};
/**
 * Type definition for `AWS::QuickSight::Template.CategoryFilterConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-categoryfilterconfiguration.html}
 */
export type CategoryFilterConfiguration = {
  CustomFilterConfiguration?: CustomFilterConfiguration;
  CustomFilterListConfiguration?: CustomFilterListConfiguration;
  FilterListConfiguration?: FilterListConfiguration;
};
/**
 * Type definition for `AWS::QuickSight::Template.CategoryFilterMatchOperator`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-categoryfiltermatchoperator.html}
 */
export type CategoryFilterMatchOperator =
  | "EQUALS"
  | "DOES_NOT_EQUAL"
  | "CONTAINS"
  | "DOES_NOT_CONTAIN"
  | "STARTS_WITH"
  | "ENDS_WITH";
/**
 * Type definition for `AWS::QuickSight::Template.CategoryFilterSelectAllOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-categoryfilterselectalloptions.html}
 */
export type CategoryFilterSelectAllOptions = "FILTER_ALL_VALUES";
/**
 * Type definition for `AWS::QuickSight::Template.CategoryInnerFilter`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-categoryinnerfilter.html}
 */
export type CategoryInnerFilter = {
  Column: ColumnIdentifier;
  Configuration: CategoryFilterConfiguration;
  DefaultFilterControlConfiguration?: DefaultFilterControlConfiguration;
};
/**
 * Type definition for `AWS::QuickSight::Template.ChartAxisLabelOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-chartaxislabeloptions.html}
 */
export type ChartAxisLabelOptions = {
  /**
   * @minLength `0`
   * @maxLength `100`
   */
  AxisLabelOptions?: AxisLabelOptions[];
  SortIconVisibility?: Visibility;
  Visibility?: Visibility;
};
/**
 * Type definition for `AWS::QuickSight::Template.ClusterMarker`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-clustermarker.html}
 */
export type ClusterMarker = {
  SimpleClusterMarker?: SimpleClusterMarker;
};
/**
 * Type definition for `AWS::QuickSight::Template.ClusterMarkerConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-clustermarkerconfiguration.html}
 */
export type ClusterMarkerConfiguration = {
  ClusterMarker?: ClusterMarker;
};
/**
 * Type definition for `AWS::QuickSight::Template.ColorFillType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-colorfilltype.html}
 */
export type ColorFillType = "DISCRETE" | "GRADIENT";
/**
 * Type definition for `AWS::QuickSight::Template.ColorScale`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-colorscale.html}
 */
export type ColorScale = {
  ColorFillType: ColorFillType;
  /**
   * @minLength `2`
   * @maxLength `3`
   */
  Colors: DataColor[];
  NullValueColor?: DataColor;
};
/**
 * Type definition for `AWS::QuickSight::Template.ColorsConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-colorsconfiguration.html}
 */
export type ColorsConfiguration = {
  /**
   * @minLength `0`
   * @maxLength `50`
   */
  CustomColors?: CustomColor[];
};
/**
 * Type definition for `AWS::QuickSight::Template.ColumnConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-columnconfiguration.html}
 */
export type ColumnConfiguration = {
  ColorsConfiguration?: ColorsConfiguration;
  Column: ColumnIdentifier;
  FormatConfiguration?: FormatConfiguration;
  Role?: ColumnRole;
};
/**
 * Type definition for `AWS::QuickSight::Template.ColumnGroupColumnSchema`.
 * <p>A structure describing the name, data type, and geographic role of the columns.</p>
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-columngroupcolumnschema.html}
 */
export type ColumnGroupColumnSchema = {
  /**
   * <p>The name of the column group's column schema.</p>
   */
  Name?: string;
};
/**
 * Type definition for `AWS::QuickSight::Template.ColumnGroupSchema`.
 * <p>The column group schema.</p>
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-columngroupschema.html}
 */
export type ColumnGroupSchema = {
  /**
   * <p>A structure containing the list of schemas for column group columns.</p>
   * @minLength `0`
   * @maxLength `500`
   */
  ColumnGroupColumnSchemaList?: ColumnGroupColumnSchema[];
  /**
   * <p>The name of the column group schema.</p>
   */
  Name?: string;
};
/**
 * Type definition for `AWS::QuickSight::Template.ColumnHierarchy`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-columnhierarchy.html}
 */
export type ColumnHierarchy = {
  DateTimeHierarchy?: DateTimeHierarchy;
  ExplicitHierarchy?: ExplicitHierarchy;
  PredefinedHierarchy?: PredefinedHierarchy;
};
/**
 * Type definition for `AWS::QuickSight::Template.ColumnIdentifier`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-columnidentifier.html}
 */
export type ColumnIdentifier = {
  /**
   * @minLength `1`
   * @maxLength `127`
   */
  ColumnName: string;
  /**
   * @minLength `1`
   * @maxLength `2048`
   */
  DataSetIdentifier: string;
};
/**
 * Type definition for `AWS::QuickSight::Template.ColumnRole`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-columnrole.html}
 */
export type ColumnRole = "DIMENSION" | "MEASURE";
/**
 * Type definition for `AWS::QuickSight::Template.ColumnSchema`.
 * <p>The column schema.</p>
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-columnschema.html}
 */
export type ColumnSchema = {
  /**
   * <p>The data type of the column schema.</p>
   */
  DataType?: string;
  /**
   * <p>The geographic role of the column schema.</p>
   */
  GeographicRole?: string;
  /**
   * <p>The name of the column schema.</p>
   */
  Name?: string;
};
/**
 * Type definition for `AWS::QuickSight::Template.ColumnSort`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-columnsort.html}
 */
export type ColumnSort = {
  AggregationFunction?: AggregationFunction;
  Direction: SortDirection;
  SortBy: ColumnIdentifier;
};
/**
 * Type definition for `AWS::QuickSight::Template.ColumnTooltipItem`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-columntooltipitem.html}
 */
export type ColumnTooltipItem = {
  Aggregation?: AggregationFunction;
  Column: ColumnIdentifier;
  Label?: string;
  TooltipTarget?: TooltipTarget;
  Visibility?: Visibility;
};
/**
 * Type definition for `AWS::QuickSight::Template.ComboChartAggregatedFieldWells`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-combochartaggregatedfieldwells.html}
 */
export type ComboChartAggregatedFieldWells = {
  /**
   * @minLength `0`
   * @maxLength `200`
   */
  BarValues?: MeasureField[];
  /**
   * @minLength `0`
   * @maxLength `200`
   */
  Category?: DimensionField[];
  /**
   * @minLength `0`
   * @maxLength `200`
   */
  Colors?: DimensionField[];
  /**
   * @minLength `0`
   * @maxLength `200`
   */
  LineValues?: MeasureField[];
};
/**
 * Type definition for `AWS::QuickSight::Template.ComboChartConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-combochartconfiguration.html}
 */
export type ComboChartConfiguration = {
  BarDataLabels?: DataLabelOptions;
  BarsArrangement?: BarsArrangement;
  CategoryAxis?: AxisDisplayOptions;
  CategoryLabelOptions?: ChartAxisLabelOptions;
  ColorLabelOptions?: ChartAxisLabelOptions;
  FieldWells?: ComboChartFieldWells;
  Legend?: LegendOptions;
  LineDataLabels?: DataLabelOptions;
  PrimaryYAxisDisplayOptions?: AxisDisplayOptions;
  PrimaryYAxisLabelOptions?: ChartAxisLabelOptions;
  /**
   * @minLength `0`
   * @maxLength `20`
   */
  ReferenceLines?: ReferenceLine[];
  SecondaryYAxisDisplayOptions?: AxisDisplayOptions;
  SecondaryYAxisLabelOptions?: ChartAxisLabelOptions;
  SingleAxisOptions?: SingleAxisOptions;
  SortConfiguration?: ComboChartSortConfiguration;
  Tooltip?: TooltipOptions;
  VisualPalette?: VisualPalette;
};
/**
 * Type definition for `AWS::QuickSight::Template.ComboChartFieldWells`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-combochartfieldwells.html}
 */
export type ComboChartFieldWells = {
  ComboChartAggregatedFieldWells?: ComboChartAggregatedFieldWells;
};
/**
 * Type definition for `AWS::QuickSight::Template.ComboChartSortConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-combochartsortconfiguration.html}
 */
export type ComboChartSortConfiguration = {
  CategoryItemsLimit?: ItemsLimitConfiguration;
  /**
   * @minLength `0`
   * @maxLength `100`
   */
  CategorySort?: FieldSortOptions[];
  ColorItemsLimit?: ItemsLimitConfiguration;
  /**
   * @minLength `0`
   * @maxLength `100`
   */
  ColorSort?: FieldSortOptions[];
};
/**
 * Type definition for `AWS::QuickSight::Template.ComboChartVisual`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-combochartvisual.html}
 */
export type ComboChartVisual = {
  /**
   * @minLength `0`
   * @maxLength `10`
   */
  Actions?: VisualCustomAction[];
  ChartConfiguration?: ComboChartConfiguration;
  /**
   * @minLength `0`
   * @maxLength `2`
   */
  ColumnHierarchies?: ColumnHierarchy[];
  Subtitle?: VisualSubtitleLabelOptions;
  Title?: VisualTitleLabelOptions;
  /**
   * @minLength `1`
   * @maxLength `512`
   * @pattern `^[\w\-]+$`
   */
  VisualId: string;
};
/**
 * Type definition for `AWS::QuickSight::Template.ComparisonConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-comparisonconfiguration.html}
 */
export type ComparisonConfiguration = {
  ComparisonFormat?: ComparisonFormatConfiguration;
  ComparisonMethod?: ComparisonMethod;
};
/**
 * Type definition for `AWS::QuickSight::Template.ComparisonFormatConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-comparisonformatconfiguration.html}
 */
export type ComparisonFormatConfiguration = {
  NumberDisplayFormatConfiguration?: NumberDisplayFormatConfiguration;
  PercentageDisplayFormatConfiguration?: PercentageDisplayFormatConfiguration;
};
/**
 * Type definition for `AWS::QuickSight::Template.ComparisonMethod`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-comparisonmethod.html}
 */
export type ComparisonMethod = "DIFFERENCE" | "PERCENT_DIFFERENCE" | "PERCENT";
/**
 * Type definition for `AWS::QuickSight::Template.Computation`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-computation.html}
 */
export type Computation = {
  Forecast?: ForecastComputation;
  GrowthRate?: GrowthRateComputation;
  MaximumMinimum?: MaximumMinimumComputation;
  MetricComparison?: MetricComparisonComputation;
  PeriodOverPeriod?: PeriodOverPeriodComputation;
  PeriodToDate?: PeriodToDateComputation;
  TopBottomMovers?: TopBottomMoversComputation;
  TopBottomRanked?: TopBottomRankedComputation;
  TotalAggregation?: TotalAggregationComputation;
  UniqueValues?: UniqueValuesComputation;
};
/**
 * Type definition for `AWS::QuickSight::Template.ConditionalFormattingColor`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-conditionalformattingcolor.html}
 */
export type ConditionalFormattingColor = {
  Gradient?: ConditionalFormattingGradientColor;
  Solid?: ConditionalFormattingSolidColor;
};
/**
 * Type definition for `AWS::QuickSight::Template.ConditionalFormattingCustomIconCondition`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-conditionalformattingcustomiconcondition.html}
 */
export type ConditionalFormattingCustomIconCondition = {
  /**
   * @pattern `^#[A-F0-9]{6}$`
   */
  Color?: string;
  DisplayConfiguration?: ConditionalFormattingIconDisplayConfiguration;
  /**
   * @minLength `1`
   * @maxLength `4096`
   */
  Expression: string;
  IconOptions: ConditionalFormattingCustomIconOptions;
};
/**
 * Type definition for `AWS::QuickSight::Template.ConditionalFormattingCustomIconOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-conditionalformattingcustomiconoptions.html}
 */
export type ConditionalFormattingCustomIconOptions = {
  Icon?: Icon;
  /**
   * @pattern `^[^\u0000-\u00FF]$`
   */
  UnicodeIcon?: string;
};
/**
 * Type definition for `AWS::QuickSight::Template.ConditionalFormattingGradientColor`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-conditionalformattinggradientcolor.html}
 */
export type ConditionalFormattingGradientColor = {
  Color: GradientColor;
  /**
   * @minLength `1`
   * @maxLength `4096`
   */
  Expression: string;
};
/**
 * Type definition for `AWS::QuickSight::Template.ConditionalFormattingIcon`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-conditionalformattingicon.html}
 */
export type ConditionalFormattingIcon = {
  CustomCondition?: ConditionalFormattingCustomIconCondition;
  IconSet?: ConditionalFormattingIconSet;
};
/**
 * Type definition for `AWS::QuickSight::Template.ConditionalFormattingIconDisplayConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-conditionalformattingicondisplayconfiguration.html}
 */
export type ConditionalFormattingIconDisplayConfiguration = {
  IconDisplayOption?: ConditionalFormattingIconDisplayOption;
};
/**
 * Type definition for `AWS::QuickSight::Template.ConditionalFormattingIconDisplayOption`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-conditionalformattingicondisplayoption.html}
 */
export type ConditionalFormattingIconDisplayOption = "ICON_ONLY";
/**
 * Type definition for `AWS::QuickSight::Template.ConditionalFormattingIconSet`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-conditionalformattingiconset.html}
 */
export type ConditionalFormattingIconSet = {
  /**
   * @minLength `1`
   * @maxLength `4096`
   */
  Expression: string;
  IconSetType?: ConditionalFormattingIconSetType;
};
/**
 * Type definition for `AWS::QuickSight::Template.ConditionalFormattingIconSetType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-conditionalformattingiconsettype.html}
 */
export type ConditionalFormattingIconSetType =
  | "PLUS_MINUS"
  | "CHECK_X"
  | "THREE_COLOR_ARROW"
  | "THREE_GRAY_ARROW"
  | "CARET_UP_MINUS_DOWN"
  | "THREE_SHAPE"
  | "THREE_CIRCLE"
  | "FLAGS"
  | "BARS"
  | "FOUR_COLOR_ARROW"
  | "FOUR_GRAY_ARROW";
/**
 * Type definition for `AWS::QuickSight::Template.ConditionalFormattingSolidColor`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-conditionalformattingsolidcolor.html}
 */
export type ConditionalFormattingSolidColor = {
  /**
   * @pattern `^#[A-F0-9]{6}$`
   */
  Color?: string;
  /**
   * @minLength `1`
   * @maxLength `4096`
   */
  Expression: string;
};
/**
 * Type definition for `AWS::QuickSight::Template.ContributionAnalysisDefault`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-contributionanalysisdefault.html}
 */
export type ContributionAnalysisDefault = {
  /**
   * @minLength `1`
   * @maxLength `4`
   */
  ContributorDimensions: ColumnIdentifier[];
  /**
   * @minLength `1`
   * @maxLength `512`
   */
  MeasureFieldId: string;
};
/**
 * Type definition for `AWS::QuickSight::Template.CrossDatasetTypes`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-crossdatasettypes.html}
 */
export type CrossDatasetTypes = "ALL_DATASETS" | "SINGLE_DATASET";
/**
 * Type definition for `AWS::QuickSight::Template.CurrencyDisplayFormatConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-currencydisplayformatconfiguration.html}
 */
export type CurrencyDisplayFormatConfiguration = {
  DecimalPlacesConfiguration?: DecimalPlacesConfiguration;
  NegativeValueConfiguration?: NegativeValueConfiguration;
  NullValueFormatConfiguration?: NullValueFormatConfiguration;
  NumberScale?: NumberScale;
  /**
   * @minLength `1`
   * @maxLength `128`
   */
  Prefix?: string;
  SeparatorConfiguration?: NumericSeparatorConfiguration;
  /**
   * @minLength `1`
   * @maxLength `128`
   */
  Suffix?: string;
  /**
   * @pattern `^[A-Z]{3}$`
   */
  Symbol?: string;
};
/**
 * Type definition for `AWS::QuickSight::Template.CustomActionFilterOperation`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-customactionfilteroperation.html}
 */
export type CustomActionFilterOperation = {
  SelectedFieldsConfiguration: FilterOperationSelectedFieldsConfiguration;
  TargetVisualsConfiguration: FilterOperationTargetVisualsConfiguration;
};
/**
 * Type definition for `AWS::QuickSight::Template.CustomActionNavigationOperation`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-customactionnavigationoperation.html}
 */
export type CustomActionNavigationOperation = {
  LocalNavigationConfiguration?: LocalNavigationConfiguration;
};
/**
 * Type definition for `AWS::QuickSight::Template.CustomActionSetParametersOperation`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-customactionsetparametersoperation.html}
 */
export type CustomActionSetParametersOperation = {
  /**
   * @minLength `1`
   * @maxLength `200`
   */
  ParameterValueConfigurations: SetParameterValueConfiguration[];
};
/**
 * Type definition for `AWS::QuickSight::Template.CustomActionURLOperation`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-customactionurloperation.html}
 */
export type CustomActionURLOperation = {
  URLTarget: URLTargetConfiguration;
  /**
   * @minLength `1`
   * @maxLength `2048`
   */
  URLTemplate: string;
};
/**
 * Type definition for `AWS::QuickSight::Template.CustomColor`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-customcolor.html}
 */
export type CustomColor = {
  /**
   * @pattern `^#[A-F0-9]{6}$`
   */
  Color: string;
  /**
   * @minLength `0`
   * @maxLength `2048`
   */
  FieldValue?: string;
  SpecialValue?: SpecialValue;
};
/**
 * Type definition for `AWS::QuickSight::Template.CustomContentConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-customcontentconfiguration.html}
 */
export type CustomContentConfiguration = {
  ContentType?: CustomContentType;
  /**
   * @minLength `1`
   * @maxLength `2048`
   */
  ContentUrl?: string;
  ImageScaling?: CustomContentImageScalingConfiguration;
};
/**
 * Type definition for `AWS::QuickSight::Template.CustomContentImageScalingConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-customcontentimagescalingconfiguration.html}
 */
export type CustomContentImageScalingConfiguration =
  | "FIT_TO_HEIGHT"
  | "FIT_TO_WIDTH"
  | "DO_NOT_SCALE"
  | "SCALE_TO_VISUAL";
/**
 * Type definition for `AWS::QuickSight::Template.CustomContentType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-customcontenttype.html}
 */
export type CustomContentType = "IMAGE" | "OTHER_EMBEDDED_CONTENT";
/**
 * Type definition for `AWS::QuickSight::Template.CustomContentVisual`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-customcontentvisual.html}
 */
export type CustomContentVisual = {
  /**
   * @minLength `0`
   * @maxLength `10`
   */
  Actions?: VisualCustomAction[];
  ChartConfiguration?: CustomContentConfiguration;
  /**
   * @minLength `1`
   * @maxLength `2048`
   */
  DataSetIdentifier: string;
  Subtitle?: VisualSubtitleLabelOptions;
  Title?: VisualTitleLabelOptions;
  /**
   * @minLength `1`
   * @maxLength `512`
   * @pattern `^[\w\-]+$`
   */
  VisualId: string;
};
/**
 * Type definition for `AWS::QuickSight::Template.CustomFilterConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-customfilterconfiguration.html}
 */
export type CustomFilterConfiguration = {
  /**
   * @minLength `0`
   * @maxLength `512`
   */
  CategoryValue?: string;
  MatchOperator: CategoryFilterMatchOperator;
  NullOption: FilterNullOption;
  /**
   * @minLength `1`
   * @maxLength `2048`
   * @pattern `^[a-zA-Z0-9]+$`
   */
  ParameterName?: string;
  SelectAllOptions?: CategoryFilterSelectAllOptions;
};
/**
 * Type definition for `AWS::QuickSight::Template.CustomFilterListConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-customfilterlistconfiguration.html}
 */
export type CustomFilterListConfiguration = {
  /**
   * @minLength `0`
   * @maxLength `100000`
   */
  CategoryValues?: string[];
  MatchOperator: CategoryFilterMatchOperator;
  NullOption: FilterNullOption;
  SelectAllOptions?: CategoryFilterSelectAllOptions;
};
/**
 * Type definition for `AWS::QuickSight::Template.CustomNarrativeOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-customnarrativeoptions.html}
 */
export type CustomNarrativeOptions = {
  /**
   * @minLength `0`
   * @maxLength `150000`
   */
  Narrative: string;
};
/**
 * Type definition for `AWS::QuickSight::Template.CustomParameterValues`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-customparametervalues.html}
 */
export type CustomParameterValues = {
  /**
   * @minLength `0`
   * @maxLength `50000`
   */
  DateTimeValues?: string[];
  /**
   * @minLength `0`
   * @maxLength `50000`
   */
  DecimalValues?: number[];
  /**
   * @minLength `0`
   * @maxLength `50000`
   */
  IntegerValues?: number[];
  /**
   * @minLength `0`
   * @maxLength `50000`
   */
  StringValues?: string[];
};
/**
 * Type definition for `AWS::QuickSight::Template.CustomValuesConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-customvaluesconfiguration.html}
 */
export type CustomValuesConfiguration = {
  CustomValues: CustomParameterValues;
  IncludeNullValue?: boolean;
};
/**
 * Type definition for `AWS::QuickSight::Template.DataBarsOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-databarsoptions.html}
 */
export type DataBarsOptions = {
  /**
   * @minLength `1`
   * @maxLength `512`
   */
  FieldId: string;
  /**
   * @pattern `^#[A-F0-9]{6}$`
   */
  NegativeColor?: string;
  /**
   * @pattern `^#[A-F0-9]{6}$`
   */
  PositiveColor?: string;
};
/**
 * Type definition for `AWS::QuickSight::Template.DataColor`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-datacolor.html}
 */
export type DataColor = {
  /**
   * @pattern `^#[A-F0-9]{6}$`
   */
  Color?: string;
  DataValue?: number;
};
/**
 * Type definition for `AWS::QuickSight::Template.DataFieldSeriesItem`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-datafieldseriesitem.html}
 */
export type DataFieldSeriesItem = {
  AxisBinding: AxisBinding;
  /**
   * @minLength `1`
   * @maxLength `512`
   */
  FieldId: string;
  FieldValue?: string;
  Settings?: LineChartSeriesSettings;
};
/**
 * Type definition for `AWS::QuickSight::Template.DataLabelContent`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-datalabelcontent.html}
 */
export type DataLabelContent = "VALUE" | "PERCENT" | "VALUE_AND_PERCENT";
/**
 * Type definition for `AWS::QuickSight::Template.DataLabelOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-datalabeloptions.html}
 */
export type DataLabelOptions = {
  CategoryLabelVisibility?: Visibility;
  /**
   * @minLength `0`
   * @maxLength `100`
   */
  DataLabelTypes?: DataLabelType[];
  /**
   * @pattern `^#[A-F0-9]{6}$`
   */
  LabelColor?: string;
  LabelContent?: DataLabelContent;
  LabelFontConfiguration?: FontConfiguration;
  MeasureLabelVisibility?: Visibility;
  Overlap?: DataLabelOverlap;
  Position?: DataLabelPosition;
  TotalsVisibility?: Visibility;
  Visibility?: Visibility;
};
/**
 * Type definition for `AWS::QuickSight::Template.DataLabelOverlap`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-datalabeloverlap.html}
 */
export type DataLabelOverlap = "DISABLE_OVERLAP" | "ENABLE_OVERLAP";
/**
 * Type definition for `AWS::QuickSight::Template.DataLabelPosition`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-datalabelposition.html}
 */
export type DataLabelPosition =
  | "INSIDE"
  | "OUTSIDE"
  | "LEFT"
  | "TOP"
  | "BOTTOM"
  | "RIGHT";
/**
 * Type definition for `AWS::QuickSight::Template.DataLabelType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-datalabeltype.html}
 */
export type DataLabelType = {
  DataPathLabelType?: DataPathLabelType;
  FieldLabelType?: FieldLabelType;
  MaximumLabelType?: MaximumLabelType;
  MinimumLabelType?: MinimumLabelType;
  RangeEndsLabelType?: RangeEndsLabelType;
};
/**
 * Type definition for `AWS::QuickSight::Template.DataPathColor`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-datapathcolor.html}
 */
export type DataPathColor = {
  /**
   * @pattern `^#[A-F0-9]{6}$`
   */
  Color: string;
  Element: DataPathValue;
  TimeGranularity?: TimeGranularity;
};
/**
 * Type definition for `AWS::QuickSight::Template.DataPathLabelType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-datapathlabeltype.html}
 */
export type DataPathLabelType = {
  /**
   * @minLength `1`
   * @maxLength `512`
   */
  FieldId?: string;
  /**
   * @minLength `0`
   * @maxLength `2048`
   */
  FieldValue?: string;
  Visibility?: Visibility;
};
/**
 * Type definition for `AWS::QuickSight::Template.DataPathSort`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-datapathsort.html}
 */
export type DataPathSort = {
  Direction: SortDirection;
  /**
   * @minLength `0`
   * @maxLength `20`
   */
  SortPaths: DataPathValue[];
};
/**
 * Type definition for `AWS::QuickSight::Template.DataPathType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-datapathtype.html}
 */
export type DataPathType = {
  PivotTableDataPathType?: PivotTableDataPathType;
};
/**
 * Type definition for `AWS::QuickSight::Template.DataPathValue`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-datapathvalue.html}
 */
export type DataPathValue = {
  DataPathType?: DataPathType;
  /**
   * @minLength `1`
   * @maxLength `512`
   */
  FieldId?: string;
  /**
   * @minLength `0`
   * @maxLength `2048`
   */
  FieldValue?: string;
};
/**
 * Type definition for `AWS::QuickSight::Template.DataSetConfiguration`.
 * <p>Dataset configuration.</p>
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-datasetconfiguration.html}
 */
export type DataSetConfiguration = {
  /**
   * <p>A structure containing the list of column group schemas.</p>
   * @minLength `0`
   * @maxLength `500`
   */
  ColumnGroupSchemaList?: ColumnGroupSchema[];
  /**
   * <p>Dataset schema.</p>
   */
  DataSetSchema?: DataSetSchema;
  /**
   * <p>Placeholder.</p>
   */
  Placeholder?: string;
};
/**
 * Type definition for `AWS::QuickSight::Template.DataSetReference`.
 * <p>Dataset reference.</p>
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-datasetreference.html}
 */
export type DataSetReference = {
  /**
   * <p>Dataset Amazon Resource Name (ARN).</p>
   */
  DataSetArn: string;
  /**
   * <p>Dataset placeholder.</p>
   * @pattern `\S`
   */
  DataSetPlaceholder: string;
};
/**
 * Type definition for `AWS::QuickSight::Template.DataSetSchema`.
 * <p>Dataset schema.</p>
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-datasetschema.html}
 */
export type DataSetSchema = {
  /**
   * <p>A structure containing the list of column schemas.</p>
   * @minLength `0`
   * @maxLength `500`
   */
  ColumnSchemaList?: ColumnSchema[];
};
/**
 * Type definition for `AWS::QuickSight::Template.DateAggregationFunction`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-dateaggregationfunction.html}
 */
export type DateAggregationFunction =
  | "COUNT"
  | "DISTINCT_COUNT"
  | "MIN"
  | "MAX";
/**
 * Type definition for `AWS::QuickSight::Template.DateAxisOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-dateaxisoptions.html}
 */
export type DateAxisOptions = {
  MissingDateVisibility?: Visibility;
};
/**
 * Type definition for `AWS::QuickSight::Template.DateDimensionField`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-datedimensionfield.html}
 */
export type DateDimensionField = {
  Column: ColumnIdentifier;
  DateGranularity?: TimeGranularity;
  /**
   * @minLength `1`
   * @maxLength `512`
   */
  FieldId: string;
  FormatConfiguration?: DateTimeFormatConfiguration;
  /**
   * @minLength `1`
   * @maxLength `512`
   */
  HierarchyId?: string;
};
/**
 * Type definition for `AWS::QuickSight::Template.DateMeasureField`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-datemeasurefield.html}
 */
export type DateMeasureField = {
  AggregationFunction?: DateAggregationFunction;
  Column: ColumnIdentifier;
  /**
   * @minLength `1`
   * @maxLength `512`
   */
  FieldId: string;
  FormatConfiguration?: DateTimeFormatConfiguration;
};
/**
 * Type definition for `AWS::QuickSight::Template.DateTimeDefaultValues`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-datetimedefaultvalues.html}
 */
export type DateTimeDefaultValues = {
  DynamicValue?: DynamicDefaultValue;
  RollingDate?: RollingDateConfiguration;
  /**
   * @minLength `0`
   * @maxLength `50000`
   */
  StaticValues?: string[];
};
/**
 * Type definition for `AWS::QuickSight::Template.DateTimeFormatConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-datetimeformatconfiguration.html}
 */
export type DateTimeFormatConfiguration = {
  /**
   * @minLength `1`
   * @maxLength `128`
   */
  DateTimeFormat?: string;
  NullValueFormatConfiguration?: NullValueFormatConfiguration;
  NumericFormatConfiguration?: NumericFormatConfiguration;
};
/**
 * Type definition for `AWS::QuickSight::Template.DateTimeHierarchy`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-datetimehierarchy.html}
 */
export type DateTimeHierarchy = {
  /**
   * @minLength `0`
   * @maxLength `10`
   */
  DrillDownFilters?: DrillDownFilter[];
  /**
   * @minLength `1`
   * @maxLength `512`
   */
  HierarchyId: string;
};
/**
 * Type definition for `AWS::QuickSight::Template.DateTimeParameterDeclaration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-datetimeparameterdeclaration.html}
 */
export type DateTimeParameterDeclaration = {
  DefaultValues?: DateTimeDefaultValues;
  /**
   * @minLength `0`
   * @maxLength `150`
   */
  MappedDataSetParameters?: MappedDataSetParameter[];
  /**
   * @minLength `1`
   * @maxLength `2048`
   * @pattern `^[a-zA-Z0-9]+$`
   */
  Name: string;
  TimeGranularity?: TimeGranularity;
  ValueWhenUnset?: DateTimeValueWhenUnsetConfiguration;
};
/**
 * Type definition for `AWS::QuickSight::Template.DateTimePickerControlDisplayOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-datetimepickercontroldisplayoptions.html}
 */
export type DateTimePickerControlDisplayOptions = {
  /**
   * @minLength `1`
   * @maxLength `128`
   */
  DateTimeFormat?: string;
  InfoIconLabelOptions?: SheetControlInfoIconLabelOptions;
  TitleOptions?: LabelOptions;
};
/**
 * Type definition for `AWS::QuickSight::Template.DateTimeValueWhenUnsetConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-datetimevaluewhenunsetconfiguration.html}
 */
export type DateTimeValueWhenUnsetConfiguration = {
  CustomValue?: string;
  ValueWhenUnsetOption?: ValueWhenUnsetOption;
};
/**
 * Type definition for `AWS::QuickSight::Template.DayOfTheWeek`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-dayoftheweek.html}
 */
export type DayOfTheWeek =
  | "SUNDAY"
  | "MONDAY"
  | "TUESDAY"
  | "WEDNESDAY"
  | "THURSDAY"
  | "FRIDAY"
  | "SATURDAY";
/**
 * Type definition for `AWS::QuickSight::Template.DecimalDefaultValues`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-decimaldefaultvalues.html}
 */
export type DecimalDefaultValues = {
  DynamicValue?: DynamicDefaultValue;
  /**
   * @minLength `0`
   * @maxLength `50000`
   */
  StaticValues?: number[];
};
/**
 * Type definition for `AWS::QuickSight::Template.DecimalParameterDeclaration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-decimalparameterdeclaration.html}
 */
export type DecimalParameterDeclaration = {
  DefaultValues?: DecimalDefaultValues;
  /**
   * @minLength `0`
   * @maxLength `150`
   */
  MappedDataSetParameters?: MappedDataSetParameter[];
  /**
   * @minLength `1`
   * @maxLength `2048`
   * @pattern `^[a-zA-Z0-9]+$`
   */
  Name: string;
  ParameterValueType: ParameterValueType;
  ValueWhenUnset?: DecimalValueWhenUnsetConfiguration;
};
/**
 * Type definition for `AWS::QuickSight::Template.DecimalPlacesConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-decimalplacesconfiguration.html}
 */
export type DecimalPlacesConfiguration = {
  /**
   * @min `0`
   * @max `20`
   */
  DecimalPlaces: number;
};
/**
 * Type definition for `AWS::QuickSight::Template.DecimalValueWhenUnsetConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-decimalvaluewhenunsetconfiguration.html}
 */
export type DecimalValueWhenUnsetConfiguration = {
  CustomValue?: number;
  ValueWhenUnsetOption?: ValueWhenUnsetOption;
};
/**
 * Type definition for `AWS::QuickSight::Template.DefaultDateTimePickerControlOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-defaultdatetimepickercontroloptions.html}
 */
export type DefaultDateTimePickerControlOptions = {
  DisplayOptions?: DateTimePickerControlDisplayOptions;
  Type?: SheetControlDateTimePickerType;
};
/**
 * Type definition for `AWS::QuickSight::Template.DefaultFilterControlConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-defaultfiltercontrolconfiguration.html}
 */
export type DefaultFilterControlConfiguration = {
  ControlOptions: DefaultFilterControlOptions;
  /**
   * @minLength `1`
   * @maxLength `2048`
   */
  Title: string;
};
/**
 * Type definition for `AWS::QuickSight::Template.DefaultFilterControlOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-defaultfiltercontroloptions.html}
 */
export type DefaultFilterControlOptions = {
  DefaultDateTimePickerOptions?: DefaultDateTimePickerControlOptions;
  DefaultDropdownOptions?: DefaultFilterDropDownControlOptions;
  DefaultListOptions?: DefaultFilterListControlOptions;
  DefaultRelativeDateTimeOptions?: DefaultRelativeDateTimeControlOptions;
  DefaultSliderOptions?: DefaultSliderControlOptions;
  DefaultTextAreaOptions?: DefaultTextAreaControlOptions;
  DefaultTextFieldOptions?: DefaultTextFieldControlOptions;
};
/**
 * Type definition for `AWS::QuickSight::Template.DefaultFilterDropDownControlOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-defaultfilterdropdowncontroloptions.html}
 */
export type DefaultFilterDropDownControlOptions = {
  DisplayOptions?: DropDownControlDisplayOptions;
  SelectableValues?: FilterSelectableValues;
  Type?: SheetControlListType;
};
/**
 * Type definition for `AWS::QuickSight::Template.DefaultFilterListControlOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-defaultfilterlistcontroloptions.html}
 */
export type DefaultFilterListControlOptions = {
  DisplayOptions?: ListControlDisplayOptions;
  SelectableValues?: FilterSelectableValues;
  Type?: SheetControlListType;
};
/**
 * Type definition for `AWS::QuickSight::Template.DefaultFreeFormLayoutConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-defaultfreeformlayoutconfiguration.html}
 */
export type DefaultFreeFormLayoutConfiguration = {
  CanvasSizeOptions: FreeFormLayoutCanvasSizeOptions;
};
/**
 * Type definition for `AWS::QuickSight::Template.DefaultGridLayoutConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-defaultgridlayoutconfiguration.html}
 */
export type DefaultGridLayoutConfiguration = {
  CanvasSizeOptions: GridLayoutCanvasSizeOptions;
};
/**
 * Type definition for `AWS::QuickSight::Template.DefaultInteractiveLayoutConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-defaultinteractivelayoutconfiguration.html}
 */
export type DefaultInteractiveLayoutConfiguration = {
  FreeForm?: DefaultFreeFormLayoutConfiguration;
  Grid?: DefaultGridLayoutConfiguration;
};
/**
 * Type definition for `AWS::QuickSight::Template.DefaultNewSheetConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-defaultnewsheetconfiguration.html}
 */
export type DefaultNewSheetConfiguration = {
  InteractiveLayoutConfiguration?: DefaultInteractiveLayoutConfiguration;
  PaginatedLayoutConfiguration?: DefaultPaginatedLayoutConfiguration;
  SheetContentType?: SheetContentType;
};
/**
 * Type definition for `AWS::QuickSight::Template.DefaultPaginatedLayoutConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-defaultpaginatedlayoutconfiguration.html}
 */
export type DefaultPaginatedLayoutConfiguration = {
  SectionBased?: DefaultSectionBasedLayoutConfiguration;
};
/**
 * Type definition for `AWS::QuickSight::Template.DefaultRelativeDateTimeControlOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-defaultrelativedatetimecontroloptions.html}
 */
export type DefaultRelativeDateTimeControlOptions = {
  DisplayOptions?: RelativeDateTimeControlDisplayOptions;
};
/**
 * Type definition for `AWS::QuickSight::Template.DefaultSectionBasedLayoutConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-defaultsectionbasedlayoutconfiguration.html}
 */
export type DefaultSectionBasedLayoutConfiguration = {
  CanvasSizeOptions: SectionBasedLayoutCanvasSizeOptions;
};
/**
 * Type definition for `AWS::QuickSight::Template.DefaultSliderControlOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-defaultslidercontroloptions.html}
 */
export type DefaultSliderControlOptions = {
  DisplayOptions?: SliderControlDisplayOptions;
  MaximumValue: number;
  MinimumValue: number;
  StepSize: number;
  Type?: SheetControlSliderType;
};
/**
 * Type definition for `AWS::QuickSight::Template.DefaultTextAreaControlOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-defaulttextareacontroloptions.html}
 */
export type DefaultTextAreaControlOptions = {
  /**
   * @minLength `1`
   * @maxLength `2048`
   */
  Delimiter?: string;
  DisplayOptions?: TextAreaControlDisplayOptions;
};
/**
 * Type definition for `AWS::QuickSight::Template.DefaultTextFieldControlOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-defaulttextfieldcontroloptions.html}
 */
export type DefaultTextFieldControlOptions = {
  DisplayOptions?: TextFieldControlDisplayOptions;
};
/**
 * Type definition for `AWS::QuickSight::Template.DestinationParameterValueConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-destinationparametervalueconfiguration.html}
 */
export type DestinationParameterValueConfiguration = {
  CustomValuesConfiguration?: CustomValuesConfiguration;
  SelectAllValueOptions?: SelectAllValueOptions;
  SourceColumn?: ColumnIdentifier;
  /**
   * @minLength `1`
   * @maxLength `512`
   */
  SourceField?: string;
  SourceParameterName?: string;
};
/**
 * Type definition for `AWS::QuickSight::Template.DimensionField`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-dimensionfield.html}
 */
export type DimensionField = {
  CategoricalDimensionField?: CategoricalDimensionField;
  DateDimensionField?: DateDimensionField;
  NumericalDimensionField?: NumericalDimensionField;
};
/**
 * Type definition for `AWS::QuickSight::Template.DonutCenterOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-donutcenteroptions.html}
 */
export type DonutCenterOptions = {
  LabelVisibility?: Visibility;
};
/**
 * Type definition for `AWS::QuickSight::Template.DonutOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-donutoptions.html}
 */
export type DonutOptions = {
  ArcOptions?: ArcOptions;
  DonutCenterOptions?: DonutCenterOptions;
};
/**
 * Type definition for `AWS::QuickSight::Template.DrillDownFilter`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-drilldownfilter.html}
 */
export type DrillDownFilter = {
  CategoryFilter?: CategoryDrillDownFilter;
  NumericEqualityFilter?: NumericEqualityDrillDownFilter;
  TimeRangeFilter?: TimeRangeDrillDownFilter;
};
/**
 * Type definition for `AWS::QuickSight::Template.DropDownControlDisplayOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-dropdowncontroldisplayoptions.html}
 */
export type DropDownControlDisplayOptions = {
  InfoIconLabelOptions?: SheetControlInfoIconLabelOptions;
  SelectAllOptions?: ListControlSelectAllOptions;
  TitleOptions?: LabelOptions;
};
/**
 * Type definition for `AWS::QuickSight::Template.DynamicDefaultValue`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-dynamicdefaultvalue.html}
 */
export type DynamicDefaultValue = {
  DefaultValueColumn: ColumnIdentifier;
  GroupNameColumn?: ColumnIdentifier;
  UserNameColumn?: ColumnIdentifier;
};
/**
 * Type definition for `AWS::QuickSight::Template.EmptyVisual`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-emptyvisual.html}
 */
export type EmptyVisual = {
  /**
   * @minLength `0`
   * @maxLength `10`
   */
  Actions?: VisualCustomAction[];
  /**
   * @minLength `1`
   * @maxLength `2048`
   */
  DataSetIdentifier: string;
  /**
   * @minLength `1`
   * @maxLength `512`
   * @pattern `^[\w\-]+$`
   */
  VisualId: string;
};
/**
 * Type definition for `AWS::QuickSight::Template.Entity`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-entity.html}
 */
export type Entity = {
  /**
   * @pattern `\S`
   */
  Path?: string;
};
/**
 * Type definition for `AWS::QuickSight::Template.ExcludePeriodConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-excludeperiodconfiguration.html}
 */
export type ExcludePeriodConfiguration = {
  Amount: number;
  Granularity: TimeGranularity;
  Status?: WidgetStatus;
};
/**
 * Type definition for `AWS::QuickSight::Template.ExplicitHierarchy`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-explicithierarchy.html}
 */
export type ExplicitHierarchy = {
  /**
   * @minLength `2`
   * @maxLength `10`
   */
  Columns: ColumnIdentifier[];
  /**
   * @minLength `0`
   * @maxLength `10`
   */
  DrillDownFilters?: DrillDownFilter[];
  /**
   * @minLength `1`
   * @maxLength `512`
   */
  HierarchyId: string;
};
/**
 * Type definition for `AWS::QuickSight::Template.FieldBasedTooltip`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-fieldbasedtooltip.html}
 */
export type FieldBasedTooltip = {
  AggregationVisibility?: Visibility;
  /**
   * @minLength `0`
   * @maxLength `100`
   */
  TooltipFields?: TooltipItem[];
  TooltipTitleType?: TooltipTitleType;
};
/**
 * Type definition for `AWS::QuickSight::Template.FieldLabelType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-fieldlabeltype.html}
 */
export type FieldLabelType = {
  /**
   * @minLength `1`
   * @maxLength `512`
   */
  FieldId?: string;
  Visibility?: Visibility;
};
/**
 * Type definition for `AWS::QuickSight::Template.FieldSeriesItem`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-fieldseriesitem.html}
 */
export type FieldSeriesItem = {
  AxisBinding: AxisBinding;
  /**
   * @minLength `1`
   * @maxLength `512`
   */
  FieldId: string;
  Settings?: LineChartSeriesSettings;
};
/**
 * Type definition for `AWS::QuickSight::Template.FieldSort`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-fieldsort.html}
 */
export type FieldSort = {
  Direction: SortDirection;
  /**
   * @minLength `1`
   * @maxLength `512`
   */
  FieldId: string;
};
/**
 * Type definition for `AWS::QuickSight::Template.FieldSortOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-fieldsortoptions.html}
 */
export type FieldSortOptions = {
  ColumnSort?: ColumnSort;
  FieldSort?: FieldSort;
};
/**
 * Type definition for `AWS::QuickSight::Template.FieldTooltipItem`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-fieldtooltipitem.html}
 */
export type FieldTooltipItem = {
  /**
   * @minLength `1`
   * @maxLength `512`
   */
  FieldId: string;
  Label?: string;
  TooltipTarget?: TooltipTarget;
  Visibility?: Visibility;
};
/**
 * Type definition for `AWS::QuickSight::Template.FilledMapAggregatedFieldWells`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-filledmapaggregatedfieldwells.html}
 */
export type FilledMapAggregatedFieldWells = {
  /**
   * @minLength `0`
   * @maxLength `1`
   */
  Geospatial?: DimensionField[];
  /**
   * @minLength `0`
   * @maxLength `1`
   */
  Values?: MeasureField[];
};
/**
 * Type definition for `AWS::QuickSight::Template.FilledMapConditionalFormatting`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-filledmapconditionalformatting.html}
 */
export type FilledMapConditionalFormatting = {
  /**
   * @minLength `0`
   * @maxLength `200`
   */
  ConditionalFormattingOptions: FilledMapConditionalFormattingOption[];
};
/**
 * Type definition for `AWS::QuickSight::Template.FilledMapConditionalFormattingOption`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-filledmapconditionalformattingoption.html}
 */
export type FilledMapConditionalFormattingOption = {
  Shape: FilledMapShapeConditionalFormatting;
};
/**
 * Type definition for `AWS::QuickSight::Template.FilledMapConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-filledmapconfiguration.html}
 */
export type FilledMapConfiguration = {
  FieldWells?: FilledMapFieldWells;
  Legend?: LegendOptions;
  MapStyleOptions?: GeospatialMapStyleOptions;
  SortConfiguration?: FilledMapSortConfiguration;
  Tooltip?: TooltipOptions;
  WindowOptions?: GeospatialWindowOptions;
};
/**
 * Type definition for `AWS::QuickSight::Template.FilledMapFieldWells`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-filledmapfieldwells.html}
 */
export type FilledMapFieldWells = {
  FilledMapAggregatedFieldWells?: FilledMapAggregatedFieldWells;
};
/**
 * Type definition for `AWS::QuickSight::Template.FilledMapShapeConditionalFormatting`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-filledmapshapeconditionalformatting.html}
 */
export type FilledMapShapeConditionalFormatting = {
  /**
   * @minLength `1`
   * @maxLength `512`
   */
  FieldId: string;
  Format?: ShapeConditionalFormat;
};
/**
 * Type definition for `AWS::QuickSight::Template.FilledMapSortConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-filledmapsortconfiguration.html}
 */
export type FilledMapSortConfiguration = {
  /**
   * @minLength `0`
   * @maxLength `100`
   */
  CategorySort?: FieldSortOptions[];
};
/**
 * Type definition for `AWS::QuickSight::Template.FilledMapVisual`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-filledmapvisual.html}
 */
export type FilledMapVisual = {
  /**
   * @minLength `0`
   * @maxLength `10`
   */
  Actions?: VisualCustomAction[];
  ChartConfiguration?: FilledMapConfiguration;
  /**
   * @minLength `0`
   * @maxLength `2`
   */
  ColumnHierarchies?: ColumnHierarchy[];
  ConditionalFormatting?: FilledMapConditionalFormatting;
  Subtitle?: VisualSubtitleLabelOptions;
  Title?: VisualTitleLabelOptions;
  /**
   * @minLength `1`
   * @maxLength `512`
   * @pattern `^[\w\-]+$`
   */
  VisualId: string;
};
/**
 * Type definition for `AWS::QuickSight::Template.Filter`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-filter.html}
 */
export type Filter = {
  CategoryFilter?: CategoryFilter;
  NestedFilter?: NestedFilter;
  NumericEqualityFilter?: NumericEqualityFilter;
  NumericRangeFilter?: NumericRangeFilter;
  RelativeDatesFilter?: RelativeDatesFilter;
  TimeEqualityFilter?: TimeEqualityFilter;
  TimeRangeFilter?: TimeRangeFilter;
  TopBottomFilter?: TopBottomFilter;
};
/**
 * Type definition for `AWS::QuickSight::Template.FilterControl`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-filtercontrol.html}
 */
export type FilterControl = {
  CrossSheet?: FilterCrossSheetControl;
  DateTimePicker?: FilterDateTimePickerControl;
  Dropdown?: FilterDropDownControl;
  List?: FilterListControl;
  RelativeDateTime?: FilterRelativeDateTimeControl;
  Slider?: FilterSliderControl;
  TextArea?: FilterTextAreaControl;
  TextField?: FilterTextFieldControl;
};
/**
 * Type definition for `AWS::QuickSight::Template.FilterCrossSheetControl`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-filtercrosssheetcontrol.html}
 */
export type FilterCrossSheetControl = {
  CascadingControlConfiguration?: CascadingControlConfiguration;
  /**
   * @minLength `1`
   * @maxLength `512`
   * @pattern `^[\w\-]+$`
   */
  FilterControlId: string;
  /**
   * @minLength `1`
   * @maxLength `512`
   * @pattern `^[\w\-]+$`
   */
  SourceFilterId: string;
};
/**
 * Type definition for `AWS::QuickSight::Template.FilterDateTimePickerControl`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-filterdatetimepickercontrol.html}
 */
export type FilterDateTimePickerControl = {
  DisplayOptions?: DateTimePickerControlDisplayOptions;
  /**
   * @minLength `1`
   * @maxLength `512`
   * @pattern `^[\w\-]+$`
   */
  FilterControlId: string;
  /**
   * @minLength `1`
   * @maxLength `512`
   * @pattern `^[\w\-]+$`
   */
  SourceFilterId: string;
  /**
   * @minLength `1`
   * @maxLength `2048`
   */
  Title: string;
  Type?: SheetControlDateTimePickerType;
};
/**
 * Type definition for `AWS::QuickSight::Template.FilterDropDownControl`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-filterdropdowncontrol.html}
 */
export type FilterDropDownControl = {
  CascadingControlConfiguration?: CascadingControlConfiguration;
  DisplayOptions?: DropDownControlDisplayOptions;
  /**
   * @minLength `1`
   * @maxLength `512`
   * @pattern `^[\w\-]+$`
   */
  FilterControlId: string;
  SelectableValues?: FilterSelectableValues;
  /**
   * @minLength `1`
   * @maxLength `512`
   * @pattern `^[\w\-]+$`
   */
  SourceFilterId: string;
  /**
   * @minLength `1`
   * @maxLength `2048`
   */
  Title: string;
  Type?: SheetControlListType;
};
/**
 * Type definition for `AWS::QuickSight::Template.FilterGroup`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-filtergroup.html}
 */
export type FilterGroup = {
  CrossDataset: CrossDatasetTypes;
  /**
   * @minLength `1`
   * @maxLength `512`
   * @pattern `^[\w\-]+$`
   */
  FilterGroupId: string;
  /**
   * @minLength `0`
   * @maxLength `20`
   */
  Filters: Filter[];
  ScopeConfiguration: FilterScopeConfiguration;
  Status?: WidgetStatus;
};
/**
 * Type definition for `AWS::QuickSight::Template.FilterListConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-filterlistconfiguration.html}
 */
export type FilterListConfiguration = {
  /**
   * @minLength `0`
   * @maxLength `100000`
   */
  CategoryValues?: string[];
  MatchOperator: CategoryFilterMatchOperator;
  NullOption?: FilterNullOption;
  SelectAllOptions?: CategoryFilterSelectAllOptions;
};
/**
 * Type definition for `AWS::QuickSight::Template.FilterListControl`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-filterlistcontrol.html}
 */
export type FilterListControl = {
  CascadingControlConfiguration?: CascadingControlConfiguration;
  DisplayOptions?: ListControlDisplayOptions;
  /**
   * @minLength `1`
   * @maxLength `512`
   * @pattern `^[\w\-]+$`
   */
  FilterControlId: string;
  SelectableValues?: FilterSelectableValues;
  /**
   * @minLength `1`
   * @maxLength `512`
   * @pattern `^[\w\-]+$`
   */
  SourceFilterId: string;
  /**
   * @minLength `1`
   * @maxLength `2048`
   */
  Title: string;
  Type?: SheetControlListType;
};
/**
 * Type definition for `AWS::QuickSight::Template.FilterNullOption`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-filternulloption.html}
 */
export type FilterNullOption = "ALL_VALUES" | "NULLS_ONLY" | "NON_NULLS_ONLY";
/**
 * Type definition for `AWS::QuickSight::Template.FilterOperationSelectedFieldsConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-filteroperationselectedfieldsconfiguration.html}
 */
export type FilterOperationSelectedFieldsConfiguration = {
  /**
   * <p>The selected columns of a dataset.</p>
   * @minLength `0`
   * @maxLength `10`
   */
  SelectedColumns?: ColumnIdentifier[];
  SelectedFieldOptions?: SelectedFieldOptions;
  /**
   * @minLength `1`
   * @maxLength `20`
   */
  SelectedFields?: string[];
};
/**
 * Type definition for `AWS::QuickSight::Template.FilterOperationTargetVisualsConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-filteroperationtargetvisualsconfiguration.html}
 */
export type FilterOperationTargetVisualsConfiguration = {
  SameSheetTargetVisualConfiguration?: SameSheetTargetVisualConfiguration;
};
/**
 * Type definition for `AWS::QuickSight::Template.FilterRelativeDateTimeControl`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-filterrelativedatetimecontrol.html}
 */
export type FilterRelativeDateTimeControl = {
  DisplayOptions?: RelativeDateTimeControlDisplayOptions;
  /**
   * @minLength `1`
   * @maxLength `512`
   * @pattern `^[\w\-]+$`
   */
  FilterControlId: string;
  /**
   * @minLength `1`
   * @maxLength `512`
   * @pattern `^[\w\-]+$`
   */
  SourceFilterId: string;
  /**
   * @minLength `1`
   * @maxLength `2048`
   */
  Title: string;
};
/**
 * Type definition for `AWS::QuickSight::Template.FilterScopeConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-filterscopeconfiguration.html}
 */
export type FilterScopeConfiguration = {
  AllSheets?: AllSheetsFilterScopeConfiguration;
  SelectedSheets?: SelectedSheetsFilterScopeConfiguration;
};
/**
 * Type definition for `AWS::QuickSight::Template.FilterSelectableValues`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-filterselectablevalues.html}
 */
export type FilterSelectableValues = {
  /**
   * @minLength `0`
   * @maxLength `50000`
   */
  Values?: string[];
};
/**
 * Type definition for `AWS::QuickSight::Template.FilterSliderControl`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-filterslidercontrol.html}
 */
export type FilterSliderControl = {
  DisplayOptions?: SliderControlDisplayOptions;
  /**
   * @minLength `1`
   * @maxLength `512`
   * @pattern `^[\w\-]+$`
   */
  FilterControlId: string;
  MaximumValue: number;
  MinimumValue: number;
  /**
   * @minLength `1`
   * @maxLength `512`
   * @pattern `^[\w\-]+$`
   */
  SourceFilterId: string;
  StepSize: number;
  /**
   * @minLength `1`
   * @maxLength `2048`
   */
  Title: string;
  Type?: SheetControlSliderType;
};
/**
 * Type definition for `AWS::QuickSight::Template.FilterTextAreaControl`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-filtertextareacontrol.html}
 */
export type FilterTextAreaControl = {
  /**
   * @minLength `1`
   * @maxLength `2048`
   */
  Delimiter?: string;
  DisplayOptions?: TextAreaControlDisplayOptions;
  /**
   * @minLength `1`
   * @maxLength `512`
   * @pattern `^[\w\-]+$`
   */
  FilterControlId: string;
  /**
   * @minLength `1`
   * @maxLength `512`
   * @pattern `^[\w\-]+$`
   */
  SourceFilterId: string;
  /**
   * @minLength `1`
   * @maxLength `2048`
   */
  Title: string;
};
/**
 * Type definition for `AWS::QuickSight::Template.FilterTextFieldControl`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-filtertextfieldcontrol.html}
 */
export type FilterTextFieldControl = {
  DisplayOptions?: TextFieldControlDisplayOptions;
  /**
   * @minLength `1`
   * @maxLength `512`
   * @pattern `^[\w\-]+$`
   */
  FilterControlId: string;
  /**
   * @minLength `1`
   * @maxLength `512`
   * @pattern `^[\w\-]+$`
   */
  SourceFilterId: string;
  /**
   * @minLength `1`
   * @maxLength `2048`
   */
  Title: string;
};
/**
 * Type definition for `AWS::QuickSight::Template.FilterVisualScope`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-filtervisualscope.html}
 */
export type FilterVisualScope = "ALL_VISUALS" | "SELECTED_VISUALS";
/**
 * Type definition for `AWS::QuickSight::Template.FontConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-fontconfiguration.html}
 */
export type FontConfiguration = {
  /**
   * @pattern `^#[A-F0-9]{6}$`
   */
  FontColor?: string;
  FontDecoration?: FontDecoration;
  FontSize?: FontSize;
  FontStyle?: FontStyle;
  FontWeight?: FontWeight;
};
/**
 * Type definition for `AWS::QuickSight::Template.FontDecoration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-fontdecoration.html}
 */
export type FontDecoration = "UNDERLINE" | "NONE";
/**
 * Type definition for `AWS::QuickSight::Template.FontSize`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-fontsize.html}
 */
export type FontSize = {
  Relative?: RelativeFontSize;
};
/**
 * Type definition for `AWS::QuickSight::Template.FontStyle`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-fontstyle.html}
 */
export type FontStyle = "NORMAL" | "ITALIC";
/**
 * Type definition for `AWS::QuickSight::Template.FontWeight`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-fontweight.html}
 */
export type FontWeight = {
  Name?: FontWeightName;
};
/**
 * Type definition for `AWS::QuickSight::Template.FontWeightName`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-fontweightname.html}
 */
export type FontWeightName = "NORMAL" | "BOLD";
/**
 * Type definition for `AWS::QuickSight::Template.ForecastComputation`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-forecastcomputation.html}
 */
export type ForecastComputation = {
  /**
   * @minLength `1`
   * @maxLength `512`
   * @pattern `^[\w\-]+$`
   */
  ComputationId: string;
  /**
   * @min `1`
   * @max `180`
   */
  CustomSeasonalityValue?: number;
  LowerBoundary?: number;
  Name?: string;
  /**
   * @min `0`
   * @max `1000`
   */
  PeriodsBackward?: number;
  /**
   * @min `1`
   * @max `1000`
   */
  PeriodsForward?: number;
  /**
   * @min `50`
   * @max `95`
   */
  PredictionInterval?: number;
  Seasonality?: ForecastComputationSeasonality;
  Time?: DimensionField;
  UpperBoundary?: number;
  Value?: MeasureField;
};
/**
 * Type definition for `AWS::QuickSight::Template.ForecastComputationSeasonality`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-forecastcomputationseasonality.html}
 */
export type ForecastComputationSeasonality = "AUTOMATIC" | "CUSTOM";
/**
 * Type definition for `AWS::QuickSight::Template.ForecastConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-forecastconfiguration.html}
 */
export type ForecastConfiguration = {
  ForecastProperties?: TimeBasedForecastProperties;
  Scenario?: ForecastScenario;
};
/**
 * Type definition for `AWS::QuickSight::Template.ForecastScenario`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-forecastscenario.html}
 */
export type ForecastScenario = {
  WhatIfPointScenario?: WhatIfPointScenario;
  WhatIfRangeScenario?: WhatIfRangeScenario;
};
/**
 * Type definition for `AWS::QuickSight::Template.FormatConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-formatconfiguration.html}
 */
export type FormatConfiguration = {
  DateTimeFormatConfiguration?: DateTimeFormatConfiguration;
  NumberFormatConfiguration?: NumberFormatConfiguration;
  StringFormatConfiguration?: StringFormatConfiguration;
};
/**
 * Type definition for `AWS::QuickSight::Template.FreeFormLayoutCanvasSizeOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-freeformlayoutcanvassizeoptions.html}
 */
export type FreeFormLayoutCanvasSizeOptions = {
  ScreenCanvasSizeOptions?: FreeFormLayoutScreenCanvasSizeOptions;
};
/**
 * Type definition for `AWS::QuickSight::Template.FreeFormLayoutConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-freeformlayoutconfiguration.html}
 */
export type FreeFormLayoutConfiguration = {
  CanvasSizeOptions?: FreeFormLayoutCanvasSizeOptions;
  /**
   * @minLength `0`
   * @maxLength `430`
   */
  Elements: FreeFormLayoutElement[];
};
/**
 * Type definition for `AWS::QuickSight::Template.FreeFormLayoutElement`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-freeformlayoutelement.html}
 */
export type FreeFormLayoutElement = {
  BackgroundStyle?: FreeFormLayoutElementBackgroundStyle;
  BorderStyle?: FreeFormLayoutElementBorderStyle;
  /**
   * @minLength `1`
   * @maxLength `512`
   * @pattern `^[\w\-]+$`
   */
  ElementId: string;
  ElementType: LayoutElementType;
  /**
   * String based length that is composed of value and unit in px
   */
  Height: string;
  LoadingAnimation?: LoadingAnimation;
  /**
   * @minLength `0`
   * @maxLength `10000`
   */
  RenderingRules?: SheetElementRenderingRule[];
  SelectedBorderStyle?: FreeFormLayoutElementBorderStyle;
  Visibility?: Visibility;
  /**
   * String based length that is composed of value and unit in px
   */
  Width: string;
  /**
   * String based length that is composed of value and unit in px
   */
  XAxisLocation: string;
  /**
   * String based length that is composed of value and unit in px with Integer.MAX_VALUE as maximum value
   */
  YAxisLocation: string;
};
/**
 * Type definition for `AWS::QuickSight::Template.FreeFormLayoutElementBackgroundStyle`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-freeformlayoutelementbackgroundstyle.html}
 */
export type FreeFormLayoutElementBackgroundStyle = {
  /**
   * @pattern `^#[A-F0-9]{6}(?:[A-F0-9]{2})?$`
   */
  Color?: string;
  Visibility?: Visibility;
};
/**
 * Type definition for `AWS::QuickSight::Template.FreeFormLayoutElementBorderStyle`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-freeformlayoutelementborderstyle.html}
 */
export type FreeFormLayoutElementBorderStyle = {
  /**
   * @pattern `^#[A-F0-9]{6}(?:[A-F0-9]{2})?$`
   */
  Color?: string;
  Visibility?: Visibility;
};
/**
 * Type definition for `AWS::QuickSight::Template.FreeFormLayoutScreenCanvasSizeOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-freeformlayoutscreencanvassizeoptions.html}
 */
export type FreeFormLayoutScreenCanvasSizeOptions = {
  /**
   * String based length that is composed of value and unit in px
   */
  OptimizedViewPortWidth: string;
};
/**
 * Type definition for `AWS::QuickSight::Template.FreeFormSectionLayoutConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-freeformsectionlayoutconfiguration.html}
 */
export type FreeFormSectionLayoutConfiguration = {
  /**
   * @minLength `0`
   * @maxLength `430`
   */
  Elements: FreeFormLayoutElement[];
};
/**
 * Type definition for `AWS::QuickSight::Template.FunnelChartAggregatedFieldWells`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-funnelchartaggregatedfieldwells.html}
 */
export type FunnelChartAggregatedFieldWells = {
  /**
   * @minLength `0`
   * @maxLength `1`
   */
  Category?: DimensionField[];
  /**
   * @minLength `0`
   * @maxLength `1`
   */
  Values?: MeasureField[];
};
/**
 * Type definition for `AWS::QuickSight::Template.FunnelChartConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-funnelchartconfiguration.html}
 */
export type FunnelChartConfiguration = {
  CategoryLabelOptions?: ChartAxisLabelOptions;
  DataLabelOptions?: FunnelChartDataLabelOptions;
  FieldWells?: FunnelChartFieldWells;
  SortConfiguration?: FunnelChartSortConfiguration;
  Tooltip?: TooltipOptions;
  ValueLabelOptions?: ChartAxisLabelOptions;
  VisualPalette?: VisualPalette;
};
/**
 * Type definition for `AWS::QuickSight::Template.FunnelChartDataLabelOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-funnelchartdatalabeloptions.html}
 */
export type FunnelChartDataLabelOptions = {
  CategoryLabelVisibility?: Visibility;
  /**
   * @pattern `^#[A-F0-9]{6}$`
   */
  LabelColor?: string;
  LabelFontConfiguration?: FontConfiguration;
  MeasureDataLabelStyle?: FunnelChartMeasureDataLabelStyle;
  MeasureLabelVisibility?: Visibility;
  Position?: DataLabelPosition;
  Visibility?: Visibility;
};
/**
 * Type definition for `AWS::QuickSight::Template.FunnelChartFieldWells`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-funnelchartfieldwells.html}
 */
export type FunnelChartFieldWells = {
  FunnelChartAggregatedFieldWells?: FunnelChartAggregatedFieldWells;
};
/**
 * Type definition for `AWS::QuickSight::Template.FunnelChartMeasureDataLabelStyle`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-funnelchartmeasuredatalabelstyle.html}
 */
export type FunnelChartMeasureDataLabelStyle =
  | "VALUE_ONLY"
  | "PERCENTAGE_BY_FIRST_STAGE"
  | "PERCENTAGE_BY_PREVIOUS_STAGE"
  | "VALUE_AND_PERCENTAGE_BY_FIRST_STAGE"
  | "VALUE_AND_PERCENTAGE_BY_PREVIOUS_STAGE";
/**
 * Type definition for `AWS::QuickSight::Template.FunnelChartSortConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-funnelchartsortconfiguration.html}
 */
export type FunnelChartSortConfiguration = {
  CategoryItemsLimit?: ItemsLimitConfiguration;
  /**
   * @minLength `0`
   * @maxLength `100`
   */
  CategorySort?: FieldSortOptions[];
};
/**
 * Type definition for `AWS::QuickSight::Template.FunnelChartVisual`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-funnelchartvisual.html}
 */
export type FunnelChartVisual = {
  /**
   * @minLength `0`
   * @maxLength `10`
   */
  Actions?: VisualCustomAction[];
  ChartConfiguration?: FunnelChartConfiguration;
  /**
   * @minLength `0`
   * @maxLength `2`
   */
  ColumnHierarchies?: ColumnHierarchy[];
  Subtitle?: VisualSubtitleLabelOptions;
  Title?: VisualTitleLabelOptions;
  /**
   * @minLength `1`
   * @maxLength `512`
   * @pattern `^[\w\-]+$`
   */
  VisualId: string;
};
/**
 * Type definition for `AWS::QuickSight::Template.GaugeChartArcConditionalFormatting`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-gaugechartarcconditionalformatting.html}
 */
export type GaugeChartArcConditionalFormatting = {
  ForegroundColor?: ConditionalFormattingColor;
};
/**
 * Type definition for `AWS::QuickSight::Template.GaugeChartConditionalFormatting`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-gaugechartconditionalformatting.html}
 */
export type GaugeChartConditionalFormatting = {
  /**
   * @minLength `0`
   * @maxLength `100`
   */
  ConditionalFormattingOptions?: GaugeChartConditionalFormattingOption[];
};
/**
 * Type definition for `AWS::QuickSight::Template.GaugeChartConditionalFormattingOption`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-gaugechartconditionalformattingoption.html}
 */
export type GaugeChartConditionalFormattingOption = {
  Arc?: GaugeChartArcConditionalFormatting;
  PrimaryValue?: GaugeChartPrimaryValueConditionalFormatting;
};
/**
 * Type definition for `AWS::QuickSight::Template.GaugeChartConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-gaugechartconfiguration.html}
 */
export type GaugeChartConfiguration = {
  DataLabels?: DataLabelOptions;
  FieldWells?: GaugeChartFieldWells;
  GaugeChartOptions?: GaugeChartOptions;
  TooltipOptions?: TooltipOptions;
  VisualPalette?: VisualPalette;
};
/**
 * Type definition for `AWS::QuickSight::Template.GaugeChartFieldWells`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-gaugechartfieldwells.html}
 */
export type GaugeChartFieldWells = {
  /**
   * @minLength `0`
   * @maxLength `200`
   */
  TargetValues?: MeasureField[];
  /**
   * @minLength `0`
   * @maxLength `200`
   */
  Values?: MeasureField[];
};
/**
 * Type definition for `AWS::QuickSight::Template.GaugeChartOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-gaugechartoptions.html}
 */
export type GaugeChartOptions = {
  Arc?: ArcConfiguration;
  ArcAxis?: ArcAxisConfiguration;
  Comparison?: ComparisonConfiguration;
  PrimaryValueDisplayType?: PrimaryValueDisplayType;
  PrimaryValueFontConfiguration?: FontConfiguration;
};
/**
 * Type definition for `AWS::QuickSight::Template.GaugeChartPrimaryValueConditionalFormatting`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-gaugechartprimaryvalueconditionalformatting.html}
 */
export type GaugeChartPrimaryValueConditionalFormatting = {
  Icon?: ConditionalFormattingIcon;
  TextColor?: ConditionalFormattingColor;
};
/**
 * Type definition for `AWS::QuickSight::Template.GaugeChartVisual`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-gaugechartvisual.html}
 */
export type GaugeChartVisual = {
  /**
   * @minLength `0`
   * @maxLength `10`
   */
  Actions?: VisualCustomAction[];
  ChartConfiguration?: GaugeChartConfiguration;
  ConditionalFormatting?: GaugeChartConditionalFormatting;
  Subtitle?: VisualSubtitleLabelOptions;
  Title?: VisualTitleLabelOptions;
  /**
   * @minLength `1`
   * @maxLength `512`
   * @pattern `^[\w\-]+$`
   */
  VisualId: string;
};
/**
 * Type definition for `AWS::QuickSight::Template.GeospatialCoordinateBounds`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-geospatialcoordinatebounds.html}
 */
export type GeospatialCoordinateBounds = {
  /**
   * @min `-1800`
   * @max `1800`
   */
  East: number;
  /**
   * @min `-90`
   * @max `90`
   */
  North: number;
  /**
   * @min `-90`
   * @max `90`
   */
  South: number;
  /**
   * @min `-1800`
   * @max `1800`
   */
  West: number;
};
/**
 * Type definition for `AWS::QuickSight::Template.GeospatialHeatmapColorScale`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-geospatialheatmapcolorscale.html}
 */
export type GeospatialHeatmapColorScale = {
  /**
   * @minLength `2`
   * @maxLength `2`
   */
  Colors?: GeospatialHeatmapDataColor[];
};
/**
 * Type definition for `AWS::QuickSight::Template.GeospatialHeatmapConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-geospatialheatmapconfiguration.html}
 */
export type GeospatialHeatmapConfiguration = {
  HeatmapColor?: GeospatialHeatmapColorScale;
};
/**
 * Type definition for `AWS::QuickSight::Template.GeospatialHeatmapDataColor`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-geospatialheatmapdatacolor.html}
 */
export type GeospatialHeatmapDataColor = {
  /**
   * @pattern `^#[A-F0-9]{6}$`
   */
  Color: string;
};
/**
 * Type definition for `AWS::QuickSight::Template.GeospatialMapAggregatedFieldWells`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-geospatialmapaggregatedfieldwells.html}
 */
export type GeospatialMapAggregatedFieldWells = {
  /**
   * @minLength `0`
   * @maxLength `200`
   */
  Colors?: DimensionField[];
  /**
   * @minLength `0`
   * @maxLength `200`
   */
  Geospatial?: DimensionField[];
  /**
   * @minLength `0`
   * @maxLength `200`
   */
  Values?: MeasureField[];
};
/**
 * Type definition for `AWS::QuickSight::Template.GeospatialMapConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-geospatialmapconfiguration.html}
 */
export type GeospatialMapConfiguration = {
  FieldWells?: GeospatialMapFieldWells;
  Legend?: LegendOptions;
  MapStyleOptions?: GeospatialMapStyleOptions;
  PointStyleOptions?: GeospatialPointStyleOptions;
  Tooltip?: TooltipOptions;
  VisualPalette?: VisualPalette;
  WindowOptions?: GeospatialWindowOptions;
};
/**
 * Type definition for `AWS::QuickSight::Template.GeospatialMapFieldWells`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-geospatialmapfieldwells.html}
 */
export type GeospatialMapFieldWells = {
  GeospatialMapAggregatedFieldWells?: GeospatialMapAggregatedFieldWells;
};
/**
 * Type definition for `AWS::QuickSight::Template.GeospatialMapStyleOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-geospatialmapstyleoptions.html}
 */
export type GeospatialMapStyleOptions = {
  BaseMapStyle?: BaseMapStyleType;
};
/**
 * Type definition for `AWS::QuickSight::Template.GeospatialMapVisual`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-geospatialmapvisual.html}
 */
export type GeospatialMapVisual = {
  /**
   * @minLength `0`
   * @maxLength `10`
   */
  Actions?: VisualCustomAction[];
  ChartConfiguration?: GeospatialMapConfiguration;
  /**
   * @minLength `0`
   * @maxLength `2`
   */
  ColumnHierarchies?: ColumnHierarchy[];
  Subtitle?: VisualSubtitleLabelOptions;
  Title?: VisualTitleLabelOptions;
  /**
   * @minLength `1`
   * @maxLength `512`
   * @pattern `^[\w\-]+$`
   */
  VisualId: string;
};
/**
 * Type definition for `AWS::QuickSight::Template.GeospatialPointStyleOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-geospatialpointstyleoptions.html}
 */
export type GeospatialPointStyleOptions = {
  ClusterMarkerConfiguration?: ClusterMarkerConfiguration;
  HeatmapConfiguration?: GeospatialHeatmapConfiguration;
  SelectedPointStyle?: GeospatialSelectedPointStyle;
};
/**
 * Type definition for `AWS::QuickSight::Template.GeospatialSelectedPointStyle`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-geospatialselectedpointstyle.html}
 */
export type GeospatialSelectedPointStyle = "POINT" | "CLUSTER" | "HEATMAP";
/**
 * Type definition for `AWS::QuickSight::Template.GeospatialWindowOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-geospatialwindowoptions.html}
 */
export type GeospatialWindowOptions = {
  Bounds?: GeospatialCoordinateBounds;
  MapZoomMode?: MapZoomMode;
};
/**
 * Type definition for `AWS::QuickSight::Template.GlobalTableBorderOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-globaltableborderoptions.html}
 */
export type GlobalTableBorderOptions = {
  SideSpecificBorder?: TableSideBorderOptions;
  UniformBorder?: TableBorderOptions;
};
/**
 * Type definition for `AWS::QuickSight::Template.GradientColor`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-gradientcolor.html}
 */
export type GradientColor = {
  /**
   * @minLength `0`
   * @maxLength `100`
   */
  Stops?: GradientStop[];
};
/**
 * Type definition for `AWS::QuickSight::Template.GradientStop`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-gradientstop.html}
 */
export type GradientStop = {
  /**
   * @pattern `^#[A-F0-9]{6}$`
   */
  Color?: string;
  DataValue?: number;
  GradientOffset: number;
};
/**
 * Type definition for `AWS::QuickSight::Template.GridLayoutCanvasSizeOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-gridlayoutcanvassizeoptions.html}
 */
export type GridLayoutCanvasSizeOptions = {
  ScreenCanvasSizeOptions?: GridLayoutScreenCanvasSizeOptions;
};
/**
 * Type definition for `AWS::QuickSight::Template.GridLayoutConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-gridlayoutconfiguration.html}
 */
export type GridLayoutConfiguration = {
  CanvasSizeOptions?: GridLayoutCanvasSizeOptions;
  /**
   * @minLength `0`
   * @maxLength `430`
   */
  Elements: GridLayoutElement[];
};
/**
 * Type definition for `AWS::QuickSight::Template.GridLayoutElement`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-gridlayoutelement.html}
 */
export type GridLayoutElement = {
  /**
   * @min `0`
   * @max `35`
   */
  ColumnIndex?: number;
  /**
   * @min `1`
   * @max `36`
   */
  ColumnSpan: number;
  /**
   * @minLength `1`
   * @maxLength `512`
   * @pattern `^[\w\-]+$`
   */
  ElementId: string;
  ElementType: LayoutElementType;
  /**
   * @min `0`
   * @max `9009`
   */
  RowIndex?: number;
  /**
   * @min `1`
   * @max `21`
   */
  RowSpan: number;
};
/**
 * Type definition for `AWS::QuickSight::Template.GridLayoutScreenCanvasSizeOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-gridlayoutscreencanvassizeoptions.html}
 */
export type GridLayoutScreenCanvasSizeOptions = {
  /**
   * String based length that is composed of value and unit in px
   */
  OptimizedViewPortWidth?: string;
  ResizeOption: ResizeOption;
};
/**
 * Type definition for `AWS::QuickSight::Template.GrowthRateComputation`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-growthratecomputation.html}
 */
export type GrowthRateComputation = {
  /**
   * @minLength `1`
   * @maxLength `512`
   * @pattern `^[\w\-]+$`
   */
  ComputationId: string;
  Name?: string;
  /**
   * @min `2`
   * @max `52`
   */
  PeriodSize?: number;
  Time?: DimensionField;
  Value?: MeasureField;
};
/**
 * Type definition for `AWS::QuickSight::Template.HeaderFooterSectionConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-headerfootersectionconfiguration.html}
 */
export type HeaderFooterSectionConfiguration = {
  Layout: SectionLayoutConfiguration;
  /**
   * @minLength `1`
   * @maxLength `512`
   * @pattern `^[\w\-]+$`
   */
  SectionId: string;
  Style?: SectionStyle;
};
/**
 * Type definition for `AWS::QuickSight::Template.HeatMapAggregatedFieldWells`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-heatmapaggregatedfieldwells.html}
 */
export type HeatMapAggregatedFieldWells = {
  /**
   * @minLength `0`
   * @maxLength `1`
   */
  Columns?: DimensionField[];
  /**
   * @minLength `0`
   * @maxLength `1`
   */
  Rows?: DimensionField[];
  /**
   * @minLength `0`
   * @maxLength `1`
   */
  Values?: MeasureField[];
};
/**
 * Type definition for `AWS::QuickSight::Template.HeatMapConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-heatmapconfiguration.html}
 */
export type HeatMapConfiguration = {
  ColorScale?: ColorScale;
  ColumnLabelOptions?: ChartAxisLabelOptions;
  DataLabels?: DataLabelOptions;
  FieldWells?: HeatMapFieldWells;
  Legend?: LegendOptions;
  RowLabelOptions?: ChartAxisLabelOptions;
  SortConfiguration?: HeatMapSortConfiguration;
  Tooltip?: TooltipOptions;
};
/**
 * Type definition for `AWS::QuickSight::Template.HeatMapFieldWells`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-heatmapfieldwells.html}
 */
export type HeatMapFieldWells = {
  HeatMapAggregatedFieldWells?: HeatMapAggregatedFieldWells;
};
/**
 * Type definition for `AWS::QuickSight::Template.HeatMapSortConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-heatmapsortconfiguration.html}
 */
export type HeatMapSortConfiguration = {
  HeatMapColumnItemsLimitConfiguration?: ItemsLimitConfiguration;
  /**
   * @minLength `0`
   * @maxLength `100`
   */
  HeatMapColumnSort?: FieldSortOptions[];
  HeatMapRowItemsLimitConfiguration?: ItemsLimitConfiguration;
  /**
   * @minLength `0`
   * @maxLength `100`
   */
  HeatMapRowSort?: FieldSortOptions[];
};
/**
 * Type definition for `AWS::QuickSight::Template.HeatMapVisual`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-heatmapvisual.html}
 */
export type HeatMapVisual = {
  /**
   * @minLength `0`
   * @maxLength `10`
   */
  Actions?: VisualCustomAction[];
  ChartConfiguration?: HeatMapConfiguration;
  /**
   * @minLength `0`
   * @maxLength `2`
   */
  ColumnHierarchies?: ColumnHierarchy[];
  Subtitle?: VisualSubtitleLabelOptions;
  Title?: VisualTitleLabelOptions;
  /**
   * @minLength `1`
   * @maxLength `512`
   * @pattern `^[\w\-]+$`
   */
  VisualId: string;
};
/**
 * Type definition for `AWS::QuickSight::Template.HistogramAggregatedFieldWells`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-histogramaggregatedfieldwells.html}
 */
export type HistogramAggregatedFieldWells = {
  /**
   * @minLength `0`
   * @maxLength `1`
   */
  Values?: MeasureField[];
};
/**
 * Type definition for `AWS::QuickSight::Template.HistogramBinOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-histogrambinoptions.html}
 */
export type HistogramBinOptions = {
  BinCount?: BinCountOptions;
  BinWidth?: BinWidthOptions;
  SelectedBinType?: HistogramBinType;
  StartValue?: number;
};
/**
 * Type definition for `AWS::QuickSight::Template.HistogramBinType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-histogrambintype.html}
 */
export type HistogramBinType = "BIN_COUNT" | "BIN_WIDTH";
/**
 * Type definition for `AWS::QuickSight::Template.HistogramConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-histogramconfiguration.html}
 */
export type HistogramConfiguration = {
  BinOptions?: HistogramBinOptions;
  DataLabels?: DataLabelOptions;
  FieldWells?: HistogramFieldWells;
  Tooltip?: TooltipOptions;
  VisualPalette?: VisualPalette;
  XAxisDisplayOptions?: AxisDisplayOptions;
  XAxisLabelOptions?: ChartAxisLabelOptions;
  YAxisDisplayOptions?: AxisDisplayOptions;
};
/**
 * Type definition for `AWS::QuickSight::Template.HistogramFieldWells`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-histogramfieldwells.html}
 */
export type HistogramFieldWells = {
  HistogramAggregatedFieldWells?: HistogramAggregatedFieldWells;
};
/**
 * Type definition for `AWS::QuickSight::Template.HistogramVisual`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-histogramvisual.html}
 */
export type HistogramVisual = {
  /**
   * @minLength `0`
   * @maxLength `10`
   */
  Actions?: VisualCustomAction[];
  ChartConfiguration?: HistogramConfiguration;
  Subtitle?: VisualSubtitleLabelOptions;
  Title?: VisualTitleLabelOptions;
  /**
   * @minLength `1`
   * @maxLength `512`
   * @pattern `^[\w\-]+$`
   */
  VisualId: string;
};
/**
 * Type definition for `AWS::QuickSight::Template.HorizontalTextAlignment`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-horizontaltextalignment.html}
 */
export type HorizontalTextAlignment = "LEFT" | "CENTER" | "RIGHT" | "AUTO";
/**
 * Type definition for `AWS::QuickSight::Template.Icon`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-icon.html}
 */
export type Icon =
  | "CARET_UP"
  | "CARET_DOWN"
  | "PLUS"
  | "MINUS"
  | "ARROW_UP"
  | "ARROW_DOWN"
  | "ARROW_LEFT"
  | "ARROW_UP_LEFT"
  | "ARROW_DOWN_LEFT"
  | "ARROW_RIGHT"
  | "ARROW_UP_RIGHT"
  | "ARROW_DOWN_RIGHT"
  | "FACE_UP"
  | "FACE_DOWN"
  | "FACE_FLAT"
  | "ONE_BAR"
  | "TWO_BAR"
  | "THREE_BAR"
  | "CIRCLE"
  | "TRIANGLE"
  | "SQUARE"
  | "FLAG"
  | "THUMBS_UP"
  | "THUMBS_DOWN"
  | "CHECKMARK"
  | "X";
/**
 * Type definition for `AWS::QuickSight::Template.InnerFilter`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-innerfilter.html}
 */
export type InnerFilter = {
  CategoryInnerFilter?: CategoryInnerFilter;
};
/**
 * Type definition for `AWS::QuickSight::Template.InsightConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-insightconfiguration.html}
 */
export type InsightConfiguration = {
  /**
   * @minLength `0`
   * @maxLength `100`
   */
  Computations?: Computation[];
  CustomNarrative?: CustomNarrativeOptions;
};
/**
 * Type definition for `AWS::QuickSight::Template.InsightVisual`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-insightvisual.html}
 */
export type InsightVisual = {
  /**
   * @minLength `0`
   * @maxLength `10`
   */
  Actions?: VisualCustomAction[];
  /**
   * @minLength `1`
   * @maxLength `2048`
   */
  DataSetIdentifier: string;
  InsightConfiguration?: InsightConfiguration;
  Subtitle?: VisualSubtitleLabelOptions;
  Title?: VisualTitleLabelOptions;
  /**
   * @minLength `1`
   * @maxLength `512`
   * @pattern `^[\w\-]+$`
   */
  VisualId: string;
};
/**
 * Type definition for `AWS::QuickSight::Template.IntegerDefaultValues`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-integerdefaultvalues.html}
 */
export type IntegerDefaultValues = {
  DynamicValue?: DynamicDefaultValue;
  /**
   * @minLength `0`
   * @maxLength `50000`
   */
  StaticValues?: number[];
};
/**
 * Type definition for `AWS::QuickSight::Template.IntegerParameterDeclaration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-integerparameterdeclaration.html}
 */
export type IntegerParameterDeclaration = {
  DefaultValues?: IntegerDefaultValues;
  /**
   * @minLength `0`
   * @maxLength `150`
   */
  MappedDataSetParameters?: MappedDataSetParameter[];
  /**
   * @minLength `1`
   * @maxLength `2048`
   * @pattern `^[a-zA-Z0-9]+$`
   */
  Name: string;
  ParameterValueType: ParameterValueType;
  ValueWhenUnset?: IntegerValueWhenUnsetConfiguration;
};
/**
 * Type definition for `AWS::QuickSight::Template.IntegerValueWhenUnsetConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-integervaluewhenunsetconfiguration.html}
 */
export type IntegerValueWhenUnsetConfiguration = {
  CustomValue?: number;
  ValueWhenUnsetOption?: ValueWhenUnsetOption;
};
/**
 * Type definition for `AWS::QuickSight::Template.ItemsLimitConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-itemslimitconfiguration.html}
 */
export type ItemsLimitConfiguration = {
  ItemsLimit?: number;
  OtherCategories?: OtherCategories;
};
/**
 * Type definition for `AWS::QuickSight::Template.KPIActualValueConditionalFormatting`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-kpiactualvalueconditionalformatting.html}
 */
export type KPIActualValueConditionalFormatting = {
  Icon?: ConditionalFormattingIcon;
  TextColor?: ConditionalFormattingColor;
};
/**
 * Type definition for `AWS::QuickSight::Template.KPIComparisonValueConditionalFormatting`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-kpicomparisonvalueconditionalformatting.html}
 */
export type KPIComparisonValueConditionalFormatting = {
  Icon?: ConditionalFormattingIcon;
  TextColor?: ConditionalFormattingColor;
};
/**
 * Type definition for `AWS::QuickSight::Template.KPIConditionalFormatting`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-kpiconditionalformatting.html}
 */
export type KPIConditionalFormatting = {
  /**
   * @minLength `0`
   * @maxLength `100`
   */
  ConditionalFormattingOptions?: KPIConditionalFormattingOption[];
};
/**
 * Type definition for `AWS::QuickSight::Template.KPIConditionalFormattingOption`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-kpiconditionalformattingoption.html}
 */
export type KPIConditionalFormattingOption = {
  ActualValue?: KPIActualValueConditionalFormatting;
  ComparisonValue?: KPIComparisonValueConditionalFormatting;
  PrimaryValue?: KPIPrimaryValueConditionalFormatting;
  ProgressBar?: KPIProgressBarConditionalFormatting;
};
/**
 * Type definition for `AWS::QuickSight::Template.KPIConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-kpiconfiguration.html}
 */
export type KPIConfiguration = {
  FieldWells?: KPIFieldWells;
  KPIOptions?: KPIOptions;
  SortConfiguration?: KPISortConfiguration;
};
/**
 * Type definition for `AWS::QuickSight::Template.KPIFieldWells`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-kpifieldwells.html}
 */
export type KPIFieldWells = {
  /**
   * @minLength `0`
   * @maxLength `200`
   */
  TargetValues?: MeasureField[];
  /**
   * @minLength `0`
   * @maxLength `200`
   */
  TrendGroups?: DimensionField[];
  /**
   * @minLength `0`
   * @maxLength `200`
   */
  Values?: MeasureField[];
};
/**
 * Type definition for `AWS::QuickSight::Template.KPIOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-kpioptions.html}
 */
export type KPIOptions = {
  Comparison?: ComparisonConfiguration;
  PrimaryValueDisplayType?: PrimaryValueDisplayType;
  PrimaryValueFontConfiguration?: FontConfiguration;
  ProgressBar?: ProgressBarOptions;
  SecondaryValue?: SecondaryValueOptions;
  SecondaryValueFontConfiguration?: FontConfiguration;
  Sparkline?: KPISparklineOptions;
  TrendArrows?: TrendArrowOptions;
  VisualLayoutOptions?: KPIVisualLayoutOptions;
};
/**
 * Type definition for `AWS::QuickSight::Template.KPIPrimaryValueConditionalFormatting`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-kpiprimaryvalueconditionalformatting.html}
 */
export type KPIPrimaryValueConditionalFormatting = {
  Icon?: ConditionalFormattingIcon;
  TextColor?: ConditionalFormattingColor;
};
/**
 * Type definition for `AWS::QuickSight::Template.KPIProgressBarConditionalFormatting`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-kpiprogressbarconditionalformatting.html}
 */
export type KPIProgressBarConditionalFormatting = {
  ForegroundColor?: ConditionalFormattingColor;
};
/**
 * Type definition for `AWS::QuickSight::Template.KPISortConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-kpisortconfiguration.html}
 */
export type KPISortConfiguration = {
  /**
   * @minLength `0`
   * @maxLength `100`
   */
  TrendGroupSort?: FieldSortOptions[];
};
/**
 * Type definition for `AWS::QuickSight::Template.KPISparklineOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-kpisparklineoptions.html}
 */
export type KPISparklineOptions = {
  /**
   * @pattern `^#[A-F0-9]{6}$`
   */
  Color?: string;
  TooltipVisibility?: Visibility;
  Type: KPISparklineType;
  Visibility?: Visibility;
};
/**
 * Type definition for `AWS::QuickSight::Template.KPISparklineType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-kpisparklinetype.html}
 */
export type KPISparklineType = "LINE" | "AREA";
/**
 * Type definition for `AWS::QuickSight::Template.KPIVisual`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-kpivisual.html}
 */
export type KPIVisual = {
  /**
   * @minLength `0`
   * @maxLength `10`
   */
  Actions?: VisualCustomAction[];
  ChartConfiguration?: KPIConfiguration;
  /**
   * @minLength `0`
   * @maxLength `2`
   */
  ColumnHierarchies?: ColumnHierarchy[];
  ConditionalFormatting?: KPIConditionalFormatting;
  Subtitle?: VisualSubtitleLabelOptions;
  Title?: VisualTitleLabelOptions;
  /**
   * @minLength `1`
   * @maxLength `512`
   * @pattern `^[\w\-]+$`
   */
  VisualId: string;
};
/**
 * Type definition for `AWS::QuickSight::Template.KPIVisualLayoutOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-kpivisuallayoutoptions.html}
 */
export type KPIVisualLayoutOptions = {
  StandardLayout?: KPIVisualStandardLayout;
};
/**
 * Type definition for `AWS::QuickSight::Template.KPIVisualStandardLayout`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-kpivisualstandardlayout.html}
 */
export type KPIVisualStandardLayout = {
  Type: KPIVisualStandardLayoutType;
};
/**
 * Type definition for `AWS::QuickSight::Template.KPIVisualStandardLayoutType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-kpivisualstandardlayouttype.html}
 */
export type KPIVisualStandardLayoutType = "CLASSIC" | "VERTICAL";
/**
 * Type definition for `AWS::QuickSight::Template.LabelOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-labeloptions.html}
 */
export type LabelOptions = {
  CustomLabel?: string;
  FontConfiguration?: FontConfiguration;
  Visibility?: Visibility;
};
/**
 * Type definition for `AWS::QuickSight::Template.Layout`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-layout.html}
 */
export type Layout = {
  Configuration: LayoutConfiguration;
};
/**
 * Type definition for `AWS::QuickSight::Template.LayoutConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-layoutconfiguration.html}
 */
export type LayoutConfiguration = {
  FreeFormLayout?: FreeFormLayoutConfiguration;
  GridLayout?: GridLayoutConfiguration;
  SectionBasedLayout?: SectionBasedLayoutConfiguration;
};
/**
 * Type definition for `AWS::QuickSight::Template.LayoutElementType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-layoutelementtype.html}
 */
export type LayoutElementType =
  | "VISUAL"
  | "FILTER_CONTROL"
  | "PARAMETER_CONTROL"
  | "TEXT_BOX";
/**
 * Type definition for `AWS::QuickSight::Template.LegendOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-legendoptions.html}
 */
export type LegendOptions = {
  /**
   * String based length that is composed of value and unit in px
   */
  Height?: string;
  Position?: LegendPosition;
  Title?: LabelOptions;
  Visibility?: Visibility;
  /**
   * String based length that is composed of value and unit in px
   */
  Width?: string;
};
/**
 * Type definition for `AWS::QuickSight::Template.LegendPosition`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-legendposition.html}
 */
export type LegendPosition = "AUTO" | "RIGHT" | "BOTTOM" | "TOP";
/**
 * Type definition for `AWS::QuickSight::Template.LineChartAggregatedFieldWells`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-linechartaggregatedfieldwells.html}
 */
export type LineChartAggregatedFieldWells = {
  /**
   * @minLength `0`
   * @maxLength `200`
   */
  Category?: DimensionField[];
  /**
   * @minLength `0`
   * @maxLength `200`
   */
  Colors?: DimensionField[];
  /**
   * @minLength `0`
   * @maxLength `1`
   */
  SmallMultiples?: DimensionField[];
  /**
   * @minLength `0`
   * @maxLength `200`
   */
  Values?: MeasureField[];
};
/**
 * Type definition for `AWS::QuickSight::Template.LineChartConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-linechartconfiguration.html}
 */
export type LineChartConfiguration = {
  /**
   * @minLength `1`
   * @maxLength `200`
   */
  ContributionAnalysisDefaults?: ContributionAnalysisDefault[];
  DataLabels?: DataLabelOptions;
  DefaultSeriesSettings?: LineChartDefaultSeriesSettings;
  FieldWells?: LineChartFieldWells;
  /**
   * @minLength `0`
   * @maxLength `10`
   */
  ForecastConfigurations?: ForecastConfiguration[];
  Legend?: LegendOptions;
  PrimaryYAxisDisplayOptions?: LineSeriesAxisDisplayOptions;
  PrimaryYAxisLabelOptions?: ChartAxisLabelOptions;
  /**
   * @minLength `0`
   * @maxLength `20`
   */
  ReferenceLines?: ReferenceLine[];
  SecondaryYAxisDisplayOptions?: LineSeriesAxisDisplayOptions;
  SecondaryYAxisLabelOptions?: ChartAxisLabelOptions;
  /**
   * @minLength `0`
   * @maxLength `2000`
   */
  Series?: SeriesItem[];
  SingleAxisOptions?: SingleAxisOptions;
  SmallMultiplesOptions?: SmallMultiplesOptions;
  SortConfiguration?: LineChartSortConfiguration;
  Tooltip?: TooltipOptions;
  Type?: LineChartType;
  VisualPalette?: VisualPalette;
  XAxisDisplayOptions?: AxisDisplayOptions;
  XAxisLabelOptions?: ChartAxisLabelOptions;
};
/**
 * Type definition for `AWS::QuickSight::Template.LineChartDefaultSeriesSettings`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-linechartdefaultseriessettings.html}
 */
export type LineChartDefaultSeriesSettings = {
  AxisBinding?: AxisBinding;
  LineStyleSettings?: LineChartLineStyleSettings;
  MarkerStyleSettings?: LineChartMarkerStyleSettings;
};
/**
 * Type definition for `AWS::QuickSight::Template.LineChartFieldWells`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-linechartfieldwells.html}
 */
export type LineChartFieldWells = {
  LineChartAggregatedFieldWells?: LineChartAggregatedFieldWells;
};
/**
 * Type definition for `AWS::QuickSight::Template.LineChartLineStyle`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-linechartlinestyle.html}
 */
export type LineChartLineStyle = "SOLID" | "DOTTED" | "DASHED";
/**
 * Type definition for `AWS::QuickSight::Template.LineChartLineStyleSettings`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-linechartlinestylesettings.html}
 */
export type LineChartLineStyleSettings = {
  LineInterpolation?: LineInterpolation;
  LineStyle?: LineChartLineStyle;
  LineVisibility?: Visibility;
  /**
   * String based length that is composed of value and unit in px
   */
  LineWidth?: string;
};
/**
 * Type definition for `AWS::QuickSight::Template.LineChartMarkerShape`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-linechartmarkershape.html}
 */
export type LineChartMarkerShape =
  | "CIRCLE"
  | "TRIANGLE"
  | "SQUARE"
  | "DIAMOND"
  | "ROUNDED_SQUARE";
/**
 * Type definition for `AWS::QuickSight::Template.LineChartMarkerStyleSettings`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-linechartmarkerstylesettings.html}
 */
export type LineChartMarkerStyleSettings = {
  /**
   * @pattern `^#[A-F0-9]{6}$`
   */
  MarkerColor?: string;
  MarkerShape?: LineChartMarkerShape;
  /**
   * String based length that is composed of value and unit in px
   */
  MarkerSize?: string;
  MarkerVisibility?: Visibility;
};
/**
 * Type definition for `AWS::QuickSight::Template.LineChartSeriesSettings`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-linechartseriessettings.html}
 */
export type LineChartSeriesSettings = {
  LineStyleSettings?: LineChartLineStyleSettings;
  MarkerStyleSettings?: LineChartMarkerStyleSettings;
};
/**
 * Type definition for `AWS::QuickSight::Template.LineChartSortConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-linechartsortconfiguration.html}
 */
export type LineChartSortConfiguration = {
  CategoryItemsLimitConfiguration?: ItemsLimitConfiguration;
  /**
   * @minLength `0`
   * @maxLength `100`
   */
  CategorySort?: FieldSortOptions[];
  ColorItemsLimitConfiguration?: ItemsLimitConfiguration;
  SmallMultiplesLimitConfiguration?: ItemsLimitConfiguration;
  /**
   * @minLength `0`
   * @maxLength `100`
   */
  SmallMultiplesSort?: FieldSortOptions[];
};
/**
 * Type definition for `AWS::QuickSight::Template.LineChartType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-linecharttype.html}
 */
export type LineChartType = "LINE" | "AREA" | "STACKED_AREA";
/**
 * Type definition for `AWS::QuickSight::Template.LineChartVisual`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-linechartvisual.html}
 */
export type LineChartVisual = {
  /**
   * @minLength `0`
   * @maxLength `10`
   */
  Actions?: VisualCustomAction[];
  ChartConfiguration?: LineChartConfiguration;
  /**
   * @minLength `0`
   * @maxLength `2`
   */
  ColumnHierarchies?: ColumnHierarchy[];
  Subtitle?: VisualSubtitleLabelOptions;
  Title?: VisualTitleLabelOptions;
  /**
   * @minLength `1`
   * @maxLength `512`
   * @pattern `^[\w\-]+$`
   */
  VisualId: string;
};
/**
 * Type definition for `AWS::QuickSight::Template.LineInterpolation`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-lineinterpolation.html}
 */
export type LineInterpolation = "LINEAR" | "SMOOTH" | "STEPPED";
/**
 * Type definition for `AWS::QuickSight::Template.LineSeriesAxisDisplayOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-lineseriesaxisdisplayoptions.html}
 */
export type LineSeriesAxisDisplayOptions = {
  AxisOptions?: AxisDisplayOptions;
  /**
   * @minLength `0`
   * @maxLength `100`
   */
  MissingDataConfigurations?: MissingDataConfiguration[];
};
/**
 * Type definition for `AWS::QuickSight::Template.ListControlDisplayOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-listcontroldisplayoptions.html}
 */
export type ListControlDisplayOptions = {
  InfoIconLabelOptions?: SheetControlInfoIconLabelOptions;
  SearchOptions?: ListControlSearchOptions;
  SelectAllOptions?: ListControlSelectAllOptions;
  TitleOptions?: LabelOptions;
};
/**
 * Type definition for `AWS::QuickSight::Template.ListControlSearchOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-listcontrolsearchoptions.html}
 */
export type ListControlSearchOptions = {
  Visibility?: Visibility;
};
/**
 * Type definition for `AWS::QuickSight::Template.ListControlSelectAllOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-listcontrolselectalloptions.html}
 */
export type ListControlSelectAllOptions = {
  Visibility?: Visibility;
};
/**
 * Type definition for `AWS::QuickSight::Template.LoadingAnimation`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-loadinganimation.html}
 */
export type LoadingAnimation = {
  Visibility?: Visibility;
};
/**
 * Type definition for `AWS::QuickSight::Template.LocalNavigationConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-localnavigationconfiguration.html}
 */
export type LocalNavigationConfiguration = {
  /**
   * @minLength `1`
   * @maxLength `512`
   * @pattern `^[\w\-]+$`
   */
  TargetSheetId: string;
};
/**
 * Type definition for `AWS::QuickSight::Template.LongFormatText`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-longformattext.html}
 */
export type LongFormatText = {
  /**
   * @minLength `1`
   * @maxLength `1024`
   */
  PlainText?: string;
  /**
   * @minLength `1`
   * @maxLength `2048`
   */
  RichText?: string;
};
/**
 * Type definition for `AWS::QuickSight::Template.MappedDataSetParameter`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-mappeddatasetparameter.html}
 */
export type MappedDataSetParameter = {
  /**
   * @minLength `1`
   * @maxLength `2048`
   */
  DataSetIdentifier: string;
  /**
   * @minLength `1`
   * @maxLength `2048`
   * @pattern `^[a-zA-Z0-9]+$`
   */
  DataSetParameterName: string;
};
/**
 * Type definition for `AWS::QuickSight::Template.MapZoomMode`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-mapzoommode.html}
 */
export type MapZoomMode = "AUTO" | "MANUAL";
/**
 * Type definition for `AWS::QuickSight::Template.MaximumLabelType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-maximumlabeltype.html}
 */
export type MaximumLabelType = {
  Visibility?: Visibility;
};
/**
 * Type definition for `AWS::QuickSight::Template.MaximumMinimumComputation`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-maximumminimumcomputation.html}
 */
export type MaximumMinimumComputation = {
  /**
   * @minLength `1`
   * @maxLength `512`
   * @pattern `^[\w\-]+$`
   */
  ComputationId: string;
  Name?: string;
  Time?: DimensionField;
  Type: MaximumMinimumComputationType;
  Value?: MeasureField;
};
/**
 * Type definition for `AWS::QuickSight::Template.MaximumMinimumComputationType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-maximumminimumcomputationtype.html}
 */
export type MaximumMinimumComputationType = "MAXIMUM" | "MINIMUM";
/**
 * Type definition for `AWS::QuickSight::Template.MeasureField`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-measurefield.html}
 */
export type MeasureField = {
  CalculatedMeasureField?: CalculatedMeasureField;
  CategoricalMeasureField?: CategoricalMeasureField;
  DateMeasureField?: DateMeasureField;
  NumericalMeasureField?: NumericalMeasureField;
};
/**
 * Type definition for `AWS::QuickSight::Template.MetricComparisonComputation`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-metriccomparisoncomputation.html}
 */
export type MetricComparisonComputation = {
  /**
   * @minLength `1`
   * @maxLength `512`
   * @pattern `^[\w\-]+$`
   */
  ComputationId: string;
  FromValue?: MeasureField;
  Name?: string;
  TargetValue?: MeasureField;
  Time?: DimensionField;
};
/**
 * Type definition for `AWS::QuickSight::Template.MinimumLabelType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-minimumlabeltype.html}
 */
export type MinimumLabelType = {
  Visibility?: Visibility;
};
/**
 * Type definition for `AWS::QuickSight::Template.MissingDataConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-missingdataconfiguration.html}
 */
export type MissingDataConfiguration = {
  TreatmentOption?: MissingDataTreatmentOption;
};
/**
 * Type definition for `AWS::QuickSight::Template.MissingDataTreatmentOption`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-missingdatatreatmentoption.html}
 */
export type MissingDataTreatmentOption =
  | "INTERPOLATE"
  | "SHOW_AS_ZERO"
  | "SHOW_AS_BLANK";
/**
 * Type definition for `AWS::QuickSight::Template.NegativeValueConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-negativevalueconfiguration.html}
 */
export type NegativeValueConfiguration = {
  DisplayMode: NegativeValueDisplayMode;
};
/**
 * Type definition for `AWS::QuickSight::Template.NegativeValueDisplayMode`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-negativevaluedisplaymode.html}
 */
export type NegativeValueDisplayMode = "POSITIVE" | "NEGATIVE";
/**
 * Type definition for `AWS::QuickSight::Template.NestedFilter`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-nestedfilter.html}
 */
export type NestedFilter = {
  Column: ColumnIdentifier;
  /**
   * @minLength `1`
   * @maxLength `512`
   * @pattern `^[\w\-]+$`
   */
  FilterId: string;
  IncludeInnerSet: boolean;
  InnerFilter: InnerFilter;
};
/**
 * Type definition for `AWS::QuickSight::Template.NullValueFormatConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-nullvalueformatconfiguration.html}
 */
export type NullValueFormatConfiguration = {
  /**
   * @minLength `1`
   * @maxLength `128`
   */
  NullString: string;
};
/**
 * Type definition for `AWS::QuickSight::Template.NumberDisplayFormatConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-numberdisplayformatconfiguration.html}
 */
export type NumberDisplayFormatConfiguration = {
  DecimalPlacesConfiguration?: DecimalPlacesConfiguration;
  NegativeValueConfiguration?: NegativeValueConfiguration;
  NullValueFormatConfiguration?: NullValueFormatConfiguration;
  NumberScale?: NumberScale;
  /**
   * @minLength `1`
   * @maxLength `128`
   */
  Prefix?: string;
  SeparatorConfiguration?: NumericSeparatorConfiguration;
  /**
   * @minLength `1`
   * @maxLength `128`
   */
  Suffix?: string;
};
/**
 * Type definition for `AWS::QuickSight::Template.NumberFormatConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-numberformatconfiguration.html}
 */
export type NumberFormatConfiguration = {
  FormatConfiguration?: NumericFormatConfiguration;
};
/**
 * Type definition for `AWS::QuickSight::Template.NumberScale`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-numberscale.html}
 */
export type NumberScale =
  | "NONE"
  | "AUTO"
  | "THOUSANDS"
  | "MILLIONS"
  | "BILLIONS"
  | "TRILLIONS";
/**
 * Type definition for `AWS::QuickSight::Template.NumericalAggregationFunction`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-numericalaggregationfunction.html}
 */
export type NumericalAggregationFunction = {
  PercentileAggregation?: PercentileAggregation;
  SimpleNumericalAggregation?: SimpleNumericalAggregationFunction;
};
/**
 * Type definition for `AWS::QuickSight::Template.NumericalDimensionField`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-numericaldimensionfield.html}
 */
export type NumericalDimensionField = {
  Column: ColumnIdentifier;
  /**
   * @minLength `1`
   * @maxLength `512`
   */
  FieldId: string;
  FormatConfiguration?: NumberFormatConfiguration;
  /**
   * @minLength `1`
   * @maxLength `512`
   */
  HierarchyId?: string;
};
/**
 * Type definition for `AWS::QuickSight::Template.NumericalMeasureField`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-numericalmeasurefield.html}
 */
export type NumericalMeasureField = {
  AggregationFunction?: NumericalAggregationFunction;
  Column: ColumnIdentifier;
  /**
   * @minLength `1`
   * @maxLength `512`
   */
  FieldId: string;
  FormatConfiguration?: NumberFormatConfiguration;
};
/**
 * Type definition for `AWS::QuickSight::Template.NumericAxisOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-numericaxisoptions.html}
 */
export type NumericAxisOptions = {
  Range?: AxisDisplayRange;
  Scale?: AxisScale;
};
/**
 * Type definition for `AWS::QuickSight::Template.NumericEqualityDrillDownFilter`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-numericequalitydrilldownfilter.html}
 */
export type NumericEqualityDrillDownFilter = {
  Column: ColumnIdentifier;
  Value: number;
};
/**
 * Type definition for `AWS::QuickSight::Template.NumericEqualityFilter`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-numericequalityfilter.html}
 */
export type NumericEqualityFilter = {
  AggregationFunction?: AggregationFunction;
  Column: ColumnIdentifier;
  DefaultFilterControlConfiguration?: DefaultFilterControlConfiguration;
  /**
   * @minLength `1`
   * @maxLength `512`
   * @pattern `^[\w\-]+$`
   */
  FilterId: string;
  MatchOperator: NumericEqualityMatchOperator;
  NullOption: FilterNullOption;
  /**
   * @minLength `1`
   * @maxLength `2048`
   * @pattern `^[a-zA-Z0-9]+$`
   */
  ParameterName?: string;
  SelectAllOptions?: NumericFilterSelectAllOptions;
  Value?: number;
};
/**
 * Type definition for `AWS::QuickSight::Template.NumericEqualityMatchOperator`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-numericequalitymatchoperator.html}
 */
export type NumericEqualityMatchOperator = "EQUALS" | "DOES_NOT_EQUAL";
/**
 * Type definition for `AWS::QuickSight::Template.NumericFilterSelectAllOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-numericfilterselectalloptions.html}
 */
export type NumericFilterSelectAllOptions = "FILTER_ALL_VALUES";
/**
 * Type definition for `AWS::QuickSight::Template.NumericFormatConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-numericformatconfiguration.html}
 */
export type NumericFormatConfiguration = {
  CurrencyDisplayFormatConfiguration?: CurrencyDisplayFormatConfiguration;
  NumberDisplayFormatConfiguration?: NumberDisplayFormatConfiguration;
  PercentageDisplayFormatConfiguration?: PercentageDisplayFormatConfiguration;
};
/**
 * Type definition for `AWS::QuickSight::Template.NumericRangeFilter`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-numericrangefilter.html}
 */
export type NumericRangeFilter = {
  AggregationFunction?: AggregationFunction;
  Column: ColumnIdentifier;
  DefaultFilterControlConfiguration?: DefaultFilterControlConfiguration;
  /**
   * @minLength `1`
   * @maxLength `512`
   * @pattern `^[\w\-]+$`
   */
  FilterId: string;
  IncludeMaximum?: boolean;
  IncludeMinimum?: boolean;
  NullOption: FilterNullOption;
  RangeMaximum?: NumericRangeFilterValue;
  RangeMinimum?: NumericRangeFilterValue;
  SelectAllOptions?: NumericFilterSelectAllOptions;
};
/**
 * Type definition for `AWS::QuickSight::Template.NumericRangeFilterValue`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-numericrangefiltervalue.html}
 */
export type NumericRangeFilterValue = {
  /**
   * @minLength `1`
   * @maxLength `2048`
   * @pattern `^[a-zA-Z0-9]+$`
   */
  Parameter?: string;
  StaticValue?: number;
};
/**
 * Type definition for `AWS::QuickSight::Template.NumericSeparatorConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-numericseparatorconfiguration.html}
 */
export type NumericSeparatorConfiguration = {
  DecimalSeparator?: NumericSeparatorSymbol;
  ThousandsSeparator?: ThousandSeparatorOptions;
};
/**
 * Type definition for `AWS::QuickSight::Template.NumericSeparatorSymbol`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-numericseparatorsymbol.html}
 */
export type NumericSeparatorSymbol = "COMMA" | "DOT" | "SPACE";
/**
 * Type definition for `AWS::QuickSight::Template.OtherCategories`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-othercategories.html}
 */
export type OtherCategories = "INCLUDE" | "EXCLUDE";
/**
 * Type definition for `AWS::QuickSight::Template.PaginationConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-paginationconfiguration.html}
 */
export type PaginationConfiguration = {
  /**
   * @min `0`
   */
  PageNumber: number;
  PageSize: number;
};
/**
 * Type definition for `AWS::QuickSight::Template.PanelBorderStyle`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-panelborderstyle.html}
 */
export type PanelBorderStyle = "SOLID" | "DASHED" | "DOTTED";
/**
 * Type definition for `AWS::QuickSight::Template.PanelConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-panelconfiguration.html}
 */
export type PanelConfiguration = {
  /**
   * @pattern `^#[A-F0-9]{6}(?:[A-F0-9]{2})?$`
   */
  BackgroundColor?: string;
  BackgroundVisibility?: Visibility;
  /**
   * @pattern `^#[A-F0-9]{6}(?:[A-F0-9]{2})?$`
   */
  BorderColor?: string;
  BorderStyle?: PanelBorderStyle;
  /**
   * String based length that is composed of value and unit in px
   */
  BorderThickness?: string;
  BorderVisibility?: Visibility;
  /**
   * String based length that is composed of value and unit in px
   */
  GutterSpacing?: string;
  GutterVisibility?: Visibility;
  Title?: PanelTitleOptions;
};
/**
 * Type definition for `AWS::QuickSight::Template.PanelTitleOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-paneltitleoptions.html}
 */
export type PanelTitleOptions = {
  FontConfiguration?: FontConfiguration;
  HorizontalTextAlignment?: HorizontalTextAlignment;
  Visibility?: Visibility;
};
/**
 * Type definition for `AWS::QuickSight::Template.PaperOrientation`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-paperorientation.html}
 */
export type PaperOrientation = "PORTRAIT" | "LANDSCAPE";
/**
 * Type definition for `AWS::QuickSight::Template.PaperSize`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-papersize.html}
 */
export type PaperSize =
  | "US_LETTER"
  | "US_LEGAL"
  | "US_TABLOID_LEDGER"
  | "A0"
  | "A1"
  | "A2"
  | "A3"
  | "A4"
  | "A5"
  | "JIS_B4"
  | "JIS_B5";
/**
 * Type definition for `AWS::QuickSight::Template.ParameterControl`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-parametercontrol.html}
 */
export type ParameterControl = {
  DateTimePicker?: ParameterDateTimePickerControl;
  Dropdown?: ParameterDropDownControl;
  List?: ParameterListControl;
  Slider?: ParameterSliderControl;
  TextArea?: ParameterTextAreaControl;
  TextField?: ParameterTextFieldControl;
};
/**
 * Type definition for `AWS::QuickSight::Template.ParameterDateTimePickerControl`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-parameterdatetimepickercontrol.html}
 */
export type ParameterDateTimePickerControl = {
  DisplayOptions?: DateTimePickerControlDisplayOptions;
  /**
   * @minLength `1`
   * @maxLength `512`
   * @pattern `^[\w\-]+$`
   */
  ParameterControlId: string;
  /**
   * @minLength `1`
   * @maxLength `2048`
   * @pattern `^[a-zA-Z0-9]+$`
   */
  SourceParameterName: string;
  /**
   * @minLength `1`
   * @maxLength `2048`
   */
  Title: string;
};
/**
 * Type definition for `AWS::QuickSight::Template.ParameterDeclaration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-parameterdeclaration.html}
 */
export type ParameterDeclaration = {
  DateTimeParameterDeclaration?: DateTimeParameterDeclaration;
  DecimalParameterDeclaration?: DecimalParameterDeclaration;
  IntegerParameterDeclaration?: IntegerParameterDeclaration;
  StringParameterDeclaration?: StringParameterDeclaration;
};
/**
 * Type definition for `AWS::QuickSight::Template.ParameterDropDownControl`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-parameterdropdowncontrol.html}
 */
export type ParameterDropDownControl = {
  CascadingControlConfiguration?: CascadingControlConfiguration;
  DisplayOptions?: DropDownControlDisplayOptions;
  /**
   * @minLength `1`
   * @maxLength `512`
   * @pattern `^[\w\-]+$`
   */
  ParameterControlId: string;
  SelectableValues?: ParameterSelectableValues;
  /**
   * @minLength `1`
   * @maxLength `2048`
   * @pattern `^[a-zA-Z0-9]+$`
   */
  SourceParameterName: string;
  /**
   * @minLength `1`
   * @maxLength `2048`
   */
  Title: string;
  Type?: SheetControlListType;
};
/**
 * Type definition for `AWS::QuickSight::Template.ParameterListControl`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-parameterlistcontrol.html}
 */
export type ParameterListControl = {
  CascadingControlConfiguration?: CascadingControlConfiguration;
  DisplayOptions?: ListControlDisplayOptions;
  /**
   * @minLength `1`
   * @maxLength `512`
   * @pattern `^[\w\-]+$`
   */
  ParameterControlId: string;
  SelectableValues?: ParameterSelectableValues;
  /**
   * @minLength `1`
   * @maxLength `2048`
   * @pattern `^[a-zA-Z0-9]+$`
   */
  SourceParameterName: string;
  /**
   * @minLength `1`
   * @maxLength `2048`
   */
  Title: string;
  Type?: SheetControlListType;
};
/**
 * Type definition for `AWS::QuickSight::Template.ParameterSelectableValues`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-parameterselectablevalues.html}
 */
export type ParameterSelectableValues = {
  LinkToDataSetColumn?: ColumnIdentifier;
  /**
   * @minLength `0`
   * @maxLength `50000`
   */
  Values?: string[];
};
/**
 * Type definition for `AWS::QuickSight::Template.ParameterSliderControl`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-parameterslidercontrol.html}
 */
export type ParameterSliderControl = {
  DisplayOptions?: SliderControlDisplayOptions;
  MaximumValue: number;
  MinimumValue: number;
  /**
   * @minLength `1`
   * @maxLength `512`
   * @pattern `^[\w\-]+$`
   */
  ParameterControlId: string;
  /**
   * @minLength `1`
   * @maxLength `2048`
   * @pattern `^[a-zA-Z0-9]+$`
   */
  SourceParameterName: string;
  StepSize: number;
  /**
   * @minLength `1`
   * @maxLength `2048`
   */
  Title: string;
};
/**
 * Type definition for `AWS::QuickSight::Template.ParameterTextAreaControl`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-parametertextareacontrol.html}
 */
export type ParameterTextAreaControl = {
  /**
   * @minLength `1`
   * @maxLength `2048`
   */
  Delimiter?: string;
  DisplayOptions?: TextAreaControlDisplayOptions;
  /**
   * @minLength `1`
   * @maxLength `512`
   * @pattern `^[\w\-]+$`
   */
  ParameterControlId: string;
  /**
   * @minLength `1`
   * @maxLength `2048`
   * @pattern `^[a-zA-Z0-9]+$`
   */
  SourceParameterName: string;
  /**
   * @minLength `1`
   * @maxLength `2048`
   */
  Title: string;
};
/**
 * Type definition for `AWS::QuickSight::Template.ParameterTextFieldControl`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-parametertextfieldcontrol.html}
 */
export type ParameterTextFieldControl = {
  DisplayOptions?: TextFieldControlDisplayOptions;
  /**
   * @minLength `1`
   * @maxLength `512`
   * @pattern `^[\w\-]+$`
   */
  ParameterControlId: string;
  /**
   * @minLength `1`
   * @maxLength `2048`
   * @pattern `^[a-zA-Z0-9]+$`
   */
  SourceParameterName: string;
  /**
   * @minLength `1`
   * @maxLength `2048`
   */
  Title: string;
};
/**
 * Type definition for `AWS::QuickSight::Template.ParameterValueType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-parametervaluetype.html}
 */
export type ParameterValueType = "MULTI_VALUED" | "SINGLE_VALUED";
/**
 * Type definition for `AWS::QuickSight::Template.PercentageDisplayFormatConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-percentagedisplayformatconfiguration.html}
 */
export type PercentageDisplayFormatConfiguration = {
  DecimalPlacesConfiguration?: DecimalPlacesConfiguration;
  NegativeValueConfiguration?: NegativeValueConfiguration;
  NullValueFormatConfiguration?: NullValueFormatConfiguration;
  /**
   * @minLength `1`
   * @maxLength `128`
   */
  Prefix?: string;
  SeparatorConfiguration?: NumericSeparatorConfiguration;
  /**
   * @minLength `1`
   * @maxLength `128`
   */
  Suffix?: string;
};
/**
 * Type definition for `AWS::QuickSight::Template.PercentileAggregation`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-percentileaggregation.html}
 */
export type PercentileAggregation = {
  /**
   * @min `0`
   * @max `100`
   */
  PercentileValue?: number;
};
/**
 * Type definition for `AWS::QuickSight::Template.PercentVisibleRange`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-percentvisiblerange.html}
 */
export type PercentVisibleRange = {
  /**
   * @min `0`
   * @max `100`
   */
  From?: number;
  /**
   * @min `0`
   * @max `100`
   */
  To?: number;
};
/**
 * Type definition for `AWS::QuickSight::Template.PeriodOverPeriodComputation`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-periodoverperiodcomputation.html}
 */
export type PeriodOverPeriodComputation = {
  /**
   * @minLength `1`
   * @maxLength `512`
   * @pattern `^[\w\-]+$`
   */
  ComputationId: string;
  Name?: string;
  Time?: DimensionField;
  Value?: MeasureField;
};
/**
 * Type definition for `AWS::QuickSight::Template.PeriodToDateComputation`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-periodtodatecomputation.html}
 */
export type PeriodToDateComputation = {
  /**
   * @minLength `1`
   * @maxLength `512`
   * @pattern `^[\w\-]+$`
   */
  ComputationId: string;
  Name?: string;
  PeriodTimeGranularity?: TimeGranularity;
  Time?: DimensionField;
  Value?: MeasureField;
};
/**
 * Type definition for `AWS::QuickSight::Template.PieChartAggregatedFieldWells`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-piechartaggregatedfieldwells.html}
 */
export type PieChartAggregatedFieldWells = {
  /**
   * @minLength `0`
   * @maxLength `200`
   */
  Category?: DimensionField[];
  /**
   * @minLength `0`
   * @maxLength `1`
   */
  SmallMultiples?: DimensionField[];
  /**
   * @minLength `0`
   * @maxLength `200`
   */
  Values?: MeasureField[];
};
/**
 * Type definition for `AWS::QuickSight::Template.PieChartConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-piechartconfiguration.html}
 */
export type PieChartConfiguration = {
  CategoryLabelOptions?: ChartAxisLabelOptions;
  /**
   * @minLength `1`
   * @maxLength `200`
   */
  ContributionAnalysisDefaults?: ContributionAnalysisDefault[];
  DataLabels?: DataLabelOptions;
  DonutOptions?: DonutOptions;
  FieldWells?: PieChartFieldWells;
  Legend?: LegendOptions;
  SmallMultiplesOptions?: SmallMultiplesOptions;
  SortConfiguration?: PieChartSortConfiguration;
  Tooltip?: TooltipOptions;
  ValueLabelOptions?: ChartAxisLabelOptions;
  VisualPalette?: VisualPalette;
};
/**
 * Type definition for `AWS::QuickSight::Template.PieChartFieldWells`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-piechartfieldwells.html}
 */
export type PieChartFieldWells = {
  PieChartAggregatedFieldWells?: PieChartAggregatedFieldWells;
};
/**
 * Type definition for `AWS::QuickSight::Template.PieChartSortConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-piechartsortconfiguration.html}
 */
export type PieChartSortConfiguration = {
  CategoryItemsLimit?: ItemsLimitConfiguration;
  /**
   * @minLength `0`
   * @maxLength `100`
   */
  CategorySort?: FieldSortOptions[];
  SmallMultiplesLimitConfiguration?: ItemsLimitConfiguration;
  /**
   * @minLength `0`
   * @maxLength `100`
   */
  SmallMultiplesSort?: FieldSortOptions[];
};
/**
 * Type definition for `AWS::QuickSight::Template.PieChartVisual`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-piechartvisual.html}
 */
export type PieChartVisual = {
  /**
   * @minLength `0`
   * @maxLength `10`
   */
  Actions?: VisualCustomAction[];
  ChartConfiguration?: PieChartConfiguration;
  /**
   * @minLength `0`
   * @maxLength `2`
   */
  ColumnHierarchies?: ColumnHierarchy[];
  Subtitle?: VisualSubtitleLabelOptions;
  Title?: VisualTitleLabelOptions;
  /**
   * @minLength `1`
   * @maxLength `512`
   * @pattern `^[\w\-]+$`
   */
  VisualId: string;
};
/**
 * Type definition for `AWS::QuickSight::Template.PivotFieldSortOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-pivotfieldsortoptions.html}
 */
export type PivotFieldSortOptions = {
  /**
   * @minLength `1`
   * @maxLength `512`
   */
  FieldId: string;
  SortBy: PivotTableSortBy;
};
/**
 * Type definition for `AWS::QuickSight::Template.PivotTableAggregatedFieldWells`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-pivottableaggregatedfieldwells.html}
 */
export type PivotTableAggregatedFieldWells = {
  /**
   * @minLength `0`
   * @maxLength `40`
   */
  Columns?: DimensionField[];
  /**
   * @minLength `0`
   * @maxLength `40`
   */
  Rows?: DimensionField[];
  /**
   * @minLength `0`
   * @maxLength `40`
   */
  Values?: MeasureField[];
};
/**
 * Type definition for `AWS::QuickSight::Template.PivotTableCellConditionalFormatting`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-pivottablecellconditionalformatting.html}
 */
export type PivotTableCellConditionalFormatting = {
  /**
   * @minLength `1`
   * @maxLength `512`
   */
  FieldId: string;
  Scope?: PivotTableConditionalFormattingScope;
  /**
   * @minLength `0`
   * @maxLength `3`
   */
  Scopes?: PivotTableConditionalFormattingScope[];
  TextFormat?: TextConditionalFormat;
};
/**
 * Type definition for `AWS::QuickSight::Template.PivotTableConditionalFormatting`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-pivottableconditionalformatting.html}
 */
export type PivotTableConditionalFormatting = {
  /**
   * @minLength `0`
   * @maxLength `500`
   */
  ConditionalFormattingOptions?: PivotTableConditionalFormattingOption[];
};
/**
 * Type definition for `AWS::QuickSight::Template.PivotTableConditionalFormattingOption`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-pivottableconditionalformattingoption.html}
 */
export type PivotTableConditionalFormattingOption = {
  Cell?: PivotTableCellConditionalFormatting;
};
/**
 * Type definition for `AWS::QuickSight::Template.PivotTableConditionalFormattingScope`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-pivottableconditionalformattingscope.html}
 */
export type PivotTableConditionalFormattingScope = {
  Role?: PivotTableConditionalFormattingScopeRole;
};
/**
 * Type definition for `AWS::QuickSight::Template.PivotTableConditionalFormattingScopeRole`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-pivottableconditionalformattingscoperole.html}
 */
export type PivotTableConditionalFormattingScopeRole =
  | "FIELD"
  | "FIELD_TOTAL"
  | "GRAND_TOTAL";
/**
 * Type definition for `AWS::QuickSight::Template.PivotTableConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-pivottableconfiguration.html}
 */
export type PivotTableConfiguration = {
  FieldOptions?: PivotTableFieldOptions;
  FieldWells?: PivotTableFieldWells;
  PaginatedReportOptions?: PivotTablePaginatedReportOptions;
  SortConfiguration?: PivotTableSortConfiguration;
  TableOptions?: PivotTableOptions;
  TotalOptions?: PivotTableTotalOptions;
};
/**
 * Type definition for `AWS::QuickSight::Template.PivotTableDataPathOption`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-pivottabledatapathoption.html}
 */
export type PivotTableDataPathOption = {
  /**
   * @minLength `0`
   * @maxLength `20`
   */
  DataPathList: DataPathValue[];
  /**
   * String based length that is composed of value and unit in px
   */
  Width?: string;
};
/**
 * Type definition for `AWS::QuickSight::Template.PivotTableDataPathType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-pivottabledatapathtype.html}
 */
export type PivotTableDataPathType =
  | "HIERARCHY_ROWS_LAYOUT_COLUMN"
  | "MULTIPLE_ROW_METRICS_COLUMN"
  | "EMPTY_COLUMN_HEADER"
  | "COUNT_METRIC_COLUMN";
/**
 * Type definition for `AWS::QuickSight::Template.PivotTableFieldCollapseState`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-pivottablefieldcollapsestate.html}
 */
export type PivotTableFieldCollapseState = "COLLAPSED" | "EXPANDED";
/**
 * Type definition for `AWS::QuickSight::Template.PivotTableFieldCollapseStateOption`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-pivottablefieldcollapsestateoption.html}
 */
export type PivotTableFieldCollapseStateOption = {
  State?: PivotTableFieldCollapseState;
  Target: PivotTableFieldCollapseStateTarget;
};
/**
 * Type definition for `AWS::QuickSight::Template.PivotTableFieldCollapseStateTarget`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-pivottablefieldcollapsestatetarget.html}
 */
export type PivotTableFieldCollapseStateTarget = {
  /**
   * @minLength `0`
   * @maxLength `20`
   */
  FieldDataPathValues?: DataPathValue[];
  FieldId?: string;
};
/**
 * Type definition for `AWS::QuickSight::Template.PivotTableFieldOption`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-pivottablefieldoption.html}
 */
export type PivotTableFieldOption = {
  /**
   * @minLength `1`
   * @maxLength `2048`
   */
  CustomLabel?: string;
  /**
   * @minLength `1`
   * @maxLength `512`
   */
  FieldId: string;
  Visibility?: Visibility;
};
/**
 * Type definition for `AWS::QuickSight::Template.PivotTableFieldOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-pivottablefieldoptions.html}
 */
export type PivotTableFieldOptions = {
  CollapseStateOptions?: PivotTableFieldCollapseStateOption[];
  /**
   * @minLength `0`
   * @maxLength `100`
   */
  DataPathOptions?: PivotTableDataPathOption[];
  /**
   * @minLength `0`
   * @maxLength `100`
   */
  SelectedFieldOptions?: PivotTableFieldOption[];
};
/**
 * Type definition for `AWS::QuickSight::Template.PivotTableFieldSubtotalOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-pivottablefieldsubtotaloptions.html}
 */
export type PivotTableFieldSubtotalOptions = {
  /**
   * @minLength `1`
   * @maxLength `512`
   */
  FieldId?: string;
};
/**
 * Type definition for `AWS::QuickSight::Template.PivotTableFieldWells`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-pivottablefieldwells.html}
 */
export type PivotTableFieldWells = {
  PivotTableAggregatedFieldWells?: PivotTableAggregatedFieldWells;
};
/**
 * Type definition for `AWS::QuickSight::Template.PivotTableMetricPlacement`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-pivottablemetricplacement.html}
 */
export type PivotTableMetricPlacement = "ROW" | "COLUMN";
/**
 * Type definition for `AWS::QuickSight::Template.PivotTableOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-pivottableoptions.html}
 */
export type PivotTableOptions = {
  CellStyle?: TableCellStyle;
  CollapsedRowDimensionsVisibility?: Visibility;
  ColumnHeaderStyle?: TableCellStyle;
  ColumnNamesVisibility?: Visibility;
  /**
   * String based length that is composed of value and unit in px
   */
  DefaultCellWidth?: string;
  MetricPlacement?: PivotTableMetricPlacement;
  RowAlternateColorOptions?: RowAlternateColorOptions;
  RowFieldNamesStyle?: TableCellStyle;
  RowHeaderStyle?: TableCellStyle;
  RowsLabelOptions?: PivotTableRowsLabelOptions;
  RowsLayout?: PivotTableRowsLayout;
  SingleMetricVisibility?: Visibility;
  ToggleButtonsVisibility?: Visibility;
};
/**
 * Type definition for `AWS::QuickSight::Template.PivotTablePaginatedReportOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-pivottablepaginatedreportoptions.html}
 */
export type PivotTablePaginatedReportOptions = {
  OverflowColumnHeaderVisibility?: Visibility;
  VerticalOverflowVisibility?: Visibility;
};
/**
 * Type definition for `AWS::QuickSight::Template.PivotTableRowsLabelOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-pivottablerowslabeloptions.html}
 */
export type PivotTableRowsLabelOptions = {
  /**
   * @minLength `1`
   * @maxLength `1024`
   */
  CustomLabel?: string;
  Visibility?: Visibility;
};
/**
 * Type definition for `AWS::QuickSight::Template.PivotTableRowsLayout`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-pivottablerowslayout.html}
 */
export type PivotTableRowsLayout = "TABULAR" | "HIERARCHY";
/**
 * Type definition for `AWS::QuickSight::Template.PivotTableSortBy`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-pivottablesortby.html}
 */
export type PivotTableSortBy = {
  Column?: ColumnSort;
  DataPath?: DataPathSort;
  Field?: FieldSort;
};
/**
 * Type definition for `AWS::QuickSight::Template.PivotTableSortConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-pivottablesortconfiguration.html}
 */
export type PivotTableSortConfiguration = {
  /**
   * @minLength `0`
   * @maxLength `200`
   */
  FieldSortOptions?: PivotFieldSortOptions[];
};
/**
 * Type definition for `AWS::QuickSight::Template.PivotTableSubtotalLevel`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-pivottablesubtotallevel.html}
 */
export type PivotTableSubtotalLevel = "ALL" | "CUSTOM" | "LAST";
/**
 * Type definition for `AWS::QuickSight::Template.PivotTableTotalOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-pivottabletotaloptions.html}
 */
export type PivotTableTotalOptions = {
  ColumnSubtotalOptions?: SubtotalOptions;
  ColumnTotalOptions?: PivotTotalOptions;
  RowSubtotalOptions?: SubtotalOptions;
  RowTotalOptions?: PivotTotalOptions;
};
/**
 * Type definition for `AWS::QuickSight::Template.PivotTableVisual`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-pivottablevisual.html}
 */
export type PivotTableVisual = {
  /**
   * @minLength `0`
   * @maxLength `10`
   */
  Actions?: VisualCustomAction[];
  ChartConfiguration?: PivotTableConfiguration;
  ConditionalFormatting?: PivotTableConditionalFormatting;
  Subtitle?: VisualSubtitleLabelOptions;
  Title?: VisualTitleLabelOptions;
  /**
   * @minLength `1`
   * @maxLength `512`
   * @pattern `^[\w\-]+$`
   */
  VisualId: string;
};
/**
 * Type definition for `AWS::QuickSight::Template.PivotTotalOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-pivottotaloptions.html}
 */
export type PivotTotalOptions = {
  CustomLabel?: string;
  MetricHeaderCellStyle?: TableCellStyle;
  Placement?: TableTotalsPlacement;
  ScrollStatus?: TableTotalsScrollStatus;
  /**
   * @minLength `0`
   * @maxLength `200`
   */
  TotalAggregationOptions?: TotalAggregationOption[];
  TotalCellStyle?: TableCellStyle;
  TotalsVisibility?: Visibility;
  ValueCellStyle?: TableCellStyle;
};
/**
 * Type definition for `AWS::QuickSight::Template.PredefinedHierarchy`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-predefinedhierarchy.html}
 */
export type PredefinedHierarchy = {
  /**
   * @minLength `1`
   * @maxLength `10`
   */
  Columns: ColumnIdentifier[];
  /**
   * @minLength `0`
   * @maxLength `10`
   */
  DrillDownFilters?: DrillDownFilter[];
  /**
   * @minLength `1`
   * @maxLength `512`
   */
  HierarchyId: string;
};
/**
 * Type definition for `AWS::QuickSight::Template.PrimaryValueDisplayType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-primaryvaluedisplaytype.html}
 */
export type PrimaryValueDisplayType = "HIDDEN" | "COMPARISON" | "ACTUAL";
/**
 * Type definition for `AWS::QuickSight::Template.ProgressBarOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-progressbaroptions.html}
 */
export type ProgressBarOptions = {
  Visibility?: Visibility;
};
/**
 * Type definition for `AWS::QuickSight::Template.RadarChartAggregatedFieldWells`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-radarchartaggregatedfieldwells.html}
 */
export type RadarChartAggregatedFieldWells = {
  /**
   * @minLength `0`
   * @maxLength `1`
   */
  Category?: DimensionField[];
  /**
   * @minLength `0`
   * @maxLength `1`
   */
  Color?: DimensionField[];
  /**
   * @minLength `0`
   * @maxLength `20`
   */
  Values?: MeasureField[];
};
/**
 * Type definition for `AWS::QuickSight::Template.RadarChartAreaStyleSettings`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-radarchartareastylesettings.html}
 */
export type RadarChartAreaStyleSettings = {
  Visibility?: Visibility;
};
/**
 * Type definition for `AWS::QuickSight::Template.RadarChartAxesRangeScale`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-radarchartaxesrangescale.html}
 */
export type RadarChartAxesRangeScale = "AUTO" | "INDEPENDENT" | "SHARED";
/**
 * Type definition for `AWS::QuickSight::Template.RadarChartConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-radarchartconfiguration.html}
 */
export type RadarChartConfiguration = {
  AlternateBandColorsVisibility?: Visibility;
  /**
   * @pattern `^#[A-F0-9]{6}$`
   */
  AlternateBandEvenColor?: string;
  /**
   * @pattern `^#[A-F0-9]{6}$`
   */
  AlternateBandOddColor?: string;
  AxesRangeScale?: RadarChartAxesRangeScale;
  BaseSeriesSettings?: RadarChartSeriesSettings;
  CategoryAxis?: AxisDisplayOptions;
  CategoryLabelOptions?: ChartAxisLabelOptions;
  ColorAxis?: AxisDisplayOptions;
  ColorLabelOptions?: ChartAxisLabelOptions;
  FieldWells?: RadarChartFieldWells;
  Legend?: LegendOptions;
  Shape?: RadarChartShape;
  SortConfiguration?: RadarChartSortConfiguration;
  /**
   * @min `-360`
   * @max `360`
   */
  StartAngle?: number;
  VisualPalette?: VisualPalette;
};
/**
 * Type definition for `AWS::QuickSight::Template.RadarChartFieldWells`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-radarchartfieldwells.html}
 */
export type RadarChartFieldWells = {
  RadarChartAggregatedFieldWells?: RadarChartAggregatedFieldWells;
};
/**
 * Type definition for `AWS::QuickSight::Template.RadarChartSeriesSettings`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-radarchartseriessettings.html}
 */
export type RadarChartSeriesSettings = {
  AreaStyleSettings?: RadarChartAreaStyleSettings;
};
/**
 * Type definition for `AWS::QuickSight::Template.RadarChartShape`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-radarchartshape.html}
 */
export type RadarChartShape = "CIRCLE" | "POLYGON";
/**
 * Type definition for `AWS::QuickSight::Template.RadarChartSortConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-radarchartsortconfiguration.html}
 */
export type RadarChartSortConfiguration = {
  CategoryItemsLimit?: ItemsLimitConfiguration;
  /**
   * @minLength `0`
   * @maxLength `100`
   */
  CategorySort?: FieldSortOptions[];
  ColorItemsLimit?: ItemsLimitConfiguration;
  /**
   * @minLength `0`
   * @maxLength `100`
   */
  ColorSort?: FieldSortOptions[];
};
/**
 * Type definition for `AWS::QuickSight::Template.RadarChartVisual`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-radarchartvisual.html}
 */
export type RadarChartVisual = {
  /**
   * @minLength `0`
   * @maxLength `10`
   */
  Actions?: VisualCustomAction[];
  ChartConfiguration?: RadarChartConfiguration;
  /**
   * @minLength `0`
   * @maxLength `2`
   */
  ColumnHierarchies?: ColumnHierarchy[];
  Subtitle?: VisualSubtitleLabelOptions;
  Title?: VisualTitleLabelOptions;
  /**
   * @minLength `1`
   * @maxLength `512`
   * @pattern `^[\w\-]+$`
   */
  VisualId: string;
};
/**
 * Type definition for `AWS::QuickSight::Template.RangeEndsLabelType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-rangeendslabeltype.html}
 */
export type RangeEndsLabelType = {
  Visibility?: Visibility;
};
/**
 * Type definition for `AWS::QuickSight::Template.ReferenceLine`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-referenceline.html}
 */
export type ReferenceLine = {
  DataConfiguration: ReferenceLineDataConfiguration;
  LabelConfiguration?: ReferenceLineLabelConfiguration;
  Status?: WidgetStatus;
  StyleConfiguration?: ReferenceLineStyleConfiguration;
};
/**
 * Type definition for `AWS::QuickSight::Template.ReferenceLineCustomLabelConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-referencelinecustomlabelconfiguration.html}
 */
export type ReferenceLineCustomLabelConfiguration = {
  /**
   * @pattern `\S`
   */
  CustomLabel: string;
};
/**
 * Type definition for `AWS::QuickSight::Template.ReferenceLineDataConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-referencelinedataconfiguration.html}
 */
export type ReferenceLineDataConfiguration = {
  AxisBinding?: AxisBinding;
  DynamicConfiguration?: ReferenceLineDynamicDataConfiguration;
  SeriesType?: ReferenceLineSeriesType;
  StaticConfiguration?: ReferenceLineStaticDataConfiguration;
};
/**
 * Type definition for `AWS::QuickSight::Template.ReferenceLineDynamicDataConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-referencelinedynamicdataconfiguration.html}
 */
export type ReferenceLineDynamicDataConfiguration = {
  Calculation: NumericalAggregationFunction;
  Column: ColumnIdentifier;
  MeasureAggregationFunction?: AggregationFunction;
};
/**
 * Type definition for `AWS::QuickSight::Template.ReferenceLineLabelConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-referencelinelabelconfiguration.html}
 */
export type ReferenceLineLabelConfiguration = {
  CustomLabelConfiguration?: ReferenceLineCustomLabelConfiguration;
  /**
   * @pattern `^#[A-F0-9]{6}$`
   */
  FontColor?: string;
  FontConfiguration?: FontConfiguration;
  HorizontalPosition?: ReferenceLineLabelHorizontalPosition;
  ValueLabelConfiguration?: ReferenceLineValueLabelConfiguration;
  VerticalPosition?: ReferenceLineLabelVerticalPosition;
};
/**
 * Type definition for `AWS::QuickSight::Template.ReferenceLineLabelHorizontalPosition`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-referencelinelabelhorizontalposition.html}
 */
export type ReferenceLineLabelHorizontalPosition = "LEFT" | "CENTER" | "RIGHT";
/**
 * Type definition for `AWS::QuickSight::Template.ReferenceLineLabelVerticalPosition`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-referencelinelabelverticalposition.html}
 */
export type ReferenceLineLabelVerticalPosition = "ABOVE" | "BELOW";
/**
 * Type definition for `AWS::QuickSight::Template.ReferenceLinePatternType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-referencelinepatterntype.html}
 */
export type ReferenceLinePatternType = "SOLID" | "DASHED" | "DOTTED";
/**
 * Type definition for `AWS::QuickSight::Template.ReferenceLineSeriesType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-referencelineseriestype.html}
 */
export type ReferenceLineSeriesType = "BAR" | "LINE";
/**
 * Type definition for `AWS::QuickSight::Template.ReferenceLineStaticDataConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-referencelinestaticdataconfiguration.html}
 */
export type ReferenceLineStaticDataConfiguration = {
  Value: number;
};
/**
 * Type definition for `AWS::QuickSight::Template.ReferenceLineStyleConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-referencelinestyleconfiguration.html}
 */
export type ReferenceLineStyleConfiguration = {
  /**
   * @pattern `^#[A-F0-9]{6}$`
   */
  Color?: string;
  Pattern?: ReferenceLinePatternType;
};
/**
 * Type definition for `AWS::QuickSight::Template.ReferenceLineValueLabelConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-referencelinevaluelabelconfiguration.html}
 */
export type ReferenceLineValueLabelConfiguration = {
  FormatConfiguration?: NumericFormatConfiguration;
  RelativePosition?: ReferenceLineValueLabelRelativePosition;
};
/**
 * Type definition for `AWS::QuickSight::Template.ReferenceLineValueLabelRelativePosition`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-referencelinevaluelabelrelativeposition.html}
 */
export type ReferenceLineValueLabelRelativePosition =
  | "BEFORE_CUSTOM_LABEL"
  | "AFTER_CUSTOM_LABEL";
/**
 * Type definition for `AWS::QuickSight::Template.RelativeDatesFilter`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-relativedatesfilter.html}
 */
export type RelativeDatesFilter = {
  AnchorDateConfiguration: AnchorDateConfiguration;
  Column: ColumnIdentifier;
  DefaultFilterControlConfiguration?: DefaultFilterControlConfiguration;
  ExcludePeriodConfiguration?: ExcludePeriodConfiguration;
  /**
   * @minLength `1`
   * @maxLength `512`
   * @pattern `^[\w\-]+$`
   */
  FilterId: string;
  MinimumGranularity?: TimeGranularity;
  NullOption: FilterNullOption;
  /**
   * @minLength `1`
   * @maxLength `2048`
   * @pattern `^[a-zA-Z0-9]+$`
   */
  ParameterName?: string;
  RelativeDateType: RelativeDateType;
  RelativeDateValue?: number;
  TimeGranularity: TimeGranularity;
};
/**
 * Type definition for `AWS::QuickSight::Template.RelativeDateTimeControlDisplayOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-relativedatetimecontroldisplayoptions.html}
 */
export type RelativeDateTimeControlDisplayOptions = {
  /**
   * @minLength `1`
   * @maxLength `128`
   */
  DateTimeFormat?: string;
  InfoIconLabelOptions?: SheetControlInfoIconLabelOptions;
  TitleOptions?: LabelOptions;
};
/**
 * Type definition for `AWS::QuickSight::Template.RelativeDateType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-relativedatetype.html}
 */
export type RelativeDateType = "PREVIOUS" | "THIS" | "LAST" | "NOW" | "NEXT";
/**
 * Type definition for `AWS::QuickSight::Template.RelativeFontSize`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-relativefontsize.html}
 */
export type RelativeFontSize =
  | "EXTRA_SMALL"
  | "SMALL"
  | "MEDIUM"
  | "LARGE"
  | "EXTRA_LARGE";
/**
 * Type definition for `AWS::QuickSight::Template.ResizeOption`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-resizeoption.html}
 */
export type ResizeOption = "FIXED" | "RESPONSIVE";
/**
 * Type definition for `AWS::QuickSight::Template.ResourcePermission`.
 * <p>Permission for the resource.</p>
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-resourcepermission.html}
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
 * Type definition for `AWS::QuickSight::Template.ResourceStatus`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-resourcestatus.html}
 */
export type ResourceStatus =
  | "CREATION_IN_PROGRESS"
  | "CREATION_SUCCESSFUL"
  | "CREATION_FAILED"
  | "UPDATE_IN_PROGRESS"
  | "UPDATE_SUCCESSFUL"
  | "UPDATE_FAILED"
  | "DELETED";
/**
 * Type definition for `AWS::QuickSight::Template.RollingDateConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-rollingdateconfiguration.html}
 */
export type RollingDateConfiguration = {
  /**
   * @minLength `1`
   * @maxLength `2048`
   */
  DataSetIdentifier?: string;
  /**
   * @minLength `1`
   * @maxLength `4096`
   */
  Expression: string;
};
/**
 * Type definition for `AWS::QuickSight::Template.RowAlternateColorOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-rowalternatecoloroptions.html}
 */
export type RowAlternateColorOptions = {
  /**
   * @minLength `0`
   * @maxLength `1`
   */
  RowAlternateColors?: string[];
  Status?: WidgetStatus;
  UsePrimaryBackgroundColor?: WidgetStatus;
};
/**
 * Type definition for `AWS::QuickSight::Template.SameSheetTargetVisualConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-samesheettargetvisualconfiguration.html}
 */
export type SameSheetTargetVisualConfiguration = {
  TargetVisualOptions?: TargetVisualOptions;
  /**
   * @minLength `1`
   * @maxLength `50`
   */
  TargetVisuals?: string[];
};
/**
 * Type definition for `AWS::QuickSight::Template.SankeyDiagramAggregatedFieldWells`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-sankeydiagramaggregatedfieldwells.html}
 */
export type SankeyDiagramAggregatedFieldWells = {
  /**
   * @minLength `0`
   * @maxLength `200`
   */
  Destination?: DimensionField[];
  /**
   * @minLength `0`
   * @maxLength `200`
   */
  Source?: DimensionField[];
  /**
   * @minLength `0`
   * @maxLength `200`
   */
  Weight?: MeasureField[];
};
/**
 * Type definition for `AWS::QuickSight::Template.SankeyDiagramChartConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-sankeydiagramchartconfiguration.html}
 */
export type SankeyDiagramChartConfiguration = {
  DataLabels?: DataLabelOptions;
  FieldWells?: SankeyDiagramFieldWells;
  SortConfiguration?: SankeyDiagramSortConfiguration;
};
/**
 * Type definition for `AWS::QuickSight::Template.SankeyDiagramFieldWells`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-sankeydiagramfieldwells.html}
 */
export type SankeyDiagramFieldWells = {
  SankeyDiagramAggregatedFieldWells?: SankeyDiagramAggregatedFieldWells;
};
/**
 * Type definition for `AWS::QuickSight::Template.SankeyDiagramSortConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-sankeydiagramsortconfiguration.html}
 */
export type SankeyDiagramSortConfiguration = {
  DestinationItemsLimit?: ItemsLimitConfiguration;
  SourceItemsLimit?: ItemsLimitConfiguration;
  /**
   * @minLength `0`
   * @maxLength `100`
   */
  WeightSort?: FieldSortOptions[];
};
/**
 * Type definition for `AWS::QuickSight::Template.SankeyDiagramVisual`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-sankeydiagramvisual.html}
 */
export type SankeyDiagramVisual = {
  /**
   * @minLength `0`
   * @maxLength `10`
   */
  Actions?: VisualCustomAction[];
  ChartConfiguration?: SankeyDiagramChartConfiguration;
  Subtitle?: VisualSubtitleLabelOptions;
  Title?: VisualTitleLabelOptions;
  /**
   * @minLength `1`
   * @maxLength `512`
   * @pattern `^[\w\-]+$`
   */
  VisualId: string;
};
/**
 * Type definition for `AWS::QuickSight::Template.ScatterPlotCategoricallyAggregatedFieldWells`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-scatterplotcategoricallyaggregatedfieldwells.html}
 */
export type ScatterPlotCategoricallyAggregatedFieldWells = {
  /**
   * @minLength `0`
   * @maxLength `200`
   */
  Category?: DimensionField[];
  /**
   * @minLength `0`
   * @maxLength `200`
   */
  Label?: DimensionField[];
  /**
   * @minLength `0`
   * @maxLength `200`
   */
  Size?: MeasureField[];
  /**
   * @minLength `0`
   * @maxLength `200`
   */
  XAxis?: MeasureField[];
  /**
   * @minLength `0`
   * @maxLength `200`
   */
  YAxis?: MeasureField[];
};
/**
 * Type definition for `AWS::QuickSight::Template.ScatterPlotConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-scatterplotconfiguration.html}
 */
export type ScatterPlotConfiguration = {
  DataLabels?: DataLabelOptions;
  FieldWells?: ScatterPlotFieldWells;
  Legend?: LegendOptions;
  Tooltip?: TooltipOptions;
  VisualPalette?: VisualPalette;
  XAxisDisplayOptions?: AxisDisplayOptions;
  XAxisLabelOptions?: ChartAxisLabelOptions;
  YAxisDisplayOptions?: AxisDisplayOptions;
  YAxisLabelOptions?: ChartAxisLabelOptions;
};
/**
 * Type definition for `AWS::QuickSight::Template.ScatterPlotFieldWells`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-scatterplotfieldwells.html}
 */
export type ScatterPlotFieldWells = {
  ScatterPlotCategoricallyAggregatedFieldWells?: ScatterPlotCategoricallyAggregatedFieldWells;
  ScatterPlotUnaggregatedFieldWells?: ScatterPlotUnaggregatedFieldWells;
};
/**
 * Type definition for `AWS::QuickSight::Template.ScatterPlotUnaggregatedFieldWells`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-scatterplotunaggregatedfieldwells.html}
 */
export type ScatterPlotUnaggregatedFieldWells = {
  /**
   * @minLength `0`
   * @maxLength `200`
   */
  Category?: DimensionField[];
  /**
   * @minLength `0`
   * @maxLength `200`
   */
  Label?: DimensionField[];
  /**
   * @minLength `0`
   * @maxLength `200`
   */
  Size?: MeasureField[];
  /**
   * @minLength `0`
   * @maxLength `200`
   */
  XAxis?: DimensionField[];
  /**
   * @minLength `0`
   * @maxLength `200`
   */
  YAxis?: DimensionField[];
};
/**
 * Type definition for `AWS::QuickSight::Template.ScatterPlotVisual`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-scatterplotvisual.html}
 */
export type ScatterPlotVisual = {
  /**
   * @minLength `0`
   * @maxLength `10`
   */
  Actions?: VisualCustomAction[];
  ChartConfiguration?: ScatterPlotConfiguration;
  /**
   * @minLength `0`
   * @maxLength `2`
   */
  ColumnHierarchies?: ColumnHierarchy[];
  Subtitle?: VisualSubtitleLabelOptions;
  Title?: VisualTitleLabelOptions;
  /**
   * @minLength `1`
   * @maxLength `512`
   * @pattern `^[\w\-]+$`
   */
  VisualId: string;
};
/**
 * Type definition for `AWS::QuickSight::Template.ScrollBarOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-scrollbaroptions.html}
 */
export type ScrollBarOptions = {
  Visibility?: Visibility;
  VisibleRange?: VisibleRangeOptions;
};
/**
 * Type definition for `AWS::QuickSight::Template.SecondaryValueOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-secondaryvalueoptions.html}
 */
export type SecondaryValueOptions = {
  Visibility?: Visibility;
};
/**
 * Type definition for `AWS::QuickSight::Template.SectionAfterPageBreak`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-sectionafterpagebreak.html}
 */
export type SectionAfterPageBreak = {
  Status?: SectionPageBreakStatus;
};
/**
 * Type definition for `AWS::QuickSight::Template.SectionBasedLayoutCanvasSizeOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-sectionbasedlayoutcanvassizeoptions.html}
 */
export type SectionBasedLayoutCanvasSizeOptions = {
  PaperCanvasSizeOptions?: SectionBasedLayoutPaperCanvasSizeOptions;
};
/**
 * Type definition for `AWS::QuickSight::Template.SectionBasedLayoutConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-sectionbasedlayoutconfiguration.html}
 */
export type SectionBasedLayoutConfiguration = {
  /**
   * @minLength `0`
   * @maxLength `28`
   */
  BodySections: BodySectionConfiguration[];
  CanvasSizeOptions: SectionBasedLayoutCanvasSizeOptions;
  /**
   * @minLength `0`
   * @maxLength `1`
   */
  FooterSections: HeaderFooterSectionConfiguration[];
  /**
   * @minLength `0`
   * @maxLength `1`
   */
  HeaderSections: HeaderFooterSectionConfiguration[];
};
/**
 * Type definition for `AWS::QuickSight::Template.SectionBasedLayoutPaperCanvasSizeOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-sectionbasedlayoutpapercanvassizeoptions.html}
 */
export type SectionBasedLayoutPaperCanvasSizeOptions = {
  PaperMargin?: Spacing;
  PaperOrientation?: PaperOrientation;
  PaperSize?: PaperSize;
};
/**
 * Type definition for `AWS::QuickSight::Template.SectionLayoutConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-sectionlayoutconfiguration.html}
 */
export type SectionLayoutConfiguration = {
  FreeFormLayout: FreeFormSectionLayoutConfiguration;
};
/**
 * Type definition for `AWS::QuickSight::Template.SectionPageBreakConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-sectionpagebreakconfiguration.html}
 */
export type SectionPageBreakConfiguration = {
  After?: SectionAfterPageBreak;
};
/**
 * Type definition for `AWS::QuickSight::Template.SectionPageBreakStatus`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-sectionpagebreakstatus.html}
 */
export type SectionPageBreakStatus = "ENABLED" | "DISABLED";
/**
 * Type definition for `AWS::QuickSight::Template.SectionStyle`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-sectionstyle.html}
 */
export type SectionStyle = {
  /**
   * String based length that is composed of value and unit in px
   */
  Height?: string;
  Padding?: Spacing;
};
/**
 * Type definition for `AWS::QuickSight::Template.SelectAllValueOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-selectallvalueoptions.html}
 */
export type SelectAllValueOptions = "ALL_VALUES";
/**
 * Type definition for `AWS::QuickSight::Template.SelectedFieldOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-selectedfieldoptions.html}
 */
export type SelectedFieldOptions = "ALL_FIELDS";
/**
 * Type definition for `AWS::QuickSight::Template.SelectedSheetsFilterScopeConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-selectedsheetsfilterscopeconfiguration.html}
 */
export type SelectedSheetsFilterScopeConfiguration = {
  /**
   * @minLength `1`
   * @maxLength `50`
   */
  SheetVisualScopingConfigurations?: SheetVisualScopingConfiguration[];
};
/**
 * Type definition for `AWS::QuickSight::Template.SelectedTooltipType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-selectedtooltiptype.html}
 */
export type SelectedTooltipType = "BASIC" | "DETAILED";
/**
 * Type definition for `AWS::QuickSight::Template.SeriesItem`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-seriesitem.html}
 */
export type SeriesItem = {
  DataFieldSeriesItem?: DataFieldSeriesItem;
  FieldSeriesItem?: FieldSeriesItem;
};
/**
 * Type definition for `AWS::QuickSight::Template.SetParameterValueConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-setparametervalueconfiguration.html}
 */
export type SetParameterValueConfiguration = {
  /**
   * @minLength `1`
   * @maxLength `2048`
   * @pattern `^[a-zA-Z0-9]+$`
   */
  DestinationParameterName: string;
  Value: DestinationParameterValueConfiguration;
};
/**
 * Type definition for `AWS::QuickSight::Template.ShapeConditionalFormat`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-shapeconditionalformat.html}
 */
export type ShapeConditionalFormat = {
  BackgroundColor: ConditionalFormattingColor;
};
/**
 * Type definition for `AWS::QuickSight::Template.Sheet`.
 * <p>A <i>sheet</i>, which is an object that contains a set of visuals that
            are viewed together on one page in Amazon QuickSight. Every analysis and dashboard
            contains at least one sheet. Each sheet contains at least one visualization widget, for
            example a chart, pivot table, or narrative insight. Sheets can be associated with other
            components, such as controls, filters, and so on.</p>
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-sheet.html}
 */
export type Sheet = {
  /**
     * <p>The name of a sheet. This name is displayed on the sheet's tab in the Amazon QuickSight
                console.</p>
     * @minLength `1`
     * @maxLength `2048`
     */
  Name?: string;
  /**
   * <p>The unique identifier associated with a sheet.</p>
   * @minLength `1`
   * @maxLength `512`
   * @pattern `^[\w\-]+$`
   */
  SheetId?: string;
};
/**
 * Type definition for `AWS::QuickSight::Template.SheetContentType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-sheetcontenttype.html}
 */
export type SheetContentType = "PAGINATED" | "INTERACTIVE";
/**
 * Type definition for `AWS::QuickSight::Template.SheetControlDateTimePickerType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-sheetcontroldatetimepickertype.html}
 */
export type SheetControlDateTimePickerType = "SINGLE_VALUED" | "DATE_RANGE";
/**
 * Type definition for `AWS::QuickSight::Template.SheetControlInfoIconLabelOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-sheetcontrolinfoiconlabeloptions.html}
 */
export type SheetControlInfoIconLabelOptions = {
  /**
   * @minLength `1`
   * @maxLength `100`
   */
  InfoIconText?: string;
  Visibility?: Visibility;
};
/**
 * Type definition for `AWS::QuickSight::Template.SheetControlLayout`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-sheetcontrollayout.html}
 */
export type SheetControlLayout = {
  Configuration: SheetControlLayoutConfiguration;
};
/**
 * Type definition for `AWS::QuickSight::Template.SheetControlLayoutConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-sheetcontrollayoutconfiguration.html}
 */
export type SheetControlLayoutConfiguration = {
  GridLayout?: GridLayoutConfiguration;
};
/**
 * Type definition for `AWS::QuickSight::Template.SheetControlListType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-sheetcontrollisttype.html}
 */
export type SheetControlListType = "MULTI_SELECT" | "SINGLE_SELECT";
/**
 * Type definition for `AWS::QuickSight::Template.SheetControlSliderType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-sheetcontrolslidertype.html}
 */
export type SheetControlSliderType = "SINGLE_POINT" | "RANGE";
/**
 * Type definition for `AWS::QuickSight::Template.SheetDefinition`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-sheetdefinition.html}
 */
export type SheetDefinition = {
  ContentType?: SheetContentType;
  /**
   * @minLength `1`
   * @maxLength `1024`
   */
  Description?: string;
  /**
   * @minLength `0`
   * @maxLength `200`
   */
  FilterControls?: FilterControl[];
  /**
   * @minLength `1`
   * @maxLength `1`
   */
  Layouts?: Layout[];
  /**
   * @minLength `1`
   * @maxLength `2048`
   */
  Name?: string;
  /**
   * @minLength `0`
   * @maxLength `200`
   */
  ParameterControls?: ParameterControl[];
  /**
   * @minLength `0`
   * @maxLength `1`
   */
  SheetControlLayouts?: SheetControlLayout[];
  /**
   * @minLength `1`
   * @maxLength `512`
   * @pattern `^[\w\-]+$`
   */
  SheetId: string;
  /**
   * @minLength `0`
   * @maxLength `100`
   */
  TextBoxes?: SheetTextBox[];
  /**
   * @minLength `1`
   * @maxLength `1024`
   */
  Title?: string;
  /**
   * @minLength `0`
   * @maxLength `50`
   */
  Visuals?: Visual[];
};
/**
 * Type definition for `AWS::QuickSight::Template.SheetElementConfigurationOverrides`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-sheetelementconfigurationoverrides.html}
 */
export type SheetElementConfigurationOverrides = {
  Visibility?: Visibility;
};
/**
 * Type definition for `AWS::QuickSight::Template.SheetElementRenderingRule`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-sheetelementrenderingrule.html}
 */
export type SheetElementRenderingRule = {
  ConfigurationOverrides: SheetElementConfigurationOverrides;
  /**
   * @minLength `1`
   * @maxLength `4096`
   */
  Expression: string;
};
/**
 * Type definition for `AWS::QuickSight::Template.SheetTextBox`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-sheettextbox.html}
 */
export type SheetTextBox = {
  /**
   * @minLength `0`
   * @maxLength `150000`
   */
  Content?: string;
  /**
   * @minLength `1`
   * @maxLength `512`
   * @pattern `^[\w\-]+$`
   */
  SheetTextBoxId: string;
};
/**
 * Type definition for `AWS::QuickSight::Template.SheetVisualScopingConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-sheetvisualscopingconfiguration.html}
 */
export type SheetVisualScopingConfiguration = {
  Scope: FilterVisualScope;
  /**
   * @minLength `1`
   * @maxLength `512`
   * @pattern `^[\w\-]+$`
   */
  SheetId: string;
  /**
   * @minLength `0`
   * @maxLength `50`
   */
  VisualIds?: string[];
};
/**
 * Type definition for `AWS::QuickSight::Template.ShortFormatText`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-shortformattext.html}
 */
export type ShortFormatText = {
  /**
   * @minLength `1`
   * @maxLength `512`
   */
  PlainText?: string;
  /**
   * @minLength `1`
   * @maxLength `1024`
   */
  RichText?: string;
};
/**
 * Type definition for `AWS::QuickSight::Template.SimpleAttributeAggregationFunction`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-simpleattributeaggregationfunction.html}
 */
export type SimpleAttributeAggregationFunction = "UNIQUE_VALUE";
/**
 * Type definition for `AWS::QuickSight::Template.SimpleClusterMarker`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-simpleclustermarker.html}
 */
export type SimpleClusterMarker = {
  /**
   * @pattern `^#[A-F0-9]{6}$`
   */
  Color?: string;
};
/**
 * Type definition for `AWS::QuickSight::Template.SimpleNumericalAggregationFunction`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-simplenumericalaggregationfunction.html}
 */
export type SimpleNumericalAggregationFunction =
  | "SUM"
  | "AVERAGE"
  | "MIN"
  | "MAX"
  | "COUNT"
  | "DISTINCT_COUNT"
  | "VAR"
  | "VARP"
  | "STDEV"
  | "STDEVP"
  | "MEDIAN";
/**
 * Type definition for `AWS::QuickSight::Template.SimpleTotalAggregationFunction`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-simpletotalaggregationfunction.html}
 */
export type SimpleTotalAggregationFunction =
  | "DEFAULT"
  | "SUM"
  | "AVERAGE"
  | "MIN"
  | "MAX"
  | "NONE";
/**
 * Type definition for `AWS::QuickSight::Template.SingleAxisOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-singleaxisoptions.html}
 */
export type SingleAxisOptions = {
  YAxisOptions?: unknown;
};
/**
 * Type definition for `AWS::QuickSight::Template.SliderControlDisplayOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-slidercontroldisplayoptions.html}
 */
export type SliderControlDisplayOptions = {
  InfoIconLabelOptions?: SheetControlInfoIconLabelOptions;
  TitleOptions?: LabelOptions;
};
/**
 * Type definition for `AWS::QuickSight::Template.SmallMultiplesAxisPlacement`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-smallmultiplesaxisplacement.html}
 */
export type SmallMultiplesAxisPlacement = "OUTSIDE" | "INSIDE";
/**
 * Type definition for `AWS::QuickSight::Template.SmallMultiplesAxisProperties`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-smallmultiplesaxisproperties.html}
 */
export type SmallMultiplesAxisProperties = {
  Placement?: SmallMultiplesAxisPlacement;
  Scale?: SmallMultiplesAxisScale;
};
/**
 * Type definition for `AWS::QuickSight::Template.SmallMultiplesAxisScale`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-smallmultiplesaxisscale.html}
 */
export type SmallMultiplesAxisScale = "SHARED" | "INDEPENDENT";
/**
 * Type definition for `AWS::QuickSight::Template.SmallMultiplesOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-smallmultiplesoptions.html}
 */
export type SmallMultiplesOptions = {
  /**
   * @min `1`
   * @max `10`
   */
  MaxVisibleColumns?: number;
  /**
   * @min `1`
   * @max `10`
   */
  MaxVisibleRows?: number;
  PanelConfiguration?: PanelConfiguration;
  XAxis?: SmallMultiplesAxisProperties;
  YAxis?: SmallMultiplesAxisProperties;
};
/**
 * Type definition for `AWS::QuickSight::Template.SortDirection`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-sortdirection.html}
 */
export type SortDirection = "ASC" | "DESC";
/**
 * Type definition for `AWS::QuickSight::Template.Spacing`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-spacing.html}
 */
export type Spacing = {
  /**
   * String based length that is composed of value and unit
   */
  Bottom?: string;
  /**
   * String based length that is composed of value and unit
   */
  Left?: string;
  /**
   * String based length that is composed of value and unit
   */
  Right?: string;
  /**
   * String based length that is composed of value and unit
   */
  Top?: string;
};
/**
 * Type definition for `AWS::QuickSight::Template.SpecialValue`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-specialvalue.html}
 */
export type SpecialValue = "EMPTY" | "NULL" | "OTHER";
/**
 * Type definition for `AWS::QuickSight::Template.StringDefaultValues`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-stringdefaultvalues.html}
 */
export type StringDefaultValues = {
  DynamicValue?: DynamicDefaultValue;
  /**
   * @minLength `0`
   * @maxLength `50000`
   */
  StaticValues?: string[];
};
/**
 * Type definition for `AWS::QuickSight::Template.StringFormatConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-stringformatconfiguration.html}
 */
export type StringFormatConfiguration = {
  NullValueFormatConfiguration?: NullValueFormatConfiguration;
  NumericFormatConfiguration?: NumericFormatConfiguration;
};
/**
 * Type definition for `AWS::QuickSight::Template.StringParameterDeclaration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-stringparameterdeclaration.html}
 */
export type StringParameterDeclaration = {
  DefaultValues?: StringDefaultValues;
  /**
   * @minLength `0`
   * @maxLength `150`
   */
  MappedDataSetParameters?: MappedDataSetParameter[];
  /**
   * @minLength `1`
   * @maxLength `2048`
   * @pattern `^[a-zA-Z0-9]+$`
   */
  Name: string;
  ParameterValueType: ParameterValueType;
  ValueWhenUnset?: StringValueWhenUnsetConfiguration;
};
/**
 * Type definition for `AWS::QuickSight::Template.StringValueWhenUnsetConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-stringvaluewhenunsetconfiguration.html}
 */
export type StringValueWhenUnsetConfiguration = {
  CustomValue?: string;
  ValueWhenUnsetOption?: ValueWhenUnsetOption;
};
/**
 * Type definition for `AWS::QuickSight::Template.StyledCellType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-styledcelltype.html}
 */
export type StyledCellType = "TOTAL" | "METRIC_HEADER" | "VALUE";
/**
 * Type definition for `AWS::QuickSight::Template.SubtotalOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-subtotaloptions.html}
 */
export type SubtotalOptions = {
  CustomLabel?: string;
  FieldLevel?: PivotTableSubtotalLevel;
  /**
   * @minLength `0`
   * @maxLength `100`
   */
  FieldLevelOptions?: PivotTableFieldSubtotalOptions[];
  MetricHeaderCellStyle?: TableCellStyle;
  /**
   * @minLength `0`
   * @maxLength `3`
   */
  StyleTargets?: TableStyleTarget[];
  TotalCellStyle?: TableCellStyle;
  TotalsVisibility?: Visibility;
  ValueCellStyle?: TableCellStyle;
};
/**
 * Type definition for `AWS::QuickSight::Template.TableAggregatedFieldWells`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-tableaggregatedfieldwells.html}
 */
export type TableAggregatedFieldWells = {
  /**
   * @minLength `0`
   * @maxLength `200`
   */
  GroupBy?: DimensionField[];
  /**
   * @minLength `0`
   * @maxLength `200`
   */
  Values?: MeasureField[];
};
/**
 * Type definition for `AWS::QuickSight::Template.TableBorderOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-tableborderoptions.html}
 */
export type TableBorderOptions = {
  /**
   * @pattern `^#[A-F0-9]{6}$`
   */
  Color?: string;
  Style?: TableBorderStyle;
  /**
   * @min `1`
   * @max `4`
   */
  Thickness?: number;
};
/**
 * Type definition for `AWS::QuickSight::Template.TableBorderStyle`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-tableborderstyle.html}
 */
export type TableBorderStyle = "NONE" | "SOLID";
/**
 * Type definition for `AWS::QuickSight::Template.TableCellConditionalFormatting`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-tablecellconditionalformatting.html}
 */
export type TableCellConditionalFormatting = {
  /**
   * @minLength `1`
   * @maxLength `512`
   */
  FieldId: string;
  TextFormat?: TextConditionalFormat;
};
/**
 * Type definition for `AWS::QuickSight::Template.TableCellImageScalingConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-tablecellimagescalingconfiguration.html}
 */
export type TableCellImageScalingConfiguration =
  | "FIT_TO_CELL_HEIGHT"
  | "FIT_TO_CELL_WIDTH"
  | "DO_NOT_SCALE";
/**
 * Type definition for `AWS::QuickSight::Template.TableCellImageSizingConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-tablecellimagesizingconfiguration.html}
 */
export type TableCellImageSizingConfiguration = {
  TableCellImageScalingConfiguration?: TableCellImageScalingConfiguration;
};
/**
 * Type definition for `AWS::QuickSight::Template.TableCellStyle`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-tablecellstyle.html}
 */
export type TableCellStyle = {
  /**
   * @pattern `^#[A-F0-9]{6}$`
   */
  BackgroundColor?: string;
  Border?: GlobalTableBorderOptions;
  FontConfiguration?: FontConfiguration;
  /**
   * @min `8`
   * @max `500`
   */
  Height?: number;
  HorizontalTextAlignment?: HorizontalTextAlignment;
  TextWrap?: TextWrap;
  VerticalTextAlignment?: VerticalTextAlignment;
  Visibility?: Visibility;
};
/**
 * Type definition for `AWS::QuickSight::Template.TableConditionalFormatting`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-tableconditionalformatting.html}
 */
export type TableConditionalFormatting = {
  /**
   * @minLength `0`
   * @maxLength `500`
   */
  ConditionalFormattingOptions?: TableConditionalFormattingOption[];
};
/**
 * Type definition for `AWS::QuickSight::Template.TableConditionalFormattingOption`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-tableconditionalformattingoption.html}
 */
export type TableConditionalFormattingOption = {
  Cell?: TableCellConditionalFormatting;
  Row?: TableRowConditionalFormatting;
};
/**
 * Type definition for `AWS::QuickSight::Template.TableConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-tableconfiguration.html}
 */
export type TableConfiguration = {
  FieldOptions?: TableFieldOptions;
  FieldWells?: TableFieldWells;
  PaginatedReportOptions?: TablePaginatedReportOptions;
  SortConfiguration?: TableSortConfiguration;
  /**
   * @minLength `0`
   * @maxLength `200`
   */
  TableInlineVisualizations?: TableInlineVisualization[];
  TableOptions?: TableOptions;
  TotalOptions?: TotalOptions;
};
/**
 * Type definition for `AWS::QuickSight::Template.TableFieldCustomIconContent`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-tablefieldcustomiconcontent.html}
 */
export type TableFieldCustomIconContent = {
  Icon?: TableFieldIconSetType;
};
/**
 * Type definition for `AWS::QuickSight::Template.TableFieldCustomTextContent`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-tablefieldcustomtextcontent.html}
 */
export type TableFieldCustomTextContent = {
  FontConfiguration: FontConfiguration;
  Value?: string;
};
/**
 * Type definition for `AWS::QuickSight::Template.TableFieldIconSetType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-tablefieldiconsettype.html}
 */
export type TableFieldIconSetType = "LINK";
/**
 * Type definition for `AWS::QuickSight::Template.TableFieldImageConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-tablefieldimageconfiguration.html}
 */
export type TableFieldImageConfiguration = {
  SizingOptions?: TableCellImageSizingConfiguration;
};
/**
 * Type definition for `AWS::QuickSight::Template.TableFieldLinkConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-tablefieldlinkconfiguration.html}
 */
export type TableFieldLinkConfiguration = {
  Content: TableFieldLinkContentConfiguration;
  Target: URLTargetConfiguration;
};
/**
 * Type definition for `AWS::QuickSight::Template.TableFieldLinkContentConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-tablefieldlinkcontentconfiguration.html}
 */
export type TableFieldLinkContentConfiguration = {
  CustomIconContent?: TableFieldCustomIconContent;
  CustomTextContent?: TableFieldCustomTextContent;
};
/**
 * Type definition for `AWS::QuickSight::Template.TableFieldOption`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-tablefieldoption.html}
 */
export type TableFieldOption = {
  /**
   * @minLength `1`
   * @maxLength `2048`
   */
  CustomLabel?: string;
  /**
   * @minLength `1`
   * @maxLength `512`
   */
  FieldId: string;
  URLStyling?: TableFieldURLConfiguration;
  Visibility?: Visibility;
  /**
   * String based length that is composed of value and unit in px
   */
  Width?: string;
};
/**
 * Type definition for `AWS::QuickSight::Template.TableFieldOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-tablefieldoptions.html}
 */
export type TableFieldOptions = {
  /**
   * @minLength `0`
   * @maxLength `200`
   */
  Order?: string[];
  PinnedFieldOptions?: TablePinnedFieldOptions;
  /**
   * @minLength `0`
   * @maxLength `100`
   */
  SelectedFieldOptions?: TableFieldOption[];
};
/**
 * Type definition for `AWS::QuickSight::Template.TableFieldURLConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-tablefieldurlconfiguration.html}
 */
export type TableFieldURLConfiguration = {
  ImageConfiguration?: TableFieldImageConfiguration;
  LinkConfiguration?: TableFieldLinkConfiguration;
};
/**
 * Type definition for `AWS::QuickSight::Template.TableFieldWells`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-tablefieldwells.html}
 */
export type TableFieldWells = {
  TableAggregatedFieldWells?: TableAggregatedFieldWells;
  TableUnaggregatedFieldWells?: TableUnaggregatedFieldWells;
};
/**
 * Type definition for `AWS::QuickSight::Template.TableInlineVisualization`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-tableinlinevisualization.html}
 */
export type TableInlineVisualization = {
  DataBars?: DataBarsOptions;
};
/**
 * Type definition for `AWS::QuickSight::Template.TableOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-tableoptions.html}
 */
export type TableOptions = {
  CellStyle?: TableCellStyle;
  HeaderStyle?: TableCellStyle;
  Orientation?: TableOrientation;
  RowAlternateColorOptions?: RowAlternateColorOptions;
};
/**
 * Type definition for `AWS::QuickSight::Template.TableOrientation`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-tableorientation.html}
 */
export type TableOrientation = "VERTICAL" | "HORIZONTAL";
/**
 * Type definition for `AWS::QuickSight::Template.TablePaginatedReportOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-tablepaginatedreportoptions.html}
 */
export type TablePaginatedReportOptions = {
  OverflowColumnHeaderVisibility?: Visibility;
  VerticalOverflowVisibility?: Visibility;
};
/**
 * Type definition for `AWS::QuickSight::Template.TablePinnedFieldOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-tablepinnedfieldoptions.html}
 */
export type TablePinnedFieldOptions = {
  /**
   * @minLength `0`
   * @maxLength `201`
   */
  PinnedLeftFields?: string[];
};
/**
 * Type definition for `AWS::QuickSight::Template.TableRowConditionalFormatting`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-tablerowconditionalformatting.html}
 */
export type TableRowConditionalFormatting = {
  BackgroundColor?: ConditionalFormattingColor;
  TextColor?: ConditionalFormattingColor;
};
/**
 * Type definition for `AWS::QuickSight::Template.TableSideBorderOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-tablesideborderoptions.html}
 */
export type TableSideBorderOptions = {
  Bottom?: TableBorderOptions;
  InnerHorizontal?: TableBorderOptions;
  InnerVertical?: TableBorderOptions;
  Left?: TableBorderOptions;
  Right?: TableBorderOptions;
  Top?: TableBorderOptions;
};
/**
 * Type definition for `AWS::QuickSight::Template.TableSortConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-tablesortconfiguration.html}
 */
export type TableSortConfiguration = {
  PaginationConfiguration?: PaginationConfiguration;
  /**
   * @minLength `0`
   * @maxLength `100`
   */
  RowSort?: FieldSortOptions[];
};
/**
 * Type definition for `AWS::QuickSight::Template.TableStyleTarget`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-tablestyletarget.html}
 */
export type TableStyleTarget = {
  CellType: StyledCellType;
};
/**
 * Type definition for `AWS::QuickSight::Template.TableTotalsPlacement`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-tabletotalsplacement.html}
 */
export type TableTotalsPlacement = "START" | "END" | "AUTO";
/**
 * Type definition for `AWS::QuickSight::Template.TableTotalsScrollStatus`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-tabletotalsscrollstatus.html}
 */
export type TableTotalsScrollStatus = "PINNED" | "SCROLLED";
/**
 * Type definition for `AWS::QuickSight::Template.TableUnaggregatedFieldWells`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-tableunaggregatedfieldwells.html}
 */
export type TableUnaggregatedFieldWells = {
  /**
   * @minLength `0`
   * @maxLength `200`
   */
  Values?: UnaggregatedField[];
};
/**
 * Type definition for `AWS::QuickSight::Template.TableVisual`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-tablevisual.html}
 */
export type TableVisual = {
  /**
   * @minLength `0`
   * @maxLength `10`
   */
  Actions?: VisualCustomAction[];
  ChartConfiguration?: TableConfiguration;
  ConditionalFormatting?: TableConditionalFormatting;
  Subtitle?: VisualSubtitleLabelOptions;
  Title?: VisualTitleLabelOptions;
  /**
   * @minLength `1`
   * @maxLength `512`
   * @pattern `^[\w\-]+$`
   */
  VisualId: string;
};
/**
 * Type definition for `AWS::QuickSight::Template.Tag`.
 * <p>The key or keys of the key-value pairs for the resource tag or tags assigned to the
            resource.</p>
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-tag.html}
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
 * Type definition for `AWS::QuickSight::Template.TargetVisualOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-targetvisualoptions.html}
 */
export type TargetVisualOptions = "ALL_VISUALS";
/**
 * Type definition for `AWS::QuickSight::Template.TemplateError`.
 * <p>List of errors that occurred when the template version creation failed.</p>
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-templateerror.html}
 */
export type TemplateError = {
  /**
   * <p>Description of the error type.</p>
   * @pattern `\S`
   */
  Message?: string;
  Type?: TemplateErrorType;
  /**
   * <p>An error path that shows which entities caused the template error.</p>
   * @minLength `0`
   * @maxLength `200`
   */
  ViolatedEntities?: Entity[];
};
/**
 * Type definition for `AWS::QuickSight::Template.TemplateErrorType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-templateerrortype.html}
 */
export type TemplateErrorType =
  | "SOURCE_NOT_FOUND"
  | "DATA_SET_NOT_FOUND"
  | "INTERNAL_FAILURE"
  | "ACCESS_DENIED";
/**
 * Type definition for `AWS::QuickSight::Template.TemplateSourceAnalysis`.
 * <p>The source analysis of the template.</p>
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-templatesourceanalysis.html}
 */
export type TemplateSourceAnalysis = {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  Arn: string;
  /**
     * <p>A structure containing information about the dataset references used as placeholders
                in the template.</p>
     * @minLength `1`
     */
  DataSetReferences: DataSetReference[];
};
/**
 * Type definition for `AWS::QuickSight::Template.TemplateSourceEntity`.
 * <p>The source entity of the template.</p>
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-templatesourceentity.html}
 */
export type TemplateSourceEntity = {
  /**
   * <p>The source analysis of the template.</p>
   */
  SourceAnalysis?: TemplateSourceAnalysis;
  /**
   * <p>The source template of the template.</p>
   */
  SourceTemplate?: TemplateSourceTemplate;
};
/**
 * Type definition for `AWS::QuickSight::Template.TemplateSourceTemplate`.
 * <p>The source template of the template.</p>
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-templatesourcetemplate.html}
 */
export type TemplateSourceTemplate = {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  Arn: string;
};
/**
 * Type definition for `AWS::QuickSight::Template.TemplateVersion`.
 * <p>A version of a template.</p>
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-templateversion.html}
 */
export type TemplateVersion = {
  /**
   * <p>The time that this template version was created.</p>
   */
  CreatedTime?: string;
  /**
     * <p>Schema of the dataset identified by the placeholder. Any dashboard created from this
                template should be bound to new datasets matching the same schema described through this
                API operation.</p>
     * @minLength `0`
     * @maxLength `30`
     */
  DataSetConfigurations?: DataSetConfiguration[];
  /**
   * <p>The description of the template.</p>
   * @minLength `1`
   * @maxLength `512`
   */
  Description?: string;
  /**
   * <p>Errors associated with this template version.</p>
   * @minLength `1`
   */
  Errors?: TemplateError[];
  /**
   * <p>A list of the associated sheets with the unique identifier and name of each sheet.</p>
   * @minLength `0`
   * @maxLength `20`
   */
  Sheets?: Sheet[];
  /**
     * <p>The Amazon Resource Name (ARN) of an analysis or template that was used to create this
                template.</p>
     */
  SourceEntityArn?: string;
  Status?: ResourceStatus;
  /**
   * <p>The ARN of the theme associated with this version of the template.</p>
   */
  ThemeArn?: string;
  /**
   * <p>The version number of the template version.</p>
   * @min `1`
   */
  VersionNumber?: number;
};
/**
 * Type definition for `AWS::QuickSight::Template.TemplateVersionDefinition`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-templateversiondefinition.html}
 */
export type TemplateVersionDefinition = {
  AnalysisDefaults?: AnalysisDefaults;
  /**
   * @minLength `0`
   * @maxLength `500`
   */
  CalculatedFields?: CalculatedField[];
  /**
   * @minLength `0`
   * @maxLength `2000`
   */
  ColumnConfigurations?: ColumnConfiguration[];
  /**
   * @minLength `0`
   * @maxLength `30`
   */
  DataSetConfigurations: DataSetConfiguration[];
  /**
   * @minLength `0`
   * @maxLength `2000`
   */
  FilterGroups?: FilterGroup[];
  Options?: AssetOptions;
  /**
   * @minLength `0`
   * @maxLength `200`
   */
  ParameterDeclarations?: ParameterDeclaration[];
  /**
   * @minLength `0`
   * @maxLength `20`
   */
  Sheets?: SheetDefinition[];
};
/**
 * Type definition for `AWS::QuickSight::Template.TextAreaControlDisplayOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-textareacontroldisplayoptions.html}
 */
export type TextAreaControlDisplayOptions = {
  InfoIconLabelOptions?: SheetControlInfoIconLabelOptions;
  PlaceholderOptions?: TextControlPlaceholderOptions;
  TitleOptions?: LabelOptions;
};
/**
 * Type definition for `AWS::QuickSight::Template.TextConditionalFormat`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-textconditionalformat.html}
 */
export type TextConditionalFormat = {
  BackgroundColor?: ConditionalFormattingColor;
  Icon?: ConditionalFormattingIcon;
  TextColor?: ConditionalFormattingColor;
};
/**
 * Type definition for `AWS::QuickSight::Template.TextControlPlaceholderOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-textcontrolplaceholderoptions.html}
 */
export type TextControlPlaceholderOptions = {
  Visibility?: Visibility;
};
/**
 * Type definition for `AWS::QuickSight::Template.TextFieldControlDisplayOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-textfieldcontroldisplayoptions.html}
 */
export type TextFieldControlDisplayOptions = {
  InfoIconLabelOptions?: SheetControlInfoIconLabelOptions;
  PlaceholderOptions?: TextControlPlaceholderOptions;
  TitleOptions?: LabelOptions;
};
/**
 * Type definition for `AWS::QuickSight::Template.TextWrap`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-textwrap.html}
 */
export type TextWrap = "NONE" | "WRAP";
/**
 * Type definition for `AWS::QuickSight::Template.ThousandSeparatorOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-thousandseparatoroptions.html}
 */
export type ThousandSeparatorOptions = {
  Symbol?: NumericSeparatorSymbol;
  Visibility?: Visibility;
};
/**
 * Type definition for `AWS::QuickSight::Template.TimeBasedForecastProperties`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-timebasedforecastproperties.html}
 */
export type TimeBasedForecastProperties = {
  LowerBoundary?: number;
  /**
   * @min `0`
   * @max `1000`
   */
  PeriodsBackward?: number;
  /**
   * @min `1`
   * @max `1000`
   */
  PeriodsForward?: number;
  /**
   * @min `50`
   * @max `95`
   */
  PredictionInterval?: number;
  /**
   * @min `1`
   * @max `180`
   */
  Seasonality?: number;
  UpperBoundary?: number;
};
/**
 * Type definition for `AWS::QuickSight::Template.TimeEqualityFilter`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-timeequalityfilter.html}
 */
export type TimeEqualityFilter = {
  Column: ColumnIdentifier;
  DefaultFilterControlConfiguration?: DefaultFilterControlConfiguration;
  /**
   * @minLength `1`
   * @maxLength `512`
   * @pattern `^[\w\-]+$`
   */
  FilterId: string;
  /**
   * @minLength `1`
   * @maxLength `2048`
   * @pattern `^[a-zA-Z0-9]+$`
   */
  ParameterName?: string;
  RollingDate?: RollingDateConfiguration;
  TimeGranularity?: TimeGranularity;
  Value?: string;
};
/**
 * Type definition for `AWS::QuickSight::Template.TimeGranularity`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-timegranularity.html}
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
 * Type definition for `AWS::QuickSight::Template.TimeRangeDrillDownFilter`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-timerangedrilldownfilter.html}
 */
export type TimeRangeDrillDownFilter = {
  Column: ColumnIdentifier;
  RangeMaximum: string;
  RangeMinimum: string;
  TimeGranularity: TimeGranularity;
};
/**
 * Type definition for `AWS::QuickSight::Template.TimeRangeFilter`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-timerangefilter.html}
 */
export type TimeRangeFilter = {
  Column: ColumnIdentifier;
  DefaultFilterControlConfiguration?: DefaultFilterControlConfiguration;
  ExcludePeriodConfiguration?: ExcludePeriodConfiguration;
  /**
   * @minLength `1`
   * @maxLength `512`
   * @pattern `^[\w\-]+$`
   */
  FilterId: string;
  IncludeMaximum?: boolean;
  IncludeMinimum?: boolean;
  NullOption: FilterNullOption;
  RangeMaximumValue?: TimeRangeFilterValue;
  RangeMinimumValue?: TimeRangeFilterValue;
  TimeGranularity?: TimeGranularity;
};
/**
 * Type definition for `AWS::QuickSight::Template.TimeRangeFilterValue`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-timerangefiltervalue.html}
 */
export type TimeRangeFilterValue = {
  /**
   * @minLength `1`
   * @maxLength `2048`
   * @pattern `^[a-zA-Z0-9]+$`
   */
  Parameter?: string;
  RollingDate?: RollingDateConfiguration;
  StaticValue?: string;
};
/**
 * Type definition for `AWS::QuickSight::Template.TooltipItem`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-tooltipitem.html}
 */
export type TooltipItem = {
  ColumnTooltipItem?: ColumnTooltipItem;
  FieldTooltipItem?: FieldTooltipItem;
};
/**
 * Type definition for `AWS::QuickSight::Template.TooltipOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-tooltipoptions.html}
 */
export type TooltipOptions = {
  FieldBasedTooltip?: FieldBasedTooltip;
  SelectedTooltipType?: SelectedTooltipType;
  TooltipVisibility?: Visibility;
};
/**
 * Type definition for `AWS::QuickSight::Template.TooltipTarget`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-tooltiptarget.html}
 */
export type TooltipTarget = "BOTH" | "BAR" | "LINE";
/**
 * Type definition for `AWS::QuickSight::Template.TooltipTitleType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-tooltiptitletype.html}
 */
export type TooltipTitleType = "NONE" | "PRIMARY_VALUE";
/**
 * Type definition for `AWS::QuickSight::Template.TopBottomComputationType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-topbottomcomputationtype.html}
 */
export type TopBottomComputationType = "TOP" | "BOTTOM";
/**
 * Type definition for `AWS::QuickSight::Template.TopBottomFilter`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-topbottomfilter.html}
 */
export type TopBottomFilter = {
  /**
   * @minLength `0`
   * @maxLength `100`
   */
  AggregationSortConfigurations: AggregationSortConfiguration[];
  Column: ColumnIdentifier;
  DefaultFilterControlConfiguration?: DefaultFilterControlConfiguration;
  /**
   * @minLength `1`
   * @maxLength `512`
   * @pattern `^[\w\-]+$`
   */
  FilterId: string;
  Limit?: number;
  /**
   * @minLength `1`
   * @maxLength `2048`
   * @pattern `^[a-zA-Z0-9]+$`
   */
  ParameterName?: string;
  TimeGranularity?: TimeGranularity;
};
/**
 * Type definition for `AWS::QuickSight::Template.TopBottomMoversComputation`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-topbottommoverscomputation.html}
 */
export type TopBottomMoversComputation = {
  Category?: DimensionField;
  /**
   * @minLength `1`
   * @maxLength `512`
   * @pattern `^[\w\-]+$`
   */
  ComputationId: string;
  /**
   * @min `1`
   * @max `20`
   */
  MoverSize?: number;
  Name?: string;
  SortOrder?: TopBottomSortOrder;
  Time?: DimensionField;
  Type: TopBottomComputationType;
  Value?: MeasureField;
};
/**
 * Type definition for `AWS::QuickSight::Template.TopBottomRankedComputation`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-topbottomrankedcomputation.html}
 */
export type TopBottomRankedComputation = {
  Category?: DimensionField;
  /**
   * @minLength `1`
   * @maxLength `512`
   * @pattern `^[\w\-]+$`
   */
  ComputationId: string;
  Name?: string;
  /**
   * @min `1`
   * @max `20`
   */
  ResultSize?: number;
  Type: TopBottomComputationType;
  Value?: MeasureField;
};
/**
 * Type definition for `AWS::QuickSight::Template.TopBottomSortOrder`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-topbottomsortorder.html}
 */
export type TopBottomSortOrder = "PERCENT_DIFFERENCE" | "ABSOLUTE_DIFFERENCE";
/**
 * Type definition for `AWS::QuickSight::Template.TotalAggregationComputation`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-totalaggregationcomputation.html}
 */
export type TotalAggregationComputation = {
  /**
   * @minLength `1`
   * @maxLength `512`
   * @pattern `^[\w\-]+$`
   */
  ComputationId: string;
  Name?: string;
  Value?: MeasureField;
};
/**
 * Type definition for `AWS::QuickSight::Template.TotalAggregationFunction`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-totalaggregationfunction.html}
 */
export type TotalAggregationFunction = {
  SimpleTotalAggregationFunction?: SimpleTotalAggregationFunction;
};
/**
 * Type definition for `AWS::QuickSight::Template.TotalAggregationOption`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-totalaggregationoption.html}
 */
export type TotalAggregationOption = {
  /**
   * @minLength `1`
   * @maxLength `512`
   */
  FieldId: string;
  TotalAggregationFunction: TotalAggregationFunction;
};
/**
 * Type definition for `AWS::QuickSight::Template.TotalOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-totaloptions.html}
 */
export type TotalOptions = {
  CustomLabel?: string;
  Placement?: TableTotalsPlacement;
  ScrollStatus?: TableTotalsScrollStatus;
  /**
   * @minLength `0`
   * @maxLength `200`
   */
  TotalAggregationOptions?: TotalAggregationOption[];
  TotalCellStyle?: TableCellStyle;
  TotalsVisibility?: Visibility;
};
/**
 * Type definition for `AWS::QuickSight::Template.TreeMapAggregatedFieldWells`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-treemapaggregatedfieldwells.html}
 */
export type TreeMapAggregatedFieldWells = {
  /**
   * @minLength `0`
   * @maxLength `1`
   */
  Colors?: MeasureField[];
  /**
   * @minLength `0`
   * @maxLength `1`
   */
  Groups?: DimensionField[];
  /**
   * @minLength `0`
   * @maxLength `1`
   */
  Sizes?: MeasureField[];
};
/**
 * Type definition for `AWS::QuickSight::Template.TreeMapConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-treemapconfiguration.html}
 */
export type TreeMapConfiguration = {
  ColorLabelOptions?: ChartAxisLabelOptions;
  ColorScale?: ColorScale;
  DataLabels?: DataLabelOptions;
  FieldWells?: TreeMapFieldWells;
  GroupLabelOptions?: ChartAxisLabelOptions;
  Legend?: LegendOptions;
  SizeLabelOptions?: ChartAxisLabelOptions;
  SortConfiguration?: TreeMapSortConfiguration;
  Tooltip?: TooltipOptions;
};
/**
 * Type definition for `AWS::QuickSight::Template.TreeMapFieldWells`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-treemapfieldwells.html}
 */
export type TreeMapFieldWells = {
  TreeMapAggregatedFieldWells?: TreeMapAggregatedFieldWells;
};
/**
 * Type definition for `AWS::QuickSight::Template.TreeMapSortConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-treemapsortconfiguration.html}
 */
export type TreeMapSortConfiguration = {
  TreeMapGroupItemsLimitConfiguration?: ItemsLimitConfiguration;
  /**
   * @minLength `0`
   * @maxLength `100`
   */
  TreeMapSort?: FieldSortOptions[];
};
/**
 * Type definition for `AWS::QuickSight::Template.TreeMapVisual`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-treemapvisual.html}
 */
export type TreeMapVisual = {
  /**
   * @minLength `0`
   * @maxLength `10`
   */
  Actions?: VisualCustomAction[];
  ChartConfiguration?: TreeMapConfiguration;
  /**
   * @minLength `0`
   * @maxLength `2`
   */
  ColumnHierarchies?: ColumnHierarchy[];
  Subtitle?: VisualSubtitleLabelOptions;
  Title?: VisualTitleLabelOptions;
  /**
   * @minLength `1`
   * @maxLength `512`
   * @pattern `^[\w\-]+$`
   */
  VisualId: string;
};
/**
 * Type definition for `AWS::QuickSight::Template.TrendArrowOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-trendarrowoptions.html}
 */
export type TrendArrowOptions = {
  Visibility?: Visibility;
};
/**
 * Type definition for `AWS::QuickSight::Template.UnaggregatedField`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-unaggregatedfield.html}
 */
export type UnaggregatedField = {
  Column: ColumnIdentifier;
  /**
   * @minLength `1`
   * @maxLength `512`
   */
  FieldId: string;
  FormatConfiguration?: FormatConfiguration;
};
/**
 * Type definition for `AWS::QuickSight::Template.UniqueValuesComputation`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-uniquevaluescomputation.html}
 */
export type UniqueValuesComputation = {
  Category?: DimensionField;
  /**
   * @minLength `1`
   * @maxLength `512`
   * @pattern `^[\w\-]+$`
   */
  ComputationId: string;
  Name?: string;
};
/**
 * Type definition for `AWS::QuickSight::Template.URLTargetConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-urltargetconfiguration.html}
 */
export type URLTargetConfiguration = "NEW_TAB" | "NEW_WINDOW" | "SAME_TAB";
/**
 * Type definition for `AWS::QuickSight::Template.ValidationStrategy`.
 * <p>The option to relax the validation that is required to create and update analyses, dashboards, and templates with definition objects. When you set this value to <code>LENIENT</code>, validation is skipped for specific errors.</p>
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-validationstrategy.html}
 */
export type ValidationStrategy = {
  Mode: ValidationStrategyMode;
};
/**
 * Type definition for `AWS::QuickSight::Template.ValidationStrategyMode`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-validationstrategymode.html}
 */
export type ValidationStrategyMode = "STRICT" | "LENIENT";
/**
 * Type definition for `AWS::QuickSight::Template.ValueWhenUnsetOption`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-valuewhenunsetoption.html}
 */
export type ValueWhenUnsetOption = "RECOMMENDED_VALUE" | "NULL";
/**
 * Type definition for `AWS::QuickSight::Template.VerticalTextAlignment`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-verticaltextalignment.html}
 */
export type VerticalTextAlignment = "TOP" | "MIDDLE" | "BOTTOM" | "AUTO";
/**
 * Type definition for `AWS::QuickSight::Template.Visibility`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-visibility.html}
 */
export type Visibility = "HIDDEN" | "VISIBLE";
/**
 * Type definition for `AWS::QuickSight::Template.VisibleRangeOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-visiblerangeoptions.html}
 */
export type VisibleRangeOptions = {
  PercentRange?: PercentVisibleRange;
};
/**
 * Type definition for `AWS::QuickSight::Template.Visual`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-visual.html}
 */
export type Visual = {
  BarChartVisual?: BarChartVisual;
  BoxPlotVisual?: BoxPlotVisual;
  ComboChartVisual?: ComboChartVisual;
  CustomContentVisual?: CustomContentVisual;
  EmptyVisual?: EmptyVisual;
  FilledMapVisual?: FilledMapVisual;
  FunnelChartVisual?: FunnelChartVisual;
  GaugeChartVisual?: GaugeChartVisual;
  GeospatialMapVisual?: GeospatialMapVisual;
  HeatMapVisual?: HeatMapVisual;
  HistogramVisual?: HistogramVisual;
  InsightVisual?: InsightVisual;
  KPIVisual?: KPIVisual;
  LineChartVisual?: LineChartVisual;
  PieChartVisual?: PieChartVisual;
  PivotTableVisual?: PivotTableVisual;
  RadarChartVisual?: RadarChartVisual;
  SankeyDiagramVisual?: SankeyDiagramVisual;
  ScatterPlotVisual?: ScatterPlotVisual;
  TableVisual?: TableVisual;
  TreeMapVisual?: TreeMapVisual;
  WaterfallVisual?: WaterfallVisual;
  WordCloudVisual?: WordCloudVisual;
};
/**
 * Type definition for `AWS::QuickSight::Template.VisualCustomAction`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-visualcustomaction.html}
 */
export type VisualCustomAction = {
  /**
   * @minLength `1`
   * @maxLength `2`
   */
  ActionOperations: VisualCustomActionOperation[];
  /**
   * @minLength `1`
   * @maxLength `512`
   * @pattern `^[\w\-]+$`
   */
  CustomActionId: string;
  /**
   * @minLength `1`
   * @maxLength `256`
   */
  Name: string;
  Status?: WidgetStatus;
  Trigger: VisualCustomActionTrigger;
};
/**
 * Type definition for `AWS::QuickSight::Template.VisualCustomActionOperation`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-visualcustomactionoperation.html}
 */
export type VisualCustomActionOperation = {
  FilterOperation?: CustomActionFilterOperation;
  NavigationOperation?: CustomActionNavigationOperation;
  SetParametersOperation?: CustomActionSetParametersOperation;
  URLOperation?: CustomActionURLOperation;
};
/**
 * Type definition for `AWS::QuickSight::Template.VisualCustomActionTrigger`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-visualcustomactiontrigger.html}
 */
export type VisualCustomActionTrigger = "DATA_POINT_CLICK" | "DATA_POINT_MENU";
/**
 * Type definition for `AWS::QuickSight::Template.VisualPalette`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-visualpalette.html}
 */
export type VisualPalette = {
  /**
   * @pattern `^#[A-F0-9]{6}$`
   */
  ChartColor?: string;
  /**
   * @minLength `0`
   * @maxLength `5000`
   */
  ColorMap?: DataPathColor[];
};
/**
 * Type definition for `AWS::QuickSight::Template.VisualSubtitleLabelOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-visualsubtitlelabeloptions.html}
 */
export type VisualSubtitleLabelOptions = {
  FormatText?: LongFormatText;
  Visibility?: Visibility;
};
/**
 * Type definition for `AWS::QuickSight::Template.VisualTitleLabelOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-visualtitlelabeloptions.html}
 */
export type VisualTitleLabelOptions = {
  FormatText?: ShortFormatText;
  Visibility?: Visibility;
};
/**
 * Type definition for `AWS::QuickSight::Template.WaterfallChartAggregatedFieldWells`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-waterfallchartaggregatedfieldwells.html}
 */
export type WaterfallChartAggregatedFieldWells = {
  /**
   * @minLength `0`
   * @maxLength `200`
   */
  Breakdowns?: DimensionField[];
  /**
   * @minLength `0`
   * @maxLength `200`
   */
  Categories?: DimensionField[];
  /**
   * @minLength `0`
   * @maxLength `200`
   */
  Values?: MeasureField[];
};
/**
 * Type definition for `AWS::QuickSight::Template.WaterfallChartColorConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-waterfallchartcolorconfiguration.html}
 */
export type WaterfallChartColorConfiguration = {
  GroupColorConfiguration?: WaterfallChartGroupColorConfiguration;
};
/**
 * Type definition for `AWS::QuickSight::Template.WaterfallChartConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-waterfallchartconfiguration.html}
 */
export type WaterfallChartConfiguration = {
  CategoryAxisDisplayOptions?: AxisDisplayOptions;
  CategoryAxisLabelOptions?: ChartAxisLabelOptions;
  ColorConfiguration?: WaterfallChartColorConfiguration;
  DataLabels?: DataLabelOptions;
  FieldWells?: WaterfallChartFieldWells;
  Legend?: LegendOptions;
  PrimaryYAxisDisplayOptions?: AxisDisplayOptions;
  PrimaryYAxisLabelOptions?: ChartAxisLabelOptions;
  SortConfiguration?: WaterfallChartSortConfiguration;
  VisualPalette?: VisualPalette;
  WaterfallChartOptions?: WaterfallChartOptions;
};
/**
 * Type definition for `AWS::QuickSight::Template.WaterfallChartFieldWells`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-waterfallchartfieldwells.html}
 */
export type WaterfallChartFieldWells = {
  WaterfallChartAggregatedFieldWells?: WaterfallChartAggregatedFieldWells;
};
/**
 * Type definition for `AWS::QuickSight::Template.WaterfallChartGroupColorConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-waterfallchartgroupcolorconfiguration.html}
 */
export type WaterfallChartGroupColorConfiguration = {
  /**
   * @pattern `^#[A-F0-9]{6}$`
   */
  NegativeBarColor?: string;
  /**
   * @pattern `^#[A-F0-9]{6}$`
   */
  PositiveBarColor?: string;
  /**
   * @pattern `^#[A-F0-9]{6}$`
   */
  TotalBarColor?: string;
};
/**
 * Type definition for `AWS::QuickSight::Template.WaterfallChartOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-waterfallchartoptions.html}
 */
export type WaterfallChartOptions = {
  TotalBarLabel?: string;
};
/**
 * Type definition for `AWS::QuickSight::Template.WaterfallChartSortConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-waterfallchartsortconfiguration.html}
 */
export type WaterfallChartSortConfiguration = {
  BreakdownItemsLimit?: ItemsLimitConfiguration;
  /**
   * @minLength `0`
   * @maxLength `100`
   */
  CategorySort?: FieldSortOptions[];
};
/**
 * Type definition for `AWS::QuickSight::Template.WaterfallVisual`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-waterfallvisual.html}
 */
export type WaterfallVisual = {
  /**
   * @minLength `0`
   * @maxLength `10`
   */
  Actions?: VisualCustomAction[];
  ChartConfiguration?: WaterfallChartConfiguration;
  /**
   * @minLength `0`
   * @maxLength `2`
   */
  ColumnHierarchies?: ColumnHierarchy[];
  Subtitle?: VisualSubtitleLabelOptions;
  Title?: VisualTitleLabelOptions;
  /**
   * @minLength `1`
   * @maxLength `512`
   * @pattern `^[\w\-]+$`
   */
  VisualId: string;
};
/**
 * Type definition for `AWS::QuickSight::Template.WhatIfPointScenario`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-whatifpointscenario.html}
 */
export type WhatIfPointScenario = {
  Date: string;
  Value: number;
};
/**
 * Type definition for `AWS::QuickSight::Template.WhatIfRangeScenario`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-whatifrangescenario.html}
 */
export type WhatIfRangeScenario = {
  EndDate: string;
  StartDate: string;
  Value: number;
};
/**
 * Type definition for `AWS::QuickSight::Template.WidgetStatus`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-widgetstatus.html}
 */
export type WidgetStatus = "ENABLED" | "DISABLED";
/**
 * Type definition for `AWS::QuickSight::Template.WordCloudAggregatedFieldWells`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-wordcloudaggregatedfieldwells.html}
 */
export type WordCloudAggregatedFieldWells = {
  /**
   * @minLength `0`
   * @maxLength `10`
   */
  GroupBy?: DimensionField[];
  /**
   * @minLength `0`
   * @maxLength `1`
   */
  Size?: MeasureField[];
};
/**
 * Type definition for `AWS::QuickSight::Template.WordCloudChartConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-wordcloudchartconfiguration.html}
 */
export type WordCloudChartConfiguration = {
  CategoryLabelOptions?: ChartAxisLabelOptions;
  FieldWells?: WordCloudFieldWells;
  SortConfiguration?: WordCloudSortConfiguration;
  WordCloudOptions?: WordCloudOptions;
};
/**
 * Type definition for `AWS::QuickSight::Template.WordCloudCloudLayout`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-wordcloudcloudlayout.html}
 */
export type WordCloudCloudLayout = "FLUID" | "NORMAL";
/**
 * Type definition for `AWS::QuickSight::Template.WordCloudFieldWells`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-wordcloudfieldwells.html}
 */
export type WordCloudFieldWells = {
  WordCloudAggregatedFieldWells?: WordCloudAggregatedFieldWells;
};
/**
 * Type definition for `AWS::QuickSight::Template.WordCloudOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-wordcloudoptions.html}
 */
export type WordCloudOptions = {
  CloudLayout?: WordCloudCloudLayout;
  /**
   * @min `1`
   * @max `100`
   */
  MaximumStringLength?: number;
  WordCasing?: WordCloudWordCasing;
  WordOrientation?: WordCloudWordOrientation;
  WordPadding?: WordCloudWordPadding;
  WordScaling?: WordCloudWordScaling;
};
/**
 * Type definition for `AWS::QuickSight::Template.WordCloudSortConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-wordcloudsortconfiguration.html}
 */
export type WordCloudSortConfiguration = {
  CategoryItemsLimit?: ItemsLimitConfiguration;
  /**
   * @minLength `0`
   * @maxLength `100`
   */
  CategorySort?: FieldSortOptions[];
};
/**
 * Type definition for `AWS::QuickSight::Template.WordCloudVisual`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-wordcloudvisual.html}
 */
export type WordCloudVisual = {
  /**
   * @minLength `0`
   * @maxLength `10`
   */
  Actions?: VisualCustomAction[];
  ChartConfiguration?: WordCloudChartConfiguration;
  /**
   * @minLength `0`
   * @maxLength `2`
   */
  ColumnHierarchies?: ColumnHierarchy[];
  Subtitle?: VisualSubtitleLabelOptions;
  Title?: VisualTitleLabelOptions;
  /**
   * @minLength `1`
   * @maxLength `512`
   * @pattern `^[\w\-]+$`
   */
  VisualId: string;
};
/**
 * Type definition for `AWS::QuickSight::Template.WordCloudWordCasing`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-wordcloudwordcasing.html}
 */
export type WordCloudWordCasing = "LOWER_CASE" | "EXISTING_CASE";
/**
 * Type definition for `AWS::QuickSight::Template.WordCloudWordOrientation`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-wordcloudwordorientation.html}
 */
export type WordCloudWordOrientation = "HORIZONTAL" | "HORIZONTAL_AND_VERTICAL";
/**
 * Type definition for `AWS::QuickSight::Template.WordCloudWordPadding`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-wordcloudwordpadding.html}
 */
export type WordCloudWordPadding = "NONE" | "SMALL" | "MEDIUM" | "LARGE";
/**
 * Type definition for `AWS::QuickSight::Template.WordCloudWordScaling`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-wordcloudwordscaling.html}
 */
export type WordCloudWordScaling = "EMPHASIZE" | "NORMAL";
/**
 * Definition of the AWS::QuickSight::Template Resource Type.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-template.html}
 */
export class QuickSightTemplate extends $Resource<
  "AWS::QuickSight::Template",
  QuickSightTemplateProperties,
  QuickSightTemplateAttributes
> {
  public static readonly Type = "AWS::QuickSight::Template";
  constructor(
    logicalId: string,
    properties: QuickSightTemplateProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, QuickSightTemplate.Type, properties, options);
  }
}
