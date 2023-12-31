import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::AppFlow::ConnectorProfile
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-connectorprofile.html}
 */
export type AppFlowConnectorProfileProperties = {
  /**
   * Mode in which data transfer should be enabled. Private connection mode is currently enabled for Salesforce, Snowflake, Trendmicro and Singular
   */
  ConnectionMode: "Public" | "Private";
  /**
   * The label of the connector. The label is unique for each ConnectorRegistration in your AWS account. Only needed if calling for CUSTOMCONNECTOR connector type/.
   * @maxLength `256`
   * @pattern `[\w!@#.-]+`
   */
  ConnectorLabel?: string;
  /**
   * Connector specific configurations needed to create connector profile
   */
  ConnectorProfileConfig?: ConnectorProfileConfig;
  /**
   * The maximum number of items to retrieve in a single batch.
   * @maxLength `256`
   * @pattern `[\w/!@#+=.-]+`
   */
  ConnectorProfileName: string;
  /**
   * List of Saas providers that need connector profile to be created
   */
  ConnectorType: ConnectorType;
  /**
   * The ARN of the AWS Key Management Service (AWS KMS) key that's used to encrypt your function's environment variables. If it's not provided, AWS Lambda uses a default service key.
   * @minLength `20`
   * @maxLength `2048`
   * @pattern `arn:aws:kms:.*:[0-9]+:.*`
   */
  KMSArn?: string;
};
/**
 * Attribute type definition for `AWS::AppFlow::ConnectorProfile`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-connectorprofile.html#aws-resource-appflow-connectorprofile-return-values}
 */
export type AppFlowConnectorProfileAttributes = {
  /**
   * Unique identifier for connector profile resources
   * @maxLength `512`
   * @pattern `arn:aws:appflow:.*:[0-9]+:.*`
   */
  ConnectorProfileArn: string;
  /**
   * A unique Arn for Connector-Profile resource
   * @maxLength `512`
   * @pattern `arn:aws:.*:.*:[0-9]+:.*`
   */
  CredentialsArn: string;
};
/**
 * Type definition for `AWS::AppFlow::ConnectorProfile.AmplitudeConnectorProfileCredentials`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-connectorprofile-amplitudeconnectorprofilecredentials.html}
 */
export type AmplitudeConnectorProfileCredentials = {
  /**
   * A unique alphanumeric identiﬁer used to authenticate a user, developer, or calling program to your API.
   * @maxLength `256`
   * @pattern `\S+`
   */
  ApiKey: string;
  /**
   * @maxLength `256`
   * @pattern `\S+`
   */
  SecretKey: string;
};
/**
 * Type definition for `AWS::AppFlow::ConnectorProfile.ApiKeyCredentials`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-connectorprofile-apikeycredentials.html}
 */
export type ApiKeyCredentials = {
  /**
   * @maxLength `256`
   * @pattern `\S+`
   */
  ApiKey: string;
  /**
   * @maxLength `256`
   * @pattern `\S+`
   */
  ApiSecretKey?: string;
};
/**
 * Type definition for `AWS::AppFlow::ConnectorProfile.AuthenticationType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-connectorprofile-authenticationtype.html}
 */
export type AuthenticationType = "OAUTH2" | "APIKEY" | "BASIC" | "CUSTOM";
/**
 * Type definition for `AWS::AppFlow::ConnectorProfile.BasicAuthCredentials`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-connectorprofile-basicauthcredentials.html}
 */
export type BasicAuthCredentials = {
  /**
   * @maxLength `512`
   * @pattern `\S+`
   */
  Password: string;
  /**
   * @maxLength `512`
   * @pattern `\S+`
   */
  Username: string;
};
/**
 * Type definition for `AWS::AppFlow::ConnectorProfile.ConnectorOAuthRequest`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-connectorprofile-connectoroauthrequest.html}
 */
export type ConnectorOAuthRequest = {
  /**
   * The code provided by the connector when it has been authenticated via the connected app.
   */
  AuthCode?: string;
  /**
     * The URL to which the authentication server redirects the browser after authorization has been
    granted.
     */
  RedirectUri?: string;
};
/**
 * Type definition for `AWS::AppFlow::ConnectorProfile.ConnectorProfileConfig`.
 * Connector specific configurations needed to create connector profile
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-connectorprofile-connectorprofileconfig.html}
 */
