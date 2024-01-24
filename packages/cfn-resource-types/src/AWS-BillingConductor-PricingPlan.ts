import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::BillingConductor::PricingPlan`.
 * Pricing Plan enables you to customize your billing details consistent with the usage that accrues in each of your billing groups.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-billingconductor-pricingplan.html}
 */
export type BillingConductorPricingPlanProperties = {
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
  PricingRuleArns?: string[];
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::BillingConductor::PricingPlan`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-billingconductor-pricingplan.html#aws-resource-billingconductor-pricingplan-return-values}
 */
export type BillingConductorPricingPlanAttributes = {
  /**
   * Pricing Plan ARN
   * @pattern `arn:aws(-cn)?:billingconductor::[0-9]{12}:pricingplan/[a-zA-Z0-9]{10}`
   */
  Arn: string;
  /**
   * Creation timestamp in UNIX epoch time format
   */
  CreationTime: number;
  /**
   * Latest modified timestamp in UNIX epoch time format
   */
  LastModifiedTime: number;
  /**
   * Number of associated pricing rules
   */
  Size: number;
};
/**
 * Type definition for `AWS::BillingConductor::PricingPlan.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-billingconductor-pricingplan-tag.html}
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
 * Resource type definition for `AWS::BillingConductor::PricingPlan`.
 * Pricing Plan enables you to customize your billing details consistent with the usage that accrues in each of your billing groups.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-billingconductor-pricingplan.html}
 */
export class BillingConductorPricingPlan extends $Resource<
  "AWS::BillingConductor::PricingPlan",
  BillingConductorPricingPlanProperties,
  BillingConductorPricingPlanAttributes
> {
  public static readonly Type = "AWS::BillingConductor::PricingPlan";
  constructor(
    logicalId: string,
    properties: BillingConductorPricingPlanProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, BillingConductorPricingPlan.Type, properties, options);
  }
}
