import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::SageMaker::StudioLifecycleConfig
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-studiolifecycleconfig.html}
 */
export type SageMakerStudioLifecycleConfigProperties = {
  /**
   * The App type that the Lifecycle Configuration is attached to.
   */
  StudioLifecycleConfigAppType:
    | "JupyterServer"
    | "KernelGateway"
    | "CodeEditor"
    | "JupyterLab";
  /**
   * The content of your Amazon SageMaker Studio Lifecycle Configuration script. This content must be base64 encoded.
   * @minLength `1`
   * @maxLength `16384`
   * @pattern `[\S\s]+`
   */
  StudioLifecycleConfigContent: string;
  /**
   * The name of the Amazon SageMaker Studio Lifecycle Configuration.
   * @minLength `1`
   * @maxLength `63`
   * @pattern `^[a-zA-Z0-9](-*[a-zA-Z0-9]){0,62}`
   */
  StudioLifecycleConfigName: string;
  /**
   * Tags to be associated with the Lifecycle Configuration. Each tag consists of a key and an optional value. Tag keys must be unique per resource. Tags are searchable using the Search API.
   * @minLength `0`
   * @maxLength `50`
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::SageMaker::StudioLifecycleConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-studiolifecycleconfig.html#aws-resource-sagemaker-studiolifecycleconfig-return-values}
 */
export type SageMakerStudioLifecycleConfigAttributes = {
  /**
   * The Amazon Resource Name (ARN) of the Lifecycle Configuration.
   * @minLength `1`
   * @maxLength `256`
   * @pattern `arn:aws[a-z\-]*:sagemaker:[a-z0-9\-]*:[0-9]{12}:studio-lifecycle-config/.*`
   */
  StudioLifecycleConfigArn: string;
};
/**
 * Type definition for `AWS::SageMaker::StudioLifecycleConfig.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-studiolifecycleconfig-tag.html}
 */
export type Tag = {
  /**
   * @minLength `1`
   * @maxLength `128`
   */
  Key: string;
  /**
   * @minLength `1`
   * @maxLength `128`
   */
  Value: string;
};
/**
 * Resource Type definition for AWS::SageMaker::StudioLifecycleConfig
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-studiolifecycleconfig.html}
 */
export class SageMakerStudioLifecycleConfig extends $Resource<
  "AWS::SageMaker::StudioLifecycleConfig",
  SageMakerStudioLifecycleConfigProperties,
  SageMakerStudioLifecycleConfigAttributes
> {
  public static readonly Type = "AWS::SageMaker::StudioLifecycleConfig";
  constructor(
    logicalId: string,
    properties: SageMakerStudioLifecycleConfigProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, SageMakerStudioLifecycleConfig.Type, properties, options);
  }
}
