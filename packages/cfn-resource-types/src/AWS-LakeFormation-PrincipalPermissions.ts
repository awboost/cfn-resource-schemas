import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource type definition for `AWS::LakeFormation::PrincipalPermissions`.
 * A resource schema representing a Lake Formation Permission.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lakeformation-principalpermissions.html}
 */
export type LakeFormationPrincipalPermissionsProperties = {
  /**
   * @minLength `12`
   * @maxLength `12`
   */
  Catalog?: string;
  Permissions: Permission[];
  PermissionsWithGrantOption: Permission[];
  Principal: DataLakePrincipal;
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
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lakeformation-principalpermissions-columnwildcard.html}
 */
export type ColumnWildcard = {
  ExcludedColumnNames?: string[];
};
/**
 * Type definition for `AWS::LakeFormation::PrincipalPermissions.DataCellsFilterResource`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lakeformation-principalpermissions-datacellsfilterresource.html}
 */
export type DataCellsFilterResource = {
  /**
   * @minLength `1`
   * @maxLength `255`
   */
  DatabaseName: string;
  /**
   * @minLength `1`
   * @maxLength `255`
   */
  Name: string;
  /**
   * @minLength `12`
   * @maxLength `12`
   */
  TableCatalogId: string;
  /**
   * @minLength `1`
   * @maxLength `255`
   */
  TableName: string;
};
/**
 * Type definition for `AWS::LakeFormation::PrincipalPermissions.DataLakePrincipal`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lakeformation-principalpermissions-datalakeprincipal.html}
 */
export type DataLakePrincipal = {
  /**
   * @minLength `1`
   * @maxLength `255`
   */
  DataLakePrincipalIdentifier?: string;
};
/**
 * Type definition for `AWS::LakeFormation::PrincipalPermissions.DataLocationResource`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lakeformation-principalpermissions-datalocationresource.html}
 */
export type DataLocationResource = {
  /**
   * @minLength `12`
   * @maxLength `12`
   */
  CatalogId: string;
  ResourceArn: string;
};
/**
 * Type definition for `AWS::LakeFormation::PrincipalPermissions.DatabaseResource`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lakeformation-principalpermissions-databaseresource.html}
 */
export type DatabaseResource = {
  /**
   * @minLength `12`
   * @maxLength `12`
   */
  CatalogId: string;
  /**
   * @minLength `1`
   * @maxLength `255`
   */
  Name: string;
};
/**
 * Type definition for `AWS::LakeFormation::PrincipalPermissions.LFTag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lakeformation-principalpermissions-lftag.html}
 */
export type LFTag = {
  /**
   * @minLength `1`
   * @maxLength `128`
   */
  TagKey?: string;
  /**
   * @minLength `1`
   * @maxLength `50`
   */
  TagValues?: string[];
};
/**
 * Type definition for `AWS::LakeFormation::PrincipalPermissions.LFTagKeyResource`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lakeformation-principalpermissions-lftagkeyresource.html}
 */
export type LFTagKeyResource = {
  /**
   * @minLength `12`
   * @maxLength `12`
   */
  CatalogId: string;
  /**
   * @minLength `1`
   * @maxLength `255`
   */
  TagKey: string;
  /**
   * @minLength `1`
   * @maxLength `50`
   */
  TagValues: string[];
};
/**
 * Type definition for `AWS::LakeFormation::PrincipalPermissions.LFTagPair`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lakeformation-principalpermissions-lftagpair.html}
 */
export type LFTagPair = {
  /**
   * @minLength `12`
   * @maxLength `12`
   */
  CatalogId?: string;
  /**
   * @minLength `1`
   * @maxLength `128`
   */
  TagKey: string;
  /**
   * @minLength `1`
   * @maxLength `50`
   */
  TagValues: string[];
};
/**
 * Type definition for `AWS::LakeFormation::PrincipalPermissions.LFTagPolicyResource`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lakeformation-principalpermissions-lftagpolicyresource.html}
 */
