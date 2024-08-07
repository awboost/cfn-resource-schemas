import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::SageMaker::ModelPackage
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelpackage.html}
 */
export type SageMakerModelPackageProperties = {
  /**
   * An array of additional Inference Specification objects.
   * @minLength `1`
   * @maxLength `15`
   */
  AdditionalInferenceSpecifications?: AdditionalInferenceSpecificationDefinition[];
  /**
   * An array of additional Inference Specification objects.
   * @minLength `1`
   * @maxLength `15`
   */
  AdditionalInferenceSpecificationsToAdd?: AdditionalInferenceSpecificationDefinition[];
  /**
   * A description provided for the model approval.
   * @maxLength `1024`
   * @pattern `.*`
   */
  ApprovalDescription?: string;
  /**
   * Whether to certify the model package for listing on AWS Marketplace.
   */
  CertifyForMarketplace?: boolean;
  /**
   * A unique token that guarantees that the call to this API is idempotent.
   * @minLength `1`
   * @maxLength `36`
   * @pattern `^[a-zA-Z0-9-]+$`
   */
  ClientToken?: string;
  /**
   * The metadata properties associated with the model package versions.
   */
  CustomerMetadataProperties?: CustomerMetadataProperties;
  /**
   * The machine learning domain of the model package you specified.
   */
  Domain?: string;
  /**
   * Represents the drift check baselines that can be used when the model monitor is set using the model package.
   */
  DriftCheckBaselines?: DriftCheckBaselines;
  /**
   * Details about inference jobs that can be run with models based on this model package.
   */
  InferenceSpecification?: InferenceSpecification;
  /**
   * The time at which the model package was last modified.
   */
  LastModifiedTime?: string;
  /**
   * Metadata properties of the tracking entity, trial, or trial component.
   */
  MetadataProperties?: MetadataProperties;
  /**
   * The approval status of the model package.
   */
  ModelApprovalStatus?: ModelApprovalStatus;
  /**
   * The model card associated with the model package.
   */
  ModelCard?: ModelCard;
  /**
   * A structure that contains model metrics reports.
   */
  ModelMetrics?: ModelMetrics;
  /**
   * The description of the model package.
   * @maxLength `1024`
   * @pattern `[\p{L}\p{M}\p{Z}\p{S}\p{N}\p{P}]*`
   */
  ModelPackageDescription?: string;
  /**
   * The name of the model package group.
   * @minLength `1`
   * @maxLength `170`
   * @pattern `(arn:aws[a-z\-]*:sagemaker:[a-z0-9\-]*:[0-9]{12}:[a-z\-]*\/)?([a-zA-Z0-9]([a-zA-Z0-9-]){0,62})(?<!-)$`
   */
  ModelPackageGroupName?: string;
  /**
   * The name or arn of the model package.
   */
  ModelPackageName?: string;
  /**
   * Details about the current status of the model package.
   */
  ModelPackageStatusDetails?: ModelPackageStatusDetails;
  /**
   * The version of the model package.
   * @min `1`
   */
  ModelPackageVersion?: number;
  /**
   * The Amazon Simple Storage Service (Amazon S3) path where the sample payload are stored pointing to single gzip compressed tar archive.
   * @maxLength `1024`
   * @pattern `^(https|s3)://([^/]+)/?(.*)$`
   */
  SamplePayloadUrl?: string;
  /**
   * An optional AWS Key Management Service key to encrypt, decrypt, and re-encrypt model package information for regulated workloads with highly sensitive data.
   */
  SecurityConfig?: SecurityConfig;
  /**
   * Indicates if you want to skip model validation.
   */
  SkipModelValidation?: SkipModelValidation;
  /**
   * Details about the algorithm that was used to create the model package.
   */
  SourceAlgorithmSpecification?: SourceAlgorithmSpecification;
  /**
   * The URI of the source for the model package.
   * @minLength `0`
   * @maxLength `1024`
   * @pattern `[\p{L}\p{M}\p{Z}\p{N}\p{P}]{0,1024}`
   */
  SourceUri?: string;
  /**
   * An array of key-value pairs to apply to this resource.
   * @maxLength `50`
   */
  Tags?: Tag[];
  /**
   * The machine learning task your model package accomplishes.
   */
  Task?: string;
  /**
   * Specifies configurations for one or more transform jobs that Amazon SageMaker runs to test the model package.
   */
  ValidationSpecification?: ValidationSpecification;
};
/**
 * Attribute type definition for `AWS::SageMaker::ModelPackage`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelpackage.html#aws-resource-sagemaker-modelpackage-return-values}
 */
