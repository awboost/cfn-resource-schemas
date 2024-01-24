import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::Glue::DataCatalogEncryptionSettings
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-datacatalogencryptionsettings.html}
 */
export type GlueDataCatalogEncryptionSettingsProperties = {
  CatalogId: string;
  DataCatalogEncryptionSettings: DataCatalogEncryptionSettings;
};
/**
 * Attribute type definition for `AWS::Glue::DataCatalogEncryptionSettings`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-datacatalogencryptionsettings.html#aws-resource-glue-datacatalogencryptionsettings-return-values}
 */
export type GlueDataCatalogEncryptionSettingsAttributes = {
  Id: string;
};
/**
 * Type definition for `AWS::Glue::DataCatalogEncryptionSettings.ConnectionPasswordEncryption`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-datacatalogencryptionsettings-connectionpasswordencryption.html}
 */
export type ConnectionPasswordEncryption = {
  KmsKeyId?: string;
  ReturnConnectionPasswordEncrypted?: boolean;
};
/**
 * Type definition for `AWS::Glue::DataCatalogEncryptionSettings.DataCatalogEncryptionSettings`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-datacatalogencryptionsettings-datacatalogencryptionsettings.html}
 */
export type DataCatalogEncryptionSettings = {
  ConnectionPasswordEncryption?: ConnectionPasswordEncryption;
  EncryptionAtRest?: EncryptionAtRest;
};
/**
 * Type definition for `AWS::Glue::DataCatalogEncryptionSettings.EncryptionAtRest`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-datacatalogencryptionsettings-encryptionatrest.html}
 */
export type EncryptionAtRest = {
  CatalogEncryptionMode?: string;
  SseAwsKmsKeyId?: string;
};
/**
 * Resource Type definition for AWS::Glue::DataCatalogEncryptionSettings
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-datacatalogencryptionsettings.html}
 */
export class GlueDataCatalogEncryptionSettings extends $Resource<
  "AWS::Glue::DataCatalogEncryptionSettings",
  GlueDataCatalogEncryptionSettingsProperties,
  GlueDataCatalogEncryptionSettingsAttributes
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
