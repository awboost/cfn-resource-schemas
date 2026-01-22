import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::Backup::TieringConfiguration
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backup-tieringconfiguration.html}
 */
export type BackupTieringConfigurationProperties = {
  BackupVaultName: string;
  ResourceSelection: ResourceSelection[];
  TieringConfigurationName: string;
  TieringConfigurationTags?: Record<string, string>;
};
/**
 * Attribute type definition for `AWS::Backup::TieringConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backup-tieringconfiguration.html#aws-resource-backup-tieringconfiguration-return-values}
 */
export type BackupTieringConfigurationAttributes = {
  CreationTime: string;
  LastUpdatedTime: string;
  TieringConfigurationArn: string;
};
/**
 * Type definition for `AWS::Backup::TieringConfiguration.ResourceSelection`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-backup-tieringconfiguration-resourceselection.html}
 */
export type ResourceSelection = {
  ResourceType: string;
  Resources: string[];
  TieringDownSettingsInDays: number;
};
/**
 * Resource Type definition for AWS::Backup::TieringConfiguration
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backup-tieringconfiguration.html}
 */
export class BackupTieringConfiguration extends $Resource<
  "AWS::Backup::TieringConfiguration",
  BackupTieringConfigurationProperties,
  BackupTieringConfigurationAttributes
> {
  public static readonly Type = "AWS::Backup::TieringConfiguration";
  constructor(
    logicalId: string,
    properties: BackupTieringConfigurationProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, BackupTieringConfiguration.Type, properties, options);
  }
}
