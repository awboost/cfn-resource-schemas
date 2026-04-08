import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Definition of AWS::Bedrock::EnforcedGuardrailConfiguration Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-enforcedguardrailconfiguration.html}
 */
export type BedrockEnforcedGuardrailConfigurationProperties = {
  /**
   * Identifier for the guardrail, could be the ID or the ARN
   * @minLength `0`
   * @maxLength `2048`
   * @pattern `^(([a-z0-9]+)|(arn:aws(-[^:]+)?:bedrock:[a-z0-9-]{1,20}:[0-9]{12}:guardrail/[a-z0-9]+))$`
   */
  GuardrailIdentifier: string;
  /**
   * Numerical guardrail version (not DRAFT)
   * @pattern `^[1-9][0-9]{0,7}$`
   */
  GuardrailVersion: string;
  /**
   * Model-specific information for the enforced guardrail configuration. If not present, the configuration is enforced on all models
   */
  ModelEnforcement?: ModelEnforcement;
  /**
   * Selective content guarding controls for enforced guardrails
   */
  SelectiveContentGuarding?: SelectiveContentGuarding;
};
/**
 * Attribute type definition for `AWS::Bedrock::EnforcedGuardrailConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-enforcedguardrailconfiguration.html#aws-resource-bedrock-enforcedguardrailconfiguration-return-values}
 */
export type BedrockEnforcedGuardrailConfigurationAttributes = {
  /**
   * Unique ID for the account enforced configuration
   * @pattern `^[a-z0-9]+$`
   */
  ConfigId: string;
  /**
   * Timestamp when the configuration was created
   */
  CreatedAt: string;
  /**
   * The ARN of the role used to create the configuration
   */
  CreatedBy: string;
  /**
   * ARN representation for the guardrail
   * @minLength `0`
   * @maxLength `2048`
   * @pattern `^arn:aws(-[^:]+)?:bedrock:[a-z0-9-]{1,20}:[0-9]{12}:guardrail/[a-z0-9]+$`
   */
  GuardrailArn: string;
  /**
   * Unique ID for the guardrail
   * @minLength `0`
   * @maxLength `64`
   * @pattern `^[a-z0-9]+$`
   */
  GuardrailId: string;
  /**
   * Configuration owner type
   */
  Owner: ConfigOwner;
  /**
   * Timestamp when the configuration was last updated
   */
  UpdatedAt: string;
  /**
   * The ARN of the role used to update the configuration
   */
  UpdatedBy: string;
};
/**
 * Type definition for `AWS::Bedrock::EnforcedGuardrailConfiguration.ConfigOwner`.
 * Configuration owner type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-enforcedguardrailconfiguration-configowner.html}
 */
export type ConfigOwner = "ACCOUNT";
/**
 * Type definition for `AWS::Bedrock::EnforcedGuardrailConfiguration.ModelEnforcement`.
 * Model-specific information for the enforced guardrail configuration. If not present, the configuration is enforced on all models
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-enforcedguardrailconfiguration-modelenforcement.html}
 */
export type ModelEnforcement = {
  /**
   * Models to exclude from enforcement. If a model is in both lists, it is excluded
   * @minLength `0`
   */
  ExcludedModels: string[];
  /**
   * Models to enforce the guardrail on
   * @minLength `1`
   */
  IncludedModels: string[];
};
/**
 * Type definition for `AWS::Bedrock::EnforcedGuardrailConfiguration.SelectiveContentGuarding`.
 * Selective content guarding controls for enforced guardrails
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-enforcedguardrailconfiguration-selectivecontentguarding.html}
 */
export type SelectiveContentGuarding = {
  /**
   * Selective guarding mode for user messages
   */
  Messages?: "SELECTIVE" | "COMPREHENSIVE";
  /**
   * Selective guarding mode for system prompts
   */
  System?: "SELECTIVE" | "COMPREHENSIVE";
};
/**
 * Definition of AWS::Bedrock::EnforcedGuardrailConfiguration Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-enforcedguardrailconfiguration.html}
 */
export class BedrockEnforcedGuardrailConfiguration extends $Resource<
  "AWS::Bedrock::EnforcedGuardrailConfiguration",
  BedrockEnforcedGuardrailConfigurationProperties,
  BedrockEnforcedGuardrailConfigurationAttributes
> {
  public static readonly Type = "AWS::Bedrock::EnforcedGuardrailConfiguration";
  constructor(
    logicalId: string,
    properties: BedrockEnforcedGuardrailConfigurationProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      BedrockEnforcedGuardrailConfiguration.Type,
      properties,
      options,
    );
  }
}
