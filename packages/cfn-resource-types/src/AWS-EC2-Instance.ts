import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::EC2::Instance
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-instance.html}
 */
export type EC2InstanceProperties = {
  /**
   * This property is reserved for internal use. If you use it, the stack fails with this error: Bad property set: [Testing this property] (Service: AmazonEC2; Status Code: 400; Error Code: InvalidParameterCombination; Request ID: 0XXXXXX-49c7-4b40-8bcc-76885dcXXXXX).
   */
  AdditionalInfo?: string;
  /**
   * Indicates whether the instance is associated with a dedicated host. If you want the instance to always restart on the same host on which it was launched, specify host. If you want the instance to restart on any available host, but try to launch onto the last host it ran on (on a best-effort basis), specify default.
   */
  Affinity?: "default" | "host";
  /**
   * The Availability Zone of the instance.
   */
  AvailabilityZone?: string;
  /**
   * The block device mapping entries that defines the block devices to attach to the instance at launch.
   */
  BlockDeviceMappings?: BlockDeviceMapping[];
  /**
   * The CPU options for the instance.
   */
  CpuOptions?: {
    CoreCount?: number;
    ThreadsPerCore?: number;
  };
  /**
   * The credit option for CPU usage of the burstable performance instance. Valid values are standard and unlimited.
   */
  CreditSpecification?: {
    CPUCredits?: string;
  };
  /**
   * If you set this parameter to true, you can't terminate the instance using the Amazon EC2 console, CLI, or API; otherwise, you can.
   */
  DisableApiTermination?: boolean;
  /**
   * Indicates whether the instance is optimized for Amazon EBS I/O.
   */
  EbsOptimized?: boolean;
  /**
   * An elastic GPU to associate with the instance.
   */
  ElasticGpuSpecifications?: ElasticGpuSpecification[];
  /**
   * An elastic inference accelerator to associate with the instance.
   */
  ElasticInferenceAccelerators?: ElasticInferenceAccelerator[];
  /**
   * Indicates whether the instance is enabled for AWS Nitro Enclaves.
   */
  EnclaveOptions?: {
    /**
     * If this parameter is set to true, the instance is enabled for AWS Nitro Enclaves; otherwise, it is not enabled for AWS Nitro Enclaves.
     */
    Enabled?: boolean;
  };
  /**
   * Indicates whether an instance is enabled for hibernation.
   */
  HibernationOptions?: {
    /**
     * If you set this parameter to true, your instance is enabled for hibernation.
     */
    Configured?: boolean;
  };
  /**
   * If you specify host for the Affinity property, the ID of a dedicated host that the instance is associated with. If you don't specify an ID, Amazon EC2 launches the instance onto any available, compatible dedicated host in your account.
   */
  HostId?: string;
  /**
   * The ARN of the host resource group in which to launch the instances. If you specify a host resource group ARN, omit the Tenancy parameter or set it to host.
   */
  HostResourceGroupArn?: string;
  /**
   * The IAM instance profile.
   */
  IamInstanceProfile?: string;
  /**
   * The ID of the AMI. An AMI ID is required to launch an instance and must be specified here or in a launch template.
   */
  ImageId?: string;
  /**
   * Indicates whether an instance stops or terminates when you initiate shutdown from the instance (using the operating system command for system shutdown).
   */
  InstanceInitiatedShutdownBehavior?: string;
  /**
   * The instance type.
   */
  InstanceType?: string;
  /**
   * [EC2-VPC] The number of IPv6 addresses to associate with the primary network interface. Amazon EC2 chooses the IPv6 addresses from the range of your subnet.
   */
  Ipv6AddressCount?: number;
  /**
   * [EC2-VPC] The IPv6 addresses from the range of the subnet to associate with the primary network interface.
   */
  Ipv6Addresses?: InstanceIpv6Address[];
  /**
   * The ID of the kernel.
   */
  KernelId?: string;
  /**
   * The name of the key pair.
   */
  KeyName?: string;
  /**
   * The launch template to use to launch the instances.
   */
  LaunchTemplate?: LaunchTemplateSpecification;
  /**
   * The license configurations.
   */
  LicenseSpecifications?: LicenseSpecification[];
  /**
   * The metadata options for the instance
   */
  MetadataOptions?: MetadataOptions;
  /**
   * Specifies whether detailed monitoring is enabled for the instance.
   */
  Monitoring?: boolean;
  /**
   * The network interfaces to associate with the instance.
   */
  NetworkInterfaces?: NetworkInterface[];
  /**
   * The name of an existing placement group that you want to launch the instance into (cluster | partition | spread).
   */
  PlacementGroupName?: string;
  /**
   * The options for the instance hostname.
   */
  PrivateDnsNameOptions?: PrivateDnsNameOptions;
  /**
   * [EC2-VPC] The primary IPv4 address. You must specify a value from the IPv4 address range of the subnet.
   */
  PrivateIpAddress?: string;
  /**
   * Indicates whether to assign the tags from the instance to all of the volumes attached to the instance at launch. If you specify true and you assign tags to the instance, those tags are automatically assigned to all of the volumes that you attach to the instance at launch. If you specify false, those tags are not assigned to the attached volumes.
   */
  PropagateTagsToVolumeOnCreation?: boolean;
  /**
   * The ID of the RAM disk to select.
   */
  RamdiskId?: string;
  /**
   * The IDs of the security groups.
   */
  SecurityGroupIds?: string[];
  /**
   * the names of the security groups. For a nondefault VPC, you must use security group IDs instead.
   */
  SecurityGroups?: string[];
  /**
   * Specifies whether to enable an instance launched in a VPC to perform NAT.
   */
  SourceDestCheck?: boolean;
  /**
   * The SSM document and parameter values in AWS Systems Manager to associate with this instance.
   */
  SsmAssociations?: SsmAssociation[];
  /**
     * [EC2-VPC] The ID of the subnet to launch the instance into.
    
    
     */
  SubnetId?: string;
  /**
   * The tags to add to the instance.
   */
  Tags?: Tag[];
  /**
   * The tenancy of the instance (if the instance is running in a VPC). An instance with a tenancy of dedicated runs on single-tenant hardware.
   */
  Tenancy?: string;
  /**
   * The user data to make available to the instance.
   */
  UserData?: string;
  /**
   * The volumes to attach to the instance.
   */
  Volumes?: Volume[];
};
/**
 * Attribute type definition for `AWS::EC2::Instance`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-instance.html#aws-resource-ec2-instance-return-values}
 */
