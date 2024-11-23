import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * The AWS::AutoScaling::ScalingPolicy resource specifies an Amazon EC2 Auto Scaling scaling policy so that the Auto Scaling group can scale the number of instances available for your application.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-autoscaling-scalingpolicy.html}
 */
export type AutoScalingScalingPolicyProperties = {
  /**
   * Specifies how the scaling adjustment is interpreted. The valid values are ChangeInCapacity, ExactCapacity, and PercentChangeInCapacity.
   */
  AdjustmentType?: string;
  /**
   * The name of the Auto Scaling group.
   */
  AutoScalingGroupName: string;
  /**
   * The duration of the policy's cooldown period, in seconds. When a cooldown period is specified here, it overrides the default cooldown period defined for the Auto Scaling group.
   */
  Cooldown?: string;
  /**
   * The estimated time, in seconds, until a newly launched instance can contribute to the CloudWatch metrics. If not provided, the default is to use the value from the default cooldown period for the Auto Scaling group. Valid only if the policy type is TargetTrackingScaling or StepScaling.
   */
  EstimatedInstanceWarmup?: number;
  /**
   * The aggregation type for the CloudWatch metrics. The valid values are Minimum, Maximum, and Average. If the aggregation type is null, the value is treated as Average. Valid only if the policy type is StepScaling.
   */
  MetricAggregationType?: string;
  /**
   * The minimum value to scale by when the adjustment type is PercentChangeInCapacity. For example, suppose that you create a step scaling policy to scale out an Auto Scaling group by 25 percent and you specify a MinAdjustmentMagnitude of 2. If the group has 4 instances and the scaling policy is performed, 25 percent of 4 is 1. However, because you specified a MinAdjustmentMagnitude of 2, Amazon EC2 Auto Scaling scales out the group by 2 instances.
   */
  MinAdjustmentMagnitude?: number;
  /**
   * One of the following policy types: TargetTrackingScaling, StepScaling, SimpleScaling (default), PredictiveScaling
   */
  PolicyType?: string;
  /**
   * A predictive scaling policy. Includes support for predefined metrics only.
   */
  PredictiveScalingConfiguration?: PredictiveScalingConfiguration;
  /**
   * The amount by which to scale, based on the specified adjustment type. A positive value adds to the current capacity while a negative number removes from the current capacity. For exact capacity, you must specify a positive value. Required if the policy type is SimpleScaling. (Not used with any other policy type.)
   */
  ScalingAdjustment?: number;
  /**
   * A set of adjustments that enable you to scale based on the size of the alarm breach. Required if the policy type is StepScaling. (Not used with any other policy type.)
   */
  StepAdjustments?: StepAdjustment[];
  /**
   * A target tracking scaling policy. Includes support for predefined or customized metrics.
   */
  TargetTrackingConfiguration?: TargetTrackingConfiguration;
};
/**
 * Attribute type definition for `AWS::AutoScaling::ScalingPolicy`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-autoscaling-scalingpolicy.html#aws-resource-autoscaling-scalingpolicy-return-values}
 */
export type AutoScalingScalingPolicyAttributes = {
  /**
   * The ARN of the AutoScaling scaling policy
   */
  Arn: string;
  PolicyName: string;
};
/**
 * Type definition for `AWS::AutoScaling::ScalingPolicy.CustomizedMetricSpecification`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-autoscaling-scalingpolicy-customizedmetricspecification.html}
 */
export type CustomizedMetricSpecification = {
  Dimensions?: MetricDimension[];
  MetricName?: string;
  Metrics?: TargetTrackingMetricDataQuery[];
  Namespace?: string;
  Period?: number;
  Statistic?: string;
  Unit?: string;
};
/**
 * Type definition for `AWS::AutoScaling::ScalingPolicy.Metric`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-autoscaling-scalingpolicy-metric.html}
 */
export type Metric = {
  Dimensions?: MetricDimension[];
  MetricName: string;
  Namespace: string;
};
/**
 * Type definition for `AWS::AutoScaling::ScalingPolicy.MetricDataQuery`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-autoscaling-scalingpolicy-metricdataquery.html}
 */
export type MetricDataQuery = {
  Expression?: string;
  Id: string;
  Label?: string;
  MetricStat?: MetricStat;
  ReturnData?: boolean;
};
/**
 * Type definition for `AWS::AutoScaling::ScalingPolicy.MetricDimension`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-autoscaling-scalingpolicy-metricdimension.html}
 */
export type MetricDimension = {
  Name: string;
  Value: string;
};
/**
 * Type definition for `AWS::AutoScaling::ScalingPolicy.MetricStat`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-autoscaling-scalingpolicy-metricstat.html}
 */
export type MetricStat = {
  Metric: Metric;
  Stat: string;
  Unit?: string;
};
/**
 * Type definition for `AWS::AutoScaling::ScalingPolicy.PredefinedMetricSpecification`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-autoscaling-scalingpolicy-predefinedmetricspecification.html}
 */
export type PredefinedMetricSpecification = {
  PredefinedMetricType: string;
  ResourceLabel?: string;
};
/**
 * Type definition for `AWS::AutoScaling::ScalingPolicy.PredictiveScalingConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-autoscaling-scalingpolicy-predictivescalingconfiguration.html}
 */
