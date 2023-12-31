import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource type definition for `AWS::CloudWatch::MetricStream`.
 * Resource Type definition for Metric Stream
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudwatch-metricstream.html}
 */
export type CloudWatchMetricStreamProperties = {
  /**
   * Define which metrics will be not streamed. Metrics matched by multiple instances of MetricStreamFilter are joined with an OR operation by default. If both IncludeFilters and ExcludeFilters are omitted, all metrics in the account will be streamed. IncludeFilters and ExcludeFilters are mutually exclusive. Default to null.
   * @maxLength `1000`
   */
  ExcludeFilters?: MetricStreamFilter[];
  /**
   * The ARN of the Kinesis Firehose where to stream the data.
   * @minLength `20`
   * @maxLength `2048`
   */
  FirehoseArn: string;
  /**
   * Define which metrics will be streamed. Metrics matched by multiple instances of MetricStreamFilter are joined with an OR operation by default. If both IncludeFilters and ExcludeFilters are omitted, all metrics in the account will be streamed. IncludeFilters and ExcludeFilters are mutually exclusive. Default to null.
   * @maxLength `1000`
   */
  IncludeFilters?: MetricStreamFilter[];
  /**
   * If you are creating a metric stream in a monitoring account, specify true to include metrics from source accounts that are linked to this monitoring account, in the metric stream. The default is false.
   */
  IncludeLinkedAccountsMetrics?: boolean;
  /**
   * Name of the metric stream.
   * @minLength `1`
   * @maxLength `255`
   */
  Name?: string;
  /**
   * The output format of the data streamed to the Kinesis Firehose.
   * @minLength `1`
   * @maxLength `255`
   */
  OutputFormat: string;
  /**
   * The ARN of the role that provides access to the Kinesis Firehose.
   * @minLength `20`
   * @maxLength `2048`
   */
  RoleArn: string;
  /**
   * By default, a metric stream always sends the MAX, MIN, SUM, and SAMPLECOUNT statistics for each metric that is streamed. You can use this parameter to have the metric stream also send additional statistics in the stream. This array can have up to 100 members.
   * @maxLength `100`
   */
  StatisticsConfigurations?: MetricStreamStatisticsConfiguration[];
  /**
   * A set of tags to assign to the delivery stream.
   * @maxLength `50`
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::CloudWatch::MetricStream`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudwatch-metricstream.html#aws-resource-cloudwatch-metricstream-return-values}
 */
export type CloudWatchMetricStreamAttributes = {
  /**
   * Amazon Resource Name of the metric stream.
   * @minLength `20`
   * @maxLength `2048`
   */
  Arn: string;
  /**
   * The date of creation of the metric stream.
   */
  CreationDate: string;
  /**
   * The date of the last update of the metric stream.
   */
  LastUpdateDate: string;
  /**
   * Displays the state of the Metric Stream.
   * @minLength `1`
   * @maxLength `255`
   */
  State: string;
};
/**
 * Type definition for `AWS::CloudWatch::MetricStream.MetricStreamFilter`.
 * This structure defines the metrics that will be streamed.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudwatch-metricstream-metricstreamfilter.html}
 */
export type MetricStreamFilter = {
  /**
   * Only metrics with MetricNames matching these values will be streamed. Must be set together with Namespace.
   * @maxLength `999`
   */
  MetricNames?: string[];
  /**
   * Only metrics with Namespace matching this value will be streamed.
   * @minLength `1`
   * @maxLength `255`
   */
  Namespace: string;
};
/**
 * Type definition for `AWS::CloudWatch::MetricStream.MetricStreamStatisticsConfiguration`.
 * This structure specifies a list of additional statistics to stream, and the metrics to stream those additional statistics for. All metrics that match the combination of metric name and namespace will be streamed with the extended statistics, no matter their dimensions.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudwatch-metricstream-metricstreamstatisticsconfiguration.html}
 */
export type MetricStreamStatisticsConfiguration = {
  /**
   * The additional statistics to stream for the metrics listed in IncludeMetrics.
   * @maxLength `20`
   */
  AdditionalStatistics: string[];
  /**
   * An array that defines the metrics that are to have additional statistics streamed.
   * @maxLength `100`
   */
  IncludeMetrics: MetricStreamStatisticsMetric[];
};
/**
 * Type definition for `AWS::CloudWatch::MetricStream.MetricStreamStatisticsMetric`.
 * A structure that specifies the metric name and namespace for one metric that is going to have additional statistics included in the stream.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudwatch-metricstream-metricstreamstatisticsmetric.html}
 */
export type MetricStreamStatisticsMetric = {
  /**
   * The name of the metric.
   * @minLength `1`
   * @maxLength `255`
   */
  MetricName: string;
  /**
   * The namespace of the metric.
   * @minLength `1`
   * @maxLength `255`
   */
  Namespace: string;
};
/**
 * Type definition for `AWS::CloudWatch::MetricStream.Tag`.
 * Metadata that you can assign to a Metric Stream, consisting of a key-value pair.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudwatch-metricstream-tag.html}
 */
export type Tag = {
  /**
   * A unique identifier for the tag.
   * @minLength `1`
   * @maxLength `128`
   */
  Key: string;
  /**
   * String which you can use to describe or define the tag.
   * @minLength `1`
   * @maxLength `256`
   */
  Value: string;
};
/**
 * Resource type definition for `AWS::CloudWatch::MetricStream`.
 * Resource Type definition for Metric Stream
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudwatch-metricstream.html}
 */
export class CloudWatchMetricStream extends $Resource<
  "AWS::CloudWatch::MetricStream",
  CloudWatchMetricStreamProperties,
  CloudWatchMetricStreamAttributes
> {
  public static readonly Type = "AWS::CloudWatch::MetricStream";
  public static readonly AttributeNames = [
    "Arn" as const,
    "CreationDate" as const,
    "LastUpdateDate" as const,
    "State" as const,
  ];
  constructor(
    logicalId: string,
    properties: CloudWatchMetricStreamProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      CloudWatchMetricStream.Type,
      properties,
      CloudWatchMetricStream.AttributeNames,
      options,
    );
  }
}
