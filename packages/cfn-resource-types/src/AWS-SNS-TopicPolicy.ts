import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Schema for AWS::SNS::TopicPolicy
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sns-topicpolicy.html}
 */
export type SNSTopicPolicyProperties = {
  /**
   * A policy document that contains permissions to add to the specified SNS topics.
   */
  PolicyDocument: Record<string, any> | string;
  /**
   * The Amazon Resource Names (ARN) of the topics to which you want to add the policy. You can use the [Ref](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference-ref.html)` function to specify an [AWS::SNS::Topic](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sns-topic.html) resource.
   */
  Topics: string[];
};
/**
 * Attribute type definition for `AWS::SNS::TopicPolicy`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sns-topicpolicy.html#aws-resource-sns-topicpolicy-return-values}
 */
export type SNSTopicPolicyAttributes = {
  /**
   * The provider-assigned unique ID for this managed resource.
   */
  Id: string;
};
/**
 * Schema for AWS::SNS::TopicPolicy
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sns-topicpolicy.html}
 */
export class SNSTopicPolicy extends $Resource<
  "AWS::SNS::TopicPolicy",
  SNSTopicPolicyProperties,
  SNSTopicPolicyAttributes
> {
  public static readonly Type = "AWS::SNS::TopicPolicy";
  constructor(
    logicalId: string,
    properties: SNSTopicPolicyProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, SNSTopicPolicy.Type, properties, options);
  }
}
