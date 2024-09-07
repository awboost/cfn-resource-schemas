import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Definition of AWS::Bedrock::FlowVersion Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-flowversion.html}
 */
export type BedrockFlowVersionProperties = {
  /**
   * Description of the flow version
   * @minLength `1`
   * @maxLength `200`
   */
  Description?: string;
  /**
   * Arn representation of the Flow
   * @pattern `^arn:aws(-[^:]+)?:bedrock:[a-z0-9-]{1,20}:[0-9]{12}:flow/[0-9a-zA-Z]{10}$`
   */
  FlowArn: string;
};
/**
 * Attribute type definition for `AWS::Bedrock::FlowVersion`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-flowversion.html#aws-resource-bedrock-flowversion-return-values}
 */
export type BedrockFlowVersionAttributes = {
  /**
   * Time Stamp.
   */
  CreatedAt: string;
  /**
   * A KMS key ARN
   * @minLength `1`
   * @maxLength `2048`
   * @pattern `^arn:aws(|-cn|-us-gov):kms:[a-zA-Z0-9-]*:[0-9]{12}:key/[a-zA-Z0-9-]{36}$`
   */
  CustomerEncryptionKeyArn: string;
  /**
   * Flow definition
   */
  Definition: {
    /**
     * List of connections
     * @maxLength `20`
     */
    Connections: {
      /**
       * Connection configuration
       */
      Configuration: FlowConnectionConfiguration;
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
    }[];
    /**
     * List of nodes in a flow
     * @maxLength `20`
     */
    Nodes: {
      /**
       * Node configuration in a flow
       */
      Configuration: FlowNodeConfiguration;
      /**
       * List of node inputs in a flow
       * @maxLength `5`
       */
      Inputs: {
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
      }[];
      /**
       * Name of a node in a flow
       * @pattern `^[a-zA-Z]([_]?[0-9a-zA-Z]){1,50}$`
       */
      Name: string;
      /**
       * List of node outputs in a flow
       * @maxLength `5`
       */
      Outputs: {
        /**
         * Name of a node output in a flow
         * @pattern `^[a-zA-Z]([_]?[0-9a-zA-Z]){1,50}$`
         */
        Name: string;
        /**
         * Type of input/output for a node in a flow
         */
        Type: FlowNodeIODataType;
      }[];
      /**
       * Flow node types
       */
      Type: FlowNodeType;
    }[];
  };
  /**
   * ARN of a IAM role
   * @maxLength `2048`
   * @pattern `^arn:aws(-[^:]+)?:iam::([0-9]{12})?:role/(service-role/)?.+$`
   */
  ExecutionRoleArn: string;
  /**
   * Identifier for a Flow
   * @pattern `^[0-9a-zA-Z]{10}$`
   */
  FlowId: string;
  /**
   * Name for the flow
   * @pattern `^([0-9a-zA-Z][_-]?){1,100}$`
   */
  Name: string;
  /**
   * Schema Type for Flow APIs
   */
  Status: FlowStatus;
  /**
   * Numerical Version.
   * @pattern `^[0-9]{1,5}$`
   */
  Version: string;
};
/**
 * Type definition for `AWS::Bedrock::FlowVersion.AgentFlowNodeConfiguration`.
 * Agent flow node configuration
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flowversion-agentflownodeconfiguration.html}
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
 * Type definition for `AWS::Bedrock::FlowVersion.CollectorFlowNodeConfiguration`.
 * Collector flow node configuration
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flowversion-collectorflownodeconfiguration.html}
 */
export type CollectorFlowNodeConfiguration = Record<string, any>;
/**
 * Type definition for `AWS::Bedrock::FlowVersion.ConditionFlowNodeConfiguration`.
 * Condition flow node configuration
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flowversion-conditionflownodeconfiguration.html}
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
 * Type definition for `AWS::Bedrock::FlowVersion.FlowCondition`.
 * Condition branch for a condition node
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flowversion-flowcondition.html}
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
 * Type definition for `AWS::Bedrock::FlowVersion.FlowConditionalConnectionConfiguration`.
 * Conditional connection configuration
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flowversion-flowconditionalconnectionconfiguration.html}
 */
