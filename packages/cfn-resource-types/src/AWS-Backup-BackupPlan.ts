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
  ScanSettings?: ScanSettingResourceType[];
};
/**
 * Type definition for `AWS::Backup::BackupPlan.BackupRuleResourceType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-backup-backupplan-backupruleresourcetype.html}
 */
export type BackupRuleResourceType = {
  CompletionWindowMinutes?: number;
  CopyActions?: CopyActionResourceType[];
  EnableContinuousBackup?: boolean;
  IndexActions?: IndexActionsResourceType[];
  Lifecycle?: LifecycleResourceType;
  RecoveryPointTags?: Record<string, string>;
  RuleName: string;
  ScanActions?: ScanActionResourceType[];
  ScheduleExpression?: string;
  ScheduleExpressionTimezone?: string;
  StartWindowMinutes?: number;
  TargetBackupVault: string;
  TargetLogicallyAirGappedBackupVaultArn?: string;
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
 * Type definition for `AWS::Backup::BackupPlan.IndexActionsResourceType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-backup-backupplan-indexactionsresourcetype.html}
 */
export type IndexActionsResourceType = {
  ResourceTypes?: string[];
};
/**
 * Type definition for `AWS::Backup::BackupPlan.LifecycleResourceType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-backup-backupplan-lifecycleresourcetype.html}
 */
export type LifecycleResourceType = {
  DeleteAfterDays?: number;
  MoveToColdStorageAfterDays?: number;
  OptInToArchiveForSupportedResources?: boolean;
};
/**
 * Type definition for `AWS::Backup::BackupPlan.MalwareScanner`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-backup-backupplan-malwarescanner.html}
 */
export type MalwareScanner = "GUARDDUTY";
/**
 * Type definition for `AWS::Backup::BackupPlan.ScanActionResourceType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-backup-backupplan-scanactionresourcetype.html}
 */
export type ScanActionResourceType = {
  MalwareScanner?: MalwareScanner;
  ScanMode?: ScanMode;
};
/**
 * Type definition for `AWS::Backup::BackupPlan.ScanMode`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-backup-backupplan-scanmode.html}
 */
export type ScanMode = "FULL_SCAN" | "INCREMENTAL_SCAN";
/**
 * Type definition for `AWS::Backup::BackupPlan.ScanSettingResourceType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-backup-backupplan-scansettingresourcetype.html}
 */
export type ScanSettingResourceType = {
  MalwareScanner?: MalwareScanner;
  ResourceTypes?: string[];
  ScannerRoleArn?: string;
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
