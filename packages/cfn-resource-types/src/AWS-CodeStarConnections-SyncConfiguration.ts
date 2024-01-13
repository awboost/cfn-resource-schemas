import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Schema for AWS::CodeStarConnections::SyncConfiguration resource which is used to enables an AWS resource to be synchronized from a source-provider.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codestarconnections-syncconfiguration.html}
 */
export type CodeStarConnectionsSyncConfigurationProperties = {
  /**
   * The name of the branch of the repository from which resources are to be synchronized,
   */
  Branch: string;
  /**
   * The source provider repository path of the sync configuration file of the respective SyncType.
   */
  ConfigFile: string;
  /**
   * A UUID that uniquely identifies the RepositoryLink that the SyncConfig is associated with.
   * @pattern `[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}`
   */
  RepositoryLinkId: string;
  /**
   * The name of the resource that is being synchronized to the repository.
   * @pattern `[a-za-z0-9_\.-]+`
   */
  ResourceName: string;
  /**
   * The IAM Role that allows AWS to update CloudFormation stacks based on content in the specified repository.
   */
  RoleArn: string;
  /**
   * The type of resource synchronization service that is to be configured, for example, CFN_STACK_SYNC.
   */
  SyncType: string;
};
/**
 * Attribute type definition for `AWS::CodeStarConnections::SyncConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codestarconnections-syncconfiguration.html#aws-resource-codestarconnections-syncconfiguration-return-values}
 */
export type CodeStarConnectionsSyncConfigurationAttributes = {
  /**
   * the ID of the entity that owns the repository.
   * @pattern `[a-za-z0-9_\.-]+`
   */
  OwnerId: string;
  /**
   * The name of the external provider where your third-party code repository is configured.
   * @pattern `^(GitHub|Bitbucket|GitHubEnterprise|GitLab)$`
   */
  ProviderType: string;
  /**
   * The name of the repository that is being synced to.
   * @pattern `[a-za-z0-9_\.-]+`
   */
  RepositoryName: string;
};
/**
 * Schema for AWS::CodeStarConnections::SyncConfiguration resource which is used to enables an AWS resource to be synchronized from a source-provider.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codestarconnections-syncconfiguration.html}
 */
export class CodeStarConnectionsSyncConfiguration extends $Resource<
  "AWS::CodeStarConnections::SyncConfiguration",
  CodeStarConnectionsSyncConfigurationProperties,
  CodeStarConnectionsSyncConfigurationAttributes
> {
  public static readonly Type = "AWS::CodeStarConnections::SyncConfiguration";
  constructor(
    logicalId: string,
    properties: CodeStarConnectionsSyncConfigurationProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      CodeStarConnectionsSyncConfiguration.Type,
      properties,
      options,
    );
  }
}