export type EC2InstanceAttributes = {
  /**
   * The EC2 Instance ID.
   */
  InstanceId: string;
  /**
   * The private DNS name of the specified instance. For example: ip-10-24-34-0.ec2.internal.
   */
  PrivateDnsName: string;
  /**
   * The private IP address of the specified instance. For example: 10.24.34.0.
   */
  PrivateIp: string;
  /**
   * The public DNS name of the specified instance. For example: ec2-107-20-50-45.compute-1.amazonaws.com.
   */
  PublicDnsName: string;
  /**
   * The public IP address of the specified instance. For example: 192.0.2.0.
   */
  PublicIp: string;
  /**
   * The current state of the instance.
   */
  State: {
    /**
     * The state of the instance as a 16-bit unsigned integer.
     */
    Code: string;
    /**
     * The current state of the instance.
     */
    Name: string;
  };
  /**
   * The ID of the VPC that the instance is running in.
   */
  VpcId: string;
};
/**
 * Type definition for `AWS::EC2::Instance.AssociationParameter`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-instance-associationparameter.html}
 */
export type AssociationParameter = {
  /**
   * The name of an input parameter that is in the associated SSM document.
   */
  Key: string;
  /**
   * The value of an input parameter.
   */
  Value: string[];
};
/**
 * Type definition for `AWS::EC2::Instance.BlockDeviceMapping`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-instance-blockdevicemapping.html}
 */
export type BlockDeviceMapping = {
  /**
   * The device name (for example, /dev/sdh or xvdh).
   */
  DeviceName: string;
  /**
   * Parameters used to automatically set up EBS volumes when the instance is launched.
   */
  Ebs?: Ebs;
  NoDevice?: Record<string, any>;
  VirtualName?: string;
};
/**
 * Type definition for `AWS::EC2::Instance.Ebs`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-instance-ebs.html}
 */
export type Ebs = {
  /**
   * Indicates whether the EBS volume is deleted on instance termination.
   */
  DeleteOnTermination?: boolean;
  /**
   * Indicates whether the volume should be encrypted.
   */
  Encrypted?: boolean;
  /**
   * The number of I/O operations per second (IOPS). For gp3, io1, and io2 volumes, this represents the number of IOPS that are provisioned for the volume. For gp2 volumes, this represents the baseline performance of the volume and the rate at which the volume accumulates I/O credits for bursting.
   */
  Iops?: number;
  /**
   * The identifier of the AWS Key Management Service (AWS KMS) customer managed CMK to use for Amazon EBS encryption. If KmsKeyId is specified, the encrypted state must be true. If the encrypted state is true but you do not specify KmsKeyId, your AWS managed CMK for EBS is used.
   */
  KmsKeyId?: string;
  /**
   * The ID of the snapshot.
   */
  SnapshotId?: string;
  /**
   * The size of the volume, in GiBs. You must specify either a snapshot ID or a volume size. If you specify a snapshot, the default is the snapshot size. You can specify a volume size that is equal to or larger than the snapshot size.
   */
  VolumeSize?: number;
  /**
   * The volume type.
   */
  VolumeType?: string;
};
/**
 * Type definition for `AWS::EC2::Instance.ElasticGpuSpecification`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-instance-elasticgpuspecification.html}
 */
