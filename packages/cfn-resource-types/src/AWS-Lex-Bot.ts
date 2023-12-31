import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::Lex::Bot`.
 * Amazon Lex conversational bot performing automated tasks such as ordering a pizza, booking a hotel, and so on.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html}
 */
export type LexBotProperties = {
  /**
   * Specifies whether to build the bot locales after bot creation completes.
   */
  AutoBuildBotLocales?: boolean;
  /**
   * S3 location of bot definitions zip file, if it's not defined inline in CloudFormation.
   */
  BotFileS3Location?: S3Location;
  /**
   * List of bot locales
   */
  BotLocales?: BotLocale[];
  /**
   * A list of tags to add to the bot, which can only be added at bot creation.
   * @maxLength `200`
   */
  BotTags?: Tag[];
  /**
   * Data privacy setting of the Bot.
   */
  DataPrivacy: {
    ChildDirected: boolean;
  };
  /**
   * A description of the resource
   * @maxLength `200`
   */
  Description?: string;
  /**
   * IdleSessionTTLInSeconds of the resource
   * @min `60`
   * @max `86400`
   */
  IdleSessionTTLInSeconds: number;
  /**
   * Unique name for a resource.
   * @minLength `1`
   * @maxLength `100`
   * @pattern `^([0-9a-zA-Z][_-]?)+$`
   */
  Name: string;
  /**
   * The Amazon Resource Name (ARN) of an IAM role that has permission to access the bot.
   * @minLength `32`
   * @maxLength `2048`
   * @pattern `^arn:aws[a-zA-Z-]*:iam::[0-9]{12}:role/.*$`
   */
  RoleArn: string;
  /**
   * Configuring the test bot alias settings for a given bot
   */
  TestBotAliasSettings?: TestBotAliasSettings;
  /**
   * A list of tags to add to the test alias for a bot, , which can only be added at bot/bot alias creation.
   * @maxLength `200`
   */
  TestBotAliasTags?: Tag[];
};
/**
 * Attribute type definition for `AWS::Lex::Bot`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#aws-resource-lex-bot-return-values}
 */
export type LexBotAttributes = {
  /**
   * @minLength `1`
   * @maxLength `1011`
   * @pattern `^arn:aws[a-zA-Z-]*:lex:[a-z]+-[a-z]+-[0-9]:[0-9]{12}:bot/[0-9a-zA-Z]+$`
   */
  Arn: string;
  /**
   * Unique ID of resource
   * @minLength `10`
   * @maxLength `10`
   * @pattern `^[0-9a-zA-Z]+$`
   */
  Id: string;
};
/**
 * Type definition for `AWS::Lex::Bot.AdvancedRecognitionSetting`.
 * Provides settings that enable advanced recognition settings for slot values.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-advancedrecognitionsetting.html}
 */
export type AdvancedRecognitionSetting = {
  /**
   * Enables using slot values as a custom vocabulary when recognizing user utterances.
   */
  AudioRecognitionStrategy?: AudioRecognitionStrategy;
};
/**
 * Type definition for `AWS::Lex::Bot.AllowedInputTypes`.
 * Specifies the allowed input types.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-allowedinputtypes.html}
 */
export type AllowedInputTypes = {
  /**
   * Indicates whether audio input is allowed.
   */
  AllowAudioInput: boolean;
  /**
   * Indicates whether DTMF input is allowed.
   */
  AllowDTMFInput: boolean;
};
/**
 * Type definition for `AWS::Lex::Bot.AudioAndDTMFInputSpecification`.
 * Specifies the audio and DTMF input specification.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-audioanddtmfinputspecification.html}
 */
export type AudioAndDTMFInputSpecification = {
  /**
   * Specifies the audio input specifications.
   */
  AudioSpecification?: AudioSpecification;
  /**
   * Specifies the settings on DTMF input.
   */
  DTMFSpecification?: DTMFSpecification;
  /**
   * Time for which a bot waits before assuming that the customer isn't going to speak or press a key. This timeout is shared between Audio and DTMF inputs.
   * @min `1`
   */
  StartTimeoutMs: number;
};
/**
 * Type definition for `AWS::Lex::Bot.AudioLogDestination`.
 * The location of audio log files collected when conversation logging is enabled for a bot.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-audiologdestination.html}
 */
export type AudioLogDestination = {
  /**
   * Specifies an Amazon S3 bucket for logging audio conversations
   */
  S3Bucket: S3BucketLogDestination;
};
/**
 * Type definition for `AWS::Lex::Bot.AudioLogSetting`.
 * Settings for logging audio of conversations between Amazon Lex and a user. You specify whether to log audio and the Amazon S3 bucket where the audio file is stored.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-audiologsetting.html}
 */
export type AudioLogSetting = {
  /**
   * The location of audio log files collected when conversation logging is enabled for a bot.
   */
  Destination: AudioLogDestination;
  Enabled: boolean;
};
/**
 * Type definition for `AWS::Lex::Bot.AudioRecognitionStrategy`.
 * Enables using slot values as a custom vocabulary when recognizing user utterances.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-audiorecognitionstrategy.html}
 */
export type AudioRecognitionStrategy = "UseSlotValuesAsCustomVocabulary";
/**
 * Type definition for `AWS::Lex::Bot.AudioSpecification`.
 * Specifies the audio input specifications.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-audiospecification.html}
 */
export type AudioSpecification = {
  /**
   * Time for which a bot waits after the customer stops speaking to assume the utterance is finished.
   * @min `1`
   */
  EndTimeoutMs: number;
  /**
   * Time for how long Amazon Lex waits before speech input is truncated and the speech is returned to application.
   * @min `1`
   */
  MaxLengthMs: number;
};
/**
 * Type definition for `AWS::Lex::Bot.BotAliasLocaleSettings`.
 * You can use this parameter to specify a specific Lambda function to run different functions in different locales.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-botaliaslocalesettings.html}
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
 * Type definition for `AWS::Lex::Bot.BotAliasLocaleSettingsItem`.
 * A locale setting in alias
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-botaliaslocalesettingsitem.html}
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
 * Type definition for `AWS::Lex::Bot.BotLocale`.
 * A locale in the bot, which contains the intents and slot types that the bot uses in conversations with users in the specified language and locale.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-botlocale.html}
 */
export type BotLocale = {
  /**
   * A custom vocabulary is a list of specific phrases that you want Amazon Lex V2 to recognize in the audio input.
   */
  CustomVocabulary?: CustomVocabulary;
  /**
   * A description of the resource
   * @maxLength `200`
   */
  Description?: string;
  /**
   * List of intents
   * @maxLength `1000`
   */
  Intents?: Intent[];
  /**
   * The identifier of the language and locale that the bot will be used in.
   */
  LocaleId: string;
  /**
   * The specified confidence threshold for inserting the AMAZON.FallbackIntent and AMAZON.KendraSearchIntent intents.
   * @min `0`
   * @max `1`
   */
  NluConfidenceThreshold: number;
  /**
   * List of SlotTypes
   * @maxLength `250`
   */
  SlotTypes?: SlotType[];
  /**
   * Settings for using an Amazon Polly voice to communicate with a user.
   */
  VoiceSettings?: VoiceSettings;
};
/**
 * Type definition for `AWS::Lex::Bot.Button`.
 * A button to use on a response card used to gather slot values from a user.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-button.html}
 */
export type Button = {
  /**
   * The text that appears on the button.
   * @minLength `1`
   * @maxLength `50`
   */
  Text: string;
  /**
   * The value returned to Amazon Lex when the user chooses this button.
   * @minLength `1`
   * @maxLength `50`
   */
  Value: string;
};
/**
 * Type definition for `AWS::Lex::Bot.CloudWatchLogGroupLogDestination`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-cloudwatchloggrouplogdestination.html}
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
 * Type definition for `AWS::Lex::Bot.CodeHookSpecification`.
 * Contains information about code hooks that Amazon Lex calls during a conversation.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-codehookspecification.html}
 */
export type CodeHookSpecification = {
  /**
   * Contains information about code hooks that Amazon Lex calls during a conversation.
   */
  LambdaCodeHook: LambdaCodeHook;
};
/**
 * Type definition for `AWS::Lex::Bot.Condition`.
 * Provides an expression that evaluates to true or false.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-condition.html}
 */
export type Condition = {
  /**
   * The expression string that is evaluated.
   * @minLength `1`
   * @maxLength `1024`
   */
  ExpressionString: string;
};
/**
 * Type definition for `AWS::Lex::Bot.ConditionalBranch`.
 * A set of actions that Amazon Lex should run if the condition is matched.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-conditionalbranch.html}
 */
export type ConditionalBranch = {
  /**
   * Contains the expression to evaluate. If the condition is true, the branch's actions are taken.
   */
  Condition: Condition;
  /**
   * The name of the branch.
   * @minLength `1`
   * @maxLength `100`
   * @pattern `^([0-9a-zA-Z][_-]?)+$`
   */
  Name: string;
  /**
   * The next step in the conversation.
   */
  NextStep: DialogState;
  /**
   * Specifies a list of message groups that Amazon Lex uses to respond the user input.
   */
  Response?: ResponseSpecification;
};
/**
 * Type definition for `AWS::Lex::Bot.ConditionalSpecification`.
 * Provides a list of conditional branches. Branches are evaluated in the order that they are entered in the list. The first branch with a condition that evaluates to true is executed. The last branch in the list is the default branch. The default branch should not have any condition expression. The default branch is executed if no other branch has a matching condition.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-conditionalspecification.html}
 */
export type ConditionalSpecification = {
  /**
   * A list of conditional branches. A conditional branch is made up of a condition, a response and a next step. The response and next step are executed when the condition is true.
   * @minLength `1`
   * @maxLength `4`
   */
  ConditionalBranches: ConditionalBranch[];
  /**
   * The conditional branch that should be followed when the conditions for other branches are not satisfied. A conditional branch is made up of a condition, a response and a next step.
   */
  DefaultBranch: DefaultConditionalBranch;
  /**
   * Determines whether a conditional branch is active. When active is false, the conditions are not evaluated.
   */
  IsActive: boolean;
};
/**
 * Type definition for `AWS::Lex::Bot.ConversationLogSettings`.
 * Contains information about code hooks that Amazon Lex calls during a conversation.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-conversationlogsettings.html}
 */
export type ConversationLogSettings = {
  /**
   * List of audio log settings that pertain to the conversation log settings for the bot's TestBotAlias.
   * @maxLength `1`
   */
  AudioLogSettings?: AudioLogSetting[];
  /**
   * List of text log settings that pertain to the conversation log settings for the bot's TestBotAlias
   * @maxLength `1`
   */
  TextLogSettings?: TextLogSetting[];
};
/**
 * Type definition for `AWS::Lex::Bot.CustomPayload`.
 * A message in a custom format defined by the client application.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-custompayload.html}
 */
export type CustomPayload = {
  /**
   * The string that is sent to your application.
   * @minLength `1`
   * @maxLength `1000`
   */
  Value: string;
};
/**
 * Type definition for `AWS::Lex::Bot.CustomVocabulary`.
 * A custom vocabulary is a list of specific phrases that you want Amazon Lex V2 to recognize in the audio input.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-customvocabulary.html}
 */
export type CustomVocabulary = {
  /**
   * @maxLength `500`
   */
  CustomVocabularyItems: CustomVocabularyItem[];
};
/**
 * Type definition for `AWS::Lex::Bot.CustomVocabularyItem`.
 * A custom vocabulary item that contains the phrase to recognize and a weight to give the boost.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-customvocabularyitem.html}
 */
export type CustomVocabularyItem = {
  /**
   * Defines how you want your phrase to look in your transcription output.
   * @minLength `1`
   * @maxLength `100`
   */
  DisplayAs?: string;
  /**
   * Phrase that should be recognized.
   * @minLength `1`
   * @maxLength `100`
   */
  Phrase: string;
  /**
   * The degree to which the phrase recognition is boosted. The weight 0 means that no boosting will be applied and the entry will only be used for performing replacements using the displayAs field.
   * @min `0`
   * @max `3`
   */
  Weight?: number;
};
/**
 * Type definition for `AWS::Lex::Bot.DefaultConditionalBranch`.
 * A set of actions that Amazon Lex should run if none of the other conditions are met.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-defaultconditionalbranch.html}
 */
export type DefaultConditionalBranch = {
  /**
   * The next step in the conversation.
   */
  NextStep?: DialogState;
  /**
   * Specifies a list of message groups that Amazon Lex uses to respond the user input.
   */
  Response?: ResponseSpecification;
};
/**
 * Type definition for `AWS::Lex::Bot.DialogAction`.
 * Defines the action that the bot executes at runtime when the conversation reaches this step.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-dialogaction.html}
 */
export type DialogAction = {
  /**
   * If the dialog action is ElicitSlot, defines the slot to elicit from the user.
   * @minLength `1`
   * @maxLength `100`
   * @pattern `^([0-9a-zA-Z][_-]?)+$`
   */
  SlotToElicit?: string;
  /**
   * When true the next message for the intent is not used.
   */
  SuppressNextMessage?: boolean;
  /**
   * The action that the bot should execute.
   */
  Type: DialogActionType;
};
/**
 * Type definition for `AWS::Lex::Bot.DialogActionType`.
 * The possible values of actions that the conversation can take.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-dialogactiontype.html}
 */
export type DialogActionType =
  | "CloseIntent"
  | "ConfirmIntent"
  | "ElicitIntent"
  | "ElicitSlot"
  | "StartIntent"
  | "FulfillIntent"
  | "EndConversation"
  | "EvaluateConditional"
  | "InvokeDialogCodeHook";
/**
 * Type definition for `AWS::Lex::Bot.DialogCodeHookInvocationSetting`.
 * Settings that specify the dialog code hook that is called by Amazon Lex at a step of the conversation.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-dialogcodehookinvocationsetting.html}
 */
export type DialogCodeHookInvocationSetting = {
  /**
   * Indicates whether a Lambda function should be invoked for the dialog.
   */
  EnableCodeHookInvocation: boolean;
  /**
   * A label that indicates the dialog step from which the dialog code hook is happening.
   * @minLength `1`
   * @maxLength `100`
   * @pattern `^([0-9a-zA-Z][_-]?)+$`
   */
  InvocationLabel?: string;
  /**
   * Determines whether a dialog code hook is used when the intent is activated.
   */
  IsActive: boolean;
  /**
   * Contains the responses and actions that Amazon Lex takes after the Lambda function is complete.
   */
  PostCodeHookSpecification: PostDialogCodeHookInvocationSpecification;
};
/**
 * Type definition for `AWS::Lex::Bot.DialogCodeHookSetting`.
 * Settings that determine the Lambda function that Amazon Lex uses for processing user responses.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-dialogcodehooksetting.html}
 */
export type DialogCodeHookSetting = {
  Enabled: boolean;
};
/**
 * Type definition for `AWS::Lex::Bot.DialogState`.
 * The current state of the conversation with the user.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-dialogstate.html}
 */
export type DialogState = {
  /**
   * Defines the action that the bot executes at runtime when the conversation reaches this step.
   */
  DialogAction?: DialogAction;
  /**
   * Override settings to configure the intent state.
   */
  Intent?: IntentOverride;
  /**
   * List of session attributes to be applied when the conversation reaches this step.
   */
  SessionAttributes?: SessionAttribute[];
};
/**
 * Type definition for `AWS::Lex::Bot.DTMFSpecification`.
 * Specifies the settings on DTMF input.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-dtmfspecification.html}
 */
export type DTMFSpecification = {
  /**
   * The DTMF character that clears the accumulated DTMF digits and immediately ends the input.
   * @pattern `^[A-D0-9#*]{1}$`
   */
  DeletionCharacter: string;
  /**
   * The DTMF character that immediately ends input. If the user does not press this character, the input ends after the end timeout.
   * @pattern `^[A-D0-9#*]{1}$`
   */
  EndCharacter: string;
  /**
   * How long the bot should wait after the last DTMF character input before assuming that the input has concluded.
   * @min `1`
   */
  EndTimeoutMs: number;
  /**
   * The maximum number of DTMF digits allowed in an utterance.
   * @min `1`
   * @max `1024`
   */
  MaxLength: number;
};
/**
 * Type definition for `AWS::Lex::Bot.ElicitationCodeHookInvocationSetting`.
 * Settings that specify the dialog code hook that is called by Amazon Lex between eliciting slot values.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-elicitationcodehookinvocationsetting.html}
 */
