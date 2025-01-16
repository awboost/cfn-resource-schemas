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
 * Type definition for `AWS::Bedrock::DataSource.BedrockDataAutomationConfiguration`.
 * Settings for a Bedrock Data Automation used to parse documents for a data source.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-datasource-bedrockdataautomationconfiguration.html}
 */
export type BedrockDataAutomationConfiguration = {
  /**
   * Determine how will parsed content be stored.
   */
  ParsingModality?: ParsingModality;
};
/**
 * Type definition for `AWS::Bedrock::DataSource.BedrockFoundationModelConfiguration`.
 * Settings for a foundation model used to parse documents for a data source.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-datasource-bedrockfoundationmodelconfiguration.html}
 */
export type BedrockFoundationModelConfiguration = {
  /**
   * The model's ARN.
   * @minLength `1`
   * @maxLength `2048`
   * @pattern `^arn:aws(-[^:]+)?:bedrock:[a-z0-9-]{1,20}::foundation-model/([a-z0-9-]{1,63}[.]{1}[a-z0-9-]{1,63}([.]?[a-z0-9-]{1,63})([:][a-z0-9-]{1,63}){0,2})|(arn:aws(|-us-gov|-cn|-iso|-iso-b):bedrock:(|[0-9a-z-]{1,20}):(|[0-9]{12}):(inference-profile|application-inference-profile)/[a-zA-Z0-9-:.]+)$`
   */
  ModelArn: string;
  /**
   * Determine how will parsed content be stored.
   */
  ParsingModality?: ParsingModality;
  /**
   * Instructions for interpreting the contents of a document.
   */
  ParsingPrompt?: ParsingPrompt;
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
  /**
   * Configurations for when you choose hierarchical chunking. If you set the chunkingStrategy as NONE, exclude this field.
   */
  HierarchicalChunkingConfiguration?: HierarchicalChunkingConfiguration;
  /**
   * Configurations for when you choose semantic chunking. If you set the chunkingStrategy as NONE, exclude this field.
   */
  SemanticChunkingConfiguration?: SemanticChunkingConfiguration;
};
/**
 * Type definition for `AWS::Bedrock::DataSource.ChunkingStrategy`.
 * Knowledge base can split your source data into chunks. A chunk refers to an excerpt from a data source that is returned when the knowledge base that it belongs to is queried. You have the following options for chunking your data. If you opt for NONE, then you may want to pre-process your files by splitting them up such that each file corresponds to a chunk.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-datasource-chunkingstrategy.html}
 */
export type ChunkingStrategy =
  | "FIXED_SIZE"
  | "NONE"
  | "HIERARCHICAL"
  | "SEMANTIC";
/**
 * Type definition for `AWS::Bedrock::DataSource.ConfluenceCrawlerConfiguration`.
 * The configuration of the Confluence content. For example, configuring specific types of Confluence content.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-datasource-confluencecrawlerconfiguration.html}
 */
export type ConfluenceCrawlerConfiguration = {
  /**
   * The type of filtering that you want to apply to certain objects or content of the data source. For example, the PATTERN type is regular expression patterns you can apply to filter your content.
   */
  FilterConfiguration?: CrawlFilterConfiguration;
};
/**
 * Type definition for `AWS::Bedrock::DataSource.ConfluenceDataSourceConfiguration`.
 * The configuration information to connect to Confluence as your data source.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-datasource-confluencedatasourceconfiguration.html}
 */
export type ConfluenceDataSourceConfiguration = {
  /**
   * The configuration of the Confluence content. For example, configuring specific types of Confluence content.
   */
  CrawlerConfiguration?: ConfluenceCrawlerConfiguration;
  /**
   * The endpoint information to connect to your Confluence data source.
   */
  SourceConfiguration: ConfluenceSourceConfiguration;
};
/**
 * Type definition for `AWS::Bedrock::DataSource.ConfluenceSourceConfiguration`.
 * The endpoint information to connect to your Confluence data source.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-datasource-confluencesourceconfiguration.html}
 */
