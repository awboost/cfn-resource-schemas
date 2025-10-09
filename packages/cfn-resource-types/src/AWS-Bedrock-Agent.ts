import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Definition of AWS::Bedrock::Agent Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-agent.html}
 */
export type BedrockAgentProperties = {
  /**
   * List of ActionGroups
   */
  ActionGroups?: AgentActionGroup[];
  /**
   * Agent collaboration state
   */
  AgentCollaboration?: AgentCollaboration;
  /**
   * List of Agent Collaborators
   */
  AgentCollaborators?: AgentCollaborator[];
  /**
   * Name for a resource.
   * @pattern `^([0-9a-zA-Z][_-]?){1,100}$`
   */
  AgentName: string;
  /**
   * ARN of a IAM role.
   * @maxLength `2048`
   */
  AgentResourceRoleArn?: string;
  /**
   * Specifies whether to automatically prepare after creating or updating the agent.
   */
  AutoPrepare?: boolean;
  /**
   * Structure for custom orchestration
   */
  CustomOrchestration?: CustomOrchestration;
  /**
   * A KMS key ARN
   * @minLength `1`
   * @maxLength `2048`
   * @pattern `^arn:aws(-[^:]+)?:kms:[a-zA-Z0-9-]*:[0-9]{12}:key/[a-zA-Z0-9-]{36}$`
   */
  CustomerEncryptionKeyArn?: string;
  /**
   * Description of the Resource.
   * @minLength `1`
   * @maxLength `200`
   */
  Description?: string;
  /**
   * ARN or name of a Bedrock model.
   * @minLength `1`
   * @maxLength `2048`
   * @pattern `^arn:aws(-[^:]+)?:bedrock:[a-z0-9-]{1,20}:(([0-9]{12}:custom-model/[a-z0-9-]{1,63}[.]{1}[a-z0-9-]{1,63}(([:][a-z0-9-]{1,63}){0,2})?/[a-z0-9]{12})|(:foundation-model/([a-z0-9-]{1,63}[.]{1}[a-z0-9-]{1,63}([.]?[a-z0-9-]{1,63})([:][a-z0-9-]{1,63}){0,2}))|([0-9]{12}:(inference-profile|application-inference-profile)/[a-zA-Z0-9-:.]+))|(([a-z0-9-]{1,63}[.]{1}[a-z0-9-]{1,63}([.]?[a-z0-9-]{1,63})([:][a-z0-9-]{1,63}){0,2}))|(([0-9a-zA-Z][_-]?)+)$`
   */
  FoundationModel?: string;
  /**
   * Configuration for a guardrail.
   */
  GuardrailConfiguration?: GuardrailConfiguration;
  /**
   * Max Session Time.
   * @min `60`
   * @max `5400`
   */
  IdleSessionTTLInSeconds?: number;
  /**
   * Instruction for the agent.
   * @minLength `40`
   */
  Instruction?: string;
  /**
   * List of Agent Knowledge Bases
   */
  KnowledgeBases?: AgentKnowledgeBase[];
  /**
   * Configuration for memory storage
   */
  MemoryConfiguration?: MemoryConfiguration;
  /**
   * Types of orchestration strategy for agents
   */
  OrchestrationType?: OrchestrationType;
  /**
   * Configuration for prompt override.
   */
  PromptOverrideConfiguration?: PromptOverrideConfiguration;
  /**
   * Specifies whether to allow deleting agent while it is in use.
   */
  SkipResourceInUseCheckOnDelete?: boolean;
  /**
   * A map of tag keys and values
   */
  Tags?: TagsMap;
  /**
   * A map of tag keys and values
   */
  TestAliasTags?: TagsMap;
};
/**
 * Attribute type definition for `AWS::Bedrock::Agent`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-agent.html#aws-resource-bedrock-agent-return-values}
 */
