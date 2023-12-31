import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
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
  public static readonly AttributeNames = [
    "AppSyncDomainName" as const,
    "HostedZoneId" as const,
  ];
  constructor(
    logicalId: string,
    properties: AppSyncDomainNameProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      AppSyncDomainName.Type,
      properties,
      AppSyncDomainName.AttributeNames,
      options,
    );
  }
}
