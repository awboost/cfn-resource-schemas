import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for AWS::Events::EventBus
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-eventbus.html}
 */
export type EventsEventBusProperties = {
  /**
   * If you are creating a partner event bus, this specifies the partner event source that the new event bus will be matched with.
   */
  EventSourceName?: string;
  /**
   * The name of the event bus.
   */
  Name: string;
  /**
   * A JSON string that describes the permission policy statement for the event bus.
   */
  Policy?: Record<string, any> | string;
  /**
   * Any tags assigned to the event bus.
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::Events::EventBus`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-eventbus.html#aws-resource-events-eventbus-return-values}
 */
export type EventsEventBusAttributes = {
  /**
   * The Amazon Resource Name (ARN) for the event bus.
   */
  Arn: string;
};
/**
 * Type definition for `AWS::Events::EventBus.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-eventbus-tag.html}
 */
export type Tag = {
  Key: string;
  Value: string;
};
/**
 * Resource type definition for AWS::Events::EventBus
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-eventbus.html}
 */
export class EventsEventBus extends $Resource<
  "AWS::Events::EventBus",
  EventsEventBusProperties,
  EventsEventBusAttributes
> {
  public static readonly Type = "AWS::Events::EventBus";
  constructor(
    logicalId: string,
    properties: EventsEventBusProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, EventsEventBus.Type, properties, options);
  }
}
