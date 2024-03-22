import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::CodeArtifact::PackageGroup`.
 * The resource schema to create a CodeArtifact package group.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codeartifact-packagegroup.html}
 */
export type CodeArtifactPackageGroupProperties = {
  /**
   * The contact info of the package group.
   * @maxLength `1000`
   */
  ContactInfo?: string;
  /**
   * The text description of the package group.
   * @maxLength `1000`
   */
  Description?: string;
  /**
   * The name of the domain that contains the package group.
   * @minLength `2`
   * @maxLength `50`
   * @pattern `^([a-z][a-z0-9\-]{0,48}[a-z0-9])$`
   */
  DomainName: string;
  /**
   * The 12-digit account ID of the AWS account that owns the domain.
   * @pattern `[0-9]{12}`
   */
  DomainOwner?: string;
  /**
   * The package origin configuration of the package group.
   */
  OriginConfiguration?: OriginConfiguration;
  /**
   * The package group pattern that is used to gather packages.
   * @minLength `2`
   * @maxLength `520`
   */
  Pattern: string;
  /**
   * An array of key-value pairs to apply to the package group.
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::CodeArtifact::PackageGroup`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codeartifact-packagegroup.html#aws-resource-codeartifact-packagegroup-return-values}
 */
export type CodeArtifactPackageGroupAttributes = {
  /**
   * The ARN of the package group.
   * @minLength `1`
   * @maxLength `2048`
   */
  Arn: string;
};
/**
 * Type definition for `AWS::CodeArtifact::PackageGroup.OriginConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codeartifact-packagegroup-originconfiguration.html}
 */
export type OriginConfiguration = {
  /**
   * The origin configuration that is applied to the package group.
   */
  Restrictions: Restrictions;
};
/**
 * Type definition for `AWS::CodeArtifact::PackageGroup.Restrictions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codeartifact-packagegroup-restrictions.html}
 */
export type Restrictions = {
  /**
   * The external upstream restriction determines if new package versions can be ingested or retained from external connections.
   */
  ExternalUpstream?: RestrictionType;
  /**
   * The internal upstream restriction determines if new package versions can be ingested or retained from upstream repositories.
   */
  InternalUpstream?: RestrictionType;
  /**
   * The publish restriction determines if new package versions can be published.
   */
  Publish?: RestrictionType;
};
/**
 * Type definition for `AWS::CodeArtifact::PackageGroup.RestrictionType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codeartifact-packagegroup-restrictiontype.html}
 */
export type RestrictionType = {
  Repositories?: string[];
  RestrictionMode:
    | "ALLOW"
    | "BLOCK"
    | "ALLOW_SPECIFIC_REPOSITORIES"
    | "INHERIT";
};
/**
 * Type definition for `AWS::CodeArtifact::PackageGroup.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codeartifact-packagegroup-tag.html}
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
 * Resource type definition for `AWS::CodeArtifact::PackageGroup`.
 * The resource schema to create a CodeArtifact package group.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codeartifact-packagegroup.html}
 */
export class CodeArtifactPackageGroup extends $Resource<
  "AWS::CodeArtifact::PackageGroup",
  CodeArtifactPackageGroupProperties,
  CodeArtifactPackageGroupAttributes
> {
  public static readonly Type = "AWS::CodeArtifact::PackageGroup";
  constructor(
    logicalId: string,
    properties: CodeArtifactPackageGroupProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, CodeArtifactPackageGroup.Type, properties, options);
  }
}
