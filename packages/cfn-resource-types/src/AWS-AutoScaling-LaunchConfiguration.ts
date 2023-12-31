import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * The AWS::AutoScaling::LaunchConfiguration resource specifies the launch configuration that can be used by an Auto Scaling group to configure Amazon EC2 instances.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-autoscaling-launchconfiguration.html}
 */
export type AutoScalingLaunchConfigurationProperties = {
  /**
   * For Auto Scaling groups that are running in a virtual private cloud (VPC), specifies whether to assign a public IP address to the group's instances.
   */
  AssociatePublicIpAddress?: boolean;
  /**
   * Specifies how block devices are exposed to the instance. You can specify virtual devices and EBS volumes.
   */
  BlockDeviceMappings?: BlockDeviceMapping[];
  /**
   * The ID of a ClassicLink-enabled VPC to link your EC2-Classic instances to.
   */
  ClassicLinkVPCId?: string;
  /**
   * The IDs of one or more security groups for the VPC that you specified in the ClassicLinkVPCId property.
   */
  ClassicLinkVPCSecurityGroups?: string[];
  /**
   * Specifies whether the launch configuration is optimized for EBS I/O (true) or not (false).
   */
  EbsOptimized?: boolean;
  /**
   * Provides the name or the Amazon Resource Name (ARN) of the instance profile associated with the IAM role for the instance. The instance profile contains the IAM role.
   */
  IamInstanceProfile?: string;
  /**
   * Provides the unique ID of the Amazon Machine Image (AMI) that was assigned during registration.
   */
  ImageId: string;
  /**
   * The ID of the Amazon EC2 instance you want to use to create the launch configuration.
   */
  InstanceId?: string;
  /**
   * Controls whether instances in this group are launched with detailed (true) or basic (false) monitoring.
   */
  InstanceMonitoring?: boolean;
  /**
   * Specifies the instance type of the EC2 instance.
   */
  InstanceType: string;
  /**
   * Provides the ID of the kernel associated with the EC2 AMI.
   */
  KernelId?: string;
  /**
   * Provides the name of the EC2 key pair.
   */
  KeyName?: string;
  /**
   * The name of the launch configuration. This name must be unique per Region per account.
   * @minLength `1`
   * @maxLength `255`
   */
  LaunchConfigurationName?: string;
  /**
   * The metadata options for the instances.
   */
  MetadataOptions?: MetadataOptions;
  /**
   * The tenancy of the instance, either default or dedicated.
   */
  PlacementTenancy?: string;
  /**
   * The ID of the RAM disk to select.
   */
  RamDiskId?: string;
  /**
   * A list that contains the security groups to assign to the instances in the Auto Scaling group.
   */
  SecurityGroups?: string[];
  /**
   * The maximum hourly price you are willing to pay for any Spot Instances launched to fulfill the request.
   */
  SpotPrice?: string;
  /**
   * The Base64-encoded user data to make available to the launched EC2 instances.
   * @maxLength `21847`
   */
  UserData?: string;
};
/**
 * Type definition for `AWS::AutoScaling::LaunchConfiguration.BlockDevice`.
 * BlockDevice is a subproperty of BlockDeviceMapping that describes an Amazon EBS volume.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-autoscaling-launchconfiguration-blockdevice.html}
 */
export type BlockDevice = {
  /**
   * Indicates whether the volume is deleted on instance termination.
   */
  DeleteOnTermination?: boolean;
  /**
   * Specifies whether the volume should be encrypted.
   */
  Encrypted?: boolean;
  /**
   * The number of input/output (I/O) operations per second (IOPS) to provision for the volume.
   */
  Iops?: number;
  /**
   * The snapshot ID of the volume to use.
   */
  SnapshotId?: string;
  /**
   * The throughput (MiBps) to provision for a gp3 volume.
   */
  Throughput?: number;
  /**
   * The volume size, in GiBs.
   */
  VolumeSize?: number;
  /**
   * The volume type.
   */
  VolumeType?: string;
};
/**
 * Type definition for `AWS::AutoScaling::LaunchConfiguration.BlockDeviceMapping`.
 * BlockDeviceMapping is a property of AWS::AutoScaling::LaunchConfiguration that describes a block device mapping for an Auto Scaling group.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-autoscaling-launchconfiguration-blockdevicemapping.html}
 */
export type BlockDeviceMapping = {
  /**
   * The device name exposed to the EC2 instance (for example, /dev/sdh or xvdh).
   */
  DeviceName: string;
  /**
   * Parameters used to automatically set up EBS volumes when an instance is launched.
   */
  Ebs?: BlockDevice;
  /**
   * Setting this value to true suppresses the specified device included in the block device mapping of the AMI.
   */
  NoDevice?: boolean;
  /**
   * The name of the virtual device.
   */
  VirtualName?: string;
};
/**
 * Type definition for `AWS::AutoScaling::LaunchConfiguration.MetadataOptions`.
 * MetadataOptions is a property of AWS::AutoScaling::LaunchConfiguration that describes metadata options for the instances.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-autoscaling-launchconfiguration-metadataoptions.html}
 */
export type MetadataOptions = {
  /**
   * This parameter enables or disables the HTTP metadata endpoint on your instances.
   */
  HttpEndpoint?: string;
  /**
   * The desired HTTP PUT response hop limit for instance metadata requests.
   */
  HttpPutResponseHopLimit?: number;
  /**
   * The state of token usage for your instance metadata requests.
   */
  HttpTokens?: string;
};
/**
 * The AWS::AutoScaling::LaunchConfiguration resource specifies the launch configuration that can be used by an Auto Scaling group to configure Amazon EC2 instances.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-autoscaling-launchconfiguration.html}
 */
export class AutoScalingLaunchConfiguration extends $Resource<
  "AWS::AutoScaling::LaunchConfiguration",
  AutoScalingLaunchConfigurationProperties,
  Record<string, never>
> {
  public static readonly Type = "AWS::AutoScaling::LaunchConfiguration";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: AutoScalingLaunchConfigurationProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      AutoScalingLaunchConfiguration.Type,
      properties,
      AutoScalingLaunchConfiguration.AttributeNames,
      options,
    );
  }
}