export type ConfluenceSourceConfiguration = {
  /**
   * The supported authentication type to authenticate and connect to your Confluence instance.
   */
  AuthType: "BASIC" | "OAUTH2_CLIENT_CREDENTIALS";
  /**
   * The Amazon Resource Name of an AWS Secrets Manager secret that stores your authentication credentials for your Confluence instance URL. For more information on the key-value pairs that must be included in your secret, depending on your authentication type, see Confluence connection configuration.
   * @pattern `^arn:aws(|-cn|-us-gov):secretsmanager:[a-z0-9-]{1,20}:([0-9]{12}|):secret:[a-zA-Z0-9!/_+=.@-]{1,512}$`
   */
  CredentialsSecretArn: string;
  /**
   * The supported host type, whether online/cloud or server/on-premises.
   */
  HostType: "SAAS";
  /**
   * The Confluence host URL or instance URL.
   * @minLength `1`
   * @maxLength `2048`
   * @pattern `^https://[A-Za-z0-9][^\s]*$`
   */
  HostUrl: string;
};
/**
 * Type definition for `AWS::Bedrock::DataSource.CrawlFilterConfiguration`.
 * The type of filtering that you want to apply to certain objects or content of the data source. For example, the PATTERN type is regular expression patterns you can apply to filter your content.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-datasource-crawlfilterconfiguration.html}
 */
export type CrawlFilterConfiguration = {
  /**
   * The configuration of specific filters applied to your data source content. You can filter out or include certain content.
   */
  PatternObjectFilter?: PatternObjectFilterConfiguration;
  /**
   * The crawl filter type.
   */
  Type: "PATTERN";
};
/**
 * Type definition for `AWS::Bedrock::DataSource.CustomTransformationConfiguration`.
 * Settings for customizing steps in the data source content ingestion pipeline.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-datasource-customtransformationconfiguration.html}
 */
export type CustomTransformationConfiguration = {
  /**
   * A location for storing content from data sources temporarily as it is processed by custom components in the ingestion pipeline.
   */
  IntermediateStorage: IntermediateStorage;
  /**
   * A list of Lambda functions that process documents.
   * @minLength `1`
   * @maxLength `1`
   */
  Transformations: Transformation[];
};
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
   * The configuration information to connect to Confluence as your data source.
   */
  ConfluenceConfiguration?: ConfluenceDataSourceConfiguration;
  /**
   * The configuration information to connect to Amazon S3 as your data source.
   */
  S3Configuration?: S3DataSourceConfiguration;
  /**
   * The configuration information to connect to Salesforce as your data source.
   */
  SalesforceConfiguration?: SalesforceDataSourceConfiguration;
  /**
   * The configuration information to connect to SharePoint as your data source.
   */
  SharePointConfiguration?: SharePointDataSourceConfiguration;
  /**
   * The type of the data source location.
   */
  Type: DataSourceType;
  /**
   * Configures a web data source location.
   */
  WebConfiguration?: WebDataSourceConfiguration;
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
export type DataSourceType =
  | "S3"
  | "CONFLUENCE"
  | "SALESFORCE"
  | "SHAREPOINT"
  | "WEB"
  | "CUSTOM"
  | "REDSHIFT_METADATA";
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
 * Type definition for `AWS::Bedrock::DataSource.HierarchicalChunkingConfiguration`.
 * Configurations for when you choose hierarchical chunking. If you set the chunkingStrategy as NONE, exclude this field.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-datasource-hierarchicalchunkingconfiguration.html}
 */
export type HierarchicalChunkingConfiguration = {
  /**
   * Token settings for each layer.
   * @minLength `2`
   * @maxLength `2`
   */
  LevelConfigurations: HierarchicalChunkingLevelConfiguration[];
  /**
   * The number of tokens to repeat across chunks in the same layer.
   * @min `1`
   */
  OverlapTokens: number;
};
/**
 * Type definition for `AWS::Bedrock::DataSource.HierarchicalChunkingLevelConfiguration`.
 * Token settings for a layer in a hierarchical chunking configuration.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-datasource-hierarchicalchunkinglevelconfiguration.html}
 */
export type HierarchicalChunkingLevelConfiguration = {
  /**
   * The maximum number of tokens that a chunk can contain in this layer.
   * @min `1`
   * @max `8192`
   */
  MaxTokens: number;
};
/**
 * Type definition for `AWS::Bedrock::DataSource.IntermediateStorage`.
 * A location for storing content from data sources temporarily as it is processed by custom components in the ingestion pipeline.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-datasource-intermediatestorage.html}
 */
export type IntermediateStorage = {
  /**
   * An Amazon S3 location.
   */
  S3Location: S3Location;
};
/**
 * Type definition for `AWS::Bedrock::DataSource.ParsingConfiguration`.
 * Settings for parsing document contents
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-datasource-parsingconfiguration.html}
 */
