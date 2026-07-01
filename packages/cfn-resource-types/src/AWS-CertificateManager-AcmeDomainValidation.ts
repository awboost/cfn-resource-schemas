import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::CertificateManager::AcmeDomainValidation
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-certificatemanager-acmedomainvalidation.html}
 */
export type CertificateManagerAcmeDomainValidationProperties = {
  /**
   * The ARN of the ACME endpoint this domain validation is associated with.
   */
  AcmeEndpointArn: string;
  /**
   * The domain name to validate.
   */
  DomainName: string;
  /**
   * Prevalidation method configuration. Currently only DNS-based prevalidation is supported.
   */
  PrevalidationOptions: PrevalidationOptions;
  /**
   * Tags associated with the domain validation.
   * @maxLength `50`
   */
  Tags?: {
    /**
     * The key name of the tag.
     * @minLength `1`
     * @maxLength `128`
     */
    Key: string;
    /**
     * The value for the tag.
     * @minLength `0`
     * @maxLength `256`
     */
    Value: string;
  }[];
};
/**
 * Attribute type definition for `AWS::CertificateManager::AcmeDomainValidation`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-certificatemanager-acmedomainvalidation.html#aws-resource-certificatemanager-acmedomainvalidation-return-values}
 */
export type CertificateManagerAcmeDomainValidationAttributes = {
  /**
   * The Amazon Resource Name (ARN) of the domain validation.
   */
  Arn: string;
};
/**
 * Type definition for `AWS::CertificateManager::AcmeDomainValidation.DnsPrevalidationOptions`.
 * DNS-based prevalidation options for the domain validation.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-certificatemanager-acmedomainvalidation-dnsprevalidationoptions.html}
 */
export type DnsPrevalidationOptions = {
  /**
   * Controls which certificate types are authorized to be issued for the domain via the ACME endpoint.
   */
  DomainScope?: DomainScope;
  /**
   * The Route 53 hosted zone ID for automatic DNS record management. When provided, the service creates the validation DNS record on the customer's behalf.
   */
  HostedZoneId?: string;
};
/**
 * Type definition for `AWS::CertificateManager::AcmeDomainValidation.DomainScope`.
 * Controls which certificate types are authorized to be issued for the domain via the ACME endpoint.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-certificatemanager-acmedomainvalidation-domainscope.html}
 */
export type DomainScope = {
  /**
   * Whether certificates may be issued for the exact domain.
   */
  ExactDomain?: string;
  /**
   * Whether certificates may be issued for subdomains of the domain.
   */
  Subdomains?: string;
  /**
   * Whether wildcard certificates may be issued for the domain.
   */
  Wildcards?: string;
};
/**
 * Type definition for `AWS::CertificateManager::AcmeDomainValidation.PrevalidationOptions`.
 * Prevalidation method configuration. Currently only DNS-based prevalidation is supported.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-certificatemanager-acmedomainvalidation-prevalidationoptions.html}
 */
export type PrevalidationOptions = {
  /**
   * DNS-based prevalidation options for the domain validation.
   */
  DnsPrevalidation: DnsPrevalidationOptions;
};
/**
 * Resource Type definition for AWS::CertificateManager::AcmeDomainValidation
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-certificatemanager-acmedomainvalidation.html}
 */
export class CertificateManagerAcmeDomainValidation extends $Resource<
  "AWS::CertificateManager::AcmeDomainValidation",
  CertificateManagerAcmeDomainValidationProperties,
  CertificateManagerAcmeDomainValidationAttributes
> {
  public static readonly Type = "AWS::CertificateManager::AcmeDomainValidation";
  constructor(
    logicalId: string,
    properties: CertificateManagerAcmeDomainValidationProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      CertificateManagerAcmeDomainValidation.Type,
      properties,
      options,
    );
  }
}
