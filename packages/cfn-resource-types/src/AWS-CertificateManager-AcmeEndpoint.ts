import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::CertificateManager::AcmeEndpoint
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-certificatemanager-acmeendpoint.html}
 */
export type CertificateManagerAcmeEndpointProperties = {
  /**
   * The authorization behavior for the ACME endpoint.
   */
  AuthorizationBehavior: string;
  /**
   * The certificate authority configuration for the ACME endpoint.
   */
  CertificateAuthority: CertificateAuthority;
  /**
   * Tags applied to certificates issued via this endpoint.
   * @maxLength `50`
   */
  CertificateTags?: Tag[];
  /**
   * Whether contact information is required for the ACME endpoint.
   */
  Contact?: string;
  /**
   * Tags associated with the ACME endpoint.
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
 * Attribute type definition for `AWS::CertificateManager::AcmeEndpoint`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-certificatemanager-acmeendpoint.html#aws-resource-certificatemanager-acmeendpoint-return-values}
 */
export type CertificateManagerAcmeEndpointAttributes = {
  /**
   * The Amazon Resource Name (ARN) of the ACME endpoint.
   */
  AcmeEndpointArn: string;
  /**
   * The ACME directory URL for the endpoint.
   */
  EndpointUrl: string;
};
/**
 * Type definition for `AWS::CertificateManager::AcmeEndpoint.CertificateAuthority`.
 * The certificate authority configuration for the ACME endpoint.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-certificatemanager-acmeendpoint-certificateauthority.html}
 */
export type CertificateAuthority = {
  /**
   * Configuration for the public certificate authority.
   */
  PublicCertificateAuthority: PublicCertificateAuthority;
};
/**
 * Type definition for `AWS::CertificateManager::AcmeEndpoint.PublicCertificateAuthority`.
 * Configuration for the public certificate authority.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-certificatemanager-acmeendpoint-publiccertificateauthority.html}
 */
export type PublicCertificateAuthority = {
  /**
   * The allowed key algorithms for certificates issued via this endpoint.
   */
  AllowedKeyAlgorithms?: string[];
};
/**
 * Type definition for `AWS::CertificateManager::AcmeEndpoint.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-certificatemanager-acmeendpoint-tag.html}
 */
export type Tag = {
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
};
/**
 * Resource Type definition for AWS::CertificateManager::AcmeEndpoint
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-certificatemanager-acmeendpoint.html}
 */
export class CertificateManagerAcmeEndpoint extends $Resource<
  "AWS::CertificateManager::AcmeEndpoint",
  CertificateManagerAcmeEndpointProperties,
  CertificateManagerAcmeEndpointAttributes
> {
  public static readonly Type = "AWS::CertificateManager::AcmeEndpoint";
  constructor(
    logicalId: string,
    properties: CertificateManagerAcmeEndpointProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, CertificateManagerAcmeEndpoint.Type, properties, options);
  }
}
