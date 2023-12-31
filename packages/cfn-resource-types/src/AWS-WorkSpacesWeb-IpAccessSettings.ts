import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Definition of AWS::WorkSpacesWeb::IpAccessSettings Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspacesweb-ipaccesssettings.html}
 */
export type WorkSpacesWebIpAccessSettingsProperties = {
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
   * @pattern `^.+$`
   */
  Description?: string;
  /**
   * @minLength `1`
   * @maxLength `64`
   * @pattern `^.+$`
   */
  DisplayName?: string;
  /**
   * @minLength `1`
   * @maxLength `100`
   */
  IpRules: IpRule[];
  /**
   * @maxLength `200`
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::WorkSpacesWeb::IpAccessSettings`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspacesweb-ipaccesssettings.html#aws-resource-workspacesweb-ipaccesssettings-return-values}
 */
export type WorkSpacesWebIpAccessSettingsAttributes = {
  AssociatedPortalArns: string[];
  CreationDate: string;
  /**
   * @minLength `20`
   * @maxLength `2048`
   * @pattern `^arn:[\w+=\/,.@-]+:[a-zA-Z0-9\-]+:[a-zA-Z0-9\-]*:[a-zA-Z0-9]{1,12}:[a-zA-Z]+(\/[a-fA-F0-9\-]{36})+$`
   */
  IpAccessSettingsArn: string;
};
/**
 * Type definition for `AWS::WorkSpacesWeb::IpAccessSettings.EncryptionContextMap`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-workspacesweb-ipaccesssettings-encryptioncontextmap.html}
 */
export type EncryptionContextMap = Record<string, string>;
/**
 * Type definition for `AWS::WorkSpacesWeb::IpAccessSettings.IpRule`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-workspacesweb-ipaccesssettings-iprule.html}
 */
export type IpRule = {
  /**
   * @minLength `1`
   * @maxLength `256`
   * @pattern `^.+$`
   */
  Description?: string;
  /**
   * A single IP address or an IP address range in CIDR notation
   * @pattern `^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}(?:/([0-9]|[12][0-9]|3[0-2])|)$`
   */
  IpRange: string;
};
/**
 * Type definition for `AWS::WorkSpacesWeb::IpAccessSettings.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-workspacesweb-ipaccesssettings-tag.html}
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
 * Definition of AWS::WorkSpacesWeb::IpAccessSettings Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspacesweb-ipaccesssettings.html}
 */
export class WorkSpacesWebIpAccessSettings extends $Resource<
  "AWS::WorkSpacesWeb::IpAccessSettings",
  WorkSpacesWebIpAccessSettingsProperties,
  WorkSpacesWebIpAccessSettingsAttributes
> {
  public static readonly Type = "AWS::WorkSpacesWeb::IpAccessSettings";
  public static readonly AttributeNames = [
    "AssociatedPortalArns" as const,
    "CreationDate" as const,
    "IpAccessSettingsArn" as const,
  ];
  constructor(
    logicalId: string,
    properties: WorkSpacesWebIpAccessSettingsProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      WorkSpacesWebIpAccessSettings.Type,
      properties,
      WorkSpacesWebIpAccessSettings.AttributeNames,
      options,
    );
  }
}
