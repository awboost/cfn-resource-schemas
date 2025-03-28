import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * The AWS::CloudFormation::Stack resource nests a stack as a resource in a top-level template.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-stack.html}
 */
export type CloudFormationStackProperties = {
  Capabilities?: (
    | "CAPABILITY_IAM"
    | "CAPABILITY_NAMED_IAM"
    | "CAPABILITY_AUTO_EXPAND"
  )[];
  /**
   * @minLength `1`
   * @maxLength `1024`
   */
  Description?: string;
  DisableRollback?: boolean;
  EnableTerminationProtection?: boolean;
  /**
   * @maxLength `5`
   */
  NotificationARNs?: string[];
  Parameters?: Record<string, string>;
  RoleARN?: string;
  StackName: string;
  StackPolicyBody?: Record<string, any>;
  StackPolicyURL?: string;
  StackStatusReason?: string;
  /**
   * @maxLength `50`
   */
  Tags?: Tag[];
  TemplateBody?: Record<string, any> | string;
  /**
   * @minLength `1`
   * @maxLength `1024`
   */
  TemplateURL?: string;
  /**
   * @min `1`
   */
  TimeoutInMinutes?: number;
};
/**
 * Attribute type definition for `AWS::CloudFormation::Stack`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-stack.html#aws-resource-cloudformation-stack-return-values}
 */
export type CloudFormationStackAttributes = {
  ChangeSetId: string;
  CreationTime: string;
  LastUpdateTime: string;
  Outputs: {
    Description: string;
    ExportName: string;
    OutputKey: string;
    OutputValue: string;
  }[];
  ParentId: string;
  RootId: string;
  StackId: string;
  StackStatus:
    | "CREATE_IN_PROGRESS"
    | "CREATE_FAILED"
    | "CREATE_COMPLETE"
    | "ROLLBACK_IN_PROGRESS"
    | "ROLLBACK_FAILED"
    | "ROLLBACK_COMPLETE"
    | "DELETE_IN_PROGRESS"
    | "DELETE_FAILED"
    | "DELETE_COMPLETE"
    | "UPDATE_IN_PROGRESS"
    | "UPDATE_COMPLETE_CLEANUP_IN_PROGRESS"
    | "UPDATE_COMPLETE"
    | "UPDATE_FAILED"
    | "UPDATE_ROLLBACK_IN_PROGRESS"
    | "UPDATE_ROLLBACK_FAILED"
    | "UPDATE_ROLLBACK_COMPLETE_CLEANUP_IN_PROGRESS"
    | "UPDATE_ROLLBACK_COMPLETE"
    | "REVIEW_IN_PROGRESS"
    | "IMPORT_IN_PROGRESS"
    | "IMPORT_COMPLETE"
    | "IMPORT_ROLLBACK_IN_PROGRESS"
    | "IMPORT_ROLLBACK_FAILED"
    | "IMPORT_ROLLBACK_COMPLETE";
};
/**
 * Type definition for `AWS::CloudFormation::Stack.Output`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudformation-stack-output.html}
 */
export type Output = {
  Description?: string;
  ExportName?: string;
  OutputKey?: string;
  OutputValue?: string;
};
/**
 * Type definition for `AWS::CloudFormation::Stack.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudformation-stack-tag.html}
 */
export type Tag = {
  Key: string;
  Value: string;
};
/**
 * The AWS::CloudFormation::Stack resource nests a stack as a resource in a top-level template.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-stack.html}
 */
export class CloudFormationStack extends $Resource<
  "AWS::CloudFormation::Stack",
  CloudFormationStackProperties,
  CloudFormationStackAttributes
> {
  public static readonly Type = "AWS::CloudFormation::Stack";
  constructor(
    logicalId: string,
    properties: CloudFormationStackProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, CloudFormationStack.Type, properties, options);
  }
}
