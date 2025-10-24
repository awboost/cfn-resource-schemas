import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource schema for AWS::ImageBuilder::ImagePipeline
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-imagepipeline.html}
 */
export type ImageBuilderImagePipelineProperties = {
  /**
   * The Amazon Resource Name (ARN) of the container recipe that defines how images are configured and tested.
   */
  ContainerRecipeArn?: string;
  /**
   * The description of the image pipeline.
   */
  Description?: string;
  /**
   * The Amazon Resource Name (ARN) of the distribution configuration associated with this image pipeline.
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
   * The Amazon Resource Name (ARN) of the image recipe that defines how images are configured, tested, and assessed.
   */
  ImageRecipeArn?: string;
  /**
   * Contains settings for vulnerability scans.
   */
  ImageScanningConfiguration?: ImageScanningConfiguration;
  /**
   * The image tests configuration of the image pipeline.
   */
  ImageTestsConfiguration?: ImageTestsConfiguration;
  /**
   * The Amazon Resource Name (ARN) of the infrastructure configuration associated with this image pipeline.
   */
  InfrastructureConfigurationArn?: string;
  /**
   * The logging configuration settings for the image pipeline.
   */
  LoggingConfiguration?: PipelineLoggingConfiguration;
  /**
   * The name of the image pipeline.
   */
  Name?: string;
  /**
   * The schedule of the image pipeline.
   */
  Schedule?: Schedule;
  /**
   * The status of the image pipeline.
   */
  Status?: "DISABLED" | "ENABLED";
  /**
   * The tags of this image pipeline.
   */
  Tags?: Record<string, string>;
  /**
   * Workflows to define the image build process
   */
  Workflows?: WorkflowConfiguration[];
};
/**
 * Attribute type definition for `AWS::ImageBuilder::ImagePipeline`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-imagepipeline.html#aws-resource-imagebuilder-imagepipeline-return-values}
 */
export type ImageBuilderImagePipelineAttributes = {
  /**
   * The Amazon Resource Name (ARN) of the image pipeline.
   */
  Arn: string;
  /**
   * The deployment ID of the pipeline, used for resource create/update triggers.
   */
  DeploymentId: string;
};
/**
 * Type definition for `AWS::ImageBuilder::ImagePipeline.AutoDisablePolicy`.
 * The auto-disable policy configuration for the image pipeline.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-imagepipeline-autodisablepolicy.html}
 */
export type AutoDisablePolicy = {
  /**
   * The number of consecutive failures after which the pipeline should be automatically disabled.
   * @min `1`
   */
  FailureCount: number;
};
/**
 * Type definition for `AWS::ImageBuilder::ImagePipeline.EcrConfiguration`.
 * Settings for Image Builder to configure the ECR repository and output container images that are scanned.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-imagepipeline-ecrconfiguration.html}
 */
export type EcrConfiguration = {
  /**
   * Tags for Image Builder to apply the output container image that is scanned. Tags can help you identify and manage your scanned images.
   */
  ContainerTags?: string[];
  /**
   * The name of the container repository that Amazon Inspector scans to identify findings for your container images. The name includes the path for the repository location. If you don't provide this information, Image Builder creates a repository in your account named image-builder-image-scanning-repository to use for vulnerability scans for your output container images.
   */
  RepositoryName?: string;
};
/**
 * Type definition for `AWS::ImageBuilder::ImagePipeline.ImageScanningConfiguration`.
 * Determines if tests should run after building the image. Image Builder defaults to enable tests to run following the image build, before image distribution.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-imagepipeline-imagescanningconfiguration.html}
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
 * Type definition for `AWS::ImageBuilder::ImagePipeline.ImageTestsConfiguration`.
 * Image tests configuration.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-imagepipeline-imagetestsconfiguration.html}
 */
export type ImageTestsConfiguration = {
  /**
   * Defines if tests should be executed when building this image.
   */
  ImageTestsEnabled?: boolean;
  /**
   * The maximum time in minutes that tests are permitted to run.
   * @min `60`
   * @max `1440`
   */
  TimeoutMinutes?: number;
};
/**
 * Type definition for `AWS::ImageBuilder::ImagePipeline.PipelineLoggingConfiguration`.
 * The logging configuration settings for the image pipeline.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-imagepipeline-pipelineloggingconfiguration.html}
 */
export type PipelineLoggingConfiguration = {
  /**
   * The name of the log group for image build logs.
   */
  ImageLogGroupName?: string;
  /**
   * The name of the log group for pipeline execution logs.
   */
  PipelineLogGroupName?: string;
};
/**
 * Type definition for `AWS::ImageBuilder::ImagePipeline.Schedule`.
 * The schedule of the image pipeline.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-imagepipeline-schedule.html}
 */
export type Schedule = {
  /**
   * The auto-disable policy for the image pipeline.
   */
  AutoDisablePolicy?: AutoDisablePolicy;
  /**
   * The condition configures when the pipeline should trigger a new image build.
   */
  PipelineExecutionStartCondition?:
    | "EXPRESSION_MATCH_ONLY"
    | "EXPRESSION_MATCH_AND_DEPENDENCY_UPDATES_AVAILABLE";
  /**
   * The expression determines how often EC2 Image Builder evaluates your pipelineExecutionStartCondition.
   */
  ScheduleExpression?: string;
};
/**
 * Type definition for `AWS::ImageBuilder::ImagePipeline.WorkflowConfiguration`.
 * The workflow configuration of the image
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-imagepipeline-workflowconfiguration.html}
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
 * Type definition for `AWS::ImageBuilder::ImagePipeline.WorkflowParameter`.
 * A parameter associated with the workflow
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-imagepipeline-workflowparameter.html}
 */
export type WorkflowParameter = {
  Name?: string;
  Value?: string[];
};
/**
 * Resource schema for AWS::ImageBuilder::ImagePipeline
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-imagepipeline.html}
 */
export class ImageBuilderImagePipeline extends $Resource<
  "AWS::ImageBuilder::ImagePipeline",
  ImageBuilderImagePipelineProperties,
  ImageBuilderImagePipelineAttributes
> {
  public static readonly Type = "AWS::ImageBuilder::ImagePipeline";
  constructor(
    logicalId: string,
    properties: ImageBuilderImagePipelineProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, ImageBuilderImagePipeline.Type, properties, options);
  }
}
