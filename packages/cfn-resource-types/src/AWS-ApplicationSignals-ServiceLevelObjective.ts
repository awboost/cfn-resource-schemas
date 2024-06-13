import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::ApplicationSignals::ServiceLevelObjective
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-applicationsignals-servicelevelobjective.html}
 */
export type ApplicationSignalsServiceLevelObjectiveProperties = {
  /**
   * An optional description for this SLO. Default is 'No description'
   * @minLength `1`
   * @maxLength `1024`
   */
  Description?: string;
  /**
   * A structure that contains the attributes that determine the goal of the SLO. This includes the time period for evaluation and the attainment threshold.
   */
  Goal?: Goal;
  /**
   * The name of this SLO.
   * @pattern `^[0-9A-Za-z][-._0-9A-Za-z ]{0,126}[0-9A-Za-z]$`
   */
  Name: string;
  /**
   * This structure contains information about the performance metric that an SLO monitors.
   */
  Sli: Sli;
  /**
   * The list of tag keys and values associated with the resource you specified
   * @minLength `1`
   * @maxLength `200`
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::ApplicationSignals::ServiceLevelObjective`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-applicationsignals-servicelevelobjective.html#aws-resource-applicationsignals-servicelevelobjective-return-values}
 */
export type ApplicationSignalsServiceLevelObjectiveAttributes = {
  /**
   * The ARN of this SLO.
   * @pattern `^arn:[^:]*:application-signals:[^:]*:[^:]*:slo\/[0-9A-Za-z][-._0-9A-Za-z ]{0,126}[0-9A-Za-z]$`
   */
  Arn: string;
  /**
   * Epoch time in seconds of the time that this SLO was created
   * @min `946684800`
   */
  CreatedTime: number;
  /**
   * Epoch time in seconds of the time that this SLO was most recently updated
   * @min `946684800`
   */
  LastUpdatedTime: number;
};
/**
 * Type definition for `AWS::ApplicationSignals::ServiceLevelObjective.CalendarInterval`.
 * If the interval for this service level objective is a calendar interval, this structure contains the interval specifications.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationsignals-servicelevelobjective-calendarinterval.html}
 */
export type CalendarInterval = {
  /**
   * Specifies the duration of each calendar interval. For example, if `Duration` is 1 and `DurationUnit` is `MONTH`, each interval is one month, aligned with the calendar.
   * @min `1`
   */
  Duration: number;
  /**
   * Specifies the calendar interval unit.
   */
  DurationUnit: DurationUnit;
  /**
     * Epoch time in seconds you want the first interval to start. Be sure to choose a time that configures the intervals the way that you want. For example, if you want weekly intervals starting on Mondays at 6 a.m., be sure to specify a start time that is a Monday at 6 a.m.
    As soon as one calendar interval ends, another automatically begins.
     * @min `946684800`
     */
  StartTime: number;
};
/**
 * Type definition for `AWS::ApplicationSignals::ServiceLevelObjective.Dimension`.
 * A dimension is a name/value pair that is part of the identity of a metric. Because dimensions are part of the unique identifier for a metric, whenever you add a unique name/value pair to one of your metrics, you are creating a new variation of that metric. For example, many Amazon EC2 metrics publish `InstanceId` as a dimension name, and the actual instance ID as the value for that dimension. You can assign up to 30 dimensions to a metric.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationsignals-servicelevelobjective-dimension.html}
 */
export type Dimension = {
  /**
   * The name of the dimension. Dimension names must contain only ASCII characters, must include at least one non-whitespace character, and cannot start with a colon (:). ASCII control characters are not supported as part of dimension names.
   */
  Name: string;
  /**
   * The value of the dimension. Dimension values must contain only ASCII characters and must include at least one non-whitespace character. ASCII control characters are not supported as part of dimension values
   */
  Value: string;
};
/**
 * Type definition for `AWS::ApplicationSignals::ServiceLevelObjective.DurationUnit`.
 * Specifies the calendar interval unit.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationsignals-servicelevelobjective-durationunit.html}
 */
export type DurationUnit = "DAY" | "MONTH";
/**
 * Type definition for `AWS::ApplicationSignals::ServiceLevelObjective.Goal`.
 * A structure that contains the attributes that determine the goal of the SLO. This includes the time period for evaluation and the attainment threshold.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationsignals-servicelevelobjective-goal.html}
 */
export type Goal = {
  /**
     * The threshold that determines if the goal is being met. An attainment goal is the ratio of good periods that meet the threshold requirements to the total periods within the interval. For example, an attainment goal of 99.9% means that within your interval, you are targeting 99.9% of the periods to be in healthy state.
    If you omit this parameter, 99 is used to represent 99% as the attainment goal.
     */
  AttainmentGoal?: number;
  /**
     * The time period used to evaluate the SLO. It can be either a calendar interval or rolling interval.
    If you omit this parameter, a rolling interval of 7 days is used.
     */
  Interval?: Interval;
  /**
   * The percentage of remaining budget over total budget that you want to get warnings for. If you omit this parameter, the default of 50.0 is used.
   */
  WarningThreshold?: number;
};
/**
 * Type definition for `AWS::ApplicationSignals::ServiceLevelObjective.Interval`.
 * The time period used to evaluate the SLO. It can be either a calendar interval or rolling interval.
If you omit this parameter, a rolling interval of 7 days is used.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationsignals-servicelevelobjective-interval.html}
 */
export type Interval = {
  /**
   * If the interval for this service level objective is a calendar interval, this structure contains the interval specifications.
   */
  CalendarInterval?: CalendarInterval;
  /**
   * If the interval is a calendar interval, this structure contains the interval specifications.
   */
  RollingInterval?: RollingInterval;
};
/**
 * Type definition for `AWS::ApplicationSignals::ServiceLevelObjective.KeyAttributes`.
 * This is a string-to-string map that contains information about the type of object that this SLO is related to.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationsignals-servicelevelobjective-keyattributes.html}
 */
export type KeyAttributes = Record<string, string>;
/**
 * Type definition for `AWS::ApplicationSignals::ServiceLevelObjective.Metric`.
 * This structure defines the metric used for a service level indicator, including the metric name, namespace, and dimensions.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationsignals-servicelevelobjective-metric.html}
 */
export type Metric = {
  /**
   * An array of one or more dimensions to use to define the metric that you want to use.
   */
  Dimensions?: Dimension[];
  /**
   * The name of the metric to use.
   */
  MetricName?: string;
  /**
   * The namespace of the metric.
   */
  Namespace?: string;
};
/**
 * Type definition for `AWS::ApplicationSignals::ServiceLevelObjective.MetricDataQuery`.
 * Use this structure to define a metric or metric math expression that you want to use as for a service level objective.
Each `MetricDataQuery` in the `MetricDataQueries` array specifies either a metric to retrieve, or a metric math expression to be performed on retrieved metrics. A single `MetricDataQueries` array can include as many as 20 `MetricDataQuery` structures in the array. The 20 structures can include as many as 10 structures that contain a `MetricStat` parameter to retrieve a metric, and as many as 10 structures that contain the `Expression` parameter to perform a math expression. Of those Expression structures, exactly one must have true as the value for `ReturnData`. The result of this expression used for the SLO.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationsignals-servicelevelobjective-metricdataquery.html}
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
   * A metric to be used directly for the SLO, or to be used in the math expression that will be used for the SLO. Within one MetricDataQuery, you must specify either Expression or MetricStat but not both.
   */
  MetricStat?: MetricStat;
  /**
   * This option indicates whether to return the timestamps and raw data values of this metric.
   */
  ReturnData?: boolean;
};
/**
 * Type definition for `AWS::ApplicationSignals::ServiceLevelObjective.MetricStat`.
 * A metric to be used directly for the SLO, or to be used in the math expression that will be used for the SLO. Within one MetricDataQuery object, you must specify either Expression or MetricStat but not both.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationsignals-servicelevelobjective-metricstat.html}
 */
