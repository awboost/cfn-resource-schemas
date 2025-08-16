import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::GuardDuty::TrustedEntitySet
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-guardduty-trustedentityset.html}
 */
export type GuardDutyTrustedEntitySetProperties = {
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
 * Attribute type definition for `AWS::GuardDuty::TrustedEntitySet`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-guardduty-trustedentityset.html#aws-resource-guardduty-trustedentityset-return-values}
 */
export type GuardDutyTrustedEntitySetAttributes = {
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
 * Type definition for `AWS::GuardDuty::TrustedEntitySet.TagItem`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-guardduty-trustedentityset-tagitem.html}
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
 * Resource Type definition for AWS::GuardDuty::TrustedEntitySet
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-guardduty-trustedentityset.html}
 */
export class GuardDutyTrustedEntitySet extends $Resource<
  "AWS::GuardDuty::TrustedEntitySet",
  GuardDutyTrustedEntitySetProperties,
  GuardDutyTrustedEntitySetAttributes
> {
  public static readonly Type = "AWS::GuardDuty::TrustedEntitySet";
  constructor(
    logicalId: string,
    properties: GuardDutyTrustedEntitySetProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, GuardDutyTrustedEntitySet.Type, properties, options);
  }
}
