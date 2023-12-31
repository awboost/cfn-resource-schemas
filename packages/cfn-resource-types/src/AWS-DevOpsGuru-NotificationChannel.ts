import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource type definition for `AWS::DevOpsGuru::NotificationChannel`.
 * This resource schema represents the NotificationChannel resource in the Amazon DevOps Guru.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-devopsguru-notificationchannel.html}
 */
export type DevOpsGuruNotificationChannelProperties = {
  /**
   * Information about notification channels you have configured with DevOps Guru.
   */
  Config: NotificationChannelConfig;
};
/**
 * Attribute type definition for `AWS::DevOpsGuru::NotificationChannel`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-devopsguru-notificationchannel.html#aws-resource-devopsguru-notificationchannel-return-values}
 */
export type DevOpsGuruNotificationChannelAttributes = {
  /**
   * The ID of a notification channel.
   * @minLength `36`
   * @maxLength `36`
   * @pattern `^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$`
   */
  Id: string;
};
/**
 * Type definition for `AWS::DevOpsGuru::NotificationChannel.InsightSeverity`.
 * DevOps Guru Insight Severity Enum
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-devopsguru-notificationchannel-insightseverity.html}
 */
export type InsightSeverity = "LOW" | "MEDIUM" | "HIGH";
/**
 * Type definition for `AWS::DevOpsGuru::NotificationChannel.NotificationChannelConfig`.
 * Information about notification channels you have configured with DevOps Guru.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-devopsguru-notificationchannel-notificationchannelconfig.html}
 */
export type NotificationChannelConfig = {
  /**
   * Information about filters of a notification channel configured in DevOpsGuru to filter for insights.
   */
  Filters?: NotificationFilterConfig;
  /**
   * Information about a notification channel configured in DevOps Guru to send notifications when insights are created.
   */
  Sns?: SnsChannelConfig;
};
/**
 * Type definition for `AWS::DevOpsGuru::NotificationChannel.NotificationFilterConfig`.
 * Information about filters of a notification channel configured in DevOpsGuru to filter for insights.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-devopsguru-notificationchannel-notificationfilterconfig.html}
 */
export type NotificationFilterConfig = {
  /**
   * DevOps Guru message types to filter for
   * @minLength `1`
   * @maxLength `5`
   */
  MessageTypes?: NotificationMessageType[];
  /**
   * DevOps Guru insight severities to filter for
   * @minLength `1`
   * @maxLength `3`
   */
  Severities?: InsightSeverity[];
};
/**
 * Type definition for `AWS::DevOpsGuru::NotificationChannel.NotificationMessageType`.
 * DevOps Guru NotificationMessageType Enum
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-devopsguru-notificationchannel-notificationmessagetype.html}
 */
export type NotificationMessageType =
  | "NEW_INSIGHT"
  | "CLOSED_INSIGHT"
  | "NEW_ASSOCIATION"
  | "SEVERITY_UPGRADED"
  | "NEW_RECOMMENDATION";
/**
 * Type definition for `AWS::DevOpsGuru::NotificationChannel.SnsChannelConfig`.
 * Information about a notification channel configured in DevOps Guru to send notifications when insights are created.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-devopsguru-notificationchannel-snschannelconfig.html}
 */
export type SnsChannelConfig = {
  /**
   * @minLength `36`
   * @maxLength `1024`
   * @pattern `^arn:aws[a-z0-9-]*:sns:[a-z0-9-]+:\d{12}:[^:]+$`
   */
  TopicArn?: string;
};
/**
 * Resource type definition for `AWS::DevOpsGuru::NotificationChannel`.
 * This resource schema represents the NotificationChannel resource in the Amazon DevOps Guru.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-devopsguru-notificationchannel.html}
 */
export class DevOpsGuruNotificationChannel extends $Resource<
  "AWS::DevOpsGuru::NotificationChannel",
  DevOpsGuruNotificationChannelProperties,
  DevOpsGuruNotificationChannelAttributes
> {
  public static readonly Type = "AWS::DevOpsGuru::NotificationChannel";
  public static readonly AttributeNames = ["Id" as const];
  constructor(
    logicalId: string,
    properties: DevOpsGuruNotificationChannelProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      DevOpsGuruNotificationChannel.Type,
      properties,
      DevOpsGuruNotificationChannel.AttributeNames,
      options,
    );
  }
}
