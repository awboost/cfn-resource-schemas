import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
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
   * @pattern `\{[\S\s]*\}\s*`
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
