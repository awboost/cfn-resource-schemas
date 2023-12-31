import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource Type definition for AWS::Inspector::AssessmentTemplate
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-inspector-assessmenttemplate.html}
 */
export type InspectorAssessmentTemplateProperties = {
  AssessmentTargetArn: string;
  AssessmentTemplateName?: string;
  DurationInSeconds: number;
  RulesPackageArns: string[];
  UserAttributesForFindings?: Tag[];
};
/**
 * Attribute type definition for `AWS::Inspector::AssessmentTemplate`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-inspector-assessmenttemplate.html#aws-resource-inspector-assessmenttemplate-return-values}
 */
export type InspectorAssessmentTemplateAttributes = {
  Arn: string;
};
/**
 * Type definition for `AWS::Inspector::AssessmentTemplate.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-inspector-assessmenttemplate-tag.html}
 */
export type Tag = {
  Key: string;
  Value: string;
};
/**
 * Resource Type definition for AWS::Inspector::AssessmentTemplate
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-inspector-assessmenttemplate.html}
 */
export class InspectorAssessmentTemplate extends $Resource<
  "AWS::Inspector::AssessmentTemplate",
  InspectorAssessmentTemplateProperties,
  InspectorAssessmentTemplateAttributes
> {
  public static readonly Type = "AWS::Inspector::AssessmentTemplate";
  public static readonly AttributeNames = ["Arn" as const];
  constructor(
    logicalId: string,
    properties: InspectorAssessmentTemplateProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      InspectorAssessmentTemplate.Type,
      properties,
      InspectorAssessmentTemplate.AttributeNames,
      options,
    );
  }
}
