import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource definition for AWS::BedrockAgentCore::RuntimeEndpoint
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrockagentcore-runtimeendpoint.html}
 */
export type BedrockAgentCoreRuntimeEndpointProperties = {
  /**
   * The ID of the parent Agent Runtime (required for creation)
   * @pattern `^[a-zA-Z][a-zA-Z0-9_]{0,99}-[a-zA-Z0-9]{10}$`
   */
  AgentRuntimeId: string;
  /**
   * The version of the AgentCore Runtime to use for the endpoint.
   * @pattern `^([1-9][0-9]{0,4})$`
   */
  AgentRuntimeVersion?: string;
  /**
   * The description of the AgentCore Runtime endpoint.
   * @minLength `1`
   * @maxLength `256`
   */
  Description?: string;
  /**
   * The name of the Agent Runtime Endpoint
   * @minLength `1`
   * @maxLength `48`
   * @pattern `^[a-zA-Z][a-zA-Z0-9_]{0,47}$`
   */
  Name: string;
  /**
   * A map of tag keys and values
   */
  Tags?: TagsMap;
};
/**
 * Attribute type definition for `AWS::BedrockAgentCore::RuntimeEndpoint`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrockagentcore-runtimeendpoint.html#aws-resource-bedrockagentcore-runtimeendpoint-return-values}
 */
export type BedrockAgentCoreRuntimeEndpointAttributes = {
  /**
   * The ARN of the Agent Runtime
   * @pattern `^arn:(-[^:]+)?:bedrock-agentcore:[a-z0-9-]+:[0-9]{12}:agent/[A-Fa-f0-9]{8}-[A-Fa-f0-9]{4}-[A-Fa-f0-9]{4}-[A-Fa-f0-9]{4}-[A-Fa-f0-9]{12}:([0-9]{0,4}[1-9][0-9]{0,4})$`
   */
  AgentRuntimeArn: string;
  /**
   * The Amazon Resource Name (ARN) of the AgentCore Runtime.
   * @pattern `^arn:aws:bedrock-agentcore:[a-z0-9-]+:[0-9]{12}:runtime/[a-zA-Z0-9_-]+/runtime-endpoint/[a-zA-Z0-9_-]+$`
   */
  AgentRuntimeEndpointArn: string;
  /**
   * The timestamp when the Agent Runtime Endpoint was created
   */
  CreatedAt: string;
  /**
   * The reason for failure if the endpoint is in a failed state
   */
  FailureReason: string;
  /**
   * The unique identifier of the AgentCore Runtime endpoint.
   * @pattern `^[a-zA-Z0-9_-]+$`
   */
  Id: string;
  /**
   * The timestamp when the Agent Runtime Endpoint was last updated
   */
  LastUpdatedAt: string;
  /**
   * The Live version of the Agent Runtime
   * @pattern `^([1-9][0-9]{0,4})$`
   */
  LiveVersion: string;
  /**
   * The status of the Agent Runtime Endpoint
   */
  Status: AgentRuntimeEndpointStatus;
  /**
   * The target version of the AgentCore Runtime for the endpoint.
   * @pattern `^([1-9][0-9]{0,4})$`
   */
  TargetVersion: string;
};
/**
 * Type definition for `AWS::BedrockAgentCore::RuntimeEndpoint.AgentRuntimeEndpointStatus`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrockagentcore-runtimeendpoint-agentruntimeendpointstatus.html}
 */
export type AgentRuntimeEndpointStatus =
  | "CREATING"
  | "CREATE_FAILED"
  | "UPDATING"
  | "UPDATE_FAILED"
  | "READY"
  | "DELETING";
/**
 * Type definition for `AWS::BedrockAgentCore::RuntimeEndpoint.TagsMap`.
 * A map of tag keys and values
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrockagentcore-runtimeendpoint-tagsmap.html}
 */
export type TagsMap = Record<string, string>;
/**
 * Resource definition for AWS::BedrockAgentCore::RuntimeEndpoint
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrockagentcore-runtimeendpoint.html}
 */
export class BedrockAgentCoreRuntimeEndpoint extends $Resource<
  "AWS::BedrockAgentCore::RuntimeEndpoint",
  BedrockAgentCoreRuntimeEndpointProperties,
  BedrockAgentCoreRuntimeEndpointAttributes
> {
  public static readonly Type = "AWS::BedrockAgentCore::RuntimeEndpoint";
  constructor(
    logicalId: string,
    properties: BedrockAgentCoreRuntimeEndpointProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, BedrockAgentCoreRuntimeEndpoint.Type, properties, options);
  }
}
