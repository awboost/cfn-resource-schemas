import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::Billing::BillingView`.
 * A billing view is a container of cost & usage metadata.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-billing-billingview.html}
 */
export type BillingBillingViewProperties = {
  DataFilterExpression?: {
    Dimensions?: {
      Key?: DimensionKey;
      /**
       * @minLength `1`
       * @maxLength `200`
       */
      Values?: string[];
    };
    Tags?: {
      /**
       * @maxLength `1024`
       * @pattern `[\S\s]*`
       */
      Key?: string;
      /**
       * @minLength `1`
       * @maxLength `200`
       */
      Values?: string[];
    };
    TimeRange?: {
      /**
       * The time in ISO 8601 format, UTC time (YYYY-MM-DDTHH:MM:SSZ).
       */
      BeginDateInclusive?: string;
      /**
       * The time in ISO 8601 format, UTC time (YYYY-MM-DDTHH:MM:SSZ).
       */
      EndDateInclusive?: string;
    };
  };
  /**
   * @maxLength `1024`
   */
  Description?: string;
  /**
   * @minLength `1`
   * @maxLength `128`
   * @pattern `[a-zA-Z0-9_\+=\.\-@]+`
   */
  Name: string;
  /**
   * An array of strings that define the billing view's source.
   */
  SourceViews: string[];
  /**
   * An array of key-value pairs associated to the billing view being created.
   * @maxLength `200`
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::Billing::BillingView`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-billing-billingview.html#aws-resource-billing-billingview-return-values}
 */
export type BillingBillingViewAttributes = {
  /**
   * @pattern `arn:aws[a-z-]*:(billing)::[0-9]{12}:billingview/[a-zA-Z0-9/:_\+=\.\-@]{0,75}[a-zA-Z0-9]`
   */
  Arn: string;
  BillingViewType: BillingViewType;
  /**
   * The time when the billing view was created.
   */
  CreatedAt: number;
  /**
   * @pattern `[0-9]{12}`
   */
  OwnerAccountId: string;
  /**
   * The time when the billing view was last updated.
   */
  UpdatedAt: number;
};
/**
 * Type definition for `AWS::Billing::BillingView.BillingViewType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-billing-billingview-billingviewtype.html}
 */
export type BillingViewType = "PRIMARY" | "BILLING_GROUP" | "CUSTOM";
/**
 * Type definition for `AWS::Billing::BillingView.DimensionKey`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-billing-billingview-dimensionkey.html}
 */
export type DimensionKey = "LINKED_ACCOUNT";
/**
 * Type definition for `AWS::Billing::BillingView.Tag`.
 * A key-value pair to associate with a Billing View.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-billing-billingview-tag.html}
 */
export type Tag = {
  /**
   * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @minLength `1`
   * @maxLength `128`
   */
  Key: string;
  /**
   * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @minLength `0`
   * @maxLength `256`
   */
  Value: string;
};
/**
 * Resource type definition for `AWS::Billing::BillingView`.
 * A billing view is a container of cost & usage metadata.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-billing-billingview.html}
 */
export class BillingBillingView extends $Resource<
  "AWS::Billing::BillingView",
  BillingBillingViewProperties,
  BillingBillingViewAttributes
> {
  public static readonly Type = "AWS::Billing::BillingView";
  constructor(
    logicalId: string,
    properties: BillingBillingViewProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, BillingBillingView.Type, properties, options);
  }
}
