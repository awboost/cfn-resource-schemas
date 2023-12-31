import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::Lex::BotVersion`.
 * A version is a numbered snapshot of your work that you can publish for use in different parts of your workflow, such as development, beta deployment, and production.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-botversion.html}
 */
export type LexBotVersionProperties = {
  /**
   * Unique ID of resource
   * @minLength `10`
   * @maxLength `10`
   * @pattern `^[0-9a-zA-Z]+$`
   */
  BotId: string;
  /**
   * Specifies the locales that Amazon Lex adds to this version. You can choose the Draft version or any other previously published version for each locale.
   * @minLength `1`
   */
  BotVersionLocaleSpecification: BotVersionLocaleSpecification[];
  /**
   * A description of the version. Use the description to help identify the version in lists.
   * @maxLength `200`
   */
  Description?: string;
};
/**
 * Attribute type definition for `AWS::Lex::BotVersion`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-botversion.html#aws-resource-lex-botversion-return-values}
 */
export type LexBotVersionAttributes = {
  /**
   * The version of a bot.
   * @minLength `1`
   * @maxLength `5`
   * @pattern `^(DRAFT|[0-9]+)$`
   */
  BotVersion: string;
};
/**
 * Type definition for `AWS::Lex::BotVersion.BotVersionLocaleDetails`.
 * The version of a bot used for a bot locale.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-botversion-botversionlocaledetails.html}
 */
export type BotVersionLocaleDetails = {
  /**
   * The version of a bot.
   * @minLength `1`
   * @maxLength `5`
   * @pattern `^(DRAFT|[0-9]+)$`
   */
  SourceBotVersion: string;
};
/**
 * Type definition for `AWS::Lex::BotVersion.BotVersionLocaleSpecification`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-botversion-botversionlocalespecification.html}
 */
export type BotVersionLocaleSpecification = {
  /**
   * The version of a bot used for a bot locale.
   */
  BotVersionLocaleDetails: BotVersionLocaleDetails;
  /**
   * The identifier of the language and locale that the bot will be used in.
   */
  LocaleId: string;
};
/**
 * Resource type definition for `AWS::Lex::BotVersion`.
 * A version is a numbered snapshot of your work that you can publish for use in different parts of your workflow, such as development, beta deployment, and production.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-botversion.html}
 */
export class LexBotVersion extends $Resource<
  "AWS::Lex::BotVersion",
  LexBotVersionProperties,
  LexBotVersionAttributes
> {
  public static readonly Type = "AWS::Lex::BotVersion";
  constructor(
    logicalId: string,
    properties: LexBotVersionProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, LexBotVersion.Type, properties, options);
  }
}
