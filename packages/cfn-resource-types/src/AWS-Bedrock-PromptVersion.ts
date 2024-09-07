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
   * @maxLength `3`
   */
  Variants: {
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
         * Sample from the k most likely next tokens
         * @min `0`
         * @max `500`
         */
        TopK: number;
        /**
         * Cumulative probability cutoff for token selection
         * @min `0`
         * @max `1`
         */
        TopP: number;
      };
    };
    /**
     * ARN or name of a Bedrock model.
     * @minLength `1`
     * @maxLength `2048`
     * @pattern `^(arn:aws(-[^:]+)?:bedrock:[a-z0-9-]{1,20}:(([0-9]{12}:custom-model/[a-z0-9-]{1,63}[.]{1}[a-z0-9-]{1,63}/[a-z0-9]{12})|(:foundation-model/[a-z0-9-]{1,63}[.]{1}[a-z0-9-]{1,63}([.:]?[a-z0-9-]{1,63}))|([0-9]{12}:provisioned-model/[a-z0-9]{12})))|([a-z0-9-]{1,63}[.]{1}[a-z0-9-]{1,63}([.:]?[a-z0-9-]{1,63}))|(([0-9a-zA-Z][_-]?)+)$`
     */
    ModelId: string;
    /**
     * Name for a variant.
     * @pattern `^([0-9a-zA-Z][_-]?){1,100}$`
     */
    Name: string;
    TemplateConfiguration: {
      /**
       * Configuration for text prompt template
       */
      Text: {
        /**
         * List of input variables
         * @minLength `1`
         * @maxLength `5`
         */
        InputVariables: {
          /**
           * Name for an input variable
           * @pattern `^([0-9a-zA-Z][_-]?){1,100}$`
           */
          Name: string;
        }[];
        /**
         * Prompt content for String prompt template
         * @minLength `1`
         * @maxLength `200000`
         */
        Text: string;
      };
    };
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
 * Type definition for `AWS::Bedrock::PromptVersion.PromptTemplateConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-promptversion-prompttemplateconfiguration.html}
 */
export type PromptTemplateConfiguration = {
  /**
   * Configuration for text prompt template
   */
  Text: TextPromptTemplateConfiguration;
};
/**
 * Type definition for `AWS::Bedrock::PromptVersion.PromptTemplateType`.
 * Prompt template type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-promptversion-prompttemplatetype.html}
 */
export type PromptTemplateType = "TEXT";
/**
 * Type definition for `AWS::Bedrock::PromptVersion.PromptVariant`.
 * Prompt variant
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-promptversion-promptvariant.html}
 */
export type PromptVariant = {
  InferenceConfiguration?: PromptInferenceConfiguration;
  /**
   * ARN or name of a Bedrock model.
   * @minLength `1`
   * @maxLength `2048`
   * @pattern `^(arn:aws(-[^:]+)?:bedrock:[a-z0-9-]{1,20}:(([0-9]{12}:custom-model/[a-z0-9-]{1,63}[.]{1}[a-z0-9-]{1,63}/[a-z0-9]{12})|(:foundation-model/[a-z0-9-]{1,63}[.]{1}[a-z0-9-]{1,63}([.:]?[a-z0-9-]{1,63}))|([0-9]{12}:provisioned-model/[a-z0-9]{12})))|([a-z0-9-]{1,63}[.]{1}[a-z0-9-]{1,63}([.:]?[a-z0-9-]{1,63}))|(([0-9a-zA-Z][_-]?)+)$`
   */
  ModelId?: string;
  /**
   * Name for a variant.
   * @pattern `^([0-9a-zA-Z][_-]?){1,100}$`
   */
  Name: string;
  TemplateConfiguration?: PromptTemplateConfiguration;
  /**
   * Prompt template type
   */
  TemplateType: PromptTemplateType;
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
   * List of input variables
   * @minLength `1`
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
