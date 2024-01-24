import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::IAM::GroupPolicy`.
 * Schema for IAM Group Policy
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-grouppolicy.html}
 */
export type IAMGroupPolicyProperties = {
  /**
   * The name of the group to associate the policy with.
   */
  GroupName: string;
  /**
   * The policy document.
   */
  PolicyDocument?: Record<string, any>;
  /**
   * The name of the policy document.
   */
  PolicyName: string;
};
/**
 * Resource type definition for `AWS::IAM::GroupPolicy`.
 * Schema for IAM Group Policy
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-grouppolicy.html}
 */
export class IAMGroupPolicy extends $Resource<
  "AWS::IAM::GroupPolicy",
  IAMGroupPolicyProperties,
  Record<string, never>
> {
  public static readonly Type = "AWS::IAM::GroupPolicy";
  constructor(
    logicalId: string,
    properties: IAMGroupPolicyProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, IAMGroupPolicy.Type, properties, options);
  }
}
