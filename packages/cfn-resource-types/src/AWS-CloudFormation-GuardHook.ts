import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::CloudFormation::GuardHook`.
 * This is a CloudFormation resource for activating the first-party AWS::Hooks::GuardHook.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-guardhook.html}
 */
export type CloudFormationGuardHookProperties = {
  /**
   * The typename alias for the hook.
   * @pattern `^[A-Za-z0-9]{2,64}::[A-Za-z0-9]{2,64}::[A-Za-z0-9]{2,64}$`
   */
  Alias: string;
  /**
   * The execution role ARN assumed by hooks to read Guard rules from S3 and write Guard outputs to S3.
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
   * S3 Bucket where the guard validate report will be uploaded to
   */
  LogBucket?: string;
  Options?: {
    /**
     * S3 Source Location for the Guard files.
     */
    InputParams?: S3Location;
  };
  /**
   * S3 Source Location for the Guard files.
   */
  RuleLocation: S3Location;
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
 * Attribute type definition for `AWS::CloudFormation::GuardHook`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-guardhook.html#aws-resource-cloudformation-guardhook-return-values}
 */
export type CloudFormationGuardHookAttributes = {
  /**
   * The Amazon Resource Name (ARN) of the activated hook
   * @pattern `^arn:aws[A-Za-z0-9-]{0,64}:cloudformation:[A-Za-z0-9-]{1,64}:([0-9]{12})?:type/hook/.+$`
   */
  HookArn: string;
};
/**
 * Type definition for `AWS::CloudFormation::GuardHook.Action`.
 * Target actions are the type of operation hooks will be executed at.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudformation-guardhook-action.html}
 */
export type Action = "CREATE" | "UPDATE" | "DELETE";
/**
 * Type definition for `AWS::CloudFormation::GuardHook.HookTarget`.
 * Hook targets are the destination where hooks will be invoked against.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudformation-guardhook-hooktarget.html}
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
 * Type definition for `AWS::CloudFormation::GuardHook.InvocationPoint`.
 * Invocation points are the point in provisioning workflow where hooks will be executed.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudformation-guardhook-invocationpoint.html}
 */
export type InvocationPoint = "PRE_PROVISION";
/**
 * Type definition for `AWS::CloudFormation::GuardHook.S3Location`.
 * S3 Source Location for the Guard files.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudformation-guardhook-s3location.html}
 */
export type S3Location = {
  /**
   * S3 uri of Guard files.
   */
  Uri: string;
  /**
   * S3 object version
   */
  VersionId?: string;
};
/**
 * Type definition for `AWS::CloudFormation::GuardHook.TargetOperation`.
 * Which operations should this Hook run against? Resource changes, stacks or change sets.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudformation-guardhook-targetoperation.html}
 */
export type TargetOperation = "RESOURCE" | "STACK" | "CHANGE_SET";
/**
 * Resource type definition for `AWS::CloudFormation::GuardHook`.
 * This is a CloudFormation resource for activating the first-party AWS::Hooks::GuardHook.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-guardhook.html}
 */
export class CloudFormationGuardHook extends $Resource<
  "AWS::CloudFormation::GuardHook",
  CloudFormationGuardHookProperties,
  CloudFormationGuardHookAttributes
> {
  public static readonly Type = "AWS::CloudFormation::GuardHook";
  constructor(
    logicalId: string,
    properties: CloudFormationGuardHookProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, CloudFormationGuardHook.Type, properties, options);
  }
}