export type FlowConditionalConnectionConfiguration = {
  /**
   * Name of a condition in a flow
   * @pattern `^[a-zA-Z]([_]?[0-9a-zA-Z]){1,50}$`
   */
  Condition: string;
};
/**
 * Type definition for `AWS::Bedrock::FlowVersion.FlowConnection`.
 * Flow connection
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flowversion-flowconnection.html}
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
 * Type definition for `AWS::Bedrock::FlowVersion.FlowConnectionConfiguration`.
 * Connection configuration
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flowversion-flowconnectionconfiguration.html}
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
 * Type definition for `AWS::Bedrock::FlowVersion.FlowConnectionType`.
 * Connection type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flowversion-flowconnectiontype.html}
 */
export type FlowConnectionType = "Data" | "Conditional";
/**
 * Type definition for `AWS::Bedrock::FlowVersion.FlowDataConnectionConfiguration`.
 * Data connection configuration
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flowversion-flowdataconnectionconfiguration.html}
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
 * Type definition for `AWS::Bedrock::FlowVersion.FlowDefinition`.
 * Flow definition
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flowversion-flowdefinition.html}
 */
export type FlowDefinition = {
  /**
   * List of connections
   * @maxLength `20`
   */
  Connections?: FlowConnection[];
  /**
   * List of nodes in a flow
   * @maxLength `20`
   */
  Nodes?: FlowNode[];
};
/**
 * Type definition for `AWS::Bedrock::FlowVersion.FlowNode`.
 * Internal mixin for flow node
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flowversion-flownode.html}
 */
export type FlowNode = {
  /**
   * Node configuration in a flow
   */
  Configuration?: FlowNodeConfiguration;
  /**
   * List of node inputs in a flow
   * @maxLength `5`
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
 * Type definition for `AWS::Bedrock::FlowVersion.FlowNodeConfiguration`.
 * Node configuration in a flow
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flowversion-flownodeconfiguration.html}
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
       * Retrieval flow node configuration
       */
      Retrieval: RetrievalFlowNodeConfiguration;
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
    };
/**
 * Type definition for `AWS::Bedrock::FlowVersion.FlowNodeInput`.
 * Input to a node in a flow
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flowversion-flownodeinput.html}
 */
export type FlowNodeInput = {
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
 * Type definition for `AWS::Bedrock::FlowVersion.FlowNodeIODataType`.
 * Type of input/output for a node in a flow
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flowversion-flownodeiodatatype.html}
 */
export type FlowNodeIODataType =
  | "String"
  | "Number"
  | "Boolean"
  | "Object"
  | "Array";
/**
 * Type definition for `AWS::Bedrock::FlowVersion.FlowNodeOutput`.
 * Output of a node in a flow
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flowversion-flownodeoutput.html}
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
 * Type definition for `AWS::Bedrock::FlowVersion.FlowNodeType`.
 * Flow node types
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flowversion-flownodetype.html}
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
  | "Iterator"
  | "Collector"
  | "Storage"
  | "Retrieval";
/**
 * Type definition for `AWS::Bedrock::FlowVersion.FlowStatus`.
 * Schema Type for Flow APIs
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flowversion-flowstatus.html}
 */
export type FlowStatus = "Failed" | "Prepared" | "Preparing" | "NotPrepared";
/**
 * Type definition for `AWS::Bedrock::FlowVersion.InputFlowNodeConfiguration`.
 * Input flow node configuration
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flowversion-inputflownodeconfiguration.html}
 */
export type InputFlowNodeConfiguration = Record<string, any>;
/**
 * Type definition for `AWS::Bedrock::FlowVersion.IteratorFlowNodeConfiguration`.
 * Iterator flow node configuration
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flowversion-iteratorflownodeconfiguration.html}
 */
export type IteratorFlowNodeConfiguration = Record<string, any>;
/**
 * Type definition for `AWS::Bedrock::FlowVersion.KnowledgeBaseFlowNodeConfiguration`.
 * Knowledge base flow node configuration
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flowversion-knowledgebaseflownodeconfiguration.html}
 */