export type ElasticGpuSpecification = {
  /**
   * The type of Elastic Graphics accelerator.
   */
  Type: string;
};
/**
 * Type definition for `AWS::EC2::Instance.ElasticInferenceAccelerator`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-instance-elasticinferenceaccelerator.html}
 */
export type ElasticInferenceAccelerator = {
  /**
   * The number of elastic inference accelerators to attach to the instance.
   * @min `0`
   */
  Count?: number;
  /**
   * The type of elastic inference accelerator.
   */
  Type: string;
};
/**
 * Type definition for `AWS::EC2::Instance.EnaSrdSpecification`.
 * Specifies the ENA Express settings for the network interface that's attached to the instance.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-instance-enasrdspecification.html}
 */
export type EnaSrdSpecification = {
  /**
   * Specifies whether ENA Express is enabled for the network interface when you launch an instance.
   */
  EnaSrdEnabled?: boolean;
  /**
   * Contains ENA Express settings for UDP network traffic for the network interface that's attached to the instance.
   */
  EnaSrdUdpSpecification?: EnaSrdUdpSpecification;
};
/**
 * Type definition for `AWS::EC2::Instance.EnaSrdUdpSpecification`.
 * Contains ENA Express settings for UDP network traffic for the network interface that's attached to the instance.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-instance-enasrdudpspecification.html}
 */
export type EnaSrdUdpSpecification = {
  /**
   * Indicates whether UDP traffic uses ENA Express for your instance.
   */
  EnaSrdUdpEnabled?: boolean;
};
/**
 * Type definition for `AWS::EC2::Instance.InstanceIpv6Address`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-instance-instanceipv6address.html}
 */
export type InstanceIpv6Address = {
  /**
   * The IPv6 address.
   */
  Ipv6Address: string;
};
/**
 * Type definition for `AWS::EC2::Instance.LaunchTemplateSpecification`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-instance-launchtemplatespecification.html}
 */
export type LaunchTemplateSpecification = {
  /**
   * The ID of the launch template. You must specify the LaunchTemplateName or the LaunchTemplateId, but not both.
   */
  LaunchTemplateId?: string;
  /**
   * The name of the launch template. You must specify the LaunchTemplateName or the LaunchTemplateId, but not both.
   */
  LaunchTemplateName?: string;
  /**
   * The version number of the launch template.
   */
  Version?: string;
};
/**
 * Type definition for `AWS::EC2::Instance.LicenseSpecification`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-instance-licensespecification.html}
 */
export type LicenseSpecification = {
  /**
   * The Amazon Resource Name (ARN) of the license configuration.
   */
  LicenseConfigurationArn: string;
};
/**
 * Type definition for `AWS::EC2::Instance.MetadataOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-instance-metadataoptions.html}
 */
export type MetadataOptions = {
  /**
   * Enables or disables the HTTP metadata endpoint on your instances. If you specify a value of disabled, you cannot access your instance metadata.
   */
  HttpEndpoint?: "disabled" | "enabled";
  /**
   * Enables or disables the IPv6 endpoint for the instance metadata service. To use this option, the instance must be a Nitro-based instance launched in a subnet that supports IPv6.
   */
  HttpProtocolIpv6?: "disabled" | "enabled";
  /**
   * The number of network hops that the metadata token can travel. Maximum is 64.
   * @min `1`
   * @max `64`
   */
  HttpPutResponseHopLimit?: number;
  /**
   * Indicates whether IMDSv2 is required.
   */
  HttpTokens?: "optional" | "required";
  /**
   * Indicates whether tags from the instance are propagated to the EBS volumes.
   */
  InstanceMetadataTags?: "disabled" | "enabled";
};
/**
 * Type definition for `AWS::EC2::Instance.NetworkInterface`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-instance-networkinterface.html}
 */
