import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource type definition for `AWS::PCAConnectorAD::Template`.
 * Represents a template that defines certificate configurations, both for issuance and client handling
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorad-template.html}
 */
export type PCAConnectorADTemplateProperties = {
  /**
   * @minLength `5`
   * @maxLength `200`
   * @pattern `^arn:[\w-]+:pca-connector-ad:[\w-]+:[0-9]+:connector\/[0-9a-f]{8}(-[0-9a-f]{4}){3}-[0-9a-f]{12}$`
   */
  ConnectorArn: string;
  Definition:
    | {
        TemplateV2: TemplateV2;
      }
    | {
        TemplateV3: TemplateV3;
      }
    | {
        TemplateV4: TemplateV4;
      };
  /**
   * @minLength `1`
   * @maxLength `64`
   * @pattern `^(?!^\s+$)((?![\x5c'\x2b,;<=>#\x22])([\x20-\x7E]))+$`
   */
  Name: string;
  ReenrollAllCertificateHolders?: boolean;
  Tags?: Tags;
};
/**
 * Attribute type definition for `AWS::PCAConnectorAD::Template`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorad-template.html#aws-resource-pcaconnectorad-template-return-values}
 */
export type PCAConnectorADTemplateAttributes = {
  /**
   * @minLength `5`
   * @maxLength `200`
   * @pattern `^arn:[\w-]+:pca-connector-ad:[\w-]+:[0-9]+:connector\/[0-9a-f]{8}(-[0-9a-f]{4}){3}-[0-9a-f]{12}\/template\/[0-9a-f]{8}(-[0-9a-f]{4}){3}-[0-9a-f]{12}$`
   */
  TemplateArn: string;
};
/**
 * Type definition for `AWS::PCAConnectorAD::Template.ApplicationPolicies`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pcaconnectorad-template-applicationpolicies.html}
 */
export type ApplicationPolicies = {
  Critical?: boolean;
  /**
   * @minLength `1`
   * @maxLength `100`
   */
  Policies: (
    | {
        PolicyType: ApplicationPolicyType;
      }
    | {
        /**
         * @minLength `1`
         * @maxLength `64`
         * @pattern `^([0-2])\.([0-9]|([0-3][0-9]))(\.([0-9]+)){0,126}$`
         */
        PolicyObjectIdentifier: string;
      }
  )[];
};
/**
 * Type definition for `AWS::PCAConnectorAD::Template.ApplicationPolicyType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pcaconnectorad-template-applicationpolicytype.html}
 */
