import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Definition of AWS::BCM::Dashboard Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bcm-dashboard.html}
 */
export type BCMDashboardProperties = {
  /**
   * @minLength `1`
   * @maxLength `200`
   * @pattern `^(?!.* {2})[ a-zA-Z0-9.,!?;:@#$%&\-_/\\]*$`
   */
  Description?: string;
  /**
   * @minLength `2`
   * @maxLength `50`
   * @pattern `^(?!.* {2})[a-zA-Z][a-zA-Z0-9 _-]{0,48}[a-zA-Z0-9_-]$`
   */
  Name: string;
  /**
   * @maxLength `200`
   */
  Tags?: Tag[];
  /**
   * @minLength `0`
   * @maxLength `20`
   */
  Widgets: Widget[];
};
/**
 * Attribute type definition for `AWS::BCM::Dashboard`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bcm-dashboard.html#aws-resource-bcm-dashboard-return-values}
 */
export type BCMDashboardAttributes = {
  /**
   * @minLength `20`
   * @maxLength `2048`
   * @pattern `^arn:aws[-a-z0-9]*:bcm-dashboards::[0-9]{12}:dashboard/(\*|[-a-z0-9]+)$`
   */
  Arn: string;
  CreatedAt: string;
  Type: DashboardType;
  UpdatedAt: string;
};
/**
 * Type definition for `AWS::BCM::Dashboard.CostAndUsageExpression`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bcm-dashboard-costandusageexpression.html}
 */
export type CostAndUsageExpression = {
  And?: CostAndUsageExpression[];
  CostCategories?: CostCategoryValues;
  Dimensions?: DimensionValues;
  Not?: CostAndUsageExpression;
  Or?: CostAndUsageExpression[];
  Tags?: TagValues;
};
/**
 * Type definition for `AWS::BCM::Dashboard.CostAndUsageQuery`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bcm-dashboard-costandusagequery.html}
 */
export type CostAndUsageQuery = {
  Filter?: CostAndUsageExpression;
  Granularity: Granularity;
  GroupBy?: GroupDefinition[];
  Metrics: MetricName[];
  TimeRange: DateTimeRange;
};
/**
 * Type definition for `AWS::BCM::Dashboard.CostCategoryValues`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bcm-dashboard-costcategoryvalues.html}
 */
export type CostCategoryValues = {
  Key: string;
  MatchOptions?: MatchOption[];
  Values: string[];
};
/**
 * Type definition for `AWS::BCM::Dashboard.DashboardType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bcm-dashboard-dashboardtype.html}
 */
export type DashboardType = "CUSTOM";
/**
 * Type definition for `AWS::BCM::Dashboard.DateTimeRange`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bcm-dashboard-datetimerange.html}
 */
export type DateTimeRange = {
  EndTime: DateTimeValue;
  StartTime: DateTimeValue;
};
/**
 * Type definition for `AWS::BCM::Dashboard.DateTimeType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bcm-dashboard-datetimetype.html}
 */
export type DateTimeType = "ABSOLUTE" | "RELATIVE";
/**
 * Type definition for `AWS::BCM::Dashboard.DateTimeValue`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bcm-dashboard-datetimevalue.html}
 */
export type DateTimeValue = {
  Type: DateTimeType;
  Value: string;
};
/**
 * Type definition for `AWS::BCM::Dashboard.Dimension`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bcm-dashboard-dimension.html}
 */
export type Dimension =
  | "AZ"
  | "INSTANCE_TYPE"
  | "LINKED_ACCOUNT"
  | "OPERATION"
  | "PURCHASE_TYPE"
  | "REGION"
  | "SERVICE"
  | "USAGE_TYPE"
  | "USAGE_TYPE_GROUP"
  | "RECORD_TYPE"
  | "OPERATING_SYSTEM"
  | "TENANCY"
  | "SCOPE"
  | "PLATFORM"
  | "SUBSCRIPTION_ID"
  | "LEGAL_ENTITY_NAME"
  | "DEPLOYMENT_OPTION"
  | "DATABASE_ENGINE"
  | "CACHE_ENGINE"
  | "INSTANCE_TYPE_FAMILY"
  | "BILLING_ENTITY"
  | "RESERVATION_ID"
  | "RESOURCE_ID"
  | "SAVINGS_PLANS_TYPE"
  | "TAG_KEY"
  | "COST_CATEGORY_NAME";
