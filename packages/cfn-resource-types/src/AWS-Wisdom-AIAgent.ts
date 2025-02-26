import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Definition of AWS::Wisdom::AIAgent Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-aiagent.html}
 */
export type WisdomAIAgentProperties = {
  /**
   * @pattern `^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$|^arn:[a-z-]*?:wisdom:[a-z0-9-]*?:[0-9]{12}:[a-z-]*?/[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}(?:/[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}){0,2}$`
   */
  AssistantId: string;
  Configuration: AIAgentConfiguration;
  /**
   * @minLength `1`
   * @maxLength `255`
   * @pattern `^[a-zA-Z0-9\s_.,-]+`
   */
  Description?: string;
  /**
   * @minLength `1`
   * @maxLength `255`
   * @pattern `^[a-zA-Z0-9\s_.,-]+`
   */
  Name?: string;
  Tags?: Tags;
  Type: AIAgentType;
};
/**
 * Attribute type definition for `AWS::Wisdom::AIAgent`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-aiagent.html#aws-resource-wisdom-aiagent-return-values}
 */
export type WisdomAIAgentAttributes = {
  /**
   * @pattern `^arn:[a-z-]*?:wisdom:[a-z0-9-]*?:[0-9]{12}:[a-z-]*?/[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}(?:/[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}){0,2}$`
   */
  AIAgentArn: string;
  /**
   * @pattern `^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}(:[A-Z0-9_$]+){0,1}$|^arn:[a-z-]*?:wisdom:[a-z0-9-]*?:[0-9]{12}:[a-z-]*?/[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}(?:/[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}){0,2}(:[A-Z0-9_$]+){0,1}$`
   */
  AIAgentId: string;
  /**
   * @pattern `^arn:[a-z-]*?:wisdom:[a-z0-9-]*?:[0-9]{12}:[a-z-]*?/[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}(?:/[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}){0,2}$`
   */
  AssistantArn: string;
  ModifiedTimeSeconds: number;
};
/**
 * Type definition for `AWS::Wisdom::AIAgent.AIAgentAssociationConfigurationType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wisdom-aiagent-aiagentassociationconfigurationtype.html}
 */
export type AIAgentAssociationConfigurationType = "KNOWLEDGE_BASE";
/**
 * Type definition for `AWS::Wisdom::AIAgent.AIAgentConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wisdom-aiagent-aiagentconfiguration.html}
 */
export type AIAgentConfiguration =
  | {
      ManualSearchAIAgentConfiguration: ManualSearchAIAgentConfiguration;
    }
  | {
      AnswerRecommendationAIAgentConfiguration: AnswerRecommendationAIAgentConfiguration;
    }
  | {
      SelfServiceAIAgentConfiguration: SelfServiceAIAgentConfiguration;
    };
/**
 * Type definition for `AWS::Wisdom::AIAgent.AIAgentType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wisdom-aiagent-aiagenttype.html}
 */
export type AIAgentType =
  | "MANUAL_SEARCH"
  | "ANSWER_RECOMMENDATION"
  | "SELF_SERVICE";
/**
 * Type definition for `AWS::Wisdom::AIAgent.AnswerRecommendationAIAgentConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wisdom-aiagent-answerrecommendationaiagentconfiguration.html}
 */
export type AnswerRecommendationAIAgentConfiguration = {
  /**
   * @pattern `^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}(:[A-Z0-9_$]+){0,1}$`
   */
  AnswerGenerationAIGuardrailId?: string;
  /**
   * @pattern `^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}(:[A-Z0-9_$]+){0,1}$`
   */
  AnswerGenerationAIPromptId?: string;
  AssociationConfigurations?: AssociationConfiguration[];
  /**
   * @pattern `^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}(:[A-Z0-9_$]+){0,1}$`
   */
  IntentLabelingGenerationAIPromptId?: string;
  /**
   * @minLength `1`
   */
  Locale?: string;
  /**
   * @pattern `^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}(:[A-Z0-9_$]+){0,1}$`
   */
  QueryReformulationAIPromptId?: string;
};
/**
 * Type definition for `AWS::Wisdom::AIAgent.AssociationConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wisdom-aiagent-associationconfiguration.html}
 */
