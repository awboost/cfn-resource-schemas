import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::SageMaker::Space
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-space.html}
 */
export type SageMakerSpaceProperties = {
  /**
   * The ID of the associated Domain.
   * @minLength `1`
   * @maxLength `63`
   */
  DomainId: string;
  OwnershipSettings?: OwnershipSettings;
  /**
   * @maxLength `64`
   * @pattern `^(?!\s*$).+`
   */
  SpaceDisplayName?: string;
  /**
   * A name for the Space.
   * @minLength `1`
   * @maxLength `63`
   */
  SpaceName: string;
  /**
   * A collection of settings.
   */
  SpaceSettings?: SpaceSettings;
  SpaceSharingSettings?: SpaceSharingSettings;
  /**
   * A list of tags to apply to the space.
   * @minLength `0`
   * @maxLength `50`
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::SageMaker::Space`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-space.html#aws-resource-sagemaker-space-return-values}
 */
export type SageMakerSpaceAttributes = {
  /**
   * The space Amazon Resource Name (ARN).
   * @maxLength `256`
   * @pattern `arn:aws[a-z\-]*:sagemaker:[a-z0-9\-]*:[0-9]{12}:space/.*`
   */
  SpaceArn: string;
  /**
   * @maxLength `1024`
   */
  Url: string;
};
/**
 * Type definition for `AWS::SageMaker::Space.AppType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-space-apptype.html}
 */
export type AppType =
  | "JupyterServer"
  | "KernelGateway"
  | "TensorBoard"
  | "RStudioServerPro"
  | "RSessionGateway"
  | "JupyterLab"
  | "CodeEditor";
/**
 * Type definition for `AWS::SageMaker::Space.CodeRepository`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-space-coderepository.html}
 */
export type CodeRepository = {
  /**
   * A CodeRepository (valid URL) to be used within Jupyter's Git extension.
   * @maxLength `256`
   * @pattern `^https://([.\-_a-zA-Z0-9]+/?){3,1016}$`
   */
  RepositoryUrl: string;
};
/**
 * Type definition for `AWS::SageMaker::Space.CustomFileSystem`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-space-customfilesystem.html}
 */
export type CustomFileSystem = {
  EFSFileSystem?: EFSFileSystem;
  FSxLustreFileSystem?: FSxLustreFileSystem;
  S3FileSystem?: S3FileSystem;
};
/**
 * Type definition for `AWS::SageMaker::Space.CustomImage`.
 * A custom SageMaker image.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-space-customimage.html}
 */
export type CustomImage = {
  /**
   * The Name of the AppImageConfig.
   * @maxLength `63`
   * @pattern `^[a-zA-Z0-9](-*[a-zA-Z0-9]){0,62}`
   */
  AppImageConfigName: string;
  /**
   * The name of the CustomImage. Must be unique to your account.
   * @maxLength `63`
   * @pattern `^[a-zA-Z0-9]([-.]?[a-zA-Z0-9]){0,62}$`
   */
  ImageName: string;
  /**
   * The version number of the CustomImage.
   * @min `0`
   */
  ImageVersionNumber?: number;
};
/**
 * Type definition for `AWS::SageMaker::Space.EbsStorageSettings`.
 * Properties related to the space's Amazon Elastic Block Store volume.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-space-ebsstoragesettings.html}
 */
export type EbsStorageSettings = {
  /**
   * Size of the Amazon EBS volume in Gb
   * @min `5`
   * @max `16384`
   */
  EbsVolumeSizeInGb: number;
};
/**
 * Type definition for `AWS::SageMaker::Space.EFSFileSystem`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-space-efsfilesystem.html}
 */
export type EFSFileSystem = {
  /**
   * @minLength `11`
   * @maxLength `21`
   * @pattern `^(fs-[0-9a-f]{8,})$`
   */
  FileSystemId: string;
};
/**
 * Type definition for `AWS::SageMaker::Space.FSxLustreFileSystem`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-space-fsxlustrefilesystem.html}
 */
export type FSxLustreFileSystem = {
  /**
   * @minLength `11`
   * @maxLength `21`
   * @pattern `^(fs-[0-9a-f]{8,})$`
   */
  FileSystemId: string;
};
/**
 * Type definition for `AWS::SageMaker::Space.JupyterServerAppSettings`.
 * The JupyterServer app settings.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-space-jupyterserverappsettings.html}
 */
export type JupyterServerAppSettings = {
  DefaultResourceSpec?: ResourceSpec;
  /**
   * A list of LifecycleConfigArns available for use with JupyterServer apps.
   * @minLength `0`
   * @maxLength `30`
   */
  LifecycleConfigArns?: string[];
};
/**
 * Type definition for `AWS::SageMaker::Space.KernelGatewayAppSettings`.
 * The kernel gateway app settings.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-space-kernelgatewayappsettings.html}
 */
export type KernelGatewayAppSettings = {
  /**
   * A list of custom SageMaker images that are configured to run as a KernelGateway app.
   * @minLength `0`
   * @maxLength `30`
   */
  CustomImages?: CustomImage[];
  /**
   * The default instance type and the Amazon Resource Name (ARN) of the default SageMaker image used by the KernelGateway app.
   */
  DefaultResourceSpec?: ResourceSpec;
  /**
   * A list of LifecycleConfigArns available for use with KernelGateway apps.
   * @minLength `0`
   * @maxLength `30`
   */
  LifecycleConfigArns?: string[];
};
/**
 * Type definition for `AWS::SageMaker::Space.OwnershipSettings`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-space-ownershipsettings.html}
 */
export type OwnershipSettings = {
  /**
   * @maxLength `63`
   * @pattern `^[a-zA-Z0-9](-*[a-zA-Z0-9]){0,62}`
   */
  OwnerUserProfileName: string;
};
/**
 * Type definition for `AWS::SageMaker::Space.RemoteAccess`.
 * The flag to enable/disable remote access for a space.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-space-remoteaccess.html}
 */
export type RemoteAccess = "ENABLED" | "DISABLED";
/**
 * Type definition for `AWS::SageMaker::Space.ResourceSpec`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-space-resourcespec.html}
 */
export type ResourceSpec = {
  /**
   * The instance type that the image version runs on.
   */
  InstanceType?:
    | "system"
    | "ml.t3.micro"
    | "ml.t3.small"
    | "ml.t3.medium"
    | "ml.t3.large"
    | "ml.t3.xlarge"
    | "ml.t3.2xlarge"
    | "ml.m5.large"
    | "ml.m5.xlarge"
    | "ml.m5.2xlarge"
    | "ml.m5.4xlarge"
    | "ml.m5.8xlarge"
    | "ml.m5.12xlarge"
    | "ml.m5.16xlarge"
    | "ml.m5.24xlarge"
    | "ml.c5.large"
    | "ml.c5.xlarge"
    | "ml.c5.2xlarge"
    | "ml.c5.4xlarge"
    | "ml.c5.9xlarge"
    | "ml.c5.12xlarge"
    | "ml.c5.18xlarge"
    | "ml.c5.24xlarge"
    | "ml.p3.2xlarge"
    | "ml.p3.8xlarge"
    | "ml.p3.16xlarge"
    | "ml.g4dn.xlarge"
    | "ml.g4dn.2xlarge"
    | "ml.g4dn.4xlarge"
    | "ml.g4dn.8xlarge"
    | "ml.g4dn.12xlarge"
    | "ml.g4dn.16xlarge"
    | "ml.r5.large"
    | "ml.r5.xlarge"
    | "ml.r5.2xlarge"
    | "ml.r5.4xlarge"
    | "ml.r5.8xlarge"
    | "ml.r5.12xlarge"
    | "ml.r5.16xlarge"
    | "ml.r5.24xlarge"
    | "ml.p3dn.24xlarge"
    | "ml.m5d.large"
    | "ml.m5d.xlarge"
    | "ml.m5d.2xlarge"
    | "ml.m5d.4xlarge"
    | "ml.m5d.8xlarge"
    | "ml.m5d.12xlarge"
    | "ml.m5d.16xlarge"
    | "ml.m5d.24xlarge"
    | "ml.g5.xlarge"
    | "ml.g5.2xlarge"
    | "ml.g5.4xlarge"
    | "ml.g5.8xlarge"
    | "ml.g5.12xlarge"
    | "ml.g5.16xlarge"
    | "ml.g5.24xlarge"
    | "ml.g5.48xlarge"
    | "ml.p4d.24xlarge"
    | "ml.p4de.24xlarge"
    | "ml.geospatial.interactive"
    | "ml.trn1.2xlarge"
    | "ml.trn1.32xlarge"
    | "ml.trn1n.32xlarge";
  /**
   * The Amazon Resource Name (ARN) of the Lifecycle Configuration to attach to the Resource.
   * @maxLength `256`
   * @pattern `arn:aws[a-z\-]*:sagemaker:[a-z0-9\-]*:[0-9]{12}:studio-lifecycle-config/.*`
   */
  LifecycleConfigArn?: string;
  /**
   * The ARN of the SageMaker image that the image version belongs to.
   * @maxLength `256`
   * @pattern `^arn:aws(-[\w]+)*:sagemaker:.+:[0-9]{12}:image/[a-z0-9]([-.]?[a-z0-9])*$`
   */
  SageMakerImageArn?: string;
  /**
   * The ARN of the image version created on the instance.
   * @maxLength `256`
   * @pattern `^arn:aws(-[\w]+)*:sagemaker:.+:[0-9]{12}:image-version/[a-z0-9]([-.]?[a-z0-9])/‍*[0-9]+$`
   */
  SageMakerImageVersionArn?: string;
};
/**
 * Type definition for `AWS::SageMaker::Space.S3FileSystem`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-space-s3filesystem.html}
 */
export type S3FileSystem = {
  /**
   * @minLength `0`
   * @maxLength `1024`
   * @pattern `(s3)://([^/]+)/?(.*)`
   */
  S3Uri?: string;
};
/**
 * Type definition for `AWS::SageMaker::Space.SpaceAppLifecycleManagement`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-space-spaceapplifecyclemanagement.html}
 */
export type SpaceAppLifecycleManagement = {
  IdleSettings?: SpaceIdleSettings;
};
/**
 * Type definition for `AWS::SageMaker::Space.SpaceCodeEditorAppSettings`.
 * The CodeEditor app settings.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-space-spacecodeeditorappsettings.html}
 */
export type SpaceCodeEditorAppSettings = {
  AppLifecycleManagement?: SpaceAppLifecycleManagement;
  DefaultResourceSpec?: ResourceSpec;
};
/**
 * Type definition for `AWS::SageMaker::Space.SpaceIdleSettings`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-space-spaceidlesettings.html}
 */
export type SpaceIdleSettings = {
  /**
   * The space idle timeout value set in minutes
   * @min `60`
   * @max `525600`
   */
  IdleTimeoutInMinutes?: number;
};
/**
 * Type definition for `AWS::SageMaker::Space.SpaceJupyterLabAppSettings`.
 * The JupyterServer app settings.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-space-spacejupyterlabappsettings.html}
 */
export type SpaceJupyterLabAppSettings = {
  AppLifecycleManagement?: SpaceAppLifecycleManagement;
  /**
   * A list of CodeRepositories available for use with JupyterLab apps.
   * @minLength `0`
   * @maxLength `30`
   */
  CodeRepositories?: CodeRepository[];
  DefaultResourceSpec?: ResourceSpec;
};
/**
 * Type definition for `AWS::SageMaker::Space.SpaceManagedResources`.
 * The flag to enable/disable creation of space managed resources.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-space-spacemanagedresources.html}
 */
export type SpaceManagedResources = "ENABLED" | "DISABLED";
/**
 * Type definition for `AWS::SageMaker::Space.SpaceSettings`.
 * A collection of settings that apply to spaces of Amazon SageMaker Studio. These settings are specified when the CreateSpace API is called.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-space-spacesettings.html}
 */
export type SpaceSettings = {
  AppType?: AppType;
  /**
   * The CodeEditor app settings.
   */
  CodeEditorAppSettings?: SpaceCodeEditorAppSettings;
  /**
   * @minLength `0`
   * @maxLength `1`
   */
  CustomFileSystems?: CustomFileSystem[];
  /**
   * The JupyterLab app settings.
   */
  JupyterLabAppSettings?: SpaceJupyterLabAppSettings;
  /**
   * The Jupyter server's app settings.
   */
  JupyterServerAppSettings?: JupyterServerAppSettings;
  /**
   * The kernel gateway app settings.
   */
  KernelGatewayAppSettings?: KernelGatewayAppSettings;
  /**
   * This is a flag used to indicate if remote access is enabled.
   */
  RemoteAccess?: RemoteAccess;
  /**
   * This is a flag used to indicate if space managed resources needs to be created.
   */
  SpaceManagedResources?: SpaceManagedResources;
  /**
   * Default storage settings for a space.
   */
  SpaceStorageSettings?: SpaceStorageSettings;
};
/**
 * Type definition for `AWS::SageMaker::Space.SpaceSharingSettings`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-space-spacesharingsettings.html}
 */
export type SpaceSharingSettings = {
  SharingType: "Private" | "Shared";
};
/**
 * Type definition for `AWS::SageMaker::Space.SpaceStorageSettings`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-space-spacestoragesettings.html}
 */
export type SpaceStorageSettings = {
  /**
   * Properties related to the space's Amazon Elastic Block Store volume.
   */
  EbsStorageSettings?: EbsStorageSettings;
};
/**
 * Type definition for `AWS::SageMaker::Space.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-space-tag.html}
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
 * Resource Type definition for AWS::SageMaker::Space
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-space.html}
 */
export class SageMakerSpace extends $Resource<
  "AWS::SageMaker::Space",
  SageMakerSpaceProperties,
  SageMakerSpaceAttributes
> {
  public static readonly Type = "AWS::SageMaker::Space";
  constructor(
    logicalId: string,
    properties: SageMakerSpaceProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, SageMakerSpace.Type, properties, options);
  }
}
