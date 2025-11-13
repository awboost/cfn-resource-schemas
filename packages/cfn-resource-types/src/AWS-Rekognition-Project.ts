import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
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
  /**
   * An array of key-value pairs to apply to this resource.
   * @minLength `0`
   * @maxLength `200`
   */
  Tags?: Tag[];
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
 * Type definition for `AWS::Rekognition::Project.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rekognition-project-tag.html}
 */
export type Tag = {
  /**
   * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @maxLength `128`
   * @pattern `\A(?!aws:)[a-zA-Z0-9+\-=\._\:\/@]+$`
   */
  Key: string;
  /**
   * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @maxLength `256`
   * @pattern `\A[a-zA-Z0-9+\-=\._\:\/@]+$`
   */
  Value: string;
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
