import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource schema for AWS::ImageBuilder::DistributionConfiguration
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-distributionconfiguration.html}
 */
export type ImageBuilderDistributionConfigurationProperties = {
  /**
   * The description of the distribution configuration.
   */
  Description?: string;
  /**
   * The distributions of the distribution configuration.
   */
  Distributions: Distribution[];
  /**
   * The name of the distribution configuration.
   */
  Name: string;
  /**
   * The tags associated with the component.
   */
  Tags?: Record<string, string>;
};
/**
 * Attribute type definition for `AWS::ImageBuilder::DistributionConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-distributionconfiguration.html#aws-resource-imagebuilder-distributionconfiguration-return-values}
 */
export type ImageBuilderDistributionConfigurationAttributes = {
  /**
   * The Amazon Resource Name (ARN) of the distribution configuration.
   */
  Arn: string;
};
/**
 * Type definition for `AWS::ImageBuilder::DistributionConfiguration.AmiDistributionConfiguration`.
 * The specific AMI settings (for example, launch permissions, AMI tags).
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-distributionconfiguration-amidistributionconfiguration.html}
 */
export type AmiDistributionConfiguration = {
  /**
   * The tags to apply to AMIs distributed to this Region.
   */
  AmiTags?: Record<string, string>;
  /**
   * The description of the AMI distribution configuration.
   */
  Description?: string;
  /**
   * The KMS key identifier used to encrypt the distributed image.
   */
  KmsKeyId?: string;
  /**
   * Launch permissions can be used to configure which AWS accounts can use the AMI to launch instances.
   */
  LaunchPermissionConfiguration?: LaunchPermissionConfiguration;
  /**
   * The name of the AMI distribution configuration.
   */
  Name?: string;
  /**
   * The ID of accounts to which you want to distribute an image.
   */
  TargetAccountIds?: string[];
};
/**
 * Type definition for `AWS::ImageBuilder::DistributionConfiguration.ContainerDistributionConfiguration`.
 * Container distribution settings for encryption, licensing, and sharing in a specific Region.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-distributionconfiguration-containerdistributionconfiguration.html}
 */
export type ContainerDistributionConfiguration = {
  /**
   * Tags that are attached to the container distribution configuration.
   */
  ContainerTags?: string[];
  /**
   * The description of the container distribution configuration.
   */
  Description?: string;
  /**
   * The destination repository for the container distribution configuration.
   */
  TargetRepository?: TargetContainerRepository;
};
/**
 * Type definition for `AWS::ImageBuilder::DistributionConfiguration.Distribution`.
 * The distributions of the distribution configuration.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-distributionconfiguration-distribution.html}
 */
export type Distribution = {
  /**
   * The specific AMI settings (for example, launch permissions, AMI tags).
   */
  AmiDistributionConfiguration?: AmiDistributionConfiguration;
  /**
   * Container distribution settings for encryption, licensing, and sharing in a specific Region.
   */
  ContainerDistributionConfiguration?: ContainerDistributionConfiguration;
  /**
   * The Windows faster-launching configurations to use for AMI distribution.
   */
  FastLaunchConfigurations?: FastLaunchConfiguration[];
  /**
   * A group of launchTemplateConfiguration settings that apply to image distribution.
   */
  LaunchTemplateConfigurations?: LaunchTemplateConfiguration[];
  /**
   * The License Manager Configuration to associate with the AMI in the specified Region.
   */
  LicenseConfigurationArns?: string[];
  /**
   * region
   */
  Region: string;
};
/**
 * Type definition for `AWS::ImageBuilder::DistributionConfiguration.FastLaunchConfiguration`.
 * The Windows faster-launching configuration to use for AMI distribution.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-distributionconfiguration-fastlaunchconfiguration.html}
 */
