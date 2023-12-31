import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource schema for AWS::DataBrew::Ruleset.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-databrew-ruleset.html}
 */
export type DataBrewRulesetProperties = {
  /**
   * Description of the Ruleset
   * @maxLength `1024`
   */
  Description?: string;
  /**
   * Name of the Ruleset
   * @minLength `1`
   * @maxLength `255`
   */
  Name: string;
  /**
   * List of the data quality rules in the ruleset
   * @minLength `1`
   */
  Rules: Rule[];
  Tags?: Tag[];
  /**
   * Arn of the target resource (dataset) to apply the ruleset to
   * @minLength `20`
   * @maxLength `2048`
   */
  TargetArn: string;
};
/**
 * Type definition for `AWS::DataBrew::Ruleset.ColumnSelector`.
 * Selector of a column from a dataset for profile job configuration. One selector includes either a column name or a regular expression
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-ruleset-columnselector.html}
 */
export type ColumnSelector = {
  /**
   * The name of a column from a dataset
   * @minLength `1`
   * @maxLength `255`
   */
  Name?: string;
  /**
   * A regular expression for selecting a column from a dataset
   * @minLength `1`
   * @maxLength `255`
   */
  Regex?: string;
};
/**
 * Type definition for `AWS::DataBrew::Ruleset.Rule`.
 * Data quality rule for a target resource (dataset)
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-ruleset-rule.html}
 */
export type Rule = {
  /**
   * Expression with rule conditions
   * @minLength `4`
   * @maxLength `1024`
   * @pattern `^[><0-9A-Za-z_.,:)(!= ]+$`
   */
  CheckExpression: string;
  /**
   * @minLength `1`
   */
  ColumnSelectors?: ColumnSelector[];
  /**
   * Boolean value to disable/enable a rule
   */
  Disabled?: boolean;
  /**
   * Name of the rule
   * @minLength `1`
   * @maxLength `128`
   */
  Name: string;
  SubstitutionMap?: SubstitutionValue[];
  Threshold?: Threshold;
};
/**
 * Type definition for `AWS::DataBrew::Ruleset.SubstitutionValue`.
 * A key-value pair to associate expression's substitution variable names with their values
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-ruleset-substitutionvalue.html}
 */
export type SubstitutionValue = {
  /**
   * Value or column name
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
 * Type definition for `AWS::DataBrew::Ruleset.Tag`.
 * A key-value pair to associate with a resource
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-ruleset-tag.html}
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
 * Type definition for `AWS::DataBrew::Ruleset.Threshold`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-ruleset-threshold.html}
 */
export type Threshold = {
  /**
   * Threshold type for a rule
   */
  Type?: ThresholdType;
  /**
   * Threshold unit for a rule
   */
  Unit?: ThresholdUnit;
  /**
   * Threshold value for a rule
   */
  Value: number;
};
/**
 * Type definition for `AWS::DataBrew::Ruleset.ThresholdType`.
 * Threshold type for a rule
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-ruleset-thresholdtype.html}
 */
export type ThresholdType =
  | "GREATER_THAN_OR_EQUAL"
  | "LESS_THAN_OR_EQUAL"
  | "GREATER_THAN"
  | "LESS_THAN";
/**
 * Type definition for `AWS::DataBrew::Ruleset.ThresholdUnit`.
 * Threshold unit for a rule
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-ruleset-thresholdunit.html}
 */
export type ThresholdUnit = "COUNT" | "PERCENTAGE";
/**
 * Resource schema for AWS::DataBrew::Ruleset.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-databrew-ruleset.html}
 */
export class DataBrewRuleset extends $Resource<
  "AWS::DataBrew::Ruleset",
  DataBrewRulesetProperties,
  Record<string, never>
> {
  public static readonly Type = "AWS::DataBrew::Ruleset";
  constructor(
    logicalId: string,
    properties: DataBrewRulesetProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, DataBrewRuleset.Type, properties, options);
  }
}
