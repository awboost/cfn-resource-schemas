import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Definition of AWS::WorkSpacesWeb::BrowserSettings Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspacesweb-browsersettings.html}
 */
export type WorkSpacesWebBrowserSettingsProperties = {
  AdditionalEncryptionContext?: EncryptionContextMap;
  /**
   * @minLength `2`
   * @maxLength `131072`
   * @pattern `^\{[\S\s]*\}\s*$`
   */
  BrowserPolicy?: string;
  /**
   * @minLength `20`
   * @maxLength `2048`
   * @pattern `^arn:[\w+=\/,.@-]+:kms:[a-zA-Z0-9\-]*:[a-zA-Z0-9]{1,12}:key\/[a-zA-Z0-9-]+$`
   */
  CustomerManagedKey?: string;
  /**
   * @minLength `0`
   * @maxLength `200`
   */
  Tags?: Tag[];
  WebContentFilteringPolicy?: WebContentFilteringPolicy;
};
/**
 * Attribute type definition for `AWS::WorkSpacesWeb::BrowserSettings`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspacesweb-browsersettings.html#aws-resource-workspacesweb-browsersettings-return-values}
 */
export type WorkSpacesWebBrowserSettingsAttributes = {
  AssociatedPortalArns: string[];
  /**
   * @minLength `20`
   * @maxLength `2048`
   * @pattern `^arn:[\w+=\/,.@-]+:[a-zA-Z0-9\-]+:[a-zA-Z0-9\-]*:[a-zA-Z0-9]{1,12}:[a-zA-Z]+(\/[a-fA-F0-9\-]{36})+$`
   */
  BrowserSettingsArn: string;
};
/**
 * Type definition for `AWS::WorkSpacesWeb::BrowserSettings.Category`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-workspacesweb-browsersettings-category.html}
 */
export type Category =
  | "Cults"
  | "Gambling"
  | "Nudity"
  | "Pornography"
  | "SexEducation"
  | "Tasteless"
  | "Violence"
  | "DownloadSites"
  | "ImageSharing"
  | "PeerToPeer"
  | "StreamingMediaAndDownloads"
  | "GenerativeAI"
  | "CriminalActivity"
  | "Hacking"
  | "HateAndIntolerance"
  | "IllegalDrug"
  | "IllegalSoftware"
  | "SchoolCheating"
  | "SelfHarm"
  | "Weapons"
  | "Chat"
  | "Games"
  | "InstantMessaging"
  | "ProfessionalNetwork"
  | "SocialNetworking"
  | "WebBasedEmail"
  | "ParkedDomains";
/**
 * Type definition for `AWS::WorkSpacesWeb::BrowserSettings.EncryptionContextMap`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-workspacesweb-browsersettings-encryptioncontextmap.html}
 */
export type EncryptionContextMap = Record<string, string>;
/**
 * Type definition for `AWS::WorkSpacesWeb::BrowserSettings.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-workspacesweb-browsersettings-tag.html}
 */
export type Tag = {
  /**
   * @minLength `1`
   * @maxLength `128`
   * @pattern `^([\p{L}\p{Z}\p{N}_.:/=+\-@]*)$`
   */
  Key: string;
  /**
   * @minLength `0`
   * @maxLength `256`
   * @pattern `^([\p{L}\p{Z}\p{N}_.:/=+\-@]*)$`
   */
  Value: string;
};
/**
 * Type definition for `AWS::WorkSpacesWeb::BrowserSettings.WebContentFilteringPolicy`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-workspacesweb-browsersettings-webcontentfilteringpolicy.html}
 */
export type WebContentFilteringPolicy = {
  /**
   * @minLength `1`
   * @maxLength `1000`
   */
  AllowedUrls?: string[];
  /**
   * @minLength `1`
   * @maxLength `100`
   */
  BlockedCategories?: Category[];
  /**
   * @minLength `1`
   * @maxLength `1000`
   */
  BlockedUrls?: string[];
};
/**
 * Definition of AWS::WorkSpacesWeb::BrowserSettings Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspacesweb-browsersettings.html}
 */
export class WorkSpacesWebBrowserSettings extends $Resource<
  "AWS::WorkSpacesWeb::BrowserSettings",
  WorkSpacesWebBrowserSettingsProperties,
  WorkSpacesWebBrowserSettingsAttributes
> {
  public static readonly Type = "AWS::WorkSpacesWeb::BrowserSettings";
  constructor(
    logicalId: string,
    properties: WorkSpacesWebBrowserSettingsProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, WorkSpacesWebBrowserSettings.Type, properties, options);
  }
}