export type FastLaunchConfiguration = {
  /**
   * The owner account ID for the fast-launch enabled Windows AMI.
   */
  AccountId?: string;
  /**
   * A Boolean that represents the current state of faster launching for the Windows AMI. Set to true to start using Windows faster launching, or false to stop using it.
   */
  Enabled?: boolean;
  /**
   * The launch template that the fast-launch enabled Windows AMI uses when it launches Windows instances to create pre-provisioned snapshots.
   */
  LaunchTemplate?: FastLaunchLaunchTemplateSpecification;
  /**
   * The maximum number of parallel instances that are launched for creating resources.
   */
  MaxParallelLaunches?: number;
  /**
   * Configuration settings for managing the number of snapshots that are created from pre-provisioned instances for the Windows AMI when faster launching is enabled.
   */
  SnapshotConfiguration?: FastLaunchSnapshotConfiguration;
};
/**
 * Type definition for `AWS::ImageBuilder::DistributionConfiguration.FastLaunchLaunchTemplateSpecification`.
 * The launch template that the fast-launch enabled Windows AMI uses when it launches Windows instances to create pre-provisioned snapshots.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-distributionconfiguration-fastlaunchlaunchtemplatespecification.html}
 */
export type FastLaunchLaunchTemplateSpecification = {
  /**
   * The ID of the launch template to use for faster launching for a Windows AMI.
   */
  LaunchTemplateId?: string;
  /**
   * The name of the launch template to use for faster launching for a Windows AMI.
   */
  LaunchTemplateName?: string;
  /**
   * The version of the launch template to use for faster launching for a Windows AMI.
   */
  LaunchTemplateVersion?: string;
};
/**
 * Type definition for `AWS::ImageBuilder::DistributionConfiguration.FastLaunchSnapshotConfiguration`.
 * Configuration settings for managing the number of snapshots that are created from pre-provisioned instances for the Windows AMI when faster launching is enabled.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-distributionconfiguration-fastlaunchsnapshotconfiguration.html}
 */
export type FastLaunchSnapshotConfiguration = {
  /**
   * The number of pre-provisioned snapshots to keep on hand for a fast-launch enabled Windows AMI.
   */
  TargetResourceCount?: number;
};
/**
 * Type definition for `AWS::ImageBuilder::DistributionConfiguration.LaunchPermissionConfiguration`.
 * Launch permissions can be used to configure which AWS accounts can use the AMI to launch instances.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-distributionconfiguration-launchpermissionconfiguration.html}
 */
export type LaunchPermissionConfiguration = {
  /**
   * The ARN for an Amazon Web Services Organization that you want to share your AMI with.
   */
  OrganizationArns?: string[];
  /**
   * The ARN for an Organizations organizational unit (OU) that you want to share your AMI with.
   */
  OrganizationalUnitArns?: string[];
  /**
   * The name of the group.
   */
  UserGroups?: string[];
  /**
   * The AWS account ID.
   */
  UserIds?: string[];
};
/**
 * Type definition for `AWS::ImageBuilder::DistributionConfiguration.LaunchTemplateConfiguration`.
 * launchTemplateConfiguration settings that apply to image distribution.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-distributionconfiguration-launchtemplateconfiguration.html}
 */
export type LaunchTemplateConfiguration = {
  /**
   * The account ID that this configuration applies to.
   */
  AccountId?: string;
  /**
   * Identifies the EC2 launch template to use.
   */
  LaunchTemplateId?: string;
  /**
   * Set the specified EC2 launch template as the default launch template for the specified account.
   */
  SetDefaultVersion?: boolean;
};
/**
 * Type definition for `AWS::ImageBuilder::DistributionConfiguration.TargetContainerRepository`.
 * The destination repository for the container image.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-distributionconfiguration-targetcontainerrepository.html}
 */
export type TargetContainerRepository = {
  /**
   * The repository name of target container repository.
   */
  RepositoryName?: string;
  /**
   * The service of target container repository.
   */
  Service?: "ECR";
};
/**
 * Resource schema for AWS::ImageBuilder::DistributionConfiguration
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-distributionconfiguration.html}
 */
export class ImageBuilderDistributionConfiguration extends $Resource<
  "AWS::ImageBuilder::DistributionConfiguration",
  ImageBuilderDistributionConfigurationProperties,
  ImageBuilderDistributionConfigurationAttributes
> {
  public static readonly Type = "AWS::ImageBuilder::DistributionConfiguration";
  constructor(
    logicalId: string,
    properties: ImageBuilderDistributionConfigurationProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      ImageBuilderDistributionConfiguration.Type,
      properties,
      options,
    );
  }
}
