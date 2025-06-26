import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::WorkspacesInstances::WorkspaceInstance
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspacesinstances-workspaceinstance.html}
 */
export type WorkspacesInstancesWorkspaceInstanceProperties = {
  ManagedInstance?: {
    BlockDeviceMappings?: BlockDeviceMapping[];
    CpuOptions?: CpuOptionsRequest;
    CreditSpecification?: CreditSpecificationRequest;
    DisableApiStop?: boolean;
    EbsOptimized?: boolean;
    EnclaveOptions?: EnclaveOptionsRequest;
    HibernationOptions?: HibernationOptionsRequest;
    IamInstanceProfile?: IamInstanceProfileSpecification;
    /**
     * @pattern `^ami-[0-9a-zA-Z]{1,63}$`
     */
    ImageId: string;
    /**
     * @pattern `^([a-z0-9-]+)\.([a-z0-9]+)$`
     */
    InstanceType: string;
    /**
     * @maxLength `64`
     */
    KeyName?: string;
    MaintenanceOptions?: InstanceMaintenanceOptionsRequest;
    MetadataOptions?: InstanceMetadataOptionsRequest;
    Monitoring?: RunInstancesMonitoringEnabled;
    NetworkInterfaces?: InstanceNetworkInterfaceSpecification[];
    NetworkPerformanceOptions?: InstanceNetworkPerformanceOptionsRequest;
    Placement?: Placement;
    PrivateDnsNameOptions?: PrivateDnsNameOptionsRequest;
    /**
     * @maxLength `30`
     */
    TagSpecifications?: TagSpecification[];
    /**
     * @maxLength `16000`
     */
    UserData?: string;
  };
  /**
   * @maxLength `30`
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::WorkspacesInstances::WorkspaceInstance`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspacesinstances-workspaceinstance.html#aws-resource-workspacesinstances-workspaceinstance-return-values}
 */
export type WorkspacesInstancesWorkspaceInstanceAttributes = {
  EC2ManagedInstance: {
    InstanceId: string;
  };
  /**
   * The current state of the workspace instance
   */
  ProvisionState:
    | "ALLOCATING"
    | "ALLOCATED"
    | "DEALLOCATING"
    | "DEALLOCATED"
    | "ERROR_ALLOCATING"
    | "ERROR_DEALLOCATING";
  /**
   * Unique identifier for the workspace instance
   * @pattern `^wsinst-[0-9a-zA-Z]{8,63}$`
   */
  WorkspaceInstanceId: string;
};
/**
 * Type definition for `AWS::WorkspacesInstances::WorkspaceInstance.BlockDeviceMapping`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-workspacesinstances-workspaceinstance-blockdevicemapping.html}
 */
export type BlockDeviceMapping = {
  /**
   * @maxLength `32`
   */
  DeviceName?: string;
  Ebs?: EbsBlockDevice;
  /**
   * @maxLength `32`
   */
  NoDevice?: string;
  /**
   * @pattern `^ephemeral(0|[1-9][0-9]{0,2})$`
   */
  VirtualName?: string;
};
/**
 * Type definition for `AWS::WorkspacesInstances::WorkspaceInstance.CpuOptionsRequest`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-workspacesinstances-workspaceinstance-cpuoptionsrequest.html}
 */
export type CpuOptionsRequest = {
  /**
   * @min `0`
   */
  CoreCount?: number;
  /**
   * @min `0`
   */
  ThreadsPerCore?: number;
};
/**
 * Type definition for `AWS::WorkspacesInstances::WorkspaceInstance.CreditSpecificationRequest`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-workspacesinstances-workspaceinstance-creditspecificationrequest.html}
 */
export type CreditSpecificationRequest = {
  CpuCredits?: "standard" | "unlimited";
};
/**
 * Type definition for `AWS::WorkspacesInstances::WorkspaceInstance.EbsBlockDevice`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-workspacesinstances-workspaceinstance-ebsblockdevice.html}
 */
export type EbsBlockDevice = {
  Encrypted?: boolean;
  /**
   * @min `0`
   */
  Iops?: number;
  /**
   * @maxLength `128`
   */
  KmsKeyId?: string;
  /**
   * @min `0`
   */
  Throughput?: number;
  /**
   * @min `0`
   */
  VolumeSize?: number;
  VolumeType?: "standard" | "io1" | "io2" | "gp2" | "sc1" | "st1" | "gp3";
};
/**
 * Type definition for `AWS::WorkspacesInstances::WorkspaceInstance.EnclaveOptionsRequest`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-workspacesinstances-workspaceinstance-enclaveoptionsrequest.html}
 */
export type EnclaveOptionsRequest = {
  Enabled?: boolean;
};
/**
 * Type definition for `AWS::WorkspacesInstances::WorkspaceInstance.HibernationOptionsRequest`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-workspacesinstances-workspaceinstance-hibernationoptionsrequest.html}
 */
export type HibernationOptionsRequest = {
  Configured?: boolean;
};
/**
 * Type definition for `AWS::WorkspacesInstances::WorkspaceInstance.IamInstanceProfileSpecification`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-workspacesinstances-workspaceinstance-iaminstanceprofilespecification.html}
 */
export type IamInstanceProfileSpecification = {
  /**
   * @maxLength `64`
   */
  Name?: string;
};
/**
 * Type definition for `AWS::WorkspacesInstances::WorkspaceInstance.InstanceMaintenanceOptionsRequest`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-workspacesinstances-workspaceinstance-instancemaintenanceoptionsrequest.html}
 */
export type InstanceMaintenanceOptionsRequest = {
  AutoRecovery?: "disabled" | "default";
};
/**
 * Type definition for `AWS::WorkspacesInstances::WorkspaceInstance.InstanceMetadataOptionsRequest`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-workspacesinstances-workspaceinstance-instancemetadataoptionsrequest.html}
 */
export type InstanceMetadataOptionsRequest = {
  HttpEndpoint?: "enabled" | "disabled";
  HttpProtocolIpv6?: "enabled" | "disabled";
  /**
   * @min `1`
   * @max `64`
   */
  HttpPutResponseHopLimit?: number;
  HttpTokens?: "optional" | "required";
  InstanceMetadataTags?: "enabled" | "disabled";
};
/**
 * Type definition for `AWS::WorkspacesInstances::WorkspaceInstance.InstanceNetworkInterfaceSpecification`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-workspacesinstances-workspaceinstance-instancenetworkinterfacespecification.html}
 */
export type InstanceNetworkInterfaceSpecification = {
  /**
   * @maxLength `1000`
   * @pattern `^[\S\s]*$`
   */
  Description?: string;
  /**
   * @min `0`
   */
  DeviceIndex?: number;
  Groups?: string[];
  /**
   * @pattern `^subnet-[0-9a-zA-Z]{1,63}$`
   */
  SubnetId?: string;
};
/**
 * Type definition for `AWS::WorkspacesInstances::WorkspaceInstance.InstanceNetworkPerformanceOptionsRequest`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-workspacesinstances-workspaceinstance-instancenetworkperformanceoptionsrequest.html}
 */
export type InstanceNetworkPerformanceOptionsRequest = {
  BandwidthWeighting?: "default" | "vpc-1" | "ebs-1";
};
/**
 * Type definition for `AWS::WorkspacesInstances::WorkspaceInstance.Placement`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-workspacesinstances-workspaceinstance-placement.html}
 */
export type Placement = {
  /**
   * @pattern `^[a-z]{2}-[a-z]+-\d[a-z](-[a-z0-9]+)?$`
   */
  AvailabilityZone?: string;
  /**
   * @maxLength `255`
   */
  GroupName?: string;
  Tenancy?: "default" | "dedicated" | "host";
};
/**
 * Type definition for `AWS::WorkspacesInstances::WorkspaceInstance.PrivateDnsNameOptionsRequest`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-workspacesinstances-workspaceinstance-privatednsnameoptionsrequest.html}
 */
export type PrivateDnsNameOptionsRequest = {
  EnableResourceNameDnsAAAARecord?: boolean;
  EnableResourceNameDnsARecord?: boolean;
  HostnameType?: "ip-name" | "resource-name";
};
/**
 * Type definition for `AWS::WorkspacesInstances::WorkspaceInstance.RunInstancesMonitoringEnabled`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-workspacesinstances-workspaceinstance-runinstancesmonitoringenabled.html}
 */
export type RunInstancesMonitoringEnabled = {
  Enabled?: boolean;
};
/**
 * Type definition for `AWS::WorkspacesInstances::WorkspaceInstance.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-workspacesinstances-workspaceinstance-tag.html}
 */
export type Tag = {
  /**
   * @minLength `1`
   * @maxLength `128`
   */
  Key: string;
  /**
   * @maxLength `256`
   */
  Value?: string;
};
/**
 * Type definition for `AWS::WorkspacesInstances::WorkspaceInstance.TagSpecification`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-workspacesinstances-workspaceinstance-tagspecification.html}
 */
export type TagSpecification = {
  ResourceType?:
    | "instance"
    | "volume"
    | "spot-instances-request"
    | "network-interface";
  /**
   * @maxLength `30`
   */
  Tags?: Tag[];
};
/**
 * Resource Type definition for AWS::WorkspacesInstances::WorkspaceInstance
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspacesinstances-workspaceinstance.html}
 */
export class WorkspacesInstancesWorkspaceInstance extends $Resource<
  "AWS::WorkspacesInstances::WorkspaceInstance",
  WorkspacesInstancesWorkspaceInstanceProperties,
  WorkspacesInstancesWorkspaceInstanceAttributes
> {
  public static readonly Type = "AWS::WorkspacesInstances::WorkspaceInstance";
  constructor(
    logicalId: string,
    properties: WorkspacesInstancesWorkspaceInstanceProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      WorkspacesInstancesWorkspaceInstance.Type,
      properties,
      options,
    );
  }
}
