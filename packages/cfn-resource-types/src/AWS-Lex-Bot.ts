import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::Lex::Bot`.
 * Amazon Lex conversational bot performing automated tasks such as ordering a pizza, booking a hotel, and so on.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html}
 */
export type LexBotProperties = {
  AutoBuildBotLocales?: boolean;
  BotFileS3Location?: S3Location;
  BotLocales?: BotLocale[];
  /**
   * @maxLength `200`
   */
  BotTags?: Tag[];
  DataPrivacy: {
    ChildDirected: boolean;
  };
  /**
   * A description of the resource
   * @maxLength `2000`
   */
  Description?: string;
  /**
   * @min `60`
   * @max `86400`
   */
  IdleSessionTTLInSeconds: number;
  /**
   * @minLength `1`
   * @maxLength `100`
   * @pattern `^([0-9a-zA-Z][_-]?)+$`
   */
  Name: string;
  Replication?: Replication;
  /**
   * @minLength `32`
   * @maxLength `2048`
   * @pattern `^arn:aws[a-zA-Z-]*:iam::[0-9]{12}:role/.*$`
   */
  RoleArn: string;
  TestBotAliasSettings?: TestBotAliasSettings;
  /**
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
   * @pattern `^arn:aws[a-zA-Z-]*:lex:[a-z]+-(?:[a-z]+-)*[0-9]:[0-9]{12}:bot/[0-9a-zA-Z]+$`
   */
  Arn: string;
  /**
   * @minLength `10`
   * @maxLength `10`
   * @pattern `^[0-9a-zA-Z]+$`
   */
  Id: string;
};
/**
 * Type definition for `AWS::Lex::Bot.AdvancedRecognitionSetting`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-advancedrecognitionsetting.html}
 */
export type AdvancedRecognitionSetting = {
  AudioRecognitionStrategy?: AudioRecognitionStrategy;
};
/**
 * Type definition for `AWS::Lex::Bot.AllowedInputTypes`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-allowedinputtypes.html}
 */
export type AllowedInputTypes = {
  AllowAudioInput: boolean;
  AllowDTMFInput: boolean;
};
/**
 * Type definition for `AWS::Lex::Bot.AudioAndDTMFInputSpecification`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-audioanddtmfinputspecification.html}
 */
export type AudioAndDTMFInputSpecification = {
  AudioSpecification?: AudioSpecification;
  DTMFSpecification?: DTMFSpecification;
  /**
   * @min `1`
   */
  StartTimeoutMs: number;
};
/**
 * Type definition for `AWS::Lex::Bot.AudioLogDestination`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-audiologdestination.html}
 */
export type AudioLogDestination = {
  S3Bucket: S3BucketLogDestination;
};
/**
 * Type definition for `AWS::Lex::Bot.AudioLogSetting`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-audiologsetting.html}
 */
export type AudioLogSetting = {
  Destination: AudioLogDestination;
  Enabled: boolean;
};
/**
 * Type definition for `AWS::Lex::Bot.AudioRecognitionStrategy`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-audiorecognitionstrategy.html}
 */
export type AudioRecognitionStrategy = "UseSlotValuesAsCustomVocabulary";
/**
 * Type definition for `AWS::Lex::Bot.AudioSpecification`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-audiospecification.html}
 */
export type AudioSpecification = {
  /**
   * @min `1`
   */
  EndTimeoutMs: number;
  /**
   * @min `1`
   */
  MaxLengthMs: number;
};
/**
 * Type definition for `AWS::Lex::Bot.BedrockAgentIntentConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-bedrockagentintentconfiguration.html}
 */
export type BedrockAgentIntentConfiguration = {
  BedrockAgentConfiguration?: {
    /**
     * @minLength `1`
     * @maxLength `5000`
     */
    BedrockAgentAliasId?: string;
    /**
     * @minLength `1`
     * @maxLength `5000`
     */
    BedrockAgentId?: string;
  };
  BedrockAgentIntentKnowledgeBaseConfiguration?: {
    /**
     * @minLength `1`
     * @maxLength `5000`
     */
    BedrockKnowledgeBaseArn: string;
    BedrockModelConfiguration: BedrockModelSpecification;
  };
};
/**
 * Type definition for `AWS::Lex::Bot.BedrockModelSpecification`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-bedrockmodelspecification.html}
 */
export type BedrockModelSpecification = {
  BedrockGuardrailConfiguration?: {
    /**
     * @minLength `1`
     * @maxLength `5000`
     */
    BedrockGuardrailIdentifier?: string;
    /**
     * @minLength `1`
     * @maxLength `5000`
     */
    BedrockGuardrailVersion?: string;
  };
  /**
   * @minLength `1`
   * @maxLength `5000`
   */
  BedrockModelCustomPrompt?: string;
  BedrockTraceStatus?: "ENABLED" | "DISABLED";
  /**
   * @minLength `1`
   * @maxLength `5000`
   */
  ModelArn: string;
};
/**
 * Type definition for `AWS::Lex::Bot.BotAliasLocaleSettings`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-botaliaslocalesettings.html}
 */
