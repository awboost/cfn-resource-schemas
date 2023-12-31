import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::Backup::BackupSelection
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backup-backupselection.html}
 */
export type BackupBackupSelectionProperties = {
  BackupPlanId: string;
  BackupSelection: BackupSelectionResourceType;
};
/**
 * Attribute type definition for `AWS::Backup::BackupSelection`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backup-backupselection.html#aws-resource-backup-backupselection-return-values}
 */
export type BackupBackupSelectionAttributes = {
  Id: string;
  SelectionId: string;
};
/**
 * Type definition for `AWS::Backup::BackupSelection.BackupSelectionResourceType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-backup-backupselection-backupselectionresourcetype.html}
 */
export type BackupSelectionResourceType = {
  Conditions?: {
    StringEquals?: ConditionParameter[];
    StringLike?: ConditionParameter[];
    StringNotEquals?: ConditionParameter[];
    StringNotLike?: ConditionParameter[];
  };
  IamRoleArn: string;
  ListOfTags?: ConditionResourceType[];
  NotResources?: string[];
  Resources?: string[];
  SelectionName: string;
};
/**
 * Type definition for `AWS::Backup::BackupSelection.ConditionParameter`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-backup-backupselection-conditionparameter.html}
 */
export type ConditionParameter = {
  ConditionKey?: string;
  ConditionValue?: string;
};
/**
 * Type definition for `AWS::Backup::BackupSelection.ConditionResourceType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-backup-backupselection-conditionresourcetype.html}
 */
export type ConditionResourceType = {
  ConditionKey: string;
  ConditionType: string;
  ConditionValue: string;
};
/**
 * Resource Type definition for AWS::Backup::BackupSelection
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backup-backupselection.html}
 */
export class BackupBackupSelection extends $Resource<
  "AWS::Backup::BackupSelection",
  BackupBackupSelectionProperties,
  BackupBackupSelectionAttributes
> {
  public static readonly Type = "AWS::Backup::BackupSelection";
  constructor(
    logicalId: string,
    properties: BackupBackupSelectionProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, BackupBackupSelection.Type, properties, options);
  }
}
