import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::LakeFormation::Permissions
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lakeformation-permissions.html}
 */
export type LakeFormationPermissionsProperties = {
  DataLakePrincipal: DataLakePrincipal;
  Permissions?: string[];
  PermissionsWithGrantOption?: string[];
  Resource: Resource;
};
/**
 * Attribute type definition for `AWS::LakeFormation::Permissions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lakeformation-permissions.html#aws-resource-lakeformation-permissions-return-values}
 */
export type LakeFormationPermissionsAttributes = {
  Id: string;
};
/**
 * Type definition for `AWS::LakeFormation::Permissions.ColumnWildcard`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lakeformation-permissions-columnwildcard.html}
 */
export type ColumnWildcard = {
  ExcludedColumnNames?: string[];
};
/**
 * Type definition for `AWS::LakeFormation::Permissions.DatabaseResource`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lakeformation-permissions-databaseresource.html}
 */
export type DatabaseResource = {
  CatalogId?: string;
  Name?: string;
};
/**
 * Type definition for `AWS::LakeFormation::Permissions.DataLakePrincipal`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lakeformation-permissions-datalakeprincipal.html}
 */
export type DataLakePrincipal = {
  DataLakePrincipalIdentifier?: string;
};
/**
 * Type definition for `AWS::LakeFormation::Permissions.DataLocationResource`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lakeformation-permissions-datalocationresource.html}
 */
export type DataLocationResource = {
  CatalogId?: string;
  S3Resource?: string;
};
/**
 * Type definition for `AWS::LakeFormation::Permissions.Resource`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lakeformation-permissions-resource.html}
 */
export type Resource = {
  DataLocationResource?: DataLocationResource;
  DatabaseResource?: DatabaseResource;
  TableResource?: TableResource;
  TableWithColumnsResource?: TableWithColumnsResource;
};
/**
 * Type definition for `AWS::LakeFormation::Permissions.TableResource`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lakeformation-permissions-tableresource.html}
 */
export type TableResource = {
  CatalogId?: string;
  DatabaseName?: string;
  Name?: string;
  TableWildcard?: TableWildcard;
};
/**
 * Type definition for `AWS::LakeFormation::Permissions.TableWildcard`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lakeformation-permissions-tablewildcard.html}
 */
export type TableWildcard = Record<string, any>;
/**
 * Type definition for `AWS::LakeFormation::Permissions.TableWithColumnsResource`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lakeformation-permissions-tablewithcolumnsresource.html}
 */
export type TableWithColumnsResource = {
  CatalogId?: string;
  ColumnNames?: string[];
  ColumnWildcard?: ColumnWildcard;
  DatabaseName?: string;
  Name?: string;
};
/**
 * Resource Type definition for AWS::LakeFormation::Permissions
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lakeformation-permissions.html}
 */
export class LakeFormationPermissions extends $Resource<
  "AWS::LakeFormation::Permissions",
  LakeFormationPermissionsProperties,
  LakeFormationPermissionsAttributes
> {
  public static readonly Type = "AWS::LakeFormation::Permissions";
  constructor(
    logicalId: string,
    properties: LakeFormationPermissionsProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, LakeFormationPermissions.Type, properties, options);
  }
}
