import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::WAF::Rule
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-waf-rule.html}
 */
export type WAFRuleProperties = {
  MetricName: string;
  Name: string;
  Predicates?: Predicate[];
};
/**
 * Attribute type definition for `AWS::WAF::Rule`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-waf-rule.html#aws-resource-waf-rule-return-values}
 */
export type WAFRuleAttributes = {
  Id: string;
};
/**
 * Type definition for `AWS::WAF::Rule.Predicate`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-waf-rule-predicate.html}
 */
export type Predicate = {
  DataId: string;
  Negated: boolean;
  Type: string;
};
/**
 * Resource Type definition for AWS::WAF::Rule
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-waf-rule.html}
 */
export class WAFRule extends $Resource<
  "AWS::WAF::Rule",
  WAFRuleProperties,
  WAFRuleAttributes
> {
  public static readonly Type = "AWS::WAF::Rule";
  constructor(
    logicalId: string,
    properties: WAFRuleProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, WAFRule.Type, properties, options);
  }
}
