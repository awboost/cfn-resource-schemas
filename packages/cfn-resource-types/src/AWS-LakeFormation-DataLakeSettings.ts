import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::LakeFormation::DataLakeSettings
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lakeformation-datalakesettings.html}
 */
export type LakeFormationDataLakeSettingsProperties = {
  Admins?: Admins;
  AllowExternalDataFiltering?: boolean;
  AllowFullTableExternalDataAccess?: boolean;
  AuthorizedSessionTagValueList?: string[];
  CreateDatabaseDefaultPermissions?: CreateDatabaseDefaultPermissions;
  CreateTableDefaultPermissions?: CreateTableDefaultPermissions;
  ExternalDataFilteringAllowList?: ExternalDataFilteringAllowList;
  MutationType?: string;
  Parameters?: Record<string, any>;
  TrustedResourceOwners?: string[];
};
/**
 * Attribute type definition for `AWS::LakeFormation::DataLakeSettings`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lakeformation-datalakesettings.html#aws-resource-lakeformation-datalakesettings-return-values}
 */
export type LakeFormationDataLakeSettingsAttributes = {
  Id: string;
};
/**
 * Type definition for `AWS::LakeFormation::DataLakeSettings.Admins`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lakeformation-datalakesettings-admins.html}
 */
export type Admins = Record<string, any>;
/**
 * Type definition for `AWS::LakeFormation::DataLakeSettings.CreateDatabaseDefaultPermissions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lakeformation-datalakesettings-createdatabasedefaultpermissions.html}
 */
export type CreateDatabaseDefaultPermissions = Record<string, any>;
/**
 * Type definition for `AWS::LakeFormation::DataLakeSettings.CreateTableDefaultPermissions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lakeformation-datalakesettings-createtabledefaultpermissions.html}
 */
export type CreateTableDefaultPermissions = Record<string, any>;
/**
 * Type definition for `AWS::LakeFormation::DataLakeSettings.ExternalDataFilteringAllowList`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lakeformation-datalakesettings-externaldatafilteringallowlist.html}
 */
export type ExternalDataFilteringAllowList = Record<string, any>;
/**
 * Resource Type definition for AWS::LakeFormation::DataLakeSettings
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lakeformation-datalakesettings.html}
 */
export class LakeFormationDataLakeSettings extends $Resource<
  "AWS::LakeFormation::DataLakeSettings",
  LakeFormationDataLakeSettingsProperties,
  LakeFormationDataLakeSettingsAttributes
> {
  public static readonly Type = "AWS::LakeFormation::DataLakeSettings";
  constructor(
    logicalId: string,
    properties: LakeFormationDataLakeSettingsProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, LakeFormationDataLakeSettings.Type, properties, options);
  }
}
