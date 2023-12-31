import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Definition of the AWS::QuickSight::DataSource Resource Type.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-datasource.html}
 */
export type QuickSightDataSourceProperties = {
  /**
     * <p>A set of alternate data source parameters that you want to share for the credentials
                stored with this data source. The credentials are applied in tandem with the data source
                parameters when you copy a data source by using a create or update request. The API
                operation compares the <code>DataSourceParameters</code> structure that's in the request
                with the structures in the <code>AlternateDataSourceParameters</code> allow list. If the
                structures are an exact match, the request is allowed to use the credentials from this
                existing data source. If the <code>AlternateDataSourceParameters</code> list is null,
                the <code>Credentials</code> originally used with this <code>DataSourceParameters</code>
                are automatically allowed.</p>
     * @minLength `1`
     * @maxLength `50`
     */
  AlternateDataSourceParameters?: DataSourceParameters[];
  /**
   * @minLength `12`
   * @maxLength `12`
   * @pattern `^[0-9]{12}$`
   */
  AwsAccountId?: string;
  /**
     * <p>Data source credentials. This is a variant type structure. For this structure to be
                valid, only one of the attributes can be non-null.</p>
     */
  Credentials?: DataSourceCredentials;
  DataSourceId?: string;
  /**
     * <p>The parameters that Amazon QuickSight uses to connect to your underlying data source.
                This is a variant type structure. For this structure to be valid, only one of the
                attributes can be non-null.</p>
     */
  DataSourceParameters?: DataSourceParameters;
  /**
   * <p>Error information for the data source creation or update.</p>
   */
  ErrorInfo?: DataSourceErrorInfo;
  /**
   * <p>A display name for the data source.</p>
   * @minLength `1`
   * @maxLength `128`
   */
  Name?: string;
  /**
   * <p>A list of resource permissions on the data source.</p>
   * @minLength `1`
   * @maxLength `64`
   */
  Permissions?: ResourcePermission[];
  /**
     * <p>Secure Socket Layer (SSL) properties that apply when QuickSight connects to your
                underlying data source.</p>
     */
  SslProperties?: SslProperties;
  /**
   * <p>Contains a map of the key-value pairs for the resource tag or tags assigned to the data source.</p>
   * @minLength `1`
   * @maxLength `200`
   */
  Tags?: Tag[];
  Type?: DataSourceType;
  /**
   * <p>VPC connection properties.</p>
   */
  VpcConnectionProperties?: VpcConnectionProperties;
};
/**
 * Attribute type definition for `AWS::QuickSight::DataSource`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-datasource.html#aws-resource-quicksight-datasource-return-values}
 */
export type QuickSightDataSourceAttributes = {
  /**
   * <p>The Amazon Resource Name (ARN) of the data source.</p>
   */
  Arn: string;
  /**
   * <p>The time that this data source was created.</p>
   */
  CreatedTime: string;
  /**
   * <p>The last time that this data source was updated.</p>
   */
  LastUpdatedTime: string;
  Status: ResourceStatus;
};
/**
 * Type definition for `AWS::QuickSight::DataSource.AmazonElasticsearchParameters`.
 * <p>Amazon Elasticsearch Service parameters.</p>
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-datasource-amazonelasticsearchparameters.html}
 */
export type AmazonElasticsearchParameters = {
  /**
   * <p>The Amazon Elasticsearch Service domain.</p>
   * @minLength `1`
   * @maxLength `64`
   */
  Domain: string;
};
/**
 * Type definition for `AWS::QuickSight::DataSource.AmazonOpenSearchParameters`.
 * <p>Amazon OpenSearch Service parameters.</p>
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-datasource-amazonopensearchparameters.html}
 */
export type AmazonOpenSearchParameters = {
  /**
   * <p>The Amazon OpenSearch Service domain.</p>
   * @minLength `1`
   * @maxLength `64`
   */
  Domain: string;
};
/**
 * Type definition for `AWS::QuickSight::DataSource.AthenaParameters`.
 * <p>Amazon Athena parameters.</p>
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-datasource-athenaparameters.html}
 */
