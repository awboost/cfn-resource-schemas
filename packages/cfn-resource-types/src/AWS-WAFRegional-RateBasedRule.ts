import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::WAFRegional::RateBasedRule
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafregional-ratebasedrule.html}
 */
export type WAFRegionalRateBasedRuleProperties = {
  MatchPredicates?: Predicate[];
  MetricName: string;
  Name: string;
  RateKey: string;
  RateLimit: number;
};
/**
 * Attribute type definition for `AWS::WAFRegional::RateBasedRule`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafregional-ratebasedrule.html#aws-resource-wafregional-ratebasedrule-return-values}
 */
export type WAFRegionalRateBasedRuleAttributes = {
  Id: string;
};
/**
 * Type definition for `AWS::WAFRegional::RateBasedRule.Predicate`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafregional-ratebasedrule-predicate.html}
 */
export type Predicate = {
  DataId: string;
  Negated: boolean;
  Type: string;
};
/**
 * Resource Type definition for AWS::WAFRegional::RateBasedRule
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafregional-ratebasedrule.html}
 */
export class WAFRegionalRateBasedRule extends $Resource<
  "AWS::WAFRegional::RateBasedRule",
  WAFRegionalRateBasedRuleProperties,
  WAFRegionalRateBasedRuleAttributes
> {
  public static readonly Type = "AWS::WAFRegional::RateBasedRule";
  constructor(
    logicalId: string,
    properties: WAFRegionalRateBasedRuleProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, WAFRegionalRateBasedRule.Type, properties, options);
  }
}
