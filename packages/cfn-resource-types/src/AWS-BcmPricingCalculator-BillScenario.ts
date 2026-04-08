import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::BcmPricingCalculator::BillScenario
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bcmpricingcalculator-billscenario.html}
 */
export type BcmPricingCalculatorBillScenarioProperties = {
  /**
   * The ARN of the cost category group sharing preference
   * @pattern `^arn:aws[a-z-]*:ce::[0-9]{12}:costcategory/[a-f0-9-]{36}$`
   */
  CostCategoryGroupSharingPreferenceArn?: string;
  /**
   * The timestamp when the bill scenario expires
   */
  ExpiresAt?: string;
  /**
   * The group sharing preference for the bill scenario
   */
  GroupSharingPreference?: GroupSharingPreference;
  /**
   * The name of the bill scenario
   * @minLength `1`
   * @maxLength `64`
   */
  Name?: string;
  /**
   * An array of key-value pairs to apply to this resource
   * @maxLength `200`
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::BcmPricingCalculator::BillScenario`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bcmpricingcalculator-billscenario.html#aws-resource-bcmpricingcalculator-billscenario-return-values}
 */
export type BcmPricingCalculatorBillScenarioAttributes = {
  /**
   * The Amazon Resource Name (ARN) of the bill scenario.
   * @pattern `^arn:aws[-a-z]*:bcm-pricing-calculator::[0-9]{12}:bill-scenario/[a-f0-9-]+$`
   */
  Arn: string;
  /**
   * The time period covered by the bill scenario
   */
  BillInterval: {
    End: string;
    Start: string;
  };
  /**
   * The timestamp when the bill scenario was created
   */
  CreatedAt: string;
  /**
   * The failure message if the bill scenario failed
   */
  FailureMessage: string;
  /**
   * The unique identifier of the bill scenario
   */
  Id: string;
  /**
   * The status of the bill scenario
   */
  Status: BillScenarioStatus;
};
/**
 * Type definition for `AWS::BcmPricingCalculator::BillScenario.BillInterval`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bcmpricingcalculator-billscenario-billinterval.html}
 */
export type BillInterval = {
  End?: string;
  Start?: string;
};
/**
 * Type definition for `AWS::BcmPricingCalculator::BillScenario.BillScenarioStatus`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bcmpricingcalculator-billscenario-billscenariostatus.html}
 */
export type BillScenarioStatus = "READY" | "LOCKED" | "FAILED";
/**
 * Type definition for `AWS::BcmPricingCalculator::BillScenario.GroupSharingPreference`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bcmpricingcalculator-billscenario-groupsharingpreference.html}
 */
export type GroupSharingPreference = "OPEN" | "PRIORITIZED" | "RESTRICTED";
/**
 * Type definition for `AWS::BcmPricingCalculator::BillScenario.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bcmpricingcalculator-billscenario-tag.html}
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
 * Resource Type definition for AWS::BcmPricingCalculator::BillScenario
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bcmpricingcalculator-billscenario.html}
 */
export class BcmPricingCalculatorBillScenario extends $Resource<
  "AWS::BcmPricingCalculator::BillScenario",
  BcmPricingCalculatorBillScenarioProperties,
  BcmPricingCalculatorBillScenarioAttributes
> {
  public static readonly Type = "AWS::BcmPricingCalculator::BillScenario";
  constructor(
    logicalId: string,
    properties: BcmPricingCalculatorBillScenarioProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      BcmPricingCalculatorBillScenario.Type,
      properties,
      options,
    );
  }
}
