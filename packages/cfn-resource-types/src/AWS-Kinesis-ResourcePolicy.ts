import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::Kinesis::ResourcePolicy
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesis-resourcepolicy.html}
 */
export type KinesisResourcePolicyProperties = {
  /**
   * The ARN of the AWS Kinesis resource to which the policy applies.
   * @minLength `1`
   * @maxLength `2048`
   * @pattern `arn:aws.*:kinesis:.*:\d{12}:stream/\S+`
   */
  ResourceArn: string;
  /**
   * A policy document containing permissions to add to the specified resource. In IAM, you must provide policy documents in JSON format. However, in CloudFormation you can provide the policy in JSON or YAML format because CloudFormation converts YAML to JSON before submitting it to IAM.
   */
  ResourcePolicy: Record<string, any>;
};
/**
 * Resource Type definition for AWS::Kinesis::ResourcePolicy
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesis-resourcepolicy.html}
 */
export class KinesisResourcePolicy extends $Resource<
  "AWS::Kinesis::ResourcePolicy",
  KinesisResourcePolicyProperties,
  Record<string, never>
> {
  public static readonly Type = "AWS::Kinesis::ResourcePolicy";
  constructor(
    logicalId: string,
    properties: KinesisResourcePolicyProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, KinesisResourcePolicy.Type, properties, options);
  }
}
