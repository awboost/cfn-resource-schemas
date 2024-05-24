import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource schema for AWS::Chatbot::SlackChannelConfiguration.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-chatbot-slackchannelconfiguration.html}
 */
export type ChatbotSlackChannelConfigurationProperties = {
  /**
   * The name of the configuration
   * @minLength `1`
   * @maxLength `128`
   * @pattern `^[A-Za-z0-9-_]+$`
   */
  ConfigurationName: string;
  /**
   * The list of IAM policy ARNs that are applied as channel guardrails. The AWS managed 'AdministratorAccess' policy is applied as a default if this is not set.
   */
  GuardrailPolicies?: string[];
  /**
   * The ARN of the IAM role that defines the permissions for AWS Chatbot
   * @pattern `^arn:(aws[a-zA-Z-]*)?:[A-Za-z0-9][A-Za-z0-9_/.-]{0,62}:[A-Za-z0-9_/.-]{0,63}:[A-Za-z0-9_/.-]{0,63}:[A-Za-z0-9][A-Za-z0-9:_/+=,@.-]{0,1023}$`
   */
  IamRoleArn: string;
  /**
   * Specifies the logging level for this configuration:ERROR,INFO or NONE. This property affects the log entries pushed to Amazon CloudWatch logs
   * @pattern `^(ERROR|INFO|NONE)$`
   */
  LoggingLevel?: string;
  /**
   * The id of the Slack channel
   * @minLength `1`
   * @maxLength `256`
   * @pattern `^[A-Za-z0-9]+$`
   */
  SlackChannelId: string;
  /**
   * The id of the Slack workspace
   * @minLength `1`
   * @maxLength `256`
   * @pattern `^[0-9A-Z]{1,255}$`
   */
  SlackWorkspaceId: string;
  /**
   * ARNs of SNS topics which delivers notifications to AWS Chatbot, for example CloudWatch alarm notifications.
   */
  SnsTopicArns?: string[];
  /**
   * The tags to add to the configuration
   */
  Tags?: Tag[];
  /**
   * Enables use of a user role requirement in your chat configuration
   */
  UserRoleRequired?: boolean;
};
/**
 * Attribute type definition for `AWS::Chatbot::SlackChannelConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-chatbot-slackchannelconfiguration.html#aws-resource-chatbot-slackchannelconfiguration-return-values}
 */
export type ChatbotSlackChannelConfigurationAttributes = {
  /**
   * Amazon Resource Name (ARN) of the configuration
   * @pattern `^arn:(aws[a-zA-Z-]*)?:chatbot:[A-Za-z0-9_/.-]{0,63}:[A-Za-z0-9_/.-]{0,63}:[A-Za-z0-9][A-Za-z0-9:_/+=,@.-]{0,1023}$`
   */
  Arn: string;
};
/**
 * Type definition for `AWS::Chatbot::SlackChannelConfiguration.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-chatbot-slackchannelconfiguration-tag.html}
 */
export type Tag = {
  Key: string;
  Value: string;
};
/**
 * Resource schema for AWS::Chatbot::SlackChannelConfiguration.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-chatbot-slackchannelconfiguration.html}
 */
export class ChatbotSlackChannelConfiguration extends $Resource<
  "AWS::Chatbot::SlackChannelConfiguration",
  ChatbotSlackChannelConfigurationProperties,
  ChatbotSlackChannelConfigurationAttributes
> {
  public static readonly Type = "AWS::Chatbot::SlackChannelConfiguration";
  constructor(
    logicalId: string,
    properties: ChatbotSlackChannelConfigurationProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      ChatbotSlackChannelConfiguration.Type,
      properties,
      options,
    );
  }
}
