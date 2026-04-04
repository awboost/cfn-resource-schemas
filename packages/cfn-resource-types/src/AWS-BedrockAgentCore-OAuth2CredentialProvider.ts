import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::BedrockAgentCore::OAuth2CredentialProvider
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrockagentcore-oauth2credentialprovider.html}
 */
export type BedrockAgentCoreOAuth2CredentialProviderProperties = {
  /**
   * The vendor of the OAuth2 credential provider
   */
  CredentialProviderVendor:
    | "GoogleOauth2"
    | "GithubOauth2"
    | "SlackOauth2"
    | "SalesforceOauth2"
    | "MicrosoftOauth2"
    | "CustomOauth2"
    | "AtlassianOauth2"
    | "LinkedinOauth2"
    | "XOauth2"
    | "OktaOauth2"
    | "OneLoginOauth2"
    | "PingOneOauth2"
    | "FacebookOauth2"
    | "YandexOauth2"
    | "RedditOauth2"
    | "ZoomOauth2"
    | "TwitchOauth2"
    | "SpotifyOauth2"
    | "DropboxOauth2"
    | "NotionOauth2"
    | "HubspotOauth2"
    | "CyberArkOauth2"
    | "FusionAuthOauth2"
    | "Auth0Oauth2"
    | "CognitoOauth2";
  /**
   * The name of the OAuth2 credential provider
   * @minLength `1`
   * @maxLength `128`
   * @pattern `^[a-zA-Z0-9\-_]+$`
   */
  Name: string;
  /**
   * The configuration settings for the OAuth2 provider
   */
  Oauth2ProviderConfigInput?: Oauth2ProviderConfigInput;
  /**
   * Tags to assign to the OAuth2 credential provider
   * @maxLength `50`
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::BedrockAgentCore::OAuth2CredentialProvider`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrockagentcore-oauth2credentialprovider.html#aws-resource-bedrockagentcore-oauth2credentialprovider-return-values}
 */
export type BedrockAgentCoreOAuth2CredentialProviderAttributes = {
  /**
   * The callback URL for the OAuth2 authorization flow
   */
  CallbackUrl: string;
  /**
   * The ARN of the client secret in AWS Secrets Manager
   */
  ClientSecretArn: {
    /**
     * The ARN of the secret in AWS Secrets Manager
     * @pattern `^arn:(aws|aws-us-gov):secretsmanager:[A-Za-z0-9-]{1,64}:[0-9]{12}:secret:[a-zA-Z0-9-_/+=.@!]+$`
     */
    SecretArn: string;
  };
  /**
   * The timestamp when the credential provider was created
   */
  CreatedTime: string;
  /**
   * The Amazon Resource Name (ARN) of the OAuth2 credential provider
   * @pattern `^arn:(aws|aws-us-gov):bedrock-agentcore:[A-Za-z0-9-]{1,64}:[0-9]{12}:token-vault/[a-zA-Z0-9-.]+/oauth2credentialprovider/[a-zA-Z0-9-]+$`
   */
  CredentialProviderArn: string;
  /**
   * The timestamp when the credential provider was last updated
   */
  LastUpdatedTime: string;
  /**
   * The output configuration for the OAuth2 provider
   */
  Oauth2ProviderConfigOutput: {
    /**
     * @minLength `1`
     * @maxLength `256`
     */
    ClientId: string;
    /**
     * Discovery information for an OAuth2 provider
     */
    OauthDiscovery: {
      /**
       * Authorization server metadata for the OAuth2 provider
       */
      AuthorizationServerMetadata: {
        /**
         * The authorization endpoint URL
         */
        AuthorizationEndpoint: string;
        /**
         * The issuer URL for the OAuth2 authorization server
         */
        Issuer: string;
        /**
         * The supported response types
         */
        ResponseTypes: string[];
        /**
         * The token endpoint URL
         */
        TokenEndpoint: string;
      };
      /**
       * The discovery URL for the OAuth2 provider
       * @pattern `^.+/\.well-known/openid-configuration$`
       */
      DiscoveryUrl: string;
    };
  };
};
/**
 * Type definition for `AWS::BedrockAgentCore::OAuth2CredentialProvider.AtlassianOauth2ProviderConfigInput`.
 * Input configuration for an Atlassian OAuth2 provider
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrockagentcore-oauth2credentialprovider-atlassianoauth2providerconfiginput.html}
 */
export type AtlassianOauth2ProviderConfigInput = {
  /**
   * @minLength `1`
   * @maxLength `256`
   */
  ClientId: string;
  /**
   * @minLength `1`
   * @maxLength `2048`
   */
  ClientSecret: string;
};
/**
 * Type definition for `AWS::BedrockAgentCore::OAuth2CredentialProvider.ClientSecretArn`.
 * Contains information about a secret in AWS Secrets Manager
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrockagentcore-oauth2credentialprovider-clientsecretarn.html}
 */
export type ClientSecretArn = {
  /**
   * The ARN of the secret in AWS Secrets Manager
   * @pattern `^arn:(aws|aws-us-gov):secretsmanager:[A-Za-z0-9-]{1,64}:[0-9]{12}:secret:[a-zA-Z0-9-_/+=.@!]+$`
   */
  SecretArn: string;
};
/**
 * Type definition for `AWS::BedrockAgentCore::OAuth2CredentialProvider.CustomOauth2ProviderConfigInput`.
 * Input configuration for a custom OAuth2 provider
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrockagentcore-oauth2credentialprovider-customoauth2providerconfiginput.html}
 */
export type CustomOauth2ProviderConfigInput = {
  /**
   * The client ID for the custom OAuth2 provider
   * @minLength `1`
   * @maxLength `256`
   */
  ClientId: string;
  /**
   * The client secret for the custom OAuth2 provider
   * @minLength `1`
   * @maxLength `2048`
   */
  ClientSecret: string;
  /**
   * Discovery information for an OAuth2 provider
   */
  OauthDiscovery: Oauth2Discovery;
};
/**
 * Type definition for `AWS::BedrockAgentCore::OAuth2CredentialProvider.GithubOauth2ProviderConfigInput`.
 * Input configuration for a GitHub OAuth2 provider
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrockagentcore-oauth2credentialprovider-githuboauth2providerconfiginput.html}
 */
export type GithubOauth2ProviderConfigInput = {
  /**
   * @minLength `1`
   * @maxLength `256`
   */
  ClientId: string;
  /**
   * @minLength `1`
   * @maxLength `2048`
   */
  ClientSecret: string;
};
/**
 * Type definition for `AWS::BedrockAgentCore::OAuth2CredentialProvider.GoogleOauth2ProviderConfigInput`.
 * Input configuration for a Google OAuth2 provider
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrockagentcore-oauth2credentialprovider-googleoauth2providerconfiginput.html}
 */
export type GoogleOauth2ProviderConfigInput = {
  /**
   * @minLength `1`
   * @maxLength `256`
   */
  ClientId: string;
  /**
   * @minLength `1`
   * @maxLength `2048`
   */
  ClientSecret: string;
};
/**
 * Type definition for `AWS::BedrockAgentCore::OAuth2CredentialProvider.IncludedOauth2ProviderConfigInput`.
 * Input configuration for a supported non-custom OAuth2 provider
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrockagentcore-oauth2credentialprovider-includedoauth2providerconfiginput.html}
 */
export type IncludedOauth2ProviderConfigInput = {
  /**
   * OAuth2 authorization endpoint for your isolated OAuth2 application tenant
   */
  AuthorizationEndpoint?: string;
  /**
   * @minLength `1`
   * @maxLength `256`
   */
  ClientId: string;
  /**
   * @minLength `1`
   * @maxLength `2048`
   */
  ClientSecret: string;
  /**
   * Token issuer of your isolated OAuth2 application tenant
   */
  Issuer?: string;
  /**
   * OAuth2 token endpoint for your isolated OAuth2 application tenant
   */
  TokenEndpoint?: string;
};
/**
 * Type definition for `AWS::BedrockAgentCore::OAuth2CredentialProvider.LinkedinOauth2ProviderConfigInput`.
 * Input configuration for a LinkedIn OAuth2 provider
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrockagentcore-oauth2credentialprovider-linkedinoauth2providerconfiginput.html}
 */
export type LinkedinOauth2ProviderConfigInput = {
  /**
   * @minLength `1`
   * @maxLength `256`
   */
  ClientId: string;
  /**
   * @minLength `1`
   * @maxLength `2048`
   */
  ClientSecret: string;
};
/**
 * Type definition for `AWS::BedrockAgentCore::OAuth2CredentialProvider.MicrosoftOauth2ProviderConfigInput`.
 * Input configuration for a Microsoft OAuth2 provider
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrockagentcore-oauth2credentialprovider-microsoftoauth2providerconfiginput.html}
 */
export type MicrosoftOauth2ProviderConfigInput = {
  /**
   * @minLength `1`
   * @maxLength `256`
   */
  ClientId: string;
  /**
   * @minLength `1`
   * @maxLength `2048`
   */
  ClientSecret: string;
  /**
   * The Microsoft Entra ID tenant ID
   * @minLength `1`
   * @maxLength `2048`
   */
  TenantId?: string;
};
/**
 * Type definition for `AWS::BedrockAgentCore::OAuth2CredentialProvider.Oauth2AuthorizationServerMetadata`.
 * Authorization server metadata for the OAuth2 provider
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrockagentcore-oauth2credentialprovider-oauth2authorizationservermetadata.html}
 */
export type Oauth2AuthorizationServerMetadata = {
  /**
   * The authorization endpoint URL
   */
  AuthorizationEndpoint: string;
  /**
   * The issuer URL for the OAuth2 authorization server
   */
  Issuer: string;
  /**
   * The supported response types
   */
  ResponseTypes?: string[];
  /**
   * The token endpoint URL
   */
  TokenEndpoint: string;
};
/**
 * Type definition for `AWS::BedrockAgentCore::OAuth2CredentialProvider.Oauth2Discovery`.
 * Discovery information for an OAuth2 provider
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrockagentcore-oauth2credentialprovider-oauth2discovery.html}
 */
export type Oauth2Discovery = {
  /**
   * Authorization server metadata for the OAuth2 provider
   */
  AuthorizationServerMetadata?: Oauth2AuthorizationServerMetadata;
  /**
   * The discovery URL for the OAuth2 provider
   * @pattern `^.+/\.well-known/openid-configuration$`
   */
  DiscoveryUrl?: string;
};
/**
 * Type definition for `AWS::BedrockAgentCore::OAuth2CredentialProvider.Oauth2ProviderConfigInput`.
 * Input configuration for an OAuth2 provider
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrockagentcore-oauth2credentialprovider-oauth2providerconfiginput.html}
 */
export type Oauth2ProviderConfigInput = {
  /**
   * Input configuration for an Atlassian OAuth2 provider
   */
  AtlassianOauth2ProviderConfig?: AtlassianOauth2ProviderConfigInput;
  /**
   * Input configuration for a custom OAuth2 provider
   */
  CustomOauth2ProviderConfig?: CustomOauth2ProviderConfigInput;
  /**
   * Input configuration for a GitHub OAuth2 provider
   */
  GithubOauth2ProviderConfig?: GithubOauth2ProviderConfigInput;
  /**
   * Input configuration for a Google OAuth2 provider
   */
  GoogleOauth2ProviderConfig?: GoogleOauth2ProviderConfigInput;
  /**
   * Input configuration for a supported non-custom OAuth2 provider
   */
  IncludedOauth2ProviderConfig?: IncludedOauth2ProviderConfigInput;
  /**
   * Input configuration for a LinkedIn OAuth2 provider
   */
  LinkedinOauth2ProviderConfig?: LinkedinOauth2ProviderConfigInput;
  /**
   * Input configuration for a Microsoft OAuth2 provider
   */
  MicrosoftOauth2ProviderConfig?: MicrosoftOauth2ProviderConfigInput;
  /**
   * Input configuration for a Salesforce OAuth2 provider
   */
  SalesforceOauth2ProviderConfig?: SalesforceOauth2ProviderConfigInput;
  /**
   * Input configuration for a Slack OAuth2 provider
   */
  SlackOauth2ProviderConfig?: SlackOauth2ProviderConfigInput;
};
/**
 * Type definition for `AWS::BedrockAgentCore::OAuth2CredentialProvider.Oauth2ProviderConfigOutput`.
 * Output configuration for an OAuth2 provider
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrockagentcore-oauth2credentialprovider-oauth2providerconfigoutput.html}
 */
export type Oauth2ProviderConfigOutput = {
  /**
   * @minLength `1`
   * @maxLength `256`
   */
  ClientId?: string;
  /**
   * Discovery information for an OAuth2 provider
   */
  OauthDiscovery?: Oauth2Discovery;
};
/**
 * Type definition for `AWS::BedrockAgentCore::OAuth2CredentialProvider.SalesforceOauth2ProviderConfigInput`.
 * Input configuration for a Salesforce OAuth2 provider
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrockagentcore-oauth2credentialprovider-salesforceoauth2providerconfiginput.html}
 */
export type SalesforceOauth2ProviderConfigInput = {
  /**
   * @minLength `1`
   * @maxLength `256`
   */
  ClientId: string;
  /**
   * @minLength `1`
   * @maxLength `2048`
   */
  ClientSecret: string;
};
/**
 * Type definition for `AWS::BedrockAgentCore::OAuth2CredentialProvider.SlackOauth2ProviderConfigInput`.
 * Input configuration for a Slack OAuth2 provider
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrockagentcore-oauth2credentialprovider-slackoauth2providerconfiginput.html}
 */
export type SlackOauth2ProviderConfigInput = {
  /**
   * @minLength `1`
   * @maxLength `256`
   */
  ClientId: string;
  /**
   * @minLength `1`
   * @maxLength `2048`
   */
  ClientSecret: string;
};
/**
 * Type definition for `AWS::BedrockAgentCore::OAuth2CredentialProvider.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrockagentcore-oauth2credentialprovider-tag.html}
 */
export type Tag = {
  /**
   * @minLength `1`
   * @maxLength `128`
   * @pattern `^[a-zA-Z0-9\s._:/=+@-]*$`
   */
  Key: string;
  /**
   * @minLength `0`
   * @maxLength `256`
   * @pattern `^[a-zA-Z0-9\s._:/=+@-]*$`
   */
  Value: string;
};
/**
 * Resource Type definition for AWS::BedrockAgentCore::OAuth2CredentialProvider
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrockagentcore-oauth2credentialprovider.html}
 */
export class BedrockAgentCoreOAuth2CredentialProvider extends $Resource<
  "AWS::BedrockAgentCore::OAuth2CredentialProvider",
  BedrockAgentCoreOAuth2CredentialProviderProperties,
  BedrockAgentCoreOAuth2CredentialProviderAttributes
> {
  public static readonly Type =
    "AWS::BedrockAgentCore::OAuth2CredentialProvider";
  constructor(
    logicalId: string,
    properties: BedrockAgentCoreOAuth2CredentialProviderProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      BedrockAgentCoreOAuth2CredentialProvider.Type,
      properties,
      options,
    );
  }
}
