import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::DMS::Endpoint
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-endpoint.html}
 */
export type DMSEndpointProperties = {
  CertificateArn?: string;
  DatabaseName?: string;
  DocDbSettings?: DocDbSettings;
  DynamoDbSettings?: DynamoDbSettings;
  ElasticsearchSettings?: ElasticsearchSettings;
  EndpointIdentifier?: string;
  EndpointType: string;
  EngineName: string;
  ExtraConnectionAttributes?: string;
  GcpMySQLSettings?: GcpMySQLSettings;
  IbmDb2Settings?: IbmDb2Settings;
  KafkaSettings?: KafkaSettings;
  KinesisSettings?: KinesisSettings;
  KmsKeyId?: string;
  MicrosoftSqlServerSettings?: MicrosoftSqlServerSettings;
  MongoDbSettings?: MongoDbSettings;
  MySqlSettings?: MySqlSettings;
  NeptuneSettings?: NeptuneSettings;
  OracleSettings?: OracleSettings;
  Password?: string;
  Port?: number;
  PostgreSqlSettings?: PostgreSqlSettings;
  RedisSettings?: RedisSettings;
  RedshiftSettings?: RedshiftSettings;
  ResourceIdentifier?: string;
  S3Settings?: S3Settings;
  ServerName?: string;
  SslMode?: string;
  SybaseSettings?: SybaseSettings;
  Tags?: Tag[];
  Username?: string;
};
/**
 * Attribute type definition for `AWS::DMS::Endpoint`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-endpoint.html#aws-resource-dms-endpoint-return-values}
 */
export type DMSEndpointAttributes = {
  ExternalId: string;
  Id: string;
};
/**
 * Type definition for `AWS::DMS::Endpoint.DocDbSettings`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-docdbsettings.html}
 */
export type DocDbSettings = {
  DocsToInvestigate?: number;
  ExtractDocId?: boolean;
  NestingLevel?: string;
  SecretsManagerAccessRoleArn?: string;
  SecretsManagerSecretId?: string;
};
/**
 * Type definition for `AWS::DMS::Endpoint.DynamoDbSettings`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-dynamodbsettings.html}
 */
export type DynamoDbSettings = {
  ServiceAccessRoleArn?: string;
};
/**
 * Type definition for `AWS::DMS::Endpoint.ElasticsearchSettings`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-elasticsearchsettings.html}
 */
export type ElasticsearchSettings = {
  EndpointUri?: string;
  ErrorRetryDuration?: number;
  FullLoadErrorPercentage?: number;
  ServiceAccessRoleArn?: string;
};
/**
 * Type definition for `AWS::DMS::Endpoint.GcpMySQLSettings`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-gcpmysqlsettings.html}
 */
export type GcpMySQLSettings = {
  AfterConnectScript?: string;
  CleanSourceMetadataOnMismatch?: boolean;
  DatabaseName?: string;
  EventsPollInterval?: number;
  MaxFileSize?: number;
  ParallelLoadThreads?: number;
  Password?: string;
  Port?: number;
  SecretsManagerAccessRoleArn?: string;
  SecretsManagerSecretId?: string;
  ServerName?: string;
  ServerTimezone?: string;
  Username?: string;
};
/**
 * Type definition for `AWS::DMS::Endpoint.IbmDb2Settings`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-ibmdb2settings.html}
 */
export type IbmDb2Settings = {
  CurrentLsn?: string;
  KeepCsvFiles?: boolean;
  LoadTimeout?: number;
  MaxFileSize?: number;
  MaxKBytesPerRead?: number;
  SecretsManagerAccessRoleArn?: string;
  SecretsManagerSecretId?: string;
  SetDataCaptureChanges?: boolean;
  WriteBufferSize?: number;
};
/**
 * Type definition for `AWS::DMS::Endpoint.KafkaSettings`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-kafkasettings.html}
 */
export type KafkaSettings = {
  Broker?: string;
  IncludeControlDetails?: boolean;
  IncludeNullAndEmpty?: boolean;
  IncludePartitionValue?: boolean;
  IncludeTableAlterOperations?: boolean;
  IncludeTransactionDetails?: boolean;
  MessageFormat?: string;
  MessageMaxBytes?: number;
  NoHexPrefix?: boolean;
  PartitionIncludeSchemaTable?: boolean;
  SaslPassword?: string;
  SaslUserName?: string;
  SecurityProtocol?: string;
  SslCaCertificateArn?: string;
  SslClientCertificateArn?: string;
  SslClientKeyArn?: string;
  SslClientKeyPassword?: string;
  Topic?: string;
};
/**
 * Type definition for `AWS::DMS::Endpoint.KinesisSettings`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-kinesissettings.html}
 */