export type ConnectorProfileConfig = {
  /**
   * Connector specific configuration needed to create connector profile based on Authentication mechanism
   */
  ConnectorProfileCredentials?: ConnectorProfileCredentials;
  /**
   * Connector specific properties needed to create connector profile - currently not needed for Amplitude, Trendmicro, Googleanalytics and Singular
   */
  ConnectorProfileProperties?: ConnectorProfileProperties;
};
/**
 * Type definition for `AWS::AppFlow::ConnectorProfile.ConnectorProfileCredentials`.
 * Connector specific configuration needed to create connector profile based on Authentication mechanism
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-connectorprofile-connectorprofilecredentials.html}
 */
export type ConnectorProfileCredentials = {
  Amplitude?: AmplitudeConnectorProfileCredentials;
  CustomConnector?: CustomConnectorProfileCredentials;
  Datadog?: DatadogConnectorProfileCredentials;
  Dynatrace?: DynatraceConnectorProfileCredentials;
  GoogleAnalytics?: GoogleAnalyticsConnectorProfileCredentials;
  InforNexus?: InforNexusConnectorProfileCredentials;
  Marketo?: MarketoConnectorProfileCredentials;
  Pardot?: PardotConnectorProfileCredentials;
  Redshift?: RedshiftConnectorProfileCredentials;
  SAPOData?: SAPODataConnectorProfileCredentials;
  Salesforce?: SalesforceConnectorProfileCredentials;
  ServiceNow?: ServiceNowConnectorProfileCredentials;
  Singular?: SingularConnectorProfileCredentials;
  Slack?: SlackConnectorProfileCredentials;
  Snowflake?: SnowflakeConnectorProfileCredentials;
  Trendmicro?: TrendmicroConnectorProfileCredentials;
  Veeva?: VeevaConnectorProfileCredentials;
  Zendesk?: ZendeskConnectorProfileCredentials;
};
/**
 * Type definition for `AWS::AppFlow::ConnectorProfile.ConnectorProfileProperties`.
 * Connector specific properties needed to create connector profile - currently not needed for Amplitude, Trendmicro, Googleanalytics and Singular
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-connectorprofile-connectorprofileproperties.html}
 */
export type ConnectorProfileProperties = {
  CustomConnector?: CustomConnectorProfileProperties;
  Datadog?: DatadogConnectorProfileProperties;
  Dynatrace?: DynatraceConnectorProfileProperties;
  InforNexus?: InforNexusConnectorProfileProperties;
  Marketo?: MarketoConnectorProfileProperties;
  Pardot?: PardotConnectorProfileProperties;
  Redshift?: RedshiftConnectorProfileProperties;
  SAPOData?: SAPODataConnectorProfileProperties;
  Salesforce?: SalesforceConnectorProfileProperties;
  ServiceNow?: ServiceNowConnectorProfileProperties;
  Slack?: SlackConnectorProfileProperties;
  Snowflake?: SnowflakeConnectorProfileProperties;
  Veeva?: VeevaConnectorProfileProperties;
  Zendesk?: ZendeskConnectorProfileProperties;
};
/**
 * Type definition for `AWS::AppFlow::ConnectorProfile.ConnectorType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-connectorprofile-connectortype.html}
 */
export type ConnectorType =
  | "Salesforce"
  | "Pardot"
  | "Singular"
  | "Slack"
  | "Redshift"
  | "Marketo"
  | "Googleanalytics"
  | "Zendesk"
  | "Servicenow"
  | "SAPOData"
  | "Datadog"
  | "Trendmicro"
  | "Snowflake"
  | "Dynatrace"
  | "Infornexus"
  | "Amplitude"
  | "Veeva"
  | "CustomConnector";
/**
 * Type definition for `AWS::AppFlow::ConnectorProfile.CredentialsMap`.
 * A map for properties for custom authentication.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-connectorprofile-credentialsmap.html}
 */
export type CredentialsMap = Record<string, string>;
/**
 * Type definition for `AWS::AppFlow::ConnectorProfile.CustomAuthCredentials`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-connectorprofile-customauthcredentials.html}
 */
