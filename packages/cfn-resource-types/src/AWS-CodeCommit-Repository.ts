import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::CodeCommit::Repository
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codecommit-repository.html}
 */
export type CodeCommitRepositoryProperties = {
  Code?: Code;
  KmsKeyId?: string;
  RepositoryDescription?: string;
  RepositoryName: string;
  Tags?: Tag[];
  Triggers?: RepositoryTrigger[];
};
/**
 * Attribute type definition for `AWS::CodeCommit::Repository`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codecommit-repository.html#aws-resource-codecommit-repository-return-values}
 */
export type CodeCommitRepositoryAttributes = {
  Arn: string;
  CloneUrlHttp: string;
  CloneUrlSsh: string;
  Id: string;
  Name: string;
};
/**
 * Type definition for `AWS::CodeCommit::Repository.Code`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codecommit-repository-code.html}
 */
export type Code = {
  BranchName?: string;
  S3: S3;
};
/**
 * Type definition for `AWS::CodeCommit::Repository.RepositoryTrigger`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codecommit-repository-repositorytrigger.html}
 */
export type RepositoryTrigger = {
  Branches?: string[];
  CustomData?: string;
  DestinationArn: string;
  Events: string[];
  Name: string;
};
/**
 * Type definition for `AWS::CodeCommit::Repository.S3`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codecommit-repository-s3.html}
 */
export type S3 = {
  Bucket: string;
  Key: string;
  ObjectVersion?: string;
};
/**
 * Type definition for `AWS::CodeCommit::Repository.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codecommit-repository-tag.html}
 */
export type Tag = {
  Key: string;
  Value: string;
};
/**
 * Resource Type definition for AWS::CodeCommit::Repository
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codecommit-repository.html}
 */
export class CodeCommitRepository extends $Resource<
  "AWS::CodeCommit::Repository",
  CodeCommitRepositoryProperties,
  CodeCommitRepositoryAttributes
> {
  public static readonly Type = "AWS::CodeCommit::Repository";
  constructor(
    logicalId: string,
    properties: CodeCommitRepositoryProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, CodeCommitRepository.Type, properties, options);
  }
}
