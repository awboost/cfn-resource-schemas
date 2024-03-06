import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * The ``AWS::SNS::TopicPolicy`` resource associates SNS topics with a policy. For an example snippet, see [Declaring an policy](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/quickref-iam.html#scenario-sns-policy) in the *User Guide*.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sns-topicpolicy.html}
 */
export type SNSTopicPolicyProperties = {
  /**
   * A policy document that contains permissions to add to the specified SNS topics.
   */
  PolicyDocument: Record<string, any> | string;
  /**
   * The Amazon Resource Names (ARN) of the topics to which you want to add the policy. You can use the ``Ref`` function to specify an ``AWS::SNS::Topic`` resource.
   */
  Topics: string[];
};
/**
 * Attribute type definition for `AWS::SNS::TopicPolicy`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sns-topicpolicy.html#aws-resource-sns-topicpolicy-return-values}
 */
export type SNSTopicPolicyAttributes = {
  Id: string;
};
/**
 * The ``AWS::SNS::TopicPolicy`` resource associates SNS topics with a policy. For an example snippet, see [Declaring an policy](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/quickref-iam.html#scenario-sns-policy) in the *User Guide*.
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
