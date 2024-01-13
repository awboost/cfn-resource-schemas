import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::ECS::TaskDefinition`.
 * Resource Schema describing various properties for ECS TaskDefinition
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecs-taskdefinition.html}
 */
export type ECSTaskDefinitionProperties = {
  ContainerDefinitions?: ContainerDefinition[];
  Cpu?: string;
  EphemeralStorage?: EphemeralStorage;
  ExecutionRoleArn?: string;
  Family?: string;
  InferenceAccelerators?: InferenceAccelerator[];
  IpcMode?: string;
  Memory?: string;
  NetworkMode?: string;
  PidMode?: string;
  PlacementConstraints?: TaskDefinitionPlacementConstraint[];
  ProxyConfiguration?: ProxyConfiguration;
  RequiresCompatibilities?: string[];
  RuntimePlatform?: RuntimePlatform;
  Tags?: Tag[];
  TaskRoleArn?: string;
  Volumes?: Volume[];
};
/**
 * Attribute type definition for `AWS::ECS::TaskDefinition`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecs-taskdefinition.html#aws-resource-ecs-taskdefinition-return-values}
 */
export type ECSTaskDefinitionAttributes = {
  /**
   * The Amazon Resource Name (ARN) of the Amazon ECS task definition
   */
  TaskDefinitionArn: string;
};
/**
 * Type definition for `AWS::ECS::TaskDefinition.AuthorizationConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskdefinition-authorizationconfig.html}
 */
export type AuthorizationConfig = {
  AccessPointId?: string;
  IAM?: "ENABLED" | "DISABLED";
};
/**
 * Type definition for `AWS::ECS::TaskDefinition.ContainerDefinition`.
 * List of container definitions that are passed to the Docker daemon on a container instance
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskdefinition-containerdefinition.html}
 */
export type ContainerDefinition = {
  Command?: string[];
  Cpu?: number;
  DependsOn?: ContainerDependency[];
  DisableNetworking?: boolean;
  DnsSearchDomains?: string[];
  DnsServers?: string[];
  DockerLabels?: Record<string, string>;
  DockerSecurityOptions?: string[];
  EntryPoint?: string[];
  /**
   * The environment variables to pass to a container
   */
  Environment?: KeyValuePair[];
  /**
   * The list of one or more files that contain the environment variables to pass to a container
   */
  EnvironmentFiles?: EnvironmentFile[];
  Essential?: boolean;
  ExtraHosts?: HostEntry[];
  FirelensConfiguration?: FirelensConfiguration;
  /**
   * The health check command and associated configuration parameters for the container.
   */
  HealthCheck?: HealthCheck;
  Hostname?: string;
  /**
   * The image used to start a container. This string is passed directly to the Docker daemon.
   */
  Image: string;
  Interactive?: boolean;
  Links?: string[];
  LinuxParameters?: LinuxParameters;
  LogConfiguration?: LogConfiguration;
  /**
   * The amount (in MiB) of memory to present to the container. If your container attempts to exceed the memory specified here, the container is killed.
   */
  Memory?: number;
  MemoryReservation?: number;
  MountPoints?: MountPoint[];
  /**
   * The name of a container. Up to 255 letters (uppercase and lowercase), numbers, hyphens, and underscores are allowed
   */
  Name: string;
  /**
   * Port mappings allow containers to access ports on the host container instance to send or receive traffic.
   */
  PortMappings?: PortMapping[];
  Privileged?: boolean;
  PseudoTerminal?: boolean;
  ReadonlyRootFilesystem?: boolean;
  RepositoryCredentials?: RepositoryCredentials;
  ResourceRequirements?: ResourceRequirement[];
  Secrets?: Secret[];
  StartTimeout?: number;
  StopTimeout?: number;
  SystemControls?: SystemControl[];
  Ulimits?: Ulimit[];
  User?: string;
  VolumesFrom?: VolumeFrom[];
  WorkingDirectory?: string;
};
/**
 * Type definition for `AWS::ECS::TaskDefinition.ContainerDependency`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskdefinition-containerdependency.html}
 */
export type ContainerDependency = {
  Condition?: string;
  ContainerName?: string;
};
/**
 * Type definition for `AWS::ECS::TaskDefinition.Device`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskdefinition-device.html}
 */
