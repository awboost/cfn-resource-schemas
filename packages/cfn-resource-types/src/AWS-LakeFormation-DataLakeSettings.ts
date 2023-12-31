import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
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
  public static readonly AttributeNames = ["Id" as const];
  constructor(
    logicalId: string,
    properties: LakeFormationDataLakeSettingsProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      LakeFormationDataLakeSettings.Type,
      properties,
      LakeFormationDataLakeSettings.AttributeNames,
      options,
    );
  }
}
