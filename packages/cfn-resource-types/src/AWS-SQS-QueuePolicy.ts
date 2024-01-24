import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * The ``AWS::SQS::QueuePolicy`` type applies a policy to SQS queues. For an example snippet, see [Declaring an policy](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/quickref-iam.html#scenario-sqs-policy) in the *User Guide*.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sqs-queuepolicy.html}
 */
export type SQSQueuePolicyProperties = {
  /**
   * A policy document that contains the permissions for the specified SQS queues. For more information about SQS policies, see [Using custom policies with the access policy language](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-creating-custom-policies.html) in the *Developer Guide*.
   */
  PolicyDocument: Record<string, any> | string;
  /**
   * The URLs of the queues to which you want to add the policy. You can use the ``Ref`` function to specify an ``AWS::SQS::Queue`` resource.
   */
  Queues: string[];
};
/**
 * Attribute type definition for `AWS::SQS::QueuePolicy`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sqs-queuepolicy.html#aws-resource-sqs-queuepolicy-return-values}
 */
export type SQSQueuePolicyAttributes = {
  Id: string;
};
/**
 * The ``AWS::SQS::QueuePolicy`` type applies a policy to SQS queues. For an example snippet, see [Declaring an policy](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/quickref-iam.html#scenario-sqs-policy) in the *User Guide*.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sqs-queuepolicy.html}
 */
export class SQSQueuePolicy extends $Resource<
  "AWS::SQS::QueuePolicy",
  SQSQueuePolicyProperties,
  SQSQueuePolicyAttributes
> {
  public static readonly Type = "AWS::SQS::QueuePolicy";
  constructor(
    logicalId: string,
    properties: SQSQueuePolicyProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, SQSQueuePolicy.Type, properties, options);
  }
}
