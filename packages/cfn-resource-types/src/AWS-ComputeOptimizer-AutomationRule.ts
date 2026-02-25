import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::ComputeOptimizer::AutomationRule`.
 * Creates an AWS Compute Optimizer automation rule that automatically implements recommended actions based on your defined criteria and schedule. Automation rules are global resources that manage automated actions across all AWS Regions where Compute Optimizer Automation is available. Organization-level rules can only be created by the management account or delegated administrator.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-computeoptimizer-automationrule.html}
 */
export type ComputeOptimizerAutomationRuleProperties = {
  /**
   * Filter criteria that specify which recommended actions qualify for implementation.
   */
  Criteria?: Criteria;
  /**
   * The description of the automation rule.
   * @minLength `0`
   * @maxLength `1024`
   * @pattern `^[a-zA-Z0-9_\-\s@\.]*$`
   */
  Description?: string;
  /**
   * The name of the automation rule.
   * @minLength `0`
   * @maxLength `128`
   * @pattern `^[a-zA-Z0-9_-]*$`
   */
  Name: string;
  /**
   * Organization configuration for organization rules, including rule apply order and account scope.
   */
  OrganizationConfiguration?: OrganizationConfiguration;
  /**
   * Rule priority within its group
   */
  Priority?: string;
  /**
   * The types of recommended actions this rule will implement.
   * @minLength `1`
   */
  RecommendedActionTypes: (
    | "SnapshotAndDeleteUnattachedEbsVolume"
    | "UpgradeEbsVolumeType"
  )[];
  /**
   * The type of automation rule.
   */
  RuleType: "AccountRule" | "OrganizationRule";
  /**
   * The schedule configuration for when the rule runs.
   */
  Schedule: Schedule;
  /**
   * The status of the automation rule.
   */
  Status: "Active" | "Inactive";
  /**
   * Tags associated with the automation rule.
   * @maxLength `200`
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::ComputeOptimizer::AutomationRule`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-computeoptimizer-automationrule.html#aws-resource-computeoptimizer-automationrule-return-values}
 */
export type ComputeOptimizerAutomationRuleAttributes = {
  /**
   * The AWS account ID that owns the automation rule.
   * @pattern `^[0-9]{12}$`
   */
  AccountId: string;
  /**
   * The timestamp when the automation rule was created.
   */
  CreatedTimestamp: string;
  /**
   * The timestamp when the automation rule was last updated.
   */
  LastUpdatedTimestamp: string;
  /**
   * The Amazon Resource Name (ARN) of the automation rule.
   */
  RuleArn: string;
  /**
   * The unique identifier of the automation rule.
   * @pattern `^[0-9A-Za-z]{16}$`
   */
  RuleId: string;
  /**
   * The revision number of the automation rule.
   */
  RuleRevision: string;
};
/**
 * Type definition for `AWS::ComputeOptimizer::AutomationRule.Criteria`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-computeoptimizer-automationrule-criteria.html}
 */
export type Criteria = {
  EbsVolumeSizeInGib?: IntegerCriteriaCondition[];
  EbsVolumeType?: StringCriteriaCondition[];
  EstimatedMonthlySavings?: DoubleCriteriaCondition[];
  LookBackPeriodInDays?: IntegerCriteriaCondition[];
  Region?: StringCriteriaCondition[];
  ResourceArn?: StringCriteriaCondition[];
  ResourceTag?: ResourceTagsCriteriaCondition[];
  RestartNeeded?: StringCriteriaCondition[];
};
/**
 * Type definition for `AWS::ComputeOptimizer::AutomationRule.DoubleCriteriaCondition`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-computeoptimizer-automationrule-doublecriteriacondition.html}
 */
export type DoubleCriteriaCondition = {
  Comparison?:
    | "StringEquals"
    | "StringNotEquals"
    | "StringEqualsIgnoreCase"
    | "StringNotEqualsIgnoreCase"
    | "StringLike"
    | "StringNotLike"
    | "NumericEquals"
    | "NumericNotEquals"
    | "NumericLessThan"
    | "NumericLessThanEquals"
    | "NumericGreaterThan"
    | "NumericGreaterThanEquals";
  Values?: number[];
};
/**
 * Type definition for `AWS::ComputeOptimizer::AutomationRule.IntegerCriteriaCondition`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-computeoptimizer-automationrule-integercriteriacondition.html}
 */
