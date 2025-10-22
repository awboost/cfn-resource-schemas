import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::Events::EventBusPolicy
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-eventbuspolicy.html}
 */
export type EventsEventBusPolicyProperties = {
  /**
   * The action that you are enabling the other account to perform.
   * @minLength `1`
   * @maxLength `64`
   * @pattern `events:[a-zA-Z]+`
   */
  Action?: string;
  /**
   * This parameter enables you to limit the permission to accounts that fulfill a certain condition, such as being a member of a certain AWS organization.
   */
  Condition?: Condition;
  /**
   * The name of the event bus associated with the rule. If you omit this, the default event bus is used.
   * @minLength `1`
   * @maxLength `256`
   * @pattern `[\.\-_A-Za-z0-9]+`
   */
  EventBusName?: string;
  /**
   * The 12-digit AWS account ID that you are permitting to put events to your default event bus. Specify "*" to permit any account to put events to your default event bus.
   * @minLength `1`
   * @maxLength `12`
   * @pattern `(\d{12}|\*)`
   */
  Principal?: string;
  /**
   * A JSON string that describes the permission policy statement. You can include a Policy parameter in the request instead of using the StatementId, Action, Principal, or Condition parameters.
   */
  Statement?: Record<string, any>;
  /**
   * An identifier string for the external account that you are granting permissions to
   * @minLength `1`
   * @maxLength `64`
   * @pattern `[a-zA-Z0-9-_]+`
   */
  StatementId: string;
};
/**
 * Type definition for `AWS::Events::EventBusPolicy.Condition`.
 * This parameter enables you to limit the permission to accounts that fulfill a certain condition, such as being a member of a certain AWS organization.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-eventbuspolicy-condition.html}
 */
export type Condition = {
  /**
   * Specifies the value for the key. Currently, this must be the ID of the organization.
   */
  Key?: string;
  /**
   * Specifies the type of condition. Currently the only supported value is StringEquals.
   */
  Type?: string;
  /**
   * Specifies the key for the condition. Currently the only supported key is aws:PrincipalOrgID.
   */
  Value?: string;
};
/**
 * Resource Type definition for AWS::Events::EventBusPolicy
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-eventbuspolicy.html}
 */
export class EventsEventBusPolicy extends $Resource<
  "AWS::Events::EventBusPolicy",
  EventsEventBusPolicyProperties,
  Record<string, never>
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
