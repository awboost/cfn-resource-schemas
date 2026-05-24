import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Definition of AWS::BedrockAgentCore::Harness resource type - a managed agentic loop service that provides a turnkey solution for running stateful, tool-equipped AI agents.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrockagentcore-harness.html}
 */
export type BedrockAgentCoreHarnessProperties = {
  /**
   * The tools that the agent is allowed to use.
   */
  AllowedTools?: string[];
  /**
   * The inbound authorization configuration for authenticating incoming requests.
   */
  AuthorizerConfiguration?: AuthorizerConfiguration;
  /**
   * The compute environment configuration for the harness, including underlying runtime information.
   */
  Environment?: HarnessEnvironmentProvider;
  /**
   * The environment artifact for the harness, such as a custom container image.
   */
  EnvironmentArtifact?: HarnessEnvironmentArtifact;
  /**
   * Environment variables to set in the harness runtime environment.
   */
  EnvironmentVariables?: Record<string, string>;
  /**
   * The ARN of the IAM role that the harness assumes when running.
   * @minLength `1`
   * @maxLength `2048`
   * @pattern `^arn:aws(-[^:]+)?:iam::[0-9]{12}:role/.+$`
   */
  ExecutionRoleArn: string;
  /**
   * The name of the harness.
   * @pattern `^[a-zA-Z][a-zA-Z0-9_]{0,39}$`
   */
  HarnessName: string;
  /**
   * The maximum number of iterations the agent loop can execute per invocation.
   */
  MaxIterations?: number;
  /**
   * The maximum number of tokens the agent can generate per iteration.
   */
  MaxTokens?: number;
  /**
   * The AgentCore Memory configuration for persisting conversation context.
   */
  Memory?: HarnessMemoryConfiguration;
  /**
   * The model configuration for the harness.
   */
  Model: HarnessModelConfiguration;
  /**
   * The skills available to the agent.
   */
  Skills?: HarnessSkill[];
  /**
   * The system prompt that defines the agent's behavior.
   */
  SystemPrompt?: HarnessSystemContentBlock[];
  /**
   * Tags to apply to the harness resource.
   * @maxLength `50`
   */
  Tags?: Tag[];
  /**
   * The maximum duration in seconds for the agent loop execution per invocation.
   */
  TimeoutSeconds?: number;
  /**
   * The tools available to the agent.
   */
  Tools?: HarnessTool[];
  /**
   * The truncation configuration for managing conversation context.
   */
  Truncation?: HarnessTruncationConfiguration;
};
/**
 * Attribute type definition for `AWS::BedrockAgentCore::Harness`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrockagentcore-harness.html#aws-resource-bedrockagentcore-harness-return-values}
 */
export type BedrockAgentCoreHarnessAttributes = {
  /**
   * The Amazon Resource Name (ARN) of the harness.
   * @pattern `^arn:([^:]+)?:bedrock-agentcore:[a-z0-9-]+:[0-9]{12}:harness/[a-zA-Z][a-zA-Z0-9_]{0,39}-[a-zA-Z0-9]{10}$`
   */
  Arn: string;
  /**
   * The timestamp when the harness was created.
   */
  CreatedAt: string;
  /**
   * The compute environment configuration for the harness, including underlying runtime information.
   */
  Environment: {
    AgentCoreRuntimeEnvironment: {
      /**
       * The ARN of the underlying AgentCore Runtime.
       * @minLength `20`
       * @maxLength `1011`
       */
      AgentRuntimeArn: string;
      /**
       * The ID of the underlying AgentCore Runtime.
       */
      AgentRuntimeId: string;
      /**
       * The name of the underlying AgentCore Runtime.
       */
      AgentRuntimeName: string;
    };
  };
  /**
   * The unique identifier of the harness.
   * @pattern `^[a-zA-Z][a-zA-Z0-9_]{0,39}-[a-zA-Z0-9]{10}$`
   */
  HarnessId: string;
  /**
   * The current status of the harness.
   */
  Status: HarnessStatus;
  /**
   * The timestamp when the harness was last updated.
   */
  UpdatedAt: string;
};
/**
 * Type definition for `AWS::BedrockAgentCore::Harness.AuthorizerConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrockagentcore-harness-authorizerconfiguration.html}
 */
export type AuthorizerConfiguration = {
  CustomJWTAuthorizer?: CustomJWTAuthorizerConfiguration;
};
/**
 * Type definition for `AWS::BedrockAgentCore::Harness.AuthorizingClaimMatchValueType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrockagentcore-harness-authorizingclaimmatchvaluetype.html}
 */
