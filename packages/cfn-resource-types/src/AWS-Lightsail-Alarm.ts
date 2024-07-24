import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::Lightsail::Alarm
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-alarm.html}
 */
export type LightsailAlarmProperties = {
  /**
   * The name for the alarm. Specify the name of an existing alarm to update, and overwrite the previous configuration of the alarm.
   * @pattern `\w[\w\-]*\w`
   */
  AlarmName: string;
  /**
   * The arithmetic operation to use when comparing the specified statistic to the threshold. The specified statistic value is used as the first operand.
   */
  ComparisonOperator: string;
  /**
   * The contact protocols to use for the alarm, such as Email, SMS (text messaging), or both.
   */
  ContactProtocols?: string[];
  /**
   * The number of data points that must be not within the specified threshold to trigger the alarm. If you are setting an "M out of N" alarm, this value (datapointsToAlarm) is the M.
   */
  DatapointsToAlarm?: number;
  /**
   * The number of most recent periods over which data is compared to the specified threshold. If you are setting an "M out of N" alarm, this value (evaluationPeriods) is the N.
   */
  EvaluationPeriods: number;
  /**
   * The name of the metric to associate with the alarm.
   */
  MetricName: string;
  /**
   * The name of the Lightsail resource that the alarm monitors.
   */
  MonitoredResourceName: string;
  /**
   * Indicates whether the alarm is enabled. Notifications are enabled by default if you don't specify this parameter.
   */
  NotificationEnabled?: boolean;
  /**
   * The alarm states that trigger a notification.
   */
  NotificationTriggers?: string[];
  /**
   * The value against which the specified statistic is compared.
   */
  Threshold: number;
  /**
   * Sets how this alarm will handle missing data points.
   */
  TreatMissingData?: string;
};
/**
 * Attribute type definition for `AWS::Lightsail::Alarm`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-alarm.html#aws-resource-lightsail-alarm-return-values}
 */
export type LightsailAlarmAttributes = {
  AlarmArn: string;
  /**
   * The current state of the alarm.
   */
  State: string;
};
/**
 * Resource Type definition for AWS::Lightsail::Alarm
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-alarm.html}
 */
export class LightsailAlarm extends $Resource<
  "AWS::Lightsail::Alarm",
  LightsailAlarmProperties,
  LightsailAlarmAttributes
> {
  public static readonly Type = "AWS::Lightsail::Alarm";
  constructor(
    logicalId: string,
    properties: LightsailAlarmProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, LightsailAlarm.Type, properties, options);
  }
}
