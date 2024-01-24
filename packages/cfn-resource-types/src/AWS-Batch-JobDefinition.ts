import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::Batch::JobDefinition
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html}
 */
export type BatchJobDefinitionProperties = {
  ContainerProperties?: ContainerProperties;
  EksProperties?: EksProperties;
  JobDefinitionName?: string;
  NodeProperties?: NodeProperties;
  Parameters?: Record<string, any>;
  PlatformCapabilities?: string[];
  PropagateTags?: boolean;
  RetryStrategy?: RetryStrategy;
  SchedulingPriority?: number;
  Tags?: Record<string, any>;
  Timeout?: Timeout;
  Type: string;
};
/**
 * Attribute type definition for `AWS::Batch::JobDefinition`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html#aws-resource-batch-jobdefinition-return-values}
 */
export type BatchJobDefinitionAttributes = {
  Id: string;
};
/**
 * Type definition for `AWS::Batch::JobDefinition.AuthorizationConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-batch-jobdefinition-authorizationconfig.html}
 */
export type AuthorizationConfig = {
  AccessPointId?: string;
  Iam?: string;
};
/**
 * Type definition for `AWS::Batch::JobDefinition.ContainerProperties`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-batch-jobdefinition-containerproperties.html}
 */
export type ContainerProperties = {
  Command?: string[];
  Environment?: Environment[];
  EphemeralStorage?: EphemeralStorage;
  ExecutionRoleArn?: string;
  FargatePlatformConfiguration?: FargatePlatformConfiguration;
  Image: string;
  InstanceType?: string;
  JobRoleArn?: string;
  LinuxParameters?: LinuxParameters;
  LogConfiguration?: LogConfiguration;
  Memory?: number;
  MountPoints?: MountPoints[];
  NetworkConfiguration?: NetworkConfiguration;
  Privileged?: boolean;
  ReadonlyRootFilesystem?: boolean;
  ResourceRequirements?: ResourceRequirement[];
  RuntimePlatform?: RuntimePlatform;
  Secrets?: Secret[];
  Ulimits?: Ulimit[];
  User?: string;
  Vcpus?: number;
  Volumes?: Volumes[];
};
/**
 * Type definition for `AWS::Batch::JobDefinition.Device`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-batch-jobdefinition-device.html}
 */
export type Device = {
  ContainerPath?: string;
  HostPath?: string;
  Permissions?: string[];
};
/**
 * Type definition for `AWS::Batch::JobDefinition.EfsVolumeConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-batch-jobdefinition-efsvolumeconfiguration.html}
 */
export type EfsVolumeConfiguration = {
  AuthorizationConfig?: AuthorizationConfig;
  FileSystemId: string;
  RootDirectory?: string;
  TransitEncryption?: string;
  TransitEncryptionPort?: number;
};
/**
 * Type definition for `AWS::Batch::JobDefinition.EksContainer`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-batch-jobdefinition-ekscontainer.html}
 */
export type EksContainer = {
  Args?: string[];
  Command?: string[];
  Env?: EksContainerEnvironmentVariable[];
  Image: string;
  ImagePullPolicy?: string;
  Name?: string;
  Resources?: EksContainerResourceRequirements;
  SecurityContext?: EksContainerSecurityContext;
  VolumeMounts?: EksContainerVolumeMount[];
};
/**
 * Type definition for `AWS::Batch::JobDefinition.EksContainerEnvironmentVariable`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-batch-jobdefinition-ekscontainerenvironmentvariable.html}
 */
export type EksContainerEnvironmentVariable = {
  Name: string;
  Value?: string;
};
/**
 * Type definition for `AWS::Batch::JobDefinition.EksContainerResourceRequirements`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-batch-jobdefinition-ekscontainerresourcerequirements.html}
 */