export type AuthorizingClaimMatchValueType = {
  ClaimMatchOperator: "EQUALS" | "CONTAINS" | "CONTAINS_ANY";
  ClaimMatchValue: ClaimMatchValueType;
};
/**
 * Type definition for `AWS::BedrockAgentCore::Harness.ClaimMatchValueType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrockagentcore-harness-claimmatchvaluetype.html}
 */
export type ClaimMatchValueType = {
  /**
   * @minLength `1`
   * @maxLength `255`
   * @pattern `^[A-Za-z0-9_.-]+$`
   */
  MatchValueString?: string;
  /**
   * @minLength `1`
   */
  MatchValueStringList?: string[];
};
/**
 * Type definition for `AWS::BedrockAgentCore::Harness.ContainerConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrockagentcore-harness-containerconfiguration.html}
 */
export type ContainerConfiguration = {
  /**
   * The ECR URI of the container.
   * @minLength `1`
   * @maxLength `1024`
   * @pattern `^(([0-9]{12})\.dkr\.ecr\.([a-z0-9-]+)\.amazonaws\.com(\.cn)?|public\.ecr\.aws)/((?:[a-z0-9]+(?:[._-][a-z0-9]+)/‍*)*[a-z0-9]+(?:[._-][a-z0-9]+)*)(?::([^:@]{1,300}))?(?:@(.+))?$`
   */
  ContainerUri: string;
};
/**
 * Type definition for `AWS::BedrockAgentCore::Harness.CustomClaimValidationType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrockagentcore-harness-customclaimvalidationtype.html}
 */
export type CustomClaimValidationType = {
  AuthorizingClaimMatchValue: AuthorizingClaimMatchValueType;
  /**
   * @minLength `1`
   * @maxLength `255`
   * @pattern `^[A-Za-z0-9_.-:]+$`
   */
  InboundTokenClaimName: string;
  InboundTokenClaimValueType: "STRING" | "STRING_ARRAY";
};
/**
 * Type definition for `AWS::BedrockAgentCore::Harness.CustomJWTAuthorizerConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrockagentcore-harness-customjwtauthorizerconfiguration.html}
 */
export type CustomJWTAuthorizerConfiguration = {
  /**
   * @minLength `1`
   */
  AllowedAudience?: string[];
  /**
   * @minLength `1`
   */
  AllowedClients?: string[];
  /**
   * @minLength `1`
   */
  AllowedScopes?: string[];
  /**
   * @minLength `1`
   */
  CustomClaims?: CustomClaimValidationType[];
  /**
   * @pattern `^.+/\.well-known/openid-configuration$`
   */
  DiscoveryUrl: string;
};
/**
 * Type definition for `AWS::BedrockAgentCore::Harness.FilesystemConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrockagentcore-harness-filesystemconfiguration.html}
 */
export type FilesystemConfiguration = {
  SessionStorage: SessionStorageConfiguration;
};
/**
 * Type definition for `AWS::BedrockAgentCore::Harness.HarnessAgentCoreBrowserConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrockagentcore-harness-harnessagentcorebrowserconfig.html}
 */
export type HarnessAgentCoreBrowserConfig = {
  /**
   * @pattern `^arn:aws(-[^:]+)?:bedrock-agentcore:[a-z0-9-]+:(aws|[0-9]{12}):browser(-custom)?/(aws\.browser\.v1|[a-zA-Z][a-zA-Z0-9_]{0,47}-[a-zA-Z0-9]{10})$`
   */
  BrowserArn?: string;
};
/**
 * Type definition for `AWS::BedrockAgentCore::Harness.HarnessAgentCoreCodeInterpreterConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrockagentcore-harness-harnessagentcorecodeinterpreterconfig.html}
 */
export type HarnessAgentCoreCodeInterpreterConfig = {
  /**
   * @pattern `^arn:aws(-[^:]+)?:bedrock-agentcore:[a-z0-9-]+:(aws|[0-9]{12}):code-interpreter(-custom)?/(aws\.codeinterpreter\.v1|[a-zA-Z][a-zA-Z0-9_]{0,47}-[a-zA-Z0-9]{10})$`
   */
  CodeInterpreterArn?: string;
};
/**
 * Type definition for `AWS::BedrockAgentCore::Harness.HarnessAgentCoreGatewayConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrockagentcore-harness-harnessagentcoregatewayconfig.html}
 */
