import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::CloudTrail::ResourcePolicy
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudtrail-resourcepolicy.html}
 */
export type CloudTrailResourcePolicyProperties = {
  /**
   * The ARN of the AWS CloudTrail resource to which the policy applies.
   */
  ResourceArn: string;
  /**
   * A policy document containing permissions to add to the specified resource. In IAM, you must provide policy documents in JSON format. However, in CloudFormation you can provide the policy in JSON or YAML format because CloudFormation converts YAML to JSON before submitting it to IAM.
   */
  ResourcePolicy: Record<string, any> | string;
};
/**
 * Resource Type definition for AWS::CloudTrail::ResourcePolicy
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudtrail-resourcepolicy.html}
 */
export class CloudTrailResourcePolicy extends $Resource<
  "AWS::CloudTrail::ResourcePolicy",
  CloudTrailResourcePolicyProperties,
  Record<string, never>
> {
  public static readonly Type = "AWS::CloudTrail::ResourcePolicy";
  constructor(
    logicalId: string,
    properties: CloudTrailResourcePolicyProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, CloudTrailResourcePolicy.Type, properties, options);
  }
}