export type Device = {
  ContainerPath?: string;
  HostPath?: string;
  Permissions?: string[];
};
/**
 * Type definition for `AWS::ECS::TaskDefinition.DockerVolumeConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskdefinition-dockervolumeconfiguration.html}
 */
export type DockerVolumeConfiguration = {
  Autoprovision?: boolean;
  Driver?: string;
  DriverOpts?: Record<string, string>;
  Labels?: Record<string, string>;
  Scope?: string;
};
/**
 * Type definition for `AWS::ECS::TaskDefinition.EFSVolumeConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskdefinition-efsvolumeconfiguration.html}
 */
export type EFSVolumeConfiguration = {
  AuthorizationConfig?: AuthorizationConfig;
  FilesystemId: string;
  RootDirectory?: string;
  TransitEncryption?: "ENABLED" | "DISABLED";
  TransitEncryptionPort?: number;
};
/**
 * Type definition for `AWS::ECS::TaskDefinition.EnvironmentFile`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskdefinition-environmentfile.html}
 */
export type EnvironmentFile = {
  Type?: string;
  Value?: string;
};
/**
 * Type definition for `AWS::ECS::TaskDefinition.EphemeralStorage`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskdefinition-ephemeralstorage.html}
 */
export type EphemeralStorage = {
  SizeInGiB?: number;
};
/**
 * Type definition for `AWS::ECS::TaskDefinition.FirelensConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskdefinition-firelensconfiguration.html}
 */
export type FirelensConfiguration = {
  Options?: Record<string, string>;
  Type?: string;
};
/**
 * Type definition for `AWS::ECS::TaskDefinition.HealthCheck`.
 * The health check command and associated configuration parameters for the container.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskdefinition-healthcheck.html}
 */
export type HealthCheck = {
  /**
   * A string array representing the command that the container runs to determine if it is healthy.
   */
  Command?: string[];
  /**
   * The time period in seconds between each health check execution. You may specify between 5 and 300 seconds. The default value is 30 seconds.
   */
  Interval?: number;
  /**
   * The number of times to retry a failed health check before the container is considered unhealthy. You may specify between 1 and 10 retries. The default value is three retries.
   */
  Retries?: number;
  /**
   * The optional grace period within which to provide containers time to bootstrap before failed health checks count towards the maximum number of retries. You may specify between 0 and 300 seconds. The startPeriod is disabled by default.
   */
  StartPeriod?: number;
  /**
   * The time period in seconds to wait for a health check to succeed before it is considered a failure. You may specify between 2 and 60 seconds. The default value is 5 seconds.
   */
  Timeout?: number;
};
/**
 * Type definition for `AWS::ECS::TaskDefinition.HostEntry`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskdefinition-hostentry.html}
 */
export type HostEntry = {
  Hostname?: string;
  IpAddress?: string;
};
/**
 * Type definition for `AWS::ECS::TaskDefinition.HostVolumeProperties`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskdefinition-hostvolumeproperties.html}
 */
export type HostVolumeProperties = {
  SourcePath?: string;
};
/**
 * Type definition for `AWS::ECS::TaskDefinition.InferenceAccelerator`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskdefinition-inferenceaccelerator.html}
 */
export type InferenceAccelerator = {
  DeviceName?: string;
  DeviceType?: string;
};
/**
 * Type definition for `AWS::ECS::TaskDefinition.KernelCapabilities`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskdefinition-kernelcapabilities.html}
 */
export type KernelCapabilities = {
  Add?: string[];
  Drop?: string[];
};
/**
 * Type definition for `AWS::ECS::TaskDefinition.KeyValuePair`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskdefinition-keyvaluepair.html}
 */
export type KeyValuePair = {
  Name?: string;
  Value?: string;
};
/**
 * Type definition for `AWS::ECS::TaskDefinition.LinuxParameters`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskdefinition-linuxparameters.html}
 */
export type LinuxParameters = {
  Capabilities?: KernelCapabilities;
  Devices?: Device[];
  InitProcessEnabled?: boolean;
  MaxSwap?: number;
  SharedMemorySize?: number;
  Swappiness?: number;
  Tmpfs?: Tmpfs[];
};
/**
 * Type definition for `AWS::ECS::TaskDefinition.LogConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskdefinition-logconfiguration.html}
 */