export type SageMakerModelPackageAttributes = {
  /**
   * The time at which the model package was created.
   */
  CreationTime: string;
  /**
   * The Amazon Resource Name (ARN) of the model package group.
   * @minLength `1`
   * @maxLength `2048`
   * @pattern `^arn:aws(-cn|-us-gov)?:sagemaker:[a-z0-9\-]{9,16}:[0-9]{12}:model-package/[\S]{1,2048}$`
   */
  ModelPackageArn: string;
  /**
   * The current status of the model package.
   */
  ModelPackageStatus: ModelPackageStatus;
};
/**
 * Type definition for `AWS::SageMaker::ModelPackage.AdditionalInferenceSpecificationDefinition`.
 * Additional Inference Specification specifies details about inference jobs that can be run with models based on this model package.AdditionalInferenceSpecifications can be added to existing model packages using AdditionalInferenceSpecificationsToAdd.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelpackage-additionalinferencespecificationdefinition.html}
 */
export type AdditionalInferenceSpecificationDefinition = {
  /**
   * The Amazon ECR registry path of the Docker image that contains the inference code.
   * @minLength `1`
   * @maxLength `15`
   */
  Containers: ModelPackageContainerDefinition[];
  /**
   * A description of the additional Inference specification.
   * @maxLength `1024`
   * @pattern `.*`
   */
  Description?: string;
  /**
   * A unique name to identify the additional inference specification. The name must be unique within the list of your additional inference specifications for a particular model package.
   * @minLength `1`
   * @maxLength `63`
   * @pattern `^[a-zA-Z0-9](-*[a-zA-Z0-9]){0,62}$`
   */
  Name: string;
  /**
   * The supported MIME types for the input data.
   */
  SupportedContentTypes?: string[];
  /**
   * A list of the instance types that are used to generate inferences in real-time
   */
  SupportedRealtimeInferenceInstanceTypes?: string[];
  /**
   * The supported MIME types for the output data.
   */
  SupportedResponseMIMETypes?: string[];
  /**
   * A list of the instance types on which a transformation job can be run or on which an endpoint can be deployed.
   * @minLength `1`
   */
  SupportedTransformInstanceTypes?: string[];
};
/**
 * Type definition for `AWS::SageMaker::ModelPackage.Bias`.
 * Contains bias metrics for a model.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelpackage-bias.html}
 */
export type Bias = {
  /**
   * Represents a Metric Source Object.
   */
  PostTrainingReport?: MetricsSource;
  /**
   * Represents a Metric Source Object.
   */
  PreTrainingReport?: MetricsSource;
  /**
   * Represents a Metric Source Object.
   */
  Report?: MetricsSource;
};
/**
 * Type definition for `AWS::SageMaker::ModelPackage.CustomerMetadataProperties`.
 * The metadata properties associated with the model package versions.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelpackage-customermetadataproperties.html}
 */
export type CustomerMetadataProperties = Record<string, string>;
/**
 * Type definition for `AWS::SageMaker::ModelPackage.DataSource`.
 * Describes the input source of a transform job and the way the transform job consumes it.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelpackage-datasource.html}
 */
export type DataSource = {
  /**
   * Describes the S3 data source.
   */
  S3DataSource: S3DataSource;
};
/**
 * Type definition for `AWS::SageMaker::ModelPackage.DriftCheckBaselines`.
 * Represents the drift check baselines that can be used when the model monitor is set using the model package.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelpackage-driftcheckbaselines.html}
 */
export type DriftCheckBaselines = {
  /**
   * Represents the drift check bias baselines that can be used when the model monitor is set using the model package.
   */
  Bias?: DriftCheckBias;
  /**
   * Contains explainability metrics for a model.
   */
  Explainability?: DriftCheckExplainability;
  /**
   * Represents the drift check data quality baselines that can be used when the model monitor is set using the model package.
   */
  ModelDataQuality?: DriftCheckModelDataQuality;
  /**
   * Represents the drift check model quality baselines that can be used when the model monitor is set using the model package.
   */
  ModelQuality?: DriftCheckModelQuality;
};
/**
 * Type definition for `AWS::SageMaker::ModelPackage.DriftCheckBias`.
 * Represents the drift check bias baselines that can be used when the model monitor is set using the model package.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelpackage-driftcheckbias.html}
 */