export type BotAliasLocaleSettings = {
  CodeHookSpecification?: CodeHookSpecification;
  Enabled: boolean;
};
/**
 * Type definition for `AWS::Lex::Bot.BotAliasLocaleSettingsItem`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-botaliaslocalesettingsitem.html}
 */
export type BotAliasLocaleSettingsItem = {
  BotAliasLocaleSetting: BotAliasLocaleSettings;
  /**
   * @minLength `1`
   * @maxLength `128`
   */
  LocaleId: string;
};
/**
 * Type definition for `AWS::Lex::Bot.BotLocale`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-botlocale.html}
 */
export type BotLocale = {
  CustomVocabulary?: CustomVocabulary;
  /**
   * A description of the resource
   * @maxLength `2000`
   */
  Description?: string;
  GenerativeAISettings?: GenerativeAISettings;
  /**
   * @maxLength `1000`
   */
  Intents?: Intent[];
  LocaleId: string;
  /**
   * @min `0`
   * @max `1`
   */
  NluConfidenceThreshold: number;
  /**
   * @maxLength `250`
   */
  SlotTypes?: SlotType[];
  VoiceSettings?: VoiceSettings;
};
/**
 * Type definition for `AWS::Lex::Bot.Button`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-button.html}
 */
export type Button = {
  /**
   * @minLength `1`
   * @maxLength `50`
   */
  Text: string;
  /**
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
   * @minLength `1`
   * @maxLength `2048`
   */
  CloudWatchLogGroupArn: string;
  /**
   * @minLength `0`
   * @maxLength `1024`
   */
  LogPrefix: string;
};
/**
 * Type definition for `AWS::Lex::Bot.CodeHookSpecification`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-codehookspecification.html}
 */
export type CodeHookSpecification = {
  LambdaCodeHook: LambdaCodeHook;
};
/**
 * Type definition for `AWS::Lex::Bot.CompositeSlotTypeSetting`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-compositeslottypesetting.html}
 */
export type CompositeSlotTypeSetting = {
  /**
   * @minLength `1`
   * @maxLength `6`
   */
  SubSlots?: SubSlotTypeComposition[];
};
/**
 * Type definition for `AWS::Lex::Bot.Condition`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-condition.html}
 */
export type Condition = {
  /**
   * @minLength `1`
   * @maxLength `1024`
   */
  ExpressionString: string;
};
/**
 * Type definition for `AWS::Lex::Bot.ConditionalBranch`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-conditionalbranch.html}
 */
export type ConditionalBranch = {
  Condition: Condition;
  /**
   * @minLength `1`
   * @maxLength `100`
   * @pattern `^([0-9a-zA-Z][_-]?)+$`
   */
  Name: string;
  NextStep: DialogState;
  Response?: ResponseSpecification;
};
/**
 * Type definition for `AWS::Lex::Bot.ConditionalSpecification`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-conditionalspecification.html}
 */
export type ConditionalSpecification = {
  /**
   * @minLength `1`
   * @maxLength `4`
   */
  ConditionalBranches: ConditionalBranch[];
  DefaultBranch: DefaultConditionalBranch;
  IsActive: boolean;
};
/**
 * Type definition for `AWS::Lex::Bot.ConversationLogSettings`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-conversationlogsettings.html}
 */
export type ConversationLogSettings = {
  /**
   * @maxLength `1`
   */
  AudioLogSettings?: AudioLogSetting[];
  /**
   * @maxLength `1`
   */
  TextLogSettings?: TextLogSetting[];
};
/**
 * Type definition for `AWS::Lex::Bot.CustomPayload`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-custompayload.html}
 */
export type CustomPayload = {
  /**
   * @minLength `1`
   * @maxLength `1000`
   */
  Value: string;
};
/**
 * Type definition for `AWS::Lex::Bot.CustomVocabulary`.
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
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-customvocabularyitem.html}
 */
export type CustomVocabularyItem = {
  /**
   * @minLength `1`
   * @maxLength `100`
   */
  DisplayAs?: string;
  /**
   * @minLength `1`
   * @maxLength `100`
   */
  Phrase: string;
  /**
   * @min `0`
   * @max `3`
   */
  Weight?: number;
};
/**
 * Type definition for `AWS::Lex::Bot.DefaultConditionalBranch`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-defaultconditionalbranch.html}
 */
export type DefaultConditionalBranch = {
  NextStep?: DialogState;
  Response?: ResponseSpecification;
};
/**
 * Type definition for `AWS::Lex::Bot.DialogAction`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-dialogaction.html}
 */
export type DialogAction = {
  /**
   * @minLength `1`
   * @maxLength `100`
   * @pattern `^([0-9a-zA-Z][_-]?)+$`
   */
  SlotToElicit?: string;
  SuppressNextMessage?: boolean;
  Type: DialogActionType;
};
/**
 * Type definition for `AWS::Lex::Bot.DialogActionType`.
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
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-dialogcodehookinvocationsetting.html}
 */
