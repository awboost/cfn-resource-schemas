import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::Backup::LogicallyAirGappedBackupVault
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backup-logicallyairgappedbackupvault.html}
 */
export type BackupLogicallyAirGappedBackupVaultProperties = {
  AccessPolicy?: Record<string, any> | string;
  /**
   * @pattern `^[a-zA-Z0-9\-\_]{2,50}$`
   */
  BackupVaultName: string;
  BackupVaultTags?: Record<string, string>;
  MaxRetentionDays: number;
  MinRetentionDays: number;
  Notifications?: NotificationObjectType;
};
/**
 * Attribute type definition for `AWS::Backup::LogicallyAirGappedBackupVault`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backup-logicallyairgappedbackupvault.html#aws-resource-backup-logicallyairgappedbackupvault-return-values}
 */
export type BackupLogicallyAirGappedBackupVaultAttributes = {
  BackupVaultArn: string;
  EncryptionKeyArn: string;
  VaultState: string;
  VaultType: string;
};
/**
 * Type definition for `AWS::Backup::LogicallyAirGappedBackupVault.NotificationObjectType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-backup-logicallyairgappedbackupvault-notificationobjecttype.html}
 */
export type NotificationObjectType = {
  BackupVaultEvents: string[];
  SNSTopicArn: string;
};
/**
 * Resource Type definition for AWS::Backup::LogicallyAirGappedBackupVault
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backup-logicallyairgappedbackupvault.html}
 */
export class BackupLogicallyAirGappedBackupVault extends $Resource<
  "AWS::Backup::LogicallyAirGappedBackupVault",
  BackupLogicallyAirGappedBackupVaultProperties,
  BackupLogicallyAirGappedBackupVaultAttributes
> {
  public static readonly Type = "AWS::Backup::LogicallyAirGappedBackupVault";
  constructor(
    logicalId: string,
    properties: BackupLogicallyAirGappedBackupVaultProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      BackupLogicallyAirGappedBackupVault.Type,
      properties,
      options,
    );
  }
}