export type ElicitationCodeHookInvocationSetting = {
  /**
   * Indicates whether a Lambda function should be invoked for the dialog.
   */
  EnableCodeHookInvocation: boolean;
  /**
   * A label that indicates the dialog step from which the dialog code hook is happening.
   * @minLength `1`
   * @maxLength `100`
   * @pattern `^([0-9a-zA-Z][_-]?)+$`
   */
  InvocationLabel?: string;
};
/**
 * Type definition for `AWS::Lex::Bot.ExternalSourceSetting`.
 * Provides information about the external source of the slot type's definition.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-externalsourcesetting.html}
 */
export type ExternalSourceSetting = {
  /**
   * Settings required for a slot type based on a grammar that you provide.
   */
  GrammarSlotTypeSetting?: GrammarSlotTypeSetting;
};
/**
 * Type definition for `AWS::Lex::Bot.FulfillmentCodeHookSetting`.
 * Settings that determine if a Lambda function should be invoked to fulfill a specific intent.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-fulfillmentcodehooksetting.html}
 */
export type FulfillmentCodeHookSetting = {
  Enabled: boolean;
  /**
   * Provides information for updating the user on the progress of fulfilling an intent.
   */
  FulfillmentUpdatesSpecification?: FulfillmentUpdatesSpecification;
  /**
   * Determines whether the fulfillment code hook is used. When active is false, the code hook doesn't run.
   */
  IsActive?: boolean;
  /**
   * Provides a setting that determines whether the post-fulfillment response is sent to the user.
   */
  PostFulfillmentStatusSpecification?: PostFulfillmentStatusSpecification;
};
/**
 * Type definition for `AWS::Lex::Bot.FulfillmentStartResponseSpecification`.
 * Provides settings for a message that is sent to the user when a fulfillment Lambda function starts running.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-fulfillmentstartresponsespecification.html}
 */
