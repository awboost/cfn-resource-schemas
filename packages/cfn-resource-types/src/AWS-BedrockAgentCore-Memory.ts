import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::BedrockAgentCore::Memory
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrockagentcore-memory.html}
 */
export type BedrockAgentCoreMemoryProperties = {
  /**
   * Description of the Memory resource
   */
  Description?: string;
  /**
   * ARN format
   * @pattern `^arn:aws:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[^/].{0,1023}$`
   */
  EncryptionKeyArn?: string;
  /**
   * Duration in days until memory events expire
   * @min `7`
   * @max `365`
   */
  EventExpiryDuration: number;
  /**
   * ARN format
   * @pattern `^arn:aws:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[^/].{0,1023}$`
   */
  MemoryExecutionRoleArn?: string;
  /**
   * List of memory strategies attached to this memory
   */
  MemoryStrategies?: MemoryStrategy[];
  /**
   * Name of the Memory resource
   * @pattern `^[a-zA-Z][a-zA-Z0-9_]{0,47}$`
   */
  Name: string;
  /**
   * A map of tag keys and values
   */
  Tags?: TagsMap;
};
/**
 * Attribute type definition for `AWS::BedrockAgentCore::Memory`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrockagentcore-memory.html#aws-resource-bedrockagentcore-memory-return-values}
 */
export type BedrockAgentCoreMemoryAttributes = {
  CreatedAt: string;
  FailureReason: string;
  /**
   * ARN of the Memory resource
   * @pattern `^arn:aws:bedrock-agentcore:[a-z0-9-]+:[0-9]{12}:memory/[a-zA-Z][a-zA-Z0-9-_]{0,99}-[a-zA-Z0-9]{10}$`
   */
  MemoryArn: string;
  /**
   * Unique identifier for the Memory resource
   * @minLength `12`
   * @pattern `^[a-zA-Z][a-zA-Z0-9-_]{0,99}-[a-zA-Z0-9]{10}$`
   */
  MemoryId: string;
  /**
   * List of memory strategies attached to this memory
   */
  MemoryStrategies: {
    CustomMemoryStrategy: {
      /**
       * Creation timestamp of the memory strategy
       */
      CreatedAt: string;
      /**
       * Status of the memory strategy
       */
      Status: "CREATING" | "ACTIVE" | "DELETING" | "FAILED";
      /**
       * Unique identifier for the memory strategy
       * @minLength `12`
       * @pattern `^[a-zA-Z][a-zA-Z0-9-_]{0,99}-[a-zA-Z0-9]{10}$`
       */
      StrategyId: string;
      /**
       * Type of memory strategy
       */
      Type: "SEMANTIC" | "SUMMARIZATION" | "USER_PREFERENCE" | "CUSTOM";
      /**
       * Last update timestamp of the memory strategy
       */
      UpdatedAt: string;
    };
    SemanticMemoryStrategy: {
      /**
       * Creation timestamp of the memory strategy
       */
      CreatedAt: string;
      /**
       * Status of the memory strategy
       */
      Status: "CREATING" | "ACTIVE" | "DELETING" | "FAILED";
      /**
       * Unique identifier for the memory strategy
       * @minLength `12`
       * @pattern `^[a-zA-Z][a-zA-Z0-9-_]{0,99}-[a-zA-Z0-9]{10}$`
       */
      StrategyId: string;
      /**
       * Type of memory strategy
       */
      Type: "SEMANTIC" | "SUMMARIZATION" | "USER_PREFERENCE" | "CUSTOM";
      /**
       * Last update timestamp of the memory strategy
       */
      UpdatedAt: string;
    };
    SummaryMemoryStrategy: {
      /**
       * Creation timestamp of the memory strategy
       */
      CreatedAt: string;
      /**
       * Status of the memory strategy
       */
      Status: "CREATING" | "ACTIVE" | "DELETING" | "FAILED";
      /**
       * Unique identifier for the memory strategy
       * @minLength `12`
       * @pattern `^[a-zA-Z][a-zA-Z0-9-_]{0,99}-[a-zA-Z0-9]{10}$`
       */
      StrategyId: string;
      /**
       * Type of memory strategy
       */
      Type: "SEMANTIC" | "SUMMARIZATION" | "USER_PREFERENCE" | "CUSTOM";
      /**
       * Last update timestamp of the memory strategy
       */
      UpdatedAt: string;
    };
    UserPreferenceMemoryStrategy: {
      /**
       * Creation timestamp of the memory strategy
       */
      CreatedAt: string;
      /**
       * Status of the memory strategy
       */
      Status: "CREATING" | "ACTIVE" | "DELETING" | "FAILED";
      /**
       * Unique identifier for the memory strategy
       * @minLength `12`
       * @pattern `^[a-zA-Z][a-zA-Z0-9-_]{0,99}-[a-zA-Z0-9]{10}$`
       */
      StrategyId: string;
      /**
       * Type of memory strategy
       */
      Type: "SEMANTIC" | "SUMMARIZATION" | "USER_PREFERENCE" | "CUSTOM";
      /**
       * Last update timestamp of the memory strategy
       */
      UpdatedAt: string;
    };
  }[];
  /**
   * Status of the Memory resource
   */
  Status: MemoryStatus;
  UpdatedAt: string;
};
/**
 * Type definition for `AWS::BedrockAgentCore::Memory.CustomConfigurationInput`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrockagentcore-memory-customconfigurationinput.html}
 */
