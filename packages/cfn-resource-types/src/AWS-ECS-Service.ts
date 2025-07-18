import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * The ``AWS::ECS::Service`` resource creates an Amazon Elastic Container Service (Amazon ECS) service that runs and maintains the requested number of tasks and associated load balancers.
  The stack update fails if you change any properties that require replacement and at least one ECS Service Connect ``ServiceConnectConfiguration`` property is configured. This is because AWS CloudFormation creates the replacement service first, but each ``ServiceConnectService`` must have a name that is unique in the namespace.
   Starting April 15, 2023, AWS; will not onboard new customers to Amazon Elastic Inference (EI), and will help current customers migrate their workloads to options that offer better price and performance. After April 15, 2023, new customers will not be able to launch instances with Amazon EI accelerators in Amazon SageMaker, ECS, or EC2. However, customers who have used Amazon EI at least once during the past 30-day period are considered current customers and will be able to continue using the service.
   On June 12, 2025, Amazon ECS launched support for updating capacity provider configuration for ECS services. With this launch, ECS also aligned the CFN update behavior for ``CapacityProviderStrategy`` parameter with the standard practice. For more information, see [adds support for updating capacity provider configuration for ECS services](https://docs.aws.amazon.com/about-aws/whats-new/2025/05/amazon-ecs-capacity-provider-configuration-ecs/). Previously ECS ignored the ``CapacityProviderStrategy`` property if it was set to an empty list for example, ``[]`` in CFN, because updating capacity provider configuration was not supported. Now, with support for capacity provider updates, customers can remove capacity providers from a service by passing an empty list. When you specify an empty list (``[]``) for the ``CapacityProviderStrategy`` property in your CFN template, ECS will remove any capacity providers associated with the service, as follows:
  +  For services created with a capacity provider strategy after the launch:
  +  If there's a cluster default strategy set, the service will revert to using that default strategy.
  +  If no cluster default strategy exists, you will receive the following error:
 No launch type to fall back to for empty capacity provider strategy. Your service was not created with a launch type.
  
  +  For services created with a capacity provider strategy prior to the launch:
  +  If ``CapacityProviderStrategy`` had ``FARGATE_SPOT`` or ``FARGATE`` capacity providers, the launch type will be updated to ``FARGATE`` and the capacity provider will be removed.
  +  If the strategy included Auto Scaling group capacity providers, the service will revert to EC2 launch type, and the Auto Scaling group capacity providers will not be used.
  
  
 Recommended Actions
 If you are currently using ``CapacityProviderStrategy: []`` in your CFN templates, you should take one of the following actions:
  +  If you do not intend to update the Capacity Provider Strategy:
  +  Remove the ``CapacityProviderStrategy`` property entirely from your CFN template
  +  Alternatively, use ``!Ref ::NoValue`` for the ``CapacityProviderStrategy`` property in your template
  
  +  If you intend to maintain or update the Capacity Provider Strategy, specify the actual Capacity Provider Strategy for the service in your CFN template.
  
 If your CFN template had an empty list ([]) for ``CapacityProviderStrategy`` prior to the aforementioned launch on June 12, and you are using the same template with ``CapacityProviderStrategy: []``, you might encounter the following error:
  Invalid request provided: When switching from launch type to capacity provider strategy on an existing service, or making a change to a capacity provider strategy on a service that is already using one, you must force a new deployment. (Service: Ecs, Status Code: 400, Request ID: xxx) (SDK Attempt Count: 1)" (RequestToken: xxx HandlerErrorCode: InvalidRequest)
 Note that CFN automatically initiates a new deployment when it detects a parameter change, but customers cannot choose to force a deployment through CFN. This is an invalid input scenario that requires one of the remediation actions listed above.
 If you are experiencing active production issues related to this change, contact AWS Support or your Technical Account Manager.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecs-service.html}
 */
