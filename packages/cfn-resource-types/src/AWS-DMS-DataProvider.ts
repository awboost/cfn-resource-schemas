import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource schema for AWS::DMS::DataProvider
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-dataprovider.html}
 */
export type DMSDataProviderProperties = {
  /**
   * The property describes an identifier for the data provider. It is used for describing/deleting/modifying can be name/arn
   * @minLength `1`
   * @maxLength `255`
   */
  DataProviderIdentifier?: string;
  /**
   * The property describes a name to identify the data provider.
   * @minLength `1`
   * @maxLength `255`
   */
  DataProviderName?: string;
  /**
   * The optional description of the data provider.
   * @minLength `1`
   * @maxLength `255`
   */
  Description?: string;
  /**
   * The property describes a data engine for the data provider.
   */
  Engine:
    | "aurora"
    | "aurora_postgresql"
    | "mysql"
    | "oracle"
    | "postgres"
    | "sqlserver"
    | "redshift"
    | "mariadb"
    | "mongodb"
    | "docdb"
    | "db2"
    | "db2_zos";
  /**
   * The property describes the exact settings which can be modified
   */
  ExactSettings?: boolean;
  /**
   * The property identifies the exact type of settings for the data provider.
   */
  Settings?: {
    /**
     * DocDbSettings property identifier.
     */
    DocDbSettings?: {
      CertificateArn?: string;
      DatabaseName: string;
      Port: number;
      ServerName: string;
      SslMode?: MongoDbSslModeValue;
    };
    /**
     * IbmDb2LuwSettings property identifier.
     */
    IbmDb2LuwSettings?: {
      CertificateArn?: string;
      DatabaseName: string;
      Port: number;
      ServerName: string;
      SslMode: Db2SslModeValue;
    };
    /**
     * IbmDb2zOsSettings property identifier.
     */
    IbmDb2zOsSettings?: {
      CertificateArn?: string;
      DatabaseName: string;
      Port: number;
      ServerName: string;
      SslMode: Db2SslModeValue;
    };
    /**
     * MariaDbSettings property identifier.
     */
    MariaDbSettings?: {
      CertificateArn?: string;
      Port: number;
      ServerName: string;
      SslMode: DmsSslModeValue;
    };
    /**
     * MicrosoftSqlServerSettings property identifier.
     */
    MicrosoftSqlServerSettings?: {
      CertificateArn?: string;
      DatabaseName: string;
      Port: number;
      ServerName: string;
      SslMode: DmsSslModeValue;
    };
    /**
     * MongoDbSettings property identifier.
     */
    MongoDbSettings?: {
      AuthMechanism?: MongoDbAuthMechanism;
      AuthSource?: string;
      AuthType?: MongoDbAuthType;
      CertificateArn?: string;
      DatabaseName?: string;
      Port: number;
      ServerName: string;
      SslMode?: MongoDbSslModeValue;
    };
    /**
     * MySqlSettings property identifier.
     */
    MySqlSettings?: {
      CertificateArn?: string;
      Port: number;
      ServerName: string;
      SslMode: DmsSslModeValue;
    };
    /**
     * OracleSettings property identifier.
     */
    OracleSettings?: {
      AsmServer?: string;
      CertificateArn?: string;
      DatabaseName: string;
      Port: number;
      SecretsManagerOracleAsmAccessRoleArn?: string;
      SecretsManagerOracleAsmSecretId?: string;
      SecretsManagerSecurityDbEncryptionAccessRoleArn?: string;
      SecretsManagerSecurityDbEncryptionSecretId?: string;
      ServerName: string;
      SslMode: DmsSslModeValue;
    };
    /**
     * PostgreSqlSettings property identifier.
     */
    PostgreSqlSettings?: {
      CertificateArn?: string;
      DatabaseName: string;
      Port: number;
      ServerName: string;
      SslMode: DmsSslModeValue;
    };
    /**
     * RedshiftSettings property identifier.
     */
    RedshiftSettings?: {
      DatabaseName: string;
      Port: number;
      ServerName: string;
    };
  };
  /**
   * An array of key-value pairs to apply to this resource.
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::DMS::DataProvider`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-dataprovider.html#aws-resource-dms-dataprovider-return-values}
 */
export type DMSDataProviderAttributes = {
  /**
   * The data provider ARN.
   * @minLength `1`
   * @maxLength `255`
   */
  DataProviderArn: string;
  /**
   * The data provider creation time.
   * @minLength `1`
   * @maxLength `40`
   */
  DataProviderCreationTime: string;
};
/**
 * Type definition for `AWS::DMS::DataProvider.Db2SslModeValue`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-dataprovider-db2sslmodevalue.html}
 */
export type Db2SslModeValue = "none" | "verify-ca";
/**
 * Type definition for `AWS::DMS::DataProvider.DmsSslModeValue`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-dataprovider-dmssslmodevalue.html}
 */
export type DmsSslModeValue = "none" | "require" | "verify-ca" | "verify-full";
/**
 * Type definition for `AWS::DMS::DataProvider.MongoDbAuthMechanism`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-dataprovider-mongodbauthmechanism.html}
 */
export type MongoDbAuthMechanism = "default" | "mongodb_cr" | "scram_sha_1";
/**
 * Type definition for `AWS::DMS::DataProvider.MongoDbAuthType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-dataprovider-mongodbauthtype.html}
 */
export type MongoDbAuthType = "no" | "password";
/**
 * Type definition for `AWS::DMS::DataProvider.MongoDbSslModeValue`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-dataprovider-mongodbsslmodevalue.html}
 */
export type MongoDbSslModeValue = "none" | "require" | "verify-full";
/**
 * Type definition for `AWS::DMS::DataProvider.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-dataprovider-tag.html}
 */
export type Tag = {
  /**
   * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @minLength `1`
   * @maxLength `128`
   */
  Key: string;
  /**
   * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @minLength `0`
   * @maxLength `256`
   */
  Value: string;
};
/**
 * Resource schema for AWS::DMS::DataProvider
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-dataprovider.html}
 */
export class DMSDataProvider extends $Resource<
  "AWS::DMS::DataProvider",
  DMSDataProviderProperties,
  DMSDataProviderAttributes
> {
  public static readonly Type = "AWS::DMS::DataProvider";
  constructor(
    logicalId: string,
    properties: DMSDataProviderProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, DMSDataProvider.Type, properties, options);
  }
}
