import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Definition of AWS::Scheduler::Schedule Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-scheduler-schedule.html}
 */
export type SchedulerScheduleProperties = {
  /**
   * The description of the schedule.
   * @minLength `0`
   * @maxLength `512`
   */
  Description?: string;
  /**
   * The date, in UTC, before which the schedule can invoke its target. Depending on the schedule's recurrence expression, invocations might stop on, or before, the EndDate you specify.
   */
  EndDate?: string;
  /**
   * Flexible time window allows configuration of a window within which a schedule can be invoked
   */
  FlexibleTimeWindow: FlexibleTimeWindow;
  /**
   * The name of the schedule group to associate with this schedule. If you omit this, the default schedule group is used.
   * @minLength `1`
   * @maxLength `64`
   * @pattern `^[0-9a-zA-Z-_.]+$`
   */
  GroupName?: string;
  /**
   * The ARN for a KMS Key that will be used to encrypt customer data.
   * @minLength `1`
   * @maxLength `2048`
   * @pattern `^arn:aws[a-z-]*:kms:[a-z0-9\-]+:\d{12}:(key|alias)\/[0-9a-zA-Z-_]*$`
   */
  KmsKeyArn?: string;
  /**
   * @minLength `1`
   * @maxLength `64`
   * @pattern `^[0-9a-zA-Z-_.]+$`
   */
  Name?: string;
  /**
   * The scheduling expression.
   * @minLength `1`
   * @maxLength `256`
   */
  ScheduleExpression: string;
  /**
   * The timezone in which the scheduling expression is evaluated.
   * @minLength `1`
   * @maxLength `50`
   */
  ScheduleExpressionTimezone?: string;
  /**
   * The date, in UTC, after which the schedule can begin invoking its target. Depending on the schedule's recurrence expression, invocations might occur on, or after, the StartDate you specify.
   */
  StartDate?: string;
  /**
   * Specifies whether the schedule is enabled or disabled.
   */
  State?: ScheduleState;
  /**
   * The schedule target.
   */
  Target: Target;
};
/**
 * Attribute type definition for `AWS::Scheduler::Schedule`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-scheduler-schedule.html#aws-resource-scheduler-schedule-return-values}
 */
export type SchedulerScheduleAttributes = {
  /**
   * The Amazon Resource Name (ARN) of the schedule.
   * @minLength `1`
   * @maxLength `1224`
   * @pattern `^arn:aws[a-z-]*:scheduler:[a-z0-9\-]+:\d{12}:schedule\/[0-9a-zA-Z-_.]+\/[0-9a-zA-Z-_.]+$`
   */
  Arn: string;
};
/**
 * Type definition for `AWS::Scheduler::Schedule.AssignPublicIp`.
 * Specifies whether the task's elastic network interface receives a public IP address. You can specify ENABLED only when LaunchType in EcsParameters is set to FARGATE.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-scheduler-schedule-assignpublicip.html}
 */
export type AssignPublicIp = "ENABLED" | "DISABLED";
/**
 * Type definition for `AWS::Scheduler::Schedule.AwsVpcConfiguration`.
 * This structure specifies the VPC subnets and security groups for the task, and whether a public IP address is to be used. This structure is relevant only for ECS tasks that use the awsvpc network mode.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-scheduler-schedule-awsvpcconfiguration.html}
 */
export type AwsVpcConfiguration = {
  /**
   * Specifies whether the task's elastic network interface receives a public IP address. You can specify ENABLED only when LaunchType in EcsParameters is set to FARGATE.
   */
  AssignPublicIp?: AssignPublicIp;
  /**
   * Specifies the security groups associated with the task. These security groups must all be in the same VPC. You can specify as many as five security groups. If you do not specify a security group, the default security group for the VPC is used.
   * @minLength `1`
   * @maxLength `5`
   */
  SecurityGroups?: string[];
  /**
   * Specifies the subnets associated with the task. These subnets must all be in the same VPC. You can specify as many as 16 subnets.
   * @minLength `1`
   * @maxLength `16`
   */
  Subnets: string[];
};
/**
 * Type definition for `AWS::Scheduler::Schedule.CapacityProviderStrategyItem`.
 * The details of a capacity provider strategy.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-scheduler-schedule-capacityproviderstrategyitem.html}
 */
