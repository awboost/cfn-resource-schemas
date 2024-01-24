import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource schema for AWS::ImageBuilder::Workflow
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-workflow.html}
 */
export type ImageBuilderWorkflowProperties = {
  /**
   * The change description of the workflow.
   */
  ChangeDescription?: string;
  /**
   * The data of the workflow.
   * @minLength `1`
   * @maxLength `16000`
   */
  Data?: string;
  /**
   * The description of the workflow.
   */
  Description?: string;
  /**
   * The KMS key identifier used to encrypt the workflow.
   */
  KmsKeyId?: string;
  /**
   * The name of the workflow.
   */
  Name: string;
  /**
   * The tags associated with the workflow.
   */
  Tags?: Record<string, string>;
  /**
   * The type of the workflow denotes whether the workflow is used to build, test, or distribute.
   */
  Type: "BUILD" | "TEST" | "DISTRIBUTION";
  /**
   * The uri of the workflow.
   */
  Uri?: string;
  /**
   * The version of the workflow.
   */
  Version: string;
};
/**
 * Attribute type definition for `AWS::ImageBuilder::Workflow`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-workflow.html#aws-resource-imagebuilder-workflow-return-values}
 */
export type ImageBuilderWorkflowAttributes = {
  /**
   * The Amazon Resource Name (ARN) of the workflow.
   */
  Arn: string;
};
/**
 * Resource schema for AWS::ImageBuilder::Workflow
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-workflow.html}
 */
export class ImageBuilderWorkflow extends $Resource<
  "AWS::ImageBuilder::Workflow",
  ImageBuilderWorkflowProperties,
  ImageBuilderWorkflowAttributes
> {
  public static readonly Type = "AWS::ImageBuilder::Workflow";
  constructor(
    logicalId: string,
    properties: ImageBuilderWorkflowProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, ImageBuilderWorkflow.Type, properties, options);
  }
}
