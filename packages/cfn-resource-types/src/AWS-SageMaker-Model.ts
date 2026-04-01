import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for AWS::SageMaker::Model
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-model.html}
 */
export type SageMakerModelProperties = {
  /**
   * Specifies the containers in the inference pipeline.
   */
  Containers?: ContainerDefinition[];
  /**
   * Isolates the model container. No inbound or outbound network calls can be made to or from the model container.
   */
  EnableNetworkIsolation?: boolean;
  /**
   * The Amazon Resource Name (ARN) of the IAM role that you specified for the model.
   */
  ExecutionRoleArn?: string;
  /**
   * Specifies details about how containers in a multi-container endpoint are run.
   */
  InferenceExecutionConfig?: InferenceExecutionConfig;
  /**
   * The name of the new model.
   */
  ModelName?: string;
  /**
   * Describes the container, as part of model definition.
   */
  PrimaryContainer?: ContainerDefinition;
  /**
   * An array of key-value pairs. You can use tags to categorize your AWS resources in different ways, for example, by purpose, owner, or environment. For more information, see [Tagging AWS Resources](https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html).
   */
  Tags?: Tag[];
  /**
   * Specifies an Amazon Virtual Private Cloud (VPC) that your SageMaker jobs, hosted models, and compute resources have access to. You can control access to and from your resources by configuring a VPC. For more information, see [Give SageMaker Access to Resources in your Amazon VPC](https://docs.aws.amazon.com/sagemaker/latest/dg/infrastructure-give-access.html).
   */
  VpcConfig?: VpcConfig;
};
/**
 * Attribute type definition for `AWS::SageMaker::Model`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-model.html#aws-resource-sagemaker-model-return-values}
 */
export type SageMakerModelAttributes = {
  /**
   * The Amazon Resource Name (ARN) of the model.
   */
  ModelArn: string;
};
/**
 * Type definition for `AWS::SageMaker::Model.ContainerDefinition`.
 * Describes the container, as part of model definition.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-model-containerdefinition.html}
 */
export type ContainerDefinition = {
  /**
     * This parameter is ignored for models that contain only a PrimaryContainer.
    
    When a ContainerDefinition is part of an inference pipeline, the value of the parameter uniquely identifies the container for the purposes of logging and metrics. For information, see [Use Logs and Metrics to Monitor an Inference Pipeline](https://docs.aws.amazon.com/sagemaker/latest/dg/inference-pipeline-logs-metrics.html). If you don't specify a value for this parameter for a ContainerDefinition that is part of an inference pipeline, a unique name is automatically assigned based on the position of the ContainerDefinition in the pipeline. If you specify a value for the ContainerHostName for any ContainerDefinition that is part of an inference pipeline, you must specify a value for the ContainerHostName parameter of every ContainerDefinition in that pipeline.
     */
  ContainerHostname?: string;
  /**
     * The environment variables to set in the Docker container. Don't include any sensitive data in your environment variables.
    
    The maximum length of each key and value in the Environment map is 1024 bytes. The maximum length of all keys and values in the map, combined, is 32 KB. If you pass multiple containers to a CreateModel request, then the maximum length of all of their maps, combined, is also 32 KB.
     */
  Environment?: Record<string, any>;
  /**
   * The path where inference code is stored. This can be either in Amazon EC2 Container Registry or in a Docker registry that is accessible from the same VPC that you configure for your endpoint. If you are using your own custom algorithm instead of an algorithm provided by SageMaker, the inference code must meet SageMaker requirements. SageMaker supports both registry/repository[:tag] and registry/repository[@digest] image path formats. For more information, see [Using Your Own Algorithms with Amazon SageMaker](https://docs.aws.amazon.com/sagemaker/latest/dg/your-algorithms.html).
   */
  Image?: string;
  /**
   * Specifies whether the model container is in Amazon ECR or a private Docker registry accessible from your Amazon Virtual Private Cloud (VPC).
   */
  ImageConfig?: ImageConfig;
  /**
   * The inference specification name in the model package version.
   */
  InferenceSpecificationName?: string;
  /**
   * Whether the container hosts a single model or multiple models.
   */
  Mode?: "SingleModel" | "MultiModel";
  /**
   * Specifies the location of ML model data to deploy. If specified, you must specify one and only one of the available data sources.
   */
  ModelDataSource?: ModelDataSource;
  /**
     * The S3 path where the model artifacts, which result from model training, are stored. This path must point to a single gzip compressed tar archive (.tar.gz suffix). The S3 path is required for SageMaker built-in algorithms, but not if you use your own algorithms. For more information on built-in algorithms, see [Common Parameters](https://docs.aws.amazon.com/sagemaker/latest/dg/sagemaker-algo-docker-registry-paths.html).
    
    If you provide a value for this parameter, SageMaker uses AWS Security Token Service to download model artifacts from the S3 path you provide. AWS STS is activated in your AWS account by default. If you previously deactivated AWS STS for a region, you need to reactivate AWS STS for that region. For more information, see [Activating and Deactivating AWS STS in an AWS Region](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_enable-regions.html) in the AWS Identity and Access Management User Guide
     */
  ModelDataUrl?: string;
  /**
   * The name or Amazon Resource Name (ARN) of the model package to use to create the model.
   */
  ModelPackageName?: string;
  /**
   * Specifies additional configuration for multi-model endpoints.
   */
  MultiModelConfig?: MultiModelConfig;
};
/**
 * Type definition for `AWS::SageMaker::Model.HubAccessConfig`.
 * Configuration information specifying which hub contents have accessible deployment options.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-model-hubaccessconfig.html}
 */