export type FulfillmentStartResponseSpecification = {
  /**
   * Determines whether the user can interrupt the start message while it is playing.
   */
  AllowInterrupt?: boolean;
  /**
   * The delay between when the Lambda fulfillment function starts running and the start message is played. If the Lambda function returns before the delay is over, the start message isn't played.
   * @min `1`
   * @max `900`
   */
  DelayInSeconds: number;
  /**
   * One to 5 message groups that contain update messages. Amazon Lex chooses one of the messages to play to the user.
   * @minLength `1`
   * @maxLength `5`
   */
  MessageGroups: MessageGroup[];
};
/**
 * Type definition for `AWS::Lex::Bot.FulfillmentUpdateResponseSpecification`.
 * Provides settings for a message that is sent periodically to the user while a fulfillment Lambda function is running.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-fulfillmentupdateresponsespecification.html}
 */
export type FulfillmentUpdateResponseSpecification = {
  /**
   * Determines whether the user can interrupt an update message while it is playing.
   */
  AllowInterrupt?: boolean;
  /**
   * The frequency that a message is sent to the user. When the period ends, Amazon Lex chooses a message from the message groups and plays it to the user. If the fulfillment Lambda returns before the first period ends, an update message is not played to the user.
   * @min `1`
   * @max `900`
   */
  FrequencyInSeconds: number;
  /**
   * One to 5 message groups that contain update messages. Amazon Lex chooses one of the messages to play to the user.
   * @minLength `1`
   * @maxLength `5`
   */
  MessageGroups: MessageGroup[];
};
/**
 * Type definition for `AWS::Lex::Bot.FulfillmentUpdatesSpecification`.
 * Provides information for updating the user on the progress of fulfilling an intent.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-fulfillmentupdatesspecification.html}
 */
export type FulfillmentUpdatesSpecification = {
  /**
   * Determines whether fulfillment updates are sent to the user. When this field is true, updates are sent.
   */
  Active: boolean;
  /**
   * Provides settings for a message that is sent to the user when a fulfillment Lambda function starts running.
   */
  StartResponse?: FulfillmentStartResponseSpecification;
  /**
   * The length of time that the fulfillment Lambda function should run before it times out.
   * @min `1`
   * @max `900`
   */
  TimeoutInSeconds?: number;
  /**
   * Provides settings for a message that is sent periodically to the user while a fulfillment Lambda function is running.
   */
  UpdateResponse?: FulfillmentUpdateResponseSpecification;
};
/**
 * Type definition for `AWS::Lex::Bot.GrammarSlotTypeSetting`.
 * Settings required for a slot type based on a grammar that you provide.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-grammarslottypesetting.html}
 */
export type GrammarSlotTypeSetting = {
  /**
   * Describes the Amazon S3 bucket name and location for the grammar that is the source for the slot type.
   */
  Source?: GrammarSlotTypeSource;
};
/**
 * Type definition for `AWS::Lex::Bot.GrammarSlotTypeSource`.
 * Describes the Amazon S3 bucket name and location for the grammar that is the source for the slot type.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-grammarslottypesource.html}
 */
