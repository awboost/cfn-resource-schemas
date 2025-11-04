import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Definition of AWS::Bedrock::AutomatedReasoningPolicy Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-automatedreasoningpolicy.html}
 */
export type BedrockAutomatedReasoningPolicyProperties = {
  /**
   * @maxLength `1024`
   * @pattern `^[\s\S]+$`
   */
  Description?: string;
  /**
   * Specifies whether to force delete the automated reasoning policy even if it has active resources. When false , Amazon Bedrock validates if all artifacts have been deleted (e.g. policy version, test case, test result) for a policy before deletion. When true , Amazon Bedrock will delete the policy and all its artifacts without validation. Default is false
   */
  ForceDelete?: boolean;
  /**
   * The KMS key with which the Policy's assets will be encrypted at rest.
   * @minLength `1`
   * @maxLength `2048`
   * @pattern `^(arn:aws(-[^:]+)?:kms:[a-zA-Z0-9-]*:[0-9]{12}:((key/[a-zA-Z0-9-]{36})|(alias/[a-zA-Z0-9-_/]+)))|([a-zA-Z0-9-]{36})|(alias/[a-zA-Z0-9-_/]+)$`
   */
  KmsKeyId?: string;
  /**
   * @minLength `1`
   * @maxLength `256`
   * @pattern `^[0-9a-zA-Z-_ ]+$`
   */
  Name: string;
  PolicyDefinition?: PolicyDefinition;
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::Bedrock::AutomatedReasoningPolicy`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-automatedreasoningpolicy.html#aws-resource-bedrock-automatedreasoningpolicy-return-values}
 */
export type BedrockAutomatedReasoningPolicyAttributes = {
  /**
   * Time this policy was created
   */
  CreatedAt: string;
  /**
   * The hash for this version
   * @minLength `128`
   * @maxLength `128`
   * @pattern `^[0-9a-z]{128}$`
   */
  DefinitionHash: string;
  /**
   * The KMS key with which the Policy's assets will be encrypted at rest.
   * @minLength `1`
   * @maxLength `2048`
   * @pattern `^arn:aws(-[^:]+)?:kms:[a-zA-Z0-9-]*:[0-9]{12}:key/[a-zA-Z0-9-]{36}$`
   */
  KmsKeyArn: string;
  /**
   * @minLength `1`
   * @maxLength `2048`
   * @pattern `^arn:aws(-[^:]+)?:bedrock:[a-z0-9-]{1,20}:[0-9]{12}:automated-reasoning-policy\/[a-z0-9]{12}$`
   */
  PolicyArn: string;
  /**
   * The id of the policy
   * @minLength `1`
   * @maxLength `2048`
   * @pattern `^[a-z0-9]{12}$`
   */
  PolicyId: string;
  /**
   * Time this policy was last updated
   */
  UpdatedAt: string;
  /**
   * Version of the policy that was created. This will always be `DRAFT`
   * @pattern `^(([1-9][0-9]{0,11})|(DRAFT))$`
   */
  Version: string;
};
/**
 * Type definition for `AWS::Bedrock::AutomatedReasoningPolicy.PolicyDefinition`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-automatedreasoningpolicy-policydefinition.html}
 */
export type PolicyDefinition = {
  /**
   * The rules definition block of an AutomatedReasoningPolicyDefinition.
   * @maxLength `500`
   */
  Rules?: PolicyDefinitionRule[];
  /**
   * The types definition block of an AutomatedReasoningPolicyDefinition.
   * @maxLength `50`
   */
  Types?: PolicyDefinitionType[];
  /**
   * The variables definition block of an AutomatedReasoningPolicyDefinition.
   * @maxLength `200`
   */
  Variables?: PolicyDefinitionVariable[];
  /**
   * The policy format version.
   */
  Version?: string;
};
/**
 * Type definition for `AWS::Bedrock::AutomatedReasoningPolicy.PolicyDefinitionRule`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-automatedreasoningpolicy-policydefinitionrule.html}
 */
export type PolicyDefinitionRule = {
  /**
   * An alternate expression for this rule
   * @maxLength `2048`
   * @pattern `^[\s\S]+$`
   */
  AlternateExpression?: string;
  /**
   * The SMT expression for this rule
   * @maxLength `2048`
   * @pattern `^[\s\S]+$`
   */
  Expression: string;
  /**
   * A unique id within the PolicyDefinition
   * @minLength `12`
   * @maxLength `12`
   * @pattern `^[A-Z][0-9A-Z]{11}$`
   */
  Id: string;
};
/**
 * Type definition for `AWS::Bedrock::AutomatedReasoningPolicy.PolicyDefinitionType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-automatedreasoningpolicy-policydefinitiontype.html}
 */
