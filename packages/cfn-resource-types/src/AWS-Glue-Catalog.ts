import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::Glue::Catalog`.
 * Creates a catalog in the Glue Data Catalog.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-catalog.html}
 */
export type GlueCatalogProperties = {
  /**
   * Allows third-party engines to access data in Amazon S3 locations that are registered with Lake Formation.
   */
  AllowFullTableExternalDataAccess?: "True" | "False";
  /**
   * A structure that specifies data lake access properties and other custom properties.
   */
  CatalogProperties?: CatalogProperties;
  /**
   * A description of the catalog.
   * @maxLength `2048`
   */
  Description?: string;
  /**
   * A FederatedCatalog structure that references an entity outside the Glue Data Catalog.
   */
  FederatedCatalog?: FederatedCatalog;
  /**
   * The name of the catalog to create.
   * @minLength `1`
   * @maxLength `255`
   */
  Name: string;
  /**
   * Specifies whether to overwrite child resource permissions with the default permissions.
   */
  OverwriteChildResourcePermissionsWithDefault?: "Accept" | "Deny";
  /**
   * A map of key-value pairs that define parameters and properties of the catalog.
   */
  Parameters?: Record<string, string>;
  /**
   * An array of key-value pairs to apply to this resource.
   */
  Tags?: Tag[];
  /**
   * A structure that describes a target catalog for resource linking.
   */
  TargetRedshiftCatalog?: TargetRedshiftCatalog;
};
/**
 * Attribute type definition for `AWS::Glue::Catalog`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-catalog.html#aws-resource-glue-catalog-return-values}
 */
export type GlueCatalogAttributes = {
  /**
   * The ID of the catalog.
   */
  CatalogId: string;
  /**
   * A structure that specifies data lake access properties and other custom properties.
   */
  CatalogProperties: {
    /**
     * Additional key-value properties for the catalog.
     */
    CustomProperties: Record<string, string>;
    /**
     * Data lake access properties for the catalog.
     */
    DataLakeAccessProperties: {
      /**
       * The name of the managed workgroup associated with the catalog.
       */
      ManagedWorkgroupName: string;
      /**
       * The status of the managed workgroup.
       */
      ManagedWorkgroupStatus: string;
      /**
       * The name of the Redshift database.
       */
      RedshiftDatabaseName: string;
    };
  };
  /**
   * An array of PrincipalPermissions objects for default database permissions.
   */
  CreateDatabaseDefaultPermissions: {
    /**
     * The permissions that are granted to the principal.
     */
    Permissions: (
      | "ALL"
      | "SELECT"
      | "ALTER"
      | "DROP"
      | "DELETE"
      | "INSERT"
      | "CREATE_DATABASE"
      | "CREATE_TABLE"
      | "DATA_LOCATION_ACCESS"
    )[];
    /**
     * The Lake Formation principal.
     */
    Principal: {
      /**
       * An identifier for the Lake Formation principal.
       * @minLength `1`
       * @maxLength `255`
       */
      DataLakePrincipalIdentifier: string;
    };
  }[];
  /**
   * An array of PrincipalPermissions objects for default table permissions.
   */
  CreateTableDefaultPermissions: {
    /**
     * The permissions that are granted to the principal.
     */
    Permissions: (
      | "ALL"
      | "SELECT"
      | "ALTER"
      | "DROP"
      | "DELETE"
      | "INSERT"
      | "CREATE_DATABASE"
      | "CREATE_TABLE"
      | "DATA_LOCATION_ACCESS"
    )[];
    /**
     * The Lake Formation principal.
     */
    Principal: {
      /**
       * An identifier for the Lake Formation principal.
       * @minLength `1`
       * @maxLength `255`
       */
      DataLakePrincipalIdentifier: string;
    };
  }[];
  /**
   * The time at which the catalog was created.
   */
  CreateTime: number;
  /**
   * The Amazon Resource Name (ARN) of the catalog.
   */
  ResourceArn: string;
  /**
   * The time at which the catalog was last updated.
   */
  UpdateTime: number;
};
/**
 * Type definition for `AWS::Glue::Catalog.CatalogProperties`.
 * A structure that specifies data lake access properties and other custom properties.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-catalog-catalogproperties.html}
 */
export type CatalogProperties = {
  /**
   * Data lake access properties for the catalog.
   */
  DataLakeAccessProperties?: DataLakeAccessProperties;
};
/**
 * Type definition for `AWS::Glue::Catalog.DataLakeAccessProperties`.
 * Data lake access properties for the catalog.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-catalog-datalakeaccessproperties.html}
 */
export type DataLakeAccessProperties = {
  /**
   * Allows third-party engines to access data in Amazon S3 locations that are registered with Lake Formation.
   */
  AllowFullTableExternalDataAccess?: "True" | "False";
  /**
   * Specifies a federated catalog type for the native catalog resource.
   */
  CatalogType?: string;
  /**
   * Turns on or off data lake access for Apache Spark applications that access Amazon Redshift databases in the Data Catalog from any non-Redshift engine.
   */
  DataLakeAccess?: boolean;
  /**
   * A role that will be assumed by Glue for transferring data into/out of the staging bucket during a query.
   */
  DataTransferRole?: string;
  /**
   * An encryption key that will be used for the staging bucket that will be created along with the catalog.
   */
  KmsKey?: string;
};
/**
 * Type definition for `AWS::Glue::Catalog.FederatedCatalog`.
 * A FederatedCatalog structure that references an entity outside the Glue Data Catalog.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-catalog-federatedcatalog.html}
 */
export type FederatedCatalog = {
  /**
   * The name of the connection to an external data source.
   */
  ConnectionName?: string;
  /**
   * A unique identifier for the federated catalog.
   */
  Identifier?: string;
};
/**
 * Type definition for `AWS::Glue::Catalog.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-catalog-tag.html}
 */
export type Tag = {
  /**
   * The key name of the tag.
   * @minLength `1`
   * @maxLength `128`
   */
  Key: string;
  /**
   * The value for the tag.
   * @minLength `0`
   * @maxLength `256`
   */
  Value: string;
};
/**
 * Type definition for `AWS::Glue::Catalog.TargetRedshiftCatalog`.
 * A structure that describes a target catalog for resource linking.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-catalog-targetredshiftcatalog.html}
 */
export type TargetRedshiftCatalog = {
  /**
   * The Amazon Resource Name (ARN) of the catalog resource.
   */
  CatalogArn: string;
};
/**
 * Resource type definition for `AWS::Glue::Catalog`.
 * Creates a catalog in the Glue Data Catalog.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-catalog.html}
 */
export class GlueCatalog extends $Resource<
  "AWS::Glue::Catalog",
  GlueCatalogProperties,
  GlueCatalogAttributes
> {
  public static readonly Type = "AWS::Glue::Catalog";
  constructor(
    logicalId: string,
    properties: GlueCatalogProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, GlueCatalog.Type, properties, options);
  }
}
