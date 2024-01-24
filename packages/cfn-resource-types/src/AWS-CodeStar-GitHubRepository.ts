import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
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
  constructor(
    logicalId: string,
    properties: CodeStarGitHubRepositoryProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, CodeStarGitHubRepository.Type, properties, options);
  }
}