export type CustomAuthCredentials = {
  /**
   * A map for properties for custom authentication.
   */
  CredentialsMap?: CredentialsMap;
  /**
   * @maxLength `256`
   * @pattern `\S+`
   */
  CustomAuthenticationType: string;
};
/**
 * Type definition for `AWS::AppFlow::ConnectorProfile.CustomConnectorProfileCredentials`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-connectorprofile-customconnectorprofilecredentials.html}
 */
export type CustomConnectorProfileCredentials = {
  ApiKey?: ApiKeyCredentials;
  AuthenticationType: AuthenticationType;
  Basic?: BasicAuthCredentials;
  Custom?: CustomAuthCredentials;
  Oauth2?: OAuth2Credentials;
};
/**
 * Type definition for `AWS::AppFlow::ConnectorProfile.CustomConnectorProfileProperties`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-connectorprofile-customconnectorprofileproperties.html}
 */
export type CustomConnectorProfileProperties = {
  OAuth2Properties?: OAuth2Properties;
  /**
   * A map for properties for custom connector.
   */
  ProfileProperties?: ProfileProperties;
};
/**
 * Type definition for `AWS::AppFlow::ConnectorProfile.DatadogConnectorProfileCredentials`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-connectorprofile-datadogconnectorprofilecredentials.html}
 */
export type DatadogConnectorProfileCredentials = {
  /**
   * A unique alphanumeric identiﬁer used to authenticate a user, developer, or calling program to your API.
   * @maxLength `256`
   * @pattern `\S+`
   */
  ApiKey: string;
  /**
   * Application keys, in conjunction with your API key, give you full access to Datadog’s programmatic API. Application keys are associated with the user account that created them. The application key is used to log all requests made to the API.
   * @maxLength `512`
   * @pattern `\S+`
   */
  ApplicationKey: string;
};
/**
 * Type definition for `AWS::AppFlow::ConnectorProfile.DatadogConnectorProfileProperties`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-connectorprofile-datadogconnectorprofileproperties.html}
 */
export type DatadogConnectorProfileProperties = {
  /**
   * The location of the Datadog resource
   * @maxLength `256`
   * @pattern `\S+`
   */
  InstanceUrl: string;
};
/**
 * Type definition for `AWS::AppFlow::ConnectorProfile.DynatraceConnectorProfileCredentials`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-connectorprofile-dynatraceconnectorprofilecredentials.html}
 */
export type DynatraceConnectorProfileCredentials = {
  /**
   * The API tokens used by Dynatrace API to authenticate various API calls.
   * @maxLength `256`
   * @pattern `\S+`
   */
  ApiToken: string;
};
/**
 * Type definition for `AWS::AppFlow::ConnectorProfile.DynatraceConnectorProfileProperties`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-connectorprofile-dynatraceconnectorprofileproperties.html}
 */
export type DynatraceConnectorProfileProperties = {
  /**
   * The location of the Dynatrace resource
   * @maxLength `256`
   * @pattern `\S+`
   */
  InstanceUrl: string;
};
/**
 * Type definition for `AWS::AppFlow::ConnectorProfile.GoogleAnalyticsConnectorProfileCredentials`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-connectorprofile-googleanalyticsconnectorprofilecredentials.html}
 */
export type GoogleAnalyticsConnectorProfileCredentials = {
  /**
   * The credentials used to access protected resources.
   * @maxLength `4096`
   * @pattern `\S+`
   */
  AccessToken?: string;
  /**
   * The identiﬁer for the desired client.
   * @maxLength `512`
   * @pattern `\S+`
   */
  ClientId: string;
  /**
   * The client secret used by the oauth client to authenticate to the authorization server.
   * @maxLength `512`
   * @pattern `\S+`
   */
  ClientSecret: string;
  /**
   * The oauth needed to request security tokens from the connector endpoint.
   */
  ConnectorOAuthRequest?: ConnectorOAuthRequest;
  /**
   * The credentials used to acquire new access tokens.
   * @maxLength `4096`
   * @pattern `\S+`
   */
  RefreshToken?: string;
};
/**
 * Type definition for `AWS::AppFlow::ConnectorProfile.InforNexusConnectorProfileCredentials`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-connectorprofile-infornexusconnectorprofilecredentials.html}
 */