/**
 * Type definition for `AWS::BCM::Dashboard.DimensionValues`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bcm-dashboard-dimensionvalues.html}
 */
export type DimensionValues = {
  Key: Dimension;
  MatchOptions?: MatchOption[];
  Values: string[];
};
/**
 * Type definition for `AWS::BCM::Dashboard.DisplayConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bcm-dashboard-displayconfig.html}
 */
export type DisplayConfig = {
  Graph?: GraphDisplayConfigMap;
  Table?: TableDisplayConfigStruct;
};
/**
 * Type definition for `AWS::BCM::Dashboard.Expression`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bcm-dashboard-expression.html}
 */
export type Expression = {
  And?: Expression[];
  CostCategories?: CostCategoryValues;
  Dimensions?: DimensionValues;
  Not?: Expression;
  Tags?: TagValues;
};
/**
 * Type definition for `AWS::BCM::Dashboard.Granularity`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bcm-dashboard-granularity.html}
 */
export type Granularity = "HOURLY" | "DAILY" | "MONTHLY";
/**
 * Type definition for `AWS::BCM::Dashboard.GraphDisplayConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bcm-dashboard-graphdisplayconfig.html}
 */
export type GraphDisplayConfig = {
  VisualType: VisualType;
};
/**
 * Type definition for `AWS::BCM::Dashboard.GraphDisplayConfigMap`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bcm-dashboard-graphdisplayconfigmap.html}
 */
export type GraphDisplayConfigMap = Record<string, GraphDisplayConfig>;
/**
 * Type definition for `AWS::BCM::Dashboard.GroupDefinition`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bcm-dashboard-groupdefinition.html}
 */
export type GroupDefinition = {
  /**
   * @minLength `1`
   * @maxLength `1024`
   * @pattern `^[\S\s]*$`
   */
  Key: string;
  Type?: GroupDefinitionType;
};
/**
 * Type definition for `AWS::BCM::Dashboard.GroupDefinitionType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bcm-dashboard-groupdefinitiontype.html}
 */
export type GroupDefinitionType = "DIMENSION" | "TAG" | "COST_CATEGORY";
/**
 * Type definition for `AWS::BCM::Dashboard.MatchOption`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bcm-dashboard-matchoption.html}
 */
export type MatchOption =
  | "EQUALS"
  | "ABSENT"
  | "STARTS_WITH"
  | "ENDS_WITH"
  | "CONTAINS"
  | "GREATER_THAN_OR_EQUAL"
  | "CASE_SENSITIVE"
  | "CASE_INSENSITIVE";
/**
 * Type definition for `AWS::BCM::Dashboard.MetricName`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bcm-dashboard-metricname.html}
 */
export type MetricName =
  | "AmortizedCost"
  | "BlendedCost"
  | "NetAmortizedCost"
  | "NetUnblendedCost"
  | "NormalizedUsageAmount"
  | "UnblendedCost"
  | "UsageQuantity"
  | "SpendCoveredBySavingsPlans"
  | "Hour"
  | "Unit"
  | "Cost";
/**
 * Type definition for `AWS::BCM::Dashboard.QueryParameters`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bcm-dashboard-queryparameters.html}
 */
export type QueryParameters = {
  CostAndUsage?: CostAndUsageQuery;
  ReservationCoverage?: ReservationCoverageQuery;
  ReservationUtilization?: ReservationUtilizationQuery;
  SavingsPlansCoverage?: SavingsPlansCoverageQuery;
  SavingsPlansUtilization?: SavingsPlansUtilizationQuery;
};
/**
 * Type definition for `AWS::BCM::Dashboard.ReservationCoverageQuery`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bcm-dashboard-reservationcoveragequery.html}
 */
