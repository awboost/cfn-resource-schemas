import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Definition of AWS::Bedrock::PromptVersion Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-promptversion.html}
 */
export type BedrockPromptVersionProperties = {
  /**
   * Description for a prompt version resource.
   * @minLength `1`
   * @maxLength `200`
   */
  Description?: string;
  /**
   * ARN of a prompt resource possibly with a version
   * @minLength `1`
   * @maxLength `2048`
   * @pattern `^(arn:aws(-[^:]+)?:bedrock:[a-z0-9-]{1,20}:[0-9]{12}:prompt/[0-9a-zA-Z]{10})$`
   */
  PromptArn: string;
  /**
   * A map of tag keys and values
   */
  Tags?: TagsMap;
};
/**
 * Attribute type definition for `AWS::Bedrock::PromptVersion`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-promptversion.html#aws-resource-bedrock-promptversion-return-values}
 */
export type BedrockPromptVersionAttributes = {
  /**
   * ARN of a prompt version resource
   * @minLength `1`
   * @maxLength `2048`
   * @pattern `^(arn:aws(-[^:]+)?:bedrock:[a-z0-9-]{1,20}:[0-9]{12}:prompt/[0-9a-zA-Z]{10}:[0-9]{1,20})$`
   */
  Arn: string;
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
   * Name for a variant.
   * @pattern `^([0-9a-zA-Z][_-]?){1,100}$`
   */
  DefaultVariant: string;
  /**
   * Name for a prompt resource.
   * @pattern `^([0-9a-zA-Z][_-]?){1,100}$`
   */
  Name: string;
  /**
   * Identifier for a Prompt
   * @pattern `^[0-9a-zA-Z]{10}$`
   */
  PromptId: string;
  /**
   * Time Stamp.
   */
  UpdatedAt: string;
  /**
   * List of prompt variants
   * @minLength `1`
   * @maxLength `1`
   */
  Variants: {
    /**
     * Contains model-specific configurations
     */
    AdditionalModelRequestFields: Record<string, any>;
    GenAiResource: {
      /**
       * Target Agent to invoke with Prompt
       */
      Agent: {
        /**
         * Arn representation of the Agent Alias.
         * @maxLength `2048`
         * @pattern `^arn:aws(-[^:]+)?:bedrock:[a-z0-9-]{1,20}:[0-9]{12}:agent-alias/[0-9a-zA-Z]{10}/[0-9a-zA-Z]{10}$`
         */
        AgentIdentifier: string;
      };
    };
    InferenceConfiguration: {
      /**
       * Prompt model inference configuration
       */
      Text: {
        /**
         * Maximum length of output
         * @min `0`
         * @max `4096`
         */
        MaxTokens: number;
        /**
         * List of stop sequences
         * @minLength `0`
         * @maxLength `4`
         */
        StopSequences: string[];
        /**
         * Controls randomness, higher values increase diversity
         * @min `0`
         * @max `1`
         */
        Temperature: number;
        /**
         * Cumulative probability cutoff for token selection
         * @min `0`
         * @max `1`
         */
        TopP: number;
      };
    };
    /**
     * ARN or Id of a Bedrock Foundational Model or Inference Profile, or the ARN of a imported model, or a provisioned throughput ARN for custom models.
     * @minLength `1`
     * @maxLength `2048`
     * @pattern `^(arn:aws(-[^:]{1,12})?:(bedrock|sagemaker):[a-z0-9-]{1,20}:([0-9]{12})?:([a-z-]+/)?)?([a-zA-Z0-9.-]{1,63}){0,2}(([:][a-z0-9-]{1,63}){0,2})?(/[a-z0-9]{1,12})?$`
     */
    ModelId: string;
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
  }[];
  /**
   * Version.
   * @minLength `1`
   * @maxLength `5`
   * @pattern `^(DRAFT|[0-9]{0,4}[1-9][0-9]{0,4})$`
   */
  Version: string;
};
/**
 * Type definition for `AWS::Bedrock::PromptVersion.AdditionalModelRequestFields`.
 * Contains model-specific configurations
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-promptversion-additionalmodelrequestfields.html}
 */
export type AdditionalModelRequestFields = Record<string, any>;
/**
 * Type definition for `AWS::Bedrock::PromptVersion.AnyToolChoice`.
 * Any Tool choice
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-promptversion-anytoolchoice.html}
 */
export type AnyToolChoice = Record<string, any>;
/**
 * Type definition for `AWS::Bedrock::PromptVersion.AutoToolChoice`.
 * Auto Tool choice
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-promptversion-autotoolchoice.html}
 */
export type AutoToolChoice = Record<string, any>;
/**
 * Type definition for `AWS::Bedrock::PromptVersion.CachePointBlock`.
 * CachePointBlock
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-promptversion-cachepointblock.html}
 */
export type CachePointBlock = {
  /**
   * CachePoint types for CachePointBlock
   */
  Type: CachePointType;
};
/**
 * Type definition for `AWS::Bedrock::PromptVersion.CachePointType`.
 * CachePoint types for CachePointBlock
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-promptversion-cachepointtype.html}
 */