export type ECSServiceProperties = {
  /**
     * Indicates whether to use Availability Zone rebalancing for the service.
     For more information, see [Balancing an Amazon ECS service across Availability Zones](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-rebalancing.html) in the *Amazon Elastic Container Service Developer Guide*.
     */
  AvailabilityZoneRebalancing?: "ENABLED" | "DISABLED";
  /**
     * The capacity provider strategy to use for the service.
     If a ``capacityProviderStrategy`` is specified, the ``launchType`` parameter must be omitted. If no ``capacityProviderStrategy`` or ``launchType`` is specified, the ``defaultCapacityProviderStrategy`` for the cluster is used.
     A capacity provider strategy can contain a maximum of 20 capacity providers.
      To remove this property from your service resource, specify an empty ``CapacityProviderStrategyItem`` array.
     */
  CapacityProviderStrategy?: CapacityProviderStrategyItem[];
  /**
   * The short name or full Amazon Resource Name (ARN) of the cluster that you run your service on. If you do not specify a cluster, the default cluster is assumed.
   */
  Cluster?: string;
  /**
   * Optional deployment parameters that control how many tasks run during the deployment and the ordering of stopping and starting tasks.
   */
  DeploymentConfiguration?: DeploymentConfiguration;
  /**
   * The deployment controller to use for the service. If no deployment controller is specified, the default value of ``ECS`` is used.
   */
  DeploymentController?: DeploymentController;
  /**
     * The number of instantiations of the specified task definition to place and keep running in your service.
     For new services, if a desired count is not specified, a default value of ``1`` is used. When using the ``DAEMON`` scheduling strategy, the desired count is not required.
     For existing services, if a desired count is not specified, it is omitted from the operation.
     */
  DesiredCount?: number;
  /**
     * Specifies whether to turn on Amazon ECS managed tags for the tasks within the service. For more information, see [Tagging your Amazon ECS resources](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-using-tags.html) in the *Amazon Elastic Container Service Developer Guide*.
     When you use Amazon ECS managed tags, you need to set the ``propagateTags`` request parameter.
     */
  EnableECSManagedTags?: boolean;
  /**
   * Determines whether the execute command functionality is turned on for the service. If ``true``, the execute command functionality is turned on for all containers in tasks as part of the service.
   */
  EnableExecuteCommand?: boolean;
  /**
     * The period of time, in seconds, that the Amazon ECS service scheduler ignores unhealthy Elastic Load Balancing, VPC Lattice, and container health checks after a task has first started. If you don't specify a health check grace period value, the default value of ``0`` is used. If you don't use any of the health checks, then ``healthCheckGracePeriodSeconds`` is unused.
     If your service's tasks take a while to start and respond to health checks, you can specify a health check grace period of up to 2,147,483,647 seconds (about 69 years). During that time, the Amazon ECS service scheduler ignores health check status. This grace period can prevent the service scheduler from marking tasks as unhealthy and stopping them before they have time to come up.
     */
  HealthCheckGracePeriodSeconds?: number;
  /**
   * The launch type on which to run your service. For more information, see [Amazon ECS Launch Types](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/launch_types.html) in the *Amazon Elastic Container Service Developer Guide*.
   */
  LaunchType?: "EC2" | "FARGATE" | "EXTERNAL";
  /**
     * A list of load balancer objects to associate with the service. If you specify the ``Role`` property, ``LoadBalancers`` must be specified as well. For information about the number of load balancers that you can specify per service, see [Service Load Balancing](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-load-balancing.html) in the *Amazon Elastic Container Service Developer Guide*.
      To remove this property from your service resource, specify an empty ``LoadBalancer`` array.
     */
  LoadBalancers?: LoadBalancer[];
  /**
   * The network configuration for the service. This parameter is required for task definitions that use the ``awsvpc`` network mode to receive their own elastic network interface, and it is not supported for other network modes. For more information, see [Task Networking](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-networking.html) in the *Amazon Elastic Container Service Developer Guide*.
   */
  NetworkConfiguration?: NetworkConfiguration;
  /**
     * An array of placement constraint objects to use for tasks in your service. You can specify a maximum of 10 constraints for each task. This limit includes constraints in the task definition and those specified at runtime.
      To remove this property from your service resource, specify an empty ``PlacementConstraint`` array.
     */
  PlacementConstraints?: PlacementConstraint[];
  /**
     * The placement strategy objects to use for tasks in your service. You can specify a maximum of 5 strategy rules for each service.
      To remove this property from your service resource, specify an empty ``PlacementStrategy`` array.
     */
  PlacementStrategies?: PlacementStrategy[];
  /**
   * The platform version that your tasks in the service are running on. A platform version is specified only for tasks using the Fargate launch type. If one isn't specified, the ``LATEST`` platform version is used. For more information, see [platform versions](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/platform_versions.html) in the *Amazon Elastic Container Service Developer Guide*.
   */
  PlatformVersion?: string;
  /**
     * Specifies whether to propagate the tags from the task definition to the task. If no value is specified, the tags aren't propagated. Tags can only be propagated to the task during task creation. To add tags to a task after task creation, use the [TagResource](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_TagResource.html) API action.
     You must set this to a value other than ``NONE`` when you use Cost Explorer. For more information, see [Amazon ECS usage reports](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/usage-reports.html) in the *Amazon Elastic Container Service Developer Guide*.
     The default is ``NONE``.
     */
  PropagateTags?: "SERVICE" | "TASK_DEFINITION";
  /**
     * The name or full Amazon Resource Name (ARN) of the IAM role that allows Amazon ECS to make calls to your load balancer on your behalf. This parameter is only permitted if you are using a load balancer with your service and your task definition doesn't use the ``awsvpc`` network mode. If you specify the ``role`` parameter, you must also specify a load balancer object with the ``loadBalancers`` parameter.
      If your account has already created the Amazon ECS service-linked role, that role is used for your service unless you specify a role here. The service-linked role is required if your task definition uses the ``awsvpc`` network mode or if the service is configured to use service discovery, an external deployment controller, multiple target groups, or Elastic Inference accelerators in which case you don't specify a role here. For more information, see [Using service-linked roles for Amazon ECS](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/using-service-linked-roles.html) in the *Amazon Elastic Container Service Developer Guide*.
      If your specified role has a path other than ``/``, then you must either specify the full role ARN (this is recommended) or prefix the role name with the path. For example, if a role with the name ``bar`` has a path of ``/foo/`` then you would specify ``/foo/bar`` as the role name. For more information, see [Friendly names and paths](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_identifiers.html#identifiers-friendly-names) in the *IAM User Guide*.
     */
  Role?: string;
  /**
     * The scheduling strategy to use for the service. For more information, see [Services](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs_services.html).
     There are two service scheduler strategies available:
      +  ``REPLICA``-The replica scheduling strategy places and maintains the desired number of tasks across your cluster. By default, the service scheduler spreads tasks across Availability Zones. You can use task placement strategies and constraints to customize task placement decisions. This scheduler strategy is required if the service uses the ``CODE_DEPLOY`` or ``EXTERNAL`` deployment controller types.
      +  ``DAEMON``-The daemon scheduling strategy deploys exactly one task on each active container instance that meets all of the task placement constraints that you specify in your cluster. The service scheduler also evaluates the task placement constraints for running tasks and will stop tasks that don't meet the placement constraints. When you're using this strategy, you don't need to specify a desired number of tasks, a task placement strategy, or use Service Auto Scaling policies.
      Tasks using the Fargate launch type or the ``CODE_DEPLOY`` or ``EXTERNAL`` deployment controller types don't support the ``DAEMON`` scheduling strategy.
     */
  SchedulingStrategy?: "DAEMON" | "REPLICA";
  /**
     * The configuration for this service to discover and connect to services, and be discovered by, and connected from, other services within a namespace.
     Tasks that run in a namespace can use short names to connect to services in the namespace. Tasks can connect to services across all of the clusters in the namespace. Tasks connect through a managed proxy container that collects logs and metrics for increased visibility. Only the tasks that Amazon ECS services create are supported with Service Connect. For more information, see [Service Connect](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-connect.html) in the *Amazon Elastic Container Service Developer Guide*.
     */
  ServiceConnectConfiguration?: ServiceConnectConfiguration;
  /**
     * The name of your service. Up to 255 letters (uppercase and lowercase), numbers, underscores, and hyphens are allowed. Service names must be unique within a cluster, but you can have similarly named services in multiple clusters within a Region or across multiple Regions.
      The stack update fails if you change any properties that require replacement and the ``ServiceName`` is configured. This is because AWS CloudFormation creates the replacement service first, but each ``ServiceName`` must be unique in the cluster.
     */
  ServiceName?: string;
  /**
     * The details of the service discovery registry to associate with this service. For more information, see [Service discovery](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-discovery.html).
      Each service may be associated with one service registry. Multiple service registries for each service isn't supported.
       To remove this property from your service resource, specify an empty ``ServiceRegistry`` array.
     */
  ServiceRegistries?: ServiceRegistry[];
  /**
     * The metadata that you apply to the service to help you categorize and organize them. Each tag consists of a key and an optional value, both of which you define. When a service is deleted, the tags are deleted as well.
     The following basic restrictions apply to tags:
      +  Maximum number of tags per resource - 50
      +  For each resource, each tag key must be unique, and each tag key can have only one value.
      +  Maximum key length - 128 Unicode characters in UTF-8
      +  Maximum value length - 256 Unicode characters in UTF-8
      +  If your tagging schema is used across multiple services and resources, remember that other services may have restrictions on allowed characters. Generally allowed characters are: letters, numbers, and spaces representable in UTF-8, and the following characters: + - = . _ : / @.
      +  Tag keys and values are case-sensitive.
      +  Do not use ``aws:``, ``AWS:``, or any upper or lowercase combination of such as a prefix for either keys or values as it is reserved for AWS use. You cannot edit or delete tag keys or values with this prefix. Tags with this prefix do not count against your tags per resource limit.
     */
  Tags?: Tag[];
  /**
     * The ``family`` and ``revision`` (``family:revision``) or full ARN of the task definition to run in your service. If a ``revision`` isn't specified, the latest ``ACTIVE`` revision is used.
     A task definition must be specified if the service uses either the ``ECS`` or ``CODE_DEPLOY`` deployment controllers.
     For more information about deployment types, see [Amazon ECS deployment types](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/deployment-types.html).
     */
  TaskDefinition?: string;
  /**
     * The configuration for a volume specified in the task definition as a volume that is configured at launch time. Currently, the only supported volume type is an Amazon EBS volume.
      To remove this property from your service resource, specify an empty ``ServiceVolumeConfiguration`` array.
     */
  VolumeConfigurations?: ServiceVolumeConfiguration[];
  /**
   * The VPC Lattice configuration for the service being created.
   */
  VpcLatticeConfigurations?: VpcLatticeConfiguration[];
};
/**
 * Attribute type definition for `AWS::ECS::Service`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecs-service.html#aws-resource-ecs-service-return-values}
 */
export type ECSServiceAttributes = {
  Name: string;
  ServiceArn: string;
};
/**
 * Type definition for `AWS::ECS::Service.AdvancedConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-service-advancedconfiguration.html}
 */
export type AdvancedConfiguration = {
  AlternateTargetGroupArn: string;
  ProductionListenerRule?: string;
  RoleArn?: string;
  TestListenerRule?: string;
};
/**
 * Type definition for `AWS::ECS::Service.AwsVpcConfiguration`.
 * An object representing the networking details for a task or service. For example ``awsVpcConfiguration={subnets=["subnet-12344321"],securityGroups=["sg-12344321"]}``.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-service-awsvpcconfiguration.html}
 */
export type AwsVpcConfiguration = {
  /**
     * Whether the task's elastic network interface receives a public IP address.
     Consider the following when you set this value:
      +  When you use ``create-service`` or ``update-service``, the default is ``DISABLED``.
      +  When the service ``deploymentController`` is ``ECS``, the value must be ``DISABLED``.
     */
  AssignPublicIp?: "DISABLED" | "ENABLED";
  /**
     * The IDs of the security groups associated with the task or service. If you don't specify a security group, the default security group for the VPC is used. There's a limit of 5 security groups that can be specified.
      All specified security groups must be from the same VPC.
     */
  SecurityGroups?: string[];
  /**
     * The IDs of the subnets associated with the task or service. There's a limit of 16 subnets that can be specified.
      All specified subnets must be from the same VPC.
     */
  Subnets?: string[];
};
/**
 * Type definition for `AWS::ECS::Service.CapacityProviderStrategyItem`.
 * The details of a capacity provider strategy. A capacity provider strategy can be set when using the ``RunTask`` or ``CreateService`` APIs or as the default capacity provider strategy for a cluster with the ``CreateCluster`` API.
 Only capacity providers that are already associated with a cluster and have an ``ACTIVE`` or ``UPDATING`` status can be used in a capacity provider strategy. The ``PutClusterCapacityProviders`` API is used to associate a capacity provider with a cluster.
 If specifying a capacity provider that uses an Auto Scaling group, the capacity provider must already be created. New Auto Scaling group capacity providers can be created with the ``CreateCapacityProvider`` API operation.
 To use an FARGATElong capacity provider, specify either the ``FARGATE`` or ``FARGATE_SPOT`` capacity providers. The FARGATElong capacity providers are available to all accounts and only need to be associated with a cluster to be used in a capacity provider strategy.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-service-capacityproviderstrategyitem.html}
 */
