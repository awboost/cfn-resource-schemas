import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::StepFunctions::StateMachineAlias`.
 * Resource schema for StateMachineAlias
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-stepfunctions-statemachinealias.html}
 */
export type StepFunctionsStateMachineAliasProperties = {
  /**
   * The settings to enable gradual state machine deployments.
   */
  DeploymentPreference?: DeploymentPreference;
  /**
   * An optional description of the alias.
   * @minLength `1`
   * @maxLength `256`
   */
  Description?: string;
  /**
   * The alias name.
   * @minLength `1`
   * @maxLength `80`
   */
  Name?: string;
  /**
   * The routing configuration of the alias. One or two versions can be mapped to an alias to split StartExecution requests of the same state machine.
   * @minLength `1`
   * @maxLength `2`
   */
  RoutingConfiguration?: RoutingConfigurationVersion[];
};
/**
 * Attribute type definition for `AWS::StepFunctions::StateMachineAlias`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-stepfunctions-statemachinealias.html#aws-resource-stepfunctions-statemachinealias-return-values}
 */
export type StepFunctionsStateMachineAliasAttributes = {
  /**
   * The ARN of the alias.
   * @minLength `1`
   * @maxLength `2048`
   */
  Arn: string;
};
/**
 * Type definition for `AWS::StepFunctions::StateMachineAlias.DeploymentPreference`.
 * The settings to enable gradual state machine deployments.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-stepfunctions-statemachinealias-deploymentpreference.html}
 */
export type DeploymentPreference = {
  /**
   * A list of CloudWatch alarm names that will be monitored during the deployment. The deployment will fail and rollback if any alarms go into ALARM state.
   * @minLength `1`
   * @maxLength `100`
   */
  Alarms?: string[];
  /**
   * The time in minutes between each traffic shifting increment.
   * @min `1`
   * @max `2100`
   */
  Interval?: number;
  /**
   * The percentage of traffic to shift to the new version in each increment.
   * @min `1`
   * @max `99`
   */
  Percentage?: number;
  /**
   * @minLength `1`
   * @maxLength `2048`
   */
  StateMachineVersionArn: string;
  /**
   * The type of deployment to perform.
   */
  Type: "LINEAR" | "ALL_AT_ONCE" | "CANARY";
};
/**
 * Type definition for `AWS::StepFunctions::StateMachineAlias.RoutingConfigurationVersion`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-stepfunctions-statemachinealias-routingconfigurationversion.html}
 */
export type RoutingConfigurationVersion = {
  /**
   * The Amazon Resource Name (ARN) that identifies one or two state machine versions defined in the routing configuration.
   * @minLength `1`
   * @maxLength `2048`
   */
  StateMachineVersionArn: string;
  /**
   * The percentage of traffic you want to route to the state machine version. The sum of the weights in the routing configuration must be equal to 100.
   * @min `0`
   * @max `100`
   */
  Weight: number;
};
/**
 * Resource type definition for `AWS::StepFunctions::StateMachineAlias`.
 * Resource schema for StateMachineAlias
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-stepfunctions-statemachinealias.html}
 */
export class StepFunctionsStateMachineAlias extends $Resource<
  "AWS::StepFunctions::StateMachineAlias",
  StepFunctionsStateMachineAliasProperties,
  StepFunctionsStateMachineAliasAttributes
> {
  public static readonly Type = "AWS::StepFunctions::StateMachineAlias";
  constructor(
    logicalId: string,
    properties: StepFunctionsStateMachineAliasProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, StepFunctionsStateMachineAlias.Type, properties, options);
  }
}