export type EksContainerResourceRequirements = {
  Limits?: Record<string, any>;
  Requests?: Record<string, any>;
};
/**
 * Type definition for `AWS::Batch::JobDefinition.EksContainerSecurityContext`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-batch-jobdefinition-ekscontainersecuritycontext.html}
 */
export type EksContainerSecurityContext = {
  Privileged?: boolean;
  ReadOnlyRootFilesystem?: boolean;
  RunAsGroup?: number;
  RunAsNonRoot?: boolean;
  RunAsUser?: number;
};
/**
 * Type definition for `AWS::Batch::JobDefinition.EksContainerVolumeMount`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-batch-jobdefinition-ekscontainervolumemount.html}
 */
export type EksContainerVolumeMount = {
  MountPath?: string;
  Name?: string;
  ReadOnly?: boolean;
};
/**
 * Type definition for `AWS::Batch::JobDefinition.EksEmptyDir`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-batch-jobdefinition-eksemptydir.html}
 */
export type EksEmptyDir = {
  Medium?: string;
  SizeLimit?: string;
};
/**
 * Type definition for `AWS::Batch::JobDefinition.EksHostPath`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-batch-jobdefinition-ekshostpath.html}
 */
export type EksHostPath = {
  Path?: string;
};
/**
 * Type definition for `AWS::Batch::JobDefinition.EksProperties`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-batch-jobdefinition-eksproperties.html}
 */
export type EksProperties = {
  PodProperties?: PodProperties;
};
/**
 * Type definition for `AWS::Batch::JobDefinition.EksSecret`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-batch-jobdefinition-ekssecret.html}
 */
export type EksSecret = {
  Optional?: boolean;
  SecretName: string;
};
/**
 * Type definition for `AWS::Batch::JobDefinition.EksVolume`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-batch-jobdefinition-eksvolume.html}
 */
export type EksVolume = {
  EmptyDir?: EksEmptyDir;
  HostPath?: EksHostPath;
  Name: string;
  Secret?: EksSecret;
};
/**
 * Type definition for `AWS::Batch::JobDefinition.Environment`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-batch-jobdefinition-environment.html}
 */
export type Environment = {
  Name?: string;
  Value?: string;
};
/**
 * Type definition for `AWS::Batch::JobDefinition.EphemeralStorage`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-batch-jobdefinition-ephemeralstorage.html}
 */
export type EphemeralStorage = {
  SizeInGiB: number;
};
/**
 * Type definition for `AWS::Batch::JobDefinition.EvaluateOnExit`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-batch-jobdefinition-evaluateonexit.html}
 */
export type EvaluateOnExit = {
  Action: string;
  OnExitCode?: string;
  OnReason?: string;
  OnStatusReason?: string;
};
/**
 * Type definition for `AWS::Batch::JobDefinition.FargatePlatformConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-batch-jobdefinition-fargateplatformconfiguration.html}
 */
export type FargatePlatformConfiguration = {
  PlatformVersion?: string;
};
/**
 * Type definition for `AWS::Batch::JobDefinition.LinuxParameters`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-batch-jobdefinition-linuxparameters.html}
 */
export type LinuxParameters = {
  Devices?: Device[];
  InitProcessEnabled?: boolean;
  MaxSwap?: number;
  SharedMemorySize?: number;
  Swappiness?: number;
  Tmpfs?: Tmpfs[];
};
/**
 * Type definition for `AWS::Batch::JobDefinition.LogConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-batch-jobdefinition-logconfiguration.html}
 */
export type LogConfiguration = {
  LogDriver: string;
  Options?: Record<string, any>;
  SecretOptions?: Secret[];
};
/**
 * Type definition for `AWS::Batch::JobDefinition.Metadata`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-batch-jobdefinition-metadata.html}
 */
export type Metadata = {
  Labels?: Record<string, any>;
};
/**
 * Type definition for `AWS::Batch::JobDefinition.MountPoints`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-batch-jobdefinition-mountpoints.html}
 */
