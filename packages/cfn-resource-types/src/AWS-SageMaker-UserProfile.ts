import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::SageMaker::UserProfile
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-userprofile.html}
 */
export type SageMakerUserProfileProperties = {
  /**
   * The ID of the associated Domain.
   * @minLength `1`
   * @maxLength `63`
   */
  DomainId: string;
  /**
   * A specifier for the type of value specified in SingleSignOnUserValue. Currently, the only supported value is "UserName". If the Domain's AuthMode is SSO, this field is required. If the Domain's AuthMode is not SSO, this field cannot be specified.
   * @pattern `UserName`
   */
  SingleSignOnUserIdentifier?: string;
  /**
   * The username of the associated AWS Single Sign-On User for this UserProfile. If the Domain's AuthMode is SSO, this field is required, and must match a valid username of a user in your directory. If the Domain's AuthMode is not SSO, this field cannot be specified.
   * @minLength `1`
   * @maxLength `256`
   */
  SingleSignOnUserValue?: string;
  /**
   * A list of tags to apply to the user profile.
   * @minLength `0`
   * @maxLength `50`
   */
  Tags?: Tag[];
  /**
   * A name for the UserProfile.
   * @minLength `1`
   * @maxLength `63`
   */
  UserProfileName: string;
  /**
   * A collection of settings.
   */
  UserSettings?: UserSettings;
};
/**
 * Attribute type definition for `AWS::SageMaker::UserProfile`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-userprofile.html#aws-resource-sagemaker-userprofile-return-values}
 */
export type SageMakerUserProfileAttributes = {
  /**
   * The user profile Amazon Resource Name (ARN).
   * @maxLength `256`
   * @pattern `arn:aws[a-z\-]*:sagemaker:[a-z0-9\-]*:[0-9]{12}:user-profile/.*`
   */
  UserProfileArn: string;
};
/**
 * Type definition for `AWS::SageMaker::UserProfile.AppType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-userprofile-apptype.html}
 */
export type AppType =
  | "JupyterServer"
  | "TensorBoard"
  | "RStudioServerPro"
  | "JupyterLab"
  | "CodeEditor"
  | "DetailedProfiler"
  | "Canvas";
/**
 * Type definition for `AWS::SageMaker::UserProfile.CodeEditorAppSettings`.
 * The CodeEditor app settings.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-userprofile-codeeditorappsettings.html}
 */
export type CodeEditorAppSettings = {
  /**
   * A list of custom images for use for CodeEditor apps.
   * @minLength `0`
   * @maxLength `30`
   */
  CustomImages?: CustomImage[];
  /**
   * The default instance type and the Amazon Resource Name (ARN) of the default SageMaker image used by the CodeEditor app.
   */
  DefaultResourceSpec?: ResourceSpec;
  /**
   * A list of LifecycleConfigArns available for use with CodeEditor apps.
   * @minLength `0`
   * @maxLength `30`
   */
  LifecycleConfigArns?: string[];
};
/**
 * Type definition for `AWS::SageMaker::UserProfile.CodeRepository`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-userprofile-coderepository.html}
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
 * Type definition for `AWS::SageMaker::UserProfile.CustomFileSystemConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-userprofile-customfilesystemconfig.html}
 */
export type CustomFileSystemConfig = {
  EFSFileSystemConfig?: EFSFileSystemConfig;
};
/**
 * Type definition for `AWS::SageMaker::UserProfile.CustomImage`.
 * A custom SageMaker image.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-userprofile-customimage.html}
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
 * Type definition for `AWS::SageMaker::UserProfile.CustomPosixUserConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-userprofile-customposixuserconfig.html}
 */
export type CustomPosixUserConfig = {
  /**
   * @min `1001`
   * @max `4000000`
   */
  Gid: number;
  /**
   * @min `10000`
   * @max `4000000`
   */
  Uid: number;
};
/**
 * Type definition for `AWS::SageMaker::UserProfile.DefaultEbsStorageSettings`.
 * Properties related to the Amazon Elastic Block Store volume.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-userprofile-defaultebsstoragesettings.html}
 */
