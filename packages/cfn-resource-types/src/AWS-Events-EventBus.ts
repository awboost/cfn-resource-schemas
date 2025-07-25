import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for AWS::Events::EventBus
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-eventbus.html}
 */
export type EventsEventBusProperties = {
  /**
   * Dead Letter Queue for the event bus.
   */
  DeadLetterConfig?: {
    Arn?: string;
  };
  /**
   * The description of the event bus.
   */
  Description?: string;
  /**
   * If you are creating a partner event bus, this specifies the partner event source that the new event bus will be matched with.
   */
  EventSourceName?: string;
  /**
   * Kms Key Identifier used to encrypt events at rest in the event bus.
   */
  KmsKeyIdentifier?: string;
  /**
   * The logging configuration settings for vended logs.
   */
  LogConfig?: {
    /**
     * Configures whether or not to include event detail, input transformer details, target properties, and target input in the applicable log messages.
     */
    IncludeDetail?: "FULL" | "NONE";
    /**
     * Configures the log level of the EventBus and determines which log messages are sent to Ingestion Hub for delivery.
     */
    Level?: "INFO" | "ERROR" | "TRACE" | "OFF";
  };
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