export type ApplicationPolicyType =
  | "ALL_APPLICATION_POLICIES"
  | "ANY_PURPOSE"
  | "ATTESTATION_IDENTITY_KEY_CERTIFICATE"
  | "CERTIFICATE_REQUEST_AGENT"
  | "CLIENT_AUTHENTICATION"
  | "CODE_SIGNING"
  | "CTL_USAGE"
  | "DIGITAL_RIGHTS"
  | "DIRECTORY_SERVICE_EMAIL_REPLICATION"
  | "DISALLOWED_LIST"
  | "DNS_SERVER_TRUST"
  | "DOCUMENT_ENCRYPTION"
  | "DOCUMENT_SIGNING"
  | "DYNAMIC_CODE_GENERATOR"
  | "EARLY_LAUNCH_ANTIMALWARE_DRIVER"
  | "EMBEDDED_WINDOWS_SYSTEM_COMPONENT_VERIFICATION"
  | "ENCLAVE"
  | "ENCRYPTING_FILE_SYSTEM"
  | "ENDORSEMENT_KEY_CERTIFICATE"
  | "FILE_RECOVERY"
  | "HAL_EXTENSION"
  | "IP_SECURITY_END_SYSTEM"
  | "IP_SECURITY_IKE_INTERMEDIATE"
  | "IP_SECURITY_TUNNEL_TERMINATION"
  | "IP_SECURITY_USER"
  | "ISOLATED_USER_MODE"
  | "KDC_AUTHENTICATION"
  | "KERNEL_MODE_CODE_SIGNING"
  | "KEY_PACK_LICENSES"
  | "KEY_RECOVERY"
  | "KEY_RECOVERY_AGENT"
  | "LICENSE_SERVER_VERIFICATION"
  | "LIFETIME_SIGNING"
  | "MICROSOFT_PUBLISHER"
  | "MICROSOFT_TIME_STAMPING"
  | "MICROSOFT_TRUST_LIST_SIGNING"
  | "OCSP_SIGNING"
  | "OEM_WINDOWS_SYSTEM_COMPONENT_VERIFICATION"
  | "PLATFORM_CERTIFICATE"
  | "PREVIEW_BUILD_SIGNING"
  | "PRIVATE_KEY_ARCHIVAL"
  | "PROTECTED_PROCESS_LIGHT_VERIFICATION"
  | "PROTECTED_PROCESS_VERIFICATION"
  | "QUALIFIED_SUBORDINATION"
  | "REVOKED_LIST_SIGNER"
  | "ROOT_PROGRAM_AUTO_UPDATE_CA_REVOCATION"
  | "ROOT_PROGRAM_AUTO_UPDATE_END_REVOCATION"
  | "ROOT_PROGRAM_NO_OSCP_FAILOVER_TO_CRL"
  | "ROOT_LIST_SIGNER"
  | "SECURE_EMAIL"
  | "SERVER_AUTHENTICATION"
  | "SMART_CARD_LOGIN"
  | "SPC_ENCRYPTED_DIGEST_RETRY_COUNT"
  | "SPC_RELAXED_PE_MARKER_CHECK"
  | "TIME_STAMPING"
  | "WINDOWS_HARDWARE_DRIVER_ATTESTED_VERIFICATION"
  | "WINDOWS_HARDWARE_DRIVER_EXTENDED_VERIFICATION"
  | "WINDOWS_HARDWARE_DRIVER_VERIFICATION"
  | "WINDOWS_HELLO_RECOVERY_KEY_ENCRYPTION"
  | "WINDOWS_KITS_COMPONENT"
  | "WINDOWS_RT_VERIFICATION"
  | "WINDOWS_SOFTWARE_EXTENSION_VERIFICATION"
  | "WINDOWS_STORE"
  | "WINDOWS_SYSTEM_COMPONENT_VERIFICATION"
  | "WINDOWS_TCB_COMPONENT"
  | "WINDOWS_THIRD_PARTY_APPLICATION_COMPONENT"
  | "WINDOWS_UPDATE";
/**
 * Type definition for `AWS::PCAConnectorAD::Template.CertificateValidity`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pcaconnectorad-template-certificatevalidity.html}
 */
export type CertificateValidity = {
  RenewalPeriod: ValidityPeriod;
  ValidityPeriod: ValidityPeriod;
};
/**
 * Type definition for `AWS::PCAConnectorAD::Template.ClientCompatibilityV2`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pcaconnectorad-template-clientcompatibilityv2.html}
 */
export type ClientCompatibilityV2 =
  | "WINDOWS_SERVER_2003"
  | "WINDOWS_SERVER_2008"
  | "WINDOWS_SERVER_2008_R2"
  | "WINDOWS_SERVER_2012"
  | "WINDOWS_SERVER_2012_R2"
  | "WINDOWS_SERVER_2016";
/**
 * Type definition for `AWS::PCAConnectorAD::Template.ClientCompatibilityV3`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pcaconnectorad-template-clientcompatibilityv3.html}
 */
export type ClientCompatibilityV3 =
  | "WINDOWS_SERVER_2008"
  | "WINDOWS_SERVER_2008_R2"
  | "WINDOWS_SERVER_2012"
  | "WINDOWS_SERVER_2012_R2"
  | "WINDOWS_SERVER_2016";
/**
 * Type definition for `AWS::PCAConnectorAD::Template.ClientCompatibilityV4`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pcaconnectorad-template-clientcompatibilityv4.html}
 */
export type ClientCompatibilityV4 =
  | "WINDOWS_SERVER_2012"
  | "WINDOWS_SERVER_2012_R2"
  | "WINDOWS_SERVER_2016";
/**
 * Type definition for `AWS::PCAConnectorAD::Template.EnrollmentFlagsV2`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pcaconnectorad-template-enrollmentflagsv2.html}
 */
export type EnrollmentFlagsV2 = {
  EnableKeyReuseOnNtTokenKeysetStorageFull?: boolean;
  IncludeSymmetricAlgorithms?: boolean;
  NoSecurityExtension?: boolean;
  RemoveInvalidCertificateFromPersonalStore?: boolean;
  UserInteractionRequired?: boolean;
};
/**
 * Type definition for `AWS::PCAConnectorAD::Template.EnrollmentFlagsV3`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pcaconnectorad-template-enrollmentflagsv3.html}
 */
