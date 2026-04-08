import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Definition of AWS::Bedrock::ResourcePolicy Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-resourcepolicy.html}
 */
export type BedrockResourcePolicyProperties = {
  /**
   * The IAM policy document defining access permissions for the guardrail and guardrail profile resources
   */
  PolicyDocument: Record<string, any>;
  /**
   * The ARN of the Bedrock Guardrail or Guardrail Profile resource
   * @minLength `1`
   * @maxLength `2048`
   * @pattern `^arn:aws(-[a-z]+)*:bedrock:[a-z0-9-]+:[0-9]{12}:(guardrail|guardrail-profile)/[a-z0-9]+$`
   */
  ResourceArn: string;
};
/**
 * Definition of AWS::Bedrock::ResourcePolicy Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-resourcepolicy.html}
 */
export class BedrockResourcePolicy extends $Resource<
  "AWS::Bedrock::ResourcePolicy",
  BedrockResourcePolicyProperties,
  Record<string, never>
> {
  public static readonly Type = "AWS::Bedrock::ResourcePolicy";
  constructor(
    logicalId: string,
    properties: BedrockResourcePolicyProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, BedrockResourcePolicy.Type, properties, options);
  }
}
