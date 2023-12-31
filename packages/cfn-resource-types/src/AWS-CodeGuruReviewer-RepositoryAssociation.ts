import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::CodeGuruReviewer::RepositoryAssociation`.
 * This resource schema represents the RepositoryAssociation resource in the Amazon CodeGuru Reviewer service.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codegurureviewer-repositoryassociation.html}
 */
export type CodeGuruReviewerRepositoryAssociationProperties = {
  /**
   * The name of the S3 bucket associated with an associated S3 repository. It must start with `codeguru-reviewer-`.
   * @minLength `3`
   * @maxLength `63`
   * @pattern `^\S(.*\S)?$`
   */
  BucketName?: string;
  /**
   * The Amazon Resource Name (ARN) of an AWS CodeStar Connections connection.
   * @minLength `0`
   * @maxLength `256`
   * @pattern `arn:aws(-[\w]+)*:.+:.+:[0-9]{12}:.+`
   */
  ConnectionArn?: string;
  /**
   * Name of the repository to be associated.
   * @minLength `1`
   * @maxLength `100`
   * @pattern `^\S[\w.-]*$`
   */
  Name: string;
  /**
   * The owner of the repository. For a Bitbucket repository, this is the username for the account that owns the repository.
   * @minLength `1`
   * @maxLength `100`
   * @pattern `^\S(.*\S)?$`
   */
  Owner?: string;
  /**
   * The tags associated with a repository association.
   * @maxLength `50`
   */
  Tags?: Tag[];
  /**
   * The type of repository to be associated.
   */
  Type: "CodeCommit" | "Bitbucket" | "GitHubEnterpriseServer" | "S3Bucket";
};
/**
 * Attribute type definition for `AWS::CodeGuruReviewer::RepositoryAssociation`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codegurureviewer-repositoryassociation.html#aws-resource-codegurureviewer-repositoryassociation-return-values}
 */
export type CodeGuruReviewerRepositoryAssociationAttributes = {
  /**
   * The Amazon Resource Name (ARN) of the repository association.
   * @minLength `0`
   * @maxLength `256`
   * @pattern `arn:aws(-[\w]+)*:.+:.+:[0-9]{12}:.+`
   */
  AssociationArn: string;
};
/**
 * Type definition for `AWS::CodeGuruReviewer::RepositoryAssociation.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codegurureviewer-repositoryassociation-tag.html}
 */
export type Tag = {
  /**
   * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. The allowed characters across services are: letters, numbers, and spaces representable in UTF-8, and the following characters: + - = . _ : / @.
   * @minLength `1`
   * @maxLength `128`
   */
  Key: string;
  /**
   * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length. The allowed characters across services are: letters, numbers, and spaces representable in UTF-8, and the following characters: + - = . _ : / @.
   * @minLength `0`
   * @maxLength `256`
   */
  Value: string;
};
/**
 * Resource type definition for `AWS::CodeGuruReviewer::RepositoryAssociation`.
 * This resource schema represents the RepositoryAssociation resource in the Amazon CodeGuru Reviewer service.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codegurureviewer-repositoryassociation.html}
 */
export class CodeGuruReviewerRepositoryAssociation extends $Resource<
  "AWS::CodeGuruReviewer::RepositoryAssociation",
  CodeGuruReviewerRepositoryAssociationProperties,
  CodeGuruReviewerRepositoryAssociationAttributes
> {
  public static readonly Type = "AWS::CodeGuruReviewer::RepositoryAssociation";
  constructor(
    logicalId: string,
    properties: CodeGuruReviewerRepositoryAssociationProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      CodeGuruReviewerRepositoryAssociation.Type,
      properties,
      options,
    );
  }
}