export type DialogCodeHookInvocationSetting = {
  EnableCodeHookInvocation: boolean;
  /**
   * @minLength `1`
   * @maxLength `100`
   * @pattern `^([0-9a-zA-Z][_-]?)+$`
   */
  InvocationLabel?: string;
  IsActive: boolean;
  PostCodeHookSpecification: PostDialogCodeHookInvocationSpecification;
};
/**
 * Type definition for `AWS::Lex::Bot.DialogCodeHookSetting`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-dialogcodehooksetting.html}
 */
export type DialogCodeHookSetting = {
  Enabled: boolean;
};
/**
 * Type definition for `AWS::Lex::Bot.DialogState`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-dialogstate.html}
 */
export type DialogState = {
  DialogAction?: DialogAction;
  Intent?: IntentOverride;
  SessionAttributes?: SessionAttribute[];
};
/**
 * Type definition for `AWS::Lex::Bot.DTMFSpecification`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-dtmfspecification.html}
 */
export type DTMFSpecification = {
  /**
   * @pattern `^[A-D0-9#*]{1}$`
   */
  DeletionCharacter: string;
  /**
   * @pattern `^[A-D0-9#*]{1}$`
   */
  EndCharacter: string;
  /**
   * @min `1`
   */
  EndTimeoutMs: number;
  /**
   * @min `1`
   * @max `1024`
   */
  MaxLength: number;
};
/**
 * Type definition for `AWS::Lex::Bot.ElicitationCodeHookInvocationSetting`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-elicitationcodehookinvocationsetting.html}
 */
export type ElicitationCodeHookInvocationSetting = {
  EnableCodeHookInvocation: boolean;
  /**
   * @minLength `1`
   * @maxLength `100`
   * @pattern `^([0-9a-zA-Z][_-]?)+$`
   */
  InvocationLabel?: string;
};
/**
 * Type definition for `AWS::Lex::Bot.ExternalSourceSetting`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-externalsourcesetting.html}
 */
export type ExternalSourceSetting = {
  GrammarSlotTypeSetting?: GrammarSlotTypeSetting;
};
/**
 * Type definition for `AWS::Lex::Bot.FulfillmentCodeHookSetting`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-fulfillmentcodehooksetting.html}
 */
export type FulfillmentCodeHookSetting = {
  Enabled: boolean;
  FulfillmentUpdatesSpecification?: FulfillmentUpdatesSpecification;
  IsActive?: boolean;
  PostFulfillmentStatusSpecification?: PostFulfillmentStatusSpecification;
};
/**
 * Type definition for `AWS::Lex::Bot.FulfillmentStartResponseSpecification`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-fulfillmentstartresponsespecification.html}
 */
export type FulfillmentStartResponseSpecification = {
  AllowInterrupt?: boolean;
  /**
   * @min `1`
   * @max `900`
   */
  DelayInSeconds: number;
  /**
   * @minLength `1`
   * @maxLength `5`
   */
  MessageGroups: MessageGroup[];
};
/**
 * Type definition for `AWS::Lex::Bot.FulfillmentUpdateResponseSpecification`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-fulfillmentupdateresponsespecification.html}
 */
export type FulfillmentUpdateResponseSpecification = {
  AllowInterrupt?: boolean;
  /**
   * @min `1`
   * @max `900`
   */
  FrequencyInSeconds: number;
  /**
   * @minLength `1`
   * @maxLength `5`
   */
  MessageGroups: MessageGroup[];
};
/**
 * Type definition for `AWS::Lex::Bot.FulfillmentUpdatesSpecification`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-fulfillmentupdatesspecification.html}
 */
export type FulfillmentUpdatesSpecification = {
  Active: boolean;
  StartResponse?: FulfillmentStartResponseSpecification;
  /**
   * @min `1`
   * @max `900`
   */
  TimeoutInSeconds?: number;
  UpdateResponse?: FulfillmentUpdateResponseSpecification;
};
/**
 * Type definition for `AWS::Lex::Bot.GenerativeAISettings`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-generativeaisettings.html}
 */
export type GenerativeAISettings = {
  BuildtimeSettings?: {
    DescriptiveBotBuilderSpecification?: {
      BedrockModelSpecification?: BedrockModelSpecification;
      Enabled: boolean;
    };
    SampleUtteranceGenerationSpecification?: {
      BedrockModelSpecification?: BedrockModelSpecification;
      Enabled: boolean;
    };
  };
  RuntimeSettings?: {
    NluImprovementSpecification?: {
      Enabled: boolean;
    };
    SlotResolutionImprovementSpecification?: {
      BedrockModelSpecification?: BedrockModelSpecification;
      Enabled: boolean;
    };
  };
};
/**
 * Type definition for `AWS::Lex::Bot.GrammarSlotTypeSetting`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-grammarslottypesetting.html}
 */
export type GrammarSlotTypeSetting = {
  Source?: GrammarSlotTypeSource;
};
/**
 * Type definition for `AWS::Lex::Bot.GrammarSlotTypeSource`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-grammarslottypesource.html}
 */
