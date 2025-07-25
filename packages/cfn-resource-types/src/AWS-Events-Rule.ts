import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::Events::Rule
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-rule.html}
 */
export type EventsRuleProperties = {
  /**
   * The description of the rule.
   */
  Description?: string;
  /**
   * The name or ARN of the event bus associated with the rule. If you omit this, the default event bus is used.
   */
  EventBusName?: string;
  /**
   * The event pattern of the rule. For more information, see Events and Event Patterns in the Amazon EventBridge User Guide.
   */
  EventPattern?: string | Record<string, any>;
  /**
   * The name of the rule.
   */
  Name?: string;
  /**
   * The Amazon Resource Name (ARN) of the role that is used for target invocation.
   */
  RoleArn?: string;
  /**
   * The scheduling expression. For example, "cron(0 20 * * ? *)", "rate(5 minutes)". For more information, see Creating an Amazon EventBridge rule that runs on a schedule.
   */
  ScheduleExpression?: string;
  /**
   * The state of the rule.
   */
  State?:
    | "DISABLED"
    | "ENABLED"
    | "ENABLED_WITH_ALL_CLOUDTRAIL_MANAGEMENT_EVENTS";
  /**
     * Adds the specified targets to the specified rule, or updates the targets if they are already associated with the rule.
    Targets are the resources that are invoked when a rule is triggered.
     */
  Targets?: Target[];
};
/**
 * Attribute type definition for `AWS::Events::Rule`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-rule.html#aws-resource-events-rule-return-values}
 */
export type EventsRuleAttributes = {
  /**
   * The ARN of the rule, such as arn:aws:events:us-east-2:123456789012:rule/example.
   */
  Arn: string;
};
/**
 * Type definition for `AWS::Events::Rule.AppSyncParameters`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-rule-appsyncparameters.html}
 */
export type AppSyncParameters = {
  GraphQLOperation: string;
};
/**
 * Type definition for `AWS::Events::Rule.AwsVpcConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-rule-awsvpcconfiguration.html}
 */
export type AwsVpcConfiguration = {
  AssignPublicIp?: string;
  SecurityGroups?: string[];
  Subnets: string[];
};
/**
 * Type definition for `AWS::Events::Rule.BatchArrayProperties`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-rule-batcharrayproperties.html}
 */
export type BatchArrayProperties = {
  Size?: number;
};
/**
 * Type definition for `AWS::Events::Rule.BatchParameters`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-rule-batchparameters.html}
 */
export type BatchParameters = {
  ArrayProperties?: BatchArrayProperties;
  JobDefinition: string;
  JobName: string;
  RetryStrategy?: BatchRetryStrategy;
};
/**
 * Type definition for `AWS::Events::Rule.BatchRetryStrategy`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-rule-batchretrystrategy.html}
 */
export type BatchRetryStrategy = {
  Attempts?: number;
};
/**
 * Type definition for `AWS::Events::Rule.CapacityProviderStrategyItem`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-rule-capacityproviderstrategyitem.html}
 */
export type CapacityProviderStrategyItem = {
  Base?: number;
  CapacityProvider: string;
  Weight?: number;
};
/**
 * Type definition for `AWS::Events::Rule.DeadLetterConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-rule-deadletterconfig.html}
 */
export type DeadLetterConfig = {
  Arn?: string;
};
/**
 * Type definition for `AWS::Events::Rule.EcsParameters`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-rule-ecsparameters.html}
 */
export type EcsParameters = {
  CapacityProviderStrategy?: CapacityProviderStrategyItem[];
  EnableECSManagedTags?: boolean;
  EnableExecuteCommand?: boolean;
  Group?: string;
  LaunchType?: string;
  NetworkConfiguration?: NetworkConfiguration;
  PlacementConstraints?: PlacementConstraint[];
  PlacementStrategies?: PlacementStrategy[];
  PlatformVersion?: string;
  PropagateTags?: string;
  ReferenceId?: string;
  TagList?: Tag[];
  TaskCount?: number;
  TaskDefinitionArn: string;
};
/**
 * Type definition for `AWS::Events::Rule.HttpParameters`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-rule-httpparameters.html}
 */
