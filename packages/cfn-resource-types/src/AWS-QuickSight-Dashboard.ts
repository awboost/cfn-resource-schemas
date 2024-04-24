import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Definition of the AWS::QuickSight::Dashboard Resource Type.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-dashboard.html}
 */
export type QuickSightDashboardProperties = {
  /**
   * @minLength `12`
   * @maxLength `12`
   * @pattern `^[0-9]{12}$`
   */
  AwsAccountId: string;
  /**
   * @minLength `1`
   * @maxLength `512`
   * @pattern `^[\w\-]+$`
   */
  DashboardId: string;
  /**
   * <p>Dashboard publish options.</p>
   */
  DashboardPublishOptions?: DashboardPublishOptions;
  Definition?: DashboardVersionDefinition;
  /**
   * @minLength `0`
   * @maxLength `5`
   */
  LinkEntities?: string[];
  LinkSharingConfiguration?: LinkSharingConfiguration;
  /**
   * @minLength `1`
   * @maxLength `2048`
   */
  Name: string;
  /**
   * <p>A list of Amazon QuickSight parameters and the list's override values.</p>
   */
  Parameters?: Parameters;
  /**
   * @minLength `1`
   * @maxLength `64`
   */
  Permissions?: ResourcePermission[];
  /**
   * <p>Dashboard source entity.</p>
   */
  SourceEntity?: DashboardSourceEntity;
  /**
   * @minLength `1`
   * @maxLength `200`
   */
  Tags?: Tag[];
  ThemeArn?: string;
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
 * Attribute type definition for `AWS::QuickSight::Dashboard`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-dashboard.html#aws-resource-quicksight-dashboard-return-values}
 */
export type QuickSightDashboardAttributes = {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  Arn: string;
  /**
   * <p>The time that this dashboard was created.</p>
   */
  CreatedTime: string;
  /**
   * <p>The last time that this dashboard was published.</p>
   */
  LastPublishedTime: string;
  /**
   * <p>The last time that this dashboard was updated.</p>
   */
  LastUpdatedTime: string;
  /**
   * <p>Dashboard version.</p>
   */
  Version: {
    /**
     * <p>The Amazon Resource Name (ARN) of the resource.</p>
     */
    Arn: string;
    /**
     * <p>The time that this dashboard version was created.</p>
     */
    CreatedTime: string;
    /**
         * <p>The Amazon Resource Numbers (ARNs) for the datasets that are associated with this
                    version of the dashboard.</p>
         * @minLength `0`
         * @maxLength `100`
         */
    DataSetArns: string[];
    /**
     * <p>Description.</p>
     * @minLength `1`
     * @maxLength `512`
     */
    Description: string;
    /**
     * <p>Errors associated with this dashboard version.</p>
     * @minLength `1`
     */
    Errors: {
      /**
       * <p>Message.</p>
       * @pattern `\S`
       */
      Message: string;
      Type: DashboardErrorType;
      /**
       * <p>Lists the violated entities that caused the dashboard error.</p>
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
     * <p>Source entity ARN.</p>
     */
    SourceEntityArn: string;
    Status: ResourceStatus;
    /**
     * <p>The ARN of the theme associated with a version of the dashboard.</p>
     */
    ThemeArn: string;
    /**
     * <p>Version number for this version of the dashboard.</p>
     * @min `1`
     */
    VersionNumber: number;
  };
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.AdHocFilteringOption`.
 * <p>An ad hoc (one-time) filtering option.</p>
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-adhocfilteringoption.html}
 */
export type AdHocFilteringOption = {
  AvailabilityStatus?: DashboardBehavior;
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.AggregationFunction`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-aggregationfunction.html}
 */
export type AggregationFunction = {
  AttributeAggregationFunction?: AttributeAggregationFunction;
  CategoricalAggregationFunction?: CategoricalAggregationFunction;
  DateAggregationFunction?: DateAggregationFunction;
  NumericalAggregationFunction?: NumericalAggregationFunction;
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.AggregationSortConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-aggregationsortconfiguration.html}
 */
export type AggregationSortConfiguration = {
  AggregationFunction?: AggregationFunction;
  Column: ColumnIdentifier;
  SortDirection: SortDirection;
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.AllSheetsFilterScopeConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-allsheetsfilterscopeconfiguration.html}
 */
export type AllSheetsFilterScopeConfiguration = Record<string, any>;
/**
 * Type definition for `AWS::QuickSight::Dashboard.AnalysisDefaults`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-analysisdefaults.html}
 */
export type AnalysisDefaults = {
  DefaultNewSheetConfiguration: DefaultNewSheetConfiguration;
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.AnchorDateConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-anchordateconfiguration.html}
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
 * Type definition for `AWS::QuickSight::Dashboard.AnchorOption`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-anchoroption.html}
 */
export type AnchorOption = "NOW";
/**
 * Type definition for `AWS::QuickSight::Dashboard.ArcAxisConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-arcaxisconfiguration.html}
 */
export type ArcAxisConfiguration = {
  Range?: ArcAxisDisplayRange;
  ReserveRange?: number;
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.ArcAxisDisplayRange`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-arcaxisdisplayrange.html}
 */
export type ArcAxisDisplayRange = {
  Max?: number;
  Min?: number;
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.ArcConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-arcconfiguration.html}
 */
export type ArcConfiguration = {
  ArcAngle?: number;
  ArcThickness?: ArcThicknessOptions;
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.ArcOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-arcoptions.html}
 */
export type ArcOptions = {
  ArcThickness?: ArcThickness;
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.ArcThickness`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-arcthickness.html}
 */
export type ArcThickness = "SMALL" | "MEDIUM" | "LARGE" | "WHOLE";
/**
 * Type definition for `AWS::QuickSight::Dashboard.ArcThicknessOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-arcthicknessoptions.html}
 */
export type ArcThicknessOptions = "SMALL" | "MEDIUM" | "LARGE";
/**
 * Type definition for `AWS::QuickSight::Dashboard.AssetOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-assetoptions.html}
 */
export type AssetOptions = {
  Timezone?: string;
  WeekStart?: DayOfTheWeek;
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.AttributeAggregationFunction`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-attributeaggregationfunction.html}
 */
export type AttributeAggregationFunction = {
  SimpleAttributeAggregation?: SimpleAttributeAggregationFunction;
  ValueForMultipleValues?: string;
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.AxisBinding`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-axisbinding.html}
 */
export type AxisBinding = "PRIMARY_YAXIS" | "SECONDARY_YAXIS";
/**
 * Type definition for `AWS::QuickSight::Dashboard.AxisDataOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-axisdataoptions.html}
 */
export type AxisDataOptions = {
  DateAxisOptions?: DateAxisOptions;
  NumericAxisOptions?: NumericAxisOptions;
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.AxisDisplayDataDrivenRange`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-axisdisplaydatadrivenrange.html}
 */
export type AxisDisplayDataDrivenRange = Record<string, any>;
/**
 * Type definition for `AWS::QuickSight::Dashboard.AxisDisplayMinMaxRange`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-axisdisplayminmaxrange.html}
 */
export type AxisDisplayMinMaxRange = {
  Maximum?: number;
  Minimum?: number;
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.AxisDisplayOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-axisdisplayoptions.html}
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
 * Type definition for `AWS::QuickSight::Dashboard.AxisDisplayRange`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-axisdisplayrange.html}
 */
export type AxisDisplayRange = {
  DataDriven?: AxisDisplayDataDrivenRange;
  MinMax?: AxisDisplayMinMaxRange;
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.AxisLabelOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-axislabeloptions.html}
 */
export type AxisLabelOptions = {
  ApplyTo?: AxisLabelReferenceOptions;
  CustomLabel?: string;
  FontConfiguration?: FontConfiguration;
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.AxisLabelReferenceOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-axislabelreferenceoptions.html}
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
 * Type definition for `AWS::QuickSight::Dashboard.AxisLinearScale`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-axislinearscale.html}
 */
export type AxisLinearScale = {
  StepCount?: number;
  StepSize?: number;
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.AxisLogarithmicScale`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-axislogarithmicscale.html}
 */
export type AxisLogarithmicScale = {
  Base?: number;
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.AxisScale`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-axisscale.html}
 */
export type AxisScale = {
  Linear?: AxisLinearScale;
  Logarithmic?: AxisLogarithmicScale;
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.AxisTickLabelOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-axisticklabeloptions.html}
 */
export type AxisTickLabelOptions = {
  LabelOptions?: LabelOptions;
  RotationAngle?: number;
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.BarChartAggregatedFieldWells`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-barchartaggregatedfieldwells.html}
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
 * Type definition for `AWS::QuickSight::Dashboard.BarChartConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-barchartconfiguration.html}
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
 * Type definition for `AWS::QuickSight::Dashboard.BarChartFieldWells`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-barchartfieldwells.html}
 */
export type BarChartFieldWells = {
  BarChartAggregatedFieldWells?: BarChartAggregatedFieldWells;
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.BarChartOrientation`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-barchartorientation.html}
 */
export type BarChartOrientation = "HORIZONTAL" | "VERTICAL";
/**
 * Type definition for `AWS::QuickSight::Dashboard.BarChartSortConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-barchartsortconfiguration.html}
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
 * Type definition for `AWS::QuickSight::Dashboard.BarChartVisual`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-barchartvisual.html}
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
 * Type definition for `AWS::QuickSight::Dashboard.BarsArrangement`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-barsarrangement.html}
 */
export type BarsArrangement = "CLUSTERED" | "STACKED" | "STACKED_PERCENT";
/**
 * Type definition for `AWS::QuickSight::Dashboard.BaseMapStyleType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-basemapstyletype.html}
 */
export type BaseMapStyleType =
  | "LIGHT_GRAY"
  | "DARK_GRAY"
  | "STREET"
  | "IMAGERY";
/**
 * Type definition for `AWS::QuickSight::Dashboard.BinCountOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-bincountoptions.html}
 */
export type BinCountOptions = {
  /**
   * @min `0`
   */
  Value?: number;
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.BinWidthOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-binwidthoptions.html}
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
 * Type definition for `AWS::QuickSight::Dashboard.BodySectionConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-bodysectionconfiguration.html}
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
 * Type definition for `AWS::QuickSight::Dashboard.BodySectionContent`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-bodysectioncontent.html}
 */
export type BodySectionContent = {
  Layout?: SectionLayoutConfiguration;
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.BoxPlotAggregatedFieldWells`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-boxplotaggregatedfieldwells.html}
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
 * Type definition for `AWS::QuickSight::Dashboard.BoxPlotChartConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-boxplotchartconfiguration.html}
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
 * Type definition for `AWS::QuickSight::Dashboard.BoxPlotFieldWells`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-boxplotfieldwells.html}
 */
export type BoxPlotFieldWells = {
  BoxPlotAggregatedFieldWells?: BoxPlotAggregatedFieldWells;
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.BoxPlotFillStyle`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-boxplotfillstyle.html}
 */
export type BoxPlotFillStyle = "SOLID" | "TRANSPARENT";
/**
 * Type definition for `AWS::QuickSight::Dashboard.BoxPlotOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-boxplotoptions.html}
 */
export type BoxPlotOptions = {
  AllDataPointsVisibility?: Visibility;
  OutlierVisibility?: Visibility;
  StyleOptions?: BoxPlotStyleOptions;
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.BoxPlotSortConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-boxplotsortconfiguration.html}
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
 * Type definition for `AWS::QuickSight::Dashboard.BoxPlotStyleOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-boxplotstyleoptions.html}
 */
export type BoxPlotStyleOptions = {
  FillStyle?: BoxPlotFillStyle;
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.BoxPlotVisual`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-boxplotvisual.html}
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
 * Type definition for `AWS::QuickSight::Dashboard.CalculatedField`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-calculatedfield.html}
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
 * Type definition for `AWS::QuickSight::Dashboard.CalculatedMeasureField`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-calculatedmeasurefield.html}
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
 * Type definition for `AWS::QuickSight::Dashboard.CascadingControlConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-cascadingcontrolconfiguration.html}
 */
export type CascadingControlConfiguration = {
  /**
   * @minLength `0`
   * @maxLength `200`
   */
  SourceControls?: CascadingControlSource[];
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.CascadingControlSource`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-cascadingcontrolsource.html}
 */
export type CascadingControlSource = {
  ColumnToMatch?: ColumnIdentifier;
  SourceSheetControlId?: string;
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.CategoricalAggregationFunction`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-categoricalaggregationfunction.html}
 */
export type CategoricalAggregationFunction = "COUNT" | "DISTINCT_COUNT";
/**
 * Type definition for `AWS::QuickSight::Dashboard.CategoricalDimensionField`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-categoricaldimensionfield.html}
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
 * Type definition for `AWS::QuickSight::Dashboard.CategoricalMeasureField`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-categoricalmeasurefield.html}
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
 * Type definition for `AWS::QuickSight::Dashboard.CategoryDrillDownFilter`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-categorydrilldownfilter.html}
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
 * Type definition for `AWS::QuickSight::Dashboard.CategoryFilter`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-categoryfilter.html}
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
 * Type definition for `AWS::QuickSight::Dashboard.CategoryFilterConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-categoryfilterconfiguration.html}
 */
export type CategoryFilterConfiguration = {
  CustomFilterConfiguration?: CustomFilterConfiguration;
  CustomFilterListConfiguration?: CustomFilterListConfiguration;
  FilterListConfiguration?: FilterListConfiguration;
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.CategoryFilterMatchOperator`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-categoryfiltermatchoperator.html}
 */
export type CategoryFilterMatchOperator =
  | "EQUALS"
  | "DOES_NOT_EQUAL"
  | "CONTAINS"
  | "DOES_NOT_CONTAIN"
  | "STARTS_WITH"
  | "ENDS_WITH";
/**
 * Type definition for `AWS::QuickSight::Dashboard.CategoryFilterSelectAllOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-categoryfilterselectalloptions.html}
 */
export type CategoryFilterSelectAllOptions = "FILTER_ALL_VALUES";
/**
 * Type definition for `AWS::QuickSight::Dashboard.ChartAxisLabelOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-chartaxislabeloptions.html}
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
 * Type definition for `AWS::QuickSight::Dashboard.ClusterMarker`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-clustermarker.html}
 */
export type ClusterMarker = {
  SimpleClusterMarker?: SimpleClusterMarker;
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.ClusterMarkerConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-clustermarkerconfiguration.html}
 */
export type ClusterMarkerConfiguration = {
  ClusterMarker?: ClusterMarker;
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.ColorFillType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-colorfilltype.html}
 */
export type ColorFillType = "DISCRETE" | "GRADIENT";
/**
 * Type definition for `AWS::QuickSight::Dashboard.ColorScale`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-colorscale.html}
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
 * Type definition for `AWS::QuickSight::Dashboard.ColorsConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-colorsconfiguration.html}
 */
export type ColorsConfiguration = {
  /**
   * @minLength `0`
   * @maxLength `50`
   */
  CustomColors?: CustomColor[];
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.ColumnConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-columnconfiguration.html}
 */
export type ColumnConfiguration = {
  ColorsConfiguration?: ColorsConfiguration;
  Column: ColumnIdentifier;
  FormatConfiguration?: FormatConfiguration;
  Role?: ColumnRole;
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.ColumnHierarchy`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-columnhierarchy.html}
 */
export type ColumnHierarchy = {
  DateTimeHierarchy?: DateTimeHierarchy;
  ExplicitHierarchy?: ExplicitHierarchy;
  PredefinedHierarchy?: PredefinedHierarchy;
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.ColumnIdentifier`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-columnidentifier.html}
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
 * Type definition for `AWS::QuickSight::Dashboard.ColumnRole`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-columnrole.html}
 */
