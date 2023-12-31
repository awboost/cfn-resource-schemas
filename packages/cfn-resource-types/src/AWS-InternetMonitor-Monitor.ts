import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::InternetMonitor::Monitor`.
 * Represents a monitor, which defines the monitoring boundaries for measurements that Internet Monitor publishes information about for an application
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-internetmonitor-monitor.html}
 */
export type InternetMonitorMonitorProperties = {
  HealthEventsConfig?: HealthEventsConfig;
  InternetMeasurementsLogDelivery?: InternetMeasurementsLogDelivery;
  /**
   * @min `1`
   * @max `500000`
   */
  MaxCityNetworksToMonitor?: number;
  /**
   * @minLength `1`
   * @maxLength `255`
   * @pattern `^[a-zA-Z0-9_.-]+$`
   */
  MonitorName: string;
  Resources?: string[];
  ResourcesToAdd?: string[];
  ResourcesToRemove?: string[];
  Status?: MonitorConfigState;
  Tags?: Tag[];
  /**
   * @min `1`
   * @max `100`
   */
  TrafficPercentageToMonitor?: number;
};
/**
 * Attribute type definition for `AWS::InternetMonitor::Monitor`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-internetmonitor-monitor.html#aws-resource-internetmonitor-monitor-return-values}
 */
export type InternetMonitorMonitorAttributes = {
  /**
   * The date value in ISO 8601 format. The timezone is always UTC. (YYYY-MM-DDThh:mm:ssZ)
   * @pattern `^([0-2]\d{3})-(0[0-9]|1[0-2])-([0-2]\d|3[01])T([01]\d|2[0-4]):([0-5]\d):([0-6]\d)((\.\d{3})?)Z$`
   */
  CreatedAt: string;
  /**
   * The date value in ISO 8601 format. The timezone is always UTC. (YYYY-MM-DDThh:mm:ssZ)
   * @pattern `^([0-2]\d{3})-(0[0-9]|1[0-2])-([0-2]\d|3[01])T([01]\d|2[0-4]):([0-5]\d):([0-6]\d)((\.\d{3})?)Z$`
   */
  ModifiedAt: string;
  /**
   * @minLength `20`
   * @maxLength `512`
   * @pattern `^arn:.*`
   */
  MonitorArn: string;
  ProcessingStatus: MonitorProcessingStatusCode;
  ProcessingStatusInfo: string;
};
/**
 * Type definition for `AWS::InternetMonitor::Monitor.HealthEventsConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-internetmonitor-monitor-healtheventsconfig.html}
 */
export type HealthEventsConfig = {
  AvailabilityLocalHealthEventsConfig?: LocalHealthEventsConfig;
  /**
   * @min `0`
   * @max `100`
   */
  AvailabilityScoreThreshold?: number;
  PerformanceLocalHealthEventsConfig?: LocalHealthEventsConfig;
  /**
   * @min `0`
   * @max `100`
   */
  PerformanceScoreThreshold?: number;
};
/**
 * Type definition for `AWS::InternetMonitor::Monitor.InternetMeasurementsLogDelivery`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-internetmonitor-monitor-internetmeasurementslogdelivery.html}
 */
export type InternetMeasurementsLogDelivery = {
  S3Config?: S3Config;
};
/**
 * Type definition for `AWS::InternetMonitor::Monitor.LocalHealthEventsConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-internetmonitor-monitor-localhealtheventsconfig.html}
 */
export type LocalHealthEventsConfig = {
  /**
   * @min `0`
   * @max `100`
   */
  HealthScoreThreshold?: number;
  /**
   * @min `0`
   * @max `100`
   */
  MinTrafficImpact?: number;
  Status?: "ENABLED" | "DISABLED";
};
/**
 * Type definition for `AWS::InternetMonitor::Monitor.MonitorConfigState`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-internetmonitor-monitor-monitorconfigstate.html}
 */
export type MonitorConfigState = "PENDING" | "ACTIVE" | "INACTIVE" | "ERROR";
/**
 * Type definition for `AWS::InternetMonitor::Monitor.MonitorProcessingStatusCode`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-internetmonitor-monitor-monitorprocessingstatuscode.html}
 */
export type MonitorProcessingStatusCode =
  | "OK"
  | "INACTIVE"
  | "COLLECTING_DATA"
  | "INSUFFICIENT_DATA"
  | "FAULT_SERVICE"
  | "FAULT_ACCESS_CLOUDWATCH";
/**
 * Type definition for `AWS::InternetMonitor::Monitor.S3Config`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-internetmonitor-monitor-s3config.html}
 */
export type S3Config = {
  /**
   * @minLength `3`
   */
  BucketName?: string;
  BucketPrefix?: string;
  LogDeliveryStatus?: "ENABLED" | "DISABLED";
};
/**
 * Type definition for `AWS::InternetMonitor::Monitor.Tag`.
 * The metadata that you apply to the cluster to help you categorize and organize them. Each tag consists of a key and an optional value, both of which you define.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-internetmonitor-monitor-tag.html}
 */
export type Tag = {
  Key?: string;
  Value?: string;
};
/**
 * Resource type definition for `AWS::InternetMonitor::Monitor`.
 * Represents a monitor, which defines the monitoring boundaries for measurements that Internet Monitor publishes information about for an application
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-internetmonitor-monitor.html}
 */
export class InternetMonitorMonitor extends $Resource<
  "AWS::InternetMonitor::Monitor",
  InternetMonitorMonitorProperties,
  InternetMonitorMonitorAttributes
> {
  public static readonly Type = "AWS::InternetMonitor::Monitor";
  constructor(
    logicalId: string,
    properties: InternetMonitorMonitorProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, InternetMonitorMonitor.Type, properties, options);
  }
}
