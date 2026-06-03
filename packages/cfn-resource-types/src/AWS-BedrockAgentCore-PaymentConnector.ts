import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::BedrockAgentCore::PaymentConnector
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrockagentcore-paymentconnector.html}
 */
export type BedrockAgentCorePaymentConnectorProperties = {
  /**
   * The name of the payment connector
   * @pattern `^[a-zA-Z][a-zA-Z0-9_]{0,47}$`
   */
  ConnectorName: string;
  ConnectorType: PaymentConnectorType;
  /**
   * The credential provider configurations for the connector
   * @minLength `1`
   * @maxLength `1`
   */
  CredentialProviderConfigurations: CredentialsProviderConfiguration[];
  /**
   * A description of the payment connector
   * @minLength `1`
   * @maxLength `4096`
   * @pattern `^[a-zA-Z0-9\s]+$`
   */
  Description?: string;
  /**
   * The identifier of the parent payment manager
   * @pattern `^([0-9a-z][-]?){1,100}-[0-9a-z]{10}$`
   */
  PaymentManagerId: string;
};
/**
 * Attribute type definition for `AWS::BedrockAgentCore::PaymentConnector`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrockagentcore-paymentconnector.html#aws-resource-bedrockagentcore-paymentconnector-return-values}
 */
export type BedrockAgentCorePaymentConnectorAttributes = {
  /**
   * The timestamp when the connector was created
   */
  ConnectorCreatedAt: string;
  /**
   * The timestamp when the connector was last updated
   */
  ConnectorLastUpdatedAt: string;
  ConnectorStatus: PaymentConnectorStatus;
  /**
   * Synthetic ARN for the payment connector (used for engine resolution)
   * @pattern `^arn:aws[-a-z]{0,7}:bedrock-agentcore:[a-z0-9-]+:[0-9]{12}:payment-manager/[a-z0-9-]+/connector/[a-z0-9-]+$`
   */
  PaymentConnectorArn: string;
  /**
   * The unique identifier for the payment connector
   * @pattern `^([0-9a-z][-]?){1,100}-[0-9a-z]{10}$`
   */
  PaymentConnectorId: string;
};
/**
 * Type definition for `AWS::BedrockAgentCore::PaymentConnector.CredentialsProviderConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrockagentcore-paymentconnector-credentialsproviderconfiguration.html}
 */
export type CredentialsProviderConfiguration = {
  CoinbaseCDP?: PaymentCredentialProviderConfiguration;
  StripePrivy?: PaymentCredentialProviderConfiguration;
};
/**
 * Type definition for `AWS::BedrockAgentCore::PaymentConnector.PaymentConnectorStatus`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrockagentcore-paymentconnector-paymentconnectorstatus.html}
 */
export type PaymentConnectorStatus =
  | "CREATING"
  | "UPDATING"
  | "DELETING"
  | "READY"
  | "CREATE_FAILED"
  | "UPDATE_FAILED"
  | "DELETE_FAILED";
/**
 * Type definition for `AWS::BedrockAgentCore::PaymentConnector.PaymentConnectorType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrockagentcore-paymentconnector-paymentconnectortype.html}
 */
export type PaymentConnectorType = "CoinbaseCDP" | "StripePrivy";
/**
 * Type definition for `AWS::BedrockAgentCore::PaymentConnector.PaymentCredentialProviderConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrockagentcore-paymentconnector-paymentcredentialproviderconfiguration.html}
 */
export type PaymentCredentialProviderConfiguration = {
  /**
   * The ARN of the payment credential provider
   */
  CredentialProviderArn: string;
};
/**
 * Resource Type definition for AWS::BedrockAgentCore::PaymentConnector
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrockagentcore-paymentconnector.html}
 */
export class BedrockAgentCorePaymentConnector extends $Resource<
  "AWS::BedrockAgentCore::PaymentConnector",
  BedrockAgentCorePaymentConnectorProperties,
  BedrockAgentCorePaymentConnectorAttributes
> {
  public static readonly Type = "AWS::BedrockAgentCore::PaymentConnector";
  constructor(
    logicalId: string,
    properties: BedrockAgentCorePaymentConnectorProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      BedrockAgentCorePaymentConnector.Type,
      properties,
      options,
    );
  }
}
