import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::BedrockAgentCore::GatewayTarget
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrockagentcore-gatewaytarget.html}
 */
export type BedrockAgentCoreGatewayTargetProperties = {
  /**
   * @minLength `1`
   * @maxLength `1`
   */
  CredentialProviderConfigurations?: CredentialProviderConfiguration[];
  /**
   * @minLength `1`
   * @maxLength `200`
   */
  Description?: string;
  /**
   * @pattern `^([0-9a-z][-]?){1,100}-[0-9a-z]{10}$`
   */
  GatewayIdentifier?: string;
  MetadataConfiguration?: MetadataConfiguration;
  /**
   * @pattern `^([0-9a-zA-Z][-]?){1,100}$`
   */
  Name?: string;
  PrivateEndpoint?: PrivateEndpoint;
  TargetConfiguration: TargetConfiguration;
};
/**
 * Attribute type definition for `AWS::BedrockAgentCore::GatewayTarget`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrockagentcore-gatewaytarget.html#aws-resource-bedrockagentcore-gatewaytarget-return-values}
 */
export type BedrockAgentCoreGatewayTargetAttributes = {
  AuthorizationData: {
    Oauth2: {
      /**
       * @minLength `1`
       */
      AuthorizationUrl: string;
      /**
       * @minLength `1`
       * @maxLength `128`
       */
      UserId: string;
    };
  };
  CreatedAt: string;
  /**
   * @pattern `^arn:aws(|-cn|-us-gov):bedrock-agentcore:[a-z0-9-]{1,20}:[0-9]{12}:gateway/([0-9a-z][-]?){1,100}-[a-z0-9]{10}$`
   */
  GatewayArn: string;
  LastSynchronizedAt: string;
  PrivateEndpointManagedResources: {
    Domain: string;
    /**
     * @pattern `^(arn:[a-z0-9\-]+:vpc-lattice:[a-zA-Z0-9\-]+:\d{12}:servicenetworkresourceassociation/)?snra-[0-9a-f]{17}$`
     */
    ResourceAssociationArn: string;
    /**
     * @pattern `^arn:[a-z0-9\-]+:vpc-lattice:[a-zA-Z0-9\-]+:\d{12}:resourcegateway/rgw-[0-9a-z]{17}$`
     */
    ResourceGatewayArn: string;
  }[];
  ProtocolType: TargetProtocolType;
  Status: TargetStatus;
  /**
   * @maxLength `100`
   */
  StatusReasons: string[];
  /**
   * @pattern `^[0-9a-zA-Z]{10}$`
   */
  TargetId: string;
  UpdatedAt: string;
};
/**
 * Type definition for `AWS::BedrockAgentCore::GatewayTarget.ApiGatewayTargetConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrockagentcore-gatewaytarget-apigatewaytargetconfiguration.html}
 */
export type ApiGatewayTargetConfiguration = {
  ApiGatewayToolConfiguration: ApiGatewayToolConfiguration;
  RestApiId: string;
  Stage: string;
};
/**
 * Type definition for `AWS::BedrockAgentCore::GatewayTarget.ApiGatewayToolConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrockagentcore-gatewaytarget-apigatewaytoolconfiguration.html}
 */
export type ApiGatewayToolConfiguration = {
  ToolFilters: ApiGatewayToolFilter[];
  ToolOverrides?: ApiGatewayToolOverride[];
};
/**
 * Type definition for `AWS::BedrockAgentCore::GatewayTarget.ApiGatewayToolFilter`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrockagentcore-gatewaytarget-apigatewaytoolfilter.html}
 */
export type ApiGatewayToolFilter = {
  FilterPath: string;
  Methods: RestApiMethod[];
};
/**
 * Type definition for `AWS::BedrockAgentCore::GatewayTarget.ApiGatewayToolOverride`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrockagentcore-gatewaytarget-apigatewaytooloverride.html}
 */
export type ApiGatewayToolOverride = {
  Description?: string;
  Method: RestApiMethod;
  Name: string;
  Path: string;
};
/**
 * Type definition for `AWS::BedrockAgentCore::GatewayTarget.ApiKeyCredentialLocation`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrockagentcore-gatewaytarget-apikeycredentiallocation.html}
 */
export type ApiKeyCredentialLocation = "HEADER" | "QUERY_PARAMETER";
/**
 * Type definition for `AWS::BedrockAgentCore::GatewayTarget.ApiKeyCredentialProvider`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrockagentcore-gatewaytarget-apikeycredentialprovider.html}
 */