export type ColumnRole = "DIMENSION" | "MEASURE";
/**
 * Type definition for `AWS::QuickSight::Dashboard.ColumnSort`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-columnsort.html}
 */
export type ColumnSort = {
  AggregationFunction?: AggregationFunction;
  Direction: SortDirection;
  SortBy: ColumnIdentifier;
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.ColumnTooltipItem`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-columntooltipitem.html}
 */
export type ColumnTooltipItem = {
  Aggregation?: AggregationFunction;
  Column: ColumnIdentifier;
  Label?: string;
  Visibility?: Visibility;
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.ComboChartAggregatedFieldWells`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-combochartaggregatedfieldwells.html}
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
 * Type definition for `AWS::QuickSight::Dashboard.ComboChartConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-combochartconfiguration.html}
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
  SortConfiguration?: ComboChartSortConfiguration;
  Tooltip?: TooltipOptions;
  VisualPalette?: VisualPalette;
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.ComboChartFieldWells`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-combochartfieldwells.html}
 */
export type ComboChartFieldWells = {
  ComboChartAggregatedFieldWells?: ComboChartAggregatedFieldWells;
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.ComboChartSortConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-combochartsortconfiguration.html}
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
 * Type definition for `AWS::QuickSight::Dashboard.ComboChartVisual`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-combochartvisual.html}
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
 * Type definition for `AWS::QuickSight::Dashboard.ComparisonConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-comparisonconfiguration.html}
 */
export type ComparisonConfiguration = {
  ComparisonFormat?: ComparisonFormatConfiguration;
  ComparisonMethod?: ComparisonMethod;
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.ComparisonFormatConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-comparisonformatconfiguration.html}
 */
export type ComparisonFormatConfiguration = {
  NumberDisplayFormatConfiguration?: NumberDisplayFormatConfiguration;
  PercentageDisplayFormatConfiguration?: PercentageDisplayFormatConfiguration;
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.ComparisonMethod`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-comparisonmethod.html}
 */
export type ComparisonMethod = "DIFFERENCE" | "PERCENT_DIFFERENCE" | "PERCENT";
/**
 * Type definition for `AWS::QuickSight::Dashboard.Computation`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-computation.html}
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
 * Type definition for `AWS::QuickSight::Dashboard.ConditionalFormattingColor`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-conditionalformattingcolor.html}
 */
export type ConditionalFormattingColor = {
  Gradient?: ConditionalFormattingGradientColor;
  Solid?: ConditionalFormattingSolidColor;
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.ConditionalFormattingCustomIconCondition`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-conditionalformattingcustomiconcondition.html}
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
 * Type definition for `AWS::QuickSight::Dashboard.ConditionalFormattingCustomIconOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-conditionalformattingcustomiconoptions.html}
 */
export type ConditionalFormattingCustomIconOptions = {
  Icon?: Icon;
  /**
   * @pattern `^[^\u0000-\u00FF]$`
   */
  UnicodeIcon?: string;
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.ConditionalFormattingGradientColor`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-conditionalformattinggradientcolor.html}
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
 * Type definition for `AWS::QuickSight::Dashboard.ConditionalFormattingIcon`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-conditionalformattingicon.html}
 */
export type ConditionalFormattingIcon = {
  CustomCondition?: ConditionalFormattingCustomIconCondition;
  IconSet?: ConditionalFormattingIconSet;
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.ConditionalFormattingIconDisplayConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-conditionalformattingicondisplayconfiguration.html}
 */
export type ConditionalFormattingIconDisplayConfiguration = {
  IconDisplayOption?: ConditionalFormattingIconDisplayOption;
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.ConditionalFormattingIconDisplayOption`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-conditionalformattingicondisplayoption.html}
 */
export type ConditionalFormattingIconDisplayOption = "ICON_ONLY";
/**
 * Type definition for `AWS::QuickSight::Dashboard.ConditionalFormattingIconSet`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-conditionalformattingiconset.html}
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
 * Type definition for `AWS::QuickSight::Dashboard.ConditionalFormattingIconSetType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-conditionalformattingiconsettype.html}
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
 * Type definition for `AWS::QuickSight::Dashboard.ConditionalFormattingSolidColor`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-conditionalformattingsolidcolor.html}
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
 * Type definition for `AWS::QuickSight::Dashboard.ContributionAnalysisDefault`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-contributionanalysisdefault.html}
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
 * Type definition for `AWS::QuickSight::Dashboard.CrossDatasetTypes`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-crossdatasettypes.html}
 */
export type CrossDatasetTypes = "ALL_DATASETS" | "SINGLE_DATASET";
/**
 * Type definition for `AWS::QuickSight::Dashboard.CurrencyDisplayFormatConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-currencydisplayformatconfiguration.html}
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
 * Type definition for `AWS::QuickSight::Dashboard.CustomActionFilterOperation`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-customactionfilteroperation.html}
 */
export type CustomActionFilterOperation = {
  SelectedFieldsConfiguration: FilterOperationSelectedFieldsConfiguration;
  TargetVisualsConfiguration: FilterOperationTargetVisualsConfiguration;
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.CustomActionNavigationOperation`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-customactionnavigationoperation.html}
 */
export type CustomActionNavigationOperation = {
  LocalNavigationConfiguration?: LocalNavigationConfiguration;
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.CustomActionSetParametersOperation`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-customactionsetparametersoperation.html}
 */
export type CustomActionSetParametersOperation = {
  /**
   * @minLength `1`
   * @maxLength `200`
   */
  ParameterValueConfigurations: SetParameterValueConfiguration[];
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.CustomActionURLOperation`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-customactionurloperation.html}
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
 * Type definition for `AWS::QuickSight::Dashboard.CustomColor`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-customcolor.html}
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
 * Type definition for `AWS::QuickSight::Dashboard.CustomContentConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-customcontentconfiguration.html}
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
 * Type definition for `AWS::QuickSight::Dashboard.CustomContentImageScalingConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-customcontentimagescalingconfiguration.html}
 */
export type CustomContentImageScalingConfiguration =
  | "FIT_TO_HEIGHT"
  | "FIT_TO_WIDTH"
  | "DO_NOT_SCALE"
  | "SCALE_TO_VISUAL";
/**
 * Type definition for `AWS::QuickSight::Dashboard.CustomContentType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-customcontenttype.html}
 */
export type CustomContentType = "IMAGE" | "OTHER_EMBEDDED_CONTENT";
/**
 * Type definition for `AWS::QuickSight::Dashboard.CustomContentVisual`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-customcontentvisual.html}
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
 * Type definition for `AWS::QuickSight::Dashboard.CustomFilterConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-customfilterconfiguration.html}
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
 * Type definition for `AWS::QuickSight::Dashboard.CustomFilterListConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-customfilterlistconfiguration.html}
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
 * Type definition for `AWS::QuickSight::Dashboard.CustomNarrativeOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-customnarrativeoptions.html}
 */
export type CustomNarrativeOptions = {
  /**
   * @minLength `0`
   * @maxLength `150000`
   */
  Narrative: string;
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.CustomParameterValues`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-customparametervalues.html}
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
 * Type definition for `AWS::QuickSight::Dashboard.CustomValuesConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-customvaluesconfiguration.html}
 */
export type CustomValuesConfiguration = {
  CustomValues: CustomParameterValues;
  IncludeNullValue?: boolean;
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.DashboardBehavior`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-dashboardbehavior.html}
 */
export type DashboardBehavior = "ENABLED" | "DISABLED";
/**
 * Type definition for `AWS::QuickSight::Dashboard.DashboardError`.
 * <p>Dashboard error.</p>
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-dashboarderror.html}
 */
export type DashboardError = {
  /**
   * <p>Message.</p>
   * @pattern `\S`
   */
  Message?: string;
  Type?: DashboardErrorType;
  /**
   * <p>Lists the violated entities that caused the dashboard error.</p>
   * @minLength `0`
   * @maxLength `200`
   */
  ViolatedEntities?: Entity[];
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.DashboardErrorType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-dashboarderrortype.html}
 */
export type DashboardErrorType =
  | "ACCESS_DENIED"
  | "SOURCE_NOT_FOUND"
  | "DATA_SET_NOT_FOUND"
  | "INTERNAL_FAILURE"
  | "PARAMETER_VALUE_INCOMPATIBLE"
  | "PARAMETER_TYPE_INVALID"
  | "PARAMETER_NOT_FOUND"
  | "COLUMN_TYPE_MISMATCH"
  | "COLUMN_GEOGRAPHIC_ROLE_MISMATCH"
  | "COLUMN_REPLACEMENT_MISSING";
/**
 * Type definition for `AWS::QuickSight::Dashboard.DashboardPublishOptions`.
 * <p>Dashboard publish options.</p>
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-dashboardpublishoptions.html}
 */
export type DashboardPublishOptions = {
  /**
   * <p>An ad hoc (one-time) filtering option.</p>
   */
  AdHocFilteringOption?: AdHocFilteringOption;
  /**
   * <p>The drill down options for data points in a dashbaord.</p>
   */
  DataPointDrillUpDownOption?: DataPointDrillUpDownOption;
  /**
   * <p>The data point menu options of a dashboard.</p>
   */
  DataPointMenuLabelOption?: DataPointMenuLabelOption;
  /**
   * <p>The data point tooltip options.</p>
   */
  DataPointTooltipOption?: DataPointTooltipOption;
  /**
   * <p>Export to .csv option.</p>
   */
  ExportToCSVOption?: ExportToCSVOption;
  /**
   * <p>Determines whether or not hidden fields are visible on exported dashbaords.</p>
   */
  ExportWithHiddenFieldsOption?: ExportWithHiddenFieldsOption;
  /**
   * <p>Sheet controls option.</p>
   */
  SheetControlsOption?: SheetControlsOption;
  /**
   * <p>The sheet layout maximization options of a dashbaord.</p>
   */
  SheetLayoutElementMaximizationOption?: SheetLayoutElementMaximizationOption;
  VisualAxisSortOption?: VisualAxisSortOption;
  VisualMenuOption?: VisualMenuOption;
  /**
   * <p>The visual publish options of a visual in a dashboard</p>
   */
  VisualPublishOptions?: DashboardVisualPublishOptions;
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.DashboardSourceEntity`.
 * <p>Dashboard source entity.</p>
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-dashboardsourceentity.html}
 */
export type DashboardSourceEntity = {
  /**
   * <p>Dashboard source template.</p>
   */
  SourceTemplate?: DashboardSourceTemplate;
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.DashboardSourceTemplate`.
 * <p>Dashboard source template.</p>
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-dashboardsourcetemplate.html}
 */
export type DashboardSourceTemplate = {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  Arn: string;
  /**
   * <p>Dataset references.</p>
   * @minLength `1`
   */
  DataSetReferences: DataSetReference[];
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.DashboardUIState`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-dashboarduistate.html}
 */
export type DashboardUIState = "EXPANDED" | "COLLAPSED";
/**
 * Type definition for `AWS::QuickSight::Dashboard.DashboardVersion`.
 * <p>Dashboard version.</p>
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-dashboardversion.html}
 */
export type DashboardVersion = {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  Arn?: string;
  /**
   * <p>The time that this dashboard version was created.</p>
   */
  CreatedTime?: string;
  /**
     * <p>The Amazon Resource Numbers (ARNs) for the datasets that are associated with this
                version of the dashboard.</p>
     * @minLength `0`
     * @maxLength `100`
     */
  DataSetArns?: string[];
  /**
   * <p>Description.</p>
   * @minLength `1`
   * @maxLength `512`
   */
  Description?: string;
  /**
   * <p>Errors associated with this dashboard version.</p>
   * @minLength `1`
   */
  Errors?: DashboardError[];
  /**
   * <p>A list of the associated sheets with the unique identifier and name of each sheet.</p>
   * @minLength `0`
   * @maxLength `20`
   */
  Sheets?: Sheet[];
  /**
   * <p>Source entity ARN.</p>
   */
  SourceEntityArn?: string;
  Status?: ResourceStatus;
  /**
   * <p>The ARN of the theme associated with a version of the dashboard.</p>
   */
  ThemeArn?: string;
  /**
   * <p>Version number for this version of the dashboard.</p>
   * @min `1`
   */
  VersionNumber?: number;
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.DashboardVersionDefinition`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-dashboardversiondefinition.html}
 */
export type DashboardVersionDefinition = {
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
   * @minLength `1`
   * @maxLength `50`
   */
  DataSetIdentifierDeclarations: DataSetIdentifierDeclaration[];
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
 * Type definition for `AWS::QuickSight::Dashboard.DashboardVisualPublishOptions`.
 * <p>The visual publish options of a visual in a dashboard</p>
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-dashboardvisualpublishoptions.html}
 */
export type DashboardVisualPublishOptions = {
  /**
   * <p>Determines if hidden fields are included in an exported dashboard.</p>
   */
  ExportHiddenFieldsOption?: ExportHiddenFieldsOption;
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.DataBarsOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-databarsoptions.html}
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
 * Type definition for `AWS::QuickSight::Dashboard.DataColor`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-datacolor.html}
 */
export type DataColor = {
  /**
   * @pattern `^#[A-F0-9]{6}$`
   */
  Color?: string;
  DataValue?: number;
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.DataFieldSeriesItem`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-datafieldseriesitem.html}
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
 * Type definition for `AWS::QuickSight::Dashboard.DataLabelContent`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-datalabelcontent.html}
 */
export type DataLabelContent = "VALUE" | "PERCENT" | "VALUE_AND_PERCENT";
/**
 * Type definition for `AWS::QuickSight::Dashboard.DataLabelOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-datalabeloptions.html}
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
 * Type definition for `AWS::QuickSight::Dashboard.DataLabelOverlap`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-datalabeloverlap.html}
 */
export type DataLabelOverlap = "DISABLE_OVERLAP" | "ENABLE_OVERLAP";
/**
 * Type definition for `AWS::QuickSight::Dashboard.DataLabelPosition`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-datalabelposition.html}
 */
export type DataLabelPosition =
  | "INSIDE"
  | "OUTSIDE"
  | "LEFT"
  | "TOP"
  | "BOTTOM"
  | "RIGHT";
/**
 * Type definition for `AWS::QuickSight::Dashboard.DataLabelType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-datalabeltype.html}
 */
export type DataLabelType = {
  DataPathLabelType?: DataPathLabelType;
  FieldLabelType?: FieldLabelType;
  MaximumLabelType?: MaximumLabelType;
  MinimumLabelType?: MinimumLabelType;
  RangeEndsLabelType?: RangeEndsLabelType;
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.DataPathColor`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-datapathcolor.html}
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
 * Type definition for `AWS::QuickSight::Dashboard.DataPathLabelType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-datapathlabeltype.html}
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
 * Type definition for `AWS::QuickSight::Dashboard.DataPathSort`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-datapathsort.html}
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
 * Type definition for `AWS::QuickSight::Dashboard.DataPathType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-datapathtype.html}
 */
export type DataPathType = {
  PivotTableDataPathType?: PivotTableDataPathType;
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.DataPathValue`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-datapathvalue.html}
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
 * Type definition for `AWS::QuickSight::Dashboard.DataPointDrillUpDownOption`.
 * <p>The drill down options for data points in a dashbaord.</p>
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-datapointdrillupdownoption.html}
 */
export type DataPointDrillUpDownOption = {
  AvailabilityStatus?: DashboardBehavior;
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.DataPointMenuLabelOption`.
 * <p>The data point menu options of a dashboard.</p>
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-datapointmenulabeloption.html}
 */
export type DataPointMenuLabelOption = {
  AvailabilityStatus?: DashboardBehavior;
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.DataPointTooltipOption`.
 * <p>The data point tooltip options.</p>
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-datapointtooltipoption.html}
 */
