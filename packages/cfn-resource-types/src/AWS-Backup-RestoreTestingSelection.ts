import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::Backup::RestoreTestingSelection
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backup-restoretestingselection.html}
 */
export type BackupRestoreTestingSelectionProperties = {
  IamRoleArn: string;
  ProtectedResourceArns?: string[];
  ProtectedResourceConditions?: ProtectedResourceConditions;
  ProtectedResourceType: string;
  RestoreMetadataOverrides?: SensitiveStringMap;
  RestoreTestingPlanName: string;
  RestoreTestingSelectionName: string;
  ValidationWindowHours?: number;
};
/**
 * Type definition for `AWS::Backup::RestoreTestingSelection.KeyValue`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-backup-restoretestingselection-keyvalue.html}
 */
export type KeyValue = {
  Key: string;
  Value: string;
};
/**
 * Type definition for `AWS::Backup::RestoreTestingSelection.ProtectedResourceConditions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-backup-restoretestingselection-protectedresourceconditions.html}
 */
export type ProtectedResourceConditions = {
  StringEquals?: KeyValue[];
  StringNotEquals?: KeyValue[];
};
/**
 * Type definition for `AWS::Backup::RestoreTestingSelection.SensitiveStringMap`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-backup-restoretestingselection-sensitivestringmap.html}
 */
export type SensitiveStringMap = Record<string, string>;
/**
 * Resource Type definition for AWS::Backup::RestoreTestingSelection
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backup-restoretestingselection.html}
 */
export class BackupRestoreTestingSelection extends $Resource<
  "AWS::Backup::RestoreTestingSelection",
  BackupRestoreTestingSelectionProperties,
  Record<string, never>
> {
  public static readonly Type = "AWS::Backup::RestoreTestingSelection";
  constructor(
    logicalId: string,
    properties: BackupRestoreTestingSelectionProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, BackupRestoreTestingSelection.Type, properties, options);
  }
}
