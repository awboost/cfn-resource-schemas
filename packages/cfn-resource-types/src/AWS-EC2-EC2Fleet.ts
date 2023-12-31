import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource Type definition for AWS::EC2::EC2Fleet
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-ec2fleet.html}
 */
export type EC2EC2FleetProperties = {
  Context?: string;
  ExcessCapacityTerminationPolicy?: "termination" | "no-termination";
  /**
   * @maxLength `50`
   */
  LaunchTemplateConfigs: FleetLaunchTemplateConfigRequest[];
  OnDemandOptions?: OnDemandOptionsRequest;
  ReplaceUnhealthyInstances?: boolean;
  SpotOptions?: SpotOptionsRequest;
  TagSpecifications?: TagSpecification[];
  TargetCapacitySpecification: TargetCapacitySpecificationRequest;
  TerminateInstancesWithExpiration?: boolean;
  Type?: "maintain" | "request" | "instant";
  ValidFrom?: string;
  ValidUntil?: string;
};
/**
 * Attribute type definition for `AWS::EC2::EC2Fleet`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-ec2fleet.html#aws-resource-ec2-ec2fleet-return-values}
 */
export type EC2EC2FleetAttributes = {
  FleetId: string;
};
/**
 * Type definition for `AWS::EC2::EC2Fleet.AcceleratorCountRequest`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-ec2fleet-acceleratorcountrequest.html}
 */
export type AcceleratorCountRequest = {
  Max?: number;
  Min?: number;
};
/**
 * Type definition for `AWS::EC2::EC2Fleet.AcceleratorTotalMemoryMiBRequest`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-ec2fleet-acceleratortotalmemorymibrequest.html}
 */
export type AcceleratorTotalMemoryMiBRequest = {
  Max?: number;
  Min?: number;
};
/**
 * Type definition for `AWS::EC2::EC2Fleet.BaselineEbsBandwidthMbpsRequest`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-ec2fleet-baselineebsbandwidthmbpsrequest.html}
 */
export type BaselineEbsBandwidthMbpsRequest = {
  Max?: number;
  Min?: number;
};
/**
 * Type definition for `AWS::EC2::EC2Fleet.CapacityRebalance`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-ec2fleet-capacityrebalance.html}
 */
export type CapacityRebalance = {
  ReplacementStrategy?: "launch" | "launch-before-terminate";
  TerminationDelay?: number;
};
/**
 * Type definition for `AWS::EC2::EC2Fleet.CapacityReservationOptionsRequest`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-ec2fleet-capacityreservationoptionsrequest.html}
 */
export type CapacityReservationOptionsRequest = {
  UsageStrategy?: "use-capacity-reservations-first";
};
/**
 * Type definition for `AWS::EC2::EC2Fleet.FleetLaunchTemplateConfigRequest`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-ec2fleet-fleetlaunchtemplateconfigrequest.html}
 */
export type FleetLaunchTemplateConfigRequest = {
  LaunchTemplateSpecification?: FleetLaunchTemplateSpecificationRequest;
  Overrides?: FleetLaunchTemplateOverridesRequest[];
};
/**
 * Type definition for `AWS::EC2::EC2Fleet.FleetLaunchTemplateOverridesRequest`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-ec2fleet-fleetlaunchtemplateoverridesrequest.html}
 */
export type FleetLaunchTemplateOverridesRequest = {
  AvailabilityZone?: string;
  InstanceRequirements?: InstanceRequirementsRequest;
  InstanceType?: string;
  MaxPrice?: string;
  Placement?: Placement;
  Priority?: number;
  SubnetId?: string;
  WeightedCapacity?: number;
};
/**
 * Type definition for `AWS::EC2::EC2Fleet.FleetLaunchTemplateSpecificationRequest`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-ec2fleet-fleetlaunchtemplatespecificationrequest.html}
 */
export type FleetLaunchTemplateSpecificationRequest = {
  LaunchTemplateId?: string;
  /**
   * @minLength `3`
   * @maxLength `128`
   * @pattern `[a-zA-Z0-9\(\)\.\-/_]+`
   */
  LaunchTemplateName?: string;
  Version: string;
};
/**
 * Type definition for `AWS::EC2::EC2Fleet.InstanceRequirementsRequest`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-ec2fleet-instancerequirementsrequest.html}
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
  MemoryGiBPerVCpu?: MemoryGiBPerVCpuRequest;
  MemoryMiB?: MemoryMiBRequest;
  NetworkBandwidthGbps?: NetworkBandwidthGbpsRequest;
  NetworkInterfaceCount?: NetworkInterfaceCountRequest;
  OnDemandMaxPricePercentageOverLowestPrice?: number;
  RequireHibernateSupport?: boolean;
  SpotMaxPricePercentageOverLowestPrice?: number;
  TotalLocalStorageGB?: TotalLocalStorageGBRequest;
  VCpuCount?: VCpuCountRangeRequest;
};
/**
 * Type definition for `AWS::EC2::EC2Fleet.MaintenanceStrategies`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-ec2fleet-maintenancestrategies.html}
 */
export type MaintenanceStrategies = {
  CapacityRebalance?: CapacityRebalance;
};
/**
 * Type definition for `AWS::EC2::EC2Fleet.MemoryGiBPerVCpuRequest`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-ec2fleet-memorygibpervcpurequest.html}
 */
export type MemoryGiBPerVCpuRequest = {
  Max?: number;
  Min?: number;
};
/**
 * Type definition for `AWS::EC2::EC2Fleet.MemoryMiBRequest`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-ec2fleet-memorymibrequest.html}
 */
