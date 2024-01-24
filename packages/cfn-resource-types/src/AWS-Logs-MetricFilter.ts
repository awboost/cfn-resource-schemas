import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::Logs::MetricFilter`.
 * Specifies a metric filter that describes how CloudWatch Logs extracts information from logs and transforms it into Amazon CloudWatch metrics.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-metricfilter.html}
 */
export type LogsMetricFilterProperties = {
  /**
   * A name for the metric filter.
   * @minLength `1`
   * @maxLength `512`
   * @pattern `^[^:*]{1,512}`
   */
  FilterName?: string;
  /**
   * Pattern that Logs follows to interpret each entry in a log.
   * @maxLength `1024`
   */
  FilterPattern: string;
  /**
   * Existing log group that you want to associate with this filter.
   * @minLength `1`
   * @maxLength `512`
   * @pattern `^[.\-_/#A-Za-z0-9]{1,512}`
   */
  LogGroupName: string;
  /**
   * A collection of information that defines how metric data gets emitted.
   * @minLength `1`
   * @maxLength `1`
   */
  MetricTransformations: MetricTransformation[];
};
/**
 * Type definition for `AWS::Logs::MetricFilter.Dimension`.
 * the key-value pairs that further define a metric.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-logs-metricfilter-dimension.html}
 */
export type Dimension = {
  /**
   * The key of the dimension. Maximum length of 255.
   * @minLength `1`
   * @maxLength `255`
   */
  Key: string;
  /**
   * The value of the dimension. Maximum length of 255.
   * @minLength `1`
   * @maxLength `255`
   */
  Value: string;
};
/**
 * Type definition for `AWS::Logs::MetricFilter.MetricTransformation`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-logs-metricfilter-metrictransformation.html}
 */
export type MetricTransformation = {
  /**
   * The value to emit when a filter pattern does not match a log event. This value can be null.
   */
  DefaultValue?: number;
  /**
   * Dimensions are the key-value pairs that further define a metric
   * @minLength `1`
   * @maxLength `3`
   */
  Dimensions?: Dimension[];
  /**
   * The name of the CloudWatch metric. Metric name must be in ASCII format.
   * @minLength `1`
   * @maxLength `255`
   * @pattern `^((?![:*$])[\x00-\x7F]){1,255}`
   */
  MetricName: string;
  /**
   * The namespace of the CloudWatch metric.
   * @minLength `1`
   * @maxLength `256`
   * @pattern `^[0-9a-zA-Z\.\-_\/#]{1,256}`
   */
  MetricNamespace: string;
  /**
   * The value to publish to the CloudWatch metric when a filter pattern matches a log event.
   * @minLength `1`
   * @maxLength `100`
   * @pattern `.{1,100}`
   */
  MetricValue: string;
  /**
   * The unit to assign to the metric. If you omit this, the unit is set as None.
   */
  Unit?:
    | "Seconds"
    | "Microseconds"
    | "Milliseconds"
    | "Bytes"
    | "Kilobytes"
    | "Megabytes"
    | "Gigabytes"
    | "Terabytes"
    | "Bits"
    | "Kilobits"
    | "Megabits"
    | "Gigabits"
    | "Terabits"
    | "Percent"
    | "Count"
    | "Bytes/Second"
    | "Kilobytes/Second"
    | "Megabytes/Second"
    | "Gigabytes/Second"
    | "Terabytes/Second"
    | "Bits/Second"
    | "Kilobits/Second"
    | "Megabits/Second"
    | "Gigabits/Second"
    | "Terabits/Second"
    | "Count/Second"
    | "None";
};
/**
 * Resource type definition for `AWS::Logs::MetricFilter`.
 * Specifies a metric filter that describes how CloudWatch Logs extracts information from logs and transforms it into Amazon CloudWatch metrics.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-metricfilter.html}
 */
export class LogsMetricFilter extends $Resource<
  "AWS::Logs::MetricFilter",
  LogsMetricFilterProperties,
  Record<string, never>
> {
  public static readonly Type = "AWS::Logs::MetricFilter";
  constructor(
    logicalId: string,
    properties: LogsMetricFilterProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, LogsMetricFilter.Type, properties, options);
  }
}