export type MetricStat = {
  /**
   * This structure defines the metric used for a service level indicator, including the metric name, namespace, and dimensions.
   */
  Metric: Metric;
  /**
   * The granularity, in seconds, to be used for the metric.
   */
  Period: number;
  /**
   * The statistic to use for comparison to the threshold. It can be any CloudWatch statistic or extended statistic.
   */
  Stat: string;
  /**
   * If you omit Unit then all data that was collected with any unit is returned, along with the corresponding units that were specified when the data was reported to CloudWatch. If you specify a unit, the operation returns only data that was collected with that unit specified. If you specify a unit that does not match the data collected, the results of the operation are null. CloudWatch does not perform unit conversions.
   */
  Unit?: string;
};
/**
 * Type definition for `AWS::ApplicationSignals::ServiceLevelObjective.RollingInterval`.
 * If the interval is a calendar interval, this structure contains the interval specifications.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationsignals-servicelevelobjective-rollinginterval.html}
 */
export type RollingInterval = {
  /**
   * Specifies the duration of each calendar interval. For example, if `Duration` is 1 and `DurationUnit` is `MONTH`, each interval is one month, aligned with the calendar.
   * @min `1`
   */
  Duration: number;
  /**
   * Specifies the calendar interval unit.
   */
  DurationUnit: DurationUnit;
};
/**
 * Type definition for `AWS::ApplicationSignals::ServiceLevelObjective.Sli`.
 * This structure contains information about the performance metric that an SLO monitors.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationsignals-servicelevelobjective-sli.html}
 */
