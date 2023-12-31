import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::SSO::PermissionSet`.
 * Resource Type definition for SSO PermissionSet
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sso-permissionset.html}
 */
export type SSOPermissionSetProperties = {
  /**
   * @maxLength `20`
   */
  CustomerManagedPolicyReferences?: CustomerManagedPolicyReference[];
  /**
   * The permission set description.
   * @minLength `1`
   * @maxLength `700`
   * @pattern `[\u0009\u000A\u000D\u0020-\u007E\u00A1-\u00FF]*`
   */
  Description?: string;
  /**
   * The inline policy to put in permission set.
   */
  InlinePolicy?: Record<string, any> | string;
  /**
   * The sso instance arn that the permission set is owned.
   * @minLength `10`
   * @maxLength `1224`
   * @pattern `arn:(aws|aws-us-gov|aws-cn|aws-iso|aws-iso-b):sso:::instance/(sso)?ins-[a-zA-Z0-9-.]{16}`
   */
  InstanceArn: string;
  /**
   * @maxLength `20`
   */
  ManagedPolicies?: string[];
  /**
   * The name you want to assign to this permission set.
   * @minLength `1`
   * @maxLength `32`
   * @pattern `[\w+=,.@-]+`
   */
  Name: string;
  PermissionsBoundary?: PermissionsBoundary;
  /**
   * The relay state URL that redirect links to any service in the AWS Management Console.
   * @minLength `1`
   * @maxLength `240`
   * @pattern `[a-zA-Z0-9&amp;$@#\/%?=~\-_'&quot;|!:,.;*+\[\]\ \(\)\{\}]+`
   */
  RelayStateType?: string;
  /**
   * The length of time that a user can be signed in to an AWS account.
   * @minLength `1`
   * @maxLength `100`
   * @pattern `^(-?)P(?=\d|T\d)(?:(\d+)Y)?(?:(\d+)M)?(?:(\d+)([DW]))?(?:T(?:(\d+)H)?(?:(\d+)M)?(?:(\d+(?:\.\d+)?)S)?)?$`
   */
  SessionDuration?: string;
  /**
   * @maxLength `50`
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::SSO::PermissionSet`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sso-permissionset.html#aws-resource-sso-permissionset-return-values}
 */
export type SSOPermissionSetAttributes = {
  /**
   * The permission set that the policy will be attached to
   * @minLength `10`
   * @maxLength `1224`
   * @pattern `arn:(aws|aws-us-gov|aws-cn|aws-iso|aws-iso-b):sso:::permissionSet/(sso)?ins-[a-zA-Z0-9-.]{16}/ps-[a-zA-Z0-9-./]{16}`
   */
  PermissionSetArn: string;
};
/**
 * Type definition for `AWS::SSO::PermissionSet.CustomerManagedPolicyReference`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sso-permissionset-customermanagedpolicyreference.html}
 */
export type CustomerManagedPolicyReference = {
  /**
   * @minLength `1`
   * @maxLength `128`
   * @pattern `[\w+=,.@-]+`
   */
  Name: string;
  /**
   * @minLength `1`
   * @maxLength `512`
   * @pattern `((/[A-Za-z0-9\.,\+@=_-]+)*)/`
   */
  Path?: string;
};
/**
 * Type definition for `AWS::SSO::PermissionSet.PermissionsBoundary`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sso-permissionset-permissionsboundary.html}
 */
export type PermissionsBoundary = {
  CustomerManagedPolicyReference?: CustomerManagedPolicyReference;
  /**
   * The managed policy to attach.
   * @minLength `20`
   * @maxLength `2048`
   */
  ManagedPolicyArn?: string;
};
/**
 * Type definition for `AWS::SSO::PermissionSet.Tag`.
 * The metadata that you apply to the permission set to help you categorize and organize them.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sso-permissionset-tag.html}
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
 * Resource type definition for `AWS::SSO::PermissionSet`.
 * Resource Type definition for SSO PermissionSet
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sso-permissionset.html}
 */
export class SSOPermissionSet extends $Resource<
  "AWS::SSO::PermissionSet",
  SSOPermissionSetProperties,
  SSOPermissionSetAttributes
> {
  public static readonly Type = "AWS::SSO::PermissionSet";
  constructor(
    logicalId: string,
    properties: SSOPermissionSetProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, SSOPermissionSet.Type, properties, options);
  }
}
