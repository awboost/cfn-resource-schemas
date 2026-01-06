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
  CredentialProviderConfigurations: CredentialProviderConfiguration[];
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
  Name: string;
  TargetConfiguration: TargetConfiguration;
};
/**
 * Attribute type definition for `AWS::BedrockAgentCore::GatewayTarget`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrockagentcore-gatewaytarget.html#aws-resource-bedrockagentcore-gatewaytarget-return-values}
 */
export type BedrockAgentCoreGatewayTargetAttributes = {
  CreatedAt: string;
  /**
   * @pattern `^arn:aws(|-cn|-us-gov):bedrock-agentcore:[a-z0-9-]{1,20}:[0-9]{12}:gateway/([0-9a-z][-]?){1,100}-[a-z0-9]{10}$`
   */
  GatewayArn: string;
  LastSynchronizedAt: string;
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
 * Type definition for `AWS::BedrockAgentCore::GatewayTarget.CredentialProvider`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrockagentcore-gatewaytarget-credentialprovider.html}
 */
export type CredentialProvider =
  | {
      OauthCredentialProvider: OAuthCredentialProvider;
    }
  | {
      ApiKeyCredentialProvider: ApiKeyCredentialProvider;
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
export type CredentialProviderType = "GATEWAY_IAM_ROLE" | "OAUTH" | "API_KEY";
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
 * Type definition for `AWS::BedrockAgentCore::GatewayTarget.McpServerTargetConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrockagentcore-gatewaytarget-mcpservertargetconfiguration.html}
 */
export type McpServerTargetConfiguration = {
  /**
   * @pattern `^https://.*`
   */
  Endpoint: string;
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
export type OAuthGrantType = "AUTHORIZATION_CODE" | "CLIENT_CREDENTIALS";
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
 * Type definition for `AWS::BedrockAgentCore::GatewayTarget.TargetConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrockagentcore-gatewaytarget-targetconfiguration.html}
 */
export type TargetConfiguration = {
  Mcp: McpTargetConfiguration;
};
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
  | "SYNCHRONIZE_UNSUCCESSFUL";
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
