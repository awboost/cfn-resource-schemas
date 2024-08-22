import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::Glue::Database
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-database.html}
 */
export type GlueDatabaseProperties = {
  /**
   * The AWS account ID for the account in which to create the catalog object.
   */
  CatalogId: string;
  /**
   * The metadata for the database.
   */
  DatabaseInput: DatabaseInput;
  /**
   * The name of the database. For hive compatibility, this is folded to lowercase when it is store.
   */
  DatabaseName?: string;
};
/**
 * Type definition for `AWS::Glue::Database.DatabaseIdentifier`.
 * A structure that describes a target database for resource linking.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-database-databaseidentifier.html}
 */
export type DatabaseIdentifier = {
  /**
   * The ID of the Data Catalog in which the database resides.
   */
  CatalogId?: string;
  /**
   * The name of the catalog database.
   */
  DatabaseName?: string;
  /**
   * Region of the target database.
   */
  Region?: string;
};
/**
 * Type definition for `AWS::Glue::Database.DatabaseInput`.
 * The structure used to create or update a database.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-database-databaseinput.html}
 */
export type DatabaseInput = {
  /**
   * Creates a set of default permissions on the table for principals. Used by AWS Lake Formation. Not used in the normal course of AWS Glue operations.
   */
  CreateTableDefaultPermissions?: PrincipalPrivileges[];
  /**
   * A description of the database.
   */
  Description?: string;
  /**
   * A FederatedDatabase structure that references an entity outside the AWS Glue Data Catalog.
   */
  FederatedDatabase?: FederatedDatabase;
  /**
   * The location of the database (for example, an HDFS path).
   */
  LocationUri?: string;
  /**
   * The name of the database. For hive compatibility, this is folded to lowercase when it is stored.
   */
  Name?: string;
  /**
   * These key-value pairs define parameters and properties of the database.
   */
  Parameters?: Record<string, any>;
  /**
   * A DatabaseIdentifier structure that describes a target database for resource linking.
   */
  TargetDatabase?: DatabaseIdentifier;
};
/**
 * Type definition for `AWS::Glue::Database.DataLakePrincipal`.
 * The AWS Lake Formation principal.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-database-datalakeprincipal.html}
 */
export type DataLakePrincipal = {
  /**
   * An identifier for the AWS Lake Formation principal.
   */
  DataLakePrincipalIdentifier?: string;
};
/**
 * Type definition for `AWS::Glue::Database.FederatedDatabase`.
 * A FederatedDatabase structure that references an entity outside the AWS Glue Data Catalog.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-database-federateddatabase.html}
 */
export type FederatedDatabase = {
  /**
   * The name of the connection to the external metastore.
   */
  ConnectionName?: string;
  /**
   * A unique identifier for the federated database.
   */
  Identifier?: string;
};
/**
 * Type definition for `AWS::Glue::Database.PrincipalPrivileges`.
 * The permissions granted to a principal.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-database-principalprivileges.html}
 */
export type PrincipalPrivileges = {
  /**
   * The permissions that are granted to the principal.
   */
  Permissions?: string[];
  /**
   * The principal who is granted permissions.
   */
  Principal?: DataLakePrincipal;
};
/**
 * Resource Type definition for AWS::Glue::Database
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-database.html}
 */
export class GlueDatabase extends $Resource<
  "AWS::Glue::Database",
  GlueDatabaseProperties,
  Record<string, never>
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
