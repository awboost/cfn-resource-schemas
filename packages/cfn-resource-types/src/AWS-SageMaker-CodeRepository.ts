import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource Type definition for AWS::SageMaker::CodeRepository
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-coderepository.html}
 */
export type SageMakerCodeRepositoryProperties = {
  CodeRepositoryName?: string;
  GitConfig: GitConfig;
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::SageMaker::CodeRepository`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-coderepository.html#aws-resource-sagemaker-coderepository-return-values}
 */
export type SageMakerCodeRepositoryAttributes = {
  Id: string;
};
/**
 * Type definition for `AWS::SageMaker::CodeRepository.GitConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-coderepository-gitconfig.html}
 */
export type GitConfig = {
  Branch?: string;
  RepositoryUrl: string;
  SecretArn?: string;
};
/**
 * Type definition for `AWS::SageMaker::CodeRepository.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-coderepository-tag.html}
 */
export type Tag = {
  Key: string;
  Value: string;
};
/**
 * Resource Type definition for AWS::SageMaker::CodeRepository
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-coderepository.html}
 */
export class SageMakerCodeRepository extends $Resource<
  "AWS::SageMaker::CodeRepository",
  SageMakerCodeRepositoryProperties,
  SageMakerCodeRepositoryAttributes
> {
  public static readonly Type = "AWS::SageMaker::CodeRepository";
  public static readonly AttributeNames = ["Id" as const];
  constructor(
    logicalId: string,
    properties: SageMakerCodeRepositoryProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      SageMakerCodeRepository.Type,
      properties,
      SageMakerCodeRepository.AttributeNames,
      options,
    );
  }
}
