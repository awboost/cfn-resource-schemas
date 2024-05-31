import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::SecurityLake::SubscriberNotification
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securitylake-subscribernotification.html}
 */
export type SecurityLakeSubscriberNotificationProperties = {
  NotificationConfiguration: NotificationConfiguration;
  /**
   * The ARN for the subscriber
   * @pattern `^arn:.*$`
   */
  SubscriberArn: string;
};
/**
 * Attribute type definition for `AWS::SecurityLake::SubscriberNotification`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securitylake-subscribernotification.html#aws-resource-securitylake-subscribernotification-return-values}
 */
export type SecurityLakeSubscriberNotificationAttributes = {
  /**
   * The endpoint the subscriber should listen to for notifications
   */
  SubscriberEndpoint: string;
};
/**
 * Type definition for `AWS::SecurityLake::SubscriberNotification.HttpsNotificationConfiguration`.
 * The configuration for HTTPS subscriber notification.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securitylake-subscribernotification-httpsnotificationconfiguration.html}
 */
export type HttpsNotificationConfiguration = {
  /**
   * The key name for the notification subscription.
   */
  AuthorizationApiKeyName?: string;
  /**
   * The key value for the notification subscription.
   */
  AuthorizationApiKeyValue?: string;
  /**
   * The subscription endpoint in Security Lake.
   * @pattern `^https?://.+$`
   */
  Endpoint: string;
  /**
   * The HTTPS method used for the notification subscription.
   */
  HttpMethod?: "POST" | "PUT";
  /**
   * The Amazon Resource Name (ARN) of the EventBridge API destinations IAM role that you created.
   * @pattern `^arn:.*$`
   */
  TargetRoleArn: string;
};
/**
 * Type definition for `AWS::SecurityLake::SubscriberNotification.NotificationConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securitylake-subscribernotification-notificationconfiguration.html}
 */
export type NotificationConfiguration = {
  /**
   * The configuration for HTTPS subscriber notification.
   */
  HttpsNotificationConfiguration?: HttpsNotificationConfiguration;
  /**
   * The configurations for SQS subscriber notification. The members of this structure are context-dependent.
   */
  SqsNotificationConfiguration?: SqsNotificationConfiguration;
};
/**
 * Type definition for `AWS::SecurityLake::SubscriberNotification.SqsNotificationConfiguration`.
 * The configurations for SQS subscriber notification. The members of this structure are context-dependent.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securitylake-subscribernotification-sqsnotificationconfiguration.html}
 */
export type SqsNotificationConfiguration = Record<string, any>;
/**
 * Resource Type definition for AWS::SecurityLake::SubscriberNotification
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securitylake-subscribernotification.html}
 */
export class SecurityLakeSubscriberNotification extends $Resource<
  "AWS::SecurityLake::SubscriberNotification",
  SecurityLakeSubscriberNotificationProperties,
  SecurityLakeSubscriberNotificationAttributes
> {
  public static readonly Type = "AWS::SecurityLake::SubscriberNotification";
  constructor(
    logicalId: string,
    properties: SecurityLakeSubscriberNotificationProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      SecurityLakeSubscriberNotification.Type,
      properties,
      options,
    );
  }
}
