import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::BedrockAgentCore::PolicyEngine
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrockagentcore-policyengine.html}
 */
export type BedrockAgentCorePolicyEngineProperties = {
  /**
   * A human-readable description of the policy engine's purpose and scope
   * @minLength `1`
   * @maxLength `4096`
   */
  Description?: string;
  /**
   * The ARN of the KMS key used to encrypt the policy engine data
   * @minLength `1`
   * @maxLength `2048`
   * @pattern `^arn:aws(|-cn|-us-gov):kms:[a-zA-Z0-9-]*:[0-9]{12}:key/[a-zA-Z0-9-]{36}$`
   */
  EncryptionKeyArn?: string;
  /**
   * The customer-assigned immutable name for the policy engine
   * @minLength `1`
   * @maxLength `48`
   * @pattern `^[A-Za-z][A-Za-z0-9_]*$`
   */
  Name: string;
  /**
   * A list of tags to assign to the policy engine.
   * @maxLength `50`
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::BedrockAgentCore::PolicyEngine`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrockagentcore-policyengine.html#aws-resource-bedrockagentcore-policyengine-return-values}
 */
export type BedrockAgentCorePolicyEngineAttributes = {
  /**
   * The timestamp when the policy engine was created
   */
  CreatedAt: string;
  /**
   * The Amazon Resource Name (ARN) of the policy engine
   * @minLength `76`
   * @maxLength `136`
   * @pattern `^arn:aws[-a-z]{0,7}:bedrock-agentcore:[a-z0-9-]{9,15}:[0-9]{12}:policy-engine/[a-zA-Z][a-zA-Z0-9-_]{0,47}-[a-zA-Z0-9_]{10}$`
   */
  PolicyEngineArn: string;
  /**
   * The unique identifier for the policy engine
   * @minLength `12`
   * @maxLength `59`
   * @pattern `^[A-Za-z][A-Za-z0-9_]*-[a-z0-9_]{10}$`
   */
  PolicyEngineId: string;
  /**
   * The current status of the policy engine
   */
  Status: PolicyEngineStatus;
  /**
   * Additional information about the policy engine status
   */
  StatusReasons: string[];
  /**
   * The timestamp when the policy engine was last updated
   */
  UpdatedAt: string;
};
/**
 * Type definition for `AWS::BedrockAgentCore::PolicyEngine.PolicyEngineStatus`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrockagentcore-policyengine-policyenginestatus.html}
 */
export type PolicyEngineStatus =
  | "CREATING"
  | "ACTIVE"
  | "UPDATING"
  | "DELETING"
  | "CREATE_FAILED"
  | "UPDATE_FAILED"
  | "DELETE_FAILED";
/**
 * Type definition for `AWS::BedrockAgentCore::PolicyEngine.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrockagentcore-policyengine-tag.html}
 */
export type Tag = {
  /**
   * @minLength `1`
   * @maxLength `128`
   */
  Key: string;
  /**
   * @minLength `0`
   * @maxLength `256`
   */
  Value: string;
};
/**
 * Resource Type definition for AWS::BedrockAgentCore::PolicyEngine
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrockagentcore-policyengine.html}
 */
export class BedrockAgentCorePolicyEngine extends $Resource<
  "AWS::BedrockAgentCore::PolicyEngine",
  BedrockAgentCorePolicyEngineProperties,
  BedrockAgentCorePolicyEngineAttributes
> {
  public static readonly Type = "AWS::BedrockAgentCore::PolicyEngine";
  constructor(
    logicalId: string,
    properties: BedrockAgentCorePolicyEngineProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, BedrockAgentCorePolicyEngine.Type, properties, options);
  }
}