export type DriftCheckBias = {
  /**
   * Represents a File Source Object.
   */
  ConfigFile?: FileSource;
  /**
   * Represents a Metric Source Object.
   */
  PostTrainingConstraints?: MetricsSource;
  /**
   * Represents a Metric Source Object.
   */
  PreTrainingConstraints?: MetricsSource;
};
/**
 * Type definition for `AWS::SageMaker::ModelPackage.DriftCheckExplainability`.
 * Contains explainability metrics for a model.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelpackage-driftcheckexplainability.html}
 */
export type DriftCheckExplainability = {
  /**
   * Represents a File Source Object.
   */
  ConfigFile?: FileSource;
  /**
   * Represents a Metric Source Object.
   */
  Constraints?: MetricsSource;
};
/**
 * Type definition for `AWS::SageMaker::ModelPackage.DriftCheckModelDataQuality`.
 * Represents the drift check data quality baselines that can be used when the model monitor is set using the model package.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelpackage-driftcheckmodeldataquality.html}
 */
export type DriftCheckModelDataQuality = {
  /**
   * Represents a Metric Source Object.
   */
  Constraints?: MetricsSource;
  /**
   * Represents a Metric Source Object.
   */
  Statistics?: MetricsSource;
};
/**
 * Type definition for `AWS::SageMaker::ModelPackage.DriftCheckModelQuality`.
 * Represents the drift check model quality baselines that can be used when the model monitor is set using the model package.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelpackage-driftcheckmodelquality.html}
 */
export type DriftCheckModelQuality = {
  /**
   * Represents a Metric Source Object.
   */
  Constraints?: MetricsSource;
  /**
   * Represents a Metric Source Object.
   */
  Statistics?: MetricsSource;
};
/**
 * Type definition for `AWS::SageMaker::ModelPackage.Environment`.
 * Sets the environment variables in the Docker container
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelpackage-environment.html}
 */
export type Environment = Record<string, string>;
/**
 * Type definition for `AWS::SageMaker::ModelPackage.Explainability`.
 * Contains explainability metrics for a model.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelpackage-explainability.html}
 */
export type Explainability = {
  /**
   * Represents a Metric Source Object.
   */
  Report?: MetricsSource;
};
/**
 * Type definition for `AWS::SageMaker::ModelPackage.FileSource`.
 * Represents a File Source Object.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelpackage-filesource.html}
 */
export type FileSource = {
  /**
   * The digest of the file source.
   * @maxLength `72`
   * @pattern `^[Ss][Hh][Aa]256:[0-9a-fA-F]{64}$`
   */
  ContentDigest?: string;
  /**
   * The type of content stored in the file source.
   * @maxLength `256`
   * @pattern `.*`
   */
  ContentType?: string;
  /**
   * The Amazon S3 URI for the file source.
   * @maxLength `1024`
   * @pattern `^(https|s3)://([^/]+)/?(.*)$`
   */
  S3Uri: string;
};
/**
 * Type definition for `AWS::SageMaker::ModelPackage.InferenceSpecification`.
 * Details about inference jobs that can be run with models based on this model package.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelpackage-inferencespecification.html}
 */
export type InferenceSpecification = {
  /**
   * The Amazon ECR registry path of the Docker image that contains the inference code.
   * @minLength `1`
   * @maxLength `15`
   */
  Containers: ModelPackageContainerDefinition[];
  /**
   * The supported MIME types for the input data.
   */
  SupportedContentTypes: string[];
  /**
   * A list of the instance types that are used to generate inferences in real-time
   */
  SupportedRealtimeInferenceInstanceTypes?: string[];
  /**
   * The supported MIME types for the output data.
   */
  SupportedResponseMIMETypes: string[];
  /**
   * A list of the instance types on which a transformation job can be run or on which an endpoint can be deployed.
   * @minLength `1`
   */
  SupportedTransformInstanceTypes?: string[];
};
/**
 * Type definition for `AWS::SageMaker::ModelPackage.MetadataProperties`.
 * Metadata properties of the tracking entity, trial, or trial component.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelpackage-metadataproperties.html}
 */
