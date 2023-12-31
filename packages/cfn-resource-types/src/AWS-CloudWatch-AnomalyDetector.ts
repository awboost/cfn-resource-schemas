import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource Type definition for AWS::CloudWatch::AnomalyDetector
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudwatch-anomalydetector.html}
 */
export type CloudWatchAnomalyDetectorProperties = {
  Configuration?: Configuration;
  Dimensions?: Dimension[];
  MetricMathAnomalyDetector?: MetricMathAnomalyDetector;
  MetricName?: string;
  Namespace?: string;
  SingleMetricAnomalyDetector?: SingleMetricAnomalyDetector;
  Stat?: string;
};
/**
 * Attribute type definition for `AWS::CloudWatch::AnomalyDetector`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudwatch-anomalydetector.html#aws-resource-cloudwatch-anomalydetector-return-values}
 */
export type CloudWatchAnomalyDetectorAttributes = {
  Id: string;
};
/**
 * Type definition for `AWS::CloudWatch::AnomalyDetector.Configuration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudwatch-anomalydetector-configuration.html}
 */
export type Configuration = {
  ExcludedTimeRanges?: Range[];
  MetricTimeZone?: string;
};
/**
 * Type definition for `AWS::CloudWatch::AnomalyDetector.Dimension`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudwatch-anomalydetector-dimension.html}
 */
export type Dimension = {
  Name: string;
  Value: string;
};
/**
 * Type definition for `AWS::CloudWatch::AnomalyDetector.Metric`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudwatch-anomalydetector-metric.html}
 */
export type Metric = {
  Dimensions?: Dimension[];
  MetricName: string;
  Namespace: string;
};
/**
 * Type definition for `AWS::CloudWatch::AnomalyDetector.MetricDataQuery`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudwatch-anomalydetector-metricdataquery.html}
 */
export type MetricDataQuery = {
  AccountId?: string;
  Expression?: string;
  Id: string;
  Label?: string;
  MetricStat?: MetricStat;
  Period?: number;
  ReturnData?: boolean;
};
/**
 * Type definition for `AWS::CloudWatch::AnomalyDetector.MetricMathAnomalyDetector`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudwatch-anomalydetector-metricmathanomalydetector.html}
 */
export type MetricMathAnomalyDetector = {
  MetricDataQueries?: MetricDataQuery[];
};
/**
 * Type definition for `AWS::CloudWatch::AnomalyDetector.MetricStat`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudwatch-anomalydetector-metricstat.html}
 */
export type MetricStat = {
  Metric: Metric;
  Period: number;
  Stat: string;
  Unit?: string;
};
/**
 * Type definition for `AWS::CloudWatch::AnomalyDetector.Range`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudwatch-anomalydetector-range.html}
 */
export type Range = {
  EndTime: string;
  StartTime: string;
};
/**
 * Type definition for `AWS::CloudWatch::AnomalyDetector.SingleMetricAnomalyDetector`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudwatch-anomalydetector-singlemetricanomalydetector.html}
 */
export type SingleMetricAnomalyDetector = {
  Dimensions?: Dimension[];
  MetricName?: string;
  Namespace?: string;
  Stat?: string;
};
/**
 * Resource Type definition for AWS::CloudWatch::AnomalyDetector
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudwatch-anomalydetector.html}
 */
export class CloudWatchAnomalyDetector extends $Resource<
  "AWS::CloudWatch::AnomalyDetector",
  CloudWatchAnomalyDetectorProperties,
  CloudWatchAnomalyDetectorAttributes
> {
  public static readonly Type = "AWS::CloudWatch::AnomalyDetector";
  public static readonly AttributeNames = ["Id" as const];
  constructor(
    logicalId: string,
    properties: CloudWatchAnomalyDetectorProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      CloudWatchAnomalyDetector.Type,
      properties,
      CloudWatchAnomalyDetector.AttributeNames,
      options,
    );
  }
}
