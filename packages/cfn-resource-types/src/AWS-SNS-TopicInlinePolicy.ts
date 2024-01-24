import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Schema for AWS::SNS::TopicInlinePolicy
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sns-topicinlinepolicy.html}
 */
export type SNSTopicInlinePolicyProperties = {
  /**
   * A policy document that contains permissions to add to the specified SNS topics.
   */
  PolicyDocument: Record<string, any>;
  /**
   * The Amazon Resource Name (ARN) of the topic to which you want to add the policy.
   */
  TopicArn: string;
};
/**
 * Schema for AWS::SNS::TopicInlinePolicy
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sns-topicinlinepolicy.html}
 */
export class SNSTopicInlinePolicy extends $Resource<
  "AWS::SNS::TopicInlinePolicy",
  SNSTopicInlinePolicyProperties,
  Record<string, never>
> {
  public static readonly Type = "AWS::SNS::TopicInlinePolicy";
  constructor(
    logicalId: string,
    properties: SNSTopicInlinePolicyProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, SNSTopicInlinePolicy.Type, properties, options);
  }
}
