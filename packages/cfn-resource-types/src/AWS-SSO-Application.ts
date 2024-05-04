import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::SSO::Application`.
 * Resource Type definition for Identity Center (SSO) Application
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sso-application.html}
 */
export type SSOApplicationProperties = {
  /**
   * The ARN of the application provider under which the operation will run
   * @minLength `10`
   * @maxLength `1224`
   * @pattern `^arn:(aws|aws-us-gov|aws-cn|aws-iso|aws-iso-b):sso::aws:applicationProvider/[a-zA-Z0-9-/]+$`
   */
  ApplicationProviderArn: string;
  /**
   * The description information for the Identity Center (SSO) Application
   * @minLength `1`
   * @maxLength `128`
   */
  Description?: string;
  /**
   * The ARN of the instance of IAM Identity Center under which the operation will run
   * @minLength `10`
   * @maxLength `1224`
   * @pattern `^arn:(aws|aws-us-gov|aws-cn|aws-iso|aws-iso-b):sso:::instance/(sso)?ins-[a-zA-Z0-9-.]{16}$`
   */
  InstanceArn: string;
  /**
   * The name you want to assign to this Identity Center (SSO) Application
   * @minLength `0`
   * @maxLength `255`
   * @pattern `^[\w+=,.@-]+$`
   */
  Name: string;
  /**
   * A structure that describes the options for the portal associated with an application
   */
  PortalOptions?: PortalOptionsConfiguration;
  /**
   * Specifies whether the application is enabled or disabled
   */
  Status?: "ENABLED" | "DISABLED";
  /**
   * @maxLength `75`
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::SSO::Application`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sso-application.html#aws-resource-sso-application-return-values}
 */
export type SSOApplicationAttributes = {
  /**
   * The Application ARN that is returned upon creation of the Identity Center (SSO) Application
   * @minLength `10`
   * @maxLength `1224`
   * @pattern `^arn:(aws|aws-us-gov|aws-cn|aws-iso|aws-iso-b):sso::\d{12}:application/(sso)?ins-[a-zA-Z0-9-.]{16}/apl-[a-zA-Z0-9]{16}$`
   */
  ApplicationArn: string;
};
/**
 * Type definition for `AWS::SSO::Application.PortalOptionsConfiguration`.
 * A structure that describes the options for the access portal associated with an application
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sso-application-portaloptionsconfiguration.html}
 */
export type PortalOptionsConfiguration = {
  /**
   * A structure that describes the sign-in options for the access portal
   */
  SignInOptions?: SignInOptions;
  /**
   * Indicates whether this application is visible in the access portal
   */
  Visibility?: "ENABLED" | "DISABLED";
};
/**
 * Type definition for `AWS::SSO::Application.SignInOptions`.
 * A structure that describes the sign-in options for an application portal
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sso-application-signinoptions.html}
 */
export type SignInOptions = {
  /**
   * The URL that accepts authentication requests for an application, this is a required parameter if the Origin parameter is APPLICATION
   * @minLength `1`
   * @maxLength `512`
   * @pattern `^http(s)?:\/\/[-a-zA-Z0-9+&@#\/%?=~_|!:,.;]*[-a-zA-Z0-9+&bb@#\/%?=~_|]$`
   */
  ApplicationUrl?: string;
  /**
   * This determines how IAM Identity Center navigates the user to the target application
   */
  Origin: "IDENTITY_CENTER" | "APPLICATION";
};
/**
 * Type definition for `AWS::SSO::Application.Tag`.
 * The metadata that you apply to the Identity Center (SSO) Application to help you categorize and organize them.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sso-application-tag.html}
 */
export type Tag = {
  /**
   * @minLength `1`
   * @maxLength `128`
   * @pattern `^[\w+=,.@-]+$`
   */
  Key: string;
  /**
   * @minLength `0`
   * @maxLength `256`
   * @pattern `^[\w+=,.@-]+$`
   */
  Value: string;
};
/**
 * Resource type definition for `AWS::SSO::Application`.
 * Resource Type definition for Identity Center (SSO) Application
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sso-application.html}
 */
export class SSOApplication extends $Resource<
  "AWS::SSO::Application",
  SSOApplicationProperties,
  SSOApplicationAttributes
> {
  public static readonly Type = "AWS::SSO::Application";
  constructor(
    logicalId: string,
    properties: SSOApplicationProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, SSOApplication.Type, properties, options);
  }
}
