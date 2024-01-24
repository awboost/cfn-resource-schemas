import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::Backup::BackupPlan
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backup-backupplan.html}
 */
export type BackupBackupPlanProperties = {
  BackupPlan: BackupPlanResourceType;
  BackupPlanTags?: Record<string, string>;
};
/**
 * Attribute type definition for `AWS::Backup::BackupPlan`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backup-backupplan.html#aws-resource-backup-backupplan-return-values}
 */
export type BackupBackupPlanAttributes = {
  BackupPlanArn: string;
  BackupPlanId: string;
  VersionId: string;
};
/**
 * Type definition for `AWS::Backup::BackupPlan.AdvancedBackupSettingResourceType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-backup-backupplan-advancedbackupsettingresourcetype.html}
 */
export type AdvancedBackupSettingResourceType = {
  BackupOptions: Record<string, any>;
  ResourceType: string;
};
/**
 * Type definition for `AWS::Backup::BackupPlan.BackupPlanResourceType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-backup-backupplan-backupplanresourcetype.html}
 */
export type BackupPlanResourceType = {
  AdvancedBackupSettings?: AdvancedBackupSettingResourceType[];
  BackupPlanName: string;
  BackupPlanRule: BackupRuleResourceType[];
};
/**
 * Type definition for `AWS::Backup::BackupPlan.BackupRuleResourceType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-backup-backupplan-backupruleresourcetype.html}
 */
export type BackupRuleResourceType = {
  CompletionWindowMinutes?: number;
  CopyActions?: CopyActionResourceType[];
  EnableContinuousBackup?: boolean;
  Lifecycle?: LifecycleResourceType;
  RecoveryPointTags?: Record<string, string>;
  RuleName: string;
  ScheduleExpression?: string;
  ScheduleExpressionTimezone?: string;
  StartWindowMinutes?: number;
  TargetBackupVault: string;
};
/**
 * Type definition for `AWS::Backup::BackupPlan.CopyActionResourceType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-backup-backupplan-copyactionresourcetype.html}
 */
export type CopyActionResourceType = {
  DestinationBackupVaultArn: string;
  Lifecycle?: LifecycleResourceType;
};
/**
 * Type definition for `AWS::Backup::BackupPlan.LifecycleResourceType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-backup-backupplan-lifecycleresourcetype.html}
 */
export type LifecycleResourceType = {
  DeleteAfterDays?: number;
  MoveToColdStorageAfterDays?: number;
};
/**
 * Resource Type definition for AWS::Backup::BackupPlan
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backup-backupplan.html}
 */
export class BackupBackupPlan extends $Resource<
  "AWS::Backup::BackupPlan",
  BackupBackupPlanProperties,
  BackupBackupPlanAttributes
> {
  public static readonly Type = "AWS::Backup::BackupPlan";
  constructor(
    logicalId: string,
    properties: BackupBackupPlanProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, BackupBackupPlan.Type, properties, options);
  }
}
