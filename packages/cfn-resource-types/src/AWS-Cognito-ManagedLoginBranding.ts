import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::Cognito::ManagedLoginBranding
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-managedloginbranding.html}
 */
export type CognitoManagedLoginBrandingProperties = {
  Assets?: AssetType[];
  ClientId?: string;
  ReturnMergedResources?: boolean;
  Settings?: Record<string, any>;
  UseCognitoProvidedValues?: boolean;
  UserPoolId: string;
};
/**
 * Attribute type definition for `AWS::Cognito::ManagedLoginBranding`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-managedloginbranding.html#aws-resource-cognito-managedloginbranding-return-values}
 */
export type CognitoManagedLoginBrandingAttributes = {
  /**
   * @pattern `^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[4][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}$`
   */
  ManagedLoginBrandingId: string;
};
/**
 * Type definition for `AWS::Cognito::ManagedLoginBranding.AssetType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-managedloginbranding-assettype.html}
 */
export type AssetType = {
  /**
   * @maxLength `1000000`
   */
  Bytes?: string;
  Category: CategoryType;
  ColorMode: ColorModeType;
  Extension: ExtensionType;
  /**
   * @minLength `1`
   * @maxLength `40`
   * @pattern `^[\w\- ]+$`
   */
  ResourceId?: string;
};
/**
 * Type definition for `AWS::Cognito::ManagedLoginBranding.CategoryType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-managedloginbranding-categorytype.html}
 */
export type CategoryType =
  | "FAVICON_ICO"
  | "FAVICON_SVG"
  | "EMAIL_GRAPHIC"
  | "SMS_GRAPHIC"
  | "AUTH_APP_GRAPHIC"
  | "PASSWORD_GRAPHIC"
  | "PASSKEY_GRAPHIC"
  | "PAGE_HEADER_LOGO"
  | "PAGE_HEADER_BACKGROUND"
  | "PAGE_FOOTER_LOGO"
  | "PAGE_FOOTER_BACKGROUND"
  | "PAGE_BACKGROUND"
  | "FORM_BACKGROUND"
  | "FORM_LOGO"
  | "IDP_BUTTON_ICON";
/**
 * Type definition for `AWS::Cognito::ManagedLoginBranding.ColorModeType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-managedloginbranding-colormodetype.html}
 */
export type ColorModeType = "LIGHT" | "DARK" | "DYNAMIC";
/**
 * Type definition for `AWS::Cognito::ManagedLoginBranding.ExtensionType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-managedloginbranding-extensiontype.html}
 */
export type ExtensionType = "ICO" | "JPEG" | "PNG" | "SVG" | "WEBP";
/**
 * Resource Type definition for AWS::Cognito::ManagedLoginBranding
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-managedloginbranding.html}
 */
export class CognitoManagedLoginBranding extends $Resource<
  "AWS::Cognito::ManagedLoginBranding",
  CognitoManagedLoginBrandingProperties,
  CognitoManagedLoginBrandingAttributes
> {
  public static readonly Type = "AWS::Cognito::ManagedLoginBranding";
  constructor(
    logicalId: string,
    properties: CognitoManagedLoginBrandingProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, CognitoManagedLoginBranding.Type, properties, options);
  }
}
