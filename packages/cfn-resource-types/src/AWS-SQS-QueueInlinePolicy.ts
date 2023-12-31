import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::SQS::QueueInlinePolicy`.
 * Schema for SQS QueueInlinePolicy
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sqs-queueinlinepolicy.html}
 */
export type SQSQueueInlinePolicyProperties = {
  /**
   * A policy document that contains permissions to add to the specified SQS queue
   */
  PolicyDocument: Record<string, any>;
  /**
   * The URL of the SQS queue.
   */
  Queue: string;
};
/**
 * Resource type definition for `AWS::SQS::QueueInlinePolicy`.
 * Schema for SQS QueueInlinePolicy
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sqs-queueinlinepolicy.html}
 */
export class SQSQueueInlinePolicy extends $Resource<
  "AWS::SQS::QueueInlinePolicy",
  SQSQueueInlinePolicyProperties,
  Record<string, never>
> {
  public static readonly Type = "AWS::SQS::QueueInlinePolicy";
  constructor(
    logicalId: string,
    properties: SQSQueueInlinePolicyProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, SQSQueueInlinePolicy.Type, properties, options);
  }
}
