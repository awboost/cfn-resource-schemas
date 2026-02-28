import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::BedrockAgentCore::Evaluator - Creates a custom evaluator for agent quality assessment using LLM-as-a-Judge configurations.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrockagentcore-evaluator.html}
 */
export type BedrockAgentCoreEvaluatorProperties = {
  /**
   * The description of the evaluator.
   * @minLength `1`
   * @maxLength `200`
   */
  Description?: string;
  /**
   * The configuration for the evaluator.
   */
  EvaluatorConfig: EvaluatorConfig;
  /**
   * The name of the evaluator. Must be unique within your account.
   * @pattern `^[a-zA-Z][a-zA-Z0-9_]{0,47}$`
   */
  EvaluatorName: string;
  /**
   * The evaluation level that determines the scope of evaluation.
   */
  Level: EvaluatorLevel;
  /**
   * A list of tags to assign to the evaluator.
   * @maxLength `50`
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::BedrockAgentCore::Evaluator`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrockagentcore-evaluator.html#aws-resource-bedrockagentcore-evaluator-return-values}
 */
export type BedrockAgentCoreEvaluatorAttributes = {
  /**
   * The timestamp when the evaluator was created.
   */
  CreatedAt: string;
  /**
   * The Amazon Resource Name (ARN) of the evaluator.
   * @pattern `^arn:(aws|aws-cn|aws-us-gov):bedrock-agentcore:[a-z0-9-]+:[0-9]{12}:evaluator/[a-zA-Z][a-zA-Z0-9-_]{0,99}-[a-zA-Z0-9]{10}$`
   */
  EvaluatorArn: string;
  /**
   * The unique identifier of the evaluator.
   * @pattern `^(Builtin.[a-zA-Z0-9_-]+|[a-zA-Z][a-zA-Z0-9-_]{0,99}-[a-zA-Z0-9]{10})$`
   */
  EvaluatorId: string;
  /**
   * The current status of the evaluator.
   */
  Status: EvaluatorStatus;
  /**
   * The timestamp when the evaluator was last updated.
   */
  UpdatedAt: string;
};
/**
 * Type definition for `AWS::BedrockAgentCore::Evaluator.BedrockEvaluatorModelConfig`.
 * The configuration for using Amazon Bedrock models in evaluator assessments.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrockagentcore-evaluator-bedrockevaluatormodelconfig.html}
 */
export type BedrockEvaluatorModelConfig = {
  /**
   * Additional model-specific request fields.
   */
  AdditionalModelRequestFields?: Record<string, any>;
  /**
   * The inference configuration parameters that control model behavior during evaluation.
   */
  InferenceConfig?: InferenceConfiguration;
  /**
   * The identifier of the Amazon Bedrock model to use for evaluation.
   */
  ModelId: string;
};
/**
 * Type definition for `AWS::BedrockAgentCore::Evaluator.CategoricalScaleDefinition`.
 * A categorical rating scale option.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrockagentcore-evaluator-categoricalscaledefinition.html}
 */
export type CategoricalScaleDefinition = {
  /**
   * The description that explains what this categorical rating represents.
   */
  Definition: string;
  /**
   * The label of this categorical rating option.
   * @minLength `1`
   * @maxLength `100`
   */
  Label: string;
};
/**
 * Type definition for `AWS::BedrockAgentCore::Evaluator.EvaluatorConfig`.
 * The configuration that defines how an evaluator assesses agent performance.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrockagentcore-evaluator-evaluatorconfig.html}
 */
export type EvaluatorConfig = {
  /**
   * The configuration for LLM-as-a-Judge evaluation.
   */
  LlmAsAJudge: LlmAsAJudgeEvaluatorConfig;
};
/**
 * Type definition for `AWS::BedrockAgentCore::Evaluator.EvaluatorLevel`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrockagentcore-evaluator-evaluatorlevel.html}
 */
export type EvaluatorLevel = "TOOL_CALL" | "TRACE" | "SESSION";
/**
 * Type definition for `AWS::BedrockAgentCore::Evaluator.EvaluatorModelConfig`.
 * The model configuration that specifies which foundation model to use for evaluation.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrockagentcore-evaluator-evaluatormodelconfig.html}
 */
export type EvaluatorModelConfig = {
  /**
   * The configuration for using Amazon Bedrock models in evaluator assessments.
   */
  BedrockEvaluatorModelConfig: BedrockEvaluatorModelConfig;
};
/**
 * Type definition for `AWS::BedrockAgentCore::Evaluator.EvaluatorStatus`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrockagentcore-evaluator-evaluatorstatus.html}
 */
export type EvaluatorStatus =
  | "ACTIVE"
  | "CREATING"
  | "CREATE_FAILED"
  | "UPDATING"
  | "UPDATE_FAILED"
  | "DELETING";
/**
 * Type definition for `AWS::BedrockAgentCore::Evaluator.InferenceConfiguration`.
 * The inference configuration parameters that control model behavior during evaluation.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrockagentcore-evaluator-inferenceconfiguration.html}
 */
export type InferenceConfiguration = {
  /**
   * The maximum number of tokens to generate in the model response.
   * @min `1`
   */
  MaxTokens?: number;
  /**
   * The temperature value that controls randomness in the model's responses.
   * @min `0`
   * @max `1`
   */
  Temperature?: number;
  /**
   * The top-p sampling parameter that controls the diversity of the model's responses.
   * @min `0`
   * @max `1`
   */
  TopP?: number;
};
/**
 * Type definition for `AWS::BedrockAgentCore::Evaluator.LlmAsAJudgeEvaluatorConfig`.
 * The configuration for LLM-as-a-Judge evaluation.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrockagentcore-evaluator-llmasajudgeevaluatorconfig.html}
 */
export type LlmAsAJudgeEvaluatorConfig = {
  /**
   * The evaluation instructions that guide the language model in assessing agent performance.
   */
  Instructions: string;
  /**
   * The model configuration that specifies which foundation model to use for evaluation.
   */
  ModelConfig: EvaluatorModelConfig;
  /**
   * The rating scale that defines how evaluators should score agent performance.
   */
  RatingScale: RatingScale;
};
/**
 * Type definition for `AWS::BedrockAgentCore::Evaluator.NumericalScaleDefinition`.
 * A numerical rating scale option.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrockagentcore-evaluator-numericalscaledefinition.html}
 */
export type NumericalScaleDefinition = {
  /**
   * The description that explains what this numerical rating represents.
   */
  Definition: string;
  /**
   * The label that describes this numerical rating option.
   * @minLength `1`
   * @maxLength `100`
   */
  Label: string;
  /**
   * The numerical value for this rating scale option.
   * @min `0`
   */
  Value: number;
};
/**
 * Type definition for `AWS::BedrockAgentCore::Evaluator.RatingScale`.
 * The rating scale that defines how evaluators should score agent performance.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrockagentcore-evaluator-ratingscale.html}
 */
export type RatingScale = {
  Categorical?: CategoricalScaleDefinition[];
  Numerical?: NumericalScaleDefinition[];
};
/**
 * Type definition for `AWS::BedrockAgentCore::Evaluator.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrockagentcore-evaluator-tag.html}
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
 * Resource Type definition for AWS::BedrockAgentCore::Evaluator - Creates a custom evaluator for agent quality assessment using LLM-as-a-Judge configurations.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrockagentcore-evaluator.html}
 */
export class BedrockAgentCoreEvaluator extends $Resource<
  "AWS::BedrockAgentCore::Evaluator",
  BedrockAgentCoreEvaluatorProperties,
  BedrockAgentCoreEvaluatorAttributes
> {
  public static readonly Type = "AWS::BedrockAgentCore::Evaluator";
  constructor(
    logicalId: string,
    properties: BedrockAgentCoreEvaluatorProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, BedrockAgentCoreEvaluator.Type, properties, options);
  }
}
