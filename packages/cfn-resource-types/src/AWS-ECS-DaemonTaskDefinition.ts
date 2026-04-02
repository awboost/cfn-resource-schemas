import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::ECS::DaemonTaskDefinition`.
 * Resource Schema describing various properties for ECS DaemonTaskDefinition
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecs-daemontaskdefinition.html}
 */
export type ECSDaemonTaskDefinitionProperties = {
  ContainerDefinitions?: DaemonContainerDefinition[];
  Cpu?: string;
  ExecutionRoleArn?: string;
  Family?: string;
  Memory?: string;
  Tags?: Tag[];
  TaskRoleArn?: string;
  Volumes?: Volume[];
};
/**
 * Attribute type definition for `AWS::ECS::DaemonTaskDefinition`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecs-daemontaskdefinition.html#aws-resource-ecs-daemontaskdefinition-return-values}
 */
export type ECSDaemonTaskDefinitionAttributes = {
  /**
   * The Amazon Resource Name (ARN) of the Amazon ECS daemon task definition
   */
  DaemonTaskDefinitionArn: string;
};
/**
 * Type definition for `AWS::ECS::DaemonTaskDefinition.ContainerDependency`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-daemontaskdefinition-containerdependency.html}
 */
export type ContainerDependency = {
  Condition?: string;
  ContainerName?: string;
};
/**
 * Type definition for `AWS::ECS::DaemonTaskDefinition.DaemonContainerDefinition`.
 * Container definition for daemon task definition
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-daemontaskdefinition-daemoncontainerdefinition.html}
 */
export type DaemonContainerDefinition = {
  Command?: string[];
  Cpu?: number;
  DependsOn?: ContainerDependency[];
  EntryPoint?: string[];
  Environment?: KeyValuePair[];
  EnvironmentFiles?: EnvironmentFile[];
  Essential?: boolean;
  FirelensConfiguration?: FirelensConfiguration;
  HealthCheck?: HealthCheck;
  Image: string;
  Interactive?: boolean;
  LinuxParameters?: LinuxParameters;
  LogConfiguration?: LogConfiguration;
  Memory?: number;
  MemoryReservation?: number;
  MountPoints?: MountPoint[];
  Name: string;
  Privileged?: boolean;
  PseudoTerminal?: boolean;
  ReadonlyRootFilesystem?: boolean;
  RepositoryCredentials?: RepositoryCredentials;
  RestartPolicy?: RestartPolicy;
  Secrets?: Secret[];
  StartTimeout?: number;
  StopTimeout?: number;
  SystemControls?: SystemControl[];
  Ulimits?: Ulimit[];
  User?: string;
  WorkingDirectory?: string;
};
/**
 * Type definition for `AWS::ECS::DaemonTaskDefinition.Device`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-daemontaskdefinition-device.html}
 */
export type Device = {
  ContainerPath?: string;
  HostPath?: string;
  Permissions?: string[];
};
/**
 * Type definition for `AWS::ECS::DaemonTaskDefinition.EnvironmentFile`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-daemontaskdefinition-environmentfile.html}
 */
export type EnvironmentFile = {
  Type?: string;
  Value?: string;
};
/**
 * Type definition for `AWS::ECS::DaemonTaskDefinition.FirelensConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-daemontaskdefinition-firelensconfiguration.html}
 */
export type FirelensConfiguration = {
  Options?: Record<string, string>;
  Type?: string;
};
/**
 * Type definition for `AWS::ECS::DaemonTaskDefinition.HealthCheck`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-daemontaskdefinition-healthcheck.html}
 */
export type HealthCheck = {
  Command?: string[];
  Interval?: number;
  Retries?: number;
  StartPeriod?: number;
  Timeout?: number;
};
/**
 * Type definition for `AWS::ECS::DaemonTaskDefinition.HostVolumeProperties`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-daemontaskdefinition-hostvolumeproperties.html}
 */