export type HubAccessConfig = {
  /**
   * The ARN of the hub content for which deployment access is allowed.
   */
  HubContentArn: string;
};
/**
 * Type definition for `AWS::SageMaker::Model.ImageConfig`.
 * Specifies whether the model container is in Amazon ECR or a private Docker registry accessible from your Amazon Virtual Private Cloud (VPC).
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-model-imageconfig.html}
 */
export type ImageConfig = {
  /**
   * Set this to one of the following values: Platform - The model image is hosted in Amazon ECR. Vpc - The model image is hosted in a private Docker registry in your VPC.
   */
  RepositoryAccessMode: "Platform" | "Vpc";
  /**
   * Specifies an authentication configuration for the private docker registry where your model image is hosted. Specify a value for this property only if you specified `Vpc` as the value for the `RepositoryAccessMode` field of the `ImageConfig` object that you passed to a call to `CreateModel` and the private Docker registry where the model image is hosted requires authentication.
   */
  RepositoryAuthConfig?: RepositoryAuthConfig;
};
/**
 * Type definition for `AWS::SageMaker::Model.InferenceExecutionConfig`.
 * Specifies details about how containers in a multi-container endpoint are run.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-model-inferenceexecutionconfig.html}
 */
export type InferenceExecutionConfig = {
  /**
   * How containers in a multi-container are run.
   */
  Mode: "Serial" | "Direct";
};
/**
 * Type definition for `AWS::SageMaker::Model.ModelAccessConfig`.
 * The access configuration file to control access to the ML model. You can explicitly accept the model end-user license agreement (EULA) within the `ModelAccessConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-model-modelaccessconfig.html}
 */
export type ModelAccessConfig = {
  /**
   * Specifies agreement to the model end-user license agreement (EULA). The `AcceptEula` value must be explicitly defined as `True` in order to accept the EULA that this model requires. You are responsible for reviewing and complying with any applicable license terms and making sure they are acceptable for your use case before downloading or using a model.
   */
  AcceptEula: boolean;
};
/**
 * Type definition for `AWS::SageMaker::Model.ModelDataSource`.
 * Specifies the location of ML model data to deploy. If specified, you must specify one and only one of the available data sources.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-model-modeldatasource.html}
 */