export type AthenaParameters = {
  /**
   * <p>Use the <code>RoleArn</code> structure to override an account-wide role for a specific Athena data source. For example, say an account administrator has turned off all Athena access with an account-wide role. The administrator can then use <code>RoleArn</code> to bypass the account-wide role and allow Athena access for the single Athena data source that is specified in the structure, even if the account-wide role forbidding Athena access is still active.</p>
   * @minLength `20`
   * @maxLength `2048`
   */
  RoleArn?: string;
  /**
   * <p>The workgroup that Amazon Athena uses.</p>
   * @minLength `1`
   * @maxLength `128`
   */
  WorkGroup?: string;
};
/**
 * Type definition for `AWS::QuickSight::DataSource.AuroraParameters`.
 * <p>Amazon Aurora parameters.</p>
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-datasource-auroraparameters.html}
 */
export type AuroraParameters = {
  /**
   * <p>Database.</p>
   * @minLength `1`
   * @maxLength `128`
   */
  Database: string;
  /**
   * <p>Host.</p>
   * @minLength `1`
   * @maxLength `256`
   */
  Host: string;
  /**
   * <p>Port.</p>
   * @min `1`
   * @max `65535`
   */
  Port: number;
};
/**
 * Type definition for `AWS::QuickSight::DataSource.AuroraPostgreSqlParameters`.
 * <p>Amazon Aurora with PostgreSQL compatibility parameters.</p>
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-datasource-aurorapostgresqlparameters.html}
 */
export type AuroraPostgreSqlParameters = {
  /**
   * <p>Database.</p>
   * @minLength `1`
   * @maxLength `128`
   */
  Database: string;
  /**
   * <p>Host.</p>
   * @minLength `1`
   * @maxLength `256`
   */
  Host: string;
  /**
   * <p>Port.</p>
   * @min `1`
   * @max `65535`
   */
  Port: number;
};
/**
 * Type definition for `AWS::QuickSight::DataSource.CredentialPair`.
 * <p>The combination of user name and password that are used as credentials.</p>
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-datasource-credentialpair.html}
 */
export type CredentialPair = {
  /**
     * <p>A set of alternate data source parameters that you want to share for these
                credentials. The credentials are applied in tandem with the data source parameters when
                you copy a data source by using a create or update request. The API operation compares
                the <code>DataSourceParameters</code> structure that's in the request with the
                structures in the <code>AlternateDataSourceParameters</code> allow list. If the
                structures are an exact match, the request is allowed to use the new data source with
                the existing credentials. If the <code>AlternateDataSourceParameters</code> list is
                null, the <code>DataSourceParameters</code> originally used with these
                    <code>Credentials</code> is automatically allowed.</p>
     * @minLength `1`
     * @maxLength `50`
     */
  AlternateDataSourceParameters?: DataSourceParameters[];
  /**
   * <p>Password.</p>
   * @minLength `1`
   * @maxLength `1024`
   */
  Password: string;
  /**
   * <p>User name.</p>
   * @minLength `1`
   * @maxLength `64`
   */
  Username: string;
};
/**
 * Type definition for `AWS::QuickSight::DataSource.DatabricksParameters`.
 * <p>Databricks parameters.</p>
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-datasource-databricksparameters.html}
 */
export type DatabricksParameters = {
  /**
   * <p>Host.</p>
   * @minLength `1`
   * @maxLength `256`
   */
  Host: string;
  /**
   * <p>Port.</p>
   * @min `1`
   * @max `65535`
   */
  Port: number;
  /**
   * <p>The HTTP Path of the Databricks data source.</p>
   * @minLength `1`
   * @maxLength `4096`
   */
  SqlEndpointPath: string;
};
/**
 * Type definition for `AWS::QuickSight::DataSource.DataSourceCredentials`.
 * <p>Data source credentials. This is a variant type structure. For this structure to be
            valid, only one of the attributes can be non-null.</p>
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-datasource-datasourcecredentials.html}
 */
export type DataSourceCredentials = {
  /**
     * <p>The Amazon Resource Name (ARN) of a data source that has the credential pair that you
                want to use. When <code>CopySourceArn</code> is not null, the credential pair from the
                data source in the ARN is used as the credentials for the
                <code>DataSourceCredentials</code> structure.</p>
     * @pattern `^arn:[-a-z0-9]*:quicksight:[-a-z0-9]*:[0-9]{12}:datasource/.+`
     */
  CopySourceArn?: string;
  /**
   * <p>The combination of user name and password that are used as credentials.</p>
   */
  CredentialPair?: CredentialPair;
  /**
   * <p>The Amazon Resource Name (ARN) of the secret associated with the data source in Amazon Secrets Manager.</p>
   * @minLength `1`
   * @maxLength `2048`
   * @pattern `^arn:[-a-z0-9]*:secretsmanager:[-a-z0-9]*:[0-9]{12}:secret:.+`
   */
  SecretArn?: string;
};
/**
 * Type definition for `AWS::QuickSight::DataSource.DataSourceErrorInfo`.
 * <p>Error information for the data source creation or update.</p>
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-datasource-datasourceerrorinfo.html}
 */
