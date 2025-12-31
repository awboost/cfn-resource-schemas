import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::EC2::SpotFleet
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-spotfleet.html}
 */
export type EC2SpotFleetProperties = {
  SpotFleetRequestConfigData: SpotFleetRequestConfigData;
  /**
   * The tags to specify in SpotFleetRequestConfigData
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::EC2::SpotFleet`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-spotfleet.html#aws-resource-ec2-spotfleet-return-values}
 */
export type EC2SpotFleetAttributes = {
  Id: string;
};
/**
 * Type definition for `AWS::EC2::SpotFleet.AcceleratorCountRequest`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-spotfleet-acceleratorcountrequest.html}
 */
export type AcceleratorCountRequest = {
  Max?: number;
  Min?: number;
};
/**
 * Type definition for `AWS::EC2::SpotFleet.AcceleratorTotalMemoryMiBRequest`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-spotfleet-acceleratortotalmemorymibrequest.html}
 */
export type AcceleratorTotalMemoryMiBRequest = {
  Max?: number;
  Min?: number;
};
/**
 * Type definition for `AWS::EC2::SpotFleet.BaselineEbsBandwidthMbpsRequest`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-spotfleet-baselineebsbandwidthmbpsrequest.html}
 */
export type BaselineEbsBandwidthMbpsRequest = {
  Max?: number;
  Min?: number;
};
/**
 * Type definition for `AWS::EC2::SpotFleet.BaselinePerformanceFactorsRequest`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-spotfleet-baselineperformancefactorsrequest.html}
 */
export type BaselinePerformanceFactorsRequest = {
  Cpu?: CpuPerformanceFactorRequest;
};
/**
 * Type definition for `AWS::EC2::SpotFleet.BlockDeviceMapping`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-spotfleet-blockdevicemapping.html}
 */
export type BlockDeviceMapping = {
  DeviceName: string;
  Ebs?: EbsBlockDevice;
  NoDevice?: string;
  VirtualName?: string;
};
/**
 * Type definition for `AWS::EC2::SpotFleet.ClassicLoadBalancer`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-spotfleet-classicloadbalancer.html}
 */
export type ClassicLoadBalancer = {
  Name: string;
};
/**
 * Type definition for `AWS::EC2::SpotFleet.ClassicLoadBalancersConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-spotfleet-classicloadbalancersconfig.html}
 */
export type ClassicLoadBalancersConfig = {
  ClassicLoadBalancers: ClassicLoadBalancer[];
};
/**
 * Type definition for `AWS::EC2::SpotFleet.CpuPerformanceFactorRequest`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-spotfleet-cpuperformancefactorrequest.html}
 */
export type CpuPerformanceFactorRequest = {
  References?: PerformanceFactorReferenceRequest[];
};
/**
 * Type definition for `AWS::EC2::SpotFleet.EbsBlockDevice`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-spotfleet-ebsblockdevice.html}
 */
export type EbsBlockDevice = {
  DeleteOnTermination?: boolean;
  Encrypted?: boolean;
  Iops?: number;
  SnapshotId?: string;
  VolumeSize?: number;
  VolumeType?: "gp2" | "gp3" | "io1" | "io2" | "sc1" | "st1" | "standard";
};
/**
 * Type definition for `AWS::EC2::SpotFleet.FleetLaunchTemplateSpecification`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-spotfleet-fleetlaunchtemplatespecification.html}
 */
export type FleetLaunchTemplateSpecification = {
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
 * Type definition for `AWS::EC2::SpotFleet.GroupIdentifier`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-spotfleet-groupidentifier.html}
 */
export type GroupIdentifier = {
  GroupId: string;
};
/**
 * Type definition for `AWS::EC2::SpotFleet.IamInstanceProfileSpecification`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-spotfleet-iaminstanceprofilespecification.html}
 */
export type IamInstanceProfileSpecification = {
  Arn?: string;
};
/**
 * Type definition for `AWS::EC2::SpotFleet.InstanceIpv6Address`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-spotfleet-instanceipv6address.html}
 */
export type InstanceIpv6Address = {
  Ipv6Address: string;
};
/**
 * Type definition for `AWS::EC2::SpotFleet.InstanceNetworkInterfaceSpecification`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-spotfleet-instancenetworkinterfacespecification.html}
 */
export type InstanceNetworkInterfaceSpecification = {
  AssociatePublicIpAddress?: boolean;
  DeleteOnTermination?: boolean;
  Description?: string;
  DeviceIndex?: number;
  Groups?: string[];
  Ipv6AddressCount?: number;
  Ipv6Addresses?: InstanceIpv6Address[];
  NetworkInterfaceId?: string;
  PrivateIpAddresses?: PrivateIpAddressSpecification[];
  SecondaryPrivateIpAddressCount?: number;
  SubnetId?: string;
};
/**
 * Type definition for `AWS::EC2::SpotFleet.InstanceRequirementsRequest`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-spotfleet-instancerequirementsrequest.html}
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
    | "l4"
    | "gaudi-hl-205"
    | "inferentia2"
    | "trainium"
    | "trainium2"
    | "u30"
  )[];
  AcceleratorTotalMemoryMiB?: AcceleratorTotalMemoryMiBRequest;
  AcceleratorTypes?: ("gpu" | "fpga" | "inference" | "media")[];
  AllowedInstanceTypes?: string[];
  BareMetal?: "included" | "required" | "excluded";
  BaselineEbsBandwidthMbps?: BaselineEbsBandwidthMbpsRequest;
  BaselinePerformanceFactors?: BaselinePerformanceFactorsRequest;
  BurstablePerformance?: "included" | "required" | "excluded";
  CpuManufacturers?: ("intel" | "amd" | "amazon-web-services" | "apple")[];
  ExcludedInstanceTypes?: string[];
  InstanceGenerations?: ("current" | "previous")[];
  LocalStorage?: "included" | "required" | "excluded";
  LocalStorageTypes?: ("hdd" | "ssd")[];
  MaxSpotPriceAsPercentageOfOptimalOnDemandPrice?: number;
  MemoryGiBPerVCpu?: MemoryGiBPerVCpuRequest;
  MemoryMiB?: MemoryMiBRequest;
  NetworkBandwidthGbps?: NetworkBandwidthGbpsRequest;
  NetworkInterfaceCount?: NetworkInterfaceCountRequest;
  OnDemandMaxPricePercentageOverLowestPrice?: number;
  RequireEncryptionInTransit?: boolean;
  RequireHibernateSupport?: boolean;
  SpotMaxPricePercentageOverLowestPrice?: number;
  TotalLocalStorageGB?: TotalLocalStorageGBRequest;
  VCpuCount?: VCpuCountRangeRequest;
};
/**
 * Type definition for `AWS::EC2::SpotFleet.LaunchTemplateConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-spotfleet-launchtemplateconfig.html}
 */
export type LaunchTemplateConfig = {
  LaunchTemplateSpecification?: FleetLaunchTemplateSpecification;
  Overrides?: LaunchTemplateOverrides[];
};
/**
 * Type definition for `AWS::EC2::SpotFleet.LaunchTemplateOverrides`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-spotfleet-launchtemplateoverrides.html}
 */
export type LaunchTemplateOverrides = {
  AvailabilityZone?: string;
  AvailabilityZoneId?: string;
  InstanceRequirements?: InstanceRequirementsRequest;
  InstanceType?: string;
  Priority?: number;
  SpotPrice?: string;
  SubnetId?: string;
  WeightedCapacity?: number;
};
/**
 * Type definition for `AWS::EC2::SpotFleet.LoadBalancersConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-spotfleet-loadbalancersconfig.html}
 */
export type LoadBalancersConfig = {
  ClassicLoadBalancersConfig?: ClassicLoadBalancersConfig;
  TargetGroupsConfig?: TargetGroupsConfig;
};
/**
 * Type definition for `AWS::EC2::SpotFleet.MemoryGiBPerVCpuRequest`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-spotfleet-memorygibpervcpurequest.html}
 */
export type MemoryGiBPerVCpuRequest = {
  Max?: number;
  Min?: number;
};
/**
 * Type definition for `AWS::EC2::SpotFleet.MemoryMiBRequest`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-spotfleet-memorymibrequest.html}
 */
export type MemoryMiBRequest = {
  Max?: number;
  Min?: number;
};
/**
 * Type definition for `AWS::EC2::SpotFleet.NetworkBandwidthGbpsRequest`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-spotfleet-networkbandwidthgbpsrequest.html}
 */
export type NetworkBandwidthGbpsRequest = {
  Max?: number;
  Min?: number;
};
/**
 * Type definition for `AWS::EC2::SpotFleet.NetworkInterfaceCountRequest`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-spotfleet-networkinterfacecountrequest.html}
 */
export type NetworkInterfaceCountRequest = {
  Max?: number;
  Min?: number;
};
/**
 * Type definition for `AWS::EC2::SpotFleet.PerformanceFactorReferenceRequest`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-spotfleet-performancefactorreferencerequest.html}
 */
export type PerformanceFactorReferenceRequest = {
  InstanceFamily?: string;
};
/**
 * Type definition for `AWS::EC2::SpotFleet.PrivateIpAddressSpecification`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-spotfleet-privateipaddressspecification.html}
 */
export type PrivateIpAddressSpecification = {
  Primary?: boolean;
  PrivateIpAddress: string;
};
/**
 * Type definition for `AWS::EC2::SpotFleet.SpotCapacityRebalance`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-spotfleet-spotcapacityrebalance.html}
 */
export type SpotCapacityRebalance = {
  ReplacementStrategy?: "launch" | "launch-before-terminate";
  TerminationDelay?: number;
};
/**
 * Type definition for `AWS::EC2::SpotFleet.SpotFleetLaunchSpecification`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-spotfleet-spotfleetlaunchspecification.html}
 */
export type SpotFleetLaunchSpecification = {
  BlockDeviceMappings?: BlockDeviceMapping[];
  EbsOptimized?: boolean;
  IamInstanceProfile?: IamInstanceProfileSpecification;
  ImageId: string;
  InstanceRequirements?: InstanceRequirementsRequest;
  InstanceType?: string;
  KernelId?: string;
  KeyName?: string;
  Monitoring?: SpotFleetMonitoring;
  NetworkInterfaces?: InstanceNetworkInterfaceSpecification[];
  Placement?: SpotPlacement;
  RamdiskId?: string;
  SecurityGroups?: GroupIdentifier[];
  SpotPrice?: string;
  SubnetId?: string;
  TagSpecifications?: SpotFleetTagSpecification[];
  UserData?: string;
  WeightedCapacity?: number;
};
/**
 * Type definition for `AWS::EC2::SpotFleet.SpotFleetMonitoring`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-spotfleet-spotfleetmonitoring.html}
 */
export type SpotFleetMonitoring = {
  Enabled?: boolean;
};
/**
 * Type definition for `AWS::EC2::SpotFleet.SpotFleetRequestConfigData`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-spotfleet-spotfleetrequestconfigdata.html}
 */
export type SpotFleetRequestConfigData = {
  AllocationStrategy?:
    | "capacityOptimized"
    | "capacityOptimizedPrioritized"
    | "diversified"
    | "lowestPrice"
    | "priceCapacityOptimized";
  Context?: string;
  ExcessCapacityTerminationPolicy?:
    | "Default"
    | "NoTermination"
    | "default"
    | "noTermination";
  IamFleetRole: string;
  InstanceInterruptionBehavior?: "hibernate" | "stop" | "terminate";
  InstancePoolsToUseCount?: number;
  LaunchSpecifications?: SpotFleetLaunchSpecification[];
  LaunchTemplateConfigs?: LaunchTemplateConfig[];
  LoadBalancersConfig?: LoadBalancersConfig;
  OnDemandAllocationStrategy?: string;
  OnDemandMaxTotalPrice?: string;
  OnDemandTargetCapacity?: number;
  ReplaceUnhealthyInstances?: boolean;
  SpotMaintenanceStrategies?: SpotMaintenanceStrategies;
  SpotMaxTotalPrice?: string;
  SpotPrice?: string;
  TagSpecifications?: SpotFleetTagSpecification[];
  TargetCapacity: number;
  TargetCapacityUnitType?: "vcpu" | "memory-mib" | "units";
  TerminateInstancesWithExpiration?: boolean;
  Type?: "maintain" | "request";
  ValidFrom?: string;
  ValidUntil?: string;
};
/**
 * Type definition for `AWS::EC2::SpotFleet.SpotFleetTagSpecification`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-spotfleet-spotfleettagspecification.html}
 */
export type SpotFleetTagSpecification = {
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
 * Type definition for `AWS::EC2::SpotFleet.SpotMaintenanceStrategies`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-spotfleet-spotmaintenancestrategies.html}
 */
export type SpotMaintenanceStrategies = {
  CapacityRebalance?: SpotCapacityRebalance;
};
/**
 * Type definition for `AWS::EC2::SpotFleet.SpotPlacement`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-spotfleet-spotplacement.html}
 */
export type SpotPlacement = {
  AvailabilityZone?: string;
  AvailabilityZoneId?: string;
  GroupName?: string;
  Tenancy?: "dedicated" | "default" | "host";
};
/**
 * Type definition for `AWS::EC2::SpotFleet.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-spotfleet-tag.html}
 */
export type Tag = {
  Key: string;
  Value: string;
};
/**
 * Type definition for `AWS::EC2::SpotFleet.TargetGroup`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-spotfleet-targetgroup.html}
 */
export type TargetGroup = {
  Arn: string;
};
/**
 * Type definition for `AWS::EC2::SpotFleet.TargetGroupsConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-spotfleet-targetgroupsconfig.html}
 */
export type TargetGroupsConfig = {
  TargetGroups: TargetGroup[];
};
/**
 * Type definition for `AWS::EC2::SpotFleet.TotalLocalStorageGBRequest`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-spotfleet-totallocalstoragegbrequest.html}
 */
export type TotalLocalStorageGBRequest = {
  Max?: number;
  Min?: number;
};
/**
 * Type definition for `AWS::EC2::SpotFleet.VCpuCountRangeRequest`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-spotfleet-vcpucountrangerequest.html}
 */
export type VCpuCountRangeRequest = {
  Max?: number;
  Min?: number;
};
/**
 * Resource Type definition for AWS::EC2::SpotFleet
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-spotfleet.html}
 */
export class EC2SpotFleet extends $Resource<
  "AWS::EC2::SpotFleet",
  EC2SpotFleetProperties,
  EC2SpotFleetAttributes
> {
  public static readonly Type = "AWS::EC2::SpotFleet";
  constructor(
    logicalId: string,
    properties: EC2SpotFleetProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, EC2SpotFleet.Type, properties, options);
  }
}