export type BedrockAgentAttributes = {
  /**
   * Arn representation of the Agent.
   * @maxLength `2048`
   * @pattern `^arn:aws(-[^:]+)?:bedrock:[a-z0-9-]{1,20}:[0-9]{12}:agent/[0-9a-zA-Z]{10}$`
   */
  AgentArn: string;
  /**
   * Identifier for a resource.
   * @pattern `^[0-9a-zA-Z]{10}$`
   */
  AgentId: string;
  /**
   * Schema Type for Action APIs.
   */
  AgentStatus: AgentStatus;
  /**
   * Draft Agent Version.
   * @minLength `5`
   * @maxLength `5`
   * @pattern `^DRAFT$`
   */
  AgentVersion: string;
  /**
   * Time Stamp.
   */
  CreatedAt: string;
  /**
   * Failure Reasons for Error.
   * @maxLength `2048`
   */
  FailureReasons: string[];
  /**
   * Time Stamp.
   */
  PreparedAt: string;
  /**
   * The recommended actions users can take to resolve an error in failureReasons.
   * @maxLength `2048`
   */
  RecommendedActions: string[];
  /**
   * Time Stamp.
   */
  UpdatedAt: string;
};
/**
 * Type definition for `AWS::Bedrock::Agent.ActionGroupExecutor`.
 * Type of Executors for an Action Group
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-agent-actiongroupexecutor.html}
 */
export type ActionGroupExecutor =
  | {
      /**
       * ARN of a Lambda.
       * @maxLength `2048`
       * @pattern `^arn:(aws[a-zA-Z-]*)?:lambda:[a-z0-9-]{1,20}:\d{12}:function:[a-zA-Z0-9-_\.]+(:(\$LATEST|[a-zA-Z0-9-_]+))?$`
       */
      Lambda: string;
    }
  | {
      /**
       * Custom control of action execution
       */
      CustomControl: CustomControlMethod;
    };
/**
 * Type definition for `AWS::Bedrock::Agent.ActionGroupSignature`.
 * Action Group Signature for a BuiltIn Action
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-agent-actiongroupsignature.html}
 */
export type ActionGroupSignature =
  | "AMAZON.UserInput"
  | "AMAZON.CodeInterpreter";
/**
 * Type definition for `AWS::Bedrock::Agent.ActionGroupState`.
 * State of the action group
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-agent-actiongroupstate.html}
 */
export type ActionGroupState = "ENABLED" | "DISABLED";
/**
 * Type definition for `AWS::Bedrock::Agent.AdditionalModelRequestFields`.
 * Additional Model Request Fields for Prompt Configuration
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-agent-additionalmodelrequestfields.html}
 */
export type AdditionalModelRequestFields = Record<string, any>;
/**
 * Type definition for `AWS::Bedrock::Agent.AgentActionGroup`.
 * Contains the information of an Agent Action Group
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-agent-agentactiongroup.html}
 */
export type AgentActionGroup = {
  /**
   * Type of Executors for an Action Group
   */
  ActionGroupExecutor?: ActionGroupExecutor;
  /**
   * Name of the action group
   * @pattern `^([0-9a-zA-Z][_-]?){1,100}$`
   */
  ActionGroupName: string;
  /**
   * State of the action group
   */
  ActionGroupState?: ActionGroupState;
  /**
   * Contains information about the API Schema for the Action Group
   */
  ApiSchema?: APISchema;
  /**
   * Description of action group
   * @minLength `1`
   * @maxLength `200`
   */
  Description?: string;
  /**
   * Schema of Functions
   */
  FunctionSchema?: FunctionSchema;
  /**
   * Action Group Signature for a BuiltIn Action
   */
  ParentActionGroupSignature?: ActionGroupSignature;
  /**
   * Specifies whether to allow deleting action group while it is in use.
   */
  SkipResourceInUseCheckOnDelete?: boolean;
};
/**
 * Type definition for `AWS::Bedrock::Agent.AgentCollaboration`.
 * Agent collaboration state
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-agent-agentcollaboration.html}
 */
export type AgentCollaboration =
  | "DISABLED"
  | "SUPERVISOR"
  | "SUPERVISOR_ROUTER";
/**
 * Type definition for `AWS::Bedrock::Agent.AgentCollaborator`.
 * Agent Collaborator
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-agent-agentcollaborator.html}
 */
export type AgentCollaborator = {
  /**
   * Agent descriptor for agent collaborator
   */
  AgentDescriptor: {
    /**
     * Alias ARN for agent descriptor
     * @pattern `^arn:(aws[a-zA-Z-]*)?:bedrock:[a-z0-9-]{1,20}:[0-9]{12}:agent-alias/[0-9a-zA-Z]{10}/[0-9a-zA-Z]{10}$`
     */
    AliasArn?: string;
  };
  /**
   * Agent collaborator instruction
   */
  CollaborationInstruction: string;
  /**
   * Agent collaborator name
   */
  CollaboratorName: string;
  /**
   * Relay conversation history state
   */
  RelayConversationHistory?: RelayConversationHistory;
};
/**
 * Type definition for `AWS::Bedrock::Agent.AgentKnowledgeBase`.
 * Agent Knowledge Base
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-agent-agentknowledgebase.html}
 */
