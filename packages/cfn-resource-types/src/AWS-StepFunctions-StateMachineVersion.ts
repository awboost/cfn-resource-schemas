import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
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
  constructor(
    logicalId: string,
    properties: StepFunctionsStateMachineVersionProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      StepFunctionsStateMachineVersion.Type,
      properties,
      options,
    );
  }
}