export type MetadataProperties = {
  /**
   * The commit ID.
   * @maxLength `1024`
   * @pattern `.*`
   */
  CommitId?: string;
  /**
   * The entity this entity was generated by.
   * @maxLength `1024`
   * @pattern `.*`
   */
  GeneratedBy?: string;
  /**
   * The project ID metadata.
   * @maxLength `1024`
   * @pattern `.*`
   */
  ProjectId?: string;
  /**
   * The repository metadata.
   * @maxLength `1024`
   * @pattern `.*`
   */
  Repository?: string;
};
/**
 * Type definition for `AWS::SageMaker::ModelPackage.MetricsSource`.
 * Represents a Metric Source Object.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelpackage-metricssource.html}
 */
export type MetricsSource = {
  /**
   * The digest of the metric source.
   * @maxLength `72`
   * @pattern `^[Ss][Hh][Aa]256:[0-9a-fA-F]{64}$`
   */
  ContentDigest?: string;
  /**
   * The type of content stored in the metric source.
   * @maxLength `256`
   * @pattern `.*`
   */
  ContentType: string;
  /**
   * The Amazon S3 URI for the metric source.
   * @maxLength `1024`
   * @pattern `^(https|s3)://([^/]+)/?(.*)$`
   */
  S3Uri: string;
};
/**
 * Type definition for `AWS::SageMaker::ModelPackage.ModelAccessConfig`.
 * Specifies the access configuration file for the ML model.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelpackage-modelaccessconfig.html}
 */
export type ModelAccessConfig = {
  /**
   * Specifies agreement to the model end-user license agreement (EULA).
   */
  AcceptEula: boolean;
};
/**
 * Type definition for `AWS::SageMaker::ModelPackage.ModelApprovalStatus`.
 * The approval status of the model package.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelpackage-modelapprovalstatus.html}
 */
export type ModelApprovalStatus =
  | "Approved"
  | "Rejected"
  | "PendingManualApproval";
/**
 * Type definition for `AWS::SageMaker::ModelPackage.ModelCard`.
 * The model card associated with the model package.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelpackage-modelcard.html}
 */
export type ModelCard = {
  /**
   * The content of the model card.
   * @minLength `0`
   * @maxLength `100000`
   * @pattern `.*`
   */
  ModelCardContent: string;
  /**
   * The approval status of the model card within your organization.
   */
  ModelCardStatus: "Draft" | "PendingReview" | "Approved" | "Archived";
};
/**
 * Type definition for `AWS::SageMaker::ModelPackage.ModelDataQuality`.
 * Metrics that measure the quality of the input data for a model.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelpackage-modeldataquality.html}
 */
export type ModelDataQuality = {
  /**
   * Represents a Metric Source Object.
   */
  Constraints?: MetricsSource;
  /**
   * Represents a Metric Source Object.
   */
  Statistics?: MetricsSource;
};
/**
 * Type definition for `AWS::SageMaker::ModelPackage.ModelDataSource`.
 * Specifies the location of ML model data to deploy during endpoint creation.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelpackage-modeldatasource.html}
 */
export type ModelDataSource = {
  /**
   * Specifies the S3 location of ML model data to deploy.
   */
  S3DataSource?: S3ModelDataSource;
};
/**
 * Type definition for `AWS::SageMaker::ModelPackage.ModelMetrics`.
 * A structure that contains model metrics reports.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelpackage-modelmetrics.html}
 */
export type ModelMetrics = {
  /**
   * Contains bias metrics for a model.
   */
  Bias?: Bias;
  /**
   * Contains explainability metrics for a model.
   */
  Explainability?: Explainability;
  /**
   * Metrics that measure the quality of the input data for a model.
   */
  ModelDataQuality?: ModelDataQuality;
  /**
   * Metrics that measure the quality of a model.
   */
  ModelQuality?: ModelQuality;
};
/**
 * Type definition for `AWS::SageMaker::ModelPackage.ModelPackageContainerDefinition`.
 * Describes the Docker container for the model package.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelpackage-modelpackagecontainerdefinition.html}
 */
