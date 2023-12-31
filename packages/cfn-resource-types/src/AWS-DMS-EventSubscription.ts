import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::DMS::EventSubscription
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-eventsubscription.html}
 */
export type DMSEventSubscriptionProperties = {
  Enabled?: boolean;
  EventCategories?: string[];
  SnsTopicArn: string;
  SourceIds?: string[];
  SourceType?: string;
  SubscriptionName?: string;
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::DMS::EventSubscription`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-eventsubscription.html#aws-resource-dms-eventsubscription-return-values}
 */
export type DMSEventSubscriptionAttributes = {
  Id: string;
};
/**
 * Type definition for `AWS::DMS::EventSubscription.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-eventsubscription-tag.html}
 */
export type Tag = {
  Key: string;
  Value: string;
};
/**
 * Resource Type definition for AWS::DMS::EventSubscription
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-eventsubscription.html}
 */
export class DMSEventSubscription extends $Resource<
  "AWS::DMS::EventSubscription",
  DMSEventSubscriptionProperties,
  DMSEventSubscriptionAttributes
> {
  public static readonly Type = "AWS::DMS::EventSubscription";
  constructor(
    logicalId: string,
    properties: DMSEventSubscriptionProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, DMSEventSubscription.Type, properties, options);
  }
}