export type CapacityProviderStrategyItem = {
  /**
   * The base value designates how many tasks, at a minimum, to run on the specified capacity provider. Only one capacity provider in a capacity provider strategy can have a base defined. If no value is specified, the default value of 0 is used.
   * @min `0`
   * @max `100000`
   */
  Base?: number;
  /**
   * The short name of the capacity provider.
   * @minLength `1`
   * @maxLength `255`
   */
  CapacityProvider: string;
  /**
   * The weight value designates the relative percentage of the total number of tasks launched that should use the specified capacity provider. The weight value is taken into consideration after the base value, if defined, is satisfied.
   * @min `0`
   * @max `1000`
   */
  Weight?: number;
};
/**
 * Type definition for `AWS::Scheduler::Schedule.DeadLetterConfig`.
 * A DeadLetterConfig object that contains information about a dead-letter queue configuration.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-scheduler-schedule-deadletterconfig.html}
 */
export type DeadLetterConfig = {
  /**
   * The ARN of the SQS queue specified as the target for the dead-letter queue.
   * @minLength `1`
   * @maxLength `1600`
   * @pattern `^arn:aws[a-z-]*:sqs:[a-z0-9\-]+:\d{12}:[a-zA-Z0-9\-_]+$`
   */
  Arn?: string;
};
/**
 * Type definition for `AWS::Scheduler::Schedule.EcsParameters`.
 * The custom parameters to be used when the target is an Amazon ECS task.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-scheduler-schedule-ecsparameters.html}
 */
export type EcsParameters = {
  /**
   * The capacity provider strategy to use for the task.
   * @maxLength `6`
   */
  CapacityProviderStrategy?: CapacityProviderStrategyItem[];
  /**
   * Specifies whether to enable Amazon ECS managed tags for the task. For more information, see Tagging Your Amazon ECS Resources in the Amazon Elastic Container Service Developer Guide.
   */
  EnableECSManagedTags?: boolean;
  /**
   * Whether or not to enable the execute command functionality for the containers in this task. If true, this enables execute command functionality on all containers in the task.
   */
  EnableExecuteCommand?: boolean;
  /**
   * Specifies an ECS task group for the task. The maximum length is 255 characters.
   * @minLength `1`
   * @maxLength `255`
   */
  Group?: string;
  /**
   * Specifies the launch type on which your task is running. The launch type that you specify here must match one of the launch type (compatibilities) of the target task. The FARGATE value is supported only in the Regions where AWS Fargate with Amazon ECS is supported. For more information, see AWS Fargate on Amazon ECS in the Amazon Elastic Container Service Developer Guide.
   */
  LaunchType?: LaunchType;
  /**
   * This structure specifies the network configuration for an ECS task.
   */
  NetworkConfiguration?: NetworkConfiguration;
  /**
   * An array of placement constraint objects to use for the task. You can specify up to 10 constraints per task (including constraints in the task definition and those specified at runtime).
   * @maxLength `10`
   */
  PlacementConstraints?: PlacementConstraint[];
  /**
   * The placement strategy objects to use for the task. You can specify a maximum of five strategy rules per task.
   * @maxLength `5`
   */
  PlacementStrategy?: PlacementStrategy[];
  /**
   * Specifies the platform version for the task. Specify only the numeric portion of the platform version, such as 1.1.0.
   * @minLength `1`
   * @maxLength `64`
   */
  PlatformVersion?: string;
  /**
   * Specifies whether to propagate the tags from the task definition to the task. If no value is specified, the tags are not propagated. Tags can only be propagated to the task during task creation. To add tags to a task after task creation, use the TagResource API action.
   */
  PropagateTags?: PropagateTags;
  /**
   * The reference ID to use for the task.
   * @maxLength `1024`
   */
  ReferenceId?: string;
  /**
   * The metadata that you apply to the task to help you categorize and organize them. Each tag consists of a key and an optional value, both of which you define. To learn more, see RunTask in the Amazon ECS API Reference.
   * @minLength `0`
   * @maxLength `50`
   */
  Tags?: TagMap[];
  /**
   * The number of tasks to create based on TaskDefinition. The default is 1.
   * @min `1`
   * @max `10`
   */
  TaskCount?: number;
  /**
   * The ARN of the task definition to use if the event target is an Amazon ECS task.
   * @minLength `1`
   * @maxLength `1600`
   */
  TaskDefinitionArn: string;
};
/**
 * Type definition for `AWS::Scheduler::Schedule.EventBridgeParameters`.
 * EventBridge PutEvent predefined target type.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-scheduler-schedule-eventbridgeparameters.html}
 */
