import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::SageMaker::Domain
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-domain.html}
 */
export type SageMakerDomainProperties = {
  /**
   * Specifies the VPC used for non-EFS traffic. The default value is PublicInternetOnly.
   */
  AppNetworkAccessType?: "PublicInternetOnly" | "VpcOnly";
  /**
   * The entity that creates and manages the required security groups for inter-app communication in VPCOnly mode. Required when CreateDomain.AppNetworkAccessType is VPCOnly and DomainSettings.RStudioServerProDomainSettings.DomainExecutionRoleArn is provided.
   */
  AppSecurityGroupManagement?: "Service" | "Customer";
  /**
   * The mode of authentication that members use to access the domain.
   */
  AuthMode: "SSO" | "IAM";
  /**
   * The default space settings.
   */
  DefaultSpaceSettings?: DefaultSpaceSettings;
  /**
   * The default user settings.
   */
  DefaultUserSettings: UserSettings;
  /**
   * A name for the domain.
   * @maxLength `63`
   * @pattern `^[a-zA-Z0-9](-*[a-zA-Z0-9]){0,62}`
   */
  DomainName: string;
  /**
   * A collection of Domain settings.
   */
  DomainSettings?: DomainSettings;
  /**
   * SageMaker uses AWS KMS to encrypt the EFS volume attached to the domain with an AWS managed customer master key (CMK) by default.
   * @maxLength `2048`
   * @pattern `.*`
   */
  KmsKeyId?: string;
  /**
   * The VPC subnets that Studio uses for communication.
   * @minLength `1`
   * @maxLength `16`
   */
  SubnetIds: string[];
  /**
   * A list of tags to apply to the user profile.
   * @minLength `0`
   * @maxLength `50`
   */
  Tags?: Tag[];
  /**
   * The ID of the Amazon Virtual Private Cloud (VPC) that Studio uses for communication.
   * @maxLength `32`
   * @pattern `[-0-9a-zA-Z]+`
   */
  VpcId: string;
};
/**
 * Attribute type definition for `AWS::SageMaker::Domain`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-domain.html#aws-resource-sagemaker-domain-return-values}
 */
export type SageMakerDomainAttributes = {
  /**
   * The Amazon Resource Name (ARN) of the created domain.
   * @maxLength `256`
   * @pattern `arn:aws[a-z\-]*:sagemaker:[a-z0-9\-]*:[0-9]{12}:domain/.*`
   */
  DomainArn: string;
  /**
   * The domain name.
   * @maxLength `63`
   * @pattern `^d-(-*[a-z0-9])+`
   */
  DomainId: string;
  /**
   * The ID of the Amazon Elastic File System (EFS) managed by this Domain.
   * @maxLength `32`
   */
  HomeEfsFileSystemId: string;
  /**
   * The ID of the security group that authorizes traffic between the RSessionGateway apps and the RStudioServerPro app.
   * @maxLength `32`
   * @pattern `[-0-9a-zA-Z]+`
   */
  SecurityGroupIdForDomainBoundary: string;
  /**
   * The ARN of the application managed by SageMaker in IAM Identity Center. This value is only returned for domains created after October 1, 2023.
   * @pattern `^arn:(aws|aws-us-gov|aws-cn|aws-iso|aws-iso-b):sso::[0-9]+:application/[a-zA-Z0-9-_.]+/apl-[a-zA-Z0-9]+$`
   */
  SingleSignOnApplicationArn: string;
  /**
   * The SSO managed application instance ID.
   * @maxLength `256`
   */
  SingleSignOnManagedApplicationInstanceId: string;
  /**
   * The URL to the created domain.
   * @maxLength `1024`
   */
  Url: string;
};
/**
 * Type definition for `AWS::SageMaker::Domain.CodeEditorAppSettings`.
 * The CodeEditor app settings.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-domain-codeeditorappsettings.html}
 */
