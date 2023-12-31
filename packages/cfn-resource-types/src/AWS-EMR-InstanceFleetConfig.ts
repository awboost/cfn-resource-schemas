import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
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
  WeightedCapacity?: number;
};
/**
 * Type definition for `AWS::EMR::InstanceFleetConfig.OnDemandProvisioningSpecification`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-instancefleetconfig-ondemandprovisioningspecification.html}
 */
export type OnDemandProvisioningSpecification = {
  AllocationStrategy: string;
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