export type EventBridgeParameters = {
  /**
   * Free-form string, with a maximum of 128 characters, used to decide what fields to expect in the event detail.
   * @minLength `1`
   * @maxLength `128`
   */
  DetailType: string;
  /**
   * The source of the event.
   * @minLength `1`
   * @maxLength `256`
   * @pattern `^(?=[/\.\-_A-Za-z0-9]+)((?!aws\.).*)|(\$(\.[\w_-]+(\[(\d+|\*)\])*)*)$`
   */
  Source: string;
};
/**
 * Type definition for `AWS::Scheduler::Schedule.FlexibleTimeWindow`.
 * Flexible time window allows configuration of a window within which a schedule can be invoked
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-scheduler-schedule-flexibletimewindow.html}
 */
export type FlexibleTimeWindow = {
  /**
   * The maximum time window during which a schedule can be invoked.
   * @min `1`
   * @max `1440`
   */
  MaximumWindowInMinutes?: number;
  /**
   * Determines whether the schedule is executed within a flexible time window.
   */
  Mode: FlexibleTimeWindowMode;
};
/**
 * Type definition for `AWS::Scheduler::Schedule.FlexibleTimeWindowMode`.
 * Determines whether the schedule is executed within a flexible time window.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-scheduler-schedule-flexibletimewindowmode.html}
 */
export type FlexibleTimeWindowMode = "OFF" | "FLEXIBLE";
/**
 * Type definition for `AWS::Scheduler::Schedule.KinesisParameters`.
 * The custom parameter you can use to control the shard to which EventBridge Scheduler sends the event.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-scheduler-schedule-kinesisparameters.html}
 */
export type KinesisParameters = {
  /**
   * The custom parameter used as the Kinesis partition key. For more information, see Amazon Kinesis Streams Key Concepts in the Amazon Kinesis Streams Developer Guide.
   * @minLength `1`
   * @maxLength `256`
   */
  PartitionKey: string;
};
/**
 * Type definition for `AWS::Scheduler::Schedule.LaunchType`.
 * Specifies the launch type on which your task is running. The launch type that you specify here must match one of the launch type (compatibilities) of the target task. The FARGATE value is supported only in the Regions where AWS Fargate with Amazon ECS is supported. For more information, see AWS Fargate on Amazon ECS in the Amazon Elastic Container Service Developer Guide.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-scheduler-schedule-launchtype.html}
 */
export type LaunchType = "EC2" | "FARGATE" | "EXTERNAL";
/**
 * Type definition for `AWS::Scheduler::Schedule.NetworkConfiguration`.
 * This structure specifies the network configuration for an ECS task.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-scheduler-schedule-networkconfiguration.html}
 */
export type NetworkConfiguration = {
  /**
   * This structure specifies the VPC subnets and security groups for the task, and whether a public IP address is to be used. This structure is relevant only for ECS tasks that use the awsvpc network mode.
   */
  AwsvpcConfiguration?: AwsVpcConfiguration;
};
/**
 * Type definition for `AWS::Scheduler::Schedule.PlacementConstraint`.
 * An object representing a constraint on task placement.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-scheduler-schedule-placementconstraint.html}
 */