export type HostVolumeProperties = {
  SourcePath?: string;
};
/**
 * Type definition for `AWS::ECS::DaemonTaskDefinition.KernelCapabilities`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-daemontaskdefinition-kernelcapabilities.html}
 */
export type KernelCapabilities = {
  Add?: string[];
  Drop?: string[];
};
/**
 * Type definition for `AWS::ECS::DaemonTaskDefinition.KeyValuePair`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-daemontaskdefinition-keyvaluepair.html}
 */
export type KeyValuePair = {
  Name?: string;
  Value?: string;
};
/**
 * Type definition for `AWS::ECS::DaemonTaskDefinition.LinuxParameters`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-daemontaskdefinition-linuxparameters.html}
 */
export type LinuxParameters = {
  Capabilities?: KernelCapabilities;
  Devices?: Device[];
  InitProcessEnabled?: boolean;
  Tmpfs?: Tmpfs[];
};
/**
 * Type definition for `AWS::ECS::DaemonTaskDefinition.LogConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-daemontaskdefinition-logconfiguration.html}
 */
export type LogConfiguration = {
  LogDriver: string;
  Options?: Record<string, string>;
  SecretOptions?: Secret[];
};
/**
 * Type definition for `AWS::ECS::DaemonTaskDefinition.MountPoint`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-daemontaskdefinition-mountpoint.html}
 */
export type MountPoint = {
  ContainerPath?: string;
  ReadOnly?: boolean;
  SourceVolume?: string;
};
/**
 * Type definition for `AWS::ECS::DaemonTaskDefinition.RepositoryCredentials`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-daemontaskdefinition-repositorycredentials.html}
 */
export type RepositoryCredentials = {
  CredentialsParameter?: string;
};
/**
 * Type definition for `AWS::ECS::DaemonTaskDefinition.RestartPolicy`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-daemontaskdefinition-restartpolicy.html}
 */
export type RestartPolicy = {
  Enabled?: boolean;
  IgnoredExitCodes?: number[];
  RestartAttemptPeriod?: number;
};
/**
 * Type definition for `AWS::ECS::DaemonTaskDefinition.Secret`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-daemontaskdefinition-secret.html}
 */
export type Secret = {
  Name: string;
  ValueFrom: string;
};
/**
 * Type definition for `AWS::ECS::DaemonTaskDefinition.SystemControl`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-daemontaskdefinition-systemcontrol.html}
 */
export type SystemControl = {
  Namespace?: string;
  Value?: string;
};
/**
 * Type definition for `AWS::ECS::DaemonTaskDefinition.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-daemontaskdefinition-tag.html}
 */
export type Tag = {
  Key?: string;
  Value?: string;
};
/**
 * Type definition for `AWS::ECS::DaemonTaskDefinition.Tmpfs`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-daemontaskdefinition-tmpfs.html}
 */
export type Tmpfs = {
  ContainerPath?: string;
  MountOptions?: string[];
  Size: number;
};
/**
 * Type definition for `AWS::ECS::DaemonTaskDefinition.Ulimit`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-daemontaskdefinition-ulimit.html}
 */
export type Ulimit = {
  HardLimit: number;
  Name: string;
  SoftLimit: number;
};
/**
 * Type definition for `AWS::ECS::DaemonTaskDefinition.Volume`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-daemontaskdefinition-volume.html}
 */
export type Volume = {
  Host?: HostVolumeProperties;
  Name?: string;
};
/**
 * Resource type definition for `AWS::ECS::DaemonTaskDefinition`.
 * Resource Schema describing various properties for ECS DaemonTaskDefinition
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecs-daemontaskdefinition.html}
 */
export class ECSDaemonTaskDefinition extends $Resource<
  "AWS::ECS::DaemonTaskDefinition",
  ECSDaemonTaskDefinitionProperties,
  ECSDaemonTaskDefinitionAttributes
> {
  public static readonly Type = "AWS::ECS::DaemonTaskDefinition";
  constructor(
    logicalId: string,
    properties: ECSDaemonTaskDefinitionProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, ECSDaemonTaskDefinition.Type, properties, options);
  }
}
