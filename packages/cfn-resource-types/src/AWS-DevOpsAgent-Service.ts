import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * The AWS::DevOpsAgent::Service resource registers external services (like Dynatrace, MCP servers, GitLab) for integration with DevOpsAgent.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-devopsagent-service.html}
 */
export type DevOpsAgentServiceProperties = {
  /**
   * The ARN of the KMS key to use for encryption.
   * @minLength `1`
   * @maxLength `2048`
   */
  KmsKeyArn?: string;
  /**
   * Service-specific configuration details for create operation
   */
  ServiceDetails?: ServiceDetails;
  /**
   * The type of service being registered
   */
  ServiceType: ServiceType;
  /**
   * An array of key-value pairs to apply to this resource.
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::DevOpsAgent::Service`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-devopsagent-service.html#aws-resource-devopsagent-service-return-values}
 */
export type DevOpsAgentServiceAttributes = {
  /**
   * List of accessible resources for this service
   */
  AccessibleResources: Record<string, any>[];
  /**
   * Additional details specific to the service type
   */
  AdditionalServiceDetails: AdditionalServiceDetails;
  /**
   * The Amazon Resource Name (ARN) of the Service.
   */
  Arn: string;
  /**
   * The unique identifier of the service
   * @minLength `1`
   * @maxLength `255`
   */
  ServiceId: string;
};
/**
 * Type definition for `AWS::DevOpsAgent::Service.AdditionalServiceDetails`.
 * Additional details specific to the service type returned after registration
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-devopsagent-service-additionalservicedetails.html}
 */
export type AdditionalServiceDetails =
  | {
      /**
       * MCP server details returned after registration
       */
      MCPServer: RegisteredMCPServerDetails;
    }
  | {
      /**
       * GitLab service details returned after registration
       */
      GitLab: RegisteredGitLabServiceDetails;
    }
  | {
      /**
       * MCP server details returned after registration
       */
      MCPServerSplunk: RegisteredMCPServerDetails;
    }
  | {
      /**
       * New Relic service details returned after registration
       */
      MCPServerNewRelic: RegisteredNewRelicDetails;
    }
  | {
      /**
       * Dynatrace service details returned after registration
       */
      Dynatrace: RegisteredDynatraceDetails;
    }
  | {
      /**
       * ServiceNow service details returned after registration
       */
      ServiceNow: RegisteredServiceNowDetails;
    }
  | {
      /**
       * PagerDuty service details returned after registration
       */
      PagerDuty: RegisteredPagerDutyDetails;
    }
  | {
      /**
       * Azure Identity service details returned after registration
       */
      AzureIdentity: RegisteredAzureIdentityDetails;
    }
  | {
      /**
       * SigV4-authenticated MCP server details returned after registration
       */
      MCPServerSigV4: RegisteredMCPServerSigV4Details;
    };
/**
 * Type definition for `AWS::DevOpsAgent::Service.ApiKeyDetails`.
 * API key authentication details
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-devopsagent-service-apikeydetails.html}
 */
export type ApiKeyDetails = {
  /**
   * HTTP header name to send the API key
   * @pattern `^[a-zA-Z0-9-]+$`
   */
  ApiKeyHeader: string;
  /**
   * User friendly API key name
   * @pattern `^[a-zA-Z0-9_\s-]+$`
   */
  ApiKeyName: string;
  /**
   * API key value
   * @pattern `^[!-~]([ \t]*[!-~])*$`
   */
  ApiKeyValue: string;
};
/**
 * Type definition for `AWS::DevOpsAgent::Service.AzureIdentityServiceDetails`.
 * Azure Identity service configuration for federated identity
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-devopsagent-service-azureidentityservicedetails.html}
 */
export type AzureIdentityServiceDetails = {
  /**
   * Azure AD application client ID
   * @pattern `^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$`
   */
  ClientId: string;
  /**
   * Azure AD tenant ID
   * @pattern `^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$`
   */
  TenantId: string;
  /**
   * ARN of the IAM role for web identity token exchange
   * @pattern `^arn:aws[a-zA-Z-]*:iam::[0-9]{12}:role/.+$`
   */
  WebIdentityRoleArn: string;
  /**
   * List of audiences for the web identity token
   * @minLength `1`
   */
  WebIdentityTokenAudiences: string[];
};
/**
 * Type definition for `AWS::DevOpsAgent::Service.BearerTokenDetails`.
 * Bearer token authentication details
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-devopsagent-service-bearertokendetails.html}
 */
export type BearerTokenDetails = {
  /**
   * HTTP header name to send the bearer token
   * @pattern `^[a-zA-Z0-9-]+$`
   */
  AuthorizationHeader?: string;
  /**
   * User friendly bearer token name
   * @pattern `^[a-zA-Z0-9_\s-]+$`
   */
  TokenName: string;
  /**
   * Bearer token value
   * @pattern `^[\S]+$`
   */
  TokenValue: string;
};
/**
 * Type definition for `AWS::DevOpsAgent::Service.DynatraceAuthorizationConfig`.
 * Dynatrace OAuth authorization configuration
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-devopsagent-service-dynatraceauthorizationconfig.html}
 */
export type DynatraceAuthorizationConfig = {
  /**
   * OAuth client credentials
   */
  OAuthClientCredentials?: OAuthClientDetails;
};
/**
 * Type definition for `AWS::DevOpsAgent::Service.DynatraceServiceDetails`.
 * Dynatrace service configuration
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-devopsagent-service-dynatraceservicedetails.html}
 */
export type DynatraceServiceDetails = {
  /**
   * Dynatrace resource account URN
   */
  AccountUrn: string;
  /**
   * Dynatrace OAuth authorization configuration
   */
  AuthorizationConfig?: DynatraceAuthorizationConfig;
};
/**
 * Type definition for `AWS::DevOpsAgent::Service.GitLabDetails`.
 * GitLab service configuration
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-devopsagent-service-gitlabdetails.html}
 */
export type GitLabDetails = {
  /**
   * Optional GitLab group ID for group-level access tokens
   */
  GroupId?: string;
  /**
   * GitLab instance URL
   * @pattern `^https://[a-zA-Z0-9]([a-zA-Z0-9.-]*[a-zA-Z0-9])?(?::[0-9]{1,5})?/?$`
   */
  TargetUrl: string;
  /**
   * Type of GitLab access token
   */
  TokenType: "personal" | "group";
  /**
   * GitLab access token value
   * @pattern `^glpat-[a-zA-Z0-9._-]+$`
   */
  TokenValue: string;
};
/**
 * Type definition for `AWS::DevOpsAgent::Service.MCPServerAuthorizationConfig`.
 * MCP server authorization configuration
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-devopsagent-service-mcpserverauthorizationconfig.html}
 */
export type MCPServerAuthorizationConfig =
  | {
      /**
       * MCP server OAuth client credentials configuration
       */
      OAuthClientCredentials: MCPServerOAuthClientCredentialsConfig;
    }
  | {
      /**
       * API key authentication details
       */
      ApiKey: ApiKeyDetails;
    };
/**
 * Type definition for `AWS::DevOpsAgent::Service.MCPServerDetails`.
 * MCP server configuration
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-devopsagent-service-mcpserverdetails.html}
 */
export type MCPServerDetails = {
  /**
   * MCP server authorization configuration
   */
  AuthorizationConfig: MCPServerAuthorizationConfig;
  /**
   * Optional description for the MCP server
   * @maxLength `500`
   */
  Description?: string;
  /**
   * MCP server endpoint URL
   * @pattern `^https://[a-zA-Z0-9.-]+(?::[0-9]+)?(?:/.*)?$`
   */
  Endpoint: string;
  /**
   * MCP server name
   * @pattern `^[a-zA-Z0-9_-]+$`
   */
  Name: string;
};
/**
 * Type definition for `AWS::DevOpsAgent::Service.MCPServerOAuthClientCredentialsConfig`.
 * MCP server OAuth client credentials configuration
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-devopsagent-service-mcpserveroauthclientcredentialsconfig.html}
 */
export type MCPServerOAuthClientCredentialsConfig = {
  /**
   * OAuth client ID
   */
  ClientId: string;
  /**
   * User friendly OAuth client name
   */
  ClientName?: string;
  /**
   * OAuth client secret
   */
  ClientSecret: string;
  /**
   * OAuth token exchange parameters
   */
  ExchangeParameters?: Record<string, any>;
  /**
   * OAuth token exchange URL
   * @pattern `^https://[a-zA-Z0-9.-]+(?::[0-9]+)?(?:/.*)?$`
   */
  ExchangeUrl: string;
  /**
   * OAuth scopes
   */
  Scopes?: string[];
};
/**
 * Type definition for `AWS::DevOpsAgent::Service.MCPServerSigV4AuthorizationConfig`.
 * SigV4 authorization configuration for MCP server
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-devopsagent-service-mcpserversigv4authorizationconfig.html}
 */
export type MCPServerSigV4AuthorizationConfig = {
  /**
   * Custom headers for the SigV4 MCP server
   */
  CustomHeaders?: Record<string, string>;
  /**
   * AWS region for SigV4 signing. Use '*' for SigV4a multi-region signing.
   * @pattern `^(\*|[a-z]{2,4}(-[a-z]+)+-\d+)$`
   */
  Region: string;
  /**
   * IAM role ARN to assume for SigV4 signing
   * @pattern `^arn:aws:iam::\d{12}:role/[a-zA-Z0-9+=,.@_/-]+$`
   */
  RoleArn: string;
  /**
   * AWS service name for SigV4 signing
   * @minLength `1`
   * @maxLength `100`
   */
  Service: string;
};
/**
 * Type definition for `AWS::DevOpsAgent::Service.MCPServerSigV4Details`.
 * SigV4-authenticated MCP server configuration
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-devopsagent-service-mcpserversigv4details.html}
 */
export type MCPServerSigV4Details = {
  /**
   * SigV4 authorization configuration for MCP server
   */
  AuthorizationConfig: MCPServerSigV4AuthorizationConfig;
  /**
   * Optional description for the MCP server
   * @maxLength `500`
   */
  Description?: string;
  /**
   * MCP server endpoint URL
   * @pattern `^https://[a-zA-Z0-9.-]+(?::[0-9]+)?(?:/.*)?$`
   */
  Endpoint: string;
  /**
   * MCP server name
   * @pattern `^[a-zA-Z0-9_-]+$`
   */
  Name: string;
};
/**
 * Type definition for `AWS::DevOpsAgent::Service.MCPServerSplunkAuthorizationConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-devopsagent-service-mcpserversplunkauthorizationconfig.html}
 */
export type MCPServerSplunkAuthorizationConfig = {
  /**
   * Bearer token authentication details
   */
  BearerToken: BearerTokenDetails;
};
/**
 * Type definition for `AWS::DevOpsAgent::Service.MCPServerSplunkDetails`.
 * Splunk MCP server configuration
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-devopsagent-service-mcpserversplunkdetails.html}
 */
export type MCPServerSplunkDetails = {
  AuthorizationConfig: MCPServerSplunkAuthorizationConfig;
  /**
   * Optional description for the MCP server
   * @maxLength `500`
   */
  Description?: string;
  /**
   * MCP server endpoint URL
   * @pattern `^https://[a-zA-Z0-9.-]+(?::[0-9]+)?(?:/.*)?$`
   */
  Endpoint: string;
  /**
   * MCP server name
   * @pattern `^[a-zA-Z0-9_-]+$`
   */
  Name: string;
};
/**
 * Type definition for `AWS::DevOpsAgent::Service.NewRelicApiKeyConfig`.
 * New Relic API key configuration
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-devopsagent-service-newrelicapikeyconfig.html}
 */
export type NewRelicApiKeyConfig = {
  /**
   * New Relic Account ID
   * @pattern `^[0-9]+$`
   */
  AccountId: string;
  /**
   * List of alert policy IDs
   */
  AlertPolicyIds?: string[];
  /**
   * New Relic User API Key
   * @pattern `^NRAK-[A-Z0-9]+$`
   */
  ApiKey: string;
  /**
   * List of monitored APM application IDs
   */
  ApplicationIds?: string[];
  /**
   * List of globally unique IDs for New Relic resources
   */
  EntityGuids?: string[];
  /**
   * New Relic region
   */
  Region: "US" | "EU";
};
/**
 * Type definition for `AWS::DevOpsAgent::Service.NewRelicAuthorizationConfig`.
 * New Relic authorization configuration
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-devopsagent-service-newrelicauthorizationconfig.html}
 */
export type NewRelicAuthorizationConfig = {
  /**
   * New Relic API key configuration
   */
  ApiKey: NewRelicApiKeyConfig;
};
/**
 * Type definition for `AWS::DevOpsAgent::Service.NewRelicServiceDetails`.
 * New Relic service configuration
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-devopsagent-service-newrelicservicedetails.html}
 */
export type NewRelicServiceDetails = {
  /**
   * New Relic authorization configuration
   */
  AuthorizationConfig: NewRelicAuthorizationConfig;
};
/**
 * Type definition for `AWS::DevOpsAgent::Service.OAuthClientDetails`.
 * OAuth client credentials
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-devopsagent-service-oauthclientdetails.html}
 */
export type OAuthClientDetails = {
  /**
   * OAuth client ID
   */
  ClientId: string;
  /**
   * User friendly OAuth client name
   */
  ClientName?: string;
  /**
   * OAuth client secret
   */
  ClientSecret: string;
  /**
   * OAuth token exchange parameters
   */
  ExchangeParameters?: Record<string, any>;
};
/**
 * Type definition for `AWS::DevOpsAgent::Service.PagerDutyAuthorizationConfig`.
 * PagerDuty OAuth authorization configuration
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-devopsagent-service-pagerdutyauthorizationconfig.html}
 */
export type PagerDutyAuthorizationConfig = {
  /**
   * OAuth client credentials
   */
  OAuthClientCredentials?: OAuthClientDetails;
};
/**
 * Type definition for `AWS::DevOpsAgent::Service.PagerDutyDetails`.
 * PagerDuty service configuration
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-devopsagent-service-pagerdutydetails.html}
 */
export type PagerDutyDetails = {
  /**
   * PagerDuty OAuth authorization configuration
   */
  AuthorizationConfig: PagerDutyAuthorizationConfig;
  /**
   * PagerDuty scopes
   */
  Scopes: string[];
};
/**
 * Type definition for `AWS::DevOpsAgent::Service.RegisteredAzureIdentityDetails`.
 * Azure Identity service details returned after registration
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-devopsagent-service-registeredazureidentitydetails.html}
 */
export type RegisteredAzureIdentityDetails = {
  /**
   * Azure AD application client ID
   * @pattern `^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$`
   */
  ClientId: string;
  /**
   * Azure AD tenant ID
   * @pattern `^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$`
   */
  TenantId: string;
  /**
   * ARN of the IAM role for web identity token exchange
   * @pattern `^arn:aws[a-zA-Z-]*:iam::[0-9]{12}:role/.+$`
   */
  WebIdentityRoleArn: string;
  /**
   * List of audiences for the web identity token
   */
  WebIdentityTokenAudiences: string[];
};
/**
 * Type definition for `AWS::DevOpsAgent::Service.RegisteredDynatraceDetails`.
 * Dynatrace service details returned after registration
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-devopsagent-service-registereddynatracedetails.html}
 */
export type RegisteredDynatraceDetails = {
  /**
   * Dynatrace resource account URN
   */
  AccountUrn: string;
};
/**
 * Type definition for `AWS::DevOpsAgent::Service.RegisteredGitLabServiceDetails`.
 * GitLab service details returned after registration
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-devopsagent-service-registeredgitlabservicedetails.html}
 */
export type RegisteredGitLabServiceDetails = {
  /**
   * Optional GitLab group ID for group-level access tokens
   */
  GroupId?: string;
  /**
   * GitLab instance URL
   */
  TargetUrl: string;
  /**
   * Type of GitLab access token
   */
  TokenType: "personal" | "group";
};
/**
 * Type definition for `AWS::DevOpsAgent::Service.RegisteredMCPServerDetails`.
 * MCP server details returned after registration
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-devopsagent-service-registeredmcpserverdetails.html}
 */
export type RegisteredMCPServerDetails = {
  /**
   * API key header name if using API key authentication
   */
  ApiKeyHeader?: string;
  /**
   * MCP server authorization method
   */
  AuthorizationMethod: "oauth-client-credentials" | "api-key" | "bearer-token";
  /**
   * Optional description for the MCP server
   */
  Description?: string;
  /**
   * MCP server endpoint URL
   */
  Endpoint: string;
  /**
   * MCP server name
   */
  Name: string;
};
/**
 * Type definition for `AWS::DevOpsAgent::Service.RegisteredMCPServerSigV4Details`.
 * SigV4-authenticated MCP server details returned after registration
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-devopsagent-service-registeredmcpserversigv4details.html}
 */
export type RegisteredMCPServerSigV4Details = {
  /**
   * Custom headers for the SigV4 MCP server
   */
  CustomHeaders?: Record<string, string>;
  /**
   * Optional description for the MCP server
   */
  Description?: string;
  /**
   * The MCP server endpoint URL
   */
  Endpoint: string;
  /**
   * The MCP server name
   */
  Name: string;
  /**
   * AWS region for SigV4 signing
   */
  Region: string;
  /**
   * IAM role ARN for SigV4 signing
   */
  RoleArn: string;
  /**
   * AWS service name for SigV4 signing
   */
  Service: string;
};
/**
 * Type definition for `AWS::DevOpsAgent::Service.RegisteredNewRelicDetails`.
 * New Relic service details returned after registration
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-devopsagent-service-registerednewrelicdetails.html}
 */
export type RegisteredNewRelicDetails = {
  /**
   * New Relic account ID
   */
  AccountId: string;
  /**
   * Optional user description
   */
  Description?: string;
  /**
   * New Relic region
   */
  Region: "US" | "EU";
};
/**
 * Type definition for `AWS::DevOpsAgent::Service.RegisteredPagerDutyDetails`.
 * PagerDuty service details returned after registration
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-devopsagent-service-registeredpagerdutydetails.html}
 */
export type RegisteredPagerDutyDetails = {
  /**
   * The scopes assigned to the service
   */
  Scopes: string[];
};
/**
 * Type definition for `AWS::DevOpsAgent::Service.RegisteredServiceNowDetails`.
 * ServiceNow service details returned after registration
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-devopsagent-service-registeredservicenowdetails.html}
 */
export type RegisteredServiceNowDetails = {
  /**
   * ServiceNow instance URL
   */
  InstanceUrl: string;
};
/**
 * Type definition for `AWS::DevOpsAgent::Service.ServiceDetails`.
 * Service-specific configuration details - only MCPServerSigV4 supports in-place updates, all other service types require replacement when modified
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-devopsagent-service-servicedetails.html}
 */
export type ServiceDetails =
  | {
      /**
       * Dynatrace service configuration
       */
      Dynatrace: DynatraceServiceDetails;
    }
  | {
      /**
       * MCP server configuration
       */
      MCPServer: MCPServerDetails;
    }
  | {
      /**
       * Splunk MCP server configuration
       */
      MCPServerSplunk: MCPServerSplunkDetails;
    }
  | {
      /**
       * New Relic service configuration
       */
      MCPServerNewRelic: NewRelicServiceDetails;
    }
  | {
      /**
       * GitLab service configuration
       */
      GitLab: GitLabDetails;
    }
  | {
      /**
       * ServiceNow service configuration
       */
      ServiceNow: ServiceNowServiceDetails;
    }
  | {
      /**
       * PagerDuty service configuration
       */
      PagerDuty: PagerDutyDetails;
    }
  | {
      /**
       * Azure Identity service configuration for federated identity
       */
      AzureIdentity: AzureIdentityServiceDetails;
    }
  | {
      /**
       * SigV4-authenticated MCP server configuration
       */
      MCPServerSigV4: MCPServerSigV4Details;
    };
/**
 * Type definition for `AWS::DevOpsAgent::Service.ServiceNowAuthorizationConfig`.
 * ServiceNow OAuth authorization configuration
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-devopsagent-service-servicenowauthorizationconfig.html}
 */
export type ServiceNowAuthorizationConfig = {
  /**
   * OAuth client credentials
   */
  OAuthClientCredentials?: OAuthClientDetails;
};
/**
 * Type definition for `AWS::DevOpsAgent::Service.ServiceNowServiceDetails`.
 * ServiceNow service configuration
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-devopsagent-service-servicenowservicedetails.html}
 */
export type ServiceNowServiceDetails = {
  /**
   * ServiceNow OAuth authorization configuration
   */
  AuthorizationConfig?: ServiceNowAuthorizationConfig;
  /**
   * ServiceNow instance URL
   * @pattern `^https://[a-zA-Z0-9-]+\.service-now\.com/?$`
   */
  InstanceUrl: string;
};
/**
 * Type definition for `AWS::DevOpsAgent::Service.ServiceType`.
 * The type of service being registered
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-devopsagent-service-servicetype.html}
 */
export type ServiceType =
  | "dynatrace"
  | "mcpserver"
  | "mcpserversplunk"
  | "mcpservernewrelic"
  | "gitlab"
  | "servicenow"
  | "pagerduty"
  | "azureidentity"
  | "mcpserversigv4";
/**
 * Type definition for `AWS::DevOpsAgent::Service.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-devopsagent-service-tag.html}
 */
export type Tag = {
  /**
   * The key name of the tag.
   * @minLength `1`
   * @maxLength `128`
   */
  Key: string;
  /**
   * The value for the tag.
   * @minLength `0`
   * @maxLength `256`
   */
  Value: string;
};
/**
 * The AWS::DevOpsAgent::Service resource registers external services (like Dynatrace, MCP servers, GitLab) for integration with DevOpsAgent.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-devopsagent-service.html}
 */
export class DevOpsAgentService extends $Resource<
  "AWS::DevOpsAgent::Service",
  DevOpsAgentServiceProperties,
  DevOpsAgentServiceAttributes
> {
  public static readonly Type = "AWS::DevOpsAgent::Service";
  constructor(
    logicalId: string,
    properties: DevOpsAgentServiceProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, DevOpsAgentService.Type, properties, options);
  }
}
