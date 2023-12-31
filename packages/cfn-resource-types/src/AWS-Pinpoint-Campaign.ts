import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::Pinpoint::Campaign
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-campaign.html}
 */
export type PinpointCampaignProperties = {
  AdditionalTreatments?: WriteTreatmentResource[];
  ApplicationId: string;
  CampaignHook?: CampaignHook;
  CustomDeliveryConfiguration?: CustomDeliveryConfiguration;
  Description?: string;
  HoldoutPercent?: number;
  IsPaused?: boolean;
  Limits?: Limits;
  MessageConfiguration?: MessageConfiguration;
  Name: string;
  Priority?: number;
  Schedule: Schedule;
  SegmentId: string;
  SegmentVersion?: number;
  Tags?: Record<string, any>;
  TemplateConfiguration?: TemplateConfiguration;
  TreatmentDescription?: string;
  TreatmentName?: string;
};
/**
 * Attribute type definition for `AWS::Pinpoint::Campaign`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-campaign.html#aws-resource-pinpoint-campaign-return-values}
 */
export type PinpointCampaignAttributes = {
  Arn: string;
  CampaignId: string;
};
/**
 * Type definition for `AWS::Pinpoint::Campaign.CampaignCustomMessage`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-campaign-campaigncustommessage.html}
 */
export type CampaignCustomMessage = {
  Data?: string;
};
/**
 * Type definition for `AWS::Pinpoint::Campaign.CampaignEmailMessage`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-campaign-campaignemailmessage.html}
 */
export type CampaignEmailMessage = {
  Body?: string;
  FromAddress?: string;
  HtmlBody?: string;
  Title?: string;
};
/**
 * Type definition for `AWS::Pinpoint::Campaign.CampaignEventFilter`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-campaign-campaigneventfilter.html}
 */
export type CampaignEventFilter = {
  Dimensions?: EventDimensions;
  FilterType?: string;
};
/**
 * Type definition for `AWS::Pinpoint::Campaign.CampaignHook`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-campaign-campaignhook.html}
 */
export type CampaignHook = {
  LambdaFunctionName?: string;
  Mode?: string;
  WebUrl?: string;
};
/**
 * Type definition for `AWS::Pinpoint::Campaign.CampaignInAppMessage`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-campaign-campaigninappmessage.html}
 */
export type CampaignInAppMessage = {
  Content?: InAppMessageContent[];
  CustomConfig?: Record<string, any>;
  Layout?: string;
};
/**
 * Type definition for `AWS::Pinpoint::Campaign.CampaignSmsMessage`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-campaign-campaignsmsmessage.html}
 */
export type CampaignSmsMessage = {
  Body?: string;
  EntityId?: string;
  MessageType?: string;
  OriginationNumber?: string;
  SenderId?: string;
  TemplateId?: string;
};
/**
 * Type definition for `AWS::Pinpoint::Campaign.CustomDeliveryConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-campaign-customdeliveryconfiguration.html}
 */
export type CustomDeliveryConfiguration = {
  DeliveryUri?: string;
  EndpointTypes?: string[];
};
/**
 * Type definition for `AWS::Pinpoint::Campaign.DefaultButtonConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-campaign-defaultbuttonconfiguration.html}
 */
export type DefaultButtonConfiguration = {
  BackgroundColor?: string;
  BorderRadius?: number;
  ButtonAction?: string;
  Link?: string;
  Text?: string;
  TextColor?: string;
};
/**
 * Type definition for `AWS::Pinpoint::Campaign.EventDimensions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-campaign-eventdimensions.html}
 */
export type EventDimensions = {
  Attributes?: Record<string, any>;
  EventType?: SetDimension;
  Metrics?: Record<string, any>;
};
/**
 * Type definition for `AWS::Pinpoint::Campaign.InAppMessageBodyConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-campaign-inappmessagebodyconfig.html}
 */
export type InAppMessageBodyConfig = {
  Alignment?: string;
  Body?: string;
  TextColor?: string;
};
/**
 * Type definition for `AWS::Pinpoint::Campaign.InAppMessageButton`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-campaign-inappmessagebutton.html}
 */
export type InAppMessageButton = {
  Android?: OverrideButtonConfiguration;
  DefaultConfig?: DefaultButtonConfiguration;
  IOS?: OverrideButtonConfiguration;
  Web?: OverrideButtonConfiguration;
};
/**
 * Type definition for `AWS::Pinpoint::Campaign.InAppMessageContent`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-campaign-inappmessagecontent.html}
 */
