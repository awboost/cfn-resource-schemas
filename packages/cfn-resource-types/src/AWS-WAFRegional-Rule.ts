import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::WAFRegional::Rule
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafregional-rule.html}
 */
export type WAFRegionalRuleProperties = {
  MetricName: string;
  Name: string;
  Predicates?: Predicate[];
};
/**
 * Attribute type definition for `AWS::WAFRegional::Rule`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafregional-rule.html#aws-resource-wafregional-rule-return-values}
 */
export type WAFRegionalRuleAttributes = {
  Id: string;
};
/**
 * Type definition for `AWS::WAFRegional::Rule.Predicate`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafregional-rule-predicate.html}
 */
export type Predicate = {
  DataId: string;
  Negated: boolean;
  Type: string;
};
/**
 * Resource Type definition for AWS::WAFRegional::Rule
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafregional-rule.html}
 */
export class WAFRegionalRule extends $Resource<
  "AWS::WAFRegional::Rule",
  WAFRegionalRuleProperties,
  WAFRegionalRuleAttributes
> {
  public static readonly Type = "AWS::WAFRegional::Rule";
  constructor(
    logicalId: string,
    properties: WAFRegionalRuleProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, WAFRegionalRule.Type, properties, options);
  }
}
