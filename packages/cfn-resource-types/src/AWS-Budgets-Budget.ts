import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::Budgets::Budget
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-budgets-budget.html}
 */
export type BudgetsBudgetProperties = {
  Budget: BudgetData;
  NotificationsWithSubscribers?: NotificationWithSubscribers[];
  ResourceTags?: ResourceTag[];
};
/**
 * Attribute type definition for `AWS::Budgets::Budget`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-budgets-budget.html#aws-resource-budgets-budget-return-values}
 */
export type BudgetsBudgetAttributes = {
  Id: string;
};
/**
 * Type definition for `AWS::Budgets::Budget.AutoAdjustData`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-budgets-budget-autoadjustdata.html}
 */
export type AutoAdjustData = {
  AutoAdjustType: string;
  HistoricalOptions?: HistoricalOptions;
};
/**
 * Type definition for `AWS::Budgets::Budget.BudgetData`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-budgets-budget-budgetdata.html}
 */
export type BudgetData = {
  AutoAdjustData?: AutoAdjustData;
  BudgetLimit?: Spend;
  BudgetName?: string;
  BudgetType: string;
  CostFilters?: Record<string, any>;
  CostTypes?: CostTypes;
  FilterExpression?: Expression;
  Metrics?: string[];
  PlannedBudgetLimits?: Record<string, any>;
  TimePeriod?: TimePeriod;
  TimeUnit: string;
};
/**
 * Type definition for `AWS::Budgets::Budget.CostCategoryValues`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-budgets-budget-costcategoryvalues.html}
 */
export type CostCategoryValues = {
  Key?: string;
  MatchOptions?: string[];
  Values?: string[];
};
/**
 * Type definition for `AWS::Budgets::Budget.CostTypes`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-budgets-budget-costtypes.html}
 */
export type CostTypes = {
  IncludeCredit?: boolean;
  IncludeDiscount?: boolean;
  IncludeOtherSubscription?: boolean;
  IncludeRecurring?: boolean;
  IncludeRefund?: boolean;
  IncludeSubscription?: boolean;
  IncludeSupport?: boolean;
  IncludeTax?: boolean;
  IncludeUpfront?: boolean;
  UseAmortized?: boolean;
  UseBlended?: boolean;
};
/**
 * Type definition for `AWS::Budgets::Budget.Expression`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-budgets-budget-expression.html}
 */
export type Expression = {
  And?: Expression[];
  CostCategories?: CostCategoryValues;
  Dimensions?: ExpressionDimensionValues;
  Not?: Expression;
  Or?: Expression[];
  Tags?: TagValues;
};
/**
 * Type definition for `AWS::Budgets::Budget.ExpressionDimensionValues`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-budgets-budget-expressiondimensionvalues.html}
 */
export type ExpressionDimensionValues = {
  Key?: string;
  MatchOptions?: string[];
  Values?: string[];
};
/**
 * Type definition for `AWS::Budgets::Budget.HistoricalOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-budgets-budget-historicaloptions.html}
 */
export type HistoricalOptions = {
  BudgetAdjustmentPeriod: number;
};
/**
 * Type definition for `AWS::Budgets::Budget.Notification`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-budgets-budget-notification.html}
 */
export type Notification = {
  ComparisonOperator: string;
  NotificationType: string;
  Threshold: number;
  ThresholdType?: string;
};
/**
 * Type definition for `AWS::Budgets::Budget.NotificationWithSubscribers`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-budgets-budget-notificationwithsubscribers.html}
 */
export type NotificationWithSubscribers = {
  Notification: Notification;
  Subscribers: Subscriber[];
};
/**
 * Type definition for `AWS::Budgets::Budget.ResourceTag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-budgets-budget-resourcetag.html}
 */
export type ResourceTag = {
  Key: string;
  Value?: string;
};
/**
 * Type definition for `AWS::Budgets::Budget.Spend`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-budgets-budget-spend.html}
 */
export type Spend = {
  Amount: number;
  Unit: string;
};
/**
 * Type definition for `AWS::Budgets::Budget.Subscriber`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-budgets-budget-subscriber.html}
 */
export type Subscriber = {
  Address: string;
  SubscriptionType: string;
};
/**
 * Type definition for `AWS::Budgets::Budget.TagValues`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-budgets-budget-tagvalues.html}
 */
export type TagValues = {
  Key?: string;
  MatchOptions?: string[];
  Values?: string[];
};
/**
 * Type definition for `AWS::Budgets::Budget.TimePeriod`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-budgets-budget-timeperiod.html}
 */
export type TimePeriod = {
  End?: string;
  Start?: string;
};
/**
 * Resource Type definition for AWS::Budgets::Budget
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-budgets-budget.html}
 */
export class BudgetsBudget extends $Resource<
  "AWS::Budgets::Budget",
  BudgetsBudgetProperties,
  BudgetsBudgetAttributes
> {
  public static readonly Type = "AWS::Budgets::Budget";
  constructor(
    logicalId: string,
    properties: BudgetsBudgetProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, BudgetsBudget.Type, properties, options);
  }
}