export type ReservationCoverageQuery = {
  Filter?: Expression;
  Granularity?: Granularity;
  GroupBy?: GroupDefinition[];
  Metrics?: MetricName[];
  TimeRange: DateTimeRange;
};
/**
 * Type definition for `AWS::BCM::Dashboard.ReservationUtilizationQuery`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bcm-dashboard-reservationutilizationquery.html}
 */
export type ReservationUtilizationQuery = {
  Filter?: Expression;
  Granularity?: Granularity;
  GroupBy?: GroupDefinition[];
  TimeRange: DateTimeRange;
};
/**
 * Type definition for `AWS::BCM::Dashboard.SavingsPlansCoverageQuery`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bcm-dashboard-savingsplanscoveragequery.html}
 */
export type SavingsPlansCoverageQuery = {
  Filter?: Expression;
  Granularity?: Granularity;
  GroupBy?: GroupDefinition[];
  Metrics?: MetricName[];
  TimeRange: DateTimeRange;
};
/**
 * Type definition for `AWS::BCM::Dashboard.SavingsPlansUtilizationQuery`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bcm-dashboard-savingsplansutilizationquery.html}
 */
export type SavingsPlansUtilizationQuery = {
  Filter?: Expression;
  Granularity?: Granularity;
  TimeRange: DateTimeRange;
};
/**
 * Type definition for `AWS::BCM::Dashboard.TableDisplayConfigStruct`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bcm-dashboard-tabledisplayconfigstruct.html}
 */
export type TableDisplayConfigStruct = Record<string, any>;
/**
 * Type definition for `AWS::BCM::Dashboard.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bcm-dashboard-tag.html}
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
 * Type definition for `AWS::BCM::Dashboard.TagValues`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bcm-dashboard-tagvalues.html}
 */
export type TagValues = {
  Key: string;
  MatchOptions?: MatchOption[];
  Values: string[];
};
/**
 * Type definition for `AWS::BCM::Dashboard.VisualType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bcm-dashboard-visualtype.html}
 */
export type VisualType = "LINE" | "BAR" | "STACK";
/**
 * Type definition for `AWS::BCM::Dashboard.Widget`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bcm-dashboard-widget.html}
 */
export type Widget = {
  /**
   * @minLength `1`
   * @maxLength `2`
   */
  Configs: WidgetConfig[];
  /**
   * @minLength `1`
   * @maxLength `200`
   * @pattern `^(?!.* {2})[ a-zA-Z0-9.,!?;:@#$%&\-_/\\]*$`
   */
  Description?: string;
  /**
   * @min `4`
   * @max `10`
   */
  Height?: number;
  HorizontalOffset?: number;
  /**
   * @minLength `2`
   * @maxLength `50`
   * @pattern `^(?!.* {2})[a-zA-Z0-9_-][ a-zA-Z0-9_-]*[a-zA-Z0-9_-]$`
   */
  Title: string;
  /**
   * @min `2`
   * @max `6`
   */
  Width?: number;
};
/**
 * Type definition for `AWS::BCM::Dashboard.WidgetConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bcm-dashboard-widgetconfig.html}
 */
export type WidgetConfig = {
  DisplayConfig: DisplayConfig;
  QueryParameters: QueryParameters;
};
/**
 * Definition of AWS::BCM::Dashboard Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bcm-dashboard.html}
 */
export class BCMDashboard extends $Resource<
  "AWS::BCM::Dashboard",
  BCMDashboardProperties,
  BCMDashboardAttributes
> {
  public static readonly Type = "AWS::BCM::Dashboard";
  constructor(
    logicalId: string,
    properties: BCMDashboardProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, BCMDashboard.Type, properties, options);
  }
}
