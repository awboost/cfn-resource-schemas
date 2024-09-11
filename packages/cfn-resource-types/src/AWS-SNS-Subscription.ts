import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::SNS::Subscription
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sns-subscription.html}
 */
export type SNSSubscriptionProperties = {
  /**
   * The delivery policy JSON assigned to the subscription. Enables the subscriber to define the message delivery retry strategy in the case of an HTTP/S endpoint subscribed to the topic.
   */
  DeliveryPolicy?: Record<string, any> | string;
  /**
   * The subscription's endpoint. The endpoint value depends on the protocol that you specify.
   */
  Endpoint?: string;
  /**
   * The filter policy JSON assigned to the subscription. Enables the subscriber to filter out unwanted messages.
   */
  FilterPolicy?: Record<string, any> | string;
  /**
   * This attribute lets you choose the filtering scope by using one of the following string value types: MessageAttributes (default) and MessageBody.
   */
  FilterPolicyScope?: string;
  /**
   * The subscription's protocol.
   */
  Protocol: string;
  /**
   * When set to true, enables raw message delivery. Raw messages don't contain any JSON formatting and can be sent to Amazon SQS and HTTP/S endpoints.
   */
  RawMessageDelivery?: boolean;
  /**
   * When specified, sends undeliverable messages to the specified Amazon SQS dead-letter queue. Messages that can't be delivered due to client errors are held in the dead-letter queue for further analysis or reprocessing.
   */
  RedrivePolicy?: Record<string, any> | string;
  /**
   * For cross-region subscriptions, the region in which the topic resides.If no region is specified, AWS CloudFormation uses the region of the caller as the default.
   */
  Region?: string;
  /**
   * Specifies whether Amazon SNS resends the notification to the subscription when a message's attribute changes.
   */
  ReplayPolicy?: Record<string, any> | string;
  /**
   * This property applies only to Amazon Data Firehose delivery stream subscriptions.
   */
  SubscriptionRoleArn?: string;
  /**
   * The ARN of the topic to subscribe to.
   */
  TopicArn: string;
};
/**
 * Attribute type definition for `AWS::SNS::Subscription`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sns-subscription.html#aws-resource-sns-subscription-return-values}
 */
export type SNSSubscriptionAttributes = {
  /**
   * Arn of the subscription
   */
  Arn: string;
};
/**
 * Resource Type definition for AWS::SNS::Subscription
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sns-subscription.html}
 */
export class SNSSubscription extends $Resource<
  "AWS::SNS::Subscription",
  SNSSubscriptionProperties,
  SNSSubscriptionAttributes
> {
  public static readonly Type = "AWS::SNS::Subscription";
  constructor(
    logicalId: string,
    properties: SNSSubscriptionProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, SNSSubscription.Type, properties, options);
  }
}
