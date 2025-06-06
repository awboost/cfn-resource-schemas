import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Definition of AWS::Bedrock::Flow Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-flow.html}
 */
export type BedrockFlowProperties = {
  /**
   * A KMS key ARN
   * @minLength `1`
   * @maxLength `2048`
   * @pattern `^arn:aws(|-cn|-us-gov):kms:[a-zA-Z0-9-]*:[0-9]{12}:key/[a-zA-Z0-9-]{36}$`
   */
  CustomerEncryptionKeyArn?: string;
  /**
   * Flow definition
   */
  Definition?: FlowDefinition;
  /**
   * A bucket, key and optional version pointing to an S3 object containing a UTF-8 encoded JSON string Definition with the same schema as the Definition property of this resource
   */
  DefinitionS3Location?: S3Location;
  /**
   * A JSON string containing a Definition with the same schema as the Definition property of this resource
   * @maxLength `512000`
   */
  DefinitionString?: string;
  /**
   * When supplied with DefinitionString or DefinitionS3Location, substrings in the definition matching ${keyname} will be replaced with the associated value from this map
   */
  DefinitionSubstitutions?: DefinitionSubstitutions;
  /**
   * Description of the flow
   * @minLength `1`
   * @maxLength `200`
   */
  Description?: string;
  /**
   * ARN of a IAM role
   * @maxLength `2048`
   * @pattern `^arn:aws(-[^:]+)?:iam::([0-9]{12})?:role/(service-role/)?.+$`
   */
  ExecutionRoleArn: string;
  /**
   * Name for the flow
   * @pattern `^([0-9a-zA-Z][_-]?){1,100}$`
   */
  Name: string;
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
 * Attribute type definition for `AWS::Bedrock::Flow`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-flow.html#aws-resource-bedrock-flow-return-values}
 */
export type BedrockFlowAttributes = {
  /**
   * Arn representation of the Flow
   * @minLength `20`
   * @maxLength `1011`
   * @pattern `^arn:aws(-[^:]+)?:bedrock:[a-z0-9-]{1,20}:[0-9]{12}:flow/[0-9a-zA-Z]{10}$`
   */
  Arn: string;
  /**
   * Time Stamp.
   */
  CreatedAt: string;
  /**
   * Identifier for a Flow
   * @pattern `^[0-9a-zA-Z]{10}$`
   */
  Id: string;
  /**
   * Schema Type for Flow APIs
   */
  Status: FlowStatus;
  /**
   * Time Stamp.
   */
  UpdatedAt: string;
  /**
   * List of flow validations
   */
  Validations: {
    /**
     * validation message
     */
    Message: string;
  }[];
  /**
   * Draft Version.
   * @minLength `5`
   * @maxLength `5`
   * @pattern `^DRAFT$`
   */
  Version: string;
};
/**
 * Type definition for `AWS::Bedrock::Flow.AdditionalModelRequestFields`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flow-additionalmodelrequestfields.html}
 */
export type AdditionalModelRequestFields = Record<string, any>;
/**
 * Type definition for `AWS::Bedrock::Flow.AgentFlowNodeConfiguration`.
 * Agent flow node configuration
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flow-agentflownodeconfiguration.html}
 */
export type AgentFlowNodeConfiguration = {
  /**
   * Arn representation of the Agent Alias.
   * @maxLength `2048`
   * @pattern `^arn:aws(-[^:]+)?:bedrock:[a-z0-9-]{1,20}:[0-9]{12}:agent-alias/[0-9a-zA-Z]{10}/[0-9a-zA-Z]{10}$`
   */
  AgentAliasArn: string;
};
/**
 * Type definition for `AWS::Bedrock::Flow.CollectorFlowNodeConfiguration`.
 * Collector flow node configuration
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flow-collectorflownodeconfiguration.html}
 */
export type CollectorFlowNodeConfiguration = Record<string, any>;
/**
 * Type definition for `AWS::Bedrock::Flow.ConditionFlowNodeConfiguration`.
 * Condition flow node configuration
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flow-conditionflownodeconfiguration.html}
 */
export type ConditionFlowNodeConfiguration = {
  /**
   * List of conditions in a condition node
   * @minLength `1`
   * @maxLength `5`
   */
  Conditions: FlowCondition[];
};
/**
 * Type definition for `AWS::Bedrock::Flow.DefinitionSubstitutions`.
 * When supplied with DefinitionString or DefinitionS3Location, substrings in the definition matching ${keyname} will be replaced with the associated value from this map
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flow-definitionsubstitutions.html}
 */
export type DefinitionSubstitutions = Record<string, string | number | boolean>;
/**
 * Type definition for `AWS::Bedrock::Flow.FieldForReranking`.
 * Field name for reranking
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flow-fieldforreranking.html}
 */
export type FieldForReranking = {
  /**
   * Field name for reranking
   * @minLength `1`
   * @maxLength `2000`
   */
  FieldName: string;
};
/**
 * Type definition for `AWS::Bedrock::Flow.FlowCondition`.
 * Condition branch for a condition node
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flow-flowcondition.html}
 */
export type FlowCondition = {
  /**
   * Expression for a condition in a flow
   * @minLength `1`
   * @maxLength `64`
   */
  Expression?: string;
  /**
   * Name of a condition in a flow
   * @pattern `^[a-zA-Z]([_]?[0-9a-zA-Z]){1,50}$`
   */
  Name: string;
};
/**
 * Type definition for `AWS::Bedrock::Flow.FlowConditionalConnectionConfiguration`.
 * Conditional connection configuration
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flow-flowconditionalconnectionconfiguration.html}
 */
export type FlowConditionalConnectionConfiguration = {
  /**
   * Name of a condition in a flow
   * @pattern `^[a-zA-Z]([_]?[0-9a-zA-Z]){1,50}$`
   */
  Condition: string;
};
/**
 * Type definition for `AWS::Bedrock::Flow.FlowConnection`.
 * Flow connection
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flow-flowconnection.html}
 */
export type FlowConnection = {
  /**
   * Connection configuration
   */
  Configuration?: FlowConnectionConfiguration;
  /**
   * Name of a connection in a flow
   * @pattern `^[a-zA-Z]([_]?[0-9a-zA-Z]){1,100}$`
   */
  Name: string;
  /**
   * Name of a node in a flow
   * @pattern `^[a-zA-Z]([_]?[0-9a-zA-Z]){1,50}$`
   */
  Source: string;
  /**
   * Name of a node in a flow
   * @pattern `^[a-zA-Z]([_]?[0-9a-zA-Z]){1,50}$`
   */
  Target: string;
  /**
   * Connection type
   */
  Type: FlowConnectionType;
};
/**
 * Type definition for `AWS::Bedrock::Flow.FlowConnectionConfiguration`.
 * Connection configuration
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flow-flowconnectionconfiguration.html}
 */
export type FlowConnectionConfiguration =
  | {
      /**
       * Data connection configuration
       */
      Data: FlowDataConnectionConfiguration;
    }
  | {
      /**
       * Conditional connection configuration
       */
      Conditional: FlowConditionalConnectionConfiguration;
    };
/**
 * Type definition for `AWS::Bedrock::Flow.FlowConnectionType`.
 * Connection type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flow-flowconnectiontype.html}
 */
export type FlowConnectionType = "Data" | "Conditional";
/**
 * Type definition for `AWS::Bedrock::Flow.FlowDataConnectionConfiguration`.
 * Data connection configuration
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flow-flowdataconnectionconfiguration.html}
 */
export type FlowDataConnectionConfiguration = {
  /**
   * Name of a node output in a flow
   * @pattern `^[a-zA-Z]([_]?[0-9a-zA-Z]){1,50}$`
   */
  SourceOutput: string;
  /**
   * Name of a node input in a flow
   * @pattern `^[a-zA-Z]([_]?[0-9a-zA-Z]){1,50}$`
   */
  TargetInput: string;
};
/**
 * Type definition for `AWS::Bedrock::Flow.FlowDefinition`.
 * Flow definition
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flow-flowdefinition.html}
 */
export type FlowDefinition = {
  /**
   * List of connections
   * @maxLength `100`
   */
  Connections?: FlowConnection[];
  /**
   * List of nodes in a flow
   * @maxLength `40`
   */
  Nodes?: FlowNode[];
};
/**
 * Type definition for `AWS::Bedrock::Flow.FlowNode`.
 * Internal mixin for flow node
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flow-flownode.html}
 */
export type FlowNode = {
  /**
   * Node configuration in a flow
   */
  Configuration?: FlowNodeConfiguration;
  /**
   * List of node inputs in a flow
   * @maxLength `20`
   */
  Inputs?: FlowNodeInput[];
  /**
   * Name of a node in a flow
   * @pattern `^[a-zA-Z]([_]?[0-9a-zA-Z]){1,50}$`
   */
  Name: string;
  /**
   * List of node outputs in a flow
   * @maxLength `5`
   */
  Outputs?: FlowNodeOutput[];
  /**
   * Flow node types
   */
  Type: FlowNodeType;
};
/**
 * Type definition for `AWS::Bedrock::Flow.FlowNodeConfiguration`.
 * Node configuration in a flow
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flow-flownodeconfiguration.html}
 */
export type FlowNodeConfiguration =
  | {
      /**
       * Input flow node configuration
       */
      Input: InputFlowNodeConfiguration;
    }
  | {
      /**
       * Output flow node configuration
       */
      Output: OutputFlowNodeConfiguration;
    }
  | {
      /**
       * Knowledge base flow node configuration
       */
      KnowledgeBase: KnowledgeBaseFlowNodeConfiguration;
    }
  | {
      /**
       * Condition flow node configuration
       */
      Condition: ConditionFlowNodeConfiguration;
    }
  | {
      /**
       * Lex flow node configuration
       */
      Lex: LexFlowNodeConfiguration;
    }
  | {
      /**
       * Prompt flow node configuration
       */
      Prompt: PromptFlowNodeConfiguration;
    }
  | {
      /**
       * Lambda function flow node configuration
       */
      LambdaFunction: LambdaFunctionFlowNodeConfiguration;
    }
  | {
      /**
       * Agent flow node configuration
       */
      Agent: AgentFlowNodeConfiguration;
    }
  | {
      /**
       * Storage flow node configuration
       */
      Storage: StorageFlowNodeConfiguration;
    }
  | {
      /**
       * Iterator flow node configuration
       */
      Iterator: IteratorFlowNodeConfiguration;
    }
  | {
      /**
       * Collector flow node configuration
       */
      Collector: CollectorFlowNodeConfiguration;
    }
  | {
      /**
       * Retrieval flow node configuration
       */
      Retrieval: RetrievalFlowNodeConfiguration;
    }
  | {
      /**
       * Inline code config strucuture, contains code configs
       */
      InlineCode: InlineCodeFlowNodeConfiguration;
    }
  | {
      /**
       * Loop node config, contains loop's internal definition
       */
      Loop: LoopFlowNodeConfiguration;
    }
  | {
      /**
       * Configuration for the LoopInput node
       */
      LoopInput: LoopInputFlowNodeConfiguration;
    }
  | {
      /**
       * Configuration for the LoopController node, which manages loop execution
       */
      LoopController: LoopControllerFlowNodeConfiguration;
    };
/**
 * Type definition for `AWS::Bedrock::Flow.FlowNodeInput`.
 * Input to a node in a flow
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flow-flownodeinput.html}
 */
export type FlowNodeInput = {
  /**
   * Optional tag to classify input type, currently exclusive to LoopNode
   */
  Category?: FlowNodeInputCategory;
  /**
   * Expression for a node input in a flow
   * @minLength `1`
   * @maxLength `64`
   */
  Expression: string;
  /**
   * Name of a node input in a flow
   * @pattern `^[a-zA-Z]([_]?[0-9a-zA-Z]){1,50}$`
   */
  Name: string;
  /**
   * Type of input/output for a node in a flow
   */
  Type: FlowNodeIODataType;
};
/**
 * Type definition for `AWS::Bedrock::Flow.FlowNodeInputCategory`.
 * Optional tag to classify input type, currently exclusive to LoopNode
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flow-flownodeinputcategory.html}
 */
export type FlowNodeInputCategory =
  | "LoopCondition"
  | "ReturnValueToLoopStart"
  | "ExitLoop";
/**
 * Type definition for `AWS::Bedrock::Flow.FlowNodeIODataType`.
 * Type of input/output for a node in a flow
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flow-flownodeiodatatype.html}
 */
export type FlowNodeIODataType =
  | "String"
  | "Number"
  | "Boolean"
  | "Object"
  | "Array";
/**
 * Type definition for `AWS::Bedrock::Flow.FlowNodeOutput`.
 * Output of a node in a flow
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flow-flownodeoutput.html}
 */
export type FlowNodeOutput = {
  /**
   * Name of a node output in a flow
   * @pattern `^[a-zA-Z]([_]?[0-9a-zA-Z]){1,50}$`
   */
  Name: string;
  /**
   * Type of input/output for a node in a flow
   */
  Type: FlowNodeIODataType;
};
/**
 * Type definition for `AWS::Bedrock::Flow.FlowNodeType`.
 * Flow node types
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flow-flownodetype.html}
 */
export type FlowNodeType =
  | "Input"
  | "Output"
  | "KnowledgeBase"
  | "Condition"
  | "Lex"
  | "Prompt"
  | "LambdaFunction"
  | "Agent"
  | "Storage"
  | "Retrieval"
  | "Iterator"
  | "Collector"
  | "InlineCode"
  | "Loop"
  | "LoopInput"
  | "LoopController";
/**
 * Type definition for `AWS::Bedrock::Flow.FlowStatus`.
 * Schema Type for Flow APIs
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flow-flowstatus.html}
 */
export type FlowStatus = "Failed" | "Prepared" | "Preparing" | "NotPrepared";
/**
 * Type definition for `AWS::Bedrock::Flow.FlowValidation`.
 * Validation for Flow
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flow-flowvalidation.html}
 */
export type FlowValidation = {
  /**
   * validation message
   */
  Message: string;
};
/**
 * Type definition for `AWS::Bedrock::Flow.GuardrailConfiguration`.
 * Configuration for a guardrail
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flow-guardrailconfiguration.html}
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
 * Type definition for `AWS::Bedrock::Flow.InlineCodeFlowNodeConfiguration`.
 * Inline code config strucuture, contains code configs
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flow-inlinecodeflownodeconfiguration.html}
 */
export type InlineCodeFlowNodeConfiguration = {
  /**
   * The inline code entered by customers. max size is 5MB.
   * @maxLength `5000000`
   */
  Code: string;
  /**
   * Enum encodes the supported language type
   */
  Language: SupportedLanguages;
};
/**
 * Type definition for `AWS::Bedrock::Flow.InputFlowNodeConfiguration`.
 * Input flow node configuration
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flow-inputflownodeconfiguration.html}
 */
export type InputFlowNodeConfiguration = Record<string, any>;
/**
 * Type definition for `AWS::Bedrock::Flow.IteratorFlowNodeConfiguration`.
 * Iterator flow node configuration
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flow-iteratorflownodeconfiguration.html}
 */
export type IteratorFlowNodeConfiguration = Record<string, any>;
/**
 * Type definition for `AWS::Bedrock::Flow.KnowledgeBaseFlowNodeConfiguration`.
 * Knowledge base flow node configuration
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flow-knowledgebaseflownodeconfiguration.html}
 */
export type KnowledgeBaseFlowNodeConfiguration = {
  /**
   * Configuration for a guardrail
   */
  GuardrailConfiguration?: GuardrailConfiguration;
  InferenceConfiguration?: PromptInferenceConfiguration;
  /**
   * Identifier of the KnowledgeBase
   * @maxLength `10`
   * @pattern `^[0-9a-zA-Z]+$`
   */
  KnowledgeBaseId: string;
  /**
   * ARN or Id of a Bedrock Foundational Model or Inference Profile, or the ARN of a imported model, or a provisioned throughput ARN for custom models.
   * @minLength `1`
   * @maxLength `2048`
   * @pattern `^(arn:aws(-[^:]{1,12})?:(bedrock|sagemaker):[a-z0-9-]{1,20}:([0-9]{12})?:([a-z-]+/)?)?([a-zA-Z0-9.-]{1,63}){0,2}(([:][a-z0-9-]{1,63}){0,2})?(/[a-z0-9]{1,12})?$`
   */
  ModelId?: string;
  /**
   * Number Of Results to Retrieve
   * @min `1`
   * @max `100`
   */
  NumberOfResults?: number;
  OrchestrationConfiguration?: KnowledgeBaseOrchestrationConfiguration;
  PromptTemplate?: KnowledgeBasePromptTemplate;
  RerankingConfiguration?: VectorSearchRerankingConfiguration;
};
/**
 * Type definition for `AWS::Bedrock::Flow.KnowledgeBaseOrchestrationConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flow-knowledgebaseorchestrationconfiguration.html}
 */
export type KnowledgeBaseOrchestrationConfiguration = {
  AdditionalModelRequestFields?: AdditionalModelRequestFields;
  InferenceConfig?: PromptInferenceConfiguration;
  PerformanceConfig?: PerformanceConfiguration;
  PromptTemplate?: KnowledgeBasePromptTemplate;
};
/**
 * Type definition for `AWS::Bedrock::Flow.KnowledgeBasePromptTemplate`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flow-knowledgebaseprompttemplate.html}
 */
export type KnowledgeBasePromptTemplate = {
  /**
   * @minLength `1`
   * @maxLength `100000`
   */
  TextPromptTemplate: string;
};
/**
 * Type definition for `AWS::Bedrock::Flow.LambdaFunctionFlowNodeConfiguration`.
 * Lambda function flow node configuration
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flow-lambdafunctionflownodeconfiguration.html}
 */
export type LambdaFunctionFlowNodeConfiguration = {
  /**
   * ARN of a Lambda.
   * @maxLength `2048`
   * @pattern `^arn:(aws[a-zA-Z-]*)?:lambda:[a-z]{2}(-gov)?-[a-z]+-\d{1}:\d{12}:function:[a-zA-Z0-9-_\.]+(:(\$LATEST|[a-zA-Z0-9-_]+))?$`
   */
  LambdaArn: string;
};
/**
 * Type definition for `AWS::Bedrock::Flow.LexFlowNodeConfiguration`.
 * Lex flow node configuration
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flow-lexflownodeconfiguration.html}
 */
export type LexFlowNodeConfiguration = {
  /**
   * ARN of a Lex bot alias
   * @maxLength `78`
   * @pattern `^arn:aws(|-us-gov):lex:[a-z]{2}(-gov)?-[a-z]+-\d{1}:\d{12}:bot-alias/[0-9a-zA-Z]+/[0-9a-zA-Z]+$`
   */
  BotAliasArn: string;
  /**
   * Lex bot locale id
   * @minLength `1`
   * @maxLength `10`
   */
  LocaleId: string;
};
/**
 * Type definition for `AWS::Bedrock::Flow.LoopControllerFlowNodeConfiguration`.
 * Configuration for the LoopController node, which manages loop execution
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flow-loopcontrollerflownodeconfiguration.html}
 */
export type LoopControllerFlowNodeConfiguration = {
  /**
   * Condition branch for a condition node
   */
  ContinueCondition: FlowCondition;
  /**
   * Maximum number of iterations the loop can perform
   * @min `1`
   * @max `1000`
   */
  MaxIterations?: number;
};
/**
 * Type definition for `AWS::Bedrock::Flow.LoopFlowNodeConfiguration`.
 * Loop node config, contains loop's internal definition
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flow-loopflownodeconfiguration.html}
 */
export type LoopFlowNodeConfiguration = {
  /**
   * Flow definition
   */
  Definition: FlowDefinition;
};
/**
 * Type definition for `AWS::Bedrock::Flow.LoopInputFlowNodeConfiguration`.
 * Configuration for the LoopInput node
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flow-loopinputflownodeconfiguration.html}
 */
export type LoopInputFlowNodeConfiguration = Record<string, any>;
/**
 * Type definition for `AWS::Bedrock::Flow.MetadataConfigurationForReranking`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flow-metadataconfigurationforreranking.html}
 */
export type MetadataConfigurationForReranking = {
  /**
   * Reranking Metadata Selection Mode
   */
  SelectionMode: RerankingMetadataSelectionMode;
  /**
   * Reranking Metadata Selective Mode Configuration
   */
  SelectiveModeConfiguration?: RerankingMetadataSelectiveModeConfiguration;
};
/**
 * Type definition for `AWS::Bedrock::Flow.OutputFlowNodeConfiguration`.
 * Output flow node configuration
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flow-outputflownodeconfiguration.html}
 */
export type OutputFlowNodeConfiguration = Record<string, any>;
/**
 * Type definition for `AWS::Bedrock::Flow.PerformanceConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flow-performanceconfiguration.html}
 */
export type PerformanceConfiguration = {
  /**
   * Performance Configuration Latency
   */
  Latency?: PerformanceConfigurationLatency;
};
/**
 * Type definition for `AWS::Bedrock::Flow.PerformanceConfigurationLatency`.
 * Performance Configuration Latency
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flow-performanceconfigurationlatency.html}
 */
export type PerformanceConfigurationLatency = "standard" | "optimized";
/**
 * Type definition for `AWS::Bedrock::Flow.PromptFlowNodeConfiguration`.
 * Prompt flow node configuration
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flow-promptflownodeconfiguration.html}
 */
export type PromptFlowNodeConfiguration = {
  /**
   * Configuration for a guardrail
   */
  GuardrailConfiguration?: GuardrailConfiguration;
  /**
   * Prompt source configuration for prompt node
   */
  SourceConfiguration: PromptFlowNodeSourceConfiguration;
};
/**
 * Type definition for `AWS::Bedrock::Flow.PromptFlowNodeInlineConfiguration`.
 * Inline prompt configuration for prompt node
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flow-promptflownodeinlineconfiguration.html}
 */
export type PromptFlowNodeInlineConfiguration = {
  InferenceConfiguration?: PromptInferenceConfiguration;
  /**
   * ARN or Id of a Bedrock Foundational Model or Inference Profile, or the ARN of a imported model, or a provisioned throughput ARN for custom models.
   * @minLength `1`
   * @maxLength `2048`
   * @pattern `^(arn:aws(-[^:]{1,12})?:(bedrock|sagemaker):[a-z0-9-]{1,20}:([0-9]{12})?:([a-z-]+/)?)?([a-zA-Z0-9.-]{1,63}){0,2}(([:][a-z0-9-]{1,63}){0,2})?(/[a-z0-9]{1,12})?$`
   */
  ModelId: string;
  TemplateConfiguration: PromptTemplateConfiguration;
  /**
   * Prompt template type
   */
  TemplateType: PromptTemplateType;
};
/**
 * Type definition for `AWS::Bedrock::Flow.PromptFlowNodeResourceConfiguration`.
 * Resource prompt configuration for prompt node
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flow-promptflownoderesourceconfiguration.html}
 */
export type PromptFlowNodeResourceConfiguration = {
  /**
   * ARN of a prompt resource possibly with a version
   * @pattern `^(arn:aws(-[^:]+)?:bedrock:[a-z0-9-]{1,20}:[0-9]{12}:prompt/[0-9a-zA-Z]{10}(?::[0-9]{1,5})?)$`
   */
  PromptArn: string;
};
/**
 * Type definition for `AWS::Bedrock::Flow.PromptFlowNodeSourceConfiguration`.
 * Prompt source configuration for prompt node
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flow-promptflownodesourceconfiguration.html}
 */
export type PromptFlowNodeSourceConfiguration =
  | {
      /**
       * Resource prompt configuration for prompt node
       */
      Resource: PromptFlowNodeResourceConfiguration;
    }
  | {
      /**
       * Inline prompt configuration for prompt node
       */
      Inline: PromptFlowNodeInlineConfiguration;
    };
/**
 * Type definition for `AWS::Bedrock::Flow.PromptInferenceConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flow-promptinferenceconfiguration.html}
 */
export type PromptInferenceConfiguration = {
  /**
   * Prompt model inference configuration
   */
  Text: PromptModelInferenceConfiguration;
};
/**
 * Type definition for `AWS::Bedrock::Flow.PromptInputVariable`.
 * Input variable
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flow-promptinputvariable.html}
 */
export type PromptInputVariable = {
  /**
   * Name for an input variable
   * @pattern `^([0-9a-zA-Z][_-]?){1,100}$`
   */
  Name?: string;
};
/**
 * Type definition for `AWS::Bedrock::Flow.PromptModelInferenceConfiguration`.
 * Prompt model inference configuration
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flow-promptmodelinferenceconfiguration.html}
 */
export type PromptModelInferenceConfiguration = {
  /**
   * Maximum length of output
   * @min `0`
   * @max `4096`
   */
  MaxTokens?: number;
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
   * Cumulative probability cutoff for token selection
   * @min `0`
   * @max `1`
   */
  TopP?: number;
};
/**
 * Type definition for `AWS::Bedrock::Flow.PromptTemplateConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flow-prompttemplateconfiguration.html}
 */
export type PromptTemplateConfiguration = {
  /**
   * Configuration for text prompt template
   */
  Text: TextPromptTemplateConfiguration;
};
/**
 * Type definition for `AWS::Bedrock::Flow.PromptTemplateType`.
 * Prompt template type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flow-prompttemplatetype.html}
 */
export type PromptTemplateType = "TEXT";
/**
 * Type definition for `AWS::Bedrock::Flow.RerankingMetadataSelectionMode`.
 * Reranking Metadata Selection Mode
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flow-rerankingmetadataselectionmode.html}
 */
export type RerankingMetadataSelectionMode = "SELECTIVE" | "ALL";
/**
 * Type definition for `AWS::Bedrock::Flow.RerankingMetadataSelectiveModeConfiguration`.
 * Reranking Metadata Selective Mode Configuration
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flow-rerankingmetadataselectivemodeconfiguration.html}
 */
export type RerankingMetadataSelectiveModeConfiguration =
  | {
      /**
       * List of Fields For Reranking
       * @minLength `1`
       * @maxLength `100`
       */
      FieldsToInclude: FieldForReranking[];
    }
  | {
      /**
       * List of Fields For Reranking
       * @minLength `1`
       * @maxLength `100`
       */
      FieldsToExclude: FieldForReranking[];
    };
/**
 * Type definition for `AWS::Bedrock::Flow.RetrievalFlowNodeConfiguration`.
 * Retrieval flow node configuration
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flow-retrievalflownodeconfiguration.html}
 */
export type RetrievalFlowNodeConfiguration = {
  ServiceConfiguration: RetrievalFlowNodeServiceConfiguration;
};
/**
 * Type definition for `AWS::Bedrock::Flow.RetrievalFlowNodeS3Configuration`.
 * s3 Retrieval configuration for Retrieval node
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flow-retrievalflownodes3configuration.html}
 */
export type RetrievalFlowNodeS3Configuration = {
  /**
   * bucket name of an s3 that will be used for Retrieval flow node configuration
   * @pattern `^[a-z0-9][\.\-a-z0-9]{1,61}[a-z0-9]$`
   */
  BucketName: string;
};
/**
 * Type definition for `AWS::Bedrock::Flow.RetrievalFlowNodeServiceConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flow-retrievalflownodeserviceconfiguration.html}
 */
export type RetrievalFlowNodeServiceConfiguration = {
  /**
   * s3 Retrieval configuration for Retrieval node
   */
  S3?: RetrievalFlowNodeS3Configuration;
};
/**
 * Type definition for `AWS::Bedrock::Flow.S3Location`.
 * A bucket, key and optional version pointing to an S3 object containing a UTF-8 encoded JSON string Definition with the same schema as the Definition property of this resource
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flow-s3location.html}
 */
export type S3Location = {
  /**
   * A bucket in S3
   * @minLength `3`
   * @maxLength `63`
   * @pattern `^[a-z0-9][\.\-a-z0-9]{1,61}[a-z0-9]$`
   */
  Bucket: string;
  /**
   * A object key in S3
   * @minLength `1`
   * @maxLength `1024`
   */
  Key: string;
  /**
   * The version of the the S3 object to use
   * @minLength `1`
   * @maxLength `1024`
   */
  Version?: string;
};
/**
 * Type definition for `AWS::Bedrock::Flow.StorageFlowNodeConfiguration`.
 * Storage flow node configuration
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flow-storageflownodeconfiguration.html}
 */
export type StorageFlowNodeConfiguration = {
  ServiceConfiguration: StorageFlowNodeServiceConfiguration;
};
/**
 * Type definition for `AWS::Bedrock::Flow.StorageFlowNodeS3Configuration`.
 * s3 storage configuration for storage node
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flow-storageflownodes3configuration.html}
 */
export type StorageFlowNodeS3Configuration = {
  /**
   * bucket name of an s3 that will be used for storage flow node configuration
   * @pattern `^[a-z0-9][\.\-a-z0-9]{1,61}[a-z0-9]$`
   */
  BucketName: string;
};
/**
 * Type definition for `AWS::Bedrock::Flow.StorageFlowNodeServiceConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flow-storageflownodeserviceconfiguration.html}
 */
export type StorageFlowNodeServiceConfiguration = {
  /**
   * s3 storage configuration for storage node
   */
  S3?: StorageFlowNodeS3Configuration;
};
/**
 * Type definition for `AWS::Bedrock::Flow.SupportedLanguages`.
 * Enum encodes the supported language type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flow-supportedlanguages.html}
 */
export type SupportedLanguages = "Python_3";
/**
 * Type definition for `AWS::Bedrock::Flow.TagsMap`.
 * A map of tag keys and values
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flow-tagsmap.html}
 */
export type TagsMap = Record<string, string>;
/**
 * Type definition for `AWS::Bedrock::Flow.TextPromptTemplateConfiguration`.
 * Configuration for text prompt template
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flow-textprompttemplateconfiguration.html}
 */
export type TextPromptTemplateConfiguration = {
  /**
   * List of input variables
   * @minLength `0`
   * @maxLength `20`
   */
  InputVariables?: PromptInputVariable[];
  /**
   * Prompt content for String prompt template
   * @minLength `1`
   * @maxLength `200000`
   */
  Text: string;
};
/**
 * Type definition for `AWS::Bedrock::Flow.VectorSearchBedrockRerankingConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flow-vectorsearchbedrockrerankingconfiguration.html}
 */
export type VectorSearchBedrockRerankingConfiguration = {
  MetadataConfiguration?: MetadataConfigurationForReranking;
  ModelConfiguration: VectorSearchBedrockRerankingModelConfiguration;
  /**
   * Number Of Results For Reranking
   * @min `1`
   * @max `100`
   */
  NumberOfRerankedResults?: number;
};
/**
 * Type definition for `AWS::Bedrock::Flow.VectorSearchBedrockRerankingModelConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flow-vectorsearchbedrockrerankingmodelconfiguration.html}
 */
export type VectorSearchBedrockRerankingModelConfiguration = {
  AdditionalModelRequestFields?: AdditionalModelRequestFields;
  /**
   * Arn of a Bedrock Reranking model
   * @minLength `1`
   * @maxLength `2048`
   * @pattern `^(arn:aws(-[^:]+)?:bedrock:[a-z0-9-]{1,20}::foundation-model/(.*))?$`
   */
  ModelArn: string;
};
/**
 * Type definition for `AWS::Bedrock::Flow.VectorSearchRerankingConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flow-vectorsearchrerankingconfiguration.html}
 */
export type VectorSearchRerankingConfiguration = {
  BedrockRerankingConfiguration?: VectorSearchBedrockRerankingConfiguration;
  /**
   * Enum of Rerank Configuration Types
   */
  Type: VectorSearchRerankingConfigurationType;
};
/**
 * Type definition for `AWS::Bedrock::Flow.VectorSearchRerankingConfigurationType`.
 * Enum of Rerank Configuration Types
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flow-vectorsearchrerankingconfigurationtype.html}
 */
export type VectorSearchRerankingConfigurationType = "BEDROCK_RERANKING_MODEL";
/**
 * Definition of AWS::Bedrock::Flow Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-flow.html}
 */
export class BedrockFlow extends $Resource<
  "AWS::Bedrock::Flow",
  BedrockFlowProperties,
  BedrockFlowAttributes
> {
  public static readonly Type = "AWS::Bedrock::Flow";
  constructor(
    logicalId: string,
    properties: BedrockFlowProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, BedrockFlow.Type, properties, options);
  }
}