export type ParsingConfiguration = {
  /**
   * Settings for a Bedrock Data Automation used to parse documents for a data source.
   */
  BedrockDataAutomationConfiguration?: BedrockDataAutomationConfiguration;
  /**
   * Settings for a foundation model used to parse documents for a data source.
   */
  BedrockFoundationModelConfiguration?: BedrockFoundationModelConfiguration;
  /**
   * The parsing strategy for the data source.
   */
  ParsingStrategy: ParsingStrategy;
};
/**
 * Type definition for `AWS::Bedrock::DataSource.ParsingModality`.
 * Determine how will parsed content be stored.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-datasource-parsingmodality.html}
 */
export type ParsingModality = "MULTIMODAL";
/**
 * Type definition for `AWS::Bedrock::DataSource.ParsingPrompt`.
 * Instructions for interpreting the contents of a document.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-datasource-parsingprompt.html}
 */
export type ParsingPrompt = {
  /**
   * Instructions for interpreting the contents of a document.
   * @minLength `1`
   * @maxLength `10000`
   */
  ParsingPromptText: string;
};
/**
 * Type definition for `AWS::Bedrock::DataSource.ParsingStrategy`.
 * The parsing strategy for the data source.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-datasource-parsingstrategy.html}
 */
export type ParsingStrategy =
  | "BEDROCK_FOUNDATION_MODEL"
  | "BEDROCK_DATA_AUTOMATION";
/**
 * Type definition for `AWS::Bedrock::DataSource.PatternObjectFilter`.
 * The specific filters applied to your data source content. You can filter out or include certain content.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-datasource-patternobjectfilter.html}
 */
export type PatternObjectFilter = {
  /**
   * A set of regular expression filter patterns for a type of object.
   * @minLength `1`
   * @maxLength `25`
   */
  ExclusionFilters?: string[];
  /**
   * A set of regular expression filter patterns for a type of object.
   * @minLength `1`
   * @maxLength `25`
   */
  InclusionFilters?: string[];
  /**
   * The supported object type or content type of the data source.
   * @minLength `1`
   * @maxLength `50`
   */
  ObjectType: string;
};
/**
 * Type definition for `AWS::Bedrock::DataSource.PatternObjectFilterConfiguration`.
 * The configuration of specific filters applied to your data source content. You can filter out or include certain content.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-datasource-patternobjectfilterconfiguration.html}
 */
export type PatternObjectFilterConfiguration = {
  /**
   * Contains information
   * @minLength `1`
   * @maxLength `25`
   */
  Filters: PatternObjectFilter[];
};
/**
 * Type definition for `AWS::Bedrock::DataSource.S3DataSourceConfiguration`.
 * The configuration information to connect to Amazon S3 as your data source.
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
 * Type definition for `AWS::Bedrock::DataSource.S3Location`.
 * An Amazon S3 location.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-datasource-s3location.html}
 */
export type S3Location = {
  /**
   * The location's URI
   * @minLength `1`
   * @maxLength `2048`
   * @pattern `^s3://.{1,128}$`
   */
  URI: string;
};
/**
 * Type definition for `AWS::Bedrock::DataSource.SalesforceCrawlerConfiguration`.
 * The configuration of filtering the Salesforce content. For example, configuring regular expression patterns to include or exclude certain content.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-datasource-salesforcecrawlerconfiguration.html}
 */
export type SalesforceCrawlerConfiguration = {
  /**
   * The type of filtering that you want to apply to certain objects or content of the data source. For example, the PATTERN type is regular expression patterns you can apply to filter your content.
   */
  FilterConfiguration?: CrawlFilterConfiguration;
};
/**
 * Type definition for `AWS::Bedrock::DataSource.SalesforceDataSourceConfiguration`.
 * The configuration information to connect to Salesforce as your data source.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-datasource-salesforcedatasourceconfiguration.html}
 */
export type SalesforceDataSourceConfiguration = {
  /**
   * The configuration of filtering the Salesforce content. For example, configuring regular expression patterns to include or exclude certain content.
   */
  CrawlerConfiguration?: SalesforceCrawlerConfiguration;
  /**
   * The endpoint information to connect to your Salesforce data source.
   */
  SourceConfiguration: SalesforceSourceConfiguration;
};
/**
 * Type definition for `AWS::Bedrock::DataSource.SalesforceSourceConfiguration`.
 * The endpoint information to connect to your Salesforce data source.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-datasource-salesforcesourceconfiguration.html}
 */
