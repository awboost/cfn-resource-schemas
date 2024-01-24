import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::IAM::UserPolicy`.
 * Schema for IAM User Policy
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-userpolicy.html}
 */
export type IAMUserPolicyProperties = {
  /**
   * The policy document.
   */
  PolicyDocument?: Record<string, any>;
  /**
   * The name of the policy document.
   */
  PolicyName: string;
  /**
   * The name of the user to associate the policy with.
   */
  UserName: string;
};
/**
 * Resource type definition for `AWS::IAM::UserPolicy`.
 * Schema for IAM User Policy
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-userpolicy.html}
 */
export class IAMUserPolicy extends $Resource<
  "AWS::IAM::UserPolicy",
  IAMUserPolicyProperties,
  Record<string, never>
> {
  public static readonly Type = "AWS::IAM::UserPolicy";
  constructor(
    logicalId: string,
    properties: IAMUserPolicyProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, IAMUserPolicy.Type, properties, options);
  }
}