export type DefaultEbsStorageSettings = {
  /**
   * Default size of the Amazon EBS volume in Gb
   * @min `5`
   * @max `16384`
   */
  DefaultEbsVolumeSizeInGb: number;
  /**
   * Maximum size of the Amazon EBS volume in Gb. Must be greater than or equal to the DefaultEbsVolumeSizeInGb.
   * @min `5`
   * @max `16384`
   */
  MaximumEbsVolumeSizeInGb: number;
};
/**
 * Type definition for `AWS::SageMaker::UserProfile.DefaultSpaceStorageSettings`.
 * Default storage settings for a space.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-userprofile-defaultspacestoragesettings.html}
 */
export type DefaultSpaceStorageSettings = {
  /**
   * Properties related to the Amazon Elastic Block Store volume.
   */
  DefaultEbsStorageSettings?: DefaultEbsStorageSettings;
};
/**
 * Type definition for `AWS::SageMaker::UserProfile.EFSFileSystemConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-userprofile-efsfilesystemconfig.html}
 */
export type EFSFileSystemConfig = {
  /**
   * @minLength `11`
   * @maxLength `21`
   * @pattern `^(fs-[0-9a-f]{8,})$`
   */
  FileSystemId: string;
  /**
   * @minLength `1`
   * @maxLength `256`
   * @pattern `^\/\S*$`
   */
  FileSystemPath?: string;
};
/**
 * Type definition for `AWS::SageMaker::UserProfile.JupyterLabAppSettings`.
 * The JupyterLab app settings.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-userprofile-jupyterlabappsettings.html}
 */
export type JupyterLabAppSettings = {
  /**
   * A list of CodeRepositories available for use with JupyterLab apps.
   * @minLength `0`
   * @maxLength `30`
   */
  CodeRepositories?: CodeRepository[];
  /**
   * A list of custom images available for use for JupyterLab apps
   * @minLength `0`
   * @maxLength `30`
   */
  CustomImages?: CustomImage[];
  /**
   * The default instance type and the Amazon Resource Name (ARN) of the default SageMaker image used by the JupyterLab app.
   */
  DefaultResourceSpec?: ResourceSpec;
  /**
   * A list of LifecycleConfigArns available for use with JupyterLab apps.
   * @minLength `0`
   * @maxLength `30`
   */
  LifecycleConfigArns?: string[];
};
/**
 * Type definition for `AWS::SageMaker::UserProfile.JupyterServerAppSettings`.
 * The JupyterServer app settings.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-userprofile-jupyterserverappsettings.html}
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
 * Type definition for `AWS::SageMaker::UserProfile.KernelGatewayAppSettings`.
 * The kernel gateway app settings.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-userprofile-kernelgatewayappsettings.html}
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
 * Type definition for `AWS::SageMaker::UserProfile.MlTools`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-userprofile-mltools.html}
 */
export type MlTools =
  | "DataWrangler"
  | "FeatureStore"
  | "EmrClusters"
  | "AutoMl"
  | "Experiments"
  | "Training"
  | "ModelEvaluation"
  | "Pipelines"
  | "Models"
  | "JumpStart"
  | "InferenceRecommender"
  | "Endpoints"
  | "Projects"
  | "InferenceOptimization";
/**
 * Type definition for `AWS::SageMaker::UserProfile.ResourceSpec`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-userprofile-resourcespec.html}
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
 * Type definition for `AWS::SageMaker::UserProfile.RStudioServerProAppSettings`.
 * A collection of settings that configure user interaction with the RStudioServerPro app.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-userprofile-rstudioserverproappsettings.html}
 */
export type RStudioServerProAppSettings = {
  /**
   * Indicates whether the current user has access to the RStudioServerPro app.
   */
  AccessStatus?: "ENABLED" | "DISABLED";
  /**
   * The level of permissions that the user has within the RStudioServerPro app. This value defaults to User. The Admin value allows the user access to the RStudio Administrative Dashboard.
   */
  UserGroup?: "R_STUDIO_ADMIN" | "R_STUDIO_USER";
};
/**
 * Type definition for `AWS::SageMaker::UserProfile.SharingSettings`.
 * Specifies options when sharing an Amazon SageMaker Studio notebook. These settings are specified as part of DefaultUserSettings when the CreateDomain API is called, and as part of UserSettings when the CreateUserProfile API is called.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-userprofile-sharingsettings.html}
 */
