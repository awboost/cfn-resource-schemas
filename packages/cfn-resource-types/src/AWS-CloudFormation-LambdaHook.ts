import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::CloudFormation::LambdaHook`.
 * This is a CloudFormation resource for the first-party AWS::Hooks::LambdaHook.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-lambdahook.html}
 */
export type CloudFormationLambdaHookProperties = {
  /**
   * The typename alias for the hook.
   * @pattern `^[A-Za-z0-9]{2,64}::[A-Za-z0-9]{2,64}::[A-Za-z0-9]{2,64}$`
   */
  Alias: string;
  /**
   * The execution role ARN assumed by Hooks to invoke Lambda.
   * @maxLength `256`
   * @pattern `arn:.+:iam::[0-9]{12}:role/.+`
   */
  ExecutionRole: string;
  /**
   * Attribute to specify CloudFormation behavior on hook failure.
   */
  FailureMode: "FAIL" | "WARN";
  /**
   * Attribute to specify which stacks this hook applies to or should get invoked for
   */
  HookStatus: "ENABLED" | "DISABLED";
  /**
   * Amazon Resource Name (ARN), Partial ARN, name, version, or alias of the Lambda function to invoke with this hook.
   * @minLength `1`
   * @maxLength `170`
   * @pattern `(arn:(aws[a-zA-Z-]*)?:lambda:)?([a-z]{2}(-gov)?(-iso([a-z])?)?-[a-z]+-\d{1}:)?(\d{12}:)?(function:)?([a-zA-Z0-9-_]+)(:(\$LATEST|[a-zA-Z0-9-_]+))?`
   */
  LambdaFunction: string;
  /**
   * Filters to allow hooks to target specific stack attributes
   */
  StackFilters?: {
    /**
     * Attribute to specify the filtering behavior. ANY will make the Hook pass if one filter matches. ALL will make the Hook pass if all filters match
     */
    FilteringCriteria: "ALL" | "ANY";
    /**
     * List of stack names as filters
     */
    StackNames?: {
      /**
       * List of stack names that the hook is going to be excluded from
       * @minLength `1`
       * @maxLength `50`
       */
      Exclude?: string[];
      /**
       * List of stack names that the hook is going to target
       * @minLength `1`
       * @maxLength `50`
       */
      Include?: string[];
    };
    /**
     * List of stack roles that are performing the stack operations.
     */
    StackRoles?: {
      /**
       * List of stack roles that the hook is going to be excluded from
       * @minLength `1`
       * @maxLength `50`
       */
      Exclude?: string[];
      /**
       * List of stack roles that the hook is going to target
       * @minLength `1`
       * @maxLength `50`
       */
      Include?: string[];
    };
  };
  /**
   * Attribute to specify which targets should invoke the hook
   */
  TargetFilters?:
    | {
        /**
         * List of actions that the hook is going to target
         * @minLength `1`
         * @maxLength `50`
         */
        Actions?: Action[];
        /**
         * List of invocation points that the hook is going to target
         * @minLength `1`
         * @maxLength `50`
         */
        InvocationPoints?: InvocationPoint[];
        /**
         * List of type names that the hook is going to target
         * @minLength `1`
         * @maxLength `50`
         */
        TargetNames?: string[];
      }
    | {
        /**
         * List of hook targets
         * @minLength `1`
         * @maxLength `50`
         */
        Targets: HookTarget[];
      };
  /**
   * Which operations should this Hook run against? Resource changes, stacks or change sets.
   */
  TargetOperations: TargetOperation[];
};
/**
 * Attribute type definition for `AWS::CloudFormation::LambdaHook`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-lambdahook.html#aws-resource-cloudformation-lambdahook-return-values}
 */
export type CloudFormationLambdaHookAttributes = {
  /**
   * The Amazon Resource Name (ARN) of the activated hook
   * @pattern `^arn:aws[A-Za-z0-9-]{0,64}:cloudformation:[A-Za-z0-9-]{1,64}:([0-9]{12})?:type/hook/.+$`
   */
  HookArn: string;
};
/**
 * Type definition for `AWS::CloudFormation::LambdaHook.Action`.
 * Target actions are the type of operation hooks will be executed at.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudformation-lambdahook-action.html}
 */
export type Action = "CREATE" | "UPDATE" | "DELETE";
/**
 * Type definition for `AWS::CloudFormation::LambdaHook.HookTarget`.
 * Hook targets are the destination where hooks will be invoked against.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudformation-lambdahook-hooktarget.html}
 */
export type HookTarget = {
  /**
   * Target actions are the type of operation hooks will be executed at.
   */
  Action: Action;
  /**
   * Invocation points are the point in provisioning workflow where hooks will be executed.
   */
  InvocationPoint: InvocationPoint;
  /**
   * Type name of hook target. Hook targets are the destination where hooks will be invoked against.
   * @minLength `1`
   * @maxLength `256`
   * @pattern `^(?!.*\*\?).*$`
   */
  TargetName: string;
};
/**
 * Type definition for `AWS::CloudFormation::LambdaHook.InvocationPoint`.
 * Invocation points are the point in provisioning workflow where hooks will be executed.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudformation-lambdahook-invocationpoint.html}
 */
export type InvocationPoint = "PRE_PROVISION";
/**
 * Type definition for `AWS::CloudFormation::LambdaHook.TargetOperation`.
 * Which operations should this Hook run against? Resource changes, stacks or change sets.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudformation-lambdahook-targetoperation.html}
 */
export type TargetOperation = "RESOURCE" | "STACK" | "CHANGE_SET";
/**
 * Resource type definition for `AWS::CloudFormation::LambdaHook`.
 * This is a CloudFormation resource for the first-party AWS::Hooks::LambdaHook.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-lambdahook.html}
 */
export class CloudFormationLambdaHook extends $Resource<
  "AWS::CloudFormation::LambdaHook",
  CloudFormationLambdaHookProperties,
  CloudFormationLambdaHookAttributes
> {
  public static readonly Type = "AWS::CloudFormation::LambdaHook";
  constructor(
    logicalId: string,
    properties: CloudFormationLambdaHookProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, CloudFormationLambdaHook.Type, properties, options);
  }
}
