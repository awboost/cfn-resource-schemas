import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::Neptune::EventSubscription
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-neptune-eventsubscription.html}
 */
export type NeptuneEventSubscriptionProperties = {
  Enabled?: boolean;
  EventCategories?: string[];
  SnsTopicArn?: string;
  SourceIds?: string[];
  SourceType?: string;
};
/**
 * Attribute type definition for `AWS::Neptune::EventSubscription`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-neptune-eventsubscription.html#aws-resource-neptune-eventsubscription-return-values}
 */
export type NeptuneEventSubscriptionAttributes = {
  Id: string;
};
/**
 * Resource Type definition for AWS::Neptune::EventSubscription
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-neptune-eventsubscription.html}
 */
export class NeptuneEventSubscription extends $Resource<
  "AWS::Neptune::EventSubscription",
  NeptuneEventSubscriptionProperties,
  NeptuneEventSubscriptionAttributes
> {
  public static readonly Type = "AWS::Neptune::EventSubscription";
  constructor(
    logicalId: string,
    properties: NeptuneEventSubscriptionProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, NeptuneEventSubscription.Type, properties, options);
  }
}
