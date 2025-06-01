import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::CloudWatch::InsightRule
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudwatch-insightrule.html}
 */
export type CloudWatchInsightRuleProperties = {
  ApplyOnTransformedLogs?: boolean;
  RuleBody: string;
  RuleName: string;
  RuleState: string;
  Tags?: Tags;
};
/**
 * Attribute type definition for `AWS::CloudWatch::InsightRule`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudwatch-insightrule.html#aws-resource-cloudwatch-insightrule-return-values}
 */
export type CloudWatchInsightRuleAttributes = {
  Arn: string;
  Id: string;
};
/**
 * Type definition for `AWS::CloudWatch::InsightRule.Tags`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudwatch-insightrule-tags.html}
 */
export type Tags = Record<string, any>;
/**
 * Resource Type definition for AWS::CloudWatch::InsightRule
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudwatch-insightrule.html}
 */
export class CloudWatchInsightRule extends $Resource<
  "AWS::CloudWatch::InsightRule",
  CloudWatchInsightRuleProperties,
  CloudWatchInsightRuleAttributes
> {
  public static readonly Type = "AWS::CloudWatch::InsightRule";
  constructor(
    logicalId: string,
    properties: CloudWatchInsightRuleProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, CloudWatchInsightRule.Type, properties, options);
  }
}
