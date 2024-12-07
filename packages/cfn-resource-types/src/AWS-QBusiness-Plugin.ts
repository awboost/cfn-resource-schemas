import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Definition of AWS::QBusiness::Plugin Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qbusiness-plugin.html}
 */
export type QBusinessPluginProperties = {
  /**
   * @minLength `36`
   * @maxLength `36`
   * @pattern `^[a-zA-Z0-9][a-zA-Z0-9-]{35}$`
   */
  ApplicationId?: string;
  AuthConfiguration: PluginAuthConfiguration;
  CustomPluginConfiguration?: CustomPluginConfiguration;
  /**
   * @minLength `1`
   * @maxLength `100`
   * @pattern `^[a-zA-Z0-9][a-zA-Z0-9_-]*$`
   */
  DisplayName: string;
  /**
   * @minLength `1`
   * @maxLength `2048`
   * @pattern `^(https?|ftp|file)://([^\s]*)$`
   */
  ServerUrl?: string;
  State?: PluginState;
  /**
   * @minLength `0`
   * @maxLength `200`
   */
  Tags?: Tag[];
  Type: PluginType;
};
/**
 * Attribute type definition for `AWS::QBusiness::Plugin`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qbusiness-plugin.html#aws-resource-qbusiness-plugin-return-values}
 */
export type QBusinessPluginAttributes = {
  BuildStatus: PluginBuildStatus;
  CreatedAt: string;
  /**
   * @minLength `0`
   * @maxLength `1284`
   * @pattern `^arn:[a-z0-9-\.]{1,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[^/].{0,1023}$`
   */
  PluginArn: string;
  /**
   * @minLength `36`
   * @maxLength `36`
   * @pattern `^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$`
   */
  PluginId: string;
  UpdatedAt: string;
};
/**
 * Type definition for `AWS::QBusiness::Plugin.APISchema`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-qbusiness-plugin-apischema.html}
 */
export type APISchema =
  | {
      Payload: string;
    }
  | {
      S3: S3;
    };
/**
 * Type definition for `AWS::QBusiness::Plugin.APISchemaType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-qbusiness-plugin-apischematype.html}
 */
export type APISchemaType = "OPEN_API_V3";
/**
 * Type definition for `AWS::QBusiness::Plugin.BasicAuthConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-qbusiness-plugin-basicauthconfiguration.html}
 */
export type BasicAuthConfiguration = {
  /**
   * @minLength `0`
   * @maxLength `1284`
   * @pattern `^arn:[a-z0-9-\.]{1,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[^/].{0,1023}$`
   */
  RoleArn: string;
  /**
   * @minLength `0`
   * @maxLength `1284`
   * @pattern `^arn:[a-z0-9-\.]{1,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[^/].{0,1023}$`
   */
  SecretArn: string;
};
/**
 * Type definition for `AWS::QBusiness::Plugin.CustomPluginConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-qbusiness-plugin-custompluginconfiguration.html}
 */
export type CustomPluginConfiguration = {
  ApiSchema: APISchema;
  ApiSchemaType: APISchemaType;
  /**
   * @minLength `1`
   * @maxLength `200`
   */
  Description: string;
};
/**
 * Type definition for `AWS::QBusiness::Plugin.NoAuthConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-qbusiness-plugin-noauthconfiguration.html}
 */
export type NoAuthConfiguration = Record<string, any>;
/**
 * Type definition for `AWS::QBusiness::Plugin.OAuth2ClientCredentialConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-qbusiness-plugin-oauth2clientcredentialconfiguration.html}
 */
export type OAuth2ClientCredentialConfiguration = {
  /**
   * @minLength `1`
   * @maxLength `2048`
   * @pattern `^(https?|ftp|file)://([^\s]*)$`
   */
  AuthorizationUrl?: string;
  /**
   * @minLength `0`
   * @maxLength `1284`
   * @pattern `^arn:[a-z0-9-\.]{1,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[^/].{0,1023}$`
   */
  RoleArn: string;
  /**
   * @minLength `0`
   * @maxLength `1284`
   * @pattern `^arn:[a-z0-9-\.]{1,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[^/].{0,1023}$`
   */
  SecretArn: string;
  /**
   * @minLength `1`
   * @maxLength `2048`
   * @pattern `^(https?|ftp|file)://([^\s]*)$`
   */
  TokenUrl?: string;
};
/**
 * Type definition for `AWS::QBusiness::Plugin.PluginAuthConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-qbusiness-plugin-pluginauthconfiguration.html}
 */
export type PluginAuthConfiguration =
  | {
      BasicAuthConfiguration: BasicAuthConfiguration;
    }
  | {
      OAuth2ClientCredentialConfiguration: OAuth2ClientCredentialConfiguration;
    }
  | {
      NoAuthConfiguration: NoAuthConfiguration;
    };
/**
 * Type definition for `AWS::QBusiness::Plugin.PluginBuildStatus`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-qbusiness-plugin-pluginbuildstatus.html}
 */
export type PluginBuildStatus =
  | "READY"
  | "CREATE_IN_PROGRESS"
  | "CREATE_FAILED"
  | "UPDATE_IN_PROGRESS"
  | "UPDATE_FAILED"
  | "DELETE_IN_PROGRESS"
  | "DELETE_FAILED";
/**
 * Type definition for `AWS::QBusiness::Plugin.PluginState`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-qbusiness-plugin-pluginstate.html}
 */
export type PluginState = "ENABLED" | "DISABLED";
/**
 * Type definition for `AWS::QBusiness::Plugin.PluginType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-qbusiness-plugin-plugintype.html}
 */
export type PluginType =
  | "SERVICE_NOW"
  | "SALESFORCE"
  | "JIRA"
  | "ZENDESK"
  | "CUSTOM"
  | "QUICKSIGHT"
  | "SERVICENOW_NOW_PLATFORM"
  | "JIRA_CLOUD"
  | "SALESFORCE_CRM"
  | "ZENDESK_SUITE"
  | "ATLASSIAN_CONFLUENCE"
  | "GOOGLE_CALENDAR"
  | "MICROSOFT_TEAMS"
  | "MICROSOFT_EXCHANGE"
  | "PAGERDUTY_ADVANCE"
  | "SMARTSHEET"
  | "ASANA";
/**
 * Type definition for `AWS::QBusiness::Plugin.S3`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-qbusiness-plugin-s3.html}
 */
export type S3 = {
  /**
   * @minLength `1`
   * @maxLength `63`
   * @pattern `^[a-z0-9][\.\-a-z0-9]{1,61}[a-z0-9]$`
   */
  Bucket: string;
  /**
   * @minLength `1`
   * @maxLength `1024`
   */
  Key: string;
};
/**
 * Type definition for `AWS::QBusiness::Plugin.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-qbusiness-plugin-tag.html}
 */
export type Tag = {
  /**
   * @minLength `1`
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
 * Definition of AWS::QBusiness::Plugin Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qbusiness-plugin.html}
 */
export class QBusinessPlugin extends $Resource<
  "AWS::QBusiness::Plugin",
  QBusinessPluginProperties,
  QBusinessPluginAttributes
> {
  public static readonly Type = "AWS::QBusiness::Plugin";
  constructor(
    logicalId: string,
    properties: QBusinessPluginProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, QBusinessPlugin.Type, properties, options);
  }
}
