import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::BedrockAgentCore::ApiKeyCredentialProvider
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrockagentcore-apikeycredentialprovider.html}
 */
export type BedrockAgentCoreApiKeyCredentialProviderProperties = {
  /**
   * The API key to use for authentication
   * @minLength `1`
   * @maxLength `65536`
   */
  ApiKey?: string;
  /**
   * The name of the API key credential provider
   * @minLength `1`
   * @maxLength `128`
   * @pattern `^[a-zA-Z0-9\-_]+$`
   */
  Name: string;
  /**
   * Tags to assign to the API key credential provider
   * @maxLength `50`
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::BedrockAgentCore::ApiKeyCredentialProvider`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrockagentcore-apikeycredentialprovider.html#aws-resource-bedrockagentcore-apikeycredentialprovider-return-values}
 */
export type BedrockAgentCoreApiKeyCredentialProviderAttributes = {
  /**
   * The ARN of the API key secret in AWS Secrets Manager
   */
  ApiKeySecretArn: {
    /**
     * The ARN of the secret in AWS Secrets Manager
     * @pattern `^arn:(aws|aws-us-gov):secretsmanager:[A-Za-z0-9-]{1,64}:[0-9]{12}:secret:[a-zA-Z0-9-_/+=.@!]+$`
     */
    SecretArn: string;
  };
  /**
   * The timestamp when the credential provider was created
   */
  CreatedTime: string;
  /**
   * The Amazon Resource Name (ARN) of the API key credential provider
   * @pattern `^arn:(aws|aws-us-gov):bedrock-agentcore:[A-Za-z0-9-]{1,64}:[0-9]{12}:token-vault/[a-zA-Z0-9-.]+/apikeycredentialprovider/[a-zA-Z0-9-]+$`
   */
  CredentialProviderArn: string;
  /**
   * The timestamp when the credential provider was last updated
   */
  LastUpdatedTime: string;
};
/**
 * Type definition for `AWS::BedrockAgentCore::ApiKeyCredentialProvider.ApiKeySecretArn`.
 * Contains information about the API key secret in AWS Secrets Manager
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrockagentcore-apikeycredentialprovider-apikeysecretarn.html}
 */
export type ApiKeySecretArn = {
  /**
   * The ARN of the secret in AWS Secrets Manager
   * @pattern `^arn:(aws|aws-us-gov):secretsmanager:[A-Za-z0-9-]{1,64}:[0-9]{12}:secret:[a-zA-Z0-9-_/+=.@!]+$`
   */
  SecretArn: string;
};
/**
 * Type definition for `AWS::BedrockAgentCore::ApiKeyCredentialProvider.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrockagentcore-apikeycredentialprovider-tag.html}
 */
export type Tag = {
  /**
   * @minLength `1`
   * @maxLength `128`
   * @pattern `^[a-zA-Z0-9\s._:/=+@-]*$`
   */
  Key: string;
  /**
   * @minLength `0`
   * @maxLength `256`
   * @pattern `^[a-zA-Z0-9\s._:/=+@-]*$`
   */
  Value: string;
};
/**
 * Resource Type definition for AWS::BedrockAgentCore::ApiKeyCredentialProvider
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrockagentcore-apikeycredentialprovider.html}
 */
export class BedrockAgentCoreApiKeyCredentialProvider extends $Resource<
  "AWS::BedrockAgentCore::ApiKeyCredentialProvider",
  BedrockAgentCoreApiKeyCredentialProviderProperties,
  BedrockAgentCoreApiKeyCredentialProviderAttributes
> {
  public static readonly Type =
    "AWS::BedrockAgentCore::ApiKeyCredentialProvider";
  constructor(
    logicalId: string,
    properties: BedrockAgentCoreApiKeyCredentialProviderProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      BedrockAgentCoreApiKeyCredentialProvider.Type,
      properties,
      options,
    );
  }
}
