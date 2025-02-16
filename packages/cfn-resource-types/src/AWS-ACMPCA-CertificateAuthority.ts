import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::ACMPCA::CertificateAuthority`.
 * Private certificate authority.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-acmpca-certificateauthority.html}
 */
export type ACMPCACertificateAuthorityProperties = {
  /**
   * Structure that contains CSR pass through extension information used by the CreateCertificateAuthority action.
   */
  CsrExtensions?: CsrExtensions;
  /**
   * Public key algorithm and size, in bits, of the key pair that your CA creates when it issues a certificate.
   */
  KeyAlgorithm: string;
  /**
   * KeyStorageSecurityStadard defines a cryptographic key management compliance standard used for handling CA keys.
   */
  KeyStorageSecurityStandard?: string;
  /**
   * Certificate revocation information used by the CreateCertificateAuthority and UpdateCertificateAuthority actions.
   */
  RevocationConfiguration?: RevocationConfiguration;
  /**
   * Algorithm your CA uses to sign certificate requests.
   */
  SigningAlgorithm: string;
  /**
   * Structure that contains X.500 distinguished name information for your CA.
   */
  Subject: Subject;
  Tags?: Tag[];
  /**
   * The type of the certificate authority.
   */
  Type: string;
  /**
   * Usage mode of the ceritificate authority.
   */
  UsageMode?: string;
};
/**
 * Attribute type definition for `AWS::ACMPCA::CertificateAuthority`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-acmpca-certificateauthority.html#aws-resource-acmpca-certificateauthority-return-values}
 */
export type ACMPCACertificateAuthorityAttributes = {
  /**
   * The Amazon Resource Name (ARN) of the certificate authority.
   */
  Arn: string;
  /**
   * The base64 PEM-encoded certificate signing request (CSR) for your certificate authority certificate.
   */
  CertificateSigningRequest: string;
};
/**
 * Type definition for `AWS::ACMPCA::CertificateAuthority.AccessDescription`.
 * Structure that contains X.509 AccessDescription information.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-acmpca-certificateauthority-accessdescription.html}
 */
export type AccessDescription = {
  /**
   * Structure that contains X.509 GeneralName information. Assign one and ONLY one field.
   */
  AccessLocation: GeneralName;
  /**
   * Structure that contains X.509 AccessMethod information. Assign one and ONLY one field.
   */
  AccessMethod: AccessMethod;
};
/**
 * Type definition for `AWS::ACMPCA::CertificateAuthority.AccessMethod`.
 * Structure that contains X.509 AccessMethod information. Assign one and ONLY one field.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-acmpca-certificateauthority-accessmethod.html}
 */
export type AccessMethod = {
  /**
   * Pre-defined enum string for X.509 AccessMethod ObjectIdentifiers.
   */
  AccessMethodType?: string;
  /**
   * String that contains X.509 ObjectIdentifier information.
   */
  CustomObjectIdentifier?: string;
};
/**
 * Type definition for `AWS::ACMPCA::CertificateAuthority.CrlConfiguration`.
 * Your certificate authority can create and maintain a certificate revocation list (CRL). A CRL contains information about certificates that have been revoked.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-acmpca-certificateauthority-crlconfiguration.html}
 */
export type CrlConfiguration = {
  /**
   * Configures the default behavior of the CRL Distribution Point extension for certificates issued by your certificate authority
   */
  CrlDistributionPointExtensionConfiguration?: CrlDistributionPointExtensionConfiguration;
  CrlType?: string;
  CustomCname?: string;
  CustomPath?: string;
  Enabled: boolean;
  ExpirationInDays?: number;
  S3BucketName?: string;
  S3ObjectAcl?: string;
};
/**
 * Type definition for `AWS::ACMPCA::CertificateAuthority.CrlDistributionPointExtensionConfiguration`.
 * Configures the default behavior of the CRL Distribution Point extension for certificates issued by your certificate authority
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-acmpca-certificateauthority-crldistributionpointextensionconfiguration.html}
 */
export type CrlDistributionPointExtensionConfiguration = {
  OmitExtension: boolean;
};
/**
 * Type definition for `AWS::ACMPCA::CertificateAuthority.CsrExtensions`.
 * Structure that contains CSR pass though extensions information.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-acmpca-certificateauthority-csrextensions.html}
 */
export type CsrExtensions = {
  /**
   * Structure that contains X.509 KeyUsage information.
   */
  KeyUsage?: KeyUsage;
  /**
   * Array of X.509 AccessDescription.
   */
  SubjectInformationAccess?: AccessDescription[];
};
/**
 * Type definition for `AWS::ACMPCA::CertificateAuthority.CustomAttribute`.
 * Structure that contains X.500 attribute type and value.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-acmpca-certificateauthority-customattribute.html}
 */
export type CustomAttribute = {
  /**
   * String that contains X.509 ObjectIdentifier information.
   */
  ObjectIdentifier: string;
  Value: string;
};
/**
 * Type definition for `AWS::ACMPCA::CertificateAuthority.EdiPartyName`.
 * Structure that contains X.509 EdiPartyName information.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-acmpca-certificateauthority-edipartyname.html}
 */
export type EdiPartyName = {
  NameAssigner?: string;
  PartyName: string;
};
/**
 * Type definition for `AWS::ACMPCA::CertificateAuthority.GeneralName`.
 * Structure that contains X.509 GeneralName information. Assign one and ONLY one field.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-acmpca-certificateauthority-generalname.html}
 */
export type GeneralName = {
  /**
   * Structure that contains X.500 distinguished name information for your CA.
   */
  DirectoryName?: Subject;
  /**
   * String that contains X.509 DnsName information.
   */
  DnsName?: string;
  /**
   * Structure that contains X.509 EdiPartyName information.
   */
  EdiPartyName?: EdiPartyName;
  /**
   * String that contains X.509 IpAddress information.
   */
  IpAddress?: string;
  /**
   * Structure that contains X.509 OtherName information.
   */
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
 * Type definition for `AWS::ACMPCA::CertificateAuthority.KeyUsage`.
 * Structure that contains X.509 KeyUsage information.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-acmpca-certificateauthority-keyusage.html}
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
 * Type definition for `AWS::ACMPCA::CertificateAuthority.OcspConfiguration`.
 * Helps to configure online certificate status protocol (OCSP) responder for your certificate authority
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-acmpca-certificateauthority-ocspconfiguration.html}
 */
export type OcspConfiguration = {
  Enabled: boolean;
  OcspCustomCname?: string;
};
/**
 * Type definition for `AWS::ACMPCA::CertificateAuthority.OtherName`.
 * Structure that contains X.509 OtherName information.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-acmpca-certificateauthority-othername.html}
 */
export type OtherName = {
  /**
   * String that contains X.509 ObjectIdentifier information.
   */
  TypeId: string;
  Value: string;
};
/**
 * Type definition for `AWS::ACMPCA::CertificateAuthority.RevocationConfiguration`.
 * Certificate Authority revocation information.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-acmpca-certificateauthority-revocationconfiguration.html}
 */
export type RevocationConfiguration = {
  /**
   * Your certificate authority can create and maintain a certificate revocation list (CRL). A CRL contains information about certificates that have been revoked.
   */
  CrlConfiguration?: CrlConfiguration;
  /**
   * Helps to configure online certificate status protocol (OCSP) responder for your certificate authority
   */
  OcspConfiguration?: OcspConfiguration;
};
/**
 * Type definition for `AWS::ACMPCA::CertificateAuthority.Subject`.
 * Structure that contains X.500 distinguished name information for your CA.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-acmpca-certificateauthority-subject.html}
 */
export type Subject = {
  CommonName?: string;
  Country?: string;
  /**
   * Array of X.500 attribute type and value. CustomAttributes cannot be used along with pre-defined attributes.
   */
  CustomAttributes?: CustomAttribute[];
  DistinguishedNameQualifier?: string;
  GenerationQualifier?: string;
  GivenName?: string;
  Initials?: string;
  Locality?: string;
  Organization?: string;
  OrganizationalUnit?: string;
  Pseudonym?: string;
  SerialNumber?: string;
  State?: string;
  Surname?: string;
  Title?: string;
};
/**
 * Type definition for `AWS::ACMPCA::CertificateAuthority.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-acmpca-certificateauthority-tag.html}
 */
export type Tag = {
  Key: string;
  Value?: string;
};
/**
 * Resource type definition for `AWS::ACMPCA::CertificateAuthority`.
 * Private certificate authority.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-acmpca-certificateauthority.html}
 */
export class ACMPCACertificateAuthority extends $Resource<
  "AWS::ACMPCA::CertificateAuthority",
  ACMPCACertificateAuthorityProperties,
  ACMPCACertificateAuthorityAttributes
> {
  public static readonly Type = "AWS::ACMPCA::CertificateAuthority";
  constructor(
    logicalId: string,
    properties: ACMPCACertificateAuthorityProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, ACMPCACertificateAuthority.Type, properties, options);
  }
}
