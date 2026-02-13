import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::Connect::Notification
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-notification.html}
 */
export type ConnectNotificationProperties = {
  /**
   * The content of the notification.
   */
  Content: NotificationContent;
  /**
   * The time a notification will expire
   * @pattern `^[0-9]+$`
   */
  ExpiresAt?: string;
  /**
   * The identifier of the Amazon Connect instance.
   * @pattern `^arn:aws[-a-z0-9]*:connect:[-a-z0-9]*:[0-9]{12}:instance/[-a-zA-Z0-9]*$`
   */
  InstanceArn: string;
  /**
   * The priority of the notification.
   */
  Priority?: Priority;
  /**
   * The recipients of the notification.
   * @maxLength `200`
   */
  Recipients?: string[];
  /**
   * One or more tags.
   * @maxLength `200`
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::Connect::Notification`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-notification.html#aws-resource-connect-notification-return-values}
 */
export type ConnectNotificationAttributes = {
  /**
   * The Amazon Resource Name (ARN) for the notification.
   * @pattern `^arn:aws[-a-z0-9]*:connect:[-a-z0-9]*:[0-9]{12}:instance/[-a-zA-Z0-9]/‍*notification/[-a-zA-Z0-9]*$`
   */
  Arn: string;
  /**
   * The time a notification was created
   * @pattern `^[0-9]+$`
   */
  CreatedAt: string;
  /**
   * The identifier of the notification.
   * @pattern `^.{0,256}$`
   */
  Id: string;
};
/**
 * Type definition for `AWS::Connect::Notification.NotificationContent`.
 * The content of a notification
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-notification-notificationcontent.html}
 */
export type NotificationContent = {
  /**
   * Localized notification content
   * @pattern `^.{0,500}$`
   */
  DeDE?: string;
  /**
   * Localized notification content
   * @pattern `^.{0,500}$`
   */
  EnUS?: string;
  /**
   * Localized notification content
   * @pattern `^.{0,500}$`
   */
  EsES?: string;
  /**
   * Localized notification content
   * @pattern `^.{0,500}$`
   */
  FrFR?: string;
  /**
   * Localized notification content
   * @pattern `^.{0,500}$`
   */
  IdID?: string;
  /**
   * Localized notification content
   * @pattern `^.{0,500}$`
   */
  ItIT?: string;
  /**
   * Localized notification content
   * @pattern `^.{0,500}$`
   */
  JaJP?: string;
  /**
   * Localized notification content
   * @pattern `^.{0,500}$`
   */
  KoKR?: string;
  /**
   * Localized notification content
   * @pattern `^.{0,500}$`
   */
  PtBR?: string;
  /**
   * Localized notification content
   * @pattern `^.{0,500}$`
   */
  ZhCN?: string;
  /**
   * Localized notification content
   * @pattern `^.{0,500}$`
   */
  ZhTW?: string;
};
/**
 * Type definition for `AWS::Connect::Notification.Priority`.
 * The priority of notification. In the Amazon Connect console, when you create a notification, you are prompted to assign one of the following priorities: High (HIGH) or LOW (LOW)
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-notification-priority.html}
 */
export type Priority = "HIGH" | "LOW";
/**
 * Type definition for `AWS::Connect::Notification.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-notification-tag.html}
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
 * Resource Type definition for AWS::Connect::Notification
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-notification.html}
 */
export class ConnectNotification extends $Resource<
  "AWS::Connect::Notification",
  ConnectNotificationProperties,
  ConnectNotificationAttributes
> {
  public static readonly Type = "AWS::Connect::Notification";
  constructor(
    logicalId: string,
    properties: ConnectNotificationProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, ConnectNotification.Type, properties, options);
  }
}