export type GrammarSlotTypeSource = {
  /**
   * @minLength `20`
   * @maxLength `2048`
   * @pattern `^arn:[\w\-]+:kms:[\w\-]+:[\d]{12}:(?:key\/[\w\-]+|alias\/[a-zA-Z0-9:\/_\-]{1,256})$`
   */
  KmsKeyArn?: string;
  /**
   * @minLength `3`
   * @maxLength `63`
   * @pattern `^[a-z0-9][\.\-a-z0-9]{1,61}[a-z0-9]$`
   */
  S3BucketName: string;
  /**
   * @minLength `1`
   * @maxLength `1024`
   * @pattern `[\.\-\!\*\_\'\(\)a-zA-Z0-9][\.\-\!\*\_\'\(\)\/a-zA-Z0-9]*$`
   */
  S3ObjectKey: string;
};
/**
 * Type definition for `AWS::Lex::Bot.ImageResponseCard`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-imageresponsecard.html}
 */
export type ImageResponseCard = {
  /**
   * @maxLength `5`
   */
  Buttons?: Button[];
  /**
   * @minLength `1`
   * @maxLength `250`
   */
  ImageUrl?: string;
  /**
   * @minLength `1`
   * @maxLength `250`
   */
  Subtitle?: string;
  /**
   * @minLength `1`
   * @maxLength `250`
   */
  Title: string;
};
/**
 * Type definition for `AWS::Lex::Bot.InitialResponseSetting`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-initialresponsesetting.html}
 */
export type InitialResponseSetting = {
  CodeHook?: DialogCodeHookInvocationSetting;
  Conditional?: ConditionalSpecification;
  InitialResponse?: ResponseSpecification;
  NextStep?: DialogState;
};
/**
 * Type definition for `AWS::Lex::Bot.InputContext`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-inputcontext.html}
 */
export type InputContext = {
  /**
   * @minLength `1`
   * @maxLength `100`
   * @pattern `^([0-9a-zA-Z][_-]?)+$`
   */
  Name: string;
};
/**
 * Type definition for `AWS::Lex::Bot.Intent`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-intent.html}
 */
export type Intent = {
  BedrockAgentIntentConfiguration?: BedrockAgentIntentConfiguration;
  /**
   * Description of thr intent.
   * @maxLength `2000`
   */
  Description?: string;
  DialogCodeHook?: DialogCodeHookSetting;
  FulfillmentCodeHook?: FulfillmentCodeHookSetting;
  InitialResponseSetting?: InitialResponseSetting;
  /**
   * @maxLength `5`
   */
  InputContexts?: InputContext[];
  IntentClosingSetting?: IntentClosingSetting;
  IntentConfirmationSetting?: IntentConfirmationSetting;
  KendraConfiguration?: KendraConfiguration;
  /**
   * @minLength `1`
   * @maxLength `100`
   * @pattern `^([0-9a-zA-Z][_-]?)+$`
   */
  Name: string;
  /**
   * @maxLength `10`
   */
  OutputContexts?: OutputContext[];
  ParentIntentSignature?: string;
  QInConnectIntentConfiguration?: QInConnectIntentConfiguration;
  QnAIntentConfiguration?: QnAIntentConfiguration;
  SampleUtterances?: SampleUtterance[];
  SlotPriorities?: SlotPriority[];
  /**
   * @maxLength `100`
   */
  Slots?: Slot[];
};
/**
 * Type definition for `AWS::Lex::Bot.IntentClosingSetting`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-intentclosingsetting.html}
 */
export type IntentClosingSetting = {
  ClosingResponse?: ResponseSpecification;
  Conditional?: ConditionalSpecification;
  IsActive?: boolean;
  NextStep?: DialogState;
};
/**
 * Type definition for `AWS::Lex::Bot.IntentConfirmationSetting`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-intentconfirmationsetting.html}
 */
export type IntentConfirmationSetting = {
  CodeHook?: DialogCodeHookInvocationSetting;
  ConfirmationConditional?: ConditionalSpecification;
  ConfirmationNextStep?: DialogState;
  ConfirmationResponse?: ResponseSpecification;
  DeclinationConditional?: ConditionalSpecification;
  DeclinationNextStep?: DialogState;
  DeclinationResponse?: ResponseSpecification;
  ElicitationCodeHook?: ElicitationCodeHookInvocationSetting;
  FailureConditional?: ConditionalSpecification;
  FailureNextStep?: DialogState;
  FailureResponse?: ResponseSpecification;
  IsActive?: boolean;
  PromptSpecification: PromptSpecification;
};
/**
 * Type definition for `AWS::Lex::Bot.IntentOverride`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-intentoverride.html}
 */
export type IntentOverride = {
  /**
   * @minLength `1`
   * @maxLength `100`
   * @pattern `^([0-9a-zA-Z][_-]?)+$`
   */
  Name?: string;
  Slots?: SlotValueOverrideMap[];
};
/**
 * Type definition for `AWS::Lex::Bot.KendraConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-kendraconfiguration.html}
 */