export type CachePointType = "default";
/**
 * Type definition for `AWS::Bedrock::PromptVersion.ChatPromptTemplateConfiguration`.
 * Configuration for chat prompt template
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-promptversion-chatprompttemplateconfiguration.html}
 */
export type ChatPromptTemplateConfiguration = {
  /**
   * List of input variables
   * @minLength `0`
   * @maxLength `5`
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
 * Type definition for `AWS::Bedrock::PromptVersion.ContentBlock`.
 * Configuration for chat prompt template
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-promptversion-contentblock.html}
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
 * Type definition for `AWS::Bedrock::PromptVersion.ConversationRole`.
 * Conversation roles for the chat prompt
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-promptversion-conversationrole.html}
 */
export type ConversationRole = "user" | "assistant";
/**
 * Type definition for `AWS::Bedrock::PromptVersion.Message`.
 * Chat prompt Message
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-promptversion-message.html}
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
 * Type definition for `AWS::Bedrock::PromptVersion.PromptAgentResource`.
 * Target Agent to invoke with Prompt
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-promptversion-promptagentresource.html}
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
 * Type definition for `AWS::Bedrock::PromptVersion.PromptGenAiResource`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-promptversion-promptgenairesource.html}
 */
export type PromptGenAiResource = {
  /**
   * Target Agent to invoke with Prompt
   */
  Agent: PromptAgentResource;
};
/**
 * Type definition for `AWS::Bedrock::PromptVersion.PromptInferenceConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-promptversion-promptinferenceconfiguration.html}
 */
export type PromptInferenceConfiguration = {
  /**
   * Prompt model inference configuration
   */
  Text: PromptModelInferenceConfiguration;
};
/**
 * Type definition for `AWS::Bedrock::PromptVersion.PromptInputVariable`.
 * Input variable
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-promptversion-promptinputvariable.html}
 */
export type PromptInputVariable = {
  /**
   * Name for an input variable
   * @pattern `^([0-9a-zA-Z][_-]?){1,100}$`
   */
  Name?: string;
};
/**
 * Type definition for `AWS::Bedrock::PromptVersion.PromptModelInferenceConfiguration`.
 * Prompt model inference configuration
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-promptversion-promptmodelinferenceconfiguration.html}
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
 * Type definition for `AWS::Bedrock::PromptVersion.PromptTemplateConfiguration`.
 * Prompt template configuration
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-promptversion-prompttemplateconfiguration.html}
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
 * Type definition for `AWS::Bedrock::PromptVersion.PromptTemplateType`.
 * Prompt template type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-promptversion-prompttemplatetype.html}
 */
export type PromptTemplateType = "TEXT" | "CHAT";
/**
 * Type definition for `AWS::Bedrock::PromptVersion.PromptVariant`.
 * Prompt variant
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-promptversion-promptvariant.html}
 */
export type PromptVariant = {
  /**
   * Contains model-specific configurations
   */
  AdditionalModelRequestFields?: AdditionalModelRequestFields;
  GenAiResource?: PromptGenAiResource;
  InferenceConfiguration?: PromptInferenceConfiguration;
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
 * Type definition for `AWS::Bedrock::PromptVersion.SpecificToolChoice`.
 * Specific Tool choice
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-promptversion-specifictoolchoice.html}
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
 * Type definition for `AWS::Bedrock::PromptVersion.SystemContentBlock`.
 * Configuration for chat prompt template
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-promptversion-systemcontentblock.html}
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
 * Type definition for `AWS::Bedrock::PromptVersion.TagsMap`.
 * A map of tag keys and values
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-promptversion-tagsmap.html}
 */
export type TagsMap = Record<string, string>;
/**
 * Type definition for `AWS::Bedrock::PromptVersion.TextPromptTemplateConfiguration`.
 * Configuration for text prompt template
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-promptversion-textprompttemplateconfiguration.html}
 */
export type TextPromptTemplateConfiguration = {
  /**
   * CachePointBlock
   */
  CachePoint?: CachePointBlock;
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
 * Type definition for `AWS::Bedrock::PromptVersion.Tool`.
 * Tool details
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-promptversion-tool.html}
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
 * Type definition for `AWS::Bedrock::PromptVersion.ToolChoice`.
 * Tool choice
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-promptversion-toolchoice.html}
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
 * Type definition for `AWS::Bedrock::PromptVersion.ToolConfiguration`.
 * Tool configuration
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-promptversion-toolconfiguration.html}
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
 * Type definition for `AWS::Bedrock::PromptVersion.ToolInputSchema`.
 * Tool input schema json
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-promptversion-toolinputschema.html}
 */
export type ToolInputSchema = {
  Json: Record<string, any>;
};
/**
 * Type definition for `AWS::Bedrock::PromptVersion.ToolSpecification`.
 * Tool specification
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-promptversion-toolspecification.html}
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
 * Definition of AWS::Bedrock::PromptVersion Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-promptversion.html}
 */
export class BedrockPromptVersion extends $Resource<
  "AWS::Bedrock::PromptVersion",
  BedrockPromptVersionProperties,
  BedrockPromptVersionAttributes
> {
  public static readonly Type = "AWS::Bedrock::PromptVersion";
  constructor(
    logicalId: string,
    properties: BedrockPromptVersionProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, BedrockPromptVersion.Type, properties, options);
  }
}
