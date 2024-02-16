import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::IAM::User`.
 * Creates a new IAM user for your AWS-account.
  For information about quotas for the number of IAM users you can create, see [IAM and quotas](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-quotas.html) in the *IAM User Guide*.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-user.html}
 */
export type IAMUserProperties = {
  /**
   * A list of group names to which you want to add the user.
   */
  Groups?: string[];
  /**
     * Creates a password for the specified IAM user. A password allows an IAM user to access AWS services through the console.
     You can use the CLI, the AWS API, or the *Users* page in the IAM console to create a password for any IAM user. Use [ChangePassword](https://docs.aws.amazon.com/IAM/latest/APIReference/API_ChangePassword.html) to update your own existing password in the *My Security Credentials* page in the console.
     For more information about managing passwords, see [Managing passwords](https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_ManagingLogins.html) in the *User Guide*.
     */
  LoginProfile?: LoginProfile;
  /**
     * A list of Amazon Resource Names (ARNs) of the IAM managed policies that you want to attach to the user.
     For more information about ARNs, see [Amazon Resource Names (ARNs) and Service Namespaces](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) in the *General Reference*.
     */
  ManagedPolicyArns?: string[];
  /**
     * The path for the user name. For more information about paths, see [IAM identifiers](https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html) in the *IAM User Guide*.
     This parameter is optional. If it is not included, it defaults to a slash (/).
     This parameter allows (through its [regex pattern](https://docs.aws.amazon.com/http://wikipedia.org/wiki/regex)) a string of characters consisting of either a forward slash (/) by itself or a string that must begin and end with forward slashes. In addition, it can contain any ASCII character from the ! (``\u0021``) through the DEL character (``\u007F``), including most punctuation characters, digits, and upper and lowercased letters.
     */
  Path?: string;
  /**
     * The ARN of the managed policy that is used to set the permissions boundary for the user.
     A permissions boundary policy defines the maximum permissions that identity-based policies can grant to an entity, but does not grant permissions. Permissions boundaries do not define the maximum permissions that a resource-based policy can grant to an entity. To learn more, see [Permissions boundaries for IAM entities](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_boundaries.html) in the *IAM User Guide*.
     For more information about policy types, see [Policy types](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies.html#access_policy-types) in the *IAM User Guide*.
     */
  PermissionsBoundary?: string;
  /**
     * Adds or updates an inline policy document that is embedded in the specified IAM user. To view AWS::IAM::User snippets, see [Declaring an User Resource](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/quickref-iam.html#scenario-iam-user).
      The name of each policy for a role, user, or group must be unique. If you don't choose unique names, updates to the IAM identity will fail.
      For information about limits on the number of inline policies that you can embed in a user, see [Limitations on Entities](https://docs.aws.amazon.com/IAM/latest/UserGuide/LimitationsOnEntities.html) in the *User Guide*.
     */
  Policies?: Policy[];
  /**
     * A list of tags that you want to attach to the new user. Each tag consists of a key name and an associated value. For more information about tagging, see [Tagging IAM resources](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html) in the *IAM User Guide*.
      If any one of the tags is invalid or if you exceed the allowed maximum number of tags, then the entire request fails and the resource is not created.
     */
  Tags?: Tag[];
  /**
     * The name of the user to create. Do not include the path in this value.
     This parameter allows (per its [regex pattern](https://docs.aws.amazon.com/http://wikipedia.org/wiki/regex)) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-. The user name must be unique within the account. User names are not distinguished by case. For example, you cannot create users named both "John" and "john".
     If you don't specify a name, CFN generates a unique physical ID and uses that ID for the user name.
     If you specify a name, you must specify the ``CAPABILITY_NAMED_IAM`` value to acknowledge your template's capabilities. For more information, see [Acknowledging Resources in Templates](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-iam-template.html#using-iam-capabilities).
      Naming an IAM resource can cause an unrecoverable error if you reuse the same template in multiple Regions. To prevent this, we recommend using ``Fn::Join`` and ``AWS::Region`` to create a Region-specific name, as in the following example: ``{"Fn::Join": ["", [{"Ref": "AWS::Region"}, {"Ref": "MyResourceName"}]]}``.
     */
  UserName?: string;
};
/**
 * Attribute type definition for `AWS::IAM::User`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-user.html#aws-resource-iam-user-return-values}
 */
export type IAMUserAttributes = {
  Arn: string;
};
/**
 * Type definition for `AWS::IAM::User.LoginProfile`.
 * Creates a password for the specified user, giving the user the ability to access AWS services through the console. For more information about managing passwords, see [Managing Passwords](https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_ManagingLogins.html) in the *User Guide*.
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
 An attached policy is a managed policy that has been attached to a user, group, or role.
 For more information about managed policies, refer to [Managed Policies and Inline Policies](https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html) in the *User Guide*.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-user-policy.html}
 */
export type Policy = {
  /**
   * The entire contents of the policy that defines permissions. For more information, see [Overview of JSON policies](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies.html#access_policies-json).
   */
  PolicyDocument: Record<string, any> | string;
  /**
   * The friendly name (not ARN) identifying the policy.
   */
  PolicyName: string;
};
/**
 * Type definition for `AWS::IAM::User.Tag`.
 * A structure that represents user-provided metadata that can be associated with an IAM resource. For more information about tagging, see [Tagging IAM resources](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html) in the *IAM User Guide*.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-user-tag.html}
 */
export type Tag = {
  /**
   * The key name that can be used to look up or retrieve the associated value. For example, ``Department`` or ``Cost Center`` are common choices.
   */
  Key: string;
  /**
     * The value associated with this tag. For example, tags with a key name of ``Department`` could have values such as ``Human Resources``, ``Accounting``, and ``Support``. Tags with a key name of ``Cost Center`` might have values that consist of the number associated with the different cost centers in your company. Typically, many resources have tags with the same key name but with different values.
       AWS always interprets the tag ``Value`` as a single string. If you need to store an array, you can store comma-separated values in the string. However, you must interpret the value in your code.
     */
  Value: string;
};
/**
 * Resource type definition for `AWS::IAM::User`.
 * Creates a new IAM user for your AWS-account.
  For information about quotas for the number of IAM users you can create, see [IAM and quotas](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-quotas.html) in the *IAM User Guide*.
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
