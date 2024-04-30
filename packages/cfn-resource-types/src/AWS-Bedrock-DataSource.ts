import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Definition of AWS::Bedrock::DataSource Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-datasource.html}
 */
export type BedrockDataSourceProperties = {
  /**
   * The deletion policy for the data source.
   */
  DataDeletionPolicy?: DataDeletionPolicy;
  /**
   * Specifies a raw data source location to ingest.
   */
  DataSourceConfiguration: DataSourceConfiguration;
  /**
   * Description of the Resource.
   * @minLength `1`
   * @maxLength `200`
   */
  Description?: string;
  /**
   * The unique identifier of the knowledge base to which to add the data source.
   * @pattern `^[0-9a-zA-Z]{10}$`
   */
  KnowledgeBaseId: string;
  /**
   * The name of the data source.
   * @pattern `^([0-9a-zA-Z][_-]?){1,100}$`
   */
  Name: string;
  /**
   * Contains details about the server-side encryption for the data source.
   */
  ServerSideEncryptionConfiguration?: ServerSideEncryptionConfiguration;
  /**
   * Details about how to chunk the documents in the data source. A chunk refers to an excerpt from a data source that is returned when the knowledge base that it belongs to is queried.
   */
  VectorIngestionConfiguration?: VectorIngestionConfiguration;
};
/**
 * Attribute type definition for `AWS::Bedrock::DataSource`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-datasource.html#aws-resource-bedrock-datasource-return-values}
 */
export type BedrockDataSourceAttributes = {
  /**
   * The time at which the data source was created.
   */
  CreatedAt: string;
  /**
   * Identifier for a resource.
   * @pattern `^[0-9a-zA-Z]{10}$`
   */
  DataSourceId: string;
  /**
   * The status of a data source.
   */
  DataSourceStatus: DataSourceStatus;
  /**
   * The details of the failure reasons related to the data source.
   * @maxLength `2048`
   */
  FailureReasons: string[];
  /**
   * The time at which the knowledge base was last updated.
   */
  UpdatedAt: string;
};
/**
 * Type definition for `AWS::Bedrock::DataSource.ChunkingConfiguration`.
 * Details about how to chunk the documents in the data source. A chunk refers to an excerpt from a data source that is returned when the knowledge base that it belongs to is queried.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-datasource-chunkingconfiguration.html}
 */
export type ChunkingConfiguration = {
  /**
   * Knowledge base can split your source data into chunks. A chunk refers to an excerpt from a data source that is returned when the knowledge base that it belongs to is queried. You have the following options for chunking your data. If you opt for NONE, then you may want to pre-process your files by splitting them up such that each file corresponds to a chunk.
   */
  ChunkingStrategy: ChunkingStrategy;
  /**
   * Configurations for when you choose fixed-size chunking. If you set the chunkingStrategy as NONE, exclude this field.
   */
  FixedSizeChunkingConfiguration?: FixedSizeChunkingConfiguration;
};
/**
 * Type definition for `AWS::Bedrock::DataSource.ChunkingStrategy`.
 * Knowledge base can split your source data into chunks. A chunk refers to an excerpt from a data source that is returned when the knowledge base that it belongs to is queried. You have the following options for chunking your data. If you opt for NONE, then you may want to pre-process your files by splitting them up such that each file corresponds to a chunk.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-datasource-chunkingstrategy.html}
 */
export type ChunkingStrategy = "FIXED_SIZE" | "NONE";
/**
 * Type definition for `AWS::Bedrock::DataSource.DataDeletionPolicy`.
 * The deletion policy for the data source.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-datasource-datadeletionpolicy.html}
 */
export type DataDeletionPolicy = "RETAIN" | "DELETE";
/**
 * Type definition for `AWS::Bedrock::DataSource.DataSourceConfiguration`.
 * Specifies a raw data source location to ingest.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-datasource-datasourceconfiguration.html}
 */
