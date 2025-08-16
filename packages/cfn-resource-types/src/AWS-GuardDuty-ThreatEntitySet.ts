import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::GuardDuty::ThreatEntitySet
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-guardduty-threatentityset.html}
 */
export type GuardDutyThreatEntitySetProperties = {
  Activate?: boolean;
  /**
   * @minLength `1`
   * @maxLength `32`
   */
  DetectorId?: string;
  ExpectedBucketOwner?: string;
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
 * Attribute type definition for `AWS::GuardDuty::ThreatEntitySet`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-guardduty-threatentityset.html#aws-resource-guardduty-threatentityset-return-values}
 */
export type GuardDutyThreatEntitySetAttributes = {
  CreatedAt: string;
  ErrorDetails: string;
  Id: string;
  Status:
    | "INACTIVE"
    | "ACTIVATING"
    | "ACTIVE"
    | "DEACTIVATING"
    | "ERROR"
    | "DELETE_PENDING"
    | "DELETED";
  UpdatedAt: string;
};
/**
 * Type definition for `AWS::GuardDuty::ThreatEntitySet.TagItem`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-guardduty-threatentityset-tagitem.html}
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
 * Resource Type definition for AWS::GuardDuty::ThreatEntitySet
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-guardduty-threatentityset.html}
 */
export class GuardDutyThreatEntitySet extends $Resource<
  "AWS::GuardDuty::ThreatEntitySet",
  GuardDutyThreatEntitySetProperties,
  GuardDutyThreatEntitySetAttributes
> {
  public static readonly Type = "AWS::GuardDuty::ThreatEntitySet";
  constructor(
    logicalId: string,
    properties: GuardDutyThreatEntitySetProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, GuardDutyThreatEntitySet.Type, properties, options);
  }
}
