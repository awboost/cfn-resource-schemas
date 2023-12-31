import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
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
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: SNSTopicInlinePolicyProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      SNSTopicInlinePolicy.Type,
      properties,
      SNSTopicInlinePolicy.AttributeNames,
      options,
    );
  }
}
