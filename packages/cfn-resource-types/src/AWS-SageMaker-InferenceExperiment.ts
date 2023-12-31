import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::SageMaker::InferenceExperiment
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-inferenceexperiment.html}
 */
export type SageMakerInferenceExperimentProperties = {
  /**
   * The Amazon S3 location and configuration for storing inference request and response data.
   */
  DataStorageConfig?: DataStorageConfig;
  /**
   * The description of the inference experiment.
   * @minLength `1`
   * @maxLength `1024`
   * @pattern `.*`
   */
  Description?: string;
  /**
   * The desired state of the experiment after starting or stopping operation.
   */
  DesiredState?: "Running" | "Completed" | "Cancelled";
  /**
   * The name of the endpoint used to run the inference experiment.
   * @maxLength `63`
   * @pattern `^[a-zA-Z0-9](-*[a-zA-Z0-9])*`
   */
  EndpointName: string;
  /**
   * The AWS Key Management Service (AWS KMS) key that Amazon SageMaker uses to encrypt data on the storage volume attached to the ML compute instance that hosts the endpoint.
   * @maxLength `2048`
   * @pattern `.*`
   */
  KmsKey?: string;
  /**
   * An array of ModelVariantConfig objects. Each ModelVariantConfig object in the array describes the infrastructure configuration for the corresponding variant.
   * @maxLength `2`
   */
  ModelVariants: ModelVariantConfig[];
  /**
   * The name for the inference experiment.
   * @minLength `1`
   * @maxLength `120`
   */
  Name: string;
  /**
   * The Amazon Resource Name (ARN) of an IAM role that Amazon SageMaker can assume to access model artifacts and container images, and manage Amazon SageMaker Inference endpoints for model deployment.
   * @minLength `20`
   * @maxLength `2048`
   * @pattern `^arn:aws[a-z\-]*:iam::\d{12}:role/?[a-zA-Z_0-9+=,.@\-_/]+$`
   */
  RoleArn: string;
  /**
   * The duration for which you want the inference experiment to run.
   */
  Schedule?: InferenceExperimentSchedule;
  /**
   * The configuration of ShadowMode inference experiment type. Use this field to specify a production variant which takes all the inference requests, and a shadow variant to which Amazon SageMaker replicates a percentage of the inference requests. For the shadow variant also specify the percentage of requests that Amazon SageMaker replicates.
   */
  ShadowModeConfig?: ShadowModeConfig;
  /**
   * The error message or client-specified reason from the StopInferenceExperiment API, that explains the status of the inference experiment.
   * @minLength `1`
   * @maxLength `1024`
   * @pattern `.*`
   */
  StatusReason?: string;
  /**
   * An array of key-value pairs to apply to this resource.
   * @maxLength `50`
   */
  Tags?: Tag[];
  /**
   * The type of the inference experiment that you want to run.
   */
  Type: "ShadowMode";
};
/**
 * Attribute type definition for `AWS::SageMaker::InferenceExperiment`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-inferenceexperiment.html#aws-resource-sagemaker-inferenceexperiment-return-values}
 */
export type SageMakerInferenceExperimentAttributes = {
  /**
   * The Amazon Resource Name (ARN) of the inference experiment.
   * @minLength `20`
   * @maxLength `256`
   * @pattern `^arn:aws[a-z\-]*:sagemaker:[a-z0-9\-]*:[0-9]{12}:inference-experiment/[a-zA-Z_0-9+=,.@\-_/]+$`
   */
  Arn: string;
  /**
   * The timestamp at which you created the inference experiment.
   */
  CreationTime: string;
  /**
   * The metadata of the endpoint on which the inference experiment ran.
   */
  EndpointMetadata: {};
  /**
   * The timestamp at which you last modified the inference experiment.
   */
  LastModifiedTime: string;
  /**
   * The status of the inference experiment.
   */
  Status:
    | "Creating"
    | "Created"
    | "Updating"
    | "Starting"
    | "Stopping"
    | "Running"
    | "Completed"
    | "Cancelled";
};
/**
 * Type definition for `AWS::SageMaker::InferenceExperiment.CaptureContentTypeHeader`.
 * Configuration specifying how to treat different headers. If no headers are specified SageMaker will by default base64 encode when capturing the data.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-inferenceexperiment-capturecontenttypeheader.html}
 */
export type CaptureContentTypeHeader = {
  /**
   * The list of all content type headers that SageMaker will treat as CSV and capture accordingly.
   * @minLength `1`
   * @maxLength `10`
   */
  CsvContentTypes?: string[];
  /**
   * The list of all content type headers that SageMaker will treat as JSON and capture accordingly.
   * @minLength `1`
   * @maxLength `10`
   */
  JsonContentTypes?: string[];
};
/**
 * Type definition for `AWS::SageMaker::InferenceExperiment.DataStorageConfig`.
 * The Amazon S3 location and configuration for storing inference request and response data.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-inferenceexperiment-datastorageconfig.html}
 */
export type DataStorageConfig = {
  /**
   * Configuration specifying how to treat different headers. If no headers are specified SageMaker will by default base64 encode when capturing the data.
   */
  ContentType?: CaptureContentTypeHeader;
  /**
   * The Amazon S3 bucket where the inference request and response data is stored.
   * @maxLength `512`
   * @pattern `^(https|s3)://([^/])/?(.*)$`
   */
  Destination: string;
  /**
   * The AWS Key Management Service key that Amazon SageMaker uses to encrypt captured data at rest using Amazon S3 server-side encryption.
   * @maxLength `2048`
   * @pattern `.*`
   */
  KmsKey?: string;
};
/**
 * Type definition for `AWS::SageMaker::InferenceExperiment.EndpointMetadata`.
 * The metadata of the endpoint on which the inference experiment ran.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-inferenceexperiment-endpointmetadata.html}
 */
