import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Definition of AWS::NovaAct::WorkflowDefinition Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-novaact-workflowdefinition.html}
 */
export type NovaActWorkflowDefinitionProperties = {
  /**
   * An optional description of the workflow definition's purpose and functionality.
   * @minLength `1`
   * @maxLength `4000`
   */
  Description?: string;
  /**
   * Configuration settings for exporting workflow execution data and logs to Amazon S3.
   */
  ExportConfig?: WorkflowExportConfig;
  /**
   * The name of the workflow definition. Must be unique within your account and region.
   * @minLength `1`
   * @maxLength `40`
   * @pattern `^[a-zA-Z0-9_-]{1,40}$`
   */
  Name: string;
};
/**
 * Attribute type definition for `AWS::NovaAct::WorkflowDefinition`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-novaact-workflowdefinition.html#aws-resource-novaact-workflowdefinition-return-values}
 */
export type NovaActWorkflowDefinitionAttributes = {
  /**
   * The Amazon Resource Name (ARN) of the workflow definition.
   * @pattern `^arn:(aws|aws-cn|aws-us-gov):nova-act:[a-z0-9-]+:[0-9]{12}:workflow-definition/[a-zA-Z0-9_-]{1,40}$`
   */
  Arn: string;
  /**
   * The timestamp when the workflow definition was created.
   */
  CreatedAt: string;
  /**
   * The current status of the workflow definition.
   */
  Status: "ACTIVE" | "DELETING";
};
/**
 * Type definition for `AWS::NovaAct::WorkflowDefinition.WorkflowExportConfig`.
 * Configuration settings for exporting workflow execution data and logs to Amazon S3.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-novaact-workflowdefinition-workflowexportconfig.html}
 */
export type WorkflowExportConfig = {
  /**
   * The name of the Amazon S3 bucket for exporting workflow data.
   * @minLength `3`
   * @maxLength `63`
   * @pattern `^[a-z0-9][a-z0-9.-]*[a-z0-9]$`
   */
  S3BucketName: string;
  /**
   * An optional prefix for Amazon S3 object keys to organize exported data.
   * @minLength `1`
   * @maxLength `100`
   * @pattern `^[a-zA-Z0-9!\-_.*'()]+(?:/[a-zA-Z0-9!\-_.*'()]+)*$`
   */
  S3KeyPrefix?: string;
};
/**
 * Definition of AWS::NovaAct::WorkflowDefinition Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-novaact-workflowdefinition.html}
 */
export class NovaActWorkflowDefinition extends $Resource<
  "AWS::NovaAct::WorkflowDefinition",
  NovaActWorkflowDefinitionProperties,
  NovaActWorkflowDefinitionAttributes
> {
  public static readonly Type = "AWS::NovaAct::WorkflowDefinition";
  constructor(
    logicalId: string,
    properties: NovaActWorkflowDefinitionProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, NovaActWorkflowDefinition.Type, properties, options);
  }
}
