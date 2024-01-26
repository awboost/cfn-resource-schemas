import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::GuardDuty::Filter
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-guardduty-filter.html}
 */
export type GuardDutyFilterProperties = {
  Action?: string;
  Description?: string;
  /**
   * @minLength `1`
   * @maxLength `300`
   */
  DetectorId?: string;
  FindingCriteria: FindingCriteria;
  /**
   * @minLength `1`
   * @maxLength `64`
   */
  Name?: string;
  /**
   * @min `1`
   * @max `100`
   */
  Rank?: number;
  Tags?: TagItem[];
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
  Criterion?: Record<string, Condition>;
};
/**
 * Type definition for `AWS::GuardDuty::Filter.TagItem`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-guardduty-filter-tagitem.html}
 */
export type TagItem = {
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
 * Resource Type definition for AWS::GuardDuty::Filter
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-guardduty-filter.html}
 */
export class GuardDutyFilter extends $Resource<
  "AWS::GuardDuty::Filter",
  GuardDutyFilterProperties,
  Record<string, never>
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
