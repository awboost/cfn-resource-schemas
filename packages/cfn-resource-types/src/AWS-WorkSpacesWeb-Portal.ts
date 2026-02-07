import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
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
   * @minLength `20`
   * @maxLength `2048`
   * @pattern `^arn:[\w+=\/,.@-]+:[a-zA-Z0-9\-]+:[a-zA-Z0-9\-]*:[a-zA-Z0-9]{1,12}:[a-zA-Z]+(\/[a-fA-F0-9\-]{36})+$`
   */
  DataProtectionSettingsArn?: string;
  /**
   * @minLength `1`
   * @maxLength `64`
   * @pattern `^.+$`
   */
  DisplayName?: string;
  InstanceType?: InstanceType;
  /**
   * @minLength `20`
   * @maxLength `2048`
   * @pattern `^arn:[\w+=\/,.@-]+:[a-zA-Z0-9\-]+:[a-zA-Z0-9\-]*:[a-zA-Z0-9]{1,12}:[a-zA-Z]+(\/[a-fA-F0-9\-]{36})+$`
   */
  IpAccessSettingsArn?: string;
  /**
   * @min `1`
   * @max `5000`
   */
  MaxConcurrentSessions?: number;
  /**
   * @minLength `20`
   * @maxLength `2048`
   * @pattern `^arn:[\w+=\/,.@-]+:[a-zA-Z0-9\-]+:[a-zA-Z0-9\-]*:[a-zA-Z0-9]{1,12}:[a-zA-Z]+(\/[a-fA-F0-9\-]{36})+$`
   */
  NetworkSettingsArn?: string;
  /**
   * @minLength `0`
   * @maxLength `128`
   * @pattern `^[a-zA-Z0-9]?((?!-)([A-Za-z0-9-]*[A-Za-z0-9])\.)+[a-zA-Z0-9]+$`
   */
  PortalCustomDomain?: string;
  /**
   * @minLength `20`
   * @maxLength `2048`
   * @pattern `^arn:[\w+=\/,.@-]+:[a-zA-Z0-9\-]+:[a-zA-Z0-9\-]*:[a-zA-Z0-9]{1,12}:[a-zA-Z]+(\/[a-fA-F0-9\-]{36})+$`
   */
  SessionLoggerArn?: string;
  /**
   * @minLength `0`
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
   * @minLength `0`
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
 * Type definition for `AWS::WorkSpacesWeb::Portal.InstanceType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-workspacesweb-portal-instancetype.html}
 */
export type InstanceType =
  | "standard.regular"
  | "standard.large"
  | "standard.xlarge";
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
   * @minLength `0`
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
  constructor(
    logicalId: string,
    properties: WorkSpacesWebPortalProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, WorkSpacesWebPortal.Type, properties, options);
  }
}
