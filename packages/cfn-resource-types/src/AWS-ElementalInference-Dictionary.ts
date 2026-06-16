import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::ElementalInference::Dictionary`.
 * Represents a custom dictionary for improving transcription accuracy
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elementalinference-dictionary.html}
 */
export type ElementalInferenceDictionaryProperties = {
  /**
   * @maxLength `40960`
   */
  Entries?: string;
  Language: DictionaryLanguage;
  /**
   * @pattern `^[a-zA-Z0-9]([a-zA-Z0-9-_]{0,126}[a-zA-Z0-9])?$`
   */
  Name: string;
  Tags?: TagMap;
};
/**
 * Attribute type definition for `AWS::ElementalInference::Dictionary`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elementalinference-dictionary.html#aws-resource-elementalinference-dictionary-return-values}
 */
export type ElementalInferenceDictionaryAttributes = {
  Arn: string;
  /**
   * @minLength `1`
   * @maxLength `19`
   * @pattern `^[a-zA-Z0-9]+$`
   */
  Id: string;
};
/**
 * Type definition for `AWS::ElementalInference::Dictionary.DictionaryLanguage`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elementalinference-dictionary-dictionarylanguage.html}
 */
export type DictionaryLanguage = "eng" | "fra" | "ita" | "deu" | "spa" | "por";
/**
 * Type definition for `AWS::ElementalInference::Dictionary.TagMap`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elementalinference-dictionary-tagmap.html}
 */
export type TagMap = Record<string, string>;
/**
 * Resource type definition for `AWS::ElementalInference::Dictionary`.
 * Represents a custom dictionary for improving transcription accuracy
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elementalinference-dictionary.html}
 */
export class ElementalInferenceDictionary extends $Resource<
  "AWS::ElementalInference::Dictionary",
  ElementalInferenceDictionaryProperties,
  ElementalInferenceDictionaryAttributes
> {
  public static readonly Type = "AWS::ElementalInference::Dictionary";
  constructor(
    logicalId: string,
    properties: ElementalInferenceDictionaryProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, ElementalInferenceDictionary.Type, properties, options);
  }
}