export type PlacementConstraint = {
  /**
   * A cluster query language expression to apply to the constraint. You cannot specify an expression if the constraint type is distinctInstance. To learn more, see Cluster Query Language in the Amazon Elastic Container Service Developer Guide.
   * @maxLength `2000`
   */
  Expression?: string;
  /**
   * The type of constraint. Use distinctInstance to ensure that each task in a particular group is running on a different container instance. Use memberOf to restrict the selection to a group of valid candidates.
   */
  Type?: PlacementConstraintType;
};
/**
 * Type definition for `AWS::Scheduler::Schedule.PlacementConstraintType`.
 * The type of constraint. Use distinctInstance to ensure that each task in a particular group is running on a different container instance. Use memberOf to restrict the selection to a group of valid candidates.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-scheduler-schedule-placementconstrainttype.html}
 */
export type PlacementConstraintType = "distinctInstance" | "memberOf";
/**
 * Type definition for `AWS::Scheduler::Schedule.PlacementStrategy`.
 * The task placement strategy for a task or service.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-scheduler-schedule-placementstrategy.html}
 */
export type PlacementStrategy = {
  /**
   * The field to apply the placement strategy against. For the spread placement strategy, valid values are instanceId (or host, which has the same effect), or any platform or custom attribute that is applied to a container instance, such as attribute:ecs.availability-zone. For the binpack placement strategy, valid values are cpu and memory. For the random placement strategy, this field is not used.
   * @maxLength `255`
   */
  Field?: string;
  /**
   * The type of placement strategy. The random placement strategy randomly places tasks on available candidates. The spread placement strategy spreads placement across available candidates evenly based on the field parameter. The binpack strategy places tasks on available candidates that have the least available amount of the resource that is specified with the field parameter. For example, if you binpack on memory, a task is placed on the instance with the least amount of remaining memory (but still enough to run the task).
   */
  Type?: PlacementStrategyType;
};
/**
 * Type definition for `AWS::Scheduler::Schedule.PlacementStrategyType`.
 * The type of placement strategy. The random placement strategy randomly places tasks on available candidates. The spread placement strategy spreads placement across available candidates evenly based on the field parameter. The binpack strategy places tasks on available candidates that have the least available amount of the resource that is specified with the field parameter. For example, if you binpack on memory, a task is placed on the instance with the least amount of remaining memory (but still enough to run the task).
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-scheduler-schedule-placementstrategytype.html}
 */
export type PlacementStrategyType = "random" | "spread" | "binpack";
/**
 * Type definition for `AWS::Scheduler::Schedule.PropagateTags`.
 * Specifies whether to propagate the tags from the task definition to the task. If no value is specified, the tags are not propagated. Tags can only be propagated to the task during task creation. To add tags to a task after task creation, use the TagResource API action.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-scheduler-schedule-propagatetags.html}
 */
export type PropagateTags = "TASK_DEFINITION";
/**
 * Type definition for `AWS::Scheduler::Schedule.RetryPolicy`.
 * A RetryPolicy object that includes information about the retry policy settings.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-scheduler-schedule-retrypolicy.html}
 */
export type RetryPolicy = {
  /**
   * The maximum amount of time, in seconds, to continue to make retry attempts.
   * @min `60`
   * @max `86400`
   */
  MaximumEventAgeInSeconds?: number;
  /**
   * The maximum number of retry attempts to make before the request fails. Retry attempts with exponential backoff continue until either the maximum number of attempts is made or until the duration of the MaximumEventAgeInSeconds is reached.
   * @min `0`
   * @max `185`
   */
  MaximumRetryAttempts?: number;
};
/**
 * Type definition for `AWS::Scheduler::Schedule.SageMakerPipelineParameter`.
 * Name/Value pair of a parameter to start execution of a SageMaker Model Building Pipeline.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-scheduler-schedule-sagemakerpipelineparameter.html}
 */
export type SageMakerPipelineParameter = {
  /**
   * Name of parameter to start execution of a SageMaker Model Building Pipeline.
   * @minLength `1`
   * @maxLength `256`
   * @pattern `^[A-Za-z0-9\-_]*$`
   */
  Name: string;
  /**
   * Value of parameter to start execution of a SageMaker Model Building Pipeline.
   * @minLength `1`
   * @maxLength `1024`
   */
  Value: string;
};
/**
 * Type definition for `AWS::Scheduler::Schedule.SageMakerPipelineParameters`.
 * These are custom parameters to use when the target is a SageMaker Model Building Pipeline that starts based on AWS EventBridge Scheduler schedules.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-scheduler-schedule-sagemakerpipelineparameters.html}
 */
