import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * The ``AWS::LakeFormation::PrincipalPermissions`` resource represents the permissions that a principal has on a GLUDC resource (such as GLUlong databases or GLUlong tables). When you create a ``PrincipalPermissions`` resource, the permissions are granted via the LFlong ``GrantPermissions`` API operation. When you delete a ``PrincipalPermissions`` resource, the permissions on principal-resource pair are revoked via the LFlong ``RevokePermissions`` API operation.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lakeformation-principalpermissions.html}
 */
export type LakeFormationPrincipalPermissionsProperties = {
  /**
   * The identifier for the GLUDC. By default, the account ID. The GLUDC is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment.
   * @minLength `12`
   * @maxLength `12`
   */
  Catalog?: string;
  /**
   * The permissions granted or revoked.
   */
  Permissions: Permission[];
  /**
   * Indicates the ability to grant permissions (as a subset of permissions granted).
   */
  PermissionsWithGrantOption: Permission[];
  /**
   * The principal to be granted a permission.
   */
  Principal: DataLakePrincipal;
  /**
   * The resource to be granted or revoked permissions.
   */
  Resource: Resource;
};
/**
 * Attribute type definition for `AWS::LakeFormation::PrincipalPermissions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lakeformation-principalpermissions.html#aws-resource-lakeformation-principalpermissions-return-values}
 */
export type LakeFormationPrincipalPermissionsAttributes = {
  PrincipalIdentifier: string;
  ResourceIdentifier: string;
};
/**
 * Type definition for `AWS::LakeFormation::PrincipalPermissions.CatalogResource`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lakeformation-principalpermissions-catalogresource.html}
 */
export type CatalogResource = Record<string, any>;
/**
 * Type definition for `AWS::LakeFormation::PrincipalPermissions.ColumnWildcard`.
 * A wildcard object, consisting of an optional list of excluded column names or indexes.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lakeformation-principalpermissions-columnwildcard.html}
 */
export type ColumnWildcard = {
  /**
   * Excludes column names. Any column with this name will be excluded.
   */
  ExcludedColumnNames?: string[];
};
/**
 * Type definition for `AWS::LakeFormation::PrincipalPermissions.DatabaseResource`.
 * A structure for the database object.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lakeformation-principalpermissions-databaseresource.html}
 */
export type DatabaseResource = {
  /**
   * The identifier for the Data Catalog. By default, it is the account ID of the caller.
   * @minLength `12`
   * @maxLength `12`
   */
  CatalogId: string;
  /**
   * The name of the database resource. Unique to the Data Catalog.
   * @minLength `1`
   * @maxLength `255`
   */
  Name: string;
};
/**
 * Type definition for `AWS::LakeFormation::PrincipalPermissions.DataCellsFilterResource`.
 * A structure that describes certain columns on certain rows.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lakeformation-principalpermissions-datacellsfilterresource.html}
 */
export type DataCellsFilterResource = {
  /**
   * A database in the GLUDC.
   * @minLength `1`
   * @maxLength `255`
   */
  DatabaseName: string;
  /**
   * The name given by the user to the data filter cell.
   * @minLength `1`
   * @maxLength `255`
   */
  Name: string;
  /**
   * The ID of the catalog to which the table belongs.
   * @minLength `12`
   * @maxLength `12`
   */
  TableCatalogId: string;
  /**
   * The name of the table.
   * @minLength `1`
   * @maxLength `255`
   */
  TableName: string;
};
/**
 * Type definition for `AWS::LakeFormation::PrincipalPermissions.DataLakePrincipal`.
 * The LFlong principal.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lakeformation-principalpermissions-datalakeprincipal.html}
 */
export type DataLakePrincipal = {
  /**
   * An identifier for the LFlong principal.
   * @minLength `1`
   * @maxLength `255`
   */
  DataLakePrincipalIdentifier?: string;
};
/**
 * Type definition for `AWS::LakeFormation::PrincipalPermissions.DataLocationResource`.
 * A structure for a data location object where permissions are granted or revoked.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lakeformation-principalpermissions-datalocationresource.html}
 */