export type DataSourceErrorInfo = {
  /**
   * <p>Error message.</p>
   */
  Message?: string;
  Type?: DataSourceErrorInfoType;
};
/**
 * Type definition for `AWS::QuickSight::DataSource.DataSourceErrorInfoType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-datasource-datasourceerrorinfotype.html}
 */
export type DataSourceErrorInfoType =
  | "ACCESS_DENIED"
  | "COPY_SOURCE_NOT_FOUND"
  | "TIMEOUT"
  | "ENGINE_VERSION_NOT_SUPPORTED"
  | "UNKNOWN_HOST"
  | "GENERIC_SQL_FAILURE"
  | "CONFLICT"
  | "UNKNOWN";
/**
 * Type definition for `AWS::QuickSight::DataSource.DataSourceParameters`.
 * <p>The parameters that Amazon QuickSight uses to connect to your underlying data source.
            This is a variant type structure. For this structure to be valid, only one of the
            attributes can be non-null.</p>
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-datasource-datasourceparameters.html}
 */
export type DataSourceParameters = {
  /**
   * <p>Amazon Elasticsearch Service parameters.</p>
   */
  AmazonElasticsearchParameters?: AmazonElasticsearchParameters;
  /**
   * <p>Amazon OpenSearch Service parameters.</p>
   */
  AmazonOpenSearchParameters?: AmazonOpenSearchParameters;
  /**
   * <p>Amazon Athena parameters.</p>
   */
  AthenaParameters?: AthenaParameters;
  /**
   * <p>Amazon Aurora parameters.</p>
   */
  AuroraParameters?: AuroraParameters;
  /**
   * <p>Amazon Aurora with PostgreSQL compatibility parameters.</p>
   */
  AuroraPostgreSqlParameters?: AuroraPostgreSqlParameters;
  /**
   * <p>Databricks parameters.</p>
   */
  DatabricksParameters?: DatabricksParameters;
  /**
   * <p>MariaDB parameters.</p>
   */
  MariaDbParameters?: MariaDbParameters;
  /**
   * <p>MySQL parameters.</p>
   */
  MySqlParameters?: MySqlParameters;
  OracleParameters?: OracleParameters;
  /**
   * <p>PostgreSQL parameters.</p>
   */
  PostgreSqlParameters?: PostgreSqlParameters;
  /**
   * <p>Presto parameters.</p>
   */
  PrestoParameters?: PrestoParameters;
  /**
   * <p>Amazon RDS parameters.</p>
   */
  RdsParameters?: RdsParameters;
  /**
     * <p>Amazon Redshift parameters. The <code>ClusterId</code> field can be blank if
                <code>Host</code> and <code>Port</code> are both set. The <code>Host</code> and
                <code>Port</code> fields can be blank if the <code>ClusterId</code> field is set.</p>
     */
  RedshiftParameters?: RedshiftParameters;
  /**
   * <p>S3 parameters.</p>
   */
  S3Parameters?: S3Parameters;
  /**
   * <p>Snowflake parameters.</p>
   */
  SnowflakeParameters?: SnowflakeParameters;
  /**
   * <p>Spark parameters.</p>
   */
  SparkParameters?: SparkParameters;
  /**
   * <p>SQL Server parameters.</p>
   */
  SqlServerParameters?: SqlServerParameters;
  /**
   * <p>Starburst parameters.</p>
   */
  StarburstParameters?: StarburstParameters;
  /**
   * <p>Teradata parameters.</p>
   */
  TeradataParameters?: TeradataParameters;
  /**
   * <p>Trino parameters.</p>
   */
  TrinoParameters?: TrinoParameters;
};
/**
 * Type definition for `AWS::QuickSight::DataSource.DataSourceType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-datasource-datasourcetype.html}
 */
