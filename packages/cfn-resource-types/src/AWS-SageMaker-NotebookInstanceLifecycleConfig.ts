import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource Type definition for AWS::SageMaker::NotebookInstanceLifecycleConfig
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-notebookinstancelifecycleconfig.html}
 */
export type SageMakerNotebookInstanceLifecycleConfigProperties = {
  NotebookInstanceLifecycleConfigName?: string;
  OnCreate?: NotebookInstanceLifecycleHook[];
  OnStart?: NotebookInstanceLifecycleHook[];
};
/**
 * Attribute type definition for `AWS::SageMaker::NotebookInstanceLifecycleConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-notebookinstancelifecycleconfig.html#aws-resource-sagemaker-notebookinstancelifecycleconfig-return-values}
 */
export type SageMakerNotebookInstanceLifecycleConfigAttributes = {
  Id: string;
};
/**
 * Type definition for `AWS::SageMaker::NotebookInstanceLifecycleConfig.NotebookInstanceLifecycleHook`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-notebookinstancelifecycleconfig-notebookinstancelifecyclehook.html}
 */
export type NotebookInstanceLifecycleHook = {
  Content?: string;
};
/**
 * Resource Type definition for AWS::SageMaker::NotebookInstanceLifecycleConfig
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-notebookinstancelifecycleconfig.html}
 */
export class SageMakerNotebookInstanceLifecycleConfig extends $Resource<
  "AWS::SageMaker::NotebookInstanceLifecycleConfig",
  SageMakerNotebookInstanceLifecycleConfigProperties,
  SageMakerNotebookInstanceLifecycleConfigAttributes
> {
  public static readonly Type =
    "AWS::SageMaker::NotebookInstanceLifecycleConfig";
  public static readonly AttributeNames = ["Id" as const];
  constructor(
    logicalId: string,
    properties: SageMakerNotebookInstanceLifecycleConfigProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      SageMakerNotebookInstanceLifecycleConfig.Type,
      properties,
      SageMakerNotebookInstanceLifecycleConfig.AttributeNames,
      options,
    );
  }
}
