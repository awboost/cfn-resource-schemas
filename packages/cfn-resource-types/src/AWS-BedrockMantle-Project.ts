import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for AWS::BedrockMantle::Project
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrockmantle-project.html}
 */
export type BedrockMantleProjectProperties = {
  /**
   * The name of the project.
   * @minLength `1`
   * @maxLength `128`
   */
  Name: string;
  /**
   * An array of key-value pairs to apply to this resource.
   * @minLength `0`
   * @maxLength `200`
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::BedrockMantle::Project`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrockmantle-project.html#aws-resource-bedrockmantle-project-return-values}
 */
export type BedrockMantleProjectAttributes = {
  /**
   * The ARN of the project.
   * @minLength `1`
   * @maxLength `256`
   * @pattern `^arn:[a-zA-Z0-9_\-]+:bedrock-mantle:[a-zA-Z0-9_\-]+:[0-9]+:project/(default|proj_[a-z0-9]+)$`
   */
  Arn: string;
  /**
   * The timestamp when the project was created.
   */
  CreatedAt: string;
  /**
   * The unique identifier of the project.
   * @minLength `1`
   * @maxLength `25`
   * @pattern `^(default|proj_[a-z0-9]+)$`
   */
  Id: string;
};
/**
 * Type definition for `AWS::BedrockMantle::Project.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrockmantle-project-tag.html}
 */
export type Tag = {
  /**
   * The key name of the tag.
   * @minLength `1`
   * @maxLength `128`
   */
  Key: string;
  /**
   * The value for the tag.
   * @minLength `0`
   * @maxLength `256`
   */
  Value: string;
};
/**
 * Resource type definition for AWS::BedrockMantle::Project
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrockmantle-project.html}
 */
export class BedrockMantleProject extends $Resource<
  "AWS::BedrockMantle::Project",
  BedrockMantleProjectProperties,
  BedrockMantleProjectAttributes
> {
  public static readonly Type = "AWS::BedrockMantle::Project";
  constructor(
    logicalId: string,
    properties: BedrockMantleProjectProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, BedrockMantleProject.Type, properties, options);
  }
}