export type AgentKnowledgeBase = {
  /**
   * Description of the Resource.
   * @minLength `1`
   * @maxLength `200`
   */
  Description: string;
  /**
   * Identifier for a resource.
   * @pattern `^[0-9a-zA-Z]{10}$`
   */
  KnowledgeBaseId: string;
  /**
   * State of the knowledge base; whether it is enabled or disabled
   */
  KnowledgeBaseState?: KnowledgeBaseState;
};
/**
 * Type definition for `AWS::Bedrock::Agent.AgentStatus`.
 * Schema Type for Action APIs.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-agent-agentstatus.html}
 */
export type AgentStatus =
  | "CREATING"
  | "PREPARING"
  | "PREPARED"
  | "NOT_PREPARED"
  | "DELETING"
  | "FAILED"
  | "VERSIONING"
  | "UPDATING";
/**
 * Type definition for `AWS::Bedrock::Agent.APISchema`.
 * Contains information about the API Schema for the Action Group
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-agent-apischema.html}
 */
export type APISchema =
  | {
      /**
       * The identifier for the S3 resource.
       */
      S3: S3Identifier;
    }
  | {
      /**
       * String OpenAPI Payload
       */
      Payload: string;
    };
/**
 * Type definition for `AWS::Bedrock::Agent.CreationMode`.
 * Creation Mode for Prompt Configuration.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-agent-creationmode.html}
 */
export type CreationMode = "DEFAULT" | "OVERRIDDEN";
/**
 * Type definition for `AWS::Bedrock::Agent.CustomControlMethod`.
 * Custom control of action execution
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-agent-customcontrolmethod.html}
 */
export type CustomControlMethod = "RETURN_CONTROL";
/**
 * Type definition for `AWS::Bedrock::Agent.CustomOrchestration`.
 * Structure for custom orchestration
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-agent-customorchestration.html}
 */
export type CustomOrchestration = {
  /**
   * Types of executors for custom orchestration strategy
   */
  Executor?: OrchestrationExecutor;
};
/**
 * Type definition for `AWS::Bedrock::Agent.Function`.
 * Function definition
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-agent-function.html}
 */
export type Function = {
  /**
   * Description of function
   * @minLength `1`
   * @maxLength `1200`
   */
  Description?: string;
  /**
   * Name for a resource.
   * @pattern `^([0-9a-zA-Z][_-]?){1,100}$`
   */
  Name: string;
  /**
   * A map of parameter name and detail
   */
  Parameters?: ParameterMap;
  /**
   * ENUM to check if action requires user confirmation
   */
  RequireConfirmation?: RequireConfirmation;
};
/**
 * Type definition for `AWS::Bedrock::Agent.FunctionSchema`.
 * Schema of Functions
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-agent-functionschema.html}
 */
export type FunctionSchema = {
  /**
   * List of Function definitions
   */
  Functions: Function[];
};
/**
 * Type definition for `AWS::Bedrock::Agent.GuardrailConfiguration`.
 * Configuration for a guardrail.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-agent-guardrailconfiguration.html}
 */
export type GuardrailConfiguration = {
  /**
   * Identifier for the guardrail, could be the id or the arn
   * @maxLength `2048`
   * @pattern `^(([a-z0-9]+)|(arn:aws(-[^:]+)?:bedrock:[a-z0-9-]{1,20}:[0-9]{12}:guardrail/[a-z0-9]+))$`
   */
  GuardrailIdentifier?: string;
  /**
   * Version of the guardrail
   * @pattern `^(([0-9]{1,8})|(DRAFT))$`
   */
  GuardrailVersion?: string;
};
/**
 * Type definition for `AWS::Bedrock::Agent.InferenceConfiguration`.
 * Configuration for inference in prompt configuration
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-agent-inferenceconfiguration.html}
 */