export type LogConfiguration = {
  LogDriver: string;
  Options?: Record<string, string>;
  SecretOptions?: Secret[];
};
/**
 * Type definition for `AWS::ECS::TaskDefinition.MountPoint`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskdefinition-mountpoint.html}
 */
export type MountPoint = {
  ContainerPath?: string;
  ReadOnly?: boolean;
  SourceVolume?: string;
};
/**
 * Type definition for `AWS::ECS::TaskDefinition.PortMapping`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskdefinition-portmapping.html}
 */
export type PortMapping = {
  AppProtocol?: "http" | "http2" | "grpc";
  ContainerPort?: number;
  ContainerPortRange?: string;
  HostPort?: number;
  Name?: string;
  Protocol?: string;
};
/**
 * Type definition for `AWS::ECS::TaskDefinition.ProxyConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskdefinition-proxyconfiguration.html}
 */
export type ProxyConfiguration = {
  ContainerName: string;
  ProxyConfigurationProperties?: KeyValuePair[];
  Type?: string;
};
/**
 * Type definition for `AWS::ECS::TaskDefinition.RepositoryCredentials`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskdefinition-repositorycredentials.html}
 */
export type RepositoryCredentials = {
  CredentialsParameter?: string;
};
/**
 * Type definition for `AWS::ECS::TaskDefinition.ResourceRequirement`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskdefinition-resourcerequirement.html}
 */
export type ResourceRequirement = {
  Type: string;
  Value: string;
};
/**
 * Type definition for `AWS::ECS::TaskDefinition.RuntimePlatform`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskdefinition-runtimeplatform.html}
 */
export type RuntimePlatform = {
  CpuArchitecture?: string;
  OperatingSystemFamily?: string;
};
/**
 * Type definition for `AWS::ECS::TaskDefinition.Secret`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskdefinition-secret.html}
 */
export type Secret = {
  Name: string;
  ValueFrom: string;
};
/**
 * Type definition for `AWS::ECS::TaskDefinition.SystemControl`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskdefinition-systemcontrol.html}
 */
export type SystemControl = {
  Namespace?: string;
  Value?: string;
};
/**
 * Type definition for `AWS::ECS::TaskDefinition.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskdefinition-tag.html}
 */
export type Tag = {
  Key?: string;
  Value?: string;
};
/**
 * Type definition for `AWS::ECS::TaskDefinition.TaskDefinitionPlacementConstraint`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskdefinition-taskdefinitionplacementconstraint.html}
 */
export type TaskDefinitionPlacementConstraint = {
  Expression?: string;
  Type: string;
};
/**
 * Type definition for `AWS::ECS::TaskDefinition.Tmpfs`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskdefinition-tmpfs.html}
 */
export type Tmpfs = {
  ContainerPath?: string;
  MountOptions?: string[];
  Size: number;
};
/**
 * Type definition for `AWS::ECS::TaskDefinition.Ulimit`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskdefinition-ulimit.html}
 */
export type Ulimit = {
  HardLimit: number;
  Name: string;
  SoftLimit: number;
};
/**
 * Type definition for `AWS::ECS::TaskDefinition.Volume`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskdefinition-volume.html}
 */
export type Volume = {
  ConfiguredAtLaunch?: boolean;
  DockerVolumeConfiguration?: DockerVolumeConfiguration;
  EFSVolumeConfiguration?: EFSVolumeConfiguration;
  Host?: HostVolumeProperties;
  Name?: string;
};
/**
 * Type definition for `AWS::ECS::TaskDefinition.VolumeFrom`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskdefinition-volumefrom.html}
 */
export type VolumeFrom = {
  ReadOnly?: boolean;
  SourceContainer?: string;
};
/**
 * Resource type definition for `AWS::ECS::TaskDefinition`.
 * Resource Schema describing various properties for ECS TaskDefinition
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecs-taskdefinition.html}
 */
export class ECSTaskDefinition extends $Resource<
  "AWS::ECS::TaskDefinition",
  ECSTaskDefinitionProperties,
  ECSTaskDefinitionAttributes
> {
  public static readonly Type = "AWS::ECS::TaskDefinition";
  constructor(
    logicalId: string,
    properties: ECSTaskDefinitionProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, ECSTaskDefinition.Type, properties, options);
  }
}