export type ApiKeyCredentialProvider = {
  CredentialLocation?: ApiKeyCredentialLocation;
  /**
   * @minLength `1`
   * @maxLength `64`
   */
  CredentialParameterName?: string;
  /**
   * @minLength `1`
   * @maxLength `64`
   */
  CredentialPrefix?: string;
  /**
   * @pattern `^arn:([^:]*):([^:]*):([^:]*):([0-9]{12})?:(.+)$`
   */
  ProviderArn: string;
};
/**
 * Type definition for `AWS::BedrockAgentCore::GatewayTarget.ApiSchemaConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrockagentcore-gatewaytarget-apischemaconfiguration.html}
 */
export type ApiSchemaConfiguration =
  | {
      S3: S3Configuration;
    }
  | {
      InlinePayload: string;
    };
/**
 * Type definition for `AWS::BedrockAgentCore::GatewayTarget.AuthorizationData`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrockagentcore-gatewaytarget-authorizationdata.html}
 */
export type AuthorizationData = {
  Oauth2: OAuth2AuthorizationData;
};
/**
 * Type definition for `AWS::BedrockAgentCore::GatewayTarget.ConnectorConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrockagentcore-gatewaytarget-connectorconfiguration.html}
 */
export type ConnectorConfiguration = {
  /**
   * @maxLength `2000`
   */
  Description?: string;
  /**
   * @maxLength `64`
   * @pattern `^[a-zA-Z][a-zA-Z0-9_-]*$`
   */
  Name: string;
  ParameterOverrides?: ConnectorParameterOverride[];
  ParameterValues?: Record<string, any>;
};
/**
 * Type definition for `AWS::BedrockAgentCore::GatewayTarget.ConnectorParameterOverride`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrockagentcore-gatewaytarget-connectorparameteroverride.html}
 */
export type ConnectorParameterOverride = {
  Description?: string;
  Path: string;
  Visible?: boolean;
};
/**
 * Type definition for `AWS::BedrockAgentCore::GatewayTarget.ConnectorSource`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrockagentcore-gatewaytarget-connectorsource.html}
 */
export type ConnectorSource = {
  /**
   * @minLength `1`
   * @maxLength `256`
   */
  ConnectorId: string;
};
/**
 * Type definition for `AWS::BedrockAgentCore::GatewayTarget.ConnectorTargetConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrockagentcore-gatewaytarget-connectortargetconfiguration.html}
 */
export type ConnectorTargetConfiguration = {
  Configurations?: ConnectorConfiguration[];
  /**
   * @minLength `1`
   * @maxLength `50`
   */
  Enabled?: string[];
  Source: ConnectorSource;
};
/**
 * Type definition for `AWS::BedrockAgentCore::GatewayTarget.CredentialProvider`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrockagentcore-gatewaytarget-credentialprovider.html}
 */
export type CredentialProvider =
  | {
      OauthCredentialProvider: OAuthCredentialProvider;
    }
  | {
      ApiKeyCredentialProvider: ApiKeyCredentialProvider;
    }
  | {
      IamCredentialProvider: IamCredentialProvider;
    };
/**
 * Type definition for `AWS::BedrockAgentCore::GatewayTarget.CredentialProviderConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrockagentcore-gatewaytarget-credentialproviderconfiguration.html}
 */
export type CredentialProviderConfiguration = {
  CredentialProvider?: CredentialProvider;
  CredentialProviderType: CredentialProviderType;
};
/**
 * Type definition for `AWS::BedrockAgentCore::GatewayTarget.CredentialProviderType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrockagentcore-gatewaytarget-credentialprovidertype.html}
 */
export type CredentialProviderType =
  | "GATEWAY_IAM_ROLE"
  | "OAUTH"
  | "API_KEY"
  | "CALLER_IAM_CREDENTIALS"
  | "JWT_PASSTHROUGH";
/**
 * Type definition for `AWS::BedrockAgentCore::GatewayTarget.EndpointIpAddressType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrockagentcore-gatewaytarget-endpointipaddresstype.html}
 */
export type EndpointIpAddressType = "IPV4" | "IPV6";
/**
 * Type definition for `AWS::BedrockAgentCore::GatewayTarget.HttpApiSchemaConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrockagentcore-gatewaytarget-httpapischemaconfiguration.html}
 */
export type HttpApiSchemaConfiguration = {
  Source: ApiSchemaConfiguration;
};
/**
 * Type definition for `AWS::BedrockAgentCore::GatewayTarget.HttpTargetConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrockagentcore-gatewaytarget-httptargetconfiguration.html}
 */
export type HttpTargetConfiguration =
  | {
      AgentcoreRuntime: RuntimeTargetConfiguration;
    }
  | {
      Passthrough: PassthroughTargetConfiguration;
    };
