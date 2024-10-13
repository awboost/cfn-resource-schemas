import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::SageMaker::ImageVersion
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-imageversion.html}
 */
export type SageMakerImageVersionProperties = {
  /**
   * The alias of the image version.
   * @minLength `1`
   * @maxLength `128`
   * @pattern `(?!^[.-])^([a-zA-Z0-9-_.]+)$`
   */
  Alias?: string;
  /**
   * List of aliases for the image version.
   */
  Aliases?: string[];
  /**
   * The registry path of the container image on which this image version is based.
   * @minLength `1`
   * @maxLength `255`
   * @pattern `.+`
   */
  BaseImage: string;
  /**
   * Indicates Horovod compatibility.
   */
  Horovod?: boolean;
  /**
   * The name of the image this version belongs to.
   * @minLength `1`
   * @maxLength `63`
   * @pattern `^[A-Za-z0-9]([-.]?[A-Za-z0-9])*$`
   */
  ImageName: string;
  /**
   * Indicates SageMaker job type compatibility.
   */
  JobType?: JobType;
  /**
   * The machine learning framework vended in the image version.
   * @minLength `1`
   * @maxLength `128`
   * @pattern `^[a-zA-Z]+ ?\d+\.\d+(\.\d+)?$`
   */
  MLFramework?: string;
  /**
   * Indicates CPU or GPU compatibility.
   */
  Processor?: Processor;
  /**
   * The supported programming language and its version.
   * @minLength `1`
   * @maxLength `128`
   * @pattern `^[a-zA-Z]+ ?\d+\.\d+(\.\d+)?$`
   */
  ProgrammingLang?: string;
  /**
   * The maintainer description of the image version.
   * @minLength `1`
   * @maxLength `255`
   * @pattern `.*`
   */
  ReleaseNotes?: string;
  /**
   * The availability of the image version specified by the maintainer.
   */
  VendorGuidance?: VendorGuidance;
};
/**
 * Attribute type definition for `AWS::SageMaker::ImageVersion`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-imageversion.html#aws-resource-sagemaker-imageversion-return-values}
 */
export type SageMakerImageVersionAttributes = {
  /**
   * The registry path of the container image that contains this image version.
   * @minLength `1`
   * @maxLength `255`
   * @pattern `.+`
   */
  ContainerImage: string;
  /**
   * The Amazon Resource Name (ARN) of the parent image.
   * @minLength `1`
   * @maxLength `256`
   * @pattern `^arn:aws(-[\w]+)*:sagemaker:[a-z0-9\-]*:[0-9]{12}:image\/[a-zA-Z0-9]([-.]?[a-zA-Z0-9])*$`
   */
  ImageArn: string;
  /**
   * The Amazon Resource Name (ARN) of the image version.
   * @minLength `1`
   * @maxLength `256`
   * @pattern `^arn:aws(-[\w]+)*:sagemaker:[a-z0-9\-]*:[0-9]{12}:image-version\/[a-zA-Z0-9]([-.]?[a-zA-Z0-9])*\/[0-9]+$`
   */
  ImageVersionArn: string;
  /**
   * The version number of the image version.
   * @min `1`
   */
  Version: number;
};
/**
 * Type definition for `AWS::SageMaker::ImageVersion.JobType`.
 * Indicates SageMaker job type compatibility.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-imageversion-jobtype.html}
 */
export type JobType = "TRAINING" | "INFERENCE" | "NOTEBOOK_KERNEL";
/**
 * Type definition for `AWS::SageMaker::ImageVersion.Processor`.
 * Indicates CPU or GPU compatibility.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-imageversion-processor.html}
 */
export type Processor = "CPU" | "GPU";
/**
 * Type definition for `AWS::SageMaker::ImageVersion.VendorGuidance`.
 * The availability of the image version specified by the maintainer.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-imageversion-vendorguidance.html}
 */
export type VendorGuidance =
  | "NOT_PROVIDED"
  | "STABLE"
  | "TO_BE_ARCHIVED"
  | "ARCHIVED";
/**
 * Resource Type definition for AWS::SageMaker::ImageVersion
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-imageversion.html}
 */
export class SageMakerImageVersion extends $Resource<
  "AWS::SageMaker::ImageVersion",
  SageMakerImageVersionProperties,
  SageMakerImageVersionAttributes
> {
  public static readonly Type = "AWS::SageMaker::ImageVersion";
  constructor(
    logicalId: string,
    properties: SageMakerImageVersionProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, SageMakerImageVersion.Type, properties, options);
  }
}