export type HarnessAgentCoreGatewayConfig = {
  /**
   * @pattern `^arn:aws(|-cn|-us-gov):bedrock-agentcore:[a-z0-9-]{1,20}:[0-9]{12}:gateway/([0-9a-z][-]?){1,48}-[a-z0-9]{10}$`
   */
  GatewayArn: string;
  OutboundAuth?: HarnessGatewayOutboundAuth;
};
/**
 * Type definition for `AWS::BedrockAgentCore::Harness.HarnessAgentCoreMemoryConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrockagentcore-harness-harnessagentcorememoryconfiguration.html}
 */
export type HarnessAgentCoreMemoryConfiguration = {
  ActorId?: string;
  /**
   * @pattern `^arn:aws:bedrock-agentcore:[a-z0-9-]+:[0-9]{12}:memory/[a-zA-Z][a-zA-Z0-9-_]{0,99}-[a-zA-Z0-9]{10}$`
   */
  Arn: string;
  MessagesCount?: number;
  RetrievalConfig?: Record<string, HarnessAgentCoreMemoryRetrievalConfig>;
};
/**
 * Type definition for `AWS::BedrockAgentCore::Harness.HarnessAgentCoreMemoryRetrievalConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrockagentcore-harness-harnessagentcorememoryretrievalconfig.html}
 */
export type HarnessAgentCoreMemoryRetrievalConfig = {
  RelevanceScore?: number;
  StrategyId?: string;
  TopK?: number;
};
/**
 * Type definition for `AWS::BedrockAgentCore::Harness.HarnessAgentCoreRuntimeEnvironment`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrockagentcore-harness-harnessagentcoreruntimeenvironment.html}
 */
export type HarnessAgentCoreRuntimeEnvironment = {
  /**
   * @minLength `0`
   * @maxLength `1`
   */
  FilesystemConfigurations?: FilesystemConfiguration[];
  LifecycleConfiguration?: LifecycleConfiguration;
  NetworkConfiguration?: NetworkConfiguration;
};
/**
 * Type definition for `AWS::BedrockAgentCore::Harness.HarnessBedrockModelConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrockagentcore-harness-harnessbedrockmodelconfig.html}
 */
export type HarnessBedrockModelConfig = {
  /**
   * @min `1`
   */
  MaxTokens?: number;
  ModelId: string;
  /**
   * @min `0`
   * @max `2`
   */
  Temperature?: number;
  /**
   * @min `0`
   * @max `1`
   */
  TopP?: number;
};
/**
 * Type definition for `AWS::BedrockAgentCore::Harness.HarnessEnvironmentArtifact`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrockagentcore-harness-harnessenvironmentartifact.html}
 */
export type HarnessEnvironmentArtifact = {
  ContainerConfiguration?: ContainerConfiguration;
};
/**
 * Type definition for `AWS::BedrockAgentCore::Harness.HarnessEnvironmentProvider`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrockagentcore-harness-harnessenvironmentprovider.html}
 */
export type HarnessEnvironmentProvider = {
  AgentCoreRuntimeEnvironment?: HarnessAgentCoreRuntimeEnvironment;
};
/**
 * Type definition for `AWS::BedrockAgentCore::Harness.HarnessGatewayOutboundAuth`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrockagentcore-harness-harnessgatewayoutboundauth.html}
 */
export type HarnessGatewayOutboundAuth = {
  AwsIam?: Record<string, any>;
  None?: Record<string, any>;
  Oauth?: OAuthCredentialProvider;
};
/**
 * Type definition for `AWS::BedrockAgentCore::Harness.HarnessGeminiModelConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrockagentcore-harness-harnessgeminimodelconfig.html}
 */
export type HarnessGeminiModelConfig = {
  /**
   * @pattern `^arn:aws:bedrock-agentcore:[a-z0-9-]+:[0-9]{12}:token-vault/[a-zA-Z0-9-.]+/apikeycredentialprovider/[a-zA-Z0-9-.]+$`
   */
  ApiKeyArn: string;
  /**
   * @min `1`
   */
  MaxTokens?: number;
  ModelId: string;
  /**
   * @min `0`
   * @max `2`
   */
  Temperature?: number;
  /**
   * @min `0`
   * @max `500`
   */
  TopK?: number;
  /**
   * @min `0`
   * @max `1`
   */
  TopP?: number;
};
/**
 * Type definition for `AWS::BedrockAgentCore::Harness.HarnessInlineFunctionConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrockagentcore-harness-harnessinlinefunctionconfig.html}
 */