export type HttpParameters = {
  HeaderParameters?: Record<string, string>;
  PathParameterValues?: string[];
  QueryStringParameters?: Record<string, string>;
};
/**
 * Type definition for `AWS::Events::Rule.InputTransformer`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-rule-inputtransformer.html}
 */
export type InputTransformer = {
  InputPathsMap?: Record<string, string>;
  InputTemplate: string;
};
/**
 * Type definition for `AWS::Events::Rule.KinesisParameters`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-rule-kinesisparameters.html}
 */
export type KinesisParameters = {
  PartitionKeyPath: string;
};
/**
 * Type definition for `AWS::Events::Rule.NetworkConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-rule-networkconfiguration.html}
 */
export type NetworkConfiguration = {
  AwsVpcConfiguration?: AwsVpcConfiguration;
};
/**
 * Type definition for `AWS::Events::Rule.PlacementConstraint`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-rule-placementconstraint.html}
 */
export type PlacementConstraint = {
  Expression?: string;
  Type?: string;
};
/**
 * Type definition for `AWS::Events::Rule.PlacementStrategy`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-rule-placementstrategy.html}
 */
export type PlacementStrategy = {
  Field?: string;
  Type?: string;
};
/**
 * Type definition for `AWS::Events::Rule.RedshiftDataParameters`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-rule-redshiftdataparameters.html}
 */
export type RedshiftDataParameters = {
  Database: string;
  DbUser?: string;
  SecretManagerArn?: string;
  Sql?: string;
  Sqls?: string[];
  StatementName?: string;
  WithEvent?: boolean;
};
/**
 * Type definition for `AWS::Events::Rule.RetryPolicy`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-rule-retrypolicy.html}
 */
export type RetryPolicy = {
  MaximumEventAgeInSeconds?: number;
  MaximumRetryAttempts?: number;
};
/**
 * Type definition for `AWS::Events::Rule.RunCommandParameters`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-rule-runcommandparameters.html}
 */
export type RunCommandParameters = {
  RunCommandTargets: RunCommandTarget[];
};
/**
 * Type definition for `AWS::Events::Rule.RunCommandTarget`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-rule-runcommandtarget.html}
 */
export type RunCommandTarget = {
  Key: string;
  Values: string[];
};
/**
 * Type definition for `AWS::Events::Rule.SageMakerPipelineParameter`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-rule-sagemakerpipelineparameter.html}
 */
export type SageMakerPipelineParameter = {
  Name: string;
  Value: string;
};
/**
 * Type definition for `AWS::Events::Rule.SageMakerPipelineParameters`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-rule-sagemakerpipelineparameters.html}
 */
export type SageMakerPipelineParameters = {
  PipelineParameterList?: SageMakerPipelineParameter[];
};
/**
 * Type definition for `AWS::Events::Rule.SqsParameters`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-rule-sqsparameters.html}
 */
export type SqsParameters = {
  MessageGroupId: string;
};
/**
 * Type definition for `AWS::Events::Rule.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-rule-tag.html}
 */
export type Tag = {
  Key?: string;
  Value?: string;
};
/**
 * Type definition for `AWS::Events::Rule.Target`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-rule-target.html}
 */
export type Target = {
  AppSyncParameters?: AppSyncParameters;
  Arn: string;
  BatchParameters?: BatchParameters;
  DeadLetterConfig?: DeadLetterConfig;
  EcsParameters?: EcsParameters;
  HttpParameters?: HttpParameters;
  Id: string;
  Input?: string;
  InputPath?: string;
  InputTransformer?: InputTransformer;
  KinesisParameters?: KinesisParameters;
  RedshiftDataParameters?: RedshiftDataParameters;
  RetryPolicy?: RetryPolicy;
  RoleArn?: string;
  RunCommandParameters?: RunCommandParameters;
  SageMakerPipelineParameters?: SageMakerPipelineParameters;
  SqsParameters?: SqsParameters;
};
/**
 * Resource Type definition for AWS::Events::Rule
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-rule.html}
 */
export class EventsRule extends $Resource<
  "AWS::Events::Rule",
  EventsRuleProperties,
  EventsRuleAttributes
> {
  public static readonly Type = "AWS::Events::Rule";
  constructor(
    logicalId: string,
    properties: EventsRuleProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, EventsRule.Type, properties, options);
  }
}
