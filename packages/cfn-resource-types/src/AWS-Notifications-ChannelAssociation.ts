import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Definition of AWS::Notifications::ChannelAssociation Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-notifications-channelassociation.html}
 */
export type NotificationsChannelAssociationProperties = {
  /**
     * ARN identifier of the channel.
    Example: arn:aws:chatbot::123456789012:chat-configuration/slack-channel/security-ops
     * @pattern `^arn:aws:(chatbot|consoleapp|notifications-contacts):[a-zA-Z0-9-]*:[0-9]{12}:[a-zA-Z0-9-_.@]+/[a-zA-Z0-9/_.@:-]+$`
     */
  Arn: string;
  /**
     * ARN identifier of the NotificationConfiguration.
    Example: arn:aws:notifications::123456789012:configuration/a01jes88qxwkbj05xv9c967pgm1
     * @pattern `^arn:aws:notifications::[0-9]{12}:configuration\/[a-z0-9]{27}$`
     */
  NotificationConfigurationArn: string;
};
/**
 * Definition of AWS::Notifications::ChannelAssociation Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-notifications-channelassociation.html}
 */
export class NotificationsChannelAssociation extends $Resource<
  "AWS::Notifications::ChannelAssociation",
  NotificationsChannelAssociationProperties,
  Record<string, never>
> {
  public static readonly Type = "AWS::Notifications::ChannelAssociation";
  constructor(
    logicalId: string,
    properties: NotificationsChannelAssociationProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, NotificationsChannelAssociation.Type, properties, options);
  }
}
