import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::SageMaker::Image
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-image.html}
 */
export type SageMakerImageProperties = {
  /**
   * A description of the image.
   * @minLength `1`
   * @maxLength `512`
   * @pattern `.+`
   */
  ImageDescription?: string;
  /**
   * The display name of the image.
   * @minLength `1`
   * @maxLength `128`
   * @pattern `^[A-Za-z0-9 -_]+$`
   */
  ImageDisplayName?: string;
  /**
   * The name of the image.
   * @minLength `1`
   * @maxLength `63`
   * @pattern `^[a-zA-Z0-9]([-.]?[a-zA-Z0-9])*$`
   */
  ImageName: string;
  /**
   * The Amazon Resource Name (ARN) of an IAM role that enables Amazon SageMaker to perform tasks on behalf of the customer.
   * @minLength `1`
   * @maxLength `256`
   * @pattern `^arn:aws(-[\w]+)*:iam::[0-9]{12}:role/.*$`
   */
  ImageRoleArn: string;
  /**
   * An array of key-value pairs to apply to this resource.
   * @maxLength `50`
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::SageMaker::Image`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-image.html#aws-resource-sagemaker-image-return-values}
 */
export type SageMakerImageAttributes = {
  /**
   * The Amazon Resource Name (ARN) of the image.
   * @minLength `1`
   * @maxLength `256`
   * @pattern `^arn:aws(-[\w]+)*:sagemaker:[a-z0-9\-]*:[0-9]{12}:image\/[a-zA-Z0-9]([-.]?[a-zA-Z0-9])*$`
   */
  ImageArn: string;
};
/**
 * Type definition for `AWS::SageMaker::Image.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-image-tag.html}
 */
export type Tag = {
  /**
   * The key name of the tag. You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @minLength `1`
   * @maxLength `128`
   */
  Key: string;
  /**
   * The value for the tag. You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @maxLength `256`
   */
  Value: string;
};
/**
 * Resource Type definition for AWS::SageMaker::Image
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-image.html}
 */
export class SageMakerImage extends $Resource<
  "AWS::SageMaker::Image",
  SageMakerImageProperties,
  SageMakerImageAttributes
> {
  public static readonly Type = "AWS::SageMaker::Image";
  constructor(
    logicalId: string,
    properties: SageMakerImageProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, SageMakerImage.Type, properties, options);
  }
}