export type InforNexusConnectorProfileCredentials = {
  /**
   * The Access Key portion of the credentials.
   * @maxLength `256`
   * @pattern `\S+`
   */
  AccessKeyId: string;
  /**
   * The encryption keys used to encrypt data.
   * @maxLength `512`
   * @pattern `\S+`
   */
  Datakey: string;
  /**
   * The secret key used to sign requests.
   * @maxLength `512`
   * @pattern `\S+`
   */
  SecretAccessKey: string;
  /**
   * The identiﬁer for the user.
   * @maxLength `512`
   * @pattern `\S+`
   */
  UserId: string;
};
/**
 * Type definition for `AWS::AppFlow::ConnectorProfile.InforNexusConnectorProfileProperties`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-connectorprofile-infornexusconnectorprofileproperties.html}
 */
export type InforNexusConnectorProfileProperties = {
  /**
   * The location of the InforNexus resource
   * @maxLength `256`
   * @pattern `\S+`
   */
  InstanceUrl: string;
};
/**
 * Type definition for `AWS::AppFlow::ConnectorProfile.MarketoConnectorProfileCredentials`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-connectorprofile-marketoconnectorprofilecredentials.html}
 */
export type MarketoConnectorProfileCredentials = {
  /**
   * The credentials used to access protected resources.
   * @maxLength `4096`
   * @pattern `\S+`
   */
  AccessToken?: string;
  /**
   * The identiﬁer for the desired client.
   * @maxLength `512`
   * @pattern `\S+`
   */
  ClientId: string;
  /**
   * The client secret used by the oauth client to authenticate to the authorization server.
   * @maxLength `512`
   * @pattern `\S+`
   */
  ClientSecret: string;
  /**
   * The oauth needed to request security tokens from the connector endpoint.
   */
  ConnectorOAuthRequest?: ConnectorOAuthRequest;
};
/**
 * Type definition for `AWS::AppFlow::ConnectorProfile.MarketoConnectorProfileProperties`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-connectorprofile-marketoconnectorprofileproperties.html}
 */
export type MarketoConnectorProfileProperties = {
  /**
   * The location of the Marketo resource
   * @maxLength `256`
   * @pattern `\S+`
   */
  InstanceUrl: string;
};
/**
 * Type definition for `AWS::AppFlow::ConnectorProfile.OAuth2Credentials`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-connectorprofile-oauth2credentials.html}
 */
export type OAuth2Credentials = {
  /**
   * @maxLength `4096`
   * @pattern `\S+`
   */
  AccessToken?: string;
  /**
   * @maxLength `512`
   * @pattern `\S+`
   */
  ClientId?: string;
  /**
   * @maxLength `512`
   * @pattern `\S+`
   */
  ClientSecret?: string;
  OAuthRequest?: ConnectorOAuthRequest;
  /**
   * @maxLength `4096`
   * @pattern `\S+`
   */
  RefreshToken?: string;
};
/**
 * Type definition for `AWS::AppFlow::ConnectorProfile.OAuth2GrantType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-connectorprofile-oauth2granttype.html}
 */
export type OAuth2GrantType =
  | "CLIENT_CREDENTIALS"
  | "AUTHORIZATION_CODE"
  | "JWT_BEARER";
/**
 * Type definition for `AWS::AppFlow::ConnectorProfile.OAuth2Properties`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-connectorprofile-oauth2properties.html}
 */
export type OAuth2Properties = {
  OAuth2GrantType?: OAuth2GrantType;
  /**
   * @minLength `0`
   * @maxLength `256`
   * @pattern `^(https?)://[-a-zA-Z0-9+&amp;@#/%?=~_|!:,.;]*[-a-zA-Z0-9+&amp;@#/%=~_|]`
   */
  TokenUrl?: string;
  /**
   * A map for properties for custom connector Token Url.
   */
  TokenUrlCustomProperties?: TokenUrlCustomProperties;
};
/**
 * Type definition for `AWS::AppFlow::ConnectorProfile.OAuthProperties`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-connectorprofile-oauthproperties.html}
 */