export type Sli = {
  /**
   * The arithmetic operation used when comparing the specified metric to the threshold.
   */
  ComparisonOperator:
    | "GreaterThanOrEqualTo"
    | "LessThanOrEqualTo"
    | "LessThan"
    | "GreaterThan";
  /**
   * The value that the SLI metric is compared to.
   */
  MetricThreshold: number;
  /**
   * A structure that contains information about the metric that the SLO monitors.
   */
  SliMetric: SliMetric;
};
/**
 * Type definition for `AWS::ApplicationSignals::ServiceLevelObjective.SliMetric`.
 * A structure that contains information about the metric that the SLO monitors.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationsignals-servicelevelobjective-slimetric.html}
 */
export type SliMetric = {
  /**
   * This is a string-to-string map that contains information about the type of object that this SLO is related to.
   */
  KeyAttributes?: KeyAttributes;
  /**
   * If this SLO monitors a CloudWatch metric or the result of a CloudWatch metric math expression, this structure includes the information about that metric or expression.
   */
  MetricDataQueries?: MetricDataQuery[];
  /**
   * If the SLO monitors either the LATENCY or AVAILABILITY metric that Application Signals collects, this field displays which of those metrics is used.
   */
  MetricType?: "LATENCY" | "AVAILABILITY";
  /**
   * If the SLO monitors a specific operation of the service, this field displays that operation name.
   * @minLength `1`
   * @maxLength `255`
   */
  OperationName?: string;
  /**
   * The number of seconds to use as the period for SLO evaluation. Your application's performance is compared to the SLI during each period. For each period, the application is determined to have either achieved or not achieved the necessary performance.
   * @min `60`
   * @max `900`
   */
  PeriodSeconds?: number;
  /**
   * The statistic to use for comparison to the threshold. It can be any CloudWatch statistic or extended statistic
   * @minLength `1`
   * @maxLength `20`
   */
  Statistic?: string;
};
/**
 * Type definition for `AWS::ApplicationSignals::ServiceLevelObjective.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationsignals-servicelevelobjective-tag.html}
 */
export type Tag = {
  /**
   * A string that you can use to assign a value. The combination of tag keys and values can help you organize and categorize your resources.
   * @minLength `1`
   * @maxLength `128`
   * @pattern `^(?!aws:)[a-zA-Z+-=._:/]+$`
   */
  Key: string;
  /**
   * The value for the specified tag key.
   * @minLength `0`
   * @maxLength `256`
   */
  Value: string;
};
/**
 * Resource Type definition for AWS::ApplicationSignals::ServiceLevelObjective
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-applicationsignals-servicelevelobjective.html}
 */
export class ApplicationSignalsServiceLevelObjective extends $Resource<
  "AWS::ApplicationSignals::ServiceLevelObjective",
  ApplicationSignalsServiceLevelObjectiveProperties,
  ApplicationSignalsServiceLevelObjectiveAttributes
> {
  public static readonly Type =
    "AWS::ApplicationSignals::ServiceLevelObjective";
  constructor(
    logicalId: string,
    properties: ApplicationSignalsServiceLevelObjectiveProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      ApplicationSignalsServiceLevelObjective.Type,
      properties,
      options,
    );
  }
}
