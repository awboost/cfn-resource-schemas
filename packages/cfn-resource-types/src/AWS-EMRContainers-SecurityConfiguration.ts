import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Schema of AWS::EMRContainers::SecurityConfiguration Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emrcontainers-securityconfiguration.html}
 */
export type EMRContainersSecurityConfigurationProperties = {
  /**
   * Container provider for the security configuration.
   */
  ContainerProvider?: ContainerProvider;
  /**
   * The name of the security configuration.
   * @minLength `1`
   * @maxLength `64`
   * @pattern `^[a-zA-Z0-9\-_]+$`
   */
  Name?: string;
  /**
   * Security configuration input for the security configuration.
   */
  SecurityConfigurationData: SecurityConfigurationData;
  /**
   * An array of key-value pairs to apply to this security configuration.
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::EMRContainers::SecurityConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emrcontainers-securityconfiguration.html#aws-resource-emrcontainers-securityconfiguration-return-values}
 */
export type EMRContainersSecurityConfigurationAttributes = {
  /**
   * The ARN of the security configuration.
   */
  Arn: string;
  /**
   * The ID of the security configuration.
   */
  Id: string;
};
/**
 * Type definition for `AWS::EMRContainers::SecurityConfiguration.AtRestEncryptionConfiguration`.
 * At-rest encryption configuration.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emrcontainers-securityconfiguration-atrestencryptionconfiguration.html}
 */
export type AtRestEncryptionConfiguration = {
  /**
   * Local disk encryption configuration.
   */
  LocalDiskEncryptionConfiguration?: LocalDiskEncryptionConfiguration;
  /**
   * S3 encryption configuration.
   */
  S3EncryptionConfiguration?: S3EncryptionConfiguration;
};
/**
 * Type definition for `AWS::EMRContainers::SecurityConfiguration.AuthenticationConfiguration`.
 * Authentication configuration for the security configuration.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emrcontainers-securityconfiguration-authenticationconfiguration.html}
 */
export type AuthenticationConfiguration = {
  /**
   * IAM configuration.
   */
  IAMConfiguration?: IAMConfiguration;
  /**
   * Identity Center configuration.
   */
  IdentityCenterConfiguration?: IdentityCenterConfiguration;
};
/**
 * Type definition for `AWS::EMRContainers::SecurityConfiguration.AuthorizationConfiguration`.
 * Authorization configuration for the security configuration.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emrcontainers-securityconfiguration-authorizationconfiguration.html}
 */
export type AuthorizationConfiguration = {
  /**
   * Lake Formation configuration.
   */
  LakeFormationConfiguration?: LakeFormationConfiguration;
};
/**
 * Type definition for `AWS::EMRContainers::SecurityConfiguration.ContainerInfo`.
 * Container information.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emrcontainers-securityconfiguration-containerinfo.html}
 */
export type ContainerInfo = {
  /**
   * EKS information.
   */
  EksInfo?: EksInfo;
};
/**
 * Type definition for `AWS::EMRContainers::SecurityConfiguration.ContainerProvider`.
 * Container provider information.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emrcontainers-securityconfiguration-containerprovider.html}
 */
export type ContainerProvider = {
  /**
   * The container provider ID.
   */
  Id: string;
  /**
   * Container information.
   */
  Info?: ContainerInfo;
  /**
   * The container provider type.
   */
  Type: "EKS";
};
/**
 * Type definition for `AWS::EMRContainers::SecurityConfiguration.EksInfo`.
 * EKS information.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emrcontainers-securityconfiguration-eksinfo.html}
 */
export type EksInfo = {
  /**
   * The EKS namespace.
   */
  Namespace?: string;
};
/**
 * Type definition for `AWS::EMRContainers::SecurityConfiguration.EncryptionConfiguration`.
 * Encryption configuration for the security configuration.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emrcontainers-securityconfiguration-encryptionconfiguration.html}
 */
export type EncryptionConfiguration = {
  /**
   * At-rest encryption configuration.
   */
  AtRestEncryptionConfiguration?: AtRestEncryptionConfiguration;
  /**
   * In-transit encryption configuration.
   */
  InTransitEncryptionConfiguration?: InTransitEncryptionConfiguration;
};
/**
 * Type definition for `AWS::EMRContainers::SecurityConfiguration.IAMConfiguration`.
 * IAM configuration.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emrcontainers-securityconfiguration-iamconfiguration.html}
 */
export type IAMConfiguration = {
  /**
   * The system role ARN.
   * @pattern `^arn:(aws|aws-us-gov|aws-cn|aws-iso|aws-iso-b):iam::\d{12}:role/.+$`
   */
  SystemRole?: string;
};
/**
 * Type definition for `AWS::EMRContainers::SecurityConfiguration.IdentityCenterConfiguration`.
 * Identity Center configuration.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emrcontainers-securityconfiguration-identitycenterconfiguration.html}
 */
export type IdentityCenterConfiguration = {
  /**
   * Whether to enable Identity Center integration.
   */
  EnableIdentityCenter?: boolean;
  /**
   * Whether Identity Center application assignment is required.
   */
  IdentityCenterApplicationAssignmentRequired?: boolean;
  /**
   * The ARN of the Identity Center instance.
   * @pattern `^arn:(aws|aws-us-gov|aws-cn|aws-iso|aws-iso-b):sso:::instance/(sso)?ins-[a-zA-Z0-9-.]{16}$`
   */
  IdentityCenterInstanceARN?: string;
};
/**
 * Type definition for `AWS::EMRContainers::SecurityConfiguration.InTransitEncryptionConfiguration`.
 * In-transit encryption configuration.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emrcontainers-securityconfiguration-intransitencryptionconfiguration.html}
 */
export type InTransitEncryptionConfiguration = {
  /**
   * TLS certificate configuration for in-transit encryption.
   */
  TLSCertificateConfiguration?: TLSCertificateConfiguration;
};
/**
 * Type definition for `AWS::EMRContainers::SecurityConfiguration.LakeFormationConfiguration`.
 * Lake Formation configuration.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emrcontainers-securityconfiguration-lakeformationconfiguration.html}
 */
export type LakeFormationConfiguration = {
  /**
   * The session tag to authorize Lake Formation access.
   * @minLength `1`
   * @maxLength `256`
   */
  AuthorizedSessionTagValue?: string;
  /**
   * Whether query access control is enabled.
   */
  QueryAccessControlEnabled?: boolean;
  /**
   * The ARN of the query engine role.
   * @pattern `^arn:(aws|aws-us-gov|aws-cn|aws-iso|aws-iso-b):iam::\d{12}:role/.+$`
   */
  QueryEngineRoleArn?: string;
  /**
   * Secure namespace information for Lake Formation.
   */
  SecureNamespaceInfo?: SecureNamespaceInfo;
};
/**
 * Type definition for `AWS::EMRContainers::SecurityConfiguration.LocalDiskEncryptionConfiguration`.
 * Local disk encryption configuration.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emrcontainers-securityconfiguration-localdiskencryptionconfiguration.html}
 */
export type LocalDiskEncryptionConfiguration = {
  /**
   * The AWS KMS key ID.
   */
  AwsKmsKeyId?: string;
  /**
   * The encryption key provider type.
   */
  EncryptionKeyProviderType?: "AwsKms";
};
/**
 * Type definition for `AWS::EMRContainers::SecurityConfiguration.S3EncryptionConfiguration`.
 * S3 encryption configuration.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emrcontainers-securityconfiguration-s3encryptionconfiguration.html}
 */
export type S3EncryptionConfiguration = {
  /**
   * The S3 encryption option.
   */
  EncryptionOption?: "SSE-S3" | "SSE-KMS" | "CSE-KMS";
  /**
   * The KMS key ID for encryption.
   */
  KMSKeyId?: string;
};
/**
 * Type definition for `AWS::EMRContainers::SecurityConfiguration.SecureNamespaceInfo`.
 * Secure namespace information for Lake Formation.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emrcontainers-securityconfiguration-securenamespaceinfo.html}
 */
export type SecureNamespaceInfo = {
  /**
   * The ID of the cluster.
   * @minLength `1`
   * @maxLength `100`
   */
  ClusterId?: string;
  /**
   * The namespace.
   * @minLength `1`
   * @maxLength `63`
   */
  Namespace?: string;
};
/**
 * Type definition for `AWS::EMRContainers::SecurityConfiguration.SecurityConfigurationData`.
 * Security configuration data containing encryption and authorization settings.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emrcontainers-securityconfiguration-securityconfigurationdata.html}
 */
export type SecurityConfigurationData = {
  /**
   * Authentication configuration for the security configuration.
   */
  AuthenticationConfiguration?: AuthenticationConfiguration;
  /**
   * Authorization configuration for the security configuration.
   */
  AuthorizationConfiguration?: AuthorizationConfiguration;
  /**
   * Encryption configuration for the security configuration.
   */
  EncryptionConfiguration?: EncryptionConfiguration;
};
/**
 * Type definition for `AWS::EMRContainers::SecurityConfiguration.Tag`.
 * An arbitrary set of tags (key-value pairs) for this security configuration.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emrcontainers-securityconfiguration-tag.html}
 */
export type Tag = {
  /**
   * The key name of the tag.
   */
  Key: string;
  /**
   * The value for the tag.
   */
  Value: string;
};
/**
 * Type definition for `AWS::EMRContainers::SecurityConfiguration.TLSCertificateConfiguration`.
 * TLS certificate configuration for in-transit encryption.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emrcontainers-securityconfiguration-tlscertificateconfiguration.html}
 */
export type TLSCertificateConfiguration = {
  /**
   * The certificate provider type.
   */
  CertificateProviderType?: "PEM";
  /**
   * The ARN of the secret containing the private key.
   */
  PrivateKeySecretArn?: string;
  /**
   * The ARN of the secret containing the public key.
   */
  PublicKeySecretArn?: string;
};
/**
 * Resource Schema of AWS::EMRContainers::SecurityConfiguration Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emrcontainers-securityconfiguration.html}
 */
export class EMRContainersSecurityConfiguration extends $Resource<
  "AWS::EMRContainers::SecurityConfiguration",
  EMRContainersSecurityConfigurationProperties,
  EMRContainersSecurityConfigurationAttributes
> {
  public static readonly Type = "AWS::EMRContainers::SecurityConfiguration";
  constructor(
    logicalId: string,
    properties: EMRContainersSecurityConfigurationProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      EMRContainersSecurityConfiguration.Type,
      properties,
      options,
    );
  }
}