export type PredictiveScalingConfiguration = {
  MaxCapacityBreachBehavior?: string;
  MaxCapacityBuffer?: number;
  MetricSpecifications: PredictiveScalingMetricSpecification[];
  Mode?: string;
  SchedulingBufferTime?: number;
};
/**
 * Type definition for `AWS::AutoScaling::ScalingPolicy.PredictiveScalingCustomizedCapacityMetric`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-autoscaling-scalingpolicy-predictivescalingcustomizedcapacitymetric.html}
 */
export type PredictiveScalingCustomizedCapacityMetric = {
  MetricDataQueries: MetricDataQuery[];
};
/**
 * Type definition for `AWS::AutoScaling::ScalingPolicy.PredictiveScalingCustomizedLoadMetric`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-autoscaling-scalingpolicy-predictivescalingcustomizedloadmetric.html}
 */
export type PredictiveScalingCustomizedLoadMetric = {
  MetricDataQueries: MetricDataQuery[];
};
/**
 * Type definition for `AWS::AutoScaling::ScalingPolicy.PredictiveScalingCustomizedScalingMetric`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-autoscaling-scalingpolicy-predictivescalingcustomizedscalingmetric.html}
 */
export type PredictiveScalingCustomizedScalingMetric = {
  MetricDataQueries: MetricDataQuery[];
};
/**
 * Type definition for `AWS::AutoScaling::ScalingPolicy.PredictiveScalingMetricSpecification`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-autoscaling-scalingpolicy-predictivescalingmetricspecification.html}
 */
export type PredictiveScalingMetricSpecification = {
  CustomizedCapacityMetricSpecification?: PredictiveScalingCustomizedCapacityMetric;
  CustomizedLoadMetricSpecification?: PredictiveScalingCustomizedLoadMetric;
  CustomizedScalingMetricSpecification?: PredictiveScalingCustomizedScalingMetric;
  PredefinedLoadMetricSpecification?: PredictiveScalingPredefinedLoadMetric;
  PredefinedMetricPairSpecification?: PredictiveScalingPredefinedMetricPair;
  PredefinedScalingMetricSpecification?: PredictiveScalingPredefinedScalingMetric;
  TargetValue: number;
};
/**
 * Type definition for `AWS::AutoScaling::ScalingPolicy.PredictiveScalingPredefinedLoadMetric`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-autoscaling-scalingpolicy-predictivescalingpredefinedloadmetric.html}
 */
export type PredictiveScalingPredefinedLoadMetric = {
  PredefinedMetricType: string;
  ResourceLabel?: string;
};
/**
 * Type definition for `AWS::AutoScaling::ScalingPolicy.PredictiveScalingPredefinedMetricPair`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-autoscaling-scalingpolicy-predictivescalingpredefinedmetricpair.html}
 */
export type PredictiveScalingPredefinedMetricPair = {
  PredefinedMetricType: string;
  ResourceLabel?: string;
};
/**
 * Type definition for `AWS::AutoScaling::ScalingPolicy.PredictiveScalingPredefinedScalingMetric`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-autoscaling-scalingpolicy-predictivescalingpredefinedscalingmetric.html}
 */
export type PredictiveScalingPredefinedScalingMetric = {
  PredefinedMetricType: string;
  ResourceLabel?: string;
};
/**
 * Type definition for `AWS::AutoScaling::ScalingPolicy.StepAdjustment`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-autoscaling-scalingpolicy-stepadjustment.html}
 */
export type StepAdjustment = {
  MetricIntervalLowerBound?: number;
  MetricIntervalUpperBound?: number;
  ScalingAdjustment: number;
};
/**
 * Type definition for `AWS::AutoScaling::ScalingPolicy.TargetTrackingConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-autoscaling-scalingpolicy-targettrackingconfiguration.html}
 */
export type TargetTrackingConfiguration = {
  CustomizedMetricSpecification?: CustomizedMetricSpecification;
  DisableScaleIn?: boolean;
  PredefinedMetricSpecification?: PredefinedMetricSpecification;
  TargetValue: number;
};
/**
 * Type definition for `AWS::AutoScaling::ScalingPolicy.TargetTrackingMetricDataQuery`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-autoscaling-scalingpolicy-targettrackingmetricdataquery.html}
 */
export type TargetTrackingMetricDataQuery = {
  Expression?: string;
  Id: string;
  Label?: string;
  MetricStat?: TargetTrackingMetricStat;
  Period?: number;
  ReturnData?: boolean;
};
/**
 * Type definition for `AWS::AutoScaling::ScalingPolicy.TargetTrackingMetricStat`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-autoscaling-scalingpolicy-targettrackingmetricstat.html}
 */
export type TargetTrackingMetricStat = {
  Metric: Metric;
  Period?: number;
  Stat: string;
  Unit?: string;
};
/**
 * The AWS::AutoScaling::ScalingPolicy resource specifies an Amazon EC2 Auto Scaling scaling policy so that the Auto Scaling group can scale the number of instances available for your application.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-autoscaling-scalingpolicy.html}
 */
export class AutoScalingScalingPolicy extends $Resource<
  "AWS::AutoScaling::ScalingPolicy",
  AutoScalingScalingPolicyProperties,
  AutoScalingScalingPolicyAttributes
> {
  public static readonly Type = "AWS::AutoScaling::ScalingPolicy";
  constructor(
    logicalId: string,
    properties: AutoScalingScalingPolicyProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, AutoScalingScalingPolicy.Type, properties, options);
  }
}