export type CapacityProviderStrategyItem = {
  /**
   * The *base* value designates how many tasks, at a minimum, to run on the specified capacity provider. Only one capacity provider in a capacity provider strategy can have a *base* defined. If no value is specified, the default value of ``0`` is used.
   */
  Base?: number;
  /**
   * The short name of the capacity provider.
   */
  CapacityProvider?: string;
  /**
     * The *weight* value designates the relative percentage of the total number of tasks launched that should use the specified capacity provider. The ``weight`` value is taken into consideration after the ``base`` value, if defined, is satisfied.
     If no ``weight`` value is specified, the default value of ``0`` is used. When multiple capacity providers are specified within a capacity provider strategy, at least one of the capacity providers must have a weight value greater than zero and any capacity providers with a weight of ``0`` can't be used to place tasks. If you specify multiple capacity providers in a strategy that all have a weight of ``0``, any ``RunTask`` or ``CreateService`` actions using the capacity provider strategy will fail.
     An example scenario for using weights is defining a strategy that contains two capacity providers and both have a weight of ``1``, then when the ``base`` is satisfied, the tasks will be split evenly across the two capacity providers. Using that same logic, if you specify a weight of ``1`` for *capacityProviderA* and a weight of ``4`` for *capacityProviderB*, then for every one task that's run using *capacityProviderA*, four tasks would use *capacityProviderB*.
     */
  Weight?: number;
};
/**
 * Type definition for `AWS::ECS::Service.DeploymentAlarms`.
 * One of the methods which provide a way for you to quickly identify when a deployment has failed, and then to optionally roll back the failure to the last working deployment.
 When the alarms are generated, Amazon ECS sets the service deployment to failed. Set the rollback parameter to have Amazon ECS to roll back your service to the last completed deployment after a failure.
 You can only use the ``DeploymentAlarms`` method to detect failures when the ``DeploymentController`` is set to ``ECS`` (rolling update).
 For more information, see [Rolling update](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/deployment-type-ecs.html) in the *Amazon Elastic Container Service Developer Guide*.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-service-deploymentalarms.html}
 */
export type DeploymentAlarms = {
  /**
   * One or more CloudWatch alarm names. Use a "," to separate the alarms.
   */
  AlarmNames: string[];
  /**
   * Determines whether to use the CloudWatch alarm option in the service deployment process.
   */
  Enable: boolean;
  /**
   * Determines whether to configure Amazon ECS to roll back the service if a service deployment fails. If rollback is used, when a service deployment fails, the service is rolled back to the last deployment that completed successfully.
   */
  Rollback: boolean;
};
/**
 * Type definition for `AWS::ECS::Service.DeploymentCircuitBreaker`.
 * The deployment circuit breaker can only be used for services using the rolling update (``ECS``) deployment type.
  The *deployment circuit breaker* determines whether a service deployment will fail if the service can't reach a steady state. If it is turned on, a service deployment will transition to a failed state and stop launching new tasks. You can also configure Amazon ECS to roll back your service to the last completed deployment after a failure. For more information, see [Rolling update](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/deployment-type-ecs.html) in the *Amazon Elastic Container Service Developer Guide*.
 For more information about API failure reasons, see [API failure reasons](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/api_failures_messages.html) in the *Amazon Elastic Container Service Developer Guide*.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-service-deploymentcircuitbreaker.html}
 */
export type DeploymentCircuitBreaker = {
  /**
   * Determines whether to use the deployment circuit breaker logic for the service.
   */
  Enable: boolean;
  /**
   * Determines whether to configure Amazon ECS to roll back the service if a service deployment fails. If rollback is on, when a service deployment fails, the service is rolled back to the last deployment that completed successfully.
   */
  Rollback: boolean;
};
/**
 * Type definition for `AWS::ECS::Service.DeploymentConfiguration`.
 * Optional deployment parameters that control how many tasks run during a deployment and the ordering of stopping and starting tasks.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-service-deploymentconfiguration.html}
 */
export type DeploymentConfiguration = {
  /**
   * Information about the CloudWatch alarms.
   */
  Alarms?: DeploymentAlarms;
  /**
   * @min `0`
   * @max `1440`
   */
  BakeTimeInMinutes?: number;
  /**
     * The deployment circuit breaker can only be used for services using the rolling update (``ECS``) deployment type.
      The *deployment circuit breaker* determines whether a service deployment will fail if the service can't reach a steady state. If you use the deployment circuit breaker, a service deployment will transition to a failed state and stop launching new tasks. If you use the rollback option, when a service deployment fails, the service is rolled back to the last deployment that completed successfully. For more information, see [Rolling update](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/deployment-type-ecs.html) in the *Amazon Elastic Container Service Developer Guide*
     */
  DeploymentCircuitBreaker?: DeploymentCircuitBreaker;
  LifecycleHooks?: DeploymentLifecycleHook[];
  /**
     * If a service is using the rolling update (``ECS``) deployment type, the ``maximumPercent`` parameter represents an upper limit on the number of your service's tasks that are allowed in the ``RUNNING`` or ``PENDING`` state during a deployment, as a percentage of the ``desiredCount`` (rounded down to the nearest integer). This parameter enables you to define the deployment batch size. For example, if your service is using the ``REPLICA`` service scheduler and has a ``desiredCount`` of four tasks and a ``maximumPercent`` value of 200%, the scheduler may start four new tasks before stopping the four older tasks (provided that the cluster resources required to do this are available). The default ``maximumPercent`` value for a service using the ``REPLICA`` service scheduler is 200%.
     The Amazon ECS scheduler uses this parameter to replace unhealthy tasks by starting replacement tasks first and then stopping the unhealthy tasks, as long as cluster resources for starting replacement tasks are available. For more information about how the scheduler replaces unhealthy tasks, see [Amazon ECS services](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs_services.html).
     If a service is using either the blue/green (``CODE_DEPLOY``) or ``EXTERNAL`` deployment types, and tasks in the service use the EC2 launch type, the *maximum percent* value is set to the default value. The *maximum percent* value is used to define the upper limit on the number of the tasks in the service that remain in the ``RUNNING`` state while the container instances are in the ``DRAINING`` state.
      You can't specify a custom ``maximumPercent`` value for a service that uses either the blue/green (``CODE_DEPLOY``) or ``EXTERNAL`` deployment types and has tasks that use the EC2 launch type.
      If the service uses either the blue/green (``CODE_DEPLOY``) or ``EXTERNAL`` deployment types, and the tasks in the service use the Fargate launch type, the maximum percent value is not used. The value is still returned when describing your service.
     */
  MaximumPercent?: number;
  /**
     * If a service is using the rolling update (``ECS``) deployment type, the ``minimumHealthyPercent`` represents a lower limit on the number of your service's tasks that must remain in the ``RUNNING`` state during a deployment, as a percentage of the ``desiredCount`` (rounded up to the nearest integer). This parameter enables you to deploy without using additional cluster capacity. For example, if your service has a ``desiredCount`` of four tasks and a ``minimumHealthyPercent`` of 50%, the service scheduler may stop two existing tasks to free up cluster capacity before starting two new tasks.
      If any tasks are unhealthy and if ``maximumPercent`` doesn't allow the Amazon ECS scheduler to start replacement tasks, the scheduler stops the unhealthy tasks one-by-one — using the ``minimumHealthyPercent`` as a constraint — to clear up capacity to launch replacement tasks. For more information about how the scheduler replaces unhealthy tasks, see [Amazon ECS services](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs_services.html) .
     For services that *do not* use a load balancer, the following should be noted:
      +  A service is considered healthy if all essential containers within the tasks in the service pass their health checks.
      +  If a task has no essential containers with a health check defined, the service scheduler will wait for 40 seconds after a task reaches a ``RUNNING`` state before the task is counted towards the minimum healthy percent total.
      +  If a task has one or more essential containers with a health check defined, the service scheduler will wait for the task to reach a healthy status before counting it towards the minimum healthy percent total. A task is considered healthy when all essential containers within the task have passed their health checks. The amount of time the service scheduler can wait for is determined by the container health check settings.
      
     For services that *do* use a load balancer, the following should be noted:
      +  If a task has no essential containers with a health check defined, the service scheduler will wait for the load balancer target group health check to return a healthy status before counting the task towards the minimum healthy percent total.
      +  If a task has an essential container with a health check defined, the service scheduler will wait for both the task to reach a healthy status and the load balancer target group health check to return a healthy status before counting the task towards the minimum healthy percent total.
      
     The default value for a replica service for ``minimumHealthyPercent`` is 100%. The default ``minimumHealthyPercent`` value for a service using the ``DAEMON`` service schedule is 0% for the CLI, the AWS SDKs, and the APIs and 50% for the AWS Management Console.
     The minimum number of healthy tasks during a deployment is the ``desiredCount`` multiplied by the ``minimumHealthyPercent``/100, rounded up to the nearest integer value.
     If a service is using either the blue/green (``CODE_DEPLOY``) or ``EXTERNAL`` deployment types and is running tasks that use the EC2 launch type, the *minimum healthy percent* value is set to the default value. The *minimum healthy percent* value is used to define the lower limit on the number of the tasks in the service that remain in the ``RUNNING`` state while the container instances are in the ``DRAINING`` state.
      You can't specify a custom ``minimumHealthyPercent`` value for a service that uses either the blue/green (``CODE_DEPLOY``) or ``EXTERNAL`` deployment types and has tasks that use the EC2 launch type.
      If a service is using either the blue/green (``CODE_DEPLOY``) or ``EXTERNAL`` deployment types and is running tasks that use the Fargate launch type, the minimum healthy percent value is not used, although it is returned when describing your service.
     */
  MinimumHealthyPercent?: number;
  Strategy?: "ROLLING" | "BLUE_GREEN";
};
/**
 * Type definition for `AWS::ECS::Service.DeploymentController`.
 * The deployment controller to use for the service.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-service-deploymentcontroller.html}
 */
