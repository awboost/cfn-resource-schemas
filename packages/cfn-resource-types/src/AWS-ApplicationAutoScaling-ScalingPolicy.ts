import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::ApplicationAutoScaling::ScalingPolicy
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-applicationautoscaling-scalingpolicy.html}
 */
export type ApplicationAutoScalingScalingPolicyProperties = {
  /**
     * The name of the scaling policy.
    
    Updates to the name of a target tracking scaling policy are not supported, unless you also update the metric used for scaling. To change only a target tracking scaling policy's name, first delete the policy by removing the existing AWS::ApplicationAutoScaling::ScalingPolicy resource from the template and updating the stack. Then, recreate the resource with the same settings and a different name.
     */
  PolicyName: string;
  /**
     * The scaling policy type.
    
    The following policy types are supported:
    
    TargetTrackingScaling Not supported for Amazon EMR
    
    StepScaling Not supported for DynamoDB, Amazon Comprehend, Lambda, Amazon Keyspaces, Amazon MSK, Amazon ElastiCache, or Neptune.
     */
  PolicyType: string;
  /**
   * The identifier of the resource associated with the scaling policy. This string consists of the resource type and unique identifier.
   */
  ResourceId?: string;
  /**
   * The scalable dimension. This string consists of the service namespace, resource type, and scaling property.
   */
  ScalableDimension?: string;
  /**
   * The CloudFormation-generated ID of an Application Auto Scaling scalable target. For more information about the ID, see the Return Value section of the AWS::ApplicationAutoScaling::ScalableTarget resource.
   */
  ScalingTargetId?: string;
  /**
   * The namespace of the AWS service that provides the resource, or a custom-resource.
   */
  ServiceNamespace?: string;
  /**
   * A step scaling policy.
   */
  StepScalingPolicyConfiguration?: StepScalingPolicyConfiguration;
  /**
   * A target tracking scaling policy.
   */
  TargetTrackingScalingPolicyConfiguration?: TargetTrackingScalingPolicyConfiguration;
};
/**
 * Attribute type definition for `AWS::ApplicationAutoScaling::ScalingPolicy`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-applicationautoscaling-scalingpolicy.html#aws-resource-applicationautoscaling-scalingpolicy-return-values}
 */
export type ApplicationAutoScalingScalingPolicyAttributes = {
  /**
   * ARN is a read only property for the resource.
   */
  Arn: string;
};
/**
 * Type definition for `AWS::ApplicationAutoScaling::ScalingPolicy.CustomizedMetricSpecification`.
 * Represents a CloudWatch metric of your choosing for a target tracking scaling policy to use with Application Auto Scaling.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationautoscaling-scalingpolicy-customizedmetricspecification.html}
 */
export type CustomizedMetricSpecification = {
  /**
   * The dimensions of the metric.
   */
  Dimensions?: MetricDimension[];
  /**
   * The name of the metric. To get the exact metric name, namespace, and dimensions, inspect the Metric object that is returned by a call to ListMetrics.
   */
  MetricName?: string;
  /**
   * The metrics to include in the target tracking scaling policy, as a metric data query. This can include both raw metric and metric math expressions.
   */
  Metrics?: TargetTrackingMetricDataQuery[];
  /**
   * The namespace of the metric.
   */
  Namespace?: string;
  /**
   * The statistic of the metric.
   */
  Statistic?: string;
  /**
   * The unit of the metric. For a complete list of the units that CloudWatch supports, see the MetricDatum data type in the Amazon CloudWatch API Reference.
   */
  Unit?: string;
};
/**
 * Type definition for `AWS::ApplicationAutoScaling::ScalingPolicy.MetricDimension`.
 * Describes the dimension names and values associated with a metric.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationautoscaling-scalingpolicy-metricdimension.html}
 */
