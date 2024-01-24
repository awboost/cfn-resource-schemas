import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::SSM::ResourcePolicy
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-resourcepolicy.html}
 */
export type SSMResourcePolicyProperties = {
  /**
   * Actual policy statement.
   */
  Policy: Record<string, any> | string;
  /**
   * Arn of OpsItemGroup etc.
   */
  ResourceArn: string;
};
/**
 * Attribute type definition for `AWS::SSM::ResourcePolicy`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-resourcepolicy.html#aws-resource-ssm-resourcepolicy-return-values}
 */
export type SSMResourcePolicyAttributes = {
  /**
   * A snapshot identifier for the policy over time.
   */
  PolicyHash: string;
  /**
   * An unique identifier within the policies of a resource.
   */
  PolicyId: string;
};
/**
 * Resource Type definition for AWS::SSM::ResourcePolicy
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-resourcepolicy.html}
 */
export class SSMResourcePolicy extends $Resource<
  "AWS::SSM::ResourcePolicy",
  SSMResourcePolicyProperties,
  SSMResourcePolicyAttributes
> {
  public static readonly Type = "AWS::SSM::ResourcePolicy";
  constructor(
    logicalId: string,
    properties: SSMResourcePolicyProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, SSMResourcePolicy.Type, properties, options);
  }
}
