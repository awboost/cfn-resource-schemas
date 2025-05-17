import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::CloudFront::DistributionTenant`.
 * The distribution tenant.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-distributiontenant.html}
 */
export type CloudFrontDistributionTenantProperties = {
  /**
   * The ID of the connection group for the distribution tenant. If you don't specify a connection group, CloudFront uses the default connection group.
   */
  ConnectionGroupId?: string;
  /**
   * Customizations for the distribution tenant. For each distribution tenant, you can specify the geographic restrictions, and the Amazon Resource Names (ARNs) for the ACM certificate and WAF web ACL. These are specific values that you can override or disable from the multi-tenant distribution that was used to create the distribution tenant.
   */
  Customizations?: Customizations;
  /**
   * The ID of the multi-tenant distribution.
   */
  DistributionId: string;
  /**
   * The domains associated with the distribution tenant.
   */
  Domains: string[];
  /**
   * Indicates whether the distribution tenant is in an enabled state. If disabled, the distribution tenant won't serve traffic.
   */
  Enabled?: boolean;
  /**
   * An object that represents the request for the Amazon CloudFront managed ACM certificate.
   */
  ManagedCertificateRequest?: ManagedCertificateRequest;
  /**
   * The name of the distribution tenant.
   */
  Name: string;
  /**
   * A list of parameter values to add to the resource. A parameter is specified as a key-value pair. A valid parameter value must exist for any parameter that is marked as required in the multi-tenant distribution.
   */
  Parameters?: Parameter[];
  /**
   * A complex type that contains zero or more ``Tag`` elements.
   */
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
    /**
     * The specified domain.
     */
    Domain: string;
    /**
     * Whether the domain is active or inactive.
     */
    Status: "active" | "inactive";
  }[];
  ETag: string;
  Id: string;
  LastModifiedTime: string;
  Status: string;
};
/**
 * Type definition for `AWS::CloudFront::DistributionTenant.Certificate`.
 * The ACMlong (ACM) certificate associated with your distribution.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-distributiontenant-certificate.html}
 */
export type Certificate = {
  /**
   * The Amazon Resource Name (ARN) of the ACM certificate.
   */
  Arn?: string;
};
/**
 * Type definition for `AWS::CloudFront::DistributionTenant.Customizations`.
 * Customizations for the distribution tenant. For each distribution tenant, you can specify the geographic restrictions, and the Amazon Resource Names (ARNs) for the ACM certificate and WAF web ACL. These are specific values that you can override or disable from the multi-tenant distribution that was used to create the distribution tenant.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-distributiontenant-customizations.html}
 */
export type Customizations = {
  /**
   * The ACMlong (ACM) certificate.
   */
  Certificate?: Certificate;
  /**
   * The geographic restrictions.
   */
  GeoRestrictions?: GeoRestrictionCustomization;
  /**
   * The WAF web ACL.
   */
  WebAcl?: WebAclCustomization;
};
/**
 * Type definition for `AWS::CloudFront::DistributionTenant.DomainResult`.
 * The details about the domain result.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-distributiontenant-domainresult.html}
 */
export type DomainResult = {
  /**
   * The specified domain.
   */
  Domain?: string;
  /**
   * Whether the domain is active or inactive.
   */
  Status?: "active" | "inactive";
};
/**
 * Type definition for `AWS::CloudFront::DistributionTenant.GeoRestrictionCustomization`.
 * The customizations that you specified for the distribution tenant for geographic restrictions.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-distributiontenant-georestrictioncustomization.html}
 */
export type GeoRestrictionCustomization = {
  /**
   * The locations for geographic restrictions.
   */
  Locations?: string[];
  /**
     * The method that you want to use to restrict distribution of your content by country:
      +  ``none``: No geographic restriction is enabled, meaning access to content is not restricted by client geo location.
      +  ``blacklist``: The ``Location`` elements specify the countries in which you don't want CloudFront to distribute your content.
      +  ``whitelist``: The ``Location`` elements specify the countries in which you want CloudFront to distribute your content.
     */
  RestrictionType?: "blacklist" | "whitelist" | "none";
};
/**
 * Type definition for `AWS::CloudFront::DistributionTenant.ManagedCertificateRequest`.
 * An object that represents the request for the Amazon CloudFront managed ACM certificate.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-distributiontenant-managedcertificaterequest.html}
 */
export type ManagedCertificateRequest = {
  /**
   * You can opt out of certificate transparency logging by specifying the ``disabled`` option. Opt in by specifying ``enabled``. For more information, see [Certificate Transparency Logging](https://docs.aws.amazon.com/acm/latest/userguide/acm-concepts.html#concept-transparency) in the *User Guide*.
   */
  CertificateTransparencyLoggingPreference?: "enabled" | "disabled";
  /**
   * The primary domain name associated with the CloudFront managed ACM certificate.
   */
  PrimaryDomainName?: string;
  /**
     * Specify how the HTTP validation token will be served when requesting the CloudFront managed ACM certificate.
      +  For ``cloudfront``, CloudFront will automatically serve the validation token. Choose this mode if you can point the domain's DNS to CloudFront immediately.
      +  For ``self-hosted``, you serve the validation token from your existing infrastructure. Choose this mode when you need to maintain current traffic flow while your certificate is being issued. You can place the validation token at the well-known path on your existing web server, wait for ACM to validate and issue the certificate, and then update your DNS to point to CloudFront.
     */
  ValidationTokenHost?: "cloudfront" | "self-hosted";
};
/**
 * Type definition for `AWS::CloudFront::DistributionTenant.Parameter`.
 * A list of parameter values to add to the resource. A parameter is specified as a key-value pair. A valid parameter value must exist for any parameter that is marked as required in the multi-tenant distribution.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-distributiontenant-parameter.html}
 */
export type Parameter = {
  /**
   * The parameter name.
   */
  Name?: string;
  /**
   * The parameter value.
   */
  Value?: string;
};
/**
 * Type definition for `AWS::CloudFront::DistributionTenant.Tag`.
 * A complex type that contains ``Tag`` key and ``Tag`` value.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-distributiontenant-tag.html}
 */
export type Tag = {
  /**
     * A string that contains ``Tag`` key.
     The string length should be between 1 and 128 characters. Valid characters include ``a-z``, ``A-Z``, ``0-9``, space, and the special characters ``_ - . : / = + @``.
     */
  Key: string;
  /**
     * A string that contains an optional ``Tag`` value.
     The string length should be between 0 and 256 characters. Valid characters include ``a-z``, ``A-Z``, ``0-9``, space, and the special characters ``_ - . : / = + @``.
     */
  Value: string;
};
/**
 * Type definition for `AWS::CloudFront::DistributionTenant.WebAclCustomization`.
 * The WAF web ACL customization specified for the distribution tenant.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-distributiontenant-webaclcustomization.html}
 */
export type WebAclCustomization = {
  /**
   * The action for the WAF web ACL customization. You can specify ``override`` to specify a separate WAF web ACL for the distribution tenant. If you specify ``disable``, the distribution tenant won't have WAF web ACL protections and won't inherit from the multi-tenant distribution.
   */
  Action?: "override" | "disable";
  /**
   * The Amazon Resource Name (ARN) of the WAF web ACL.
   */
  Arn?: string;
};
/**
 * Resource type definition for `AWS::CloudFront::DistributionTenant`.
 * The distribution tenant.
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