export type LFTagPolicyResource = {
  /**
   * @minLength `12`
   * @maxLength `12`
   */
  CatalogId: string;
  /**
   * @minLength `1`
   * @maxLength `5`
   */
  Expression: LFTag[];
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
  | "CREATE_TAG"
  | "ASSOCIATE";
/**
 * Type definition for `AWS::LakeFormation::PrincipalPermissions.PrincipalPermissions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lakeformation-principalpermissions-principalpermissions.html}
 */
export type PrincipalPermissions = {
  DataLakePrincipal?: DataLakePrincipal;
  PermissionList?: Permission[];
};
/**
 * Type definition for `AWS::LakeFormation::PrincipalPermissions.PrincipalResourcePair`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lakeformation-principalpermissions-principalresourcepair.html}
 */
export type PrincipalResourcePair = {
  Principal: DataLakePrincipal;
  Resource: Resource;
};
/**
 * Type definition for `AWS::LakeFormation::PrincipalPermissions.Resource`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lakeformation-principalpermissions-resource.html}
 */
export type Resource = {
  Catalog?: CatalogResource;
  DataCellsFilter?: DataCellsFilterResource;
  DataLocation?: DataLocationResource;
  Database?: DatabaseResource;
  LFTag?: LFTagKeyResource;
  LFTagPolicy?: LFTagPolicyResource;
  Table?: TableResource;
  TableWithColumns?: TableWithColumnsResource;
};
/**
 * Type definition for `AWS::LakeFormation::PrincipalPermissions.ResourceType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lakeformation-principalpermissions-resourcetype.html}
 */
export type ResourceType = "DATABASE" | "TABLE";
/**
 * Type definition for `AWS::LakeFormation::PrincipalPermissions.TableResource`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lakeformation-principalpermissions-tableresource.html}
 */
export type TableResource = {
  /**
   * @minLength `12`
   * @maxLength `12`
   */
  CatalogId: string;
  /**
   * @minLength `1`
   * @maxLength `255`
   */
  DatabaseName: string;
  /**
   * @minLength `1`
   * @maxLength `255`
   */
  Name?: string;
  TableWildcard?: TableWildcard;
};
/**
 * Type definition for `AWS::LakeFormation::PrincipalPermissions.TableWildcard`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lakeformation-principalpermissions-tablewildcard.html}
 */
export type TableWildcard = Record<string, any>;
/**
 * Type definition for `AWS::LakeFormation::PrincipalPermissions.TableWithColumnsResource`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lakeformation-principalpermissions-tablewithcolumnsresource.html}
 */
export type TableWithColumnsResource = {
  /**
   * @minLength `12`
   * @maxLength `12`
   */
  CatalogId: string;
  ColumnNames?: string[];
  ColumnWildcard?: ColumnWildcard;
  /**
   * @minLength `1`
   * @maxLength `255`
   */
  DatabaseName: string;
  /**
   * @minLength `1`
   * @maxLength `255`
   */
  Name: string;
};
/**
 * Resource type definition for `AWS::LakeFormation::PrincipalPermissions`.
 * A resource schema representing a Lake Formation Permission.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lakeformation-principalpermissions.html}
 */
export class LakeFormationPrincipalPermissions extends $Resource<
  "AWS::LakeFormation::PrincipalPermissions",
  LakeFormationPrincipalPermissionsProperties,
  LakeFormationPrincipalPermissionsAttributes
> {
  public static readonly Type = "AWS::LakeFormation::PrincipalPermissions";
  public static readonly AttributeNames = [
    "PrincipalIdentifier" as const,
    "ResourceIdentifier" as const,
  ];
  constructor(
    logicalId: string,
    properties: LakeFormationPrincipalPermissionsProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      LakeFormationPrincipalPermissions.Type,
      properties,
      LakeFormationPrincipalPermissions.AttributeNames,
      options,
    );
  }
}