export type DataPointTooltipOption = {
  AvailabilityStatus?: DashboardBehavior;
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.DataSetIdentifierDeclaration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-datasetidentifierdeclaration.html}
 */
export type DataSetIdentifierDeclaration = {
  DataSetArn: string;
  /**
   * @minLength `1`
   * @maxLength `2048`
   */
  Identifier: string;
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.DataSetReference`.
 * <p>Dataset reference.</p>
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-datasetreference.html}
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
 * Type definition for `AWS::QuickSight::Dashboard.DateAggregationFunction`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-dateaggregationfunction.html}
 */
export type DateAggregationFunction =
  | "COUNT"
  | "DISTINCT_COUNT"
  | "MIN"
  | "MAX";
/**
 * Type definition for `AWS::QuickSight::Dashboard.DateAxisOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-dateaxisoptions.html}
 */
export type DateAxisOptions = {
  MissingDateVisibility?: Visibility;
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.DateDimensionField`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-datedimensionfield.html}
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
 * Type definition for `AWS::QuickSight::Dashboard.DateMeasureField`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-datemeasurefield.html}
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
 * Type definition for `AWS::QuickSight::Dashboard.DateTimeDefaultValues`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-datetimedefaultvalues.html}
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
 * Type definition for `AWS::QuickSight::Dashboard.DateTimeFormatConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-datetimeformatconfiguration.html}
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
 * Type definition for `AWS::QuickSight::Dashboard.DateTimeHierarchy`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-datetimehierarchy.html}
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
 * Type definition for `AWS::QuickSight::Dashboard.DateTimeParameter`.
 * <p>A date-time parameter.</p>
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-datetimeparameter.html}
 */
export type DateTimeParameter = {
  /**
   * <p>A display name for the date-time parameter.</p>
   * @pattern `\S`
   */
  Name: string;
  /**
   * <p>The values for the date-time parameter.</p>
   */
  Values: string[];
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.DateTimeParameterDeclaration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-datetimeparameterdeclaration.html}
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
 * Type definition for `AWS::QuickSight::Dashboard.DateTimePickerControlDisplayOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-datetimepickercontroldisplayoptions.html}
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
 * Type definition for `AWS::QuickSight::Dashboard.DateTimeValueWhenUnsetConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-datetimevaluewhenunsetconfiguration.html}
 */
export type DateTimeValueWhenUnsetConfiguration = {
  CustomValue?: string;
  ValueWhenUnsetOption?: ValueWhenUnsetOption;
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.DayOfTheWeek`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-dayoftheweek.html}
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
 * Type definition for `AWS::QuickSight::Dashboard.DecimalDefaultValues`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-decimaldefaultvalues.html}
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
 * Type definition for `AWS::QuickSight::Dashboard.DecimalParameter`.
 * <p>A decimal parameter.</p>
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-decimalparameter.html}
 */
export type DecimalParameter = {
  /**
   * <p>A display name for the decimal parameter.</p>
   * @pattern `\S`
   */
  Name: string;
  /**
   * <p>The values for the decimal parameter.</p>
   */
  Values: number[];
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.DecimalParameterDeclaration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-decimalparameterdeclaration.html}
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
 * Type definition for `AWS::QuickSight::Dashboard.DecimalPlacesConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-decimalplacesconfiguration.html}
 */
export type DecimalPlacesConfiguration = {
  /**
   * @min `0`
   * @max `20`
   */
  DecimalPlaces: number;
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.DecimalValueWhenUnsetConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-decimalvaluewhenunsetconfiguration.html}
 */
export type DecimalValueWhenUnsetConfiguration = {
  CustomValue?: number;
  ValueWhenUnsetOption?: ValueWhenUnsetOption;
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.DefaultDateTimePickerControlOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-defaultdatetimepickercontroloptions.html}
 */
export type DefaultDateTimePickerControlOptions = {
  DisplayOptions?: DateTimePickerControlDisplayOptions;
  Type?: SheetControlDateTimePickerType;
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.DefaultFilterControlConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-defaultfiltercontrolconfiguration.html}
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
 * Type definition for `AWS::QuickSight::Dashboard.DefaultFilterControlOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-defaultfiltercontroloptions.html}
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
 * Type definition for `AWS::QuickSight::Dashboard.DefaultFilterDropDownControlOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-defaultfilterdropdowncontroloptions.html}
 */
export type DefaultFilterDropDownControlOptions = {
  DisplayOptions?: DropDownControlDisplayOptions;
  SelectableValues?: FilterSelectableValues;
  Type?: SheetControlListType;
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.DefaultFilterListControlOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-defaultfilterlistcontroloptions.html}
 */
export type DefaultFilterListControlOptions = {
  DisplayOptions?: ListControlDisplayOptions;
  SelectableValues?: FilterSelectableValues;
  Type?: SheetControlListType;
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.DefaultFreeFormLayoutConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-defaultfreeformlayoutconfiguration.html}
 */
export type DefaultFreeFormLayoutConfiguration = {
  CanvasSizeOptions: FreeFormLayoutCanvasSizeOptions;
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.DefaultGridLayoutConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-defaultgridlayoutconfiguration.html}
 */
export type DefaultGridLayoutConfiguration = {
  CanvasSizeOptions: GridLayoutCanvasSizeOptions;
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.DefaultInteractiveLayoutConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-defaultinteractivelayoutconfiguration.html}
 */
export type DefaultInteractiveLayoutConfiguration = {
  FreeForm?: DefaultFreeFormLayoutConfiguration;
  Grid?: DefaultGridLayoutConfiguration;
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.DefaultNewSheetConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-defaultnewsheetconfiguration.html}
 */
export type DefaultNewSheetConfiguration = {
  InteractiveLayoutConfiguration?: DefaultInteractiveLayoutConfiguration;
  PaginatedLayoutConfiguration?: DefaultPaginatedLayoutConfiguration;
  SheetContentType?: SheetContentType;
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.DefaultPaginatedLayoutConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-defaultpaginatedlayoutconfiguration.html}
 */
export type DefaultPaginatedLayoutConfiguration = {
  SectionBased?: DefaultSectionBasedLayoutConfiguration;
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.DefaultRelativeDateTimeControlOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-defaultrelativedatetimecontroloptions.html}
 */
export type DefaultRelativeDateTimeControlOptions = {
  DisplayOptions?: RelativeDateTimeControlDisplayOptions;
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.DefaultSectionBasedLayoutConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-defaultsectionbasedlayoutconfiguration.html}
 */
export type DefaultSectionBasedLayoutConfiguration = {
  CanvasSizeOptions: SectionBasedLayoutCanvasSizeOptions;
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.DefaultSliderControlOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-defaultslidercontroloptions.html}
 */
export type DefaultSliderControlOptions = {
  DisplayOptions?: SliderControlDisplayOptions;
  MaximumValue: number;
  MinimumValue: number;
  StepSize: number;
  Type?: SheetControlSliderType;
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.DefaultTextAreaControlOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-defaulttextareacontroloptions.html}
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
 * Type definition for `AWS::QuickSight::Dashboard.DefaultTextFieldControlOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-defaulttextfieldcontroloptions.html}
 */
export type DefaultTextFieldControlOptions = {
  DisplayOptions?: TextFieldControlDisplayOptions;
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.DestinationParameterValueConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-destinationparametervalueconfiguration.html}
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
 * Type definition for `AWS::QuickSight::Dashboard.DimensionField`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-dimensionfield.html}
 */
export type DimensionField = {
  CategoricalDimensionField?: CategoricalDimensionField;
  DateDimensionField?: DateDimensionField;
  NumericalDimensionField?: NumericalDimensionField;
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.DonutCenterOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-donutcenteroptions.html}
 */
export type DonutCenterOptions = {
  LabelVisibility?: Visibility;
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.DonutOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-donutoptions.html}
 */
export type DonutOptions = {
  ArcOptions?: ArcOptions;
  DonutCenterOptions?: DonutCenterOptions;
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.DrillDownFilter`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-drilldownfilter.html}
 */
export type DrillDownFilter = {
  CategoryFilter?: CategoryDrillDownFilter;
  NumericEqualityFilter?: NumericEqualityDrillDownFilter;
  TimeRangeFilter?: TimeRangeDrillDownFilter;
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.DropDownControlDisplayOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-dropdowncontroldisplayoptions.html}
 */
export type DropDownControlDisplayOptions = {
  InfoIconLabelOptions?: SheetControlInfoIconLabelOptions;
  SelectAllOptions?: ListControlSelectAllOptions;
  TitleOptions?: LabelOptions;
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.DynamicDefaultValue`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-dynamicdefaultvalue.html}
 */
export type DynamicDefaultValue = {
  DefaultValueColumn: ColumnIdentifier;
  GroupNameColumn?: ColumnIdentifier;
  UserNameColumn?: ColumnIdentifier;
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.EmptyVisual`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-emptyvisual.html}
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
 * Type definition for `AWS::QuickSight::Dashboard.Entity`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-entity.html}
 */
export type Entity = {
  /**
   * @pattern `\S`
   */
  Path?: string;
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.ExcludePeriodConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-excludeperiodconfiguration.html}
 */
export type ExcludePeriodConfiguration = {
  Amount: number;
  Granularity: TimeGranularity;
  Status?: WidgetStatus;
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.ExplicitHierarchy`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-explicithierarchy.html}
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
 * Type definition for `AWS::QuickSight::Dashboard.ExportHiddenFieldsOption`.
 * <p>Determines if hidden fields are included in an exported dashboard.</p>
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-exporthiddenfieldsoption.html}
 */
export type ExportHiddenFieldsOption = {
  AvailabilityStatus?: DashboardBehavior;
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.ExportToCSVOption`.
 * <p>Export to .csv option.</p>
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-exporttocsvoption.html}
 */
export type ExportToCSVOption = {
  AvailabilityStatus?: DashboardBehavior;
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.ExportWithHiddenFieldsOption`.
 * <p>Determines whether or not hidden fields are visible on exported dashbaords.</p>
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-exportwithhiddenfieldsoption.html}
 */
export type ExportWithHiddenFieldsOption = {
  AvailabilityStatus?: DashboardBehavior;
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.FieldBasedTooltip`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-fieldbasedtooltip.html}
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
 * Type definition for `AWS::QuickSight::Dashboard.FieldLabelType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-fieldlabeltype.html}
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
 * Type definition for `AWS::QuickSight::Dashboard.FieldSeriesItem`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-fieldseriesitem.html}
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
 * Type definition for `AWS::QuickSight::Dashboard.FieldSort`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-fieldsort.html}
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
 * Type definition for `AWS::QuickSight::Dashboard.FieldSortOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-fieldsortoptions.html}
 */
export type FieldSortOptions = {
  ColumnSort?: ColumnSort;
  FieldSort?: FieldSort;
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.FieldTooltipItem`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-fieldtooltipitem.html}
 */
export type FieldTooltipItem = {
  /**
   * @minLength `1`
   * @maxLength `512`
   */
  FieldId: string;
  Label?: string;
  Visibility?: Visibility;
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.FilledMapAggregatedFieldWells`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-filledmapaggregatedfieldwells.html}
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
 * Type definition for `AWS::QuickSight::Dashboard.FilledMapConditionalFormatting`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-filledmapconditionalformatting.html}
 */
export type FilledMapConditionalFormatting = {
  /**
   * @minLength `0`
   * @maxLength `200`
   */
  ConditionalFormattingOptions: FilledMapConditionalFormattingOption[];
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.FilledMapConditionalFormattingOption`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-filledmapconditionalformattingoption.html}
 */
export type FilledMapConditionalFormattingOption = {
  Shape: FilledMapShapeConditionalFormatting;
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.FilledMapConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-filledmapconfiguration.html}
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
 * Type definition for `AWS::QuickSight::Dashboard.FilledMapFieldWells`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-filledmapfieldwells.html}
 */
export type FilledMapFieldWells = {
  FilledMapAggregatedFieldWells?: FilledMapAggregatedFieldWells;
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.FilledMapShapeConditionalFormatting`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-filledmapshapeconditionalformatting.html}
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
 * Type definition for `AWS::QuickSight::Dashboard.FilledMapSortConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-filledmapsortconfiguration.html}
 */
export type FilledMapSortConfiguration = {
  /**
   * @minLength `0`
   * @maxLength `100`
   */
  CategorySort?: FieldSortOptions[];
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.FilledMapVisual`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-filledmapvisual.html}
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
 * Type definition for `AWS::QuickSight::Dashboard.Filter`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-filter.html}
 */
export type Filter = {
  CategoryFilter?: CategoryFilter;
  NumericEqualityFilter?: NumericEqualityFilter;
  NumericRangeFilter?: NumericRangeFilter;
  RelativeDatesFilter?: RelativeDatesFilter;
  TimeEqualityFilter?: TimeEqualityFilter;
  TimeRangeFilter?: TimeRangeFilter;
  TopBottomFilter?: TopBottomFilter;
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.FilterControl`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-filtercontrol.html}
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
 * Type definition for `AWS::QuickSight::Dashboard.FilterCrossSheetControl`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-filtercrosssheetcontrol.html}
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
 * Type definition for `AWS::QuickSight::Dashboard.FilterDateTimePickerControl`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-filterdatetimepickercontrol.html}
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
 * Type definition for `AWS::QuickSight::Dashboard.FilterDropDownControl`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-filterdropdowncontrol.html}
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
 * Type definition for `AWS::QuickSight::Dashboard.FilterGroup`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-filtergroup.html}
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
 * Type definition for `AWS::QuickSight::Dashboard.FilterListConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-filterlistconfiguration.html}
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
 * Type definition for `AWS::QuickSight::Dashboard.FilterListControl`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-filterlistcontrol.html}
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
 * Type definition for `AWS::QuickSight::Dashboard.FilterNullOption`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-filternulloption.html}
 */
export type FilterNullOption = "ALL_VALUES" | "NULLS_ONLY" | "NON_NULLS_ONLY";
/**
 * Type definition for `AWS::QuickSight::Dashboard.FilterOperationSelectedFieldsConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-filteroperationselectedfieldsconfiguration.html}
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
 * Type definition for `AWS::QuickSight::Dashboard.FilterOperationTargetVisualsConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-filteroperationtargetvisualsconfiguration.html}
 */
export type FilterOperationTargetVisualsConfiguration = {
  SameSheetTargetVisualConfiguration?: SameSheetTargetVisualConfiguration;
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.FilterRelativeDateTimeControl`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-filterrelativedatetimecontrol.html}
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
 * Type definition for `AWS::QuickSight::Dashboard.FilterScopeConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-filterscopeconfiguration.html}
 */
export type FilterScopeConfiguration = {
  AllSheets?: AllSheetsFilterScopeConfiguration;
  SelectedSheets?: SelectedSheetsFilterScopeConfiguration;
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.FilterSelectableValues`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-filterselectablevalues.html}
 */
export type FilterSelectableValues = {
  /**
   * @minLength `0`
   * @maxLength `50000`
   */
  Values?: string[];
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.FilterSliderControl`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-filterslidercontrol.html}
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
 * Type definition for `AWS::QuickSight::Dashboard.FilterTextAreaControl`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-filtertextareacontrol.html}
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
 * Type definition for `AWS::QuickSight::Dashboard.FilterTextFieldControl`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-filtertextfieldcontrol.html}
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
 * Type definition for `AWS::QuickSight::Dashboard.FilterVisualScope`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-filtervisualscope.html}
 */
export type FilterVisualScope = "ALL_VISUALS" | "SELECTED_VISUALS";
/**
 * Type definition for `AWS::QuickSight::Dashboard.FontConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-fontconfiguration.html}
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
 * Type definition for `AWS::QuickSight::Dashboard.FontDecoration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-fontdecoration.html}
 */