export type GrammarSlotTypeSource = {
  /**
   * The Amazon KMS key required to decrypt the contents of the grammar, if any.
   * @minLength `20`
   * @maxLength `2048`
   * @pattern `^arn:[\w\-]+:kms:[\w\-]+:[\d]{12}:(?:key\/[\w\-]+|alias\/[a-zA-Z0-9:\/_\-]{1,256})$`
   */
  KmsKeyArn?: string;
  /**
   * The name of the S3 bucket that contains the grammar source.
   * @minLength `3`
   * @maxLength `63`
   * @pattern `^[a-z0-9][\.\-a-z0-9]{1,61}[a-z0-9]$`
   */
  S3BucketName: string;
  /**
   * The path to the grammar in the S3 bucket.
   * @minLength `1`
   * @maxLength `1024`
   * @pattern `[\.\-\!\*\_\'\(\)a-zA-Z0-9][\.\-\!\*\_\'\(\)\/a-zA-Z0-9]*$`
   */
  S3ObjectKey: string;
};
/**
 * Type definition for `AWS::Lex::Bot.ImageResponseCard`.
 * A message that defines a response card that the client application can show to the user.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-imageresponsecard.html}
 */
export type ImageResponseCard = {
  /**
   * A list of buttons that should be displayed on the response card.
   * @maxLength `5`
   */
  Buttons?: Button[];
  /**
   * The URL of an image to display on the response card.
   * @minLength `1`
   * @maxLength `250`
   */
  ImageUrl?: string;
  /**
   * The subtitle to display on the response card.
   * @minLength `1`
   * @maxLength `250`
   */
  Subtitle?: string;
  /**
   * The title to display on the response card.
   * @minLength `1`
   * @maxLength `250`
   */
  Title: string;
};
/**
 * Type definition for `AWS::Lex::Bot.InitialResponseSetting`.
 * Configuration setting for a response sent to the user before Amazon Lex starts eliciting slots.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-initialresponsesetting.html}
 */
export type InitialResponseSetting = {
  /**
   * Settings that specify the dialog code hook that is called by Amazon Lex at a step of the conversation.
   */
  CodeHook?: DialogCodeHookInvocationSetting;
  /**
   * Provides a list of conditional branches. Branches are evaluated in the order that they are entered in the list. The first branch with a condition that evaluates to true is executed. The last branch in the list is the default branch. The default branch should not have any condition expression. The default branch is executed if no other branch has a matching condition.
   */
  Conditional?: ConditionalSpecification;
  /**
   * Specifies a list of message groups that Amazon Lex uses to respond the user input.
   */
  InitialResponse?: ResponseSpecification;
  /**
   * The next step in the conversation.
   */
  NextStep?: DialogState;
};
/**
 * Type definition for `AWS::Lex::Bot.InputContext`.
 * InputContext specified for the intent.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-inputcontext.html}
 */
export type InputContext = {
  /**
   * The name of the context.
   * @minLength `1`
   * @maxLength `100`
   * @pattern `^([0-9a-zA-Z][_-]?)+$`
   */
  Name: string;
};
/**
 * Type definition for `AWS::Lex::Bot.Intent`.
 * Represents an action that the user wants to perform.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-intent.html}
 */
export type Intent = {
  /**
   * Description of thr intent.
   * @maxLength `200`
   */
  Description?: string;
  /**
   * Settings that determine the Lambda function that Amazon Lex uses for processing user responses.
   */
  DialogCodeHook?: DialogCodeHookSetting;
  /**
   * Settings that determine if a Lambda function should be invoked to fulfill a specific intent.
   */
  FulfillmentCodeHook?: FulfillmentCodeHookSetting;
  /**
   * Configuration setting for a response sent to the user before Amazon Lex starts eliciting slots.
   */
  InitialResponseSetting?: InitialResponseSetting;
  /**
   * The list of input contexts specified for the intent.
   * @maxLength `5`
   */
  InputContexts?: InputContext[];
  /**
   * Provides a statement the Amazon Lex conveys to the user when the intent is successfully fulfilled.
   */
  IntentClosingSetting?: IntentClosingSetting;
  /**
   * Provides a prompt for making sure that the user is ready for the intent to be fulfilled.
   */
  IntentConfirmationSetting?: IntentConfirmationSetting;
  /**
   * Configuration for searching a Amazon Kendra index specified for the intent.
   */
  KendraConfiguration?: KendraConfiguration;
  /**
   * The name of the intent.
   * @minLength `1`
   * @maxLength `100`
   * @pattern `^([0-9a-zA-Z][_-]?)+$`
   */
  Name: string;
  /**
   * A list of contexts that the intent activates when it is fulfilled.
   * @maxLength `10`
   */
  OutputContexts?: OutputContext[];
  /**
   * A unique identifier for the built-in intent to base this intent on.
   */
  ParentIntentSignature?: string;
  /**
   * A sample utterance that invokes an intent or respond to a slot elicitation prompt.
   */
  SampleUtterances?: SampleUtterance[];
  /**
   * List for slot priorities
   */
  SlotPriorities?: SlotPriority[];
  /**
   * List of slots
   * @maxLength `100`
   */
  Slots?: Slot[];
};
/**
 * Type definition for `AWS::Lex::Bot.IntentClosingSetting`.
 * Provides a statement the Amazon Lex conveys to the user when the intent is successfully fulfilled.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-intentclosingsetting.html}
 */
export type IntentClosingSetting = {
  /**
   * The response that Amazon Lex sends to the user when the intent is complete.
   */
  ClosingResponse?: ResponseSpecification;
  /**
   * A list of conditional branches associated with the intent's closing response. These branches are executed when the nextStep attribute is set to EvalutateConditional.
   */
  Conditional?: ConditionalSpecification;
  /**
   * Specifies whether an intent's closing response is used. When this field is false, the closing response isn't sent to the user. If the active field isn't specified, the default is true.
   */
  IsActive?: boolean;
  /**
   * Specifies the next step that the bot executes after playing the intent's closing response.
   */
  NextStep?: DialogState;
};
/**
 * Type definition for `AWS::Lex::Bot.IntentConfirmationSetting`.
 * Provides a prompt for making sure that the user is ready for the intent to be fulfilled.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-intentconfirmationsetting.html}
 */