export type CustomConfigurationInput = {
  SemanticOverride?: SemanticOverride;
  SummaryOverride?: SummaryOverride;
  UserPreferenceOverride?: UserPreferenceOverride;
};
/**
 * Type definition for `AWS::BedrockAgentCore::Memory.CustomMemoryStrategy`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrockagentcore-memory-custommemorystrategy.html}
 */
export type CustomMemoryStrategy = {
  Configuration?: CustomConfigurationInput;
  /**
   * Description of the Memory resource
   */
  Description?: string;
  /**
   * Name of the Memory resource
   * @pattern `^[a-zA-Z][a-zA-Z0-9_]{0,47}$`
   */
  Name: string;
  /**
   * List of namespaces for memory strategy
   * @minLength `1`
   */
  Namespaces?: string[];
};
/**
 * Type definition for `AWS::BedrockAgentCore::Memory.MemoryStatus`.
 * Status of the Memory resource
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrockagentcore-memory-memorystatus.html}
 */
export type MemoryStatus = "CREATING" | "ACTIVE" | "FAILED" | "DELETING";
/**
 * Type definition for `AWS::BedrockAgentCore::Memory.MemoryStrategy`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrockagentcore-memory-memorystrategy.html}
 */
export type MemoryStrategy = {
  CustomMemoryStrategy?: CustomMemoryStrategy;
  SemanticMemoryStrategy?: SemanticMemoryStrategy;
  SummaryMemoryStrategy?: SummaryMemoryStrategy;
  UserPreferenceMemoryStrategy?: UserPreferenceMemoryStrategy;
};
/**
 * Type definition for `AWS::BedrockAgentCore::Memory.SemanticMemoryStrategy`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrockagentcore-memory-semanticmemorystrategy.html}
 */
export type SemanticMemoryStrategy = {
  /**
   * Description of the Memory resource
   */
  Description?: string;
  /**
   * Name of the Memory resource
   * @pattern `^[a-zA-Z][a-zA-Z0-9_]{0,47}$`
   */
  Name: string;
  /**
   * List of namespaces for memory strategy
   * @minLength `1`
   */
  Namespaces?: string[];
};
/**
 * Type definition for `AWS::BedrockAgentCore::Memory.SemanticOverride`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrockagentcore-memory-semanticoverride.html}
 */
export type SemanticOverride = {
  Consolidation?: SemanticOverrideConsolidationConfigurationInput;
  Extraction?: SemanticOverrideExtractionConfigurationInput;
};
/**
 * Type definition for `AWS::BedrockAgentCore::Memory.SemanticOverrideConsolidationConfigurationInput`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrockagentcore-memory-semanticoverrideconsolidationconfigurationinput.html}
 */
export type SemanticOverrideConsolidationConfigurationInput = {
  /**
   * Text prompt for model instructions
   * @minLength `1`
   * @maxLength `30000`
   */
  AppendToPrompt: string;
  ModelId: string;
};
/**
 * Type definition for `AWS::BedrockAgentCore::Memory.SemanticOverrideExtractionConfigurationInput`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrockagentcore-memory-semanticoverrideextractionconfigurationinput.html}
 */
