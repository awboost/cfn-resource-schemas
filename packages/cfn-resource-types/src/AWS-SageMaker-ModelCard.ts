import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::SageMaker::ModelCard.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelcard.html}
 */
export type SageMakerModelCardProperties = {
  /**
   * The content of the model card.
   */
  Content: Content;
  /**
   * The unique name of the model card.
   * @maxLength `63`
   * @pattern `^[a-zA-Z0-9](-*[a-zA-Z0-9]){0,62}$`
   */
  ModelCardName: string;
  /**
   * The approval status of the model card within your organization. Different organizations might have different criteria for model card review and approval.
   */
  ModelCardStatus: "Draft" | "PendingReview" | "Approved" | "Archived";
  /**
     * An optional Key Management Service key to encrypt, decrypt, and re-encrypt model card content for regulated workloads with highly sensitive data.
    
    
     */
  SecurityConfig?: SecurityConfig;
  /**
   * Key-value pairs used to manage metadata for model cards.
   * @minLength `1`
   * @maxLength `50`
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::SageMaker::ModelCard`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelcard.html#aws-resource-sagemaker-modelcard-return-values}
 */
export type SageMakerModelCardAttributes = {
  /**
   * Information about the user who created or modified an experiment, trial, trial component, lineage group, project, or model card.
   */
  CreatedBy: {
    /**
     * The domain associated with the user.
     */
    DomainId: string;
    /**
     * The Amazon Resource Name (ARN) of the user's profile.
     */
    UserProfileArn: string;
    /**
     * The name of the user's profile.
     */
    UserProfileName: string;
  };
  /**
   * The date and time the model card was created.
   */
  CreationTime: string;
  /**
   * Information about the user who created or modified an experiment, trial, trial component, lineage group, project, or model card.
   */
  LastModifiedBy: {
    /**
     * The domain associated with the user.
     */
    DomainId: string;
    /**
     * The Amazon Resource Name (ARN) of the user's profile.
     */
    UserProfileArn: string;
    /**
     * The name of the user's profile.
     */
    UserProfileName: string;
  };
  /**
   * The date and time the model card was last modified.
   */
  LastModifiedTime: string;
  /**
   * The Amazon Resource Name (ARN) of the successfully created model card.
   * @minLength `1`
   * @maxLength `256`
   * @pattern `^arn:aws[a-z\-]*:sagemaker:[a-z0-9\-]{9,16}:[0-9]{12}:model-card/[a-zA-Z0-9](-*[a-zA-Z0-9]){0,62}$`
   */
  ModelCardArn: string;
  /**
   * The processing status of model card deletion. The ModelCardProcessingStatus updates throughout the different deletion steps.
   */
  ModelCardProcessingStatus:
    | "UnsetValue"
    | "DeleteInProgress"
    | "DeletePending"
    | "ContentDeleted"
    | "ExportJobsDeleted"
    | "DeleteCompleted"
    | "DeleteFailed";
  /**
   * A version of the model card.
   * @min `1`
   */
  ModelCardVersion: number;
};
/**
 * Type definition for `AWS::SageMaker::ModelCard.AdditionalInformation`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelcard-additionalinformation.html}
 */
export type AdditionalInformation = {
  /**
   * Caveats and recommendations for people who might use this model in their applications.
   * @maxLength `2048`
   */
  CaveatsAndRecommendations?: string;
  /**
   * customer details.
   */
  CustomDetails?: Record<string, string>;
  /**
   * Any ethical considerations that the author wants to provide.
   * @maxLength `2048`
   */
  EthicalConsiderations?: string;
};
/**
 * Type definition for `AWS::SageMaker::ModelCard.BarChartMetric`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelcard-barchartmetric.html}
 */
export type BarChartMetric = {
  /**
   * @pattern `.{1,255}`
   */
  Name: string;
  /**
   * @maxLength `1024`
   */
  Notes?: string;
  Type: "bar_chart";
  /**
   * @minLength `1`
   */
  Value: number[];
  XAxisName?: string[];
  /**
   * @maxLength `63`
   */
  YAxisName?: string;
};
/**
 * Type definition for `AWS::SageMaker::ModelCard.BusinessDetails`.
 * Business details.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelcard-businessdetails.html}
 */
export type BusinessDetails = {
  /**
   * What business problem does the model solve?
   * @maxLength `2048`
   */
  BusinessProblem?: string;
  /**
   * Business stakeholders.
   * @maxLength `2048`
   */
  BusinessStakeholders?: string;
  /**
   * Line of business.
   * @maxLength `2048`
   */
  LineOfBusiness?: string;
};
/**
 * Type definition for `AWS::SageMaker::ModelCard.Container`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelcard-container.html}
 */
export type Container = {
  /**
   * Inference environment path. The Amazon EC2 Container Registry (Amazon ECR) path where inference code is stored.
   * @maxLength `255`
   */
  Image: string;
  /**
   * The Amazon S3 path where the model artifacts, which result from model training, are stored.
   * @maxLength `1024`
   */
  ModelDataUrl?: string;
  /**
   * The name of a pre-trained machine learning benchmarked by Amazon SageMaker Inference Recommender model that matches your model.
   */
  NearestModelName?: string;
};
/**
 * Type definition for `AWS::SageMaker::ModelCard.Content`.
 * The content of the model card.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelcard-content.html}
 */
export type Content = {
  AdditionalInformation?: AdditionalInformation;
  /**
   * Business details.
   */
  BusinessDetails?: BusinessDetails;
  EvaluationDetails?: EvaluationDetail[];
  /**
   * Intended usage of model.
   */
  IntendedUses?: IntendedUses;
  /**
   * Overview about the model.
   */
  ModelOverview?: ModelOverview;
  /**
   * Metadata information related to model package version
   */
  ModelPackageDetails?: ModelPackageDetails;
  /**
   * Overview about the training.
   */
  TrainingDetails?: TrainingDetails;
};
/**
 * Type definition for `AWS::SageMaker::ModelCard.EvaluationDetail`.
 * item of evaluation details
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelcard-evaluationdetail.html}
 */
export type EvaluationDetail = {
  /**
   * @maxLength `10`
   */
  Datasets?: string[];
  /**
   * @maxLength `256`
   */
  EvaluationJobArn?: string;
  /**
   * @maxLength `2096`
   */
  EvaluationObservation?: string;
  /**
   * additional attributes associated with the evaluation results.
   */
  Metadata?: Record<string, string>;
  MetricGroups?: MetricGroup[];
  /**
   * @pattern `.{1,63}`
   */
  Name: string;
};
/**
 * Type definition for `AWS::SageMaker::ModelCard.InferenceSpecification`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelcard-inferencespecification.html}
 */
export type InferenceSpecification = {
  /**
   * Contains inference related information which were used to create model package.
   * @minLength `1`
   * @maxLength `15`
   */
  Containers: Container[];
};
/**
 * Type definition for `AWS::SageMaker::ModelCard.IntendedUses`.
 * Intended usage of model.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelcard-intendeduses.html}
 */
export type IntendedUses = {
  /**
   * @maxLength `2048`
   */
  ExplanationsForRiskRating?: string;
  /**
   * @maxLength `2048`
   */
  FactorsAffectingModelEfficiency?: string;
  /**
   * intended use cases.
   * @maxLength `2048`
   */
  IntendedUses?: string;
  /**
   * Why the model was developed?
   * @maxLength `2048`
   */
  PurposeOfModel?: string;
  /**
   * Risk rating of model.
   */
  RiskRating?: RiskRating;
};
/**
 * Type definition for `AWS::SageMaker::ModelCard.LinearGraphMetric`.
 * Linear graph metric.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelcard-lineargraphmetric.html}
 */
export type LinearGraphMetric = {
  /**
   * @pattern `.{1,255}`
   */
  Name: string;
  /**
   * @maxLength `1024`
   */
  Notes?: string;
  Type: "linear_graph";
  /**
   * @minLength `1`
   */
  Value: number[][];
  /**
   * @maxLength `63`
   */
  XAxisName?: string;
  /**
   * @maxLength `63`
   */
  YAxisName?: string;
};
/**
 * Type definition for `AWS::SageMaker::ModelCard.MatrixMetric`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelcard-matrixmetric.html}
 */
export type MatrixMetric = {
  /**
   * @pattern `.{1,255}`
   */
  Name: string;
  /**
   * @maxLength `1024`
   */
  Notes?: string;
  Type: "matrix";
  /**
   * @minLength `1`
   * @maxLength `20`
   */
  Value: number[][];
  XAxisName?: string[];
  YAxisName?: string[];
};
/**
 * Type definition for `AWS::SageMaker::ModelCard.MetricGroup`.
 * item in metric groups
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelcard-metricgroup.html}
 */
export type MetricGroup = {
  MetricData: (
    | SimpleMetric
    | LinearGraphMetric
    | BarChartMetric
    | MatrixMetric
  )[];
  /**
   * @pattern `.{1,63}`
   */
  Name: string;
};
/**
 * Type definition for `AWS::SageMaker::ModelCard.ModelOverview`.
 * Overview about the model.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelcard-modeloverview.html}
 */
export type ModelOverview = {
  /**
   * Algorithm used to solve the problem.
   * @maxLength `1024`
   */
  AlgorithmType?: string;
  /**
   * Overview about the inference.
   */
  InferenceEnvironment?: {
    /**
     * SageMaker inference image uri.
     * @maxLength `15`
     */
    ContainerImage?: string[];
  };
  /**
   * Location of the model artifact.
   * @maxLength `15`
   */
  ModelArtifact?: string[];
  /**
   * Creator of model.
   * @maxLength `1024`
   */
  ModelCreator?: string;
  /**
   * description of model.
   * @maxLength `1024`
   */
  ModelDescription?: string;
  /**
   * SageMaker Model Arn or Non SageMaker Model id.
   * @maxLength `1024`
   */
  ModelId?: string;
  /**
   * Name of the model.
   * @maxLength `1024`
   */
  ModelName?: string;
  /**
   * Owner of model.
   * @maxLength `1024`
   */
  ModelOwner?: string;
  /**
   * Version of the model.
   * @min `1`
   */
  ModelVersion?: number;
  /**
   * Problem being solved with the model.
   * @maxLength `1024`
   */
  ProblemType?: string;
};
/**
 * Type definition for `AWS::SageMaker::ModelCard.ModelPackageCreator`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelcard-modelpackagecreator.html}
 */
export type ModelPackageCreator = {
  /**
   * The name of the user's profile in Studio
   * @maxLength `63`
   */
  UserProfileName?: string;
};
/**
 * Type definition for `AWS::SageMaker::ModelCard.ModelPackageDetails`.
 * Metadata information related to model package version
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelcard-modelpackagedetails.html}
 */
export type ModelPackageDetails = {
  /**
   * A description provided for the model approval
   * @maxLength `1024`
   */
  ApprovalDescription?: string;
  /**
   * Information about the user who created model package.
   */
  CreatedBy?: ModelPackageCreator;
  /**
   * The machine learning domain of the model package you specified. Common machine learning domains include computer vision and natural language processing.
   */
  Domain?: string;
  /**
   * Details about inference jobs that can be run with models based on this model package.
   */
  InferenceSpecification?: InferenceSpecification;
  /**
   * Current approval status of model package
   */
  ModelApprovalStatus?: "Approved" | "Rejected" | "PendingManualApproval";
  /**
   * The Amazon Resource Name (ARN) of the model package
   * @minLength `1`
   * @maxLength `2048`
   */
  ModelPackageArn?: string;
  /**
   * A brief summary of the model package
   * @maxLength `1024`
   */
  ModelPackageDescription?: string;
  /**
   * If the model is a versioned model, the name of the model group that the versioned model belongs to.
   * @minLength `1`
   * @maxLength `63`
   */
  ModelPackageGroupName?: string;
  /**
   * Name of the model package
   * @minLength `1`
   * @maxLength `63`
   */
  ModelPackageName?: string;
  /**
   * Current status of model package
   */
  ModelPackageStatus?:
    | "Pending"
    | "InProgress"
    | "Completed"
    | "Failed"
    | "Deleting";
  /**
   * Version of the model package
   * @min `1`
   */
  ModelPackageVersion?: number;
  /**
   * A list of algorithms that were used to create a model package.
   * @minLength `1`
   * @maxLength `1`
   */
  SourceAlgorithms?: SourceAlgorithm[];
  /**
   * The machine learning task you specified that your model package accomplishes. Common machine learning tasks include object detection and image classification.
   */
  Task?: string;
};
/**
 * Type definition for `AWS::SageMaker::ModelCard.ObjectiveFunction`.
 * the objective function the model will optimize for.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelcard-objectivefunction.html}
 */
export type ObjectiveFunction = {
  /**
   * objective function that training job is optimized for.
   */
  Function?: {
    /**
     * @maxLength `63`
     */
    Condition?: string;
    /**
     * @maxLength `63`
     */
    Facet?: string;
    Function?: "Maximize" | "Minimize";
  };
  /**
   * @maxLength `1024`
   */
  Notes?: string;
};
/**
 * Type definition for `AWS::SageMaker::ModelCard.RiskRating`.
 * Risk rating of model.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelcard-riskrating.html}
 */
export type RiskRating = "High" | "Medium" | "Low" | "Unknown";
/**
 * Type definition for `AWS::SageMaker::ModelCard.SecurityConfig`.
 * An optional Key Management Service key to encrypt, decrypt, and re-encrypt model card content for regulated workloads with highly sensitive data.


 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelcard-securityconfig.html}
 */
export type SecurityConfig = {
  /**
   * A Key Management Service key ID to use for encrypting a model card.
   * @maxLength `2048`
   * @pattern `.*`
   */
  KmsKeyId?: string;
};
/**
 * Type definition for `AWS::SageMaker::ModelCard.SimpleMetric`.
 * metric data
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelcard-simplemetric.html}
 */
export type SimpleMetric = {
  /**
   * @pattern `.{1,255}`
   */
  Name: string;
  /**
   * @maxLength `1024`
   */
  Notes?: string;
  Type: "number" | "string" | "boolean";
  Value: number | string | boolean;
  /**
   * @maxLength `63`
   */
  XAxisName?: string;
  /**
   * @maxLength `63`
   */
  YAxisName?: string;
};
/**
 * Type definition for `AWS::SageMaker::ModelCard.SourceAlgorithm`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelcard-sourcealgorithm.html}
 */
export type SourceAlgorithm = {
  /**
   * The name of an algorithm that was used to create the model package. The algorithm must be either an algorithm resource in your SageMaker account or an algorithm in AWS Marketplace that you are subscribed to.
   * @maxLength `170`
   */
  AlgorithmName: string;
  /**
   * The Amazon S3 path where the model artifacts, which result from model training, are stored.
   * @maxLength `1024`
   */
  ModelDataUrl?: string;
};
/**
 * Type definition for `AWS::SageMaker::ModelCard.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelcard-tag.html}
 */
export type Tag = {
  /**
   * The tag key. Tag keys must be unique per resource.
   * @minLength `1`
   * @maxLength `128`
   */
  Key: string;
  /**
   * The tag value.
   * @maxLength `256`
   */
  Value: string;
};
/**
 * Type definition for `AWS::SageMaker::ModelCard.TrainingDetails`.
 * Overview about the training.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelcard-trainingdetails.html}
 */
export type TrainingDetails = {
  /**
   * the objective function the model will optimize for.
   */
  ObjectiveFunction?: ObjectiveFunction;
  TrainingJobDetails?: {
    HyperParameters?: TrainingHyperParameter[];
    /**
     * SageMaker Training job arn.
     * @maxLength `1024`
     */
    TrainingArn?: string;
    /**
     * Location of the model datasets.
     * @maxLength `15`
     */
    TrainingDatasets?: string[];
    TrainingEnvironment?: {
      /**
       * SageMaker training image uri.
       * @maxLength `15`
       */
      ContainerImage?: string[];
    };
    TrainingMetrics?: TrainingMetric[];
    UserProvidedHyperParameters?: TrainingHyperParameter[];
    UserProvidedTrainingMetrics?: TrainingMetric[];
  };
  /**
   * @maxLength `1024`
   */
  TrainingObservations?: string;
};
/**
 * Type definition for `AWS::SageMaker::ModelCard.TrainingHyperParameter`.
 * training hyper parameter
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelcard-traininghyperparameter.html}
 */
export type TrainingHyperParameter = {
  /**
   * @pattern `.{1,255}`
   */
  Name: string;
  /**
   * @pattern `.{1,255}`
   */
  Value: string;
};
/**
 * Type definition for `AWS::SageMaker::ModelCard.TrainingMetric`.
 * training metric data.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelcard-trainingmetric.html}
 */
export type TrainingMetric = {
  /**
   * @pattern `.{1,255}`
   */
  Name: string;
  /**
   * @maxLength `1024`
   */
  Notes?: string;
  Value: number;
};
/**
 * Resource Type definition for AWS::SageMaker::ModelCard.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelcard.html}
 */
export class SageMakerModelCard extends $Resource<
  "AWS::SageMaker::ModelCard",
  SageMakerModelCardProperties,
  SageMakerModelCardAttributes
> {
  public static readonly Type = "AWS::SageMaker::ModelCard";
  constructor(
    logicalId: string,
    properties: SageMakerModelCardProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, SageMakerModelCard.Type, properties, options);
  }
}
