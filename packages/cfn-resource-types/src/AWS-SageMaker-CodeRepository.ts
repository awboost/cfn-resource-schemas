import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
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
  constructor(
    logicalId: string,
    properties: SageMakerCodeRepositoryProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, SageMakerCodeRepository.Type, properties, options);
  }
}