export type KendraConfiguration = {
  /**
   * @minLength `32`
   * @maxLength `2048`
   * @pattern `^arn:aws[a-zA-Z-]*:kendra:[a-z]+-(?:[a-z]+-)*[0-9]:[0-9]{12}:index/[a-zA-Z0-9][a-zA-Z0-9_-]*$`
   */
  KendraIndex: string;
  /**
   * @minLength `1`
   * @maxLength `5000`
   */
  QueryFilterString?: string;
  QueryFilterStringEnabled?: boolean;
};
/**
 * Type definition for `AWS::Lex::Bot.LambdaCodeHook`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-lambdacodehook.html}
 */
export type LambdaCodeHook = {
  /**
   * @minLength `1`
   * @maxLength `5`
   */
  CodeHookInterfaceVersion: string;
  /**
   * @minLength `20`
   * @maxLength `2048`
   */
  LambdaArn: string;
};
/**
 * Type definition for `AWS::Lex::Bot.Message`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-message.html}
 */
export type Message = {
  CustomPayload?: CustomPayload;
  ImageResponseCard?: ImageResponseCard;
  PlainTextMessage?: PlainTextMessage;
  SSMLMessage?: SSMLMessage;
};
/**
 * Type definition for `AWS::Lex::Bot.MessageGroup`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-messagegroup.html}
 */
export type MessageGroup = {
  Message: Message;
  /**
   * @maxLength `2`
   */
  Variations?: Message[];
};
/**
 * Type definition for `AWS::Lex::Bot.MessageSelectionStrategy`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-messageselectionstrategy.html}
 */
export type MessageSelectionStrategy = "Random" | "Ordered";
/**
 * Type definition for `AWS::Lex::Bot.MultipleValuesSetting`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-multiplevaluessetting.html}
 */
export type MultipleValuesSetting = {
  AllowMultipleValues?: boolean;
};
/**
 * Type definition for `AWS::Lex::Bot.ObfuscationSetting`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-obfuscationsetting.html}
 */
export type ObfuscationSetting = {
  ObfuscationSettingType: "None" | "DefaultObfuscation";
};
/**
 * Type definition for `AWS::Lex::Bot.OutputContext`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-outputcontext.html}
 */
export type OutputContext = {
  /**
   * @minLength `1`
   * @maxLength `100`
   * @pattern `^([0-9a-zA-Z][_-]?)+$`
   */
  Name: string;
  /**
   * @min `5`
   * @max `86400`
   */
  TimeToLiveInSeconds: number;
  /**
   * @min `1`
   * @max `20`
   */
  TurnsToLive: number;
};
/**
 * Type definition for `AWS::Lex::Bot.PlainTextMessage`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-plaintextmessage.html}
 */
export type PlainTextMessage = {
  /**
   * @minLength `1`
   * @maxLength `1000`
   */
  Value: string;
};
/**
 * Type definition for `AWS::Lex::Bot.PostDialogCodeHookInvocationSpecification`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-postdialogcodehookinvocationspecification.html}
 */
export type PostDialogCodeHookInvocationSpecification = {
  FailureConditional?: ConditionalSpecification;
  FailureNextStep?: DialogState;
  FailureResponse?: ResponseSpecification;
  SuccessConditional?: ConditionalSpecification;
  SuccessNextStep?: DialogState;
  SuccessResponse?: ResponseSpecification;
  TimeoutConditional?: ConditionalSpecification;
  TimeoutNextStep?: DialogState;
  TimeoutResponse?: ResponseSpecification;
};
/**
 * Type definition for `AWS::Lex::Bot.PostFulfillmentStatusSpecification`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-postfulfillmentstatusspecification.html}
 */
export type PostFulfillmentStatusSpecification = {
  FailureConditional?: ConditionalSpecification;
  FailureNextStep?: DialogState;
  FailureResponse?: ResponseSpecification;
  SuccessConditional?: ConditionalSpecification;
  SuccessNextStep?: DialogState;
  SuccessResponse?: ResponseSpecification;
  TimeoutConditional?: ConditionalSpecification;
  TimeoutNextStep?: DialogState;
  TimeoutResponse?: ResponseSpecification;
};
/**
 * Type definition for `AWS::Lex::Bot.PromptAttemptSpecification`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-promptattemptspecification.html}
 */
export type PromptAttemptSpecification = {
  AllowInterrupt?: boolean;
  AllowedInputTypes: AllowedInputTypes;
  AudioAndDTMFInputSpecification?: AudioAndDTMFInputSpecification;
  TextInputSpecification?: TextInputSpecification;
};
/**
 * Type definition for `AWS::Lex::Bot.PromptSpecification`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-promptspecification.html}
 */
export type PromptSpecification = {
  AllowInterrupt?: boolean;
  /**
   * @min `0`
   * @max `5`
   */
  MaxRetries: number;
  /**
   * @minLength `1`
   * @maxLength `5`
   */
  MessageGroupsList: MessageGroup[];
  MessageSelectionStrategy?: MessageSelectionStrategy;
  PromptAttemptsSpecification?: Record<string, PromptAttemptSpecification>;
};
/**
 * Type definition for `AWS::Lex::Bot.QInConnectIntentConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-qinconnectintentconfiguration.html}
 */
