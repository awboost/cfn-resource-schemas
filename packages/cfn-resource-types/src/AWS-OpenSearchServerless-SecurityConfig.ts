import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::OpenSearchServerless::SecurityConfig`.
 * Amazon OpenSearchServerless security config resource
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opensearchserverless-securityconfig.html}
 */
export type OpenSearchServerlessSecurityConfigProperties = {
  /**
   * Security config description
   * @minLength `1`
   * @maxLength `1000`
   */
  Description?: string;
  /**
   * The friendly name of the security config
   * @minLength `3`
   * @maxLength `32`
   * @pattern `^[a-z][a-z0-9-]{2,31}$`
   */
  Name?: string;
  /**
   * Describes saml options in form of key value map
   */
  SamlOptions?: SamlConfigOptions;
  /**
   * Config type for security config
   */
  Type?: SecurityConfigType;
};
/**
 * Attribute type definition for `AWS::OpenSearchServerless::SecurityConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opensearchserverless-securityconfig.html#aws-resource-opensearchserverless-securityconfig-return-values}
 */
export type OpenSearchServerlessSecurityConfigAttributes = {
  /**
   * The identifier of the security config
   * @minLength `1`
   * @maxLength `100`
   */
  Id: string;
};
/**
 * Type definition for `AWS::OpenSearchServerless::SecurityConfig.SamlConfigOptions`.
 * Describes saml options in form of key value map
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opensearchserverless-securityconfig-samlconfigoptions.html}
 */
export type SamlConfigOptions = {
  /**
   * Group attribute for this saml integration
   * @minLength `1`
   * @maxLength `2048`
   * @pattern `[\w+=,.@-]+`
   */
  GroupAttribute?: string;
  /**
   * The XML saml provider metadata document that you want to use
   * @minLength `1`
   * @maxLength `51200`
   * @pattern `[\u0009\u000A\u000D\u0020-\u007E\u00A1-\u00FF]+`
   */
  Metadata: string;
  /**
   * Defines the session timeout in minutes
   */
  SessionTimeout?: number;
  /**
   * Custom attribute for this saml integration
   * @minLength `1`
   * @maxLength `2048`
   * @pattern `[\w+=,.@-]+`
   */
  UserAttribute?: string;
};
/**
 * Type definition for `AWS::OpenSearchServerless::SecurityConfig.SecurityConfigType`.
 * Config type for security config
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opensearchserverless-securityconfig-securityconfigtype.html}
 */
export type SecurityConfigType = "saml";
/**
 * Resource type definition for `AWS::OpenSearchServerless::SecurityConfig`.
 * Amazon OpenSearchServerless security config resource
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opensearchserverless-securityconfig.html}
 */
export class OpenSearchServerlessSecurityConfig extends $Resource<
  "AWS::OpenSearchServerless::SecurityConfig",
  OpenSearchServerlessSecurityConfigProperties,
  OpenSearchServerlessSecurityConfigAttributes
> {
  public static readonly Type = "AWS::OpenSearchServerless::SecurityConfig";
  constructor(
    logicalId: string,
    properties: OpenSearchServerlessSecurityConfigProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      OpenSearchServerlessSecurityConfig.Type,
      properties,
      options,
    );
  }
}
