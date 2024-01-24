import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::SupportApp::SlackChannelConfiguration`.
 * An AWS Support App resource that creates, updates, lists and deletes Slack channel configurations.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-supportapp-slackchannelconfiguration.html}
 */
export type SupportAppSlackChannelConfigurationProperties = {
  /**
   * The channel ID in Slack, which identifies a channel within a workspace.
   * @minLength `1`
   * @maxLength `256`
   * @pattern `^\S+$`
   */
  ChannelId: string;
  /**
   * The channel name in Slack.
   * @minLength `1`
   * @maxLength `256`
   * @pattern `^.+$`
   */
  ChannelName?: string;
  /**
   * The Amazon Resource Name (ARN) of an IAM role that grants the AWS Support App access to perform operations for AWS services.
   * @minLength `31`
   * @maxLength `2048`
   * @pattern `^arn:aws[-a-z0-9]*:iam::[0-9]{12}:role\/(.+)$`
   */
  ChannelRoleArn: string;
  /**
   * Whether to notify when a correspondence is added to a case.
   */
  NotifyOnAddCorrespondenceToCase?: boolean;
  /**
   * The severity level of a support case that a customer wants to get notified for.
   */
  NotifyOnCaseSeverity: "none" | "all" | "high";
  /**
   * Whether to notify when a case is created or reopened.
   */
  NotifyOnCreateOrReopenCase?: boolean;
  /**
   * Whether to notify when a case is resolved.
   */
  NotifyOnResolveCase?: boolean;
  /**
   * The team ID in Slack, which uniquely identifies a workspace.
   * @minLength `1`
   * @maxLength `256`
   * @pattern `^\S+$`
   */
  TeamId: string;
};
/**
 * Resource type definition for `AWS::SupportApp::SlackChannelConfiguration`.
 * An AWS Support App resource that creates, updates, lists and deletes Slack channel configurations.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-supportapp-slackchannelconfiguration.html}
 */
export class SupportAppSlackChannelConfiguration extends $Resource<
  "AWS::SupportApp::SlackChannelConfiguration",
  SupportAppSlackChannelConfigurationProperties,
  Record<string, never>
> {
  public static readonly Type = "AWS::SupportApp::SlackChannelConfiguration";
  constructor(
    logicalId: string,
    properties: SupportAppSlackChannelConfigurationProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      SupportAppSlackChannelConfiguration.Type,
      properties,
      options,
    );
  }
}