export type DeploymentController = {
  /**
     * The deployment controller type to use. There are three deployment controller types available:
      + ECS The rolling update (ECS) deployment type involves replacing the current running version of the container with the latest version. The number of containers Amazon ECS adds or removes from the service during a rolling update is controlled by adjusting the minimum and maximum number of healthy tasks allowed during a service deployment, as specified in the DeploymentConfiguration. + CODE_DEPLOY The blue/green (CODE_DEPLOY) deployment type uses the blue/green deployment model powered by , which allows you to verify a new deployment of a service before sending production traffic to it. + EXTERNAL The external (EXTERNAL) deployment type enables you to use any third-party deployment controller for full control over the deployment process for an Amazon ECS service.
     */
  Type?: "CODE_DEPLOY" | "ECS" | "EXTERNAL";
};
/**
 * Type definition for `AWS::ECS::Service.DeploymentLifecycleHook`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-service-deploymentlifecyclehook.html}
 */
export type DeploymentLifecycleHook = {
  HookTargetArn: string;
  /**
   * @minLength `1`
   */
  LifecycleStages: (
    | "RECONCILE_SERVICE"
    | "PRE_SCALE_UP"
    | "POST_SCALE_UP"
    | "TEST_TRAFFIC_SHIFT"
    | "POST_TEST_TRAFFIC_SHIFT"
    | "PRODUCTION_TRAFFIC_SHIFT"
    | "POST_PRODUCTION_TRAFFIC_SHIFT"
  )[];
  RoleArn: string;
};
/**
 * Type definition for `AWS::ECS::Service.EBSTagSpecification`.
 * The tag specifications of an Amazon EBS volume.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-service-ebstagspecification.html}
 */
export type EBSTagSpecification = {
  /**
     * Determines whether to propagate the tags from the task definition to
    the Amazon EBS volume. Tags can only propagate to a ``SERVICE`` specified in
    ``ServiceVolumeConfiguration``. If no value is specified, the tags aren't
    propagated.
     */
  PropagateTags?: "SERVICE" | "TASK_DEFINITION";
  /**
   * The type of volume resource.
   */
  ResourceType: string;
  /**
   * The tags applied to this Amazon EBS volume. ``AmazonECSCreated`` and ``AmazonECSManaged`` are reserved tags that can't be used.
   */
  Tags?: Tag[];
};
/**
 * Type definition for `AWS::ECS::Service.LoadBalancer`.
 * The ``LoadBalancer`` property specifies details on a load balancer that is used with a service.
 If the service is using the ``CODE_DEPLOY`` deployment controller, the service is required to use either an Application Load Balancer or Network Load Balancer. When you are creating an ACDlong deployment group, you specify two target groups (referred to as a ``targetGroupPair``). Each target group binds to a separate task set in the deployment. The load balancer can also have up to two listeners, a required listener for production traffic and an optional listener that allows you to test new revisions of the service before routing production traffic to it.
 Services with tasks that use the ``awsvpc`` network mode (for example, those with the Fargate launch type) only support Application Load Balancers and Network Load Balancers. Classic Load Balancers are not supported. Also, when you create any target groups for these services, you must choose ``ip`` as the target type, not ``instance``. Tasks that use the ``awsvpc`` network mode are associated with an elastic network interface, not an Amazon EC2 instance.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-service-loadbalancer.html}
 */
