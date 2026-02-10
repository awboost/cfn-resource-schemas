import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::BedrockAgentCore::Runtime
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrockagentcore-runtime.html}
 */
export type BedrockAgentCoreRuntimeProperties = {
  /**
   * The artifact of the agent
   */
  AgentRuntimeArtifact: AgentRuntimeArtifact;
  /**
   * Name for a resource
   * @pattern `[a-zA-Z][a-zA-Z0-9_]{0,47}`
   */
  AgentRuntimeName: string;
  /**
   * Authorizer configuration for the agent runtime
   */
  AuthorizerConfiguration?: AuthorizerConfiguration;
  /**
   * Description of the resource
   * @minLength `1`
   * @maxLength `1200`
   */
  Description?: string;
  /**
   * Environment variables for the agent runtime
   */
  EnvironmentVariables?: EnvironmentVariablesMap;
  /**
   * Lifecycle configuration for managing runtime sessions
   */
  LifecycleConfiguration?: LifecycleConfiguration;
  /**
   * Network access configuration for the Agent
   */
  NetworkConfiguration: NetworkConfiguration;
  /**
   * Protocol configuration for the agent runtime
   */
  ProtocolConfiguration?: ProtocolConfiguration;
  /**
   * Configuration for HTTP request headers
   */
  RequestHeaderConfiguration?: RequestHeaderConfiguration;
  /**
   * Amazon Resource Name (ARN) of an IAM role
   * @pattern `arn:aws(-[^:]+)?:iam::([0-9]{12})?:role/.+`
   */
  RoleArn: string;
  /**
   * A map of tag keys and values
   */
  Tags?: TagsMap;
};
/**
 * Attribute type definition for `AWS::BedrockAgentCore::Runtime`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrockagentcore-runtime.html#aws-resource-bedrockagentcore-runtime-return-values}
 */
export type BedrockAgentCoreRuntimeAttributes = {
  /**
   * The Amazon Resource Name(ARN) that uniquely identifies the Agent
   * @maxLength `2048`
   * @pattern `^arn:aws(-[^:]+)?:bedrock-agentcore:[a-z0-9-]+:[0-9]{12}:runtime/[a-zA-Z][a-zA-Z0-9_]{0,99}-[a-zA-Z0-9]{10}$`
   */
  AgentRuntimeArn: string;
  /**
   * Identifier for a resource
   * @pattern `[a-zA-Z][a-zA-Z0-9_]{0,99}-[a-zA-Z0-9]{10}`
   */
  AgentRuntimeId: string;
  /**
   * Version of the Agent
   * @minLength `1`
   * @maxLength `5`
   * @pattern `([1-9][0-9]{0,4})`
   */
  AgentRuntimeVersion: string;
  /**
   * Timestamp when the Agent was created
   */
  CreatedAt: string;
  /**
   * The reason for failure if the agent is in a failed state.
   */
  FailureReason: string;
  /**
   * When resource was last updated
   */
  LastUpdatedAt: string;
  /**
   * Current status of the agent
   */
  Status: AgentStatus;
  /**
   * Workload identity details for the agent
   */
  WorkloadIdentityDetails: {
    /**
     * ARN of the workload identity
     * @minLength `1`
     * @maxLength `1024`
     */
    WorkloadIdentityArn: string;
  };
};
/**
 * Type definition for `AWS::BedrockAgentCore::Runtime.AgentManagedRuntimeType`.
 * Managed runtime types
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrockagentcore-runtime-agentmanagedruntimetype.html}
 */
export type AgentManagedRuntimeType =
  | "PYTHON_3_10"
  | "PYTHON_3_11"
  | "PYTHON_3_12"
  | "PYTHON_3_13";
/**
 * Type definition for `AWS::BedrockAgentCore::Runtime.AgentRuntimeArtifact`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrockagentcore-runtime-agentruntimeartifact.html}
 */
export type AgentRuntimeArtifact = {
  /**
   * Representation of a code configuration
   */
  CodeConfiguration?: CodeConfiguration;
  ContainerConfiguration?: ContainerConfiguration;
};
/**
 * Type definition for `AWS::BedrockAgentCore::Runtime.AgentStatus`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrockagentcore-runtime-agentstatus.html}
 */
export type AgentStatus =
  | "CREATING"
  | "CREATE_FAILED"
  | "UPDATING"
  | "UPDATE_FAILED"
  | "READY"
  | "DELETING";
