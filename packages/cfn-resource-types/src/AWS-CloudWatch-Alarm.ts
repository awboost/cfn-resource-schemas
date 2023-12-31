import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource Type definition for AWS::CloudWatch::Alarm
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudwatch-alarm.html}
 */
export type CloudWatchAlarmProperties = {
  /**
   * Indicates whether actions should be executed during any changes to the alarm state. The default is TRUE.
   */
  ActionsEnabled?: boolean;
  /**
   * The list of actions to execute when this alarm transitions into an ALARM state from any other state.
   */
  AlarmActions?: string[];
  /**
   * The description of the alarm.
   */
  AlarmDescription?: string;
  /**
   * The name of the alarm.
   */
  AlarmName?: string;
  /**
   * The arithmetic operation to use when comparing the specified statistic and threshold.
   */
  ComparisonOperator: string;
  /**
   * The number of datapoints that must be breaching to trigger the alarm.
   */
  DatapointsToAlarm?: number;
  /**
   * The dimensions for the metric associated with the alarm. For an alarm based on a math expression, you can't specify Dimensions. Instead, you use Metrics.
   */
  Dimensions?: Dimension[];
  /**
   * Used only for alarms based on percentiles.
   */
  EvaluateLowSampleCountPercentile?: string;
  /**
   * The number of periods over which data is compared to the specified threshold.
   */
  EvaluationPeriods: number;
  /**
   * The percentile statistic for the metric associated with the alarm. Specify a value between p0.0 and p100.
   */
  ExtendedStatistic?: string;
  /**
   * The actions to execute when this alarm transitions to the INSUFFICIENT_DATA state from any other state.
   */
  InsufficientDataActions?: string[];
  /**
   * The name of the metric associated with the alarm.
   */
  MetricName?: string;
  /**
   * An array that enables you to create an alarm based on the result of a metric math expression.
   */
  Metrics?: MetricDataQuery[];
  /**
   * The namespace of the metric associated with the alarm.
   */
  Namespace?: string;
  /**
   * The actions to execute when this alarm transitions to the OK state from any other state.
   */
  OKActions?: string[];
  /**
   * The period in seconds, over which the statistic is applied.
   */
  Period?: number;
  /**
   * The statistic for the metric associated with the alarm, other than percentile.
   */
  Statistic?: string;
  /**
   * In an alarm based on an anomaly detection model, this is the ID of the ANOMALY_DETECTION_BAND function used as the threshold for the alarm.
   */
  Threshold?: number;
  /**
   * In an alarm based on an anomaly detection model, this is the ID of the ANOMALY_DETECTION_BAND function used as the threshold for the alarm.
   */
  ThresholdMetricId?: string;
  /**
   * Sets how this alarm is to handle missing data points. Valid values are breaching, notBreaching, ignore, and missing.
   */
  TreatMissingData?: string;
  /**
   * The unit of the metric associated with the alarm.
   */
  Unit?: string;
};
/**
 * Attribute type definition for `AWS::CloudWatch::Alarm`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudwatch-alarm.html#aws-resource-cloudwatch-alarm-return-values}
 */
export type CloudWatchAlarmAttributes = {
  /**
   * Amazon Resource Name is a unique name for each resource.
   */
  Arn: string;
};
/**
 * Type definition for `AWS::CloudWatch::Alarm.Dimension`.
 * Dimensions are arbitrary name/value pairs that can be associated with a CloudWatch metric.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudwatch-alarm-dimension.html}
 */
export type Dimension = {
  /**
   * The name of the dimension.
   */
  Name: string;
  /**
   * The value for the dimension.
   */
  Value: string;
};
/**
 * Type definition for `AWS::CloudWatch::Alarm.Metric`.
 * The Metric property type represents a specific metric.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudwatch-alarm-metric.html}
 */
export type Metric = {
  /**
   * The dimensions for the metric.
   */
  Dimensions?: Dimension[];
  /**
   * The name of the metric.
   */
  MetricName?: string;
  /**
   * The namespace of the metric.
   */
  Namespace?: string;
};
/**
 * Type definition for `AWS::CloudWatch::Alarm.MetricDataQuery`.
 * This property type specifies the metric data to return, and whether this call is just retrieving a batch set of data for one metric, or is performing a math expression on metric data.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudwatch-alarm-metricdataquery.html}
 */
export type MetricDataQuery = {
  /**
   * The ID of the account where the metrics are located, if this is a cross-account alarm.
   */
  AccountId?: string;
  /**
   * The math expression to be performed on the returned data.
   */
  Expression?: string;
  /**
   * A short name used to tie this object to the results in the response.
   */
  Id: string;
  /**
   * A human-readable label for this metric or expression.
   */
  Label?: string;
  /**
   * The metric to be returned, along with statistics, period, and units.
   */
  MetricStat?: MetricStat;
  /**
   * The period in seconds, over which the statistic is applied.
   */
  Period?: number;
  /**
   * This option indicates whether to return the timestamps and raw data values of this metric.
   */
  ReturnData?: boolean;
};
/**
 * Type definition for `AWS::CloudWatch::Alarm.MetricStat`.
 * This structure defines the metric to be returned, along with the statistics, period, and units.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudwatch-alarm-metricstat.html}
 */
export type MetricStat = {
  /**
   * The metric to return, including the metric name, namespace, and dimensions.
   */
  Metric: Metric;
  /**
   * The granularity, in seconds, of the returned data points.
   */
  Period: number;
  /**
   * The statistic to return.
   */
  Stat: string;
  /**
   * The unit to use for the returned data points.
   */
  Unit?: string;
};
/**
 * Resource Type definition for AWS::CloudWatch::Alarm
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudwatch-alarm.html}
 */
export class CloudWatchAlarm extends $Resource<
  "AWS::CloudWatch::Alarm",
  CloudWatchAlarmProperties,
  CloudWatchAlarmAttributes
> {
  public static readonly Type = "AWS::CloudWatch::Alarm";
  public static readonly AttributeNames = ["Arn" as const];
  constructor(
    logicalId: string,
    properties: CloudWatchAlarmProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      CloudWatchAlarm.Type,
      properties,
      CloudWatchAlarm.AttributeNames,
      options,
    );
  }
}
