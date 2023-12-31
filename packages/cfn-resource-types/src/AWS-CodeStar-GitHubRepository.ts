import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource Type definition for AWS::CodeStar::GitHubRepository
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codestar-githubrepository.html}
 */
export type CodeStarGitHubRepositoryProperties = {
  Code?: Code;
  ConnectionArn?: string;
  EnableIssues?: boolean;
  IsPrivate?: boolean;
  RepositoryAccessToken?: string;
  RepositoryDescription?: string;
  RepositoryName: string;
  RepositoryOwner: string;
};
/**
 * Attribute type definition for `AWS::CodeStar::GitHubRepository`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codestar-githubrepository.html#aws-resource-codestar-githubrepository-return-values}
 */
export type CodeStarGitHubRepositoryAttributes = {
  Id: string;
};
/**
 * Type definition for `AWS::CodeStar::GitHubRepository.Code`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codestar-githubrepository-code.html}
 */
export type Code = {
  S3: S3;
};
/**
 * Type definition for `AWS::CodeStar::GitHubRepository.S3`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codestar-githubrepository-s3.html}
 */
export type S3 = {
  Bucket: string;
  Key: string;
  ObjectVersion?: string;
};
/**
 * Resource Type definition for AWS::CodeStar::GitHubRepository
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codestar-githubrepository.html}
 */
export class CodeStarGitHubRepository extends $Resource<
  "AWS::CodeStar::GitHubRepository",
  CodeStarGitHubRepositoryProperties,
  CodeStarGitHubRepositoryAttributes
> {
  public static readonly Type = "AWS::CodeStar::GitHubRepository";
  public static readonly AttributeNames = ["Id" as const];
  constructor(
    logicalId: string,
    properties: CodeStarGitHubRepositoryProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      CodeStarGitHubRepository.Type,
      properties,
      CodeStarGitHubRepository.AttributeNames,
      options,
    );
  }
}