export type SemanticOverrideExtractionConfigurationInput = {
  /**
   * Text prompt for model instructions
   * @minLength `1`
   * @maxLength `30000`
   */
  AppendToPrompt: string;
  ModelId: string;
};
/**
 * Type definition for `AWS::BedrockAgentCore::Memory.SummaryMemoryStrategy`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrockagentcore-memory-summarymemorystrategy.html}
 */
export type SummaryMemoryStrategy = {
  /**
   * Description of the Memory resource
   */
  Description?: string;
  /**
   * Name of the Memory resource
   * @pattern `^[a-zA-Z][a-zA-Z0-9_]{0,47}$`
   */
  Name: string;
  /**
   * List of namespaces for memory strategy
   * @minLength `1`
   */
  Namespaces?: string[];
};
/**
 * Type definition for `AWS::BedrockAgentCore::Memory.SummaryOverride`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrockagentcore-memory-summaryoverride.html}
 */
export type SummaryOverride = {
  Consolidation?: SummaryOverrideConsolidationConfigurationInput;
};
/**
 * Type definition for `AWS::BedrockAgentCore::Memory.SummaryOverrideConsolidationConfigurationInput`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrockagentcore-memory-summaryoverrideconsolidationconfigurationinput.html}
 */
export type SummaryOverrideConsolidationConfigurationInput = {
  /**
   * Text prompt for model instructions
   * @minLength `1`
   * @maxLength `30000`
   */
  AppendToPrompt: string;
  ModelId: string;
};
/**
 * Type definition for `AWS::BedrockAgentCore::Memory.TagsMap`.
 * A map of tag keys and values
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrockagentcore-memory-tagsmap.html}
 */
export type TagsMap = Record<string, string>;
/**
 * Type definition for `AWS::BedrockAgentCore::Memory.UserPreferenceMemoryStrategy`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrockagentcore-memory-userpreferencememorystrategy.html}
 */
export type UserPreferenceMemoryStrategy = {
  /**
   * Description of the Memory resource
   */
  Description?: string;
  /**
   * Name of the Memory resource
   * @pattern `^[a-zA-Z][a-zA-Z0-9_]{0,47}$`
   */
  Name: string;
  /**
   * List of namespaces for memory strategy
   * @minLength `1`
   */
  Namespaces?: string[];
};
/**
 * Type definition for `AWS::BedrockAgentCore::Memory.UserPreferenceOverride`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrockagentcore-memory-userpreferenceoverride.html}
 */
export type UserPreferenceOverride = {
  Consolidation?: UserPreferenceOverrideConsolidationConfigurationInput;
  Extraction?: UserPreferenceOverrideExtractionConfigurationInput;
};
/**
 * Type definition for `AWS::BedrockAgentCore::Memory.UserPreferenceOverrideConsolidationConfigurationInput`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrockagentcore-memory-userpreferenceoverrideconsolidationconfigurationinput.html}
 */
export type UserPreferenceOverrideConsolidationConfigurationInput = {
  /**
   * Text prompt for model instructions
   * @minLength `1`
   * @maxLength `30000`
   */
  AppendToPrompt: string;
  ModelId: string;
};
/**
 * Type definition for `AWS::BedrockAgentCore::Memory.UserPreferenceOverrideExtractionConfigurationInput`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrockagentcore-memory-userpreferenceoverrideextractionconfigurationinput.html}
 */
export type UserPreferenceOverrideExtractionConfigurationInput = {
  /**
   * Text prompt for model instructions
   * @minLength `1`
   * @maxLength `30000`
   */
  AppendToPrompt: string;
  ModelId: string;
};
/**
 * Resource Type definition for AWS::BedrockAgentCore::Memory
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrockagentcore-memory.html}
 */
export class BedrockAgentCoreMemory extends $Resource<
  "AWS::BedrockAgentCore::Memory",
  BedrockAgentCoreMemoryProperties,
  BedrockAgentCoreMemoryAttributes
> {
  public static readonly Type = "AWS::BedrockAgentCore::Memory";
  constructor(
    logicalId: string,
    properties: BedrockAgentCoreMemoryProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, BedrockAgentCoreMemory.Type, properties, options);
  }
}