export type EnrollmentFlagsV3 = {
  EnableKeyReuseOnNtTokenKeysetStorageFull?: boolean;
  IncludeSymmetricAlgorithms?: boolean;
  NoSecurityExtension?: boolean;
  RemoveInvalidCertificateFromPersonalStore?: boolean;
  UserInteractionRequired?: boolean;
};
/**
 * Type definition for `AWS::PCAConnectorAD::Template.EnrollmentFlagsV4`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pcaconnectorad-template-enrollmentflagsv4.html}
 */
export type EnrollmentFlagsV4 = {
  EnableKeyReuseOnNtTokenKeysetStorageFull?: boolean;
  IncludeSymmetricAlgorithms?: boolean;
  NoSecurityExtension?: boolean;
  RemoveInvalidCertificateFromPersonalStore?: boolean;
  UserInteractionRequired?: boolean;
};
/**
 * Type definition for `AWS::PCAConnectorAD::Template.ExtensionsV2`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pcaconnectorad-template-extensionsv2.html}
 */
export type ExtensionsV2 = {
  ApplicationPolicies?: ApplicationPolicies;
  KeyUsage: KeyUsage;
};
/**
 * Type definition for `AWS::PCAConnectorAD::Template.ExtensionsV3`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pcaconnectorad-template-extensionsv3.html}
 */
export type ExtensionsV3 = {
  ApplicationPolicies?: ApplicationPolicies;
  KeyUsage: KeyUsage;
};
/**
 * Type definition for `AWS::PCAConnectorAD::Template.ExtensionsV4`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pcaconnectorad-template-extensionsv4.html}
 */
export type ExtensionsV4 = {
  ApplicationPolicies?: ApplicationPolicies;
  KeyUsage: KeyUsage;
};
/**
 * Type definition for `AWS::PCAConnectorAD::Template.GeneralFlagsV2`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pcaconnectorad-template-generalflagsv2.html}
 */
export type GeneralFlagsV2 = {
  AutoEnrollment?: boolean;
  MachineType?: boolean;
};
/**
 * Type definition for `AWS::PCAConnectorAD::Template.GeneralFlagsV3`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pcaconnectorad-template-generalflagsv3.html}
 */
export type GeneralFlagsV3 = {
  AutoEnrollment?: boolean;
  MachineType?: boolean;
};
/**
 * Type definition for `AWS::PCAConnectorAD::Template.GeneralFlagsV4`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pcaconnectorad-template-generalflagsv4.html}
 */
export type GeneralFlagsV4 = {
  AutoEnrollment?: boolean;
  MachineType?: boolean;
};
/**
 * Type definition for `AWS::PCAConnectorAD::Template.HashAlgorithm`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pcaconnectorad-template-hashalgorithm.html}
 */
export type HashAlgorithm = "SHA256" | "SHA384" | "SHA512";
/**
 * Type definition for `AWS::PCAConnectorAD::Template.KeySpec`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pcaconnectorad-template-keyspec.html}
 */
export type KeySpec = "KEY_EXCHANGE" | "SIGNATURE";
/**
 * Type definition for `AWS::PCAConnectorAD::Template.KeyUsage`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pcaconnectorad-template-keyusage.html}
 */
export type KeyUsage = {
  Critical?: boolean;
  UsageFlags: KeyUsageFlags;
};
/**
 * Type definition for `AWS::PCAConnectorAD::Template.KeyUsageFlags`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pcaconnectorad-template-keyusageflags.html}
 */
export type KeyUsageFlags = {
  DataEncipherment?: boolean;
  DigitalSignature?: boolean;
  KeyAgreement?: boolean;
  KeyEncipherment?: boolean;
  NonRepudiation?: boolean;
};
/**
 * Type definition for `AWS::PCAConnectorAD::Template.KeyUsagePropertyFlags`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pcaconnectorad-template-keyusagepropertyflags.html}
 */
export type KeyUsagePropertyFlags = {
  Decrypt?: boolean;
  KeyAgreement?: boolean;
  Sign?: boolean;
};
/**
 * Type definition for `AWS::PCAConnectorAD::Template.KeyUsagePropertyType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pcaconnectorad-template-keyusagepropertytype.html}
 */
export type KeyUsagePropertyType = "ALL";
/**
 * Type definition for `AWS::PCAConnectorAD::Template.PrivateKeyAlgorithm`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pcaconnectorad-template-privatekeyalgorithm.html}
 */