export type SharingSettings = {
  /**
   * Whether to include the notebook cell output when sharing the notebook. The default is Disabled.
   */
  NotebookOutputOption?: "Allowed" | "Disabled";
  /**
   * When NotebookOutputOption is Allowed, the AWS Key Management Service (KMS) encryption key ID used to encrypt the notebook cell output in the Amazon S3 bucket.
   * @maxLength `2048`
   * @pattern `.*`
   */
  S3KmsKeyId?: string;
  /**
   * When NotebookOutputOption is Allowed, the Amazon S3 bucket used to store the shared notebook snapshots.
   * @maxLength `1024`
   * @pattern `^(https|s3)://([^/]+)/?(.*)$`
   */
  S3OutputPath?: string;
};
/**
 * Type definition for `AWS::SageMaker::UserProfile.StudioWebPortalSettings`.
 * Studio settings. If these settings are applied on a user level, they take priority over the settings applied on a domain level.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-userprofile-studiowebportalsettings.html}
 */
export type StudioWebPortalSettings = {
  /**
   * Applications supported in Studio that are hidden from the Studio left navigation pane.
   * @minLength `0`
   */
  HiddenAppTypes?: AppType[];
  /**
   * The machine learning tools that are hidden from the Studio left navigation pane.
   * @minLength `0`
   */
  HiddenMlTools?: MlTools[];
};
/**
 * Type definition for `AWS::SageMaker::UserProfile.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-userprofile-tag.html}
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
 * Type definition for `AWS::SageMaker::UserProfile.UserSettings`.
 * A collection of settings that apply to users of Amazon SageMaker Studio. These settings are specified when the CreateUserProfile API is called, and as DefaultUserSettings when the CreateDomain API is called.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-userprofile-usersettings.html}
 */
export type UserSettings = {
  /**
   * The CodeEditor app settings.
   */
  CodeEditorAppSettings?: CodeEditorAppSettings;
  /**
   * @minLength `0`
   * @maxLength `2`
   */
  CustomFileSystemConfigs?: CustomFileSystemConfig[];
  CustomPosixUserConfig?: CustomPosixUserConfig;
  /**
   * Defines which Amazon SageMaker application users are directed to by default.
   * @maxLength `1023`
   */
  DefaultLandingUri?: string;
  /**
   * The user profile Amazon Resource Name (ARN).
   * @minLength `20`
   * @maxLength `2048`
   * @pattern `^arn:aws[a-z\-]*:iam::\d{12}:role/?[a-zA-Z_0-9+=,.@\-_/]+$`
   */
  ExecutionRole?: string;
  /**
   * The JupyterLab app settings.
   */
  JupyterLabAppSettings?: JupyterLabAppSettings;
  /**
   * The Jupyter server's app settings.
   */
  JupyterServerAppSettings?: JupyterServerAppSettings;
  /**
   * The kernel gateway app settings.
   */
  KernelGatewayAppSettings?: KernelGatewayAppSettings;
  /**
   * A collection of settings that configure user interaction with the RStudioServerPro app.
   */
  RStudioServerProAppSettings?: RStudioServerProAppSettings;
  /**
   * The security groups for the Amazon Virtual Private Cloud (VPC) that Studio uses for communication.
   * @minLength `0`
   * @maxLength `5`
   */
  SecurityGroups?: string[];
  /**
   * The sharing settings.
   */
  SharingSettings?: SharingSettings;
  /**
   * Default storage settings for a space.
   */
  SpaceStorageSettings?: DefaultSpaceStorageSettings;
  /**
   * Indicates whether the Studio experience is available to users. If not, users cannot access Studio.
   */
  StudioWebPortal?: "ENABLED" | "DISABLED";
  /**
   * Studio settings. If these settings are applied on a user level, they take priority over the settings applied on a domain level.
   */
  StudioWebPortalSettings?: StudioWebPortalSettings;
};
/**
 * Resource Type definition for AWS::SageMaker::UserProfile
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-userprofile.html}
 */
export class SageMakerUserProfile extends $Resource<
  "AWS::SageMaker::UserProfile",
  SageMakerUserProfileProperties,
  SageMakerUserProfileAttributes
> {
  public static readonly Type = "AWS::SageMaker::UserProfile";
  constructor(
    logicalId: string,
    properties: SageMakerUserProfileProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, SageMakerUserProfile.Type, properties, options);
  }
}
