import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
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
   * @minLength `1`
   * @maxLength `128`
   */
  Name: string;
  /**
   * @minLength `1`
   * @maxLength `64`
   */
  Permissions?: ResourcePermission[];
  /**
     * <p>Secure Socket Layer (SSL) properties that apply when Amazon QuickSight connects to your
                underlying data source.</p>
     */
  SslProperties?: SslProperties;
  /**
   * @minLength `1`
   * @maxLength `200`
   */
  Tags?: Tag[];
  Type: DataSourceType;
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
 * <p>The parameters for OpenSearch.</p>
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-datasource-amazonelasticsearchparameters.html}
 */
export type AmazonElasticsearchParameters = {
  /**
   * <p>The OpenSearch domain.</p>
   * @minLength `1`
   * @maxLength `64`
   */
  Domain: string;
};
/**
 * Type definition for `AWS::QuickSight::DataSource.AmazonOpenSearchParameters`.
 * <p>The parameters for OpenSearch.</p>
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-datasource-amazonopensearchparameters.html}
 */
export type AmazonOpenSearchParameters = {
  /**
   * <p>The OpenSearch domain.</p>
   * @minLength `1`
   * @maxLength `64`
   */
  Domain: string;
};
/**
 * Type definition for `AWS::QuickSight::DataSource.AthenaParameters`.
 * <p>Parameters for Amazon Athena.</p>
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
 * <p>Parameters for Amazon Aurora.</p>
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
 * <p>Parameters for Amazon Aurora PostgreSQL-Compatible Edition.</p>
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-datasource-aurorapostgresqlparameters.html}
 */
