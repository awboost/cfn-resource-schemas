import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::Rbin::Rule
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rbin-rule.html}
 */
export type RbinRuleProperties = {
  /**
   * The description of the retention rule.
   * @maxLength `255`
   */
  Description?: string;
  /**
   * Information about the exclude resource tags used to identify resources that are excluded by the retention rule.
   * @maxLength `5`
   */
  ExcludeResourceTags?: ResourceTag[];
  /**
   * Information about the retention rule lock configuration.
   */
  LockConfiguration?: UnlockDelay;
  /**
   * Information about the resource tags used to identify resources that are retained by the retention rule.
   * @maxLength `50`
   */
  ResourceTags?: ResourceTag[];
  /**
   * The resource type retained by the retention rule.
   */
  ResourceType: "EBS_SNAPSHOT" | "EC2_IMAGE" | "EBS_VOLUME";
  /**
   * Information about the retention period for which the retention rule is to retain resources.
   */
  RetentionPeriod: RetentionPeriod;
  /**
   * The state of the retention rule. Only retention rules that are in the available state retain resources.
   * @pattern `pending|available`
   */
  Status?: string;
  /**
   * Information about the tags assigned to the retention rule.
   * @maxLength `200`
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::Rbin::Rule`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rbin-rule.html#aws-resource-rbin-rule-return-values}
 */
export type RbinRuleAttributes = {
  /**
   * Rule Arn is unique for each rule.
   * @minLength `0`
   * @maxLength `1011`
   */
  Arn: string;
  /**
   * The unique ID of the retention rule.
   * @pattern `[0-9a-zA-Z]{11}`
   */
  Identifier: string;
  /**
   * The lock state for the retention rule.
   * @pattern `locked|pending_unlock|unlocked`
   */
  LockState: string;
};
/**
 * Type definition for `AWS::Rbin::Rule.ResourceTag`.
 * The resource tag of the rule.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rbin-rule-resourcetag.html}
 */
export type ResourceTag = {
  /**
   * The tag key of the resource.
   * @minLength `1`
   * @maxLength `128`
   */
  ResourceTagKey: string;
  /**
   * The tag value of the resource
   * @minLength `0`
   * @maxLength `256`
   */
  ResourceTagValue: string;
};
/**
 * Type definition for `AWS::Rbin::Rule.RetentionPeriod`.
 * The retention period of the rule.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rbin-rule-retentionperiod.html}
 */
export type RetentionPeriod = {
  /**
   * The retention period unit of the rule
   */
  RetentionPeriodUnit: "DAYS";
  /**
   * The retention period value of the rule.
   * @min `1`
   * @max `3650`
   */
  RetentionPeriodValue: number;
};
/**
 * Type definition for `AWS::Rbin::Rule.Tag`.
 * Metadata of a retention rule, consisting of a key-value pair.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rbin-rule-tag.html}
 */
export type Tag = {
  /**
   * A unique identifier for the tag.
   * @minLength `1`
   * @maxLength `128`
   */
  Key: string;
  /**
   * String which you can use to describe or define the tag.
   * @minLength `0`
   * @maxLength `256`
   */
  Value: string;
};
/**
 * Type definition for `AWS::Rbin::Rule.UnlockDelay`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rbin-rule-unlockdelay.html}
 */
export type UnlockDelay = {
  /**
   * The unit of time in which to measure the unlock delay. Currently, the unlock delay can be measure only in days.
   */
  UnlockDelayUnit?: "DAYS";
  /**
   * The unlock delay period, measured in the unit specified for UnlockDelayUnit.
   * @min `7`
   * @max `30`
   */
  UnlockDelayValue?: number;
};
/**
 * Resource Type definition for AWS::Rbin::Rule
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rbin-rule.html}
 */
export class RbinRule extends $Resource<
  "AWS::Rbin::Rule",
  RbinRuleProperties,
  RbinRuleAttributes
> {
  public static readonly Type = "AWS::Rbin::Rule";
  constructor(
    logicalId: string,
    properties: RbinRuleProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, RbinRule.Type, properties, options);
  }
}