export type DataSourceType =
  | "ADOBE_ANALYTICS"
  | "AMAZON_ELASTICSEARCH"
  | "AMAZON_OPENSEARCH"
  | "ATHENA"
  | "AURORA"
  | "AURORA_POSTGRESQL"
  | "AWS_IOT_ANALYTICS"
  | "DATABRICKS"
  | "GITHUB"
  | "JIRA"
  | "MARIADB"
  | "MYSQL"
  | "ORACLE"
  | "POSTGRESQL"
  | "PRESTO"
  | "REDSHIFT"
  | "S3"
  | "SALESFORCE"
  | "SERVICENOW"
  | "SNOWFLAKE"
  | "SPARK"
  | "SQLSERVER"
  | "TERADATA"
  | "TWITTER"
  | "TIMESTREAM"
  | "STARBURST"
  | "TRINO";
/**
 * Type definition for `AWS::QuickSight::DataSource.ManifestFileLocation`.
 * <p>Amazon S3 manifest file location.</p>
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-datasource-manifestfilelocation.html}
 */
export type ManifestFileLocation = {
  /**
   * <p>Amazon S3 bucket.</p>
   * @minLength `1`
   * @maxLength `1024`
   */
  Bucket: string;
  /**
   * <p>Amazon S3 key that identifies an object.</p>
   * @minLength `1`
   * @maxLength `1024`
   */
  Key: string;
};
/**
 * Type definition for `AWS::QuickSight::DataSource.MariaDbParameters`.
 * <p>MariaDB parameters.</p>
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-datasource-mariadbparameters.html}
 */
export type MariaDbParameters = {
  /**
   * <p>Database.</p>
   * @minLength `1`
   * @maxLength `128`
   */
  Database: string;
  /**
   * <p>Host.</p>
   * @minLength `1`
   * @maxLength `256`
   */
  Host: string;
  /**
   * <p>Port.</p>
   * @min `1`
   * @max `65535`
   */
  Port: number;
};
/**
 * Type definition for `AWS::QuickSight::DataSource.MySqlParameters`.
 * <p>MySQL parameters.</p>
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-datasource-mysqlparameters.html}
 */
export type MySqlParameters = {
  /**
   * <p>Database.</p>
   * @minLength `1`
   * @maxLength `128`
   */
  Database: string;
  /**
   * <p>Host.</p>
   * @minLength `1`
   * @maxLength `256`
   */
  Host: string;
  /**
   * <p>Port.</p>
   * @min `1`
   * @max `65535`
   */
  Port: number;
};
/**
 * Type definition for `AWS::QuickSight::DataSource.OracleParameters`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-datasource-oracleparameters.html}
 */
export type OracleParameters = {
  /**
   * @minLength `1`
   * @maxLength `128`
   */
  Database: string;
  /**
   * @minLength `1`
   * @maxLength `256`
   */
  Host: string;
  /**
   * @min `1`
   * @max `65535`
   */
  Port: number;
};
/**
 * Type definition for `AWS::QuickSight::DataSource.PostgreSqlParameters`.
 * <p>PostgreSQL parameters.</p>
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-datasource-postgresqlparameters.html}
 */
export type PostgreSqlParameters = {
  /**
   * <p>Database.</p>
   * @minLength `1`
   * @maxLength `128`
   */
  Database: string;
  /**
   * <p>Host.</p>
   * @minLength `1`
   * @maxLength `256`
   */
  Host: string;
  /**
   * <p>Port.</p>
   * @min `1`
   * @max `65535`
   */
  Port: number;
};
/**
 * Type definition for `AWS::QuickSight::DataSource.PrestoParameters`.
 * <p>Presto parameters.</p>
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-datasource-prestoparameters.html}
 */
export type PrestoParameters = {
  /**
   * <p>Catalog.</p>
   * @minLength `0`
   * @maxLength `128`
   */
  Catalog: string;
  /**
   * <p>Host.</p>
   * @minLength `1`
   * @maxLength `256`
   */
  Host: string;
  /**
   * <p>Port.</p>
   * @min `1`
   * @max `65535`
   */
  Port: number;
};
/**
 * Type definition for `AWS::QuickSight::DataSource.RdsParameters`.
 * <p>Amazon RDS parameters.</p>
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-datasource-rdsparameters.html}
 */
