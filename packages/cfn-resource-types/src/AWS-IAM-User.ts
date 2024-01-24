import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::IAM::User
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-user.html}
 */
export type IAMUserProperties = {
  /**
   * A list of group names to which you want to add the user.
   */
  Groups?: string[];
  /**
   * Creates a password for the specified IAM user. A password allows an IAM user to access AWS services through the AWS Management Console.
   */
  LoginProfile?: LoginProfile;
  /**
   * A list of Amazon Resource Names (ARNs) of the IAM managed policies that you want to attach to the role.
   */
  ManagedPolicyArns?: string[];
  /**
   * The path to the user. For more information about paths, see IAM identifiers in the IAM User Guide. The ARN of the policy used to set the permissions boundary for the user.
   */
  Path?: string;
  /**
   * The ARN of the policy that is used to set the permissions boundary for the user.
   */
  PermissionsBoundary?: string;
  /**
   * Adds or updates an inline policy document that is embedded in the specified IAM role.
   */
  Policies?: Policy[];
  /**
   * A list of tags that are associated with the user. For more information about tagging, see Tagging IAM resources in the IAM User Guide.
   */
  Tags?: Tag[];
  /**
   * The friendly name identifying the user.
   */
  UserName?: string;
};
/**
 * Attribute type definition for `AWS::IAM::User`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-user.html#aws-resource-iam-user-return-values}
 */
export type IAMUserAttributes = {
  /**
   * The Amazon Resource Name (ARN) that identifies the user. For more information about ARNs and how to use ARNs in policies, see IAM Identifiers in the IAM User Guide.
   */
  Arn: string;
};
/**
 * Type definition for `AWS::IAM::User.LoginProfile`.
 * Contains the user name and password create date for a user.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-user-loginprofile.html}
 */
export type LoginProfile = {
  /**
   * The user's password.
   */
  Password: string;
  /**
   * Specifies whether the user is required to set a new password on next sign-in.
   */
  PasswordResetRequired?: boolean;
};
/**
 * Type definition for `AWS::IAM::User.Policy`.
 * Contains information about an attached policy.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-user-policy.html}
 */
export type Policy = {
  /**
   * The policy document.
   */
  PolicyDocument: Record<string, any> | string;
  /**
   * The friendly name (not ARN) identifying the policy.
   */
  PolicyName: string;
};
/**
 * Type definition for `AWS::IAM::User.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-user-tag.html}
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
 * Resource Type definition for AWS::IAM::User
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-user.html}
 */
export class IAMUser extends $Resource<
  "AWS::IAM::User",
  IAMUserProperties,
  IAMUserAttributes
> {
  public static readonly Type = "AWS::IAM::User";
  constructor(
    logicalId: string,
    properties: IAMUserProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, IAMUser.Type, properties, options);
  }
}
