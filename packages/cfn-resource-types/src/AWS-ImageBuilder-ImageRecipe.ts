import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource schema for AWS::ImageBuilder::ImageRecipe
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-imagerecipe.html}
 */
export type ImageBuilderImageRecipeProperties = {
  /**
   * Specify additional settings and launch scripts for your build instances.
   */
  AdditionalInstanceConfiguration?: AdditionalInstanceConfiguration;
  /**
   * The tags to apply to the AMI created by this image recipe.
   */
  AmiTags?: Record<string, string>;
  /**
   * The block device mappings to apply when creating images from this recipe.
   */
  BlockDeviceMappings?: InstanceBlockDeviceMapping[];
  /**
   * The components of the image recipe.
   */
  Components?: ComponentConfiguration[];
  /**
   * The description of the image recipe.
   */
  Description?: string;
  /**
   * The name of the image recipe.
   */
  Name: string;
  /**
   * The parent image of the image recipe.
   */
  ParentImage: string;
  /**
   * The tags of the image recipe.
   */
  Tags?: Record<string, string>;
  /**
   * The version of the image recipe.
   */
  Version: string;
  /**
   * The working directory to be used during build and test workflows.
   */
  WorkingDirectory?: string;
};
/**
 * Attribute type definition for `AWS::ImageBuilder::ImageRecipe`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-imagerecipe.html#aws-resource-imagebuilder-imagerecipe-return-values}
 */
export type ImageBuilderImageRecipeAttributes = {
  /**
   * The Amazon Resource Name (ARN) of the image recipe.
   */
  Arn: string;
  /**
   * The latest version references of the image recipe.
   */
  LatestVersion: {
    /**
     * The latest version ARN of the created image recipe.
     */
    Arn: string;
    /**
     * The latest version ARN of the created image recipe, with the same major version.
     */
    Major: string;
    /**
     * The latest version ARN of the created image recipe, with the same minor version.
     */
    Minor: string;
    /**
     * The latest version ARN of the created image recipe, with the same patch version.
     */
    Patch: string;
  };
};
/**
 * Type definition for `AWS::ImageBuilder::ImageRecipe.AdditionalInstanceConfiguration`.
 * Specify additional settings and launch scripts for your build instances.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-imagerecipe-additionalinstanceconfiguration.html}
 */
export type AdditionalInstanceConfiguration = {
  /**
   * Contains settings for the SSM agent on your build instance.
   */
  SystemsManagerAgent?: SystemsManagerAgent;
  /**
   * Use this property to provide commands or a command script to run when you launch your build instance.
   */
  UserDataOverride?: string;
};
/**
 * Type definition for `AWS::ImageBuilder::ImageRecipe.ComponentConfiguration`.
 * Configuration details of the component.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-imagerecipe-componentconfiguration.html}
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
 * Type definition for `AWS::ImageBuilder::ImageRecipe.ComponentParameter`.
 * Contains a key/value pair that sets the named component parameter.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-imagerecipe-componentparameter.html}
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
 * Type definition for `AWS::ImageBuilder::ImageRecipe.EbsInstanceBlockDeviceSpecification`.
 * Amazon EBS-specific block device mapping specifications.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-imagerecipe-ebsinstanceblockdevicespecification.html}
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
 * Type definition for `AWS::ImageBuilder::ImageRecipe.InstanceBlockDeviceMapping`.
 * Defines block device mappings for the instance used to configure your image.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-imagerecipe-instanceblockdevicemapping.html}
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
 * Type definition for `AWS::ImageBuilder::ImageRecipe.SystemsManagerAgent`.
 * Contains settings for the SSM agent on your build instance.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-imagerecipe-systemsmanageragent.html}
 */
export type SystemsManagerAgent = {
  /**
   * Controls whether the SSM agent is removed from your final build image, prior to creating the new AMI. If this is set to true, then the agent is removed from the final image. If it's set to false, then the agent is left in, so that it is included in the new AMI. The default value is false.
   */
  UninstallAfterBuild?: boolean;
};
/**
 * Resource schema for AWS::ImageBuilder::ImageRecipe
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-imagerecipe.html}
 */
export class ImageBuilderImageRecipe extends $Resource<
  "AWS::ImageBuilder::ImageRecipe",
  ImageBuilderImageRecipeProperties,
  ImageBuilderImageRecipeAttributes
> {
  public static readonly Type = "AWS::ImageBuilder::ImageRecipe";
  constructor(
    logicalId: string,
    properties: ImageBuilderImageRecipeProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, ImageBuilderImageRecipe.Type, properties, options);
  }
}