export type MetricDimension = {
  /**
   * The name of the dimension.
   */
  Name: string;
  /**
   * The value of the dimension.
   */
  Value: string;
};
/**
 * Type definition for `AWS::ApplicationAutoScaling::ScalingPolicy.PredefinedMetricSpecification`.
 * Represents a predefined metric for a target tracking scaling policy to use with Application Auto Scaling.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationautoscaling-scalingpolicy-predefinedmetricspecification.html}
 */
export type PredefinedMetricSpecification = {
  /**
   * The metric type. The ALBRequestCountPerTarget metric type applies only to Spot Fleets and ECS services.
   */
  PredefinedMetricType: string;
  /**
   * Identifies the resource associated with the metric type. You can't specify a resource label unless the metric type is ALBRequestCountPerTarget and there is a target group attached to the Spot Fleet or ECS service.
   */
  ResourceLabel?: string;
};
/**
 * Type definition for `AWS::ApplicationAutoScaling::ScalingPolicy.StepAdjustment`.
 * Represents a step adjustment for a StepScalingPolicyConfiguration. Describes an adjustment based on the difference between the value of the aggregated CloudWatch metric and the breach threshold that you've defined for the alarm.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationautoscaling-scalingpolicy-stepadjustment.html}
 */
export type StepAdjustment = {
  /**
   * The lower bound for the difference between the alarm threshold and the CloudWatch metric. If the metric value is above the breach threshold, the lower bound is inclusive (the metric must be greater than or equal to the threshold plus the lower bound). Otherwise, it is exclusive (the metric must be greater than the threshold plus the lower bound). A null value indicates negative infinity.
   */
  MetricIntervalLowerBound?: number;
  /**
   * The upper bound for the difference between the alarm threshold and the CloudWatch metric. If the metric value is above the breach threshold, the upper bound is exclusive (the metric must be less than the threshold plus the upper bound). Otherwise, it is inclusive (the metric must be less than or equal to the threshold plus the upper bound). A null value indicates positive infinity.
   */
  MetricIntervalUpperBound?: number;
  /**
   * The amount by which to scale, based on the specified adjustment type. A positive value adds to the current capacity while a negative number removes from the current capacity. For exact capacity, you must specify a positive value.
   */
  ScalingAdjustment: number;
};
/**
 * Type definition for `AWS::ApplicationAutoScaling::ScalingPolicy.StepScalingPolicyConfiguration`.
 * A step scaling policy.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationautoscaling-scalingpolicy-stepscalingpolicyconfiguration.html}
 */
export type StepScalingPolicyConfiguration = {
  /**
   * Specifies how the ScalingAdjustment value in a StepAdjustment is interpreted.
   */
  AdjustmentType?: string;
  /**
   * The amount of time, in seconds, to wait for a previous scaling activity to take effect.
   */
  Cooldown?: number;
  /**
   * The aggregation type for the CloudWatch metrics. Valid values are Minimum, Maximum, and Average. If the aggregation type is null, the value is treated as Average
   */
  MetricAggregationType?: string;
  /**
   * The minimum value to scale by when the adjustment type is PercentChangeInCapacity.
   */
  MinAdjustmentMagnitude?: number;
  /**
   * A set of adjustments that enable you to scale based on the size of the alarm breach.
   */
  StepAdjustments?: StepAdjustment[];
};
/**
 * Type definition for `AWS::ApplicationAutoScaling::ScalingPolicy.TargetTrackingMetric`.
 * Represents a specific metric.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationautoscaling-scalingpolicy-targettrackingmetric.html}
 */
export type TargetTrackingMetric = {
  /**
   * The dimensions for the metric.
   */
  Dimensions?: TargetTrackingMetricDimension[];
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
 * Type definition for `AWS::ApplicationAutoScaling::ScalingPolicy.TargetTrackingMetricDataQuery`.
 * The metric data to return. Also defines whether this call is returning data for one metric only, or whether it is performing a math expression on the values of returned metric statistics to create a new time series. A time series is a series of data points, each of which is associated with a timestamp.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationautoscaling-scalingpolicy-targettrackingmetricdataquery.html}
 */
