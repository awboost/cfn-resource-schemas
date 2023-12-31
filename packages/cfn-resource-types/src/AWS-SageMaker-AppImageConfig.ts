import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::SageMaker::AppImageConfig
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-appimageconfig.html}
 */
export type SageMakerAppImageConfigProperties = {
  /**
   * The Name of the AppImageConfig.
   * @minLength `1`
   * @maxLength `63`
   * @pattern `^[a-zA-Z0-9](-*[a-zA-Z0-9]){0,62}`
   */
  AppImageConfigName: string;
  /**
   * The KernelGatewayImageConfig.
   */
  KernelGatewayImageConfig?: KernelGatewayImageConfig;
  /**
   * A list of tags to apply to the AppImageConfig.
   * @minLength `0`
   * @maxLength `50`
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::SageMaker::AppImageConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-appimageconfig.html#aws-resource-sagemaker-appimageconfig-return-values}
 */
export type SageMakerAppImageConfigAttributes = {
  /**
   * The Amazon Resource Name (ARN) of the AppImageConfig.
   * @minLength `1`
   * @maxLength `256`
   * @pattern `arn:aws[a-z\-]*:sagemaker:[a-z0-9\-]*:[0-9]{12}:app-image-config/.*`
   */
  AppImageConfigArn: string;
};
/**
 * Type definition for `AWS::SageMaker::AppImageConfig.FileSystemConfig`.
 * The Amazon Elastic File System (EFS) storage configuration for a SageMaker image.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-appimageconfig-filesystemconfig.html}
 */
export type FileSystemConfig = {
  /**
   * The default POSIX group ID (GID). If not specified, defaults to 100.
   * @min `0`
   * @max `65535`
   */
  DefaultGid?: number;
  /**
   * The default POSIX user ID (UID). If not specified, defaults to 1000.
   * @min `0`
   * @max `65535`
   */
  DefaultUid?: number;
  /**
   * The path within the image to mount the user's EFS home directory. The directory should be empty. If not specified, defaults to /home/sagemaker-user.
   * @minLength `1`
   * @maxLength `1024`
   * @pattern `^/.*`
   */
  MountPath?: string;
};
/**
 * Type definition for `AWS::SageMaker::AppImageConfig.KernelGatewayImageConfig`.
 * The configuration for the file system and kernels in a SageMaker image running as a KernelGateway app.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-appimageconfig-kernelgatewayimageconfig.html}
 */
export type KernelGatewayImageConfig = {
  /**
   * The Amazon Elastic File System (EFS) storage configuration for a SageMaker image.
   */
  FileSystemConfig?: FileSystemConfig;
  /**
   * The specification of the Jupyter kernels in the image.
   * @minLength `1`
   * @maxLength `1`
   */
  KernelSpecs: KernelSpec[];
};
/**
 * Type definition for `AWS::SageMaker::AppImageConfig.KernelSpec`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-appimageconfig-kernelspec.html}
 */
export type KernelSpec = {
  /**
   * The display name of the kernel.
   * @minLength `1`
   * @maxLength `1024`
   */
  DisplayName?: string;
  /**
   * The name of the kernel.
   * @minLength `1`
   * @maxLength `1024`
   */
  Name: string;
};
/**
 * Type definition for `AWS::SageMaker::AppImageConfig.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-appimageconfig-tag.html}
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
 * Resource Type definition for AWS::SageMaker::AppImageConfig
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-appimageconfig.html}
 */
export class SageMakerAppImageConfig extends $Resource<
  "AWS::SageMaker::AppImageConfig",
  SageMakerAppImageConfigProperties,
  SageMakerAppImageConfigAttributes
> {
  public static readonly Type = "AWS::SageMaker::AppImageConfig";
  constructor(
    logicalId: string,
    properties: SageMakerAppImageConfigProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, SageMakerAppImageConfig.Type, properties, options);
  }
}
