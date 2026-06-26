import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::SageMaker::Algorithm
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-algorithm.html}
 */
export type SageMakerAlgorithmProperties = {
  /**
   * A description of the algorithm.
   * @maxLength `1024`
   */
  AlgorithmDescription?: string;
  /**
   * The name of the algorithm.
   * @minLength `1`
   * @maxLength `63`
   * @pattern `^[a-zA-Z0-9](-*[a-zA-Z0-9]){0,62}$`
   */
  AlgorithmName: string;
  /**
   * Whether to certify the algorithm so that it can be listed in AWS Marketplace.
   */
  CertifyForMarketplace?: boolean;
  InferenceSpecification?: InferenceSpecification;
  /**
   * An array of key-value pairs to apply to this resource.
   * @maxLength `50`
   */
  Tags?: Tag[];
  TrainingSpecification: TrainingSpecification;
};
/**
 * Attribute type definition for `AWS::SageMaker::Algorithm`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-algorithm.html#aws-resource-sagemaker-algorithm-return-values}
 */
export type SageMakerAlgorithmAttributes = {
  /**
   * The Amazon Resource Name (ARN) of the algorithm.
   * @minLength `1`
   * @maxLength `2048`
   */
  AlgorithmArn: string;
  /**
   * A timestamp specifying when the algorithm was created.
   */
  CreationTime: string;
};
/**
 * Type definition for `AWS::SageMaker::Algorithm.CategoricalParameterRangeSpecification`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-algorithm-categoricalparameterrangespecification.html}
 */
export type CategoricalParameterRangeSpecification = {
  /**
   * @minLength `1`
   * @maxLength `30`
   */
  Values: string[];
};
/**
 * Type definition for `AWS::SageMaker::Algorithm.ChannelSpecification`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-algorithm-channelspecification.html}
 */
export type ChannelSpecification = {
  /**
   * @maxLength `1024`
   */
  Description?: string;
  IsRequired?: boolean;
  /**
   * @minLength `1`
   * @maxLength `64`
   * @pattern `^[A-Za-z0-9\.\-_]+$`
   */
  Name: string;
  SupportedCompressionTypes?: ("None" | "Gzip")[];
  SupportedContentTypes: string[];
  /**
   * @minLength `1`
   */
  SupportedInputModes: ("Pipe" | "File" | "FastFile")[];
};
/**
 * Type definition for `AWS::SageMaker::Algorithm.ContinuousParameterRangeSpecification`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-algorithm-continuousparameterrangespecification.html}
 */
export type ContinuousParameterRangeSpecification = {
  /**
   * @maxLength `256`
   */
  MaxValue: string;
  /**
   * @maxLength `256`
   */
  MinValue: string;
};
/**
 * Type definition for `AWS::SageMaker::Algorithm.HyperParameterSpecification`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-algorithm-hyperparameterspecification.html}
 */
export type HyperParameterSpecification = {
  /**
   * @maxLength `2500`
   */
  DefaultValue?: string;
  /**
   * @maxLength `1024`
   */
  Description?: string;
  IsRequired?: boolean;
  IsTunable?: boolean;
  /**
   * @maxLength `256`
   */
  Name: string;
  Range?: ParameterRange;
  Type: "Integer" | "Continuous" | "Categorical" | "FreeText";
};
/**
 * Type definition for `AWS::SageMaker::Algorithm.HyperParameterTuningJobObjective`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-algorithm-hyperparametertuningjobobjective.html}
 */
export type HyperParameterTuningJobObjective = {
  /**
   * @minLength `1`
   * @maxLength `255`
   * @pattern `^.+$`
   */
  MetricName: string;
  Type: "Maximize" | "Minimize";
};
/**
 * Type definition for `AWS::SageMaker::Algorithm.InferenceSpecification`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-algorithm-inferencespecification.html}
 */
export type InferenceSpecification = {
  /**
   * @minLength `1`
   * @maxLength `15`
   */
  Containers: ModelPackageContainerDefinition[];
  SupportedContentTypes?: string[];
  SupportedRealtimeInferenceInstanceTypes?: string[];
  SupportedResponseMIMETypes?: string[];
  /**
   * @minLength `1`
   */
  SupportedTransformInstanceTypes?: string[];
};
/**
 * Type definition for `AWS::SageMaker::Algorithm.IntegerParameterRangeSpecification`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-algorithm-integerparameterrangespecification.html}
 */