export type IntentConfirmationSetting = {
  /**
   * The DialogCodeHookInvocationSetting object associated with intent's confirmation step. The dialog code hook is triggered based on these invocation settings when the confirmation next step or declination next step or failure next step is InvokeDialogCodeHook.
   */
  CodeHook?: DialogCodeHookInvocationSetting;
  /**
   * A list of conditional branches to evaluate after the intent is closed.
   */
  ConfirmationConditional?: ConditionalSpecification;
  /**
   * Specifies the next step that the bot executes when the customer confirms the intent.
   */
  ConfirmationNextStep?: DialogState;
  /**
   * Specifies a list of message groups that Amazon Lex uses to respond the user input.
   */
  ConfirmationResponse?: ResponseSpecification;
  /**
   * A list of conditional branches to evaluate after the intent is declined.
   */
  DeclinationConditional?: ConditionalSpecification;
  /**
   * Specifies the next step that the bot executes when the customer declines the intent.
   */
  DeclinationNextStep?: DialogState;
  /**
   * When the user answers "no" to the question defined in promptSpecification, Amazon Lex responds with this response to acknowledge that the intent was canceled.
   */
  DeclinationResponse?: ResponseSpecification;
  /**
   * The DialogCodeHookInvocationSetting used when the code hook is invoked during confirmation prompt retries.
   */
  ElicitationCodeHook?: ElicitationCodeHookInvocationSetting;
  /**
   * Provides a list of conditional branches. Branches are evaluated in the order that they are entered in the list. The first branch with a condition that evaluates to true is executed. The last branch in the list is the default branch. The default branch should not have any condition expression. The default branch is executed if no other branch has a matching condition.
   */
  FailureConditional?: ConditionalSpecification;
  /**
   * The next step to take in the conversation if the confirmation step fails.
   */
  FailureNextStep?: DialogState;
  /**
   * Specifies a list of message groups that Amazon Lex uses to respond the user input.
   */
  FailureResponse?: ResponseSpecification;
  /**
   * Specifies whether the intent's confirmation is sent to the user. When this field is false, confirmation and declination responses aren't sent. If the active field isn't specified, the default is true.
   */
  IsActive?: boolean;
  /**
   * Prompts the user to confirm the intent. This question should have a yes or no answer.
   */
  PromptSpecification: PromptSpecification;
};
/**
 * Type definition for `AWS::Lex::Bot.IntentOverride`.
 * Override settings to configure the intent state.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-intentoverride.html}
 */
export type IntentOverride = {
  /**
   * The name of the intent. Only required when you're switching intents.
   * @minLength `1`
   * @maxLength `100`
   * @pattern `^([0-9a-zA-Z][_-]?)+$`
   */
  Name?: string;
  /**
   * A map of all of the slot value overrides for the intent.
   */
  Slots?: SlotValueOverrideMap[];
};
/**
 * Type definition for `AWS::Lex::Bot.KendraConfiguration`.
 * Configuration for searching a Amazon Kendra index specified for the intent.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-kendraconfiguration.html}
 */
export type KendraConfiguration = {
  /**
   * The Amazon Resource Name (ARN) of the Amazon Kendra index that you want the AMAZON.KendraSearchIntent intent to search.
   * @minLength `32`
   * @maxLength `2048`
   * @pattern `^arn:aws[a-zA-Z-]*:kendra:[a-z]+-[a-z]+-[0-9]:[0-9]{12}:index/[a-zA-Z0-9][a-zA-Z0-9_-]*$`
   */
  KendraIndex: string;
  /**
   * A query filter that Amazon Lex sends to Amazon Kendra to filter the response from a query.
   * @minLength `1`
   * @maxLength `5000`
   */
  QueryFilterString?: string;
  /**
   * Determines whether the AMAZON.KendraSearchIntent intent uses a custom query string to query the Amazon Kendra index.
   */
  QueryFilterStringEnabled?: boolean;
};
/**
 * Type definition for `AWS::Lex::Bot.LambdaCodeHook`.
 * Contains information about code hooks that Amazon Lex calls during a conversation.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-lambdacodehook.html}
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
 * Type definition for `AWS::Lex::Bot.Message`.
 * The primary message that Amazon Lex should send to the user.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-message.html}
 */
export type Message = {
  /**
   * A message in a custom format defined by the client application.
   */
  CustomPayload?: CustomPayload;
  /**
   * A message that defines a response card that the client application can show to the user.
   */
  ImageResponseCard?: ImageResponseCard;
  /**
   * A message in plain text format.
   */
  PlainTextMessage?: PlainTextMessage;
  /**
   * A message in Speech Synthesis Markup Language (SSML).
   */
  SSMLMessage?: SSMLMessage;
};
/**
 * Type definition for `AWS::Lex::Bot.MessageGroup`.
 * One or more messages that Amazon Lex can send to the user.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-messagegroup.html}
 */
export type MessageGroup = {
  /**
   * The primary message that Amazon Lex should send to the user.
   */
  Message: Message;
  /**
   * Message variations to send to the user.
   * @maxLength `2`
   */
  Variations?: Message[];
};
/**
 * Type definition for `AWS::Lex::Bot.MessageSelectionStrategy`.
 * Indicates how a message is selected from a message group among retries.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-messageselectionstrategy.html}
 */
export type MessageSelectionStrategy = "Random" | "Ordered";
/**
 * Type definition for `AWS::Lex::Bot.MultipleValuesSetting`.
 * Indicates whether a slot can return multiple values.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-multiplevaluessetting.html}
 */
export type MultipleValuesSetting = {
  AllowMultipleValues?: boolean;
};
/**
 * Type definition for `AWS::Lex::Bot.ObfuscationSetting`.
 * Determines whether Amazon Lex obscures slot values in conversation logs.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-obfuscationsetting.html}
 */
export type ObfuscationSetting = {
  /**
   * Value that determines whether Amazon Lex obscures slot values in conversation logs. The default is to obscure the values.
   */
  ObfuscationSettingType: "None" | "DefaultObfuscation";
};
/**
 * Type definition for `AWS::Lex::Bot.OutputContext`.
 * A session context that is activated when an intent is fulfilled.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-outputcontext.html}
 */
export type OutputContext = {
  /**
   * Unique name for a resource.
   * @minLength `1`
   * @maxLength `100`
   * @pattern `^([0-9a-zA-Z][_-]?)+$`
   */
  Name: string;
  /**
   * The amount of time, in seconds, that the output context should remain active.
   * @min `5`
   * @max `86400`
   */
  TimeToLiveInSeconds: number;
  /**
   * The number of conversation turns that the output context should remain active.
   * @min `1`
   * @max `20`
   */
  TurnsToLive: number;
};
/**
 * Type definition for `AWS::Lex::Bot.PlainTextMessage`.
 * A message in plain text format.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-plaintextmessage.html}
 */
export type PlainTextMessage = {
  /**
   * The message to send to the user.
   * @minLength `1`
   * @maxLength `1000`
   */
  Value: string;
};
/**
 * Type definition for `AWS::Lex::Bot.PostDialogCodeHookInvocationSpecification`.
 * Specifies next steps to run after the dialog code hook finishes.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-postdialogcodehookinvocationspecification.html}
 */
