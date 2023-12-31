import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource Type definition for AWS::SageMaker::Model
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-model.html}
 */
export type SageMakerModelProperties = {
  Containers?: ContainerDefinition[];
  EnableNetworkIsolation?: boolean;
  ExecutionRoleArn: string;
  InferenceExecutionConfig?: InferenceExecutionConfig;
  ModelName?: string;
  PrimaryContainer?: ContainerDefinition;
  Tags?: Tag[];
  VpcConfig?: VpcConfig;
};
/**
 * Attribute type definition for `AWS::SageMaker::Model`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-model.html#aws-resource-sagemaker-model-return-values}
 */
export type SageMakerModelAttributes = {
  Id: string;
};
/**
 * Type definition for `AWS::SageMaker::Model.ContainerDefinition`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-model-containerdefinition.html}
 */
export type ContainerDefinition = {
  ContainerHostname?: string;
  Environment?: Record<string, any>;
  Image?: string;
  ImageConfig?: ImageConfig;
  InferenceSpecificationName?: string;
  Mode?: string;
  ModelDataUrl?: string;
  ModelPackageName?: string;
  MultiModelConfig?: MultiModelConfig;
};
/**
 * Type definition for `AWS::SageMaker::Model.ImageConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-model-imageconfig.html}
 */
export type ImageConfig = {
  RepositoryAccessMode: string;
  RepositoryAuthConfig?: RepositoryAuthConfig;
};
/**
 * Type definition for `AWS::SageMaker::Model.InferenceExecutionConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-model-inferenceexecutionconfig.html}
 */
export type InferenceExecutionConfig = {
  Mode: string;
};
/**
 * Type definition for `AWS::SageMaker::Model.MultiModelConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-model-multimodelconfig.html}
 */
export type MultiModelConfig = {
  ModelCacheSetting?: string;
};
/**
 * Type definition for `AWS::SageMaker::Model.RepositoryAuthConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-model-repositoryauthconfig.html}
 */
export type RepositoryAuthConfig = {
  RepositoryCredentialsProviderArn: string;
};
/**
 * Type definition for `AWS::SageMaker::Model.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-model-tag.html}
 */
export type Tag = {
  Key: string;
  Value: string;
};
/**
 * Type definition for `AWS::SageMaker::Model.VpcConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-model-vpcconfig.html}
 */
export type VpcConfig = {
  SecurityGroupIds: string[];
  Subnets: string[];
};
/**
 * Resource Type definition for AWS::SageMaker::Model
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-model.html}
 */
export class SageMakerModel extends $Resource<
  "AWS::SageMaker::Model",
  SageMakerModelProperties,
  SageMakerModelAttributes
> {
  public static readonly Type = "AWS::SageMaker::Model";
  public static readonly AttributeNames = ["Id" as const];
  constructor(
    logicalId: string,
    properties: SageMakerModelProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      SageMakerModel.Type,
      properties,
      SageMakerModel.AttributeNames,
      options,
    );
  }
}