export type FontDecoration = "UNDERLINE" | "NONE";
/**
 * Type definition for `AWS::QuickSight::Dashboard.FontSize`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-fontsize.html}
 */
export type FontSize = {
  Relative?: RelativeFontSize;
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.FontStyle`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-fontstyle.html}
 */
export type FontStyle = "NORMAL" | "ITALIC";
/**
 * Type definition for `AWS::QuickSight::Dashboard.FontWeight`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-fontweight.html}
 */
export type FontWeight = {
  Name?: FontWeightName;
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.FontWeightName`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-fontweightname.html}
 */
export type FontWeightName = "NORMAL" | "BOLD";
/**
 * Type definition for `AWS::QuickSight::Dashboard.ForecastComputation`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-forecastcomputation.html}
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
 * Type definition for `AWS::QuickSight::Dashboard.ForecastComputationSeasonality`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-forecastcomputationseasonality.html}
 */
export type ForecastComputationSeasonality = "AUTOMATIC" | "CUSTOM";
/**
 * Type definition for `AWS::QuickSight::Dashboard.ForecastConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-forecastconfiguration.html}
 */
export type ForecastConfiguration = {
  ForecastProperties?: TimeBasedForecastProperties;
  Scenario?: ForecastScenario;
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.ForecastScenario`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-forecastscenario.html}
 */
export type ForecastScenario = {
  WhatIfPointScenario?: WhatIfPointScenario;
  WhatIfRangeScenario?: WhatIfRangeScenario;
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.FormatConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-formatconfiguration.html}
 */
export type FormatConfiguration = {
  DateTimeFormatConfiguration?: DateTimeFormatConfiguration;
  NumberFormatConfiguration?: NumberFormatConfiguration;
  StringFormatConfiguration?: StringFormatConfiguration;
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.FreeFormLayoutCanvasSizeOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-freeformlayoutcanvassizeoptions.html}
 */
export type FreeFormLayoutCanvasSizeOptions = {
  ScreenCanvasSizeOptions?: FreeFormLayoutScreenCanvasSizeOptions;
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.FreeFormLayoutConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-freeformlayoutconfiguration.html}
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
 * Type definition for `AWS::QuickSight::Dashboard.FreeFormLayoutElement`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-freeformlayoutelement.html}
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
 * Type definition for `AWS::QuickSight::Dashboard.FreeFormLayoutElementBackgroundStyle`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-freeformlayoutelementbackgroundstyle.html}
 */
export type FreeFormLayoutElementBackgroundStyle = {
  /**
   * @pattern `^#[A-F0-9]{6}(?:[A-F0-9]{2})?$`
   */
  Color?: string;
  Visibility?: Visibility;
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.FreeFormLayoutElementBorderStyle`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-freeformlayoutelementborderstyle.html}
 */
export type FreeFormLayoutElementBorderStyle = {
  /**
   * @pattern `^#[A-F0-9]{6}(?:[A-F0-9]{2})?$`
   */
  Color?: string;
  Visibility?: Visibility;
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.FreeFormLayoutScreenCanvasSizeOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-freeformlayoutscreencanvassizeoptions.html}
 */
export type FreeFormLayoutScreenCanvasSizeOptions = {
  /**
   * String based length that is composed of value and unit in px
   */
  OptimizedViewPortWidth: string;
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.FreeFormSectionLayoutConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-freeformsectionlayoutconfiguration.html}
 */
export type FreeFormSectionLayoutConfiguration = {
  /**
   * @minLength `0`
   * @maxLength `430`
   */
  Elements: FreeFormLayoutElement[];
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.FunnelChartAggregatedFieldWells`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-funnelchartaggregatedfieldwells.html}
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
 * Type definition for `AWS::QuickSight::Dashboard.FunnelChartConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-funnelchartconfiguration.html}
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
 * Type definition for `AWS::QuickSight::Dashboard.FunnelChartDataLabelOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-funnelchartdatalabeloptions.html}
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
 * Type definition for `AWS::QuickSight::Dashboard.FunnelChartFieldWells`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-funnelchartfieldwells.html}
 */
export type FunnelChartFieldWells = {
  FunnelChartAggregatedFieldWells?: FunnelChartAggregatedFieldWells;
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.FunnelChartMeasureDataLabelStyle`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-funnelchartmeasuredatalabelstyle.html}
 */
export type FunnelChartMeasureDataLabelStyle =
  | "VALUE_ONLY"
  | "PERCENTAGE_BY_FIRST_STAGE"
  | "PERCENTAGE_BY_PREVIOUS_STAGE"
  | "VALUE_AND_PERCENTAGE_BY_FIRST_STAGE"
  | "VALUE_AND_PERCENTAGE_BY_PREVIOUS_STAGE";
/**
 * Type definition for `AWS::QuickSight::Dashboard.FunnelChartSortConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-funnelchartsortconfiguration.html}
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
 * Type definition for `AWS::QuickSight::Dashboard.FunnelChartVisual`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-funnelchartvisual.html}
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
 * Type definition for `AWS::QuickSight::Dashboard.GaugeChartArcConditionalFormatting`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-gaugechartarcconditionalformatting.html}
 */
export type GaugeChartArcConditionalFormatting = {
  ForegroundColor?: ConditionalFormattingColor;
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.GaugeChartConditionalFormatting`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-gaugechartconditionalformatting.html}
 */
export type GaugeChartConditionalFormatting = {
  /**
   * @minLength `0`
   * @maxLength `100`
   */
  ConditionalFormattingOptions?: GaugeChartConditionalFormattingOption[];
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.GaugeChartConditionalFormattingOption`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-gaugechartconditionalformattingoption.html}
 */
export type GaugeChartConditionalFormattingOption = {
  Arc?: GaugeChartArcConditionalFormatting;
  PrimaryValue?: GaugeChartPrimaryValueConditionalFormatting;
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.GaugeChartConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-gaugechartconfiguration.html}
 */
export type GaugeChartConfiguration = {
  DataLabels?: DataLabelOptions;
  FieldWells?: GaugeChartFieldWells;
  GaugeChartOptions?: GaugeChartOptions;
  TooltipOptions?: TooltipOptions;
  VisualPalette?: VisualPalette;
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.GaugeChartFieldWells`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-gaugechartfieldwells.html}
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
 * Type definition for `AWS::QuickSight::Dashboard.GaugeChartOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-gaugechartoptions.html}
 */
export type GaugeChartOptions = {
  Arc?: ArcConfiguration;
  ArcAxis?: ArcAxisConfiguration;
  Comparison?: ComparisonConfiguration;
  PrimaryValueDisplayType?: PrimaryValueDisplayType;
  PrimaryValueFontConfiguration?: FontConfiguration;
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.GaugeChartPrimaryValueConditionalFormatting`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-gaugechartprimaryvalueconditionalformatting.html}
 */
export type GaugeChartPrimaryValueConditionalFormatting = {
  Icon?: ConditionalFormattingIcon;
  TextColor?: ConditionalFormattingColor;
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.GaugeChartVisual`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-gaugechartvisual.html}
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
 * Type definition for `AWS::QuickSight::Dashboard.GeospatialCoordinateBounds`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-geospatialcoordinatebounds.html}
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
 * Type definition for `AWS::QuickSight::Dashboard.GeospatialHeatmapColorScale`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-geospatialheatmapcolorscale.html}
 */
export type GeospatialHeatmapColorScale = {
  /**
   * @minLength `2`
   * @maxLength `2`
   */
  Colors?: GeospatialHeatmapDataColor[];
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.GeospatialHeatmapConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-geospatialheatmapconfiguration.html}
 */
export type GeospatialHeatmapConfiguration = {
  HeatmapColor?: GeospatialHeatmapColorScale;
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.GeospatialHeatmapDataColor`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-geospatialheatmapdatacolor.html}
 */
export type GeospatialHeatmapDataColor = {
  /**
   * @pattern `^#[A-F0-9]{6}$`
   */
  Color: string;
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.GeospatialMapAggregatedFieldWells`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-geospatialmapaggregatedfieldwells.html}
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
 * Type definition for `AWS::QuickSight::Dashboard.GeospatialMapConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-geospatialmapconfiguration.html}
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
 * Type definition for `AWS::QuickSight::Dashboard.GeospatialMapFieldWells`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-geospatialmapfieldwells.html}
 */
export type GeospatialMapFieldWells = {
  GeospatialMapAggregatedFieldWells?: GeospatialMapAggregatedFieldWells;
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.GeospatialMapStyleOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-geospatialmapstyleoptions.html}
 */
export type GeospatialMapStyleOptions = {
  BaseMapStyle?: BaseMapStyleType;
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.GeospatialMapVisual`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-geospatialmapvisual.html}
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
 * Type definition for `AWS::QuickSight::Dashboard.GeospatialPointStyleOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-geospatialpointstyleoptions.html}
 */
export type GeospatialPointStyleOptions = {
  ClusterMarkerConfiguration?: ClusterMarkerConfiguration;
  HeatmapConfiguration?: GeospatialHeatmapConfiguration;
  SelectedPointStyle?: GeospatialSelectedPointStyle;
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.GeospatialSelectedPointStyle`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-geospatialselectedpointstyle.html}
 */
export type GeospatialSelectedPointStyle = "POINT" | "CLUSTER" | "HEATMAP";
/**
 * Type definition for `AWS::QuickSight::Dashboard.GeospatialWindowOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-geospatialwindowoptions.html}
 */
export type GeospatialWindowOptions = {
  Bounds?: GeospatialCoordinateBounds;
  MapZoomMode?: MapZoomMode;
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.GlobalTableBorderOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-globaltableborderoptions.html}
 */
export type GlobalTableBorderOptions = {
  SideSpecificBorder?: TableSideBorderOptions;
  UniformBorder?: TableBorderOptions;
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.GradientColor`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-gradientcolor.html}
 */
export type GradientColor = {
  /**
   * @minLength `0`
   * @maxLength `100`
   */
  Stops?: GradientStop[];
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.GradientStop`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-gradientstop.html}
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
 * Type definition for `AWS::QuickSight::Dashboard.GridLayoutCanvasSizeOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-gridlayoutcanvassizeoptions.html}
 */
export type GridLayoutCanvasSizeOptions = {
  ScreenCanvasSizeOptions?: GridLayoutScreenCanvasSizeOptions;
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.GridLayoutConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-gridlayoutconfiguration.html}
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
 * Type definition for `AWS::QuickSight::Dashboard.GridLayoutElement`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-gridlayoutelement.html}
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
 * Type definition for `AWS::QuickSight::Dashboard.GridLayoutScreenCanvasSizeOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-gridlayoutscreencanvassizeoptions.html}
 */
export type GridLayoutScreenCanvasSizeOptions = {
  /**
   * String based length that is composed of value and unit in px
   */
  OptimizedViewPortWidth?: string;
  ResizeOption: ResizeOption;
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.GrowthRateComputation`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-growthratecomputation.html}
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
 * Type definition for `AWS::QuickSight::Dashboard.HeaderFooterSectionConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-headerfootersectionconfiguration.html}
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
 * Type definition for `AWS::QuickSight::Dashboard.HeatMapAggregatedFieldWells`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-heatmapaggregatedfieldwells.html}
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
 * Type definition for `AWS::QuickSight::Dashboard.HeatMapConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-heatmapconfiguration.html}
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
 * Type definition for `AWS::QuickSight::Dashboard.HeatMapFieldWells`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-heatmapfieldwells.html}
 */
export type HeatMapFieldWells = {
  HeatMapAggregatedFieldWells?: HeatMapAggregatedFieldWells;
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.HeatMapSortConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-heatmapsortconfiguration.html}
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
 * Type definition for `AWS::QuickSight::Dashboard.HeatMapVisual`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-heatmapvisual.html}
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
 * Type definition for `AWS::QuickSight::Dashboard.HistogramAggregatedFieldWells`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-histogramaggregatedfieldwells.html}
 */
export type HistogramAggregatedFieldWells = {
  /**
   * @minLength `0`
   * @maxLength `1`
   */
  Values?: MeasureField[];
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.HistogramBinOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-histogrambinoptions.html}
 */
export type HistogramBinOptions = {
  BinCount?: BinCountOptions;
  BinWidth?: BinWidthOptions;
  SelectedBinType?: HistogramBinType;
  StartValue?: number;
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.HistogramBinType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-histogrambintype.html}
 */
export type HistogramBinType = "BIN_COUNT" | "BIN_WIDTH";
/**
 * Type definition for `AWS::QuickSight::Dashboard.HistogramConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-histogramconfiguration.html}
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
 * Type definition for `AWS::QuickSight::Dashboard.HistogramFieldWells`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-histogramfieldwells.html}
 */
export type HistogramFieldWells = {
  HistogramAggregatedFieldWells?: HistogramAggregatedFieldWells;
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.HistogramVisual`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-histogramvisual.html}
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
 * Type definition for `AWS::QuickSight::Dashboard.HorizontalTextAlignment`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-horizontaltextalignment.html}
 */
export type HorizontalTextAlignment = "LEFT" | "CENTER" | "RIGHT" | "AUTO";
/**
 * Type definition for `AWS::QuickSight::Dashboard.Icon`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-icon.html}
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
 * Type definition for `AWS::QuickSight::Dashboard.InsightConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-insightconfiguration.html}
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
 * Type definition for `AWS::QuickSight::Dashboard.InsightVisual`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-insightvisual.html}
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
 * Type definition for `AWS::QuickSight::Dashboard.IntegerDefaultValues`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-integerdefaultvalues.html}
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
 * Type definition for `AWS::QuickSight::Dashboard.IntegerParameter`.
 * <p>An integer parameter.</p>
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-integerparameter.html}
 */
export type IntegerParameter = {
  /**
   * <p>The name of the integer parameter.</p>
   * @pattern `\S`
   */
  Name: string;
  /**
   * <p>The values for the integer parameter.</p>
   */
  Values: number[];
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.IntegerParameterDeclaration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-integerparameterdeclaration.html}
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
 * Type definition for `AWS::QuickSight::Dashboard.IntegerValueWhenUnsetConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-integervaluewhenunsetconfiguration.html}
 */
export type IntegerValueWhenUnsetConfiguration = {
  CustomValue?: number;
  ValueWhenUnsetOption?: ValueWhenUnsetOption;
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.ItemsLimitConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-itemslimitconfiguration.html}
 */
export type ItemsLimitConfiguration = {
  ItemsLimit?: number;
  OtherCategories?: OtherCategories;
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.KPIActualValueConditionalFormatting`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-kpiactualvalueconditionalformatting.html}
 */
export type KPIActualValueConditionalFormatting = {
  Icon?: ConditionalFormattingIcon;
  TextColor?: ConditionalFormattingColor;
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.KPIComparisonValueConditionalFormatting`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-kpicomparisonvalueconditionalformatting.html}
 */
export type KPIComparisonValueConditionalFormatting = {
  Icon?: ConditionalFormattingIcon;
  TextColor?: ConditionalFormattingColor;
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.KPIConditionalFormatting`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-kpiconditionalformatting.html}
 */