export type PostDialogCodeHookInvocationSpecification = {
  /**
   * A list of conditional branches to evaluate after the dialog code hook throws an exception or returns with the State field of the Intent object set to Failed.
   */
  FailureConditional?: ConditionalSpecification;
  /**
   * Specifies the next step the bot runs after the dialog code hook throws an exception or returns with the State field of the Intent object set to Failed.
   */
  FailureNextStep?: DialogState;
  /**
   * Specifies a list of message groups that Amazon Lex uses to respond the user input.
   */
  FailureResponse?: ResponseSpecification;
  /**
   * A list of conditional branches to evaluate after the dialog code hook finishes successfully.
   */
  SuccessConditional?: ConditionalSpecification;
  /**
   * Specifics the next step the bot runs after the dialog code hook finishes successfully.
   */
  SuccessNextStep?: DialogState;
  /**
   * Specifies a list of message groups that Amazon Lex uses to respond the user input.
   */
  SuccessResponse?: ResponseSpecification;
  /**
   * A list of conditional branches to evaluate if the code hook times out.
   */
  TimeoutConditional?: ConditionalSpecification;
  /**
   * Specifies the next step that the bot runs when the code hook times out.
   */
  TimeoutNextStep?: DialogState;
  /**
   * Specifies a list of message groups that Amazon Lex uses to respond the user input.
   */
  TimeoutResponse?: ResponseSpecification;
};
/**
 * Type definition for `AWS::Lex::Bot.PostFulfillmentStatusSpecification`.
 * Provides a setting that determines whether the post-fulfillment response is sent to the user.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-postfulfillmentstatusspecification.html}
 */
export type PostFulfillmentStatusSpecification = {
  /**
   * A list of conditional branches to evaluate after the fulfillment code hook throws an exception or returns with the State field of the Intent object set to Failed.
   */
  FailureConditional?: ConditionalSpecification;
  /**
   * Specifies the next step the bot runs after the fulfillment code hook throws an exception or returns with the State field of the Intent object set to Failed.
   */
  FailureNextStep?: DialogState;
  /**
   * Specifies a list of message groups that Amazon Lex uses to respond the user input.
   */
  FailureResponse?: ResponseSpecification;
  /**
   * A list of conditional branches to evaluate after the fulfillment code hook finishes successfully.
   */
  SuccessConditional?: ConditionalSpecification;
  /**
   * Specifies the next step in the conversation that Amazon Lex invokes when the fulfillment code hook completes successfully.
   */
  SuccessNextStep?: DialogState;
  /**
   * Specifies a list of message groups that Amazon Lex uses to respond the user input.
   */
  SuccessResponse?: ResponseSpecification;
  /**
   * A list of conditional branches to evaluate if the fulfillment code hook times out.
   */
  TimeoutConditional?: ConditionalSpecification;
  /**
   * Specifies the next step that the bot runs when the fulfillment code hook times out.
   */
  TimeoutNextStep?: DialogState;
  /**
   * Specifies a list of message groups that Amazon Lex uses to respond the user input.
   */
  TimeoutResponse?: ResponseSpecification;
};
/**
 * Type definition for `AWS::Lex::Bot.PromptAttemptSpecification`.
 * Specifies the settings on a prompt attempt.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-promptattemptspecification.html}
 */
export type PromptAttemptSpecification = {
  /**
   * Indicates whether the user can interrupt a speech prompt attempt from the bot.
   */
  AllowInterrupt?: boolean;
  /**
   * Specifies the allowed input types.
   */
  AllowedInputTypes: AllowedInputTypes;
  /**
   * Specifies the audio and DTMF input specification.
   */
  AudioAndDTMFInputSpecification?: AudioAndDTMFInputSpecification;
  /**
   * Specifies the text input specifications.
   */
  TextInputSpecification?: TextInputSpecification;
};
/**
 * Type definition for `AWS::Lex::Bot.PromptSpecification`.
 * Prompts the user to confirm the intent.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-promptspecification.html}
 */
export type PromptSpecification = {
  /**
   * Indicates whether the user can interrupt a speech prompt from the bot.
   */
  AllowInterrupt?: boolean;
  /**
   * The maximum number of times the bot tries to elicit a response from the user using this prompt.
   * @min `0`
   * @max `5`
   */
  MaxRetries: number;
  /**
   * One to 5 message groups that contain update messages. Amazon Lex chooses one of the messages to play to the user.
   * @minLength `1`
   * @maxLength `5`
   */
  MessageGroupsList: MessageGroup[];
  /**
   * Indicates how a message is selected from a message group among retries.
   */
  MessageSelectionStrategy?: MessageSelectionStrategy;
  /**
   * Specifies the advanced settings on each attempt of the prompt.
   */
  PromptAttemptsSpecification?: Record<string, PromptAttemptSpecification>;
};
/**
 * Type definition for `AWS::Lex::Bot.ResponseSpecification`.
 * A list of message groups that Amazon Lex uses to respond the user input.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-responsespecification.html}
 */
export type ResponseSpecification = {
  /**
   * Indicates whether the user can interrupt a speech prompt from the bot.
   */
  AllowInterrupt?: boolean;
  /**
   * One to 5 message groups that contain update messages. Amazon Lex chooses one of the messages to play to the user.
   * @minLength `1`
   * @maxLength `5`
   */
  MessageGroupsList: MessageGroup[];
};
/**
 * Type definition for `AWS::Lex::Bot.S3BucketLogDestination`.
 * Specifies an Amazon S3 bucket for logging audio conversations
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-s3bucketlogdestination.html}
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
 * Type definition for `AWS::Lex::Bot.S3Location`.
 * S3 location of bot definitions zip file, if it's not defined inline in CloudFormation.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-s3location.html}
 */
export type S3Location = {
  /**
   * An Amazon S3 bucket in the same AWS Region as your function. The bucket can be in a different AWS account.
   * @minLength `3`
   * @maxLength `63`
   * @pattern `^[a-z0-9][\.\-a-z0-9]{1,61}[a-z0-9]$`
   */
  S3Bucket: string;
  /**
   * The Amazon S3 key of the deployment package.
   * @minLength `1`
   * @maxLength `1024`
   * @pattern `[\.\-\!\*\_\'\(\)a-zA-Z0-9][\.\-\!\*\_\'\(\)\/a-zA-Z0-9]*$`
   */
  S3ObjectKey: string;
  /**
   * For versioned objects, the version of the deployment package object to use. If not specified, the current object version will be used.
   * @minLength `1`
   * @maxLength `1024`
   */
  S3ObjectVersion?: string;
};
/**
 * Type definition for `AWS::Lex::Bot.SampleUtterance`.
 * A sample utterance that invokes an intent or respond to a slot elicitation prompt.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-sampleutterance.html}
 */
export type SampleUtterance = {
  /**
   * The sample utterance that Amazon Lex uses to build its machine-learning model to recognize intents/slots.
   */
  Utterance: string;
};
/**
 * Type definition for `AWS::Lex::Bot.SampleValue`.
 * Defines one of the values for a slot type.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-samplevalue.html}
 */
export type SampleValue = {
  /**
   * The value that can be used for a slot type.
   * @minLength `1`
   * @maxLength `140`
   */
  Value: string;
};
/**
 * Type definition for `AWS::Lex::Bot.SessionAttribute`.
 * Key/value pair representing session-specific context information. It contains application information passed between Amazon Lex and a client application.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-sessionattribute.html}
 */
export type SessionAttribute = {
  /**
   * @minLength `1`
   * @maxLength `1024`
   */
  Key: string;
  /**
   * @minLength `0`
   * @maxLength `1024`
   */
  Value?: string;
};
/**
 * Type definition for `AWS::Lex::Bot.Slot`.
 * A slot is a variable needed to fulfill an intent, where an intent can require zero or more slots.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-slot.html}
 */
