import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Definition of AWS::WorkSpacesWeb::IdentityProvider Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspacesweb-identityprovider.html}
 */
export type WorkSpacesWebIdentityProviderProperties = {
  IdentityProviderDetails: IdentityProviderDetails;
  /**
   * @minLength `1`
   * @maxLength `32`
   * @pattern `^[^_][\p{L}\p{M}\p{S}\p{N}\p{P}][^_]+$`
   */
  IdentityProviderName: string;
  IdentityProviderType: IdentityProviderType;
  /**
   * @minLength `20`
   * @maxLength `2048`
   * @pattern `^arn:[\w+=\/,.@-]+:[a-zA-Z0-9\-]+:[a-zA-Z0-9\-]*:[a-zA-Z0-9]{1,12}:[a-zA-Z]+(\/[a-fA-F0-9\-]{36})+$`
   */
  PortalArn?: string;
};
/**
 * Attribute type definition for `AWS::WorkSpacesWeb::IdentityProvider`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspacesweb-identityprovider.html#aws-resource-workspacesweb-identityprovider-return-values}
 */
export type WorkSpacesWebIdentityProviderAttributes = {
  /**
   * @minLength `20`
   * @maxLength `2048`
   * @pattern `^arn:[\w+=\/,.@-]+:[a-zA-Z0-9\-]+:[a-zA-Z0-9\-]*:[a-zA-Z0-9]{1,12}:[a-zA-Z]+(\/[a-fA-F0-9\-]{36}){2,}$`
   */
  IdentityProviderArn: string;
};
/**
 * Type definition for `AWS::WorkSpacesWeb::IdentityProvider.IdentityProviderDetails`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-workspacesweb-identityprovider-identityproviderdetails.html}
 */
export type IdentityProviderDetails = Record<string, string>;
/**
 * Type definition for `AWS::WorkSpacesWeb::IdentityProvider.IdentityProviderType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-workspacesweb-identityprovider-identityprovidertype.html}
 */
export type IdentityProviderType =
  | "SAML"
  | "Facebook"
  | "Google"
  | "LoginWithAmazon"
  | "SignInWithApple"
  | "OIDC";
/**
 * Definition of AWS::WorkSpacesWeb::IdentityProvider Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspacesweb-identityprovider.html}
 */
export class WorkSpacesWebIdentityProvider extends $Resource<
  "AWS::WorkSpacesWeb::IdentityProvider",
  WorkSpacesWebIdentityProviderProperties,
  WorkSpacesWebIdentityProviderAttributes
> {
  public static readonly Type = "AWS::WorkSpacesWeb::IdentityProvider";
  constructor(
    logicalId: string,
    properties: WorkSpacesWebIdentityProviderProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, WorkSpacesWebIdentityProvider.Type, properties, options);
  }
}