export type KPIConditionalFormatting = {
  /**
   * @minLength `0`
   * @maxLength `100`
   */
  ConditionalFormattingOptions?: KPIConditionalFormattingOption[];
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.KPIConditionalFormattingOption`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-kpiconditionalformattingoption.html}
 */
export type KPIConditionalFormattingOption = {
  ActualValue?: KPIActualValueConditionalFormatting;
  ComparisonValue?: KPIComparisonValueConditionalFormatting;
  PrimaryValue?: KPIPrimaryValueConditionalFormatting;
  ProgressBar?: KPIProgressBarConditionalFormatting;
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.KPIConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-kpiconfiguration.html}
 */
export type KPIConfiguration = {
  FieldWells?: KPIFieldWells;
  KPIOptions?: KPIOptions;
  SortConfiguration?: KPISortConfiguration;
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.KPIFieldWells`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-kpifieldwells.html}
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
 * Type definition for `AWS::QuickSight::Dashboard.KPIOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-kpioptions.html}
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
 * Type definition for `AWS::QuickSight::Dashboard.KPIPrimaryValueConditionalFormatting`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-kpiprimaryvalueconditionalformatting.html}
 */
export type KPIPrimaryValueConditionalFormatting = {
  Icon?: ConditionalFormattingIcon;
  TextColor?: ConditionalFormattingColor;
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.KPIProgressBarConditionalFormatting`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-kpiprogressbarconditionalformatting.html}
 */
export type KPIProgressBarConditionalFormatting = {
  ForegroundColor?: ConditionalFormattingColor;
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.KPISortConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-kpisortconfiguration.html}
 */
export type KPISortConfiguration = {
  /**
   * @minLength `0`
   * @maxLength `100`
   */
  TrendGroupSort?: FieldSortOptions[];
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.KPISparklineOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-kpisparklineoptions.html}
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
 * Type definition for `AWS::QuickSight::Dashboard.KPISparklineType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-kpisparklinetype.html}
 */
export type KPISparklineType = "LINE" | "AREA";
/**
 * Type definition for `AWS::QuickSight::Dashboard.KPIVisual`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-kpivisual.html}
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
 * Type definition for `AWS::QuickSight::Dashboard.KPIVisualLayoutOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-kpivisuallayoutoptions.html}
 */
export type KPIVisualLayoutOptions = {
  StandardLayout?: KPIVisualStandardLayout;
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.KPIVisualStandardLayout`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-kpivisualstandardlayout.html}
 */
export type KPIVisualStandardLayout = {
  Type: KPIVisualStandardLayoutType;
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.KPIVisualStandardLayoutType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-kpivisualstandardlayouttype.html}
 */
export type KPIVisualStandardLayoutType = "CLASSIC" | "VERTICAL";
/**
 * Type definition for `AWS::QuickSight::Dashboard.LabelOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-labeloptions.html}
 */
export type LabelOptions = {
  CustomLabel?: string;
  FontConfiguration?: FontConfiguration;
  Visibility?: Visibility;
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.Layout`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-layout.html}
 */
export type Layout = {
  Configuration: LayoutConfiguration;
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.LayoutConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-layoutconfiguration.html}
 */
export type LayoutConfiguration = {
  FreeFormLayout?: FreeFormLayoutConfiguration;
  GridLayout?: GridLayoutConfiguration;
  SectionBasedLayout?: SectionBasedLayoutConfiguration;
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.LayoutElementType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-layoutelementtype.html}
 */
export type LayoutElementType =
  | "VISUAL"
  | "FILTER_CONTROL"
  | "PARAMETER_CONTROL"
  | "TEXT_BOX";
/**
 * Type definition for `AWS::QuickSight::Dashboard.LegendOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-legendoptions.html}
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
 * Type definition for `AWS::QuickSight::Dashboard.LegendPosition`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-legendposition.html}
 */
export type LegendPosition = "AUTO" | "RIGHT" | "BOTTOM" | "TOP";
/**
 * Type definition for `AWS::QuickSight::Dashboard.LineChartAggregatedFieldWells`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-linechartaggregatedfieldwells.html}
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
 * Type definition for `AWS::QuickSight::Dashboard.LineChartConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-linechartconfiguration.html}
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
   * @maxLength `10`
   */
  Series?: SeriesItem[];
  SmallMultiplesOptions?: SmallMultiplesOptions;
  SortConfiguration?: LineChartSortConfiguration;
  Tooltip?: TooltipOptions;
  Type?: LineChartType;
  VisualPalette?: VisualPalette;
  XAxisDisplayOptions?: AxisDisplayOptions;
  XAxisLabelOptions?: ChartAxisLabelOptions;
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.LineChartDefaultSeriesSettings`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-linechartdefaultseriessettings.html}
 */
export type LineChartDefaultSeriesSettings = {
  AxisBinding?: AxisBinding;
  LineStyleSettings?: LineChartLineStyleSettings;
  MarkerStyleSettings?: LineChartMarkerStyleSettings;
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.LineChartFieldWells`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-linechartfieldwells.html}
 */
export type LineChartFieldWells = {
  LineChartAggregatedFieldWells?: LineChartAggregatedFieldWells;
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.LineChartLineStyle`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-linechartlinestyle.html}
 */
export type LineChartLineStyle = "SOLID" | "DOTTED" | "DASHED";
/**
 * Type definition for `AWS::QuickSight::Dashboard.LineChartLineStyleSettings`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-linechartlinestylesettings.html}
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
 * Type definition for `AWS::QuickSight::Dashboard.LineChartMarkerShape`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-linechartmarkershape.html}
 */
export type LineChartMarkerShape =
  | "CIRCLE"
  | "TRIANGLE"
  | "SQUARE"
  | "DIAMOND"
  | "ROUNDED_SQUARE";
/**
 * Type definition for `AWS::QuickSight::Dashboard.LineChartMarkerStyleSettings`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-linechartmarkerstylesettings.html}
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
 * Type definition for `AWS::QuickSight::Dashboard.LineChartSeriesSettings`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-linechartseriessettings.html}
 */
export type LineChartSeriesSettings = {
  LineStyleSettings?: LineChartLineStyleSettings;
  MarkerStyleSettings?: LineChartMarkerStyleSettings;
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.LineChartSortConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-linechartsortconfiguration.html}
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
 * Type definition for `AWS::QuickSight::Dashboard.LineChartType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-linecharttype.html}
 */
export type LineChartType = "LINE" | "AREA" | "STACKED_AREA";
/**
 * Type definition for `AWS::QuickSight::Dashboard.LineChartVisual`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-linechartvisual.html}
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
 * Type definition for `AWS::QuickSight::Dashboard.LineInterpolation`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-lineinterpolation.html}
 */
export type LineInterpolation = "LINEAR" | "SMOOTH" | "STEPPED";
/**
 * Type definition for `AWS::QuickSight::Dashboard.LineSeriesAxisDisplayOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-lineseriesaxisdisplayoptions.html}
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
 * Type definition for `AWS::QuickSight::Dashboard.LinkSharingConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-linksharingconfiguration.html}
 */
export type LinkSharingConfiguration = {
  /**
   * @minLength `1`
   * @maxLength `64`
   */
  Permissions?: ResourcePermission[];
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.ListControlDisplayOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-listcontroldisplayoptions.html}
 */
export type ListControlDisplayOptions = {
  InfoIconLabelOptions?: SheetControlInfoIconLabelOptions;
  SearchOptions?: ListControlSearchOptions;
  SelectAllOptions?: ListControlSelectAllOptions;
  TitleOptions?: LabelOptions;
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.ListControlSearchOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-listcontrolsearchoptions.html}
 */
export type ListControlSearchOptions = {
  Visibility?: Visibility;
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.ListControlSelectAllOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-listcontrolselectalloptions.html}
 */
export type ListControlSelectAllOptions = {
  Visibility?: Visibility;
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.LoadingAnimation`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-loadinganimation.html}
 */
export type LoadingAnimation = {
  Visibility?: Visibility;
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.LocalNavigationConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-localnavigationconfiguration.html}
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
 * Type definition for `AWS::QuickSight::Dashboard.LongFormatText`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-longformattext.html}
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
 * Type definition for `AWS::QuickSight::Dashboard.MappedDataSetParameter`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-mappeddatasetparameter.html}
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
 * Type definition for `AWS::QuickSight::Dashboard.MapZoomMode`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-mapzoommode.html}
 */
export type MapZoomMode = "AUTO" | "MANUAL";
/**
 * Type definition for `AWS::QuickSight::Dashboard.MaximumLabelType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-maximumlabeltype.html}
 */
export type MaximumLabelType = {
  Visibility?: Visibility;
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.MaximumMinimumComputation`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-maximumminimumcomputation.html}
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
 * Type definition for `AWS::QuickSight::Dashboard.MaximumMinimumComputationType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-maximumminimumcomputationtype.html}
 */
export type MaximumMinimumComputationType = "MAXIMUM" | "MINIMUM";
/**
 * Type definition for `AWS::QuickSight::Dashboard.MeasureField`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-measurefield.html}
 */
export type MeasureField = {
  CalculatedMeasureField?: CalculatedMeasureField;
  CategoricalMeasureField?: CategoricalMeasureField;
  DateMeasureField?: DateMeasureField;
  NumericalMeasureField?: NumericalMeasureField;
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.MetricComparisonComputation`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-metriccomparisoncomputation.html}
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
 * Type definition for `AWS::QuickSight::Dashboard.MinimumLabelType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-minimumlabeltype.html}
 */
export type MinimumLabelType = {
  Visibility?: Visibility;
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.MissingDataConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-missingdataconfiguration.html}
 */
export type MissingDataConfiguration = {
  TreatmentOption?: MissingDataTreatmentOption;
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.MissingDataTreatmentOption`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-missingdatatreatmentoption.html}
 */
export type MissingDataTreatmentOption =
  | "INTERPOLATE"
  | "SHOW_AS_ZERO"
  | "SHOW_AS_BLANK";
/**
 * Type definition for `AWS::QuickSight::Dashboard.NegativeValueConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-negativevalueconfiguration.html}
 */
export type NegativeValueConfiguration = {
  DisplayMode: NegativeValueDisplayMode;
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.NegativeValueDisplayMode`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-negativevaluedisplaymode.html}
 */
export type NegativeValueDisplayMode = "POSITIVE" | "NEGATIVE";
/**
 * Type definition for `AWS::QuickSight::Dashboard.NullValueFormatConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-nullvalueformatconfiguration.html}
 */
export type NullValueFormatConfiguration = {
  /**
   * @minLength `1`
   * @maxLength `128`
   */
  NullString: string;
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.NumberDisplayFormatConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-numberdisplayformatconfiguration.html}
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
 * Type definition for `AWS::QuickSight::Dashboard.NumberFormatConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-numberformatconfiguration.html}
 */
export type NumberFormatConfiguration = {
  FormatConfiguration?: NumericFormatConfiguration;
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.NumberScale`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-numberscale.html}
 */
export type NumberScale =
  | "NONE"
  | "AUTO"
  | "THOUSANDS"
  | "MILLIONS"
  | "BILLIONS"
  | "TRILLIONS";
/**
 * Type definition for `AWS::QuickSight::Dashboard.NumericalAggregationFunction`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-numericalaggregationfunction.html}
 */
export type NumericalAggregationFunction = {
  PercentileAggregation?: PercentileAggregation;
  SimpleNumericalAggregation?: SimpleNumericalAggregationFunction;
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.NumericalDimensionField`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-numericaldimensionfield.html}
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
 * Type definition for `AWS::QuickSight::Dashboard.NumericalMeasureField`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-numericalmeasurefield.html}
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
 * Type definition for `AWS::QuickSight::Dashboard.NumericAxisOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-numericaxisoptions.html}
 */
export type NumericAxisOptions = {
  Range?: AxisDisplayRange;
  Scale?: AxisScale;
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.NumericEqualityDrillDownFilter`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-numericequalitydrilldownfilter.html}
 */
export type NumericEqualityDrillDownFilter = {
  Column: ColumnIdentifier;
  Value: number;
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.NumericEqualityFilter`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-numericequalityfilter.html}
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
 * Type definition for `AWS::QuickSight::Dashboard.NumericEqualityMatchOperator`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-numericequalitymatchoperator.html}
 */
export type NumericEqualityMatchOperator = "EQUALS" | "DOES_NOT_EQUAL";
/**
 * Type definition for `AWS::QuickSight::Dashboard.NumericFilterSelectAllOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-numericfilterselectalloptions.html}
 */
export type NumericFilterSelectAllOptions = "FILTER_ALL_VALUES";
/**
 * Type definition for `AWS::QuickSight::Dashboard.NumericFormatConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-numericformatconfiguration.html}
 */
export type NumericFormatConfiguration = {
  CurrencyDisplayFormatConfiguration?: CurrencyDisplayFormatConfiguration;
  NumberDisplayFormatConfiguration?: NumberDisplayFormatConfiguration;
  PercentageDisplayFormatConfiguration?: PercentageDisplayFormatConfiguration;
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.NumericRangeFilter`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-numericrangefilter.html}
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
 * Type definition for `AWS::QuickSight::Dashboard.NumericRangeFilterValue`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-numericrangefiltervalue.html}
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
 * Type definition for `AWS::QuickSight::Dashboard.NumericSeparatorConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-numericseparatorconfiguration.html}
 */
export type NumericSeparatorConfiguration = {
  DecimalSeparator?: NumericSeparatorSymbol;
  ThousandsSeparator?: ThousandSeparatorOptions;
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.NumericSeparatorSymbol`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-numericseparatorsymbol.html}
 */
export type NumericSeparatorSymbol = "COMMA" | "DOT" | "SPACE";
/**
 * Type definition for `AWS::QuickSight::Dashboard.OtherCategories`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-othercategories.html}
 */
export type OtherCategories = "INCLUDE" | "EXCLUDE";
/**
 * Type definition for `AWS::QuickSight::Dashboard.PaginationConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-paginationconfiguration.html}
 */
export type PaginationConfiguration = {
  /**
   * @min `0`
   */
  PageNumber: number;
  PageSize: number;
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.PanelBorderStyle`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-panelborderstyle.html}
 */
export type PanelBorderStyle = "SOLID" | "DASHED" | "DOTTED";
/**
 * Type definition for `AWS::QuickSight::Dashboard.PanelConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-panelconfiguration.html}
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
 * Type definition for `AWS::QuickSight::Dashboard.PanelTitleOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-paneltitleoptions.html}
 */
export type PanelTitleOptions = {
  FontConfiguration?: FontConfiguration;
  HorizontalTextAlignment?: HorizontalTextAlignment;
  Visibility?: Visibility;
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.PaperOrientation`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-paperorientation.html}
 */
export type PaperOrientation = "PORTRAIT" | "LANDSCAPE";
/**
 * Type definition for `AWS::QuickSight::Dashboard.PaperSize`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-papersize.html}
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
 * Type definition for `AWS::QuickSight::Dashboard.ParameterControl`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-parametercontrol.html}
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
 * Type definition for `AWS::QuickSight::Dashboard.ParameterDateTimePickerControl`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-parameterdatetimepickercontrol.html}
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
 * Type definition for `AWS::QuickSight::Dashboard.ParameterDeclaration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-parameterdeclaration.html}
 */