export type QInConnectIntentConfiguration = {
  QInConnectAssistantConfiguration?: {
    /**
     * @minLength `1`
     * @maxLength `200`
     * @pattern `^arn:[a-z-]*?:wisdom:[a-z0-9-]*?:[0-9]{12}:[a-z-]*?/[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}(?:/[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}){0,2}$`
     */
    AssistantArn: string;
  };
};
/**
 * Type definition for `AWS::Lex::Bot.QnAIntentConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-qnaintentconfiguration.html}
 */
export type QnAIntentConfiguration = {
  BedrockModelConfiguration: BedrockModelSpecification;
  DataSourceConfiguration: {
    BedrockKnowledgeStoreConfiguration?: {
      BKBExactResponseFields?: {
        /**
         * @minLength `1`
         * @maxLength `5000`
         */
        AnswerField?: string;
      };
      /**
       * @minLength `1`
       * @maxLength `5000`
       */
      BedrockKnowledgeBaseArn?: string;
      ExactResponse?: boolean;
    };
    KendraConfiguration?: QnAKendraConfiguration;
    OpensearchConfiguration?: {
      /**
       * @minLength `1`
       * @maxLength `5000`
       */
      DomainEndpoint?: string;
      ExactResponse?: boolean;
      ExactResponseFields?: {
        /**
         * @minLength `1`
         * @maxLength `5000`
         */
        AnswerField?: string;
        /**
         * @minLength `1`
         * @maxLength `5000`
         */
        QuestionField?: string;
      };
      IncludeFields?: string[];
      /**
       * @minLength `1`
       * @maxLength `5000`
       */
      IndexName?: string;
    };
  };
};
/**
 * Type definition for `AWS::Lex::Bot.QnAKendraConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-qnakendraconfiguration.html}
 */
export type QnAKendraConfiguration = {
  ExactResponse: boolean;
  /**
   * @minLength `1`
   * @maxLength `5000`
   */
  KendraIndex: string;
  /**
   * @minLength `1`
   * @maxLength `5000`
   */
  QueryFilterString?: string;
  QueryFilterStringEnabled: boolean;
};
/**
 * Type definition for `AWS::Lex::Bot.Replication`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-replication.html}
 */
export type Replication = {
  /**
   * @minLength `1`
   * @maxLength `1`
   */
  ReplicaRegions: string[];
};
/**
 * Type definition for `AWS::Lex::Bot.ResponseSpecification`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-responsespecification.html}
 */
export type ResponseSpecification = {
  AllowInterrupt?: boolean;
  /**
   * @minLength `1`
   * @maxLength `5`
   */
  MessageGroupsList: MessageGroup[];
};
/**
 * Type definition for `AWS::Lex::Bot.S3BucketLogDestination`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-s3bucketlogdestination.html}
 */
export type S3BucketLogDestination = {
  /**
   * @minLength `20`
   * @maxLength `2048`
   * @pattern `^arn:[\w\-]+:kms:[\w\-]+:[\d]{12}:(?:key\/[\w\-]+|alias\/[a-zA-Z0-9:\/_\-]{1,256})$`
   */
  KmsKeyArn?: string;
  /**
   * @minLength `0`
   * @maxLength `1024`
   */
  LogPrefix: string;
  /**
   * @minLength `1`
   * @maxLength `2048`
   * @pattern `^arn:[\w\-]+:s3:::[a-z0-9][\.\-a-z0-9]{1,61}[a-z0-9]$`
   */
  S3BucketArn: string;
};
/**
 * Type definition for `AWS::Lex::Bot.S3Location`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-s3location.html}
 */
export type S3Location = {
  /**
   * @minLength `3`
   * @maxLength `63`
   * @pattern `^[a-z0-9][\.\-a-z0-9]{1,61}[a-z0-9]$`
   */
  S3Bucket: string;
  /**
   * @minLength `1`
   * @maxLength `1024`
   * @pattern `[\.\-\!\*\_\'\(\)a-zA-Z0-9][\.\-\!\*\_\'\(\)\/a-zA-Z0-9]*$`
   */
  S3ObjectKey: string;
  /**
   * @minLength `1`
   * @maxLength `1024`
   */
  S3ObjectVersion?: string;
};
/**
 * Type definition for `AWS::Lex::Bot.SampleUtterance`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-sampleutterance.html}
 */
export type SampleUtterance = {
  Utterance: string;
};
/**
 * Type definition for `AWS::Lex::Bot.SampleValue`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-samplevalue.html}
 */
export type SampleValue = {
  /**
   * @minLength `1`
   * @maxLength `140`
   */
  Value: string;
};
/**
 * Type definition for `AWS::Lex::Bot.SessionAttribute`.
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
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-slot.html}
 */
export type Slot = {
  /**
   * A description of the resource
   * @maxLength `2000`
   */
  Description?: string;
  MultipleValuesSetting?: MultipleValuesSetting;
  /**
   * @minLength `1`
   * @maxLength `100`
   * @pattern `^([0-9a-zA-Z][_-]?)+$`
   */
  Name: string;
  ObfuscationSetting?: ObfuscationSetting;
  SlotTypeName: string;
  SubSlotSetting?: SubSlotSetting;
  ValueElicitationSetting: SlotValueElicitationSetting;
};
/**
 * Type definition for `AWS::Lex::Bot.SlotCaptureSetting`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-slotcapturesetting.html}
 */