export type LoadBalancer = {
  AdvancedConfiguration?: AdvancedConfiguration;
  /**
     * The name of the container (as it appears in a container definition) to associate with the load balancer.
     You need to specify the container name when configuring the target group for an Amazon ECS load balancer.
     */
  ContainerName?: string;
  /**
   * The port on the container to associate with the load balancer. This port must correspond to a ``containerPort`` in the task definition the tasks in the service are using. For tasks that use the EC2 launch type, the container instance they're launched on must allow ingress traffic on the ``hostPort`` of the port mapping.
   */
  ContainerPort?: number;
  /**
     * The name of the load balancer to associate with the Amazon ECS service or task set.
     If you are using an Application Load Balancer or a Network Load Balancer the load balancer name parameter should be omitted.
     */
  LoadBalancerName?: string;
  /**
     * The full Amazon Resource Name (ARN) of the Elastic Load Balancing target group or groups associated with a service or task set.
     A target group ARN is only specified when using an Application Load Balancer or Network Load Balancer.
     For services using the ``ECS`` deployment controller, you can specify one or multiple target groups. For more information, see [Registering multiple target groups with a service](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/register-multiple-targetgroups.html) in the *Amazon Elastic Container Service Developer Guide*.
     For services using the ``CODE_DEPLOY`` deployment controller, you're required to define two target groups for the load balancer. For more information, see [Blue/green deployment with CodeDeploy](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/deployment-type-bluegreen.html) in the *Amazon Elastic Container Service Developer Guide*.
      If your service's task definition uses the ``awsvpc`` network mode, you must choose ``ip`` as the target type, not ``instance``. Do this when creating your target groups because tasks that use the ``awsvpc`` network mode are associated with an elastic network interface, not an Amazon EC2 instance. This network mode is required for the Fargate launch type.
     */
  TargetGroupArn?: string;
};
/**
 * Type definition for `AWS::ECS::Service.LogConfiguration`.
 * The log configuration for the container. This parameter maps to ``LogConfig`` in the docker container create command and the ``--log-driver`` option to docker run.
 By default, containers use the same logging driver that the Docker daemon uses. However, the container might use a different logging driver than the Docker daemon by specifying a log driver configuration in the container definition.
 Understand the following when specifying a log configuration for your containers.
  +  Amazon ECS currently supports a subset of the logging drivers available to the Docker daemon. Additional log drivers may be available in future releases of the Amazon ECS container agent.
 For tasks on FARGATElong, the supported log drivers are ``awslogs``, ``splunk``, and ``awsfirelens``.
 For tasks hosted on Amazon EC2 instances, the supported log drivers are ``awslogs``, ``fluentd``, ``gelf``, ``json-file``, ``journald``,``syslog``, ``splunk``, and ``awsfirelens``.
  +  This parameter requires version 1.18 of the Docker Remote API or greater on your container instance.
  +  For tasks that are hosted on Amazon EC2 instances, the Amazon ECS container agent must register the available logging drivers with the ``ECS_AVAILABLE_LOGGING_DRIVERS`` environment variable before containers placed on that instance can use these log configuration options. For more information, see [Amazon ECS container agent configuration](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-agent-config.html) in the *Amazon Elastic Container Service Developer Guide*.
  +  For tasks that are on FARGATElong, because you don't have access to the underlying infrastructure your tasks are hosted on, any additional software needed must be installed outside of the task. For example, the Fluentd output aggregators or a remote host running Logstash to send Gelf logs to.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-service-logconfiguration.html}
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
  LogDriver?: string;
  /**
     * The configuration options to send to the log driver.
     The options you can specify depend on the log driver. Some of the options you can specify when you use the ``awslogs`` log driver to route logs to Amazon CloudWatch include the following:
      + awslogs-create-group Required: No Specify whether you want the log group to be created automatically. If this option isn't specified, it defaults to false. Your IAM policy must include the logs:CreateLogGroup permission before you attempt to use awslogs-create-group. + awslogs-region Required: Yes Specify the Region that the awslogs log driver is to send your Docker logs to. You can choose to send all of your logs from clusters in different Regions to a single region in CloudWatch Logs. This is so that they're all visible in one location. Otherwise, you can separate them by Region for more granularity. Make sure that the specified log group exists in the Region that you specify with this option. + awslogs-group Required: Yes Make sure to specify a log group that the awslogs log driver sends its log streams to. + awslogs-stream-prefix Required: Yes, when using Fargate.Optional when using EC2. Use the awslogs-stream-prefix option to associate a log stream with the specified prefix, the container name, and the ID of the Amazon ECS task that the container belongs to. If you specify a prefix with this option, then the log stream takes the format prefix-name/container-name/ecs-task-id. If you don't specify a prefix with this option, then the log stream is named after the container ID that's assigned by the Docker daemon on the container instance. Because it's difficult to trace logs back to the container that sent them with just the Docker container ID (which is only available on the container instance), we recommend that you specify a prefix with this option. For Amazon ECS services, you can use the service name as the prefix. Doing so, you can trace log streams to the service that the container belongs to, the name of the container that sent them, and the ID of the task that the container belongs to. You must specify a stream-prefix for your logs to have your logs appear in the Log pane when using the Amazon ECS console. + awslogs-datetime-format Required: No This option defines a multiline start pattern in Python strftime format. A log message consists of a line that matches the pattern and any following lines that don’t match the pattern. The matched line is the delimiter between log messages. One example of a use case for using this format is for parsing output such as a stack dump, which might otherwise be logged in multiple entries. The correct pattern allows it to be captured in a single entry. For more information, see awslogs-datetime-format. You cannot configure both the awslogs-datetime-format and awslogs-multiline-pattern options. Multiline logging performs regular expression parsing and matching of all log messages. This might have a negative impact on logging performance. + awslogs-multiline-pattern Required: No This option defines a multiline start pattern that uses a regular expression. A log message consists of a line that matches the pattern and any following lines that don’t match the pattern. The matched line is the delimiter between log messages. For more information, see awslogs-multiline-pattern. This option is ignored if awslogs-datetime-format is also configured. You cannot configure both the awslogs-datetime-format and awslogs-multiline-pattern options. Multiline logging performs regular expression parsing and matching of all log messages. This might have a negative impact on logging performance.
     The following options apply to all supported log drivers.
      + mode Required: No Valid values: non-blocking | blocking This option defines the delivery mode of log messages from the container to the log driver specified using logDriver. The delivery mode you choose affects application availability when the flow of logs from container is interrupted. If you use the blocking mode and the flow of logs is interrupted, calls from container code to write to the stdout and stderr streams will block. The logging thread of the application will block as a result. This may cause the application to become unresponsive and lead to container healthcheck failure. If you use the non-blocking mode, the container's logs are instead stored in an in-memory intermediate buffer configured with the max-buffer-size option. This prevents the application from becoming unresponsive when logs cannot be sent. We recommend using this mode if you want to ensure service availability and are okay with some log loss. For more information, see Preventing log loss with non-blocking mode in the awslogs container log driver. You can set a default mode for all containers in a specific Region by using the defaultLogDriverMode account setting. If you don't specify the mode option or configure the account setting, Amazon ECS will default to the non-blocking mode. For more information about the account setting, see Default log driver mode in the Amazon Elastic Container Service Developer Guide. On June 25, 2025, Amazon ECS changed the default log driver mode from blocking to non-blocking to prioritize task availability over logging. To continue using the blocking mode after this change, do one of the following: Set the mode option in your container definition's logConfiguration as blocking. Set the defaultLogDriverMode account setting to blocking. + max-buffer-size Required: No Default value: 1m When non-blocking mode is used, the max-buffer-size log option controls the size of the buffer that's used for intermediate message storage. Make sure to specify an adequate buffer size based on your application. When the buffer fills up, further logs cannot be stored. Logs that cannot be stored are lost.
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
 * Type definition for `AWS::ECS::Service.NetworkConfiguration`.
 * The network configuration for a task or service.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-service-networkconfiguration.html}
 */
export type NetworkConfiguration = {
  /**
     * The VPC subnets and security groups that are associated with a task.
      All specified subnets and security groups must be from the same VPC.
     */
  AwsvpcConfiguration?: AwsVpcConfiguration;
};
/**
 * Type definition for `AWS::ECS::Service.PlacementConstraint`.
 * An object representing a constraint on task placement. For more information, see [Task placement constraints](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-placement-constraints.html) in the *Amazon Elastic Container Service Developer Guide*.
  If you're using the Fargate launch type, task placement constraints aren't supported.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-service-placementconstraint.html}
 */
export type PlacementConstraint = {
  /**
   * A cluster query language expression to apply to the constraint. The expression can have a maximum length of 2000 characters. You can't specify an expression if the constraint type is ``distinctInstance``. For more information, see [Cluster query language](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/cluster-query-language.html) in the *Amazon Elastic Container Service Developer Guide*.
   */
  Expression?: string;
  /**
   * The type of constraint. Use ``distinctInstance`` to ensure that each task in a particular group is running on a different container instance. Use ``memberOf`` to restrict the selection to a group of valid candidates.
   */
  Type: "distinctInstance" | "memberOf";
};
/**
 * Type definition for `AWS::ECS::Service.PlacementStrategy`.
 * The task placement strategy for a task or service. For more information, see [Task placement strategies](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-placement-strategies.html) in the *Amazon Elastic Container Service Developer Guide*.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-service-placementstrategy.html}
 */
export type PlacementStrategy = {
  /**
   * The field to apply the placement strategy against. For the ``spread`` placement strategy, valid values are ``instanceId`` (or ``host``, which has the same effect), or any platform or custom attribute that's applied to a container instance, such as ``attribute:ecs.availability-zone``. For the ``binpack`` placement strategy, valid values are ``cpu`` and ``memory``. For the ``random`` placement strategy, this field is not used.
   */
  Field?: string;
  /**
   * The type of placement strategy. The ``random`` placement strategy randomly places tasks on available candidates. The ``spread`` placement strategy spreads placement across available candidates evenly based on the ``field`` parameter. The ``binpack`` strategy places tasks on available candidates that have the least available amount of the resource that's specified with the ``field`` parameter. For example, if you binpack on memory, a task is placed on the instance with the least amount of remaining memory but still enough to run the task.
   */
  Type: "binpack" | "random" | "spread";
};
/**
 * Type definition for `AWS::ECS::Service.Secret`.
 * An object representing the secret to expose to your container. Secrets can be exposed to a container in the following ways:
  +  To inject sensitive data into your containers as environment variables, use the ``secrets`` container definition parameter.
  +  To reference sensitive information in the log configuration of a container, use the ``secretOptions`` container definition parameter.
  
 For more information, see [Specifying sensitive data](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/specifying-sensitive-data.html) in the *Amazon Elastic Container Service Developer Guide*.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-service-secret.html}
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
 * Type definition for `AWS::ECS::Service.ServiceConnectClientAlias`.
 * Each alias ("endpoint") is a fully-qualified name and port number that other tasks ("clients") can use to connect to this service.
 Each name and port mapping must be unique within the namespace.
 Tasks that run in a namespace can use short names to connect to services in the namespace. Tasks can connect to services across all of the clusters in the namespace. Tasks connect through a managed proxy container that collects logs and metrics for increased visibility. Only the tasks that Amazon ECS services create are supported with Service Connect. For more information, see [Service Connect](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-connect.html) in the *Amazon Elastic Container Service Developer Guide*.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-service-serviceconnectclientalias.html}
 */
