import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::Batch::JobDefinition
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html}
 */
export type BatchJobDefinitionProperties = {
  ContainerProperties?: ContainerProperties;
  EcsProperties?: EcsProperties;
  EksProperties?: EksProperties;
  /**
   * @maxLength `128`
   */
  JobDefinitionName?: string;
  NodeProperties?: NodeProperties;
  Parameters?: Record<string, string>;
  PlatformCapabilities?: string[];
  PropagateTags?: boolean;
  RetryStrategy?: RetryStrategy;
  SchedulingPriority?: number;
  /**
   * A key-value pair to associate with a resource.
   */
  Tags?: Record<string, string>;
  Timeout?: JobTimeout;
  Type: string;
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
  FargatePlatformConfiguration?: {
    PlatformVersion?: string;
  };
  Image: string;
  JobRoleArn?: string;
  LinuxParameters?: LinuxParameters;
  LogConfiguration?: LogConfiguration;
  Memory?: number;
  MountPoints?: MountPoint[];
  NetworkConfiguration?: NetworkConfiguration;
  Privileged?: boolean;
  ReadonlyRootFilesystem?: boolean;
  RepositoryCredentials?: RepositoryCredentials;
  ResourceRequirements?: ResourceRequirement[];
  RuntimePlatform?: RuntimePlatform;
  Secrets?: Secret[];
  Ulimits?: Ulimit[];
  User?: string;
  Vcpus?: number;
  Volumes?: Volume[];
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
 * Type definition for `AWS::Batch::JobDefinition.EcsProperties`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-batch-jobdefinition-ecsproperties.html}
 */
export type EcsProperties = {
  TaskProperties: EcsTaskProperties[];
};
/**
 * Type definition for `AWS::Batch::JobDefinition.EcsTaskProperties`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-batch-jobdefinition-ecstaskproperties.html}
 */
export type EcsTaskProperties = {
  Containers?: TaskContainerProperties[];
  EphemeralStorage?: EphemeralStorage;
  ExecutionRoleArn?: string;
  IpcMode?: string;
  NetworkConfiguration?: NetworkConfiguration;
  PidMode?: string;
  PlatformVersion?: string;
  RuntimePlatform?: RuntimePlatform;
  TaskRoleArn?: string;
  Volumes?: Volume[];
};
/**
 * Type definition for `AWS::Batch::JobDefinition.EFSAuthorizationConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-batch-jobdefinition-efsauthorizationconfig.html}
 */
export type EFSAuthorizationConfig = {
  AccessPointId?: string;
  Iam?: string;
};
/**
 * Type definition for `AWS::Batch::JobDefinition.EFSVolumeConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-batch-jobdefinition-efsvolumeconfiguration.html}
 */
export type EFSVolumeConfiguration = {
  AuthorizationConfig?: EFSAuthorizationConfig;
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
  Limits?: Record<string, string>;
  Requests?: Record<string, string>;
};
/**
 * Type definition for `AWS::Batch::JobDefinition.EksContainerSecurityContext`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-batch-jobdefinition-ekscontainersecuritycontext.html}
 */
export type EksContainerSecurityContext = {
  AllowPrivilegeEscalation?: boolean;
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
 * Type definition for `AWS::Batch::JobDefinition.EksMetadata`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-batch-jobdefinition-eksmetadata.html}
 */
export type EksMetadata = {
  Labels?: Record<string, string>;
};
/**
 * Type definition for `AWS::Batch::JobDefinition.EksPodProperties`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-batch-jobdefinition-ekspodproperties.html}
 */
export type EksPodProperties = {
  Containers?: EksContainer[];
  DnsPolicy?: string;
  HostNetwork?: boolean;
  ImagePullSecrets?: ImagePullSecret[];
  InitContainers?: EksContainer[];
  Metadata?: EksMetadata;
  ServiceAccountName?: string;
  ShareProcessNamespace?: boolean;
  Volumes?: EksVolume[];
};
/**
 * Type definition for `AWS::Batch::JobDefinition.EksProperties`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-batch-jobdefinition-eksproperties.html}
 */
export type EksProperties = {
  PodProperties?: EksPodProperties;
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
 * Type definition for `AWS::Batch::JobDefinition.Host`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-batch-jobdefinition-host.html}
 */
export type Host = {
  SourcePath?: string;
};
/**
 * Type definition for `AWS::Batch::JobDefinition.ImagePullSecret`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-batch-jobdefinition-imagepullsecret.html}
 */
