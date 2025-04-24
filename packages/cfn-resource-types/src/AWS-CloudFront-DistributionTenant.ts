import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::CloudFront::DistributionTenant
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-distributiontenant.html}
 */
export type CloudFrontDistributionTenantProperties = {
  ConnectionGroupId?: string;
  Customizations?: Customizations;
  DistributionId: string;
  Domains: string[];
  Enabled?: boolean;
  ManagedCertificateRequest?: ManagedCertificateRequest;
  Name: string;
  Parameters?: Parameter[];
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::CloudFront::DistributionTenant`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-distributiontenant.html#aws-resource-cloudfront-distributiontenant-return-values}
 */
export type CloudFrontDistributionTenantAttributes = {
  Arn: string;
  CreatedTime: string;
  DomainResults: {
    Domain: string;
    Reason:
      | "pending-validation"
      | "validation-failed"
      | "pending-activation"
      | "customer-activated";
    Status: "active" | "inactive";
  }[];
  ETag: string;
  Id: string;
  LastModifiedTime: string;
  Status: string;
};
/**
 * Type definition for `AWS::CloudFront::DistributionTenant.Certificate`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-distributiontenant-certificate.html}
 */
export type Certificate = {
  Arn?: string;
};
/**
 * Type definition for `AWS::CloudFront::DistributionTenant.Customizations`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-distributiontenant-customizations.html}
 */
export type Customizations = {
  Certificate?: Certificate;
  GeoRestrictions?: GeoRestrictionCustomization;
  WebAcl?: WebAclCustomization;
};
/**
 * Type definition for `AWS::CloudFront::DistributionTenant.DomainResult`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-distributiontenant-domainresult.html}
 */
export type DomainResult = {
  Domain?: string;
  Reason?:
    | "pending-validation"
    | "validation-failed"
    | "pending-activation"
    | "customer-activated";
  Status?: "active" | "inactive";
};
/**
 * Type definition for `AWS::CloudFront::DistributionTenant.GeoRestrictionCustomization`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-distributiontenant-georestrictioncustomization.html}
 */
export type GeoRestrictionCustomization = {
  Locations?: string[];
  RestrictionType?: "blacklist" | "whitelist" | "none";
};
/**
 * Type definition for `AWS::CloudFront::DistributionTenant.ManagedCertificateRequest`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-distributiontenant-managedcertificaterequest.html}
 */
export type ManagedCertificateRequest = {
  CertificateTransparencyLoggingPreference?: "enabled" | "disabled";
  PrimaryDomainName?: string;
  ValidationTokenHost?: "cloudfront" | "self-hosted";
};
/**
 * Type definition for `AWS::CloudFront::DistributionTenant.Parameter`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-distributiontenant-parameter.html}
 */
export type Parameter = {
  Name?: string;
  Value?: string;
};
/**
 * Type definition for `AWS::CloudFront::DistributionTenant.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-distributiontenant-tag.html}
 */
export type Tag = {
  Key: string;
  Value: string;
};
/**
 * Type definition for `AWS::CloudFront::DistributionTenant.WebAclCustomization`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-distributiontenant-webaclcustomization.html}
 */
export type WebAclCustomization = {
  Action?: "override" | "disable";
  Arn?: string;
};
/**
 * Resource Type definition for AWS::CloudFront::DistributionTenant
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-distributiontenant.html}
 */
export class CloudFrontDistributionTenant extends $Resource<
  "AWS::CloudFront::DistributionTenant",
  CloudFrontDistributionTenantProperties,
  CloudFrontDistributionTenantAttributes
> {
  public static readonly Type = "AWS::CloudFront::DistributionTenant";
  constructor(
    logicalId: string,
    properties: CloudFrontDistributionTenantProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, CloudFrontDistributionTenant.Type, properties, options);
  }
}
