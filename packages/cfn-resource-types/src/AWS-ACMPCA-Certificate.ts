import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * The ``AWS::ACMPCA::Certificate`` resource is used to issue a certificate using your private certificate authority. For more information, see the [IssueCertificate](https://docs.aws.amazon.com/privateca/latest/APIReference/API_IssueCertificate.html) action.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-acmpca-certificate.html}
 */
export type ACMPCACertificateProperties = {
  /**
   * Specifies X.509 certificate information to be included in the issued certificate. An ``APIPassthrough`` or ``APICSRPassthrough`` template variant must be selected, or else this parameter is ignored.
   */
  ApiPassthrough?: ApiPassthrough;
  /**
   * The Amazon Resource Name (ARN) for the private CA issues the certificate.
   */
  CertificateAuthorityArn: string;
  /**
   * The certificate signing request (CSR) for the certificate.
   * @minLength `1`
   */
  CertificateSigningRequest: string;
  /**
     * The name of the algorithm that will be used to sign the certificate to be issued.
     This parameter should not be confused with the ``SigningAlgorithm`` parameter used to sign a CSR in the ``CreateCertificateAuthority`` action.
      The specified signing algorithm family (RSA or ECDSA) must match the algorithm family of the CA's secret key.
     */
  SigningAlgorithm: string;
  /**
   * Specifies a custom configuration template to use when issuing a certificate. If this parameter is not provided, PCAshort defaults to the ``EndEntityCertificate/V1`` template. For more information about PCAshort templates, see [Using Templates](https://docs.aws.amazon.com/privateca/latest/userguide/UsingTemplates.html).
   */
  TemplateArn?: string;
  /**
   * The period of time during which the certificate will be valid.
   */
  Validity: Validity;
  /**
     * Information describing the start of the validity period of the certificate. This parameter sets the “Not Before" date for the certificate.
     By default, when issuing a certificate, PCAshort sets the "Not Before" date to the issuance time minus 60 minutes. This compensates for clock inconsistencies across computer systems. The ``ValidityNotBefore`` parameter can be used to customize the “Not Before” value.
     Unlike the ``Validity`` parameter, the ``ValidityNotBefore`` parameter is optional.
     The ``ValidityNotBefore`` value is expressed as an explicit date and time, using the ``Validity`` type value ``ABSOLUTE``.
     */
  ValidityNotBefore?: Validity;
};
/**
 * Attribute type definition for `AWS::ACMPCA::Certificate`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-acmpca-certificate.html#aws-resource-acmpca-certificate-return-values}
 */
export type ACMPCACertificateAttributes = {
  Arn: string;
  Certificate: string;
};
/**
 * Type definition for `AWS::ACMPCA::Certificate.ApiPassthrough`.
 * Contains information about the certificate subject. The Subject field in the certificate identifies the entity that owns or controls the public key in the certificate. The entity can be a user, computer, device, or service. The Subject must contain an X.500 distinguished name (DN). A DN is a sequence of relative distinguished names (RDNs). The RDNs are separated by commas in the certificate.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-acmpca-certificate-apipassthrough.html}
 */
export type ApiPassthrough = {
  /**
   * Defines one or more purposes for which the key contained in the certificate can be used. Default value for each option is false.
   */
  Extensions?: Extensions;
  /**
   * Contains information about the certificate subject. The Subject field in the certificate identifies the entity that owns or controls the public key in the certificate. The entity can be a user, computer, device, or service. The Subject must contain an X.500 distinguished name (DN). A DN is a sequence of relative distinguished names (RDNs). The RDNs are separated by commas in the certificate.
   */
  Subject?: Subject;
};
/**
 * Type definition for `AWS::ACMPCA::Certificate.CustomAttribute`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-acmpca-certificate-customattribute.html}
 */
export type CustomAttribute = {
  /**
   * String that contains X.509 ObjectIdentifier information.
   */
  ObjectIdentifier: string;
  Value: string;
};
/**
 * Type definition for `AWS::ACMPCA::Certificate.CustomExtension`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-acmpca-certificate-customextension.html}
 */
export type CustomExtension = {
  Critical?: boolean;
  /**
   * String that contains X.509 ObjectIdentifier information.
   */
  ObjectIdentifier: string;
  Value: string;
};
/**
 * Type definition for `AWS::ACMPCA::Certificate.EdiPartyName`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-acmpca-certificate-edipartyname.html}
 */
export type EdiPartyName = {
  NameAssigner: string;
  PartyName: string;
};
/**
 * Type definition for `AWS::ACMPCA::Certificate.ExtendedKeyUsage`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-acmpca-certificate-extendedkeyusage.html}
 */
export type ExtendedKeyUsage = {
  /**
   * String that contains X.509 ObjectIdentifier information.
   */
  ExtendedKeyUsageObjectIdentifier?: string;
  ExtendedKeyUsageType?: string;
};
/**
 * Type definition for `AWS::ACMPCA::Certificate.Extensions`.
 * Defines one or more purposes for which the key contained in the certificate can be used. Default value for each option is false.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-acmpca-certificate-extensions.html}
 */
export type Extensions = {
  CertificatePolicies?: PolicyInformation[];
  /**
   * Array of X.509 extensions for a certificate.
   */
  CustomExtensions?: CustomExtension[];
  ExtendedKeyUsage?: ExtendedKeyUsage[];
  /**
   * Defines one or more purposes for which the key contained in the certificate can be used. Default value for each option is false.
   */
  KeyUsage?: KeyUsage;
  SubjectAlternativeNames?: GeneralName[];
};
/**
 * Type definition for `AWS::ACMPCA::Certificate.GeneralName`.
 * Contains information about the certificate subject. The certificate can be one issued by your private certificate authority (CA) or it can be your private CA certificate. The Subject field in the certificate identifies the entity that owns or controls the public key in the certificate. The entity can be a user, computer, device, or service. The Subject must contain an X.500 distinguished name (DN). A DN is a sequence of relative distinguished names (RDNs). The RDNs are separated by commas in the certificate. The DN must be unique for each entity, but your private CA can issue more than one certificate with the same DN to the same entity.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-acmpca-certificate-generalname.html}
 */
export type GeneralName = {
  /**
   * Contains information about the certificate subject. The certificate can be one issued by your private certificate authority (CA) or it can be your private CA certificate. The Subject field in the certificate identifies the entity that owns or controls the public key in the certificate. The entity can be a user, computer, device, or service. The Subject must contain an X.500 distinguished name (DN). A DN is a sequence of relative distinguished names (RDNs). The RDNs are separated by commas in the certificate. The DN must be unique for each entity, but your private CA can issue more than one certificate with the same DN to the same entity.
   */
  DirectoryName?: Subject;
  /**
   * String that contains X.509 DnsName information.
   */
  DnsName?: string;
  EdiPartyName?: EdiPartyName;
  /**
   * String that contains X.509 IpAddress information.
   */
  IpAddress?: string;
  OtherName?: OtherName;
  /**
   * String that contains X.509 ObjectIdentifier information.
   */
  RegisteredId?: string;
  /**
   * String that contains X.509 Rfc822Name information.
   */
  Rfc822Name?: string;
  /**
   * String that contains X.509 UniformResourceIdentifier information.
   */
  UniformResourceIdentifier?: string;
};
/**
 * Type definition for `AWS::ACMPCA::Certificate.KeyUsage`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-acmpca-certificate-keyusage.html}
 */
export type KeyUsage = {
  CRLSign?: boolean;
  DataEncipherment?: boolean;
  DecipherOnly?: boolean;
  DigitalSignature?: boolean;
  EncipherOnly?: boolean;
  KeyAgreement?: boolean;
  KeyCertSign?: boolean;
  KeyEncipherment?: boolean;
  NonRepudiation?: boolean;
};
/**
 * Type definition for `AWS::ACMPCA::Certificate.OtherName`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-acmpca-certificate-othername.html}
 */
export type OtherName = {
  /**
   * String that contains X.509 ObjectIdentifier information.
   */
  TypeId: string;
  Value: string;
};
/**
 * Type definition for `AWS::ACMPCA::Certificate.PolicyInformation`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-acmpca-certificate-policyinformation.html}
 */
export type PolicyInformation = {
  /**
   * String that contains X.509 ObjectIdentifier information.
   */
  CertPolicyId: string;
  PolicyQualifiers?: PolicyQualifierInfo[];
};
/**
 * Type definition for `AWS::ACMPCA::Certificate.PolicyQualifierInfo`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-acmpca-certificate-policyqualifierinfo.html}
 */
export type PolicyQualifierInfo = {
  PolicyQualifierId: string;
  Qualifier: Qualifier;
};
/**
 * Type definition for `AWS::ACMPCA::Certificate.Qualifier`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-acmpca-certificate-qualifier.html}
 */
export type Qualifier = {
  CpsUri: string;
};
/**
 * Type definition for `AWS::ACMPCA::Certificate.Subject`.
 * Contains information about the certificate subject. The ``Subject`` field in the certificate identifies the entity that owns or controls the public key in the certificate. The entity can be a user, computer, device, or service. The ``Subject``must contain an X.500 distinguished name (DN). A DN is a sequence of relative distinguished names (RDNs). The RDNs are separated by commas in the certificate.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-acmpca-certificate-subject.html}
 */
export type Subject = {
  /**
     * For CA and end-entity certificates in a private PKI, the common name (CN) can be any string within the length limit.
     Note: In publicly trusted certificates, the common name must be a fully qualified domain name (FQDN) associated with the certificate subject.
     */
  CommonName?: string;
  /**
   * Two-digit code that specifies the country in which the certificate subject located.
   */
  Country?: string;
  /**
   * Array of X.500 attribute type and value. CustomAttributes cannot be used along with pre-defined attributes.
   */
  CustomAttributes?: CustomAttribute[];
  /**
   * Disambiguating information for the certificate subject.
   */
  DistinguishedNameQualifier?: string;
  /**
   * Typically a qualifier appended to the name of an individual. Examples include Jr. for junior, Sr. for senior, and III for third.
   */
  GenerationQualifier?: string;
  /**
   * First name.
   */
  GivenName?: string;
  /**
   * Concatenation that typically contains the first letter of the *GivenName*, the first letter of the middle name if one exists, and the first letter of the *Surname*.
   */
  Initials?: string;
  /**
   * The locality (such as a city or town) in which the certificate subject is located.
   */
  Locality?: string;
  /**
   * Legal name of the organization with which the certificate subject is affiliated.
   */
  Organization?: string;
  /**
   * A subdivision or unit of the organization (such as sales or finance) with which the certificate subject is affiliated.
   */
  OrganizationalUnit?: string;
  /**
   * Typically a shortened version of a longer *GivenName*. For example, Jonathan is often shortened to John. Elizabeth is often shortened to Beth, Liz, or Eliza.
   */
  Pseudonym?: string;
  /**
   * The certificate serial number.
   */
  SerialNumber?: string;
  /**
   * State in which the subject of the certificate is located.
   */
  State?: string;
  /**
   * Family name. In the US and the UK, for example, the surname of an individual is ordered last. In Asian cultures the surname is typically ordered first.
   */
  Surname?: string;
  /**
   * A title such as Mr. or Ms., which is pre-pended to the name to refer formally to the certificate subject.
   */
  Title?: string;
};
/**
 * Type definition for `AWS::ACMPCA::Certificate.Validity`.
 * Length of time for which the certificate issued by your private certificate authority (CA), or by the private CA itself, is valid in days, months, or years. You can issue a certificate by calling the ``IssueCertificate`` operation.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-acmpca-certificate-validity.html}
 */
export type Validity = {
  /**
   * Specifies whether the ``Value`` parameter represents days, months, or years.
   */
  Type: string;
  /**
   * Time period.
   */
  Value: number;
};
/**
 * The ``AWS::ACMPCA::Certificate`` resource is used to issue a certificate using your private certificate authority. For more information, see the [IssueCertificate](https://docs.aws.amazon.com/privateca/latest/APIReference/API_IssueCertificate.html) action.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-acmpca-certificate.html}
 */
export class ACMPCACertificate extends $Resource<
  "AWS::ACMPCA::Certificate",
  ACMPCACertificateProperties,
  ACMPCACertificateAttributes
> {
  public static readonly Type = "AWS::ACMPCA::Certificate";
  constructor(
    logicalId: string,
    properties: ACMPCACertificateProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, ACMPCACertificate.Type, properties, options);
  }
}