export type AuroraPostgreSqlParameters = {
  /**
   * <p>The Amazon Aurora PostgreSQL database to connect to.</p>
   * @minLength `1`
   * @maxLength `128`
   */
  Database: string;
  /**
   * <p>The Amazon Aurora PostgreSQL-Compatible host to connect to.</p>
   * @minLength `1`
   * @maxLength `256`
   */
  Host: string;
  /**
   * <p>The port that Amazon Aurora PostgreSQL is listening on.</p>
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
 * <p>The parameters that are required to connect to a Databricks data source.</p>
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-datasource-databricksparameters.html}
 */
export type DatabricksParameters = {
  /**
   * <p>The host name of the Databricks data source.</p>
   * @minLength `1`
   * @maxLength `256`
   */
  Host: string;
  /**
   * <p>The port for the Databricks data source.</p>
   * @min `1`
   * @max `65535`
   */
  Port: number;
  /**
   * <p>The HTTP path of the Databricks data source.</p>
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
     * @pattern `^arn:[-a-z0-9]*:quicksight:[-a-z0-9]*:[0-9]{12}:datasource/.+$`
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
   * @pattern `^arn:[-a-z0-9]*:secretsmanager:[-a-z0-9]*:[0-9]{12}:secret:.+$`
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
   * <p>The parameters for OpenSearch.</p>
   */
  AmazonElasticsearchParameters?: AmazonElasticsearchParameters;
  /**
   * <p>The parameters for OpenSearch.</p>
   */
  AmazonOpenSearchParameters?: AmazonOpenSearchParameters;
  /**
   * <p>Parameters for Amazon Athena.</p>
   */
  AthenaParameters?: AthenaParameters;
  /**
   * <p>Parameters for Amazon Aurora.</p>
   */
  AuroraParameters?: AuroraParameters;
  /**
   * <p>Parameters for Amazon Aurora PostgreSQL-Compatible Edition.</p>
   */
  AuroraPostgreSqlParameters?: AuroraPostgreSqlParameters;
  /**
   * <p>The parameters that are required to connect to a Databricks data source.</p>
   */
  DatabricksParameters?: DatabricksParameters;
  /**
   * <p>The parameters for MariaDB.</p>
   */
  MariaDbParameters?: MariaDbParameters;
  /**
   * <p>The parameters for MySQL.</p>
   */
  MySqlParameters?: MySqlParameters;
  /**
   * <p>The parameters for Oracle.</p>
   */
  OracleParameters?: OracleParameters;
  /**
   * <p>The parameters for PostgreSQL.</p>
   */
  PostgreSqlParameters?: PostgreSqlParameters;
  /**
   * <p>The parameters for Presto.</p>
   */
  PrestoParameters?: PrestoParameters;
  /**
   * <p>The parameters for Amazon RDS.</p>
   */
  RdsParameters?: RdsParameters;
  /**
     * <p>The parameters for Amazon Redshift. The <code>ClusterId</code> field can be blank if
                <code>Host</code> and <code>Port</code> are both set. The <code>Host</code> and <code>Port</code> fields can be blank if the <code>ClusterId</code> field is set.</p>
     */
  RedshiftParameters?: RedshiftParameters;
  /**
   * <p>The parameters for S3.</p>
   */
  S3Parameters?: S3Parameters;
  /**
   * <p>The parameters for Snowflake.</p>
   */
  SnowflakeParameters?: SnowflakeParameters;
  /**
   * <p>The parameters for Spark.</p>
   */
  SparkParameters?: SparkParameters;
  /**
   * <p>The parameters for SQL Server.</p>
   */
  SqlServerParameters?: SqlServerParameters;
  /**
   * <p>The parameters that are required to connect to a Starburst data source.</p>
   */
  StarburstParameters?: StarburstParameters;
  /**
   * <p>The parameters for Teradata.</p>
   */
  TeradataParameters?: TeradataParameters;
  /**
   * <p>The parameters that are required to connect to a Trino data source.</p>
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
  | "DENODO"
  | "DREMIO"
  | "DYNAMODB"
  | "SAPHANA"
  | "DB2_AS400"
  | "EXASOL"
  | "FILE"
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
  | "TIMESTREAM"
  | "TWITTER"
  | "BIGQUERY"
  | "GOOGLE_ANALYTICS"
  | "TRINO"
  | "STARBURST"
  | "MONGO"
  | "MONGO_ATLAS"
  | "DOCUMENTDB"
  | "APPFLOW";
/**
 * Type definition for `AWS::QuickSight::DataSource.IdentityCenterConfiguration`.
 * <p>The parameters for an IAM Identity Center configuration.</p>
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-datasource-identitycenterconfiguration.html}
 */
export type IdentityCenterConfiguration = {
  /**
   * <p>A Boolean option that controls whether Trusted Identity Propagation should be used.</p>
   */
  EnableIdentityPropagation?: boolean;
};
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
 * <p>The parameters for MariaDB.</p>
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
 * <p>The parameters for MySQL.</p>
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
 * <p>The parameters for Oracle.</p>
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-datasource-oracleparameters.html}
 */
export type OracleParameters = {
  /**
   * <p>The database.</p>
   * @minLength `1`
   * @maxLength `128`
   */
  Database: string;
  /**
   * <p>An Oracle host.</p>
   * @minLength `1`
   * @maxLength `256`
   */
  Host: string;
  /**
   * <p>The port.</p>
   * @min `1`
   * @max `65535`
   */
  Port: number;
};
/**
 * Type definition for `AWS::QuickSight::DataSource.PostgreSqlParameters`.
 * <p>The parameters for PostgreSQL.</p>
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
 * <p>The parameters for Presto.</p>
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
 * <p>The parameters for Amazon RDS.</p>
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
 * Type definition for `AWS::QuickSight::DataSource.RedshiftIAMParameters`.
 * <p>A structure that grants Amazon QuickSight access to your cluster and make a call to the <code>redshift:GetClusterCredentials</code> API. For more information on the <code>redshift:GetClusterCredentials</code> API, see <a href="https://docs.aws.amazon.com/redshift/latest/APIReference/API_GetClusterCredentials.html">
               <code>GetClusterCredentials</code>
            </a>.</p>
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-datasource-redshiftiamparameters.html}
 */
export type RedshiftIAMParameters = {
  /**
   * <p>Automatically creates a database user. If your database doesn't have a <code>DatabaseUser</code>, set this parameter to <code>True</code>. If there is no <code>DatabaseUser</code>, Amazon QuickSight can't connect to your cluster. The <code>RoleArn</code> that you use for this operation must grant access to <code>redshift:CreateClusterUser</code> to successfully create the user.</p>
   */
  AutoCreateDatabaseUser?: boolean;
  /**
   * <p>A list of groups whose permissions will be granted to Amazon QuickSight to access the cluster. These permissions are combined with the permissions granted to Amazon QuickSight by the <code>DatabaseUser</code>. If you choose to include this parameter, the <code>RoleArn</code> must grant access to <code>redshift:JoinGroup</code>.</p>
   * @minLength `1`
   * @maxLength `50`
   */
  DatabaseGroups?: string[];
  /**
   * <p>The user whose permissions and group memberships will be used by Amazon QuickSight to access the cluster. If this user already exists in your database, Amazon QuickSight is granted the same permissions that the user has. If the user doesn't exist, set the value of <code>AutoCreateDatabaseUser</code> to <code>True</code> to create a new user with PUBLIC permissions.</p>
   * @minLength `1`
   * @maxLength `64`
   */
  DatabaseUser?: string;
  /**
   * <p>Use the <code>RoleArn</code> structure to allow Amazon QuickSight to call <code>redshift:GetClusterCredentials</code> on your cluster. The calling principal must have <code>iam:PassRole</code> access to pass the role to Amazon QuickSight. The role's trust policy must allow the Amazon QuickSight service principal to assume the role.</p>
   * @minLength `20`
   * @maxLength `2048`
   */
  RoleArn: string;
};
/**
 * Type definition for `AWS::QuickSight::DataSource.RedshiftParameters`.
 * <p>The parameters for Amazon Redshift. The <code>ClusterId</code> field can be blank if
            <code>Host</code> and <code>Port</code> are both set. The <code>Host</code> and <code>Port</code> fields can be blank if the <code>ClusterId</code> field is set.</p>
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
     * <p>A structure that grants Amazon QuickSight access to your cluster and make a call to the <code>redshift:GetClusterCredentials</code> API. For more information on the <code>redshift:GetClusterCredentials</code> API, see <a href="https://docs.aws.amazon.com/redshift/latest/APIReference/API_GetClusterCredentials.html">
                   <code>GetClusterCredentials</code>
                </a>.</p>
     */
  IAMParameters?: RedshiftIAMParameters;
  /**
   * <p>The parameters for an IAM Identity Center configuration.</p>
   */
  IdentityCenterConfiguration?: IdentityCenterConfiguration;
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
                   <p>The ARN of an Amazon Web Services account root: This is an IAM ARN rather than a QuickSight
                        ARN. Use this option only to share resources (templates) across Amazon Web Services accounts.
                        (This is less common.) </p>
                </li>
             </ul>
     * @minLength `1`
     * @maxLength `256`
     */
  Principal: string;
  Resource?: string;
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
 * <p>The parameters for S3.</p>
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
 * <p>The parameters for Snowflake.</p>
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
 * <p>The parameters for Spark.</p>
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
 * <p>The parameters for SQL Server.</p>
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
 * <p>Secure Socket Layer (SSL) properties that apply when Amazon QuickSight connects to your
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
 * <p>The parameters that are required to connect to a Starburst data source.</p>
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-datasource-starburstparameters.html}
 */
export type StarburstParameters = {
  /**
   * <p>The catalog name for the Starburst data source.</p>
   * @minLength `0`
   * @maxLength `128`
   */
  Catalog: string;
  /**
   * <p>The host name of the Starburst data source.</p>
   * @minLength `1`
   * @maxLength `256`
   */
  Host: string;
  /**
   * <p>The port for the Starburst data source.</p>
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
 * <p>The parameters for Teradata.</p>
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
 * <p>The parameters that are required to connect to a Trino data source.</p>
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-datasource-trinoparameters.html}
 */
export type TrinoParameters = {
  /**
   * <p>The catalog name for the Trino data source.</p>
   * @minLength `0`
   * @maxLength `128`
   */
  Catalog: string;
  /**
   * <p>The host name of the Trino data source.</p>
   * @minLength `1`
   * @maxLength `256`
   */
  Host: string;
  /**
   * <p>The port for the Trino data source.</p>
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