export type ServiceConnectClientAlias = {
  /**
     * The ``dnsName`` is the name that you use in the applications of client tasks to connect to this service. The name must be a valid DNS name but doesn't need to be fully-qualified. The name can include up to 127 characters. The name can include lowercase letters, numbers, underscores (_), hyphens (-), and periods (.). The name can't start with a hyphen.
     If this parameter isn't specified, the default value of ``discoveryName.namespace`` is used. If the ``discoveryName`` isn't specified, the port mapping name from the task definition is used in ``portName.namespace``.
     To avoid changing your applications in client Amazon ECS services, set this to the same name that the client application uses by default. For example, a few common names are ``database``, ``db``, or the lowercase name of a database, such as ``mysql`` or ``redis``. For more information, see [Service Connect](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-connect.html) in the *Amazon Elastic Container Service Developer Guide*.
     */
  DnsName?: string;
  /**
     * The listening port number for the Service Connect proxy. This port is available inside of all of the tasks within the same namespace.
     To avoid changing your applications in client Amazon ECS services, set this to the same port that the client application uses by default. For more information, see [Service Connect](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-connect.html) in the *Amazon Elastic Container Service Developer Guide*.
     */
  Port: number;
  TestTrafficRules?: ServiceConnectTestTrafficRules;
};
/**
 * Type definition for `AWS::ECS::Service.ServiceConnectConfiguration`.
 * The Service Connect configuration of your Amazon ECS service. The configuration for this service to discover and connect to services, and be discovered by, and connected from, other services within a namespace.
 Tasks that run in a namespace can use short names to connect to services in the namespace. Tasks can connect to services across all of the clusters in the namespace. Tasks connect through a managed proxy container that collects logs and metrics for increased visibility. Only the tasks that Amazon ECS services create are supported with Service Connect. For more information, see [Service Connect](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-connect.html) in the *Amazon Elastic Container Service Developer Guide*.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-service-serviceconnectconfiguration.html}
 */
export type ServiceConnectConfiguration = {
  /**
   * Specifies whether to use Service Connect with this service.
   */
  Enabled: boolean;
  /**
     * The log configuration for the container. This parameter maps to ``LogConfig`` in the docker container create command and the ``--log-driver`` option to docker run.
     By default, containers use the same logging driver that the Docker daemon uses. However, the container might use a different logging driver than the Docker daemon by specifying a log driver configuration in the container definition.
     Understand the following when specifying a log configuration for your containers.
      +  Amazon ECS currently supports a subset of the logging drivers available to the Docker daemon. Additional log drivers may be available in future releases of the Amazon ECS container agent.
     For tasks on FARGATElong, the supported log drivers are ``awslogs``, ``splunk``, and ``awsfirelens``.
     For tasks hosted on Amazon EC2 instances, the supported log drivers are ``awslogs``, ``fluentd``, ``gelf``, ``json-file``, ``journald``,``syslog``, ``splunk``, and ``awsfirelens``.
      +  This parameter requires version 1.18 of the Docker Remote API or greater on your container instance.
      +  For tasks that are hosted on Amazon EC2 instances, the Amazon ECS container agent must register the available logging drivers with the ``ECS_AVAILABLE_LOGGING_DRIVERS`` environment variable before containers placed on that instance can use these log configuration options. For more information, see [Amazon ECS container agent configuration](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-agent-config.html) in the *Amazon Elastic Container Service Developer Guide*.
      +  For tasks that are on FARGATElong, because you don't have access to the underlying infrastructure your tasks are hosted on, any additional software needed must be installed outside of the task. For example, the Fluentd output aggregators or a remote host running Logstash to send Gelf logs to.
     */
  LogConfiguration?: LogConfiguration;
  /**
   * The namespace name or full Amazon Resource Name (ARN) of the CMAPlong namespace for use with Service Connect. The namespace must be in the same AWS Region as the Amazon ECS service and cluster. The type of namespace doesn't affect Service Connect. For more information about CMAPlong, see [Working with Services](https://docs.aws.amazon.com/cloud-map/latest/dg/working-with-services.html) in the *Developer Guide*.
   */
  Namespace?: string;
  /**
     * The list of Service Connect service objects. These are names and aliases (also known as endpoints) that are used by other Amazon ECS services to connect to this service.
     This field is not required for a "client" Amazon ECS service that's a member of a namespace only to connect to other services within the namespace. An example of this would be a frontend application that accepts incoming requests from either a load balancer that's attached to the service or by other means.
     An object selects a port from the task definition, assigns a name for the CMAPlong service, and a list of aliases (endpoints) and ports for client applications to refer to this service.
     */
  Services?: ServiceConnectService[];
};
/**
 * Type definition for `AWS::ECS::Service.ServiceConnectService`.
 * The Service Connect service object configuration. For more information, see [Service Connect](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-connect.html) in the *Amazon Elastic Container Service Developer Guide*.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-service-serviceconnectservice.html}
 */
export type ServiceConnectService = {
  /**
     * The list of client aliases for this Service Connect service. You use these to assign names that can be used by client applications. The maximum number of client aliases that you can have in this list is 1.
     Each alias ("endpoint") is a fully-qualified name and port number that other Amazon ECS tasks ("clients") can use to connect to this service.
     Each name and port mapping must be unique within the namespace.
     For each ``ServiceConnectService``, you must provide at least one ``clientAlias`` with one ``port``.
     */
  ClientAliases?: ServiceConnectClientAlias[];
  /**
     * The ``discoveryName`` is the name of the new CMAP service that Amazon ECS creates for this Amazon ECS service. This must be unique within the CMAP namespace. The name can contain up to 64 characters. The name can include lowercase letters, numbers, underscores (_), and hyphens (-). The name can't start with a hyphen.
     If the ``discoveryName`` isn't specified, the port mapping name from the task definition is used in ``portName.namespace``.
     */
  DiscoveryName?: string;
  /**
     * The port number for the Service Connect proxy to listen on.
     Use the value of this field to bypass the proxy for traffic on the port number specified in the named ``portMapping`` in the task definition of this application, and then use it in your VPC security groups to allow traffic into the proxy for this Amazon ECS service.
     In ``awsvpc`` mode and Fargate, the default value is the container port number. The container port number is in the ``portMapping`` in the task definition. In bridge mode, the default value is the ephemeral port of the Service Connect proxy.
     */
  IngressPortOverride?: number;
  /**
   * The ``portName`` must match the name of one of the ``portMappings`` from all the containers in the task definition of this Amazon ECS service.
   */
  PortName: string;
  /**
   * A reference to an object that represents the configured timeouts for Service Connect.
   */
  Timeout?: TimeoutConfiguration;
  /**
   * A reference to an object that represents a Transport Layer Security (TLS) configuration.
   */
  Tls?: ServiceConnectTlsConfiguration;
};
/**
 * Type definition for `AWS::ECS::Service.ServiceConnectTestTrafficRules`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-service-serviceconnecttesttrafficrules.html}
 */
export type ServiceConnectTestTrafficRules = {
  Header: ServiceConnectTestTrafficRulesHeader;
};
/**
 * Type definition for `AWS::ECS::Service.ServiceConnectTestTrafficRulesHeader`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-service-serviceconnecttesttrafficrulesheader.html}
 */
export type ServiceConnectTestTrafficRulesHeader = {
  Name: string;
  Value?: ServiceConnectTestTrafficRulesHeaderValue;
};
/**
 * Type definition for `AWS::ECS::Service.ServiceConnectTestTrafficRulesHeaderValue`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-service-serviceconnecttesttrafficrulesheadervalue.html}
 */
export type ServiceConnectTestTrafficRulesHeaderValue = {
  Exact: string;
};
/**
 * Type definition for `AWS::ECS::Service.ServiceConnectTlsCertificateAuthority`.
 * The certificate root authority that secures your service.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-service-serviceconnecttlscertificateauthority.html}
 */
export type ServiceConnectTlsCertificateAuthority = {
  /**
   * The ARN of the AWS Private Certificate Authority certificate.
   */
  AwsPcaAuthorityArn?: string;
};
/**
 * Type definition for `AWS::ECS::Service.ServiceConnectTlsConfiguration`.
 * The key that encrypts and decrypts your resources for Service Connect TLS.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-service-serviceconnecttlsconfiguration.html}
 */
