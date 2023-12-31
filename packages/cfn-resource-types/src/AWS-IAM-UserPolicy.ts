import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
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
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: IAMUserPolicyProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      IAMUserPolicy.Type,
      properties,
      IAMUserPolicy.AttributeNames,
      options,
    );
  }
}
