import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * The AWS::CloudWatch::CompositeAlarm type specifies an alarm which aggregates the states of other Alarms (Metric or Composite Alarms) as defined by the AlarmRule expression
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudwatch-compositealarm.html}
 */
export type CloudWatchCompositeAlarmProperties = {
  /**
   * Indicates whether actions should be executed during any changes to the alarm state. The default is TRUE.
   */
  ActionsEnabled?: boolean;
  /**
   * Actions will be suppressed if the suppressor alarm is in the ALARM state. ActionsSuppressor can be an AlarmName or an Amazon Resource Name (ARN) from an existing alarm.
   * @minLength `1`
   * @maxLength `1600`
   */
  ActionsSuppressor?: string;
  /**
   * Actions will be suppressed if WaitPeriod is active. The length of time that actions are suppressed is in seconds.
   * @min `0`
   */
  ActionsSuppressorExtensionPeriod?: number;
  /**
   * Actions will be suppressed if ExtensionPeriod is active. The length of time that actions are suppressed is in seconds.
   * @min `0`
   */
  ActionsSuppressorWaitPeriod?: number;
  /**
   * The list of actions to execute when this alarm transitions into an ALARM state from any other state. Specify each action as an Amazon Resource Name (ARN).
   * @maxLength `5`
   */
  AlarmActions?: string[];
  /**
   * The description of the alarm
   * @minLength `0`
   * @maxLength `1024`
   */
  AlarmDescription?: string;
  /**
   * The name of the Composite Alarm
   * @minLength `1`
   * @maxLength `255`
   */
  AlarmName?: string;
  /**
   * Expression which aggregates the state of other Alarms (Metric or Composite Alarms)
   * @minLength `1`
   * @maxLength `10240`
   */
  AlarmRule: string;
  /**
   * The actions to execute when this alarm transitions to the INSUFFICIENT_DATA state from any other state. Each action is specified as an Amazon Resource Name (ARN).
   * @maxLength `5`
   */
  InsufficientDataActions?: string[];
  /**
   * The actions to execute when this alarm transitions to the OK state from any other state. Each action is specified as an Amazon Resource Name (ARN).
   * @maxLength `5`
   */
  OKActions?: string[];
};
/**
 * Attribute type definition for `AWS::CloudWatch::CompositeAlarm`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudwatch-compositealarm.html#aws-resource-cloudwatch-compositealarm-return-values}
 */
export type CloudWatchCompositeAlarmAttributes = {
  /**
   * Amazon Resource Name (ARN) of the alarm
   * @minLength `1`
   * @maxLength `1600`
   */
  Arn: string;
};
/**
 * The AWS::CloudWatch::CompositeAlarm type specifies an alarm which aggregates the states of other Alarms (Metric or Composite Alarms) as defined by the AlarmRule expression
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudwatch-compositealarm.html}
 */
export class CloudWatchCompositeAlarm extends $Resource<
  "AWS::CloudWatch::CompositeAlarm",
  CloudWatchCompositeAlarmProperties,
  CloudWatchCompositeAlarmAttributes
> {
  public static readonly Type = "AWS::CloudWatch::CompositeAlarm";
  constructor(
    logicalId: string,
    properties: CloudWatchCompositeAlarmProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, CloudWatchCompositeAlarm.Type, properties, options);
  }
}