export type ServiceConnectTlsConfiguration = {
  /**
   * The signer certificate authority.
   */
  IssuerCertificateAuthority: ServiceConnectTlsCertificateAuthority;
  /**
   * The AWS Key Management Service key.
   */
  KmsKey?: string;
  /**
   * The Amazon Resource Name (ARN) of the IAM role that's associated with the Service Connect TLS.
   */
  RoleArn?: string;
};
/**
 * Type definition for `AWS::ECS::Service.ServiceManagedEBSVolumeConfiguration`.
 * The configuration for the Amazon EBS volume that Amazon ECS creates and manages on your behalf. These settings are used to create each Amazon EBS volume, with one volume created for each task in the service. For information about the supported launch types and operating systems, see [Supported operating systems and launch types](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ebs-volumes.html#ebs-volumes-configuration) in the*Amazon Elastic Container Service Developer Guide*.
 Many of these parameters map 1:1 with the Amazon EBS ``CreateVolume`` API request parameters.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-service-servicemanagedebsvolumeconfiguration.html}
 */
export type ServiceManagedEBSVolumeConfiguration = {
  /**
   * Indicates whether the volume should be encrypted. If you turn on Region-level Amazon EBS encryption by default but set this value as ``false``, the setting is overridden and the volume is encrypted with the KMS key specified for Amazon EBS encryption by default. This parameter maps 1:1 with the ``Encrypted`` parameter of the [CreateVolume API](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateVolume.html) in the *Amazon EC2 API Reference*.
   */
  Encrypted?: boolean;
  /**
     * The filesystem type for the volume. For volumes created from a snapshot, you must specify the same filesystem type that the volume was using when the snapshot was created. If there is a filesystem type mismatch, the tasks will fail to start.
     The available Linux filesystem types are
     ``ext3``, ``ext4``, and ``xfs``. If no value is specified, the ``xfs`` filesystem type is used by default.
     The available Windows filesystem types are ``NTFS``.
     */
  FilesystemType?: string;
  /**
     * The number of I/O operations per second (IOPS). For ``gp3``, ``io1``, and ``io2`` volumes, this represents the number of IOPS that are provisioned for the volume. For ``gp2`` volumes, this represents the baseline performance of the volume and the rate at which the volume accumulates I/O credits for bursting.
     The following are the supported values for each volume type.
      +  ``gp3``: 3,000 - 16,000 IOPS
      +  ``io1``: 100 - 64,000 IOPS
      +  ``io2``: 100 - 256,000 IOPS
      
     This parameter is required for ``io1`` and ``io2`` volume types. The default for ``gp3`` volumes is ``3,000 IOPS``. This parameter is not supported for ``st1``, ``sc1``, or ``standard`` volume types.
     This parameter maps 1:1 with the ``Iops`` parameter of the [CreateVolume API](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateVolume.html) in the *Amazon EC2 API Reference*.
     */
  Iops?: number;
  /**
     * The Amazon Resource Name (ARN) identifier of the AWS Key Management Service key to use for Amazon EBS encryption. When a key is specified using this parameter, it overrides Amazon EBS default encryption or any KMS key that you specified for cluster-level managed storage encryption. This parameter maps 1:1 with the ``KmsKeyId`` parameter of the [CreateVolume API](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateVolume.html) in the *Amazon EC2 API Reference*. For more information about encrypting Amazon EBS volumes attached to tasks, see [Encrypt data stored in Amazon EBS volumes attached to Amazon ECS tasks](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ebs-kms-encryption.html).
      AWS authenticates the AWS Key Management Service key asynchronously. Therefore, if you specify an ID, alias, or ARN that is invalid, the action can appear to complete, but eventually fails.
     */
  KmsKeyId?: string;
  /**
   * The ARN of the IAM role to associate with this volume. This is the Amazon ECS infrastructure IAM role that is used to manage your AWS infrastructure. We recommend using the Amazon ECS-managed ``AmazonECSInfrastructureRolePolicyForVolumes`` IAM policy with this role. For more information, see [Amazon ECS infrastructure IAM role](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/infrastructure_IAM_role.html) in the *Amazon ECS Developer Guide*.
   */
  RoleArn: string;
  /**
     * The size of the volume in GiB. You must specify either a volume size or a snapshot ID. If you specify a snapshot ID, the snapshot size is used for the volume size by default. You can optionally specify a volume size greater than or equal to the snapshot size. This parameter maps 1:1 with the ``Size`` parameter of the [CreateVolume API](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateVolume.html) in the *Amazon EC2 API Reference*.
     The following are the supported volume size values for each volume type.
      +  ``gp2`` and ``gp3``: 1-16,384
      +  ``io1`` and ``io2``: 4-16,384
      +  ``st1`` and ``sc1``: 125-16,384
      +  ``standard``: 1-1,024
     */
  SizeInGiB?: number;
  /**
   * The snapshot that Amazon ECS uses to create volumes for attachment to tasks maintained by the service. You must specify either ``snapshotId`` or ``sizeInGiB`` in your volume configuration. This parameter maps 1:1 with the ``SnapshotId`` parameter of the [CreateVolume API](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateVolume.html) in the *Amazon EC2 API Reference*.
   */
  SnapshotId?: string;
  /**
   * The tags to apply to the volume. Amazon ECS applies service-managed tags by default. This parameter maps 1:1 with the ``TagSpecifications.N`` parameter of the [CreateVolume API](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateVolume.html) in the *Amazon EC2 API Reference*.
   */
  TagSpecifications?: EBSTagSpecification[];
  /**
     * The throughput to provision for a volume, in MiB/s, with a maximum of 1,000 MiB/s. This parameter maps 1:1 with the ``Throughput`` parameter of the [CreateVolume API](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateVolume.html) in the *Amazon EC2 API Reference*.
      This parameter is only supported for the ``gp3`` volume type.
     */
  Throughput?: number;
  /**
   * The rate, in MiB/s, at which data is fetched from a snapshot of an existing EBS volume to create new volumes for attachment to the tasks maintained by the service. This property can be specified only if you specify a ``snapshotId``. For more information, see [Initialize Amazon EBS volumes](https://docs.aws.amazon.com/ebs/latest/userguide/initalize-volume.html) in the *Amazon EBS User Guide*.
   */
  VolumeInitializationRate?: number;
  /**
     * The volume type. This parameter maps 1:1 with the ``VolumeType`` parameter of the [CreateVolume API](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateVolume.html) in the *Amazon EC2 API Reference*. For more information, see [Amazon EBS volume types](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-volume-types.html) in the *Amazon EC2 User Guide*.
     The following are the supported volume types.
      +  General Purpose SSD: ``gp2``|``gp3``
      +  Provisioned IOPS SSD: ``io1``|``io2``
      +  Throughput Optimized HDD: ``st1``
      +  Cold HDD: ``sc1``
      +  Magnetic: ``standard``
      The magnetic volume type is not supported on Fargate.
     */
  VolumeType?: string;
};
/**
 * Type definition for `AWS::ECS::Service.ServiceRegistry`.
 * The details for the service registry.
 Each service may be associated with one service registry. Multiple service registries for each service are not supported.
 When you add, update, or remove the service registries configuration, Amazon ECS starts a new deployment. New tasks are registered and deregistered to the updated service registry configuration.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-service-serviceregistry.html}
 */
export type ServiceRegistry = {
  /**
   * The container name value to be used for your service discovery service. It's already specified in the task definition. If the task definition that your service task specifies uses the ``bridge`` or ``host`` network mode, you must specify a ``containerName`` and ``containerPort`` combination from the task definition. If the task definition that your service task specifies uses the ``awsvpc`` network mode and a type SRV DNS record is used, you must specify either a ``containerName`` and ``containerPort`` combination or a ``port`` value. However, you can't specify both.
   */
  ContainerName?: string;
  /**
   * The port value to be used for your service discovery service. It's already specified in the task definition. If the task definition your service task specifies uses the ``bridge`` or ``host`` network mode, you must specify a ``containerName`` and ``containerPort`` combination from the task definition. If the task definition your service task specifies uses the ``awsvpc`` network mode and a type SRV DNS record is used, you must specify either a ``containerName`` and ``containerPort`` combination or a ``port`` value. However, you can't specify both.
   */
  ContainerPort?: number;
  /**
   * The port value used if your service discovery service specified an SRV record. This field might be used if both the ``awsvpc`` network mode and SRV records are used.
   */
  Port?: number;
  /**
   * The Amazon Resource Name (ARN) of the service registry. The currently supported service registry is CMAP. For more information, see [CreateService](https://docs.aws.amazon.com/cloud-map/latest/api/API_CreateService.html).
   */
  RegistryArn?: string;
};
/**
 * Type definition for `AWS::ECS::Service.ServiceVolumeConfiguration`.
 * The configuration for a volume specified in the task definition as a volume that is configured at launch time. Currently, the only supported volume type is an Amazon EBS volume.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-service-servicevolumeconfiguration.html}
 */
