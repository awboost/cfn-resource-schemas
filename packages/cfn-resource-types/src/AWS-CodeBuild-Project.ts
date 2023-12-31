import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::CodeBuild::Project
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codebuild-project.html}
 */
export type CodeBuildProjectProperties = {
  Artifacts: Artifacts;
  BadgeEnabled?: boolean;
  BuildBatchConfig?: ProjectBuildBatchConfig;
  Cache?: ProjectCache;
  ConcurrentBuildLimit?: number;
  Description?: string;
  EncryptionKey?: string;
  Environment: Environment;
  FileSystemLocations?: ProjectFileSystemLocation[];
  LogsConfig?: LogsConfig;
  Name?: string;
  QueuedTimeoutInMinutes?: number;
  ResourceAccessRole?: string;
  SecondaryArtifacts?: Artifacts[];
  SecondarySourceVersions?: ProjectSourceVersion[];
  SecondarySources?: Source[];
  ServiceRole: string;
  Source: Source;
  SourceVersion?: string;
  Tags?: Tag[];
  TimeoutInMinutes?: number;
  Triggers?: ProjectTriggers;
  Visibility?: string;
  VpcConfig?: VpcConfig;
};
/**
 * Attribute type definition for `AWS::CodeBuild::Project`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codebuild-project.html#aws-resource-codebuild-project-return-values}
 */
export type CodeBuildProjectAttributes = {
  Arn: string;
  Id: string;
};
/**
 * Type definition for `AWS::CodeBuild::Project.Artifacts`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codebuild-project-artifacts.html}
 */
export type Artifacts = {
  ArtifactIdentifier?: string;
  EncryptionDisabled?: boolean;
  Location?: string;
  Name?: string;
  NamespaceType?: string;
  OverrideArtifactName?: boolean;
  Packaging?: string;
  Path?: string;
  Type: string;
};
/**
 * Type definition for `AWS::CodeBuild::Project.BatchRestrictions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codebuild-project-batchrestrictions.html}
 */
export type BatchRestrictions = {
  ComputeTypesAllowed?: string[];
  MaximumBuildsAllowed?: number;
};
/**
 * Type definition for `AWS::CodeBuild::Project.BuildStatusConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codebuild-project-buildstatusconfig.html}
 */
export type BuildStatusConfig = {
  Context?: string;
  TargetUrl?: string;
};
/**
 * Type definition for `AWS::CodeBuild::Project.CloudWatchLogsConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codebuild-project-cloudwatchlogsconfig.html}
 */
export type CloudWatchLogsConfig = {
  GroupName?: string;
  Status: string;
  StreamName?: string;
};
/**
 * Type definition for `AWS::CodeBuild::Project.Environment`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codebuild-project-environment.html}
 */
export type Environment = {
  Certificate?: string;
  ComputeType?: string;
  EnvironmentVariables?: EnvironmentVariable[];
  Image: string;
  ImagePullCredentialsType?: string;
  PrivilegedMode?: boolean;
  RegistryCredential?: RegistryCredential;
  Type?: string;
};
/**
 * Type definition for `AWS::CodeBuild::Project.EnvironmentVariable`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codebuild-project-environmentvariable.html}
 */
export type EnvironmentVariable = {
  Name: string;
  Type?: string;
  Value: string;
};
/**
 * Type definition for `AWS::CodeBuild::Project.FilterGroup`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codebuild-project-filtergroup.html}
 */
export type FilterGroup = Record<string, any>;
/**
 * Type definition for `AWS::CodeBuild::Project.GitSubmodulesConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codebuild-project-gitsubmodulesconfig.html}
 */
export type GitSubmodulesConfig = {
  FetchSubmodules: boolean;
};
/**
 * Type definition for `AWS::CodeBuild::Project.LogsConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codebuild-project-logsconfig.html}
 */
export type LogsConfig = {
  CloudWatchLogs?: CloudWatchLogsConfig;
  S3Logs?: S3LogsConfig;
};
/**
 * Type definition for `AWS::CodeBuild::Project.ProjectBuildBatchConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codebuild-project-projectbuildbatchconfig.html}
 */
export type ProjectBuildBatchConfig = {
  BatchReportMode?: string;
  CombineArtifacts?: boolean;
  Restrictions?: BatchRestrictions;
  ServiceRole?: string;
  TimeoutInMins?: number;
};
/**
 * Type definition for `AWS::CodeBuild::Project.ProjectCache`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codebuild-project-projectcache.html}
 */
export type ProjectCache = {
  Location?: string;
  Modes?: string[];
  Type: string;
};
/**
 * Type definition for `AWS::CodeBuild::Project.ProjectFileSystemLocation`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codebuild-project-projectfilesystemlocation.html}
 */
export type ProjectFileSystemLocation = {
  Identifier: string;
  Location: string;
  MountOptions?: string;
  MountPoint: string;
  Type: string;
};
/**
 * Type definition for `AWS::CodeBuild::Project.ProjectSourceVersion`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codebuild-project-projectsourceversion.html}
 */
export type ProjectSourceVersion = {
  SourceIdentifier: string;
  SourceVersion?: string;
};
/**
 * Type definition for `AWS::CodeBuild::Project.ProjectTriggers`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codebuild-project-projecttriggers.html}
 */
export type ProjectTriggers = {
  BuildType?: string;
  FilterGroups?: FilterGroup[];
  Webhook?: boolean;
};
/**
 * Type definition for `AWS::CodeBuild::Project.RegistryCredential`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codebuild-project-registrycredential.html}
 */
export type RegistryCredential = {
  Credential: string;
  CredentialProvider: string;
};
/**
 * Type definition for `AWS::CodeBuild::Project.S3LogsConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codebuild-project-s3logsconfig.html}
 */
export type S3LogsConfig = {
  EncryptionDisabled?: boolean;
  Location?: string;
  Status: string;
};
/**
 * Type definition for `AWS::CodeBuild::Project.Source`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codebuild-project-source.html}
 */
export type Source = {
  Auth?: SourceAuth;
  BuildSpec?: string;
  BuildStatusConfig?: BuildStatusConfig;
  GitCloneDepth?: number;
  GitSubmodulesConfig?: GitSubmodulesConfig;
  InsecureSsl?: boolean;
  Location?: string;
  ReportBuildStatus?: boolean;
  SourceIdentifier?: string;
  Type: string;
};
/**
 * Type definition for `AWS::CodeBuild::Project.SourceAuth`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codebuild-project-sourceauth.html}
 */
export type SourceAuth = {
  Resource?: string;
  Type: string;
};
/**
 * Type definition for `AWS::CodeBuild::Project.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codebuild-project-tag.html}
 */
export type Tag = {
  Key: string;
  Value: string;
};
/**
 * Type definition for `AWS::CodeBuild::Project.VpcConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codebuild-project-vpcconfig.html}
 */
export type VpcConfig = {
  SecurityGroupIds?: string[];
  Subnets?: string[];
  VpcId?: string;
};
/**
 * Resource Type definition for AWS::CodeBuild::Project
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codebuild-project.html}
 */
export class CodeBuildProject extends $Resource<
  "AWS::CodeBuild::Project",
  CodeBuildProjectProperties,
  CodeBuildProjectAttributes
> {
  public static readonly Type = "AWS::CodeBuild::Project";
  constructor(
    logicalId: string,
    properties: CodeBuildProjectProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, CodeBuildProject.Type, properties, options);
  }
}
