import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::UXC::AccountCustomization`.
 * Resource schema for managing AWS account-level UX customization settings, including account color, visible services, and visible regions.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-uxc-accountcustomization.html}
 */
export type UXCAccountCustomizationProperties = {
  /**
   * The color theme assigned to the account for visual identification in the AWS Console.
   */
  AccountColor?:
    | "none"
    | "pink"
    | "purple"
    | "darkBlue"
    | "lightBlue"
    | "teal"
    | "green"
    | "yellow"
    | "orange"
    | "red";
  /**
   * A list of AWS region identifiers visible to the account in the AWS Console.
   * @maxLength `100`
   */
  VisibleRegions?: string[];
  /**
   * A list of AWS service identifiers visible to the account in the AWS Console.
   * @maxLength `500`
   */
  VisibleServices?: string[];
};
/**
 * Attribute type definition for `AWS::UXC::AccountCustomization`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-uxc-accountcustomization.html#aws-resource-uxc-accountcustomization-return-values}
 */
export type UXCAccountCustomizationAttributes = {
  /**
   * The AWS account ID that this customization belongs to. This is automatically determined from the caller's identity.
   * @pattern `^[0-9]{12}$`
   */
  AccountId: string;
};
/**
 * Resource type definition for `AWS::UXC::AccountCustomization`.
 * Resource schema for managing AWS account-level UX customization settings, including account color, visible services, and visible regions.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-uxc-accountcustomization.html}
 */
export class UXCAccountCustomization extends $Resource<
  "AWS::UXC::AccountCustomization",
  UXCAccountCustomizationProperties,
  UXCAccountCustomizationAttributes
> {
  public static readonly Type = "AWS::UXC::AccountCustomization";
  constructor(
    logicalId: string,
    properties: UXCAccountCustomizationProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, UXCAccountCustomization.Type, properties, options);
  }
}