export type Slot = {
  /**
   * A description of the resource
   * @maxLength `200`
   */
  Description?: string;
  /**
   * Indicates whether a slot can return multiple values.
   */
  MultipleValuesSetting?: MultipleValuesSetting;
  /**
   * Unique name for a resource.
   * @minLength `1`
   * @maxLength `100`
   * @pattern `^([0-9a-zA-Z][_-]?)+$`
   */
  Name: string;
  /**
   * Determines whether Amazon Lex obscures slot values in conversation logs.
   */
  ObfuscationSetting?: ObfuscationSetting;
  /**
   * The slot type name that is used in the slot. Allows for custom and built-in slot type names
   */
  SlotTypeName: string;
  /**
   * Settings that you can use for eliciting a slot value.
   */
  ValueElicitationSetting: SlotValueElicitationSetting;
};
/**
 * Type definition for `AWS::Lex::Bot.SlotCaptureSetting`.
 * Settings used when Amazon Lex successfully captures a slot value from a user.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-slotcapturesetting.html}
 */
export type SlotCaptureSetting = {
  /**
   * A list of conditional branches to evaluate after the slot value is captured.
   */
  CaptureConditional?: ConditionalSpecification;
  /**
   * Specifies the next step that the bot runs when the slot value is captured before the code hook times out.
   */
  CaptureNextStep?: DialogState;
  /**
   * Specifies a list of message groups that Amazon Lex uses to respond the user input.
   */
  CaptureResponse?: ResponseSpecification;
  /**
   * Code hook called after Amazon Lex successfully captures a slot value.
   */
  CodeHook?: DialogCodeHookInvocationSetting;
  /**
   * Code hook called when Amazon Lex doesn't capture a slot value.
   */
  ElicitationCodeHook?: ElicitationCodeHookInvocationSetting;
  /**
   * A list of conditional branches to evaluate when the slot value isn't captured.
   */
  FailureConditional?: ConditionalSpecification;
  /**
   * Specifies the next step that the bot runs when the slot value code is not recognized.
   */
  FailureNextStep?: DialogState;
  /**
   * Specifies a list of message groups that Amazon Lex uses to respond the user input.
   */
  FailureResponse?: ResponseSpecification;
};
/**
 * Type definition for `AWS::Lex::Bot.SlotConstraint`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-slotconstraint.html}
 */
export type SlotConstraint = "Required" | "Optional";
/**
 * Type definition for `AWS::Lex::Bot.SlotDefaultValue`.
 * The default value to use when a user doesn't provide a value for a slot.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-slotdefaultvalue.html}
 */
export type SlotDefaultValue = {
  /**
   * The default value to use when a user doesn't provide a value for a slot.
   * @minLength `1`
   * @maxLength `202`
   */
  DefaultValue: string;
};
/**
 * Type definition for `AWS::Lex::Bot.SlotDefaultValueSpecification`.
 * A list of values that Amazon Lex should use as the default value for a slot.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-slotdefaultvaluespecification.html}
 */
export type SlotDefaultValueSpecification = {
  /**
   * A list of slot default values
   * @maxLength `10`
   */
  DefaultValueList: SlotDefaultValue[];
};
/**
 * Type definition for `AWS::Lex::Bot.SlotPriority`.
 * The priority that Amazon Lex should use when eliciting slot values from a user.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-slotpriority.html}
 */
export type SlotPriority = {
  /**
   * The priority that a slot should be elicited.
   * @min `0`
   * @max `100`
   */
  Priority: number;
  /**
   * The name of the slot.
   * @minLength `1`
   * @maxLength `100`
   * @pattern `^([0-9a-zA-Z][_-]?)+$`
   */
  SlotName: string;
};
/**
 * Type definition for `AWS::Lex::Bot.SlotShape`.
 * The different shapes that a slot can be in during a conversation.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-slotshape.html}
 */
export type SlotShape = "Scalar" | "List";
/**
 * Type definition for `AWS::Lex::Bot.SlotType`.
 * A custom, extended built-in or a grammar slot type.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-slottype.html}
 */
export type SlotType = {
  /**
   * A description of the resource
   * @maxLength `200`
   */
  Description?: string;
  /**
   * Provides information about the external source of the slot type's definition.
   */
  ExternalSourceSetting?: ExternalSourceSetting;
  /**
   * Unique name for a resource.
   * @minLength `1`
   * @maxLength `100`
   * @pattern `^([0-9a-zA-Z][_-]?)+$`
   */
  Name: string;
  /**
   * The built-in slot type used as a parent of this slot type.
   */
  ParentSlotTypeSignature?: string;
  /**
   * A List of slot type values
   * @maxLength `10000`
   */
  SlotTypeValues?: SlotTypeValue[];
  /**
   * Contains settings used by Amazon Lex to select a slot value.
   */
  ValueSelectionSetting?: SlotValueSelectionSetting;
};
/**
 * Type definition for `AWS::Lex::Bot.SlotTypeValue`.
 * Value that the slot type can take.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-slottypevalue.html}
 */
export type SlotTypeValue = {
  /**
   * Defines one of the values for a slot type.
   */
  SampleValue: SampleValue;
  /**
   * Additional values related to the slot type entry.
   * @maxLength `10000`
   */
  Synonyms?: SampleValue[];
};
/**
 * Type definition for `AWS::Lex::Bot.SlotValue`.
 * The value to set in a slot.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-slotvalue.html}
 */
export type SlotValue = {
  /**
   * The value that Amazon Lex determines for the slot.
   * @minLength `1`
   * @maxLength `202`
   */
  InterpretedValue?: string;
};
/**
 * Type definition for `AWS::Lex::Bot.SlotValueElicitationSetting`.
 * Settings that you can use for eliciting a slot value.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-slotvalueelicitationsetting.html}
 */
export type SlotValueElicitationSetting = {
  /**
   * A list of default values for a slot.
   */
  DefaultValueSpecification?: SlotDefaultValueSpecification;
  /**
   * The prompt that Amazon Lex uses to elicit the slot value from the user.
   */
  PromptSpecification?: PromptSpecification;
  /**
   * If you know a specific pattern that users might respond to an Amazon Lex request for a slot value, you can provide those utterances to improve accuracy.
   */
  SampleUtterances?: SampleUtterance[];
  /**
   * Specifies the next stage in the conversation after capturing the slot.
   */
  SlotCaptureSetting?: SlotCaptureSetting;
  /**
   * Specifies whether the slot is required or optional.
   */
  SlotConstraint: SlotConstraint;
  /**
   * Specifies the prompts that Amazon Lex uses while a bot is waiting for customer input.
   */
  WaitAndContinueSpecification?: WaitAndContinueSpecification;
};
/**
 * Type definition for `AWS::Lex::Bot.SlotValueOverride`.
 * The slot values that Amazon Lex uses when it sets slot values in a dialog step.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-slotvalueoverride.html}
 */