export type DataSourceConfiguration = {
  /**
   * Contains information about the S3 configuration of the data source.
   */
  S3Configuration: S3DataSourceConfiguration;
  /**
   * The type of the data source location.
   */
  Type: DataSourceType;
};
/**
 * Type definition for `AWS::Bedrock::DataSource.DataSourceStatus`.
 * The status of a data source.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-datasource-datasourcestatus.html}
 */
export type DataSourceStatus = "AVAILABLE" | "DELETING" | "DELETE_UNSUCCESSFUL";
/**
 * Type definition for `AWS::Bedrock::DataSource.DataSourceType`.
 * The type of the data source location.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-datasource-datasourcetype.html}
 */
export type DataSourceType = "S3";
/**
 * Type definition for `AWS::Bedrock::DataSource.FixedSizeChunkingConfiguration`.
 * Configurations for when you choose fixed-size chunking. If you set the chunkingStrategy as NONE, exclude this field.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-datasource-fixedsizechunkingconfiguration.html}
 */
export type FixedSizeChunkingConfiguration = {
  /**
   * The maximum number of tokens to include in a chunk.
   * @min `1`
   */
  MaxTokens: number;
  /**
   * The percentage of overlap between adjacent chunks of a data source.
   * @min `1`
   * @max `99`
   */
  OverlapPercentage: number;
};
/**
 * Type definition for `AWS::Bedrock::DataSource.S3DataSourceConfiguration`.
 * Contains information about the S3 configuration of the data source.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-datasource-s3datasourceconfiguration.html}
 */
export type S3DataSourceConfiguration = {
  /**
   * The ARN of the bucket that contains the data source.
   * @minLength `1`
   * @maxLength `2048`
   * @pattern `^arn:aws(|-cn|-us-gov):s3:::[a-z0-9][a-z0-9.-]{1,61}[a-z0-9]$`
   */
  BucketArn: string;
  /**
   * The account ID for the owner of the S3 bucket.
   * @minLength `12`
   * @maxLength `12`
   * @pattern `^[0-9]{12}$`
   */
  BucketOwnerAccountId?: string;
  /**
   * A list of S3 prefixes that define the object containing the data sources.
   * @minLength `1`
   * @maxLength `1`
   */
  InclusionPrefixes?: string[];
};
/**
 * Type definition for `AWS::Bedrock::DataSource.ServerSideEncryptionConfiguration`.
 * Contains details about the server-side encryption for the data source.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-datasource-serversideencryptionconfiguration.html}
 */
export type ServerSideEncryptionConfiguration = {
  /**
   * The ARN of the AWS KMS key used to encrypt the resource.
   * @minLength `1`
   * @maxLength `2048`
   * @pattern `^arn:aws(|-cn|-us-gov):kms:[a-zA-Z0-9-]*:[0-9]{12}:key/[a-zA-Z0-9-]{36}$`
   */
  KmsKeyArn?: string;
};
/**
 * Type definition for `AWS::Bedrock::DataSource.VectorIngestionConfiguration`.
 * Details about how to chunk the documents in the data source. A chunk refers to an excerpt from a data source that is returned when the knowledge base that it belongs to is queried.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-datasource-vectoringestionconfiguration.html}
 */
export type VectorIngestionConfiguration = {
  /**
   * Details about how to chunk the documents in the data source. A chunk refers to an excerpt from a data source that is returned when the knowledge base that it belongs to is queried.
   */
  ChunkingConfiguration?: ChunkingConfiguration;
};
/**
 * Definition of AWS::Bedrock::DataSource Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-datasource.html}
 */
export class BedrockDataSource extends $Resource<
  "AWS::Bedrock::DataSource",
  BedrockDataSourceProperties,
  BedrockDataSourceAttributes
> {
  public static readonly Type = "AWS::Bedrock::DataSource";
  constructor(
    logicalId: string,
    properties: BedrockDataSourceProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, BedrockDataSource.Type, properties, options);
  }
}