export type OAuthProperties = {
  /**
   * @maxLength `256`
   * @pattern `^(https?)://[-a-zA-Z0-9+&amp;@#/%?=~_|!:,.;]*[-a-zA-Z0-9+&amp;@#/%=~_|]`
   */
  AuthCodeUrl?: string;
  OAuthScopes?: string[];
  /**
   * @maxLength `256`
   * @pattern `^(https?)://[-a-zA-Z0-9+&amp;@#/%?=~_|!:,.;]*[-a-zA-Z0-9+&amp;@#/%=~_|]`
   */
  TokenUrl?: string;
};
/**
 * Type definition for `AWS::AppFlow::ConnectorProfile.PardotConnectorProfileCredentials`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-connectorprofile-pardotconnectorprofilecredentials.html}
 */
export type PardotConnectorProfileCredentials = {
  /**
   * The credentials used to access protected resources.
   * @maxLength `4096`
   * @pattern `\S+`
   */
  AccessToken?: string;
  /**
   * The client credentials to fetch access token and refresh token.
   * @maxLength `2048`
   * @pattern `arn:aws:secretsmanager:.*:[0-9]+:.*`
   */
  ClientCredentialsArn?: string;
  /**
   * The oauth needed to request security tokens from the connector endpoint.
   */
  ConnectorOAuthRequest?: ConnectorOAuthRequest;
  /**
   * The credentials used to acquire new access tokens.
   * @maxLength `4096`
   * @pattern `\S+`
   */
  RefreshToken?: string;
};
/**
 * Type definition for `AWS::AppFlow::ConnectorProfile.PardotConnectorProfileProperties`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-connectorprofile-pardotconnectorprofileproperties.html}
 */
export type PardotConnectorProfileProperties = {
  /**
   * The Business unit id of Salesforce Pardot instance to be connected
   * @maxLength `18`
   * @pattern `\S+`
   */
  BusinessUnitId: string;
  /**
   * The location of the Salesforce Pardot resource
   * @maxLength `256`
   * @pattern `\S+`
   */
  InstanceUrl?: string;
  /**
   * Indicates whether the connector profile applies to a demo or production environment
   */
  IsSandboxEnvironment?: boolean;
};
/**
 * Type definition for `AWS::AppFlow::ConnectorProfile.ProfileProperties`.
 * A map for properties for custom connector.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-connectorprofile-profileproperties.html}
 */
export type ProfileProperties = Record<string, string>;
/**
 * Type definition for `AWS::AppFlow::ConnectorProfile.RedshiftConnectorProfileCredentials`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-connectorprofile-redshiftconnectorprofilecredentials.html}
 */
export type RedshiftConnectorProfileCredentials = {
  /**
   * The password that corresponds to the username.
   * @maxLength `512`
   * @pattern `\S+`
   */
  Password?: string;
  /**
   * The name of the user.
   * @maxLength `512`
   * @pattern `\S+`
   */
  Username?: string;
};
/**
 * Type definition for `AWS::AppFlow::ConnectorProfile.RedshiftConnectorProfileProperties`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-connectorprofile-redshiftconnectorprofileproperties.html}
 */
export type RedshiftConnectorProfileProperties = {
  /**
   * The name of the Amazon S3 bucket associated with Redshift.
   * @minLength `3`
   * @maxLength `63`
   * @pattern `\S+`
   */
  BucketName: string;
  /**
   * The object key for the destination bucket in which Amazon AppFlow will place the ﬁles.
   * @maxLength `128`
   */
  BucketPrefix?: string;
  /**
   * The unique identifier of the Amazon Redshift cluster.
   * @maxLength `512`
   * @pattern `\S+`
   */
  ClusterIdentifier?: string;
  /**
   * The Amazon Resource Name (ARN) of the IAM role that grants Amazon AppFlow access to the data through the Amazon Redshift Data API.
   * @maxLength `512`
   * @pattern `arn:aws:iam:.*:[0-9]+:.*`
   */
  DataApiRoleArn?: string;
  /**
   * The name of the Amazon Redshift database that will store the transferred data.
   * @maxLength `512`
   * @pattern `\S+`
   */
  DatabaseName?: string;
  /**
   * The JDBC URL of the Amazon Redshift cluster.
   * @maxLength `512`
   * @pattern `\S+`
   */
  DatabaseUrl?: string;
  /**
   * If Amazon AppFlow will connect to Amazon Redshift Serverless or Amazon Redshift cluster.
   */
  IsRedshiftServerless?: boolean;
  /**
   * The Amazon Resource Name (ARN) of the IAM role.
   * @maxLength `512`
   * @pattern `arn:aws:iam:.*:[0-9]+:.*`
   */
  RoleArn: string;
  /**
   * The name of the Amazon Redshift serverless workgroup
   * @maxLength `512`
   * @pattern `\S+`
   */
  WorkgroupName?: string;
};
/**
 * Type definition for `AWS::AppFlow::ConnectorProfile.SalesforceConnectorProfileCredentials`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-connectorprofile-salesforceconnectorprofilecredentials.html}
 */
