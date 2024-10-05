import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::EMR::InstanceFleetConfig
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emr-instancefleetconfig.html}
 */
export type EMRInstanceFleetConfigProperties = {
  ClusterId: string;
  InstanceFleetType: string;
  InstanceTypeConfigs?: InstanceTypeConfig[];
  LaunchSpecifications?: InstanceFleetProvisioningSpecifications;
  Name?: string;
  ResizeSpecifications?: InstanceFleetResizingSpecifications;
  TargetOnDemandCapacity?: number;
  TargetSpotCapacity?: number;
};
/**
 * Attribute type definition for `AWS::EMR::InstanceFleetConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emr-instancefleetconfig.html#aws-resource-emr-instancefleetconfig-return-values}
 */
export type EMRInstanceFleetConfigAttributes = {
  Id: string;
};
/**
 * Type definition for `AWS::EMR::InstanceFleetConfig.Configuration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-instancefleetconfig-configuration.html}
 */
export type Configuration = {
  Classification?: string;
  ConfigurationProperties?: Record<string, string>;
  Configurations?: Configuration[];
};
/**
 * Type definition for `AWS::EMR::InstanceFleetConfig.EbsBlockDeviceConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-instancefleetconfig-ebsblockdeviceconfig.html}
 */
export type EbsBlockDeviceConfig = {
  VolumeSpecification: VolumeSpecification;
  VolumesPerInstance?: number;
};
/**
 * Type definition for `AWS::EMR::InstanceFleetConfig.EbsConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-instancefleetconfig-ebsconfiguration.html}
 */
export type EbsConfiguration = {
  EbsBlockDeviceConfigs?: EbsBlockDeviceConfig[];
  EbsOptimized?: boolean;
};
/**
 * Type definition for `AWS::EMR::InstanceFleetConfig.InstanceFleetProvisioningSpecifications`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-instancefleetconfig-instancefleetprovisioningspecifications.html}
 */
export type InstanceFleetProvisioningSpecifications = {
  OnDemandSpecification?: OnDemandProvisioningSpecification;
  SpotSpecification?: SpotProvisioningSpecification;
};
/**
 * Type definition for `AWS::EMR::InstanceFleetConfig.InstanceFleetResizingSpecifications`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-instancefleetconfig-instancefleetresizingspecifications.html}
 */
export type InstanceFleetResizingSpecifications = {
  OnDemandResizeSpecification?: OnDemandResizingSpecification;
  SpotResizeSpecification?: SpotResizingSpecification;
};
/**
 * Type definition for `AWS::EMR::InstanceFleetConfig.InstanceTypeConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-instancefleetconfig-instancetypeconfig.html}
 */
export type InstanceTypeConfig = {
  BidPrice?: string;
  BidPriceAsPercentageOfOnDemandPrice?: number;
  Configurations?: Configuration[];
  CustomAmiId?: string;
  EbsConfiguration?: EbsConfiguration;
  InstanceType: string;
  Priority?: number;
  WeightedCapacity?: number;
};
/**
 * Type definition for `AWS::EMR::InstanceFleetConfig.OnDemandCapacityReservationOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-instancefleetconfig-ondemandcapacityreservationoptions.html}
 */
export type OnDemandCapacityReservationOptions = {
  CapacityReservationPreference?: string;
  CapacityReservationResourceGroupArn?: string;
  UsageStrategy?: string;
};
/**
 * Type definition for `AWS::EMR::InstanceFleetConfig.OnDemandProvisioningSpecification`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-instancefleetconfig-ondemandprovisioningspecification.html}
 */
export type OnDemandProvisioningSpecification = {
  AllocationStrategy: string;
  CapacityReservationOptions?: OnDemandCapacityReservationOptions;
};
/**
 * Type definition for `AWS::EMR::InstanceFleetConfig.OnDemandResizingSpecification`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-instancefleetconfig-ondemandresizingspecification.html}
 */
export type OnDemandResizingSpecification = {
  AllocationStrategy?: string;
  CapacityReservationOptions?: OnDemandCapacityReservationOptions;
  TimeoutDurationMinutes?: number;
};
/**
 * Type definition for `AWS::EMR::InstanceFleetConfig.SpotProvisioningSpecification`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-instancefleetconfig-spotprovisioningspecification.html}
 */
export type SpotProvisioningSpecification = {
  AllocationStrategy?: string;
  BlockDurationMinutes?: number;
  TimeoutAction: string;
  TimeoutDurationMinutes: number;
};
/**
 * Type definition for `AWS::EMR::InstanceFleetConfig.SpotResizingSpecification`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-instancefleetconfig-spotresizingspecification.html}
 */
export type SpotResizingSpecification = {
  AllocationStrategy?: string;
  TimeoutDurationMinutes?: number;
};
/**
 * Type definition for `AWS::EMR::InstanceFleetConfig.VolumeSpecification`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-instancefleetconfig-volumespecification.html}
 */
export type VolumeSpecification = {
  Iops?: number;
  SizeInGB: number;
  Throughput?: number;
  VolumeType: string;
};
/**
 * Resource Type definition for AWS::EMR::InstanceFleetConfig
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emr-instancefleetconfig.html}
 */
export class EMRInstanceFleetConfig extends $Resource<
  "AWS::EMR::InstanceFleetConfig",
  EMRInstanceFleetConfigProperties,
  EMRInstanceFleetConfigAttributes
> {
  public static readonly Type = "AWS::EMR::InstanceFleetConfig";
  constructor(
    logicalId: string,
    properties: EMRInstanceFleetConfigProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, EMRInstanceFleetConfig.Type, properties, options);
  }
}
