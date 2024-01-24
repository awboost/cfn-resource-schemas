import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::SES::VdmAttributes
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-vdmattributes.html}
 */
export type SESVdmAttributesProperties = {
  /**
   * Preferences regarding the Dashboard feature.
   */
  DashboardAttributes?: DashboardAttributes;
  /**
   * Preferences regarding the Guardian feature.
   */
  GuardianAttributes?: GuardianAttributes;
};
/**
 * Attribute type definition for `AWS::SES::VdmAttributes`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-vdmattributes.html#aws-resource-ses-vdmattributes-return-values}
 */
export type SESVdmAttributesAttributes = {
  /**
   * Unique identifier for this resource
   */
  VdmAttributesResourceId: string;
};
/**
 * Type definition for `AWS::SES::VdmAttributes.DashboardAttributes`.
 * Preferences regarding the Dashboard feature.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-vdmattributes-dashboardattributes.html}
 */
export type DashboardAttributes = {
  /**
   * Whether emails sent from this account have engagement tracking enabled.
   * @pattern `ENABLED|DISABLED`
   */
  EngagementMetrics?: string;
};
/**
 * Type definition for `AWS::SES::VdmAttributes.GuardianAttributes`.
 * Preferences regarding the Guardian feature.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-vdmattributes-guardianattributes.html}
 */
export type GuardianAttributes = {
  /**
   * Whether emails sent from this account have optimized delivery algorithm enabled.
   * @pattern `ENABLED|DISABLED`
   */
  OptimizedSharedDelivery?: string;
};
/**
 * Resource Type definition for AWS::SES::VdmAttributes
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-vdmattributes.html}
 */
export class SESVdmAttributes extends $Resource<
  "AWS::SES::VdmAttributes",
  SESVdmAttributesProperties,
  SESVdmAttributesAttributes
> {
  public static readonly Type = "AWS::SES::VdmAttributes";
  constructor(
    logicalId: string,
    properties: SESVdmAttributesProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, SESVdmAttributes.Type, properties, options);
  }
}