export type HarnessInlineFunctionConfig = {
  /**
   * @minLength `1`
   * @maxLength `4096`
   */
  Description: string;
  /**
   * JSON Schema describing the tool's input parameters.
   */
  InputSchema: Record<string, any>;
};
/**
 * Type definition for `AWS::BedrockAgentCore::Harness.HarnessMemoryConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrockagentcore-harness-harnessmemoryconfiguration.html}
 */
export type HarnessMemoryConfiguration = {
  AgentCoreMemoryConfiguration?: HarnessAgentCoreMemoryConfiguration;
};
/**
 * Type definition for `AWS::BedrockAgentCore::Harness.HarnessModelConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrockagentcore-harness-harnessmodelconfiguration.html}
 */
export type HarnessModelConfiguration = {
  BedrockModelConfig?: HarnessBedrockModelConfig;
  GeminiModelConfig?: HarnessGeminiModelConfig;
  OpenAiModelConfig?: HarnessOpenAiModelConfig;
};
/**
 * Type definition for `AWS::BedrockAgentCore::Harness.HarnessOpenAiModelConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrockagentcore-harness-harnessopenaimodelconfig.html}
 */
export type HarnessOpenAiModelConfig = {
  /**
   * @pattern `^arn:aws:bedrock-agentcore:[a-z0-9-]+:[0-9]{12}:token-vault/[a-zA-Z0-9-.]+/apikeycredentialprovider/[a-zA-Z0-9-.]+$`
   */
  ApiKeyArn: string;
  /**
   * @min `1`
   */
  MaxTokens?: number;
  ModelId: string;
  /**
   * @min `0`
   * @max `2`
   */
  Temperature?: number;
  /**
   * @min `0`
   * @max `1`
   */
  TopP?: number;
};
/**
 * Type definition for `AWS::BedrockAgentCore::Harness.HarnessRemoteMcpConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrockagentcore-harness-harnessremotemcpconfig.html}
 */
export type HarnessRemoteMcpConfig = {
  Headers?: Record<string, string>;
  /**
   * @minLength `1`
   * @maxLength `16383`
   */
  Url: string;
};
/**
 * Type definition for `AWS::BedrockAgentCore::Harness.HarnessSkill`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrockagentcore-harness-harnessskill.html}
 */
export type HarnessSkill = {
  /**
   * The filesystem path to the skill definition.
   * @minLength `1`
   */
  Path: string;
};
/**
 * Type definition for `AWS::BedrockAgentCore::Harness.HarnessSlidingWindowConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrockagentcore-harness-harnessslidingwindowconfiguration.html}
 */
export type HarnessSlidingWindowConfiguration = {
  MessagesCount?: number;
};
/**
 * Type definition for `AWS::BedrockAgentCore::Harness.HarnessStatus`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrockagentcore-harness-harnessstatus.html}
 */
export type HarnessStatus =
  | "CREATING"
  | "CREATE_FAILED"
  | "UPDATING"
  | "UPDATE_FAILED"
  | "READY"
  | "DELETING"
  | "DELETE_FAILED";
/**
 * Type definition for `AWS::BedrockAgentCore::Harness.HarnessSummarizationConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrockagentcore-harness-harnesssummarizationconfiguration.html}
 */
export type HarnessSummarizationConfiguration = {
  PreserveRecentMessages?: number;
  SummarizationSystemPrompt?: string;
  SummaryRatio?: number;
};
/**
 * Type definition for `AWS::BedrockAgentCore::Harness.HarnessSystemContentBlock`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrockagentcore-harness-harnesssystemcontentblock.html}
 */
export type HarnessSystemContentBlock = {
  /**
   * The text content of the system prompt block.
   * @minLength `1`
   */
  Text: string;
};
/**
 * Type definition for `AWS::BedrockAgentCore::Harness.HarnessTool`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrockagentcore-harness-harnesstool.html}
 */
export type HarnessTool = {
  Config?: HarnessToolConfiguration;
  /**
   * @minLength `1`
   * @maxLength `64`
   * @pattern `^[a-zA-Z0-9_-]+$`
   */
  Name?: string;
  Type:
    | "remote_mcp"
    | "agentcore_browser"
    | "agentcore_gateway"
    | "inline_function"
    | "agentcore_code_interpreter";
};
/**
 * Type definition for `AWS::BedrockAgentCore::Harness.HarnessToolConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrockagentcore-harness-harnesstoolconfiguration.html}
 */
