import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * The AWS::LookoutVision::Project type creates an Amazon Lookout for Vision project. A project is a grouping of the resources needed to create and manage a Lookout for Vision model.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lookoutvision-project.html}
 */
export type LookoutVisionProjectProperties = {
  /**
   * The name of the Amazon Lookout for Vision project
   * @minLength `1`
   * @maxLength `255`
   * @pattern `[a-zA-Z0-9][a-zA-Z0-9_\-]*`
   */
  ProjectName: string;
};
/**
 * Attribute type definition for `AWS::LookoutVision::Project`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lookoutvision-project.html#aws-resource-lookoutvision-project-return-values}
 */
export type LookoutVisionProjectAttributes = {
  /**
   * @maxLength `1000`
   */
  Arn: string;
};
/**
 * The AWS::LookoutVision::Project type creates an Amazon Lookout for Vision project. A project is a grouping of the resources needed to create and manage a Lookout for Vision model.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lookoutvision-project.html}
 */
export class LookoutVisionProject extends $Resource<
  "AWS::LookoutVision::Project",
  LookoutVisionProjectProperties,
  LookoutVisionProjectAttributes
> {
  public static readonly Type = "AWS::LookoutVision::Project";
  public static readonly AttributeNames = ["Arn" as const];
  constructor(
    logicalId: string,
    properties: LookoutVisionProjectProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      LookoutVisionProject.Type,
      properties,
      LookoutVisionProject.AttributeNames,
      options,
    );
  }
}
