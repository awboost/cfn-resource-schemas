import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Definition of AWS::Backup::RestoreTestingPlan Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backup-restoretestingplan.html}
 */
export type BackupRestoreTestingPlanProperties = {
  RecoveryPointSelection: RestoreTestingRecoveryPointSelection;
  RestoreTestingPlanName: string;
  ScheduleExpression: string;
  ScheduleExpressionTimezone?: string;
  ScheduleStatus?: RestoreTestingScheduleStatus;
  StartWindowHours?: number;
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::Backup::RestoreTestingPlan`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backup-restoretestingplan.html#aws-resource-backup-restoretestingplan-return-values}
 */
export type BackupRestoreTestingPlanAttributes = {
  RestoreTestingPlanArn: string;
};
/**
 * Type definition for `AWS::Backup::RestoreTestingPlan.RestoreTestingRecoveryPointSelection`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-backup-restoretestingplan-restoretestingrecoverypointselection.html}
 */
export type RestoreTestingRecoveryPointSelection = {
  Algorithm: RestoreTestingRecoveryPointSelectionAlgorithm;
  ExcludeVaults?: string[];
  IncludeVaults: string[];
  RecoveryPointTypes: RestoreTestingRecoveryPointType[];
  SelectionWindowDays?: number;
};
/**
 * Type definition for `AWS::Backup::RestoreTestingPlan.RestoreTestingRecoveryPointSelectionAlgorithm`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-backup-restoretestingplan-restoretestingrecoverypointselectionalgorithm.html}
 */
export type RestoreTestingRecoveryPointSelectionAlgorithm =
  | "LATEST_WITHIN_WINDOW"
  | "RANDOM_WITHIN_WINDOW";
/**
 * Type definition for `AWS::Backup::RestoreTestingPlan.RestoreTestingRecoveryPointType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-backup-restoretestingplan-restoretestingrecoverypointtype.html}
 */
export type RestoreTestingRecoveryPointType = "SNAPSHOT" | "CONTINUOUS";
/**
 * Type definition for `AWS::Backup::RestoreTestingPlan.RestoreTestingScheduleStatus`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-backup-restoretestingplan-restoretestingschedulestatus.html}
 */
export type RestoreTestingScheduleStatus = "ACTIVE" | "SUSPENDED";
/**
 * Type definition for `AWS::Backup::RestoreTestingPlan.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-backup-restoretestingplan-tag.html}
 */
export type Tag = {
  /**
   * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @minLength `1`
   * @maxLength `128`
   */
  Key: string;
  /**
   * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @minLength `0`
   * @maxLength `256`
   */
  Value: string;
};
/**
 * Definition of AWS::Backup::RestoreTestingPlan Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backup-restoretestingplan.html}
 */
export class BackupRestoreTestingPlan extends $Resource<
  "AWS::Backup::RestoreTestingPlan",
  BackupRestoreTestingPlanProperties,
  BackupRestoreTestingPlanAttributes
> {
  public static readonly Type = "AWS::Backup::RestoreTestingPlan";
  constructor(
    logicalId: string,
    properties: BackupRestoreTestingPlanProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, BackupRestoreTestingPlan.Type, properties, options);
  }
}
