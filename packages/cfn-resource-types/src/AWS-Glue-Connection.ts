import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::Glue::Connection
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-connection.html}
 */
export type GlueConnectionProperties = {
  CatalogId: string;
  ConnectionInput: ConnectionInput;
};
/**
 * Attribute type definition for `AWS::Glue::Connection`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-connection.html#aws-resource-glue-connection-return-values}
 */
export type GlueConnectionAttributes = {
  Id: string;
};
/**
 * Type definition for `AWS::Glue::Connection.AuthenticationConfigurationInput`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-connection-authenticationconfigurationinput.html}
 */
export type AuthenticationConfigurationInput = {
  AuthenticationType: string;
  BasicAuthenticationCredentials?: BasicAuthenticationCredentials;
  CustomAuthenticationCredentials?: Record<string, any>;
  KmsKeyArn?: string;
  OAuth2Properties?: OAuth2PropertiesInput;
  SecretArn?: string;
};
/**
 * Type definition for `AWS::Glue::Connection.AuthorizationCodeProperties`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-connection-authorizationcodeproperties.html}
 */
export type AuthorizationCodeProperties = {
  AuthorizationCode?: string;
  RedirectUri?: string;
};
/**
 * Type definition for `AWS::Glue::Connection.BasicAuthenticationCredentials`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-connection-basicauthenticationcredentials.html}
 */
export type BasicAuthenticationCredentials = {
  Password?: string;
  Username?: string;
};
/**
 * Type definition for `AWS::Glue::Connection.ConnectionInput`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-connection-connectioninput.html}
 */
export type ConnectionInput = {
  AthenaProperties?: Record<string, any>;
  AuthenticationConfiguration?: AuthenticationConfigurationInput;
  ConnectionProperties?: Record<string, any>;
  ConnectionType: string;
  Description?: string;
  MatchCriteria?: string[];
  Name?: string;
  PhysicalConnectionRequirements?: PhysicalConnectionRequirements;
  PythonProperties?: Record<string, any>;
  SparkProperties?: Record<string, any>;
  ValidateCredentials?: boolean;
  ValidateForComputeEnvironments?: string[];
};
/**
 * Type definition for `AWS::Glue::Connection.OAuth2ClientApplication`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-connection-oauth2clientapplication.html}
 */
export type OAuth2ClientApplication = {
  AWSManagedClientApplicationReference?: string;
  UserManagedClientApplicationClientId?: string;
};
/**
 * Type definition for `AWS::Glue::Connection.OAuth2Credentials`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-connection-oauth2credentials.html}
 */
export type OAuth2Credentials = {
  AccessToken?: string;
  JwtToken?: string;
  RefreshToken?: string;
  UserManagedClientApplicationClientSecret?: string;
};
/**
 * Type definition for `AWS::Glue::Connection.OAuth2PropertiesInput`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-connection-oauth2propertiesinput.html}
 */
export type OAuth2PropertiesInput = {
  AuthorizationCodeProperties?: AuthorizationCodeProperties;
  OAuth2ClientApplication?: OAuth2ClientApplication;
  OAuth2Credentials?: OAuth2Credentials;
  OAuth2GrantType?: string;
  TokenUrl?: string;
  TokenUrlParametersMap?: Record<string, any>;
};
/**
 * Type definition for `AWS::Glue::Connection.PhysicalConnectionRequirements`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-connection-physicalconnectionrequirements.html}
 */
export type PhysicalConnectionRequirements = {
  AvailabilityZone?: string;
  SecurityGroupIdList?: string[];
  SubnetId?: string;
};
/**
 * Resource Type definition for AWS::Glue::Connection
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-connection.html}
 */
export class GlueConnection extends $Resource<
  "AWS::Glue::Connection",
  GlueConnectionProperties,
  GlueConnectionAttributes
> {
  public static readonly Type = "AWS::Glue::Connection";
  constructor(
    logicalId: string,
    properties: GlueConnectionProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, GlueConnection.Type, properties, options);
  }
}