export type InAppMessageContent = {
  BackgroundColor?: string;
  BodyConfig?: InAppMessageBodyConfig;
  HeaderConfig?: InAppMessageHeaderConfig;
  ImageUrl?: string;
  PrimaryBtn?: InAppMessageButton;
  SecondaryBtn?: InAppMessageButton;
};
/**
 * Type definition for `AWS::Pinpoint::Campaign.InAppMessageHeaderConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-campaign-inappmessageheaderconfig.html}
 */
export type InAppMessageHeaderConfig = {
  Alignment?: string;
  Header?: string;
  TextColor?: string;
};
/**
 * Type definition for `AWS::Pinpoint::Campaign.Limits`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-campaign-limits.html}
 */
export type Limits = {
  Daily?: number;
  MaximumDuration?: number;
  MessagesPerSecond?: number;
  Session?: number;
  Total?: number;
};
/**
 * Type definition for `AWS::Pinpoint::Campaign.Message`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-campaign-message.html}
 */
export type Message = {
  Action?: string;
  Body?: string;
  ImageIconUrl?: string;
  ImageSmallIconUrl?: string;
  ImageUrl?: string;
  JsonBody?: string;
  MediaUrl?: string;
  RawContent?: string;
  SilentPush?: boolean;
  TimeToLive?: number;
  Title?: string;
  Url?: string;
};
/**
 * Type definition for `AWS::Pinpoint::Campaign.MessageConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-campaign-messageconfiguration.html}
 */
export type MessageConfiguration = {
  ADMMessage?: Message;
  APNSMessage?: Message;
  BaiduMessage?: Message;
  CustomMessage?: CampaignCustomMessage;
  DefaultMessage?: Message;
  EmailMessage?: CampaignEmailMessage;
  GCMMessage?: Message;
  InAppMessage?: CampaignInAppMessage;
  SMSMessage?: CampaignSmsMessage;
};
/**
 * Type definition for `AWS::Pinpoint::Campaign.OverrideButtonConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-campaign-overridebuttonconfiguration.html}
 */
export type OverrideButtonConfiguration = {
  ButtonAction?: string;
  Link?: string;
};
/**
 * Type definition for `AWS::Pinpoint::Campaign.QuietTime`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-campaign-quiettime.html}
 */
export type QuietTime = {
  End: string;
  Start: string;
};
/**
 * Type definition for `AWS::Pinpoint::Campaign.Schedule`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-campaign-schedule.html}
 */
export type Schedule = {
  EndTime?: string;
  EventFilter?: CampaignEventFilter;
  Frequency?: string;
  IsLocalTime?: boolean;
  QuietTime?: QuietTime;
  StartTime?: string;
  TimeZone?: string;
};
/**
 * Type definition for `AWS::Pinpoint::Campaign.SetDimension`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-campaign-setdimension.html}
 */
export type SetDimension = {
  DimensionType?: string;
  Values?: string[];
};
/**
 * Type definition for `AWS::Pinpoint::Campaign.Template`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-campaign-template.html}
 */
export type Template = {
  Name?: string;
  Version?: string;
};
/**
 * Type definition for `AWS::Pinpoint::Campaign.TemplateConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-campaign-templateconfiguration.html}
 */
export type TemplateConfiguration = {
  EmailTemplate?: Template;
  PushTemplate?: Template;
  SMSTemplate?: Template;
  VoiceTemplate?: Template;
};
/**
 * Type definition for `AWS::Pinpoint::Campaign.WriteTreatmentResource`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-campaign-writetreatmentresource.html}
 */
export type WriteTreatmentResource = {
  CustomDeliveryConfiguration?: CustomDeliveryConfiguration;
  MessageConfiguration?: MessageConfiguration;
  Schedule?: Schedule;
  SizePercent?: number;
  TemplateConfiguration?: TemplateConfiguration;
  TreatmentDescription?: string;
  TreatmentName?: string;
};
/**
 * Resource Type definition for AWS::Pinpoint::Campaign
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-campaign.html}
 */
export class PinpointCampaign extends $Resource<
  "AWS::Pinpoint::Campaign",
  PinpointCampaignProperties,
  PinpointCampaignAttributes
> {
  public static readonly Type = "AWS::Pinpoint::Campaign";
  constructor(
    logicalId: string,
    properties: PinpointCampaignProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, PinpointCampaign.Type, properties, options);
  }
}
