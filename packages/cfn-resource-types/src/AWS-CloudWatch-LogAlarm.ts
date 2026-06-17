import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::CloudWatch::LogAlarm. A LogAlarm evaluates scheduled query results from CloudWatch Logs and triggers actions when thresholds are breached.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudwatch-logalarm.html}
 */
export type CloudWatchLogAlarmProperties = {
  /**
   * The number of log lines to include in alarm notifications. Valid values are 0 to 50.
   * @min `0`
   * @max `50`
   */
  ActionLogLineCount?: number;
  /**
   * The ARN of the IAM role that grants CloudWatch permissions to fetch log lines for alarm notifications. Required when ActionLogLineCount is greater than 0.
   */
  ActionLogLineRoleArn?: string;
  /**
   * Indicates whether actions should be executed during any changes to the alarm state. The default is TRUE.
   */
  ActionsEnabled?: boolean;
  /**
   * The list of actions to execute when this alarm transitions into an ALARM state from any other state.
   */
  AlarmActions?: string[];
  /**
   * The description of the log alarm.
   */
  AlarmDescription?: string;
  /**
   * The name of the log alarm.
   * @minLength `1`
   * @maxLength `255`
   */
  AlarmName?: string;
  /**
   * The arithmetic operation to use when comparing the specified threshold and the query results. Valid values are GreaterThanOrEqualToThreshold, GreaterThanThreshold, LessThanThreshold, and LessThanOrEqualToThreshold.
   */
  ComparisonOperator: string;
  /**
   * The actions to execute when this alarm transitions to the INSUFFICIENT_DATA state from any other state.
   */
  InsufficientDataActions?: string[];
  /**
   * The actions to execute when this alarm transitions to the OK state from any other state.
   */
  OKActions?: string[];
  /**
   * The number of query results that must be breaching to trigger the alarm.
   */
  QueryResultsToAlarm: number;
  /**
   * The number of query results over which data is compared to the specified threshold.
   */
  QueryResultsToEvaluate: number;
  /**
   * The scheduled query configuration for the log alarm.
   */
  ScheduledQueryConfiguration: ScheduledQueryConfiguration;
  /**
   * A list of key-value pairs to associate with the log alarm.
   * @maxLength `50`
   */
  Tags?: Tag[];
  /**
   * The value to compare against the results of the scheduled query evaluation.
   */
  Threshold: number;
  /**
   * Sets how this alarm is to handle missing data points. Valid values are breaching, notBreaching, ignore, and missing.
   */
  TreatMissingData?: string;
};
/**
 * Attribute type definition for `AWS::CloudWatch::LogAlarm`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudwatch-logalarm.html#aws-resource-cloudwatch-logalarm-return-values}
 */
export type CloudWatchLogAlarmAttributes = {
  /**
   * The ARN of the log alarm.
   */
  Arn: string;
};
/**
 * Type definition for `AWS::CloudWatch::LogAlarm.ScheduleConfiguration`.
 * The schedule configuration for the scheduled query.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudwatch-logalarm-scheduleconfiguration.html}
 */
export type ScheduleConfiguration = {
  /**
   * The number of seconds into the past to end the query window.
   */
  EndTimeOffset?: number;
  /**
   * The expression that defines when the scheduled query runs, e.g. rate(1 minute).
   */
  ScheduleExpression: string;
  /**
   * The number of seconds into the past to start the query window.
   */
  StartTimeOffset?: number;
};
/**
 * Type definition for `AWS::CloudWatch::LogAlarm.ScheduledQueryConfiguration`.
 * The scheduled query configuration for the log alarm.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudwatch-logalarm-scheduledqueryconfiguration.html}
 */
export type ScheduledQueryConfiguration = {
  /**
   * The aggregation expression for the scheduled query, e.g. count(*) or avg(latency) by host.
   */
  AggregationExpression: string;
  /**
   * The log groups to query.
   */
  LogGroupIdentifiers: string[];
  /**
   * The query string to execute against the specified log groups.
   */
  QueryString: string;
  /**
   * The schedule configuration.
   */
  ScheduleConfiguration: ScheduleConfiguration;
  /**
   * The ARN of the IAM role that grants permissions to execute the scheduled query.
   */
  ScheduledQueryRoleARN: string;
};
/**
 * Type definition for `AWS::CloudWatch::LogAlarm.Tag`.
 * Metadata that you can assign to a log alarm. Tags can help you organize and categorize your resources.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudwatch-logalarm-tag.html}
 */
export type Tag = {
  /**
   * A unique identifier for the tag. The combination of tag keys and values can help you organize and categorize your resources.
   * @minLength `1`
   * @maxLength `128`
   */
  Key: string;
  /**
   * The value for the specified tag key.
   * @minLength `1`
   * @maxLength `256`
   */
  Value: string;
};
/**
 * Resource Type definition for AWS::CloudWatch::LogAlarm. A LogAlarm evaluates scheduled query results from CloudWatch Logs and triggers actions when thresholds are breached.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudwatch-logalarm.html}
 */
export class CloudWatchLogAlarm extends $Resource<
  "AWS::CloudWatch::LogAlarm",
  CloudWatchLogAlarmProperties,
  CloudWatchLogAlarmAttributes
> {
  public static readonly Type = "AWS::CloudWatch::LogAlarm";
  constructor(
    logicalId: string,
    properties: CloudWatchLogAlarmProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, CloudWatchLogAlarm.Type, properties, options);
  }
}
