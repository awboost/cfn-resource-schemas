import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource schema for AWS::Personalize::Solution.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-personalize-solution.html}
 */
export type PersonalizeSolutionProperties = {
  /**
   * The ARN of the dataset group that provides the training data.
   * @maxLength `256`
   * @pattern `arn:([a-z\d-]+):personalize:.*:.*:.+`
   */
  DatasetGroupArn: string;
  /**
   * When your have multiple event types (using an EVENT_TYPE schema field), this parameter specifies which event type (for example, 'click' or 'like') is used for training the model. If you do not provide an eventType, Amazon Personalize will use all interactions for training with equal weight regardless of type.
   * @maxLength `256`
   */
  EventType?: string;
  /**
   * The name for the solution
   * @minLength `1`
   * @maxLength `63`
   * @pattern `^[a-zA-Z0-9][a-zA-Z0-9\-_]*`
   */
  Name: string;
  /**
   * Whether to perform automated machine learning (AutoML). The default is false. For this case, you must specify recipeArn.
   */
  PerformAutoML?: boolean;
  /**
   * Whether to perform hyperparameter optimization (HPO) on the specified or selected recipe. The default is false. When performing AutoML, this parameter is always true and you should not set it to false.
   */
  PerformHPO?: boolean;
  /**
   * The ARN of the recipe to use for model training. Only specified when performAutoML is false.
   * @maxLength `256`
   * @pattern `arn:([a-z\d-]+):personalize:.*:.*:.+`
   */
  RecipeArn?: string;
  /**
   * The configuration to use with the solution. When performAutoML is set to true, Amazon Personalize only evaluates the autoMLConfig section of the solution configuration.
   */
  SolutionConfig?: SolutionConfig;
};
/**
 * Attribute type definition for `AWS::Personalize::Solution`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-personalize-solution.html#aws-resource-personalize-solution-return-values}
 */
export type PersonalizeSolutionAttributes = {
  /**
   * The ARN of the solution
   * @maxLength `256`
   * @pattern `arn:([a-z\d-]+):personalize:.*:.*:.+`
   */
  SolutionArn: string;
};
/**
 * Type definition for `AWS::Personalize::Solution.CategoricalHyperParameterRange`.
 * Provides the name and values of a Categorical hyperparameter.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-personalize-solution-categoricalhyperparameterrange.html}
 */
export type CategoricalHyperParameterRange = {
  /**
   * The name of the hyperparameter.
   * @maxLength `256`
   */
  Name?: string;
  /**
   * A list of the categories for the hyperparameter.
   * @maxLength `100`
   */
  Values?: string[];
};
/**
 * Type definition for `AWS::Personalize::Solution.ContinuousHyperParameterRange`.
 * Provides the name and range of a continuous hyperparameter.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-personalize-solution-continuoushyperparameterrange.html}
 */
export type ContinuousHyperParameterRange = {
  /**
   * The maximum allowable value for the hyperparameter.
   * @min `-1000000`
   */
  MaxValue?: number;
  /**
   * The minimum allowable value for the hyperparameter.
   * @min `-1000000`
   */
  MinValue?: number;
  /**
   * The name of the hyperparameter.
   * @maxLength `256`
   */
  Name?: string;
};
/**
 * Type definition for `AWS::Personalize::Solution.IntegerHyperParameterRange`.
 * Provides the name and range of an integer-valued hyperparameter.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-personalize-solution-integerhyperparameterrange.html}
 */
export type IntegerHyperParameterRange = {
  /**
   * The maximum allowable value for the hyperparameter.
   * @max `1000000`
   */
  MaxValue?: number;
  /**
   * The minimum allowable value for the hyperparameter.
   * @min `-1000000`
   */
  MinValue?: number;
  /**
   * The name of the hyperparameter.
   * @maxLength `256`
   */
  Name?: string;
};
/**
 * Type definition for `AWS::Personalize::Solution.SolutionConfig`.
 * The configuration to use with the solution. When performAutoML is set to true, Amazon Personalize only evaluates the autoMLConfig section of the solution configuration.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-personalize-solution-solutionconfig.html}
 */
export type SolutionConfig = {
  /**
   * Lists the hyperparameter names and ranges.
   */
  AlgorithmHyperParameters?: Record<string, string>;
  /**
   * The AutoMLConfig object containing a list of recipes to search when AutoML is performed.
   */
  AutoMLConfig?: {
    /**
     * The metric to optimize.
     * @maxLength `256`
     */
    MetricName?: string;
    /**
     * The list of candidate recipes.
     * @maxLength `100`
     */
    RecipeList?: string[];
  };
  /**
   * Only events with a value greater than or equal to this threshold are used for training a model.
   * @maxLength `256`
   */
  EventValueThreshold?: string;
  /**
   * Lists the feature transformation parameters.
   */
  FeatureTransformationParameters?: Record<string, string>;
  /**
   * Describes the properties for hyperparameter optimization (HPO)
   */
  HpoConfig?: {
    /**
     * The hyperparameters and their allowable ranges
     */
    AlgorithmHyperParameterRanges?: {
      /**
       * The categorical hyperparameters and their ranges.
       * @maxLength `100`
       */
      CategoricalHyperParameterRanges?: CategoricalHyperParameterRange[];
      /**
       * The continuous hyperparameters and their ranges.
       * @maxLength `100`
       */
      ContinuousHyperParameterRanges?: ContinuousHyperParameterRange[];
      /**
       * The integer hyperparameters and their ranges.
       * @maxLength `100`
       */
      IntegerHyperParameterRanges?: IntegerHyperParameterRange[];
    };
    /**
     * The metric to optimize during HPO.
     */
    HpoObjective?: {
      /**
       * The name of the metric
       * @maxLength `256`
       */
      MetricName?: string;
      /**
       * A regular expression for finding the metric in the training job logs.
       * @maxLength `256`
       */
      MetricRegex?: string;
      /**
       * The type of the metric. Valid values are Maximize and Minimize.
       */
      Type?: "Maximize" | "Minimize";
    };
    /**
     * Describes the resource configuration for hyperparameter optimization (HPO).
     */
    HpoResourceConfig?: {
      /**
       * The maximum number of training jobs when you create a solution version. The maximum value for maxNumberOfTrainingJobs is 40.
       * @maxLength `256`
       */
      MaxNumberOfTrainingJobs?: string;
      /**
       * The maximum number of parallel training jobs when you create a solution version. The maximum value for maxParallelTrainingJobs is 10.
       * @maxLength `256`
       */
      MaxParallelTrainingJobs?: string;
    };
  };
};
/**
 * Resource schema for AWS::Personalize::Solution.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-personalize-solution.html}
 */
export class PersonalizeSolution extends $Resource<
  "AWS::Personalize::Solution",
  PersonalizeSolutionProperties,
  PersonalizeSolutionAttributes
> {
  public static readonly Type = "AWS::Personalize::Solution";
  constructor(
    logicalId: string,
    properties: PersonalizeSolutionProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, PersonalizeSolution.Type, properties, options);
  }
}
