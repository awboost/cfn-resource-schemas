import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::CE::CostCategory`.
 * Cost Category enables you to map your cost and usage into meaningful categories. You can use Cost Category to organize your costs using a rule-based engine.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ce-costcategory.html}
 */
export type CECostCategoryProperties = {
  /**
   * The default value for the cost category
   * @minLength `1`
   * @maxLength `50`
   */
  DefaultValue?: string;
  /**
   * @minLength `1`
   * @maxLength `50`
   */
  Name: string;
  RuleVersion: "CostCategoryExpression.v1";
  /**
   * JSON array format of Expression in Billing and Cost Management API
   */
  Rules: string;
  /**
   * Json array format of CostCategorySplitChargeRule in Billing and Cost Management API
   */
  SplitChargeRules?: string;
};
/**
 * Attribute type definition for `AWS::CE::CostCategory`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ce-costcategory.html#aws-resource-ce-costcategory-return-values}
 */
export type CECostCategoryAttributes = {
  /**
   * Cost category ARN
   * @pattern `^arn:aws[-a-z0-9]*:[a-z0-9]+:[-a-z0-9]*:[0-9]{12}:[-a-zA-Z0-9/:_]+$`
   */
  Arn: string;
  /**
   * ISO 8601 date time with offset format
   * @minLength `20`
   * @maxLength `25`
   * @pattern `^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(([+-]\d\d:\d\d)|Z)$`
   */
  EffectiveStart: string;
};
/**
 * Resource type definition for `AWS::CE::CostCategory`.
 * Cost Category enables you to map your cost and usage into meaningful categories. You can use Cost Category to organize your costs using a rule-based engine.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ce-costcategory.html}
 */
export class CECostCategory extends $Resource<
  "AWS::CE::CostCategory",
  CECostCategoryProperties,
  CECostCategoryAttributes
> {
  public static readonly Type = "AWS::CE::CostCategory";
  constructor(
    logicalId: string,
    properties: CECostCategoryProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, CECostCategory.Type, properties, options);
  }
}
