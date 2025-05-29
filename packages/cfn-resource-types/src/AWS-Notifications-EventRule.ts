import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::Notifications::EventRule
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-notifications-eventrule.html}
 */
export type NotificationsEventRuleProperties = {
  /**
   * @minLength `0`
   * @maxLength `4096`
   */
  EventPattern?: string;
  /**
   * @minLength `1`
   * @maxLength `128`
   * @pattern `^([a-zA-Z0-9 \-\(\)])+$`
   */
  EventType: string;
  /**
   * @pattern `^arn:aws:notifications::[0-9]{12}:configuration/[a-z0-9]{27}$`
   */
  NotificationConfigurationArn: string;
  /**
   * @minLength `1`
   */
  Regions: string[];
  /**
   * @minLength `1`
   * @maxLength `36`
   * @pattern `^aws.([a-z0-9\-])+$`
   */
  Source: string;
};
/**
 * Attribute type definition for `AWS::Notifications::EventRule`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-notifications-eventrule.html#aws-resource-notifications-eventrule-return-values}
 */
export type NotificationsEventRuleAttributes = {
  /**
   * @pattern `^arn:aws:notifications::[0-9]{12}:configuration/[a-z0-9]{27}/rule/[a-z0-9]{27}$`
   */
  Arn: string;
  CreationTime: string;
  ManagedRules: string[];
  StatusSummaryByRegion: Record<
    string,
    {
      Reason: string;
      Status: EventRuleStatus;
    }
  >;
};
/**
 * Type definition for `AWS::Notifications::EventRule.EventRuleStatus`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-notifications-eventrule-eventrulestatus.html}
 */
export type EventRuleStatus =
  | "ACTIVE"
  | "INACTIVE"
  | "CREATING"
  | "UPDATING"
  | "DELETING";
/**
 * Type definition for `AWS::Notifications::EventRule.EventRuleStatusSummary`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-notifications-eventrule-eventrulestatussummary.html}
 */
export type EventRuleStatusSummary = {
  Reason: string;
  Status: EventRuleStatus;
};
/**
 * Type definition for `AWS::Notifications::EventRule.StatusSummaryByRegion`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-notifications-eventrule-statussummarybyregion.html}
 */
export type StatusSummaryByRegion = Record<string, EventRuleStatusSummary>;
/**
 * Resource Type definition for AWS::Notifications::EventRule
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-notifications-eventrule.html}
 */
export class NotificationsEventRule extends $Resource<
  "AWS::Notifications::EventRule",
  NotificationsEventRuleProperties,
  NotificationsEventRuleAttributes
> {
  public static readonly Type = "AWS::Notifications::EventRule";
  constructor(
    logicalId: string,
    properties: NotificationsEventRuleProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, NotificationsEventRule.Type, properties, options);
  }
}