export type InferenceConfiguration = {
  /**
   * Maximum length of output
   * @min `0`
   * @max `131072`
   */
  MaximumLength?: number;
  /**
   * List of stop sequences
   * @minLength `0`
   * @maxLength `4`
   */
  StopSequences?: string[];
  /**
   * Controls randomness, higher values increase diversity
   * @min `0`
   * @max `1`
   */
  Temperature?: number;
  /**
   * Sample from the k most likely next tokens
   * @min `0`
   * @max `500`
   */
  TopK?: number;
  /**
   * Cumulative probability cutoff for token selection
   * @min `0`
   * @max `1`
   */
  TopP?: number;
};
/**
 * Type definition for `AWS::Bedrock::Agent.KnowledgeBaseState`.
 * State of the knowledge base; whether it is enabled or disabled
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-agent-knowledgebasestate.html}
 */
export type KnowledgeBaseState = "ENABLED" | "DISABLED";
/**
 * Type definition for `AWS::Bedrock::Agent.MemoryConfiguration`.
 * Configuration for memory storage
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-agent-memoryconfiguration.html}
 */
export type MemoryConfiguration = {
  /**
   * Types of session storage persisted in memory
   */
  EnabledMemoryTypes?: MemoryType[];
  /**
   * Configuration for Session Summarization
   */
  SessionSummaryConfiguration?: SessionSummaryConfiguration;
  /**
   * Maximum number of days to store session details
   */
  StorageDays?: number;
};
/**
 * Type definition for `AWS::Bedrock::Agent.MemoryType`.
 * Memory type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-agent-memorytype.html}
 */
export type MemoryType = "SESSION_SUMMARY";
/**
 * Type definition for `AWS::Bedrock::Agent.OrchestrationExecutor`.
 * Types of executors for custom orchestration strategy
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-agent-orchestrationexecutor.html}
 */
export type OrchestrationExecutor = {
  /**
   * ARN of a Lambda.
   * @maxLength `2048`
   * @pattern `^arn:(aws[a-zA-Z-]*)?:lambda:[a-z0-9-]{1,20}:\d{12}:function:[a-zA-Z0-9-_\.]+(:(\$LATEST|[a-zA-Z0-9-_]+))?$`
   */
  Lambda: string;
};
/**
 * Type definition for `AWS::Bedrock::Agent.OrchestrationType`.
 * Types of orchestration strategy for agents
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-agent-orchestrationtype.html}
 */
export type OrchestrationType = "DEFAULT" | "CUSTOM_ORCHESTRATION";
/**
 * Type definition for `AWS::Bedrock::Agent.ParameterDetail`.
 * Parameter detail
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-agent-parameterdetail.html}
 */
export type ParameterDetail = {
  /**
   * Description of function parameter.
   * @minLength `1`
   * @maxLength `500`
   */
  Description?: string;
  /**
   * Information about if a parameter is required for function call. Default to false.
   */
  Required?: boolean;
  /**
   * Parameter Type
   */
  Type: Type;
};
/**
 * Type definition for `AWS::Bedrock::Agent.ParameterMap`.
 * A map of parameter name and detail
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-agent-parametermap.html}
 */
export type ParameterMap = Record<string, ParameterDetail>;
/**
 * Type definition for `AWS::Bedrock::Agent.PromptConfiguration`.
 * BasePromptConfiguration per Prompt Type.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-agent-promptconfiguration.html}
 */
export type PromptConfiguration = {
  /**
   * Additional Model Request Fields for Prompt Configuration
   */
  AdditionalModelRequestFields?: AdditionalModelRequestFields;
  /**
   * Base Prompt Template.
   * @minLength `1`
   * @maxLength `100000`
   */
  BasePromptTemplate?: string;
  /**
   * ARN or name of a Bedrock model.
   * @minLength `1`
   * @maxLength `2048`
   * @pattern `^arn:aws(-[^:]+)?:bedrock:[a-z0-9-]{1,20}:(([0-9]{12}:custom-model/[a-z0-9-]{1,63}[.]{1}[a-z0-9-]{1,63}(([:][a-z0-9-]{1,63}){0,2})?/[a-z0-9]{12})|(:foundation-model/([a-z0-9-]{1,63}[.]{1}[a-z0-9-]{1,63}([.]?[a-z0-9-]{1,63})([:][a-z0-9-]{1,63}){0,2}))|([0-9]{12}:(inference-profile|application-inference-profile)/[a-zA-Z0-9-:.]+))|(([a-z0-9-]{1,63}[.]{1}[a-z0-9-]{1,63}([.]?[a-z0-9-]{1,63})([:][a-z0-9-]{1,63}){0,2}))|(([0-9a-zA-Z][_-]?)+)$`
   */
  FoundationModel?: string;
  /**
   * Configuration for inference in prompt configuration
   */
  InferenceConfiguration?: InferenceConfiguration;
  /**
   * Creation Mode for Prompt Configuration.
   */
  ParserMode?: CreationMode;
  /**
   * Creation Mode for Prompt Configuration.
   */
  PromptCreationMode?: CreationMode;
  /**
   * Prompt State.
   */
  PromptState?: PromptState;
  /**
   * Prompt Type.
   */
  PromptType?: PromptType;
};
/**
 * Type definition for `AWS::Bedrock::Agent.PromptOverrideConfiguration`.
 * Configuration for prompt override.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-agent-promptoverrideconfiguration.html}
 */