export type KnowledgeBaseFlowNodeConfiguration = {
  /**
   * Identifier of the KnowledgeBase
   * @maxLength `10`
   * @pattern `^[0-9a-zA-Z]+$`
   */
  KnowledgeBaseId: string;
  /**
   * ARN or name of a Bedrock model.
   * @minLength `1`
   * @maxLength `2048`
   * @pattern `^arn:aws(-[^:]+)?:bedrock:[a-z0-9-]{1,20}:(([0-9]{12}:custom-model/[a-z0-9-]{1,63}[.]{1}[a-z0-9-]{1,63}(([:][a-z0-9-]{1,63}){0,2})?/[a-z0-9]{12})|(:foundation-model/([a-z0-9-]{1,63}[.]{1}[a-z0-9-]{1,63}([.]?[a-z0-9-]{1,63})([:][a-z0-9-]{1,63}){0,2})))|(([a-z0-9-]{1,63}[.]{1}[a-z0-9-]{1,63}([.]?[a-z0-9-]{1,63})([:][a-z0-9-]{1,63}){0,2}))|(([0-9a-zA-Z][_-]?)+)$`
   */
  ModelId?: string;
};
/**
 * Type definition for `AWS::Bedrock::FlowVersion.LambdaFunctionFlowNodeConfiguration`.
 * Lambda function flow node configuration
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flowversion-lambdafunctionflownodeconfiguration.html}
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
 * Type definition for `AWS::Bedrock::FlowVersion.LexFlowNodeConfiguration`.
 * Lex flow node configuration
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flowversion-lexflownodeconfiguration.html}
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
 * Type definition for `AWS::Bedrock::FlowVersion.OutputFlowNodeConfiguration`.
 * Output flow node configuration
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flowversion-outputflownodeconfiguration.html}
 */
export type OutputFlowNodeConfiguration = Record<string, any>;
/**
 * Type definition for `AWS::Bedrock::FlowVersion.PromptFlowNodeConfiguration`.
 * Prompt flow node configuration
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flowversion-promptflownodeconfiguration.html}
 */
export type PromptFlowNodeConfiguration = {
  /**
   * Prompt source configuration for prompt node
   */
  SourceConfiguration: PromptFlowNodeSourceConfiguration;
};
/**
 * Type definition for `AWS::Bedrock::FlowVersion.PromptFlowNodeInlineConfiguration`.
 * Inline prompt configuration for prompt node
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flowversion-promptflownodeinlineconfiguration.html}
 */
export type PromptFlowNodeInlineConfiguration = {
  InferenceConfiguration?: PromptInferenceConfiguration;
  /**
   * ARN or name of a Bedrock model.
   * @minLength `1`
   * @maxLength `2048`
   * @pattern `^(arn:aws(-[^:]+)?:bedrock:[a-z0-9-]{1,20}:(([0-9]{12}:custom-model/[a-z0-9-]{1,63}[.]{1}[a-z0-9-]{1,63}/[a-z0-9]{12})|(:foundation-model/[a-z0-9-]{1,63}[.]{1}[a-z0-9-]{1,63}([.:]?[a-z0-9-]{1,63}))|([0-9]{12}:provisioned-model/[a-z0-9]{12})))|([a-z0-9-]{1,63}[.]{1}[a-z0-9-]{1,63}([.:]?[a-z0-9-]{1,63}))|(([0-9a-zA-Z][_-]?)+)$`
   */
  ModelId: string;
  TemplateConfiguration: PromptTemplateConfiguration;
  /**
   * Prompt template type
   */
  TemplateType: PromptTemplateType;
};
/**
 * Type definition for `AWS::Bedrock::FlowVersion.PromptFlowNodeResourceConfiguration`.
 * Resource prompt configuration for prompt node
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flowversion-promptflownoderesourceconfiguration.html}
 */
export type PromptFlowNodeResourceConfiguration = {
  /**
   * ARN of a prompt resource possibly with a version
   * @pattern `^(arn:aws(-[^:]+)?:bedrock:[a-z0-9-]{1,20}:[0-9]{12}:prompt/[0-9a-zA-Z]{10}(?::[0-9]{1,5})?)$`
   */
  PromptArn: string;
};
/**
 * Type definition for `AWS::Bedrock::FlowVersion.PromptFlowNodeSourceConfiguration`.
 * Prompt source configuration for prompt node
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flowversion-promptflownodesourceconfiguration.html}
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
 * Type definition for `AWS::Bedrock::FlowVersion.PromptInferenceConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flowversion-promptinferenceconfiguration.html}
 */
