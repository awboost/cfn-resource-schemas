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
   * Draft Version.
   * @minLength `5`
   * @maxLength `5`
   * @pattern `^DRAFT$`
   */
  Version: string;
};
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
    };
/**
 * Type definition for `AWS::Bedrock::Flow.FlowNodeInput`.
 * Input to a node in a flow
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flow-flownodeinput.html}
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
  | "LambdaFunction";
/**
 * Type definition for `AWS::Bedrock::Flow.FlowStatus`.
 * Schema Type for Flow APIs
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flow-flowstatus.html}
 */
export type FlowStatus = "Failed" | "Prepared" | "Preparing" | "NotPrepared";
/**
 * Type definition for `AWS::Bedrock::Flow.InputFlowNodeConfiguration`.
 * Input flow node configuration
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flow-inputflownodeconfiguration.html}
 */
export type InputFlowNodeConfiguration = Record<string, any>;
/**
 * Type definition for `AWS::Bedrock::Flow.KnowledgeBaseFlowNodeConfiguration`.
 * Knowledge base flow node configuration
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flow-knowledgebaseflownodeconfiguration.html}
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
 * Type definition for `AWS::Bedrock::Flow.OutputFlowNodeConfiguration`.
 * Output flow node configuration
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flow-outputflownodeconfiguration.html}
 */
export type OutputFlowNodeConfiguration = Record<string, any>;
/**
 * Type definition for `AWS::Bedrock::Flow.PromptFlowNodeConfiguration`.
 * Prompt flow node configuration
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flow-promptflownodeconfiguration.html}
 */
export type PromptFlowNodeConfiguration = {
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
