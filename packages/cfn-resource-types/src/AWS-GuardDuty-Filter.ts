import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::GuardDuty::Filter
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-guardduty-filter.html}
 */
export type GuardDutyFilterProperties = {
  Action: string;
  Description: string;
  DetectorId: string;
  FindingCriteria: FindingCriteria;
  Name: string;
  Rank: number;
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::GuardDuty::Filter`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-guardduty-filter.html#aws-resource-guardduty-filter-return-values}
 */
export type GuardDutyFilterAttributes = {
  Id: string;
};
/**
 * Type definition for `AWS::GuardDuty::Filter.Condition`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-guardduty-filter-condition.html}
 */
export type Condition = {
  Eq?: string[];
  Equals?: string[];
  GreaterThan?: number;
  GreaterThanOrEqual?: number;
  Gt?: number;
  Gte?: number;
  LessThan?: number;
  LessThanOrEqual?: number;
  Lt?: number;
  Lte?: number;
  Neq?: string[];
  NotEquals?: string[];
};
/**
 * Type definition for `AWS::GuardDuty::Filter.FindingCriteria`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-guardduty-filter-findingcriteria.html}
 */
export type FindingCriteria = {
  Criterion?: Record<string, any>;
  ItemType?: Condition;
};
/**
 * Type definition for `AWS::GuardDuty::Filter.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-guardduty-filter-tag.html}
 */
export type Tag = {
  Key: string;
  Value: string;
};
/**
 * Resource Type definition for AWS::GuardDuty::Filter
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-guardduty-filter.html}
 */
export class GuardDutyFilter extends $Resource<
  "AWS::GuardDuty::Filter",
  GuardDutyFilterProperties,
  GuardDutyFilterAttributes
> {
  public static readonly Type = "AWS::GuardDuty::Filter";
  constructor(
    logicalId: string,
    properties: GuardDutyFilterProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, GuardDutyFilter.Type, properties, options);
  }
}
