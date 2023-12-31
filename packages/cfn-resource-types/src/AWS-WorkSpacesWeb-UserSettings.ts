import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
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
  /**
   * @min `1`
   * @max `600`
   */
  DisconnectTimeoutInMinutes?: number;
  DownloadAllowed: EnabledType;
  /**
   * @max `60`
   */
  IdleDisconnectTimeoutInMinutes?: number;
  PasteAllowed: EnabledType;
  PrintAllowed: EnabledType;
  /**
   * @maxLength `200`
   */
  Tags?: Tag[];
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
   * @maxLength `253`
   * @pattern `^(\.?)(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)*[a-z0-9][a-z0-9-]{0,61}[a-z0-9]$`
   */
  Domain: string;
  /**
   * @maxLength `4096`
   */
  Name?: string;
  /**
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
   * @maxLength `10`
   */
  Allowlist: CookieSpecification[];
  /**
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
   * @maxLength `256`
   * @pattern `^([\p{L}\p{Z}\p{N}_.:/=+\-@]*)$`
   */
  Value: string;
};
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
  public static readonly AttributeNames = [
    "AssociatedPortalArns" as const,
    "UserSettingsArn" as const,
  ];
  constructor(
    logicalId: string,
    properties: WorkSpacesWebUserSettingsProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      WorkSpacesWebUserSettings.Type,
      properties,
      WorkSpacesWebUserSettings.AttributeNames,
      options,
    );
  }
}