export type MountPoints = {
  ContainerPath?: string;
  ReadOnly?: boolean;
  SourceVolume?: string;
};
/**
 * Type definition for `AWS::Batch::JobDefinition.NetworkConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-batch-jobdefinition-networkconfiguration.html}
 */
export type NetworkConfiguration = {
  AssignPublicIp?: string;
};
/**
 * Type definition for `AWS::Batch::JobDefinition.NodeProperties`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-batch-jobdefinition-nodeproperties.html}
 */
export type NodeProperties = {
  MainNode: number;
  NodeRangeProperties: NodeRangeProperty[];
  NumNodes: number;
};
/**
 * Type definition for `AWS::Batch::JobDefinition.NodeRangeProperty`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-batch-jobdefinition-noderangeproperty.html}
 */
export type NodeRangeProperty = {
  Container?: ContainerProperties;
  TargetNodes: string;
};
/**
 * Type definition for `AWS::Batch::JobDefinition.PodProperties`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-batch-jobdefinition-podproperties.html}
 */
export type PodProperties = {
  Containers?: EksContainer[];
  DnsPolicy?: string;
  HostNetwork?: boolean;
  Metadata?: Metadata;
  ServiceAccountName?: string;
  Volumes?: EksVolume[];
};
/**
 * Type definition for `AWS::Batch::JobDefinition.ResourceRequirement`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-batch-jobdefinition-resourcerequirement.html}
 */
export type ResourceRequirement = {
  Type?: string;
  Value?: string;
};
/**
 * Type definition for `AWS::Batch::JobDefinition.RetryStrategy`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-batch-jobdefinition-retrystrategy.html}
 */
export type RetryStrategy = {
  Attempts?: number;
  EvaluateOnExit?: EvaluateOnExit[];
};
/**
 * Type definition for `AWS::Batch::JobDefinition.RuntimePlatform`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-batch-jobdefinition-runtimeplatform.html}
 */
export type RuntimePlatform = {
  CpuArchitecture?: string;
  OperatingSystemFamily?: string;
};
/**
 * Type definition for `AWS::Batch::JobDefinition.Secret`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-batch-jobdefinition-secret.html}
 */
export type Secret = {
  Name: string;
  ValueFrom: string;
};
/**
 * Type definition for `AWS::Batch::JobDefinition.Timeout`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-batch-jobdefinition-timeout.html}
 */
export type Timeout = {
  AttemptDurationSeconds?: number;
};
/**
 * Type definition for `AWS::Batch::JobDefinition.Tmpfs`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-batch-jobdefinition-tmpfs.html}
 */
export type Tmpfs = {
  ContainerPath: string;
  MountOptions?: string[];
  Size: number;
};
/**
 * Type definition for `AWS::Batch::JobDefinition.Ulimit`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-batch-jobdefinition-ulimit.html}
 */
export type Ulimit = {
  HardLimit: number;
  Name: string;
  SoftLimit: number;
};
/**
 * Type definition for `AWS::Batch::JobDefinition.Volumes`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-batch-jobdefinition-volumes.html}
 */
export type Volumes = {
  EfsVolumeConfiguration?: EfsVolumeConfiguration;
  Host?: VolumesHost;
  Name?: string;
};
/**
 * Type definition for `AWS::Batch::JobDefinition.VolumesHost`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-batch-jobdefinition-volumeshost.html}
 */
export type VolumesHost = {
  SourcePath?: string;
};
/**
 * Resource Type definition for AWS::Batch::JobDefinition
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html}
 */
export class BatchJobDefinition extends $Resource<
  "AWS::Batch::JobDefinition",
  BatchJobDefinitionProperties,
  BatchJobDefinitionAttributes
> {
  public static readonly Type = "AWS::Batch::JobDefinition";
  constructor(
    logicalId: string,
    properties: BatchJobDefinitionProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, BatchJobDefinition.Type, properties, options);
  }
}
