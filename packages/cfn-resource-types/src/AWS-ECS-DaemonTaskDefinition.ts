import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::ECS::DaemonTaskDefinition`.
 * The details of a daemon task definition. A daemon task definition is a template that describes the containers that form a daemon. Daemons deploy cross-cutting software agents independently across your Amazon ECS infrastructure.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecs-daemontaskdefinition.html}
 */
export type ECSDaemonTaskDefinitionProperties = {
  /**
   * A list of container definitions in JSON format that describe the containers that make up the daemon task.
   */
  ContainerDefinitions?: DaemonContainerDefinition[];
  /**
   * The number of CPU units used by the daemon task.
   */
  Cpu?: string;
  /**
   * The Amazon Resource Name (ARN) of the task execution role that grants the Amazon ECS container agent permission to make Amazon Web Services API calls on your behalf.
   */
  ExecutionRoleArn?: string;
  /**
   * The name of a family that this daemon task definition is registered to.
   */
  Family?: string;
  /**
     * The IPC resource namespace mode for the containers in the daemon task. The valid values are ``none`` and ``shared``.
     If ``shared`` is specified, all containers within the daemon task share the same IPC resources.
     If ``none`` is specified, each container in the daemon task has a private IPC namespace.
     */
  IpcMode?: string;
  /**
   * The amount of memory (in MiB) used by the daemon task.
   */
  Memory?: string;
  /**
     * The process namespace mode for the containers in the daemon task. The valid values are ``none`` and ``shared``.
     If ``shared`` is specified, all containers within the daemon task share the same process namespace.
     If ``none`` is specified, each container in the daemon task has a private process namespace.
     */
  PidMode?: string;
  Tags?: Tag[];
  /**
   * The short name or full Amazon Resource Name (ARN) of the IAM role that grants containers in the daemon task permission to call Amazon Web Services APIs on your behalf.
   */
  TaskRoleArn?: string;
  /**
   * The list of data volume definitions for the daemon task.
   */
  Volumes?: Volume[];
};
/**
 * Attribute type definition for `AWS::ECS::DaemonTaskDefinition`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecs-daemontaskdefinition.html#aws-resource-ecs-daemontaskdefinition-return-values}
 */
export type ECSDaemonTaskDefinitionAttributes = {
  DaemonTaskDefinitionArn: string;
};
/**
 * Type definition for `AWS::ECS::DaemonTaskDefinition.ContainerDependency`.
 * The dependencies defined for container startup and shutdown. A container can contain multiple dependencies. When a dependency is defined for container startup, for container shutdown it is reversed.
 Your Amazon ECS container instances require at least version 1.26.0 of the container agent to use container dependencies. However, we recommend using the latest container agent version. For information about checking your agent version and updating to the latest version, see [Updating the Amazon ECS Container Agent](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-agent-update.html) in the *Amazon Elastic Container Service Developer Guide*. If you're using an Amazon ECS-optimized Linux AMI, your instance needs at least version 1.26.0-1 of the ``ecs-init`` package. If your container instances are launched from version ``20190301`` or later, then they contain the required versions of the container agent and ``ecs-init``. For more information, see [Amazon ECS-optimized Linux AMI](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-optimized_AMI.html) in the *Amazon Elastic Container Service Developer Guide*.
  For tasks that use the Fargate launch type, the task or service requires the following platforms:
  +  Linux platform version ``1.3.0`` or later.
  +  Windows platform version ``1.0.0`` or later.
  
  For more information about how to create a container dependency, see [Container dependency](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/example_task_definitions.html#example_task_definition-containerdependency) in the *Amazon Elastic Container Service Developer Guide*.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-daemontaskdefinition-containerdependency.html}
 */
export type ContainerDependency = {
  /**
     * The dependency condition of the container. The following are the available conditions and their behavior:
      +  ``START`` - This condition emulates the behavior of links and volumes today. It validates that a dependent container is started before permitting other containers to start.
      +  ``COMPLETE`` - This condition validates that a dependent container runs to completion (exits) before permitting other containers to start. This can be useful for nonessential containers that run a script and then exit. This condition can't be set on an essential container.
      +  ``SUCCESS`` - This condition is the same as ``COMPLETE``, but it also requires that the container exits with a ``zero`` status. This condition can't be set on an essential container.
      +  ``HEALTHY`` - This condition validates that the dependent container passes its Docker health check before permitting other containers to start. This requires that the dependent container has health checks configured. This condition is confirmed only at task startup.
     */
  Condition?: string;
  /**
   * The name of a container.
   */
  ContainerName?: string;
};
/**
 * Type definition for `AWS::ECS::DaemonTaskDefinition.DaemonContainerDefinition`.
 * A container definition for a daemon task. Daemon container definitions describe the containers that run as part of a daemon task on container instances managed by capacity providers.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-daemontaskdefinition-daemoncontainerdefinition.html}
 */
export type DaemonContainerDefinition = {
  /**
   * The command that's passed to the container.
   */
  Command?: string[];
  /**
   * The number of ``cpu`` units reserved for the container.
   */
  Cpu?: number;
  /**
   * The dependencies defined for container startup and shutdown. A container can contain multiple dependencies on other containers in a task definition.
   */
  DependsOn?: ContainerDependency[];
  /**
   * The entry point that's passed to the container.
   */
  EntryPoint?: string[];
  /**
   * The environment variables to pass to a container.
   */
  Environment?: KeyValuePair[];
  /**
   * A list of files containing the environment variables to pass to a container.
   */
  EnvironmentFiles?: EnvironmentFile[];
  /**
   * If the ``essential`` parameter of a container is marked as ``true``, and that container fails or stops for any reason, all other containers that are part of the task are stopped.
   */
  Essential?: boolean;
  /**
   * The FireLens configuration for the container. This is used to specify and configure a log router for container logs.
   */
  FirelensConfiguration?: FirelensConfiguration;
  /**
   * The container health check command and associated configuration parameters for the container.
   */
  HealthCheck?: HealthCheck;
  /**
   * The image used to start the container. This string is passed directly to the Docker daemon. Images in the Docker Hub registry are available by default. Other repositories are specified with either ``repository-url/image:tag`` or ``repository-url/image@digest``.
   */
  Image: string;
  /**
   * When this parameter is ``true``, you can deploy containerized applications that require ``stdin`` or a ``tty`` to be allocated.
   */
  Interactive?: boolean;
  /**
   * Linux-specific modifications that are applied to the container configuration, such as Linux kernel capabilities.
   */
  LinuxParameters?: LinuxParameters;
  /**
   * The log configuration specification for the container.
   */
  LogConfiguration?: LogConfiguration;
  /**
   * The amount (in MiB) of memory to present to the container. If the container attempts to exceed the memory specified here, the container is killed.
   */
  Memory?: number;
  /**
   * The soft limit (in MiB) of memory to reserve for the container.
   */
  MemoryReservation?: number;
  /**
   * The mount points for data volumes in your container.
   */
  MountPoints?: MountPoint[];
  /**
   * The name of the container. Up to 255 letters (uppercase and lowercase), numbers, underscores, and hyphens are allowed.
   */
  Name: string;
  /**
   * When this parameter is true, the container is given elevated privileges on the host container instance (similar to the ``root`` user).
   */
  Privileged?: boolean;
  /**
   * When this parameter is ``true``, a TTY is allocated.
   */
  PseudoTerminal?: boolean;
  /**
   * When this parameter is true, the container is given read-only access to its root file system.
   */
  ReadonlyRootFilesystem?: boolean;
  /**
   * The private repository authentication credentials to use.
   */
  RepositoryCredentials?: RepositoryCredentials;
  /**
   * The restart policy for the container. When you set up a restart policy, Amazon ECS can restart the container without needing to replace the task.
   */
  RestartPolicy?: RestartPolicy;
  /**
   * The secrets to pass to the container.
   */
  Secrets?: Secret[];
  /**
   * Time duration (in seconds) to wait before giving up on resolving dependencies for a container.
   */
  StartTimeout?: number;
  /**
   * Time duration (in seconds) to wait before the container is forcefully killed if it doesn't exit normally on its own.
   */
  StopTimeout?: number;
  /**
   * A list of namespaced kernel parameters to set in the container.
   */
  SystemControls?: SystemControl[];
  /**
   * A list of ``ulimits`` to set in the container.
   */
  Ulimits?: Ulimit[];
  /**
   * The user to use inside the container.
   */
  User?: string;
  /**
   * The working directory to run commands inside the container in.
   */
  WorkingDirectory?: string;
};
/**
 * Type definition for `AWS::ECS::DaemonTaskDefinition.Device`.
 * An object representing a container instance host device.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-daemontaskdefinition-device.html}
 */
export type Device = {
  /**
   * The path inside the container at which to expose the host device.
   */
  ContainerPath?: string;
  /**
   * The path for the device on the host container instance.
   */
  HostPath?: string;
  /**
   * The explicit permissions to provide to the container for the device. By default, the container has permissions for ``read``, ``write``, and ``mknod`` for the device.
   */
  Permissions?: string[];
};
/**
 * Type definition for `AWS::ECS::DaemonTaskDefinition.EnvironmentFile`.
 * A list of files containing the environment variables to pass to a container. You can specify up to ten environment files. The file must have a ``.env`` file extension. Each line in an environment file should contain an environment variable in ``VARIABLE=VALUE`` format. Lines beginning with ``#`` are treated as comments and are ignored.
 If there are environment variables specified using the ``environment`` parameter in a container definition, they take precedence over the variables contained within an environment file. If multiple environment files are specified that contain the same variable, they're processed from the top down. We recommend that you use unique variable names. For more information, see [Use a file to pass environment variables to a container](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/use-environment-file.html) in the *Amazon Elastic Container Service Developer Guide*.
 Environment variable files are objects in Amazon S3 and all Amazon S3 security considerations apply.
 You must use the following platforms for the Fargate launch type:
  +  Linux platform version ``1.4.0`` or later.
  +  Windows platform version ``1.0.0`` or later.
  
 Consider the following when using the Fargate launch type:
  +  The file is handled like a native Docker env-file.
  +  There is no support for shell escape handling.
  +  The container entry point interperts the ``VARIABLE`` values.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-daemontaskdefinition-environmentfile.html}
 */
export type EnvironmentFile = {
  /**
   * The file type to use. Environment files are objects in Amazon S3. The only supported value is ``s3``.
   */
  Type?: string;
  /**
   * The Amazon Resource Name (ARN) of the Amazon S3 object containing the environment variable file.
   */
  Value?: string;
};
/**
 * Type definition for `AWS::ECS::DaemonTaskDefinition.FirelensConfiguration`.
 * The FireLens configuration for the container. This is used to specify and configure a log router for container logs. For more information, see [Custom log routing](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/using_firelens.html) in the *Amazon Elastic Container Service Developer Guide*.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-daemontaskdefinition-firelensconfiguration.html}
 */
export type FirelensConfiguration = {
  /**
     * The options to use when configuring the log router. This field is optional and can be used to specify a custom configuration file or to add additional metadata, such as the task, task definition, cluster, and container instance details to the log event. If specified, the syntax to use is ``"options":{"enable-ecs-log-metadata":"true|false","config-file-type:"s3|file","config-file-value":"arn:aws:s3:::mybucket/fluent.conf|filepath"}``. For more information, see [Creating a task definition that uses a FireLens configuration](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/using_firelens.html#firelens-taskdef) in the *Amazon Elastic Container Service Developer Guide*.
      Tasks hosted on FARGATElong only support the ``file`` configuration file type.
     */
  Options?: Record<string, string>;
  /**
   * The log router to use. The valid values are ``fluentd`` or ``fluentbit``.
   */
  Type?: string;
};
/**
 * Type definition for `AWS::ECS::DaemonTaskDefinition.HealthCheck`.
 * An object representing a container health check. Health check parameters that are specified in a container definition override any Docker health checks that exist in the container image (such as those specified in a parent image or from the image's Dockerfile). This configuration maps to the ``HEALTHCHECK`` parameter of docker run.
  The Amazon ECS container agent only monitors and reports on the health checks specified in the task definition. Amazon ECS does not monitor Docker health checks that are embedded in a container image and not specified in the container definition. Health check parameters that are specified in a container definition override any Docker health checks that exist in the container image.
  You can view the health status of both individual containers and a task with the DescribeTasks API operation or when viewing the task details in the console.
 The health check is designed to make sure that your containers survive agent restarts, upgrades, or temporary unavailability.
 Amazon ECS performs health checks on containers with the default that launched the container instance or the task.
 The following describes the possible ``healthStatus`` values for a container:
  +  ``HEALTHY``-The container health check has passed successfully.
  +  ``UNHEALTHY``-The container health check has failed.
  +  ``UNKNOWN``-The container health check is being evaluated, there's no container health check defined, or Amazon ECS doesn't have the health status of the container.
  
 The following describes the possible ``healthStatus`` values based on the container health checker status of essential containers in the task with the following priority order (high to low):
  +  ``UNHEALTHY``-One or more essential containers have failed their health check.
  +  ``UNKNOWN``-Any essential container running within the task is in an ``UNKNOWN`` state and no other essential containers have an ``UNHEALTHY`` state.
  +  ``HEALTHY``-All essential containers within the task have passed their health checks.
  
 Consider the following task health example with 2 containers.
  +  If Container1 is ``UNHEALTHY`` and Container2 is ``UNKNOWN``, the task health is ``UNHEALTHY``.
  +  If Container1 is ``UNHEALTHY`` and Container2 is ``HEALTHY``, the task health is ``UNHEALTHY``.
  +  If Container1 is ``HEALTHY`` and Container2 is ``UNKNOWN``, the task health is ``UNKNOWN``.
  +  If Container1 is ``HEALTHY`` and Container2 is ``HEALTHY``, the task health is ``HEALTHY``.
  
 Consider the following task health example with 3 containers.
  +  If Container1 is ``UNHEALTHY`` and Container2 is ``UNKNOWN``, and Container3 is ``UNKNOWN``, the task health is ``UNHEALTHY``.
  +  If Container1 is ``UNHEALTHY`` and Container2 is ``UNKNOWN``, and Container3 is ``HEALTHY``, the task health is ``UNHEALTHY``.
  +  If Container1 is ``UNHEALTHY`` and Container2 is ``HEALTHY``, and Container3 is ``HEALTHY``, the task health is ``UNHEALTHY``.
  +  If Container1 is ``HEALTHY`` and Container2 is ``UNKNOWN``, and Container3 is ``HEALTHY``, the task health is ``UNKNOWN``.
  +  If Container1 is ``HEALTHY`` and Container2 is ``UNKNOWN``, and Container3 is ``UNKNOWN``, the task health is ``UNKNOWN``.
  +  If Container1 is ``HEALTHY`` and Container2 is ``HEALTHY``, and Container3 is ``HEALTHY``, the task health is ``HEALTHY``.
  
 If a task is run manually, and not as part of a service, the task will continue its lifecycle regardless of its health status. For tasks that are part of a service, if the task reports as unhealthy then the task will be stopped and the service scheduler will replace it.
 When a container health check fails for a task that is part of a service, the following process occurs:
  1.  The task is marked as ``UNHEALTHY``.
  1.  The unhealthy task will be stopped, and during the stopping process, it will go through the following states:
  +  ``DEACTIVATING`` - In this state, Amazon ECS performs additional steps before stopping the task. For example, for tasks that are part of services configured to use Elastic Load Balancing target groups, target groups will be deregistered in this state.
  +  ``STOPPING`` - The task is in the process of being stopped.
  +  ``DEPROVISIONING`` - Resources associated with the task are being cleaned up.
  +  ``STOPPED`` - The task has been completely stopped.
  
  1.  After the old task stops, a new task will be launched to ensure service operation, and the new task will go through the following lifecycle:
  +  ``PROVISIONING`` - Resources required for the task are being provisioned.
  +  ``PENDING`` - The task is waiting to be placed on a container instance.
  +  ``ACTIVATING`` - In this state, Amazon ECS pulls container images, creates containers, configures task networking, registers load balancer target groups, and configures service discovery status.
  +  ``RUNNING`` - The task is running and performing its work.
  
  
 For more detailed information about task lifecycle states, see [Task lifecycle](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-lifecycle-explanation.html) in the *Amazon Elastic Container Service Developer Guide*.
 The following are notes about container health check support:
  +  If the Amazon ECS container agent becomes disconnected from the Amazon ECS service, this won't cause a container to transition to an ``UNHEALTHY`` status. This is by design, to ensure that containers remain running during agent restarts or temporary unavailability. The health check status is the "last heard from" response from the Amazon ECS agent, so if the container was considered ``HEALTHY`` prior to the disconnect, that status will remain until the agent reconnects and another health check occurs. There are no assumptions made about the status of the container health checks.
  +  Container health checks require version ``1.17.0`` or greater of the Amazon ECS container agent. For more information, see [Updating the Amazon ECS container agent](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-agent-update.html).
  +  Container health checks are supported for Fargate tasks if you're using platform version ``1.1.0`` or greater. For more information, see [platform versions](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/platform_versions.html).
  +  Container health checks aren't supported for tasks that are part of a service that's configured to use a Classic Load Balancer.
  
 For an example of how to specify a task definition with multiple containers where container dependency is specified, see [Container dependency](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/example_task_definitions.html#example_task_definition-containerdependency) in the *Amazon Elastic Container Service Developer Guide*.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-daemontaskdefinition-healthcheck.html}
 */
export type HealthCheck = {
  /**
     * A string array representing the command that the container runs to determine if it is healthy. The string array must start with ``CMD`` to run the command arguments directly, or ``CMD-SHELL`` to run the command with the container's default shell.
      When you use the AWS Management Console JSON panel, the CLIlong, or the APIs, enclose the list of commands in double quotes and brackets.
      ``[ "CMD-SHELL", "curl -f http://localhost/ || exit 1" ]``
     You don't include the double quotes and brackets when you use the AWS Management Console.
      ``CMD-SHELL, curl -f http://localhost/ || exit 1``
     An exit code of 0 indicates success, and non-zero exit code indicates failure. For more information, see ``HealthCheck`` in the docker container create command.
     */
  Command?: string[];
  /**
   * The time period in seconds between each health check execution. You may specify between 5 and 300 seconds. The default value is 30 seconds. This value applies only when you specify a ``command``.
   */
  Interval?: number;
  /**
   * The number of times to retry a failed health check before the container is considered unhealthy. You may specify between 1 and 10 retries. The default value is 3. This value applies only when you specify a ``command``.
   */
  Retries?: number;
  /**
     * The optional grace period to provide containers time to bootstrap before failed health checks count towards the maximum number of retries. You can specify between 0 and 300 seconds. By default, the ``startPeriod`` is off. This value applies only when you specify a ``command``.
      If a health check succeeds within the ``startPeriod``, then the container is considered healthy and any subsequent failures count toward the maximum number of retries.
     */
  StartPeriod?: number;
  /**
   * The time period in seconds to wait for a health check to succeed before it is considered a failure. You may specify between 2 and 60 seconds. The default value is 5. This value applies only when you specify a ``command``.
   */
  Timeout?: number;
};
/**
 * Type definition for `AWS::ECS::DaemonTaskDefinition.HostVolumeProperties`.
 * Details on a container instance bind mount host volume.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-daemontaskdefinition-hostvolumeproperties.html}
 */
export type HostVolumeProperties = {
  /**
     * When the ``host`` parameter is used, specify a ``sourcePath`` to declare the path on the host container instance that's presented to the container. If this parameter is empty, then the Docker daemon has assigned a host path for you. If the ``host`` parameter contains a ``sourcePath`` file location, then the data volume persists at the specified location on the host container instance until you delete it manually. If the ``sourcePath`` value doesn't exist on the host container instance, the Docker daemon creates it. If the location does exist, the contents of the source path folder are exported.
     If you're using the Fargate launch type, the ``sourcePath`` parameter is not supported.
     */
  SourcePath?: string;
};
/**
 * Type definition for `AWS::ECS::DaemonTaskDefinition.KernelCapabilities`.
 * The Linux capabilities to add or remove from the default Docker configuration for a container defined in the task definition. For more detailed information about these Linux capabilities, see the [capabilities(7)](https://docs.aws.amazon.com/http://man7.org/linux/man-pages/man7/capabilities.7.html) Linux manual page.
 The following describes how Docker processes the Linux capabilities specified in the ``add`` and ``drop`` request parameters. For information about the latest behavior, see [Docker Compose: order of cap_drop and cap_add](https://docs.aws.amazon.com/https://forums.docker.com/t/docker-compose-order-of-cap-drop-and-cap-add/97136/1) in the Docker Community Forum.
  +  When the container is a privleged container, the container capabilities are all of the default Docker capabilities. The capabilities specified in the ``add`` request parameter, and the ``drop`` request parameter are ignored.
  +  When the ``add`` request parameter is set to ALL, the container capabilities are all of the default Docker capabilities, excluding those specified in the ``drop`` request parameter.
  +  When the ``drop`` request parameter is set to ALL, the container capabilities are the capabilities specified in the ``add`` request parameter.
  +  When the ``add`` request parameter and the ``drop`` request parameter are both empty, the capabilities the container capabilities are all of the default Docker capabilities.
  +  The default is to first drop the capabilities specified in the ``drop`` request parameter, and then add the capabilities specified in the ``add`` request parameter.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-daemontaskdefinition-kernelcapabilities.html}
 */
export type KernelCapabilities = {
  /**
     * The Linux capabilities for the container that have been added to the default configuration provided by Docker. This parameter maps to ``CapAdd`` in the docker container create command and the ``--cap-add`` option to docker run.
      Tasks launched on FARGATElong only support adding the ``SYS_PTRACE`` kernel capability.
      Valid values: ``"ALL" | "AUDIT_CONTROL" | "AUDIT_WRITE" | "BLOCK_SUSPEND" | "CHOWN" | "DAC_OVERRIDE" | "DAC_READ_SEARCH" | "FOWNER" | "FSETID" | "IPC_LOCK" | "IPC_OWNER" | "KILL" | "LEASE" | "LINUX_IMMUTABLE" | "MAC_ADMIN" | "MAC_OVERRIDE" | "MKNOD" | "NET_ADMIN" | "NET_BIND_SERVICE" | "NET_BROADCAST" | "NET_RAW" | "SETFCAP" | "SETGID" | "SETPCAP" | "SETUID" | "SYS_ADMIN" | "SYS_BOOT" | "SYS_CHROOT" | "SYS_MODULE" | "SYS_NICE" | "SYS_PACCT" | "SYS_PTRACE" | "SYS_RAWIO" | "SYS_RESOURCE" | "SYS_TIME" | "SYS_TTY_CONFIG" | "SYSLOG" | "WAKE_ALARM"``
     */
  Add?: string[];
  /**
     * The Linux capabilities for the container that have been removed from the default configuration provided by Docker. This parameter maps to ``CapDrop`` in the docker container create command and the ``--cap-drop`` option to docker run.
     Valid values: ``"ALL" | "AUDIT_CONTROL" | "AUDIT_WRITE" | "BLOCK_SUSPEND" | "CHOWN" | "DAC_OVERRIDE" | "DAC_READ_SEARCH" | "FOWNER" | "FSETID" | "IPC_LOCK" | "IPC_OWNER" | "KILL" | "LEASE" | "LINUX_IMMUTABLE" | "MAC_ADMIN" | "MAC_OVERRIDE" | "MKNOD" | "NET_ADMIN" | "NET_BIND_SERVICE" | "NET_BROADCAST" | "NET_RAW" | "SETFCAP" | "SETGID" | "SETPCAP" | "SETUID" | "SYS_ADMIN" | "SYS_BOOT" | "SYS_CHROOT" | "SYS_MODULE" | "SYS_NICE" | "SYS_PACCT" | "SYS_PTRACE" | "SYS_RAWIO" | "SYS_RESOURCE" | "SYS_TIME" | "SYS_TTY_CONFIG" | "SYSLOG" | "WAKE_ALARM"``
     */
  Drop?: string[];
};
/**
 * Type definition for `AWS::ECS::DaemonTaskDefinition.KeyValuePair`.
 * A key-value pair object.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-daemontaskdefinition-keyvaluepair.html}
 */
export type KeyValuePair = {
  /**
   * The name of the key-value pair. For environment variables, this is the name of the environment variable.
   */
  Name?: string;
  /**
   * The value of the key-value pair. For environment variables, this is the value of the environment variable.
   */
  Value?: string;
};
/**
 * Type definition for `AWS::ECS::DaemonTaskDefinition.LinuxParameters`.
 * The Linux-specific options that are applied to the container, such as Linux [KernelCapabilities](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_KernelCapabilities.html).
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-daemontaskdefinition-linuxparameters.html}
 */
export type LinuxParameters = {
  /**
     * The Linux capabilities for the container that are added to or dropped from the default configuration provided by Docker.
      For tasks that use the Fargate launch type, ``capabilities`` is supported for all platform versions but the ``add`` parameter is only supported if using platform version 1.4.0 or later.
     */
  Capabilities?: KernelCapabilities;
  /**
     * Any host devices to expose to the container. This parameter maps to ``Devices`` in the docker container create command and the ``--device`` option to docker run.
      If you're using tasks that use the Fargate launch type, the ``devices`` parameter isn't supported.
     */
  Devices?: Device[];
  /**
   * Run an ``init`` process inside the container that forwards signals and reaps processes. This parameter maps to the ``--init`` option to docker run. This parameter requires version 1.25 of the Docker Remote API or greater on your container instance. To check the Docker Remote API version on your container instance, log in to your container instance and run the following command: ``sudo docker version --format '{{.Server.APIVersion}}'``
   */
  InitProcessEnabled?: boolean;
  /**
   * The container path, mount options, and size (in MiB) of the tmpfs mount. This parameter maps to the ``--tmpfs`` option to docker run.
   */
  Tmpfs?: Tmpfs[];
};
/**
 * Type definition for `AWS::ECS::DaemonTaskDefinition.LogConfiguration`.
 * The log configuration for the container. This parameter maps to ``LogConfig`` in the docker container create command and the ``--log-driver`` option to docker run.
 By default, containers use the same logging driver that the Docker daemon uses. However, the container might use a different logging driver than the Docker daemon by specifying a log driver configuration in the container definition.
 Understand the following when specifying a log configuration for your containers.
  +  Amazon ECS currently supports a subset of the logging drivers available to the Docker daemon. Additional log drivers may be available in future releases of the Amazon ECS container agent.
 For tasks on FARGATElong, the supported log drivers are ``awslogs``, ``splunk``, and ``awsfirelens``.
 For tasks hosted on Amazon EC2 instances, the supported log drivers are ``awslogs``, ``fluentd``, ``gelf``, ``json-file``, ``journald``,``syslog``, ``splunk``, and ``awsfirelens``.
  +  This parameter requires version 1.18 of the Docker Remote API or greater on your container instance.
  +  For tasks that are hosted on Amazon EC2 instances, the Amazon ECS container agent must register the available logging drivers with the ``ECS_AVAILABLE_LOGGING_DRIVERS`` environment variable before containers placed on that instance can use these log configuration options. For more information, see [Amazon ECS container agent configuration](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-agent-config.html) in the *Amazon Elastic Container Service Developer Guide*.
  +  For tasks that are on FARGATElong, because you don't have access to the underlying infrastructure your tasks are hosted on, any additional software needed must be installed outside of the task. For example, the Fluentd output aggregators or a remote host running Logstash to send Gelf logs to.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-daemontaskdefinition-logconfiguration.html}
 */
export type LogConfiguration = {
  /**
     * The log driver to use for the container.
     For tasks on FARGATElong, the supported log drivers are ``awslogs``, ``splunk``, and ``awsfirelens``.
     For tasks hosted on Amazon EC2 instances, the supported log drivers are ``awslogs``, ``fluentd``, ``gelf``, ``json-file``, ``journald``, ``syslog``, ``splunk``, and ``awsfirelens``.
     For more information about using the ``awslogs`` log driver, see [Send Amazon ECS logs to CloudWatch](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/using_awslogs.html) in the *Amazon Elastic Container Service Developer Guide*.
     For more information about using the ``awsfirelens`` log driver, see [Send Amazon ECS logs to an service or Partner](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/using_firelens.html).
      If you have a custom driver that isn't listed, you can fork the Amazon ECS container agent project that's [available on GitHub](https://docs.aws.amazon.com/https://github.com/aws/amazon-ecs-agent) and customize it to work with that driver. We encourage you to submit pull requests for changes that you would like to have included. However, we don't currently provide support for running modified copies of this software.
     */
  LogDriver: string;
  /**
     * The configuration options to send to the log driver.
     The options you can specify depend on the log driver. Some of the options you can specify when you use the ``awslogs`` log driver to route logs to Amazon CloudWatch include the following:
      + awslogs-create-group Required: No Specify whether you want the log group to be created automatically. If this option isn't specified, it defaults to false. Your IAM policy must include the logs:CreateLogGroup permission before you attempt to use awslogs-create-group. + awslogs-region Required: Yes Specify the Region that the awslogs log driver is to send your Docker logs to. You can choose to send all of your logs from clusters in different Regions to a single region in CloudWatch Logs. This is so that they're all visible in one location. Otherwise, you can separate them by Region for more granularity. Make sure that the specified log group exists in the Region that you specify with this option. + awslogs-group Required: Yes Make sure to specify a log group that the awslogs log driver sends its log streams to. + awslogs-stream-prefix Required: Yes, when using Fargate.Optional when using EC2. Use the awslogs-stream-prefix option to associate a log stream with the specified prefix, the container name, and the ID of the Amazon ECS task that the container belongs to. If you specify a prefix with this option, then the log stream takes the format prefix-name/container-name/ecs-task-id. If you don't specify a prefix with this option, then the log stream is named after the container ID that's assigned by the Docker daemon on the container instance. Because it's difficult to trace logs back to the container that sent them with just the Docker container ID (which is only available on the container instance), we recommend that you specify a prefix with this option. For Amazon ECS services, you can use the service name as the prefix. Doing so, you can trace log streams to the service that the container belongs to, the name of the container that sent them, and the ID of the task that the container belongs to. You must specify a stream-prefix for your logs to have your logs appear in the Log pane when using the Amazon ECS console. + awslogs-datetime-format Required: No This option defines a multiline start pattern in Python strftime format. A log message consists of a line that matches the pattern and any following lines that don’t match the pattern. The matched line is the delimiter between log messages. One example of a use case for using this format is for parsing output such as a stack dump, which might otherwise be logged in multiple entries. The correct pattern allows it to be captured in a single entry. For more information, see awslogs-datetime-format. You cannot configure both the awslogs-datetime-format and awslogs-multiline-pattern options. Multiline logging performs regular expression parsing and matching of all log messages. This might have a negative impact on logging performance. + awslogs-multiline-pattern Required: No This option defines a multiline start pattern that uses a regular expression. A log message consists of a line that matches the pattern and any following lines that don’t match the pattern. The matched line is the delimiter between log messages. For more information, see awslogs-multiline-pattern. This option is ignored if awslogs-datetime-format is also configured. You cannot configure both the awslogs-datetime-format and awslogs-multiline-pattern options. Multiline logging performs regular expression parsing and matching of all log messages. This might have a negative impact on logging performance.
     The following options apply to all supported log drivers.
      + mode Required: No Valid values: non-blocking | blocking This option defines the delivery mode of log messages from the container to the log driver specified using logDriver. The delivery mode you choose affects application availability when the flow of logs from container is interrupted. If you use the blocking mode and the flow of logs is interrupted, calls from container code to write to the stdout and stderr streams will block. The logging thread of the application will block as a result. This may cause the application to become unresponsive and lead to container healthcheck failure. If you use the non-blocking mode, the container's logs are instead stored in an in-memory intermediate buffer configured with the max-buffer-size option. This prevents the application from becoming unresponsive when logs cannot be sent. We recommend using this mode if you want to ensure service availability and are okay with some log loss. For more information, see Preventing log loss with non-blocking mode in the awslogs container log driver. You can set a default mode for all containers in a specific Region by using the defaultLogDriverMode account setting. If you don't specify the mode option or configure the account setting, Amazon ECS will default to the non-blocking mode. For more information about the account setting, see Default log driver mode in the Amazon Elastic Container Service Developer Guide. On June 25, 2025, Amazon ECS changed the default log driver mode from blocking to non-blocking to prioritize task availability over logging. To continue using the blocking mode after this change, do one of the following: Set the mode option in your container definition's logConfiguration as blocking. Set the defaultLogDriverMode account setting to blocking. + max-buffer-size Required: No Default value: 10m When non-blocking mode is used, the max-buffer-size log option controls the size of the buffer that's used for intermediate message storage. Make sure to specify an adequate buffer size based on your application. When the buffer fills up, further logs cannot be stored. Logs that cannot be stored are lost.
     To route logs using the ``splunk`` log router, you need to specify a ``splunk-token`` and a ``splunk-url``.
     When you use the ``awsfirelens`` log router to route logs to an AWS Service or AWS Partner Network destination for log storage and analytics, you can set the ``log-driver-buffer-limit`` option to limit the number of events that are buffered in memory, before being sent to the log router container. It can help to resolve potential log loss issue because high throughput might result in memory running out for the buffer inside of Docker.
     Other options you can specify when using ``awsfirelens`` to route logs depend on the destination. When you export logs to Amazon Data Firehose, you can specify the AWS Region with ``region`` and a name for the log stream with ``delivery_stream``.
     When you export logs to Amazon Kinesis Data Streams, you can specify an AWS Region with ``region`` and a data stream name with ``stream``.
      When you export logs to Amazon OpenSearch Service, you can specify options like ``Name``, ``Host`` (OpenSearch Service endpoint without protocol), ``Port``, ``Index``, ``Type``, ``Aws_auth``, ``Aws_region``, ``Suppress_Type_Name``, and ``tls``. For more information, see [Under the hood: FireLens for Amazon ECS Tasks](https://docs.aws.amazon.com/containers/under-the-hood-firelens-for-amazon-ecs-tasks/).
     When you export logs to Amazon S3, you can specify the bucket using the ``bucket`` option. You can also specify ``region``, ``total_file_size``, ``upload_timeout``, and ``use_put_object`` as options.
     This parameter requires version 1.19 of the Docker Remote API or greater on your container instance. To check the Docker Remote API version on your container instance, log in to your container instance and run the following command: ``sudo docker version --format '{{.Server.APIVersion}}'``
     */
  Options?: Record<string, string>;
  /**
   * The secrets to pass to the log configuration. For more information, see [Specifying sensitive data](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/specifying-sensitive-data.html) in the *Amazon Elastic Container Service Developer Guide*.
   */
  SecretOptions?: Secret[];
};
/**
 * Type definition for `AWS::ECS::DaemonTaskDefinition.MountPoint`.
 * The details for a volume mount point that's used in a container definition.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-daemontaskdefinition-mountpoint.html}
 */
export type MountPoint = {
  /**
   * The path on the container to mount the host volume at.
   */
  ContainerPath?: string;
  /**
   * If this value is ``true``, the container has read-only access to the volume. If this value is ``false``, then the container can write to the volume. The default value is ``false``.
   */
  ReadOnly?: boolean;
  /**
   * The name of the volume to mount. Must be a volume name referenced in the ``name`` parameter of task definition ``volume``.
   */
  SourceVolume?: string;
};
/**
 * Type definition for `AWS::ECS::DaemonTaskDefinition.RepositoryCredentials`.
 * The repository credentials for private registry authentication.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-daemontaskdefinition-repositorycredentials.html}
 */
export type RepositoryCredentials = {
  /**
     * The Amazon Resource Name (ARN) of the secret containing the private repository credentials.
      When you use the Amazon ECS API, CLI, or AWS SDK, if the secret exists in the same Region as the task that you're launching then you can use either the full ARN or the name of the secret. When you use the AWS Management Console, you must specify the full ARN of the secret.
     */
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
 * An object representing the secret to expose to your container. Secrets can be exposed to a container in the following ways:
  +  To inject sensitive data into your containers as environment variables, use the ``secrets`` container definition parameter.
  +  To reference sensitive information in the log configuration of a container, use the ``secretOptions`` container definition parameter.
  
 For more information, see [Specifying sensitive data](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/specifying-sensitive-data.html) in the *Amazon Elastic Container Service Developer Guide*.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-daemontaskdefinition-secret.html}
 */
export type Secret = {
  /**
   * The name of the secret.
   */
  Name: string;
  /**
     * The secret to expose to the container. The supported values are either the full ARN of the ASMlong secret or the full ARN of the parameter in the SSM Parameter Store.
     For information about the require IAMlong permissions, see [Required IAM permissions for Amazon ECS secrets](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/specifying-sensitive-data-secrets.html#secrets-iam) (for Secrets Manager) or [Required IAM permissions for Amazon ECS secrets](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/specifying-sensitive-data-parameters.html) (for Systems Manager Parameter store) in the *Amazon Elastic Container Service Developer Guide*.
      If the SSM Parameter Store parameter exists in the same Region as the task you're launching, then you can use either the full ARN or name of the parameter. If the parameter exists in a different Region, then the full ARN must be specified.
     */
  ValueFrom: string;
};
/**
 * Type definition for `AWS::ECS::DaemonTaskDefinition.SystemControl`.
 * A list of namespaced kernel parameters to set in the container. This parameter maps to ``Sysctls`` in the docker container create command and the ``--sysctl`` option to docker run. For example, you can configure ``net.ipv4.tcp_keepalive_time`` setting to maintain longer lived connections.
 We don't recommend that you specify network-related ``systemControls`` parameters for multiple containers in a single task that also uses either the ``awsvpc`` or ``host`` network mode. Doing this has the following disadvantages:
  +  For tasks that use the ``awsvpc`` network mode including Fargate, if you set ``systemControls`` for any container, it applies to all containers in the task. If you set different ``systemControls`` for multiple containers in a single task, the container that's started last determines which ``systemControls`` take effect.
  +  For tasks that use the ``host`` network mode, the network namespace ``systemControls`` aren't supported.
  
 If you're setting an IPC resource namespace to use for the containers in the task, the following conditions apply to your system controls. For more information, see [IPC mode](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task_definition_parameters.html#task_definition_ipcmode).
  +  For tasks that use the ``host`` IPC mode, IPC namespace ``systemControls`` aren't supported.
  +  For tasks that use the ``task`` IPC mode, IPC namespace ``systemControls`` values apply to all containers within a task.
  
  This parameter is not supported for Windows containers.
   This parameter is only supported for tasks that are hosted on FARGATElong if the tasks are using platform version ``1.4.0`` or later (Linux). This isn't supported for Windows containers on Fargate.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-daemontaskdefinition-systemcontrol.html}
 */
export type SystemControl = {
  /**
   * The namespaced kernel parameter to set a ``value`` for.
   */
  Namespace?: string;
  /**
     * The namespaced kernel parameter to set a ``value`` for.
     Valid IPC namespace values: ``"kernel.msgmax" | "kernel.msgmnb" | "kernel.msgmni" | "kernel.sem" | "kernel.shmall" | "kernel.shmmax" | "kernel.shmmni" | "kernel.shm_rmid_forced"``, and ``Sysctls`` that start with ``"fs.mqueue.*"``
     Valid network namespace values: ``Sysctls`` that start with ``"net.*"``. Only namespaced ``Sysctls`` that exist within the container starting with "net.* are accepted.
     All of these values are supported by Fargate.
     */
  Value?: string;
};
/**
 * Type definition for `AWS::ECS::DaemonTaskDefinition.Tag`.
 * The metadata that you apply to a resource to help you categorize and organize them. Each tag consists of a key and an optional value. You define them.
 The following basic restrictions apply to tags:
  +  Maximum number of tags per resource - 50
  +  For each resource, each tag key must be unique, and each tag key can have only one value.
  +  Maximum key length - 128 Unicode characters in UTF-8
  +  Maximum value length - 256 Unicode characters in UTF-8
  +  If your tagging schema is used across multiple services and resources, remember that other services may have restrictions on allowed characters. Generally allowed characters are: letters, numbers, and spaces representable in UTF-8, and the following characters: + - = . _ : / @.
  +  Tag keys and values are case-sensitive.
  +  Do not use ``aws:``, ``AWS:``, or any upper or lowercase combination of such as a prefix for either keys or values as it is reserved for AWS use. You cannot edit or delete tag keys or values with this prefix. Tags with this prefix do not count against your tags per resource limit.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-daemontaskdefinition-tag.html}
 */
export type Tag = {
  /**
   * One part of a key-value pair that make up a tag. A ``key`` is a general label that acts like a category for more specific tag values.
   */
  Key?: string;
  /**
   * The optional part of a key-value pair that make up a tag. A ``value`` acts as a descriptor within a tag category (key).
   */
  Value?: string;
};
/**
 * Type definition for `AWS::ECS::DaemonTaskDefinition.Tmpfs`.
 * The container path, mount options, and size of the tmpfs mount.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-daemontaskdefinition-tmpfs.html}
 */
export type Tmpfs = {
  /**
   * The absolute file path where the tmpfs volume is to be mounted.
   */
  ContainerPath?: string;
  /**
     * The list of tmpfs volume mount options.
     Valid values: ``"defaults" | "ro" | "rw" | "suid" | "nosuid" | "dev" | "nodev" | "exec" | "noexec" | "sync" | "async" | "dirsync" | "remount" | "mand" | "nomand" | "atime" | "noatime" | "diratime" | "nodiratime" | "bind" | "rbind" | "unbindable" | "runbindable" | "private" | "rprivate" | "shared" | "rshared" | "slave" | "rslave" | "relatime" | "norelatime" | "strictatime" | "nostrictatime" | "mode" | "uid" | "gid" | "nr_inodes" | "nr_blocks" | "mpol"``
     */
  MountOptions?: string[];
  /**
   * The maximum size (in MiB) of the tmpfs volume.
   */
  Size: number;
};
/**
 * Type definition for `AWS::ECS::DaemonTaskDefinition.Ulimit`.
 * The ``ulimit`` settings to pass to the container.
 Amazon ECS tasks hosted on FARGATElong use the default resource limit values set by the operating system with the exception of the ``nofile`` resource limit parameter which FARGATElong overrides. The ``nofile`` resource limit sets a restriction on the number of open files that a container can use. The default ``nofile`` soft limit is ``65535`` and the default hard limit is ``65535``.
 You can specify the ``ulimit`` settings for a container in a task definition.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-daemontaskdefinition-ulimit.html}
 */
export type Ulimit = {
  /**
   * The hard limit for the ``ulimit`` type. The value can be specified in bytes, seconds, or as a count, depending on the ``type`` of the ``ulimit``.
   */
  HardLimit: number;
  /**
   * The ``type`` of the ``ulimit``.
   */
  Name: string;
  /**
   * The soft limit for the ``ulimit`` type. The value can be specified in bytes, seconds, or as a count, depending on the ``type`` of the ``ulimit``.
   */
  SoftLimit: number;
};
/**
 * Type definition for `AWS::ECS::DaemonTaskDefinition.Volume`.
 * The data volume configuration for tasks launched using this task definition. Specifying a volume configuration in a task definition is optional. The volume configuration may contain multiple volumes but only one volume configured at launch is supported. Each volume defined in the volume configuration may only specify a ``name`` and one of either ``configuredAtLaunch``, ``dockerVolumeConfiguration``, ``efsVolumeConfiguration``, ``s3filesVolumeConfiguration``, ``fsxWindowsFileServerVolumeConfiguration``, or ``host``. If an empty volume configuration is specified, by default Amazon ECS uses a host volume. For more information, see [Using data volumes in tasks](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/using_data_volumes.html).
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-daemontaskdefinition-volume.html}
 */
export type Volume = {
  /**
     * This parameter is specified when you use bind mount host volumes. The contents of the ``host`` parameter determine whether your bind mount host volume persists on the host container instance and where it's stored. If the ``host`` parameter is empty, then the Docker daemon assigns a host path for your data volume. However, the data isn't guaranteed to persist after the containers that are associated with it stop running.
     Windows containers can mount whole directories on the same drive as ``$env:ProgramData``. Windows containers can't mount directories on a different drive, and mount point can't be across drives. For example, you can mount ``C:\my\path:C:\my\path`` and ``D:\:D:\``, but not ``D:\my\path:C:\my\path`` or ``D:\:C:\my\path``.
     */
  Host?: HostVolumeProperties;
  /**
     * The name of the volume. Up to 255 letters (uppercase and lowercase), numbers, underscores, and hyphens are allowed.
     When using a volume configured at launch, the ``name`` is required and must also be specified as the volume name in the ``ServiceVolumeConfiguration`` or ``TaskVolumeConfiguration`` parameter when creating your service or standalone task.
     For all other types of volumes, this name is referenced in the ``sourceVolume`` parameter of the ``mountPoints`` object in the container definition.
     When a volume is using the ``efsVolumeConfiguration``, the name is required.
     When a volume is using the ``s3filesVolumeConfiguration``, the name is required.
     */
  Name?: string;
};
/**
 * Resource type definition for `AWS::ECS::DaemonTaskDefinition`.
 * The details of a daemon task definition. A daemon task definition is a template that describes the containers that form a daemon. Daemons deploy cross-cutting software agents independently across your Amazon ECS infrastructure.
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