export type PrivateKeyAlgorithm =
  | "RSA"
  | "ECDH_P256"
  | "ECDH_P384"
  | "ECDH_P521";
/**
 * Type definition for `AWS::PCAConnectorAD::Template.PrivateKeyAttributesV2`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pcaconnectorad-template-privatekeyattributesv2.html}
 */
export type PrivateKeyAttributesV2 = {
  /**
   * @minLength `1`
   * @maxLength `100`
   */
  CryptoProviders?: string[];
  KeySpec: KeySpec;
  /**
   * @min `1`
   */
  MinimalKeyLength: number;
};
/**
 * Type definition for `AWS::PCAConnectorAD::Template.PrivateKeyAttributesV3`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pcaconnectorad-template-privatekeyattributesv3.html}
 */
export type PrivateKeyAttributesV3 = {
  Algorithm: PrivateKeyAlgorithm;
  /**
   * @minLength `1`
   * @maxLength `100`
   */
  CryptoProviders?: string[];
  KeySpec: KeySpec;
  KeyUsageProperty:
    | {
        PropertyType: KeyUsagePropertyType;
      }
    | {
        PropertyFlags: KeyUsagePropertyFlags;
      };
  /**
   * @min `1`
   */
  MinimalKeyLength: number;
};
/**
 * Type definition for `AWS::PCAConnectorAD::Template.PrivateKeyAttributesV4`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pcaconnectorad-template-privatekeyattributesv4.html}
 */
export type PrivateKeyAttributesV4 = {
  Algorithm?: PrivateKeyAlgorithm;
  /**
   * @minLength `1`
   * @maxLength `100`
   */
  CryptoProviders?: string[];
  KeySpec: KeySpec;
  KeyUsageProperty?:
    | {
        PropertyType: KeyUsagePropertyType;
      }
    | {
        PropertyFlags: KeyUsagePropertyFlags;
      };
  /**
   * @min `1`
   */
  MinimalKeyLength: number;
};
/**
 * Type definition for `AWS::PCAConnectorAD::Template.PrivateKeyFlagsV2`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pcaconnectorad-template-privatekeyflagsv2.html}
 */
export type PrivateKeyFlagsV2 = {
  ClientVersion: ClientCompatibilityV2;
  ExportableKey?: boolean;
  StrongKeyProtectionRequired?: boolean;
};
/**
 * Type definition for `AWS::PCAConnectorAD::Template.PrivateKeyFlagsV3`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pcaconnectorad-template-privatekeyflagsv3.html}
 */
export type PrivateKeyFlagsV3 = {
  ClientVersion: ClientCompatibilityV3;
  ExportableKey?: boolean;
  RequireAlternateSignatureAlgorithm?: boolean;
  StrongKeyProtectionRequired?: boolean;
};
/**
 * Type definition for `AWS::PCAConnectorAD::Template.PrivateKeyFlagsV4`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pcaconnectorad-template-privatekeyflagsv4.html}
 */
export type PrivateKeyFlagsV4 = {
  ClientVersion: ClientCompatibilityV4;
  ExportableKey?: boolean;
  RequireAlternateSignatureAlgorithm?: boolean;
  RequireSameKeyRenewal?: boolean;
  StrongKeyProtectionRequired?: boolean;
  UseLegacyProvider?: boolean;
};
/**
 * Type definition for `AWS::PCAConnectorAD::Template.SubjectNameFlagsV2`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pcaconnectorad-template-subjectnameflagsv2.html}
 */
export type SubjectNameFlagsV2 = {
  RequireCommonName?: boolean;
  RequireDirectoryPath?: boolean;
  RequireDnsAsCn?: boolean;
  RequireEmail?: boolean;
  SanRequireDirectoryGuid?: boolean;
  SanRequireDns?: boolean;
  SanRequireDomainDns?: boolean;
  SanRequireEmail?: boolean;
  SanRequireSpn?: boolean;
  SanRequireUpn?: boolean;
};
/**
 * Type definition for `AWS::PCAConnectorAD::Template.SubjectNameFlagsV3`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pcaconnectorad-template-subjectnameflagsv3.html}
 */
export type SubjectNameFlagsV3 = {
  RequireCommonName?: boolean;
  RequireDirectoryPath?: boolean;
  RequireDnsAsCn?: boolean;
  RequireEmail?: boolean;
  SanRequireDirectoryGuid?: boolean;
  SanRequireDns?: boolean;
  SanRequireDomainDns?: boolean;
  SanRequireEmail?: boolean;
  SanRequireSpn?: boolean;
  SanRequireUpn?: boolean;
};
/**
 * Type definition for `AWS::PCAConnectorAD::Template.SubjectNameFlagsV4`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pcaconnectorad-template-subjectnameflagsv4.html}
 */
