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
   * Network access configuration for the Agent
   */
  NetworkConfiguration: NetworkConfiguration;
  /**
   * Protocol configuration for the agent runtime
   */
  ProtocolConfiguration?: ProtocolConfiguration;
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
   * @pattern `arn:(-[^:]+)?:bedrock-agentcore:[a-z0-9-]+:[0-9]{12}:agent/[A-Fa-f0-9]{8}-[A-Fa-f0-9]{4}-[A-Fa-f0-9]{4}-[A-Fa-f0-9]{4}-[A-Fa-f0-9]{12}:([0-9]{0,4}[1-9][0-9]{0,4})`
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
 * Type definition for `AWS::BedrockAgentCore::Runtime.AgentRuntimeArtifact`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrockagentcore-runtime-agentruntimeartifact.html}
 */
export type AgentRuntimeArtifact = {
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
 * Type definition for `AWS::BedrockAgentCore::Runtime.NetworkConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrockagentcore-runtime-networkconfiguration.html}
 */
export type NetworkConfiguration = {
  /**
   * Network mode configuration type
   */
  NetworkMode: NetworkMode;
};
/**
 * Type definition for `AWS::BedrockAgentCore::Runtime.NetworkMode`.
 * Network mode configuration type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrockagentcore-runtime-networkmode.html}
 */
export type NetworkMode = "PUBLIC";
/**
 * Type definition for `AWS::BedrockAgentCore::Runtime.ProtocolConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrockagentcore-runtime-protocolconfiguration.html}
 */
export type ProtocolConfiguration = "MCP" | "HTTP";
/**
 * Type definition for `AWS::BedrockAgentCore::Runtime.TagsMap`.
 * A map of tag keys and values
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrockagentcore-runtime-tagsmap.html}
 */
export type TagsMap = Record<string, string>;
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