/**
 * Type definition for `AWS::BedrockAgentCore::GatewayTarget.IamCredentialProvider`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrockagentcore-gatewaytarget-iamcredentialprovider.html}
 */
export type IamCredentialProvider = {
  /**
   * @minLength `1`
   * @maxLength `32`
   * @pattern `^[a-zA-Z0-9-]+$`
   */
  Region?: string;
  /**
   * @minLength `1`
   * @maxLength `64`
   * @pattern `^[a-zA-Z0-9._-]+$`
   */
  Service: string;
};
/**
 * Type definition for `AWS::BedrockAgentCore::GatewayTarget.ManagedResourceDetails`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrockagentcore-gatewaytarget-managedresourcedetails.html}
 */
export type ManagedResourceDetails = {
  Domain?: string;
  /**
   * @pattern `^(arn:[a-z0-9\-]+:vpc-lattice:[a-zA-Z0-9\-]+:\d{12}:servicenetworkresourceassociation/)?snra-[0-9a-f]{17}$`
   */
  ResourceAssociationArn?: string;
  /**
   * @pattern `^arn:[a-z0-9\-]+:vpc-lattice:[a-zA-Z0-9\-]+:\d{12}:resourcegateway/rgw-[0-9a-z]{17}$`
   */
  ResourceGatewayArn?: string;
};
/**
 * Type definition for `AWS::BedrockAgentCore::GatewayTarget.ManagedVpcResource`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrockagentcore-gatewaytarget-managedvpcresource.html}
 */
export type ManagedVpcResource = {
  EndpointIpAddressType: EndpointIpAddressType;
  /**
   * @minLength `3`
   * @maxLength `255`
   */
  RoutingDomain?: string;
  /**
   * @minLength `0`
   * @maxLength `5`
   */
  SecurityGroupIds?: string[];
  /**
   * @minLength `1`
   */
  SubnetIds: string[];
  /**
   * @pattern `^vpc-(([0-9a-z]{8})|([0-9a-z]{17}))$`
   */
  VpcIdentifier: string;
};
/**
 * Type definition for `AWS::BedrockAgentCore::GatewayTarget.McpLambdaTargetConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrockagentcore-gatewaytarget-mcplambdatargetconfiguration.html}
 */
export type McpLambdaTargetConfiguration = {
  /**
   * @minLength `1`
   * @maxLength `170`
   * @pattern `^arn:(aws[a-zA-Z-]*)?:lambda:([a-z]{2}(-gov)?-[a-z]+-\d{1}):(\d{12}):function:([a-zA-Z0-9-_.]+)(:(\$LATEST|[a-zA-Z0-9-_]+))?$`
   */
  LambdaArn: string;
  ToolSchema: ToolSchema;
};
/**
 * Type definition for `AWS::BedrockAgentCore::GatewayTarget.McpServerListingMode`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrockagentcore-gatewaytarget-mcpserverlistingmode.html}
 */
export type McpServerListingMode = "DEFAULT" | "DYNAMIC";
/**
 * Type definition for `AWS::BedrockAgentCore::GatewayTarget.McpServerTargetConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrockagentcore-gatewaytarget-mcpservertargetconfiguration.html}
 */
export type McpServerTargetConfiguration = {
  /**
   * @pattern `^https://.*`
   */
  Endpoint: string;
  ListingMode?: McpServerListingMode;
  McpToolSchema?: McpToolSchemaConfiguration;
  /**
   * @min `0`
   * @max `1000`
   */
  ResourcePriority?: number;
};
/**
 * Type definition for `AWS::BedrockAgentCore::GatewayTarget.McpTargetConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrockagentcore-gatewaytarget-mcptargetconfiguration.html}
 */
export type McpTargetConfiguration =
  | {
      OpenApiSchema: ApiSchemaConfiguration;
    }
  | {
      SmithyModel: ApiSchemaConfiguration;
    }
  | {
      Lambda: McpLambdaTargetConfiguration;
    }
  | {
      McpServer: McpServerTargetConfiguration;
    }
  | {
      ApiGateway: ApiGatewayTargetConfiguration;
    }
  | {
      Connector: ConnectorTargetConfiguration;
    };
/**
 * Type definition for `AWS::BedrockAgentCore::GatewayTarget.McpToolSchemaConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrockagentcore-gatewaytarget-mcptoolschemaconfiguration.html}
 */
export type McpToolSchemaConfiguration =
  | {
      S3: S3Configuration;
    }
  | {
      InlinePayload: string;
    };
/**
 * Type definition for `AWS::BedrockAgentCore::GatewayTarget.MetadataConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrockagentcore-gatewaytarget-metadataconfiguration.html}
 */
