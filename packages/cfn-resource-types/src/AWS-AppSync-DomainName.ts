import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::AppSync::DomainName
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-domainname.html}
 */
export type AppSyncDomainNameProperties = {
  /**
   * @minLength `3`
   * @maxLength `2048`
   * @pattern `^arn:[a-z-]*:acm:[a-z0-9-]*:\d{12}:certificate/[0-9A-Za-z_/-]*$`
   */
  CertificateArn: string;
  /**
   * @minLength `0`
   * @maxLength `255`
   */
  Description?: string;
  /**
   * @minLength `1`
   * @maxLength `253`
   * @pattern `^(\*[a-z\d-]*\.)?([a-z\d-]+\.)+[a-z\d-]+$`
   */
  DomainName: string;
  /**
   * An arbitrary set of tags (key-value pairs) for this Domain Name.
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::AppSync::DomainName`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-domainname.html#aws-resource-appsync-domainname-return-values}
 */
export type AppSyncDomainNameAttributes = {
  AppSyncDomainName: string;
  /**
   * The Amazon Resource Name (ARN) for the Domain Name.
   */
  DomainNameArn: string;
  HostedZoneId: string;
};
/**
 * Type definition for `AWS::AppSync::DomainName.Tag`.
 * An arbitrary set of tags (key-value pairs) for this Domain Name.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appsync-domainname-tag.html}
 */
export type Tag = {
  /**
   * A string used to identify this tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @minLength `1`
   * @maxLength `128`
   * @pattern `^(?!aws:)[ a-zA-Z+-=._:/]+$`
   */
  Key: string;
  /**
   * A string containing the value for this tag. You can specify a maximum of 256 characters for a tag value.
   * @minLength `0`
   * @maxLength `256`
   * @pattern `^[\s\w+-=\.:/@]*$`
   */
  Value: string;
};
/**
 * Resource Type definition for AWS::AppSync::DomainName
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-domainname.html}
 */
export class AppSyncDomainName extends $Resource<
  "AWS::AppSync::DomainName",
  AppSyncDomainNameProperties,
  AppSyncDomainNameAttributes
> {
  public static readonly Type = "AWS::AppSync::DomainName";
  constructor(
    logicalId: string,
    properties: AppSyncDomainNameProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, AppSyncDomainName.Type, properties, options);
  }
}
