import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Definition of AWS::Bedrock::GuardrailVersion Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-guardrailversion.html}
 */
export type BedrockGuardrailVersionProperties = {
  /**
   * Description of the Guardrail version
   * @minLength `1`
   * @maxLength `200`
   */
  Description?: string;
  /**
   * Identifier (GuardrailId or GuardrailArn) for the guardrail
   * @maxLength `2048`
   * @pattern `^(([a-z0-9]+)|(arn:aws(-[^:]+)?:bedrock:[a-z0-9-]{1,20}:[0-9]{12}:guardrail/[a-z0-9]+))$`
   */
  GuardrailIdentifier: string;
};
/**
 * Attribute type definition for `AWS::Bedrock::GuardrailVersion`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-guardrailversion.html#aws-resource-bedrock-guardrailversion-return-values}
 */
export type BedrockGuardrailVersionAttributes = {
  /**
   * Arn representation for the guardrail
   * @maxLength `2048`
   * @pattern `^arn:aws(-[^:]+)?:bedrock:[a-z0-9-]{1,20}:[0-9]{12}:guardrail/[a-z0-9]+$`
   */
  GuardrailArn: string;
  /**
   * Unique id for the guardrail
   * @maxLength `64`
   * @pattern `^[a-z0-9]+$`
   */
  GuardrailId: string;
  /**
   * Guardrail version
   * @pattern `^[1-9][0-9]{0,7}$`
   */
  Version: string;
};
/**
 * Definition of AWS::Bedrock::GuardrailVersion Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-guardrailversion.html}
 */
export class BedrockGuardrailVersion extends $Resource<
  "AWS::Bedrock::GuardrailVersion",
  BedrockGuardrailVersionProperties,
  BedrockGuardrailVersionAttributes
> {
  public static readonly Type = "AWS::Bedrock::GuardrailVersion";
  constructor(
    logicalId: string,
    properties: BedrockGuardrailVersionProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, BedrockGuardrailVersion.Type, properties, options);
  }
}
