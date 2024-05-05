import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::SSO::Instance`.
 * Resource Type definition for Identity Center (SSO) Instance
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sso-instance.html}
 */
export type SSOInstanceProperties = {
  /**
   * The name you want to assign to this Identity Center (SSO) Instance
   * @minLength `1`
   * @maxLength `32`
   * @pattern `^[\w+=,.@-]+$`
   */
  Name?: string;
  /**
   * @maxLength `75`
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::SSO::Instance`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sso-instance.html#aws-resource-sso-instance-return-values}
 */
export type SSOInstanceAttributes = {
  /**
   * The ID of the identity store associated with the created Identity Center (SSO) Instance
   * @minLength `1`
   * @maxLength `64`
   * @pattern `^[a-zA-Z0-9-]*$`
   */
  IdentityStoreId: string;
  /**
   * The SSO Instance ARN that is returned upon creation of the Identity Center (SSO) Instance
   * @minLength `10`
   * @maxLength `1224`
   * @pattern `^arn:(aws|aws-us-gov|aws-cn|aws-iso|aws-iso-b):sso:::instance/(sso)?ins-[a-zA-Z0-9-.]{16}$`
   */
  InstanceArn: string;
  /**
   * The AWS accountId of the owner of the Identity Center (SSO) Instance
   * @minLength `12`
   * @maxLength `12`
   * @pattern `^\d{12}?$`
   */
  OwnerAccountId: string;
  /**
   * The status of the Identity Center (SSO) Instance, create_in_progress/delete_in_progress/active
   */
  Status: "CREATE_IN_PROGRESS" | "DELETE_IN_PROGRESS" | "ACTIVE";
};
/**
 * Type definition for `AWS::SSO::Instance.Tag`.
 * The metadata that you apply to the Identity Center (SSO) Instance to help you categorize and organize them.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sso-instance-tag.html}
 */
export type Tag = {
  /**
   * @minLength `1`
   * @maxLength `128`
   * @pattern `[\w+=,.@-]+`
   */
  Key: string;
  /**
   * @minLength `0`
   * @maxLength `256`
   * @pattern `[\w+=,.@-]+`
   */
  Value: string;
};
/**
 * Resource type definition for `AWS::SSO::Instance`.
 * Resource Type definition for Identity Center (SSO) Instance
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sso-instance.html}
 */
export class SSOInstance extends $Resource<
  "AWS::SSO::Instance",
  SSOInstanceProperties,
  SSOInstanceAttributes
> {
  public static readonly Type = "AWS::SSO::Instance";
  constructor(
    logicalId: string,
    properties: SSOInstanceProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, SSOInstance.Type, properties, options);
  }
}
