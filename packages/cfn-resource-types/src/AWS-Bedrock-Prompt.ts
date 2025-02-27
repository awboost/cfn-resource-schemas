import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Definition of AWS::Bedrock::Prompt Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-prompt.html}
 */
export type BedrockPromptProperties = {
  /**
   * A KMS key ARN
   * @minLength `1`
   * @maxLength `2048`
   * @pattern `^arn:aws(|-cn|-us-gov):kms:[a-zA-Z0-9-]*:[0-9]{12}:key/[a-zA-Z0-9-]{36}$`
   */
  CustomerEncryptionKeyArn?: string;
  /**
   * Name for a variant.
   * @pattern `^([0-9a-zA-Z][_-]?){1,100}$`
   */
  DefaultVariant?: string;
  /**
   * Name for a prompt resource.
   * @minLength `1`
   * @maxLength `200`
   */
  Description?: string;
  /**
   * Name for a prompt resource.
   * @pattern `^([0-9a-zA-Z][_-]?){1,100}$`
   */
  Name: string;
  /**
   * A map of tag keys and values
   */
  Tags?: TagsMap;
  /**
   * List of prompt variants
   * @minLength `0`
   * @maxLength `1`
   */
  Variants?: PromptVariant[];
};
/**
 * Attribute type definition for `AWS::Bedrock::Prompt`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-prompt.html#aws-resource-bedrock-prompt-return-values}
 */
export type BedrockPromptAttributes = {
  /**
   * ARN of a prompt resource possibly with a version
   * @minLength `1`
   * @maxLength `2048`
   * @pattern `^(arn:aws(-[^:]+)?:bedrock:[a-z0-9-]{1,20}:[0-9]{12}:prompt/[0-9a-zA-Z]{10})$`
   */
  Arn: string;
  /**
   * Time Stamp.
   */
  CreatedAt: string;
  /**
   * Identifier for a Prompt
   * @pattern `^[0-9a-zA-Z]{10}$`
   */
  Id: string;
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
 * Type definition for `AWS::Bedrock::Prompt.AdditionalModelRequestFields`.
 * Contains model-specific configurations
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-prompt-additionalmodelrequestfields.html}
 */
export type AdditionalModelRequestFields = Record<string, any>;
/**
 * Type definition for `AWS::Bedrock::Prompt.AnyToolChoice`.
 * Any Tool choice
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-prompt-anytoolchoice.html}
 */
export type AnyToolChoice = Record<string, any>;
/**
 * Type definition for `AWS::Bedrock::Prompt.AutoToolChoice`.
 * Auto Tool choice
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-prompt-autotoolchoice.html}
 */
export type AutoToolChoice = Record<string, any>;
/**
 * Type definition for `AWS::Bedrock::Prompt.CachePointBlock`.
 * CachePointBlock
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-prompt-cachepointblock.html}
 */
export type CachePointBlock = {
  /**
   * CachePoint types for CachePointBlock
   */
  Type: CachePointType;
};
/**
 * Type definition for `AWS::Bedrock::Prompt.CachePointType`.
 * CachePoint types for CachePointBlock
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-prompt-cachepointtype.html}
 */
export type CachePointType = "default";
/**
 * Type definition for `AWS::Bedrock::Prompt.ChatPromptTemplateConfiguration`.
 * Configuration for chat prompt template
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-prompt-chatprompttemplateconfiguration.html}
 */
export type ChatPromptTemplateConfiguration = {
  /**
   * List of input variables
   * @minLength `0`
   * @maxLength `20`
   */
  InputVariables?: PromptInputVariable[];
  /**
   * List of messages for chat prompt template
   * @minLength `0`
   */
  Messages: Message[];
  /**
   * Configuration for chat prompt template
   * @minLength `0`
   */
  System?: SystemContentBlock[];
  /**
   * Tool configuration
   */
  ToolConfiguration?: ToolConfiguration;
};
/**
 * Type definition for `AWS::Bedrock::Prompt.ContentBlock`.
 * Configuration for chat prompt template
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-prompt-contentblock.html}
 */
export type ContentBlock =
  | {
      /**
       * Configuration for chat prompt template
       * @minLength `1`
       */
      Text: string;
    }
  | {
      /**
       * CachePointBlock
       */
      CachePoint: CachePointBlock;
    };
/**
 * Type definition for `AWS::Bedrock::Prompt.ConversationRole`.
 * Conversation roles for the chat prompt
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-prompt-conversationrole.html}
 */
