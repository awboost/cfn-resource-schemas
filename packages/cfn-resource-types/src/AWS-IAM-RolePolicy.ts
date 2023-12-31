import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
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
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: IAMRolePolicyProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      IAMRolePolicy.Type,
      properties,
      IAMRolePolicy.AttributeNames,
      options,
    );
  }
}