export type MetadataConfiguration = {
  AllowedQueryParameters?: string[];
  AllowedRequestHeaders?: string[];
  AllowedResponseHeaders?: string[];
};
/**
 * Type definition for `AWS::BedrockAgentCore::GatewayTarget.OAuth2AuthorizationData`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrockagentcore-gatewaytarget-oauth2authorizationdata.html}
 */
export type OAuth2AuthorizationData = {
  /**
   * @minLength `1`
   */
  AuthorizationUrl: string;
  /**
   * @minLength `1`
   * @maxLength `128`
   */
  UserId?: string;
};
/**
 * Type definition for `AWS::BedrockAgentCore::GatewayTarget.OAuthCredentialProvider`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrockagentcore-gatewaytarget-oauthcredentialprovider.html}
 */
export type OAuthCredentialProvider = {
  CustomParameters?: OAuthCustomParameters;
  /**
   * Return URL for OAuth callback.
   * @minLength `1`
   * @maxLength `2048`
   * @pattern `\w+:(\/?\/?)[^\s]+`
   */
  DefaultReturnUrl?: string;
  GrantType?: OAuthGrantType;
  /**
   * @pattern `^arn:([^:]*):([^:]*):([^:]*):([0-9]{12})?:(.+)$`
   */
  ProviderArn: string;
  /**
   * @maxLength `100`
   */
  Scopes: string[];
};
/**
 * Type definition for `AWS::BedrockAgentCore::GatewayTarget.OAuthCustomParameters`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrockagentcore-gatewaytarget-oauthcustomparameters.html}
 */
export type OAuthCustomParameters = Record<string, string>;
/**
 * Type definition for `AWS::BedrockAgentCore::GatewayTarget.OAuthGrantType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrockagentcore-gatewaytarget-oauthgranttype.html}
 */
export type OAuthGrantType =
  | "AUTHORIZATION_CODE"
  | "CLIENT_CREDENTIALS"
  | "TOKEN_EXCHANGE";
/**
 * Type definition for `AWS::BedrockAgentCore::GatewayTarget.PassthroughProtocolType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrockagentcore-gatewaytarget-passthroughprotocoltype.html}
 */
export type PassthroughProtocolType = "MCP" | "A2A" | "INFERENCE" | "CUSTOM";
/**
 * Type definition for `AWS::BedrockAgentCore::GatewayTarget.PassthroughTargetConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrockagentcore-gatewaytarget-passthroughtargetconfiguration.html}
 */
export type PassthroughTargetConfiguration = {
  /**
   * @minLength `1`
   * @maxLength `2048`
   * @pattern `^https://[a-zA-Z0-9\-\.]+(:[0-9]{1,5})?(/.*)?$`
   */
  Endpoint: string;
  ProtocolType: PassthroughProtocolType;
  Schema?: HttpApiSchemaConfiguration;
  StickinessConfiguration?: StickinessConfiguration;
};
/**
 * Type definition for `AWS::BedrockAgentCore::GatewayTarget.PrivateEndpoint`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrockagentcore-gatewaytarget-privateendpoint.html}
 */
export type PrivateEndpoint =
  | {
      SelfManagedLatticeResource: SelfManagedLatticeResource;
    }
  | {
      ManagedVpcResource: ManagedVpcResource;
    };
/**
 * Type definition for `AWS::BedrockAgentCore::GatewayTarget.RestApiMethod`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrockagentcore-gatewaytarget-restapimethod.html}
 */
export type RestApiMethod =
  | "GET"
  | "DELETE"
  | "HEAD"
  | "OPTIONS"
  | "PATCH"
  | "PUT"
  | "POST";
/**
 * Type definition for `AWS::BedrockAgentCore::GatewayTarget.RuntimeTargetConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrockagentcore-gatewaytarget-runtimetargetconfiguration.html}
 */
export type RuntimeTargetConfiguration = {
  /**
   * @pattern `^arn:aws(-[^:]+)?:bedrock-agentcore:[a-z0-9-]+:[0-9]{12}:runtime/[a-zA-Z][a-zA-Z0-9_]{0,47}-[a-zA-Z0-9]{10}$`
   */
  Arn: string;
  /**
   * @pattern `^(([1-9][0-9]{0,4})|([a-zA-Z][a-zA-Z0-9_]{0,47}))$`
   */
  Qualifier?: string;
  Schema?: HttpApiSchemaConfiguration;
};
/**
 * Type definition for `AWS::BedrockAgentCore::GatewayTarget.S3Configuration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrockagentcore-gatewaytarget-s3configuration.html}
 */