export type PromptInferenceConfiguration = {
  /**
   * Prompt model inference configuration
   */
  Text: PromptModelInferenceConfiguration;
};
/**
 * Type definition for `AWS::Bedrock::FlowVersion.PromptInputVariable`.
 * Input variable
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flowversion-promptinputvariable.html}
 */
export type PromptInputVariable = {
  /**
   * Name for an input variable
   * @pattern `^([0-9a-zA-Z][_-]?){1,100}$`
   */
  Name?: string;
};
/**
 * Type definition for `AWS::Bedrock::FlowVersion.PromptModelInferenceConfiguration`.
 * Prompt model inference configuration
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flowversion-promptmodelinferenceconfiguration.html}
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
 * Type definition for `AWS::Bedrock::FlowVersion.PromptTemplateConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flowversion-prompttemplateconfiguration.html}
 */
export type PromptTemplateConfiguration = {
  /**
   * Configuration for text prompt template
   */
  Text: TextPromptTemplateConfiguration;
};
/**
 * Type definition for `AWS::Bedrock::FlowVersion.PromptTemplateType`.
 * Prompt template type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flowversion-prompttemplatetype.html}
 */
export type PromptTemplateType = "TEXT";
/**
 * Type definition for `AWS::Bedrock::FlowVersion.RetrievalFlowNodeConfiguration`.
 * Retrieval flow node configuration
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flowversion-retrievalflownodeconfiguration.html}
 */
export type RetrievalFlowNodeConfiguration = {
  ServiceConfiguration: RetrievalFlowNodeServiceConfiguration;
};
/**
 * Type definition for `AWS::Bedrock::FlowVersion.RetrievalFlowNodeS3Configuration`.
 * s3 Retrieval configuration for Retrieval node
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flowversion-retrievalflownodes3configuration.html}
 */
export type RetrievalFlowNodeS3Configuration = {
  /**
   * bucket name of an s3 that will be used for Retrieval flow node configuration
   * @pattern `^[a-z0-9][\.\-a-z0-9]{1,61}[a-z0-9]$`
   */
  BucketName: string;
};
/**
 * Type definition for `AWS::Bedrock::FlowVersion.RetrievalFlowNodeServiceConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flowversion-retrievalflownodeserviceconfiguration.html}
 */
export type RetrievalFlowNodeServiceConfiguration = {
  /**
   * s3 Retrieval configuration for Retrieval node
   */
  S3?: RetrievalFlowNodeS3Configuration;
};
/**
 * Type definition for `AWS::Bedrock::FlowVersion.StorageFlowNodeConfiguration`.
 * Storage flow node configuration
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flowversion-storageflownodeconfiguration.html}
 */
export type StorageFlowNodeConfiguration = {
  ServiceConfiguration: StorageFlowNodeServiceConfiguration;
};
/**
 * Type definition for `AWS::Bedrock::FlowVersion.StorageFlowNodeS3Configuration`.
 * s3 storage configuration for storage node
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flowversion-storageflownodes3configuration.html}
 */
export type StorageFlowNodeS3Configuration = {
  /**
   * bucket name of an s3 that will be used for storage flow node configuration
   * @pattern `^[a-z0-9][\.\-a-z0-9]{1,61}[a-z0-9]$`
   */
  BucketName: string;
};
/**
 * Type definition for `AWS::Bedrock::FlowVersion.StorageFlowNodeServiceConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flowversion-storageflownodeserviceconfiguration.html}
 */
export type StorageFlowNodeServiceConfiguration = {
  /**
   * s3 storage configuration for storage node
   */
  S3?: StorageFlowNodeS3Configuration;
};
/**
 * Type definition for `AWS::Bedrock::FlowVersion.TextPromptTemplateConfiguration`.
 * Configuration for text prompt template
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flowversion-textprompttemplateconfiguration.html}
 */
export type TextPromptTemplateConfiguration = {
  /**
   * List of input variables
   * @minLength `0`
   * @maxLength `5`
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
 * Definition of AWS::Bedrock::FlowVersion Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-flowversion.html}
 */
export class BedrockFlowVersion extends $Resource<
  "AWS::Bedrock::FlowVersion",
  BedrockFlowVersionProperties,
  BedrockFlowVersionAttributes
> {
  public static readonly Type = "AWS::Bedrock::FlowVersion";
  constructor(
    logicalId: string,
    properties: BedrockFlowVersionProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, BedrockFlowVersion.Type, properties, options);
  }
}
