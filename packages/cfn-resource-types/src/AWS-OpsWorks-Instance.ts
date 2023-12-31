import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource Type definition for AWS::OpsWorks::Instance
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworks-instance.html}
 */
export type OpsWorksInstanceProperties = {
  AgentVersion?: string;
  AmiId?: string;
  Architecture?: string;
  AutoScalingType?: string;
  AvailabilityZone?: string;
  BlockDeviceMappings?: BlockDeviceMapping[];
  EbsOptimized?: boolean;
  ElasticIps?: string[];
  Hostname?: string;
  InstallUpdatesOnBoot?: boolean;
  InstanceType: string;
  LayerIds: string[];
  Os?: string;
  RootDeviceType?: string;
  SshKeyName?: string;
  StackId: string;
  SubnetId?: string;
  Tenancy?: string;
  TimeBasedAutoScaling?: TimeBasedAutoScaling;
  VirtualizationType?: string;
  Volumes?: string[];
};
/**
 * Attribute type definition for `AWS::OpsWorks::Instance`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworks-instance.html#aws-resource-opsworks-instance-return-values}
 */
export type OpsWorksInstanceAttributes = {
  Id: string;
  PrivateDnsName: string;
  PrivateIp: string;
  PublicDnsName: string;
  PublicIp: string;
};
/**
 * Type definition for `AWS::OpsWorks::Instance.BlockDeviceMapping`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opsworks-instance-blockdevicemapping.html}
 */
export type BlockDeviceMapping = {
  DeviceName?: string;
  Ebs?: EbsBlockDevice;
  NoDevice?: string;
  VirtualName?: string;
};
/**
 * Type definition for `AWS::OpsWorks::Instance.EbsBlockDevice`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opsworks-instance-ebsblockdevice.html}
 */
export type EbsBlockDevice = {
  DeleteOnTermination?: boolean;
  Iops?: number;
  SnapshotId?: string;
  VolumeSize?: number;
  VolumeType?: string;
};
/**
 * Type definition for `AWS::OpsWorks::Instance.TimeBasedAutoScaling`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opsworks-instance-timebasedautoscaling.html}
 */
export type TimeBasedAutoScaling = {
  Friday?: Record<string, string>;
  Monday?: Record<string, string>;
  Saturday?: Record<string, string>;
  Sunday?: Record<string, string>;
  Thursday?: Record<string, string>;
  Tuesday?: Record<string, string>;
  Wednesday?: Record<string, string>;
};
/**
 * Resource Type definition for AWS::OpsWorks::Instance
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworks-instance.html}
 */
export class OpsWorksInstance extends $Resource<
  "AWS::OpsWorks::Instance",
  OpsWorksInstanceProperties,
  OpsWorksInstanceAttributes
> {
  public static readonly Type = "AWS::OpsWorks::Instance";
  public static readonly AttributeNames = [
    "Id" as const,
    "PrivateDnsName" as const,
    "PrivateIp" as const,
    "PublicDnsName" as const,
    "PublicIp" as const,
  ];
  constructor(
    logicalId: string,
    properties: OpsWorksInstanceProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      OpsWorksInstance.Type,
      properties,
      OpsWorksInstance.AttributeNames,
      options,
    );
  }
}