/**
 * Type definition for `AWS::BedrockAgentCore::Runtime.AuthorizerConfiguration`.
 * Configuration for the authorizer
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrockagentcore-runtime-authorizerconfiguration.html}
 */
export type AuthorizerConfiguration = {
  /**
   * Configuration for custom JWT authorizer
   */
  CustomJWTAuthorizer?: CustomJWTAuthorizerConfiguration;
};
/**
 * Type definition for `AWS::BedrockAgentCore::Runtime.AuthorizingClaimMatchValueType`.
 * The value or values in the custom claim to match and relationship of match
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrockagentcore-runtime-authorizingclaimmatchvaluetype.html}
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
 * Type definition for `AWS::BedrockAgentCore::Runtime.ClaimMatchOperator`.
 * The relationship between the claim field value and the value or values being matched
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrockagentcore-runtime-claimmatchoperator.html}
 */
export type ClaimMatchOperator = "EQUALS" | "CONTAINS" | "CONTAINS_ANY";
/**
 * Type definition for `AWS::BedrockAgentCore::Runtime.ClaimMatchValueType`.
 * The value or values in the custom claim to match for
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrockagentcore-runtime-claimmatchvaluetype.html}
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
 * Type definition for `AWS::BedrockAgentCore::Runtime.Code`.
 * Object represents source code from zip file
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrockagentcore-runtime-code.html}
 */
export type Code = {
  /**
   * S3 Location Configuration
   */
  S3?: S3Location;
};
/**
 * Type definition for `AWS::BedrockAgentCore::Runtime.CodeConfiguration`.
 * Representation of a code configuration
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrockagentcore-runtime-codeconfiguration.html}
 */
export type CodeConfiguration = {
  /**
   * Object represents source code from zip file
   */
  Code: Code;
  /**
   * List of entry points
   * @minLength `1`
   * @maxLength `2`
   */
  EntryPoint: string[];
  /**
   * Managed runtime types
   */
  Runtime: AgentManagedRuntimeType;
};
/**
 * Type definition for `AWS::BedrockAgentCore::Runtime.ContainerConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrockagentcore-runtime-containerconfiguration.html}
 */
export type ContainerConfiguration = {
  /**
   * The ECR URI of the container
   * @minLength `1`
   * @maxLength `1024`
   * @pattern `^\d{12}\.dkr\.ecr\.([a-z0-9-]+)\.amazonaws\.com/((?:[a-z0-9]+(?:[._-][a-z0-9]+)/‍*)*[a-z0-9]+(?:[._-][a-z0-9]+)*)([:@]\S+)$`
   */
  ContainerUri: string;
};
/**
 * Type definition for `AWS::BedrockAgentCore::Runtime.CustomClaimValidationType`.
 * Required custom claim
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrockagentcore-runtime-customclaimvalidationtype.html}
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
 * Type definition for `AWS::BedrockAgentCore::Runtime.CustomJWTAuthorizerConfiguration`.
 * Configuration for custom JWT authorizer
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrockagentcore-runtime-customjwtauthorizerconfiguration.html}
 */
export type CustomJWTAuthorizerConfiguration = {
  /**
   * List of allowed audiences
   * @minLength `1`
   */
  AllowedAudience?: string[];
  /**
   * List of allowed clients
   * @minLength `1`
   */
  AllowedClients?: string[];
  /**
   * List of allowed scopes
   * @minLength `1`
   */
  AllowedScopes?: string[];
  /**
   * List of required custom claims
   * @minLength `1`
   */
  CustomClaims?: CustomClaimValidationType[];
  /**
   * OpenID Connect discovery URL
   * @pattern `^.+/\.well-known/openid-configuration$`
   */
  DiscoveryUrl: string;
};
/**
 * Type definition for `AWS::BedrockAgentCore::Runtime.EnvironmentVariablesMap`.
 * Environment variable attributes
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrockagentcore-runtime-environmentvariablesmap.html}
 */
export type EnvironmentVariablesMap = Record<string, string>;
/**
 * Type definition for `AWS::BedrockAgentCore::Runtime.InboundTokenClaimValueType`.
 * Token claim data type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrockagentcore-runtime-inboundtokenclaimvaluetype.html}
 */