export type MemoryMiBRequest = {
  Max?: number;
  Min?: number;
};
/**
 * Type definition for `AWS::EC2::EC2Fleet.NetworkBandwidthGbpsRequest`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-ec2fleet-networkbandwidthgbpsrequest.html}
 */
export type NetworkBandwidthGbpsRequest = {
  Max?: number;
  Min?: number;
};
/**
 * Type definition for `AWS::EC2::EC2Fleet.NetworkInterfaceCountRequest`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-ec2fleet-networkinterfacecountrequest.html}
 */
export type NetworkInterfaceCountRequest = {
  Max?: number;
  Min?: number;
};
/**
 * Type definition for `AWS::EC2::EC2Fleet.OnDemandOptionsRequest`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-ec2fleet-ondemandoptionsrequest.html}
 */
export type OnDemandOptionsRequest = {
  AllocationStrategy?: string;
  CapacityReservationOptions?: CapacityReservationOptionsRequest;
  MaxTotalPrice?: string;
  MinTargetCapacity?: number;
  SingleAvailabilityZone?: boolean;
  SingleInstanceType?: boolean;
};
/**
 * Type definition for `AWS::EC2::EC2Fleet.Placement`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-ec2fleet-placement.html}
 */
export type Placement = {
  Affinity?: string;
  AvailabilityZone?: string;
  GroupName?: string;
  HostId?: string;
  HostResourceGroupArn?: string;
  PartitionNumber?: number;
  SpreadDomain?: string;
  Tenancy?: string;
};
/**
 * Type definition for `AWS::EC2::EC2Fleet.SpotOptionsRequest`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-ec2fleet-spotoptionsrequest.html}
 */
export type SpotOptionsRequest = {
  AllocationStrategy?:
    | "lowest-price"
    | "lowestPrice"
    | "diversified"
    | "capacityOptimized"
    | "capacity-optimized"
    | "capacityOptimizedPrioritized"
    | "capacity-optimized-prioritized"
    | "priceCapacityOptimized"
    | "price-capacity-optimized";
  InstanceInterruptionBehavior?: "hibernate" | "stop" | "terminate";
  InstancePoolsToUseCount?: number;
  MaintenanceStrategies?: MaintenanceStrategies;
  MaxTotalPrice?: string;
  MinTargetCapacity?: number;
  SingleAvailabilityZone?: boolean;
  SingleInstanceType?: boolean;
};
/**
 * Type definition for `AWS::EC2::EC2Fleet.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-ec2fleet-tag.html}
 */
export type Tag = {
  Key: string;
  Value: string;
};
/**
 * Type definition for `AWS::EC2::EC2Fleet.TagSpecification`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-ec2fleet-tagspecification.html}
 */
export type TagSpecification = {
  ResourceType?:
    | "client-vpn-endpoint"
    | "customer-gateway"
    | "dedicated-host"
    | "dhcp-options"
    | "egress-only-internet-gateway"
    | "elastic-gpu"
    | "elastic-ip"
    | "export-image-task"
    | "export-instance-task"
    | "fleet"
    | "fpga-image"
    | "host-reservation"
    | "image"
    | "import-image-task"
    | "import-snapshot-task"
    | "instance"
    | "internet-gateway"
    | "key-pair"
    | "launch-template"
    | "local-gateway-route-table-vpc-association"
    | "natgateway"
    | "network-acl"
    | "network-insights-analysis"
    | "network-insights-path"
    | "network-interface"
    | "placement-group"
    | "reserved-instances"
    | "route-table"
    | "security-group"
    | "snapshot"
    | "spot-fleet-request"
    | "spot-instances-request"
    | "subnet"
    | "traffic-mirror-filter"
    | "traffic-mirror-session"
    | "traffic-mirror-target"
    | "transit-gateway"
    | "transit-gateway-attachment"
    | "transit-gateway-connect-peer"
    | "transit-gateway-multicast-domain"
    | "transit-gateway-route-table"
    | "volume"
    | "vpc"
    | "vpc-flow-log"
    | "vpc-peering-connection"
    | "vpn-connection"
    | "vpn-gateway";
  Tags?: Tag[];
};
/**
 * Type definition for `AWS::EC2::EC2Fleet.TargetCapacitySpecificationRequest`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-ec2fleet-targetcapacityspecificationrequest.html}
 */
export type TargetCapacitySpecificationRequest = {
  DefaultTargetCapacityType?: "on-demand" | "spot";
  OnDemandTargetCapacity?: number;
  SpotTargetCapacity?: number;
  TargetCapacityUnitType?: "vcpu" | "memory-mib" | "units";
  TotalTargetCapacity: number;
};
/**
 * Type definition for `AWS::EC2::EC2Fleet.TotalLocalStorageGBRequest`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-ec2fleet-totallocalstoragegbrequest.html}
 */
export type TotalLocalStorageGBRequest = {
  Max?: number;
  Min?: number;
};
/**
 * Type definition for `AWS::EC2::EC2Fleet.VCpuCountRangeRequest`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-ec2fleet-vcpucountrangerequest.html}
 */
export type VCpuCountRangeRequest = {
  Max?: number;
  Min?: number;
};
/**
 * Resource Type definition for AWS::EC2::EC2Fleet
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-ec2fleet.html}
 */
export class EC2EC2Fleet extends $Resource<
  "AWS::EC2::EC2Fleet",
  EC2EC2FleetProperties,
  EC2EC2FleetAttributes
> {
  public static readonly Type = "AWS::EC2::EC2Fleet";
  public static readonly AttributeNames = ["FleetId" as const];
  constructor(
    logicalId: string,
    properties: EC2EC2FleetProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      EC2EC2Fleet.Type,
      properties,
      EC2EC2Fleet.AttributeNames,
      options,
    );
  }
}
