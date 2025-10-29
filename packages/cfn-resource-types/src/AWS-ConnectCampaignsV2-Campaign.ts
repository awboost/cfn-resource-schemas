import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Definition of AWS::ConnectCampaignsV2::Campaign Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connectcampaignsv2-campaign.html}
 */
export type ConnectCampaignsV2CampaignProperties = {
  /**
   * The possible types of channel subtype config parameters
   */
  ChannelSubtypeConfig: ChannelSubtypeConfig;
  /**
   * Communication limits config
   */
  CommunicationLimitsOverride?: CommunicationLimitsConfig;
  /**
   * Campaign communication time config
   */
  CommunicationTimeConfig?: CommunicationTimeConfig;
  /**
   * Arn
   * @minLength `20`
   * @maxLength `500`
   * @pattern `^arn:.*$`
   */
  ConnectCampaignFlowArn?: string;
  /**
   * Amazon Connect Instance Id
   * @minLength `0`
   * @maxLength `256`
   * @pattern `^[a-zA-Z0-9_\-.]*$`
   */
  ConnectInstanceId: string;
  /**
   * Campaign name
   * @minLength `1`
   * @maxLength `127`
   */
  Name: string;
  /**
   * Campaign schedule
   */
  Schedule?: Schedule;
  /**
   * The possible source of the campaign
   */
  Source?: Source;
  /**
   * One or more tags.
   * @maxLength `50`
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::ConnectCampaignsV2::Campaign`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connectcampaignsv2-campaign.html#aws-resource-connectcampaignsv2-campaign-return-values}
 */
export type ConnectCampaignsV2CampaignAttributes = {
  /**
   * Amazon Connect Campaign Arn
   * @minLength `0`
   * @maxLength `256`
   * @pattern `^arn:aws[-a-z0-9]*:connect-campaigns:[-a-z0-9]*:[0-9]{12}:campaign/[-a-zA-Z0-9]*$`
   */
  Arn: string;
};
/**
 * Type definition for `AWS::ConnectCampaignsV2::Campaign.AgentAction`.
 * Actions that can performed on a contact by an agent
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connectcampaignsv2-campaign-agentaction.html}
 */
export type AgentAction = "DISCARD";
/**
 * Type definition for `AWS::ConnectCampaignsV2::Campaign.AgentlessConfig`.
 * Agentless config
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connectcampaignsv2-campaign-agentlessconfig.html}
 */
export type AgentlessConfig = Record<string, any>;
/**
 * Type definition for `AWS::ConnectCampaignsV2::Campaign.AnswerMachineDetectionConfig`.
 * The configuration used for answering machine detection during outbound calls
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connectcampaignsv2-campaign-answermachinedetectionconfig.html}
 */
export type AnswerMachineDetectionConfig = {
  /**
   * Enables detection of prompts (e.g., beep after after a voicemail greeting)
   */
  AwaitAnswerMachinePrompt?: boolean;
  /**
   * Flag to decided whether outbound calls should have answering machine detection enabled or not
   */
  EnableAnswerMachineDetection: boolean;
};
/**
 * Type definition for `AWS::ConnectCampaignsV2::Campaign.ChannelSubtypeConfig`.
 * The possible types of channel subtype config parameters
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connectcampaignsv2-campaign-channelsubtypeconfig.html}
 */
export type ChannelSubtypeConfig = {
  /**
   * Email Channel Subtype config
   */
  Email?: EmailChannelSubtypeConfig;
  /**
   * SMS Channel Subtype config
   */
  Sms?: SmsChannelSubtypeConfig;
  /**
   * Telephony Channel Subtype config
   */
  Telephony?: TelephonyChannelSubtypeConfig;
};
/**
 * Type definition for `AWS::ConnectCampaignsV2::Campaign.CommunicationLimit`.
 * Communication Limit
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connectcampaignsv2-campaign-communicationlimit.html}
 */
export type CommunicationLimit = {
  /**
   * @min `1`
   */
  Frequency: number;
  /**
   * @min `1`
   */
  MaxCountPerRecipient: number;
  /**
   * The communication limit time unit
   */
  Unit: CommunicationLimitTimeUnit;
};
/**
 * Type definition for `AWS::ConnectCampaignsV2::Campaign.CommunicationLimits`.
 * Communication limits
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connectcampaignsv2-campaign-communicationlimits.html}
 */
export type CommunicationLimits = {
  /**
   * List of communication limit
   */
  CommunicationLimitList?: CommunicationLimit[];
};
/**
 * Type definition for `AWS::ConnectCampaignsV2::Campaign.CommunicationLimitsConfig`.
 * Communication limits config
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connectcampaignsv2-campaign-communicationlimitsconfig.html}
 */
export type CommunicationLimitsConfig = {
  /**
   * Communication limits
   */
  AllChannelsSubtypes?: CommunicationLimits;
  /**
   * Enumeration of Instance Limits handling in a Campaign
   */
  InstanceLimitsHandling?: InstanceLimitsHandling;
};
/**
 * Type definition for `AWS::ConnectCampaignsV2::Campaign.CommunicationLimitTimeUnit`.
 * The communication limit time unit
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connectcampaignsv2-campaign-communicationlimittimeunit.html}
 */
export type CommunicationLimitTimeUnit = "DAY";
/**
 * Type definition for `AWS::ConnectCampaignsV2::Campaign.CommunicationTimeConfig`.
 * Campaign communication time config
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connectcampaignsv2-campaign-communicationtimeconfig.html}
 */
export type CommunicationTimeConfig = {
  /**
   * Time window config
   */
  Email?: TimeWindow;
  /**
   * Local time zone config
   */
  LocalTimeZoneConfig: LocalTimeZoneConfig;
  /**
   * Time window config
   */
  Sms?: TimeWindow;
  /**
   * Time window config
   */
  Telephony?: TimeWindow;
};
/**
 * Type definition for `AWS::ConnectCampaignsV2::Campaign.DailyHour`.
 * Daily Hour
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connectcampaignsv2-campaign-dailyhour.html}
 */
export type DailyHour = {
  /**
   * Day of week
   */
  Key?: DayOfWeek;
  /**
   * List of time range
   */
  Value?: TimeRange[];
};
/**
 * Type definition for `AWS::ConnectCampaignsV2::Campaign.DayOfWeek`.
 * Day of week
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connectcampaignsv2-campaign-dayofweek.html}
 */
export type DayOfWeek =
  | "MONDAY"
  | "TUESDAY"
  | "WEDNESDAY"
  | "THURSDAY"
  | "FRIDAY"
  | "SATURDAY"
  | "SUNDAY";
/**
 * Type definition for `AWS::ConnectCampaignsV2::Campaign.EmailChannelSubtypeConfig`.
 * Email Channel Subtype config
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connectcampaignsv2-campaign-emailchannelsubtypeconfig.html}
 */
export type EmailChannelSubtypeConfig = {
  /**
   * Allocates outbound capacity for the specific channel of this campaign between multiple active campaigns
   * @min `0.01`
   * @max `1`
   */
  Capacity?: number;
  /**
   * Default SMS outbound config
   */
  DefaultOutboundConfig: EmailOutboundConfig;
  /**
   * Email Outbound Mode
   */
  OutboundMode: EmailOutboundMode;
};
/**
 * Type definition for `AWS::ConnectCampaignsV2::Campaign.EmailOutboundConfig`.
 * Default SMS outbound config
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connectcampaignsv2-campaign-emailoutboundconfig.html}
 */
export type EmailOutboundConfig = {
  /**
   * Email address used for Email messages
   * @minLength `1`
   * @maxLength `255`
   * @pattern `^[\w-\.\+]+@([\w-]+\.)+[\w-]{2,4}$`
   */
  ConnectSourceEmailAddress: string;
  /**
   * The name of the source email address display name
   * @minLength `1`
   * @maxLength `127`
   */
  SourceEmailAddressDisplayName?: string;
  /**
   * Arn
   * @minLength `20`
   * @maxLength `500`
   * @pattern `^arn:.*$`
   */
  WisdomTemplateArn: string;
};
/**
 * Type definition for `AWS::ConnectCampaignsV2::Campaign.EmailOutboundMode`.
 * Email Outbound Mode
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connectcampaignsv2-campaign-emailoutboundmode.html}
 */
export type EmailOutboundMode = {
  /**
   * Agentless config
   */
  AgentlessConfig?: AgentlessConfig;
};
/**
 * Type definition for `AWS::ConnectCampaignsV2::Campaign.EventTrigger`.
 * The event trigger of the campaign
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connectcampaignsv2-campaign-eventtrigger.html}
 */
export type EventTrigger = {
  /**
   * Arn
   * @minLength `20`
   * @maxLength `500`
   * @pattern `^arn:.*$`
   */
  CustomerProfilesDomainArn?: string;
};
/**
 * Type definition for `AWS::ConnectCampaignsV2::Campaign.InstanceLimitsHandling`.
 * Enumeration of Instance Limits handling in a Campaign
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connectcampaignsv2-campaign-instancelimitshandling.html}
 */
export type InstanceLimitsHandling = "OPT_IN" | "OPT_OUT";
/**
 * Type definition for `AWS::ConnectCampaignsV2::Campaign.LocalTimeZoneConfig`.
 * Local time zone config
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connectcampaignsv2-campaign-localtimezoneconfig.html}
 */
export type LocalTimeZoneConfig = {
  /**
   * Time Zone Id in the IANA format
   */
  DefaultTimeZone?: string;
  /**
   * Local TimeZone Detection method list
   */
  LocalTimeZoneDetection?: LocalTimeZoneDetectionType[];
};
/**
 * Type definition for `AWS::ConnectCampaignsV2::Campaign.LocalTimeZoneDetectionType`.
 * Local TimeZone Detection method
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connectcampaignsv2-campaign-localtimezonedetectiontype.html}
 */
export type LocalTimeZoneDetectionType = "ZIP_CODE" | "AREA_CODE";
/**
 * Type definition for `AWS::ConnectCampaignsV2::Campaign.OpenHours`.
 * Open Hours config
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connectcampaignsv2-campaign-openhours.html}
 */
export type OpenHours = {
  /**
   * Daily Hours map
   */
  DailyHours: DailyHour[];
};
/**
 * Type definition for `AWS::ConnectCampaignsV2::Campaign.PredictiveConfig`.
 * Predictive config
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connectcampaignsv2-campaign-predictiveconfig.html}
 */
export type PredictiveConfig = {
  /**
   * The bandwidth allocation of a queue resource.
   * @min `0`
   * @max `1`
   */
  BandwidthAllocation: number;
};
/**
 * Type definition for `AWS::ConnectCampaignsV2::Campaign.PreviewConfig`.
 * Preview config
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connectcampaignsv2-campaign-previewconfig.html}
 */
export type PreviewConfig = {
  /**
   * Actions that can be performed by agent during preview phase
   */
  AgentActions?: AgentAction[];
  /**
   * The bandwidth allocation of a queue resource.
   * @min `0`
   * @max `1`
   */
  BandwidthAllocation: number;
  /**
   * Timeout Config for preview contacts
   */
  TimeoutConfig: TimeoutConfig;
};
/**
 * Type definition for `AWS::ConnectCampaignsV2::Campaign.ProgressiveConfig`.
 * Progressive config
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connectcampaignsv2-campaign-progressiveconfig.html}
 */
export type ProgressiveConfig = {
  /**
   * The bandwidth allocation of a queue resource.
   * @min `0`
   * @max `1`
   */
  BandwidthAllocation: number;
};
/**
 * Type definition for `AWS::ConnectCampaignsV2::Campaign.RestrictedPeriod`.
 * Restricted period
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connectcampaignsv2-campaign-restrictedperiod.html}
 */
export type RestrictedPeriod = {
  /**
   * Date in ISO 8601 format, e.g. 2024-01-01
   * @pattern `^\d{4}-\d{2}-\d{2}$`
   */
  EndDate: string;
  /**
   * The name of a restricted period
   * @maxLength `127`
   */
  Name?: string;
  /**
   * Date in ISO 8601 format, e.g. 2024-01-01
   * @pattern `^\d{4}-\d{2}-\d{2}$`
   */
  StartDate: string;
};
/**
 * Type definition for `AWS::ConnectCampaignsV2::Campaign.RestrictedPeriods`.
 * Restricted period config
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connectcampaignsv2-campaign-restrictedperiods.html}
 */
export type RestrictedPeriods = {
  /**
   * List of restricted period
   */
  RestrictedPeriodList?: RestrictedPeriod[];
};
/**
 * Type definition for `AWS::ConnectCampaignsV2::Campaign.Schedule`.
 * Campaign schedule
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connectcampaignsv2-campaign-schedule.html}
 */
export type Schedule = {
  /**
   * Timestamp with no UTC offset or timezone
   * @maxLength `100`
   */
  EndTime: string;
  /**
   * Time duration in ISO 8601 format
   * @minLength `0`
   * @maxLength `50`
   * @pattern `^[a-zA-Z0-9.]*$`
   */
  RefreshFrequency?: string;
  /**
   * Timestamp with no UTC offset or timezone
   * @maxLength `100`
   */
  StartTime: string;
};
/**
 * Type definition for `AWS::ConnectCampaignsV2::Campaign.SmsChannelSubtypeConfig`.
 * SMS Channel Subtype config
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connectcampaignsv2-campaign-smschannelsubtypeconfig.html}
 */
export type SmsChannelSubtypeConfig = {
  /**
   * Allocates outbound capacity for the specific channel of this campaign between multiple active campaigns
   * @min `0.01`
   * @max `1`
   */
  Capacity?: number;
  /**
   * Default SMS outbound config
   */
  DefaultOutboundConfig: SmsOutboundConfig;
  /**
   * SMS Outbound Mode
   */
  OutboundMode: SmsOutboundMode;
};
/**
 * Type definition for `AWS::ConnectCampaignsV2::Campaign.SmsOutboundConfig`.
 * Default SMS outbound config
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connectcampaignsv2-campaign-smsoutboundconfig.html}
 */
export type SmsOutboundConfig = {
  /**
   * Arn
   * @minLength `20`
   * @maxLength `500`
   * @pattern `^arn:.*$`
   */
  ConnectSourcePhoneNumberArn: string;
  /**
   * Arn
   * @minLength `20`
   * @maxLength `500`
   * @pattern `^arn:.*$`
   */
  WisdomTemplateArn: string;
};
/**
 * Type definition for `AWS::ConnectCampaignsV2::Campaign.SmsOutboundMode`.
 * SMS Outbound Mode
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connectcampaignsv2-campaign-smsoutboundmode.html}
 */
export type SmsOutboundMode = {
  /**
   * Agentless config
   */
  AgentlessConfig?: AgentlessConfig;
};
/**
 * Type definition for `AWS::ConnectCampaignsV2::Campaign.Source`.
 * The possible source of the campaign
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connectcampaignsv2-campaign-source.html}
 */
export type Source = {
  /**
   * Arn
   * @minLength `20`
   * @maxLength `500`
   * @pattern `^arn:.*$`
   */
  CustomerProfilesSegmentArn?: string;
  /**
   * The event trigger of the campaign
   */
  EventTrigger?: EventTrigger;
};
/**
 * Type definition for `AWS::ConnectCampaignsV2::Campaign.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connectcampaignsv2-campaign-tag.html}
 */
export type Tag = {
  /**
   * The key name of the tag.
   */
  Key: string;
  /**
   * The value for the tag.
   */
  Value: string;
};
/**
 * Type definition for `AWS::ConnectCampaignsV2::Campaign.TelephonyChannelSubtypeConfig`.
 * Telephony Channel Subtype config
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connectcampaignsv2-campaign-telephonychannelsubtypeconfig.html}
 */
export type TelephonyChannelSubtypeConfig = {
  /**
   * Allocates outbound capacity for the specific channel of this campaign between multiple active campaigns
   * @min `0.01`
   * @max `1`
   */
  Capacity?: number;
  /**
   * The queue for the call
   * @maxLength `500`
   */
  ConnectQueueId?: string;
  /**
   * Default Telephone Outbound config
   */
  DefaultOutboundConfig: TelephonyOutboundConfig;
  /**
   * Telephony Outbound Mode
   */
  OutboundMode: TelephonyOutboundMode;
};
/**
 * Type definition for `AWS::ConnectCampaignsV2::Campaign.TelephonyOutboundConfig`.
 * Default Telephone Outbound config
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connectcampaignsv2-campaign-telephonyoutboundconfig.html}
 */
export type TelephonyOutboundConfig = {
  /**
   * The configuration used for answering machine detection during outbound calls
   */
  AnswerMachineDetectionConfig?: AnswerMachineDetectionConfig;
  /**
   * The identifier of the contact flow for the outbound call
   * @maxLength `500`
   */
  ConnectContactFlowId: string;
  /**
   * The phone number associated with the Amazon Connect instance, in E.164 format. If you do not specify a source phone number, you must specify a queue.
   * @maxLength `100`
   */
  ConnectSourcePhoneNumber?: string;
};
/**
 * Type definition for `AWS::ConnectCampaignsV2::Campaign.TelephonyOutboundMode`.
 * Telephony Outbound Mode
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connectcampaignsv2-campaign-telephonyoutboundmode.html}
 */
export type TelephonyOutboundMode = {
  /**
   * Agentless config
   */
  AgentlessConfig?: AgentlessConfig;
  /**
   * Predictive config
   */
  PredictiveConfig?: PredictiveConfig;
  /**
   * Preview config
   */
  PreviewConfig?: PreviewConfig;
  /**
   * Progressive config
   */
  ProgressiveConfig?: ProgressiveConfig;
};
/**
 * Type definition for `AWS::ConnectCampaignsV2::Campaign.TimeoutConfig`.
 * Timeout Config for preview contacts
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connectcampaignsv2-campaign-timeoutconfig.html}
 */
export type TimeoutConfig = {
  /**
   * Timeout duration for a preview contact in seconds
   * @min `10`
   * @max `300`
   */
  DurationInSeconds?: number;
};
/**
 * Type definition for `AWS::ConnectCampaignsV2::Campaign.TimeRange`.
 * Time range in 24 hour format
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connectcampaignsv2-campaign-timerange.html}
 */
export type TimeRange = {
  /**
   * Time in ISO 8601 format, e.g. T23:11
   * @pattern `^T\d{2}:\d{2}$`
   */
  EndTime: string;
  /**
   * Time in ISO 8601 format, e.g. T23:11
   * @pattern `^T\d{2}:\d{2}$`
   */
  StartTime: string;
};
/**
 * Type definition for `AWS::ConnectCampaignsV2::Campaign.TimeWindow`.
 * Time window config
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connectcampaignsv2-campaign-timewindow.html}
 */
export type TimeWindow = {
  /**
   * Open Hours config
   */
  OpenHours: OpenHours;
  /**
   * Restricted period config
   */
  RestrictedPeriods?: RestrictedPeriods;
};
/**
 * Definition of AWS::ConnectCampaignsV2::Campaign Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connectcampaignsv2-campaign.html}
 */
export class ConnectCampaignsV2Campaign extends $Resource<
  "AWS::ConnectCampaignsV2::Campaign",
  ConnectCampaignsV2CampaignProperties,
  ConnectCampaignsV2CampaignAttributes
> {
  public static readonly Type = "AWS::ConnectCampaignsV2::Campaign";
  constructor(
    logicalId: string,
    properties: ConnectCampaignsV2CampaignProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, ConnectCampaignsV2Campaign.Type, properties, options);
  }
}
