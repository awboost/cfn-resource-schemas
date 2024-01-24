import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::Inspector::AssessmentTarget
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-inspector-assessmenttarget.html}
 */
export type InspectorAssessmentTargetProperties = {
  AssessmentTargetName?: string;
  ResourceGroupArn?: string;
};
/**
 * Attribute type definition for `AWS::Inspector::AssessmentTarget`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-inspector-assessmenttarget.html#aws-resource-inspector-assessmenttarget-return-values}
 */
export type InspectorAssessmentTargetAttributes = {
  Arn: string;
};
/**
 * Resource Type definition for AWS::Inspector::AssessmentTarget
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-inspector-assessmenttarget.html}
 */
export class InspectorAssessmentTarget extends $Resource<
  "AWS::Inspector::AssessmentTarget",
  InspectorAssessmentTargetProperties,
  InspectorAssessmentTargetAttributes
> {
  public static readonly Type = "AWS::Inspector::AssessmentTarget";
  constructor(
    logicalId: string,
    properties: InspectorAssessmentTargetProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, InspectorAssessmentTarget.Type, properties, options);
  }
}
