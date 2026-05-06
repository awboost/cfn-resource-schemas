import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::Chime::AppInstanceBot
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-chime-appinstancebot.html}
 */
export type ChimeAppInstanceBotProperties = {
  /**
   * The ARN of the AppInstance.
   * @minLength `5`
   * @maxLength `1600`
   * @pattern `^arn:[a-z0-9-\.]{1,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[^/].{0,1023}$`
   */
  AppInstanceArn: string;
  /**
   * A structure that contains configuration data.
   */
  Configuration: Configuration;
  /**
   * The metadata of the AppInstanceBot.
   * @minLength `0`
   * @maxLength `1024`
   * @pattern `.*`
   */
  Metadata?: string;
  /**
   * The name of the AppInstanceBot.
   * @minLength `0`
   * @maxLength `256`
   * @pattern `^[\u0009\u000A\u000D\u0020-\u007E\u0085\u00A0-\uD7FF\uE000-\uFFFD\u10000-\u10FFFF]*$`
   */
  Name?: string;
  /**
   * The tags assigned to the AppInstanceBot.
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::Chime::AppInstanceBot`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-chime-appinstancebot.html#aws-resource-chime-appinstancebot-return-values}
 */
export type ChimeAppInstanceBotAttributes = {
  /**
   * The ARN of the AppInstanceBot.
   * @minLength `5`
   * @maxLength `1600`
   * @pattern `^arn:[a-z0-9-\.]{1,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[^/].{0,1023}$`
   */
  AppInstanceBotArn: string;
  /**
   * The time at which the AppInstanceBot was created. In epoch milliseconds.
   */
  CreatedTimestamp: number;
  /**
   * The time at which the AppInstanceBot was last updated. In epoch milliseconds.
   */
  LastUpdatedTimestamp: number;
};
/**
 * Type definition for `AWS::Chime::AppInstanceBot.Configuration`.
 * A structure that contains configuration data.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-chime-appinstancebot-configuration.html}
 */
export type Configuration = {
  /**
   * The configuration for an Amazon Lex V2 bot.
   */
  Lex: LexConfiguration;
};
/**
 * Type definition for `AWS::Chime::AppInstanceBot.InvokedBy`.
 * Specifies the type of message that triggers a bot.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-chime-appinstancebot-invokedby.html}
 */
export type InvokedBy = {
  /**
   * Sets standard messages as the bot trigger.
   */
  StandardMessages: "AUTO" | "ALL" | "MENTIONS" | "NONE";
  /**
   * Sets targeted messages as the bot trigger.
   */
  TargetedMessages: "ALL" | "NONE";
};
/**
 * Type definition for `AWS::Chime::AppInstanceBot.LexConfiguration`.
 * The configuration for an Amazon Lex V2 bot.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-chime-appinstancebot-lexconfiguration.html}
 */
export type LexConfiguration = {
  /**
   * Specifies the type of message that triggers a bot.
   */
  InvokedBy?: InvokedBy;
  /**
   * The ARN of the Amazon Lex V2 bot's alias.
   * @minLength `15`
   * @maxLength `2048`
   * @pattern `^arn:aws:lex:[a-z]{2}-[a-z]+-\d{1}:\d{12}:bot-alias/[A-Z0-9]{10}/[A-Z0-9]{10}$`
   */
  LexBotAliasArn: string;
  /**
   * Identifies the Amazon Lex V2 bot's language and locale.
   */
  LocaleId: string;
  /**
   * Determines whether the Amazon Lex V2 bot responds to all standard messages. Control messages are not supported.
   */
  RespondsTo?: "STANDARD_MESSAGES";
  /**
   * The name of the welcome intent configured in the Amazon Lex V2 bot.
   * @minLength `1`
   * @maxLength `100`
   * @pattern `^([A-Za-z]_?)+$`
   */
  WelcomeIntent?: string;
};
/**
 * Type definition for `AWS::Chime::AppInstanceBot.Tag`.
 * A tag object containing a key-value pair.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-chime-appinstancebot-tag.html}
 */
export type Tag = {
  /**
   * The key in a tag.
   * @minLength `1`
   * @maxLength `128`
   */
  Key: string;
  /**
   * The value in a tag.
   * @minLength `1`
   * @maxLength `256`
   */
  Value: string;
};
/**
 * Resource Type definition for AWS::Chime::AppInstanceBot
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-chime-appinstancebot.html}
 */
export class ChimeAppInstanceBot extends $Resource<
  "AWS::Chime::AppInstanceBot",
  ChimeAppInstanceBotProperties,
  ChimeAppInstanceBotAttributes
> {
  public static readonly Type = "AWS::Chime::AppInstanceBot";
  constructor(
    logicalId: string,
    properties: ChimeAppInstanceBotProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, ChimeAppInstanceBot.Type, properties, options);
  }
}
