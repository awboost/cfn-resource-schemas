import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Schema for AWS::CodeStarConnections::RepositoryLink resource which is used to aggregate repository metadata relevant to synchronizing source provider content to AWS Resources.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codestarconnections-repositorylink.html}
 */
export type CodeStarConnectionsRepositoryLinkProperties = {
  /**
   * The Amazon Resource Name (ARN) of the CodeStarConnection. The ARN is used as the connection reference when the connection is shared between AWS services.
   * @pattern `arn:(aws|aws-us-gov|aws-cn):.+:.+:[0-9]{12}:.+`
   */
  ConnectionArn: string;
  /**
   * The ARN of the KMS key that the customer can optionally specify to use to encrypt RepositoryLink properties. If not specified, a default key will be used.
   * @pattern `arn:(aws|aws-us-gov|aws-cn):.+:.+:[0-9]{12}:.+`
   */
  EncryptionKeyArn?: string;
  /**
   * the ID of the entity that owns the repository.
   * @pattern `[a-za-z0-9_\.-]+`
   */
  OwnerId: string;
  /**
   * The repository for which the link is being created.
   * @pattern `[a-za-z0-9_\.-]+`
   */
  RepositoryName: string;
  /**
   * Specifies the tags applied to a RepositoryLink.
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::CodeStarConnections::RepositoryLink`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codestarconnections-repositorylink.html#aws-resource-codestarconnections-repositorylink-return-values}
 */
export type CodeStarConnectionsRepositoryLinkAttributes = {
  /**
   * The name of the external provider where your third-party code repository is configured.
   * @pattern `^(GitHub|Bitbucket|GitHubEnterprise|GitLab)$`
   */
  ProviderType: string;
  /**
   * A unique Amazon Resource Name (ARN) to designate the repository link.
   * @pattern `arn:(aws|aws-us-gov|aws-cn):.+:.+:[0-9]{12}:.+`
   */
  RepositoryLinkArn: string;
  /**
   * A UUID that uniquely identifies the RepositoryLink.
   * @pattern `[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}`
   */
  RepositoryLinkId: string;
};
/**
 * Type definition for `AWS::CodeStarConnections::RepositoryLink.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codestarconnections-repositorylink-tag.html}
 */
export type Tag = {
  /**
   * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, , ., /, =, +, and -.
   * @minLength `1`
   * @maxLength `128`
   */
  Key: string;
  /**
   * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, , ., /, =, +, and -.
   * @minLength `0`
   * @maxLength `256`
   */
  Value: string;
};
/**
 * Schema for AWS::CodeStarConnections::RepositoryLink resource which is used to aggregate repository metadata relevant to synchronizing source provider content to AWS Resources.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codestarconnections-repositorylink.html}
 */
export class CodeStarConnectionsRepositoryLink extends $Resource<
  "AWS::CodeStarConnections::RepositoryLink",
  CodeStarConnectionsRepositoryLinkProperties,
  CodeStarConnectionsRepositoryLinkAttributes
> {
  public static readonly Type = "AWS::CodeStarConnections::RepositoryLink";
  constructor(
    logicalId: string,
    properties: CodeStarConnectionsRepositoryLinkProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      CodeStarConnectionsRepositoryLink.Type,
      properties,
      options,
    );
  }
}
