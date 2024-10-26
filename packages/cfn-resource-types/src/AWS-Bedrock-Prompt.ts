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
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-prompt-prompttemplateconfiguration.html}
 */
export type PromptTemplateConfiguration = {
  /**
   * Configuration for text prompt template
   */
  Text: TextPromptTemplateConfiguration;
};
/**
 * Type definition for `AWS::Bedrock::Prompt.PromptTemplateType`.
 * Prompt template type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-prompt-prompttemplatetype.html}
 */
export type PromptTemplateType = "TEXT";
/**
 * Type definition for `AWS::Bedrock::Prompt.PromptVariant`.
 * Prompt variant
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-prompt-promptvariant.html}
 */
export type PromptVariant = {
  InferenceConfiguration?: PromptInferenceConfiguration;
  /**
   * ARN or Id of a Bedrock Foundational Model or Inference Profile, or the ARN of a imported model, or a provisioned throughput ARN for custom models.
   * @minLength `1`
   * @maxLength `2048`
   * @pattern `^(arn:aws(-[^:]+)?:bedrock:[a-z0-9-]{1,20}:(([0-9]{12}:custom-model/[a-z0-9-]{1,63}[.]{1}[a-z0-9-]{1,63}/[a-z0-9]{12})|(:foundation-model/[a-z0-9-]{1,63}[.]{1}[a-z0-9-]{1,63}([.:]?[a-z0-9-]{1,63}))|([0-9]{12}:imported-model/[a-z0-9]{12})|([0-9]{12}:provisioned-model/[a-z0-9]{12})))|([a-z0-9-]{1,63}[.]{1}[a-z0-9-]{1,63}([.:]?[a-z0-9-]{1,63}))|(([0-9a-zA-Z][_-]?)+)|(arn:aws(|-us-gov|-cn|-iso|-iso-b):bedrock:(|[0-9a-z-]{1,20}):(|[0-9]{12}):(inference-profile|application-inference-profile)/[a-zA-Z0-9-:.]+)|([a-zA-Z0-9-:.]+)$`
   */
  ModelId?: string;
  /**
   * Name for a variant.
   * @pattern `^([0-9a-zA-Z][_-]?){1,100}$`
   */
  Name: string;
  TemplateConfiguration: PromptTemplateConfiguration;
  /**
   * Prompt template type
   */
  TemplateType: PromptTemplateType;
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
