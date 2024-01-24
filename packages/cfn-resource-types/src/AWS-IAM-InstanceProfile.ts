import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::IAM::InstanceProfile
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-instanceprofile.html}
 */
export type IAMInstanceProfileProperties = {
  /**
   * The name of the instance profile to create.
   */
  InstanceProfileName?: string;
  /**
   * The path to the instance profile.
   */
  Path?: string;
  /**
   * The name of the role to associate with the instance profile. Only one role can be assigned to an EC2 instance at a time, and all applications on the instance share the same role and permissions.
   */
  Roles: string[];
};
/**
 * Attribute type definition for `AWS::IAM::InstanceProfile`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-instanceprofile.html#aws-resource-iam-instanceprofile-return-values}
 */
export type IAMInstanceProfileAttributes = {
  /**
   * The Amazon Resource Name (ARN) of the instance profile.
   */
  Arn: string;
};
/**
 * Resource Type definition for AWS::IAM::InstanceProfile
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-instanceprofile.html}
 */
export class IAMInstanceProfile extends $Resource<
  "AWS::IAM::InstanceProfile",
  IAMInstanceProfileProperties,
  IAMInstanceProfileAttributes
> {
  public static readonly Type = "AWS::IAM::InstanceProfile";
  constructor(
    logicalId: string,
    properties: IAMInstanceProfileProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, IAMInstanceProfile.Type, properties, options);
  }
}
