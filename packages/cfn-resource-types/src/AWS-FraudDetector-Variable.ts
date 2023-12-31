import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::FraudDetector::Variable`.
 * A resource schema for a Variable in Amazon Fraud Detector.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-frauddetector-variable.html}
 */
export type FraudDetectorVariableProperties = {
  /**
   * The source of the data.
   */
  DataSource: "EVENT" | "EXTERNAL_MODEL_SCORE";
  /**
   * The data type.
   */
  DataType: "STRING" | "INTEGER" | "FLOAT" | "BOOLEAN";
  /**
   * The default value for the variable when no value is received.
   */
  DefaultValue: string;
  /**
   * The description.
   * @minLength `1`
   * @maxLength `256`
   */
  Description?: string;
  /**
   * The name of the variable.
   * @pattern `^[a-z_][a-z0-9_]{0,99}?$`
   */
  Name: string;
  /**
   * Tags associated with this variable.
   * @maxLength `200`
   */
  Tags?: Tag[];
  /**
   * The variable type. For more information see https://docs.aws.amazon.com/frauddetector/latest/ug/create-a-variable.html#variable-types
   */
  VariableType?:
    | "AUTH_CODE"
    | "AVS"
    | "BILLING_ADDRESS_L1"
    | "BILLING_ADDRESS_L2"
    | "BILLING_CITY"
    | "BILLING_COUNTRY"
    | "BILLING_NAME"
    | "BILLING_PHONE"
    | "BILLING_STATE"
    | "BILLING_ZIP"
    | "CARD_BIN"
    | "CATEGORICAL"
    | "CURRENCY_CODE"
    | "EMAIL_ADDRESS"
    | "FINGERPRINT"
    | "FRAUD_LABEL"
    | "FREE_FORM_TEXT"
    | "IP_ADDRESS"
    | "NUMERIC"
    | "ORDER_ID"
    | "PAYMENT_TYPE"
    | "PHONE_NUMBER"
    | "PRICE"
    | "PRODUCT_CATEGORY"
    | "SHIPPING_ADDRESS_L1"
    | "SHIPPING_ADDRESS_L2"
    | "SHIPPING_CITY"
    | "SHIPPING_COUNTRY"
    | "SHIPPING_NAME"
    | "SHIPPING_PHONE"
    | "SHIPPING_STATE"
    | "SHIPPING_ZIP"
    | "USERAGENT";
};
/**
 * Attribute type definition for `AWS::FraudDetector::Variable`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-frauddetector-variable.html#aws-resource-frauddetector-variable-return-values}
 */
export type FraudDetectorVariableAttributes = {
  /**
   * The ARN of the variable.
   */
  Arn: string;
  /**
   * The time when the variable was created.
   */
  CreatedTime: string;
  /**
   * The time when the variable was last updated.
   */
  LastUpdatedTime: string;
};
/**
 * Type definition for `AWS::FraudDetector::Variable.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-frauddetector-variable-tag.html}
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
 * Resource type definition for `AWS::FraudDetector::Variable`.
 * A resource schema for a Variable in Amazon Fraud Detector.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-frauddetector-variable.html}
 */
export class FraudDetectorVariable extends $Resource<
  "AWS::FraudDetector::Variable",
  FraudDetectorVariableProperties,
  FraudDetectorVariableAttributes
> {
  public static readonly Type = "AWS::FraudDetector::Variable";
  constructor(
    logicalId: string,
    properties: FraudDetectorVariableProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, FraudDetectorVariable.Type, properties, options);
  }
}
