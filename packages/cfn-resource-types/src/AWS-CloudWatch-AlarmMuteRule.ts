import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::CloudWatch::AlarmMuteRule that allows defining a rule and targeting alarms to mute their actions during the specified window.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudwatch-alarmmuterule.html}
 */
export type CloudWatchAlarmMuteRuleProperties = {
  /**
   * The description of the AlarmMuteRule
   * @minLength `0`
   * @maxLength `1024`
   */
  Description?: string;
  /**
   * The date, with the same timezone offset as "ScheduleTimezone" after which the alarm mute rule will be expired.
   */
  ExpireDate?: string;
  /**
   * Targets to be muted
   */
  MuteTargets?: {
    /**
     * The alarm names to be mute by the AlarmMuteRule
     * @maxLength `500`
     */
    AlarmNames: string[];
  };
  /**
   * The name of the AlarmMuteRule
   * @minLength `1`
   * @maxLength `255`
   */
  Name?: string;
  /**
   * The rule for the mute
   */
  Rule: {
    /**
     * Schedule for the mute to be active
     */
    Schedule: {
      /**
       * The duration of the schedule when it triggers
       * @minLength `1`
       * @maxLength `50`
       */
      Duration: string;
      /**
       * The expression of the schedule
       * @minLength `1`
       * @maxLength `256`
       */
      Expression: string;
      /**
       * The timezone of the schedule
       * @minLength `1`
       * @maxLength `50`
       */
      Timezone?: string;
    };
  };
  /**
   * The date, with the same timezone offset as "ScheduleTimezone", after which the alarm mute rule will become active.
   */
  StartDate?: string;
  /**
   * An array of key-value pairs to apply to this resource.
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::CloudWatch::AlarmMuteRule`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudwatch-alarmmuterule.html#aws-resource-cloudwatch-alarmmuterule-return-values}
 */
export type CloudWatchAlarmMuteRuleAttributes = {
  /**
   * Amazon Resource Name (ARN) of the AlarmMuteRule
   * @minLength `1`
   * @maxLength `1600`
   */
  Arn: string;
  /**
   * The last update timestamp of the alarm mute schedule
   */
  LastUpdatedTimestamp: string;
  /**
   * The mute type of the alarm mute
   */
  MuteType: string;
  /**
   * The current status of the AlarmMuteRule
   */
  Status: "SCHEDULED" | "ACTIVE" | "EXPIRED";
};
/**
 * Type definition for `AWS::CloudWatch::AlarmMuteRule.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudwatch-alarmmuterule-tag.html}
 */
export type Tag = {
  /**
   * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @minLength `1`
   * @maxLength `128`
   */
  Key: string;
  /**
   * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @minLength `0`
   * @maxLength `256`
   */
  Value: string;
};
/**
 * Resource Type definition for AWS::CloudWatch::AlarmMuteRule that allows defining a rule and targeting alarms to mute their actions during the specified window.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudwatch-alarmmuterule.html}
 */
export class CloudWatchAlarmMuteRule extends $Resource<
  "AWS::CloudWatch::AlarmMuteRule",
  CloudWatchAlarmMuteRuleProperties,
  CloudWatchAlarmMuteRuleAttributes
> {
  public static readonly Type = "AWS::CloudWatch::AlarmMuteRule";
  constructor(
    logicalId: string,
    properties: CloudWatchAlarmMuteRuleProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, CloudWatchAlarmMuteRule.Type, properties, options);
  }
}
