import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource Type definition for AWS::IAM::Policy
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-policy.html}
 */
export type IAMPolicyProperties = {
  /**
   * The name of the group to associate the policy with. This parameter allows (through its regex pattern) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-.
   */
  Groups?: string[];
  /**
   * The policy document. You must provide policies in JSON format in IAM. However, for AWS CloudFormation templates formatted in YAML, you can provide the policy in JSON or YAML format. AWS CloudFormation always converts a YAML policy to JSON format before submitting it to IAM.
   */
  PolicyDocument: Record<string, any> | string;
  /**
   * The name of the policy document. This parameter allows (through its regex pattern) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-
   * @minLength `1`
   * @maxLength `128`
   */
  PolicyName: string;
  /**
   * The name of the role to associate the policy with. This parameter allows (per its regex pattern) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-
   */
  Roles?: string[];
  /**
   * The name of the user to associate the policy with. This parameter allows (through its regex pattern) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-
   */
  Users?: string[];
};
/**
 * Attribute type definition for `AWS::IAM::Policy`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-policy.html#aws-resource-iam-policy-return-values}
 */
export type IAMPolicyAttributes = {
  /**
   * The provider-assigned unique ID for this resource
   */
  Id: string;
};
/**
 * Resource Type definition for AWS::IAM::Policy
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-policy.html}
 */
export class IAMPolicy extends $Resource<
  "AWS::IAM::Policy",
  IAMPolicyProperties,
  IAMPolicyAttributes
> {
  public static readonly Type = "AWS::IAM::Policy";
  public static readonly AttributeNames = ["Id" as const];
  constructor(
    logicalId: string,
    properties: IAMPolicyProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      IAMPolicy.Type,
      properties,
      IAMPolicy.AttributeNames,
      options,
    );
  }
}
