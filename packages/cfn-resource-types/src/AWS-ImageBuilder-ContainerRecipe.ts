import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource schema for AWS::ImageBuilder::ContainerRecipe
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-containerrecipe.html}
 */
export type ImageBuilderContainerRecipeProperties = {
  /**
   * Components for build and test that are included in the container recipe.
   */
  Components?: ComponentConfiguration[];
  /**
   * Specifies the type of container, such as Docker.
   */
  ContainerType?: "DOCKER";
  /**
   * The description of the container recipe.
   */
  Description?: string;
  /**
   * Dockerfiles are text documents that are used to build Docker containers, and ensure that they contain all of the elements required by the application running inside. The template data consists of contextual variables where Image Builder places build information or scripts, based on your container image recipe.
   */
  DockerfileTemplateData?: string;
  /**
   * The S3 URI for the Dockerfile that will be used to build your container image.
   */
  DockerfileTemplateUri?: string;
  /**
   * Specifies the operating system version for the source image.
   */
  ImageOsVersionOverride?: string;
  /**
   * A group of options that can be used to configure an instance for building and testing container images.
   */
  InstanceConfiguration?: InstanceConfiguration;
  /**
   * Identifies which KMS key is used to encrypt the container image.
   */
  KmsKeyId?: string;
  /**
   * The name of the container recipe.
   */
  Name?: string;
  /**
   * The source image for the container recipe.
   */
  ParentImage?: string;
  /**
   * Specifies the operating system platform when you use a custom source image.
   */
  PlatformOverride?: "Windows" | "Linux";
  /**
   * Tags that are attached to the container recipe.
   */
  Tags?: Record<string, string>;
  /**
   * The destination repository for the container image.
   */
  TargetRepository?: TargetContainerRepository;
  /**
   * The semantic version of the container recipe (<major>.<minor>.<patch>).
   */
  Version?: string;
  /**
   * The working directory to be used during build and test workflows.
   */
  WorkingDirectory?: string;
};
/**
 * Attribute type definition for `AWS::ImageBuilder::ContainerRecipe`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-containerrecipe.html#aws-resource-imagebuilder-containerrecipe-return-values}
 */
export type ImageBuilderContainerRecipeAttributes = {
  /**
   * The Amazon Resource Name (ARN) of the container recipe.
   */
  Arn: string;
  /**
   * The latest version references of the container recipe.
   */
  LatestVersion: {
    /**
     * The latest version ARN of the created container recipe.
     */
    Arn: string;
    /**
     * The latest version ARN of the created container recipe, with the same major version.
     */
    Major: string;
    /**
     * The latest version ARN of the created container recipe, with the same minor version.
     */
    Minor: string;
    /**
     * The latest version ARN of the created container recipe, with the same patch version.
     */
    Patch: string;
  };
};
/**
 * Type definition for `AWS::ImageBuilder::ContainerRecipe.ComponentConfiguration`.
 * Configuration details of the component.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-containerrecipe-componentconfiguration.html}
 */
export type ComponentConfiguration = {
  /**
   * The Amazon Resource Name (ARN) of the component.
   */
  ComponentArn?: string;
  /**
   * A group of parameter settings that are used to configure the component for a specific recipe.
   */
  Parameters?: ComponentParameter[];
};
/**
 * Type definition for `AWS::ImageBuilder::ContainerRecipe.ComponentParameter`.
 * Contains a key/value pair that sets the named component parameter.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-containerrecipe-componentparameter.html}
 */
export type ComponentParameter = {
  /**
   * The name of the component parameter to set.
   */
  Name: string;
  /**
   * Sets the value for the named component parameter.
   */
  Value: string[];
};
/**
 * Type definition for `AWS::ImageBuilder::ContainerRecipe.EbsInstanceBlockDeviceSpecification`.
 * Amazon EBS-specific block device mapping specifications.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-containerrecipe-ebsinstanceblockdevicespecification.html}
 */
export type EbsInstanceBlockDeviceSpecification = {
  /**
   * Use to configure delete on termination of the associated device.
   */
  DeleteOnTermination?: boolean;
  /**
   * Use to configure device encryption.
   */
  Encrypted?: boolean;
  /**
   * Use to configure device IOPS.
   */
  Iops?: number;
  /**
   * Use to configure the KMS key to use when encrypting the device.
   */
  KmsKeyId?: string;
  /**
   * The snapshot that defines the device contents.
   */
  SnapshotId?: string;
  /**
   * For GP3 volumes only - The throughput in MiB/s that the volume supports.
   */
  Throughput?: number;
  /**
   * Use to override the device's volume size.
   */
  VolumeSize?: number;
  /**
   * Use to override the device's volume type.
   */
  VolumeType?: "standard" | "io1" | "io2" | "gp2" | "gp3" | "sc1" | "st1";
};
/**
 * Type definition for `AWS::ImageBuilder::ContainerRecipe.InstanceBlockDeviceMapping`.
 * Defines block device mappings for the instance used to configure your image.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-containerrecipe-instanceblockdevicemapping.html}
 */
export type InstanceBlockDeviceMapping = {
  /**
   * The device to which these mappings apply.
   */
  DeviceName?: string;
  /**
   * Use to manage Amazon EBS-specific configuration for this mapping.
   */
  Ebs?: EbsInstanceBlockDeviceSpecification;
  /**
   * Use to remove a mapping from the parent image.
   */
  NoDevice?: string;
  /**
   * Use to manage instance ephemeral devices.
   */
  VirtualName?: string;
};
/**
 * Type definition for `AWS::ImageBuilder::ContainerRecipe.InstanceConfiguration`.
 * A group of options that can be used to configure an instance for building and testing container images.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-containerrecipe-instanceconfiguration.html}
 */
export type InstanceConfiguration = {
  /**
   * Defines the block devices to attach for building an instance from this Image Builder AMI.
   */
  BlockDeviceMappings?: InstanceBlockDeviceMapping[];
  /**
   * The AMI ID to use as the base image for a container build and test instance. If not specified, Image Builder will use the appropriate ECS-optimized AMI as a base image.
   */
  Image?: string;
};
/**
 * Type definition for `AWS::ImageBuilder::ContainerRecipe.TargetContainerRepository`.
 * The container repository where the output container image is stored.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-containerrecipe-targetcontainerrepository.html}
 */
export type TargetContainerRepository = {
  /**
   * The name of the container repository where the output container image is stored. This name is prefixed by the repository location.
   */
  RepositoryName?: string;
  /**
   * Specifies the service in which this image was registered.
   */
  Service?: "ECR";
};
/**
 * Resource schema for AWS::ImageBuilder::ContainerRecipe
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-containerrecipe.html}
 */
export class ImageBuilderContainerRecipe extends $Resource<
  "AWS::ImageBuilder::ContainerRecipe",
  ImageBuilderContainerRecipeProperties,
  ImageBuilderContainerRecipeAttributes
> {
  public static readonly Type = "AWS::ImageBuilder::ContainerRecipe";
  constructor(
    logicalId: string,
    properties: ImageBuilderContainerRecipeProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, ImageBuilderContainerRecipe.Type, properties, options);
  }
}
