import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::AutoScalingPlans::ScalingPlan
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-autoscalingplans-scalingplan.html}
 */
export type AutoScalingPlansScalingPlanProperties = {
  ApplicationSource: ApplicationSource;
  ScalingInstructions: ScalingInstruction[];
};
/**
 * Attribute type definition for `AWS::AutoScalingPlans::ScalingPlan`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-autoscalingplans-scalingplan.html#aws-resource-autoscalingplans-scalingplan-return-values}
 */
export type AutoScalingPlansScalingPlanAttributes = {
  Id: string;
  ScalingPlanName: string;
  ScalingPlanVersion: string;
};
/**
 * Type definition for `AWS::AutoScalingPlans::ScalingPlan.ApplicationSource`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-autoscalingplans-scalingplan-applicationsource.html}
 */
export type ApplicationSource = {
  CloudFormationStackARN?: string;
  TagFilters?: TagFilter[];
};
/**
 * Type definition for `AWS::AutoScalingPlans::ScalingPlan.CustomizedLoadMetricSpecification`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-autoscalingplans-scalingplan-customizedloadmetricspecification.html}
 */
export type CustomizedLoadMetricSpecification = {
  Dimensions?: MetricDimension[];
  MetricName: string;
  Namespace: string;
  Statistic: string;
  Unit?: string;
};
/**
 * Type definition for `AWS::AutoScalingPlans::ScalingPlan.CustomizedScalingMetricSpecification`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-autoscalingplans-scalingplan-customizedscalingmetricspecification.html}
 */
export type CustomizedScalingMetricSpecification = {
  Dimensions?: MetricDimension[];
  MetricName: string;
  Namespace: string;
  Statistic: string;
  Unit?: string;
};
/**
 * Type definition for `AWS::AutoScalingPlans::ScalingPlan.MetricDimension`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-autoscalingplans-scalingplan-metricdimension.html}
 */
export type MetricDimension = {
  Name: string;
  Value: string;
};
/**
 * Type definition for `AWS::AutoScalingPlans::ScalingPlan.PredefinedLoadMetricSpecification`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-autoscalingplans-scalingplan-predefinedloadmetricspecification.html}
 */
export type PredefinedLoadMetricSpecification = {
  PredefinedLoadMetricType: string;
  ResourceLabel?: string;
};
/**
 * Type definition for `AWS::AutoScalingPlans::ScalingPlan.PredefinedScalingMetricSpecification`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-autoscalingplans-scalingplan-predefinedscalingmetricspecification.html}
 */
export type PredefinedScalingMetricSpecification = {
  PredefinedScalingMetricType: string;
  ResourceLabel?: string;
};
/**
 * Type definition for `AWS::AutoScalingPlans::ScalingPlan.ScalingInstruction`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-autoscalingplans-scalingplan-scalinginstruction.html}
 */
export type ScalingInstruction = {
  CustomizedLoadMetricSpecification?: CustomizedLoadMetricSpecification;
  DisableDynamicScaling?: boolean;
  MaxCapacity: number;
  MinCapacity: number;
  PredefinedLoadMetricSpecification?: PredefinedLoadMetricSpecification;
  PredictiveScalingMaxCapacityBehavior?: string;
  PredictiveScalingMaxCapacityBuffer?: number;
  PredictiveScalingMode?: string;
  ResourceId: string;
  ScalableDimension: string;
  ScalingPolicyUpdateBehavior?: string;
  ScheduledActionBufferTime?: number;
  ServiceNamespace: string;
  TargetTrackingConfigurations: TargetTrackingConfiguration[];
};
/**
 * Type definition for `AWS::AutoScalingPlans::ScalingPlan.TagFilter`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-autoscalingplans-scalingplan-tagfilter.html}
 */
export type TagFilter = {
  Key: string;
  Values?: string[];
};
/**
 * Type definition for `AWS::AutoScalingPlans::ScalingPlan.TargetTrackingConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-autoscalingplans-scalingplan-targettrackingconfiguration.html}
 */
export type TargetTrackingConfiguration = {
  CustomizedScalingMetricSpecification?: CustomizedScalingMetricSpecification;
  DisableScaleIn?: boolean;
  EstimatedInstanceWarmup?: number;
  PredefinedScalingMetricSpecification?: PredefinedScalingMetricSpecification;
  ScaleInCooldown?: number;
  ScaleOutCooldown?: number;
  TargetValue: number;
};
/**
 * Resource Type definition for AWS::AutoScalingPlans::ScalingPlan
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-autoscalingplans-scalingplan.html}
 */
export class AutoScalingPlansScalingPlan extends $Resource<
  "AWS::AutoScalingPlans::ScalingPlan",
  AutoScalingPlansScalingPlanProperties,
  AutoScalingPlansScalingPlanAttributes
> {
  public static readonly Type = "AWS::AutoScalingPlans::ScalingPlan";
  constructor(
    logicalId: string,
    properties: AutoScalingPlansScalingPlanProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, AutoScalingPlansScalingPlan.Type, properties, options);
  }
}