export type NetworkInterface = {
  /**
   * Not currently supported by AWS CloudFormation.
   */
  AssociateCarrierIpAddress?: boolean;
  /**
   * Indicates whether to assign a public IPv4 address to an instance you launch in a VPC.
   */
  AssociatePublicIpAddress?: boolean;
  /**
   * If set to true, the interface is deleted when the instance is terminated.
   */
  DeleteOnTermination?: boolean;
  /**
   * The description of the network interface.
   */
  Description?: string;
  /**
   * The position of the network interface in the attachment order. A primary network interface has a device index of 0.
   */
  DeviceIndex: string;
  /**
   * Specifies the ENA Express settings for the network interface that's attached to the instance.
   */
  EnaSrdSpecification?: EnaSrdSpecification;
  /**
   * The IDs of the security groups for the network interface.
   */
  GroupSet?: string[];
  /**
   * A number of IPv6 addresses to assign to the network interface.
   */
  Ipv6AddressCount?: number;
  /**
   * The IPv6 addresses associated with the network interface.
   */
  Ipv6Addresses?: InstanceIpv6Address[];
  /**
   * The ID of the network interface.
   */
  NetworkInterfaceId?: string;
  /**
   * The private IPv4 address of the network interface.
   */
  PrivateIpAddress?: string;
  /**
   * One or more private IPv4 addresses to assign to the network interface.
   */
  PrivateIpAddresses?: PrivateIpAddressSpecification[];
  /**
   * The number of secondary private IPv4 addresses.
   */
  SecondaryPrivateIpAddressCount?: number;
  /**
   * The ID of the subnet.
   */
  SubnetId?: string;
};
/**
 * Type definition for `AWS::EC2::Instance.PrivateDnsNameOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-instance-privatednsnameoptions.html}
 */
export type PrivateDnsNameOptions = {
  /**
   * Indicates whether to respond to DNS queries for instance hostnames with DNS AAAA records. For more information, see Amazon EC2 instance hostname types in the Amazon Elastic Compute Cloud User Guide.
   */
  EnableResourceNameDnsAAAARecord?: boolean;
  /**
   * Indicates whether to respond to DNS queries for instance hostnames with DNS A records. For more information, see Amazon EC2 instance hostname types in the Amazon Elastic Compute Cloud User Guide.
   */
  EnableResourceNameDnsARecord?: boolean;
  /**
   * The type of hostnames to assign to instances in the subnet at launch. For IPv4 only subnets, an instance DNS name must be based on the instance IPv4 address. For IPv6 only subnets, an instance DNS name must be based on the instance ID. For dual-stack subnets, you can specify whether DNS names use the instance IPv4 address or the instance ID. For more information, see Amazon EC2 instance hostname types in the Amazon Elastic Compute Cloud User Guide.
   */
  HostnameType?: "ip-name" | "resource-name";
};
/**
 * Type definition for `AWS::EC2::Instance.PrivateIpAddressSpecification`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-instance-privateipaddressspecification.html}
 */
export type PrivateIpAddressSpecification = {
  /**
   * Indicates whether the private IPv4 address is the primary private IPv4 address. Only one IPv4 address can be designated as primary.
   */
  Primary: boolean;
  /**
   * The private IPv4 addresses.
   */
  PrivateIpAddress: string;
};
/**
 * Type definition for `AWS::EC2::Instance.SsmAssociation`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-instance-ssmassociation.html}
 */
export type SsmAssociation = {
  /**
   * The input parameter values to use with the associated SSM document.
   */
  AssociationParameters?: AssociationParameter[];
  /**
   * The name of an SSM document to associate with the instance.
   */
  DocumentName: string;
};
/**
 * Type definition for `AWS::EC2::Instance.State`.
 * The current state of the instance
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-instance-state.html}
 */
export type State = {
  /**
   * The state of the instance as a 16-bit unsigned integer.
   */
  Code?: string;
  /**
   * The current state of the instance.
   */
  Name?: string;
};
/**
 * Type definition for `AWS::EC2::Instance.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-instance-tag.html}
 */
export type Tag = {
  Key: string;
  Value: string;
};
/**
 * Type definition for `AWS::EC2::Instance.Volume`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-instance-volume.html}
 */
export type Volume = {
  /**
   * The device name (for example, /dev/sdh or xvdh).
   */
  Device: string;
  /**
   * The ID of the EBS volume. The volume and instance must be within the same Availability Zone.
   */
  VolumeId: string;
};
/**
 * Resource Type definition for AWS::EC2::Instance
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-instance.html}
 */
export class EC2Instance extends $Resource<
  "AWS::EC2::Instance",
  EC2InstanceProperties,
  EC2InstanceAttributes
> {
  public static readonly Type = "AWS::EC2::Instance";
  constructor(
    logicalId: string,
    properties: EC2InstanceProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, EC2Instance.Type, properties, options);
  }
}
