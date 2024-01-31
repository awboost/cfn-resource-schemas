import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::AutoScaling::AutoScalingGroup
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-autoscaling-autoscalinggroup.html}
 */
export type AutoScalingAutoScalingGroupProperties = {
  AutoScalingGroupName?: string;
  AvailabilityZones?: string[];
  CapacityRebalance?: boolean;
  Context?: string;
  Cooldown?: string;
  DefaultInstanceWarmup?: number;
  /**
   * @pattern `^[0-9]+$`
   */
  DesiredCapacity?: string;
  DesiredCapacityType?: string;
  HealthCheckGracePeriod?: number;
  HealthCheckType?: string;
  InstanceId?: string;
  InstanceMaintenancePolicy?: InstanceMaintenancePolicy;
  LaunchConfigurationName?: string;
  LaunchTemplate?: LaunchTemplateSpecification;
  LifecycleHookSpecificationList?: LifecycleHookSpecification[];
  LoadBalancerNames?: string[];
  MaxInstanceLifetime?: number;
  /**
   * @pattern `^[0-9]+$`
   */
  MaxSize: string;
  MetricsCollection?: MetricsCollection[];
  /**
   * @pattern `^[0-9]+$`
   */
  MinSize: string;
  MixedInstancesPolicy?: MixedInstancesPolicy;
  NewInstancesProtectedFromScaleIn?: boolean;
  NotificationConfiguration?: NotificationConfiguration;
  NotificationConfigurations?: NotificationConfiguration[];
  PlacementGroup?: string;
  ServiceLinkedRoleARN?: string;
  Tags?: TagProperty[];
  TargetGroupARNs?: string[];
  TerminationPolicies?: string[];
  VPCZoneIdentifier?: string[];
};
/**
 * Type definition for `AWS::AutoScaling::AutoScalingGroup.AcceleratorCountRequest`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-autoscaling-autoscalinggroup-acceleratorcountrequest.html}
 */
export type AcceleratorCountRequest = {
  Max?: number;
  Min?: number;
};
/**
 * Type definition for `AWS::AutoScaling::AutoScalingGroup.AcceleratorTotalMemoryMiBRequest`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-autoscaling-autoscalinggroup-acceleratortotalmemorymibrequest.html}
 */
export type AcceleratorTotalMemoryMiBRequest = {
  Max?: number;
  Min?: number;
};
/**
 * Type definition for `AWS::AutoScaling::AutoScalingGroup.BaselineEbsBandwidthMbpsRequest`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-autoscaling-autoscalinggroup-baselineebsbandwidthmbpsrequest.html}
 */
export type BaselineEbsBandwidthMbpsRequest = {
  Max?: number;
  Min?: number;
};
/**
 * Type definition for `AWS::AutoScaling::AutoScalingGroup.InstanceMaintenancePolicy`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-autoscaling-autoscalinggroup-instancemaintenancepolicy.html}
 */
export type InstanceMaintenancePolicy = {
  MaxHealthyPercentage?: number;
  MinHealthyPercentage?: number;
};
/**
 * Type definition for `AWS::AutoScaling::AutoScalingGroup.InstanceRequirements`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-autoscaling-autoscalinggroup-instancerequirements.html}
 */
export type InstanceRequirements = {
  AcceleratorCount?: AcceleratorCountRequest;
  AcceleratorManufacturers?: string[];
  AcceleratorNames?: string[];
  AcceleratorTotalMemoryMiB?: AcceleratorTotalMemoryMiBRequest;
  AcceleratorTypes?: string[];
  AllowedInstanceTypes?: string[];
  BareMetal?: string;
  BaselineEbsBandwidthMbps?: BaselineEbsBandwidthMbpsRequest;
  BurstablePerformance?: string;
  CpuManufacturers?: string[];
  ExcludedInstanceTypes?: string[];
  InstanceGenerations?: string[];
  LocalStorage?: string;
  LocalStorageTypes?: string[];
  MaxSpotPriceAsPercentageOfOptimalOnDemandPrice?: number;
  MemoryGiBPerVCpu?: MemoryGiBPerVCpuRequest;
  MemoryMiB: MemoryMiBRequest;
  NetworkBandwidthGbps?: NetworkBandwidthGbpsRequest;
  NetworkInterfaceCount?: NetworkInterfaceCountRequest;
  OnDemandMaxPricePercentageOverLowestPrice?: number;
  RequireHibernateSupport?: boolean;
  SpotMaxPricePercentageOverLowestPrice?: number;
  TotalLocalStorageGB?: TotalLocalStorageGBRequest;
  VCpuCount: VCpuCountRequest;
};
/**
 * Type definition for `AWS::AutoScaling::AutoScalingGroup.InstancesDistribution`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-autoscaling-autoscalinggroup-instancesdistribution.html}
 */
export type InstancesDistribution = {
  OnDemandAllocationStrategy?: string;
  OnDemandBaseCapacity?: number;
  OnDemandPercentageAboveBaseCapacity?: number;
  SpotAllocationStrategy?: string;
  SpotInstancePools?: number;
  SpotMaxPrice?: string;
};
/**
 * Type definition for `AWS::AutoScaling::AutoScalingGroup.LaunchTemplate`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-autoscaling-autoscalinggroup-launchtemplate.html}
 */
