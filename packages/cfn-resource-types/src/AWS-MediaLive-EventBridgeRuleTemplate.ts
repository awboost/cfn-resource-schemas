import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Definition of AWS::MediaLive::EventBridgeRuleTemplate Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-eventbridgeruletemplate.html}
 */
export type MediaLiveEventBridgeRuleTemplateProperties = {
  /**
   * A resource's optional description.
   * @minLength `0`
   * @maxLength `1024`
   */
  Description?: string;
  /**
   * Placeholder documentation for __listOfEventBridgeRuleTemplateTarget
   */
  EventTargets?: EventBridgeRuleTemplateTarget[];
  /**
   * The type of event to match with the rule.
   */
  EventType: EventBridgeRuleTemplateEventType;
  /**
   * An eventbridge rule template group's identifier. Can be either be its id or current name.
   * @pattern `^[^\s]+$`
   */
  GroupIdentifier?: string;
  /**
   * A resource's name. Names must be unique within the scope of a resource type in a specific region.
   * @minLength `1`
   * @maxLength `255`
   * @pattern `^[^\s]+$`
   */
  Name: string;
  /**
   * Represents the tags associated with a resource.
   */
  Tags?: TagMap;
};
/**
 * Attribute type definition for `AWS::MediaLive::EventBridgeRuleTemplate`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-eventbridgeruletemplate.html#aws-resource-medialive-eventbridgeruletemplate-return-values}
 */
export type MediaLiveEventBridgeRuleTemplateAttributes = {
  /**
   * An eventbridge rule template's ARN (Amazon Resource Name)
   * @pattern `^arn:.+:medialive:.+:eventbridge-rule-template:.+$`
   */
  Arn: string;
  /**
   * Placeholder documentation for __timestampIso8601
   */
  CreatedAt: string;
  /**
   * An eventbridge rule template group's id. AWS provided template groups have ids that start with `aws-`
   * @minLength `7`
   * @maxLength `11`
   * @pattern `^(aws-)?[0-9]{7}$`
   */
  GroupId: string;
  /**
   * An eventbridge rule template's id. AWS provided templates have ids that start with `aws-`
   * @minLength `7`
   * @maxLength `11`
   * @pattern `^(aws-)?[0-9]{7}$`
   */
  Id: string;
  /**
   * Placeholder documentation for __string
   */
  Identifier: string;
  /**
   * Placeholder documentation for __timestampIso8601
   */
  ModifiedAt: string;
};
/**
 * Type definition for `AWS::MediaLive::EventBridgeRuleTemplate.EventBridgeRuleTemplateEventType`.
 * The type of event to match with the rule.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-eventbridgeruletemplate-eventbridgeruletemplateeventtype.html}
 */
export type EventBridgeRuleTemplateEventType =
  | "MEDIALIVE_MULTIPLEX_ALERT"
  | "MEDIALIVE_MULTIPLEX_STATE_CHANGE"
  | "MEDIALIVE_CHANNEL_ALERT"
  | "MEDIALIVE_CHANNEL_INPUT_CHANGE"
  | "MEDIALIVE_CHANNEL_STATE_CHANGE"
  | "MEDIAPACKAGE_INPUT_NOTIFICATION"
  | "MEDIAPACKAGE_KEY_PROVIDER_NOTIFICATION"
  | "MEDIAPACKAGE_HARVEST_JOB_NOTIFICATION"
  | "SIGNAL_MAP_ACTIVE_ALARM"
  | "MEDIACONNECT_ALERT"
  | "MEDIACONNECT_SOURCE_HEALTH"
  | "MEDIACONNECT_OUTPUT_HEALTH"
  | "MEDIACONNECT_FLOW_STATUS_CHANGE";
/**
 * Type definition for `AWS::MediaLive::EventBridgeRuleTemplate.EventBridgeRuleTemplateTarget`.
 * The target to which to send matching events.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-eventbridgeruletemplate-eventbridgeruletemplatetarget.html}
 */
export type EventBridgeRuleTemplateTarget = {
  /**
   * Target ARNs must be either an SNS topic or CloudWatch log group.
   * @minLength `1`
   * @maxLength `2048`
   * @pattern `^arn.+$`
   */
  Arn: string;
};
/**
 * Type definition for `AWS::MediaLive::EventBridgeRuleTemplate.TagMap`.
 * Represents the tags associated with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-eventbridgeruletemplate-tagmap.html}
 */
export type TagMap = Record<string, string>;
/**
 * Definition of AWS::MediaLive::EventBridgeRuleTemplate Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-eventbridgeruletemplate.html}
 */
export class MediaLiveEventBridgeRuleTemplate extends $Resource<
  "AWS::MediaLive::EventBridgeRuleTemplate",
  MediaLiveEventBridgeRuleTemplateProperties,
  MediaLiveEventBridgeRuleTemplateAttributes
> {
  public static readonly Type = "AWS::MediaLive::EventBridgeRuleTemplate";
  constructor(
    logicalId: string,
    properties: MediaLiveEventBridgeRuleTemplateProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      MediaLiveEventBridgeRuleTemplate.Type,
      properties,
      options,
    );
  }
}
