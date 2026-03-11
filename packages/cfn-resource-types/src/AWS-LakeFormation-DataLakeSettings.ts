import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::LakeFormation::DataLakeSettings
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lakeformation-datalakesettings.html}
 */
export type LakeFormationDataLakeSettingsProperties = {
  Admins?: DataLakePrincipal[];
  AllowExternalDataFiltering?: boolean;
  AllowFullTableExternalDataAccess?: boolean;
  AuthorizedSessionTagValueList?: string[];
  CreateDatabaseDefaultPermissions?: PrincipalPermissions[];
  CreateTableDefaultPermissions?: PrincipalPermissions[];
  ExternalDataFilteringAllowList?: DataLakePrincipal[];
  MutationType?: string;
  Parameters?: Record<string, any>;
  ReadOnlyAdmins?: DataLakePrincipal[];
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
 * Type definition for `AWS::LakeFormation::DataLakeSettings.DataLakePrincipal`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lakeformation-datalakesettings-datalakeprincipal.html}
 */
export type DataLakePrincipal = {
  DataLakePrincipalIdentifier: string;
};
/**
 * Type definition for `AWS::LakeFormation::DataLakeSettings.PrincipalPermissions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lakeformation-datalakesettings-principalpermissions.html}
 */
export type PrincipalPermissions = {
  Permissions: string[];
  Principal: DataLakePrincipal;
};
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
