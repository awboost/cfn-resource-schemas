import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::IoT::SecurityProfile`.
 * A security profile defines a set of expected behaviors for devices in your account.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-securityprofile.html}
 */
export type IoTSecurityProfileProperties = {
  /**
   * A list of metrics whose data is retained (stored). By default, data is retained for any metric used in the profile's behaviors, but it is also retained for any metric specified here.
   */
  AdditionalMetricsToRetainV2?: MetricToRetain[];
  /**
   * Specifies the destinations to which alerts are sent.
   */
  AlertTargets?: Record<string, AlertTarget>;
  /**
   * Specifies the behaviors that, when violated by a device (thing), cause an alert.
   */
  Behaviors?: Behavior[];
  /**
   * A structure containing the mqtt topic for metrics export.
   */
  MetricsExportConfig?: {
    /**
     * The topic for metrics export.
     * @minLength `1`
     * @maxLength `512`
     */
    MqttTopic: string;
    /**
     * The ARN of the role that grants permission to publish to mqtt topic.
     * @minLength `20`
     * @maxLength `2048`
     */
    RoleArn: string;
  };
  /**
   * A description of the security profile.
   * @maxLength `1000`
   */
  SecurityProfileDescription?: string;
  /**
   * A unique identifier for the security profile.
   * @minLength `1`
   * @maxLength `128`
   * @pattern `[a-zA-Z0-9:_-]+`
   */
  SecurityProfileName?: string;
  /**
   * Metadata that can be used to manage the security profile.
   * @maxLength `50`
   */
  Tags?: Tag[];
  /**
   * A set of target ARNs that the security profile is attached to.
   */
  TargetArns?: string[];
};
/**
 * Attribute type definition for `AWS::IoT::SecurityProfile`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-securityprofile.html#aws-resource-iot-securityprofile-return-values}
 */
export type IoTSecurityProfileAttributes = {
  /**
   * The ARN (Amazon resource name) of the created security profile.
   */
  SecurityProfileArn: string;
};
/**
 * Type definition for `AWS::IoT::SecurityProfile.AlertTarget`.
 * A structure containing the alert target ARN and the role ARN.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-securityprofile-alerttarget.html}
 */
export type AlertTarget = {
  /**
   * The ARN of the notification target to which alerts are sent.
   * @maxLength `2048`
   */
  AlertTargetArn: string;
  /**
   * The ARN of the role that grants permission to send alerts to the notification target.
   * @minLength `20`
   * @maxLength `2048`
   */
  RoleArn: string;
};
/**
 * Type definition for `AWS::IoT::SecurityProfile.Behavior`.
 * A security profile behavior.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-securityprofile-behavior.html}
 */
export type Behavior = {
  /**
   * The criteria by which the behavior is determined to be normal.
   */
  Criteria?: BehaviorCriteria;
  /**
   * Flag to enable/disable metrics export for metric to be retained.
   */
  ExportMetric?: boolean;
  /**
   * What is measured by the behavior.
   * @minLength `1`
   * @maxLength `128`
   * @pattern `[a-zA-Z0-9:_-]+`
   */
  Metric?: string;
  /**
   * The dimension of a metric.
   */
  MetricDimension?: MetricDimension;
  /**
   * The name for the behavior.
   * @minLength `1`
   * @maxLength `128`
   * @pattern `[a-zA-Z0-9:_-]+`
   */
  Name: string;
  /**
   * Manage Detect alarm SNS notifications by setting behavior notification to on or suppressed. Detect will continue to performing device behavior evaluations. However, suppressed alarms wouldn't be forwarded for SNS notification.
   */
  SuppressAlerts?: boolean;
};
/**
 * Type definition for `AWS::IoT::SecurityProfile.BehaviorCriteria`.
 * The criteria by which the behavior is determined to be normal.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-securityprofile-behaviorcriteria.html}
 */
export type BehaviorCriteria = {
  /**
   * The operator that relates the thing measured (metric) to the criteria (containing a value or statisticalThreshold).
   */
  ComparisonOperator?:
    | "less-than"
    | "less-than-equals"
    | "greater-than"
    | "greater-than-equals"
    | "in-cidr-set"
    | "not-in-cidr-set"
    | "in-port-set"
    | "not-in-port-set"
    | "in-set"
    | "not-in-set";
  /**
   * If a device is in violation of the behavior for the specified number of consecutive datapoints, an alarm occurs. If not specified, the default is 1.
   * @min `1`
   * @max `10`
   */
  ConsecutiveDatapointsToAlarm?: number;
  /**
   * If an alarm has occurred and the offending device is no longer in violation of the behavior for the specified number of consecutive datapoints, the alarm is cleared. If not specified, the default is 1.
   * @min `1`
   * @max `10`
   */
  ConsecutiveDatapointsToClear?: number;
  /**
   * Use this to specify the time duration over which the behavior is evaluated.
   */
  DurationSeconds?: number;
  /**
   * The configuration of an ML Detect Security Profile.
   */
  MlDetectionConfig?: MachineLearningDetectionConfig;
  /**
   * A statistical ranking (percentile) which indicates a threshold value by which a behavior is determined to be in compliance or in violation of the behavior.
   */
  StatisticalThreshold?: StatisticalThreshold;
  /**
   * The value to be compared with the metric.
   */
  Value?: MetricValue;
};
/**
 * Type definition for `AWS::IoT::SecurityProfile.MachineLearningDetectionConfig`.
 * The configuration of an ML Detect Security Profile.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-securityprofile-machinelearningdetectionconfig.html}
 */
export type MachineLearningDetectionConfig = {
  /**
   * The sensitivity of anomalous behavior evaluation. Can be Low, Medium, or High.
   */
  ConfidenceLevel?: "LOW" | "MEDIUM" | "HIGH";
};
/**
 * Type definition for `AWS::IoT::SecurityProfile.MetricDimension`.
 * The dimension of a metric.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-securityprofile-metricdimension.html}
 */
export type MetricDimension = {
  /**
   * A unique identifier for the dimension.
   * @minLength `1`
   * @maxLength `128`
   * @pattern `[a-zA-Z0-9:_-]+`
   */
  DimensionName: string;
  /**
   * Defines how the dimensionValues of a dimension are interpreted.
   */
  Operator?: "IN" | "NOT_IN";
};
/**
 * Type definition for `AWS::IoT::SecurityProfile.MetricToRetain`.
 * The metric you want to retain. Dimensions are optional.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-securityprofile-metrictoretain.html}
 */
export type MetricToRetain = {
  /**
   * Flag to enable/disable metrics export for metric to be retained.
   */
  ExportMetric?: boolean;
  /**
   * What is measured by the behavior.
   * @minLength `1`
   * @maxLength `128`
   * @pattern `[a-zA-Z0-9:_-]+`
   */
  Metric: string;
  /**
   * The dimension of a metric.
   */
  MetricDimension?: MetricDimension;
};
/**
 * Type definition for `AWS::IoT::SecurityProfile.MetricValue`.
 * The value to be compared with the metric.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-securityprofile-metricvalue.html}
 */
export type MetricValue = {
  /**
   * If the ComparisonOperator calls for a set of CIDRs, use this to specify that set to be compared with the metric.
   */
  Cidrs?: string[];
  /**
   * If the ComparisonOperator calls for a numeric value, use this to specify that (integer) numeric value to be compared with the metric.
   */
  Count?: string;
  /**
   * The numeral value of a metric.
   */
  Number?: number;
  /**
   * The numeral values of a metric.
   */
  Numbers?: number[];
  /**
   * If the ComparisonOperator calls for a set of ports, use this to specify that set to be compared with the metric.
   */
  Ports?: number[];
  /**
   * The string values of a metric.
   */
  Strings?: string[];
};
/**
 * Type definition for `AWS::IoT::SecurityProfile.StatisticalThreshold`.
 * A statistical ranking (percentile) which indicates a threshold value by which a behavior is determined to be in compliance or in violation of the behavior.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-securityprofile-statisticalthreshold.html}
 */
export type StatisticalThreshold = {
  /**
   * The percentile which resolves to a threshold value by which compliance with a behavior is determined
   */
  Statistic?:
    | "Average"
    | "p0"
    | "p0.1"
    | "p0.01"
    | "p1"
    | "p10"
    | "p50"
    | "p90"
    | "p99"
    | "p99.9"
    | "p99.99"
    | "p100";
};
/**
 * Type definition for `AWS::IoT::SecurityProfile.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-securityprofile-tag.html}
 */
export type Tag = {
  /**
   * The tag's key.
   * @minLength `1`
   * @maxLength `128`
   */
  Key: string;
  /**
   * The tag's value.
   * @minLength `1`
   * @maxLength `256`
   */
  Value: string;
};
/**
 * Resource type definition for `AWS::IoT::SecurityProfile`.
 * A security profile defines a set of expected behaviors for devices in your account.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-securityprofile.html}
 */
export class IoTSecurityProfile extends $Resource<
  "AWS::IoT::SecurityProfile",
  IoTSecurityProfileProperties,
  IoTSecurityProfileAttributes
> {
  public static readonly Type = "AWS::IoT::SecurityProfile";
  constructor(
    logicalId: string,
    properties: IoTSecurityProfileProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, IoTSecurityProfile.Type, properties, options);
  }
}
