import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
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
   * The Amazon Resource Name (ARN) of the distribution configuration.
   */
  DistributionConfigurationArn?: string;
  /**
   * Collects additional information about the image being created, including the operating system (OS) version and package list.
   */
  EnhancedImageMetadataEnabled?: boolean;
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
   * The tags associated with the image.
   */
  Tags?: Record<string, string>;
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
   * The name of the image.
   */
  Name: string;
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