export type CodeEditorAppSettings = {
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
 * Type definition for `AWS::SageMaker::Domain.CodeRepository`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-domain-coderepository.html}
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
 * Type definition for `AWS::SageMaker::Domain.CustomFileSystemConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-domain-customfilesystemconfig.html}
 */
export type CustomFileSystemConfig = {
  EFSFileSystemConfig?: EFSFileSystemConfig;
};
/**
 * Type definition for `AWS::SageMaker::Domain.CustomImage`.
 * A custom SageMaker image.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-domain-customimage.html}
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
 * Type definition for `AWS::SageMaker::Domain.CustomPosixUserConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-domain-customposixuserconfig.html}
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
 * Type definition for `AWS::SageMaker::Domain.DefaultEbsStorageSettings`.
 * Properties related to the Amazon Elastic Block Store volume. Must be provided if storage type is Amazon EBS and must not be provided if storage type is not Amazon EBS
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-domain-defaultebsstoragesettings.html}
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
 * Type definition for `AWS::SageMaker::Domain.DefaultSpaceSettings`.
 * A collection of settings that apply to spaces of Amazon SageMaker Studio. These settings are specified when the Create/Update Domain API is called.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-domain-defaultspacesettings.html}
 */
export type DefaultSpaceSettings = {
  /**
   * The execution role for the space.
   * @minLength `20`
   * @maxLength `2048`
   * @pattern `^arn:aws[a-z\-]*:iam::\d{12}:role/?[a-zA-Z_0-9+=,.@\-_/]+$`
   */
  ExecutionRole: string;
  /**
   * The Jupyter server's app settings.
   */
  JupyterServerAppSettings?: JupyterServerAppSettings;
  /**
   * The kernel gateway app settings.
   */
  KernelGatewayAppSettings?: KernelGatewayAppSettings;
  /**
   * The security groups for the Amazon Virtual Private Cloud (VPC) that Studio uses for communication.
   * @minLength `0`
   * @maxLength `5`
   */
  SecurityGroups?: string[];
};
/**
 * Type definition for `AWS::SageMaker::Domain.DefaultSpaceStorageSettings`.
 * Default storage settings for a space.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-domain-defaultspacestoragesettings.html}
 */
export type DefaultSpaceStorageSettings = {
  /**
   * Properties related to the Amazon Elastic Block Store volume. Must be provided if storage type is Amazon EBS and must not be provided if storage type is not Amazon EBS
   */
  DefaultEbsStorageSettings?: DefaultEbsStorageSettings;
};
/**
 * Type definition for `AWS::SageMaker::Domain.DomainSettings`.
 * A collection of Domain settings.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-domain-domainsettings.html}
 */
export type DomainSettings = {
  /**
   * A collection of settings that update the current configuration for the RStudioServerPro Domain-level app.
   */
  RStudioServerProDomainSettings?: RStudioServerProDomainSettings;
  /**
   * The security groups for the Amazon Virtual Private Cloud that the Domain uses for communication between Domain-level apps and user apps.
   * @minLength `1`
   * @maxLength `3`
   */
  SecurityGroupIds?: string[];
};
/**
 * Type definition for `AWS::SageMaker::Domain.EFSFileSystemConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-domain-efsfilesystemconfig.html}
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
 * Type definition for `AWS::SageMaker::Domain.JupyterLabAppSettings`.
 * The JupyterLab app settings.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-domain-jupyterlabappsettings.html}
 */