export type RdsParameters = {
  /**
   * <p>Database.</p>
   * @minLength `1`
   * @maxLength `128`
   */
  Database: string;
  /**
   * <p>Instance ID.</p>
   * @minLength `1`
   * @maxLength `64`
   */
  InstanceId: string;
};
/**
 * Type definition for `AWS::QuickSight::DataSource.RedshiftParameters`.
 * <p>Amazon Redshift parameters. The <code>ClusterId</code> field can be blank if
            <code>Host</code> and <code>Port</code> are both set. The <code>Host</code> and
            <code>Port</code> fields can be blank if the <code>ClusterId</code> field is set.</p>
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-datasource-redshiftparameters.html}
 */
export type RedshiftParameters = {
  /**
     * <p>Cluster ID. This field can be blank if the <code>Host</code> and <code>Port</code> are
                provided.</p>
     * @minLength `1`
     * @maxLength `64`
     */
  ClusterId?: string;
  /**
   * <p>Database.</p>
   * @minLength `1`
   * @maxLength `128`
   */
  Database: string;
  /**
   * <p>Host. This field can be blank if <code>ClusterId</code> is provided.</p>
   * @minLength `1`
   * @maxLength `256`
   */
  Host?: string;
  /**
   * <p>Port. This field can be blank if the <code>ClusterId</code> is provided.</p>
   * @min `0`
   * @max `65535`
   */
  Port?: number;
};
/**
 * Type definition for `AWS::QuickSight::DataSource.ResourcePermission`.
 * <p>Permission for the resource.</p>
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-datasource-resourcepermission.html}
 */
export type ResourcePermission = {
  /**
   * <p>The IAM action to grant or revoke permissions on.</p>
   * @minLength `1`
   * @maxLength `20`
   */
  Actions: string[];
  /**
     * <p>The Amazon Resource Name (ARN) of the principal. This can be one of the
                following:</p>
            <ul>
                <li>
                    <p>The ARN of an Amazon QuickSight user or group associated with a data source or dataset. (This is common.)</p>
                </li>
                <li>
                    <p>The ARN of an Amazon QuickSight user, group, or namespace associated with an analysis, dashboard, template, or theme. (This is common.)</p>
                </li>
                <li>
                    <p>The ARN of an AWS account root: This is an IAM ARN rather than a QuickSight
                        ARN. Use this option only to share resources (templates) across AWS accounts.
                        (This is less common.) </p>
                </li>
             </ul>
     * @minLength `1`
     * @maxLength `256`
     */
  Principal: string;
};
/**
 * Type definition for `AWS::QuickSight::DataSource.ResourceStatus`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-datasource-resourcestatus.html}
 */
export type ResourceStatus =
  | "CREATION_IN_PROGRESS"
  | "CREATION_SUCCESSFUL"
  | "CREATION_FAILED"
  | "UPDATE_IN_PROGRESS"
  | "UPDATE_SUCCESSFUL"
  | "UPDATE_FAILED"
  | "DELETED";
/**
 * Type definition for `AWS::QuickSight::DataSource.S3Parameters`.
 * <p>S3 parameters.</p>
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-datasource-s3parameters.html}
 */
export type S3Parameters = {
  /**
   * <p>Amazon S3 manifest file location.</p>
   */
  ManifestFileLocation: ManifestFileLocation;
  /**
   * <p>Use the <code>RoleArn</code> structure to override an account-wide role for a specific S3 data source. For example, say an account administrator has turned off all S3 access with an account-wide role. The administrator can then use <code>RoleArn</code> to bypass the account-wide role and allow S3 access for the single S3 data source that is specified in the structure, even if the account-wide role forbidding S3 access is still active.</p>
   * @minLength `20`
   * @maxLength `2048`
   */
  RoleArn?: string;
};
/**
 * Type definition for `AWS::QuickSight::DataSource.SnowflakeParameters`.
 * <p>Snowflake parameters.</p>
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-datasource-snowflakeparameters.html}
 */
export type SnowflakeParameters = {
  /**
   * <p>Database.</p>
   * @minLength `1`
   * @maxLength `128`
   */
  Database: string;
  /**
   * <p>Host.</p>
   * @minLength `1`
   * @maxLength `256`
   */
  Host: string;
  /**
   * <p>Warehouse.</p>
   * @minLength `0`
   * @maxLength `128`
   */
  Warehouse: string;
};
/**
 * Type definition for `AWS::QuickSight::DataSource.SparkParameters`.
 * <p>Spark parameters.</p>
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-datasource-sparkparameters.html}
 */