export type DataLocationResource = {
  /**
   * The identifier for the GLUDC where the location is registered with LFlong.
   * @minLength `12`
   * @maxLength `12`
   */
  CatalogId: string;
  /**
   * The Amazon Resource Name (ARN) that uniquely identifies the data location resource.
   */
  ResourceArn: string;
};
/**
 * Type definition for `AWS::LakeFormation::PrincipalPermissions.LFTag`.
 * The LF-tag key and values attached to a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lakeformation-principalpermissions-lftag.html}
 */
export type LFTag = {
  /**
   * The key-name for the LF-tag.
   * @minLength `1`
   * @maxLength `128`
   */
  TagKey?: string;
  /**
   * A list of possible values of the corresponding ``TagKey`` of an LF-tag key-value pair.
   * @minLength `1`
   * @maxLength `50`
   */
  TagValues?: string[];
};
/**
 * Type definition for `AWS::LakeFormation::PrincipalPermissions.LFTagKeyResource`.
 * A structure containing an LF-tag key and values for a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lakeformation-principalpermissions-lftagkeyresource.html}
 */
export type LFTagKeyResource = {
  /**
   * The identifier for the GLUDC where the location is registered with GLUDC.
   * @minLength `12`
   * @maxLength `12`
   */
  CatalogId: string;
  /**
   * The key-name for the LF-tag.
   * @minLength `1`
   * @maxLength `255`
   */
  TagKey: string;
  /**
   * A list of possible values for the corresponding ``TagKey`` of an LF-tag key-value pair.
   * @minLength `1`
   * @maxLength `50`
   */
  TagValues: string[];
};
/**
 * Type definition for `AWS::LakeFormation::PrincipalPermissions.LFTagPolicyResource`.
 * A list of LF-tag conditions that define a resource's LF-tag policy.
 A structure that allows an admin to grant user permissions on certain conditions. For example, granting a role access to all columns that do not have the LF-tag 'PII' in tables that have the LF-tag 'Prod'.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lakeformation-principalpermissions-lftagpolicyresource.html}
 */
export type LFTagPolicyResource = {
  /**
   * The identifier for the GLUDC. The GLUDC is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your LFlong environment.
   * @minLength `12`
   * @maxLength `12`
   */
  CatalogId: string;
  /**
   * A list of LF-tag conditions that apply to the resource's LF-tag policy.
   * @minLength `1`
   * @maxLength `5`
   */
  Expression: LFTag[];
  /**
   * The resource type for which the LF-tag policy applies.
   */
  ResourceType: ResourceType;
};
/**
 * Type definition for `AWS::LakeFormation::PrincipalPermissions.Permission`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lakeformation-principalpermissions-permission.html}
 */
export type Permission =
  | "ALL"
  | "SELECT"
  | "ALTER"
  | "DROP"
  | "DELETE"
  | "INSERT"
  | "DESCRIBE"
  | "CREATE_DATABASE"
  | "CREATE_TABLE"
  | "DATA_LOCATION_ACCESS"
  | "CREATE_LF_TAG"
  | "ASSOCIATE"
  | "GRANT_WITH_LF_TAG_EXPRESSION";
/**
 * Type definition for `AWS::LakeFormation::PrincipalPermissions.Resource`.
 * A structure for the resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lakeformation-principalpermissions-resource.html}
 */
export type Resource = {
  /**
   * The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your LFlong environment.
   */
  Catalog?: CatalogResource;
  /**
   * A data cell filter.
   */
  DataCellsFilter?: DataCellsFilterResource;
  /**
   * The location of an Amazon S3 path where permissions are granted or revoked.
   */
  DataLocation?: DataLocationResource;
  /**
   * The database for the resource. Unique to the Data Catalog. A database is a set of associated table definitions organized into a logical group. You can Grant and Revoke database permissions to a principal.
   */
  Database?: DatabaseResource;
  /**
   * The LF-tag key and values attached to a resource.
   */
  LFTag?: LFTagKeyResource;
  /**
   * A list of LF-tag conditions that define a resource's LF-tag policy.
   */
  LFTagPolicy?: LFTagPolicyResource;
  /**
   * The table for the resource. A table is a metadata definition that represents your data. You can Grant and Revoke table privileges to a principal.
   */
  Table?: TableResource;
  /**
   * The table with columns for the resource. A principal with permissions to this resource can select metadata from the columns of a table in the Data Catalog and the underlying data in Amazon S3.
   */
  TableWithColumns?: TableWithColumnsResource;
};
/**
 * Type definition for `AWS::LakeFormation::PrincipalPermissions.ResourceType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lakeformation-principalpermissions-resourcetype.html}
 */