export type HarnessToolConfiguration = {
  AgentCoreBrowser?: HarnessAgentCoreBrowserConfig;
  AgentCoreCodeInterpreter?: HarnessAgentCoreCodeInterpreterConfig;
  AgentCoreGateway?: HarnessAgentCoreGatewayConfig;
  InlineFunction?: HarnessInlineFunctionConfig;
  RemoteMcp?: HarnessRemoteMcpConfig;
};
/**
 * Type definition for `AWS::BedrockAgentCore::Harness.HarnessTruncationConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrockagentcore-harness-harnesstruncationconfiguration.html}
 */
export type HarnessTruncationConfiguration = {
  Config?: HarnessTruncationStrategyConfiguration;
  Strategy: "sliding_window" | "summarization" | "none";
};
/**
 * Type definition for `AWS::BedrockAgentCore::Harness.HarnessTruncationStrategyConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrockagentcore-harness-harnesstruncationstrategyconfiguration.html}
 */
export type HarnessTruncationStrategyConfiguration = {
  SlidingWindow?: HarnessSlidingWindowConfiguration;
  Summarization?: HarnessSummarizationConfiguration;
};
/**
 * Type definition for `AWS::BedrockAgentCore::Harness.LifecycleConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrockagentcore-harness-lifecycleconfiguration.html}
 */
export type LifecycleConfiguration = {
  /**
   * @min `60`
   * @max `28800`
   */
  IdleRuntimeSessionTimeout?: number;
  /**
   * @min `60`
   * @max `28800`
   */
  MaxLifetime?: number;
};
/**
 * Type definition for `AWS::BedrockAgentCore::Harness.NetworkConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrockagentcore-harness-networkconfiguration.html}
 */
export type NetworkConfiguration = {
  NetworkMode: "PUBLIC" | "VPC";
  NetworkModeConfig?: VpcConfig;
};
/**
 * Type definition for `AWS::BedrockAgentCore::Harness.OAuthCredentialProvider`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrockagentcore-harness-oauthcredentialprovider.html}
 */
export type OAuthCredentialProvider = {
  CustomParameters?: Record<string, string>;
  /**
   * @minLength `1`
   * @maxLength `2048`
   * @pattern `^\w+:(\/?\/?)[^\s]+$`
   */
  DefaultReturnUrl?: string;
  GrantType?: "CLIENT_CREDENTIALS" | "AUTHORIZATION_CODE";
  /**
   * @pattern `^arn:([^:]*):([^:]*):([^:]*):([0-9]{12})?:(.+)$`
   */
  ProviderArn: string;
  /**
   * @maxLength `100`
   */
  Scopes: string[];
};
/**
 * Type definition for `AWS::BedrockAgentCore::Harness.SessionStorageConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrockagentcore-harness-sessionstorageconfiguration.html}
 */
export type SessionStorageConfiguration = {
  /**
   * @minLength `6`
   * @maxLength `200`
   * @pattern `^/mnt/[a-zA-Z0-9._-]+/?$`
   */
  MountPath: string;
};
/**
 * Type definition for `AWS::BedrockAgentCore::Harness.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrockagentcore-harness-tag.html}
 */
export type Tag = {
  /**
   * @minLength `1`
   * @maxLength `128`
   * @pattern `^[a-zA-Z0-9\s_.:/=+\-@]*$`
   */
  Key: string;
  /**
   * @minLength `0`
   * @maxLength `256`
   * @pattern `^[a-zA-Z0-9\s_.:/=+\-@]*$`
   */
  Value: string;
};
/**
 * Type definition for `AWS::BedrockAgentCore::Harness.VpcConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrockagentcore-harness-vpcconfig.html}
 */
export type VpcConfig = {
  /**
   * @minLength `1`
   * @maxLength `16`
   */
  SecurityGroups: string[];
  /**
   * @minLength `1`
   * @maxLength `16`
   */
  Subnets: string[];
};
/**
 * Definition of AWS::BedrockAgentCore::Harness resource type - a managed agentic loop service that provides a turnkey solution for running stateful, tool-equipped AI agents.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrockagentcore-harness.html}
 */
export class BedrockAgentCoreHarness extends $Resource<
  "AWS::BedrockAgentCore::Harness",
  BedrockAgentCoreHarnessProperties,
  BedrockAgentCoreHarnessAttributes
> {
  public static readonly Type = "AWS::BedrockAgentCore::Harness";
  constructor(
    logicalId: string,
    properties: BedrockAgentCoreHarnessProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, BedrockAgentCoreHarness.Type, properties, options);
  }
}