export type SparkParameters = {
  /**
   * <p>Host.</p>
   * @minLength `1`
   * @maxLength `256`
   */
  Host: string;
  /**
   * <p>Port.</p>
   * @min `1`
   * @max `65535`
   */
  Port: number;
};
/**
 * Type definition for `AWS::QuickSight::DataSource.SqlServerParameters`.
 * <p>SQL Server parameters.</p>
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-datasource-sqlserverparameters.html}
 */
export type SqlServerParameters = {
  /**
   * <p>Database.</p>
   * @minLength `1`
   * @maxLength `128`
   */
  Database: string;
  /**
   * <p>Host.</p>
   * @minLength `1`
   * @maxLength `256`
   */
  Host: string;
  /**
   * <p>Port.</p>
   * @min `1`
   * @max `65535`
   */
  Port: number;
};
/**
 * Type definition for `AWS::QuickSight::DataSource.SslProperties`.
 * <p>Secure Socket Layer (SSL) properties that apply when QuickSight connects to your
            underlying data source.</p>
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-datasource-sslproperties.html}
 */
export type SslProperties = {
  /**
   * <p>A Boolean option to control whether SSL should be disabled.</p>
   */
  DisableSsl?: boolean;
};
/**
 * Type definition for `AWS::QuickSight::DataSource.StarburstParameters`.
 * <p>Starburst parameters.</p>
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-datasource-starburstparameters.html}
 */
export type StarburstParameters = {
  /**
   * <p>Catalog.</p>
   * @minLength `0`
   * @maxLength `128`
   */
  Catalog: string;
  /**
   * <p>Host.</p>
   * @minLength `1`
   * @maxLength `256`
   */
  Host: string;
  /**
   * <p>Port.</p>
   * @min `1`
   * @max `65535`
   */
  Port: number;
  ProductType?: StarburstProductType;
};
/**
 * Type definition for `AWS::QuickSight::DataSource.StarburstProductType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-datasource-starburstproducttype.html}
 */
export type StarburstProductType = "GALAXY" | "ENTERPRISE";
/**
 * Type definition for `AWS::QuickSight::DataSource.Tag`.
 * <p>The key or keys of the key-value pairs for the resource tag or tags assigned to the
            resource.</p>
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-datasource-tag.html}
 */
export type Tag = {
  /**
   * <p>Tag key.</p>
   * @minLength `1`
   * @maxLength `128`
   */
  Key: string;
  /**
   * <p>Tag value.</p>
   * @minLength `1`
   * @maxLength `256`
   */
  Value: string;
};
/**
 * Type definition for `AWS::QuickSight::DataSource.TeradataParameters`.
 * <p>Teradata parameters.</p>
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-datasource-teradataparameters.html}
 */
export type TeradataParameters = {
  /**
   * <p>Database.</p>
   * @minLength `1`
   * @maxLength `128`
   */
  Database: string;
  /**
   * <p>Host.</p>
   * @minLength `1`
   * @maxLength `256`
   */
  Host: string;
  /**
   * <p>Port.</p>
   * @min `1`
   * @max `65535`
   */
  Port: number;
};
/**
 * Type definition for `AWS::QuickSight::DataSource.TrinoParameters`.
 * <p>Trino parameters.</p>
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-datasource-trinoparameters.html}
 */
export type TrinoParameters = {
  /**
   * <p>Catalog.</p>
   * @minLength `0`
   * @maxLength `128`
   */
  Catalog: string;
  /**
   * <p>Host.</p>
   * @minLength `1`
   * @maxLength `256`
   */
  Host: string;
  /**
   * <p>Port.</p>
   * @min `1`
   * @max `65535`
   */
  Port: number;
};
/**
 * Type definition for `AWS::QuickSight::DataSource.VpcConnectionProperties`.
 * <p>VPC connection properties.</p>
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-datasource-vpcconnectionproperties.html}
 */
export type VpcConnectionProperties = {
  /**
   * <p>The Amazon Resource Name (ARN) for the VPC connection.</p>
   */
  VpcConnectionArn: string;
};
/**
 * Definition of the AWS::QuickSight::DataSource Resource Type.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-datasource.html}
 */
export class QuickSightDataSource extends $Resource<
  "AWS::QuickSight::DataSource",
  QuickSightDataSourceProperties,
  QuickSightDataSourceAttributes
> {
  public static readonly Type = "AWS::QuickSight::DataSource";
  constructor(
    logicalId: string,
    properties: QuickSightDataSourceProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, QuickSightDataSource.Type, properties, options);
  }
}
