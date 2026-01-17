import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::ECS::CapacityProvider.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecs-capacityprovider.html}
 */
export type ECSCapacityProviderProperties = {
  AutoScalingGroupProvider?: AutoScalingGroupProvider;
  ClusterName?: string;
  ManagedInstancesProvider?: ManagedInstancesProvider;
  Name?: string;
  Tags?: Tag[];
};
/**
 * Type definition for `AWS::ECS::CapacityProvider.AcceleratorCountRequest`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-capacityprovider-acceleratorcountrequest.html}
 */
export type AcceleratorCountRequest = {
  Max?: number;
  Min?: number;
};
/**
 * Type definition for `AWS::ECS::CapacityProvider.AcceleratorTotalMemoryMiBRequest`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-capacityprovider-acceleratortotalmemorymibrequest.html}
 */
export type AcceleratorTotalMemoryMiBRequest = {
  Max?: number;
  Min?: number;
};
/**
 * Type definition for `AWS::ECS::CapacityProvider.AutoScalingGroupProvider`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-capacityprovider-autoscalinggroupprovider.html}
 */
export type AutoScalingGroupProvider = {
  AutoScalingGroupArn: string;
  ManagedDraining?: "DISABLED" | "ENABLED";
  /**
   * The managed scaling settings for the Auto Scaling group capacity provider.
   */
  ManagedScaling?: ManagedScaling;
  ManagedTerminationProtection?: "DISABLED" | "ENABLED";
};
/**
 * Type definition for `AWS::ECS::CapacityProvider.BaselineEbsBandwidthMbpsRequest`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-capacityprovider-baselineebsbandwidthmbpsrequest.html}
 */
export type BaselineEbsBandwidthMbpsRequest = {
  Max?: number;
  Min?: number;
};
/**
 * Type definition for `AWS::ECS::CapacityProvider.InstanceLaunchTemplate`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-capacityprovider-instancelaunchtemplate.html}
 */
export type InstanceLaunchTemplate = {
  CapacityOptionType?: "ON_DEMAND" | "SPOT";
  Ec2InstanceProfileArn: string;
  FipsEnabled?: boolean;
  InstanceRequirements?: InstanceRequirementsRequest;
  Monitoring?: ManagedInstancesMonitoringOptions;
  NetworkConfiguration: ManagedInstancesNetworkConfiguration;
  StorageConfiguration?: ManagedInstancesStorageConfiguration;
};
/**
 * Type definition for `AWS::ECS::CapacityProvider.InstanceRequirementsRequest`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-capacityprovider-instancerequirementsrequest.html}
 */
export type InstanceRequirementsRequest = {
  AcceleratorCount?: AcceleratorCountRequest;
  AcceleratorManufacturers?: (
    | "amazon-web-services"
    | "amd"
    | "habana"
    | "nvidia"
    | "xilinx"
  )[];
  AcceleratorNames?: (
    | "a10g"
    | "a100"
    | "h100"
    | "inferentia"
    | "k520"
    | "k80"
    | "m60"
    | "radeon-pro-v520"
    | "t4"
    | "t4g"
    | "vu9p"
    | "v100"
    | "l40s"
  )[];
  AcceleratorTotalMemoryMiB?: AcceleratorTotalMemoryMiBRequest;
  AcceleratorTypes?: ("gpu" | "fpga" | "inference")[];
  AllowedInstanceTypes?: string[];
  BareMetal?: "included" | "required" | "excluded";
  BaselineEbsBandwidthMbps?: BaselineEbsBandwidthMbpsRequest;
  BurstablePerformance?: "included" | "required" | "excluded";
  CpuManufacturers?: ("intel" | "amd" | "amazon-web-services")[];
  ExcludedInstanceTypes?: string[];
  InstanceGenerations?: ("current" | "previous")[];
  LocalStorage?: "included" | "required" | "excluded";
  LocalStorageTypes?: ("hdd" | "ssd")[];
  MaxSpotPriceAsPercentageOfOptimalOnDemandPrice?: number;
  MemoryGiBPerVCpu?: MemoryGiBPerVCpuRequest;
  MemoryMiB: MemoryMiBRequest;
  NetworkBandwidthGbps?: NetworkBandwidthGbpsRequest;
  NetworkInterfaceCount?: NetworkInterfaceCountRequest;
  OnDemandMaxPricePercentageOverLowestPrice?: number;
  RequireHibernateSupport?: boolean;
  SpotMaxPricePercentageOverLowestPrice?: number;
  TotalLocalStorageGB?: TotalLocalStorageGBRequest;
  VCpuCount: VCpuCountRangeRequest;
};
/**
 * Type definition for `AWS::ECS::CapacityProvider.ManagedInstancesMonitoringOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-capacityprovider-managedinstancesmonitoringoptions.html}
 */