export type ServiceVolumeConfiguration = {
  /**
   * The configuration for the Amazon EBS volume that Amazon ECS creates and manages on your behalf. These settings are used to create each Amazon EBS volume, with one volume created for each task in the service. The Amazon EBS volumes are visible in your account in the Amazon EC2 console once they are created.
   */
  ManagedEBSVolume?: ServiceManagedEBSVolumeConfiguration;
  /**
   * The name of the volume. This value must match the volume name from the ``Volume`` object in the task definition.
   */
  Name: string;
};
/**
 * Type definition for `AWS::ECS::Service.Tag`.
 * The metadata that you apply to a resource to help you categorize and organize them. Each tag consists of a key and an optional value. You define them.
 The following basic restrictions apply to tags:
  +  Maximum number of tags per resource - 50
  +  For each resource, each tag key must be unique, and each tag key can have only one value.
  +  Maximum key length - 128 Unicode characters in UTF-8
  +  Maximum value length - 256 Unicode characters in UTF-8
  +  If your tagging schema is used across multiple services and resources, remember that other services may have restrictions on allowed characters. Generally allowed characters are: letters, numbers, and spaces representable in UTF-8, and the following characters: + - = . _ : / @.
  +  Tag keys and values are case-sensitive.
  +  Do not use ``aws:``, ``AWS:``, or any upper or lowercase combination of such as a prefix for either keys or values as it is reserved for AWS use. You cannot edit or delete tag keys or values with this prefix. Tags with this prefix do not count against your tags per resource limit.
  
 In order to tag a service that has the following ARN format, you need to migrate the service to the long ARN. You must use the API, CLI or console to migrate the service ARN. For more information, see [Migrate an short service ARN to a long ARN](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-arn-migration.html) in the *Developer Guide*.
  ``arn:aws:ecs:region:aws_account_id:service/service-name``
 After the migration is complete, the following are true:
  +   The service ARN is: ``arn:aws:ecs:region:aws_account_id:service/cluster-name/service-name``
  +  You can use CFN to tag the service as you would a service with a long ARN format.
  +  When the ``PhysicalResourceId`` in the CFN stack represents a service, the value does not change and will be the short service ARN.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-service-tag.html}
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
 * Type definition for `AWS::ECS::Service.TimeoutConfiguration`.
 * An object that represents the timeout configurations for Service Connect.
  If ``idleTimeout`` is set to a time that is less than ``perRequestTimeout``, the connection will close when the ``idleTimeout`` is reached and not the ``perRequestTimeout``.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-service-timeoutconfiguration.html}
 */
export type TimeoutConfiguration = {
  /**
     * The amount of time in seconds a connection will stay active while idle. A value of ``0`` can be set to disable ``idleTimeout``.
     The ``idleTimeout`` default for ``HTTP``/``HTTP2``/``GRPC`` is 5 minutes.
     The ``idleTimeout`` default for ``TCP`` is 1 hour.
     */
  IdleTimeoutSeconds?: number;
  /**
   * The amount of time waiting for the upstream to respond with a complete response per request. A value of ``0`` can be set to disable ``perRequestTimeout``. ``perRequestTimeout`` can only be set if Service Connect ``appProtocol`` isn't ``TCP``. Only ``idleTimeout`` is allowed for ``TCP````appProtocol``.
   */
  PerRequestTimeoutSeconds?: number;
};
/**
 * Type definition for `AWS::ECS::Service.VpcLatticeConfiguration`.
 * The VPC Lattice configuration for your service that holds the information for the target group(s) Amazon ECS tasks will be registered to.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-service-vpclatticeconfiguration.html}
 */
export type VpcLatticeConfiguration = {
  /**
   * The name of the port mapping to register in the VPC Lattice target group. This is the name of the ``portMapping`` you defined in your task definition.
   */
  PortName: string;
  /**
     * The ARN of the IAM role to associate with this VPC Lattice configuration. This is the Amazon ECS
     infrastructure IAM role that is used to manage your VPC Lattice infrastructure.
     */
  RoleArn: string;
  /**
   * The full Amazon Resource Name (ARN) of the target group or groups associated with the VPC Lattice configuration that the Amazon ECS tasks will be registered to.
   */
  TargetGroupArn: string;
};
/**
 * The ``AWS::ECS::Service`` resource creates an Amazon Elastic Container Service (Amazon ECS) service that runs and maintains the requested number of tasks and associated load balancers.
  The stack update fails if you change any properties that require replacement and at least one ECS Service Connect ``ServiceConnectConfiguration`` property is configured. This is because AWS CloudFormation creates the replacement service first, but each ``ServiceConnectService`` must have a name that is unique in the namespace.
   Starting April 15, 2023, AWS; will not onboard new customers to Amazon Elastic Inference (EI), and will help current customers migrate their workloads to options that offer better price and performance. After April 15, 2023, new customers will not be able to launch instances with Amazon EI accelerators in Amazon SageMaker, ECS, or EC2. However, customers who have used Amazon EI at least once during the past 30-day period are considered current customers and will be able to continue using the service.
   On June 12, 2025, Amazon ECS launched support for updating capacity provider configuration for ECS services. With this launch, ECS also aligned the CFN update behavior for ``CapacityProviderStrategy`` parameter with the standard practice. For more information, see [adds support for updating capacity provider configuration for ECS services](https://docs.aws.amazon.com/about-aws/whats-new/2025/05/amazon-ecs-capacity-provider-configuration-ecs/). Previously ECS ignored the ``CapacityProviderStrategy`` property if it was set to an empty list for example, ``[]`` in CFN, because updating capacity provider configuration was not supported. Now, with support for capacity provider updates, customers can remove capacity providers from a service by passing an empty list. When you specify an empty list (``[]``) for the ``CapacityProviderStrategy`` property in your CFN template, ECS will remove any capacity providers associated with the service, as follows:
  +  For services created with a capacity provider strategy after the launch:
  +  If there's a cluster default strategy set, the service will revert to using that default strategy.
  +  If no cluster default strategy exists, you will receive the following error:
 No launch type to fall back to for empty capacity provider strategy. Your service was not created with a launch type.
  
  +  For services created with a capacity provider strategy prior to the launch:
  +  If ``CapacityProviderStrategy`` had ``FARGATE_SPOT`` or ``FARGATE`` capacity providers, the launch type will be updated to ``FARGATE`` and the capacity provider will be removed.
  +  If the strategy included Auto Scaling group capacity providers, the service will revert to EC2 launch type, and the Auto Scaling group capacity providers will not be used.
  
  
 Recommended Actions
 If you are currently using ``CapacityProviderStrategy: []`` in your CFN templates, you should take one of the following actions:
  +  If you do not intend to update the Capacity Provider Strategy:
  +  Remove the ``CapacityProviderStrategy`` property entirely from your CFN template
  +  Alternatively, use ``!Ref ::NoValue`` for the ``CapacityProviderStrategy`` property in your template
  
  +  If you intend to maintain or update the Capacity Provider Strategy, specify the actual Capacity Provider Strategy for the service in your CFN template.
  
 If your CFN template had an empty list ([]) for ``CapacityProviderStrategy`` prior to the aforementioned launch on June 12, and you are using the same template with ``CapacityProviderStrategy: []``, you might encounter the following error:
  Invalid request provided: When switching from launch type to capacity provider strategy on an existing service, or making a change to a capacity provider strategy on a service that is already using one, you must force a new deployment. (Service: Ecs, Status Code: 400, Request ID: xxx) (SDK Attempt Count: 1)" (RequestToken: xxx HandlerErrorCode: InvalidRequest)
 Note that CFN automatically initiates a new deployment when it detects a parameter change, but customers cannot choose to force a deployment through CFN. This is an invalid input scenario that requires one of the remediation actions listed above.
 If you are experiencing active production issues related to this change, contact AWS Support or your Technical Account Manager.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecs-service.html}
 */
export class ECSService extends $Resource<
  "AWS::ECS::Service",
  ECSServiceProperties,
  ECSServiceAttributes
> {
  public static readonly Type = "AWS::ECS::Service";
  constructor(
    logicalId: string,
    properties: ECSServiceProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, ECSService.Type, properties, options);
  }
}