export type ModelPackageContainerDefinition = {
  /**
   * The DNS host name for the Docker container.
   * @maxLength `63`
   * @pattern `^[a-zA-Z0-9](-*[a-zA-Z0-9]){0,62}`
   */
  ContainerHostname?: string;
  /**
   * Sets the environment variables in the Docker container
   */
  Environment?: Environment;
  /**
   * The machine learning framework of the model package container image.
   */
  Framework?: string;
  /**
   * The framework version of the Model Package Container Image.
   * @minLength `3`
   * @maxLength `10`
   * @pattern `[0-9]\.[A-Za-z0-9.]+`
   */
  FrameworkVersion?: string;
  /**
   * The Amazon EC2 Container Registry (Amazon ECR) path where inference code is stored.
   * @minLength `1`
   * @maxLength `255`
   * @pattern `[\S]{1,255}`
   */
  Image: string;
  /**
   * An MD5 hash of the training algorithm that identifies the Docker image used for training.
   * @maxLength `72`
   * @pattern `^[Ss][Hh][Aa]256:[0-9a-fA-F]{64}$`
   */
  ImageDigest?: string;
  /**
   * Specifies the location of ML model data to deploy during endpoint creation.
   */
  ModelDataSource?: ModelDataSource;
  /**
   * A structure with Model Input details.
   * @maxLength `1024`
   * @pattern `^(https|s3)://([^/]+)/?(.*)$`
   */
  ModelDataUrl?: string;
  ModelInput?: {
    /**
     * The input configuration object for the model.
     * @minLength `1`
     * @maxLength `1024`
     * @pattern `[\S\s]+`
     */
    DataInputConfig: string;
  };
  /**
   * The name of a pre-trained machine learning benchmarked by Amazon SageMaker Inference Recommender model that matches your model.
   */
  NearestModelName?: string;
};
/**
 * Type definition for `AWS::SageMaker::ModelPackage.ModelPackageStatus`.
 * The current status of the model package.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelpackage-modelpackagestatus.html}
 */
export type ModelPackageStatus =
  | "Pending"
  | "Deleting"
  | "InProgress"
  | "Completed"
  | "Failed";
/**
 * Type definition for `AWS::SageMaker::ModelPackage.ModelPackageStatusDetails`.
 * Details about the current status of the model package.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelpackage-modelpackagestatusdetails.html}
 */
export type ModelPackageStatusDetails = {
  ValidationStatuses?: ModelPackageStatusItem[];
};
/**
 * Type definition for `AWS::SageMaker::ModelPackage.ModelPackageStatusItem`.
 * Represents the overall status of a model package.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelpackage-modelpackagestatusitem.html}
 */
export type ModelPackageStatusItem = {
  /**
   * If the overall status is Failed, the reason for the failure.
   */
  FailureReason?: string;
  /**
   * The name of the model package for which the overall status is being reported.
   * @minLength `1`
   * @maxLength `63`
   * @pattern `^[a-zA-Z0-9](-*[a-zA-Z0-9]){0,62}$`
   */
  Name: string;
  /**
   * The current status.
   */
  Status: "NotStarted" | "Failed" | "InProgress" | "Completed";
};
/**
 * Type definition for `AWS::SageMaker::ModelPackage.ModelQuality`.
 * Metrics that measure the quality of a model.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelpackage-modelquality.html}
 */
export type ModelQuality = {
  /**
   * Represents a Metric Source Object.
   */
  Constraints?: MetricsSource;
  /**
   * Represents a Metric Source Object.
   */
  Statistics?: MetricsSource;
};
/**
 * Type definition for `AWS::SageMaker::ModelPackage.S3DataSource`.
 * Describes the S3 data source.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelpackage-s3datasource.html}
 */
export type S3DataSource = {
  /**
   * The S3 Data Source Type
   */
  S3DataType: "ManifestFile" | "S3Prefix" | "AugmentedManifestFile";
  /**
   * Depending on the value specified for the S3DataType, identifies either a key name prefix or a manifest.
   * @maxLength `1024`
   * @pattern `^(https|s3)://([^/]+)/?(.*)$`
   */
  S3Uri: string;
};
/**
 * Type definition for `AWS::SageMaker::ModelPackage.S3ModelDataSource`.
 * Specifies the S3 location of ML model data to deploy.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelpackage-s3modeldatasource.html}
 */
