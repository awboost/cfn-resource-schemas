import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::FraudDetector::Detector`.
 * A resource schema for a Detector in Amazon Fraud Detector.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-frauddetector-detector.html}
 */
export type FraudDetectorDetectorProperties = {
  /**
   * The description of the detector.
   * @minLength `1`
   * @maxLength `128`
   */
  Description?: string;
  /**
   * The ID of the detector
   * @minLength `1`
   * @maxLength `64`
   * @pattern `^[0-9a-z_-]+$`
   */
  DetectorId: string;
  /**
   * The desired detector version status for the detector
   */
  DetectorVersionStatus?: "DRAFT" | "ACTIVE";
  /**
   * The event type to associate this detector with.
   */
  EventType: EventType;
  RuleExecutionMode?: "FIRST_MATCHED" | "ALL_MATCHED";
  /**
   * @minLength `1`
   */
  Rules: Rule[];
  /**
   * Tags associated with this detector.
   * @maxLength `200`
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::FraudDetector::Detector`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-frauddetector-detector.html#aws-resource-frauddetector-detector-return-values}
 */
export type FraudDetectorDetectorAttributes = {
  /**
   * The ARN of the detector.
   */
  Arn: string;
  /**
   * The models to associate with this detector.
   * @maxLength `10`
   */
  AssociatedModels: {
    Arn: string;
  }[];
  /**
   * The time when the detector was created.
   */
  CreatedTime: string;
  /**
   * The active version ID of the detector
   */
  DetectorVersionId: string;
  /**
   * The event type to associate this detector with.
   */
  EventType: {
    /**
     * The ARN of the event type.
     */
    Arn: string;
    /**
     * The time when the event type was created.
     */
    CreatedTime: string;
    /**
     * @minLength `1`
     */
    EntityTypes: {
      Arn: string;
      /**
       * The time when the entity type was created.
       */
      CreatedTime: string;
      /**
       * The time when the entity type was last updated.
       */
      LastUpdatedTime: string;
    }[];
    /**
     * @minLength `1`
     */
    EventVariables: {
      Arn: string;
      /**
       * The time when the event variable was created.
       */
      CreatedTime: string;
      /**
       * The time when the event variable was last updated.
       */
      LastUpdatedTime: string;
    }[];
    /**
     * @minLength `2`
     */
    Labels: {
      Arn: string;
      /**
       * The time when the label was created.
       */
      CreatedTime: string;
      /**
       * The time when the label was last updated.
       */
      LastUpdatedTime: string;
    }[];
    /**
     * The time when the event type was last updated.
     */
    LastUpdatedTime: string;
  };
  /**
   * The time when the detector was last updated.
   */
  LastUpdatedTime: string;
  /**
   * @minLength `1`
   */
  Rules: {
    Arn: string;
    /**
     * The time when the event type was created.
     */
    CreatedTime: string;
    /**
     * The time when the event type was last updated.
     */
    LastUpdatedTime: string;
    /**
     * @minLength `1`
     */
    Outcomes: {
      Arn: string;
      /**
       * The time when the outcome was created.
       */
      CreatedTime: string;
      /**
       * The time when the outcome was last updated.
       */
      LastUpdatedTime: string;
    }[];
    RuleVersion: string;
  }[];
};
/**
 * Type definition for `AWS::FraudDetector::Detector.EntityType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-frauddetector-detector-entitytype.html}
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
   * Tags associated with this entity type.
   * @maxLength `200`
   */
  Tags?: Tag[];
};
/**
 * Type definition for `AWS::FraudDetector::Detector.EventType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-frauddetector-detector-eventtype.html}
 */
export type EventType = {
  /**
   * The description of the event type.
   * @minLength `1`
   * @maxLength `128`
   */
  Description?: string;
  /**
   * @minLength `1`
   */
  EntityTypes?: EntityType[];
  /**
   * @minLength `1`
   */
  EventVariables?: EventVariable[];
  Inline?: boolean;
  /**
   * @minLength `2`
   */
  Labels?: Label[];
  /**
   * The name for the event type
   * @minLength `1`
   * @maxLength `64`
   * @pattern `^[0-9a-z_-]+$`
   */
  Name?: string;
  /**
   * Tags associated with this event type.
   * @maxLength `200`
   */
  Tags?: Tag[];
};
/**
 * Type definition for `AWS::FraudDetector::Detector.EventVariable`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-frauddetector-detector-eventvariable.html}
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
   * Tags associated with this event variable.
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
 * Type definition for `AWS::FraudDetector::Detector.Label`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-frauddetector-detector-label.html}
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
   * Tags associated with this label.
   * @maxLength `200`
   */
  Tags?: Tag[];
};
/**
 * Type definition for `AWS::FraudDetector::Detector.Outcome`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-frauddetector-detector-outcome.html}
 */
export type Outcome = {
  /**
   * The description.
   * @minLength `1`
   * @maxLength `256`
   */
  Description?: string;
  Inline?: boolean;
  Name?: string;
  /**
   * Tags associated with this outcome.
   * @maxLength `200`
   */
  Tags?: Tag[];
};
/**
 * Type definition for `AWS::FraudDetector::Detector.Rule`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-frauddetector-detector-rule.html}
 */
export type Rule = {
  /**
   * The description.
   * @minLength `1`
   * @maxLength `256`
   */
  Description?: string;
  DetectorId?: string;
  Expression?: string;
  Language?: "DETECTORPL";
  /**
   * @minLength `1`
   */
  Outcomes?: Outcome[];
  RuleId?: string;
  /**
   * Tags associated with this event type.
   * @maxLength `200`
   */
  Tags?: Tag[];
};
/**
 * Type definition for `AWS::FraudDetector::Detector.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-frauddetector-detector-tag.html}
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
 * Resource type definition for `AWS::FraudDetector::Detector`.
 * A resource schema for a Detector in Amazon Fraud Detector.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-frauddetector-detector.html}
 */
export class FraudDetectorDetector extends $Resource<
  "AWS::FraudDetector::Detector",
  FraudDetectorDetectorProperties,
  FraudDetectorDetectorAttributes
> {
  public static readonly Type = "AWS::FraudDetector::Detector";
  constructor(
    logicalId: string,
    properties: FraudDetectorDetectorProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, FraudDetectorDetector.Type, properties, options);
  }
}