export type TargetTrackingMetricDataQuery = {
  /**
   * The math expression to perform on the returned data, if this object is performing a math expression.
   */
  Expression?: string;
  /**
   * A short name that identifies the object's results in the response.
   */
  Id?: string;
  /**
   * A human-readable label for this metric or expression. This is especially useful if this is a math expression, so that you know what the value represents.
   */
  Label?: string;
  /**
   * Information about the metric data to return.
   */
  MetricStat?: TargetTrackingMetricStat;
  /**
   * Indicates whether to return the timestamps and raw data values of this metric.
   */
  ReturnData?: boolean;
};
/**
 * Type definition for `AWS::ApplicationAutoScaling::ScalingPolicy.TargetTrackingMetricDimension`.
 * Describes the dimension of a metric.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationautoscaling-scalingpolicy-targettrackingmetricdimension.html}
 */
export type TargetTrackingMetricDimension = {
  /**
   * The name of the dimension.
   */
  Name?: string;
  /**
   * The value of the dimension.
   */
  Value?: string;
};
/**
 * Type definition for `AWS::ApplicationAutoScaling::ScalingPolicy.TargetTrackingMetricStat`.
 * This structure defines the CloudWatch metric to return, along with the statistic, period, and unit.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationautoscaling-scalingpolicy-targettrackingmetricstat.html}
 */
export type TargetTrackingMetricStat = {
  /**
   * The CloudWatch metric to return, including the metric name, namespace, and dimensions.
   */
  Metric?: TargetTrackingMetric;
  /**
   * The statistic to return. It can include any CloudWatch statistic or extended statistic.
   */
  Stat?: string;
  /**
   * The unit to use for the returned data points.
   */
  Unit?: string;
};
/**
 * Type definition for `AWS::ApplicationAutoScaling::ScalingPolicy.TargetTrackingScalingPolicyConfiguration`.
 * A target tracking scaling policy.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationautoscaling-scalingpolicy-targettrackingscalingpolicyconfiguration.html}
 */
export type TargetTrackingScalingPolicyConfiguration = {
  /**
   * A customized metric. You can specify either a predefined metric or a customized metric.
   */
  CustomizedMetricSpecification?: CustomizedMetricSpecification;
  /**
   * Indicates whether scale in by the target tracking scaling policy is disabled. If the value is true, scale in is disabled and the target tracking scaling policy won't remove capacity from the scalable target. Otherwise, scale in is enabled and the target tracking scaling policy can remove capacity from the scalable target. The default value is false.
   */
  DisableScaleIn?: boolean;
  /**
   * A predefined metric. You can specify either a predefined metric or a customized metric.
   */
  PredefinedMetricSpecification?: PredefinedMetricSpecification;
  /**
   * The amount of time, in seconds, after a scale-in activity completes before another scale-in activity can start.
   */
  ScaleInCooldown?: number;
  /**
   * The amount of time, in seconds, to wait for a previous scale-out activity to take effect.
   */
  ScaleOutCooldown?: number;
  /**
   * The target value for the metric. Although this property accepts numbers of type Double, it won't accept values that are either too small or too large. Values must be in the range of -2^360 to 2^360. The value must be a valid number based on the choice of metric. For example, if the metric is CPU utilization, then the target value is a percent value that represents how much of the CPU can be used before scaling out.
   */
  TargetValue: number;
};
/**
 * Resource Type definition for AWS::ApplicationAutoScaling::ScalingPolicy
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-applicationautoscaling-scalingpolicy.html}
 */
export class ApplicationAutoScalingScalingPolicy extends $Resource<
  "AWS::ApplicationAutoScaling::ScalingPolicy",
  ApplicationAutoScalingScalingPolicyProperties,
  ApplicationAutoScalingScalingPolicyAttributes
> {
  public static readonly Type = "AWS::ApplicationAutoScaling::ScalingPolicy";
  constructor(
    logicalId: string,
    properties: ApplicationAutoScalingScalingPolicyProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      ApplicationAutoScalingScalingPolicy.Type,
      properties,
      options,
    );
  }
}
