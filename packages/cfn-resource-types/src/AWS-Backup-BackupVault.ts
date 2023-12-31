import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource Type definition for AWS::Backup::BackupVault
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backup-backupvault.html}
 */
export type BackupBackupVaultProperties = {
  AccessPolicy?: Record<string, any> | string;
  /**
   * @pattern `^[a-zA-Z0-9\-\_]{2,50}$`
   */
  BackupVaultName: string;
  BackupVaultTags?: Record<string, string>;
  EncryptionKeyArn?: string;
  LockConfiguration?: LockConfigurationType;
  Notifications?: NotificationObjectType;
};
/**
 * Attribute type definition for `AWS::Backup::BackupVault`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backup-backupvault.html#aws-resource-backup-backupvault-return-values}
 */
export type BackupBackupVaultAttributes = {
  BackupVaultArn: string;
};
/**
 * Type definition for `AWS::Backup::BackupVault.LockConfigurationType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-backup-backupvault-lockconfigurationtype.html}
 */
export type LockConfigurationType = {
  ChangeableForDays?: number;
  MaxRetentionDays?: number;
  MinRetentionDays: number;
};
/**
 * Type definition for `AWS::Backup::BackupVault.NotificationObjectType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-backup-backupvault-notificationobjecttype.html}
 */
export type NotificationObjectType = {
  BackupVaultEvents: string[];
  SNSTopicArn: string;
};
/**
 * Resource Type definition for AWS::Backup::BackupVault
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backup-backupvault.html}
 */
export class BackupBackupVault extends $Resource<
  "AWS::Backup::BackupVault",
  BackupBackupVaultProperties,
  BackupBackupVaultAttributes
> {
  public static readonly Type = "AWS::Backup::BackupVault";
  public static readonly AttributeNames = ["BackupVaultArn" as const];
  constructor(
    logicalId: string,
    properties: BackupBackupVaultProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      BackupBackupVault.Type,
      properties,
      BackupBackupVault.AttributeNames,
      options,
    );
  }
}
