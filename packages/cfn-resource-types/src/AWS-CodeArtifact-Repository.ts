import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::CodeArtifact::Repository`.
 * The resource schema to create a CodeArtifact repository.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codeartifact-repository.html}
 */
export type CodeArtifactRepositoryProperties = {
  /**
   * A text description of the repository.
   * @maxLength `1000`
   */
  Description?: string;
  /**
   * The name of the domain that contains the repository.
   * @minLength `2`
   * @maxLength `50`
   * @pattern `^([a-z][a-z0-9\-]{0,48}[a-z0-9])$`
   */
  DomainName: string;
  /**
   * A list of external connections associated with the repository.
   */
  ExternalConnections?: string[];
  /**
   * The access control resource policy on the provided repository.
   */
  PermissionsPolicyDocument?: Record<string, any>;
  /**
   * The name of the repository.
   * @minLength `2`
   * @maxLength `100`
   * @pattern `^([A-Za-z0-9][A-Za-z0-9._\-]{1,99})$`
   */
  RepositoryName: string;
  /**
   * An array of key-value pairs to apply to this resource.
   */
  Tags?: Tag[];
  /**
   * A list of upstream repositories associated with the repository.
   */
  Upstreams?: string[];
};
/**
 * Attribute type definition for `AWS::CodeArtifact::Repository`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codeartifact-repository.html#aws-resource-codeartifact-repository-return-values}
 */
export type CodeArtifactRepositoryAttributes = {
  /**
   * The ARN of the repository.
   * @minLength `1`
   * @maxLength `2048`
   */
  Arn: string;
  /**
   * The 12-digit account ID of the AWS account that owns the domain.
   * @pattern `[0-9]{12}`
   */
  DomainOwner: string;
  /**
   * The name of the repository. This is used for GetAtt
   * @minLength `2`
   * @maxLength `100`
   * @pattern `^([A-Za-z0-9][A-Za-z0-9._\-]{1,99})$`
   */
  Name: string;
};
/**
 * Type definition for `AWS::CodeArtifact::Repository.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codeartifact-repository-tag.html}
 */
export type Tag = {
  /**
   * The key name of the tag. You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @minLength `1`
   * @maxLength `128`
   */
  Key: string;
  /**
   * The value for the tag. You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @minLength `0`
   * @maxLength `256`
   */
  Value: string;
};
/**
 * Resource type definition for `AWS::CodeArtifact::Repository`.
 * The resource schema to create a CodeArtifact repository.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codeartifact-repository.html}
 */
export class CodeArtifactRepository extends $Resource<
  "AWS::CodeArtifact::Repository",
  CodeArtifactRepositoryProperties,
  CodeArtifactRepositoryAttributes
> {
  public static readonly Type = "AWS::CodeArtifact::Repository";
  constructor(
    logicalId: string,
    properties: CodeArtifactRepositoryProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, CodeArtifactRepository.Type, properties, options);
  }
}
