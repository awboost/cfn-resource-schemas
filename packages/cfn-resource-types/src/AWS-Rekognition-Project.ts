import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * The AWS::Rekognition::Project type creates an Amazon Rekognition CustomLabels Project. A project is a grouping of the resources needed to create and manage Dataset and ProjectVersions.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rekognition-project.html}
 */
export type RekognitionProjectProperties = {
  /**
   * The name of the project
   * @minLength `1`
   * @maxLength `255`
   * @pattern `[a-zA-Z0-9][a-zA-Z0-9_\-]*`
   */
  ProjectName: string;
};
/**
 * Attribute type definition for `AWS::Rekognition::Project`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rekognition-project.html#aws-resource-rekognition-project-return-values}
 */
export type RekognitionProjectAttributes = {
  /**
   * @maxLength `2048`
   * @pattern `(^arn:[a-z\d-]+:rekognition:[a-z\d-]+:\d{12}:project/[a-zA-Z0-9_.\-]{1,255}/[0-9]+$)`
   */
  Arn: string;
};
/**
 * The AWS::Rekognition::Project type creates an Amazon Rekognition CustomLabels Project. A project is a grouping of the resources needed to create and manage Dataset and ProjectVersions.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rekognition-project.html}
 */
export class RekognitionProject extends $Resource<
  "AWS::Rekognition::Project",
  RekognitionProjectProperties,
  RekognitionProjectAttributes
> {
  public static readonly Type = "AWS::Rekognition::Project";
  constructor(
    logicalId: string,
    properties: RekognitionProjectProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, RekognitionProject.Type, properties, options);
  }
}
