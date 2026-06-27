import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::Glue::DataCatalogEncryptionSettings
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-datacatalogencryptionsettings.html}
 */
export type GlueDataCatalogEncryptionSettingsProperties = {
  /**
   * The ID of the Data Catalog in which the settings are created.
   */
  CatalogId: string;
  /**
   * Contains configuration information for maintaining Data Catalog security.
   */
  DataCatalogEncryptionSettings: DataCatalogEncryptionSettings;
};
/**
 * Type definition for `AWS::Glue::DataCatalogEncryptionSettings.ConnectionPasswordEncryption`.
 * When connection password protection is enabled, the Data Catalog uses a customer-provided key to encrypt the password as part of CreateConnection or UpdateConnection and store it in the ENCRYPTED_PASSWORD field in the connection properties. You can enable catalog encryption or only password encryption.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-datacatalogencryptionsettings-connectionpasswordencryption.html}
 */
export type ConnectionPasswordEncryption = {
  /**
   * An AWS KMS key that is used to encrypt the connection password.
   */
  KmsKeyId?: string;
  /**
   * When the ReturnConnectionPasswordEncrypted flag is set to 'true', passwords remain encrypted in the responses of GetConnection and GetConnections. This encryption takes effect independently from catalog encryption.
   */
  ReturnConnectionPasswordEncrypted?: boolean;
};
/**
 * Type definition for `AWS::Glue::DataCatalogEncryptionSettings.DataCatalogEncryptionSettings`.
 * Contains configuration information for maintaining Data Catalog security.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-datacatalogencryptionsettings-datacatalogencryptionsettings.html}
 */
export type DataCatalogEncryptionSettings = {
  /**
   * When connection password protection is enabled, the Data Catalog uses a customer-provided key to encrypt the password as part of CreateConnection or UpdateConnection and store it in the ENCRYPTED_PASSWORD field in the connection properties. You can enable catalog encryption or only password encryption.
   */
  ConnectionPasswordEncryption?: ConnectionPasswordEncryption;
  /**
   * Specifies the encryption-at-rest configuration for the Data Catalog.
   */
  EncryptionAtRest?: EncryptionAtRest;
};
/**
 * Type definition for `AWS::Glue::DataCatalogEncryptionSettings.EncryptionAtRest`.
 * Specifies the encryption-at-rest configuration for the Data Catalog.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-datacatalogencryptionsettings-encryptionatrest.html}
 */
export type EncryptionAtRest = {
  /**
   * The encryption-at-rest mode for encrypting Data Catalog data.
   */
  CatalogEncryptionMode?: string;
  /**
   * The role that AWS Glue assumes to encrypt and decrypt the Data Catalog objects on the caller's behalf.
   */
  CatalogEncryptionServiceRole?: string;
  /**
   * The ID of the AWS KMS key to use for encryption at rest.
   */
  SseAwsKmsKeyId?: string;
};
/**
 * Resource Type definition for AWS::Glue::DataCatalogEncryptionSettings
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-datacatalogencryptionsettings.html}
 */
export class GlueDataCatalogEncryptionSettings extends $Resource<
  "AWS::Glue::DataCatalogEncryptionSettings",
  GlueDataCatalogEncryptionSettingsProperties,
  Record<string, never>
> {
  public static readonly Type = "AWS::Glue::DataCatalogEncryptionSettings";
  constructor(
    logicalId: string,
    properties: GlueDataCatalogEncryptionSettingsProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      GlueDataCatalogEncryptionSettings.Type,
      properties,
      options,
    );
  }
}
