import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::BillingConductor::BillingGroup`.
 * A billing group is a set of linked account which belong to the same end customer. It can be seen as a virtual consolidated billing family.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-billingconductor-billinggroup.html}
 */
export type BillingConductorBillingGroupProperties = {
  AccountGrouping: AccountGrouping;
  ComputationPreference: ComputationPreference;
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
   * This account will act as a virtual payer account of the billing group
   * @pattern `[0-9]{12}`
   */
  PrimaryAccountId: string;
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::BillingConductor::BillingGroup`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-billingconductor-billinggroup.html#aws-resource-billingconductor-billinggroup-return-values}
 */
export type BillingConductorBillingGroupAttributes = {
  /**
   * Billing Group ARN
   * @pattern `arn:aws(-cn)?:billingconductor::[0-9]{12}:billinggroup/?[0-9]{12}`
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
   * Number of accounts in the billing group
   */
  Size: number;
  Status: BillingGroupStatus;
  StatusReason: string;
};
/**
 * Type definition for `AWS::BillingConductor::BillingGroup.AccountGrouping`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-billingconductor-billinggroup-accountgrouping.html}
 */
export type AccountGrouping = {
  AutoAssociate?: boolean;
  /**
   * @minLength `1`
   */
  LinkedAccountIds: string[];
};
/**
 * Type definition for `AWS::BillingConductor::BillingGroup.BillingGroupStatus`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-billingconductor-billinggroup-billinggroupstatus.html}
 */
export type BillingGroupStatus = "ACTIVE" | "PRIMARY_ACCOUNT_MISSING";
/**
 * Type definition for `AWS::BillingConductor::BillingGroup.ComputationPreference`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-billingconductor-billinggroup-computationpreference.html}
 */
export type ComputationPreference = {
  /**
   * ARN of the attached pricing plan
   * @pattern `arn:aws(-cn)?:billingconductor::(aws|[0-9]{12}):pricingplan/(BasicPricingPlan|[a-zA-Z0-9]{10})`
   */
  PricingPlanArn: string;
};
/**
 * Type definition for `AWS::BillingConductor::BillingGroup.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-billingconductor-billinggroup-tag.html}
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
 * Resource type definition for `AWS::BillingConductor::BillingGroup`.
 * A billing group is a set of linked account which belong to the same end customer. It can be seen as a virtual consolidated billing family.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-billingconductor-billinggroup.html}
 */
export class BillingConductorBillingGroup extends $Resource<
  "AWS::BillingConductor::BillingGroup",
  BillingConductorBillingGroupProperties,
  BillingConductorBillingGroupAttributes
> {
  public static readonly Type = "AWS::BillingConductor::BillingGroup";
  constructor(
    logicalId: string,
    properties: BillingConductorBillingGroupProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, BillingConductorBillingGroup.Type, properties, options);
  }
}