export type S3Configuration = {
  /**
   * @pattern `^[0-9]{12}$`
   */
  BucketOwnerAccountId?: string;
  /**
   * @pattern `^s3://.{1,2043}$`
   */
  Uri?: string;
};
/**
 * Type definition for `AWS::BedrockAgentCore::GatewayTarget.SchemaDefinition`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrockagentcore-gatewaytarget-schemadefinition.html}
 */
export type SchemaDefinition = {
  Description?: string;
  Items?: SchemaDefinition;
  Properties?: SchemaProperties;
  Required?: string[];
  Type: SchemaType;
};
/**
 * Type definition for `AWS::BedrockAgentCore::GatewayTarget.SchemaProperties`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrockagentcore-gatewaytarget-schemaproperties.html}
 */
export type SchemaProperties = Record<string, SchemaDefinition>;
/**
 * Type definition for `AWS::BedrockAgentCore::GatewayTarget.SchemaType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrockagentcore-gatewaytarget-schematype.html}
 */
export type SchemaType =
  | "string"
  | "number"
  | "object"
  | "array"
  | "boolean"
  | "integer";
/**
 * Type definition for `AWS::BedrockAgentCore::GatewayTarget.SelfManagedLatticeResource`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrockagentcore-gatewaytarget-selfmanagedlatticeresource.html}
 */
export type SelfManagedLatticeResource = {
  /**
   * @minLength `20`
   * @maxLength `2048`
   * @pattern `^((rcfg-[0-9a-z]{17})|(arn:[a-z0-9\-]+:vpc-lattice:[a-zA-Z0-9\-]+:\d{12}:resourceconfiguration/rcfg-[0-9a-z]{17}))$`
   */
  ResourceConfigurationIdentifier: string;
};
/**
 * Type definition for `AWS::BedrockAgentCore::GatewayTarget.StickinessConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrockagentcore-gatewaytarget-stickinessconfiguration.html}
 */
export type StickinessConfiguration = {
  /**
   * @minLength `1`
   * @maxLength `256`
   */
  Identifier: string;
  /**
   * @min `1`
   * @max `86400`
   */
  Timeout?: number;
};
/**
 * Type definition for `AWS::BedrockAgentCore::GatewayTarget.TargetConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrockagentcore-gatewaytarget-targetconfiguration.html}
 */
export type TargetConfiguration =
  | {
      Mcp: McpTargetConfiguration;
    }
  | {
      Http: HttpTargetConfiguration;
    };
/**
 * Type definition for `AWS::BedrockAgentCore::GatewayTarget.TargetProtocolType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrockagentcore-gatewaytarget-targetprotocoltype.html}
 */
export type TargetProtocolType = "MCP" | "HTTP";
/**
 * Type definition for `AWS::BedrockAgentCore::GatewayTarget.TargetStatus`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrockagentcore-gatewaytarget-targetstatus.html}
 */
export type TargetStatus =
  | "CREATING"
  | "UPDATING"
  | "UPDATE_UNSUCCESSFUL"
  | "DELETING"
  | "READY"
  | "FAILED"
  | "SYNCHRONIZING"
  | "SYNCHRONIZE_UNSUCCESSFUL"
  | "CREATE_PENDING_AUTH"
  | "UPDATE_PENDING_AUTH"
  | "SYNCHRONIZE_PENDING_AUTH";
/**
 * Type definition for `AWS::BedrockAgentCore::GatewayTarget.ToolDefinition`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrockagentcore-gatewaytarget-tooldefinition.html}
 */
export type ToolDefinition = {
  Description: string;
  InputSchema: SchemaDefinition;
  Name: string;
  OutputSchema?: SchemaDefinition;
};
/**
 * Type definition for `AWS::BedrockAgentCore::GatewayTarget.ToolSchema`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrockagentcore-gatewaytarget-toolschema.html}
 */
export type ToolSchema =
  | {
      S3: S3Configuration;
    }
  | {
      InlinePayload: ToolDefinition[];
    };
/**
 * Resource Type definition for AWS::BedrockAgentCore::GatewayTarget
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrockagentcore-gatewaytarget.html}
 */
export class BedrockAgentCoreGatewayTarget extends $Resource<
  "AWS::BedrockAgentCore::GatewayTarget",
  BedrockAgentCoreGatewayTargetProperties,
  BedrockAgentCoreGatewayTargetAttributes
> {
  public static readonly Type = "AWS::BedrockAgentCore::GatewayTarget";
  constructor(
    logicalId: string,
    properties: BedrockAgentCoreGatewayTargetProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, BedrockAgentCoreGatewayTarget.Type, properties, options);
  }
}