export type SalesforceSourceConfiguration = {
  /**
   * The supported authentication type to authenticate and connect to your Salesforce instance.
   */
  AuthType: "OAUTH2_CLIENT_CREDENTIALS";
  /**
   * The Amazon Resource Name of an AWS Secrets Manager secret that stores your authentication credentials for your Salesforce instance URL. For more information on the key-value pairs that must be included in your secret, depending on your authentication type, see Salesforce connection configuration.
   * @pattern `^arn:aws(|-cn|-us-gov):secretsmanager:[a-z0-9-]{1,20}:([0-9]{12}|):secret:[a-zA-Z0-9!/_+=.@-]{1,512}$`
   */
  CredentialsSecretArn: string;
  /**
   * The Salesforce host URL or instance URL.
   * @minLength `1`
   * @maxLength `2048`
   * @pattern `^https://[A-Za-z0-9][^\s]*$`
   */
  HostUrl: string;
};
/**
 * Type definition for `AWS::Bedrock::DataSource.SeedUrl`.
 * A seed url object.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-datasource-seedurl.html}
 */
export type SeedUrl = {
  /**
   * A web url.
   * @pattern `^https?://[A-Za-z0-9][^\s]*$`
   */
  Url: string;
};
/**
 * Type definition for `AWS::Bedrock::DataSource.SemanticChunkingConfiguration`.
 * Configurations for when you choose semantic chunking. If you set the chunkingStrategy as NONE, exclude this field.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-datasource-semanticchunkingconfiguration.html}
 */
export type SemanticChunkingConfiguration = {
  /**
   * The dissimilarity threshold for splitting chunks.
   * @min `50`
   * @max `99`
   */
  BreakpointPercentileThreshold: number;
  /**
   * The buffer size.
   * @min `0`
   * @max `1`
   */
  BufferSize: number;
  /**
   * The maximum number of tokens that a chunk can contain.
   * @min `1`
   */
  MaxTokens: number;
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
 * Type definition for `AWS::Bedrock::DataSource.SharePointCrawlerConfiguration`.
 * The configuration of the SharePoint content. For example, configuring specific types of SharePoint content.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-datasource-sharepointcrawlerconfiguration.html}
 */
export type SharePointCrawlerConfiguration = {
  /**
   * The type of filtering that you want to apply to certain objects or content of the data source. For example, the PATTERN type is regular expression patterns you can apply to filter your content.
   */
  FilterConfiguration?: CrawlFilterConfiguration;
};
/**
 * Type definition for `AWS::Bedrock::DataSource.SharePointDataSourceConfiguration`.
 * The configuration information to connect to SharePoint as your data source.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-datasource-sharepointdatasourceconfiguration.html}
 */
export type SharePointDataSourceConfiguration = {
  /**
   * The configuration of the SharePoint content. For example, configuring specific types of SharePoint content.
   */
  CrawlerConfiguration?: SharePointCrawlerConfiguration;
  /**
   * The endpoint information to connect to your SharePoint data source.
   */
  SourceConfiguration: SharePointSourceConfiguration;
};
/**
 * Type definition for `AWS::Bedrock::DataSource.SharePointSourceConfiguration`.
 * The endpoint information to connect to your SharePoint data source.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-datasource-sharepointsourceconfiguration.html}
 */
export type SharePointSourceConfiguration = {
  /**
   * The supported authentication type to authenticate and connect to your SharePoint site/sites.
   */
  AuthType: "OAUTH2_CLIENT_CREDENTIALS";
  /**
   * The Amazon Resource Name of an AWS Secrets Manager secret that stores your authentication credentials for your SharePoint site/sites. For more information on the key-value pairs that must be included in your secret, depending on your authentication type, see SharePoint connection configuration.
   * @pattern `^arn:aws(|-cn|-us-gov):secretsmanager:[a-z0-9-]{1,20}:([0-9]{12}|):secret:[a-zA-Z0-9!/_+=.@-]{1,512}$`
   */
  CredentialsSecretArn: string;
  /**
   * The domain of your SharePoint instance or site URL/URLs.
   * @minLength `1`
   * @maxLength `50`
   */
  Domain: string;
  /**
   * The supported host type, whether online/cloud or server/on-premises.
   */
  HostType: "ONLINE";
  /**
   * A list of one or more SharePoint site URLs.
   * @minLength `1`
   * @maxLength `100`
   */
  SiteUrls: string[];
  /**
   * The identifier of your Microsoft 365 tenant.
   * @pattern `^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$`
   */
  TenantId?: string;
};
/**
 * Type definition for `AWS::Bedrock::DataSource.Transformation`.
 * A Lambda function that processes documents.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-datasource-transformation.html}
 */
