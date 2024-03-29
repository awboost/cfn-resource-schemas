import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::CodeArtifact::Domain`.
 * The resource schema to create a CodeArtifact domain.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codeartifact-domain.html}
 */
export type CodeArtifactDomainProperties = {
  /**
   * The name of the domain.
   * @minLength `2`
   * @maxLength `50`
   * @pattern `^([a-z][a-z0-9\-]{0,48}[a-z0-9])$`
   */
  DomainName: string;
  /**
   * The access control resource policy on the provided domain.
   */
  PermissionsPolicyDocument?: Record<string, any>;
  /**
   * An array of key-value pairs to apply to this resource.
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::CodeArtifact::Domain`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codeartifact-domain.html#aws-resource-codeartifact-domain-return-values}
 */
export type CodeArtifactDomainAttributes = {
  /**
   * The ARN of the domain.
   * @minLength `1`
   * @maxLength `2048`
   */
  Arn: string;
  /**
   * The ARN of an AWS Key Management Service (AWS KMS) key associated with a domain.
   */
  EncryptionKey: string;
  /**
   * The name of the domain. This field is used for GetAtt
   * @minLength `2`
   * @maxLength `50`
   * @pattern `^([a-z][a-z0-9\-]{0,48}[a-z0-9])$`
   */
  Name: string;
  /**
   * The 12-digit account ID of the AWS account that owns the domain. This field is used for GetAtt
   * @pattern `[0-9]{12}`
   */
  Owner: string;
};
/**
 * Type definition for `AWS::CodeArtifact::Domain.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codeartifact-domain-tag.html}
 */
export type Tag = {
  /**
   * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @minLength `1`
   * @maxLength `128`
   */
  Key: string;
  /**
   * The value for the tag. You can specify a value that is 1 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @minLength `1`
   * @maxLength `256`
   */
  Value: string;
};
/**
 * Resource type definition for `AWS::CodeArtifact::Domain`.
 * The resource schema to create a CodeArtifact domain.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codeartifact-domain.html}
 */
export class CodeArtifactDomain extends $Resource<
  "AWS::CodeArtifact::Domain",
  CodeArtifactDomainProperties,
  CodeArtifactDomainAttributes
> {
  public static readonly Type = "AWS::CodeArtifact::Domain";
  constructor(
    logicalId: string,
    properties: CodeArtifactDomainProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, CodeArtifactDomain.Type, properties, options);
  }
}