export type S3ModelDataSource = {
  /**
   * Specifies how the ML model data is prepared.
   */
  CompressionType: "None" | "Gzip";
  /**
   * Specifies the access configuration file for the ML model.
   */
  ModelAccessConfig?: ModelAccessConfig;
  /**
   * Specifies the type of ML model data to deploy.
   */
  S3DataType: "S3Prefix" | "S3Object";
  /**
   * Specifies the S3 path of ML model data to deploy.
   * @maxLength `1024`
   * @pattern `^(https|s3)://([^/]+)/?(.*)$`
   */
  S3Uri: string;
};
/**
 * Type definition for `AWS::SageMaker::ModelPackage.SecurityConfig`.
 * An optional AWS Key Management Service key to encrypt, decrypt, and re-encrypt model package information for regulated workloads with highly sensitive data.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelpackage-securityconfig.html}
 */
export type SecurityConfig = {
  /**
   * The AWS KMS Key ID (KMSKeyId) used for encryption of model package information.
   * @maxLength `2048`
   * @pattern `^[a-zA-Z0-9:/_-]*$`
   */
  KmsKeyId: string;
};
/**
 * Type definition for `AWS::SageMaker::ModelPackage.SkipModelValidation`.
 * Indicates if you want to skip model validation.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelpackage-skipmodelvalidation.html}
 */
export type SkipModelValidation = "None" | "All";
/**
 * Type definition for `AWS::SageMaker::ModelPackage.SourceAlgorithm`.
 * Specifies an algorithm that was used to create the model package. The algorithm must be either an algorithm resource in your Amazon SageMaker account or an algorithm in AWS Marketplace that you are subscribed to.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelpackage-sourcealgorithm.html}
 */
export type SourceAlgorithm = {
  /**
   * The name of an algorithm that was used to create the model package. The algorithm must be either an algorithm resource in your Amazon SageMaker account or an algorithm in AWS Marketplace that you are subscribed to.
   * @minLength `1`
   * @maxLength `170`
   * @pattern `(arn:aws[a-z\-]*:sagemaker:[a-z0-9\-]*:[0-9]{12}:[a-z\-]*\/)?([a-zA-Z0-9]([a-zA-Z0-9-]){0,62})(?<!-)$`
   */
  AlgorithmName: string;
  /**
   * The Amazon S3 path where the model artifacts, which result from model training, are stored. This path must point to a single gzip compressed tar archive (.tar.gz suffix).
   * @maxLength `1024`
   * @pattern `^(https|s3)://([^/]+)/?(.*)$`
   */
  ModelDataUrl?: string;
};
/**
 * Type definition for `AWS::SageMaker::ModelPackage.SourceAlgorithmSpecification`.
 * Details about the algorithm that was used to create the model package.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelpackage-sourcealgorithmspecification.html}
 */
export type SourceAlgorithmSpecification = {
  /**
   * A list of algorithms that were used to create a model package.
   * @minLength `1`
   * @maxLength `1`
   */
  SourceAlgorithms: SourceAlgorithm[];
};
/**
 * Type definition for `AWS::SageMaker::ModelPackage.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelpackage-tag.html}
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
 * Type definition for `AWS::SageMaker::ModelPackage.TransformInput`.
 * Describes the input source of a transform job and the way the transform job consumes it.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelpackage-transforminput.html}
 */
export type TransformInput = {
  /**
   * If your transform data is compressed, specify the compression type. Amazon SageMaker automatically decompresses the data for the transform job accordingly. The default value is None.
   */
  CompressionType?: "None" | "Gzip";
  /**
   * The multipurpose internet mail extension (MIME) type of the data. Amazon SageMaker uses the MIME type with each http call to transfer data to the transform job.
   * @maxLength `256`
   * @pattern `.*`
   */
  ContentType?: string;
  /**
   * Describes the input source of a transform job and the way the transform job consumes it.
   */
  DataSource: DataSource;
  /**
   * The method to use to split the transform job's data files into smaller batches.
   */
  SplitType?: "None" | "TFRecord" | "Line" | "RecordIO";
};
/**
 * Type definition for `AWS::SageMaker::ModelPackage.TransformJobDefinition`.
 * Defines the input needed to run a transform job using the inference specification specified in the algorithm.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelpackage-transformjobdefinition.html}
 */
