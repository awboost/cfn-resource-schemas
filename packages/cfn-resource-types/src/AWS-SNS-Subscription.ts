import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource Type definition for AWS::SNS::Subscription
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sns-subscription.html}
 */
export type SNSSubscriptionProperties = {
  DeliveryPolicy?: Record<string, any>;
  Endpoint?: string;
  FilterPolicy?: Record<string, any>;
  FilterPolicyScope?: string;
  Protocol: string;
  RawMessageDelivery?: boolean;
  RedrivePolicy?: Record<string, any>;
  Region?: string;
  SubscriptionRoleArn?: string;
  TopicArn: string;
};
/**
 * Attribute type definition for `AWS::SNS::Subscription`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sns-subscription.html#aws-resource-sns-subscription-return-values}
 */
export type SNSSubscriptionAttributes = {
  Id: string;
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
  public static readonly AttributeNames = ["Id" as const];
  constructor(
    logicalId: string,
    properties: SNSSubscriptionProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      SNSSubscription.Type,
      properties,
      SNSSubscription.AttributeNames,
      options,
    );
  }
}
