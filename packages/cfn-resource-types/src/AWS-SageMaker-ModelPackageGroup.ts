import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource Type definition for AWS::SageMaker::ModelPackageGroup
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelpackagegroup.html}
 */
export type SageMakerModelPackageGroupProperties = {
  /**
   * The description of the model package group.
   * @maxLength `1024`
   * @pattern `[\p{L}\p{M}\p{Z}\p{S}\p{N}\p{P}]*`
   */
  ModelPackageGroupDescription?: string;
  /**
   * The name of the model package group.
   * @maxLength `63`
   * @pattern `^[a-zA-Z0-9](-*[a-zA-Z0-9])*$`
   */
  ModelPackageGroupName: string;
  ModelPackageGroupPolicy?: Record<string, any> | string;
  /**
   * An array of key-value pairs to apply to this resource.
   * @maxLength `50`
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::SageMaker::ModelPackageGroup`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelpackagegroup.html#aws-resource-sagemaker-modelpackagegroup-return-values}
 */
export type SageMakerModelPackageGroupAttributes = {
  /**
   * The time at which the model package group was created.
   */
  CreationTime: string;
  /**
   * The Amazon Resource Name (ARN) of the model package group.
   * @minLength `1`
   * @maxLength `256`
   * @pattern `arn:.*`
   */
  ModelPackageGroupArn: string;
  /**
   * The status of a modelpackage group job.
   */
  ModelPackageGroupStatus:
    | "Pending"
    | "InProgress"
    | "Completed"
    | "Failed"
    | "Deleting"
    | "DeleteFailed";
};
/**
 * Type definition for `AWS::SageMaker::ModelPackageGroup.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelpackagegroup-tag.html}
 */
export type Tag = {
  /**
   * The key name of the tag. You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @minLength `1`
   * @maxLength `128`
   * @pattern `^([\p{L}\p{Z}\p{N}_.:/=+\-@]*)$`
   */
  Key: string;
  /**
   * The value for the tag. You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @maxLength `256`
   * @pattern `^([\p{L}\p{Z}\p{N}_.:/=+\-@]*)$`
   */
  Value: string;
};
/**
 * Resource Type definition for AWS::SageMaker::ModelPackageGroup
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelpackagegroup.html}
 */
export class SageMakerModelPackageGroup extends $Resource<
  "AWS::SageMaker::ModelPackageGroup",
  SageMakerModelPackageGroupProperties,
  SageMakerModelPackageGroupAttributes
> {
  public static readonly Type = "AWS::SageMaker::ModelPackageGroup";
  public static readonly AttributeNames = [
    "CreationTime" as const,
    "ModelPackageGroupArn" as const,
    "ModelPackageGroupStatus" as const,
  ];
  constructor(
    logicalId: string,
    properties: SageMakerModelPackageGroupProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      SageMakerModelPackageGroup.Type,
      properties,
      SageMakerModelPackageGroup.AttributeNames,
      options,
    );
  }
}