export type KinesisSettings = {
  IncludeControlDetails?: boolean;
  IncludeNullAndEmpty?: boolean;
  IncludePartitionValue?: boolean;
  IncludeTableAlterOperations?: boolean;
  IncludeTransactionDetails?: boolean;
  MessageFormat?: string;
  NoHexPrefix?: boolean;
  PartitionIncludeSchemaTable?: boolean;
  ServiceAccessRoleArn?: string;
  StreamArn?: string;
};
/**
 * Type definition for `AWS::DMS::Endpoint.MicrosoftSqlServerSettings`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-microsoftsqlserversettings.html}
 */
export type MicrosoftSqlServerSettings = {
  BcpPacketSize?: number;
  ControlTablesFileGroup?: string;
  DatabaseName?: string;
  ForceLobLookup?: boolean;
  Password?: string;
  Port?: number;
  QuerySingleAlwaysOnNode?: boolean;
  ReadBackupOnly?: boolean;
  SafeguardPolicy?: string;
  SecretsManagerAccessRoleArn?: string;
  SecretsManagerSecretId?: string;
  ServerName?: string;
  TlogAccessMode?: string;
  TrimSpaceInChar?: boolean;
  UseBcpFullLoad?: boolean;
  UseThirdPartyBackupDevice?: boolean;
  Username?: string;
};
/**
 * Type definition for `AWS::DMS::Endpoint.MongoDbSettings`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-mongodbsettings.html}
 */
export type MongoDbSettings = {
  AuthMechanism?: string;
  AuthSource?: string;
  AuthType?: string;
  DatabaseName?: string;
  DocsToInvestigate?: string;
  ExtractDocId?: string;
  NestingLevel?: string;
  Password?: string;
  Port?: number;
  SecretsManagerAccessRoleArn?: string;
  SecretsManagerSecretId?: string;
  ServerName?: string;
  Username?: string;
};
/**
 * Type definition for `AWS::DMS::Endpoint.MySqlSettings`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-mysqlsettings.html}
 */
export type MySqlSettings = {
  AfterConnectScript?: string;
  CleanSourceMetadataOnMismatch?: boolean;
  EventsPollInterval?: number;
  MaxFileSize?: number;
  ParallelLoadThreads?: number;
  SecretsManagerAccessRoleArn?: string;
  SecretsManagerSecretId?: string;
  ServerTimezone?: string;
  TargetDbType?: string;
};
/**
 * Type definition for `AWS::DMS::Endpoint.NeptuneSettings`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-neptunesettings.html}
 */
export type NeptuneSettings = {
  ErrorRetryDuration?: number;
  IamAuthEnabled?: boolean;
  MaxFileSize?: number;
  MaxRetryCount?: number;
  S3BucketFolder?: string;
  S3BucketName?: string;
  ServiceAccessRoleArn?: string;
};
/**
 * Type definition for `AWS::DMS::Endpoint.OracleSettings`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-oraclesettings.html}
 */
export type OracleSettings = {
  AccessAlternateDirectly?: boolean;
  AddSupplementalLogging?: boolean;
  AdditionalArchivedLogDestId?: number;
  AllowSelectNestedTables?: boolean;
  ArchivedLogDestId?: number;
  ArchivedLogsOnly?: boolean;
  AsmPassword?: string;
  AsmServer?: string;
  AsmUser?: string;
  CharLengthSemantics?: string;
  DirectPathNoLog?: boolean;
  DirectPathParallelLoad?: boolean;
  EnableHomogenousTablespace?: boolean;
  ExtraArchivedLogDestIds?: number[];
  FailTasksOnLobTruncation?: boolean;
  NumberDatatypeScale?: number;
  OraclePathPrefix?: string;
  ParallelAsmReadThreads?: number;
  ReadAheadBlocks?: number;
  ReadTableSpaceName?: boolean;
  ReplacePathPrefix?: boolean;
  RetryInterval?: number;
  SecretsManagerAccessRoleArn?: string;
  SecretsManagerOracleAsmAccessRoleArn?: string;
  SecretsManagerOracleAsmSecretId?: string;
  SecretsManagerSecretId?: string;
  SecurityDbEncryption?: string;
  SecurityDbEncryptionName?: string;
  SpatialDataOptionToGeoJsonFunctionName?: string;
  StandbyDelayTime?: number;
  UseAlternateFolderForOnline?: boolean;
  UseBFile?: boolean;
  UseDirectPathFullLoad?: boolean;
  UseLogminerReader?: boolean;
  UsePathPrefix?: string;
};
/**
 * Type definition for `AWS::DMS::Endpoint.PostgreSqlSettings`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-postgresqlsettings.html}
 */
