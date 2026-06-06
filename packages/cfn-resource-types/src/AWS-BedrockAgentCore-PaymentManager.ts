import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::BedrockAgentCore::PaymentManager
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrockagentcore-paymentmanager.html}
 */
export type BedrockAgentCorePaymentManagerProperties = {
  AuthorizerConfiguration?: AuthorizerConfiguration;
  AuthorizerType: PaymentsAuthorizerType;
  /**
   * A description of the payment manager
   * @minLength `1`
   * @maxLength `4096`
   * @pattern `^[a-zA-Z0-9\s]+$`
   */
  Description?: string;
  /**
   * The name of the payment manager
   * @pattern `^[a-zA-Z][a-zA-Z0-9]{0,47}$`
   */
  Name: string;
  /**
   * The ARN of the IAM role for the payment manager
   * @minLength `1`
   * @maxLength `2048`
   * @pattern `^arn:aws(-[^:]+)?:iam::([0-9]{12})?:role/.+$`
   */
  RoleArn: string;
  /**
   * Tags to assign to the payment manager
   * @maxLength `50`
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::BedrockAgentCore::PaymentManager`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrockagentcore-paymentmanager.html#aws-resource-bedrockagentcore-paymentmanager-return-values}
 */
export type BedrockAgentCorePaymentManagerAttributes = {
  /**
   * The timestamp when the payment manager was created
   */
  CreatedAt: string;
  /**
   * The timestamp when the payment manager was last updated
   */
  LastUpdatedAt: string;
  /**
   * The Amazon Resource Name (ARN) of the payment manager
   * @pattern `^arn:aws[-a-z]{0,7}:bedrock-agentcore:[a-z0-9-]+:[0-9]{12}:payment-manager/([0-9a-z][-]?){1,48}-[a-z0-9]{10}$`
   */
  PaymentManagerArn: string;
  /**
   * The unique identifier for the payment manager
   * @pattern `^([0-9a-z][-]?){1,100}-[0-9a-z]{10}$`
   */
  PaymentManagerId: string;
  Status: PaymentManagerStatus;
  WorkloadIdentityDetails: {
    /**
     * @minLength `1`
     * @maxLength `1024`
     */
    WorkloadIdentityArn: string;
  };
};
/**
 * Type definition for `AWS::BedrockAgentCore::PaymentManager.AuthorizerConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrockagentcore-paymentmanager-authorizerconfiguration.html}
 */
export type AuthorizerConfiguration = {
  CustomJWTAuthorizer: CustomJWTAuthorizerConfiguration;
};
/**
 * Type definition for `AWS::BedrockAgentCore::PaymentManager.AuthorizingClaimMatchValueType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrockagentcore-paymentmanager-authorizingclaimmatchvaluetype.html}
 */
export type AuthorizingClaimMatchValueType = {
  ClaimMatchOperator: "EQUALS" | "CONTAINS" | "CONTAINS_ANY";
  ClaimMatchValue: ClaimMatchValueType;
};
/**
 * Type definition for `AWS::BedrockAgentCore::PaymentManager.ClaimMatchValueType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrockagentcore-paymentmanager-claimmatchvaluetype.html}
 */
export type ClaimMatchValueType = {
  /**
   * @minLength `1`
   * @maxLength `255`
   * @pattern `^[A-Za-z0-9_.-]+$`
   */
  MatchValueString?: string;
  MatchValueStringList?: string[];
};
/**
 * Type definition for `AWS::BedrockAgentCore::PaymentManager.CustomClaimValidationType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrockagentcore-paymentmanager-customclaimvalidationtype.html}
 */
export type CustomClaimValidationType = {
  AuthorizingClaimMatchValue: AuthorizingClaimMatchValueType;
  /**
   * @minLength `1`
   * @maxLength `255`
   * @pattern `^[A-Za-z0-9_.:/-]+$`
   */
  InboundTokenClaimName: string;
  InboundTokenClaimValueType: "STRING" | "STRING_ARRAY";
};
/**
 * Type definition for `AWS::BedrockAgentCore::PaymentManager.CustomJWTAuthorizerConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrockagentcore-paymentmanager-customjwtauthorizerconfiguration.html}
 */
export type CustomJWTAuthorizerConfiguration = {
  /**
   * @minLength `1`
   */
  AllowedAudience?: string[];
  /**
   * @minLength `1`
   */
  AllowedClients?: string[];
  /**
   * @minLength `1`
   */
  AllowedScopes?: string[];
  /**
   * @minLength `1`
   */
  CustomClaims?: CustomClaimValidationType[];
  /**
   * @pattern `^.+/\.well-known/openid-configuration$`
   */
  DiscoveryUrl: string;
};
/**
 * Type definition for `AWS::BedrockAgentCore::PaymentManager.PaymentManagerStatus`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrockagentcore-paymentmanager-paymentmanagerstatus.html}
 */
export type PaymentManagerStatus =
  | "CREATING"
  | "UPDATING"
  | "DELETING"
  | "READY"
  | "CREATE_FAILED"
  | "UPDATE_FAILED"
  | "DELETE_FAILED";
/**
 * Type definition for `AWS::BedrockAgentCore::PaymentManager.PaymentsAuthorizerType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrockagentcore-paymentmanager-paymentsauthorizertype.html}
 */
export type PaymentsAuthorizerType = "CUSTOM_JWT" | "AWS_IAM";
/**
 * Type definition for `AWS::BedrockAgentCore::PaymentManager.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrockagentcore-paymentmanager-tag.html}
 */
export type Tag = {
  /**
   * @minLength `1`
   * @maxLength `128`
   */
  Key: string;
  /**
   * @minLength `0`
   * @maxLength `256`
   */
  Value: string;
};
/**
 * Type definition for `AWS::BedrockAgentCore::PaymentManager.WorkloadIdentityDetails`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrockagentcore-paymentmanager-workloadidentitydetails.html}
 */
export type WorkloadIdentityDetails = {
  /**
   * @minLength `1`
   * @maxLength `1024`
   */
  WorkloadIdentityArn: string;
};
/**
 * Resource Type definition for AWS::BedrockAgentCore::PaymentManager
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrockagentcore-paymentmanager.html}
 */
export class BedrockAgentCorePaymentManager extends $Resource<
  "AWS::BedrockAgentCore::PaymentManager",
  BedrockAgentCorePaymentManagerProperties,
  BedrockAgentCorePaymentManagerAttributes
> {
  public static readonly Type = "AWS::BedrockAgentCore::PaymentManager";
  constructor(
    logicalId: string,
    properties: BedrockAgentCorePaymentManagerProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, BedrockAgentCorePaymentManager.Type, properties, options);
  }
}
