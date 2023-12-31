import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource Type definition for AWS::CertificateManager::Certificate
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-certificatemanager-certificate.html}
 */
export type CertificateManagerCertificateProperties = {
  CertificateAuthorityArn?: string;
  CertificateTransparencyLoggingPreference?: string;
  DomainName: string;
  DomainValidationOptions?: DomainValidationOption[];
  KeyAlgorithm?: string;
  SubjectAlternativeNames?: string[];
  Tags?: Tag[];
  ValidationMethod?: string;
};
/**
 * Attribute type definition for `AWS::CertificateManager::Certificate`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-certificatemanager-certificate.html#aws-resource-certificatemanager-certificate-return-values}
 */
export type CertificateManagerCertificateAttributes = {
  Id: string;
};
/**
 * Type definition for `AWS::CertificateManager::Certificate.DomainValidationOption`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-certificatemanager-certificate-domainvalidationoption.html}
 */
export type DomainValidationOption = {
  DomainName: string;
  HostedZoneId?: string;
  ValidationDomain?: string;
};
/**
 * Type definition for `AWS::CertificateManager::Certificate.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-certificatemanager-certificate-tag.html}
 */
export type Tag = {
  Key: string;
  Value: string;
};
/**
 * Resource Type definition for AWS::CertificateManager::Certificate
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-certificatemanager-certificate.html}
 */
export class CertificateManagerCertificate extends $Resource<
  "AWS::CertificateManager::Certificate",
  CertificateManagerCertificateProperties,
  CertificateManagerCertificateAttributes
> {
  public static readonly Type = "AWS::CertificateManager::Certificate";
  public static readonly AttributeNames = ["Id" as const];
  constructor(
    logicalId: string,
    properties: CertificateManagerCertificateProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      CertificateManagerCertificate.Type,
      properties,
      CertificateManagerCertificate.AttributeNames,
      options,
    );
  }
}
