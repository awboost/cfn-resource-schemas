import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Definition of AWS::BedrockAgentCore::Browser Resource Type. This is a read-only resource representing the default service-managed browser.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrockagentcore-browser.html}
 */
export type BedrockAgentCoreBrowserProperties = Record<string, never>;
/**
 * Attribute type definition for `AWS::BedrockAgentCore::Browser`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrockagentcore-browser.html#aws-resource-bedrockagentcore-browser-return-values}
 */
export type BedrockAgentCoreBrowserAttributes = {
  /**
   * The Amazon Resource Name (ARN) of the browser.
   * @pattern `^arn:[a-z0-9-]+:bedrock-agentcore:[a-z0-9-]+:(aws|[0-9]{12}):browser/aws\.browser\.v1$`
   */
  BrowserArn: string;
  /**
   * The unique identifier of the browser.
   * @pattern `^aws\.browser\.v1$`
   */
  BrowserId: string;
  /**
   * The name of the browser.
   */
  Name: string;
  /**
   * The current status of the browser.
   */
  Status: "READY";
};
/**
 * Definition of AWS::BedrockAgentCore::Browser Resource Type. This is a read-only resource representing the default service-managed browser.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrockagentcore-browser.html}
 */
export class BedrockAgentCoreBrowser extends $Resource<
  "AWS::BedrockAgentCore::Browser",
  BedrockAgentCoreBrowserProperties,
  BedrockAgentCoreBrowserAttributes
> {
  public static readonly Type = "AWS::BedrockAgentCore::Browser";
  constructor(
    logicalId: string,
    properties: BedrockAgentCoreBrowserProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, BedrockAgentCoreBrowser.Type, properties, options);
  }
}