export type SlotCaptureSetting = {
  CaptureConditional?: ConditionalSpecification;
  CaptureNextStep?: DialogState;
  CaptureResponse?: ResponseSpecification;
  CodeHook?: DialogCodeHookInvocationSetting;
  ElicitationCodeHook?: ElicitationCodeHookInvocationSetting;
  FailureConditional?: ConditionalSpecification;
  FailureNextStep?: DialogState;
  FailureResponse?: ResponseSpecification;
};
/**
 * Type definition for `AWS::Lex::Bot.SlotConstraint`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-slotconstraint.html}
 */
export type SlotConstraint = "Required" | "Optional";
/**
 * Type definition for `AWS::Lex::Bot.SlotDefaultValue`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-slotdefaultvalue.html}
 */
export type SlotDefaultValue = {
  /**
   * @minLength `1`
   * @maxLength `202`
   */
  DefaultValue: string;
};
/**
 * Type definition for `AWS::Lex::Bot.SlotDefaultValueSpecification`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-slotdefaultvaluespecification.html}
 */
export type SlotDefaultValueSpecification = {
  /**
   * @maxLength `10`
   */
  DefaultValueList: SlotDefaultValue[];
};
/**
 * Type definition for `AWS::Lex::Bot.SlotPriority`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-slotpriority.html}
 */
export type SlotPriority = {
  /**
   * @min `0`
   * @max `100`
   */
  Priority: number;
  /**
   * @minLength `1`
   * @maxLength `100`
   * @pattern `^([0-9a-zA-Z][_-]?)+$`
   */
  SlotName: string;
};
/**
 * Type definition for `AWS::Lex::Bot.SlotShape`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-slotshape.html}
 */
export type SlotShape = "Scalar" | "List";
/**
 * Type definition for `AWS::Lex::Bot.SlotType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-slottype.html}
 */
export type SlotType = {
  CompositeSlotTypeSetting?: CompositeSlotTypeSetting;
  /**
   * A description of the resource
   * @maxLength `2000`
   */
  Description?: string;
  ExternalSourceSetting?: ExternalSourceSetting;
  /**
   * @minLength `1`
   * @maxLength `100`
   * @pattern `^([0-9a-zA-Z][_-]?)+$`
   */
  Name: string;
  ParentSlotTypeSignature?: string;
  /**
   * @maxLength `10000`
   */
  SlotTypeValues?: SlotTypeValue[];
  ValueSelectionSetting?: SlotValueSelectionSetting;
};
/**
 * Type definition for `AWS::Lex::Bot.SlotTypeValue`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-slottypevalue.html}
 */
export type SlotTypeValue = {
  SampleValue: SampleValue;
  /**
   * @maxLength `10000`
   */
  Synonyms?: SampleValue[];
};
/**
 * Type definition for `AWS::Lex::Bot.SlotValue`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-slotvalue.html}
 */
export type SlotValue = {
  /**
   * @minLength `1`
   * @maxLength `202`
   */
  InterpretedValue?: string;
};
/**
 * Type definition for `AWS::Lex::Bot.SlotValueElicitationSetting`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-slotvalueelicitationsetting.html}
 */
export type SlotValueElicitationSetting = {
  DefaultValueSpecification?: SlotDefaultValueSpecification;
  PromptSpecification?: PromptSpecification;
  SampleUtterances?: SampleUtterance[];
  SlotCaptureSetting?: SlotCaptureSetting;
  SlotConstraint: SlotConstraint;
  WaitAndContinueSpecification?: WaitAndContinueSpecification;
};
/**
 * Type definition for `AWS::Lex::Bot.SlotValueOverride`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-slotvalueoverride.html}
 */
export type SlotValueOverride = {
  Shape?: SlotShape;
  Value?: SlotValue;
  Values?: SlotValueOverride[];
};
/**
 * Type definition for `AWS::Lex::Bot.SlotValueOverrideMap`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-slotvalueoverridemap.html}
 */
export type SlotValueOverrideMap = {
  /**
   * @minLength `1`
   * @maxLength `100`
   * @pattern `^([0-9a-zA-Z][_-]?)+$`
   */
  SlotName?: string;
  SlotValueOverride?: SlotValueOverride;
};
/**
 * Type definition for `AWS::Lex::Bot.SlotValueRegexFilter`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-slotvalueregexfilter.html}
 */
export type SlotValueRegexFilter = {
  /**
   * @minLength `1`
   * @maxLength `300`
   */
  Pattern: string;
};
/**
 * Type definition for `AWS::Lex::Bot.SlotValueResolutionStrategy`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-slotvalueresolutionstrategy.html}
 */
export type SlotValueResolutionStrategy =
  | "ORIGINAL_VALUE"
  | "TOP_RESOLUTION"
  | "CONCATENATION";