export type SalesforceConnectorProfileCredentials = {
  /**
   * The credentials used to access protected resources.
   * @maxLength `4096`
   * @pattern `\S+`
   */
  AccessToken?: string;
  /**
   * The client credentials to fetch access token and refresh token.
   * @maxLength `2048`
   * @pattern `arn:aws:secretsmanager:.*:[0-9]+:.*`
   */
  ClientCredentialsArn?: string;
  /**
   * The oauth needed to request security tokens from the connector endpoint.
   */
  ConnectorOAuthRequest?: ConnectorOAuthRequest;
  /**
   * The credentials used to access your Salesforce records
   * @maxLength `8000`
   * @pattern `^[A-Za-z0-9-_=]+\.[A-Za-z0-9-_=]+\.[A-Za-z0-9-_.+/=]*$`
   */
  JwtToken?: string;
  /**
   * The grant types to fetch an access token
   */
  OAuth2GrantType?: OAuth2GrantType;
  /**
   * The credentials used to acquire new access tokens.
   * @maxLength `4096`
   * @pattern `\S+`
   */
  RefreshToken?: string;
};
/**
 * Type definition for `AWS::AppFlow::ConnectorProfile.SalesforceConnectorProfileProperties`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-connectorprofile-salesforceconnectorprofileproperties.html}
 */
export type SalesforceConnectorProfileProperties = {
  /**
   * The location of the Salesforce resource
   * @maxLength `256`
   * @pattern `\S+`
   */
  InstanceUrl?: string;
  /**
   * Indicates whether the connector profile applies to a sandbox or production environment
   */
  isSandboxEnvironment?: boolean;
  /**
   * Indicates whether to make Metadata And Authorization calls over Pivate Network
   */
  usePrivateLinkForMetadataAndAuthorization?: boolean;
};
/**
 * Type definition for `AWS::AppFlow::ConnectorProfile.SAPODataConnectorProfileCredentials`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-connectorprofile-sapodataconnectorprofilecredentials.html}
 */
export type SAPODataConnectorProfileCredentials = {
  BasicAuthCredentials?: BasicAuthCredentials;
  OAuthCredentials?: {
    /**
     * @maxLength `4096`
     * @pattern `\S+`
     */
    AccessToken?: string;
    /**
     * @maxLength `512`
     * @pattern `\S+`
     */
    ClientId?: string;
    /**
     * @maxLength `512`
     * @pattern `\S+`
     */
    ClientSecret?: string;
    ConnectorOAuthRequest?: ConnectorOAuthRequest;
    /**
     * @maxLength `4096`
     * @pattern `\S+`
     */
    RefreshToken?: string;
  };
};
/**
 * Type definition for `AWS::AppFlow::ConnectorProfile.SAPODataConnectorProfileProperties`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-connectorprofile-sapodataconnectorprofileproperties.html}
 */
export type SAPODataConnectorProfileProperties = {
  /**
   * @maxLength `256`
   * @pattern `^(https?)://[-a-zA-Z0-9+&amp;@#/%?=~_|!:,.;]*[-a-zA-Z0-9+&amp;@#/%=~_|]`
   */
  ApplicationHostUrl?: string;
  /**
   * @maxLength `512`
   * @pattern `\S+`
   */
  ApplicationServicePath?: string;
  /**
   * @minLength `3`
   * @maxLength `3`
   * @pattern `^\d{3}$`
   */
  ClientNumber?: string;
  /**
   * If you set this parameter to true, Amazon AppFlow bypasses the single sign-on (SSO) settings in your SAP account when it accesses your SAP OData instance.
   */
  DisableSSO?: boolean;
  /**
   * @maxLength `2`
   * @pattern `^[a-zA-Z0-9_]*$`
   */
  LogonLanguage?: string;
  OAuthProperties?: OAuthProperties;
  /**
   * @min `1`
   * @max `65535`
   */
  PortNumber?: number;
  /**
   * @maxLength `512`
   * @pattern `\S+`
   */
  PrivateLinkServiceName?: string;
};
/**
 * Type definition for `AWS::AppFlow::ConnectorProfile.ServiceNowConnectorProfileCredentials`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-connectorprofile-servicenowconnectorprofilecredentials.html}
 */
