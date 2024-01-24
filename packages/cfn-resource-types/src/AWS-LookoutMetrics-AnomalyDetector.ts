import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::LookoutMetrics::AnomalyDetector`.
 * An Amazon Lookout for Metrics Detector
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lookoutmetrics-anomalydetector.html}
 */
export type LookoutMetricsAnomalyDetectorProperties = {
  /**
   * Configuration options for the AnomalyDetector
   */
  AnomalyDetectorConfig: AnomalyDetectorConfig;
  /**
   * A description for the AnomalyDetector.
   * @maxLength `256`
   * @pattern `.*\S.*`
   */
  AnomalyDetectorDescription?: string;
  /**
   * Name for the Amazon Lookout for Metrics Anomaly Detector
   * @minLength `1`
   * @maxLength `63`
   * @pattern `^[a-zA-Z0-9][a-zA-Z0-9\-_]*`
   */
  AnomalyDetectorName?: string;
  /**
   * KMS key used to encrypt the AnomalyDetector data
   * @minLength `20`
   * @maxLength `2048`
   * @pattern `arn:aws.*:kms:.*:[0-9]{12}:key/.*`
   */
  KmsKeyArn?: string;
  /**
   * List of metric sets for anomaly detection
   * @minLength `1`
   * @maxLength `1`
   */
  MetricSetList: MetricSet[];
};
/**
 * Attribute type definition for `AWS::LookoutMetrics::AnomalyDetector`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lookoutmetrics-anomalydetector.html#aws-resource-lookoutmetrics-anomalydetector-return-values}
 */
export type LookoutMetricsAnomalyDetectorAttributes = {
  /**
   * @maxLength `256`
   * @pattern `arn:([a-z\d-]+):.*:.*:.*:.+`
   */
  Arn: string;
};
/**
 * Type definition for `AWS::LookoutMetrics::AnomalyDetector.AnomalyDetectorConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lookoutmetrics-anomalydetector-anomalydetectorconfig.html}
 */
export type AnomalyDetectorConfig = {
  /**
   * Frequency of anomaly detection
   */
  AnomalyDetectorFrequency: AnomalyDetectorFrequency;
};
/**
 * Type definition for `AWS::LookoutMetrics::AnomalyDetector.AnomalyDetectorFrequency`.
 * Frequency of anomaly detection
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lookoutmetrics-anomalydetector-anomalydetectorfrequency.html}
 */
export type AnomalyDetectorFrequency = "PT5M" | "PT10M" | "PT1H" | "P1D";
/**
 * Type definition for `AWS::LookoutMetrics::AnomalyDetector.AppFlowConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lookoutmetrics-anomalydetector-appflowconfig.html}
 */
export type AppFlowConfig = {
  /**
   * @maxLength `256`
   * @pattern `[a-zA-Z0-9][\w!@#.-]+`
   */
  FlowName: string;
  /**
   * @maxLength `256`
   * @pattern `arn:([a-z\d-]+):.*:.*:.*:.+`
   */
  RoleArn: string;
};
/**
 * Type definition for `AWS::LookoutMetrics::AnomalyDetector.CloudwatchConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lookoutmetrics-anomalydetector-cloudwatchconfig.html}
 */
export type CloudwatchConfig = {
  /**
   * @maxLength `256`
   * @pattern `arn:([a-z\d-]+):.*:.*:.*:.+`
   */
  RoleArn: string;
};
/**
 * Type definition for `AWS::LookoutMetrics::AnomalyDetector.CsvFormatDescriptor`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lookoutmetrics-anomalydetector-csvformatdescriptor.html}
 */
export type CsvFormatDescriptor = {
  /**
   * @maxLength `63`
   * @pattern `^[a-zA-Z0-9][a-zA-Z0-9\-_]*`
   */
  Charset?: string;
  ContainsHeader?: boolean;
  /**
   * @maxLength `1`
   * @pattern `[^\r\n]`
   */
  Delimiter?: string;
  FileCompression?: "NONE" | "GZIP";
  HeaderList?: string[];
  /**
   * @maxLength `1`
   * @pattern `[^\r\n]|^$`
   */
  QuoteSymbol?: string;
};
/**
 * Type definition for `AWS::LookoutMetrics::AnomalyDetector.FileFormatDescriptor`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lookoutmetrics-anomalydetector-fileformatdescriptor.html}
 */