export type PromptOverrideConfiguration = {
  /**
   * ARN of a Lambda.
   * @maxLength `2048`
   * @pattern `^arn:(aws[a-zA-Z-]*)?:lambda:[a-z0-9-]{1,20}:\d{12}:function:[a-zA-Z0-9-_\.]+(:(\$LATEST|[a-zA-Z0-9-_]+))?$`
   */
  OverrideLambda?: string;
  /**
   * List of BasePromptConfiguration
   * @maxLength `10`
   */
  PromptConfigurations: PromptConfiguration[];
};
/**
 * Type definition for `AWS::Bedrock::Agent.PromptState`.
 * Prompt State.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-agent-promptstate.html}
 */
export type PromptState = "ENABLED" | "DISABLED";
/**
 * Type definition for `AWS::Bedrock::Agent.PromptType`.
 * Prompt Type.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-agent-prompttype.html}
 */
export type PromptType =
  | "PRE_PROCESSING"
  | "ORCHESTRATION"
  | "POST_PROCESSING"
  | "ROUTING_CLASSIFIER"
  | "MEMORY_SUMMARIZATION"
  | "KNOWLEDGE_BASE_RESPONSE_GENERATION";
/**
 * Type definition for `AWS::Bedrock::Agent.RelayConversationHistory`.
 * Relay conversation history state
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-agent-relayconversationhistory.html}
 */
export type RelayConversationHistory = "TO_COLLABORATOR" | "DISABLED";
/**
 * Type definition for `AWS::Bedrock::Agent.RequireConfirmation`.
 * ENUM to check if action requires user confirmation
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-agent-requireconfirmation.html}
 */
export type RequireConfirmation = "ENABLED" | "DISABLED";
/**
 * Type definition for `AWS::Bedrock::Agent.S3Identifier`.
 * The identifier for the S3 resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-agent-s3identifier.html}
 */
export type S3Identifier = {
  /**
   * A bucket in S3.
   * @minLength `3`
   * @maxLength `63`
   * @pattern `^[a-z0-9][\.\-a-z0-9]{1,61}[a-z0-9]$`
   */
  S3BucketName?: string;
  /**
   * A object key in S3.
   * @minLength `1`
   * @maxLength `1024`
   * @pattern `^[\.\-\!\*\_\'\(\)a-zA-Z0-9][\.\-\!\*\_\'\(\)\/a-zA-Z0-9]*$`
   */
  S3ObjectKey?: string;
};
/**
 * Type definition for `AWS::Bedrock::Agent.SessionSummaryConfiguration`.
 * Configuration for Session Summarization
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-agent-sessionsummaryconfiguration.html}
 */
export type SessionSummaryConfiguration = {
  /**
   * Maximum number of Sessions to Summarize
   */
  MaxRecentSessions?: number;
};
/**
 * Type definition for `AWS::Bedrock::Agent.TagsMap`.
 * A map of tag keys and values
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-agent-tagsmap.html}
 */
export type TagsMap = Record<string, string>;
/**
 * Type definition for `AWS::Bedrock::Agent.Type`.
 * Parameter Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-agent-type.html}
 */
export type Type = "string" | "number" | "integer" | "boolean" | "array";
/**
 * Definition of AWS::Bedrock::Agent Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-agent.html}
 */
export class BedrockAgent extends $Resource<
  "AWS::Bedrock::Agent",
  BedrockAgentProperties,
  BedrockAgentAttributes
> {
  public static readonly Type = "AWS::Bedrock::Agent";
  constructor(
    logicalId: string,
    properties: BedrockAgentProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, BedrockAgent.Type, properties, options);
  }
}
