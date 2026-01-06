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
   * @maxLength `2`
   */
  InterceptorConfigurations?: GatewayInterceptorConfiguration[];
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
export type AuthorizerType = "CUSTOM_JWT" | "AWS_IAM" | "NONE";
/**
 * Type definition for `AWS::BedrockAgentCore::Gateway.AuthorizingClaimMatchValueType`.
 * The value or values in the custom claim to match and relationship of match
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrockagentcore-gateway-authorizingclaimmatchvaluetype.html}
 */
export type AuthorizingClaimMatchValueType = {
  /**
   * The relationship between the claim field value and the value or values being matched
   */
  ClaimMatchOperator: ClaimMatchOperator;
  /**
   * The value or values in the custom claim to match for
   */
  ClaimMatchValue: ClaimMatchValueType;
};
/**
 * Type definition for `AWS::BedrockAgentCore::Gateway.ClaimMatchOperator`.
 * The relationship between the claim field value and the value or values being matched
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrockagentcore-gateway-claimmatchoperator.html}
 */
export type ClaimMatchOperator = "EQUALS" | "CONTAINS" | "CONTAINS_ANY";
/**
 * Type definition for `AWS::BedrockAgentCore::Gateway.ClaimMatchValueType`.
 * The value or values in the custom claim to match for
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrockagentcore-gateway-claimmatchvaluetype.html}
 */
export type ClaimMatchValueType = {
  /**
   * The string value to match for
   * @pattern `[A-Za-z0-9_.-]+`
   */
  MatchValueString?: string;
  /**
   * The list of strings to check for a match
   * @minLength `1`
   * @maxLength `255`
   */
  MatchValueStringList?: string[];
};
/**
 * Type definition for `AWS::BedrockAgentCore::Gateway.CustomClaimValidationType`.
 * Required custom claim
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrockagentcore-gateway-customclaimvalidationtype.html}
 */
export type CustomClaimValidationType = {
  /**
   * The value or values in the custom claim to match and relationship of match
   */
  AuthorizingClaimMatchValue: AuthorizingClaimMatchValueType;
  /**
   * The name of the custom claim to validate
   * @pattern `[A-Za-z0-9_.-:]+`
   */
  InboundTokenClaimName: string;
  /**
   * Token claim data type
   */
  InboundTokenClaimValueType: InboundTokenClaimValueType;
};
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
   * @minLength `1`
   */
  AllowedScopes?: string[];
  /**
   * @minLength `1`
   */
  CustomClaims?: CustomClaimValidationType[];
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
 * Type definition for `AWS::BedrockAgentCore::Gateway.GatewayInterceptionPoint`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrockagentcore-gateway-gatewayinterceptionpoint.html}
 */
export type GatewayInterceptionPoint = "REQUEST" | "RESPONSE";
/**
 * Type definition for `AWS::BedrockAgentCore::Gateway.GatewayInterceptorConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrockagentcore-gateway-gatewayinterceptorconfiguration.html}
 */
export type GatewayInterceptorConfiguration = {
  InputConfiguration?: InterceptorInputConfiguration;
  /**
   * @minLength `1`
   * @maxLength `2`
   */
  InterceptionPoints: GatewayInterceptionPoint[];
  Interceptor: InterceptorConfiguration;
};
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
 * Type definition for `AWS::BedrockAgentCore::Gateway.InboundTokenClaimValueType`.
 * Token claim data type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrockagentcore-gateway-inboundtokenclaimvaluetype.html}
 */
export type InboundTokenClaimValueType = "STRING" | "STRING_ARRAY";
/**
 * Type definition for `AWS::BedrockAgentCore::Gateway.InterceptorConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrockagentcore-gateway-interceptorconfiguration.html}
 */
export type InterceptorConfiguration = {
  Lambda: LambdaInterceptorConfiguration;
};
/**
 * Type definition for `AWS::BedrockAgentCore::Gateway.InterceptorInputConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrockagentcore-gateway-interceptorinputconfiguration.html}
 */
export type InterceptorInputConfiguration = {
  PassRequestHeaders: boolean;
};
/**
 * Type definition for `AWS::BedrockAgentCore::Gateway.LambdaInterceptorConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrockagentcore-gateway-lambdainterceptorconfiguration.html}
 */
export type LambdaInterceptorConfiguration = {
  /**
   * @minLength `1`
   * @maxLength `170`
   * @pattern `^arn:(aws[a-zA-Z-]*)?:lambda:([a-z]{2}(-gov)?-[a-z]+-\d{1}):(\d{12}):function:([a-zA-Z0-9-_.]+)(:(\$LATEST|[a-zA-Z0-9-_]+))?$`
   */
  Arn: string;
};
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
