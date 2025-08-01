import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::EC2::LaunchTemplate`.
 * Specifies the properties for creating a launch template.
 The minimum required properties for specifying a launch template are as follows:
  +  You must specify at least one property for the launch template data.
  +  You can optionally specify a name for the launch template. If you do not specify a name, CFN creates a name for you.
  
 A launch template can contain some or all of the configuration information to launch an instance. When you launch an instance using a launch template, instance properties that are not specified in the launch template use default values, except the ``ImageId`` property, which has no default value. If you do not specify an AMI ID for the launch template ``ImageId`` property, you must specify an AMI ID for the instance ``ImageId`` property.
 For more information, see [Launch an instance from a launch template](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-launch-templates.html) in the *Amazon EC2 User Guide*.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-launchtemplate.html}
 */
export type EC2LaunchTemplateProperties = {
  /**
   * The information for the launch template.
   */
  LaunchTemplateData: LaunchTemplateData;
  /**
   * A name for the launch template.
   */
  LaunchTemplateName?: string;
  /**
     * The tags to apply to the launch template on creation. To tag the launch template, the resource type must be ``launch-template``.
     To specify the tags for resources that are created during instance launch, use [TagSpecifications](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-launchtemplate-launchtemplatedata.html#cfn-ec2-launchtemplate-launchtemplatedata-tagspecifications).
     */
  TagSpecifications?: LaunchTemplateTagSpecification[];
  /**
   * A description for the first version of the launch template.
   */
  VersionDescription?: string;
};
/**
 * Attribute type definition for `AWS::EC2::LaunchTemplate`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-launchtemplate.html#aws-resource-ec2-launchtemplate-return-values}
 */
export type EC2LaunchTemplateAttributes = {
  DefaultVersionNumber: string;
  LatestVersionNumber: string;
  LaunchTemplateId: string;
};
/**
 * Type definition for `AWS::EC2::LaunchTemplate.AcceleratorCount`.
 * The minimum and maximum number of accelerators (GPUs, FPGAs, or AWS Inferentia chips) on an instance.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-launchtemplate-acceleratorcount.html}
 */
export type AcceleratorCount = {
  /**
   * The maximum number of accelerators. To specify no maximum limit, omit this parameter. To exclude accelerator-enabled instance types, set ``Max`` to ``0``.
   */
  Max?: number;
  /**
   * The minimum number of accelerators. To specify no minimum limit, omit this parameter.
   */
  Min?: number;
};
/**
 * Type definition for `AWS::EC2::LaunchTemplate.AcceleratorTotalMemoryMiB`.
 * The minimum and maximum amount of total accelerator memory, in MiB.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-launchtemplate-acceleratortotalmemorymib.html}
 */
export type AcceleratorTotalMemoryMiB = {
  /**
   * The maximum amount of accelerator memory, in MiB. To specify no maximum limit, omit this parameter.
   */
  Max?: number;
  /**
   * The minimum amount of accelerator memory, in MiB. To specify no minimum limit, omit this parameter.
   */
  Min?: number;
};
/**
 * Type definition for `AWS::EC2::LaunchTemplate.BaselineEbsBandwidthMbps`.
 * The minimum and maximum baseline bandwidth to Amazon EBS, in Mbps. For more information, see [Amazon EBS–optimized instances](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-optimized.html) in the *Amazon EC2 User Guide*.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-launchtemplate-baselineebsbandwidthmbps.html}
 */
export type BaselineEbsBandwidthMbps = {
  /**
   * The maximum baseline bandwidth, in Mbps. To specify no maximum limit, omit this parameter.
   */
  Max?: number;
  /**
   * The minimum baseline bandwidth, in Mbps. To specify no minimum limit, omit this parameter.
   */
  Min?: number;
};
/**
 * Type definition for `AWS::EC2::LaunchTemplate.BaselinePerformanceFactors`.
 * The baseline performance to consider, using an instance family as a baseline reference. The instance family establishes the lowest acceptable level of performance. Amazon EC2 uses this baseline to guide instance type selection, but there is no guarantee that the selected instance types will always exceed the baseline for every application.
 Currently, this parameter only supports CPU performance as a baseline performance factor. For example, specifying ``c6i`` would use the CPU performance of the ``c6i`` family as the baseline reference.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-launchtemplate-baselineperformancefactors.html}
 */
export type BaselinePerformanceFactors = {
  /**
   * The CPU performance to consider, using an instance family as the baseline reference.
   */
  Cpu?: Cpu;
};
/**
 * Type definition for `AWS::EC2::LaunchTemplate.BlockDeviceMapping`.
 * Specifies a block device mapping for a launch template. You must specify ``DeviceName`` plus exactly one of the following properties: ``Ebs``, ``NoDevice``, or ``VirtualName``.
 ``BlockDeviceMapping`` is a property of [AWS::EC2::LaunchTemplate LaunchTemplateData](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-launchtemplate-launchtemplatedata.html).
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-launchtemplate-blockdevicemapping.html}
 */
export type BlockDeviceMapping = {
  /**
   * The device name (for example, /dev/sdh or xvdh).
   */
  DeviceName?: string;
  /**
   * Parameters used to automatically set up EBS volumes when the instance is launched.
   */
  Ebs?: Ebs;
  /**
   * To omit the device from the block device mapping, specify an empty string.
   */
  NoDevice?: string;
  /**
   * The virtual device name (ephemeralN). Instance store volumes are numbered starting from 0. An instance type with 2 available instance store volumes can specify mappings for ephemeral0 and ephemeral1. The number of available instance store volumes depends on the instance type. After you connect to the instance, you must mount the volume.
   */
  VirtualName?: string;
};
/**
 * Type definition for `AWS::EC2::LaunchTemplate.CapacityReservationSpecification`.
 * Specifies an instance's Capacity Reservation targeting option. You can specify only one option at a time.
 ``CapacityReservationSpecification`` is a property of [AWS::EC2::LaunchTemplate LaunchTemplateData](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-launchtemplate-launchtemplatedata.html).
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-launchtemplate-capacityreservationspecification.html}
 */
export type CapacityReservationSpecification = {
  /**
     * Indicates the instance's Capacity Reservation preferences. Possible preferences include:
      +  ``capacity-reservations-only`` - The instance will only run in a Capacity Reservation or Capacity Reservation group. If capacity isn't available, the instance will fail to launch.
      +  ``open`` - The instance can run in any ``open`` Capacity Reservation that has matching attributes (instance type, platform, Availability Zone, tenancy).
      +  ``none`` - The instance avoids running in a Capacity Reservation even if one is available. The instance runs in On-Demand capacity.
     */
  CapacityReservationPreference?: string;
  /**
   * Information about the target Capacity Reservation or Capacity Reservation group.
   */
  CapacityReservationTarget?: CapacityReservationTarget;
};
/**
 * Type definition for `AWS::EC2::LaunchTemplate.CapacityReservationTarget`.
 * Specifies a target Capacity Reservation.
 ``CapacityReservationTarget`` is a property of the [Amazon EC2 LaunchTemplate LaunchTemplateData](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-launchtemplate-launchtemplatedata.html) property type.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-launchtemplate-capacityreservationtarget.html}
 */
export type CapacityReservationTarget = {
  /**
   * The ID of the Capacity Reservation in which to run the instance.
   */
  CapacityReservationId?: string;
  /**
   * The ARN of the Capacity Reservation resource group in which to run the instance.
   */
  CapacityReservationResourceGroupArn?: string;
};
/**
 * Type definition for `AWS::EC2::LaunchTemplate.ConnectionTrackingSpecification`.
 * A security group connection tracking specification that enables you to set the idle timeout for connection tracking on an Elastic network interface. For more information, see [Connection tracking timeouts](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/security-group-connection-tracking.html#connection-tracking-timeouts) in the *Amazon EC2 User Guide*.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-launchtemplate-connectiontrackingspecification.html}
 */
export type ConnectionTrackingSpecification = {
  /**
   * Timeout (in seconds) for idle TCP connections in an established state. Min: 60 seconds. Max: 432000 seconds (5 days). Default: 432000 seconds. Recommended: Less than 432000 seconds.
   */
  TcpEstablishedTimeout?: number;
  /**
   * Timeout (in seconds) for idle UDP flows classified as streams which have seen more than one request-response transaction. Min: 60 seconds. Max: 180 seconds (3 minutes). Default: 180 seconds.
   */
  UdpStreamTimeout?: number;
  /**
   * Timeout (in seconds) for idle UDP flows that have seen traffic only in a single direction or a single request-response transaction. Min: 30 seconds. Max: 60 seconds. Default: 30 seconds.
   */
  UdpTimeout?: number;
};
/**
 * Type definition for `AWS::EC2::LaunchTemplate.Cpu`.
 * Specifies the CPU performance to consider when using an instance family as the baseline reference.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-launchtemplate-cpu.html}
 */
export type Cpu = {
  /**
   * The instance family to use as the baseline reference for CPU performance. All instance types that match your specified attributes are compared against the CPU performance of the referenced instance family, regardless of CPU manufacturer or architecture differences.
   */
  References?: Reference[];
};
/**
 * Type definition for `AWS::EC2::LaunchTemplate.CpuOptions`.
 * Specifies the CPU options for an instance. For more information, see [Optimize CPU options](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-optimize-cpu.html) in the *User Guide*.
 ``CpuOptions`` is a property of [AWS::EC2::LaunchTemplate LaunchTemplateData](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-launchtemplate-launchtemplatedata.html).
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-launchtemplate-cpuoptions.html}
 */
export type CpuOptions = {
  /**
   * Indicates whether to enable the instance for AMD SEV-SNP. AMD SEV-SNP is supported with M6a, R6a, and C6a instance types only. For more information, see [AMD SEV-SNP for Amazon EC2 instances](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/sev-snp.html).
   */
  AmdSevSnp?: "enabled" | "disabled";
  /**
   * The number of CPU cores for the instance.
   */
  CoreCount?: number;
  /**
   * The number of threads per CPU core. To disable multithreading for the instance, specify a value of ``1``. Otherwise, specify the default value of ``2``.
   */
  ThreadsPerCore?: number;
};
/**
 * Type definition for `AWS::EC2::LaunchTemplate.CreditSpecification`.
 * Specifies the credit option for CPU usage of a T2, T3, or T3a instance.
 ``CreditSpecification`` is a property of [AWS::EC2::LaunchTemplate LaunchTemplateData](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-launchtemplate-launchtemplatedata.html).
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-launchtemplate-creditspecification.html}
 */
export type CreditSpecification = {
  /**
     * The credit option for CPU usage of a T instance.
     Valid values: ``standard`` | ``unlimited``
     */
  CpuCredits?: string;
};
/**
 * Type definition for `AWS::EC2::LaunchTemplate.Ebs`.
 * Parameters for a block device for an EBS volume in an Amazon EC2 launch template.
 ``Ebs`` is a property of [AWS::EC2::LaunchTemplate BlockDeviceMapping](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-launchtemplate-blockdevicemapping.html).
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-launchtemplate-ebs.html}
 */
export type Ebs = {
  /**
   * Indicates whether the EBS volume is deleted on instance termination.
   */
  DeleteOnTermination?: boolean;
  /**
   * Indicates whether the EBS volume is encrypted. Encrypted volumes can only be attached to instances that support Amazon EBS encryption. If you are creating a volume from a snapshot, you can't specify an encryption value.
   */
  Encrypted?: boolean;
  /**
     * The number of I/O operations per second (IOPS). For ``gp3``, ``io1``, and ``io2`` volumes, this represents the number of IOPS that are provisioned for the volume. For ``gp2`` volumes, this represents the baseline performance of the volume and the rate at which the volume accumulates I/O credits for bursting.
     The following are the supported values for each volume type:
      +  ``gp3``: 3,000 - 16,000 IOPS
      +  ``io1``: 100 - 64,000 IOPS
      +  ``io2``: 100 - 256,000 IOPS
      
     For ``io2`` volumes, you can achieve up to 256,000 IOPS on [instances built on the Nitro System](https://docs.aws.amazon.com/ec2/latest/instancetypes/ec2-nitro-instances.html). On other instances, you can achieve performance up to 32,000 IOPS.
     This parameter is supported for ``io1``, ``io2``, and ``gp3`` volumes only.
     */
  Iops?: number;
  /**
   * Identifier (key ID, key alias, key ARN, or alias ARN) of the customer managed KMS key to use for EBS encryption.
   */
  KmsKeyId?: string;
  /**
   * The ID of the snapshot.
   */
  SnapshotId?: string;
  /**
     * The throughput to provision for a ``gp3`` volume, with a maximum of 1,000 MiB/s.
     Valid Range: Minimum value of 125. Maximum value of 1000.
     */
  Throughput?: number;
  /**
     * Specifies the Amazon EBS Provisioned Rate for Volume Initialization (volume initialization rate), in MiB/s, at which to download the snapshot blocks from Amazon S3 to the volume. This is also known as *volume initialization*. Specifying a volume initialization rate ensures that the volume is initialized at a predictable and consistent rate after creation.
     This parameter is supported only for volumes created from snapshots. Omit this parameter if:
      +  You want to create the volume using fast snapshot restore. You must specify a snapshot that is enabled for fast snapshot restore. In this case, the volume is fully initialized at creation.
      If you specify a snapshot that is enabled for fast snapshot restore and a volume initialization rate, the volume will be initialized at the specified rate instead of fast snapshot restore.
       +  You want to create a volume that is initialized at the default rate.
      
     For more information, see [Initialize Amazon EBS volumes](https://docs.aws.amazon.com/ebs/latest/userguide/initalize-volume.html) in the *Amazon EC2 User Guide*.
     Valid range: 100 - 300 MiB/s
     */
  VolumeInitializationRate?: number;
  /**
     * The size of the volume, in GiBs. You must specify either a snapshot ID or a volume size. The following are the supported volumes sizes for each volume type:
      +  ``gp2`` and ``gp3``: 1 - 16,384 GiB
      +  ``io1``: 4 - 16,384 GiB
      +  ``io2``: 4 - 65,536 GiB
      +  ``st1`` and ``sc1``: 125 - 16,384 GiB
      +  ``standard``: 1 - 1024 GiB
     */
  VolumeSize?: number;
  /**
   * The volume type. For more information, see [Amazon EBS volume types](https://docs.aws.amazon.com/ebs/latest/userguide/ebs-volume-types.html) in the *Amazon EBS User Guide*.
   */
  VolumeType?: string;
};
/**
 * Type definition for `AWS::EC2::LaunchTemplate.ElasticGpuSpecification`.
 * Amazon Elastic Graphics reached end of life on January 8, 2024.
  Specifies a specification for an Elastic GPU for an Amazon EC2 launch template.
 ``ElasticGpuSpecification`` is a property of [AWS::EC2::LaunchTemplate LaunchTemplateData](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-launchtemplate-launchtemplatedata.html).
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-launchtemplate-elasticgpuspecification.html}
 */
export type ElasticGpuSpecification = {
  /**
   * The type of Elastic Graphics accelerator.
   */
  Type?: string;
};
/**
 * Type definition for `AWS::EC2::LaunchTemplate.EnaSrdSpecification`.
 * ENA Express uses AWS Scalable Reliable Datagram (SRD) technology to increase the maximum bandwidth used per stream and minimize tail latency of network traffic between EC2 instances. With ENA Express, you can communicate between two EC2 instances in the same subnet within the same account, or in different accounts. Both sending and receiving instances must have ENA Express enabled.
 To improve the reliability of network packet delivery, ENA Express reorders network packets on the receiving end by default. However, some UDP-based applications are designed to handle network packets that are out of order to reduce the overhead for packet delivery at the network layer. When ENA Express is enabled, you can specify whether UDP network traffic uses it.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-launchtemplate-enasrdspecification.html}
 */
export type EnaSrdSpecification = {
  /**
   * Indicates whether ENA Express is enabled for the network interface.
   */
  EnaSrdEnabled?: boolean;
  /**
   * Configures ENA Express for UDP network traffic.
   */
  EnaSrdUdpSpecification?: EnaSrdUdpSpecification;
};
/**
 * Type definition for `AWS::EC2::LaunchTemplate.EnaSrdUdpSpecification`.
 * ENA Express is compatible with both TCP and UDP transport protocols. When it's enabled, TCP traffic automatically uses it. However, some UDP-based applications are designed to handle network packets that are out of order, without a need for retransmission, such as live video broadcasting or other near-real-time applications. For UDP traffic, you can specify whether to use ENA Express, based on your application environment needs.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-launchtemplate-enasrdudpspecification.html}
 */
export type EnaSrdUdpSpecification = {
  /**
   * Indicates whether UDP traffic to and from the instance uses ENA Express. To specify this setting, you must first enable ENA Express.
   */
  EnaSrdUdpEnabled?: boolean;
};
/**
 * Type definition for `AWS::EC2::LaunchTemplate.EnclaveOptions`.
 * Indicates whether the instance is enabled for AWS Nitro Enclaves.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-launchtemplate-enclaveoptions.html}
 */
export type EnclaveOptions = {
  /**
   * If this parameter is set to ``true``, the instance is enabled for AWS Nitro Enclaves; otherwise, it is not enabled for AWS Nitro Enclaves.
   */
  Enabled?: boolean;
};
/**
 * Type definition for `AWS::EC2::LaunchTemplate.HibernationOptions`.
 * Specifies whether your instance is configured for hibernation. This parameter is valid only if the instance meets the [hibernation prerequisites](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Hibernate.html#hibernating-prerequisites). For more information, see [Hibernate Your Instance](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Hibernate.html) in the *Amazon EC2 User Guide*.
 ``HibernationOptions`` is a property of [AWS::EC2::LaunchTemplate LaunchTemplateData](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-launchtemplate-launchtemplatedata.html).
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-launchtemplate-hibernationoptions.html}
 */
export type HibernationOptions = {
  /**
     * If you set this parameter to ``true``, the instance is enabled for hibernation.
     Default: ``false``
     */
  Configured?: boolean;
};
/**
 * Type definition for `AWS::EC2::LaunchTemplate.IamInstanceProfile`.
 * Specifies an IAM instance profile, which is a container for an IAM role for your instance. You can use an IAM role to distribute your AWS credentials to your instances.
 If you are creating the launch template for use with an ASlong group, you can specify either the name or the ARN of the instance profile, but not both.
 ``IamInstanceProfile`` is a property of [AWS::EC2::LaunchTemplate LaunchTemplateData](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-launchtemplate-launchtemplatedata.html).
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-launchtemplate-iaminstanceprofile.html}
 */
export type IamInstanceProfile = {
  /**
   * The Amazon Resource Name (ARN) of the instance profile.
   */
  Arn?: string;
  /**
   * The name of the instance profile.
   */
  Name?: string;
};
/**
 * Type definition for `AWS::EC2::LaunchTemplate.InstanceMarketOptions`.
 * Specifies the market (purchasing) option for an instance.
 ``InstanceMarketOptions`` is a property of the [AWS::EC2::LaunchTemplate LaunchTemplateData](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-launchtemplate-launchtemplatedata.html).
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-launchtemplate-instancemarketoptions.html}
 */
export type InstanceMarketOptions = {
  /**
   * The market type.
   */
  MarketType?: string;
  /**
   * The options for Spot Instances.
   */
  SpotOptions?: SpotOptions;
};
/**
 * Type definition for `AWS::EC2::LaunchTemplate.InstanceRequirements`.
 * The attributes for the instance types. When you specify instance attributes, Amazon EC2 will identify instance types with these attributes.
 You must specify ``VCpuCount`` and ``MemoryMiB``. All other attributes are optional. Any unspecified optional attribute is set to its default.
 When you specify multiple attributes, you get instance types that satisfy all of the specified attributes. If you specify multiple values for an attribute, you get instance types that satisfy any of the specified values.
 To limit the list of instance types from which Amazon EC2 can identify matching instance types, you can use one of the following parameters, but not both in the same request:
  +  ``AllowedInstanceTypes`` - The instance types to include in the list. All other instance types are ignored, even if they match your specified attributes.
  +  ``ExcludedInstanceTypes`` - The instance types to exclude from the list, even if they match your specified attributes.
  
  If you specify ``InstanceRequirements``, you can't specify ``InstanceType``.
 Attribute-based instance type selection is only supported when using Auto Scaling groups, EC2 Fleet, and Spot Fleet to launch instances. If you plan to use the launch template in the [launch instance wizard](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-launch-instance-wizard.html), or with the [RunInstances](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RunInstances.html) API or [AWS::EC2::Instance](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-instance.html)AWS CloudFormation resource, you can't specify ``InstanceRequirements``.
  For more information, see [Specify attributes for instance type selection for EC2 Fleet or Spot Fleet](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-fleet-attribute-based-instance-type-selection.html) and [Spot placement score](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/spot-placement-score.html) in the *Amazon EC2 User Guide*.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-launchtemplate-instancerequirements.html}
 */
export type InstanceRequirements = {
  /**
     * The minimum and maximum number of accelerators (GPUs, FPGAs, or AWS Inferentia chips) on an instance.
     To exclude accelerator-enabled instance types, set ``Max`` to ``0``.
     Default: No minimum or maximum limits
     */
  AcceleratorCount?: AcceleratorCount;
  /**
     * Indicates whether instance types must have accelerators by specific manufacturers.
      +  For instance types with AWS devices, specify ``amazon-web-services``.
      +  For instance types with AMD devices, specify ``amd``.
      +  For instance types with Habana devices, specify ``habana``.
      +  For instance types with NVIDIA devices, specify ``nvidia``.
      +  For instance types with Xilinx devices, specify ``xilinx``.
      
     Default: Any manufacturer
     */
  AcceleratorManufacturers?: string[];
  /**
     * The accelerators that must be on the instance type.
      +  For instance types with NVIDIA A10G GPUs, specify ``a10g``.
      +  For instance types with NVIDIA A100 GPUs, specify ``a100``.
      +  For instance types with NVIDIA H100 GPUs, specify ``h100``.
      +  For instance types with AWS Inferentia chips, specify ``inferentia``.
      +  For instance types with NVIDIA GRID K520 GPUs, specify ``k520``.
      +  For instance types with NVIDIA K80 GPUs, specify ``k80``.
      +  For instance types with NVIDIA M60 GPUs, specify ``m60``.
      +  For instance types with AMD Radeon Pro V520 GPUs, specify ``radeon-pro-v520``.
      +  For instance types with NVIDIA T4 GPUs, specify ``t4``.
      +  For instance types with NVIDIA T4G GPUs, specify ``t4g``.
      +  For instance types with Xilinx VU9P FPGAs, specify ``vu9p``.
      +  For instance types with NVIDIA V100 GPUs, specify ``v100``.
      
     Default: Any accelerator
     */
  AcceleratorNames?: string[];
  /**
     * The minimum and maximum amount of total accelerator memory, in MiB.
     Default: No minimum or maximum limits
     */
  AcceleratorTotalMemoryMiB?: AcceleratorTotalMemoryMiB;
  /**
     * The accelerator types that must be on the instance type.
      +  For instance types with FPGA accelerators, specify ``fpga``.
      +  For instance types with GPU accelerators, specify ``gpu``.
      +  For instance types with Inference accelerators, specify ``inference``.
      
     Default: Any accelerator type
     */
  AcceleratorTypes?: string[];
  /**
     * The instance types to apply your specified attributes against. All other instance types are ignored, even if they match your specified attributes.
     You can use strings with one or more wild cards, represented by an asterisk (``*``), to allow an instance type, size, or generation. The following are examples: ``m5.8xlarge``, ``c5*.*``, ``m5a.*``, ``r*``, ``*3*``.
     For example, if you specify ``c5*``,Amazon EC2 will allow the entire C5 instance family, which includes all C5a and C5n instance types. If you specify ``m5a.*``, Amazon EC2 will allow all the M5a instance types, but not the M5n instance types.
      If you specify ``AllowedInstanceTypes``, you can't specify ``ExcludedInstanceTypes``.
      Default: All instance types
     */
  AllowedInstanceTypes?: string[];
  /**
     * Indicates whether bare metal instance types must be included, excluded, or required.
      +  To include bare metal instance types, specify ``included``.
      +  To require only bare metal instance types, specify ``required``.
      +  To exclude bare metal instance types, specify ``excluded``.
      
     Default: ``excluded``
     */
  BareMetal?: string;
  /**
     * The minimum and maximum baseline bandwidth to Amazon EBS, in Mbps. For more information, see [Amazon EBS–optimized instances](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-optimized.html) in the *Amazon EC2 User Guide*.
     Default: No minimum or maximum limits
     */
  BaselineEbsBandwidthMbps?: BaselineEbsBandwidthMbps;
  /**
   * The baseline performance to consider, using an instance family as a baseline reference. The instance family establishes the lowest acceptable level of performance. Amazon EC2 uses this baseline to guide instance type selection, but there is no guarantee that the selected instance types will always exceed the baseline for every application. Currently, this parameter only supports CPU performance as a baseline performance factor. For more information, see [Performance protection](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-fleet-attribute-based-instance-type-selection.html#ec2fleet-abis-performance-protection) in the *Amazon EC2 User Guide*.
   */
  BaselinePerformanceFactors?: BaselinePerformanceFactors;
  /**
     * Indicates whether burstable performance T instance types are included, excluded, or required. For more information, see [Burstable performance instances](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/burstable-performance-instances.html).
      +  To include burstable performance instance types, specify ``included``.
      +  To require only burstable performance instance types, specify ``required``.
      +  To exclude burstable performance instance types, specify ``excluded``.
      
     Default: ``excluded``
     */
  BurstablePerformance?: string;
  /**
     * The CPU manufacturers to include.
      +  For instance types with Intel CPUs, specify ``intel``.
      +  For instance types with AMD CPUs, specify ``amd``.
      +  For instance types with AWS CPUs, specify ``amazon-web-services``.
      +  For instance types with Apple CPUs, specify ``apple``.
      
      Don't confuse the CPU manufacturer with the CPU architecture. Instances will be launched with a compatible CPU architecture based on the Amazon Machine Image (AMI) that you specify in your launch template.
      Default: Any manufacturer
     */
  CpuManufacturers?: string[];
  /**
     * The instance types to exclude.
     You can use strings with one or more wild cards, represented by an asterisk (``*``), to exclude an instance type, size, or generation. The following are examples: ``m5.8xlarge``, ``c5*.*``, ``m5a.*``, ``r*``, ``*3*``.
     For example, if you specify ``c5*``,Amazon EC2 will exclude the entire C5 instance family, which includes all C5a and C5n instance types. If you specify ``m5a.*``, Amazon EC2 will exclude all the M5a instance types, but not the M5n instance types.
      If you specify ``ExcludedInstanceTypes``, you can't specify ``AllowedInstanceTypes``.
      Default: No excluded instance types
     */
  ExcludedInstanceTypes?: string[];
  /**
     * Indicates whether current or previous generation instance types are included. The current generation instance types are recommended for use. Current generation instance types are typically the latest two to three generations in each instance family. For more information, see [Instance types](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-types.html) in the *Amazon EC2 User Guide*.
     For current generation instance types, specify ``current``.
     For previous generation instance types, specify ``previous``.
     Default: Current and previous generation instance types
     */
  InstanceGenerations?: string[];
  /**
     * Indicates whether instance types with instance store volumes are included, excluded, or required. For more information, [Amazon EC2 instance store](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/InstanceStorage.html) in the *Amazon EC2 User Guide*.
      +  To include instance types with instance store volumes, specify ``included``.
      +  To require only instance types with instance store volumes, specify ``required``.
      +  To exclude instance types with instance store volumes, specify ``excluded``.
      
     Default: ``included``
     */
  LocalStorage?: string;
  /**
     * The type of local storage that is required.
      +  For instance types with hard disk drive (HDD) storage, specify ``hdd``.
      +  For instance types with solid state drive (SSD) storage, specify ``ssd``.
      
     Default: ``hdd`` and ``ssd``
     */
  LocalStorageTypes?: string[];
  /**
     * [Price protection] The price protection threshold for Spot Instances, as a percentage of an identified On-Demand price. The identified On-Demand price is the price of the lowest priced current generation C, M, or R instance type with your specified attributes. If no current generation C, M, or R instance type matches your attributes, then the identified price is from the lowest priced current generation instance types, and failing that, from the lowest priced previous generation instance types that match your attributes. When Amazon EC2 selects instance types with your attributes, it will exclude instance types whose price exceeds your specified threshold.
     The parameter accepts an integer, which Amazon EC2 interprets as a percentage.
     If you set ``TargetCapacityUnitType`` to ``vcpu`` or ``memory-mib``, the price protection threshold is based on the per vCPU or per memory price instead of the per instance price.
      Only one of ``SpotMaxPricePercentageOverLowestPrice`` or ``MaxSpotPriceAsPercentageOfOptimalOnDemandPrice`` can be specified. If you don't specify either, Amazon EC2 will automatically apply optimal price protection to consistently select from a wide range of instance types. To indicate no price protection threshold for Spot Instances, meaning you want to consider all instance types that match your attributes, include one of these parameters and specify a high value, such as ``999999``.
     */
  MaxSpotPriceAsPercentageOfOptimalOnDemandPrice?: number;
  /**
     * The minimum and maximum amount of memory per vCPU, in GiB.
     Default: No minimum or maximum limits
     */
  MemoryGiBPerVCpu?: MemoryGiBPerVCpu;
  /**
   * The minimum and maximum amount of memory, in MiB.
   */
  MemoryMiB?: MemoryMiB;
  /**
     * The minimum and maximum amount of network bandwidth, in gigabits per second (Gbps).
     Default: No minimum or maximum limits
     */
  NetworkBandwidthGbps?: NetworkBandwidthGbps;
  /**
     * The minimum and maximum number of network interfaces.
     Default: No minimum or maximum limits
     */
  NetworkInterfaceCount?: NetworkInterfaceCount;
  /**
     * [Price protection] The price protection threshold for On-Demand Instances, as a percentage higher than an identified On-Demand price. The identified On-Demand price is the price of the lowest priced current generation C, M, or R instance type with your specified attributes. When Amazon EC2 selects instance types with your attributes, it will exclude instance types whose price exceeds your specified threshold.
     The parameter accepts an integer, which Amazon EC2 interprets as a percentage.
     To turn off price protection, specify a high value, such as ``999999``.
     This parameter is not supported for [GetSpotPlacementScores](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_GetSpotPlacementScores.html) and [GetInstanceTypesFromInstanceRequirements](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_GetInstanceTypesFromInstanceRequirements.html).
      If you set ``TargetCapacityUnitType`` to ``vcpu`` or ``memory-mib``, the price protection threshold is applied based on the per-vCPU or per-memory price instead of the per-instance price.
      Default: ``20``
     */
  OnDemandMaxPricePercentageOverLowestPrice?: number;
  /**
     * Indicates whether instance types must support hibernation for On-Demand Instances.
     This parameter is not supported for [GetSpotPlacementScores](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_GetSpotPlacementScores.html).
     Default: ``false``
     */
  RequireHibernateSupport?: boolean;
  /**
     * [Price protection] The price protection threshold for Spot Instances, as a percentage higher than an identified Spot price. The identified Spot price is the Spot price of the lowest priced current generation C, M, or R instance type with your specified attributes. If no current generation C, M, or R instance type matches your attributes, then the identified Spot price is from the lowest priced current generation instance types, and failing that, from the lowest priced previous generation instance types that match your attributes. When Amazon EC2 selects instance types with your attributes, it will exclude instance types whose Spot price exceeds your specified threshold.
     The parameter accepts an integer, which Amazon EC2 interprets as a percentage.
     If you set ``TargetCapacityUnitType`` to ``vcpu`` or ``memory-mib``, the price protection threshold is applied based on the per-vCPU or per-memory price instead of the per-instance price.
     This parameter is not supported for [GetSpotPlacementScores](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_GetSpotPlacementScores.html) and [GetInstanceTypesFromInstanceRequirements](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_GetInstanceTypesFromInstanceRequirements.html).
      Only one of ``SpotMaxPricePercentageOverLowestPrice`` or ``MaxSpotPriceAsPercentageOfOptimalOnDemandPrice`` can be specified. If you don't specify either, Amazon EC2 will automatically apply optimal price protection to consistently select from a wide range of instance types. To indicate no price protection threshold for Spot Instances, meaning you want to consider all instance types that match your attributes, include one of these parameters and specify a high value, such as ``999999``.
      Default: ``100``
     */
  SpotMaxPricePercentageOverLowestPrice?: number;
  /**
     * The minimum and maximum amount of total local storage, in GB.
     Default: No minimum or maximum limits
     */
  TotalLocalStorageGB?: TotalLocalStorageGB;
  /**
   * The minimum and maximum number of vCPUs.
   */
  VCpuCount?: VCpuCount;
};
/**
 * Type definition for `AWS::EC2::LaunchTemplate.Ipv4PrefixSpecification`.
 * Specifies an IPv4 prefix for a network interface.
 ``Ipv4PrefixSpecification`` is a property of [AWS::EC2::LaunchTemplate NetworkInterface](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-launchtemplate-networkinterface.html).
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-launchtemplate-ipv4prefixspecification.html}
 */
export type Ipv4PrefixSpecification = {
  /**
   * The IPv4 prefix. For information, see [Assigning prefixes to network interfaces](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-prefix-eni.html) in the *Amazon EC2 User Guide*.
   */
  Ipv4Prefix?: string;
};
/**
 * Type definition for `AWS::EC2::LaunchTemplate.Ipv6Add`.
 * Specifies an IPv6 address in an Amazon EC2 launch template.
 ``Ipv6Add`` is a property of [AWS::EC2::LaunchTemplate NetworkInterface](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-launchtemplate-networkinterface.html).
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-launchtemplate-ipv6add.html}
 */
export type Ipv6Add = {
  /**
   * One or more specific IPv6 addresses from the IPv6 CIDR block range of your subnet. You can't use this option if you're specifying a number of IPv6 addresses.
   */
  Ipv6Address?: string;
};
/**
 * Type definition for `AWS::EC2::LaunchTemplate.Ipv6PrefixSpecification`.
 * Specifies an IPv6 prefix for a network interface.
 ``Ipv6PrefixSpecification`` is a property of [AWS::EC2::LaunchTemplate NetworkInterface](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-launchtemplate-networkinterface.html).
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-launchtemplate-ipv6prefixspecification.html}
 */
export type Ipv6PrefixSpecification = {
  /**
   * The IPv6 prefix.
   */
  Ipv6Prefix?: string;
};
/**
 * Type definition for `AWS::EC2::LaunchTemplate.LaunchTemplateData`.
 * The information to include in the launch template.
  You must specify at least one parameter for the launch template data.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-launchtemplate-launchtemplatedata.html}
 */
export type LaunchTemplateData = {
  /**
   * The block device mapping.
   */
  BlockDeviceMappings?: BlockDeviceMapping[];
  /**
   * The Capacity Reservation targeting option. If you do not specify this parameter, the instance's Capacity Reservation preference defaults to ``open``, which enables it to run in any open Capacity Reservation that has matching attributes (instance type, platform, Availability Zone).
   */
  CapacityReservationSpecification?: CapacityReservationSpecification;
  /**
   * The CPU options for the instance. For more information, see [CPU options for Amazon EC2 instances](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-optimize-cpu.html) in the *Amazon EC2 User Guide*.
   */
  CpuOptions?: CpuOptions;
  /**
   * The credit option for CPU usage of the instance. Valid only for T instances.
   */
  CreditSpecification?: CreditSpecification;
  /**
   * Indicates whether to enable the instance for stop protection. For more information, see [Enable stop protection for your EC2 instances](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-stop-protection.html) in the *Amazon EC2 User Guide*.
   */
  DisableApiStop?: boolean;
  /**
   * Indicates whether termination protection is enabled for the instance. The default is ``false``, which means that you can terminate the instance using the Amazon EC2 console, command line tools, or API. You can enable termination protection when you launch an instance, while the instance is running, or while the instance is stopped.
   */
  DisableApiTermination?: boolean;
  /**
   * Indicates whether the instance is optimized for Amazon EBS I/O. This optimization provides dedicated throughput to Amazon EBS and an optimized configuration stack to provide optimal Amazon EBS I/O performance. This optimization isn't available with all instance types. Additional usage charges apply when using an EBS-optimized instance.
   */
  EbsOptimized?: boolean;
  /**
     * Deprecated.
      Amazon Elastic Graphics reached end of life on January 8, 2024.
     */
  ElasticGpuSpecifications?: ElasticGpuSpecification[];
  /**
     * Amazon Elastic Inference is no longer available.
      An elastic inference accelerator to associate with the instance. Elastic inference accelerators are a resource you can attach to your Amazon EC2 instances to accelerate your Deep Learning (DL) inference workloads.
     You cannot specify accelerators from different generations in the same request.
     */
  ElasticInferenceAccelerators?: LaunchTemplateElasticInferenceAccelerator[];
  /**
     * Indicates whether the instance is enabled for AWS Nitro Enclaves. For more information, see [What is Nitro Enclaves?](https://docs.aws.amazon.com/enclaves/latest/user/nitro-enclave.html) in the *Nitro Enclaves User Guide*.
     You can't enable AWS Nitro Enclaves and hibernation on the same instance.
     */
  EnclaveOptions?: EnclaveOptions;
  /**
   * Indicates whether an instance is enabled for hibernation. This parameter is valid only if the instance meets the [hibernation prerequisites](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/hibernating-prerequisites.html). For more information, see [Hibernate your Amazon EC2 instance](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Hibernate.html) in the *Amazon EC2 User Guide*.
   */
  HibernationOptions?: HibernationOptions;
  /**
   * The name or Amazon Resource Name (ARN) of an IAM instance profile.
   */
  IamInstanceProfile?: IamInstanceProfile;
  /**
     * The ID of the AMI. Alternatively, you can specify a Systems Manager parameter, which will resolve to an AMI ID on launch.
     Valid formats:
      +   ``ami-0ac394d6a3example``
      +   ``resolve:ssm:parameter-name``
      +   ``resolve:ssm:parameter-name:version-number``
      +   ``resolve:ssm:parameter-name:label``
      
     For more information, see [Use a Systems Manager parameter to find an AMI](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/finding-an-ami.html#using-systems-manager-parameter-to-find-AMI) in the *Amazon Elastic Compute Cloud User Guide*.
     */
  ImageId?: string;
  /**
     * Indicates whether an instance stops or terminates when you initiate shutdown from the instance (using the operating system command for system shutdown).
     Default: ``stop``
     */
  InstanceInitiatedShutdownBehavior?: string;
  /**
   * The market (purchasing) option for the instances.
   */
  InstanceMarketOptions?: InstanceMarketOptions;
  /**
     * The attributes for the instance types. When you specify instance attributes, Amazon EC2 will identify instance types with these attributes.
     You must specify ``VCpuCount`` and ``MemoryMiB``. All other attributes are optional. Any unspecified optional attribute is set to its default.
     When you specify multiple attributes, you get instance types that satisfy all of the specified attributes. If you specify multiple values for an attribute, you get instance types that satisfy any of the specified values.
     To limit the list of instance types from which Amazon EC2 can identify matching instance types, you can use one of the following parameters, but not both in the same request:
      +  ``AllowedInstanceTypes`` - The instance types to include in the list. All other instance types are ignored, even if they match your specified attributes.
      +  ``ExcludedInstanceTypes`` - The instance types to exclude from the list, even if they match your specified attributes.
      
      If you specify ``InstanceRequirements``, you can't specify ``InstanceType``.
     Attribute-based instance type selection is only supported when using Auto Scaling groups, EC2 Fleet, and Spot Fleet to launch instances. If you plan to use the launch template in the [launch instance wizard](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-launch-instance-wizard.html), or with the [RunInstances](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RunInstances.html) API or [AWS::EC2::Instance](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-instance.html)AWS CloudFormation resource, you can't specify ``InstanceRequirements``.
      For more information, see [Specify attributes for instance type selection for EC2 Fleet or Spot Fleet](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-fleet-attribute-based-instance-type-selection.html) and [Spot placement score](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/spot-placement-score.html) in the *Amazon EC2 User Guide*.
     */
  InstanceRequirements?: InstanceRequirements;
  /**
     * The instance type. For more information, see [Amazon EC2 instance types](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-types.html) in the *Amazon EC2 User Guide*.
     If you specify ``InstanceType``, you can't specify ``InstanceRequirements``.
     */
  InstanceType?: string;
  /**
     * The ID of the kernel.
     We recommend that you use PV-GRUB instead of kernels and RAM disks. For more information, see [User Provided Kernels](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/UserProvidedkernels.html) in the *Amazon EC2 User Guide*.
     */
  KernelId?: string;
  /**
     * The name of the key pair. You can create a key pair using [CreateKeyPair](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateKeyPair.html) or [ImportKeyPair](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ImportKeyPair.html).
      If you do not specify a key pair, you can't connect to the instance unless you choose an AMI that is configured to allow users another way to log in.
     */
  KeyName?: string;
  /**
   * The license configurations.
   */
  LicenseSpecifications?: LicenseSpecification[];
  /**
   * The maintenance options of your instance.
   */
  MaintenanceOptions?: MaintenanceOptions;
  /**
   * The metadata options for the instance. For more information, see [Configure the Instance Metadata Service options](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/configuring-instance-metadata-options.html) in the *Amazon EC2 User Guide*.
   */
  MetadataOptions?: MetadataOptions;
  /**
   * The monitoring for the instance.
   */
  Monitoring?: Monitoring;
  /**
   * The network interfaces for the instance.
   */
  NetworkInterfaces?: NetworkInterface[];
  /**
   * The settings for the network performance options for the instance. For more information, see [EC2 instance bandwidth weighting configuration](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/configure-bandwidth-weighting.html).
   */
  NetworkPerformanceOptions?: NetworkPerformanceOptions;
  /**
   * The placement for the instance.
   */
  Placement?: Placement;
  /**
   * The hostname type for EC2 instances launched into this subnet and how DNS A and AAAA record queries should be handled. For more information, see [Amazon EC2 instance hostname types](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-naming.html) in the *User Guide*.
   */
  PrivateDnsNameOptions?: PrivateDnsNameOptions;
  /**
     * The ID of the RAM disk.
      We recommend that you use PV-GRUB instead of kernels and RAM disks. For more information, see [User provided kernels](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/UserProvidedkernels.html) in the *Amazon EC2 User Guide*.
     */
  RamDiskId?: string;
  /**
     * The IDs of the security groups. You can specify the IDs of existing security groups and references to resources created by the stack template.
     If you specify a network interface, you must specify any security groups as part of the network interface instead.
     */
  SecurityGroupIds?: string[];
  /**
     * The names of the security groups. For a nondefault VPC, you must use security group IDs instead.
     If you specify a network interface, you must specify any security groups as part of the network interface instead of using this parameter.
     */
  SecurityGroups?: string[];
  /**
     * The tags to apply to resources that are created during instance launch.
     To tag the launch template itself, use [TagSpecifications](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-launchtemplate.html#cfn-ec2-launchtemplate-tagspecifications).
     */
  TagSpecifications?: TagSpecification[];
  /**
     * The user data to make available to the instance. You must provide base64-encoded text. User data is limited to 16 KB. For more information, see [Run commands when you launch an EC2 instance with user data input](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/user-data.html) in the *Amazon EC2 User Guide*.
     If you are creating the launch template for use with BATCH, the user data must be provided in the [MIME multi-part archive format](https://docs.aws.amazon.com/https://cloudinit.readthedocs.io/en/latest/topics/format.html#mime-multi-part-archive). For more information, see [Amazon EC2 user data in launch templates](https://docs.aws.amazon.com/batch/latest/userguide/launch-templates.html#lt-user-data) in the *User Guide*.
     */
  UserData?: string;
};
/**
 * Type definition for `AWS::EC2::LaunchTemplate.LaunchTemplateElasticInferenceAccelerator`.
 * Amazon Elastic Inference is no longer available.
  Specifies an elastic inference accelerator.
 ``LaunchTemplateElasticInferenceAccelerator`` is a property of [AWS::EC2::LaunchTemplate LaunchTemplateData](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-launchtemplate-launchtemplatedata.html).
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-launchtemplate-launchtemplateelasticinferenceaccelerator.html}
 */
export type LaunchTemplateElasticInferenceAccelerator = {
  /**
     * The number of elastic inference accelerators to attach to the instance.
     Default: 1
     */
  Count?: number;
  /**
   * The type of elastic inference accelerator. The possible values are eia1.medium, eia1.large, and eia1.xlarge.
   */
  Type?: string;
};
/**
 * Type definition for `AWS::EC2::LaunchTemplate.LaunchTemplateTagSpecification`.
 * Specifies the tags to apply to the launch template during creation.
 To specify the tags for the resources that are created during instance launch, use [AWS::EC2::LaunchTemplate TagSpecification](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-launchtemplate-tagspecification.html).
 ``LaunchTemplateTagSpecification`` is a property of [AWS::EC2::LaunchTemplate](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-launchtemplate.html).
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-launchtemplate-launchtemplatetagspecification.html}
 */
export type LaunchTemplateTagSpecification = {
  /**
   * The type of resource. To tag a launch template, ``ResourceType`` must be ``launch-template``.
   */
  ResourceType?: string;
  /**
   * The tags for the resource.
   */
  Tags?: Tag[];
};
/**
 * Type definition for `AWS::EC2::LaunchTemplate.LicenseSpecification`.
 * Specifies a license configuration for an instance.
 ``LicenseSpecification`` is a property of [AWS::EC2::LaunchTemplate LaunchTemplateData](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-launchtemplate-launchtemplatedata.html).
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-launchtemplate-licensespecification.html}
 */
export type LicenseSpecification = {
  /**
   * The Amazon Resource Name (ARN) of the license configuration.
   */
  LicenseConfigurationArn?: string;
};
/**
 * Type definition for `AWS::EC2::LaunchTemplate.MaintenanceOptions`.
 * The maintenance options of your instance.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-launchtemplate-maintenanceoptions.html}
 */
export type MaintenanceOptions = {
  /**
   * Disables the automatic recovery behavior of your instance or sets it to default.
   */
  AutoRecovery?: string;
};
/**
 * Type definition for `AWS::EC2::LaunchTemplate.MemoryGiBPerVCpu`.
 * The minimum and maximum amount of memory per vCPU, in GiB.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-launchtemplate-memorygibpervcpu.html}
 */
export type MemoryGiBPerVCpu = {
  /**
   * The maximum amount of memory per vCPU, in GiB. To specify no maximum limit, omit this parameter.
   */
  Max?: number;
  /**
   * The minimum amount of memory per vCPU, in GiB. To specify no minimum limit, omit this parameter.
   */
  Min?: number;
};
/**
 * Type definition for `AWS::EC2::LaunchTemplate.MemoryMiB`.
 * The minimum and maximum amount of memory, in MiB.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-launchtemplate-memorymib.html}
 */
export type MemoryMiB = {
  /**
   * The maximum amount of memory, in MiB. To specify no maximum limit, omit this parameter.
   */
  Max?: number;
  /**
   * The minimum amount of memory, in MiB. To specify no minimum limit, specify ``0``.
   */
  Min?: number;
};
/**
 * Type definition for `AWS::EC2::LaunchTemplate.MetadataOptions`.
 * The metadata options for the instance. For more information, see [Instance metadata and user data](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-metadata.html) in the *Amazon EC2 User Guide*.
 ``MetadataOptions`` is a property of [AWS::EC2::LaunchTemplate LaunchTemplateData](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-launchtemplate-launchtemplatedata.html).
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-launchtemplate-metadataoptions.html}
 */
export type MetadataOptions = {
  /**
     * Enables or disables the HTTP metadata endpoint on your instances. If the parameter is not specified, the default state is ``enabled``.
      If you specify a value of ``disabled``, you will not be able to access your instance metadata.
     */
  HttpEndpoint?: string;
  /**
     * Enables or disables the IPv6 endpoint for the instance metadata service.
     Default: ``disabled``
     */
  HttpProtocolIpv6?: string;
  /**
     * The desired HTTP PUT response hop limit for instance metadata requests. The larger the number, the further instance metadata requests can travel.
     Default: ``1``
     Possible values: Integers from 1 to 64
     */
  HttpPutResponseHopLimit?: number;
  /**
     * Indicates whether IMDSv2 is required.
      +  ``optional`` - IMDSv2 is optional. You can choose whether to send a session token in your instance metadata retrieval requests. If you retrieve IAM role credentials without a session token, you receive the IMDSv1 role credentials. If you retrieve IAM role credentials using a valid session token, you receive the IMDSv2 role credentials.
      +  ``required`` - IMDSv2 is required. You must send a session token in your instance metadata retrieval requests. With this option, retrieving the IAM role credentials always returns IMDSv2 credentials; IMDSv1 credentials are not available.
      
     Default: If the value of ``ImdsSupport`` for the Amazon Machine Image (AMI) for your instance is ``v2.0``, the default is ``required``.
     */
  HttpTokens?: string;
  /**
     * Set to ``enabled`` to allow access to instance tags from the instance metadata. Set to ``disabled`` to turn off access to instance tags from the instance metadata. For more information, see [View tags for your EC2 instances using instance metadata](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/work-with-tags-in-IMDS.html).
     Default: ``disabled``
     */
  InstanceMetadataTags?: string;
};
/**
 * Type definition for `AWS::EC2::LaunchTemplate.Monitoring`.
 * Specifies whether detailed monitoring is enabled for an instance. For more information about detailed monitoring, see [Enable or turn off detailed monitoring for your instances](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-cloudwatch-new.html) in the *User Guide*.
 ``Monitoring`` is a property of [AWS::EC2::LaunchTemplate LaunchTemplateData](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-launchtemplate-launchtemplatedata.html).
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-launchtemplate-monitoring.html}
 */
export type Monitoring = {
  /**
   * Specify ``true`` to enable detailed monitoring. Otherwise, basic monitoring is enabled.
   */
  Enabled?: boolean;
};
/**
 * Type definition for `AWS::EC2::LaunchTemplate.NetworkBandwidthGbps`.
 * The minimum and maximum amount of network bandwidth, in gigabits per second (Gbps).
  Setting the minimum bandwidth does not guarantee that your instance will achieve the minimum bandwidth. Amazon EC2 will identify instance types that support the specified minimum bandwidth, but the actual bandwidth of your instance might go below the specified minimum at times. For more information, see [Available instance bandwidth](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-network-bandwidth.html#available-instance-bandwidth) in the *Amazon EC2 User Guide*.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-launchtemplate-networkbandwidthgbps.html}
 */
export type NetworkBandwidthGbps = {
  /**
   * The maximum amount of network bandwidth, in Gbps. To specify no maximum limit, omit this parameter.
   */
  Max?: number;
  /**
   * The minimum amount of network bandwidth, in Gbps. If this parameter is not specified, there is no minimum limit.
   */
  Min?: number;
};
/**
 * Type definition for `AWS::EC2::LaunchTemplate.NetworkInterface`.
 * Specifies the parameters for a network interface.
 ``NetworkInterface`` is a property of [AWS::EC2::LaunchTemplate LaunchTemplateData](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-launchtemplate-launchtemplatedata.html).
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-launchtemplate-networkinterface.html}
 */
export type NetworkInterface = {
  /**
     * Associates a Carrier IP address with eth0 for a new network interface.
     Use this option when you launch an instance in a Wavelength Zone and want to associate a Carrier IP address with the network interface. For more information about Carrier IP addresses, see [Carrier IP addresses](https://docs.aws.amazon.com/wavelength/latest/developerguide/how-wavelengths-work.html#provider-owned-ip) in the *Developer Guide*.
     */
  AssociateCarrierIpAddress?: boolean;
  /**
     * Associates a public IPv4 address with eth0 for a new network interface.
     AWS charges for all public IPv4 addresses, including public IPv4 addresses associated with running instances and Elastic IP addresses. For more information, see the *Public IPv4 Address* tab on the [Amazon VPC pricing page](https://docs.aws.amazon.com/vpc/pricing/).
     */
  AssociatePublicIpAddress?: boolean;
  /**
   * A connection tracking specification for the network interface.
   */
  ConnectionTrackingSpecification?: ConnectionTrackingSpecification;
  /**
   * Indicates whether the network interface is deleted when the instance is terminated.
   */
  DeleteOnTermination?: boolean;
  /**
   * A description for the network interface.
   */
  Description?: string;
  /**
     * The device index for the network interface attachment. The primary network interface has a device index of 0. If the network interface is of type ``interface``, you must specify a device index.
     If you create a launch template that includes secondary network interfaces but no primary network interface, and you specify it using the ``LaunchTemplate`` property of ``AWS::EC2::Instance``, then you must include a primary network interface using the ``NetworkInterfaces`` property of ``AWS::EC2::Instance``.
     */
  DeviceIndex?: number;
  /**
   * The ENA Express configuration for the network interface.
   */
  EnaSrdSpecification?: EnaSrdSpecification;
  /**
   * The IDs of one or more security groups.
   */
  Groups?: string[];
  /**
     * The type of network interface. To create an Elastic Fabric Adapter (EFA), specify ``efa`` or ``efa``. For more information, see [Elastic Fabric Adapter for AI/ML and HPC workloads on Amazon EC2](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/efa.html) in the *Amazon EC2 User Guide*.
     If you are not creating an EFA, specify ``interface`` or omit this parameter.
     If you specify ``efa-only``, do not assign any IP addresses to the network interface. EFA-only network interfaces do not support IP addresses.
     Valid values: ``interface`` | ``efa`` | ``efa-only``
     */
  InterfaceType?: string;
  /**
   * The number of IPv4 prefixes to be automatically assigned to the network interface. You cannot use this option if you use the ``Ipv4Prefix`` option.
   */
  Ipv4PrefixCount?: number;
  /**
   * One or more IPv4 prefixes to be assigned to the network interface. You cannot use this option if you use the ``Ipv4PrefixCount`` option.
   */
  Ipv4Prefixes?: Ipv4PrefixSpecification[];
  /**
   * The number of IPv6 addresses to assign to a network interface. Amazon EC2 automatically selects the IPv6 addresses from the subnet range. You can't use this option if specifying specific IPv6 addresses.
   */
  Ipv6AddressCount?: number;
  /**
   * One or more specific IPv6 addresses from the IPv6 CIDR block range of your subnet. You can't use this option if you're specifying a number of IPv6 addresses.
   */
  Ipv6Addresses?: Ipv6Add[];
  /**
   * The number of IPv6 prefixes to be automatically assigned to the network interface. You cannot use this option if you use the ``Ipv6Prefix`` option.
   */
  Ipv6PrefixCount?: number;
  /**
   * One or more IPv6 prefixes to be assigned to the network interface. You cannot use this option if you use the ``Ipv6PrefixCount`` option.
   */
  Ipv6Prefixes?: Ipv6PrefixSpecification[];
  /**
   * The index of the network card. Some instance types support multiple network cards. The primary network interface must be assigned to network card index 0. The default is network card index 0.
   */
  NetworkCardIndex?: number;
  /**
   * The ID of the network interface.
   */
  NetworkInterfaceId?: string;
  /**
   * The primary IPv6 address of the network interface. When you enable an IPv6 GUA address to be a primary IPv6, the first IPv6 GUA will be made the primary IPv6 address until the instance is terminated or the network interface is detached. For more information about primary IPv6 addresses, see [RunInstances](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RunInstances.html).
   */
  PrimaryIpv6?: boolean;
  /**
   * The primary private IPv4 address of the network interface.
   */
  PrivateIpAddress?: string;
  /**
   * One or more private IPv4 addresses.
   */
  PrivateIpAddresses?: PrivateIpAdd[];
  /**
   * The number of secondary private IPv4 addresses to assign to a network interface.
   */
  SecondaryPrivateIpAddressCount?: number;
  /**
   * The ID of the subnet for the network interface.
   */
  SubnetId?: string;
};
/**
 * Type definition for `AWS::EC2::LaunchTemplate.NetworkInterfaceCount`.
 * The minimum and maximum number of network interfaces.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-launchtemplate-networkinterfacecount.html}
 */
export type NetworkInterfaceCount = {
  /**
   * The maximum number of network interfaces. To specify no maximum limit, omit this parameter.
   */
  Max?: number;
  /**
   * The minimum number of network interfaces. To specify no minimum limit, omit this parameter.
   */
  Min?: number;
};
/**
 * Type definition for `AWS::EC2::LaunchTemplate.NetworkPerformanceOptions`.
 * Contains settings for the network performance options for the instance.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-launchtemplate-networkperformanceoptions.html}
 */
export type NetworkPerformanceOptions = {
  /**
     * Specify the bandwidth weighting option to boost the associated type of baseline bandwidth, as follows:
      + default This option uses the standard bandwidth configuration for your instance type. + vpc-1 This option boosts your networking baseline bandwidth and reduces your EBS baseline bandwidth. + ebs-1 This option boosts your EBS baseline bandwidth and reduces your networking baseline bandwidth.
     */
  BandwidthWeighting?: string;
};
/**
 * Type definition for `AWS::EC2::LaunchTemplate.Placement`.
 * Specifies the placement of an instance.
 ``Placement`` is a property of [AWS::EC2::LaunchTemplate LaunchTemplateData](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-launchtemplate-launchtemplatedata.html).
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-launchtemplate-placement.html}
 */
export type Placement = {
  /**
   * The affinity setting for an instance on a Dedicated Host.
   */
  Affinity?: string;
  /**
   * The Availability Zone for the instance.
   */
  AvailabilityZone?: string;
  /**
   * The Group Id of a placement group. You must specify the Placement Group *Group Id* to launch an instance in a shared placement group.
   */
  GroupId?: string;
  /**
   * The name of the placement group for the instance.
   */
  GroupName?: string;
  /**
   * The ID of the Dedicated Host for the instance.
   */
  HostId?: string;
  /**
   * The ARN of the host resource group in which to launch the instances. If you specify a host resource group ARN, omit the *Tenancy* parameter or set it to ``host``.
   */
  HostResourceGroupArn?: string;
  /**
   * The number of the partition the instance should launch in. Valid only if the placement group strategy is set to ``partition``.
   */
  PartitionNumber?: number;
  /**
   * Reserved for future use.
   */
  SpreadDomain?: string;
  /**
   * The tenancy of the instance. An instance with a tenancy of dedicated runs on single-tenant hardware.
   */
  Tenancy?: string;
};
/**
 * Type definition for `AWS::EC2::LaunchTemplate.PrivateDnsNameOptions`.
 * The hostname type for EC2 instances launched into this subnet and how DNS A and AAAA record queries should be handled. For more information, see [Amazon EC2 instance hostname types](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-naming.html) in the *User Guide*.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-launchtemplate-privatednsnameoptions.html}
 */
export type PrivateDnsNameOptions = {
  /**
   * Indicates whether to respond to DNS queries for instance hostnames with DNS AAAA records.
   */
  EnableResourceNameDnsAAAARecord?: boolean;
  /**
   * Indicates whether to respond to DNS queries for instance hostnames with DNS A records.
   */
  EnableResourceNameDnsARecord?: boolean;
  /**
   * The type of hostname for EC2 instances. For IPv4 only subnets, an instance DNS name must be based on the instance IPv4 address. For IPv6 only subnets, an instance DNS name must be based on the instance ID. For dual-stack subnets, you can specify whether DNS names use the instance IPv4 address or the instance ID. For more information, see [Amazon EC2 instance hostname types](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-naming.html) in the *User Guide*.
   */
  HostnameType?: string;
};
/**
 * Type definition for `AWS::EC2::LaunchTemplate.PrivateIpAdd`.
 * Specifies a secondary private IPv4 address for a network interface.
 ``PrivateIpAdd`` is a property of [AWS::EC2::LaunchTemplate NetworkInterface](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-launchtemplate-networkinterface.html).
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-launchtemplate-privateipadd.html}
 */
export type PrivateIpAdd = {
  /**
   * Indicates whether the private IPv4 address is the primary private IPv4 address. Only one IPv4 address can be designated as primary.
   */
  Primary?: boolean;
  /**
   * The private IPv4 address.
   */
  PrivateIpAddress?: string;
};
/**
 * Type definition for `AWS::EC2::LaunchTemplate.Reference`.
 * Specifies an instance family to use as the baseline reference for CPU performance.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-launchtemplate-reference.html}
 */
export type Reference = {
  /**
     * The instance family to use as a baseline reference.
      Ensure that you specify the correct value for the instance family. The instance family is everything before the period (``.``) in the instance type name. For example, in the instance type ``c6i.large``, the instance family is ``c6i``, not ``c6``. For more information, see [Amazon EC2 instance type naming conventions](https://docs.aws.amazon.com/ec2/latest/instancetypes/instance-type-names.html) in *Amazon EC2 Instance Types*.
      The following instance families are *not supported* for performance protection:
      +   ``c1``
      +  ``g3`` | ``g3s``
      +   ``hpc7g``
      +  ``m1`` | ``m2``
      +  ``mac1`` | ``mac2`` | ``mac2-m1ultra`` | ``mac2-m2`` | ``mac2-m2pro``
      +  ``p3dn`` | ``p4d`` | ``p5``
      +   ``t1``
      +  ``u-12tb1`` | ``u-18tb1`` | ``u-24tb1`` | ``u-3tb1`` | ``u-6tb1`` | ``u-9tb1`` | ``u7i-12tb`` | ``u7in-16tb`` | ``u7in-24tb`` | ``u7in-32tb``
      
     If you enable performance protection by specifying a supported instance family, the returned instance types will exclude the above unsupported instance families.
     */
  InstanceFamily?: string;
};
/**
 * Type definition for `AWS::EC2::LaunchTemplate.SpotOptions`.
 * Specifies options for Spot Instances.
 ``SpotOptions`` is a property of [AWS::EC2::LaunchTemplate InstanceMarketOptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-launchtemplate-launchtemplatedata-instancemarketoptions.html).
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-launchtemplate-spotoptions.html}
 */
export type SpotOptions = {
  /**
   * Deprecated.
   */
  BlockDurationMinutes?: number;
  /**
   * The behavior when a Spot Instance is interrupted. The default is ``terminate``.
   */
  InstanceInterruptionBehavior?: string;
  /**
     * The maximum hourly price you're willing to pay for a Spot Instance. We do not recommend using this parameter because it can lead to increased interruptions. If you do not specify this parameter, you will pay the current Spot price. If you do specify this parameter, it must be more than USD $0.001. Specifying a value below USD $0.001 will result in an ``InvalidParameterValue`` error message when the launch template is used to launch an instance.
      If you specify a maximum price, your Spot Instances will be interrupted more frequently than if you do not specify this parameter.
     */
  MaxPrice?: string;
  /**
     * The Spot Instance request type.
     If you are using Spot Instances with an Auto Scaling group, use ``one-time`` requests, as the ASlong service handles requesting new Spot Instances whenever the group is below its desired capacity.
     */
  SpotInstanceType?: string;
  /**
     * The end date of the request, in UTC format (*YYYY-MM-DD*T*HH:MM:SS*Z). Supported only for persistent requests.
      +  For a persistent request, the request remains active until the ``ValidUntil`` date and time is reached. Otherwise, the request remains active until you cancel it.
      +  For a one-time request, ``ValidUntil`` is not supported. The request remains active until all instances launch or you cancel the request.
      
     Default: 7 days from the current date
     */
  ValidUntil?: string;
};
/**
 * Type definition for `AWS::EC2::LaunchTemplate.Tag`.
 * Specifies a tag. For more information, see [Resource tags](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html).
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-launchtemplate-tag.html}
 */
export type Tag = {
  /**
   * The tag key.
   */
  Key: string;
  /**
   * The tag value.
   */
  Value: string;
};
/**
 * Type definition for `AWS::EC2::LaunchTemplate.TagSpecification`.
 * Specifies the tags to apply to resources that are created during instance launch.
 ``TagSpecification`` is a property type of [TagSpecifications](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-launchtemplate-launchtemplatedata.html#cfn-ec2-launchtemplate-launchtemplatedata-tagspecifications). [TagSpecifications](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-launchtemplate-launchtemplatedata.html#cfn-ec2-launchtemplate-launchtemplatedata-tagspecifications) is a property of [AWS::EC2::LaunchTemplate LaunchTemplateData](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-launchtemplate-launchtemplatedata.html).
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-launchtemplate-tagspecification.html}
 */
export type TagSpecification = {
  /**
     * The type of resource to tag. You can specify tags for the following resource types only: ``instance`` | ``volume`` | ``network-interface`` | ``spot-instances-request``. If the instance does not include the resource type that you specify, the instance launch fails. For example, not all instance types include a volume.
     To tag a resource after it has been created, see [CreateTags](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateTags.html).
     */
  ResourceType?: string;
  /**
   * The tags to apply to the resource.
   */
  Tags?: Tag[];
};
/**
 * Type definition for `AWS::EC2::LaunchTemplate.TotalLocalStorageGB`.
 * The minimum and maximum amount of total local storage, in GB.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-launchtemplate-totallocalstoragegb.html}
 */
export type TotalLocalStorageGB = {
  /**
   * The maximum amount of total local storage, in GB. To specify no maximum limit, omit this parameter.
   */
  Max?: number;
  /**
   * The minimum amount of total local storage, in GB. To specify no minimum limit, omit this parameter.
   */
  Min?: number;
};
/**
 * Type definition for `AWS::EC2::LaunchTemplate.VCpuCount`.
 * The minimum and maximum number of vCPUs.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-launchtemplate-vcpucount.html}
 */
export type VCpuCount = {
  /**
   * The maximum number of vCPUs. To specify no maximum limit, omit this parameter.
   */
  Max?: number;
  /**
   * The minimum number of vCPUs. To specify no minimum limit, specify ``0``.
   */
  Min?: number;
};
/**
 * Resource type definition for `AWS::EC2::LaunchTemplate`.
 * Specifies the properties for creating a launch template.
 The minimum required properties for specifying a launch template are as follows:
  +  You must specify at least one property for the launch template data.
  +  You can optionally specify a name for the launch template. If you do not specify a name, CFN creates a name for you.
  
 A launch template can contain some or all of the configuration information to launch an instance. When you launch an instance using a launch template, instance properties that are not specified in the launch template use default values, except the ``ImageId`` property, which has no default value. If you do not specify an AMI ID for the launch template ``ImageId`` property, you must specify an AMI ID for the instance ``ImageId`` property.
 For more information, see [Launch an instance from a launch template](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-launch-templates.html) in the *Amazon EC2 User Guide*.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-launchtemplate.html}
 */
export class EC2LaunchTemplate extends $Resource<
  "AWS::EC2::LaunchTemplate",
  EC2LaunchTemplateProperties,
  EC2LaunchTemplateAttributes
> {
  public static readonly Type = "AWS::EC2::LaunchTemplate";
  constructor(
    logicalId: string,
    properties: EC2LaunchTemplateProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, EC2LaunchTemplate.Type, properties, options);
  }
}
