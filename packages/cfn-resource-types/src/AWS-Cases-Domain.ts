import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::Cases::Domain`.
 * A domain, which is a container for all case data, such as cases, fields, templates and layouts. Each Amazon Connect instance can be associated with only one Cases domain.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cases-domain.html}
 */
export type CasesDomainProperties = {
  /**
   * The name for your Cases domain. It must be unique for your AWS account.
   * @minLength `1`
   * @maxLength `100`
   * @pattern `^.*[\S]$`
   */
  Name: string;
  /**
   * The tags that you attach to this domain.
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::Cases::Domain`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cases-domain.html#aws-resource-cases-domain-return-values}
 */
export type CasesDomainAttributes = {
  /**
   * The time at which the domain was created.
   */
  CreatedTime: string;
  /**
   * The Amazon Resource Name (ARN) for the Cases domain.
   * @minLength `1`
   * @maxLength `500`
   */
  DomainArn: string;
  /**
   * The unique identifier of the Cases domain.
   * @minLength `1`
   * @maxLength `500`
   */
  DomainId: string;
  /**
   * The current status of the Cases domain. Indicates whether the domain is Active, CreationInProgress, or CreationFailed.
   */
  DomainStatus: DomainStatus;
};
/**
 * Type definition for `AWS::Cases::Domain.DomainStatus`.
 * The current status of the Cases domain. Indicates whether the domain is Active, CreationInProgress, or CreationFailed.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cases-domain-domainstatus.html}
 */
export type DomainStatus = "Active" | "CreationInProgress" | "CreationFailed";
/**
 * Type definition for `AWS::Cases::Domain.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cases-domain-tag.html}
 */
export type Tag = {
  /**
   * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @minLength `1`
   * @maxLength `128`
   * @pattern `^(?!aws:)[a-zA-Z+-=._:/]+$`
   */
  Key: string;
  /**
   * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @minLength `0`
   * @maxLength `256`
   */
  Value: string;
};
/**
 * Resource type definition for `AWS::Cases::Domain`.
 * A domain, which is a container for all case data, such as cases, fields, templates and layouts. Each Amazon Connect instance can be associated with only one Cases domain.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cases-domain.html}
 */
export class CasesDomain extends $Resource<
  "AWS::Cases::Domain",
  CasesDomainProperties,
  CasesDomainAttributes
> {
  public static readonly Type = "AWS::Cases::Domain";
  constructor(
    logicalId: string,
    properties: CasesDomainProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, CasesDomain.Type, properties, options);
  }
}