/**
 * Type definition for `AWS::Lex::Bot.SlotValueSelectionSetting`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-slotvalueselectionsetting.html}
 */
export type SlotValueSelectionSetting = {
  AdvancedRecognitionSetting?: AdvancedRecognitionSetting;
  RegexFilter?: SlotValueRegexFilter;
  ResolutionStrategy: SlotValueResolutionStrategy;
};
/**
 * Type definition for `AWS::Lex::Bot.Specifications`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-specifications.html}
 */
export type Specifications = {
  /**
   * @minLength `1`
   * @maxLength `25`
   * @pattern `^((AMAZON\.)[a-zA-Z_]+?|[0-9a-zA-Z]+)$`
   */
  SlotTypeId: string;
  ValueElicitationSetting: SubSlotValueElicitationSetting;
};
/**
 * Type definition for `AWS::Lex::Bot.SSMLMessage`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-ssmlmessage.html}
 */
export type SSMLMessage = {
  /**
   * @minLength `1`
   * @maxLength `1000`
   */
  Value: string;
};
/**
 * Type definition for `AWS::Lex::Bot.StillWaitingResponseSpecification`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-stillwaitingresponsespecification.html}
 */
export type StillWaitingResponseSpecification = {
  AllowInterrupt?: boolean;
  /**
   * @min `1`
   * @max `300`
   */
  FrequencyInSeconds: number;
  /**
   * @minLength `1`
   * @maxLength `5`
   */
  MessageGroupsList: MessageGroup[];
  /**
   * @min `1`
   * @max `900`
   */
  TimeoutInSeconds: number;
};
/**
 * Type definition for `AWS::Lex::Bot.SubSlotSetting`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-subslotsetting.html}
 */
export type SubSlotSetting = {
  /**
   * @minLength `1`
   * @maxLength `1000`
   * @pattern `[0-9A-Za-z_\-\s\(\)]+`
   */
  Expression?: string;
  SlotSpecifications?: Record<string, Specifications>;
};
/**
 * Type definition for `AWS::Lex::Bot.SubSlotTypeComposition`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-subslottypecomposition.html}
 */
export type SubSlotTypeComposition = {
  /**
   * @minLength `1`
   * @maxLength `100`
   * @pattern `^([0-9a-zA-Z][_-]?){1,100}$`
   */
  Name: string;
  /**
   * @minLength `1`
   * @maxLength `25`
   * @pattern `^((AMAZON\.)[a-zA-Z_]+?|[0-9a-zA-Z]+)$`
   */
  SlotTypeId: string;
};
/**
 * Type definition for `AWS::Lex::Bot.SubSlotValueElicitationSetting`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-subslotvalueelicitationsetting.html}
 */
export type SubSlotValueElicitationSetting = {
  DefaultValueSpecification?: SlotDefaultValueSpecification;
  PromptSpecification?: PromptSpecification;
  SampleUtterances?: SampleUtterance[];
  WaitAndContinueSpecification?: WaitAndContinueSpecification;
};
/**
 * Type definition for `AWS::Lex::Bot.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-tag.html}
 */
export type Tag = {
  /**
   * @minLength `1`
   * @maxLength `128`
   */
  Key: string;
  /**
   * @minLength `0`
   * @maxLength `256`
   */
  Value: string;
};
/**
 * Type definition for `AWS::Lex::Bot.TestBotAliasSettings`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-testbotaliassettings.html}
 */
export type TestBotAliasSettings = {
  /**
   * @maxLength `50`
   */
  BotAliasLocaleSettings?: BotAliasLocaleSettingsItem[];
  ConversationLogSettings?: ConversationLogSettings;
  /**
   * A description of the resource
   * @maxLength `2000`
   */
  Description?: string;
  SentimentAnalysisSettings?: {
    DetectSentiment: boolean;
  };
};
/**
 * Type definition for `AWS::Lex::Bot.TextInputSpecification`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-textinputspecification.html}
 */
export type TextInputSpecification = {
  /**
   * @min `1`
   */
  StartTimeoutMs: number;
};
/**
 * Type definition for `AWS::Lex::Bot.TextLogDestination`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-textlogdestination.html}
 */
export type TextLogDestination = {
  CloudWatch: CloudWatchLogGroupLogDestination;
};
/**
 * Type definition for `AWS::Lex::Bot.TextLogSetting`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-textlogsetting.html}
 */
export type TextLogSetting = {
  Destination: TextLogDestination;
  Enabled: boolean;
};
/**
 * Type definition for `AWS::Lex::Bot.VoiceSettings`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-voicesettings.html}
 */
export type VoiceSettings = {
  Engine?: "standard" | "neural" | "long-form" | "generative";
  VoiceId: string;
};
/**
 * Type definition for `AWS::Lex::Bot.WaitAndContinueSpecification`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-waitandcontinuespecification.html}
 */
export type WaitAndContinueSpecification = {
  ContinueResponse: ResponseSpecification;
  IsActive?: boolean;
  StillWaitingResponse?: StillWaitingResponseSpecification;
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
