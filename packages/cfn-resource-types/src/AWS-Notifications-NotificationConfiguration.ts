import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::Notifications::NotificationConfiguration
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-notifications-notificationconfiguration.html}
 */
export type NotificationsNotificationConfigurationProperties = {
  AggregationDuration?: AggregationDuration;
  /**
   * @minLength `0`
   * @maxLength `256`
   * @pattern `^[^\u0001-\u001F\u007F-\u009F]*$`
   */
  Description: string;
  /**
   * @minLength `1`
   * @maxLength `64`
   * @pattern `^[A-Za-z0-9_\-]+$`
   */
  Name: string;
  /**
   * A list of tags that are attached to the role.
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::Notifications::NotificationConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-notifications-notificationconfiguration.html#aws-resource-notifications-notificationconfiguration-return-values}
 */
export type NotificationsNotificationConfigurationAttributes = {
  /**
   * @pattern `^arn:[a-z-]{3,10}:notifications::[0-9]{12}:configuration/[a-z0-9]{27}$`
   */
  Arn: string;
  CreationTime: string;
  Status: NotificationConfigurationStatus;
};
/**
 * Type definition for `AWS::Notifications::NotificationConfiguration.AggregationDuration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-notifications-notificationconfiguration-aggregationduration.html}
 */
export type AggregationDuration = "LONG" | "SHORT" | "NONE";
/**
 * Type definition for `AWS::Notifications::NotificationConfiguration.NotificationConfigurationStatus`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-notifications-notificationconfiguration-notificationconfigurationstatus.html}
 */
export type NotificationConfigurationStatus =
  | "ACTIVE"
  | "PARTIALLY_ACTIVE"
  | "INACTIVE"
  | "DELETING";
/**
 * Type definition for `AWS::Notifications::NotificationConfiguration.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-notifications-notificationconfiguration-tag.html}
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
 * Resource Type definition for AWS::Notifications::NotificationConfiguration
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-notifications-notificationconfiguration.html}
 */
export class NotificationsNotificationConfiguration extends $Resource<
  "AWS::Notifications::NotificationConfiguration",
  NotificationsNotificationConfigurationProperties,
  NotificationsNotificationConfigurationAttributes
> {
  public static readonly Type = "AWS::Notifications::NotificationConfiguration";
  constructor(
    logicalId: string,
    properties: NotificationsNotificationConfigurationProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      NotificationsNotificationConfiguration.Type,
      properties,
      options,
    );
  }
}