export type ParameterDeclaration = {
  DateTimeParameterDeclaration?: DateTimeParameterDeclaration;
  DecimalParameterDeclaration?: DecimalParameterDeclaration;
  IntegerParameterDeclaration?: IntegerParameterDeclaration;
  StringParameterDeclaration?: StringParameterDeclaration;
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.ParameterDropDownControl`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-parameterdropdowncontrol.html}
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
 * Type definition for `AWS::QuickSight::Dashboard.ParameterListControl`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-parameterlistcontrol.html}
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
 * Type definition for `AWS::QuickSight::Dashboard.Parameters`.
 * <p>A list of Amazon QuickSight parameters and the list's override values.</p>
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-parameters.html}
 */
export type Parameters = {
  /**
   * <p>The parameters that have a data type of date-time.</p>
   * @minLength `0`
   * @maxLength `100`
   */
  DateTimeParameters?: DateTimeParameter[];
  /**
   * <p>The parameters that have a data type of decimal.</p>
   * @minLength `0`
   * @maxLength `100`
   */
  DecimalParameters?: DecimalParameter[];
  /**
   * <p>The parameters that have a data type of integer.</p>
   * @minLength `0`
   * @maxLength `100`
   */
  IntegerParameters?: IntegerParameter[];
  /**
   * <p>The parameters that have a data type of string.</p>
   * @minLength `0`
   * @maxLength `100`
   */
  StringParameters?: StringParameter[];
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.ParameterSelectableValues`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-parameterselectablevalues.html}
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
 * Type definition for `AWS::QuickSight::Dashboard.ParameterSliderControl`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-parameterslidercontrol.html}
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
 * Type definition for `AWS::QuickSight::Dashboard.ParameterTextAreaControl`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-parametertextareacontrol.html}
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
 * Type definition for `AWS::QuickSight::Dashboard.ParameterTextFieldControl`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-parametertextfieldcontrol.html}
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
 * Type definition for `AWS::QuickSight::Dashboard.ParameterValueType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-parametervaluetype.html}
 */
export type ParameterValueType = "MULTI_VALUED" | "SINGLE_VALUED";
/**
 * Type definition for `AWS::QuickSight::Dashboard.PercentageDisplayFormatConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-percentagedisplayformatconfiguration.html}
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
 * Type definition for `AWS::QuickSight::Dashboard.PercentileAggregation`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-percentileaggregation.html}
 */
export type PercentileAggregation = {
  /**
   * @min `0`
   * @max `100`
   */
  PercentileValue?: number;
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.PercentVisibleRange`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-percentvisiblerange.html}
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
 * Type definition for `AWS::QuickSight::Dashboard.PeriodOverPeriodComputation`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-periodoverperiodcomputation.html}
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
 * Type definition for `AWS::QuickSight::Dashboard.PeriodToDateComputation`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-periodtodatecomputation.html}
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
 * Type definition for `AWS::QuickSight::Dashboard.PieChartAggregatedFieldWells`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-piechartaggregatedfieldwells.html}
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
 * Type definition for `AWS::QuickSight::Dashboard.PieChartConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-piechartconfiguration.html}
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
 * Type definition for `AWS::QuickSight::Dashboard.PieChartFieldWells`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-piechartfieldwells.html}
 */
export type PieChartFieldWells = {
  PieChartAggregatedFieldWells?: PieChartAggregatedFieldWells;
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.PieChartSortConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-piechartsortconfiguration.html}
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
 * Type definition for `AWS::QuickSight::Dashboard.PieChartVisual`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-piechartvisual.html}
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
 * Type definition for `AWS::QuickSight::Dashboard.PivotFieldSortOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-pivotfieldsortoptions.html}
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
 * Type definition for `AWS::QuickSight::Dashboard.PivotTableAggregatedFieldWells`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-pivottableaggregatedfieldwells.html}
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
 * Type definition for `AWS::QuickSight::Dashboard.PivotTableCellConditionalFormatting`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-pivottablecellconditionalformatting.html}
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
 * Type definition for `AWS::QuickSight::Dashboard.PivotTableConditionalFormatting`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-pivottableconditionalformatting.html}
 */
export type PivotTableConditionalFormatting = {
  /**
   * @minLength `0`
   * @maxLength `100`
   */
  ConditionalFormattingOptions?: PivotTableConditionalFormattingOption[];
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.PivotTableConditionalFormattingOption`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-pivottableconditionalformattingoption.html}
 */
export type PivotTableConditionalFormattingOption = {
  Cell?: PivotTableCellConditionalFormatting;
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.PivotTableConditionalFormattingScope`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-pivottableconditionalformattingscope.html}
 */
export type PivotTableConditionalFormattingScope = {
  Role?: PivotTableConditionalFormattingScopeRole;
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.PivotTableConditionalFormattingScopeRole`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-pivottableconditionalformattingscoperole.html}
 */
export type PivotTableConditionalFormattingScopeRole =
  | "FIELD"
  | "FIELD_TOTAL"
  | "GRAND_TOTAL";
/**
 * Type definition for `AWS::QuickSight::Dashboard.PivotTableConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-pivottableconfiguration.html}
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
 * Type definition for `AWS::QuickSight::Dashboard.PivotTableDataPathOption`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-pivottabledatapathoption.html}
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
 * Type definition for `AWS::QuickSight::Dashboard.PivotTableDataPathType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-pivottabledatapathtype.html}
 */
export type PivotTableDataPathType =
  | "HIERARCHY_ROWS_LAYOUT_COLUMN"
  | "MULTIPLE_ROW_METRICS_COLUMN"
  | "EMPTY_COLUMN_HEADER"
  | "COUNT_METRIC_COLUMN";
/**
 * Type definition for `AWS::QuickSight::Dashboard.PivotTableFieldCollapseState`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-pivottablefieldcollapsestate.html}
 */
export type PivotTableFieldCollapseState = "COLLAPSED" | "EXPANDED";
/**
 * Type definition for `AWS::QuickSight::Dashboard.PivotTableFieldCollapseStateOption`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-pivottablefieldcollapsestateoption.html}
 */
export type PivotTableFieldCollapseStateOption = {
  State?: PivotTableFieldCollapseState;
  Target: PivotTableFieldCollapseStateTarget;
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.PivotTableFieldCollapseStateTarget`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-pivottablefieldcollapsestatetarget.html}
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
 * Type definition for `AWS::QuickSight::Dashboard.PivotTableFieldOption`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-pivottablefieldoption.html}
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
 * Type definition for `AWS::QuickSight::Dashboard.PivotTableFieldOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-pivottablefieldoptions.html}
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
 * Type definition for `AWS::QuickSight::Dashboard.PivotTableFieldSubtotalOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-pivottablefieldsubtotaloptions.html}
 */
export type PivotTableFieldSubtotalOptions = {
  /**
   * @minLength `1`
   * @maxLength `512`
   */
  FieldId?: string;
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.PivotTableFieldWells`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-pivottablefieldwells.html}
 */
export type PivotTableFieldWells = {
  PivotTableAggregatedFieldWells?: PivotTableAggregatedFieldWells;
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.PivotTableMetricPlacement`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-pivottablemetricplacement.html}
 */
export type PivotTableMetricPlacement = "ROW" | "COLUMN";
/**
 * Type definition for `AWS::QuickSight::Dashboard.PivotTableOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-pivottableoptions.html}
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
 * Type definition for `AWS::QuickSight::Dashboard.PivotTablePaginatedReportOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-pivottablepaginatedreportoptions.html}
 */
export type PivotTablePaginatedReportOptions = {
  OverflowColumnHeaderVisibility?: Visibility;
  VerticalOverflowVisibility?: Visibility;
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.PivotTableRowsLabelOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-pivottablerowslabeloptions.html}
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
 * Type definition for `AWS::QuickSight::Dashboard.PivotTableRowsLayout`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-pivottablerowslayout.html}
 */
export type PivotTableRowsLayout = "TABULAR" | "HIERARCHY";
/**
 * Type definition for `AWS::QuickSight::Dashboard.PivotTableSortBy`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-pivottablesortby.html}
 */
export type PivotTableSortBy = {
  Column?: ColumnSort;
  DataPath?: DataPathSort;
  Field?: FieldSort;
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.PivotTableSortConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-pivottablesortconfiguration.html}
 */
export type PivotTableSortConfiguration = {
  /**
   * @minLength `0`
   * @maxLength `200`
   */
  FieldSortOptions?: PivotFieldSortOptions[];
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.PivotTableSubtotalLevel`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-pivottablesubtotallevel.html}
 */
export type PivotTableSubtotalLevel = "ALL" | "CUSTOM" | "LAST";
/**
 * Type definition for `AWS::QuickSight::Dashboard.PivotTableTotalOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-pivottabletotaloptions.html}
 */
export type PivotTableTotalOptions = {
  ColumnSubtotalOptions?: SubtotalOptions;
  ColumnTotalOptions?: PivotTotalOptions;
  RowSubtotalOptions?: SubtotalOptions;
  RowTotalOptions?: PivotTotalOptions;
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.PivotTableVisual`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-pivottablevisual.html}
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
 * Type definition for `AWS::QuickSight::Dashboard.PivotTotalOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-pivottotaloptions.html}
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
 * Type definition for `AWS::QuickSight::Dashboard.PredefinedHierarchy`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-predefinedhierarchy.html}
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
 * Type definition for `AWS::QuickSight::Dashboard.PrimaryValueDisplayType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-primaryvaluedisplaytype.html}
 */
export type PrimaryValueDisplayType = "HIDDEN" | "COMPARISON" | "ACTUAL";
/**
 * Type definition for `AWS::QuickSight::Dashboard.ProgressBarOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-progressbaroptions.html}
 */
export type ProgressBarOptions = {
  Visibility?: Visibility;
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.RadarChartAggregatedFieldWells`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-radarchartaggregatedfieldwells.html}
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
 * Type definition for `AWS::QuickSight::Dashboard.RadarChartAreaStyleSettings`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-radarchartareastylesettings.html}
 */
export type RadarChartAreaStyleSettings = {
  Visibility?: Visibility;
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.RadarChartAxesRangeScale`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-radarchartaxesrangescale.html}
 */
export type RadarChartAxesRangeScale = "AUTO" | "INDEPENDENT" | "SHARED";
/**
 * Type definition for `AWS::QuickSight::Dashboard.RadarChartConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-radarchartconfiguration.html}
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
 * Type definition for `AWS::QuickSight::Dashboard.RadarChartFieldWells`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-radarchartfieldwells.html}
 */
export type RadarChartFieldWells = {
  RadarChartAggregatedFieldWells?: RadarChartAggregatedFieldWells;
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.RadarChartSeriesSettings`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-radarchartseriessettings.html}
 */
export type RadarChartSeriesSettings = {
  AreaStyleSettings?: RadarChartAreaStyleSettings;
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.RadarChartShape`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-radarchartshape.html}
 */
export type RadarChartShape = "CIRCLE" | "POLYGON";
/**
 * Type definition for `AWS::QuickSight::Dashboard.RadarChartSortConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-radarchartsortconfiguration.html}
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
 * Type definition for `AWS::QuickSight::Dashboard.RadarChartVisual`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-radarchartvisual.html}
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
 * Type definition for `AWS::QuickSight::Dashboard.RangeEndsLabelType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-rangeendslabeltype.html}
 */
export type RangeEndsLabelType = {
  Visibility?: Visibility;
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.ReferenceLine`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-referenceline.html}
 */
export type ReferenceLine = {
  DataConfiguration: ReferenceLineDataConfiguration;
  LabelConfiguration?: ReferenceLineLabelConfiguration;
  Status?: WidgetStatus;
  StyleConfiguration?: ReferenceLineStyleConfiguration;
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.ReferenceLineCustomLabelConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-referencelinecustomlabelconfiguration.html}
 */
export type ReferenceLineCustomLabelConfiguration = {
  /**
   * @pattern `\S`
   */
  CustomLabel: string;
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.ReferenceLineDataConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-referencelinedataconfiguration.html}
 */
export type ReferenceLineDataConfiguration = {
  AxisBinding?: AxisBinding;
  DynamicConfiguration?: ReferenceLineDynamicDataConfiguration;
  SeriesType?: ReferenceLineSeriesType;
  StaticConfiguration?: ReferenceLineStaticDataConfiguration;
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.ReferenceLineDynamicDataConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-referencelinedynamicdataconfiguration.html}
 */
export type ReferenceLineDynamicDataConfiguration = {
  Calculation: NumericalAggregationFunction;
  Column: ColumnIdentifier;
  MeasureAggregationFunction?: AggregationFunction;
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.ReferenceLineLabelConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-referencelinelabelconfiguration.html}
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
 * Type definition for `AWS::QuickSight::Dashboard.ReferenceLineLabelHorizontalPosition`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-referencelinelabelhorizontalposition.html}
 */
export type ReferenceLineLabelHorizontalPosition = "LEFT" | "CENTER" | "RIGHT";
/**
 * Type definition for `AWS::QuickSight::Dashboard.ReferenceLineLabelVerticalPosition`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-referencelinelabelverticalposition.html}
 */
export type ReferenceLineLabelVerticalPosition = "ABOVE" | "BELOW";
/**
 * Type definition for `AWS::QuickSight::Dashboard.ReferenceLinePatternType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-referencelinepatterntype.html}
 */
export type ReferenceLinePatternType = "SOLID" | "DASHED" | "DOTTED";
/**
 * Type definition for `AWS::QuickSight::Dashboard.ReferenceLineSeriesType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-referencelineseriestype.html}
 */
export type ReferenceLineSeriesType = "BAR" | "LINE";
/**
 * Type definition for `AWS::QuickSight::Dashboard.ReferenceLineStaticDataConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-referencelinestaticdataconfiguration.html}
 */
export type ReferenceLineStaticDataConfiguration = {
  Value: number;
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.ReferenceLineStyleConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-referencelinestyleconfiguration.html}
 */
export type ReferenceLineStyleConfiguration = {
  /**
   * @pattern `^#[A-F0-9]{6}$`
   */
  Color?: string;
  Pattern?: ReferenceLinePatternType;
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.ReferenceLineValueLabelConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-referencelinevaluelabelconfiguration.html}
 */
export type ReferenceLineValueLabelConfiguration = {
  FormatConfiguration?: NumericFormatConfiguration;
  RelativePosition?: ReferenceLineValueLabelRelativePosition;
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.ReferenceLineValueLabelRelativePosition`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-referencelinevaluelabelrelativeposition.html}
 */
export type ReferenceLineValueLabelRelativePosition =
  | "BEFORE_CUSTOM_LABEL"
  | "AFTER_CUSTOM_LABEL";
/**
 * Type definition for `AWS::QuickSight::Dashboard.RelativeDatesFilter`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-relativedatesfilter.html}
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
 * Type definition for `AWS::QuickSight::Dashboard.RelativeDateTimeControlDisplayOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-relativedatetimecontroldisplayoptions.html}
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
 * Type definition for `AWS::QuickSight::Dashboard.RelativeDateType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-relativedatetype.html}
 */
export type RelativeDateType = "PREVIOUS" | "THIS" | "LAST" | "NOW" | "NEXT";
/**
 * Type definition for `AWS::QuickSight::Dashboard.RelativeFontSize`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-relativefontsize.html}
 */
export type RelativeFontSize =
  | "EXTRA_SMALL"
  | "SMALL"
  | "MEDIUM"
  | "LARGE"
  | "EXTRA_LARGE";
/**
 * Type definition for `AWS::QuickSight::Dashboard.ResizeOption`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-resizeoption.html}
 */
export type ResizeOption = "FIXED" | "RESPONSIVE";
/**
 * Type definition for `AWS::QuickSight::Dashboard.ResourcePermission`.
 * <p>Permission for the resource.</p>
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-resourcepermission.html}
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
 * Type definition for `AWS::QuickSight::Dashboard.ResourceStatus`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-resourcestatus.html}
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
 * Type definition for `AWS::QuickSight::Dashboard.RollingDateConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-rollingdateconfiguration.html}
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
 * Type definition for `AWS::QuickSight::Dashboard.RowAlternateColorOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-rowalternatecoloroptions.html}
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
 * Type definition for `AWS::QuickSight::Dashboard.SameSheetTargetVisualConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-samesheettargetvisualconfiguration.html}
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
 * Type definition for `AWS::QuickSight::Dashboard.SankeyDiagramAggregatedFieldWells`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-sankeydiagramaggregatedfieldwells.html}
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
 * Type definition for `AWS::QuickSight::Dashboard.SankeyDiagramChartConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-sankeydiagramchartconfiguration.html}
 */
export type SankeyDiagramChartConfiguration = {
  DataLabels?: DataLabelOptions;
  FieldWells?: SankeyDiagramFieldWells;
  SortConfiguration?: SankeyDiagramSortConfiguration;
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.SankeyDiagramFieldWells`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-sankeydiagramfieldwells.html}
 */
