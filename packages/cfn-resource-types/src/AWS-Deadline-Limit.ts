import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Definition of AWS::Deadline::Limit Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-deadline-limit.html}
 */
export type DeadlineLimitProperties = {
  /**
   * @maxLength `1024`
   */
  AmountRequirementName: string;
  /**
   * @minLength `0`
   * @maxLength `100`
   */
  Description?: string;
  /**
   * @minLength `1`
   * @maxLength `100`
   */
  DisplayName: string;
  /**
   * @pattern `^farm-[0-9a-f]{32}$`
   */
  FarmId: string;
  /**
   * @min `-1`
   * @max `2147483647`
   */
  MaxCount: number;
};
/**
 * Attribute type definition for `AWS::Deadline::Limit`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-deadline-limit.html#aws-resource-deadline-limit-return-values}
 */
export type DeadlineLimitAttributes = {
  /**
   * @min `0`
   * @max `2147483647`
   */
  CurrentCount: number;
  /**
   * @pattern `^limit-[0-9a-f]{32}$`
   */
  LimitId: string;
};
/**
 * Definition of AWS::Deadline::Limit Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-deadline-limit.html}
 */
export class DeadlineLimit extends $Resource<
  "AWS::Deadline::Limit",
  DeadlineLimitProperties,
  DeadlineLimitAttributes
> {
  public static readonly Type = "AWS::Deadline::Limit";
  constructor(
    logicalId: string,
    properties: DeadlineLimitProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, DeadlineLimit.Type, properties, options);
  }
}
