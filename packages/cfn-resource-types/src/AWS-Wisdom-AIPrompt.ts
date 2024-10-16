import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Definition of AWS::Wisdom::AIPrompt Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-aiprompt.html}
 */
export type WisdomAIPromptProperties = {
  ApiFormat: AIPromptAPIFormat;
  /**
   * @pattern `^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$|^arn:[a-z-]*?:wisdom:[a-z0-9-]*?:[0-9]{12}:[a-z-]*?/[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}(?:/[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}){0,2}$`
   */
  AssistantId?: string;
  /**
   * @minLength `1`
   * @maxLength `255`
   * @pattern `^[a-zA-Z0-9\s_.,-]+`
   */
  Description?: string;
  /**
   * @minLength `1`
   * @maxLength `2048`
   */
  ModelId: string;
  /**
   * @minLength `1`
   * @maxLength `255`
   * @pattern `^[a-zA-Z0-9\s_.,-]+`
   */
  Name?: string;
  Tags?: Tags;
  TemplateConfiguration: AIPromptTemplateConfiguration;
  TemplateType: AIPromptTemplateType;
  Type: AIPromptType;
};
/**
 * Attribute type definition for `AWS::Wisdom::AIPrompt`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-aiprompt.html#aws-resource-wisdom-aiprompt-return-values}
 */
export type WisdomAIPromptAttributes = {
  /**
   * @pattern `^arn:[a-z-]*?:wisdom:[a-z0-9-]*?:[0-9]{12}:[a-z-]*?/[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}(?:/[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}){0,2}$`
   */
  AIPromptArn: string;
  /**
   * @pattern `^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}(:[A-Z0-9_$]+){0,1}$|^arn:[a-z-]*?:wisdom:[a-z0-9-]*?:[0-9]{12}:[a-z-]*?/[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}(?:/[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}){0,2}(:[A-Z0-9_$]+){0,1}$`
   */
  AIPromptId: string;
  /**
   * @pattern `^arn:[a-z-]*?:wisdom:[a-z0-9-]*?:[0-9]{12}:[a-z-]*?/[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}(?:/[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}){0,2}$`
   */
  AssistantArn: string;
};
/**
 * Type definition for `AWS::Wisdom::AIPrompt.AIPromptAPIFormat`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wisdom-aiprompt-aipromptapiformat.html}
 */
export type AIPromptAPIFormat =
  | "ANTHROPIC_CLAUDE_MESSAGES"
  | "ANTHROPIC_CLAUDE_TEXT_COMPLETIONS";
/**
 * Type definition for `AWS::Wisdom::AIPrompt.AIPromptTemplateConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wisdom-aiprompt-aiprompttemplateconfiguration.html}
 */
export type AIPromptTemplateConfiguration = {
  TextFullAIPromptEditTemplateConfiguration: TextFullAIPromptEditTemplateConfiguration;
};
/**
 * Type definition for `AWS::Wisdom::AIPrompt.AIPromptTemplateType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wisdom-aiprompt-aiprompttemplatetype.html}
 */
export type AIPromptTemplateType = "TEXT";
/**
 * Type definition for `AWS::Wisdom::AIPrompt.AIPromptType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wisdom-aiprompt-aiprompttype.html}
 */
export type AIPromptType =
  | "ANSWER_GENERATION"
  | "INTENT_LABELING_GENERATION"
  | "QUERY_REFORMULATION";
/**
 * Type definition for `AWS::Wisdom::AIPrompt.Tags`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wisdom-aiprompt-tags.html}
 */
export type Tags = Record<string, string>;
/**
 * Type definition for `AWS::Wisdom::AIPrompt.TextFullAIPromptEditTemplateConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wisdom-aiprompt-textfullaipromptedittemplateconfiguration.html}
 */
export type TextFullAIPromptEditTemplateConfiguration = {
  /**
   * @minLength `1`
   * @maxLength `200000`
   */
  Text: string;
};
/**
 * Definition of AWS::Wisdom::AIPrompt Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-aiprompt.html}
 */
export class WisdomAIPrompt extends $Resource<
  "AWS::Wisdom::AIPrompt",
  WisdomAIPromptProperties,
  WisdomAIPromptAttributes
> {
  public static readonly Type = "AWS::Wisdom::AIPrompt";
  constructor(
    logicalId: string,
    properties: WisdomAIPromptProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, WisdomAIPrompt.Type, properties, options);
  }
}
