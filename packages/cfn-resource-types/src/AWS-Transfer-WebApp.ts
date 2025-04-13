import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::Transfer::WebApp
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-webapp.html}
 */
export type TransferWebAppProperties = {
  /**
   * The AccessEndpoint is the URL that you provide to your users for them to interact with the Transfer Family web app. You can specify a custom URL or use the default value.
   * @minLength `1`
   * @maxLength `1024`
   */
  AccessEndpoint?: string;
  /**
   * You can provide a structure that contains the details for the identity provider to use with your web app.
   */
  IdentityProviderDetails: IdentityProviderDetails;
  /**
   * Key-value pairs that can be used to group and search for web apps.
   * @maxLength `50`
   */
  Tags?: Tag[];
  WebAppCustomization?: WebAppCustomization;
  WebAppEndpointPolicy?: WebAppEndpointPolicy;
  /**
   * A union that contains the value for number of concurrent connections or the user sessions on your web app.
   */
  WebAppUnits?: WebAppUnits;
};
/**
 * Attribute type definition for `AWS::Transfer::WebApp`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-webapp.html#aws-resource-transfer-webapp-return-values}
 */
export type TransferWebAppAttributes = {
  /**
   * Specifies the unique Amazon Resource Name (ARN) for the web app.
   * @minLength `20`
   * @maxLength `1600`
   * @pattern `arn:.*`
   */
  Arn: string;
  /**
   * You can provide a structure that contains the details for the identity provider to use with your web app.
   */
  IdentityProviderDetails: {
    /**
     * @minLength `10`
     * @maxLength `1224`
     * @pattern `^arn:[\w-]+:sso::\d{12}:application/(sso)?ins-[a-zA-Z0-9-.]{16}/apl-[a-zA-Z0-9]{16}$`
     */
    ApplicationArn: string;
  };
  /**
   * A unique identifier for the web app.
   * @minLength `24`
   * @maxLength `24`
   * @pattern `^webapp-([0-9a-f]{17})$`
   */
  WebAppId: string;
};
/**
 * Type definition for `AWS::Transfer::WebApp.IdentityProviderDetails`.
 * You can provide a structure that contains the details for the identity provider to use with your web app.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-transfer-webapp-identityproviderdetails.html}
 */
export type IdentityProviderDetails = {
  /**
   * The Amazon Resource Name (ARN) for the IAM Identity Center used for the web app.
   * @minLength `10`
   * @maxLength `1224`
   * @pattern `^arn:[\w-]+:sso:::instance/(sso)?ins-[a-zA-Z0-9-.]{16}$`
   */
  InstanceArn?: string;
  /**
   * The IAM role in IAM Identity Center used for the web app.
   * @minLength `20`
   * @maxLength `2048`
   * @pattern `^arn:[a-z-]+:iam::[0-9]{12}:role[:/]\S+$`
   */
  Role?: string;
};
/**
 * Type definition for `AWS::Transfer::WebApp.Tag`.
 * Key-value pair that can be used to group and search for web apps.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-transfer-webapp-tag.html}
 */
export type Tag = {
  /**
   * @minLength `0`
   * @maxLength `128`
   */
  Key: string;
  /**
   * @minLength `0`
   * @maxLength `256`
   */
  Value: string;
};
/**
 * Type definition for `AWS::Transfer::WebApp.WebAppCustomization`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-transfer-webapp-webappcustomization.html}
 */
export type WebAppCustomization = {
  /**
   * Specifies a favicon to display in the browser tab.
   * @minLength `1`
   * @maxLength `20960`
   */
  FaviconFile?: string;
  /**
   * Specifies a logo to display on the web app.
   * @minLength `1`
   * @maxLength `51200`
   */
  LogoFile?: string;
  /**
   * Specifies a title to display on the web app.
   * @minLength `0`
   * @maxLength `100`
   */
  Title?: string;
};
/**
 * Type definition for `AWS::Transfer::WebApp.WebAppEndpointPolicy`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-transfer-webapp-webappendpointpolicy.html}
 */
export type WebAppEndpointPolicy = "STANDARD" | "FIPS";
/**
 * Type definition for `AWS::Transfer::WebApp.WebAppUnits`.
 * A union that contains the value for number of concurrent connections or the user sessions on your web app.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-transfer-webapp-webappunits.html}
 */
export type WebAppUnits = {
  /**
   * @min `1`
   */
  Provisioned: number;
};
/**
 * Resource Type definition for AWS::Transfer::WebApp
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-webapp.html}
 */
export class TransferWebApp extends $Resource<
  "AWS::Transfer::WebApp",
  TransferWebAppProperties,
  TransferWebAppAttributes
> {
  public static readonly Type = "AWS::Transfer::WebApp";
  constructor(
    logicalId: string,
    properties: TransferWebAppProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, TransferWebApp.Type, properties, options);
  }
}
