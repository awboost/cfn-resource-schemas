import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::BedrockAgentCore::OnlineEvaluationConfig - Creates an online evaluation configuration for continuous monitoring of agent performance.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrockagentcore-onlineevaluationconfig.html}
 */
export type BedrockAgentCoreOnlineEvaluationConfigProperties = {
  /**
   * The data source configuration that specifies CloudWatch log groups and service names to monitor.
   */
  DataSourceConfig: DataSourceConfig;
  /**
   * The description of the online evaluation configuration.
   * @minLength `1`
   * @maxLength `200`
   */
  Description?: string;
  /**
   * The Amazon Resource Name (ARN) of the IAM role that grants permissions for evaluation.
   * @minLength `1`
   * @maxLength `2048`
   * @pattern `^arn:aws(-[^:]+)?:iam::([0-9]{12})?:role/.+$`
   */
  EvaluationExecutionRoleArn: string;
  /**
   * The list of evaluators to apply during online evaluation.
   * @minLength `1`
   * @maxLength `10`
   */
  Evaluators: EvaluatorReference[];
  /**
   * The name of the online evaluation configuration. Must be unique within your account.
   * @pattern `^[a-zA-Z][a-zA-Z0-9_]{0,47}$`
   */
  OnlineEvaluationConfigName: string;
  /**
   * The evaluation rule that defines sampling configuration, filters, and session detection settings.
   */
  Rule: Rule;
  /**
   * A list of tags to assign to the online evaluation configuration.
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::BedrockAgentCore::OnlineEvaluationConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrockagentcore-onlineevaluationconfig.html#aws-resource-bedrockagentcore-onlineevaluationconfig-return-values}
 */
export type BedrockAgentCoreOnlineEvaluationConfigAttributes = {
  /**
   * The timestamp when the online evaluation configuration was created.
   */
  CreatedAt: string;
  /**
   * The execution status indicating whether the online evaluation is currently running.
   */
  ExecutionStatus: ExecutionStatus;
  /**
   * The Amazon Resource Name (ARN) of the online evaluation configuration.
   * @pattern `^arn:(aws|aws-cn|aws-us-gov):bedrock-agentcore:[a-z0-9-]+:[0-9]{12}:online-evaluation-config/[a-zA-Z][a-zA-Z0-9-_]{0,99}-[a-zA-Z0-9]{10}$`
   */
  OnlineEvaluationConfigArn: string;
  /**
   * The unique identifier of the online evaluation configuration.
   * @pattern `^[a-zA-Z][a-zA-Z0-9-_]{0,99}-[a-zA-Z0-9]{10}$`
   */
  OnlineEvaluationConfigId: string;
  /**
   * The configuration that specifies where evaluation results should be written.
   */
  OutputConfig: {
    /**
     * The CloudWatch configuration for writing evaluation results.
     */
    CloudWatchConfig: {
      /**
       * The CloudWatch log group name for evaluation results.
       */
      LogGroupName: string;
    };
  };
  /**
   * The status of the online evaluation configuration.
   */
  Status: OnlineEvaluationConfigStatus;
  /**
   * The timestamp when the online evaluation configuration was last updated.
   */
  UpdatedAt: string;
};
/**
 * Type definition for `AWS::BedrockAgentCore::OnlineEvaluationConfig.CloudWatchLogsInputConfig`.
 * The configuration for reading agent traces from CloudWatch logs.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrockagentcore-onlineevaluationconfig-cloudwatchlogsinputconfig.html}
 */
export type CloudWatchLogsInputConfig = {
  /**
   * The list of CloudWatch log group names to monitor for agent traces.
   * @minLength `1`
   * @maxLength `5`
   */
  LogGroupNames: string[];
  /**
   * The list of service names to filter traces within the specified log groups.
   * @minLength `1`
   * @maxLength `1`
   */
  ServiceNames: string[];
};
/**
 * Type definition for `AWS::BedrockAgentCore::OnlineEvaluationConfig.CloudWatchOutputConfig`.
 * The CloudWatch configuration for writing evaluation results.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrockagentcore-onlineevaluationconfig-cloudwatchoutputconfig.html}
 */
export type CloudWatchOutputConfig = {
  /**
   * The CloudWatch log group name for evaluation results.
   */
  LogGroupName?: string;
};
/**
 * Type definition for `AWS::BedrockAgentCore::OnlineEvaluationConfig.DataSourceConfig`.
 * The configuration that specifies where to read agent traces for online evaluation.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrockagentcore-onlineevaluationconfig-datasourceconfig.html}
 */
export type DataSourceConfig = {
  /**
   * The configuration for reading agent traces from CloudWatch logs.
   */
  CloudWatchLogs: CloudWatchLogsInputConfig;
};
/**
 * Type definition for `AWS::BedrockAgentCore::OnlineEvaluationConfig.EvaluatorReference`.
 * The reference to an evaluator used in online evaluation configurations.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrockagentcore-onlineevaluationconfig-evaluatorreference.html}
 */
export type EvaluatorReference = {
  /**
   * The unique identifier of the evaluator.
   * @pattern `^(Builtin\.[a-zA-Z0-9_-]+|[a-zA-Z][a-zA-Z0-9-_]{0,99}-[a-zA-Z0-9]{10})$`
   */
  EvaluatorId: string;
};
/**
 * Type definition for `AWS::BedrockAgentCore::OnlineEvaluationConfig.ExecutionStatus`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrockagentcore-onlineevaluationconfig-executionstatus.html}
 */
export type ExecutionStatus = "ENABLED" | "DISABLED";
/**
 * Type definition for `AWS::BedrockAgentCore::OnlineEvaluationConfig.Filter`.
 * The filter that applies conditions to agent traces during online evaluation.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrockagentcore-onlineevaluationconfig-filter.html}
 */
export type Filter = {
  /**
   * The key or field name to filter on within the agent trace data.
   * @minLength `1`
   * @maxLength `256`
   * @pattern `^[a-zA-Z0-9._-]+$`
   */
  Key: string;
  /**
   * The comparison operator to use for filtering.
   */
  Operator:
    | "Equals"
    | "NotEquals"
    | "GreaterThan"
    | "LessThan"
    | "GreaterThanOrEqual"
    | "LessThanOrEqual"
    | "Contains"
    | "NotContains";
  /**
   * The value used in filter comparisons.
   */
  Value: FilterValue;
};
/**
 * Type definition for `AWS::BedrockAgentCore::OnlineEvaluationConfig.FilterValue`.
 * The value used in filter comparisons.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrockagentcore-onlineevaluationconfig-filtervalue.html}
 */
export type FilterValue = {
  /**
   * The boolean value for true/false filtering conditions.
   */
  BooleanValue?: boolean;
  /**
   * The numeric value for numerical filtering.
   */
  DoubleValue?: number;
  /**
   * The string value for text-based filtering.
   * @minLength `1`
   * @maxLength `1024`
   */
  StringValue?: string;
};
/**
 * Type definition for `AWS::BedrockAgentCore::OnlineEvaluationConfig.OnlineEvaluationConfigStatus`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrockagentcore-onlineevaluationconfig-onlineevaluationconfigstatus.html}
 */
export type OnlineEvaluationConfigStatus =
  | "ACTIVE"
  | "CREATING"
  | "CREATE_FAILED"
  | "UPDATING"
  | "UPDATE_FAILED"
  | "DELETING";
/**
 * Type definition for `AWS::BedrockAgentCore::OnlineEvaluationConfig.OutputConfig`.
 * The configuration that specifies where evaluation results should be written.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrockagentcore-onlineevaluationconfig-outputconfig.html}
 */
export type OutputConfig = {
  /**
   * The CloudWatch configuration for writing evaluation results.
   */
  CloudWatchConfig?: CloudWatchOutputConfig;
};
/**
 * Type definition for `AWS::BedrockAgentCore::OnlineEvaluationConfig.Rule`.
 * The evaluation rule that defines sampling configuration, filtering criteria, and session detection settings.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrockagentcore-onlineevaluationconfig-rule.html}
 */
export type Rule = {
  /**
   * The list of filters that determine which agent traces should be included in the evaluation.
   * @minLength `0`
   * @maxLength `5`
   */
  Filters?: Filter[];
  /**
   * The configuration that controls what percentage of agent traces are sampled for evaluation.
   */
  SamplingConfig: SamplingConfig;
  /**
   * The configuration that defines how agent sessions are detected.
   */
  SessionConfig?: SessionConfig;
};
/**
 * Type definition for `AWS::BedrockAgentCore::OnlineEvaluationConfig.SamplingConfig`.
 * The configuration that controls what percentage of agent traces are sampled for evaluation.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrockagentcore-onlineevaluationconfig-samplingconfig.html}
 */
export type SamplingConfig = {
  /**
   * The percentage of agent traces to sample for evaluation.
   * @min `0.01`
   * @max `100`
   */
  SamplingPercentage: number;
};
/**
 * Type definition for `AWS::BedrockAgentCore::OnlineEvaluationConfig.SessionConfig`.
 * The configuration that defines how agent sessions are detected.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrockagentcore-onlineevaluationconfig-sessionconfig.html}
 */
export type SessionConfig = {
  /**
   * The number of minutes of inactivity after which an agent session is considered complete.
   * @min `1`
   * @max `1440`
   */
  SessionTimeoutMinutes: number;
};
/**
 * Type definition for `AWS::BedrockAgentCore::OnlineEvaluationConfig.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrockagentcore-onlineevaluationconfig-tag.html}
 */
export type Tag = {
  /**
   * @minLength `1`
   * @maxLength `128`
   * @pattern `^(?!aws:)[a-zA-Z+-=._:/]+$`
   */
  Key: string;
  /**
   * @minLength `0`
   * @maxLength `256`
   */
  Value: string;
};
/**
 * Resource Type definition for AWS::BedrockAgentCore::OnlineEvaluationConfig - Creates an online evaluation configuration for continuous monitoring of agent performance.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrockagentcore-onlineevaluationconfig.html}
 */
export class BedrockAgentCoreOnlineEvaluationConfig extends $Resource<
  "AWS::BedrockAgentCore::OnlineEvaluationConfig",
  BedrockAgentCoreOnlineEvaluationConfigProperties,
  BedrockAgentCoreOnlineEvaluationConfigAttributes
> {
  public static readonly Type = "AWS::BedrockAgentCore::OnlineEvaluationConfig";
  constructor(
    logicalId: string,
    properties: BedrockAgentCoreOnlineEvaluationConfigProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      BedrockAgentCoreOnlineEvaluationConfig.Type,
      properties,
      options,
    );
  }
}
