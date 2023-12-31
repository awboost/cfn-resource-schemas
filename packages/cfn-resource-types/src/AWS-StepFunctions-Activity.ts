import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::StepFunctions::Activity`.
 * Resource schema for Activity
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-stepfunctions-activity.html}
 */
export type StepFunctionsActivityProperties = {
  /**
   * @minLength `1`
   * @maxLength `80`
   */
  Name: string;
  Tags?: TagsEntry[];
};
/**
 * Attribute type definition for `AWS::StepFunctions::Activity`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-stepfunctions-activity.html#aws-resource-stepfunctions-activity-return-values}
 */
export type StepFunctionsActivityAttributes = {
  /**
   * @minLength `1`
   * @maxLength `2048`
   */
  Arn: string;
};
/**
 * Type definition for `AWS::StepFunctions::Activity.TagsEntry`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-stepfunctions-activity-tagsentry.html}
 */
export type TagsEntry = {
  /**
   * @minLength `1`
   * @maxLength `128`
   */
  Key: string;
  /**
   * @minLength `1`
   * @maxLength `256`
   */
  Value: string;
};
/**
 * Resource type definition for `AWS::StepFunctions::Activity`.
 * Resource schema for Activity
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-stepfunctions-activity.html}
 */
export class StepFunctionsActivity extends $Resource<
  "AWS::StepFunctions::Activity",
  StepFunctionsActivityProperties,
  StepFunctionsActivityAttributes
> {
  public static readonly Type = "AWS::StepFunctions::Activity";
  constructor(
    logicalId: string,
    properties: StepFunctionsActivityProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, StepFunctionsActivity.Type, properties, options);
  }
}
