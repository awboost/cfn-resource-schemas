import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::BedrockAgentCore::TokenVault
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrockagentcore-tokenvault.html}
 */
export type BedrockAgentCoreTokenVaultProperties = Record<string, never>;
/**
 * Attribute type definition for `AWS::BedrockAgentCore::TokenVault`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrockagentcore-tokenvault.html#aws-resource-bedrockagentcore-tokenvault-return-values}
 */
export type BedrockAgentCoreTokenVaultAttributes = {
  /**
   * The ARN of the token vault.
   * @pattern `^arn:[a-z0-9-\.]{1,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[^/].{0,1023}$`
   */
  Arn: string;
  /**
   * The KMS configuration for the token vault.
   */
  KmsConfiguration: {
    /**
     * The type of KMS key (CustomerManagedKey or ServiceManagedKey).
     */
    KeyType: "CustomerManagedKey" | "ServiceManagedKey";
    /**
     * The Amazon Resource Name (ARN) of the KMS key.
     * @minLength `1`
     * @maxLength `2048`
     * @pattern `^arn:aws(|-cn|-us-gov):kms:[a-zA-Z0-9-]*:[0-9]{12}:key/[a-zA-Z0-9-]{36}$`
     */
    KmsKeyArn: string;
  };
  /**
   * The timestamp when the token vault was last modified.
   */
  LastModifiedDate: string;
  /**
   * The unique identifier of the token vault.
   * @minLength `1`
   * @maxLength `64`
   * @pattern `^[a-zA-Z0-9\-_]+$`
   */
  TokenVaultId: string;
};
/**
 * Type definition for `AWS::BedrockAgentCore::TokenVault.KmsConfiguration`.
 * Contains the KMS configuration for a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrockagentcore-tokenvault-kmsconfiguration.html}
 */
export type KmsConfiguration = {
  /**
   * The type of KMS key (CustomerManagedKey or ServiceManagedKey).
   */
  KeyType: "CustomerManagedKey" | "ServiceManagedKey";
  /**
   * The Amazon Resource Name (ARN) of the KMS key.
   * @minLength `1`
   * @maxLength `2048`
   * @pattern `^arn:aws(|-cn|-us-gov):kms:[a-zA-Z0-9-]*:[0-9]{12}:key/[a-zA-Z0-9-]{36}$`
   */
  KmsKeyArn?: string;
};
/**
 * Resource Type definition for AWS::BedrockAgentCore::TokenVault
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrockagentcore-tokenvault.html}
 */
export class BedrockAgentCoreTokenVault extends $Resource<
  "AWS::BedrockAgentCore::TokenVault",
  BedrockAgentCoreTokenVaultProperties,
  BedrockAgentCoreTokenVaultAttributes
> {
  public static readonly Type = "AWS::BedrockAgentCore::TokenVault";
  constructor(
    logicalId: string,
    properties: BedrockAgentCoreTokenVaultProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, BedrockAgentCoreTokenVault.Type, properties, options);
  }
}
