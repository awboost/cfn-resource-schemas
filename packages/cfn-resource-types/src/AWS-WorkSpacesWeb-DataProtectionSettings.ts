import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Definition of AWS::WorkSpacesWeb::DataProtectionSettings Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspacesweb-dataprotectionsettings.html}
 */
export type WorkSpacesWebDataProtectionSettingsProperties = {
  AdditionalEncryptionContext?: EncryptionContextMap;
  /**
   * @minLength `20`
   * @maxLength `2048`
   * @pattern `^arn:[\w+=\/,.@-]+:kms:[a-zA-Z0-9\-]*:[a-zA-Z0-9]{1,12}:key\/[a-zA-Z0-9-]+$`
   */
  CustomerManagedKey?: string;
  /**
   * @minLength `1`
   * @maxLength `256`
   * @pattern `^[ _\-\d\w]+$`
   */
  Description?: string;
  /**
   * @minLength `1`
   * @maxLength `64`
   * @pattern `^[ _\-\d\w]+$`
   */
  DisplayName?: string;
  InlineRedactionConfiguration?: InlineRedactionConfiguration;
  /**
   * @minLength `0`
   * @maxLength `200`
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::WorkSpacesWeb::DataProtectionSettings`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspacesweb-dataprotectionsettings.html#aws-resource-workspacesweb-dataprotectionsettings-return-values}
 */
export type WorkSpacesWebDataProtectionSettingsAttributes = {
  AssociatedPortalArns: string[];
  CreationDate: string;
  /**
   * @minLength `20`
   * @maxLength `2048`
   * @pattern `^arn:[\w+=\/,.@-]+:[a-zA-Z0-9\-]+:[a-zA-Z0-9\-]*:[a-zA-Z0-9]{1,12}:[a-zA-Z]+(\/[a-fA-F0-9\-]{36})+$`
   */
  DataProtectionSettingsArn: string;
};
/**
 * Type definition for `AWS::WorkSpacesWeb::DataProtectionSettings.CustomPattern`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-workspacesweb-dataprotectionsettings-custompattern.html}
 */
export type CustomPattern = {
  /**
   * @minLength `0`
   * @maxLength `300`
   * @pattern `^\/((?:[^\n])+)\/([gimsuyvd]{0,8})$`
   */
  KeywordRegex?: string;
  /**
   * @minLength `1`
   * @maxLength `256`
   * @pattern `^[ _\-\d\w]+$`
   */
  PatternDescription?: string;
  /**
   * @minLength `1`
   * @maxLength `20`
   * @pattern `^[_\-\d\w]+$`
   */
  PatternName: string;
  /**
   * @minLength `0`
   * @maxLength `300`
   * @pattern `^\/((?:[^\n])+)\/([gimsuyvd]{0,8})$`
   */
  PatternRegex: string;
};
/**
 * Type definition for `AWS::WorkSpacesWeb::DataProtectionSettings.EncryptionContextMap`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-workspacesweb-dataprotectionsettings-encryptioncontextmap.html}
 */
export type EncryptionContextMap = Record<string, string>;
/**
 * Type definition for `AWS::WorkSpacesWeb::DataProtectionSettings.InlineRedactionConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-workspacesweb-dataprotectionsettings-inlineredactionconfiguration.html}
 */
export type InlineRedactionConfiguration = {
  /**
   * @min `1`
   * @max `3`
   */
  GlobalConfidenceLevel?: number;
  /**
   * @minLength `1`
   * @maxLength `100`
   */
  GlobalEnforcedUrls?: string[];
  /**
   * @minLength `1`
   * @maxLength `100`
   */
  GlobalExemptUrls?: string[];
  /**
   * @minLength `0`
   * @maxLength `150`
   */
  InlineRedactionPatterns: InlineRedactionPattern[];
};
/**
 * Type definition for `AWS::WorkSpacesWeb::DataProtectionSettings.InlineRedactionPattern`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-workspacesweb-dataprotectionsettings-inlineredactionpattern.html}
 */
export type InlineRedactionPattern = {
  /**
   * @minLength `1`
   * @maxLength `50`
   * @pattern `^[_\-\d\w]+$`
   */
  BuiltInPatternId?: string;
  /**
   * @min `1`
   * @max `3`
   */
  ConfidenceLevel?: number;
  CustomPattern?: CustomPattern;
  /**
   * @minLength `1`
   * @maxLength `20`
   */
  EnforcedUrls?: string[];
  /**
   * @minLength `1`
   * @maxLength `20`
   */
  ExemptUrls?: string[];
  RedactionPlaceHolder: RedactionPlaceHolder;
};
/**
 * Type definition for `AWS::WorkSpacesWeb::DataProtectionSettings.RedactionPlaceHolder`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-workspacesweb-dataprotectionsettings-redactionplaceholder.html}
 */
export type RedactionPlaceHolder = {
  /**
   * @minLength `1`
   * @maxLength `20`
   * @pattern `^[*_\-\d\w]+$`
   */
  RedactionPlaceHolderText?: string;
  RedactionPlaceHolderType: RedactionPlaceHolderType;
};
/**
 * Type definition for `AWS::WorkSpacesWeb::DataProtectionSettings.RedactionPlaceHolderType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-workspacesweb-dataprotectionsettings-redactionplaceholdertype.html}
 */
export type RedactionPlaceHolderType = "CustomText";
/**
 * Type definition for `AWS::WorkSpacesWeb::DataProtectionSettings.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-workspacesweb-dataprotectionsettings-tag.html}
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
 * Definition of AWS::WorkSpacesWeb::DataProtectionSettings Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspacesweb-dataprotectionsettings.html}
 */
export class WorkSpacesWebDataProtectionSettings extends $Resource<
  "AWS::WorkSpacesWeb::DataProtectionSettings",
  WorkSpacesWebDataProtectionSettingsProperties,
  WorkSpacesWebDataProtectionSettingsAttributes
> {
  public static readonly Type = "AWS::WorkSpacesWeb::DataProtectionSettings";
  constructor(
    logicalId: string,
    properties: WorkSpacesWebDataProtectionSettingsProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      WorkSpacesWebDataProtectionSettings.Type,
      properties,
      options,
    );
  }
}