export type SankeyDiagramFieldWells = {
  SankeyDiagramAggregatedFieldWells?: SankeyDiagramAggregatedFieldWells;
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.SankeyDiagramSortConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-sankeydiagramsortconfiguration.html}
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
 * Type definition for `AWS::QuickSight::Dashboard.SankeyDiagramVisual`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-sankeydiagramvisual.html}
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
 * Type definition for `AWS::QuickSight::Dashboard.ScatterPlotCategoricallyAggregatedFieldWells`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-scatterplotcategoricallyaggregatedfieldwells.html}
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
 * Type definition for `AWS::QuickSight::Dashboard.ScatterPlotConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-scatterplotconfiguration.html}
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
 * Type definition for `AWS::QuickSight::Dashboard.ScatterPlotFieldWells`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-scatterplotfieldwells.html}
 */
export type ScatterPlotFieldWells = {
  ScatterPlotCategoricallyAggregatedFieldWells?: ScatterPlotCategoricallyAggregatedFieldWells;
  ScatterPlotUnaggregatedFieldWells?: ScatterPlotUnaggregatedFieldWells;
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.ScatterPlotUnaggregatedFieldWells`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-scatterplotunaggregatedfieldwells.html}
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
 * Type definition for `AWS::QuickSight::Dashboard.ScatterPlotVisual`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-scatterplotvisual.html}
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
 * Type definition for `AWS::QuickSight::Dashboard.ScrollBarOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-scrollbaroptions.html}
 */
export type ScrollBarOptions = {
  Visibility?: Visibility;
  VisibleRange?: VisibleRangeOptions;
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.SecondaryValueOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-secondaryvalueoptions.html}
 */
export type SecondaryValueOptions = {
  Visibility?: Visibility;
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.SectionAfterPageBreak`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-sectionafterpagebreak.html}
 */
export type SectionAfterPageBreak = {
  Status?: SectionPageBreakStatus;
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.SectionBasedLayoutCanvasSizeOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-sectionbasedlayoutcanvassizeoptions.html}
 */
export type SectionBasedLayoutCanvasSizeOptions = {
  PaperCanvasSizeOptions?: SectionBasedLayoutPaperCanvasSizeOptions;
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.SectionBasedLayoutConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-sectionbasedlayoutconfiguration.html}
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
 * Type definition for `AWS::QuickSight::Dashboard.SectionBasedLayoutPaperCanvasSizeOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-sectionbasedlayoutpapercanvassizeoptions.html}
 */
export type SectionBasedLayoutPaperCanvasSizeOptions = {
  PaperMargin?: Spacing;
  PaperOrientation?: PaperOrientation;
  PaperSize?: PaperSize;
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.SectionLayoutConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-sectionlayoutconfiguration.html}
 */
export type SectionLayoutConfiguration = {
  FreeFormLayout: FreeFormSectionLayoutConfiguration;
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.SectionPageBreakConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-sectionpagebreakconfiguration.html}
 */
export type SectionPageBreakConfiguration = {
  After?: SectionAfterPageBreak;
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.SectionPageBreakStatus`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-sectionpagebreakstatus.html}
 */
export type SectionPageBreakStatus = "ENABLED" | "DISABLED";
/**
 * Type definition for `AWS::QuickSight::Dashboard.SectionStyle`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-sectionstyle.html}
 */
export type SectionStyle = {
  /**
   * String based length that is composed of value and unit in px
   */
  Height?: string;
  Padding?: Spacing;
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.SelectAllValueOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-selectallvalueoptions.html}
 */
export type SelectAllValueOptions = "ALL_VALUES";
/**
 * Type definition for `AWS::QuickSight::Dashboard.SelectedFieldOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-selectedfieldoptions.html}
 */
export type SelectedFieldOptions = "ALL_FIELDS";
/**
 * Type definition for `AWS::QuickSight::Dashboard.SelectedSheetsFilterScopeConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-selectedsheetsfilterscopeconfiguration.html}
 */
export type SelectedSheetsFilterScopeConfiguration = {
  /**
   * @minLength `1`
   * @maxLength `50`
   */
  SheetVisualScopingConfigurations?: SheetVisualScopingConfiguration[];
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.SelectedTooltipType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-selectedtooltiptype.html}
 */
export type SelectedTooltipType = "BASIC" | "DETAILED";
/**
 * Type definition for `AWS::QuickSight::Dashboard.SeriesItem`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-seriesitem.html}
 */
export type SeriesItem = {
  DataFieldSeriesItem?: DataFieldSeriesItem;
  FieldSeriesItem?: FieldSeriesItem;
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.SetParameterValueConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-setparametervalueconfiguration.html}
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
 * Type definition for `AWS::QuickSight::Dashboard.ShapeConditionalFormat`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-shapeconditionalformat.html}
 */
export type ShapeConditionalFormat = {
  BackgroundColor: ConditionalFormattingColor;
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.Sheet`.
 * <p>A <i>sheet</i>, which is an object that contains a set of visuals that
            are viewed together on one page in Amazon QuickSight. Every analysis and dashboard
            contains at least one sheet. Each sheet contains at least one visualization widget, for
            example a chart, pivot table, or narrative insight. Sheets can be associated with other
            components, such as controls, filters, and so on.</p>
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-sheet.html}
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
 * Type definition for `AWS::QuickSight::Dashboard.SheetContentType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-sheetcontenttype.html}
 */
export type SheetContentType = "PAGINATED" | "INTERACTIVE";
/**
 * Type definition for `AWS::QuickSight::Dashboard.SheetControlDateTimePickerType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-sheetcontroldatetimepickertype.html}
 */
export type SheetControlDateTimePickerType = "SINGLE_VALUED" | "DATE_RANGE";
/**
 * Type definition for `AWS::QuickSight::Dashboard.SheetControlInfoIconLabelOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-sheetcontrolinfoiconlabeloptions.html}
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
 * Type definition for `AWS::QuickSight::Dashboard.SheetControlLayout`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-sheetcontrollayout.html}
 */
export type SheetControlLayout = {
  Configuration: SheetControlLayoutConfiguration;
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.SheetControlLayoutConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-sheetcontrollayoutconfiguration.html}
 */
export type SheetControlLayoutConfiguration = {
  GridLayout?: GridLayoutConfiguration;
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.SheetControlListType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-sheetcontrollisttype.html}
 */
export type SheetControlListType = "MULTI_SELECT" | "SINGLE_SELECT";
/**
 * Type definition for `AWS::QuickSight::Dashboard.SheetControlSliderType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-sheetcontrolslidertype.html}
 */
export type SheetControlSliderType = "SINGLE_POINT" | "RANGE";
/**
 * Type definition for `AWS::QuickSight::Dashboard.SheetControlsOption`.
 * <p>Sheet controls option.</p>
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-sheetcontrolsoption.html}
 */
export type SheetControlsOption = {
  VisibilityState?: DashboardUIState;
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.SheetDefinition`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-sheetdefinition.html}
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
 * Type definition for `AWS::QuickSight::Dashboard.SheetElementConfigurationOverrides`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-sheetelementconfigurationoverrides.html}
 */
export type SheetElementConfigurationOverrides = {
  Visibility?: Visibility;
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.SheetElementRenderingRule`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-sheetelementrenderingrule.html}
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
 * Type definition for `AWS::QuickSight::Dashboard.SheetLayoutElementMaximizationOption`.
 * <p>The sheet layout maximization options of a dashbaord.</p>
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-sheetlayoutelementmaximizationoption.html}
 */
export type SheetLayoutElementMaximizationOption = {
  AvailabilityStatus?: DashboardBehavior;
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.SheetTextBox`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-sheettextbox.html}
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
 * Type definition for `AWS::QuickSight::Dashboard.SheetVisualScopingConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-sheetvisualscopingconfiguration.html}
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
 * Type definition for `AWS::QuickSight::Dashboard.ShortFormatText`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-shortformattext.html}
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
 * Type definition for `AWS::QuickSight::Dashboard.SimpleAttributeAggregationFunction`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-simpleattributeaggregationfunction.html}
 */
export type SimpleAttributeAggregationFunction = "UNIQUE_VALUE";
/**
 * Type definition for `AWS::QuickSight::Dashboard.SimpleClusterMarker`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-simpleclustermarker.html}
 */
export type SimpleClusterMarker = {
  /**
   * @pattern `^#[A-F0-9]{6}$`
   */
  Color?: string;
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.SimpleNumericalAggregationFunction`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-simplenumericalaggregationfunction.html}
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
 * Type definition for `AWS::QuickSight::Dashboard.SimpleTotalAggregationFunction`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-simpletotalaggregationfunction.html}
 */
export type SimpleTotalAggregationFunction =
  | "DEFAULT"
  | "SUM"
  | "AVERAGE"
  | "MIN"
  | "MAX"
  | "NONE";
/**
 * Type definition for `AWS::QuickSight::Dashboard.SliderControlDisplayOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-slidercontroldisplayoptions.html}
 */
export type SliderControlDisplayOptions = {
  InfoIconLabelOptions?: SheetControlInfoIconLabelOptions;
  TitleOptions?: LabelOptions;
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.SmallMultiplesAxisPlacement`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-smallmultiplesaxisplacement.html}
 */
export type SmallMultiplesAxisPlacement = "OUTSIDE" | "INSIDE";
/**
 * Type definition for `AWS::QuickSight::Dashboard.SmallMultiplesAxisProperties`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-smallmultiplesaxisproperties.html}
 */
export type SmallMultiplesAxisProperties = {
  Placement?: SmallMultiplesAxisPlacement;
  Scale?: SmallMultiplesAxisScale;
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.SmallMultiplesAxisScale`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-smallmultiplesaxisscale.html}
 */
export type SmallMultiplesAxisScale = "SHARED" | "INDEPENDENT";
/**
 * Type definition for `AWS::QuickSight::Dashboard.SmallMultiplesOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-smallmultiplesoptions.html}
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
 * Type definition for `AWS::QuickSight::Dashboard.SortDirection`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-sortdirection.html}
 */
export type SortDirection = "ASC" | "DESC";
/**
 * Type definition for `AWS::QuickSight::Dashboard.Spacing`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-spacing.html}
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
 * Type definition for `AWS::QuickSight::Dashboard.SpecialValue`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-specialvalue.html}
 */
export type SpecialValue = "EMPTY" | "NULL" | "OTHER";
/**
 * Type definition for `AWS::QuickSight::Dashboard.StringDefaultValues`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-stringdefaultvalues.html}
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
 * Type definition for `AWS::QuickSight::Dashboard.StringFormatConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-stringformatconfiguration.html}
 */
export type StringFormatConfiguration = {
  NullValueFormatConfiguration?: NullValueFormatConfiguration;
  NumericFormatConfiguration?: NumericFormatConfiguration;
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.StringParameter`.
 * <p>A string parameter.</p>
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-stringparameter.html}
 */
export type StringParameter = {
  /**
   * <p>A display name for a string parameter.</p>
   * @pattern `\S`
   */
  Name: string;
  /**
   * <p>The values of a string parameter.</p>
   */
  Values: string[];
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.StringParameterDeclaration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-stringparameterdeclaration.html}
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
 * Type definition for `AWS::QuickSight::Dashboard.StringValueWhenUnsetConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-stringvaluewhenunsetconfiguration.html}
 */
export type StringValueWhenUnsetConfiguration = {
  CustomValue?: string;
  ValueWhenUnsetOption?: ValueWhenUnsetOption;
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.StyledCellType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-styledcelltype.html}
 */
export type StyledCellType = "TOTAL" | "METRIC_HEADER" | "VALUE";
/**
 * Type definition for `AWS::QuickSight::Dashboard.SubtotalOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-subtotaloptions.html}
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
 * Type definition for `AWS::QuickSight::Dashboard.TableAggregatedFieldWells`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-tableaggregatedfieldwells.html}
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
 * Type definition for `AWS::QuickSight::Dashboard.TableBorderOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-tableborderoptions.html}
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
 * Type definition for `AWS::QuickSight::Dashboard.TableBorderStyle`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-tableborderstyle.html}
 */
export type TableBorderStyle = "NONE" | "SOLID";
/**
 * Type definition for `AWS::QuickSight::Dashboard.TableCellConditionalFormatting`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-tablecellconditionalformatting.html}
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
 * Type definition for `AWS::QuickSight::Dashboard.TableCellImageScalingConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-tablecellimagescalingconfiguration.html}
 */
export type TableCellImageScalingConfiguration =
  | "FIT_TO_CELL_HEIGHT"
  | "FIT_TO_CELL_WIDTH"
  | "DO_NOT_SCALE";
/**
 * Type definition for `AWS::QuickSight::Dashboard.TableCellImageSizingConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-tablecellimagesizingconfiguration.html}
 */
export type TableCellImageSizingConfiguration = {
  TableCellImageScalingConfiguration?: TableCellImageScalingConfiguration;
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.TableCellStyle`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-tablecellstyle.html}
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
 * Type definition for `AWS::QuickSight::Dashboard.TableConditionalFormatting`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-tableconditionalformatting.html}
 */
export type TableConditionalFormatting = {
  /**
   * @minLength `0`
   * @maxLength `100`
   */
  ConditionalFormattingOptions?: TableConditionalFormattingOption[];
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.TableConditionalFormattingOption`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-tableconditionalformattingoption.html}
 */
export type TableConditionalFormattingOption = {
  Cell?: TableCellConditionalFormatting;
  Row?: TableRowConditionalFormatting;
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.TableConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-tableconfiguration.html}
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
 * Type definition for `AWS::QuickSight::Dashboard.TableFieldCustomIconContent`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-tablefieldcustomiconcontent.html}
 */
export type TableFieldCustomIconContent = {
  Icon?: TableFieldIconSetType;
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.TableFieldCustomTextContent`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-tablefieldcustomtextcontent.html}
 */
export type TableFieldCustomTextContent = {
  FontConfiguration: FontConfiguration;
  Value?: string;
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.TableFieldIconSetType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-tablefieldiconsettype.html}
 */
export type TableFieldIconSetType = "LINK";
/**
 * Type definition for `AWS::QuickSight::Dashboard.TableFieldImageConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-tablefieldimageconfiguration.html}
 */
export type TableFieldImageConfiguration = {
  SizingOptions?: TableCellImageSizingConfiguration;
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.TableFieldLinkConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-tablefieldlinkconfiguration.html}
 */
export type TableFieldLinkConfiguration = {
  Content: TableFieldLinkContentConfiguration;
  Target: URLTargetConfiguration;
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.TableFieldLinkContentConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-tablefieldlinkcontentconfiguration.html}
 */
export type TableFieldLinkContentConfiguration = {
  CustomIconContent?: TableFieldCustomIconContent;
  CustomTextContent?: TableFieldCustomTextContent;
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.TableFieldOption`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-tablefieldoption.html}
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
 * Type definition for `AWS::QuickSight::Dashboard.TableFieldOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-tablefieldoptions.html}
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
 * Type definition for `AWS::QuickSight::Dashboard.TableFieldURLConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-tablefieldurlconfiguration.html}
 */
export type TableFieldURLConfiguration = {
  ImageConfiguration?: TableFieldImageConfiguration;
  LinkConfiguration?: TableFieldLinkConfiguration;
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.TableFieldWells`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-tablefieldwells.html}
 */