export type InboundTokenClaimValueType = "STRING" | "STRING_ARRAY";
/**
 * Type definition for `AWS::BedrockAgentCore::Runtime.LifecycleConfiguration`.
 * Configuration for managing the lifecycle of runtime sessions and resources
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrockagentcore-runtime-lifecycleconfiguration.html}
 */
export type LifecycleConfiguration = {
  /**
   * Timeout in seconds for idle runtime sessions
   * @min `60`
   * @max `28800`
   */
  IdleRuntimeSessionTimeout?: number;
  /**
   * Maximum lifetime in seconds for runtime sessions
   * @min `60`
   * @max `28800`
   */
  MaxLifetime?: number;
};
/**
 * Type definition for `AWS::BedrockAgentCore::Runtime.NetworkConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrockagentcore-runtime-networkconfiguration.html}
 */
export type NetworkConfiguration = {
  /**
   * Network mode configuration type
   */
  NetworkMode: NetworkMode;
  /**
   * Network mode configuration for VPC
   */
  NetworkModeConfig?: VpcConfig;
};
/**
 * Type definition for `AWS::BedrockAgentCore::Runtime.NetworkMode`.
 * Network mode configuration type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrockagentcore-runtime-networkmode.html}
 */
export type NetworkMode = "PUBLIC" | "VPC";
/**
 * Type definition for `AWS::BedrockAgentCore::Runtime.ProtocolConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrockagentcore-runtime-protocolconfiguration.html}
 */
export type ProtocolConfiguration = "MCP" | "HTTP" | "A2A";
/**
 * Type definition for `AWS::BedrockAgentCore::Runtime.RequestHeaderConfiguration`.
 * Configuration for HTTP request headers
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrockagentcore-runtime-requestheaderconfiguration.html}
 */
export type RequestHeaderConfiguration = {
  /**
   * List of allowed HTTP headers for agent runtime requests
   * @minLength `1`
   * @maxLength `20`
   */
  RequestHeaderAllowlist?: string[];
};
/**
 * Type definition for `AWS::BedrockAgentCore::Runtime.S3Location`.
 * S3 Location Configuration
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrockagentcore-runtime-s3location.html}
 */
export type S3Location = {
  /**
   * S3 bucket name
   * @pattern `^[a-z0-9][a-z0-9.-]{1,61}[a-z0-9]$`
   */
  Bucket: string;
  /**
   * S3 object key prefix
   * @minLength `1`
   * @maxLength `1024`
   */
  Prefix: string;
  /**
   * S3 object version ID
   * @minLength `3`
   * @maxLength `1024`
   */
  VersionId?: string;
};
/**
 * Type definition for `AWS::BedrockAgentCore::Runtime.TagsMap`.
 * A map of tag keys and values
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrockagentcore-runtime-tagsmap.html}
 */
export type TagsMap = Record<string, string>;
/**
 * Type definition for `AWS::BedrockAgentCore::Runtime.VpcConfig`.
 * Network mode configuration for VPC
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrockagentcore-runtime-vpcconfig.html}
 */
export type VpcConfig = {
  /**
   * Security groups for VPC
   * @minLength `1`
   * @maxLength `16`
   */
  SecurityGroups: string[];
  /**
   * Subnets for VPC
   * @minLength `1`
   * @maxLength `16`
   */
  Subnets: string[];
};
/**
 * Type definition for `AWS::BedrockAgentCore::Runtime.WorkloadIdentityDetails`.
 * Configuration for workload identity
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrockagentcore-runtime-workloadidentitydetails.html}
 */
export type WorkloadIdentityDetails = {
  /**
   * ARN of the workload identity
   * @minLength `1`
   * @maxLength `1024`
   */
  WorkloadIdentityArn: string;
};
/**
 * Resource Type definition for AWS::BedrockAgentCore::Runtime
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrockagentcore-runtime.html}
 */
export class BedrockAgentCoreRuntime extends $Resource<
  "AWS::BedrockAgentCore::Runtime",
  BedrockAgentCoreRuntimeProperties,
  BedrockAgentCoreRuntimeAttributes
> {
  public static readonly Type = "AWS::BedrockAgentCore::Runtime";
  constructor(
    logicalId: string,
    properties: BedrockAgentCoreRuntimeProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, BedrockAgentCoreRuntime.Type, properties, options);
  }
}
