import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Definition of AWS::Omics::Workflow Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-omics-workflow.html}
 */
export type OmicsWorkflowProperties = {
  /**
   * @minLength `1`
   * @maxLength `64`
   */
  Accelerators?: Accelerators;
  /**
   * @minLength `1`
   * @maxLength `256`
   * @pattern `^[\p{L}||\p{M}||\p{Z}||\p{S}||\p{N}||\p{P}]+$`
   */
  DefinitionUri?: string;
  /**
   * @minLength `1`
   * @maxLength `256`
   * @pattern `^[\p{L}||\p{M}||\p{Z}||\p{S}||\p{N}||\p{P}]+$`
   */
  Description?: string;
  /**
   * @minLength `1`
   * @maxLength `64`
   */
  Engine?: WorkflowEngine;
  /**
   * @minLength `1`
   * @maxLength `128`
   * @pattern `^[\p{L}||\p{M}||\p{Z}||\p{S}||\p{N}||\p{P}]+$`
   */
  Main?: string;
  /**
   * @minLength `1`
   * @maxLength `128`
   * @pattern `^[\p{L}||\p{M}||\p{Z}||\p{S}||\p{N}||\p{P}]+$`
   */
  Name?: string;
  ParameterTemplate?: WorkflowParameterTemplate;
  /**
   * @min `0`
   * @max `100000`
   */
  StorageCapacity?: number;
  /**
   * A map of resource tags
   */
  Tags?: TagMap;
};
/**
 * Attribute type definition for `AWS::Omics::Workflow`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-omics-workflow.html#aws-resource-omics-workflow-return-values}
 */
export type OmicsWorkflowAttributes = {
  /**
   * @minLength `1`
   * @maxLength `128`
   * @pattern `^arn:.+$`
   */
  Arn: string;
  CreationTime: string;
  /**
   * @minLength `1`
   * @maxLength `18`
   * @pattern `^[0-9]+$`
   */
  Id: string;
  /**
   * @minLength `1`
   * @maxLength `64`
   */
  Status: WorkflowStatus;
  /**
   * @minLength `1`
   * @maxLength `64`
   */
  Type: WorkflowType;
};
/**
 * Type definition for `AWS::Omics::Workflow.Accelerators`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-omics-workflow-accelerators.html}
 */
export type Accelerators = "GPU";
/**
 * Type definition for `AWS::Omics::Workflow.TagMap`.
 * A map of resource tags
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-omics-workflow-tagmap.html}
 */
export type TagMap = Record<string, string>;
/**
 * Type definition for `AWS::Omics::Workflow.WorkflowEngine`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-omics-workflow-workflowengine.html}
 */
export type WorkflowEngine = "WDL" | "NEXTFLOW" | "CWL";
/**
 * Type definition for `AWS::Omics::Workflow.WorkflowParameter`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-omics-workflow-workflowparameter.html}
 */
export type WorkflowParameter = {
  /**
   * @minLength `0`
   * @maxLength `256`
   * @pattern `^[\p{L}||\p{M}||\p{Z}||\p{S}||\p{N}||\p{P}]+$`
   */
  Description?: string;
  Optional?: boolean;
};
/**
 * Type definition for `AWS::Omics::Workflow.WorkflowParameterTemplate`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-omics-workflow-workflowparametertemplate.html}
 */
export type WorkflowParameterTemplate = Record<string, WorkflowParameter>;
/**
 * Type definition for `AWS::Omics::Workflow.WorkflowStatus`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-omics-workflow-workflowstatus.html}
 */
export type WorkflowStatus =
  | "CREATING"
  | "ACTIVE"
  | "UPDATING"
  | "DELETED"
  | "FAILED";
/**
 * Type definition for `AWS::Omics::Workflow.WorkflowType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-omics-workflow-workflowtype.html}
 */
export type WorkflowType = "PRIVATE";
/**
 * Definition of AWS::Omics::Workflow Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-omics-workflow.html}
 */
export class OmicsWorkflow extends $Resource<
  "AWS::Omics::Workflow",
  OmicsWorkflowProperties,
  OmicsWorkflowAttributes
> {
  public static readonly Type = "AWS::Omics::Workflow";
  constructor(
    logicalId: string,
    properties: OmicsWorkflowProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, OmicsWorkflow.Type, properties, options);
  }
}