export type ServiceNowConnectorProfileCredentials = {
  /**
   * The OAuth 2.0 credentials required to authenticate the user.
   */
  OAuth2Credentials?: OAuth2Credentials;
  /**
   * The password that corresponds to the username.
   * @maxLength `512`
   * @pattern `\S+`
   */
  Password?: string;
  /**
   * The name of the user.
   * @maxLength `512`
   * @pattern `\S+`
   */
  Username?: string;
};
/**
 * Type definition for `AWS::AppFlow::ConnectorProfile.ServiceNowConnectorProfileProperties`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-connectorprofile-servicenowconnectorprofileproperties.html}
 */
export type ServiceNowConnectorProfileProperties = {
  /**
   * The location of the ServiceNow resource
   * @maxLength `256`
   * @pattern `\S+`
   */
  InstanceUrl: string;
};
/**
 * Type definition for `AWS::AppFlow::ConnectorProfile.SingularConnectorProfileCredentials`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-connectorprofile-singularconnectorprofilecredentials.html}
 */
export type SingularConnectorProfileCredentials = {
  /**
   * A unique alphanumeric identiﬁer used to authenticate a user, developer, or calling program to your API.
   * @maxLength `256`
   * @pattern `\S+`
   */
  ApiKey: string;
};
/**
 * Type definition for `AWS::AppFlow::ConnectorProfile.SlackConnectorProfileCredentials`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-connectorprofile-slackconnectorprofilecredentials.html}
 */
export type SlackConnectorProfileCredentials = {
  /**
   * The credentials used to access protected resources.
   * @maxLength `4096`
   * @pattern `\S+`
   */
  AccessToken?: string;
  /**
   * The identiﬁer for the desired client.
   * @maxLength `512`
   * @pattern `\S+`
   */
  ClientId: string;
  /**
   * The client secret used by the oauth client to authenticate to the authorization server.
   * @maxLength `512`
   * @pattern `\S+`
   */
  ClientSecret: string;
  /**
   * The oauth needed to request security tokens from the connector endpoint.
   */
  ConnectorOAuthRequest?: ConnectorOAuthRequest;
};
/**
 * Type definition for `AWS::AppFlow::ConnectorProfile.SlackConnectorProfileProperties`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-connectorprofile-slackconnectorprofileproperties.html}
 */
export type SlackConnectorProfileProperties = {
  /**
   * The location of the Slack resource
   * @maxLength `256`
   * @pattern `\S+`
   */
  InstanceUrl: string;
};
/**
 * Type definition for `AWS::AppFlow::ConnectorProfile.SnowflakeConnectorProfileCredentials`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-connectorprofile-snowflakeconnectorprofilecredentials.html}
 */
export type SnowflakeConnectorProfileCredentials = {
  /**
   * The password that corresponds to the username.
   * @maxLength `512`
   * @pattern `\S+`
   */
  Password: string;
  /**
   * The name of the user.
   * @maxLength `512`
   * @pattern `\S+`
   */
  Username: string;
};
/**
 * Type definition for `AWS::AppFlow::ConnectorProfile.SnowflakeConnectorProfileProperties`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-connectorprofile-snowflakeconnectorprofileproperties.html}
 */