export type ResourceType = "DATABASE" | "TABLE";
/**
 * Type definition for `AWS::LakeFormation::PrincipalPermissions.TableResource`.
 * A structure for the table object. A table is a metadata definition that represents your data. You can Grant and Revoke table privileges to a principal.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lakeformation-principalpermissions-tableresource.html}
 */
export type TableResource = {
  /**
   * The identifier for the Data Catalog. By default, it is the account ID of the caller.
   * @minLength `12`
   * @maxLength `12`
   */
  CatalogId: string;
  /**
   * The name of the database for the table. Unique to a Data Catalog. A database is a set of associated table definitions organized into a logical group. You can Grant and Revoke database privileges to a principal.
   * @minLength `1`
   * @maxLength `255`
   */
  DatabaseName: string;
  /**
   * The name of the table.
   * @minLength `1`
   * @maxLength `255`
   */
  Name?: string;
  /**
     * A wildcard object representing every table under a database.
     At least one of ``TableResource$Name`` or ``TableResource$TableWildcard`` is required.
     */
  TableWildcard?: TableWildcard;
};
/**
 * Type definition for `AWS::LakeFormation::PrincipalPermissions.TableWildcard`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lakeformation-principalpermissions-tablewildcard.html}
 */
export type TableWildcard = Record<string, any>;
/**
 * Type definition for `AWS::LakeFormation::PrincipalPermissions.TableWithColumnsResource`.
 * A structure for a table with columns object. This object is only used when granting a SELECT permission.
 This object must take a value for at least one of ``ColumnsNames``, ``ColumnsIndexes``, or ``ColumnsWildcard``.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lakeformation-principalpermissions-tablewithcolumnsresource.html}
 */
export type TableWithColumnsResource = {
  /**
   * The identifier for the GLUDC where the location is registered with LFlong.
   * @minLength `12`
   * @maxLength `12`
   */
  CatalogId: string;
  /**
   * The list of column names for the table. At least one of ``ColumnNames`` or ``ColumnWildcard`` is required.
   */
  ColumnNames?: string[];
  /**
   * A wildcard specified by a ``ColumnWildcard`` object. At least one of ``ColumnNames`` or ``ColumnWildcard`` is required.
   */
  ColumnWildcard?: ColumnWildcard;
  /**
   * The name of the database for the table with columns resource. Unique to the Data Catalog. A database is a set of associated table definitions organized into a logical group. You can Grant and Revoke database privileges to a principal.
   * @minLength `1`
   * @maxLength `255`
   */
  DatabaseName: string;
  /**
   * The name of the table resource. A table is a metadata definition that represents your data. You can Grant and Revoke table privileges to a principal.
   * @minLength `1`
   * @maxLength `255`
   */
  Name: string;
};
/**
 * The ``AWS::LakeFormation::PrincipalPermissions`` resource represents the permissions that a principal has on a GLUDC resource (such as GLUlong databases or GLUlong tables). When you create a ``PrincipalPermissions`` resource, the permissions are granted via the LFlong ``GrantPermissions`` API operation. When you delete a ``PrincipalPermissions`` resource, the permissions on principal-resource pair are revoked via the LFlong ``RevokePermissions`` API operation.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lakeformation-principalpermissions.html}
 */
export class LakeFormationPrincipalPermissions extends $Resource<
  "AWS::LakeFormation::PrincipalPermissions",
  LakeFormationPrincipalPermissionsProperties,
  LakeFormationPrincipalPermissionsAttributes
> {
  public static readonly Type = "AWS::LakeFormation::PrincipalPermissions";
  constructor(
    logicalId: string,
    properties: LakeFormationPrincipalPermissionsProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      LakeFormationPrincipalPermissions.Type,
      properties,
      options,
    );
  }
}
