import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::BedrockAgentCore::PaymentCredentialProvider
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrockagentcore-paymentcredentialprovider.html}
 */
export type BedrockAgentCorePaymentCredentialProviderProperties = {
  /**
   * Supported vendor types for payment providers
   */
  CredentialProviderVendor: PaymentCredentialProviderVendorType;
  /**
   * Unique name for the payment credential provider
   * @minLength `1`
   * @maxLength `128`
   * @pattern `^[a-zA-Z0-9\-_]+$`
   */
  Name: string;
  /**
   * Provider configuration input containing secrets for creation/update
   */
  ProviderConfigurationInput?: PaymentProviderConfigurationInput;
  /**
   * Tags for the payment credential provider
   * @maxLength `50`
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::BedrockAgentCore::PaymentCredentialProvider`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrockagentcore-paymentcredentialprovider.html#aws-resource-bedrockagentcore-paymentcredentialprovider-return-values}
 */
export type BedrockAgentCorePaymentCredentialProviderAttributes = {
  /**
   * The timestamp when the credential provider was created
   */
  CreatedTime: string;
  /**
   * The Amazon Resource Name (ARN) of the payment credential provider
   * @pattern `^arn:(aws|aws-us-gov|aws-cn|aws-iso|aws-iso-b|aws-iso-e|aws-iso-f|aws-eusc):(acps|bedrock-agentcore):[A-Za-z0-9-]{1,64}:[0-9]{12}:token-vault/[a-zA-Z0-9-.]+/paymentcredentialprovider/[a-zA-Z0-9_.-]+$`
   */
  CredentialProviderArn: string;
  /**
   * The timestamp when the credential provider was last updated
   */
  LastUpdatedTime: string;
  /**
   * Provider configuration output containing secret ARNs (no raw secrets)
   */
  ProviderConfigurationOutput: {
    /**
     * Coinbase CDP configuration output with secret ARNs
     */
    CoinbaseCdpConfiguration: {
      /**
       * The Coinbase CDP API key ID
       * @minLength `1`
       * @maxLength `512`
       */
      ApiKeyId: string;
      /**
       * Contains information about a secret in AWS Secrets Manager
       */
      ApiKeySecretArn: {
        /**
         * The ARN of the secret in AWS Secrets Manager
         * @pattern `^arn:(aws|aws-us-gov|aws-cn|aws-iso|aws-iso-b|aws-iso-e|aws-iso-f|aws-eusc):secretsmanager:[A-Za-z0-9-]{1,64}:[0-9]{12}:secret:[a-zA-Z0-9-_/+=.@!]+$`
         */
        SecretArn: string;
      };
      /**
       * Contains information about a secret in AWS Secrets Manager
       */
      WalletSecretArn: {
        /**
         * The ARN of the secret in AWS Secrets Manager
         * @pattern `^arn:(aws|aws-us-gov|aws-cn|aws-iso|aws-iso-b|aws-iso-e|aws-iso-f|aws-eusc):secretsmanager:[A-Za-z0-9-]{1,64}:[0-9]{12}:secret:[a-zA-Z0-9-_/+=.@!]+$`
         */
        SecretArn: string;
      };
    };
    /**
     * Stripe Privy configuration output with secret ARNs
     */
    StripePrivyConfiguration: {
      /**
       * The app ID provided by Privy
       * @minLength `1`
       * @maxLength `512`
       */
      AppId: string;
      /**
       * Contains information about a secret in AWS Secrets Manager
       */
      AppSecretArn: {
        /**
         * The ARN of the secret in AWS Secrets Manager
         * @pattern `^arn:(aws|aws-us-gov|aws-cn|aws-iso|aws-iso-b|aws-iso-e|aws-iso-f|aws-eusc):secretsmanager:[A-Za-z0-9-]{1,64}:[0-9]{12}:secret:[a-zA-Z0-9-_/+=.@!]+$`
         */
        SecretArn: string;
      };
      /**
       * The authorization ID for the Stripe Privy integration
       * @minLength `1`
       * @maxLength `512`
       */
      AuthorizationId: string;
      /**
       * Contains information about a secret in AWS Secrets Manager
       */
      AuthorizationPrivateKeyArn: {
        /**
         * The ARN of the secret in AWS Secrets Manager
         * @pattern `^arn:(aws|aws-us-gov|aws-cn|aws-iso|aws-iso-b|aws-iso-e|aws-iso-f|aws-eusc):secretsmanager:[A-Za-z0-9-]{1,64}:[0-9]{12}:secret:[a-zA-Z0-9-_/+=.@!]+$`
         */
        SecretArn: string;
      };
    };
  };
};
/**
 * Type definition for `AWS::BedrockAgentCore::PaymentCredentialProvider.CoinbaseCdpConfigurationInput`.
 * Coinbase CDP configuration with API credentials
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrockagentcore-paymentcredentialprovider-coinbasecdpconfigurationinput.html}
 */
export type CoinbaseCdpConfigurationInput = {
  /**
   * The Coinbase CDP API key ID
   * @minLength `1`
   * @maxLength `512`
   */
  ApiKeyId: string;
  /**
   * The Coinbase CDP API key secret
   * @minLength `1`
   * @maxLength `2048`
   */
  ApiKeySecret: string;
  /**
   * The Coinbase CDP wallet secret
   * @minLength `1`
   * @maxLength `2048`
   */
  WalletSecret?: string;
};
/**
 * Type definition for `AWS::BedrockAgentCore::PaymentCredentialProvider.CoinbaseCdpConfigurationOutput`.
 * Coinbase CDP configuration output with secret ARNs
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrockagentcore-paymentcredentialprovider-coinbasecdpconfigurationoutput.html}
 */
export type CoinbaseCdpConfigurationOutput = {
  /**
   * The Coinbase CDP API key ID
   * @minLength `1`
   * @maxLength `512`
   */
  ApiKeyId: string;
  /**
   * Contains information about a secret in AWS Secrets Manager
   */
  ApiKeySecretArn: SecretInfo;
  /**
   * Contains information about a secret in AWS Secrets Manager
   */
  WalletSecretArn?: SecretInfo;
};
/**
 * Type definition for `AWS::BedrockAgentCore::PaymentCredentialProvider.PaymentCredentialProviderVendorType`.
 * Supported vendor types for payment providers
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrockagentcore-paymentcredentialprovider-paymentcredentialprovidervendortype.html}
 */
export type PaymentCredentialProviderVendorType = "CoinbaseCDP" | "StripePrivy";
/**
 * Type definition for `AWS::BedrockAgentCore::PaymentCredentialProvider.PaymentProviderConfigurationInput`.
 * Provider configuration input containing secrets for creation/update
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrockagentcore-paymentcredentialprovider-paymentproviderconfigurationinput.html}
 */
export type PaymentProviderConfigurationInput = {
  /**
   * Coinbase CDP configuration with API credentials
   */
  CoinbaseCdpConfiguration?: CoinbaseCdpConfigurationInput;
  /**
   * Stripe Privy configuration with credentials
   */
  StripePrivyConfiguration?: StripePrivyConfigurationInput;
};
/**
 * Type definition for `AWS::BedrockAgentCore::PaymentCredentialProvider.PaymentProviderConfigurationOutput`.
 * Provider configuration output containing secret ARNs (no raw secrets)
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrockagentcore-paymentcredentialprovider-paymentproviderconfigurationoutput.html}
 */
export type PaymentProviderConfigurationOutput = {
  /**
   * Coinbase CDP configuration output with secret ARNs
   */
  CoinbaseCdpConfiguration?: CoinbaseCdpConfigurationOutput;
  /**
   * Stripe Privy configuration output with secret ARNs
   */
  StripePrivyConfiguration?: StripePrivyConfigurationOutput;
};
/**
 * Type definition for `AWS::BedrockAgentCore::PaymentCredentialProvider.SecretInfo`.
 * Contains information about a secret in AWS Secrets Manager
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrockagentcore-paymentcredentialprovider-secretinfo.html}
 */
export type SecretInfo = {
  /**
   * The ARN of the secret in AWS Secrets Manager
   * @pattern `^arn:(aws|aws-us-gov|aws-cn|aws-iso|aws-iso-b|aws-iso-e|aws-iso-f|aws-eusc):secretsmanager:[A-Za-z0-9-]{1,64}:[0-9]{12}:secret:[a-zA-Z0-9-_/+=.@!]+$`
   */
  SecretArn: string;
};
/**
 * Type definition for `AWS::BedrockAgentCore::PaymentCredentialProvider.StripePrivyConfigurationInput`.
 * Stripe Privy configuration with credentials
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrockagentcore-paymentcredentialprovider-stripeprivyconfigurationinput.html}
 */
export type StripePrivyConfigurationInput = {
  /**
   * The app ID provided by Privy
   * @minLength `1`
   * @maxLength `512`
   */
  AppId: string;
  /**
   * The app secret provided by Privy
   * @minLength `1`
   * @maxLength `2048`
   */
  AppSecret: string;
  /**
   * The authorization ID for the Stripe Privy integration
   * @minLength `1`
   * @maxLength `512`
   */
  AuthorizationId: string;
  /**
   * The authorization private key for the Stripe Privy integration
   * @minLength `1`
   * @maxLength `4096`
   */
  AuthorizationPrivateKey: string;
};
/**
 * Type definition for `AWS::BedrockAgentCore::PaymentCredentialProvider.StripePrivyConfigurationOutput`.
 * Stripe Privy configuration output with secret ARNs
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrockagentcore-paymentcredentialprovider-stripeprivyconfigurationoutput.html}
 */
export type StripePrivyConfigurationOutput = {
  /**
   * The app ID provided by Privy
   * @minLength `1`
   * @maxLength `512`
   */
  AppId: string;
  /**
   * Contains information about a secret in AWS Secrets Manager
   */
  AppSecretArn: SecretInfo;
  /**
   * The authorization ID for the Stripe Privy integration
   * @minLength `1`
   * @maxLength `512`
   */
  AuthorizationId: string;
  /**
   * Contains information about a secret in AWS Secrets Manager
   */
  AuthorizationPrivateKeyArn: SecretInfo;
};
/**
 * Type definition for `AWS::BedrockAgentCore::PaymentCredentialProvider.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrockagentcore-paymentcredentialprovider-tag.html}
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
 * Resource Type definition for AWS::BedrockAgentCore::PaymentCredentialProvider
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrockagentcore-paymentcredentialprovider.html}
 */
export class BedrockAgentCorePaymentCredentialProvider extends $Resource<
  "AWS::BedrockAgentCore::PaymentCredentialProvider",
  BedrockAgentCorePaymentCredentialProviderProperties,
  BedrockAgentCorePaymentCredentialProviderAttributes
> {
  public static readonly Type =
    "AWS::BedrockAgentCore::PaymentCredentialProvider";
  constructor(
    logicalId: string,
    properties: BedrockAgentCorePaymentCredentialProviderProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      BedrockAgentCorePaymentCredentialProvider.Type,
      properties,
      options,
    );
  }
}
