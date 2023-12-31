import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::IAM::RolePolicy`.
 * Schema for IAM Role Policy
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-rolepolicy.html}
 */
export type IAMRolePolicyProperties = {
  /**
   * The policy document.
   */
  PolicyDocument?: Record<string, any>;
  /**
   * The friendly name (not ARN) identifying the policy.
   */
  PolicyName: string;
  /**
   * The name of the policy document.
   */
  RoleName: string;
};
/**
 * Resource type definition for `AWS::IAM::RolePolicy`.
 * Schema for IAM Role Policy
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-rolepolicy.html}
 */
export class IAMRolePolicy extends $Resource<
  "AWS::IAM::RolePolicy",
  IAMRolePolicyProperties,
  Record<string, never>
> {
  public static readonly Type = "AWS::IAM::RolePolicy";
  constructor(
    logicalId: string,
    properties: IAMRolePolicyProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, IAMRolePolicy.Type, properties, options);
  }
}