export type ConversationRole = "user" | "assistant";
/**
 * Type definition for `AWS::Bedrock::Prompt.Message`.
 * Chat prompt Message
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-prompt-message.html}
 */
export type Message = {
  /**
   * List of Content Blocks
   * @minLength `1`
   */
  Content: ContentBlock[];
  /**
   * Conversation roles for the chat prompt
   */
  Role: ConversationRole;
};
/**
 * Type definition for `AWS::Bedrock::Prompt.PromptAgentResource`.
 * Target Agent to invoke with Prompt
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-prompt-promptagentresource.html}
 */
export type PromptAgentResource = {
  /**
   * Arn representation of the Agent Alias.
   * @maxLength `2048`
   * @pattern `^arn:aws(-[^:]+)?:bedrock:[a-z0-9-]{1,20}:[0-9]{12}:agent-alias/[0-9a-zA-Z]{10}/[0-9a-zA-Z]{10}$`
   */
  AgentIdentifier: string;
};
/**
 * Type definition for `AWS::Bedrock::Prompt.PromptGenAiResource`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-prompt-promptgenairesource.html}
 */
export type PromptGenAiResource = {
  /**
   * Target Agent to invoke with Prompt
   */
  Agent: PromptAgentResource;
};
/**
 * Type definition for `AWS::Bedrock::Prompt.PromptInferenceConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-prompt-promptinferenceconfiguration.html}
 */
export type PromptInferenceConfiguration = {
  /**
   * Prompt model inference configuration
   */
  Text: PromptModelInferenceConfiguration;
};
/**
 * Type definition for `AWS::Bedrock::Prompt.PromptInputVariable`.
 * Input variable
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-prompt-promptinputvariable.html}
 */
export type PromptInputVariable = {
  /**
   * Name for an input variable
   * @pattern `^([0-9a-zA-Z][_-]?){1,100}$`
   */
  Name?: string;
};
/**
 * Type definition for `AWS::Bedrock::Prompt.PromptMetadataEntry`.
 * Contains a key-value pair that defines a metadata tag and value to attach to a prompt variant.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-prompt-promptmetadataentry.html}
 */
export type PromptMetadataEntry = {
  /**
   * The key of a metadata tag for a prompt variant.
   * @minLength `1`
   * @maxLength `128`
   * @pattern `^[a-zA-Z0-9\s._:/=+@-]*$`
   */
  Key: string;
  /**
   * The value of a metadata tag for a prompt variant.
   * @minLength `1`
   * @maxLength `1024`
   * @pattern `^[a-zA-Z0-9\s._:/=+@-]*$`
   */
  Value: string;
};
/**
 * Type definition for `AWS::Bedrock::Prompt.PromptModelInferenceConfiguration`.
 * Prompt model inference configuration
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-prompt-promptmodelinferenceconfiguration.html}
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
 * Type definition for `AWS::Bedrock::Prompt.PromptTemplateConfiguration`.
 * Prompt template configuration
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-prompt-prompttemplateconfiguration.html}
 */
export type PromptTemplateConfiguration =
  | {
      /**
       * Configuration for text prompt template
       */
      Text: TextPromptTemplateConfiguration;
    }
  | {
      /**
       * Configuration for chat prompt template
       */
      Chat: ChatPromptTemplateConfiguration;
    };
/**
 * Type definition for `AWS::Bedrock::Prompt.PromptTemplateType`.
 * Prompt template type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-prompt-prompttemplatetype.html}
 */
export type PromptTemplateType = "TEXT" | "CHAT";
/**
 * Type definition for `AWS::Bedrock::Prompt.PromptVariant`.
 * Prompt variant
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-prompt-promptvariant.html}
 */
export type PromptVariant = {
  /**
   * Contains model-specific configurations
   */
  AdditionalModelRequestFields?: AdditionalModelRequestFields;
  GenAiResource?: PromptGenAiResource;
  InferenceConfiguration?: PromptInferenceConfiguration;
  /**
   * List of metadata to associate with the prompt variant.
   * @minLength `0`
   * @maxLength `50`
   */
  Metadata?: PromptMetadataEntry[];
  /**
   * ARN or Id of a Bedrock Foundational Model or Inference Profile, or the ARN of a imported model, or a provisioned throughput ARN for custom models.
   * @minLength `1`
   * @maxLength `2048`
   * @pattern `^(arn:aws(-[^:]{1,12})?:(bedrock|sagemaker):[a-z0-9-]{1,20}:([0-9]{12})?:([a-z-]+/)?)?([a-zA-Z0-9.-]{1,63}){0,2}(([:][a-z0-9-]{1,63}){0,2})?(/[a-z0-9]{1,12})?$`
   */
  ModelId?: string;
  /**
   * Name for a variant.
   * @pattern `^([0-9a-zA-Z][_-]?){1,100}$`
   */
  Name: string;
  /**
   * Prompt template configuration
   */
  TemplateConfiguration: PromptTemplateConfiguration;
  /**
   * Prompt template type
   */
  TemplateType: PromptTemplateType;
};
/**
 * Type definition for `AWS::Bedrock::Prompt.SpecificToolChoice`.
 * Specific Tool choice
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-prompt-specifictoolchoice.html}
 */
