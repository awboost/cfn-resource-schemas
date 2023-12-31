import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource type definition for `AWS::StepFunctions::StateMachine`.
 * Resource schema for StateMachine
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-stepfunctions-statemachine.html}
 */
export type StepFunctionsStateMachineProperties = {
  Definition?: Definition;
  DefinitionS3Location?: S3Location;
  /**
   * @minLength `1`
   * @maxLength `1048576`
   */
  DefinitionString?: string;
  DefinitionSubstitutions?: DefinitionSubstitutions;
  LoggingConfiguration?: LoggingConfiguration;
  /**
   * @minLength `1`
   * @maxLength `256`
   */
  RoleArn: string;
  /**
   * @minLength `1`
   * @maxLength `80`
   */
  StateMachineName?: string;
  StateMachineType?: "STANDARD" | "EXPRESS";
  Tags?: TagsEntry[];
  TracingConfiguration?: TracingConfiguration;
};
/**
 * Attribute type definition for `AWS::StepFunctions::StateMachine`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-stepfunctions-statemachine.html#aws-resource-stepfunctions-statemachine-return-values}
 */
export type StepFunctionsStateMachineAttributes = {
  /**
   * @minLength `1`
   * @maxLength `2048`
   */
  Arn: string;
  /**
   * @minLength `1`
   * @maxLength `80`
   */
  Name: string;
  /**
   * @minLength `1`
   * @maxLength `256`
   */
  StateMachineRevisionId: string;
};
/**
 * Type definition for `AWS::StepFunctions::StateMachine.CloudWatchLogsLogGroup`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-stepfunctions-statemachine-cloudwatchlogsloggroup.html}
 */
export type CloudWatchLogsLogGroup = {
  /**
   * @minLength `1`
   * @maxLength `256`
   */
  LogGroupArn?: string;
};
/**
 * Type definition for `AWS::StepFunctions::StateMachine.Definition`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-stepfunctions-statemachine-definition.html}
 */
export type Definition = Record<string, any>;
/**
 * Type definition for `AWS::StepFunctions::StateMachine.DefinitionSubstitutions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-stepfunctions-statemachine-definitionsubstitutions.html}
 */
export type DefinitionSubstitutions = Record<string, string | number | boolean>;
/**
 * Type definition for `AWS::StepFunctions::StateMachine.LogDestination`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-stepfunctions-statemachine-logdestination.html}
 */
export type LogDestination = {
  CloudWatchLogsLogGroup?: CloudWatchLogsLogGroup;
};
/**
 * Type definition for `AWS::StepFunctions::StateMachine.LoggingConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-stepfunctions-statemachine-loggingconfiguration.html}
 */
export type LoggingConfiguration = {
  /**
   * @minLength `1`
   */
  Destinations?: LogDestination[];
  IncludeExecutionData?: boolean;
  Level?: "ALL" | "ERROR" | "FATAL" | "OFF";
};
/**
 * Type definition for `AWS::StepFunctions::StateMachine.S3Location`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-stepfunctions-statemachine-s3location.html}
 */
export type S3Location = {
  Bucket: string;
  Key: string;
  Version?: string;
};
/**
 * Type definition for `AWS::StepFunctions::StateMachine.TagsEntry`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-stepfunctions-statemachine-tagsentry.html}
 */
export type TagsEntry = {
  /**
   * @minLength `1`
   * @maxLength `128`
   */
  Key: string;
  /**
   * @minLength `1`
   * @maxLength `256`
   */
  Value: string;
};
/**
 * Type definition for `AWS::StepFunctions::StateMachine.TracingConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-stepfunctions-statemachine-tracingconfiguration.html}
 */
export type TracingConfiguration = {
  Enabled?: boolean;
};
/**
 * Resource type definition for `AWS::StepFunctions::StateMachine`.
 * Resource schema for StateMachine
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-stepfunctions-statemachine.html}
 */
export class StepFunctionsStateMachine extends $Resource<
  "AWS::StepFunctions::StateMachine",
  StepFunctionsStateMachineProperties,
  StepFunctionsStateMachineAttributes
> {
  public static readonly Type = "AWS::StepFunctions::StateMachine";
  public static readonly AttributeNames = [
    "Arn" as const,
    "Name" as const,
    "StateMachineRevisionId" as const,
  ];
  constructor(
    logicalId: string,
    properties: StepFunctionsStateMachineProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      StepFunctionsStateMachine.Type,
      properties,
      StepFunctionsStateMachine.AttributeNames,
      options,
    );
  }
}