export type AssociationConfiguration = {
  AssociationConfigurationData?: AssociationConfigurationData;
  /**
   * @pattern `^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$`
   */
  AssociationId?: string;
  AssociationType?: AIAgentAssociationConfigurationType;
};
/**
 * Type definition for `AWS::Wisdom::AIAgent.AssociationConfigurationData`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wisdom-aiagent-associationconfigurationdata.html}
 */
export type AssociationConfigurationData = {
  KnowledgeBaseAssociationConfigurationData: KnowledgeBaseAssociationConfigurationData;
};
/**
 * Type definition for `AWS::Wisdom::AIAgent.KnowledgeBaseAssociationConfigurationData`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wisdom-aiagent-knowledgebaseassociationconfigurationdata.html}
 */
export type KnowledgeBaseAssociationConfigurationData = {
  ContentTagFilter?: TagFilter;
  /**
   * @min `1`
   * @max `100`
   */
  MaxResults?: number;
  OverrideKnowledgeBaseSearchType?: KnowledgeBaseSearchType;
};
/**
 * Type definition for `AWS::Wisdom::AIAgent.KnowledgeBaseSearchType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wisdom-aiagent-knowledgebasesearchtype.html}
 */
export type KnowledgeBaseSearchType = "HYBRID" | "SEMANTIC";
/**
 * Type definition for `AWS::Wisdom::AIAgent.ManualSearchAIAgentConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wisdom-aiagent-manualsearchaiagentconfiguration.html}
 */
export type ManualSearchAIAgentConfiguration = {
  /**
   * @pattern `^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}(:[A-Z0-9_$]+){0,1}$`
   */
  AnswerGenerationAIGuardrailId?: string;
  /**
   * @pattern `^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}(:[A-Z0-9_$]+){0,1}$`
   */
  AnswerGenerationAIPromptId?: string;
  AssociationConfigurations?: AssociationConfiguration[];
  /**
   * @minLength `1`
   */
  Locale?: string;
};
/**
 * Type definition for `AWS::Wisdom::AIAgent.OrCondition`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wisdom-aiagent-orcondition.html}
 */
export type OrCondition =
  | {
      AndConditions: TagCondition[];
    }
  | {
      TagCondition: TagCondition;
    };
/**
 * Type definition for `AWS::Wisdom::AIAgent.SelfServiceAIAgentConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wisdom-aiagent-selfserviceaiagentconfiguration.html}
 */
export type SelfServiceAIAgentConfiguration = {
  AssociationConfigurations?: AssociationConfiguration[];
  /**
   * @pattern `^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}(:[A-Z0-9_$]+){0,1}$`
   */
  SelfServiceAIGuardrailId?: string;
  /**
   * @pattern `^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}(:[A-Z0-9_$]+){0,1}$`
   */
  SelfServiceAnswerGenerationAIPromptId?: string;
  /**
   * @pattern `^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}(:[A-Z0-9_$]+){0,1}$`
   */
  SelfServicePreProcessingAIPromptId?: string;
};
/**
 * Type definition for `AWS::Wisdom::AIAgent.TagCondition`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wisdom-aiagent-tagcondition.html}
 */
export type TagCondition = {
  /**
   * @minLength `1`
   * @maxLength `128`
   * @pattern `^(?!aws:)[a-zA-Z+-=._:/]+$`
   */
  Key: string;
  /**
   * @minLength `1`
   * @maxLength `256`
   */
  Value?: string;
};
/**
 * Type definition for `AWS::Wisdom::AIAgent.TagFilter`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wisdom-aiagent-tagfilter.html}
 */
export type TagFilter =
  | {
      TagCondition: TagCondition;
    }
  | {
      AndConditions: TagCondition[];
    }
  | {
      OrConditions: OrCondition[];
    };
/**
 * Type definition for `AWS::Wisdom::AIAgent.Tags`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wisdom-aiagent-tags.html}
 */
export type Tags = Record<string, string>;
/**
 * Definition of AWS::Wisdom::AIAgent Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-aiagent.html}
 */
export class WisdomAIAgent extends $Resource<
  "AWS::Wisdom::AIAgent",
  WisdomAIAgentProperties,
  WisdomAIAgentAttributes
> {
  public static readonly Type = "AWS::Wisdom::AIAgent";
  constructor(
    logicalId: string,
    properties: WisdomAIAgentProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, WisdomAIAgent.Type, properties, options);
  }
}
