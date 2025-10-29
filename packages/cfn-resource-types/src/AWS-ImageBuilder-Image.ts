import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource schema for AWS::ImageBuilder::Image
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-image.html}
 */
export type ImageBuilderImageProperties = {
  /**
   * The Amazon Resource Name (ARN) of the container recipe that defines how images are configured and tested.
   */
  ContainerRecipeArn?: string;
  /**
   * The deletion settings of the image, indicating whether to delete the underlying resources in addition to the image.
   */
  DeletionSettings?: DeletionSettings;
  /**
   * The Amazon Resource Name (ARN) of the distribution configuration.
   */
  DistributionConfigurationArn?: string;
  /**
   * Collects additional information about the image being created, including the operating system (OS) version and package list.
   */
  EnhancedImageMetadataEnabled?: boolean;
  /**
   * The execution role name/ARN for the image build, if provided
   */
  ExecutionRole?: string;
  /**
   * The image pipeline execution settings of the image.
   */
  ImagePipelineExecutionSettings?: ImagePipelineExecutionSettings;
  /**
   * The Amazon Resource Name (ARN) of the image recipe that defines how images are configured, tested, and assessed.
   */
  ImageRecipeArn?: string;
  /**
   * Contains settings for vulnerability scans.
   */
  ImageScanningConfiguration?: ImageScanningConfiguration;
  /**
   * The image tests configuration used when creating this image.
   */
  ImageTestsConfiguration?: ImageTestsConfiguration;
  /**
   * The Amazon Resource Name (ARN) of the infrastructure configuration.
   */
  InfrastructureConfigurationArn?: string;
  /**
   * The logging configuration settings for the image.
   */
  LoggingConfiguration?: ImageLoggingConfiguration;
  /**
   * The tags associated with the image.
   */
  Tags?: Record<string, string>;
  /**
   * Workflows to define the image build process
   */
  Workflows?: WorkflowConfiguration[];
};
/**
 * Attribute type definition for `AWS::ImageBuilder::Image`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-image.html#aws-resource-imagebuilder-image-return-values}
 */
export type ImageBuilderImageAttributes = {
  /**
   * The Amazon Resource Name (ARN) of the image.
   */
  Arn: string;
  /**
   * The AMI ID of the EC2 AMI in current region.
   */
  ImageId: string;
  /**
   * URI for containers created in current Region with default ECR image tag
   */
  ImageUri: string;
  /**
   * The latest version references of the image.
   */
  LatestVersion: {
    /**
     * The latest version ARN of the created image.
     */
    Arn: string;
    /**
     * The latest version ARN of the created image, with the same major version.
     */
    Major: string;
    /**
     * The latest version ARN of the created image, with the same minor version.
     */
    Minor: string;
    /**
     * The latest version ARN of the created image, with the same patch version.
     */
    Patch: string;
  };
  /**
   * The name of the image.
   */
  Name: string;
};
/**
 * Type definition for `AWS::ImageBuilder::Image.DeletionSettings`.
 * The deletion settings of the image, indicating whether to delete the underlying resources in addition to the image.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-image-deletionsettings.html}
 */
export type DeletionSettings = {
  /**
   * The execution role to use for deleting the image, as well as underlying resources.
   */
  ExecutionRole: string;
};
/**
 * Type definition for `AWS::ImageBuilder::Image.EcrConfiguration`.
 * Settings for Image Builder to configure the ECR repository and output container images that are scanned.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-image-ecrconfiguration.html}
 */
export type EcrConfiguration = {
  /**
   * Tags for Image Builder to apply the output container image that is scanned. Tags can help you identify and manage your scanned images.
   */
  ContainerTags?: string[];
  /**
   * The name of the container repository that Amazon Inspector scans to identify findings for your container images. The name includes the path for the repository location. If you don’t provide this information, Image Builder creates a repository in your account named image-builder-image-scanning-repository to use for vulnerability scans for your output container images.
   */
  RepositoryName?: string;
};
/**
 * Type definition for `AWS::ImageBuilder::Image.ImageLoggingConfiguration`.
 * The logging configuration settings for the image.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-image-imageloggingconfiguration.html}
 */
export type ImageLoggingConfiguration = {
  /**
   * The name of the log group for image build logs.
   */
  LogGroupName?: string;
};
/**
 * Type definition for `AWS::ImageBuilder::Image.ImagePipelineExecutionSettings`.
 * The settings for starting an image pipeline execution.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-image-imagepipelineexecutionsettings.html}
 */
export type ImagePipelineExecutionSettings = {
  /**
   * The deployment ID of the pipeline, used to trigger new image pipeline executions.
   */
  DeploymentId?: string;
  /**
   * Whether to trigger the image pipeline when the pipeline is updated. False by default.
   */
  OnUpdate?: boolean;
};
/**
 * Type definition for `AWS::ImageBuilder::Image.ImageScanningConfiguration`.
 * Contains settings for Image Builder image resource and container image scans.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-image-imagescanningconfiguration.html}
 */
export type ImageScanningConfiguration = {
  /**
   * Contains ECR settings for vulnerability scans.
   */
  EcrConfiguration?: EcrConfiguration;
  /**
   * This sets whether Image Builder keeps a snapshot of the vulnerability scans that Amazon Inspector runs against the build instance when you create a new image.
   */
  ImageScanningEnabled?: boolean;
};
/**
 * Type definition for `AWS::ImageBuilder::Image.ImageTestsConfiguration`.
 * The image tests configuration used when creating this image.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-image-imagetestsconfiguration.html}
 */
export type ImageTestsConfiguration = {
  /**
   * ImageTestsEnabled
   */
  ImageTestsEnabled?: boolean;
  /**
   * TimeoutMinutes
   * @min `60`
   * @max `1440`
   */
  TimeoutMinutes?: number;
};
/**
 * Type definition for `AWS::ImageBuilder::Image.WorkflowConfiguration`.
 * The workflow configuration of the image
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-image-workflowconfiguration.html}
 */
export type WorkflowConfiguration = {
  /**
   * Define execution decision in case of workflow failure
   */
  OnFailure?: "CONTINUE" | "ABORT";
  /**
   * The parallel group name
   */
  ParallelGroup?: string;
  /**
   * The parameters associated with the workflow
   */
  Parameters?: WorkflowParameter[];
  /**
   * The Amazon Resource Name (ARN) of the workflow
   */
  WorkflowArn?: string;
};
/**
 * Type definition for `AWS::ImageBuilder::Image.WorkflowParameter`.
 * A parameter associated with the workflow
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-image-workflowparameter.html}
 */
export type WorkflowParameter = {
  Name?: string;
  Value?: string[];
};
/**
 * Resource schema for AWS::ImageBuilder::Image
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-image.html}
 */
export class ImageBuilderImage extends $Resource<
  "AWS::ImageBuilder::Image",
  ImageBuilderImageProperties,
  ImageBuilderImageAttributes
> {
  public static readonly Type = "AWS::ImageBuilder::Image";
  constructor(
    logicalId: string,
    properties: ImageBuilderImageProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, ImageBuilderImage.Type, properties, options);
  }
}
