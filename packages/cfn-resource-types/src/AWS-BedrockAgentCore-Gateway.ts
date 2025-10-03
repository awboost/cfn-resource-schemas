import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Definition of AWS::BedrockAgentCore::Gateway Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrockagentcore-gateway.html}
 */
export type BedrockAgentCoreGatewayProperties = {
  AuthorizerConfiguration?: AuthorizerConfiguration;
  AuthorizerType: AuthorizerType;
  /**
   * @minLength `1`
   * @maxLength `200`
   */
  Description?: string;
  ExceptionLevel?: ExceptionLevel;
  /**
   * @minLength `1`
   * @maxLength `2048`
   * @pattern `^arn:aws(|-cn|-us-gov):kms:[a-zA-Z0-9-]*:[0-9]{12}:key/[a-zA-Z0-9-]{36}$`
   */
  KmsKeyArn?: string;
  /**
   * @pattern `^([0-9a-zA-Z][-]?){1,100}$`
   */
  Name: string;
  ProtocolConfiguration?: GatewayProtocolConfiguration;
  ProtocolType: GatewayProtocolType;
  /**
   * @minLength `1`
   * @maxLength `2048`
   * @pattern `^arn:aws(-[^:]+)?:iam::([0-9]{12})?:role/.+$`
   */
  RoleArn: string;
  Tags?: TagsMap;
};
/**
 * Attribute type definition for `AWS::BedrockAgentCore::Gateway`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrockagentcore-gateway.html#aws-resource-bedrockagentcore-gateway-return-values}
 */
export type BedrockAgentCoreGatewayAttributes = {
  CreatedAt: string;
  /**
   * @pattern `^arn:aws(|-cn|-us-gov):bedrock-agentcore:[a-z0-9-]{1,20}:[0-9]{12}:gateway/([0-9a-z][-]?){1,100}-[a-z0-9]{10}$`
   */
  GatewayArn: string;
  /**
   * @pattern `^([0-9a-z][-]?){1,100}-[0-9a-z]{10}$`
   */
  GatewayIdentifier: string;
  /**
   * @minLength `1`
   * @maxLength `1024`
   */
  GatewayUrl: string;
  Status: GatewayStatus;
  /**
   * @maxLength `100`
   */
  StatusReasons: string[];
  UpdatedAt: string;
  WorkloadIdentityDetails: {
    /**
     * @minLength `1`
     * @maxLength `1024`
     */
    WorkloadIdentityArn: string;
  };
};
/**
 * Type definition for `AWS::BedrockAgentCore::Gateway.AuthorizerConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrockagentcore-gateway-authorizerconfiguration.html}
 */
export type AuthorizerConfiguration = {
  CustomJWTAuthorizer: CustomJWTAuthorizerConfiguration;
};
/**
 * Type definition for `AWS::BedrockAgentCore::Gateway.AuthorizerType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrockagentcore-gateway-authorizertype.html}
 */
export type AuthorizerType = "CUSTOM_JWT" | "AWS_IAM";
/**
 * Type definition for `AWS::BedrockAgentCore::Gateway.CustomJWTAuthorizerConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrockagentcore-gateway-customjwtauthorizerconfiguration.html}
 */
export type CustomJWTAuthorizerConfiguration = {
  /**
   * @minLength `1`
   */
  AllowedAudience?: string[];
  /**
   * @minLength `1`
   */
  AllowedClients?: string[];
  /**
   * @pattern `^.+/\.well-known/openid-configuration$`
   */
  DiscoveryUrl: string;
};
/**
 * Type definition for `AWS::BedrockAgentCore::Gateway.ExceptionLevel`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrockagentcore-gateway-exceptionlevel.html}
 */
export type ExceptionLevel = "DEBUG";
/**
 * Type definition for `AWS::BedrockAgentCore::Gateway.GatewayProtocolConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrockagentcore-gateway-gatewayprotocolconfiguration.html}
 */
export type GatewayProtocolConfiguration = {
  Mcp: MCPGatewayConfiguration;
};
/**
 * Type definition for `AWS::BedrockAgentCore::Gateway.GatewayProtocolType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrockagentcore-gateway-gatewayprotocoltype.html}
 */
export type GatewayProtocolType = "MCP";
/**
 * Type definition for `AWS::BedrockAgentCore::Gateway.GatewayStatus`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrockagentcore-gateway-gatewaystatus.html}
 */
export type GatewayStatus =
  | "CREATING"
  | "UPDATING"
  | "UPDATE_UNSUCCESSFUL"
  | "DELETING"
  | "READY"
  | "FAILED";
/**
 * Type definition for `AWS::BedrockAgentCore::Gateway.MCPGatewayConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrockagentcore-gateway-mcpgatewayconfiguration.html}
 */
export type MCPGatewayConfiguration = {
  /**
   * @minLength `1`
   * @maxLength `2048`
   */
  Instructions?: string;
  SearchType?: SearchType;
  SupportedVersions?: string[];
};
/**
 * Type definition for `AWS::BedrockAgentCore::Gateway.SearchType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrockagentcore-gateway-searchtype.html}
 */
export type SearchType = "SEMANTIC";
/**
 * Type definition for `AWS::BedrockAgentCore::Gateway.TagsMap`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrockagentcore-gateway-tagsmap.html}
 */
export type TagsMap = Record<string, string>;
/**
 * Type definition for `AWS::BedrockAgentCore::Gateway.WorkloadIdentityDetails`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrockagentcore-gateway-workloadidentitydetails.html}
 */
export type WorkloadIdentityDetails = {
  /**
   * @minLength `1`
   * @maxLength `1024`
   */
  WorkloadIdentityArn: string;
};
/**
 * Definition of AWS::BedrockAgentCore::Gateway Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrockagentcore-gateway.html}
 */
export class BedrockAgentCoreGateway extends $Resource<
  "AWS::BedrockAgentCore::Gateway",
  BedrockAgentCoreGatewayProperties,
  BedrockAgentCoreGatewayAttributes
> {
  public static readonly Type = "AWS::BedrockAgentCore::Gateway";
  constructor(
    logicalId: string,
    properties: BedrockAgentCoreGatewayProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, BedrockAgentCoreGateway.Type, properties, options);
  }
}
