import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::Glue::Database
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-database.html}
 */
export type GlueDatabaseProperties = {
  CatalogId: string;
  DatabaseInput: DatabaseInput;
};
/**
 * Attribute type definition for `AWS::Glue::Database`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-database.html#aws-resource-glue-database-return-values}
 */
export type GlueDatabaseAttributes = {
  Id: string;
};
/**
 * Type definition for `AWS::Glue::Database.DatabaseIdentifier`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-database-databaseidentifier.html}
 */
export type DatabaseIdentifier = {
  CatalogId?: string;
  DatabaseName?: string;
  Region?: string;
};
/**
 * Type definition for `AWS::Glue::Database.DatabaseInput`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-database-databaseinput.html}
 */
export type DatabaseInput = {
  CreateTableDefaultPermissions?: PrincipalPrivileges[];
  Description?: string;
  FederatedDatabase?: FederatedDatabase;
  LocationUri?: string;
  Name?: string;
  Parameters?: Record<string, any>;
  TargetDatabase?: DatabaseIdentifier;
};
/**
 * Type definition for `AWS::Glue::Database.DataLakePrincipal`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-database-datalakeprincipal.html}
 */
export type DataLakePrincipal = {
  DataLakePrincipalIdentifier?: string;
};
/**
 * Type definition for `AWS::Glue::Database.FederatedDatabase`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-database-federateddatabase.html}
 */
export type FederatedDatabase = {
  ConnectionName?: string;
  Identifier?: string;
};
/**
 * Type definition for `AWS::Glue::Database.PrincipalPrivileges`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-database-principalprivileges.html}
 */
export type PrincipalPrivileges = {
  Permissions?: string[];
  Principal?: DataLakePrincipal;
};
/**
 * Resource Type definition for AWS::Glue::Database
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-database.html}
 */
export class GlueDatabase extends $Resource<
  "AWS::Glue::Database",
  GlueDatabaseProperties,
  GlueDatabaseAttributes
> {
  public static readonly Type = "AWS::Glue::Database";
  constructor(
    logicalId: string,
    properties: GlueDatabaseProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, GlueDatabase.Type, properties, options);
  }
}