export type EndpointMetadata = {
  /**
   * The name of the endpoint configuration.
   * @maxLength `63`
   * @pattern `^[a-zA-Z0-9](-*[a-zA-Z0-9])*`
   */
  EndpointConfigName?: string;
  /**
   * The name of the endpoint used to run the inference experiment.
   * @maxLength `63`
   * @pattern `^[a-zA-Z0-9](-*[a-zA-Z0-9])*`
   */
  EndpointName: string;
  /**
   * The status of the endpoint. For possible values of the status of an endpoint.
   * @pattern `^[a-zA-Z0-9](-*[a-zA-Z0-9])*`
   */
  EndpointStatus?:
    | "Creating"
    | "Updating"
    | "SystemUpdating"
    | "RollingBack"
    | "InService"
    | "OutOfService"
    | "Deleting"
    | "Failed";
};
/**
 * Type definition for `AWS::SageMaker::InferenceExperiment.InferenceExperimentSchedule`.
 * The duration for which you want the inference experiment to run.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-inferenceexperiment-inferenceexperimentschedule.html}
 */
export type InferenceExperimentSchedule = {
  /**
   * The timestamp at which the inference experiment ended or will end.
   */
  EndTime?: string;
  /**
   * The timestamp at which the inference experiment started or will start.
   */
  StartTime?: string;
};
/**
 * Type definition for `AWS::SageMaker::InferenceExperiment.ModelInfrastructureConfig`.
 * The configuration for the infrastructure that the model will be deployed to.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-inferenceexperiment-modelinfrastructureconfig.html}
 */
export type ModelInfrastructureConfig = {
  /**
   * The type of the inference experiment that you want to run.
   */
  InfrastructureType: "RealTimeInference";
  /**
   * The infrastructure configuration for deploying the model to a real-time inference endpoint.
   */
  RealTimeInferenceConfig: RealTimeInferenceConfig;
};
/**
 * Type definition for `AWS::SageMaker::InferenceExperiment.ModelVariantConfig`.
 * Contains information about the deployment options of a model.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-inferenceexperiment-modelvariantconfig.html}
 */
export type ModelVariantConfig = {
  /**
   * The configuration for the infrastructure that the model will be deployed to.
   */
  InfrastructureConfig: ModelInfrastructureConfig;
  /**
   * The name of the Amazon SageMaker Model entity.
   * @maxLength `63`
   * @pattern `^[a-zA-Z0-9](-*[a-zA-Z0-9])*`
   */
  ModelName: string;
  /**
   * The name of the variant.
   * @maxLength `63`
   * @pattern `^[a-zA-Z0-9]([\-a-zA-Z0-9]*[a-zA-Z0-9])?`
   */
  VariantName: string;
};
/**
 * Type definition for `AWS::SageMaker::InferenceExperiment.RealTimeInferenceConfig`.
 * The infrastructure configuration for deploying the model to a real-time inference endpoint.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-inferenceexperiment-realtimeinferenceconfig.html}
 */
export type RealTimeInferenceConfig = {
  /**
   * The number of instances of the type specified by InstanceType.
   */
  InstanceCount: number;
  /**
   * The instance type the model is deployed to.
   */
  InstanceType: string;
};
/**
 * Type definition for `AWS::SageMaker::InferenceExperiment.ShadowModeConfig`.
 * The configuration of ShadowMode inference experiment type. Use this field to specify a production variant which takes all the inference requests, and a shadow variant to which Amazon SageMaker replicates a percentage of the inference requests. For the shadow variant also specify the percentage of requests that Amazon SageMaker replicates.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-inferenceexperiment-shadowmodeconfig.html}
 */
export type ShadowModeConfig = {
  /**
   * List of shadow variant configurations.
   * @minLength `1`
   * @maxLength `1`
   */
  ShadowModelVariants: ShadowModelVariantConfig[];
  /**
   * The name of the production variant, which takes all the inference requests.
   * @maxLength `63`
   * @pattern `^[a-zA-Z0-9]([\-a-zA-Z0-9]*[a-zA-Z0-9])?`
   */
  SourceModelVariantName: string;
};
/**
 * Type definition for `AWS::SageMaker::InferenceExperiment.ShadowModelVariantConfig`.
 * The name and sampling percentage of a shadow variant.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-inferenceexperiment-shadowmodelvariantconfig.html}
 */
export type ShadowModelVariantConfig = {
  /**
   * The percentage of inference requests that Amazon SageMaker replicates from the production variant to the shadow variant.
   * @max `100`
   */
  SamplingPercentage: number;
  /**
   * The name of the shadow variant.
   * @maxLength `63`
   * @pattern `^[a-zA-Z0-9]([\-a-zA-Z0-9]*[a-zA-Z0-9])?`
   */
  ShadowModelVariantName: string;
};
/**
 * Type definition for `AWS::SageMaker::InferenceExperiment.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-inferenceexperiment-tag.html}
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
 * Resource Type definition for AWS::SageMaker::InferenceExperiment
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-inferenceexperiment.html}
 */
export class SageMakerInferenceExperiment extends $Resource<
  "AWS::SageMaker::InferenceExperiment",
  SageMakerInferenceExperimentProperties,
  SageMakerInferenceExperimentAttributes
> {
  public static readonly Type = "AWS::SageMaker::InferenceExperiment";
  constructor(
    logicalId: string,
    properties: SageMakerInferenceExperimentProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, SageMakerInferenceExperiment.Type, properties, options);
  }
}
