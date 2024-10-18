import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::Organizations::Policy`.
 * Policies in AWS Organizations enable you to manage different features of the AWS accounts in your organization.  You can use policies when all features are enabled in your organization.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-organizations-policy.html}
 */
export type OrganizationsPolicyProperties = {
  /**
   * The Policy text content. For AWS CloudFormation templates formatted in YAML, you can provide the policy in JSON or YAML format. AWS CloudFormation always converts a YAML policy to JSON format before submitting it.
   */
  Content: Record<string, any> | string;
  /**
   * Human readable description of the policy
   * @maxLength `512`
   * @pattern `[\s\S]*`
   */
  Description?: string;
  /**
   * Name of the Policy
   * @minLength `1`
   * @maxLength `128`
   * @pattern `[\s\S]*`
   */
  Name: string;
  /**
   * A list of tags that you want to attach to the newly created policy. For each tag in the list, you must specify both a tag key and a value. You can set the value to an empty string, but you can't set it to null.
   */
  Tags?: Tag[];
  /**
   * List of unique identifiers (IDs) of the root, OU, or account that you want to attach the policy to
   */
  TargetIds?: string[];
  /**
   * The type of policy to create. You can specify one of the following values: AISERVICES_OPT_OUT_POLICY, BACKUP_POLICY, SERVICE_CONTROL_POLICY, TAG_POLICY, CHATBOT_POLICY
   */
  Type:
    | "SERVICE_CONTROL_POLICY"
    | "AISERVICES_OPT_OUT_POLICY"
    | "BACKUP_POLICY"
    | "TAG_POLICY"
    | "CHATBOT_POLICY";
};
/**
 * Attribute type definition for `AWS::Organizations::Policy`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-organizations-policy.html#aws-resource-organizations-policy-return-values}
 */
export type OrganizationsPolicyAttributes = {
  /**
   * ARN of the Policy
   * @pattern `^arn:aws.*:organizations::[0-9]{12}:policy/o-[a-z0-9]{10}/(service_control|tag|backup|aiservices_opt_out)_policy/p-[a-z0-9]{8}`
   */
  Arn: string;
  /**
   * A boolean value that indicates whether the specified policy is an AWS managed policy. If true, then you can attach the policy to roots, OUs, or accounts, but you cannot edit it.
   */
  AwsManaged: boolean;
  /**
   * Id of the Policy
   * @maxLength `130`
   * @pattern `^p-[0-9a-zA-Z_]{8,128}$`
   */
  Id: string;
};
/**
 * Type definition for `AWS::Organizations::Policy.Tag`.
 * A custom key-value pair associated with a resource within your organization.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-organizations-policy-tag.html}
 */
export type Tag = {
  /**
   * The key identifier, or name, of the tag.
   * @minLength `1`
   * @maxLength `128`
   * @pattern `[\s\S]*`
   */
  Key: string;
  /**
   * The string value that's associated with the key of the tag. You can set the value of a tag to an empty string, but you can't set the value of a tag to null.
   * @minLength `0`
   * @maxLength `256`
   * @pattern `[\s\S]*`
   */
  Value: string;
};
/**
 * Resource type definition for `AWS::Organizations::Policy`.
 * Policies in AWS Organizations enable you to manage different features of the AWS accounts in your organization.  You can use policies when all features are enabled in your organization.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-organizations-policy.html}
 */
export class OrganizationsPolicy extends $Resource<
  "AWS::Organizations::Policy",
  OrganizationsPolicyProperties,
  OrganizationsPolicyAttributes
> {
  public static readonly Type = "AWS::Organizations::Policy";
  constructor(
    logicalId: string,
    properties: OrganizationsPolicyProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, OrganizationsPolicy.Type, properties, options);
  }
}
