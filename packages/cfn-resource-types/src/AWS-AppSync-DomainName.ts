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
};
/**
 * Attribute type definition for `AWS::AppSync::DomainName`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-domainname.html#aws-resource-appsync-domainname-return-values}
 */
export type AppSyncDomainNameAttributes = {
  AppSyncDomainName: string;
  HostedZoneId: string;
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
