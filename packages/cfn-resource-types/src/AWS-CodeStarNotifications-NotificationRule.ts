import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::CodeStarNotifications::NotificationRule
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codestarnotifications-notificationrule.html}
 */
export type CodeStarNotificationsNotificationRuleProperties = {
  /**
   * @minLength `1`
   * @maxLength `2048`
   */
  CreatedBy?: string;
  DetailType: "BASIC" | "FULL";
  /**
   * @minLength `1`
   * @maxLength `2048`
   */
  EventTypeId?: string;
  EventTypeIds: string[];
  /**
   * @minLength `1`
   * @maxLength `64`
   * @pattern `[A-Za-z0-9\-_ ]+$`
   */
  Name: string;
  /**
   * @pattern `^arn:aws[^:\s]*:[^:\s]*:[^:\s]*:[0-9]{12}:[^\s]+$`
   */
  Resource: string;
  Status?: "ENABLED" | "DISABLED";
  Tags?: Record<string, string>;
  /**
   * @minLength `1`
   * @maxLength `2048`
   */
  TargetAddress?: string;
  /**
   * @maxLength `10`
   */
  Targets: Target[];
};
/**
 * Attribute type definition for `AWS::CodeStarNotifications::NotificationRule`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codestarnotifications-notificationrule.html#aws-resource-codestarnotifications-notificationrule-return-values}
 */
export type CodeStarNotificationsNotificationRuleAttributes = {
  /**
   * @pattern `^arn:aws[^:\s]*:codestar-notifications:[^:\s]+:\d{12}:notificationrule\/(.*\S)?$`
   */
  Arn: string;
};
/**
 * Type definition for `AWS::CodeStarNotifications::NotificationRule.Target`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codestarnotifications-notificationrule-target.html}
 */
export type Target = {
  TargetAddress: string;
  TargetType: string;
};
/**
 * Resource Type definition for AWS::CodeStarNotifications::NotificationRule
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codestarnotifications-notificationrule.html}
 */
export class CodeStarNotificationsNotificationRule extends $Resource<
  "AWS::CodeStarNotifications::NotificationRule",
  CodeStarNotificationsNotificationRuleProperties,
  CodeStarNotificationsNotificationRuleAttributes
> {
  public static readonly Type = "AWS::CodeStarNotifications::NotificationRule";
  constructor(
    logicalId: string,
    properties: CodeStarNotificationsNotificationRuleProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      CodeStarNotificationsNotificationRule.Type,
      properties,
      options,
    );
  }
}
