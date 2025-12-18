import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::Lex::BotAlias`.
 * Resource Type definition for a Bot Alias, which enables you to change the version of a bot without updating applications that use the bot
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-botalias.html}
 */
export type LexBotAliasProperties = {
  /**
   * A list of bot alias locale settings to add to the bot alias.
   * @maxLength `50`
   */
  BotAliasLocaleSettings?: BotAliasLocaleSettingsItem[];
  /**
   * A unique identifier for a resource.
   * @minLength `1`
   * @maxLength `100`
   * @pattern `^([0-9a-zA-Z][_-]?)+$`
   */
  BotAliasName: string;
  /**
   * A list of tags to add to the bot alias.
   * @maxLength `200`
   */
  BotAliasTags?: Tag[];
  /**
   * Unique ID of resource
   * @minLength `10`
   * @maxLength `10`
   * @pattern `^[0-9a-zA-Z]+$`
   */
  BotId: string;
  /**
   * The version of a bot.
   * @minLength `1`
   * @maxLength `5`
   * @pattern `^(DRAFT|[0-9]+)$`
   */
  BotVersion?: string;
  /**
   * Contains information about code hooks that Amazon Lex calls during a conversation.
   */
  ConversationLogSettings?: ConversationLogSettings;
  /**
   * A description of the bot alias. Use the description to help identify the bot alias in lists.
   * @maxLength `200`
   */
  Description?: string;
  /**
   * Determines whether Amazon Lex will use Amazon Comprehend to detect the sentiment of user utterances.
   */
  SentimentAnalysisSettings?: {
    /**
     * Enable to call Amazon Comprehend for Sentiment natively within Lex
     */
    DetectSentiment: boolean;
  };
};
/**
 * Attribute type definition for `AWS::Lex::BotAlias`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-botalias.html#aws-resource-lex-botalias-return-values}
 */
export type LexBotAliasAttributes = {
  /**
   * The Amazon Resource Name (ARN) of the bot alias.
   * @maxLength `1000`
   */
  Arn: string;
  /**
   * Unique ID of resource
   * @minLength `10`
   * @maxLength `10`
   * @pattern `^[0-9a-zA-Z]+$`
   */
  BotAliasId: string;
  BotAliasStatus: BotAliasStatus;
};
/**
 * Type definition for `AWS::Lex::BotAlias.AudioLogDestination`.
 * The location of audio log files collected when conversation logging is enabled for a bot.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-botalias-audiologdestination.html}
 */
export type AudioLogDestination = {
  /**
   * Specifies an Amazon S3 bucket for logging audio conversations
   */
  S3Bucket: S3BucketLogDestination;
};
/**
 * Type definition for `AWS::Lex::BotAlias.AudioLogSetting`.
 * Settings for logging audio of conversations between Amazon Lex and a user. You specify whether to log audio and the Amazon S3 bucket where the audio file is stored.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-botalias-audiologsetting.html}
 */
export type AudioLogSetting = {
  /**
   * The location of audio log files collected when conversation logging is enabled for a bot.
   */
  Destination: AudioLogDestination;
  Enabled: boolean;
};
/**
 * Type definition for `AWS::Lex::BotAlias.BotAliasLocaleSettings`.
 * You can use this parameter to specify a specific Lambda function to run different functions in different locales.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-botalias-botaliaslocalesettings.html}
 */
export type BotAliasLocaleSettings = {
  /**
   * Contains information about code hooks that Amazon Lex calls during a conversation.
   */
  CodeHookSpecification?: CodeHookSpecification;
  /**
   * Whether the Lambda code hook is enabled
   */
  Enabled: boolean;
};
/**
 * Type definition for `AWS::Lex::BotAlias.BotAliasLocaleSettingsItem`.
 * A locale setting in alias
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-botalias-botaliaslocalesettingsitem.html}
 */
export type BotAliasLocaleSettingsItem = {
  /**
   * You can use this parameter to specify a specific Lambda function to run different functions in different locales.
   */
  BotAliasLocaleSetting: BotAliasLocaleSettings;
  /**
   * A string used to identify the locale
   * @minLength `1`
   * @maxLength `128`
   */
  LocaleId: string;
};
/**
 * Type definition for `AWS::Lex::BotAlias.BotAliasStatus`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-botalias-botaliasstatus.html}
 */
export type BotAliasStatus = "Creating" | "Available" | "Deleting" | "Failed";
/**
 * Type definition for `AWS::Lex::BotAlias.CloudWatchLogGroupLogDestination`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-botalias-cloudwatchloggrouplogdestination.html}
 */
export type CloudWatchLogGroupLogDestination = {
  /**
   * A string used to identify the groupArn for the Cloudwatch Log Group
   * @minLength `1`
   * @maxLength `2048`
   */
  CloudWatchLogGroupArn: string;
  /**
   * A string containing the value for the Log Prefix
   * @minLength `0`
   * @maxLength `1024`
   */
  LogPrefix: string;
};
/**
 * Type definition for `AWS::Lex::BotAlias.CodeHookSpecification`.
 * Contains information about code hooks that Amazon Lex calls during a conversation.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-botalias-codehookspecification.html}
 */
export type CodeHookSpecification = {
  /**
   * Contains information about code hooks that Amazon Lex calls during a conversation.
   */
  LambdaCodeHook: LambdaCodeHook;
};
/**
 * Type definition for `AWS::Lex::BotAlias.ConversationLogSettings`.
 * Contains information about code hooks that Amazon Lex calls during a conversation.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-botalias-conversationlogsettings.html}
 */
export type ConversationLogSettings = {
  /**
   * List of audio log settings
   * @maxLength `1`
   */
  AudioLogSettings?: AudioLogSetting[];
  /**
   * List of text log settings
   * @maxLength `1`
   */
  TextLogSettings?: TextLogSetting[];
};
/**
 * Type definition for `AWS::Lex::BotAlias.LambdaCodeHook`.
 * Contains information about code hooks that Amazon Lex calls during a conversation.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-botalias-lambdacodehook.html}
 */
export type LambdaCodeHook = {
  /**
   * The version of the request-response that you want Amazon Lex to use to invoke your Lambda function.
   * @minLength `1`
   * @maxLength `5`
   */
  CodeHookInterfaceVersion: string;
  /**
   * The Amazon Resource Name (ARN) of the Lambda function.
   * @minLength `20`
   * @maxLength `2048`
   */
  LambdaArn: string;
};
/**
 * Type definition for `AWS::Lex::BotAlias.S3BucketLogDestination`.
 * Specifies an Amazon S3 bucket for logging audio conversations
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-botalias-s3bucketlogdestination.html}
 */
export type S3BucketLogDestination = {
  /**
   * The Amazon Resource Name (ARN) of an AWS Key Management Service (KMS) key for encrypting audio log files stored in an S3 bucket.
   * @minLength `20`
   * @maxLength `2048`
   * @pattern `^arn:[\w\-]+:kms:[\w\-]+:[\d]{12}:(?:key\/[\w\-]+|alias\/[a-zA-Z0-9:\/_\-]{1,256})$`
   */
  KmsKeyArn?: string;
  /**
   * The Amazon S3 key of the deployment package.
   * @minLength `0`
   * @maxLength `1024`
   */
  LogPrefix: string;
  /**
   * The Amazon Resource Name (ARN) of an Amazon S3 bucket where audio log files are stored.
   * @minLength `1`
   * @maxLength `2048`
   * @pattern `^arn:[\w\-]+:s3:::[a-z0-9][\.\-a-z0-9]{1,61}[a-z0-9]$`
   */
  S3BucketArn: string;
};
/**
 * Type definition for `AWS::Lex::BotAlias.Tag`.
 * A label for tagging Lex resources
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-botalias-tag.html}
 */
export type Tag = {
  /**
   * A string used to identify this tag
   * @minLength `1`
   * @maxLength `128`
   */
  Key: string;
  /**
   * A string containing the value for the tag
   * @minLength `0`
   * @maxLength `256`
   */
  Value: string;
};
/**
 * Type definition for `AWS::Lex::BotAlias.TextLogDestination`.
 * Defines the Amazon CloudWatch Logs destination log group for conversation text logs.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-botalias-textlogdestination.html}
 */
export type TextLogDestination = {
  CloudWatch: CloudWatchLogGroupLogDestination;
};
/**
 * Type definition for `AWS::Lex::BotAlias.TextLogSetting`.
 * Contains information about code hooks that Amazon Lex calls during a conversation.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-botalias-textlogsetting.html}
 */
export type TextLogSetting = {
  /**
   * Defines the Amazon CloudWatch Logs destination log group for conversation text logs.
   */
  Destination: TextLogDestination;
  Enabled: boolean;
};
/**
 * Resource type definition for `AWS::Lex::BotAlias`.
 * Resource Type definition for a Bot Alias, which enables you to change the version of a bot without updating applications that use the bot
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-botalias.html}
 */
export class LexBotAlias extends $Resource<
  "AWS::Lex::BotAlias",
  LexBotAliasProperties,
  LexBotAliasAttributes
> {
  public static readonly Type = "AWS::Lex::BotAlias";
  constructor(
    logicalId: string,
    properties: LexBotAliasProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, LexBotAlias.Type, properties, options);
  }
}
