import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::KinesisFirehose::DeliveryStream
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html}
 */
export type KinesisFirehoseDeliveryStreamProperties = {
  AmazonOpenSearchServerlessDestinationConfiguration?: AmazonOpenSearchServerlessDestinationConfiguration;
  AmazonopensearchserviceDestinationConfiguration?: AmazonopensearchserviceDestinationConfiguration;
  DeliveryStreamEncryptionConfigurationInput?: DeliveryStreamEncryptionConfigurationInput;
  /**
   * @minLength `1`
   * @maxLength `64`
   * @pattern `[a-zA-Z0-9._-]+`
   */
  DeliveryStreamName?: string;
  DeliveryStreamType?: "DirectPut" | "KinesisStreamAsSource" | "MSKAsSource";
  ElasticsearchDestinationConfiguration?: ElasticsearchDestinationConfiguration;
  ExtendedS3DestinationConfiguration?: ExtendedS3DestinationConfiguration;
  HttpEndpointDestinationConfiguration?: HttpEndpointDestinationConfiguration;
  KinesisStreamSourceConfiguration?: KinesisStreamSourceConfiguration;
  MSKSourceConfiguration?: MSKSourceConfiguration;
  RedshiftDestinationConfiguration?: RedshiftDestinationConfiguration;
  S3DestinationConfiguration?: S3DestinationConfiguration;
  SnowflakeDestinationConfiguration?: SnowflakeDestinationConfiguration;
  SplunkDestinationConfiguration?: SplunkDestinationConfiguration;
  /**
   * @minLength `1`
   * @maxLength `50`
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::KinesisFirehose::DeliveryStream`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#aws-resource-kinesisfirehose-deliverystream-return-values}
 */
export type KinesisFirehoseDeliveryStreamAttributes = {
  Arn: string;
};
/**
 * Type definition for `AWS::KinesisFirehose::DeliveryStream.AmazonOpenSearchServerlessBufferingHints`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-amazonopensearchserverlessbufferinghints.html}
 */
export type AmazonOpenSearchServerlessBufferingHints = {
  IntervalInSeconds?: number;
  SizeInMBs?: number;
};
/**
 * Type definition for `AWS::KinesisFirehose::DeliveryStream.AmazonOpenSearchServerlessDestinationConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-amazonopensearchserverlessdestinationconfiguration.html}
 */
export type AmazonOpenSearchServerlessDestinationConfiguration = {
  BufferingHints?: AmazonOpenSearchServerlessBufferingHints;
  CloudWatchLoggingOptions?: CloudWatchLoggingOptions;
  /**
   * @minLength `1`
   * @maxLength `512`
   * @pattern `https:.*`
   */
  CollectionEndpoint?: string;
  /**
   * @minLength `1`
   * @maxLength `80`
   */
  IndexName: string;
  ProcessingConfiguration?: ProcessingConfiguration;
  RetryOptions?: AmazonOpenSearchServerlessRetryOptions;
  /**
   * @minLength `1`
   * @maxLength `512`
   * @pattern `arn:.*`
   */
  RoleARN: string;
  S3BackupMode?: "FailedDocumentsOnly" | "AllDocuments";
  S3Configuration: S3DestinationConfiguration;
  VpcConfiguration?: VpcConfiguration;
};
/**
 * Type definition for `AWS::KinesisFirehose::DeliveryStream.AmazonOpenSearchServerlessRetryOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-amazonopensearchserverlessretryoptions.html}
 */
export type AmazonOpenSearchServerlessRetryOptions = {
  DurationInSeconds?: number;
};
/**
 * Type definition for `AWS::KinesisFirehose::DeliveryStream.AmazonopensearchserviceBufferingHints`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-amazonopensearchservicebufferinghints.html}
 */
export type AmazonopensearchserviceBufferingHints = {
  IntervalInSeconds?: number;
  SizeInMBs?: number;
};
/**
 * Type definition for `AWS::KinesisFirehose::DeliveryStream.AmazonopensearchserviceDestinationConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-amazonopensearchservicedestinationconfiguration.html}
 */
export type AmazonopensearchserviceDestinationConfiguration = {
  BufferingHints?: AmazonopensearchserviceBufferingHints;
  CloudWatchLoggingOptions?: CloudWatchLoggingOptions;
  /**
   * @minLength `1`
   * @maxLength `512`
   * @pattern `https:.*`
   */
  ClusterEndpoint?: string;
  DocumentIdOptions?: DocumentIdOptions;
  /**
   * @minLength `1`
   * @maxLength `512`
   * @pattern `arn:.*`
   */
  DomainARN?: string;
  /**
   * @minLength `1`
   * @maxLength `80`
   */
  IndexName: string;
  IndexRotationPeriod?:
    | "NoRotation"
    | "OneHour"
    | "OneDay"
    | "OneWeek"
    | "OneMonth";
  ProcessingConfiguration?: ProcessingConfiguration;
  RetryOptions?: AmazonopensearchserviceRetryOptions;
  /**
   * @minLength `1`
   * @maxLength `512`
   * @pattern `arn:.*`
   */
  RoleARN: string;
  S3BackupMode?: "FailedDocumentsOnly" | "AllDocuments";
  S3Configuration: S3DestinationConfiguration;
  /**
   * @minLength `0`
   * @maxLength `100`
   */
  TypeName?: string;
  VpcConfiguration?: VpcConfiguration;
};
/**
 * Type definition for `AWS::KinesisFirehose::DeliveryStream.AmazonopensearchserviceRetryOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-amazonopensearchserviceretryoptions.html}
 */
export type AmazonopensearchserviceRetryOptions = {
  DurationInSeconds?: number;
};
/**
 * Type definition for `AWS::KinesisFirehose::DeliveryStream.AuthenticationConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-authenticationconfiguration.html}
 */
export type AuthenticationConfiguration = {
  Connectivity: "PUBLIC" | "PRIVATE";
  /**
   * @minLength `1`
   * @maxLength `512`
   * @pattern `arn:.*`
   */
  RoleARN: string;
};
/**
 * Type definition for `AWS::KinesisFirehose::DeliveryStream.BufferingHints`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-bufferinghints.html}
 */
export type BufferingHints = {
  IntervalInSeconds?: number;
  SizeInMBs?: number;
};
/**
 * Type definition for `AWS::KinesisFirehose::DeliveryStream.CloudWatchLoggingOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-cloudwatchloggingoptions.html}
 */
export type CloudWatchLoggingOptions = {
  Enabled?: boolean;
  LogGroupName?: string;
  LogStreamName?: string;
};
/**
 * Type definition for `AWS::KinesisFirehose::DeliveryStream.CopyCommand`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-copycommand.html}
 */
export type CopyCommand = {
  /**
   * @minLength `0`
   * @maxLength `204800`
   */
  CopyOptions?: string;
  /**
   * @minLength `0`
   * @maxLength `204800`
   */
  DataTableColumns?: string;
  /**
   * @minLength `1`
   * @maxLength `512`
   */
  DataTableName: string;
};
/**
 * Type definition for `AWS::KinesisFirehose::DeliveryStream.DataFormatConversionConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-dataformatconversionconfiguration.html}
 */
export type DataFormatConversionConfiguration = {
  Enabled?: boolean;
  InputFormatConfiguration?: InputFormatConfiguration;
  OutputFormatConfiguration?: OutputFormatConfiguration;
  SchemaConfiguration?: SchemaConfiguration;
};
/**
 * Type definition for `AWS::KinesisFirehose::DeliveryStream.DeliveryStreamEncryptionConfigurationInput`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-deliverystreamencryptionconfigurationinput.html}
 */
export type DeliveryStreamEncryptionConfigurationInput = {
  /**
   * @minLength `1`
   * @maxLength `512`
   * @pattern `arn:.*`
   */
  KeyARN?: string;
  KeyType: "AWS_OWNED_CMK" | "CUSTOMER_MANAGED_CMK";
};
/**
 * Type definition for `AWS::KinesisFirehose::DeliveryStream.Deserializer`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-deserializer.html}
 */
export type Deserializer = {
  HiveJsonSerDe?: HiveJsonSerDe;
  OpenXJsonSerDe?: OpenXJsonSerDe;
};
/**
 * Type definition for `AWS::KinesisFirehose::DeliveryStream.DocumentIdOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-documentidoptions.html}
 */
export type DocumentIdOptions = {
  DefaultDocumentIdFormat: "FIREHOSE_DEFAULT" | "NO_DOCUMENT_ID";
};
/**
 * Type definition for `AWS::KinesisFirehose::DeliveryStream.DynamicPartitioningConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-dynamicpartitioningconfiguration.html}
 */
export type DynamicPartitioningConfiguration = {
  Enabled?: boolean;
  RetryOptions?: RetryOptions;
};
/**
 * Type definition for `AWS::KinesisFirehose::DeliveryStream.ElasticsearchBufferingHints`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-elasticsearchbufferinghints.html}
 */
export type ElasticsearchBufferingHints = {
  IntervalInSeconds?: number;
  SizeInMBs?: number;
};
/**
 * Type definition for `AWS::KinesisFirehose::DeliveryStream.ElasticsearchDestinationConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-elasticsearchdestinationconfiguration.html}
 */
export type ElasticsearchDestinationConfiguration = {
  BufferingHints?: ElasticsearchBufferingHints;
  CloudWatchLoggingOptions?: CloudWatchLoggingOptions;
  /**
   * @minLength `1`
   * @maxLength `512`
   * @pattern `https:.*`
   */
  ClusterEndpoint?: string;
  DocumentIdOptions?: DocumentIdOptions;
  /**
   * @minLength `1`
   * @maxLength `512`
   * @pattern `arn:.*`
   */
  DomainARN?: string;
  /**
   * @minLength `1`
   * @maxLength `80`
   */
  IndexName: string;
  IndexRotationPeriod?:
    | "NoRotation"
    | "OneHour"
    | "OneDay"
    | "OneWeek"
    | "OneMonth";
  ProcessingConfiguration?: ProcessingConfiguration;
  RetryOptions?: ElasticsearchRetryOptions;
  /**
   * @minLength `1`
   * @maxLength `512`
   * @pattern `arn:.*`
   */
  RoleARN: string;
  S3BackupMode?: "FailedDocumentsOnly" | "AllDocuments";
  S3Configuration: S3DestinationConfiguration;
  /**
   * @minLength `0`
   * @maxLength `100`
   */
  TypeName?: string;
  VpcConfiguration?: VpcConfiguration;
};
/**
 * Type definition for `AWS::KinesisFirehose::DeliveryStream.ElasticsearchRetryOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-elasticsearchretryoptions.html}
 */
export type ElasticsearchRetryOptions = {
  DurationInSeconds?: number;
};
/**
 * Type definition for `AWS::KinesisFirehose::DeliveryStream.EncryptionConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-encryptionconfiguration.html}
 */
export type EncryptionConfiguration = {
  KMSEncryptionConfig?: KMSEncryptionConfig;
  NoEncryptionConfig?: "NoEncryption";
};
/**
 * Type definition for `AWS::KinesisFirehose::DeliveryStream.ExtendedS3DestinationConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-extendeds3destinationconfiguration.html}
 */
export type ExtendedS3DestinationConfiguration = {
  /**
   * @minLength `1`
   * @maxLength `2048`
   * @pattern `arn:.*`
   */
  BucketARN: string;
  BufferingHints?: BufferingHints;
  CloudWatchLoggingOptions?: CloudWatchLoggingOptions;
  CompressionFormat?:
    | "UNCOMPRESSED"
    | "GZIP"
    | "ZIP"
    | "Snappy"
    | "HADOOP_SNAPPY";
  DataFormatConversionConfiguration?: DataFormatConversionConfiguration;
  DynamicPartitioningConfiguration?: DynamicPartitioningConfiguration;
  EncryptionConfiguration?: EncryptionConfiguration;
  /**
   * @minLength `0`
   * @maxLength `1024`
   */
  ErrorOutputPrefix?: string;
  /**
   * @minLength `0`
   * @maxLength `1024`
   */
  Prefix?: string;
  ProcessingConfiguration?: ProcessingConfiguration;
  /**
   * @minLength `1`
   * @maxLength `512`
   * @pattern `arn:.*`
   */
  RoleARN: string;
  S3BackupConfiguration?: S3DestinationConfiguration;
  S3BackupMode?: "Disabled" | "Enabled";
};
/**
 * Type definition for `AWS::KinesisFirehose::DeliveryStream.HiveJsonSerDe`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-hivejsonserde.html}
 */
export type HiveJsonSerDe = {
  TimestampFormats?: string[];
};
/**
 * Type definition for `AWS::KinesisFirehose::DeliveryStream.HttpEndpointCommonAttribute`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-httpendpointcommonattribute.html}
 */
export type HttpEndpointCommonAttribute = {
  /**
   * @minLength `1`
   * @maxLength `256`
   */
  AttributeName: string;
  /**
   * @minLength `0`
   * @maxLength `1024`
   */
  AttributeValue: string;
};
/**
 * Type definition for `AWS::KinesisFirehose::DeliveryStream.HttpEndpointConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-httpendpointconfiguration.html}
 */
export type HttpEndpointConfiguration = {
  /**
   * @minLength `0`
   * @maxLength `4096`
   */
  AccessKey?: string;
  /**
   * @minLength `1`
   * @maxLength `256`
   */
  Name?: string;
  /**
   * @minLength `1`
   * @maxLength `1000`
   */
  Url: string;
};
/**
 * Type definition for `AWS::KinesisFirehose::DeliveryStream.HttpEndpointDestinationConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-httpendpointdestinationconfiguration.html}
 */
export type HttpEndpointDestinationConfiguration = {
  BufferingHints?: BufferingHints;
  CloudWatchLoggingOptions?: CloudWatchLoggingOptions;
  EndpointConfiguration: HttpEndpointConfiguration;
  ProcessingConfiguration?: ProcessingConfiguration;
  RequestConfiguration?: HttpEndpointRequestConfiguration;
  RetryOptions?: RetryOptions;
  /**
   * @minLength `1`
   * @maxLength `512`
   * @pattern `arn:.*`
   */
  RoleARN?: string;
  S3BackupMode?: string;
  S3Configuration: S3DestinationConfiguration;
};
/**
 * Type definition for `AWS::KinesisFirehose::DeliveryStream.HttpEndpointRequestConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-httpendpointrequestconfiguration.html}
 */
export type HttpEndpointRequestConfiguration = {
  /**
   * @minLength `0`
   * @maxLength `50`
   */
  CommonAttributes?: HttpEndpointCommonAttribute[];
  ContentEncoding?: "NONE" | "GZIP";
};
/**
 * Type definition for `AWS::KinesisFirehose::DeliveryStream.InputFormatConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-inputformatconfiguration.html}
 */
export type InputFormatConfiguration = {
  Deserializer?: Deserializer;
};
/**
 * Type definition for `AWS::KinesisFirehose::DeliveryStream.KinesisStreamSourceConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-kinesisstreamsourceconfiguration.html}
 */
export type KinesisStreamSourceConfiguration = {
  /**
   * @minLength `1`
   * @maxLength `512`
   * @pattern `arn:.*`
   */
  KinesisStreamARN: string;
  /**
   * @minLength `1`
   * @maxLength `512`
   * @pattern `arn:.*`
   */
  RoleARN: string;
};
/**
 * Type definition for `AWS::KinesisFirehose::DeliveryStream.KMSEncryptionConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-kmsencryptionconfig.html}
 */
export type KMSEncryptionConfig = {
  AWSKMSKeyARN: string;
};
/**
 * Type definition for `AWS::KinesisFirehose::DeliveryStream.MSKSourceConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-msksourceconfiguration.html}
 */
export type MSKSourceConfiguration = {
  AuthenticationConfiguration: AuthenticationConfiguration;
  /**
   * @minLength `1`
   * @maxLength `512`
   * @pattern `arn:.*`
   */
  MSKClusterARN: string;
  /**
   * @minLength `1`
   * @maxLength `255`
   * @pattern `[a-zA-Z0-9\._\-]+`
   */
  TopicName: string;
};
/**
 * Type definition for `AWS::KinesisFirehose::DeliveryStream.OpenXJsonSerDe`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-openxjsonserde.html}
 */
export type OpenXJsonSerDe = {
  CaseInsensitive?: boolean;
  ColumnToJsonKeyMappings?: Record<string, string>;
  ConvertDotsInJsonKeysToUnderscores?: boolean;
};
/**
 * Type definition for `AWS::KinesisFirehose::DeliveryStream.OrcSerDe`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-orcserde.html}
 */
export type OrcSerDe = {
  BlockSizeBytes?: number;
  BloomFilterColumns?: string[];
  BloomFilterFalsePositiveProbability?: number;
  Compression?: string;
  DictionaryKeyThreshold?: number;
  EnablePadding?: boolean;
  FormatVersion?: string;
  PaddingTolerance?: number;
  RowIndexStride?: number;
  StripeSizeBytes?: number;
};
/**
 * Type definition for `AWS::KinesisFirehose::DeliveryStream.OutputFormatConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-outputformatconfiguration.html}
 */
export type OutputFormatConfiguration = {
  Serializer?: Serializer;
};
/**
 * Type definition for `AWS::KinesisFirehose::DeliveryStream.ParquetSerDe`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-parquetserde.html}
 */
export type ParquetSerDe = {
  BlockSizeBytes?: number;
  Compression?: string;
  EnableDictionaryCompression?: boolean;
  MaxPaddingBytes?: number;
  PageSizeBytes?: number;
  WriterVersion?: string;
};
/**
 * Type definition for `AWS::KinesisFirehose::DeliveryStream.ProcessingConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-processingconfiguration.html}
 */
export type ProcessingConfiguration = {
  Enabled?: boolean;
  Processors?: Processor[];
};
/**
 * Type definition for `AWS::KinesisFirehose::DeliveryStream.Processor`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-processor.html}
 */
export type Processor = {
  Parameters?: ProcessorParameter[];
  Type:
    | "RecordDeAggregation"
    | "Decompression"
    | "Lambda"
    | "MetadataExtraction"
    | "AppendDelimiterToRecord";
};
/**
 * Type definition for `AWS::KinesisFirehose::DeliveryStream.ProcessorParameter`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-processorparameter.html}
 */
export type ProcessorParameter = {
  ParameterName: string;
  ParameterValue: string;
};
/**
 * Type definition for `AWS::KinesisFirehose::DeliveryStream.RedshiftDestinationConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-redshiftdestinationconfiguration.html}
 */
export type RedshiftDestinationConfiguration = {
  CloudWatchLoggingOptions?: CloudWatchLoggingOptions;
  /**
   * @minLength `1`
   * @maxLength `512`
   */
  ClusterJDBCURL: string;
  CopyCommand: CopyCommand;
  /**
   * @minLength `6`
   * @maxLength `512`
   */
  Password: string;
  ProcessingConfiguration?: ProcessingConfiguration;
  RetryOptions?: RedshiftRetryOptions;
  /**
   * @minLength `1`
   * @maxLength `512`
   * @pattern `arn:.*`
   */
  RoleARN: string;
  S3BackupConfiguration?: S3DestinationConfiguration;
  S3BackupMode?: "Disabled" | "Enabled";
  S3Configuration: S3DestinationConfiguration;
  /**
   * @minLength `1`
   * @maxLength `512`
   */
  Username: string;
};
/**
 * Type definition for `AWS::KinesisFirehose::DeliveryStream.RedshiftRetryOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-redshiftretryoptions.html}
 */
export type RedshiftRetryOptions = {
  DurationInSeconds?: number;
};
/**
 * Type definition for `AWS::KinesisFirehose::DeliveryStream.RetryOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-retryoptions.html}
 */
export type RetryOptions = {
  DurationInSeconds?: number;
};
/**
 * Type definition for `AWS::KinesisFirehose::DeliveryStream.S3DestinationConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-s3destinationconfiguration.html}
 */
export type S3DestinationConfiguration = {
  /**
   * @minLength `1`
   * @maxLength `2048`
   * @pattern `arn:.*`
   */
  BucketARN: string;
  BufferingHints?: BufferingHints;
  CloudWatchLoggingOptions?: CloudWatchLoggingOptions;
  CompressionFormat?:
    | "UNCOMPRESSED"
    | "GZIP"
    | "ZIP"
    | "Snappy"
    | "HADOOP_SNAPPY";
  EncryptionConfiguration?: EncryptionConfiguration;
  /**
   * @minLength `0`
   * @maxLength `1024`
   */
  ErrorOutputPrefix?: string;
  /**
   * @minLength `0`
   * @maxLength `1024`
   */
  Prefix?: string;
  /**
   * @minLength `1`
   * @maxLength `512`
   * @pattern `arn:.*`
   */
  RoleARN: string;
};
/**
 * Type definition for `AWS::KinesisFirehose::DeliveryStream.SchemaConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-schemaconfiguration.html}
 */
export type SchemaConfiguration = {
  CatalogId?: string;
  DatabaseName?: string;
  Region?: string;
  /**
   * @minLength `1`
   * @maxLength `512`
   * @pattern `arn:.*`
   */
  RoleARN?: string;
  TableName?: string;
  VersionId?: string;
};
/**
 * Type definition for `AWS::KinesisFirehose::DeliveryStream.Serializer`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-serializer.html}
 */
export type Serializer = {
  OrcSerDe?: OrcSerDe;
  ParquetSerDe?: ParquetSerDe;
};
/**
 * Type definition for `AWS::KinesisFirehose::DeliveryStream.SnowflakeDestinationConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-snowflakedestinationconfiguration.html}
 */
export type SnowflakeDestinationConfiguration = {
  /**
   * @minLength `24`
   * @maxLength `2048`
   * @pattern `.+?\.snowflakecomputing\.com`
   */
  AccountUrl: string;
  CloudWatchLoggingOptions?: CloudWatchLoggingOptions;
  /**
   * @minLength `1`
   * @maxLength `255`
   */
  ContentColumnName?: string;
  DataLoadingOption?:
    | "JSON_MAPPING"
    | "VARIANT_CONTENT_MAPPING"
    | "VARIANT_CONTENT_AND_METADATA_MAPPING";
  /**
   * @minLength `1`
   * @maxLength `255`
   */
  Database: string;
  /**
   * @minLength `7`
   * @maxLength `255`
   */
  KeyPassphrase?: string;
  /**
   * @minLength `1`
   * @maxLength `255`
   */
  MetaDataColumnName?: string;
  /**
   * @minLength `256`
   * @maxLength `4096`
   * @pattern `^(?:[A-Za-z0-9+\/]{4})*(?:[A-Za-z0-9+\/]{2}==|[A-Za-z0-9+\/]{3}=)?$`
   */
  PrivateKey: string;
  ProcessingConfiguration?: ProcessingConfiguration;
  RetryOptions?: SnowflakeRetryOptions;
  /**
   * @minLength `1`
   * @maxLength `512`
   * @pattern `arn:.*`
   */
  RoleARN: string;
  S3BackupMode?: "FailedDataOnly" | "AllData";
  S3Configuration: S3DestinationConfiguration;
  /**
   * @minLength `1`
   * @maxLength `255`
   */
  Schema: string;
  SnowflakeRoleConfiguration?: SnowflakeRoleConfiguration;
  SnowflakeVpcConfiguration?: SnowflakeVpcConfiguration;
  /**
   * @minLength `1`
   * @maxLength `255`
   */
  Table: string;
  /**
   * @minLength `1`
   * @maxLength `255`
   */
  User: string;
};
/**
 * Type definition for `AWS::KinesisFirehose::DeliveryStream.SnowflakeRetryOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-snowflakeretryoptions.html}
 */
export type SnowflakeRetryOptions = {
  DurationInSeconds?: number;
};
/**
 * Type definition for `AWS::KinesisFirehose::DeliveryStream.SnowflakeRoleConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-snowflakeroleconfiguration.html}
 */
export type SnowflakeRoleConfiguration = {
  Enabled?: boolean;
  /**
   * @minLength `1`
   * @maxLength `255`
   */
  SnowflakeRole?: string;
};
/**
 * Type definition for `AWS::KinesisFirehose::DeliveryStream.SnowflakeVpcConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-snowflakevpcconfiguration.html}
 */
export type SnowflakeVpcConfiguration = {
  /**
   * @minLength `47`
   * @maxLength `255`
   * @pattern `([a-zA-Z0-9\-\_]+\.){2,3}vpce\.[a-zA-Z0-9\-]*\.vpce-svc\-[a-zA-Z0-9\-]{17}$`
   */
  PrivateLinkVpceId: string;
};
/**
 * Type definition for `AWS::KinesisFirehose::DeliveryStream.SplunkBufferingHints`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-splunkbufferinghints.html}
 */
export type SplunkBufferingHints = {
  IntervalInSeconds?: number;
  SizeInMBs?: number;
};
/**
 * Type definition for `AWS::KinesisFirehose::DeliveryStream.SplunkDestinationConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-splunkdestinationconfiguration.html}
 */
export type SplunkDestinationConfiguration = {
  BufferingHints?: SplunkBufferingHints;
  CloudWatchLoggingOptions?: CloudWatchLoggingOptions;
  /**
   * @min `180`
   * @max `600`
   */
  HECAcknowledgmentTimeoutInSeconds?: number;
  /**
   * @minLength `0`
   * @maxLength `2048`
   */
  HECEndpoint: string;
  HECEndpointType: "Raw" | "Event";
  /**
   * @minLength `0`
   * @maxLength `2048`
   */
  HECToken: string;
  ProcessingConfiguration?: ProcessingConfiguration;
  RetryOptions?: SplunkRetryOptions;
  S3BackupMode?: string;
  S3Configuration: S3DestinationConfiguration;
};
/**
 * Type definition for `AWS::KinesisFirehose::DeliveryStream.SplunkRetryOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-splunkretryoptions.html}
 */
export type SplunkRetryOptions = {
  DurationInSeconds?: number;
};
/**
 * Type definition for `AWS::KinesisFirehose::DeliveryStream.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-tag.html}
 */
export type Tag = {
  /**
   * @minLength `1`
   * @maxLength `128`
   * @pattern `^(?!aws:)[\p{L}\p{Z}\p{N}_.:\/=+\-@%]*$`
   */
  Key: string;
  /**
   * @minLength `0`
   * @maxLength `256`
   * @pattern `^[\p{L}\p{Z}\p{N}_.:\/=+\-@%]*$`
   */
  Value?: string;
};
/**
 * Type definition for `AWS::KinesisFirehose::DeliveryStream.VpcConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-vpcconfiguration.html}
 */
export type VpcConfiguration = {
  /**
   * @minLength `1`
   * @maxLength `512`
   * @pattern `arn:.*`
   */
  RoleARN: string;
  /**
   * @minLength `1`
   * @maxLength `5`
   */
  SecurityGroupIds: string[];
  /**
   * @minLength `1`
   * @maxLength `16`
   */
  SubnetIds: string[];
};
/**
 * Resource Type definition for AWS::KinesisFirehose::DeliveryStream
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html}
 */
export class KinesisFirehoseDeliveryStream extends $Resource<
  "AWS::KinesisFirehose::DeliveryStream",
  KinesisFirehoseDeliveryStreamProperties,
  KinesisFirehoseDeliveryStreamAttributes
> {
  public static readonly Type = "AWS::KinesisFirehose::DeliveryStream";
  constructor(
    logicalId: string,
    properties: KinesisFirehoseDeliveryStreamProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, KinesisFirehoseDeliveryStream.Type, properties, options);
  }
}