export type TransformJobDefinition = {
  /**
   * A string that determines the number of records included in a single mini-batch.
   */
  BatchStrategy?: "MultiRecord" | "SingleRecord";
  /**
   * Sets the environment variables in the Docker container
   */
  Environment?: Environment;
  /**
   * The maximum number of parallel requests that can be sent to each instance in a transform job. The default value is 1.
   * @min `0`
   */
  MaxConcurrentTransforms?: number;
  /**
   * The maximum payload size allowed, in MB. A payload is the data portion of a record (without metadata).
   * @min `0`
   */
  MaxPayloadInMB?: number;
  /**
   * Describes the input source of a transform job and the way the transform job consumes it.
   */
  TransformInput: TransformInput;
  /**
   * Describes the results of a transform job.
   */
  TransformOutput: TransformOutput;
  /**
   * Describes the resources, including ML instance types and ML instance count, to use for transform job.
   */
  TransformResources: TransformResources;
};
/**
 * Type definition for `AWS::SageMaker::ModelPackage.TransformOutput`.
 * Describes the results of a transform job.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelpackage-transformoutput.html}
 */
export type TransformOutput = {
  /**
   * The MIME type used to specify the output data. Amazon SageMaker uses the MIME type with each http call to transfer data from the transform job.
   * @maxLength `256`
   * @pattern `.*`
   */
  Accept?: string;
  /**
   * Defines how to assemble the results of the transform job as a single S3 object.
   */
  AssembleWith?: "None" | "Line";
  /**
   * The AWS Key Management Service (AWS KMS) key that Amazon SageMaker uses to encrypt the model artifacts at rest using Amazon S3 server-side encryption.
   * @maxLength `2048`
   * @pattern `.*`
   */
  KmsKeyId?: string;
  /**
   * The Amazon S3 path where you want Amazon SageMaker to store the results of the transform job.
   * @maxLength `1024`
   * @pattern `^(https|s3)://([^/]+)/?(.*)$`
   */
  S3OutputPath: string;
};
/**
 * Type definition for `AWS::SageMaker::ModelPackage.TransformResources`.
 * Describes the resources, including ML instance types and ML instance count, to use for transform job.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelpackage-transformresources.html}
 */
export type TransformResources = {
  /**
   * The number of ML compute instances to use in the transform job. For distributed transform jobs, specify a value greater than 1. The default value is 1.
   * @min `1`
   */
  InstanceCount: number;
  /**
   * The ML compute instance type for the transform job.
   */
  InstanceType: string;
  /**
   * The AWS Key Management Service (AWS KMS) key that Amazon SageMaker uses to encrypt model data on the storage volume attached to the ML compute instance(s) that run the batch transform job.
   * @maxLength `2048`
   * @pattern `.*`
   */
  VolumeKmsKeyId?: string;
};
/**
 * Type definition for `AWS::SageMaker::ModelPackage.ValidationProfile`.
 * Contains data, such as the inputs and targeted instance types that are used in the process of validating the model package.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelpackage-validationprofile.html}
 */
export type ValidationProfile = {
  /**
   * The name of the profile for the model package.
   * @minLength `1`
   * @maxLength `63`
   * @pattern `^[a-zA-Z0-9](-*[a-zA-Z0-9]){0,62}$`
   */
  ProfileName: string;
  /**
   * Defines the input needed to run a transform job using the inference specification specified in the algorithm.
   */
  TransformJobDefinition: TransformJobDefinition;
};
/**
 * Type definition for `AWS::SageMaker::ModelPackage.ValidationSpecification`.
 * Specifies configurations for one or more transform jobs that Amazon SageMaker runs to test the model package.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelpackage-validationspecification.html}
 */
export type ValidationSpecification = {
  /**
   * @minLength `1`
   * @maxLength `1`
   */
  ValidationProfiles: ValidationProfile[];
  /**
   * The IAM roles to be used for the validation of the model package.
   * @minLength `20`
   * @maxLength `2048`
   * @pattern `^arn:aws[a-z\-]*:iam::\d{12}:role/?[a-zA-Z_0-9+=,.@\-_/]+$`
   */
  ValidationRole: string;
};
/**
 * Resource Type definition for AWS::SageMaker::ModelPackage
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelpackage.html}
 */
export class SageMakerModelPackage extends $Resource<
  "AWS::SageMaker::ModelPackage",
  SageMakerModelPackageProperties,
  SageMakerModelPackageAttributes
> {
  public static readonly Type = "AWS::SageMaker::ModelPackage";
  constructor(
    logicalId: string,
    properties: SageMakerModelPackageProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, SageMakerModelPackage.Type, properties, options);
  }
}
