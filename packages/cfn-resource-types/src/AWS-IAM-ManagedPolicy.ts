import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::IAM::ManagedPolicy
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-managedpolicy.html}
 */
export type IAMManagedPolicyProperties = {
  /**
   * A friendly description of the policy.
   */
  Description?: string;
  /**
   * The name (friendly name, not ARN) of the group to attach the policy to.
   */
  Groups?: string[];
  /**
   * The friendly name of the policy.
   */
  ManagedPolicyName?: string;
  /**
   * The path for the policy.
   */
  Path?: string;
  /**
   * The JSON policy document that you want to use as the content for the new policy.
   */
  PolicyDocument: Record<string, any> | string;
  /**
   * The name (friendly name, not ARN) of the role to attach the policy to.
   */
  Roles?: string[];
  /**
   * The name (friendly name, not ARN) of the IAM user to attach the policy to.
   */
  Users?: string[];
};
/**
 * Attribute type definition for `AWS::IAM::ManagedPolicy`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-managedpolicy.html#aws-resource-iam-managedpolicy-return-values}
 */
export type IAMManagedPolicyAttributes = {
  /**
   * The number of entities (users, groups, and roles) that the policy is attached to.
   */
  AttachmentCount: number;
  /**
   * The date and time, in ISO 8601 date-time format, when the policy was created.
   */
  CreateDate: string;
  /**
   * The identifier for the version of the policy that is set as the default version.
   */
  DefaultVersionId: string;
  /**
   * Specifies whether the policy can be attached to an IAM user, group, or role.
   */
  IsAttachable: boolean;
  /**
   * The number of entities (users and roles) for which the policy is used to set the permissions boundary.
   */
  PermissionsBoundaryUsageCount: number;
  /**
   * Amazon Resource Name (ARN) of the managed policy
   */
  PolicyArn: string;
  /**
   * The stable and unique string identifying the policy.
   */
  PolicyId: string;
  /**
   * The date and time, in ISO 8601 date-time format, when the policy was last updated.
   */
  UpdateDate: string;
};
/**
 * Resource Type definition for AWS::IAM::ManagedPolicy
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-managedpolicy.html}
 */
export class IAMManagedPolicy extends $Resource<
  "AWS::IAM::ManagedPolicy",
  IAMManagedPolicyProperties,
  IAMManagedPolicyAttributes
> {
  public static readonly Type = "AWS::IAM::ManagedPolicy";
  constructor(
    logicalId: string,
    properties: IAMManagedPolicyProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, IAMManagedPolicy.Type, properties, options);
  }
}
