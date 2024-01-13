import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::DocDB::EventSubscription
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-docdb-eventsubscription.html}
 */
export type DocDBEventSubscriptionProperties = {
  Enabled?: boolean;
  EventCategories?: string[];
  SnsTopicArn: string;
  SourceIds?: string[];
  SourceType?: string;
  SubscriptionName?: string;
};
/**
 * Attribute type definition for `AWS::DocDB::EventSubscription`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-docdb-eventsubscription.html#aws-resource-docdb-eventsubscription-return-values}
 */
export type DocDBEventSubscriptionAttributes = {
  Id: string;
};
/**
 * Resource Type definition for AWS::DocDB::EventSubscription
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-docdb-eventsubscription.html}
 */
export class DocDBEventSubscription extends $Resource<
  "AWS::DocDB::EventSubscription",
  DocDBEventSubscriptionProperties,
  DocDBEventSubscriptionAttributes
> {
  public static readonly Type = "AWS::DocDB::EventSubscription";
  constructor(
    logicalId: string,
    properties: DocDBEventSubscriptionProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, DocDBEventSubscription.Type, properties, options);
  }
}
