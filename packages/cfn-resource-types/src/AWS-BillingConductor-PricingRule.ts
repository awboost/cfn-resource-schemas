import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::BillingConductor::PricingRule`.
 * A markup/discount that is defined for a specific set of services that can later be associated with a pricing plan.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-billingconductor-pricingrule.html}
 */
export type BillingConductorPricingRuleProperties = {
  /**
   * The seller of services provided by AWS, their affiliates, or third-party providers selling services via AWS Marketplaces. Supported billing entities are AWS, AWS Marketplace, and AISPL.
   */
  BillingEntity?: "AWS" | "AWS Marketplace" | "AISPL";
  /**
   * Pricing rule description
   * @maxLength `1024`
   */
  Description?: string;
  /**
   * Pricing rule modifier percentage
   * @min `0`
   */
  ModifierPercentage?: number;
  /**
   * Pricing rule name
   * @minLength `1`
   * @maxLength `128`
   * @pattern `[a-zA-Z0-9_\+=\.\-@]+`
   */
  Name: string;
  /**
   * The Operation which a SKU pricing rule is modifying
   * @minLength `1`
   * @maxLength `256`
   * @pattern `^\S+$`
   */
  Operation?: string;
  /**
   * A term used to categorize the granularity of a Pricing Rule.
   */
  Scope: "GLOBAL" | "SERVICE" | "BILLING_ENTITY" | "SKU";
  /**
   * The service which a pricing rule is applied on
   * @minLength `1`
   * @maxLength `128`
   * @pattern `[a-zA-Z0-9\.\-]+`
   */
  Service?: string;
  Tags?: Tag[];
  /**
   * The set of tiering configurations for the pricing rule.
   */
  Tiering?: {
    /**
     * The possible customizable free tier configurations.
     */
    FreeTier?: FreeTier;
  };
  /**
   * One of MARKUP, DISCOUNT or TIERING that describes the behaviour of the pricing rule.
   */
  Type: "MARKUP" | "DISCOUNT" | "TIERING";
  /**
   * The UsageType which a SKU pricing rule is modifying
   * @minLength `1`
   * @maxLength `256`
   * @pattern `^\S+$`
   */
  UsageType?: string;
};
/**
 * Attribute type definition for `AWS::BillingConductor::PricingRule`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-billingconductor-pricingrule.html#aws-resource-billingconductor-pricingrule-return-values}
 */
export type BillingConductorPricingRuleAttributes = {
  /**
   * Pricing rule ARN
   * @pattern `arn:aws(-cn)?:billingconductor::[0-9]{12}:pricingrule/[a-zA-Z0-9]{10}`
   */
  Arn: string;
  /**
   * The number of pricing plans associated with pricing rule
   * @min `0`
   */
  AssociatedPricingPlanCount: number;
  /**
   * Creation timestamp in UNIX epoch time format
   */
  CreationTime: number;
  /**
   * Latest modified timestamp in UNIX epoch time format
   */
  LastModifiedTime: number;
};
/**
 * Type definition for `AWS::BillingConductor::PricingRule.FreeTier`.
 * The possible customizable free tier configurations.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-billingconductor-pricingrule-freetier.html}
 */
export type FreeTier = {
  Activated: boolean;
};
/**
 * Type definition for `AWS::BillingConductor::PricingRule.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-billingconductor-pricingrule-tag.html}
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
 * Resource type definition for `AWS::BillingConductor::PricingRule`.
 * A markup/discount that is defined for a specific set of services that can later be associated with a pricing plan.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-billingconductor-pricingrule.html}
 */
export class BillingConductorPricingRule extends $Resource<
  "AWS::BillingConductor::PricingRule",
  BillingConductorPricingRuleProperties,
  BillingConductorPricingRuleAttributes
> {
  public static readonly Type = "AWS::BillingConductor::PricingRule";
  constructor(
    logicalId: string,
    properties: BillingConductorPricingRuleProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, BillingConductorPricingRule.Type, properties, options);
  }
}