export type JupyterLabAppSettings = {
  /**
   * A list of CodeRepositories available for use with JupyterLab apps.
   * @minLength `0`
   * @maxLength `30`
   */
  CodeRepositories?: CodeRepository[];
  /**
   * A list of custom images for use for JupyterLab apps.
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
 * Type definition for `AWS::SageMaker::Domain.JupyterServerAppSettings`.
 * The JupyterServer app settings.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-domain-jupyterserverappsettings.html}
 */
export type JupyterServerAppSettings = {
  DefaultResourceSpec?: ResourceSpec;
};
/**
 * Type definition for `AWS::SageMaker::Domain.KernelGatewayAppSettings`.
 * The kernel gateway app settings.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-domain-kernelgatewayappsettings.html}
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
};
/**
 * Type definition for `AWS::SageMaker::Domain.ResourceSpec`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-domain-resourcespec.html}
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
   * The Amazon Resource Name (ARN) of the SageMaker image that the image version belongs to.
   * @maxLength `256`
   * @pattern `^arn:aws(-[\w]+)*:sagemaker:.+:[0-9]{12}:image/[a-z0-9]([-.]?[a-z0-9])*$`
   */
  SageMakerImageArn?: string;
  /**
   * The Amazon Resource Name (ARN) of the image version created on the instance.
   * @maxLength `256`
   * @pattern `^arn:aws(-[\w]+)*:sagemaker:.+:[0-9]{12}:image-version/[a-z0-9]([-.]?[a-z0-9])/‍*[0-9]+$`
   */
  SageMakerImageVersionArn?: string;
};
/**
 * Type definition for `AWS::SageMaker::Domain.RSessionAppSettings`.
 * A collection of settings that apply to an RSessionGateway app.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-domain-rsessionappsettings.html}
 */
export type RSessionAppSettings = {
  /**
   * A list of custom SageMaker images that are configured to run as a KernelGateway app.
   * @minLength `0`
   * @maxLength `30`
   */
  CustomImages?: CustomImage[];
  DefaultResourceSpec?: ResourceSpec;
};
/**
 * Type definition for `AWS::SageMaker::Domain.RStudioServerProAppSettings`.
 * A collection of settings that configure user interaction with the RStudioServerPro app.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-domain-rstudioserverproappsettings.html}
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
 * Type definition for `AWS::SageMaker::Domain.RStudioServerProDomainSettings`.
 * A collection of settings that update the current configuration for the RStudioServerPro Domain-level app.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-domain-rstudioserverprodomainsettings.html}
 */
export type RStudioServerProDomainSettings = {
  DefaultResourceSpec?: ResourceSpec;
  /**
   * The ARN of the execution role for the RStudioServerPro Domain-level app.
   * @minLength `20`
   * @maxLength `2048`
   * @pattern `^arn:aws[a-z\-]*:iam::\d{12}:role/?[a-zA-Z_0-9+=,.@\-_/]+$`
   */
  DomainExecutionRoleArn: string;
  /**
   * A URL pointing to an RStudio Connect server.
   * @pattern `^(https:|http:|www\.)\S*`
   */
  RStudioConnectUrl?: string;
  /**
   * A URL pointing to an RStudio Package Manager server.
   * @pattern `^(https:|http:|www\.)\S*`
   */
  RStudioPackageManagerUrl?: string;
};
/**
 * Type definition for `AWS::SageMaker::Domain.SharingSettings`.
 * Specifies options when sharing an Amazon SageMaker Studio notebook. These settings are specified as part of DefaultUserSettings when the CreateDomain API is called, and as part of UserSettings when the CreateUserProfile API is called.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-domain-sharingsettings.html}
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
 * Type definition for `AWS::SageMaker::Domain.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-domain-tag.html}
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
 * Type definition for `AWS::SageMaker::Domain.UserSettings`.
 * A collection of settings that apply to users of Amazon SageMaker Studio. These settings are specified when the CreateUserProfile API is called, and as DefaultUserSettings when the CreateDomain API is called.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-domain-usersettings.html}
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
   * The execution role for the user.
   * @minLength `20`
   * @maxLength `2048`
   * @pattern `^arn:aws[a-z\-]*:iam::\d{12}:role/?[a-zA-Z_0-9+=,.@\-_/]+$`
   */
  ExecutionRole: string;
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
   * A collection of settings that apply to an RSessionGateway app.
   */
  RSessionAppSettings?: RSessionAppSettings;
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
};
/**
 * Resource Type definition for AWS::SageMaker::Domain
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-domain.html}
 */
export class SageMakerDomain extends $Resource<
  "AWS::SageMaker::Domain",
  SageMakerDomainProperties,
  SageMakerDomainAttributes
> {
  public static readonly Type = "AWS::SageMaker::Domain";
  constructor(
    logicalId: string,
    properties: SageMakerDomainProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, SageMakerDomain.Type, properties, options);
  }
}
