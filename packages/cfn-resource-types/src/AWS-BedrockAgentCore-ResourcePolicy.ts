import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::BedrockAgentCore::ResourcePolicy
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrockagentcore-resourcepolicy.html}
 */
export type BedrockAgentCoreResourcePolicyProperties = {
  /**
   * The resource policy to create or update.
   * @minLength `1`
   * @maxLength `20480`
   */
  Policy: string;
  /**
   * The Amazon Resource Name (ARN) of the resource for which to create or update the resource policy.
   * @minLength `20`
   * @maxLength `1011`
   * @pattern `^arn:[a-z0-9-]+:bedrock-agentcore:[a-z0-9-]*:[0-9]{12}:.+$`
   */
  ResourceArn: string;
};
/**
 * Resource Type definition for AWS::BedrockAgentCore::ResourcePolicy
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrockagentcore-resourcepolicy.html}
 */
export class BedrockAgentCoreResourcePolicy extends $Resource<
  "AWS::BedrockAgentCore::ResourcePolicy",
  BedrockAgentCoreResourcePolicyProperties,
  Record<string, never>
> {
  public static readonly Type = "AWS::BedrockAgentCore::ResourcePolicy";
  constructor(
    logicalId: string,
    properties: BedrockAgentCoreResourcePolicyProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, BedrockAgentCoreResourcePolicy.Type, properties, options);
  }
}