export type ModelDataSource = {
  /**
   * Specifies the S3 location of ML model data to deploy.
   */
  S3DataSource: S3DataSource;
};
/**
 * Type definition for `AWS::SageMaker::Model.MultiModelConfig`.
 * Specifies additional configuration for multi-model endpoints.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-model-multimodelconfig.html}
 */
export type MultiModelConfig = {
  /**
   * Whether to cache models for a multi-model endpoint. By default, multi-model endpoints cache models so that a model does not have to be loaded into memory each time it is invoked. Some use cases do not benefit from model caching. For example, if an endpoint hosts a large number of models that are each invoked infrequently, the endpoint might perform better if you disable model caching. To disable model caching, set the value of this parameter to `Disabled`.
   */
  ModelCacheSetting?: "Enabled" | "Disabled";
};
/**
 * Type definition for `AWS::SageMaker::Model.RepositoryAuthConfig`.
 * Specifies an authentication configuration for the private docker registry where your model image is hosted. Specify a value for this property only if you specified `Vpc` as the value for the `RepositoryAccessMode` field of the `ImageConfig` object that you passed to a call to `CreateModel` and the private Docker registry where the model image is hosted requires authentication.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-model-repositoryauthconfig.html}
 */
export type RepositoryAuthConfig = {
  /**
   * The Amazon Resource Name (ARN) of an AWS Lambda function that provides credentials to authenticate to the private Docker registry where your model image is hosted. For information about how to create an AWS Lambda function, see [Create a Lambda function with the console](https://docs.aws.amazon.com/lambda/latest/dg/getting-started-create-function.html) in the AWS Lambda Developer Guide
   */
  RepositoryCredentialsProviderArn: string;
};
/**
 * Type definition for `AWS::SageMaker::Model.S3DataSource`.
 * Specifies the S3 location of ML model data to deploy.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-model-s3datasource.html}
 */
export type S3DataSource = {
  /**
   * Specifies how the ML model data is prepared.
   */
  CompressionType: "None" | "Gzip";
  /**
   * Configuration information specifying which hub contents have accessible deployment options.
   */
  HubAccessConfig?: HubAccessConfig;
  /**
   * The access configuration file to control access to the ML model. You can explicitly accept the model end-user license agreement (EULA) within the `ModelAccessConfig`.
   */
  ModelAccessConfig?: ModelAccessConfig;
  /**
   * Specifies the type of ML model data to deploy.
   */
  S3DataType: "S3Prefix" | "S3Object";
  /**
   * Specifies the S3 path of ML model data to deploy.
   */
  S3Uri: string;
};
/**
 * Type definition for `AWS::SageMaker::Model.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-model-tag.html}
 */
export type Tag = {
  /**
   * The tag value.
   */
  Key: string;
  /**
   * The tag key. Tag keys must be unique per resource.
   */
  Value: string;
};
/**
 * Type definition for `AWS::SageMaker::Model.VpcConfig`.
 * Specifies an Amazon Virtual Private Cloud (VPC) that your SageMaker jobs, hosted models, and compute resources have access to. You can control access to and from your resources by configuring a VPC. For more information, see [Give SageMaker Access to Resources in your Amazon VPC](https://docs.aws.amazon.com/sagemaker/latest/dg/infrastructure-give-access.html).
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-model-vpcconfig.html}
 */
export type VpcConfig = {
  /**
   * The VPC security group IDs, in the form `sg-xxxxxxxx`. Specify the security groups for the VPC that is specified in the `Subnets` field.
   */
  SecurityGroupIds: string[];
  /**
   * The ID of the subnets in the VPC to which you want to connect your training job or model. For information about the availability of specific instance types, see [Supported Instance Types and Availability Zones](https://docs.aws.amazon.com/sagemaker/latest/dg/instance-types-az.html).
   */
  Subnets: string[];
};
/**
 * Resource type definition for AWS::SageMaker::Model
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
