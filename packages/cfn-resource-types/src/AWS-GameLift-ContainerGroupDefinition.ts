import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * The AWS::GameLift::ContainerGroupDefinition resource creates an Amazon GameLift container group definition.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-containergroupdefinition.html}
 */
export type GameLiftContainerGroupDefinitionProperties = {
  /**
   * A collection of container definitions that define the containers in this group.
   * @minLength `1`
   * @maxLength `10`
   */
  ContainerDefinitions: ContainerDefinition[];
  /**
   * A descriptive label for the container group definition.
   * @minLength `1`
   * @maxLength `128`
   * @pattern `^[a-zA-Z0-9-]+$`
   */
  Name: string;
  /**
   * The operating system of the container group
   */
  OperatingSystem: "AMAZON_LINUX_2023";
  /**
   * Specifies whether the container group includes replica or daemon containers.
   */
  SchedulingStrategy?: "REPLICA" | "DAEMON";
  /**
   * An array of key-value pairs to apply to this resource.
   * @minLength `0`
   * @maxLength `200`
   */
  Tags?: Tag[];
  /**
   * The maximum number of CPU units reserved for this container group. The value is expressed as an integer amount of CPU units. (1 vCPU is equal to 1024 CPU units.)
   * @min `128`
   * @max `10240`
   */
  TotalCpuLimit: number;
  /**
   * The maximum amount of memory (in MiB) to allocate for this container group.
   * @min `4`
   * @max `1024000`
   */
  TotalMemoryLimit: number;
};
/**
 * Attribute type definition for `AWS::GameLift::ContainerGroupDefinition`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-containergroupdefinition.html#aws-resource-gamelift-containergroupdefinition-return-values}
 */
export type GameLiftContainerGroupDefinitionAttributes = {
  /**
   * A collection of container definitions that define the containers in this group.
   * @minLength `1`
   * @maxLength `10`
   */
  ContainerDefinitions: {
    /**
     * The digest of the container image.
     * @pattern `^sha256:[a-fA-F0-9]{64}$`
     */
    ResolvedImageDigest: string;
  }[];
  /**
   * The Amazon Resource Name (ARN) that is assigned to a Amazon GameLift container group resource and uniquely identifies it across all AWS Regions.
   * @minLength `1`
   * @maxLength `512`
   * @pattern `^arn:.*:containergroupdefinition/containergroupdefinition-[a-zA-Z0-9-]+$`
   */
  ContainerGroupDefinitionArn: string;
  /**
   * A time stamp indicating when this data object was created. Format is a number expressed in Unix time as milliseconds (for example "1469498468.057").
   */
  CreationTime: string;
};
/**
 * Type definition for `AWS::GameLift::ContainerGroupDefinition.ContainerDefinition`.
 * Details about a container that is used in a container fleet
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-containergroupdefinition-containerdefinition.html}
 */
export type ContainerDefinition = {
  /**
   * The command that's passed to the container.
   * @minLength `1`
   * @maxLength `20`
   */
  Command?: string[];
  /**
   * A descriptive label for the container definition. Container definition names must be unique with a container group definition.
   * @minLength `1`
   * @maxLength `128`
   * @pattern `^[a-zA-Z0-9-]+$`
   */
  ContainerName: string;
  /**
   * The maximum number of CPU units reserved for this container. The value is expressed as an integer amount of CPU units. 1 vCPU is equal to 1024 CPU units
   * @min `1`
   * @max `10240`
   */
  Cpu?: number;
  /**
   * A list of container dependencies that determines when this container starts up and shuts down. For container groups with multiple containers, dependencies let you define a startup/shutdown sequence across the containers.
   * @minLength `1`
   * @maxLength `10`
   */
  DependsOn?: ContainerDependency[];
  /**
   * The entry point that's passed to the container so that it will run as an executable. If there are multiple arguments, each argument is a string in the array.
   * @minLength `1`
   * @maxLength `20`
   */
  EntryPoint?: string[];
  /**
   * The environment variables to pass to a container.
   * @minLength `1`
   * @maxLength `20`
   */
  Environment?: ContainerEnvironment[];
  /**
   * Specifies if the container is essential. If an essential container fails a health check, then all containers in the container group will be restarted. You must specify exactly 1 essential container in a container group.
   */
  Essential?: boolean;
  /**
   * Specifies how the health of the containers will be checked.
   */
  HealthCheck?: ContainerHealthCheck;
  /**
   * Specifies the image URI of this container.
   * @minLength `1`
   * @maxLength `255`
   * @pattern `^[a-zA-Z0-9-_\.@\/:]+$`
   */
  ImageUri: string;
  /**
   * Specifies how much memory is available to the container. You must specify at least this parameter or the TotalMemoryLimit parameter of the ContainerGroupDefinition.
   */
  MemoryLimits?: MemoryLimits;
  /**
   * Defines the ports on the container.
   */
  PortConfiguration?: PortConfiguration;
  /**
   * The working directory to run commands inside the container in.
   * @minLength `1`
   * @maxLength `255`
   * @pattern `^.*$`
   */
  WorkingDirectory?: string;
};
/**
 * Type definition for `AWS::GameLift::ContainerGroupDefinition.ContainerDependency`.
 * A dependency that impacts a container's startup and shutdown.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-containergroupdefinition-containerdependency.html}
 */