export type FileFormatDescriptor = {
  CsvFormatDescriptor?: CsvFormatDescriptor;
  JsonFormatDescriptor?: JsonFormatDescriptor;
};
/**
 * Type definition for `AWS::LookoutMetrics::AnomalyDetector.JsonFormatDescriptor`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lookoutmetrics-anomalydetector-jsonformatdescriptor.html}
 */
export type JsonFormatDescriptor = {
  /**
   * @maxLength `63`
   * @pattern `^[a-zA-Z0-9][a-zA-Z0-9\-_]*`
   */
  Charset?: string;
  FileCompression?: "NONE" | "GZIP";
};
/**
 * Type definition for `AWS::LookoutMetrics::AnomalyDetector.Metric`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lookoutmetrics-anomalydetector-metric.html}
 */
export type Metric = {
  /**
   * Operator used to aggregate metric values
   */
  AggregationFunction: "AVG" | "SUM";
  /**
   * Name of a column in the data.
   * @minLength `1`
   * @maxLength `63`
   * @pattern `^[a-zA-Z0-9][a-zA-Z0-9\-_]*`
   */
  MetricName: string;
  /**
   * @minLength `1`
   * @maxLength `255`
   * @pattern `[^:].*`
   */
  Namespace?: string;
};
/**
 * Type definition for `AWS::LookoutMetrics::AnomalyDetector.MetricSet`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lookoutmetrics-anomalydetector-metricset.html}
 */
export type MetricSet = {
  /**
   * Dimensions for this MetricSet.
   * @minLength `0`
   */
  DimensionList?: string[];
  /**
   * Metrics captured by this MetricSet.
   * @minLength `1`
   */
  MetricList: Metric[];
  /**
   * A description for the MetricSet.
   * @maxLength `256`
   * @pattern `.*\S.*`
   */
  MetricSetDescription?: string;
  /**
   * A frequency period to aggregate the data
   */
  MetricSetFrequency?: "PT5M" | "PT10M" | "PT1H" | "P1D";
  /**
   * The name of the MetricSet.
   * @minLength `1`
   * @maxLength `63`
   * @pattern `^[a-zA-Z0-9][a-zA-Z0-9\-_]*`
   */
  MetricSetName: string;
  MetricSource: MetricSource;
  /**
   * Offset, in seconds, between the frequency interval and the time at which the metrics are available.
   * @min `0`
   * @max `432000`
   */
  Offset?: number;
  TimestampColumn?: TimestampColumn;
  /**
   * @maxLength `60`
   * @pattern `.*\S.*`
   */
  Timezone?: string;
};
/**
 * Type definition for `AWS::LookoutMetrics::AnomalyDetector.MetricSource`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lookoutmetrics-anomalydetector-metricsource.html}
 */
export type MetricSource = {
  AppFlowConfig?: AppFlowConfig;
  CloudwatchConfig?: CloudwatchConfig;
  RDSSourceConfig?: RDSSourceConfig;
  RedshiftSourceConfig?: RedshiftSourceConfig;
  S3SourceConfig?: S3SourceConfig;
};
/**
 * Type definition for `AWS::LookoutMetrics::AnomalyDetector.RDSSourceConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lookoutmetrics-anomalydetector-rdssourceconfig.html}
 */
export type RDSSourceConfig = {
  /**
   * @minLength `1`
   * @maxLength `63`
   * @pattern `^[a-zA-Z](?!.*--)(?!.*-$)[0-9a-zA-Z\-]*$`
   */
  DBInstanceIdentifier: string;
  /**
   * @minLength `1`
   * @maxLength `253`
   * @pattern `.*\S.*`
   */
  DatabaseHost: string;
  /**
   * @minLength `1`
   * @maxLength `64`
   * @pattern `[a-zA-Z0-9_]+`
   */
  DatabaseName: string;
  /**
   * @min `1`
   * @max `65535`
   */
  DatabasePort: number;
  /**
   * @maxLength `256`
   * @pattern `arn:([a-z\d-]+):.*:.*:.*:.+`
   */
  RoleArn: string;
  /**
   * @maxLength `256`
   * @pattern `arn:([a-z\d-]+):.*:.*:secret:AmazonLookoutMetrics-.+`
   */
  SecretManagerArn: string;
  /**
   * @minLength `1`
   * @maxLength `100`
   * @pattern `^[a-zA-Z][a-zA-Z0-9_]*$`
   */
  TableName: string;
  VpcConfiguration: VpcConfiguration;
};
/**
 * Type definition for `AWS::LookoutMetrics::AnomalyDetector.RedshiftSourceConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lookoutmetrics-anomalydetector-redshiftsourceconfig.html}
 */
