import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * You can use AWS::Organizations::ResourcePolicy to delegate policy management for AWS Organizations to specified member accounts to perform policy actions that are by default available only to the management account.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-organizations-resourcepolicy.html}
 */
export type OrganizationsResourcePolicyProperties = {
  /**
   * The policy document. For AWS CloudFormation templates formatted in YAML, you can provide the policy in JSON or YAML format. AWS CloudFormation always converts a YAML policy to JSON format before submitting it.
   */
  Content: Record<string, any> | string;
  /**
   * A list of tags that you want to attach to the resource policy
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::Organizations::ResourcePolicy`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-organizations-resourcepolicy.html#aws-resource-organizations-resourcepolicy-return-values}
 */
export type OrganizationsResourcePolicyAttributes = {
  /**
   * The Amazon Resource Name (ARN) of the resource policy.
   * @pattern `^arn:aws.*:organizations::\d{12}:resourcepolicy\/o-[a-z0-9]{10,32}\/rp-[0-9a-zA-Z_]{4,128}`
   */
  Arn: string;
  /**
   * The unique identifier (ID) associated with this resource policy.
   * @maxLength `131`
   * @pattern `^rp-[0-9a-zA-Z_]{4,128}$`
   */
  Id: string;
};
/**
 * Type definition for `AWS::Organizations::ResourcePolicy.Tag`.
 * A custom key-value pair associated with a resource within your organization.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-organizations-resourcepolicy-tag.html}
 */
export type Tag = {
  /**
   * The key identifier, or name, of the tag.
   * @minLength `1`
   * @maxLength `128`
   */
  Key: string;
  /**
   * The string value that's associated with the key of the tag. You can set the value of a tag to an empty string, but you can't set the value of a tag to null.
   * @minLength `0`
   * @maxLength `256`
   */
  Value: string;
};
/**
 * You can use AWS::Organizations::ResourcePolicy to delegate policy management for AWS Organizations to specified member accounts to perform policy actions that are by default available only to the management account.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-organizations-resourcepolicy.html}
 */
export class OrganizationsResourcePolicy extends $Resource<
  "AWS::Organizations::ResourcePolicy",
  OrganizationsResourcePolicyProperties,
  OrganizationsResourcePolicyAttributes
> {
  public static readonly Type = "AWS::Organizations::ResourcePolicy";
  constructor(
    logicalId: string,
    properties: OrganizationsResourcePolicyProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, OrganizationsResourcePolicy.Type, properties, options);
  }
}