export type SubjectNameFlagsV4 = {
  RequireCommonName?: boolean;
  RequireDirectoryPath?: boolean;
  RequireDnsAsCn?: boolean;
  RequireEmail?: boolean;
  SanRequireDirectoryGuid?: boolean;
  SanRequireDns?: boolean;
  SanRequireDomainDns?: boolean;
  SanRequireEmail?: boolean;
  SanRequireSpn?: boolean;
  SanRequireUpn?: boolean;
};
/**
 * Type definition for `AWS::PCAConnectorAD::Template.Tags`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pcaconnectorad-template-tags.html}
 */
export type Tags = Record<string, string>;
/**
 * Type definition for `AWS::PCAConnectorAD::Template.TemplateV2`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pcaconnectorad-template-templatev2.html}
 */
export type TemplateV2 = {
  CertificateValidity: CertificateValidity;
  EnrollmentFlags: EnrollmentFlagsV2;
  Extensions: ExtensionsV2;
  GeneralFlags: GeneralFlagsV2;
  PrivateKeyAttributes: PrivateKeyAttributesV2;
  PrivateKeyFlags: PrivateKeyFlagsV2;
  SubjectNameFlags: SubjectNameFlagsV2;
  /**
   * @minLength `1`
   * @maxLength `100`
   */
  SupersededTemplates?: string[];
};
/**
 * Type definition for `AWS::PCAConnectorAD::Template.TemplateV3`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pcaconnectorad-template-templatev3.html}
 */
export type TemplateV3 = {
  CertificateValidity: CertificateValidity;
  EnrollmentFlags: EnrollmentFlagsV3;
  Extensions: ExtensionsV3;
  GeneralFlags: GeneralFlagsV3;
  HashAlgorithm: HashAlgorithm;
  PrivateKeyAttributes: PrivateKeyAttributesV3;
  PrivateKeyFlags: PrivateKeyFlagsV3;
  SubjectNameFlags: SubjectNameFlagsV3;
  /**
   * @minLength `1`
   * @maxLength `100`
   */
  SupersededTemplates?: string[];
};
/**
 * Type definition for `AWS::PCAConnectorAD::Template.TemplateV4`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pcaconnectorad-template-templatev4.html}
 */
export type TemplateV4 = {
  CertificateValidity: CertificateValidity;
  EnrollmentFlags: EnrollmentFlagsV4;
  Extensions: ExtensionsV4;
  GeneralFlags: GeneralFlagsV4;
  HashAlgorithm?: HashAlgorithm;
  PrivateKeyAttributes: PrivateKeyAttributesV4;
  PrivateKeyFlags: PrivateKeyFlagsV4;
  SubjectNameFlags: SubjectNameFlagsV4;
  /**
   * @minLength `1`
   * @maxLength `100`
   */
  SupersededTemplates?: string[];
};
/**
 * Type definition for `AWS::PCAConnectorAD::Template.ValidityPeriod`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pcaconnectorad-template-validityperiod.html}
 */
export type ValidityPeriod = {
  /**
   * @min `1`
   * @max `8766000`
   */
  Period: number;
  PeriodType: ValidityPeriodType;
};
/**
 * Type definition for `AWS::PCAConnectorAD::Template.ValidityPeriodType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pcaconnectorad-template-validityperiodtype.html}
 */
export type ValidityPeriodType =
  | "HOURS"
  | "DAYS"
  | "WEEKS"
  | "MONTHS"
  | "YEARS";
/**
 * Resource type definition for `AWS::PCAConnectorAD::Template`.
 * Represents a template that defines certificate configurations, both for issuance and client handling
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorad-template.html}
 */
export class PCAConnectorADTemplate extends $Resource<
  "AWS::PCAConnectorAD::Template",
  PCAConnectorADTemplateProperties,
  PCAConnectorADTemplateAttributes
> {
  public static readonly Type = "AWS::PCAConnectorAD::Template";
  public static readonly AttributeNames = ["TemplateArn" as const];
  constructor(
    logicalId: string,
    properties: PCAConnectorADTemplateProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      PCAConnectorADTemplate.Type,
      properties,
      PCAConnectorADTemplate.AttributeNames,
      options,
    );
  }
}
