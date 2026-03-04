import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::BedrockAgentCore::Policy
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrockagentcore-policy.html}
 */
export type BedrockAgentCorePolicyProperties = {
  /**
   * The definition structure for policies. Encapsulates different policy formats.
   */
  Definition: PolicyDefinition;
  /**
   * A human-readable description of the policy's purpose and functionality.
   * @minLength `1`
   * @maxLength `4096`
   */
  Description?: string;
  /**
   * The customer-assigned immutable name for the policy. Must be unique within the policy engine.
   * @minLength `1`
   * @maxLength `48`
   * @pattern `^[A-Za-z][A-Za-z0-9_]*$`
   */
  Name: string;
  /**
   * The identifier of the policy engine which contains this policy.
   * @minLength `12`
   * @maxLength `59`
   * @pattern `^[A-Za-z][A-Za-z0-9_]*-[a-z0-9_]{10}$`
   */
  PolicyEngineId: string;
  /**
   * The validation mode for the policy. Determines how Cedar analyzer validation results are handled.
   */
  ValidationMode?: PolicyValidationMode;
};
/**
 * Attribute type definition for `AWS::BedrockAgentCore::Policy`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrockagentcore-policy.html#aws-resource-bedrockagentcore-policy-return-values}
 */
export type BedrockAgentCorePolicyAttributes = {
  /**
   * The timestamp when the policy was created.
   */
  CreatedAt: string;
  /**
   * The Amazon Resource Name (ARN) of the policy.
   * @minLength `96`
   * @maxLength `203`
   * @pattern `^arn:aws[-a-z]{0,7}:bedrock-agentcore:[a-z0-9-]{9,15}:[0-9]{12}:policy-engine/[a-zA-Z][a-zA-Z0-9-_]{0,47}-[a-zA-Z0-9_]{10}/policy/[a-zA-Z][a-zA-Z0-9-_]{0,47}-[a-zA-Z0-9_]{10}$`
   */
  PolicyArn: string;
  /**
   * The unique identifier for the policy.
   * @minLength `12`
   * @maxLength `59`
   * @pattern `^[A-Za-z][A-Za-z0-9_]*-[a-z0-9_]{10}$`
   */
  PolicyId: string;
  /**
   * The current status of the policy.
   */
  Status: PolicyStatus;
  /**
   * Additional information about the policy status.
   */
  StatusReasons: string[];
  /**
   * The timestamp when the policy was last updated.
   */
  UpdatedAt: string;
};
/**
 * Type definition for `AWS::BedrockAgentCore::Policy.CedarPolicy`.
 * A Cedar policy statement within the AgentCore Policy system.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrockagentcore-policy-cedarpolicy.html}
 */
export type CedarPolicy = {
  /**
   * The Cedar policy statement that defines the authorization logic.
   * @minLength `35`
   * @maxLength `153600`
   */
  Statement: string;
};
/**
 * Type definition for `AWS::BedrockAgentCore::Policy.PolicyDefinition`.
 * The definition structure for policies. Encapsulates different policy formats.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrockagentcore-policy-policydefinition.html}
 */
export type PolicyDefinition = {
  /**
   * A Cedar policy statement within the AgentCore Policy system.
   */
  Cedar: CedarPolicy;
};
/**
 * Type definition for `AWS::BedrockAgentCore::Policy.PolicyStatus`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrockagentcore-policy-policystatus.html}
 */
export type PolicyStatus =
  | "CREATING"
  | "ACTIVE"
  | "UPDATING"
  | "DELETING"
  | "CREATE_FAILED"
  | "UPDATE_FAILED"
  | "DELETE_FAILED";
/**
 * Type definition for `AWS::BedrockAgentCore::Policy.PolicyValidationMode`.
 * The validation mode for the policy. Determines how Cedar analyzer validation results are handled.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrockagentcore-policy-policyvalidationmode.html}
 */
export type PolicyValidationMode =
  | "FAIL_ON_ANY_FINDINGS"
  | "IGNORE_ALL_FINDINGS";
/**
 * Resource Type definition for AWS::BedrockAgentCore::Policy
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrockagentcore-policy.html}
 */
export class BedrockAgentCorePolicy extends $Resource<
  "AWS::BedrockAgentCore::Policy",
  BedrockAgentCorePolicyProperties,
  BedrockAgentCorePolicyAttributes
> {
  public static readonly Type = "AWS::BedrockAgentCore::Policy";
  constructor(
    logicalId: string,
    properties: BedrockAgentCorePolicyProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, BedrockAgentCorePolicy.Type, properties, options);
  }
}
