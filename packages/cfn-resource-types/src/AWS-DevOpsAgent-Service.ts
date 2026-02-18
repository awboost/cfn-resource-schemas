import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * The AWS::DevOpsAgent::Service resource registers external services (like Dynatrace, MCP servers, GitLab) for integration with DevOpsAgent.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-devopsagent-service.html}
 */
export type DevOpsAgentServiceProperties = {
  /**
   * Service-specific configuration details for create operation
   */
  ServiceDetails?: ServiceDetails;
  /**
   * The type of service being registered
   */
  ServiceType: ServiceType;
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
   * @pattern `^[a-zA-Z0-9+/=._-]+$`
   */
  ApiKeyValue: string;
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
 * Service-specific configuration details
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
  | "servicenow";
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
