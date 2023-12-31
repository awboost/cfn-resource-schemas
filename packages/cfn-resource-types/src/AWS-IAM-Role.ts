import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::IAM::Role
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-role.html}
 */
export type IAMRoleProperties = {
  /**
   * The trust policy that is associated with this role.
   */
  AssumeRolePolicyDocument: Record<string, any> | string;
  /**
   * A description of the role that you provide.
   */
  Description?: string;
  /**
   * A list of Amazon Resource Names (ARNs) of the IAM managed policies that you want to attach to the role.
   */
  ManagedPolicyArns?: string[];
  /**
   * The maximum session duration (in seconds) that you want to set for the specified role. If you do not specify a value for this setting, the default maximum of one hour is applied. This setting can have a value from 1 hour to 12 hours.
   */
  MaxSessionDuration?: number;
  /**
   * The path to the role.
   */
  Path?: string;
  /**
   * The ARN of the policy used to set the permissions boundary for the role.
   */
  PermissionsBoundary?: string;
  /**
   * Adds or updates an inline policy document that is embedded in the specified IAM role.
   */
  Policies?: Policy[];
  /**
   * A name for the IAM role, up to 64 characters in length.
   */
  RoleName?: string;
  /**
   * A list of tags that are attached to the role.
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::IAM::Role`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-role.html#aws-resource-iam-role-return-values}
 */
export type IAMRoleAttributes = {
  /**
   * The Amazon Resource Name (ARN) for the role.
   */
  Arn: string;
  /**
   * The stable and unique string identifying the role.
   */
  RoleId: string;
};
/**
 * Type definition for `AWS::IAM::Role.Policy`.
 * The inline policy document that is embedded in the specified IAM role.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-role-policy.html}
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
 * Type definition for `AWS::IAM::Role.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-role-tag.html}
 */
export type Tag = {
  /**
   * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   */
  Key: string;
  /**
   * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   */
  Value: string;
};
/**
 * Resource Type definition for AWS::IAM::Role
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-role.html}
 */
export class IAMRole extends $Resource<
  "AWS::IAM::Role",
  IAMRoleProperties,
  IAMRoleAttributes
> {
  public static readonly Type = "AWS::IAM::Role";
  constructor(
    logicalId: string,
    properties: IAMRoleProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, IAMRole.Type, properties, options);
  }
}