export type ImagePullSecret = {
  Name?: string;
};
/**
 * Type definition for `AWS::Batch::JobDefinition.JobTimeout`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-batch-jobdefinition-jobtimeout.html}
 */
export type JobTimeout = {
  AttemptDurationSeconds?: number;
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
  Options?: Record<string, string>;
  SecretOptions?: Secret[];
};
/**
 * Type definition for `AWS::Batch::JobDefinition.MountPoint`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-batch-jobdefinition-mountpoint.html}
 */
export type MountPoint = {
  ContainerPath?: string;
  ReadOnly?: boolean;
  SourceVolume?: string;
};
/**
 * Type definition for `AWS::Batch::JobDefinition.MultiNodeContainerProperties`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-batch-jobdefinition-multinodecontainerproperties.html}
 */
export type MultiNodeContainerProperties = {
  Command?: string[];
  Environment?: Environment[];
  EphemeralStorage?: EphemeralStorage;
  ExecutionRoleArn?: string;
  Image: string;
  InstanceType?: string;
  JobRoleArn?: string;
  LinuxParameters?: LinuxParameters;
  LogConfiguration?: LogConfiguration;
  Memory?: number;
  MountPoints?: MountPoint[];
  Privileged?: boolean;
  ReadonlyRootFilesystem?: boolean;
  RepositoryCredentials?: RepositoryCredentials;
  ResourceRequirements?: ResourceRequirement[];
  RuntimePlatform?: RuntimePlatform;
  Secrets?: Secret[];
  Ulimits?: Ulimit[];
  User?: string;
  Vcpus?: number;
  Volumes?: Volume[];
};
/**
 * Type definition for `AWS::Batch::JobDefinition.MultiNodeEcsProperties`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-batch-jobdefinition-multinodeecsproperties.html}
 */
export type MultiNodeEcsProperties = {
  TaskProperties: MultiNodeEcsTaskProperties[];
};
/**
 * Type definition for `AWS::Batch::JobDefinition.MultiNodeEcsTaskProperties`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-batch-jobdefinition-multinodeecstaskproperties.html}
 */
export type MultiNodeEcsTaskProperties = {
  Containers?: TaskContainerProperties[];
  ExecutionRoleArn?: string;
  IpcMode?: string;
  PidMode?: string;
  TaskRoleArn?: string;
  Volumes?: Volume[];
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
  Container?: MultiNodeContainerProperties;
  EcsProperties?: MultiNodeEcsProperties;
  EksProperties?: EksProperties;
  InstanceTypes?: string[];
  TargetNodes: string;
};
/**
 * Type definition for `AWS::Batch::JobDefinition.RepositoryCredentials`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-batch-jobdefinition-repositorycredentials.html}
 */
export type RepositoryCredentials = {
  CredentialsParameter: string;
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
 * Type definition for `AWS::Batch::JobDefinition.TaskContainerDependency`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-batch-jobdefinition-taskcontainerdependency.html}
 */
export type TaskContainerDependency = {
  Condition: string;
  ContainerName: string;
};
/**
 * Type definition for `AWS::Batch::JobDefinition.TaskContainerProperties`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-batch-jobdefinition-taskcontainerproperties.html}
 */
export type TaskContainerProperties = {
  Command?: string[];
  DependsOn?: TaskContainerDependency[];
  Environment?: Environment[];
  Essential?: boolean;
  Image: string;
  LinuxParameters?: LinuxParameters;
  LogConfiguration?: LogConfiguration;
  MountPoints?: MountPoint[];
  Name?: string;
  Privileged?: boolean;
  ReadonlyRootFilesystem?: boolean;
  RepositoryCredentials?: RepositoryCredentials;
  ResourceRequirements?: ResourceRequirement[];
  Secrets?: Secret[];
  Ulimits?: Ulimit[];
  User?: string;
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
 * Type definition for `AWS::Batch::JobDefinition.Volume`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-batch-jobdefinition-volume.html}
 */
export type Volume = {
  EfsVolumeConfiguration?: EFSVolumeConfiguration;
  Host?: Host;
  Name?: string;
};
/**
 * Resource Type definition for AWS::Batch::JobDefinition
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html}
 */
export class BatchJobDefinition extends $Resource<
  "AWS::Batch::JobDefinition",
  BatchJobDefinitionProperties,
  Record<string, never>
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
