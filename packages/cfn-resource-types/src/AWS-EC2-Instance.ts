import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::EC2::Instance
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-instance.html}
 */
export type EC2InstanceProperties = {
  AdditionalInfo?: string;
  Affinity?: string;
  AvailabilityZone?: string;
  BlockDeviceMappings?: BlockDeviceMapping[];
  CpuOptions?: CpuOptions;
  CreditSpecification?: CreditSpecification;
  DisableApiTermination?: boolean;
  EbsOptimized?: boolean;
  ElasticGpuSpecifications?: ElasticGpuSpecification[];
  ElasticInferenceAccelerators?: ElasticInferenceAccelerator[];
  EnclaveOptions?: EnclaveOptions;
  HibernationOptions?: HibernationOptions;
  HostId?: string;
  HostResourceGroupArn?: string;
  IamInstanceProfile?: string;
  ImageId?: string;
  InstanceInitiatedShutdownBehavior?: string;
  InstanceType?: string;
  Ipv6AddressCount?: number;
  Ipv6Addresses?: InstanceIpv6Address[];
  KernelId?: string;
  KeyName?: string;
  LaunchTemplate?: LaunchTemplateSpecification;
  LicenseSpecifications?: LicenseSpecification[];
  Monitoring?: boolean;
  NetworkInterfaces?: NetworkInterface[];
  PlacementGroupName?: string;
  PrivateDnsNameOptions?: PrivateDnsNameOptions;
  PrivateIpAddress?: string;
  PropagateTagsToVolumeOnCreation?: boolean;
  RamdiskId?: string;
  SecurityGroupIds?: string[];
  SecurityGroups?: string[];
  SourceDestCheck?: boolean;
  SsmAssociations?: SsmAssociation[];
  SubnetId?: string;
  Tags?: Tag[];
  Tenancy?: string;
  UserData?: string;
  Volumes?: Volume[];
};
/**
 * Attribute type definition for `AWS::EC2::Instance`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-instance.html#aws-resource-ec2-instance-return-values}
 */
export type EC2InstanceAttributes = {
  Id: string;
  PrivateDnsName: string;
  PrivateIp: string;
  PublicDnsName: string;
  PublicIp: string;
};
/**
 * Type definition for `AWS::EC2::Instance.AssociationParameter`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-instance-associationparameter.html}
 */
export type AssociationParameter = {
  Key: string;
  Value: string[];
};
/**
 * Type definition for `AWS::EC2::Instance.BlockDeviceMapping`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-instance-blockdevicemapping.html}
 */
export type BlockDeviceMapping = {
  DeviceName: string;
  Ebs?: Ebs;
  NoDevice?: NoDevice;
  VirtualName?: string;
};
/**
 * Type definition for `AWS::EC2::Instance.CpuOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-instance-cpuoptions.html}
 */
export type CpuOptions = {
  CoreCount?: number;
  ThreadsPerCore?: number;
};
/**
 * Type definition for `AWS::EC2::Instance.CreditSpecification`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-instance-creditspecification.html}
 */
export type CreditSpecification = {
  CPUCredits?: string;
};
/**
 * Type definition for `AWS::EC2::Instance.Ebs`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-instance-ebs.html}
 */
export type Ebs = {
  DeleteOnTermination?: boolean;
  Encrypted?: boolean;
  Iops?: number;
  KmsKeyId?: string;
  SnapshotId?: string;
  VolumeSize?: number;
  VolumeType?: string;
};
/**
 * Type definition for `AWS::EC2::Instance.ElasticGpuSpecification`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-instance-elasticgpuspecification.html}
 */
export type ElasticGpuSpecification = {
  Type: string;
};
/**
 * Type definition for `AWS::EC2::Instance.ElasticInferenceAccelerator`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-instance-elasticinferenceaccelerator.html}
 */
export type ElasticInferenceAccelerator = {
  Count?: number;
  Type: string;
};
/**
 * Type definition for `AWS::EC2::Instance.EnclaveOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-instance-enclaveoptions.html}
 */
export type EnclaveOptions = {
  Enabled?: boolean;
};
/**
 * Type definition for `AWS::EC2::Instance.HibernationOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-instance-hibernationoptions.html}
 */
export type HibernationOptions = {
  Configured?: boolean;
};
/**
 * Type definition for `AWS::EC2::Instance.InstanceIpv6Address`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-instance-instanceipv6address.html}
 */
export type InstanceIpv6Address = {
  Ipv6Address: string;
};
/**
 * Type definition for `AWS::EC2::Instance.LaunchTemplateSpecification`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-instance-launchtemplatespecification.html}
 */
export type LaunchTemplateSpecification = {
  LaunchTemplateId?: string;
  LaunchTemplateName?: string;
  Version: string;
};
/**
 * Type definition for `AWS::EC2::Instance.LicenseSpecification`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-instance-licensespecification.html}
 */
export type LicenseSpecification = {
  LicenseConfigurationArn: string;
};
/**
 * Type definition for `AWS::EC2::Instance.NetworkInterface`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-instance-networkinterface.html}
 */
export type NetworkInterface = {
  AssociateCarrierIpAddress?: boolean;
  AssociatePublicIpAddress?: boolean;
  DeleteOnTermination?: boolean;
  Description?: string;
  DeviceIndex: string;
  GroupSet?: string[];
  Ipv6AddressCount?: number;
  Ipv6Addresses?: InstanceIpv6Address[];
  NetworkInterfaceId?: string;
  PrivateIpAddress?: string;
  PrivateIpAddresses?: PrivateIpAddressSpecification[];
  SecondaryPrivateIpAddressCount?: number;
  SubnetId?: string;
};
/**
 * Type definition for `AWS::EC2::Instance.NoDevice`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-instance-nodevice.html}
 */
export type NoDevice = Record<string, any>;
/**
 * Type definition for `AWS::EC2::Instance.PrivateDnsNameOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-instance-privatednsnameoptions.html}
 */
export type PrivateDnsNameOptions = {
  EnableResourceNameDnsAAAARecord?: boolean;
  EnableResourceNameDnsARecord?: boolean;
  HostnameType?: string;
};
/**
 * Type definition for `AWS::EC2::Instance.PrivateIpAddressSpecification`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-instance-privateipaddressspecification.html}
 */
export type PrivateIpAddressSpecification = {
  Primary: boolean;
  PrivateIpAddress: string;
};
/**
 * Type definition for `AWS::EC2::Instance.SsmAssociation`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-instance-ssmassociation.html}
 */
export type SsmAssociation = {
  AssociationParameters?: AssociationParameter[];
  DocumentName: string;
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
  Device: string;
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