export type SlotValueOverride = {
  /**
   * When the shape value is List, it indicates that the values field contains a list of slot values. When the value is Scalar, it indicates that the value field contains a single value.
   */
  Shape?: SlotShape;
  /**
   * The current value of the slot.
   */
  Value?: SlotValue;
  /**
   * A list of one or more values that the user provided for the slot. For example, for a slot that elicits pizza toppings, the values might be "pepperoni" and "pineapple."
   */
  Values?: SlotValueOverride[];
};
/**
 * Type definition for `AWS::Lex::Bot.SlotValueOverrideMap`.
 * A map of slot names and their overridden values.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-slotvalueoverridemap.html}
 */
export type SlotValueOverrideMap = {
  /**
   * Unique name for a resource.
   * @minLength `1`
   * @maxLength `100`
   * @pattern `^([0-9a-zA-Z][_-]?)+$`
   */
  SlotName?: string;
  /**
   * The slot values that Amazon Lex uses when it sets slot values in a dialog step.
   */
  SlotValueOverride?: SlotValueOverride;
};
/**
 * Type definition for `AWS::Lex::Bot.SlotValueRegexFilter`.
 * A regular expression used to validate the value of a slot.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-slotvalueregexfilter.html}
 */
export type SlotValueRegexFilter = {
  /**
   * Regex pattern
   * @minLength `1`
   * @maxLength `300`
   */
  Pattern: string;
};
/**
 * Type definition for `AWS::Lex::Bot.SlotValueResolutionStrategy`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-slotvalueresolutionstrategy.html}
 */
export type SlotValueResolutionStrategy = "ORIGINAL_VALUE" | "TOP_RESOLUTION";
/**
 * Type definition for `AWS::Lex::Bot.SlotValueSelectionSetting`.
 * Contains settings used by Amazon Lex to select a slot value.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-slotvalueselectionsetting.html}
 */
export type SlotValueSelectionSetting = {
  /**
   * Provides settings that enable advanced recognition settings for slot values.
   */
  AdvancedRecognitionSetting?: AdvancedRecognitionSetting;
  /**
   * A regular expression used to validate the value of a slot.
   */
  RegexFilter?: SlotValueRegexFilter;
  ResolutionStrategy: SlotValueResolutionStrategy;
};
/**
 * Type definition for `AWS::Lex::Bot.SSMLMessage`.
 * A message in Speech Synthesis Markup Language (SSML).
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-ssmlmessage.html}
 */
export type SSMLMessage = {
  /**
   * The SSML text that defines the prompt.
   * @minLength `1`
   * @maxLength `1000`
   */
  Value: string;
};
/**
 * Type definition for `AWS::Lex::Bot.StillWaitingResponseSpecification`.
 * StillWaitingResponseSpecification.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-stillwaitingresponsespecification.html}
 */
export type StillWaitingResponseSpecification = {
  /**
   * Indicates whether the user can interrupt a speech prompt from the bot.
   */
  AllowInterrupt?: boolean;
  /**
   * How often a message should be sent to the user in seconds.
   * @min `1`
   * @max `300`
   */
  FrequencyInSeconds: number;
  /**
   * One to 5 message groups that contain update messages. Amazon Lex chooses one of the messages to play to the user.
   * @minLength `1`
   * @maxLength `5`
   */
  MessageGroupsList: MessageGroup[];
  /**
   * If Amazon Lex waits longer than this length of time in seconds for a response, it will stop sending messages.
   * @min `1`
   * @max `900`
   */
  TimeoutInSeconds: number;
};
/**
 * Type definition for `AWS::Lex::Bot.Tag`.
 * A key-value pair for tagging Lex resources
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-tag.html}
 */
export type Tag = {
  /**
   * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @minLength `1`
   * @maxLength `128`
   */
  Key: string;
  /**
   * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @minLength `0`
   * @maxLength `256`
   */
  Value: string;
};
/**
 * Type definition for `AWS::Lex::Bot.TestBotAliasSettings`.
 * Configuring the test bot alias settings for a given bot
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-testbotaliassettings.html}
 */
export type TestBotAliasSettings = {
  /**
   * A list of bot alias locale settings to add to the bot alias.
   * @maxLength `50`
   */
  BotAliasLocaleSettings?: BotAliasLocaleSettingsItem[];
  /**
   * Contains information about code hooks that Amazon Lex calls during a conversation.
   */
  ConversationLogSettings?: ConversationLogSettings;
  /**
   * A description of the resource
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
 * Type definition for `AWS::Lex::Bot.TextInputSpecification`.
 * Specifies the text input specifications.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-textinputspecification.html}
 */
export type TextInputSpecification = {
  /**
   * Time for which a bot waits before re-prompting a customer for text input.
   * @min `1`
   */
  StartTimeoutMs: number;
};
/**
 * Type definition for `AWS::Lex::Bot.TextLogDestination`.
 * Defines the Amazon CloudWatch Logs destination log group for conversation text logs.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-textlogdestination.html}
 */
export type TextLogDestination = {
  CloudWatch: CloudWatchLogGroupLogDestination;
};
/**
 * Type definition for `AWS::Lex::Bot.TextLogSetting`.
 * Contains information about code hooks that Amazon Lex calls during a conversation.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-textlogsetting.html}
 */
export type TextLogSetting = {
  /**
   * Defines the Amazon CloudWatch Logs destination log group for conversation text logs.
   */
  Destination: TextLogDestination;
  Enabled: boolean;
};
/**
 * Type definition for `AWS::Lex::Bot.VoiceSettings`.
 * Settings for using an Amazon Polly voice to communicate with a user.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-voicesettings.html}
 */
export type VoiceSettings = {
  /**
   * Indicates the type of Amazon Polly voice that Amazon Lex should use for voice interaction with the user. For more information, see the engine parameter of the SynthesizeSpeech operation in the Amazon Polly developer guide.
   */
  Engine?: "standard" | "neural";
  /**
   * The Amazon Polly voice ID that Amazon Lex uses for voice interaction with the user.
   */
  VoiceId: string;
};
/**
 * Type definition for `AWS::Lex::Bot.WaitAndContinueSpecification`.
 * The prompts that Amazon Lex uses while a bot is waiting for customer input.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-waitandcontinuespecification.html}
 */
export type WaitAndContinueSpecification = {
  /**
   * The response that Amazon Lex sends to indicate that the bot is ready to continue the conversation.
   */
  ContinueResponse: ResponseSpecification;
  /**
   * Specifies whether the bot will wait for a user to respond.
   */
  IsActive?: boolean;
  /**
   * The response that Amazon Lex sends periodically to the user to indicate that the bot is still waiting for input from the user.
   */
  StillWaitingResponse?: StillWaitingResponseSpecification;
  /**
   * The response that Amazon Lex sends to indicate that the bot is waiting for the conversation to continue.
   */
  WaitingResponse: ResponseSpecification;
};
/**
 * Resource type definition for `AWS::Lex::Bot`.
 * Amazon Lex conversational bot performing automated tasks such as ordering a pizza, booking a hotel, and so on.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html}
 */
export class LexBot extends $Resource<
  "AWS::Lex::Bot",
  LexBotProperties,
  LexBotAttributes
> {
  public static readonly Type = "AWS::Lex::Bot";
  constructor(
    logicalId: string,
    properties: LexBotProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, LexBot.Type, properties, options);
  }
}
