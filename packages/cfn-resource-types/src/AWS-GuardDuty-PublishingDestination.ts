import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::GuardDuty::PublishingDestination
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-guardduty-publishingdestination.html}
 */
export type GuardDutyPublishingDestinationProperties = {
  DestinationProperties: CFNDestinationProperties;
  /**
   * The type of resource for the publishing destination. Currently only Amazon S3 buckets are supported.
   */
  DestinationType: string;
  /**
   * The ID of the GuardDuty detector associated with the publishing destination.
   * @minLength `1`
   * @maxLength `300`
   */
  DetectorId: string;
  Tags?: TagItem[];
};
/**
 * Attribute type definition for `AWS::GuardDuty::PublishingDestination`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-guardduty-publishingdestination.html#aws-resource-guardduty-publishingdestination-return-values}
 */
export type GuardDutyPublishingDestinationAttributes = {
  /**
   * The ID of the publishing destination.
   */
  Id: string;
  /**
   * The time, in epoch millisecond format, at which GuardDuty was first unable to publish findings to the destination.
   */
  PublishingFailureStartTimestamp: string;
  /**
   * The status of the publishing destination.
   */
  Status: string;
};
/**
 * Type definition for `AWS::GuardDuty::PublishingDestination.CFNDestinationProperties`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-guardduty-publishingdestination-cfndestinationproperties.html}
 */
export type CFNDestinationProperties = {
  /**
   * The ARN of the resource to publish to.
   */
  DestinationArn?: string;
  /**
   * The ARN of the KMS key to use for encryption.
   */
  KmsKeyArn?: string;
};
/**
 * Type definition for `AWS::GuardDuty::PublishingDestination.TagItem`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-guardduty-publishingdestination-tagitem.html}
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
 * Resource Type definition for AWS::GuardDuty::PublishingDestination
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-guardduty-publishingdestination.html}
 */
export class GuardDutyPublishingDestination extends $Resource<
  "AWS::GuardDuty::PublishingDestination",
  GuardDutyPublishingDestinationProperties,
  GuardDutyPublishingDestinationAttributes
> {
  public static readonly Type = "AWS::GuardDuty::PublishingDestination";
  constructor(
    logicalId: string,
    properties: GuardDutyPublishingDestinationProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, GuardDutyPublishingDestination.Type, properties, options);
  }
}