export type SageMakerPipelineParameters = {
  /**
   * List of Parameter names and values for SageMaker Model Building Pipeline execution.
   * @minLength `0`
   * @maxLength `200`
   */
  PipelineParameterList?: SageMakerPipelineParameter[];
};
/**
 * Type definition for `AWS::Scheduler::Schedule.ScheduleState`.
 * Specifies whether the schedule is enabled or disabled.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-scheduler-schedule-schedulestate.html}
 */
export type ScheduleState = "ENABLED" | "DISABLED";
/**
 * Type definition for `AWS::Scheduler::Schedule.SqsParameters`.
 * Contains the message group ID to use when the target is a FIFO queue. If you specify an SQS FIFO queue as a target, the queue must have content-based deduplication enabled.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-scheduler-schedule-sqsparameters.html}
 */
export type SqsParameters = {
  /**
   * The FIFO message group ID to use as the target.
   * @minLength `1`
   * @maxLength `128`
   */
  MessageGroupId?: string;
};
/**
 * Type definition for `AWS::Scheduler::Schedule.TagMap`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-scheduler-schedule-tagmap.html}
 */
export type TagMap = Record<string, string>;
/**
 * Type definition for `AWS::Scheduler::Schedule.Target`.
 * The schedule target.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-scheduler-schedule-target.html}
 */
export type Target = {
  /**
   * The Amazon Resource Name (ARN) of the target.
   * @minLength `1`
   * @maxLength `1600`
   */
  Arn: string;
  /**
   * A DeadLetterConfig object that contains information about a dead-letter queue configuration.
   */
  DeadLetterConfig?: DeadLetterConfig;
  /**
   * The custom parameters to be used when the target is an Amazon ECS task.
   */
  EcsParameters?: EcsParameters;
  /**
   * EventBridge PutEvent predefined target type.
   */
  EventBridgeParameters?: EventBridgeParameters;
  /**
   * The text, or well-formed JSON, passed to the target. If you are configuring a templated Lambda, AWS Step Functions, or Amazon EventBridge target, the input must be a well-formed JSON. For all other target types, a JSON is not required. If you do not specify anything for this field, EventBridge Scheduler delivers a default notification to the target.
   * @minLength `1`
   */
  Input?: string;
  /**
   * The custom parameter you can use to control the shard to which EventBridge Scheduler sends the event.
   */
  KinesisParameters?: KinesisParameters;
  /**
   * A RetryPolicy object that includes information about the retry policy settings.
   */
  RetryPolicy?: RetryPolicy;
  /**
   * The Amazon Resource Name (ARN) of the IAM role to be used for this target when the schedule is triggered.
   * @minLength `1`
   * @maxLength `1600`
   * @pattern `^arn:aws[a-z-]*:iam::\d{12}:role\/[\w+=,.@\/-]+$`
   */
  RoleArn: string;
  /**
   * These are custom parameters to use when the target is a SageMaker Model Building Pipeline that starts based on AWS EventBridge Scheduler schedules.
   */
  SageMakerPipelineParameters?: SageMakerPipelineParameters;
  /**
   * Contains the message group ID to use when the target is a FIFO queue. If you specify an SQS FIFO queue as a target, the queue must have content-based deduplication enabled.
   */
  SqsParameters?: SqsParameters;
};
/**
 * Definition of AWS::Scheduler::Schedule Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-scheduler-schedule.html}
 */
export class SchedulerSchedule extends $Resource<
  "AWS::Scheduler::Schedule",
  SchedulerScheduleProperties,
  SchedulerScheduleAttributes
> {
  public static readonly Type = "AWS::Scheduler::Schedule";
  constructor(
    logicalId: string,
    properties: SchedulerScheduleProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, SchedulerSchedule.Type, properties, options);
  }
}
