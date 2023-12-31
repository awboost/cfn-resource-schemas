import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource type definition for `AWS::StepFunctions::StateMachineVersion`.
 * Resource schema for StateMachineVersion
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-stepfunctions-statemachineversion.html}
 */
export type StepFunctionsStateMachineVersionProperties = {
  /**
   * @minLength `1`
   * @maxLength `2048`
   */
  Description?: string;
  /**
   * @minLength `1`
   * @maxLength `2048`
   */
  StateMachineArn: string;
  /**
   * @minLength `1`
   * @maxLength `2048`
   */
  StateMachineRevisionId?: string;
};
/**
 * Attribute type definition for `AWS::StepFunctions::StateMachineVersion`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-stepfunctions-statemachineversion.html#aws-resource-stepfunctions-statemachineversion-return-values}
 */
export type StepFunctionsStateMachineVersionAttributes = {
  /**
   * @minLength `1`
   * @maxLength `2048`
   */
  Arn: string;
};
/**
 * Resource type definition for `AWS::StepFunctions::StateMachineVersion`.
 * Resource schema for StateMachineVersion
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-stepfunctions-statemachineversion.html}
 */
export class StepFunctionsStateMachineVersion extends $Resource<
  "AWS::StepFunctions::StateMachineVersion",
  StepFunctionsStateMachineVersionProperties,
  StepFunctionsStateMachineVersionAttributes
> {
  public static readonly Type = "AWS::StepFunctions::StateMachineVersion";
  public static readonly AttributeNames = ["Arn" as const];
  constructor(
    logicalId: string,
    properties: StepFunctionsStateMachineVersionProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      StepFunctionsStateMachineVersion.Type,
      properties,
      StepFunctionsStateMachineVersion.AttributeNames,
      options,
    );
  }
}
