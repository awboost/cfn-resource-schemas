import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::BillingConductor::CustomLineItem`.
 * A custom line item is an one time charge that is applied to a specific billing group's bill.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-billingconductor-customlineitem.html}
 */
export type BillingConductorCustomLineItemProperties = {
  /**
   * The account which this custom line item will be charged to
   * @pattern `[0-9]{12}`
   */
  AccountId?: string;
  /**
   * Billing Group ARN
   * @pattern `arn:aws(-cn)?:billingconductor::[0-9]{12}:billinggroup/?[a-zA-Z0-9]{10,12}`
   */
  BillingGroupArn: string;
  BillingPeriodRange?: BillingPeriodRange;
  /**
   * The display settings of the Custom Line Item.
   */
  ComputationRule?: "CONSOLIDATED" | "ITEMIZED";
  CustomLineItemChargeDetails?: CustomLineItemChargeDetails;
  /**
   * @maxLength `255`
   */
  Description?: string;
  /**
   * @minLength `1`
   * @maxLength `128`
   * @pattern `[a-zA-Z0-9_\+=\.\-@]+`
   */
  Name: string;
  PresentationDetails?: {
    /**
     * @pattern `^[a-zA-Z0-9]+$`
     */
    Service: string;
  };
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::BillingConductor::CustomLineItem`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-billingconductor-customlineitem.html#aws-resource-billingconductor-customlineitem-return-values}
 */
export type BillingConductorCustomLineItemAttributes = {
  /**
   * ARN
   * @pattern `(arn:aws(-cn)?:billingconductor::[0-9]{12}:customlineitem/)?[a-zA-Z0-9]{10}`
   */
  Arn: string;
  /**
   * Number of source values associated to this custom line item
   */
  AssociationSize: number;
  /**
   * Creation timestamp in UNIX epoch time format
   */
  CreationTime: number;
  CurrencyCode: "USD" | "CNY";
  /**
   * Latest modified timestamp in UNIX epoch time format
   */
  LastModifiedTime: number;
  /**
   * @minLength `1`
   * @maxLength `29`
   */
  ProductCode: string;
};
/**
 * Type definition for `AWS::BillingConductor::CustomLineItem.BillingPeriodRange`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-billingconductor-customlineitem-billingperiodrange.html}
 */
export type BillingPeriodRange = {
  /**
   * @pattern `\d{4}-(0?[1-9]|1[012])`
   */
  ExclusiveEndBillingPeriod?: string;
  /**
   * @pattern `\d{4}-(0?[1-9]|1[012])`
   */
  InclusiveStartBillingPeriod?: string;
};
/**
 * Type definition for `AWS::BillingConductor::CustomLineItem.CustomLineItemChargeDetails`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-billingconductor-customlineitem-customlineitemchargedetails.html}
 */
export type CustomLineItemChargeDetails = {
  Flat?: CustomLineItemFlatChargeDetails;
  LineItemFilters?: LineItemFilter[];
  Percentage?: CustomLineItemPercentageChargeDetails;
  Type: Type;
};
/**
 * Type definition for `AWS::BillingConductor::CustomLineItem.CustomLineItemFlatChargeDetails`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-billingconductor-customlineitem-customlineitemflatchargedetails.html}
 */
export type CustomLineItemFlatChargeDetails = {
  /**
   * @min `0`
   * @max `1000000`
   */
  ChargeValue: number;
};
/**
 * Type definition for `AWS::BillingConductor::CustomLineItem.CustomLineItemPercentageChargeDetails`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-billingconductor-customlineitem-customlineitempercentagechargedetails.html}
 */
export type CustomLineItemPercentageChargeDetails = {
  ChildAssociatedResources?: string[];
  /**
   * @min `0`
   * @max `10000`
   */
  PercentageValue: number;
};
/**
 * Type definition for `AWS::BillingConductor::CustomLineItem.LineItemFilter`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-billingconductor-customlineitem-lineitemfilter.html}
 */
export type LineItemFilter = {
  Attribute: "LINE_ITEM_TYPE" | "SERVICE";
  AttributeValues?: string[];
  MatchOption: "NOT_EQUAL" | "EQUAL";
  Values?: LineItemFilterValue[];
};
/**
 * Type definition for `AWS::BillingConductor::CustomLineItem.LineItemFilterValue`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-billingconductor-customlineitem-lineitemfiltervalue.html}
 */
export type LineItemFilterValue = "SAVINGS_PLAN_NEGATION";
/**
 * Type definition for `AWS::BillingConductor::CustomLineItem.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-billingconductor-customlineitem-tag.html}
 */
export type Tag = {
  /**
   * @minLength `1`
   * @maxLength `128`
   */
  Key: string;
  /**
   * @minLength `1`
   * @maxLength `256`
   */
  Value: string;
};
/**
 * Type definition for `AWS::BillingConductor::CustomLineItem.Type`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-billingconductor-customlineitem-type.html}
 */
export type Type = "FEE" | "CREDIT";
/**
 * Resource type definition for `AWS::BillingConductor::CustomLineItem`.
 * A custom line item is an one time charge that is applied to a specific billing group's bill.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-billingconductor-customlineitem.html}
 */
export class BillingConductorCustomLineItem extends $Resource<
  "AWS::BillingConductor::CustomLineItem",
  BillingConductorCustomLineItemProperties,
  BillingConductorCustomLineItemAttributes
> {
  public static readonly Type = "AWS::BillingConductor::CustomLineItem";
  constructor(
    logicalId: string,
    properties: BillingConductorCustomLineItemProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, BillingConductorCustomLineItem.Type, properties, options);
  }
}