export type LaunchTemplate = {
  LaunchTemplateSpecification: LaunchTemplateSpecification;
  Overrides?: LaunchTemplateOverrides[];
};
/**
 * Type definition for `AWS::AutoScaling::AutoScalingGroup.LaunchTemplateOverrides`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-autoscaling-autoscalinggroup-launchtemplateoverrides.html}
 */
export type LaunchTemplateOverrides = {
  InstanceRequirements?: InstanceRequirements;
  InstanceType?: string;
  LaunchTemplateSpecification?: LaunchTemplateSpecification;
  WeightedCapacity?: string;
};
/**
 * Type definition for `AWS::AutoScaling::AutoScalingGroup.LaunchTemplateSpecification`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-autoscaling-autoscalinggroup-launchtemplatespecification.html}
 */
export type LaunchTemplateSpecification = {
  LaunchTemplateId?: string;
  LaunchTemplateName?: string;
  Version: string;
};
/**
 * Type definition for `AWS::AutoScaling::AutoScalingGroup.LifecycleHookSpecification`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-autoscaling-autoscalinggroup-lifecyclehookspecification.html}
 */
export type LifecycleHookSpecification = {
  DefaultResult?: string;
  HeartbeatTimeout?: number;
  LifecycleHookName: string;
  LifecycleTransition: string;
  NotificationMetadata?: string;
  NotificationTargetARN?: string;
  RoleARN?: string;
};
/**
 * Type definition for `AWS::AutoScaling::AutoScalingGroup.MemoryGiBPerVCpuRequest`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-autoscaling-autoscalinggroup-memorygibpervcpurequest.html}
 */
export type MemoryGiBPerVCpuRequest = {
  Max?: number;
  Min?: number;
};
/**
 * Type definition for `AWS::AutoScaling::AutoScalingGroup.MemoryMiBRequest`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-autoscaling-autoscalinggroup-memorymibrequest.html}
 */
export type MemoryMiBRequest = {
  Max?: number;
  Min?: number;
};
/**
 * Type definition for `AWS::AutoScaling::AutoScalingGroup.MetricsCollection`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-autoscaling-autoscalinggroup-metricscollection.html}
 */
export type MetricsCollection = {
  Granularity: string;
  Metrics?: string[];
};
/**
 * Type definition for `AWS::AutoScaling::AutoScalingGroup.MixedInstancesPolicy`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-autoscaling-autoscalinggroup-mixedinstancespolicy.html}
 */
export type MixedInstancesPolicy = {
  InstancesDistribution?: InstancesDistribution;
  LaunchTemplate: LaunchTemplate;
};
/**
 * Type definition for `AWS::AutoScaling::AutoScalingGroup.NetworkBandwidthGbpsRequest`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-autoscaling-autoscalinggroup-networkbandwidthgbpsrequest.html}
 */
export type NetworkBandwidthGbpsRequest = {
  Max?: number;
  Min?: number;
};
/**
 * Type definition for `AWS::AutoScaling::AutoScalingGroup.NetworkInterfaceCountRequest`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-autoscaling-autoscalinggroup-networkinterfacecountrequest.html}
 */
export type NetworkInterfaceCountRequest = {
  Max?: number;
  Min?: number;
};
/**
 * Type definition for `AWS::AutoScaling::AutoScalingGroup.NotificationConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-autoscaling-autoscalinggroup-notificationconfiguration.html}
 */
export type NotificationConfiguration = {
  NotificationTypes?: string[];
  TopicARN: string | string[];
};
/**
 * Type definition for `AWS::AutoScaling::AutoScalingGroup.TagProperty`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-autoscaling-autoscalinggroup-tagproperty.html}
 */
export type TagProperty = {
  Key: string;
  PropagateAtLaunch: boolean;
  Value: string;
};
/**
 * Type definition for `AWS::AutoScaling::AutoScalingGroup.TotalLocalStorageGBRequest`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-autoscaling-autoscalinggroup-totallocalstoragegbrequest.html}
 */
export type TotalLocalStorageGBRequest = {
  Max?: number;
  Min?: number;
};
/**
 * Type definition for `AWS::AutoScaling::AutoScalingGroup.VCpuCountRequest`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-autoscaling-autoscalinggroup-vcpucountrequest.html}
 */
export type VCpuCountRequest = {
  Max?: number;
  Min?: number;
};
/**
 * Resource Type definition for AWS::AutoScaling::AutoScalingGroup
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-autoscaling-autoscalinggroup.html}
 */
export class AutoScalingAutoScalingGroup extends $Resource<
  "AWS::AutoScaling::AutoScalingGroup",
  AutoScalingAutoScalingGroupProperties,
  Record<string, never>
> {
  public static readonly Type = "AWS::AutoScaling::AutoScalingGroup";
  constructor(
    logicalId: string,
    properties: AutoScalingAutoScalingGroupProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, AutoScalingAutoScalingGroup.Type, properties, options);
  }
}
