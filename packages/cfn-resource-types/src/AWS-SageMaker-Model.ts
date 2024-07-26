import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::SageMaker::Model
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-model.html}
 */
export type SageMakerModelProperties = {
  Containers?: ContainerDefinition[];
  EnableNetworkIsolation?: boolean;
  ExecutionRoleArn?: string;
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
  ModelDataSource?: ModelDataSource;
  ModelDataUrl?: string;
  ModelPackageName?: string;
  MultiModelConfig?: MultiModelConfig;
};
/**
 * Type definition for `AWS::SageMaker::Model.HubAccessConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-model-hubaccessconfig.html}
 */
export type HubAccessConfig = {
  HubContentArn: string;
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
 * Type definition for `AWS::SageMaker::Model.ModelAccessConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-model-modelaccessconfig.html}
 */
export type ModelAccessConfig = {
  AcceptEula: boolean;
};
/**
 * Type definition for `AWS::SageMaker::Model.ModelDataSource`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-model-modeldatasource.html}
 */
export type ModelDataSource = {
  S3DataSource: S3DataSource;
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
 * Type definition for `AWS::SageMaker::Model.S3DataSource`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-model-s3datasource.html}
 */
export type S3DataSource = {
  CompressionType: string;
  HubAccessConfig?: HubAccessConfig;
  ModelAccessConfig?: ModelAccessConfig;
  S3DataType: string;
  S3Uri: string;
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
  constructor(
    logicalId: string,
    properties: SageMakerModelProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, SageMakerModel.Type, properties, options);
  }
}