export type PostgreSqlSettings = {
  AfterConnectScript?: string;
  BabelfishDatabaseName?: string;
  CaptureDdls?: boolean;
  DatabaseMode?: string;
  DdlArtifactsSchema?: string;
  ExecuteTimeout?: number;
  FailTasksOnLobTruncation?: boolean;
  HeartbeatEnable?: boolean;
  HeartbeatFrequency?: number;
  HeartbeatSchema?: string;
  MapBooleanAsBoolean?: boolean;
  MaxFileSize?: number;
  PluginName?: string;
  SecretsManagerAccessRoleArn?: string;
  SecretsManagerSecretId?: string;
  SlotName?: string;
};
/**
 * Type definition for `AWS::DMS::Endpoint.RedisSettings`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-redissettings.html}
 */
export type RedisSettings = {
  AuthPassword?: string;
  AuthType?: string;
  AuthUserName?: string;
  Port?: number;
  ServerName?: string;
  SslCaCertificateArn?: string;
  SslSecurityProtocol?: string;
};
/**
 * Type definition for `AWS::DMS::Endpoint.RedshiftSettings`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-redshiftsettings.html}
 */
export type RedshiftSettings = {
  AcceptAnyDate?: boolean;
  AfterConnectScript?: string;
  BucketFolder?: string;
  BucketName?: string;
  CaseSensitiveNames?: boolean;
  CompUpdate?: boolean;
  ConnectionTimeout?: number;
  DateFormat?: string;
  EmptyAsNull?: boolean;
  EncryptionMode?: string;
  ExplicitIds?: boolean;
  FileTransferUploadStreams?: number;
  LoadTimeout?: number;
  MapBooleanAsBoolean?: boolean;
  MaxFileSize?: number;
  RemoveQuotes?: boolean;
  ReplaceChars?: string;
  ReplaceInvalidChars?: string;
  SecretsManagerAccessRoleArn?: string;
  SecretsManagerSecretId?: string;
  ServerSideEncryptionKmsKeyId?: string;
  ServiceAccessRoleArn?: string;
  TimeFormat?: string;
  TrimBlanks?: boolean;
  TruncateColumns?: boolean;
  WriteBufferSize?: number;
};
/**
 * Type definition for `AWS::DMS::Endpoint.S3Settings`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-s3settings.html}
 */
export type S3Settings = {
  AddColumnName?: boolean;
  AddTrailingPaddingCharacter?: boolean;
  BucketFolder?: string;
  BucketName?: string;
  CannedAclForObjects?: string;
  CdcInsertsAndUpdates?: boolean;
  CdcInsertsOnly?: boolean;
  CdcMaxBatchInterval?: number;
  CdcMinFileSize?: number;
  CdcPath?: string;
  CompressionType?: string;
  CsvDelimiter?: string;
  CsvNoSupValue?: string;
  CsvNullValue?: string;
  CsvRowDelimiter?: string;
  DataFormat?: string;
  DataPageSize?: number;
  DatePartitionDelimiter?: string;
  DatePartitionEnabled?: boolean;
  DatePartitionSequence?: string;
  DatePartitionTimezone?: string;
  DictPageSizeLimit?: number;
  EnableStatistics?: boolean;
  EncodingType?: string;
  EncryptionMode?: string;
  ExpectedBucketOwner?: string;
  ExternalTableDefinition?: string;
  GlueCatalogGeneration?: boolean;
  IgnoreHeaderRows?: number;
  IncludeOpForFullLoad?: boolean;
  MaxFileSize?: number;
  ParquetTimestampInMillisecond?: boolean;
  ParquetVersion?: string;
  PreserveTransactions?: boolean;
  Rfc4180?: boolean;
  RowGroupLength?: number;
  ServerSideEncryptionKmsKeyId?: string;
  ServiceAccessRoleArn?: string;
  TimestampColumnName?: string;
  UseCsvNoSupValue?: boolean;
  UseTaskStartTimeForFullLoadTimestamp?: boolean;
};
/**
 * Type definition for `AWS::DMS::Endpoint.SybaseSettings`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-sybasesettings.html}
 */
export type SybaseSettings = {
  SecretsManagerAccessRoleArn?: string;
  SecretsManagerSecretId?: string;
};
/**
 * Type definition for `AWS::DMS::Endpoint.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-tag.html}
 */
export type Tag = {
  Key: string;
  Value: string;
};
/**
 * Resource Type definition for AWS::DMS::Endpoint
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-endpoint.html}
 */
export class DMSEndpoint extends $Resource<
  "AWS::DMS::Endpoint",
  DMSEndpointProperties,
  DMSEndpointAttributes
> {
  public static readonly Type = "AWS::DMS::Endpoint";
  constructor(
    logicalId: string,
    properties: DMSEndpointProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, DMSEndpoint.Type, properties, options);
  }
}
