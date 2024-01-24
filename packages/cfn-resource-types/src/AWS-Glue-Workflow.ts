import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
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
  constructor(
    logicalId: string,
    properties: GlueWorkflowProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, GlueWorkflow.Type, properties, options);
  }
}
