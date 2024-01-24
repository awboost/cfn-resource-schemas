import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::ACMPCA::CertificateAuthorityActivation`.
 * Used to install the certificate authority certificate and update the certificate authority status.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-acmpca-certificateauthorityactivation.html}
 */
export type ACMPCACertificateAuthorityActivationProperties = {
  /**
   * Certificate Authority certificate that will be installed in the Certificate Authority.
   */
  Certificate: string;
  /**
   * Arn of the Certificate Authority.
   */
  CertificateAuthorityArn: string;
  /**
   * Certificate chain for the Certificate Authority certificate.
   */
  CertificateChain?: string;
  /**
   * The status of the Certificate Authority.
   */
  Status?: string;
};
/**
 * Attribute type definition for `AWS::ACMPCA::CertificateAuthorityActivation`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-acmpca-certificateauthorityactivation.html#aws-resource-acmpca-certificateauthorityactivation-return-values}
 */
export type ACMPCACertificateAuthorityActivationAttributes = {
  /**
   * The complete certificate chain, including the Certificate Authority certificate.
   */
  CompleteCertificateChain: string;
};
/**
 * Resource type definition for `AWS::ACMPCA::CertificateAuthorityActivation`.
 * Used to install the certificate authority certificate and update the certificate authority status.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-acmpca-certificateauthorityactivation.html}
 */
export class ACMPCACertificateAuthorityActivation extends $Resource<
  "AWS::ACMPCA::CertificateAuthorityActivation",
  ACMPCACertificateAuthorityActivationProperties,
  ACMPCACertificateAuthorityActivationAttributes
> {
  public static readonly Type = "AWS::ACMPCA::CertificateAuthorityActivation";
  constructor(
    logicalId: string,
    properties: ACMPCACertificateAuthorityActivationProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      ACMPCACertificateAuthorityActivation.Type,
      properties,
      options,
    );
  }
}