export type IntegerParameterRangeSpecification = {
  /**
   * @maxLength `256`
   */
  MaxValue: string;
  /**
   * @maxLength `256`
   */
  MinValue: string;
};
/**
 * Type definition for `AWS::SageMaker::Algorithm.MetricDefinition`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-algorithm-metricdefinition.html}
 */
export type MetricDefinition = {
  /**
   * @minLength `1`
   * @maxLength `255`
   * @pattern `^.+$`
   */
  Name: string;
  /**
   * @minLength `1`
   * @maxLength `500`
   * @pattern `^.+$`
   */
  Regex: string;
};
/**
 * Type definition for `AWS::SageMaker::Algorithm.ModelInput`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-algorithm-modelinput.html}
 */
export type ModelInput = {
  DataInputConfig: string;
};
/**
 * Type definition for `AWS::SageMaker::Algorithm.ModelPackageContainerDefinition`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-algorithm-modelpackagecontainerdefinition.html}
 */
export type ModelPackageContainerDefinition = {
  /**
   * @maxLength `63`
   * @pattern `^[a-zA-Z0-9](-*[a-zA-Z0-9]){0,62}$`
   */
  ContainerHostname?: string;
  Environment?: Record<string, string>;
  Framework?: string;
  /**
   * @minLength `3`
   * @maxLength `10`
   * @pattern `^[0-9]\.[A-Za-z0-9.-]+$`
   */
  FrameworkVersion?: string;
  /**
   * @maxLength `255`
   */
  Image: string;
  /**
   * @maxLength `72`
   * @pattern `^[Ss][Hh][Aa]256:[0-9a-fA-F]{64}$`
   */
  ImageDigest?: string;
  IsCheckpoint?: boolean;
  ModelInput?: ModelInput;
  NearestModelName?: string;
};
/**
 * Type definition for `AWS::SageMaker::Algorithm.ParameterRange`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-algorithm-parameterrange.html}
 */
export type ParameterRange = {
  CategoricalParameterRangeSpecification?: CategoricalParameterRangeSpecification;
  ContinuousParameterRangeSpecification?: ContinuousParameterRangeSpecification;
  IntegerParameterRangeSpecification?: IntegerParameterRangeSpecification;
};
/**
 * Type definition for `AWS::SageMaker::Algorithm.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-algorithm-tag.html}
 */
export type Tag = {
  /**
   * @minLength `1`
   * @maxLength `128`
   */
  Key: string;
  /**
   * @minLength `0`
   * @maxLength `256`
   */
  Value: string;
};
/**
 * Type definition for `AWS::SageMaker::Algorithm.TrainingSpecification`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-algorithm-trainingspecification.html}
 */
export type TrainingSpecification = {
  /**
   * @maxLength `40`
   */
  MetricDefinitions?: MetricDefinition[];
  /**
   * @maxLength `100`
   */
  SupportedHyperParameters?: HyperParameterSpecification[];
  SupportedTrainingInstanceTypes: string[];
  SupportedTuningJobObjectiveMetrics?: HyperParameterTuningJobObjective[];
  SupportsDistributedTraining?: boolean;
  /**
   * @minLength `1`
   * @maxLength `8`
   */
  TrainingChannels: ChannelSpecification[];
  /**
   * @maxLength `255`
   */
  TrainingImage: string;
  /**
   * @maxLength `72`
   * @pattern `^[Ss][Hh][Aa]256:[0-9a-fA-F]{64}$`
   */
  TrainingImageDigest?: string;
};
/**
 * Resource Type definition for AWS::SageMaker::Algorithm
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-algorithm.html}
 */
export class SageMakerAlgorithm extends $Resource<
  "AWS::SageMaker::Algorithm",
  SageMakerAlgorithmProperties,
  SageMakerAlgorithmAttributes
> {
  public static readonly Type = "AWS::SageMaker::Algorithm";
  constructor(
    logicalId: string,
    properties: SageMakerAlgorithmProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, SageMakerAlgorithm.Type, properties, options);
  }
}