export type IntegerCriteriaCondition = {
  Comparison?:
    | "StringEquals"
    | "StringNotEquals"
    | "StringEqualsIgnoreCase"
    | "StringNotEqualsIgnoreCase"
    | "StringLike"
    | "StringNotLike"
    | "NumericEquals"
    | "NumericNotEquals"
    | "NumericLessThan"
    | "NumericLessThanEquals"
    | "NumericGreaterThan"
    | "NumericGreaterThanEquals";
  Values?: number[];
};
/**
 * Type definition for `AWS::ComputeOptimizer::AutomationRule.OrganizationConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-computeoptimizer-automationrule-organizationconfiguration.html}
 */
export type OrganizationConfiguration = {
  /**
   * List of account IDs where the organization rule applies
   * @minLength `1`
   * @maxLength `50`
   */
  AccountIds?: string[];
  /**
   * When the rule should be applied relative to account rules
   */
  RuleApplyOrder?: "BeforeAccountRules" | "AfterAccountRules";
};
/**
 * Type definition for `AWS::ComputeOptimizer::AutomationRule.ResourceTagsCriteriaCondition`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-computeoptimizer-automationrule-resourcetagscriteriacondition.html}
 */
export type ResourceTagsCriteriaCondition = {
  Comparison?:
    | "StringEquals"
    | "StringNotEquals"
    | "StringEqualsIgnoreCase"
    | "StringNotEqualsIgnoreCase"
    | "StringLike"
    | "StringNotLike"
    | "NumericEquals"
    | "NumericNotEquals"
    | "NumericLessThan"
    | "NumericLessThanEquals"
    | "NumericGreaterThan"
    | "NumericGreaterThanEquals";
  /**
   * @minLength `1`
   * @maxLength `512`
   * @pattern `^[\w\s\.\-\:\/\=\+\@\*\?]+$`
   */
  Key?: string;
  Values?: string[];
};
/**
 * Type definition for `AWS::ComputeOptimizer::AutomationRule.Schedule`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-computeoptimizer-automationrule-schedule.html}
 */
export type Schedule = {
  /**
   * Execution window duration in minutes
   * @min `60`
   * @max `1440`
   */
  ExecutionWindowInMinutes?: number;
  /**
   * Schedule expression (e.g., cron or rate expression)
   */
  ScheduleExpression?: string;
  /**
   * IANA timezone identifier
   */
  ScheduleExpressionTimezone?: string;
};
/**
 * Type definition for `AWS::ComputeOptimizer::AutomationRule.StringCriteriaCondition`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-computeoptimizer-automationrule-stringcriteriacondition.html}
 */
export type StringCriteriaCondition = {
  Comparison?:
    | "StringEquals"
    | "StringNotEquals"
    | "StringEqualsIgnoreCase"
    | "StringNotEqualsIgnoreCase"
    | "StringLike"
    | "StringNotLike"
    | "NumericEquals"
    | "NumericNotEquals"
    | "NumericLessThan"
    | "NumericLessThanEquals"
    | "NumericGreaterThan"
    | "NumericGreaterThanEquals";
  Values?: string[];
};
/**
 * Type definition for `AWS::ComputeOptimizer::AutomationRule.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-computeoptimizer-automationrule-tag.html}
 */
export type Tag = {
  /**
   * @minLength `1`
   * @maxLength `128`
   * @pattern `^[\w\s\.\-\:\/\=\+\@]+$`
   */
  Key: string;
  /**
   * @maxLength `256`
   * @pattern `^[\w\s\.\-\:\/\=\+\@]*$`
   */
  Value: string;
};
/**
 * Resource type definition for `AWS::ComputeOptimizer::AutomationRule`.
 * Creates an AWS Compute Optimizer automation rule that automatically implements recommended actions based on your defined criteria and schedule. Automation rules are global resources that manage automated actions across all AWS Regions where Compute Optimizer Automation is available. Organization-level rules can only be created by the management account or delegated administrator.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-computeoptimizer-automationrule.html}
 */
export class ComputeOptimizerAutomationRule extends $Resource<
  "AWS::ComputeOptimizer::AutomationRule",
  ComputeOptimizerAutomationRuleProperties,
  ComputeOptimizerAutomationRuleAttributes
> {
  public static readonly Type = "AWS::ComputeOptimizer::AutomationRule";
  constructor(
    logicalId: string,
    properties: ComputeOptimizerAutomationRuleProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, ComputeOptimizerAutomationRule.Type, properties, options);
  }
}
