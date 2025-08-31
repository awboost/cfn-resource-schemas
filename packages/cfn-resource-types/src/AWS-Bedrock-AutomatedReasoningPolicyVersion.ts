import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Definition of AWS::Bedrock::AutomatedReasoningPolicyVersion Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-automatedreasoningpolicyversion.html}
 */
export type BedrockAutomatedReasoningPolicyVersionProperties = {
  /**
   * The hash for this version
   * @minLength `128`
   * @maxLength `128`
   * @pattern `^[0-9a-z]{128}$`
   */
  LastUpdatedDefinitionHash?: string;
  /**
   * Arn of the policy
   * @minLength `1`
   * @maxLength `2048`
   * @pattern `^arn:aws(-[^:]+)?:bedrock:[a-z0-9-]{1,20}:[0-9]{12}:automated-reasoning-policy\/[a-z0-9]{12}$`
   */
  PolicyArn: string;
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::Bedrock::AutomatedReasoningPolicyVersion`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-automatedreasoningpolicyversion.html#aws-resource-bedrock-automatedreasoningpolicyversion-return-values}
 */
export type BedrockAutomatedReasoningPolicyVersionAttributes = {
  /**
   * Time this policy version was created
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
   * The description inherited from the policy
   * @maxLength `1024`
   * @pattern `^[\s\S]+$`
   */
  Description: string;
  /**
   * The name inherited from the policy
   * @minLength `1`
   * @maxLength `256`
   * @pattern `^[0-9a-zA-Z-_ ]+$`
   */
  Name: string;
  /**
   * The id of the associated policy
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
   * The version of the policy
   * @maxLength `12`
   * @pattern `^([1-9][0-9]{0,11})$`
   */
  Version: string;
};
/**
 * Type definition for `AWS::Bedrock::AutomatedReasoningPolicyVersion.Tag`.
 * Definition of the key/value pair for a tag
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-automatedreasoningpolicyversion-tag.html}
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
 * Definition of AWS::Bedrock::AutomatedReasoningPolicyVersion Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-automatedreasoningpolicyversion.html}
 */
export class BedrockAutomatedReasoningPolicyVersion extends $Resource<
  "AWS::Bedrock::AutomatedReasoningPolicyVersion",
  BedrockAutomatedReasoningPolicyVersionProperties,
  BedrockAutomatedReasoningPolicyVersionAttributes
> {
  public static readonly Type = "AWS::Bedrock::AutomatedReasoningPolicyVersion";
  constructor(
    logicalId: string,
    properties: BedrockAutomatedReasoningPolicyVersionProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      BedrockAutomatedReasoningPolicyVersion.Type,
      properties,
      options,
    );
  }
}
