import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Definition of AWS::WorkSpacesWeb::Portal Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspacesweb-portal.html}
 */
export type WorkSpacesWebPortalProperties = {
  AdditionalEncryptionContext?: EncryptionContextMap;
  AuthenticationType?: AuthenticationType;
  /**
   * @minLength `20`
   * @maxLength `2048`
   * @pattern `^arn:[\w+=\/,.@-]+:[a-zA-Z0-9\-]+:[a-zA-Z0-9\-]*:[a-zA-Z0-9]{1,12}:[a-zA-Z]+(\/[a-fA-F0-9\-]{36})+$`
   */
  BrowserSettingsArn?: string;
  /**
   * @minLength `20`
   * @maxLength `2048`
   * @pattern `^arn:[\w+=\/,.@-]+:kms:[a-zA-Z0-9\-]*:[a-zA-Z0-9]{1,12}:key\/[a-zA-Z0-9-]+$`
   */
  CustomerManagedKey?: string;
  /**
   * @minLength `1`
   * @maxLength `64`
   * @pattern `^.+$`
   */
  DisplayName?: string;
  /**
   * @minLength `20`
   * @maxLength `2048`
   * @pattern `^arn:[\w+=\/,.@-]+:[a-zA-Z0-9\-]+:[a-zA-Z0-9\-]*:[a-zA-Z0-9]{1,12}:[a-zA-Z]+(\/[a-fA-F0-9\-]{36})+$`
   */
  IpAccessSettingsArn?: string;
  /**
   * @minLength `20`
   * @maxLength `2048`
   * @pattern `^arn:[\w+=\/,.@-]+:[a-zA-Z0-9\-]+:[a-zA-Z0-9\-]*:[a-zA-Z0-9]{1,12}:[a-zA-Z]+(\/[a-fA-F0-9\-]{36})+$`
   */
  NetworkSettingsArn?: string;
  /**
   * @maxLength `200`
   */
  Tags?: Tag[];
  /**
   * @minLength `20`
   * @maxLength `2048`
   * @pattern `^arn:[\w+=\/,.@-]+:[a-zA-Z0-9\-]+:[a-zA-Z0-9\-]*:[a-zA-Z0-9]{1,12}:[a-zA-Z]+(\/[a-fA-F0-9\-]{36})+$`
   */
  TrustStoreArn?: string;
  /**
   * @minLength `20`
   * @maxLength `2048`
   * @pattern `^arn:[\w+=\/,.@-]+:[a-zA-Z0-9\-]+:[a-zA-Z0-9\-]*:[a-zA-Z0-9]{1,12}:[a-zA-Z]+(\/[a-fA-F0-9\-]{36})+$`
   */
  UserAccessLoggingSettingsArn?: string;
  /**
   * @minLength `20`
   * @maxLength `2048`
   * @pattern `^arn:[\w+=\/,.@-]+:[a-zA-Z0-9\-]+:[a-zA-Z0-9\-]*:[a-zA-Z0-9]{1,12}:[a-zA-Z]+(\/[a-fA-F0-9\-]{36})+$`
   */
  UserSettingsArn?: string;
};
/**
 * Attribute type definition for `AWS::WorkSpacesWeb::Portal`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspacesweb-portal.html#aws-resource-workspacesweb-portal-return-values}
 */
export type WorkSpacesWebPortalAttributes = {
  BrowserType: BrowserType;
  CreationDate: string;
  /**
   * @minLength `20`
   * @maxLength `2048`
   * @pattern `^arn:[\w+=\/,.@-]+:[a-zA-Z0-9\-]+:[a-zA-Z0-9\-]*:[a-zA-Z0-9]{1,12}:[a-zA-Z]+(\/[a-fA-F0-9\-]{36})+$`
   */
  PortalArn: string;
  /**
   * @minLength `1`
   * @maxLength `253`
   * @pattern `^[a-zA-Z0-9]?((?!-)([A-Za-z0-9-]*[A-Za-z0-9])\.)+[a-zA-Z0-9]+$`
   */
  PortalEndpoint: string;
  PortalStatus: PortalStatus;
  RendererType: RendererType;
  /**
   * @maxLength `204800`
   * @pattern `^.*$`
   */
  ServiceProviderSamlMetadata: string;
  /**
   * @minLength `1`
   * @maxLength `1024`
   * @pattern `.*`
   */
  StatusReason: string;
};
/**
 * Type definition for `AWS::WorkSpacesWeb::Portal.AuthenticationType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-workspacesweb-portal-authenticationtype.html}
 */
export type AuthenticationType = "Standard" | "IAM_Identity_Center";
/**
 * Type definition for `AWS::WorkSpacesWeb::Portal.BrowserType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-workspacesweb-portal-browsertype.html}
 */
export type BrowserType = "Chrome";
/**
 * Type definition for `AWS::WorkSpacesWeb::Portal.EncryptionContextMap`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-workspacesweb-portal-encryptioncontextmap.html}
 */
export type EncryptionContextMap = Record<string, string>;
/**
 * Type definition for `AWS::WorkSpacesWeb::Portal.PortalStatus`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-workspacesweb-portal-portalstatus.html}
 */
export type PortalStatus = "Incomplete" | "Pending" | "Active";
/**
 * Type definition for `AWS::WorkSpacesWeb::Portal.RendererType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-workspacesweb-portal-renderertype.html}
 */
export type RendererType = "AppStream";
/**
 * Type definition for `AWS::WorkSpacesWeb::Portal.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-workspacesweb-portal-tag.html}
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
 * Definition of AWS::WorkSpacesWeb::Portal Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspacesweb-portal.html}
 */
export class WorkSpacesWebPortal extends $Resource<
  "AWS::WorkSpacesWeb::Portal",
  WorkSpacesWebPortalProperties,
  WorkSpacesWebPortalAttributes
> {
  public static readonly Type = "AWS::WorkSpacesWeb::Portal";
  public static readonly AttributeNames = [
    "BrowserType" as const,
    "CreationDate" as const,
    "PortalArn" as const,
    "PortalEndpoint" as const,
    "PortalStatus" as const,
    "RendererType" as const,
    "ServiceProviderSamlMetadata" as const,
    "StatusReason" as const,
  ];
  constructor(
    logicalId: string,
    properties: WorkSpacesWebPortalProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      WorkSpacesWebPortal.Type,
      properties,
      WorkSpacesWebPortal.AttributeNames,
      options,
    );
  }
}