export type SnowflakeConnectorProfileProperties = {
  /**
   * The name of the account.
   * @maxLength `512`
   * @pattern `\S+`
   */
  AccountName?: string;
  /**
   * The name of the Amazon S3 bucket associated with Snowﬂake.
   * @minLength `3`
   * @maxLength `63`
   * @pattern `\S+`
   */
  BucketName: string;
  /**
   * The bucket prefix that refers to the Amazon S3 bucket associated with Snowﬂake.
   * @maxLength `128`
   */
  BucketPrefix?: string;
  /**
   * The Snowﬂake Private Link service name to be used for private data transfers.
   * @maxLength `512`
   * @pattern `\S+`
   */
  PrivateLinkServiceName?: string;
  /**
   * The region of the Snowﬂake account.
   * @maxLength `64`
   * @pattern `\S+`
   */
  Region?: string;
  /**
     * The name of the Amazon S3 stage that was created while setting up an Amazon S3 stage in the
    Snowﬂake account. This is written in the following format: < Database>< Schema><Stage Name>.
     * @maxLength `512`
     * @pattern `\S+`
     */
  Stage: string;
  /**
   * The name of the Snowﬂake warehouse.
   * @maxLength `512`
   * @pattern `[\s\w/!@#+=.-]*`
   */
  Warehouse: string;
};
/**
 * Type definition for `AWS::AppFlow::ConnectorProfile.TokenUrlCustomProperties`.
 * A map for properties for custom connector Token Url.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-connectorprofile-tokenurlcustomproperties.html}
 */
export type TokenUrlCustomProperties = Record<string, string>;
/**
 * Type definition for `AWS::AppFlow::ConnectorProfile.TrendmicroConnectorProfileCredentials`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-connectorprofile-trendmicroconnectorprofilecredentials.html}
 */
export type TrendmicroConnectorProfileCredentials = {
  /**
   * The Secret Access Key portion of the credentials.
   * @maxLength `256`
   * @pattern `\S+`
   */
  ApiSecretKey: string;
};
/**
 * Type definition for `AWS::AppFlow::ConnectorProfile.VeevaConnectorProfileCredentials`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-connectorprofile-veevaconnectorprofilecredentials.html}
 */
export type VeevaConnectorProfileCredentials = {
  /**
   * The password that corresponds to the username.
   * @maxLength `512`
   * @pattern `\S+`
   */
  Password: string;
  /**
   * The name of the user.
   * @maxLength `512`
   * @pattern `\S+`
   */
  Username: string;
};
/**
 * Type definition for `AWS::AppFlow::ConnectorProfile.VeevaConnectorProfileProperties`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-connectorprofile-veevaconnectorprofileproperties.html}
 */
export type VeevaConnectorProfileProperties = {
  /**
   * The location of the Veeva resource
   * @maxLength `256`
   * @pattern `\S+`
   */
  InstanceUrl: string;
};
/**
 * Type definition for `AWS::AppFlow::ConnectorProfile.ZendeskConnectorProfileCredentials`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-connectorprofile-zendeskconnectorprofilecredentials.html}
 */
export type ZendeskConnectorProfileCredentials = {
  /**
   * The credentials used to access protected resources.
   * @maxLength `4096`
   * @pattern `\S+`
   */
  AccessToken?: string;
  /**
   * The identiﬁer for the desired client.
   * @maxLength `512`
   * @pattern `\S+`
   */
  ClientId: string;
  /**
   * The client secret used by the oauth client to authenticate to the authorization server.
   * @maxLength `512`
   * @pattern `\S+`
   */
  ClientSecret: string;
  /**
   * The oauth needed to request security tokens from the connector endpoint.
   */
  ConnectorOAuthRequest?: ConnectorOAuthRequest;
};
/**
 * Type definition for `AWS::AppFlow::ConnectorProfile.ZendeskConnectorProfileProperties`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-connectorprofile-zendeskconnectorprofileproperties.html}
 */
export type ZendeskConnectorProfileProperties = {
  /**
   * The location of the Zendesk resource
   * @maxLength `256`
   * @pattern `\S+`
   */
  InstanceUrl: string;
};
/**
 * Resource Type definition for AWS::AppFlow::ConnectorProfile
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-connectorprofile.html}
 */
export class AppFlowConnectorProfile extends $Resource<
  "AWS::AppFlow::ConnectorProfile",
  AppFlowConnectorProfileProperties,
  AppFlowConnectorProfileAttributes
> {
  public static readonly Type = "AWS::AppFlow::ConnectorProfile";
  constructor(
    logicalId: string,
    properties: AppFlowConnectorProfileProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, AppFlowConnectorProfile.Type, properties, options);
  }
}