export type ManagedInstancesMonitoringOptions = "BASIC" | "DETAILED";
/**
 * Type definition for `AWS::ECS::CapacityProvider.ManagedInstancesNetworkConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-capacityprovider-managedinstancesnetworkconfiguration.html}
 */
export type ManagedInstancesNetworkConfiguration = {
  SecurityGroups: string[];
  Subnets: string[];
};
/**
 * Type definition for `AWS::ECS::CapacityProvider.ManagedInstancesProvider`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-capacityprovider-managedinstancesprovider.html}
 */
export type ManagedInstancesProvider = {
  /**
   * Defines how Amazon ECS Managed Instances optimizes the infrastructure in your capacity provider. Configure it to turn on or off the infrastructure optimization in your capacity provider, and to control the idle EC2 instances optimization delay.
   */
  InfrastructureOptimization?: {
    /**
     * This parameter defines the number of seconds Amazon ECS Managed Instances waits before optimizing EC2 instances that have become idle or underutilized. A longer delay increases the likelihood of placing new tasks on idle instances, reducing startup time. A shorter delay helps reduce infrastructure costs by optimizing idle instances more quickly. Valid values are: Not set (null) - Uses the default optimization behavior, `-1` - Disables automatic infrastructure optimization, `0` to `3600` (inclusive) - Specifies the number of seconds to wait before optimizing instances.
     * @min `-1`
     * @max `3600`
     */
    ScaleInAfter?: number;
  };
  InfrastructureRoleArn: string;
  InstanceLaunchTemplate: InstanceLaunchTemplate;
  PropagateTags?: "CAPACITY_PROVIDER" | "NONE";
};
/**
 * Type definition for `AWS::ECS::CapacityProvider.ManagedInstancesStorageConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-capacityprovider-managedinstancesstorageconfiguration.html}
 */
export type ManagedInstancesStorageConfiguration = {
  StorageSizeGiB: number;
};
/**
 * Type definition for `AWS::ECS::CapacityProvider.ManagedScaling`.
 * The managed scaling settings for the Auto Scaling group capacity provider.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-capacityprovider-managedscaling.html}
 */
export type ManagedScaling = {
  InstanceWarmupPeriod?: number;
  MaximumScalingStepSize?: number;
  MinimumScalingStepSize?: number;
  Status?: "DISABLED" | "ENABLED";
  TargetCapacity?: number;
};
/**
 * Type definition for `AWS::ECS::CapacityProvider.MemoryGiBPerVCpuRequest`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-capacityprovider-memorygibpervcpurequest.html}
 */
export type MemoryGiBPerVCpuRequest = {
  Max?: number;
  Min?: number;
};
/**
 * Type definition for `AWS::ECS::CapacityProvider.MemoryMiBRequest`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-capacityprovider-memorymibrequest.html}
 */
export type MemoryMiBRequest = {
  Max?: number;
  Min: number;
};
/**
 * Type definition for `AWS::ECS::CapacityProvider.NetworkBandwidthGbpsRequest`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-capacityprovider-networkbandwidthgbpsrequest.html}
 */
export type NetworkBandwidthGbpsRequest = {
  Max?: number;
  Min?: number;
};
/**
 * Type definition for `AWS::ECS::CapacityProvider.NetworkInterfaceCountRequest`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-capacityprovider-networkinterfacecountrequest.html}
 */
export type NetworkInterfaceCountRequest = {
  Max?: number;
  Min?: number;
};
/**
 * Type definition for `AWS::ECS::CapacityProvider.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-capacityprovider-tag.html}
 */
export type Tag = {
  /**
   * @minLength `1`
   */
  Key?: string;
  /**
   * @minLength `1`
   */
  Value?: string;
};
/**
 * Type definition for `AWS::ECS::CapacityProvider.TotalLocalStorageGBRequest`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-capacityprovider-totallocalstoragegbrequest.html}
 */
export type TotalLocalStorageGBRequest = {
  Max?: number;
  Min?: number;
};
/**
 * Type definition for `AWS::ECS::CapacityProvider.VCpuCountRangeRequest`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-capacityprovider-vcpucountrangerequest.html}
 */
export type VCpuCountRangeRequest = {
  Max?: number;
  Min: number;
};
/**
 * Resource Type definition for AWS::ECS::CapacityProvider.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecs-capacityprovider.html}
 */
export class ECSCapacityProvider extends $Resource<
  "AWS::ECS::CapacityProvider",
  ECSCapacityProviderProperties,
  Record<string, never>
> {
  public static readonly Type = "AWS::ECS::CapacityProvider";
  constructor(
    logicalId: string,
    properties: ECSCapacityProviderProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, ECSCapacityProvider.Type, properties, options);
  }
}
