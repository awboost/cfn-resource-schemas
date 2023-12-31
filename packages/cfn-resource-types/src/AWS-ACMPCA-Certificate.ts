import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::ACMPCA::Certificate`.
 * A certificate issued via a private certificate authority
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-acmpca-certificate.html}
 */
export type ACMPCACertificateProperties = {
  /**
   * These are fields to be overridden in a certificate at the time of issuance. These requires an API_Passthrough template be used or they will be ignored.
   */
  ApiPassthrough?: ApiPassthrough;
  /**
   * The Amazon Resource Name (ARN) for the private CA to issue the certificate.
   */
  CertificateAuthorityArn: string;
  /**
   * The certificate signing request (CSR) for the Certificate.
   * @minLength `1`
   */
  CertificateSigningRequest: string;
  /**
   * The name of the algorithm that will be used to sign the Certificate.
   */
  SigningAlgorithm: string;
  /**
   * Specifies a custom configuration template to use when issuing a certificate. If this parameter is not provided, ACM Private CA defaults to the EndEntityCertificate/V1 template.
   */
  TemplateArn?: string;
  /**
   * The time before which the Certificate will be valid.
   */
  Validity: Validity;
  /**
   * The time after which the Certificate will be valid.
   */
  ValidityNotBefore?: Validity;
};
/**
 * Attribute type definition for `AWS::ACMPCA::Certificate`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-acmpca-certificate.html#aws-resource-acmpca-certificate-return-values}
 */
export type ACMPCACertificateAttributes = {
  /**
   * The ARN of the issued certificate.
   */
  Arn: string;
  /**
   * The issued certificate in base 64 PEM-encoded format.
   */
  Certificate: string;
};
/**
 * Type definition for `AWS::ACMPCA::Certificate.ApiPassthrough`.
 * Structure that specifies fields to be overridden in a certificate at the time of issuance. These requires an API Passthrough template be used or they will be ignored.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-acmpca-certificate-apipassthrough.html}
 */
export type ApiPassthrough = {
  /**
   * Structure that contains X.500 extensions for a Certificate.
   */
  Extensions?: Extensions;
  /**
   * Structure that contains X.500 distinguished name information.
   */
  Subject?: Subject;
};
/**
 * Type definition for `AWS::ACMPCA::Certificate.CustomAttribute`.
 * Structure that contains X.500 attribute type and value.
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
 * Structure that contains X.509 extension information for a certificate.
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
 * Structure that contains X.509 EdiPartyName information.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-acmpca-certificate-edipartyname.html}
 */
export type EdiPartyName = {
  NameAssigner: string;
  PartyName: string;
};
/**
 * Type definition for `AWS::ACMPCA::Certificate.ExtendedKeyUsage`.
 * Structure that contains X.509 ExtendedKeyUsage information.
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
 * Structure that contains X.500 extensions for a Certificate.
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
   * Structure that contains X.509 KeyUsage information.
   */
  KeyUsage?: KeyUsage;
  SubjectAlternativeNames?: GeneralName[];
};
/**
 * Type definition for `AWS::ACMPCA::Certificate.GeneralName`.
 * Structure that contains X.509 GeneralName information. Assign one and ONLY one field.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-acmpca-certificate-generalname.html}
 */
export type GeneralName = {
  /**
   * Structure that contains X.500 distinguished name information.
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
 * Type definition for `AWS::ACMPCA::Certificate.KeyUsage`.
 * Structure that contains X.509 KeyUsage information.
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
 * Structure that contains X.509 OtherName information.
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
 * Structure that contains X.509 Policy information.
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
 * Structure that contains X.509 Policy qualifier information.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-acmpca-certificate-policyqualifierinfo.html}
 */
export type PolicyQualifierInfo = {
  PolicyQualifierId: string;
  /**
   * Structure that contains a X.509 policy qualifier.
   */
  Qualifier: Qualifier;
};
/**
 * Type definition for `AWS::ACMPCA::Certificate.Qualifier`.
 * Structure that contains a X.509 policy qualifier.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-acmpca-certificate-qualifier.html}
 */
export type Qualifier = {
  CpsUri: string;
};
/**
 * Type definition for `AWS::ACMPCA::Certificate.Subject`.
 * Structure that contains X.500 distinguished name information.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-acmpca-certificate-subject.html}
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
 * Type definition for `AWS::ACMPCA::Certificate.Validity`.
 * Validity for a certificate.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-acmpca-certificate-validity.html}
 */
export type Validity = {
  Type: string;
  Value: number;
};
/**
 * Resource type definition for `AWS::ACMPCA::Certificate`.
 * A certificate issued via a private certificate authority
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