export type SpecificToolChoice = {
  /**
   * Tool name
   * @minLength `1`
   * @maxLength `64`
   * @pattern `^[a-zA-Z][a-zA-Z0-9_]*$`
   */
  Name: string;
};
/**
 * Type definition for `AWS::Bedrock::Prompt.SystemContentBlock`.
 * Configuration for chat prompt template
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-prompt-systemcontentblock.html}
 */
export type SystemContentBlock =
  | {
      /**
       * Configuration for chat prompt template
       * @minLength `1`
       */
      Text: string;
    }
  | {
      /**
       * CachePointBlock
       */
      CachePoint: CachePointBlock;
    };
/**
 * Type definition for `AWS::Bedrock::Prompt.TagsMap`.
 * A map of tag keys and values
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-prompt-tagsmap.html}
 */
export type TagsMap = Record<string, string>;
/**
 * Type definition for `AWS::Bedrock::Prompt.TextPromptTemplateConfiguration`.
 * Configuration for text prompt template
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-prompt-textprompttemplateconfiguration.html}
 */
export type TextPromptTemplateConfiguration = {
  /**
   * CachePointBlock
   */
  CachePoint?: CachePointBlock;
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
  Text?: string;
  /**
   * The identifier for the S3 resource.
   */
  TextS3Location?: TextS3Location;
};
/**
 * Type definition for `AWS::Bedrock::Prompt.TextS3Location`.
 * The identifier for the S3 resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-prompt-texts3location.html}
 */
export type TextS3Location = {
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
 * Type definition for `AWS::Bedrock::Prompt.Tool`.
 * Tool details
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-prompt-tool.html}
 */
export type Tool =
  | {
      /**
       * Tool specification
       */
      ToolSpec: ToolSpecification;
    }
  | {
      /**
       * CachePointBlock
       */
      CachePoint: CachePointBlock;
    };
/**
 * Type definition for `AWS::Bedrock::Prompt.ToolChoice`.
 * Tool choice
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-prompt-toolchoice.html}
 */
export type ToolChoice =
  | {
      /**
       * Auto Tool choice
       */
      Auto: AutoToolChoice;
    }
  | {
      /**
       * Any Tool choice
       */
      Any: AnyToolChoice;
    }
  | {
      /**
       * Specific Tool choice
       */
      Tool: SpecificToolChoice;
    };
/**
 * Type definition for `AWS::Bedrock::Prompt.ToolConfiguration`.
 * Tool configuration
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-prompt-toolconfiguration.html}
 */
export type ToolConfiguration = {
  /**
   * Tool choice
   */
  ToolChoice?: ToolChoice;
  /**
   * List of Tools
   * @minLength `1`
   */
  Tools: Tool[];
};
/**
 * Type definition for `AWS::Bedrock::Prompt.ToolInputSchema`.
 * Tool input schema json
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-prompt-toolinputschema.html}
 */
export type ToolInputSchema = {
  Json: Record<string, any>;
};
/**
 * Type definition for `AWS::Bedrock::Prompt.ToolSpecification`.
 * Tool specification
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-prompt-toolspecification.html}
 */
export type ToolSpecification = {
  /**
   * @minLength `1`
   */
  Description?: string;
  /**
   * Tool input schema json
   */
  InputSchema: ToolInputSchema;
  /**
   * Tool name
   * @minLength `1`
   * @maxLength `64`
   * @pattern `^[a-zA-Z][a-zA-Z0-9_]*$`
   */
  Name: string;
};
/**
 * Definition of AWS::Bedrock::Prompt Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-prompt.html}
 */
export class BedrockPrompt extends $Resource<
  "AWS::Bedrock::Prompt",
  BedrockPromptProperties,
  BedrockPromptAttributes
> {
  public static readonly Type = "AWS::Bedrock::Prompt";
  constructor(
    logicalId: string,
    properties: BedrockPromptProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, BedrockPrompt.Type, properties, options);
  }
}
