import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::Notifications::NotificationHub
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-notifications-notificationhub.html}
 */
export type NotificationsNotificationHubProperties = {
  /**
   * Region that NotificationHub is present in.
   * @minLength `2`
   * @maxLength `25`
   * @pattern `^([a-z]{1,2})-([a-z]{1,15}-)+([0-9])$`
   */
  Region: string;
};
/**
 * Attribute type definition for `AWS::Notifications::NotificationHub`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-notifications-notificationhub.html#aws-resource-notifications-notificationhub-return-values}
 */
export type NotificationsNotificationHubAttributes = {
  CreationTime: string;
  NotificationHubStatusSummary: {
    NotificationHubStatus: NotificationHubStatus;
    NotificationHubStatusReason: string;
  };
};
/**
 * Type definition for `AWS::Notifications::NotificationHub.NotificationHubStatus`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-notifications-notificationhub-notificationhubstatus.html}
 */
export type NotificationHubStatus =
  | "ACTIVE"
  | "REGISTERING"
  | "DEREGISTERING"
  | "INACTIVE";
/**
 * Type definition for `AWS::Notifications::NotificationHub.NotificationHubStatusSummary`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-notifications-notificationhub-notificationhubstatussummary.html}
 */
export type NotificationHubStatusSummary = {
  NotificationHubStatus: NotificationHubStatus;
  NotificationHubStatusReason: string;
};
/**
 * Resource Type definition for AWS::Notifications::NotificationHub
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-notifications-notificationhub.html}
 */
export class NotificationsNotificationHub extends $Resource<
  "AWS::Notifications::NotificationHub",
  NotificationsNotificationHubProperties,
  NotificationsNotificationHubAttributes
> {
  public static readonly Type = "AWS::Notifications::NotificationHub";
  constructor(
    logicalId: string,
    properties: NotificationsNotificationHubProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, NotificationsNotificationHub.Type, properties, options);
  }
}