export type RedshiftSourceConfig = {
  /**
   * @minLength `1`
   * @maxLength `63`
   * @pattern `^[a-z](?!.*--)(?!.*-$)[0-9a-z\-]*$`
   */
  ClusterIdentifier: string;
  /**
   * @minLength `1`
   * @maxLength `253`
   * @pattern `.*\S.*`
   */
  DatabaseHost: string;
  /**
   * @minLength `1`
   * @maxLength `100`
   * @pattern `[a-z0-9]+`
   */
  DatabaseName: string;
  /**
   * @min `1`
   * @max `65535`
   */
  DatabasePort: number;
  /**
   * @maxLength `256`
   * @pattern `arn:([a-z\d-]+):.*:.*:.*:.+`
   */
  RoleArn: string;
  /**
   * @maxLength `256`
   * @pattern `arn:([a-z\d-]+):.*:.*:secret:AmazonLookoutMetrics-.+`
   */
  SecretManagerArn: string;
  /**
   * @minLength `1`
   * @maxLength `100`
   * @pattern `^[a-zA-Z][a-zA-Z0-9_]*$`
   */
  TableName: string;
  VpcConfiguration: VpcConfiguration;
};
/**
 * Type definition for `AWS::LookoutMetrics::AnomalyDetector.S3SourceConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lookoutmetrics-anomalydetector-s3sourceconfig.html}
 */
export type S3SourceConfig = {
  FileFormatDescriptor: FileFormatDescriptor;
  /**
   * @minLength `1`
   * @maxLength `1`
   */
  HistoricalDataPathList?: string[];
  /**
   * @maxLength `256`
   * @pattern `arn:([a-z\d-]+):.*:.*:.*:.+`
   */
  RoleArn: string;
  /**
   * @minLength `1`
   * @maxLength `1`
   */
  TemplatedPathList?: string[];
};
/**
 * Type definition for `AWS::LookoutMetrics::AnomalyDetector.TimestampColumn`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lookoutmetrics-anomalydetector-timestampcolumn.html}
 */
export type TimestampColumn = {
  /**
   * A timestamp format for the timestamps in the dataset
   * @maxLength `63`
   * @pattern `.*\S.*`
   */
  ColumnFormat?: string;
  /**
   * Name of a column in the data.
   * @minLength `1`
   * @maxLength `63`
   * @pattern `^[a-zA-Z0-9][a-zA-Z0-9\-_]*`
   */
  ColumnName?: string;
};
/**
 * Type definition for `AWS::LookoutMetrics::AnomalyDetector.VpcConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lookoutmetrics-anomalydetector-vpcconfiguration.html}
 */
export type VpcConfiguration = {
  SecurityGroupIdList: string[];
  SubnetIdList: string[];
};
/**
 * Resource type definition for `AWS::LookoutMetrics::AnomalyDetector`.
 * An Amazon Lookout for Metrics Detector
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lookoutmetrics-anomalydetector.html}
 */
export class LookoutMetricsAnomalyDetector extends $Resource<
  "AWS::LookoutMetrics::AnomalyDetector",
  LookoutMetricsAnomalyDetectorProperties,
  LookoutMetricsAnomalyDetectorAttributes
> {
  public static readonly Type = "AWS::LookoutMetrics::AnomalyDetector";
  constructor(
    logicalId: string,
    properties: LookoutMetricsAnomalyDetectorProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, LookoutMetricsAnomalyDetector.Type, properties, options);
  }
}
