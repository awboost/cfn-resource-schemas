import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::GuardDuty::ThreatIntelSet
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-guardduty-threatintelset.html}
 */
export type GuardDutyThreatIntelSetProperties = {
  Activate?: boolean;
  /**
   * @minLength `1`
   * @maxLength `32`
   */
  DetectorId?: string;
  /**
   * @minLength `1`
   * @maxLength `300`
   */
  Format: string;
  /**
   * @minLength `1`
   * @maxLength `300`
   */
  Location: string;
  Name?: string;
  Tags?: TagItem[];
};
/**
 * Attribute type definition for `AWS::GuardDuty::ThreatIntelSet`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-guardduty-threatintelset.html#aws-resource-guardduty-threatintelset-return-values}
 */
export type GuardDutyThreatIntelSetAttributes = {
  Id: string;
};
/**
 * Type definition for `AWS::GuardDuty::ThreatIntelSet.TagItem`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-guardduty-threatintelset-tagitem.html}
 */
export type TagItem = {
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
 * Resource Type definition for AWS::GuardDuty::ThreatIntelSet
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-guardduty-threatintelset.html}
 */
export class GuardDutyThreatIntelSet extends $Resource<
  "AWS::GuardDuty::ThreatIntelSet",
  GuardDutyThreatIntelSetProperties,
  GuardDutyThreatIntelSetAttributes
> {
  public static readonly Type = "AWS::GuardDuty::ThreatIntelSet";
  constructor(
    logicalId: string,
    properties: GuardDutyThreatIntelSetProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, GuardDutyThreatIntelSet.Type, properties, options);
  }
}