export type TableFieldWells = {
  TableAggregatedFieldWells?: TableAggregatedFieldWells;
  TableUnaggregatedFieldWells?: TableUnaggregatedFieldWells;
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.TableInlineVisualization`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-tableinlinevisualization.html}
 */
export type TableInlineVisualization = {
  DataBars?: DataBarsOptions;
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.TableOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-tableoptions.html}
 */
export type TableOptions = {
  CellStyle?: TableCellStyle;
  HeaderStyle?: TableCellStyle;
  Orientation?: TableOrientation;
  RowAlternateColorOptions?: RowAlternateColorOptions;
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.TableOrientation`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-tableorientation.html}
 */
export type TableOrientation = "VERTICAL" | "HORIZONTAL";
/**
 * Type definition for `AWS::QuickSight::Dashboard.TablePaginatedReportOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-tablepaginatedreportoptions.html}
 */
export type TablePaginatedReportOptions = {
  OverflowColumnHeaderVisibility?: Visibility;
  VerticalOverflowVisibility?: Visibility;
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.TablePinnedFieldOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-tablepinnedfieldoptions.html}
 */
export type TablePinnedFieldOptions = {
  /**
   * @minLength `0`
   * @maxLength `201`
   */
  PinnedLeftFields?: string[];
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.TableRowConditionalFormatting`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-tablerowconditionalformatting.html}
 */
export type TableRowConditionalFormatting = {
  BackgroundColor?: ConditionalFormattingColor;
  TextColor?: ConditionalFormattingColor;
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.TableSideBorderOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-tablesideborderoptions.html}
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
 * Type definition for `AWS::QuickSight::Dashboard.TableSortConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-tablesortconfiguration.html}
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
 * Type definition for `AWS::QuickSight::Dashboard.TableStyleTarget`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-tablestyletarget.html}
 */
export type TableStyleTarget = {
  CellType: StyledCellType;
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.TableTotalsPlacement`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-tabletotalsplacement.html}
 */
export type TableTotalsPlacement = "START" | "END" | "AUTO";
/**
 * Type definition for `AWS::QuickSight::Dashboard.TableTotalsScrollStatus`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-tabletotalsscrollstatus.html}
 */
export type TableTotalsScrollStatus = "PINNED" | "SCROLLED";
/**
 * Type definition for `AWS::QuickSight::Dashboard.TableUnaggregatedFieldWells`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-tableunaggregatedfieldwells.html}
 */
export type TableUnaggregatedFieldWells = {
  /**
   * @minLength `0`
   * @maxLength `200`
   */
  Values?: UnaggregatedField[];
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.TableVisual`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-tablevisual.html}
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
 * Type definition for `AWS::QuickSight::Dashboard.Tag`.
 * <p>The key or keys of the key-value pairs for the resource tag or tags assigned to the
            resource.</p>
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-tag.html}
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
 * Type definition for `AWS::QuickSight::Dashboard.TargetVisualOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-targetvisualoptions.html}
 */
export type TargetVisualOptions = "ALL_VISUALS";
/**
 * Type definition for `AWS::QuickSight::Dashboard.TextAreaControlDisplayOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-textareacontroldisplayoptions.html}
 */
export type TextAreaControlDisplayOptions = {
  InfoIconLabelOptions?: SheetControlInfoIconLabelOptions;
  PlaceholderOptions?: TextControlPlaceholderOptions;
  TitleOptions?: LabelOptions;
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.TextConditionalFormat`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-textconditionalformat.html}
 */
export type TextConditionalFormat = {
  BackgroundColor?: ConditionalFormattingColor;
  Icon?: ConditionalFormattingIcon;
  TextColor?: ConditionalFormattingColor;
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.TextControlPlaceholderOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-textcontrolplaceholderoptions.html}
 */
export type TextControlPlaceholderOptions = {
  Visibility?: Visibility;
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.TextFieldControlDisplayOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-textfieldcontroldisplayoptions.html}
 */
export type TextFieldControlDisplayOptions = {
  InfoIconLabelOptions?: SheetControlInfoIconLabelOptions;
  PlaceholderOptions?: TextControlPlaceholderOptions;
  TitleOptions?: LabelOptions;
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.TextWrap`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-textwrap.html}
 */
export type TextWrap = "NONE" | "WRAP";
/**
 * Type definition for `AWS::QuickSight::Dashboard.ThousandSeparatorOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-thousandseparatoroptions.html}
 */
export type ThousandSeparatorOptions = {
  Symbol?: NumericSeparatorSymbol;
  Visibility?: Visibility;
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.TimeBasedForecastProperties`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-timebasedforecastproperties.html}
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
 * Type definition for `AWS::QuickSight::Dashboard.TimeEqualityFilter`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-timeequalityfilter.html}
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
 * Type definition for `AWS::QuickSight::Dashboard.TimeGranularity`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-timegranularity.html}
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
 * Type definition for `AWS::QuickSight::Dashboard.TimeRangeDrillDownFilter`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-timerangedrilldownfilter.html}
 */
export type TimeRangeDrillDownFilter = {
  Column: ColumnIdentifier;
  RangeMaximum: string;
  RangeMinimum: string;
  TimeGranularity: TimeGranularity;
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.TimeRangeFilter`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-timerangefilter.html}
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
 * Type definition for `AWS::QuickSight::Dashboard.TimeRangeFilterValue`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-timerangefiltervalue.html}
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
 * Type definition for `AWS::QuickSight::Dashboard.TooltipItem`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-tooltipitem.html}
 */
export type TooltipItem = {
  ColumnTooltipItem?: ColumnTooltipItem;
  FieldTooltipItem?: FieldTooltipItem;
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.TooltipOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-tooltipoptions.html}
 */
export type TooltipOptions = {
  FieldBasedTooltip?: FieldBasedTooltip;
  SelectedTooltipType?: SelectedTooltipType;
  TooltipVisibility?: Visibility;
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.TooltipTitleType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-tooltiptitletype.html}
 */
export type TooltipTitleType = "NONE" | "PRIMARY_VALUE";
/**
 * Type definition for `AWS::QuickSight::Dashboard.TopBottomComputationType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-topbottomcomputationtype.html}
 */
export type TopBottomComputationType = "TOP" | "BOTTOM";
/**
 * Type definition for `AWS::QuickSight::Dashboard.TopBottomFilter`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-topbottomfilter.html}
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
 * Type definition for `AWS::QuickSight::Dashboard.TopBottomMoversComputation`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-topbottommoverscomputation.html}
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
 * Type definition for `AWS::QuickSight::Dashboard.TopBottomRankedComputation`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-topbottomrankedcomputation.html}
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
 * Type definition for `AWS::QuickSight::Dashboard.TopBottomSortOrder`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-topbottomsortorder.html}
 */
export type TopBottomSortOrder = "PERCENT_DIFFERENCE" | "ABSOLUTE_DIFFERENCE";
/**
 * Type definition for `AWS::QuickSight::Dashboard.TotalAggregationComputation`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-totalaggregationcomputation.html}
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
 * Type definition for `AWS::QuickSight::Dashboard.TotalAggregationFunction`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-totalaggregationfunction.html}
 */
export type TotalAggregationFunction = {
  SimpleTotalAggregationFunction?: SimpleTotalAggregationFunction;
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.TotalAggregationOption`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-totalaggregationoption.html}
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
 * Type definition for `AWS::QuickSight::Dashboard.TotalOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-totaloptions.html}
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
 * Type definition for `AWS::QuickSight::Dashboard.TreeMapAggregatedFieldWells`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-treemapaggregatedfieldwells.html}
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
 * Type definition for `AWS::QuickSight::Dashboard.TreeMapConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-treemapconfiguration.html}
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
 * Type definition for `AWS::QuickSight::Dashboard.TreeMapFieldWells`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-treemapfieldwells.html}
 */
export type TreeMapFieldWells = {
  TreeMapAggregatedFieldWells?: TreeMapAggregatedFieldWells;
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.TreeMapSortConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-treemapsortconfiguration.html}
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
 * Type definition for `AWS::QuickSight::Dashboard.TreeMapVisual`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-treemapvisual.html}
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
 * Type definition for `AWS::QuickSight::Dashboard.TrendArrowOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-trendarrowoptions.html}
 */
export type TrendArrowOptions = {
  Visibility?: Visibility;
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.UnaggregatedField`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-unaggregatedfield.html}
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
 * Type definition for `AWS::QuickSight::Dashboard.UniqueValuesComputation`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-uniquevaluescomputation.html}
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
 * Type definition for `AWS::QuickSight::Dashboard.URLTargetConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-urltargetconfiguration.html}
 */
export type URLTargetConfiguration = "NEW_TAB" | "NEW_WINDOW" | "SAME_TAB";
/**
 * Type definition for `AWS::QuickSight::Dashboard.ValidationStrategy`.
 * <p>The option to relax the validation that is required to create and update analyses, dashboards, and templates with definition objects. When you set this value to <code>LENIENT</code>, validation is skipped for specific errors.</p>
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-validationstrategy.html}
 */
export type ValidationStrategy = {
  Mode: ValidationStrategyMode;
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.ValidationStrategyMode`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-validationstrategymode.html}
 */
export type ValidationStrategyMode = "STRICT" | "LENIENT";
/**
 * Type definition for `AWS::QuickSight::Dashboard.ValueWhenUnsetOption`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-valuewhenunsetoption.html}
 */
export type ValueWhenUnsetOption = "RECOMMENDED_VALUE" | "NULL";
/**
 * Type definition for `AWS::QuickSight::Dashboard.VerticalTextAlignment`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-verticaltextalignment.html}
 */
export type VerticalTextAlignment = "TOP" | "MIDDLE" | "BOTTOM" | "AUTO";
/**
 * Type definition for `AWS::QuickSight::Dashboard.Visibility`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-visibility.html}
 */
export type Visibility = "HIDDEN" | "VISIBLE";
/**
 * Type definition for `AWS::QuickSight::Dashboard.VisibleRangeOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-visiblerangeoptions.html}
 */
export type VisibleRangeOptions = {
  PercentRange?: PercentVisibleRange;
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.Visual`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-visual.html}
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
 * Type definition for `AWS::QuickSight::Dashboard.VisualAxisSortOption`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-visualaxissortoption.html}
 */
export type VisualAxisSortOption = {
  AvailabilityStatus?: DashboardBehavior;
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.VisualCustomAction`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-visualcustomaction.html}
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
 * Type definition for `AWS::QuickSight::Dashboard.VisualCustomActionOperation`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-visualcustomactionoperation.html}
 */
export type VisualCustomActionOperation = {
  FilterOperation?: CustomActionFilterOperation;
  NavigationOperation?: CustomActionNavigationOperation;
  SetParametersOperation?: CustomActionSetParametersOperation;
  URLOperation?: CustomActionURLOperation;
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.VisualCustomActionTrigger`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-visualcustomactiontrigger.html}
 */
export type VisualCustomActionTrigger = "DATA_POINT_CLICK" | "DATA_POINT_MENU";
/**
 * Type definition for `AWS::QuickSight::Dashboard.VisualMenuOption`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-visualmenuoption.html}
 */
export type VisualMenuOption = {
  AvailabilityStatus?: DashboardBehavior;
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.VisualPalette`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-visualpalette.html}
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
 * Type definition for `AWS::QuickSight::Dashboard.VisualSubtitleLabelOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-visualsubtitlelabeloptions.html}
 */
export type VisualSubtitleLabelOptions = {
  FormatText?: LongFormatText;
  Visibility?: Visibility;
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.VisualTitleLabelOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-visualtitlelabeloptions.html}
 */
export type VisualTitleLabelOptions = {
  FormatText?: ShortFormatText;
  Visibility?: Visibility;
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.WaterfallChartAggregatedFieldWells`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-waterfallchartaggregatedfieldwells.html}
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
 * Type definition for `AWS::QuickSight::Dashboard.WaterfallChartConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-waterfallchartconfiguration.html}
 */
export type WaterfallChartConfiguration = {
  CategoryAxisDisplayOptions?: AxisDisplayOptions;
  CategoryAxisLabelOptions?: ChartAxisLabelOptions;
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
 * Type definition for `AWS::QuickSight::Dashboard.WaterfallChartFieldWells`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-waterfallchartfieldwells.html}
 */
export type WaterfallChartFieldWells = {
  WaterfallChartAggregatedFieldWells?: WaterfallChartAggregatedFieldWells;
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.WaterfallChartOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-waterfallchartoptions.html}
 */
export type WaterfallChartOptions = {
  TotalBarLabel?: string;
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.WaterfallChartSortConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-waterfallchartsortconfiguration.html}
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
 * Type definition for `AWS::QuickSight::Dashboard.WaterfallVisual`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-waterfallvisual.html}
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
 * Type definition for `AWS::QuickSight::Dashboard.WhatIfPointScenario`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-whatifpointscenario.html}
 */
export type WhatIfPointScenario = {
  Date: string;
  Value: number;
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.WhatIfRangeScenario`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-whatifrangescenario.html}
 */
export type WhatIfRangeScenario = {
  EndDate: string;
  StartDate: string;
  Value: number;
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.WidgetStatus`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-widgetstatus.html}
 */
export type WidgetStatus = "ENABLED" | "DISABLED";
/**
 * Type definition for `AWS::QuickSight::Dashboard.WordCloudAggregatedFieldWells`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-wordcloudaggregatedfieldwells.html}
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
 * Type definition for `AWS::QuickSight::Dashboard.WordCloudChartConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-wordcloudchartconfiguration.html}
 */
export type WordCloudChartConfiguration = {
  CategoryLabelOptions?: ChartAxisLabelOptions;
  FieldWells?: WordCloudFieldWells;
  SortConfiguration?: WordCloudSortConfiguration;
  WordCloudOptions?: WordCloudOptions;
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.WordCloudCloudLayout`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-wordcloudcloudlayout.html}
 */
export type WordCloudCloudLayout = "FLUID" | "NORMAL";
/**
 * Type definition for `AWS::QuickSight::Dashboard.WordCloudFieldWells`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-wordcloudfieldwells.html}
 */
export type WordCloudFieldWells = {
  WordCloudAggregatedFieldWells?: WordCloudAggregatedFieldWells;
};
/**
 * Type definition for `AWS::QuickSight::Dashboard.WordCloudOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-wordcloudoptions.html}
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
 * Type definition for `AWS::QuickSight::Dashboard.WordCloudSortConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-wordcloudsortconfiguration.html}
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
 * Type definition for `AWS::QuickSight::Dashboard.WordCloudVisual`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-wordcloudvisual.html}
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
 * Type definition for `AWS::QuickSight::Dashboard.WordCloudWordCasing`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-wordcloudwordcasing.html}
 */
export type WordCloudWordCasing = "LOWER_CASE" | "EXISTING_CASE";
/**
 * Type definition for `AWS::QuickSight::Dashboard.WordCloudWordOrientation`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-wordcloudwordorientation.html}
 */
export type WordCloudWordOrientation = "HORIZONTAL" | "HORIZONTAL_AND_VERTICAL";
/**
 * Type definition for `AWS::QuickSight::Dashboard.WordCloudWordPadding`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-wordcloudwordpadding.html}
 */
export type WordCloudWordPadding = "NONE" | "SMALL" | "MEDIUM" | "LARGE";
/**
 * Type definition for `AWS::QuickSight::Dashboard.WordCloudWordScaling`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-wordcloudwordscaling.html}
 */
export type WordCloudWordScaling = "EMPHASIZE" | "NORMAL";
/**
 * Definition of the AWS::QuickSight::Dashboard Resource Type.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-dashboard.html}
 */
export class QuickSightDashboard extends $Resource<
  "AWS::QuickSight::Dashboard",
  QuickSightDashboardProperties,
  QuickSightDashboardAttributes
> {
  public static readonly Type = "AWS::QuickSight::Dashboard";
  constructor(
    logicalId: string,
    properties: QuickSightDashboardProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, QuickSightDashboard.Type, properties, options);
  }
}