export type PolicyDefinitionType = {
  /**
   * A natural language description of this type.
   * @maxLength `1024`
   * @pattern `^[\s\S]+$`
   */
  Description?: string;
  /**
   * A name for this type.
   * @minLength `1`
   * @maxLength `64`
   * @pattern `^[A-Za-z][A-Za-z0-9_]+$`
   */
  Name: string;
  /**
   * A list of valid values for this type.
   * @minLength `1`
   * @maxLength `50`
   */
  Values: PolicyDefinitionTypeValue[];
};
/**
 * Type definition for `AWS::Bedrock::AutomatedReasoningPolicy.PolicyDefinitionTypeValue`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-automatedreasoningpolicy-policydefinitiontypevalue.html}
 */
export type PolicyDefinitionTypeValue = {
  /**
   * A natural language description of the type's value.
   * @maxLength `1024`
   * @pattern `^[\s\S]+$`
   */
  Description?: string;
  /**
   * The value of the type value.
   * @minLength `1`
   * @maxLength `64`
   * @pattern `^[A-Za-z][A-Za-z0-9_]+$`
   */
  Value: string;
};
/**
 * Type definition for `AWS::Bedrock::AutomatedReasoningPolicy.PolicyDefinitionVariable`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-automatedreasoningpolicy-policydefinitionvariable.html}
 */
export type PolicyDefinitionVariable = {
  /**
   * A natural language description of this variable.
   * @maxLength `1024`
   * @pattern `^[\s\S]+$`
   */
  Description: string;
  /**
   * A name from this variable.
   * @minLength `1`
   * @maxLength `64`
   * @pattern `^[A-Za-z][A-Za-z0-9_]+$`
   */
  Name: string;
  /**
   * A type for this variable.
   * @minLength `1`
   * @maxLength `64`
   * @pattern `^[A-Za-z][A-Za-z0-9_]+$`
   */
  Type: string;
};
/**
 * Type definition for `AWS::Bedrock::AutomatedReasoningPolicy.Tag`.
 * Definition of the key/value pair for a tag
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-automatedreasoningpolicy-tag.html}
 */
export type Tag = {
  /**
   * Tag Key
   * @minLength `1`
   * @maxLength `128`
   * @pattern `^[a-zA-Z0-9\s._:/=+@-]*$`
   */
  Key: string;
  /**
   * Tag Value
   * @minLength `0`
   * @maxLength `256`
   * @pattern `^[a-zA-Z0-9\s._:/=+@-]*$`
   */
  Value: string;
};
/**
 * Definition of AWS::Bedrock::AutomatedReasoningPolicy Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-automatedreasoningpolicy.html}
 */
export class BedrockAutomatedReasoningPolicy extends $Resource<
  "AWS::Bedrock::AutomatedReasoningPolicy",
  BedrockAutomatedReasoningPolicyProperties,
  BedrockAutomatedReasoningPolicyAttributes
> {
  public static readonly Type = "AWS::Bedrock::AutomatedReasoningPolicy";
  constructor(
    logicalId: string,
    properties: BedrockAutomatedReasoningPolicyProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, BedrockAutomatedReasoningPolicy.Type, properties, options);
  }
}
