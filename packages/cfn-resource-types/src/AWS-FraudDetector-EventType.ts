import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::FraudDetector::EventType`.
 * A resource schema for an EventType in Amazon Fraud Detector.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-frauddetector-eventtype.html}
 */
export type FraudDetectorEventTypeProperties = {
  /**
   * The description of the event type.
   * @minLength `1`
   * @maxLength `128`
   */
  Description?: string;
  /**
   * @minLength `1`
   */
  EntityTypes: EntityType[];
  /**
   * @minLength `1`
   */
  EventVariables: EventVariable[];
  /**
   * @minLength `2`
   */
  Labels: Label[];
  /**
   * The name for the event type
   * @minLength `1`
   * @maxLength `64`
   * @pattern `^[0-9a-z_-]+$`
   */
  Name: string;
  /**
   * Tags associated with this event type.
   * @maxLength `200`
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::FraudDetector::EventType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-frauddetector-eventtype.html#aws-resource-frauddetector-eventtype-return-values}
 */
export type FraudDetectorEventTypeAttributes = {
  /**
   * The ARN of the event type.
   */
  Arn: string;
  /**
   * The time when the event type was created.
   */
  CreatedTime: string;
  /**
   * The time when the event type was last updated.
   */
  LastUpdatedTime: string;
};
/**
 * Type definition for `AWS::FraudDetector::EventType.EntityType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-frauddetector-eventtype-entitytype.html}
 */
export type EntityType = {
  /**
   * The description.
   * @minLength `1`
   * @maxLength `256`
   */
  Description?: string;
  Inline?: boolean;
  Name?: string;
  /**
   * Tags associated with this event type.
   * @maxLength `200`
   */
  Tags?: Tag[];
};
/**
 * Type definition for `AWS::FraudDetector::EventType.EventVariable`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-frauddetector-eventtype-eventvariable.html}
 */
export type EventVariable = {
  DataSource?: "EVENT";
  DataType?: "STRING" | "INTEGER" | "FLOAT" | "BOOLEAN";
  DefaultValue?: string;
  /**
   * The description.
   * @minLength `1`
   * @maxLength `256`
   */
  Description?: string;
  Inline?: boolean;
  Name?: string;
  /**
   * Tags associated with this event type.
   * @maxLength `200`
   */
  Tags?: Tag[];
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
 * Type definition for `AWS::FraudDetector::EventType.Label`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-frauddetector-eventtype-label.html}
 */
export type Label = {
  /**
   * The description.
   * @minLength `1`
   * @maxLength `256`
   */
  Description?: string;
  Inline?: boolean;
  Name?: string;
  /**
   * Tags associated with this event type.
   * @maxLength `200`
   */
  Tags?: Tag[];
};
/**
 * Type definition for `AWS::FraudDetector::EventType.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-frauddetector-eventtype-tag.html}
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
 * Resource type definition for `AWS::FraudDetector::EventType`.
 * A resource schema for an EventType in Amazon Fraud Detector.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-frauddetector-eventtype.html}
 */
export class FraudDetectorEventType extends $Resource<
  "AWS::FraudDetector::EventType",
  FraudDetectorEventTypeProperties,
  FraudDetectorEventTypeAttributes
> {
  public static readonly Type = "AWS::FraudDetector::EventType";
  constructor(
    logicalId: string,
    properties: FraudDetectorEventTypeProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, FraudDetectorEventType.Type, properties, options);
  }
}
