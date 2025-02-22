import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Definition of AWS::WorkSpacesWeb::UserSettings Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspacesweb-usersettings.html}
 */
export type WorkSpacesWebUserSettingsProperties = {
  AdditionalEncryptionContext?: EncryptionContextMap;
  CookieSynchronizationConfiguration?: CookieSynchronizationConfiguration;
  CopyAllowed: EnabledType;
  /**
   * @minLength `20`
   * @maxLength `2048`
   * @pattern `^arn:[\w+=\/,.@-]+:kms:[a-zA-Z0-9\-]*:[a-zA-Z0-9]{1,12}:key\/[a-zA-Z0-9-]+$`
   */
  CustomerManagedKey?: string;
  DeepLinkAllowed?: EnabledType;
  /**
   * @min `1`
   * @max `600`
   */
  DisconnectTimeoutInMinutes?: number;
  DownloadAllowed: EnabledType;
  /**
   * @min `0`
   * @max `60`
   */
  IdleDisconnectTimeoutInMinutes?: number;
  PasteAllowed: EnabledType;
  PrintAllowed: EnabledType;
  /**
   * @minLength `0`
   * @maxLength `200`
   */
  Tags?: Tag[];
  ToolbarConfiguration?: ToolbarConfiguration;
  UploadAllowed: EnabledType;
};
/**
 * Attribute type definition for `AWS::WorkSpacesWeb::UserSettings`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspacesweb-usersettings.html#aws-resource-workspacesweb-usersettings-return-values}
 */
export type WorkSpacesWebUserSettingsAttributes = {
  AssociatedPortalArns: string[];
  /**
   * @minLength `20`
   * @maxLength `2048`
   * @pattern `^arn:[\w+=\/,.@-]+:[a-zA-Z0-9\-]+:[a-zA-Z0-9\-]*:[a-zA-Z0-9]{1,12}:[a-zA-Z]+(\/[a-fA-F0-9\-]{36})+$`
   */
  UserSettingsArn: string;
};
/**
 * Type definition for `AWS::WorkSpacesWeb::UserSettings.CookieSpecification`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-workspacesweb-usersettings-cookiespecification.html}
 */
export type CookieSpecification = {
  /**
   * @minLength `0`
   * @maxLength `253`
   * @pattern `^(\.?)(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)*[a-z0-9][a-z0-9-]{0,61}[a-z0-9]$`
   */
  Domain: string;
  /**
   * @minLength `0`
   * @maxLength `4096`
   */
  Name?: string;
  /**
   * @minLength `0`
   * @maxLength `2000`
   * @pattern `^/(\S)*$`
   */
  Path?: string;
};
/**
 * Type definition for `AWS::WorkSpacesWeb::UserSettings.CookieSynchronizationConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-workspacesweb-usersettings-cookiesynchronizationconfiguration.html}
 */
export type CookieSynchronizationConfiguration = {
  /**
   * @minLength `0`
   * @maxLength `10`
   */
  Allowlist: CookieSpecification[];
  /**
   * @minLength `0`
   * @maxLength `10`
   */
  Blocklist?: CookieSpecification[];
};
/**
 * Type definition for `AWS::WorkSpacesWeb::UserSettings.EnabledType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-workspacesweb-usersettings-enabledtype.html}
 */
export type EnabledType = "Disabled" | "Enabled";
/**
 * Type definition for `AWS::WorkSpacesWeb::UserSettings.EncryptionContextMap`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-workspacesweb-usersettings-encryptioncontextmap.html}
 */
export type EncryptionContextMap = Record<string, string>;
/**
 * Type definition for `AWS::WorkSpacesWeb::UserSettings.MaxDisplayResolution`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-workspacesweb-usersettings-maxdisplayresolution.html}
 */
export type MaxDisplayResolution =
  | "size4096X2160"
  | "size3840X2160"
  | "size3440X1440"
  | "size2560X1440"
  | "size1920X1080"
  | "size1280X720"
  | "size1024X768"
  | "size800X600";
/**
 * Type definition for `AWS::WorkSpacesWeb::UserSettings.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-workspacesweb-usersettings-tag.html}
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
 * Type definition for `AWS::WorkSpacesWeb::UserSettings.ToolbarConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-workspacesweb-usersettings-toolbarconfiguration.html}
 */
export type ToolbarConfiguration = {
  HiddenToolbarItems?: ToolbarItem[];
  MaxDisplayResolution?: MaxDisplayResolution;
  ToolbarType?: ToolbarType;
  VisualMode?: VisualMode;
};
/**
 * Type definition for `AWS::WorkSpacesWeb::UserSettings.ToolbarItem`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-workspacesweb-usersettings-toolbaritem.html}
 */
export type ToolbarItem =
  | "Windows"
  | "DualMonitor"
  | "FullScreen"
  | "Webcam"
  | "Microphone";
/**
 * Type definition for `AWS::WorkSpacesWeb::UserSettings.ToolbarType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-workspacesweb-usersettings-toolbartype.html}
 */
export type ToolbarType = "Floating" | "Docked";
/**
 * Type definition for `AWS::WorkSpacesWeb::UserSettings.VisualMode`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-workspacesweb-usersettings-visualmode.html}
 */
export type VisualMode = "Dark" | "Light";
/**
 * Definition of AWS::WorkSpacesWeb::UserSettings Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspacesweb-usersettings.html}
 */
export class WorkSpacesWebUserSettings extends $Resource<
  "AWS::WorkSpacesWeb::UserSettings",
  WorkSpacesWebUserSettingsProperties,
  WorkSpacesWebUserSettingsAttributes
> {
  public static readonly Type = "AWS::WorkSpacesWeb::UserSettings";
  constructor(
    logicalId: string,
    properties: WorkSpacesWebUserSettingsProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, WorkSpacesWebUserSettings.Type, properties, options);
  }
}
