import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::Notifications::ManagedNotificationAdditionalChannelAssociation
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-notifications-managednotificationadditionalchannelassociation.html}
 */
export type NotificationsManagedNotificationAdditionalChannelAssociationProperties =
  {
    /**
     * ARN identifier of the channel.
    Example: arn:aws:chatbot::123456789012:chat-configuration/slack-channel/security-ops
     * @pattern `^arn:[a-z-]{3,10}:(chatbot|consoleapp|notifications-contacts):[a-zA-Z0-9-]*:[0-9]{12}:[a-zA-Z0-9-_.@]+/[a-zA-Z0-9/_.@:-]+$`
     */
    ChannelArn: string;
    /**
     * ARN identifier of the Managed Notification.
    Example: arn:aws:notifications::381491923782:managed-notification-configuration/category/AWS-Health/sub-category/Billing
     * @pattern `^arn:[a-z-]{3,10}:notifications::([0-9]{12}|):managed-notification-configuration/category/[a-zA-Z0-9\-]{3,64}/sub-category/[a-zA-Z0-9\-]{3,64}$`
     */
    ManagedNotificationConfigurationArn: string;
  };
/**
 * Resource Type definition for AWS::Notifications::ManagedNotificationAdditionalChannelAssociation
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-notifications-managednotificationadditionalchannelassociation.html}
 */
export class NotificationsManagedNotificationAdditionalChannelAssociation extends $Resource<
  "AWS::Notifications::ManagedNotificationAdditionalChannelAssociation",
  NotificationsManagedNotificationAdditionalChannelAssociationProperties,
  Record<string, never>
> {
  public static readonly Type =
    "AWS::Notifications::ManagedNotificationAdditionalChannelAssociation";
  constructor(
    logicalId: string,
    properties: NotificationsManagedNotificationAdditionalChannelAssociationProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      NotificationsManagedNotificationAdditionalChannelAssociation.Type,
      properties,
      options,
    );
  }
}
