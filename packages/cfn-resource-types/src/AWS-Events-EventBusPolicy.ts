import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::Events::EventBusPolicy
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-eventbuspolicy.html}
 */
export type EventsEventBusPolicyProperties = {
  Action?: string;
  Condition?: Condition;
  EventBusName?: string;
  Principal?: string;
  Statement?: Record<string, any>;
  StatementId: string;
};
/**
 * Attribute type definition for `AWS::Events::EventBusPolicy`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-eventbuspolicy.html#aws-resource-events-eventbuspolicy-return-values}
 */
export type EventsEventBusPolicyAttributes = {
  Id: string;
};
/**
 * Type definition for `AWS::Events::EventBusPolicy.Condition`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-eventbuspolicy-condition.html}
 */
export type Condition = {
  Key?: string;
  Type?: string;
  Value?: string;
};
/**
 * Resource Type definition for AWS::Events::EventBusPolicy
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-eventbuspolicy.html}
 */
export class EventsEventBusPolicy extends $Resource<
  "AWS::Events::EventBusPolicy",
  EventsEventBusPolicyProperties,
  EventsEventBusPolicyAttributes
> {
  public static readonly Type = "AWS::Events::EventBusPolicy";
  constructor(
    logicalId: string,
    properties: EventsEventBusPolicyProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, EventsEventBusPolicy.Type, properties, options);
  }
}
