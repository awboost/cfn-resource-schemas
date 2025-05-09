import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::IAM::Policy`.
 * Adds or updates an inline policy document that is embedded in the specified IAM group, user or role.
 An IAM user can also have a managed policy attached to it. For information about policies, see [Managed Policies and Inline Policies](https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html) in the *User Guide*.
 The Groups, Roles, and Users properties are optional. However, you must specify at least one of these properties.
 For information about policy documents see [Creating policies](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_create.html) in the *User Guide*.
 For information about limits on the number of inline policies that you can embed in an identity, see [Limitations on Entities](https://docs.aws.amazon.com/IAM/latest/UserGuide/LimitationsOnEntities.html) in the *User Guide*.
  This resource does not support [drift detection](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-stack-drift.html). The following inline policy resource types support drift detection:
  +   [AWS::IAM::GroupPolicy](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-grouppolicy.html)
  +   [AWS::IAM::RolePolicy](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-rolepolicy.html)
  +   [AWS::IAM::UserPolicy](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-userpolicy.html)
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-policy.html}
 */
export type IAMPolicyProperties = {
  /**
     * The name of the group to associate the policy with.
     This parameter allows (through its [regex pattern](https://docs.aws.amazon.com/http://wikipedia.org/wiki/regex)) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-.
     */
  Groups?: string[];
  /**
     * The policy document.
     You must provide policies in JSON format in IAM. However, for CFN templates formatted in YAML, you can provide the policy in JSON or YAML format. CFN always converts a YAML policy to JSON format before submitting it to IAM.
     The [regex pattern](https://docs.aws.amazon.com/http://wikipedia.org/wiki/regex) used to validate this parameter is a string of characters consisting of the following:
      +  Any printable ASCII character ranging from the space character (``\u0020``) through the end of the ASCII character range
      +  The printable characters in the Basic Latin and Latin-1 Supplement character set (through ``\u00FF``)
      +  The special characters tab (``\u0009``), line feed (``\u000A``), and carriage return (``\u000D``)
     */
  PolicyDocument: Record<string, any> | string;
  /**
     * The name of the policy document.
     This parameter allows (through its [regex pattern](https://docs.aws.amazon.com/http://wikipedia.org/wiki/regex)) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-
     * @minLength `1`
     * @maxLength `128`
     */
  PolicyName: string;
  /**
     * The name of the role to associate the policy with.
     This parameter allows (per its [regex pattern](https://docs.aws.amazon.com/http://wikipedia.org/wiki/regex)) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-
      If an external policy (such as ``AWS::IAM::Policy`` or ``AWS::IAM::ManagedPolicy``) has a ``Ref`` to a role and if a resource (such as ``AWS::ECS::Service``) also has a ``Ref`` to the same role, add a ``DependsOn`` attribute to the resource to make the resource depend on the external policy. This dependency ensures that the role's policy is available throughout the resource's lifecycle. For example, when you delete a stack with an ``AWS::ECS::Service`` resource, the ``DependsOn`` attribute ensures that CFN deletes the ``AWS::ECS::Service`` resource before deleting its role's policy.
     */
  Roles?: string[];
  /**
     * The name of the user to associate the policy with.
     This parameter allows (through its [regex pattern](https://docs.aws.amazon.com/http://wikipedia.org/wiki/regex)) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-
     */
  Users?: string[];
};
/**
 * Attribute type definition for `AWS::IAM::Policy`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-policy.html#aws-resource-iam-policy-return-values}
 */
export type IAMPolicyAttributes = {
  Id: string;
};
/**
 * Resource type definition for `AWS::IAM::Policy`.
 * Adds or updates an inline policy document that is embedded in the specified IAM group, user or role.
 An IAM user can also have a managed policy attached to it. For information about policies, see [Managed Policies and Inline Policies](https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html) in the *User Guide*.
 The Groups, Roles, and Users properties are optional. However, you must specify at least one of these properties.
 For information about policy documents see [Creating policies](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_create.html) in the *User Guide*.
 For information about limits on the number of inline policies that you can embed in an identity, see [Limitations on Entities](https://docs.aws.amazon.com/IAM/latest/UserGuide/LimitationsOnEntities.html) in the *User Guide*.
  This resource does not support [drift detection](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-stack-drift.html). The following inline policy resource types support drift detection:
  +   [AWS::IAM::GroupPolicy](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-grouppolicy.html)
  +   [AWS::IAM::RolePolicy](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-rolepolicy.html)
  +   [AWS::IAM::UserPolicy](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-userpolicy.html)
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-policy.html}
 */
export class IAMPolicy extends $Resource<
  "AWS::IAM::Policy",
  IAMPolicyProperties,
  IAMPolicyAttributes
> {
  public static readonly Type = "AWS::IAM::Policy";
  constructor(
    logicalId: string,
    properties: IAMPolicyProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, IAMPolicy.Type, properties, options);
  }
}