export type ContainerDependency = {
  /**
   * The type of dependency.
   */
  Condition: "START" | "COMPLETE" | "SUCCESS" | "HEALTHY";
  /**
   * A descriptive label for the container definition. The container being defined depends on this container's condition.
   * @minLength `1`
   * @maxLength `128`
   * @pattern `^[a-zA-Z0-9-]+$`
   */
  ContainerName: string;
};
/**
 * Type definition for `AWS::GameLift::ContainerGroupDefinition.ContainerEnvironment`.
 * An environment variable to set inside a container, in the form of a key-value pair.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-containergroupdefinition-containerenvironment.html}
 */
export type ContainerEnvironment = {
  /**
   * The environment variable name.
   * @minLength `1`
   * @maxLength `255`
   * @pattern `^.*$`
   */
  Name: string;
  /**
   * The environment variable value.
   * @minLength `1`
   * @maxLength `255`
   * @pattern `^.*$`
   */
  Value: string;
};
/**
 * Type definition for `AWS::GameLift::ContainerGroupDefinition.ContainerHealthCheck`.
 * Specifies how the process manager checks the health of containers.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-containergroupdefinition-containerhealthcheck.html}
 */
export type ContainerHealthCheck = {
  /**
   * A string array representing the command that the container runs to determine if it is healthy.
   * @minLength `1`
   * @maxLength `20`
   */
  Command: string[];
  /**
   * How often (in seconds) the health is checked.
   * @min `60`
   * @max `300`
   */
  Interval?: number;
  /**
   * How many times the process manager will retry the command after a timeout. (The first run of the command does not count as a retry.)
   * @min `5`
   * @max `10`
   */
  Retries?: number;
  /**
   * The optional grace period (in seconds) to give a container time to boostrap before teh health check is declared failed.
   * @min `0`
   * @max `300`
   */
  StartPeriod?: number;
  /**
   * How many seconds the process manager allows the command to run before canceling it.
   * @min `30`
   * @max `60`
   */
  Timeout?: number;
};
/**
 * Type definition for `AWS::GameLift::ContainerGroupDefinition.ContainerPortRange`.
 * A set of one or more port numbers that can be opened on the container.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-containergroupdefinition-containerportrange.html}
 */
export type ContainerPortRange = {
  /**
   * A starting value for the range of allowed port numbers.
   * @min `1`
   * @max `60000`
   */
  FromPort: number;
  /**
   * Defines the protocol of these ports.
   */
  Protocol: "TCP" | "UDP";
  /**
   * An ending value for the range of allowed port numbers. Port numbers are end-inclusive. This value must be equal to or greater than FromPort.
   * @min `1`
   * @max `60000`
   */
  ToPort: number;
};
/**
 * Type definition for `AWS::GameLift::ContainerGroupDefinition.MemoryLimits`.
 * Specifies how much memory is available to the container.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-containergroupdefinition-memorylimits.html}
 */
export type MemoryLimits = {
  /**
   * The hard limit of memory to reserve for the container.
   * @min `4`
   * @max `1024000`
   */
  HardLimit?: number;
  /**
   * The amount of memory that is reserved for the container.
   * @min `4`
   * @max `1024000`
   */
  SoftLimit?: number;
};
/**
 * Type definition for `AWS::GameLift::ContainerGroupDefinition.PortConfiguration`.
 * Defines the ports on a container.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-containergroupdefinition-portconfiguration.html}
 */
export type PortConfiguration = {
  /**
   * Specifies one or more ranges of ports on a container.
   * @minLength `1`
   * @maxLength `100`
   */
  ContainerPortRanges: ContainerPortRange[];
};
/**
 * Type definition for `AWS::GameLift::ContainerGroupDefinition.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-containergroupdefinition-tag.html}
 */
export type Tag = {
  /**
   * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length.
   * @minLength `1`
   * @maxLength `128`
   * @pattern `^.*$`
   */
  Key: string;
  /**
   * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length.
   * @minLength `0`
   * @maxLength `256`
   * @pattern `^.*$`
   */
  Value: string;
};
/**
 * The AWS::GameLift::ContainerGroupDefinition resource creates an Amazon GameLift container group definition.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-containergroupdefinition.html}
 */
export class GameLiftContainerGroupDefinition extends $Resource<
  "AWS::GameLift::ContainerGroupDefinition",
  GameLiftContainerGroupDefinitionProperties,
  GameLiftContainerGroupDefinitionAttributes
> {
  public static readonly Type = "AWS::GameLift::ContainerGroupDefinition";
  constructor(
    logicalId: string,
    properties: GameLiftContainerGroupDefinitionProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      GameLiftContainerGroupDefinition.Type,
      properties,
      options,
    );
  }
}
