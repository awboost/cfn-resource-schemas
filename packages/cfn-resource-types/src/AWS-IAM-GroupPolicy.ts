import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
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
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: IAMGroupPolicyProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      IAMGroupPolicy.Type,
      properties,
      IAMGroupPolicy.AttributeNames,
      options,
    );
  }
}
