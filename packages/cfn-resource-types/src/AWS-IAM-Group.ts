import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource Type definition for AWS::IAM::Group
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-group.html}
 */
export type IAMGroupProperties = {
  /**
   * The name of the group to create
   */
  GroupName?: string;
  /**
   * A list of Amazon Resource Names (ARNs) of the IAM managed policies that you want to attach to the role.
   */
  ManagedPolicyArns?: string[];
  /**
   * The path to the group
   */
  Path?: string;
  /**
   * Adds or updates an inline policy document that is embedded in the specified IAM group
   */
  Policies?: Policy[];
};
/**
 * Attribute type definition for `AWS::IAM::Group`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-group.html#aws-resource-iam-group-return-values}
 */
export type IAMGroupAttributes = {
  /**
   * The Arn of the group to create
   */
  Arn: string;
};
/**
 * Type definition for `AWS::IAM::Group.Policy`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-group-policy.html}
 */
export type Policy = {
  /**
   * The policy document.
   */
  PolicyDocument: string | Record<string, any>;
  /**
   * The friendly name (not ARN) identifying the policy.
   */
  PolicyName: string;
};
/**
 * Resource Type definition for AWS::IAM::Group
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-group.html}
 */
export class IAMGroup extends $Resource<
  "AWS::IAM::Group",
  IAMGroupProperties,
  IAMGroupAttributes
> {
  public static readonly Type = "AWS::IAM::Group";
  public static readonly AttributeNames = ["Arn" as const];
  constructor(
    logicalId: string,
    properties: IAMGroupProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      IAMGroup.Type,
      properties,
      IAMGroup.AttributeNames,
      options,
    );
  }
}