export type Transformation = {
  /**
   * When the service applies the transformation.
   */
  StepToApply: "POST_CHUNKING";
  /**
   * A Lambda function that processes documents.
   */
  TransformationFunction: TransformationFunction;
};
/**
 * Type definition for `AWS::Bedrock::DataSource.TransformationFunction`.
 * A Lambda function that processes documents.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-datasource-transformationfunction.html}
 */
export type TransformationFunction = {
  /**
   * A Lambda function that processes documents.
   */
  TransformationLambdaConfiguration: TransformationLambdaConfiguration;
};
/**
 * Type definition for `AWS::Bedrock::DataSource.TransformationLambdaConfiguration`.
 * A Lambda function that processes documents.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-datasource-transformationlambdaconfiguration.html}
 */
export type TransformationLambdaConfiguration = {
  /**
   * The function's ARN identifier.
   * @minLength `0`
   * @maxLength `2048`
   * @pattern `^arn:(aws[a-zA-Z-]*)?:lambda:[a-z]{2}(-gov)?-[a-z]+-\d{1}:\d{12}:function:[a-zA-Z0-9-_\.]+(:(\$LATEST|[a-zA-Z0-9-_]+))?$`
   */
  LambdaArn: string;
};
/**
 * Type definition for `AWS::Bedrock::DataSource.UrlConfiguration`.
 * A url configuration.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-datasource-urlconfiguration.html}
 */
export type UrlConfiguration = {
  /**
   * A list of web urls.
   * @minLength `1`
   * @maxLength `100`
   */
  SeedUrls: SeedUrl[];
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
  /**
   * Settings for customizing steps in the data source content ingestion pipeline.
   */
  CustomTransformationConfiguration?: CustomTransformationConfiguration;
  /**
   * Settings for parsing document contents
   */
  ParsingConfiguration?: ParsingConfiguration;
};
/**
 * Type definition for `AWS::Bedrock::DataSource.WebCrawlerConfiguration`.
 * Configuration for the web crawler.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-datasource-webcrawlerconfiguration.html}
 */
export type WebCrawlerConfiguration = {
  /**
   * Limit settings for the web crawler.
   */
  CrawlerLimits?: WebCrawlerLimits;
  /**
   * A set of regular expression filter patterns for a type of object.
   * @minLength `1`
   * @maxLength `25`
   */
  ExclusionFilters?: string[];
  /**
   * A set of regular expression filter patterns for a type of object.
   * @minLength `1`
   * @maxLength `25`
   */
  InclusionFilters?: string[];
  /**
   * The scope that a web crawl job will be restricted to.
   */
  Scope?: WebScopeType;
};
/**
 * Type definition for `AWS::Bedrock::DataSource.WebCrawlerLimits`.
 * Limit settings for the web crawler.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-datasource-webcrawlerlimits.html}
 */
export type WebCrawlerLimits = {
  /**
   * Rate of web URLs retrieved per minute.
   * @min `1`
   * @max `300`
   */
  RateLimit?: number;
};
/**
 * Type definition for `AWS::Bedrock::DataSource.WebDataSourceConfiguration`.
 * Configures a web data source location.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-datasource-webdatasourceconfiguration.html}
 */
export type WebDataSourceConfiguration = {
  /**
   * Configuration for the web crawler.
   */
  CrawlerConfiguration?: WebCrawlerConfiguration;
  /**
   * A web source configuration.
   */
  SourceConfiguration: WebSourceConfiguration;
};
/**
 * Type definition for `AWS::Bedrock::DataSource.WebScopeType`.
 * The scope that a web crawl job will be restricted to.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-datasource-webscopetype.html}
 */
export type WebScopeType = "HOST_ONLY" | "SUBDOMAINS";
/**
 * Type definition for `AWS::Bedrock::DataSource.WebSourceConfiguration`.
 * A web source configuration.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-datasource-websourceconfiguration.html}
 */
export type WebSourceConfiguration = {
  /**
   * A url configuration.
   */
  UrlConfiguration: UrlConfiguration;
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
