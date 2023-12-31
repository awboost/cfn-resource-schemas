import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource Type definition for AWS::Glue::Workflow
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-workflow.html}
 */
export type GlueWorkflowProperties = {
  DefaultRunProperties?: Record<string, any>;
  Description?: string;
  MaxConcurrentRuns?: number;
  Name?: string;
  Tags?: Record<string, any>;
};
/**
 * Attribute type definition for `AWS::Glue::Workflow`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-workflow.html#aws-resource-glue-workflow-return-values}
 */
export type GlueWorkflowAttributes = {
  Id: string;
};
/**
 * Resource Type definition for AWS::Glue::Workflow
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-workflow.html}
 */
export class GlueWorkflow extends $Resource<
  "AWS::Glue::Workflow",
  GlueWorkflowProperties,
  GlueWorkflowAttributes
> {
  public static readonly Type = "AWS::Glue::Workflow";
  public static readonly AttributeNames = ["Id" as const];
  constructor(
    logicalId: string,
    properties: GlueWorkflowProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      GlueWorkflow.Type,
      properties,
      GlueWorkflow.AttributeNames,
      options,
    );
  }
}
