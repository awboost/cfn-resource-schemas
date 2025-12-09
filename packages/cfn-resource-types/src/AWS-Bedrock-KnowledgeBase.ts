import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Definition of AWS::Bedrock::KnowledgeBase Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-knowledgebase.html}
 */
export type BedrockKnowledgeBaseProperties = {
  /**
   * Description of the Resource.
   * @minLength `1`
   * @maxLength `200`
   */
  Description?: string;
  /**
   * Contains details about the embeddings model used for the knowledge base.
   */
  KnowledgeBaseConfiguration: KnowledgeBaseConfiguration;
  /**
   * The name of the knowledge base.
   * @pattern `^([0-9a-zA-Z][_-]?){1,100}$`
   */
  Name: string;
  /**
   * The ARN of the IAM role with permissions to invoke API operations on the knowledge base. The ARN must begin with AmazonBedrockExecutionRoleForKnowledgeBase_
   * @maxLength `2048`
   * @pattern `^arn:aws(-[^:]+)?:iam::([0-9]{12})?:role/.+$`
   */
  RoleArn: string;
  /**
   * The vector store service in which the knowledge base is stored.
   */
  StorageConfiguration?: StorageConfiguration;
  /**
   * A map of tag keys and values
   */
  Tags?: TagsMap;
};
/**
 * Attribute type definition for `AWS::Bedrock::KnowledgeBase`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-knowledgebase.html#aws-resource-bedrock-knowledgebase-return-values}
 */
export type BedrockKnowledgeBaseAttributes = {
  /**
   * The time at which the knowledge base was created.
   */
  CreatedAt: string;
  /**
   * A list of reasons that the API operation on the knowledge base failed.
   * @maxLength `2048`
   */
  FailureReasons: string[];
  /**
   * The ARN of the knowledge base.
   * @minLength `0`
   * @maxLength `128`
   * @pattern `^arn:aws(|-cn|-us-gov):bedrock:[a-zA-Z0-9-]*:[0-9]{12}:knowledge-base/[0-9a-zA-Z]+$`
   */
  KnowledgeBaseArn: string;
  /**
   * The unique identifier of the knowledge base.
   * @pattern `^[0-9a-zA-Z]{10}$`
   */
  KnowledgeBaseId: string;
  /**
   * The status of a knowledge base.
   */
  Status: KnowledgeBaseStatus;
  /**
   * The time at which the knowledge base was last updated.
   */
  UpdatedAt: string;
};
/**
 * Type definition for `AWS::Bedrock::KnowledgeBase.AudioConfiguration`.
 * Configure the audio configuration for multi modal ingestion.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-knowledgebase-audioconfiguration.html}
 */
export type AudioConfiguration = {
  /**
   * Configure the audio segmentation configuration for multi modal ingestion.
   */
  SegmentationConfiguration: AudioSegmentationConfiguration;
};
/**
 * Type definition for `AWS::Bedrock::KnowledgeBase.AudioSegmentationConfiguration`.
 * Configure the audio segmentation configuration for multi modal ingestion.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-knowledgebase-audiosegmentationconfiguration.html}
 */
export type AudioSegmentationConfiguration = {
  /**
   * Duration in seconds to segment the multi modal media
   * @min `1`
   * @max `30`
   */
  FixedLengthDuration: number;
};
/**
 * Type definition for `AWS::Bedrock::KnowledgeBase.BedrockEmbeddingModelConfiguration`.
 * The vector configuration details for the Bedrock embeddings model.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-knowledgebase-bedrockembeddingmodelconfiguration.html}
 */
export type BedrockEmbeddingModelConfiguration = {
  /**
   * List of audio configurations for multi modal ingestion.
   * @minLength `1`
   * @maxLength `1`
   */
  Audio?: AudioConfiguration[];
  /**
   * The dimensions details for the vector configuration used on the Bedrock embeddings model.
   * @min `0`
   * @max `4096`
   */
  Dimensions?: number;
  /**
   * The data type for the vectors when using a model to convert text into vector embeddings.
   */
  EmbeddingDataType?: "FLOAT32" | "BINARY";
  /**
   * List of video configurations for multi modal ingestion.
   * @minLength `1`
   * @maxLength `1`
   */
  Video?: VideoConfiguration[];
};
/**
 * Type definition for `AWS::Bedrock::KnowledgeBase.CuratedQuery`.
 * Curated query or question and answer pair
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-knowledgebase-curatedquery.html}
 */
export type CuratedQuery = {
  /**
   * Question for the curated query
   * @minLength `1`
   * @maxLength `1000`
   */
  NaturalLanguage: string;
  /**
   * Answer for the curated query
   * @minLength `1`
   * @maxLength `1000`
   */
  Sql: string;
};
/**
 * Type definition for `AWS::Bedrock::KnowledgeBase.EmbeddingModelConfiguration`.
 * The embeddings model configuration details for the vector model used in Knowledge Base.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-knowledgebase-embeddingmodelconfiguration.html}
 */
export type EmbeddingModelConfiguration = {
  /**
   * The vector configuration details for the Bedrock embeddings model.
   */
  BedrockEmbeddingModelConfiguration?: BedrockEmbeddingModelConfiguration;
};
/**
 * Type definition for `AWS::Bedrock::KnowledgeBase.InclusionType`.
 * Include or Exclude status for an entity
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-knowledgebase-inclusiontype.html}
 */
export type InclusionType = "INCLUDE" | "EXCLUDE";
/**
 * Type definition for `AWS::Bedrock::KnowledgeBase.KendraKnowledgeBaseConfiguration`.
 * Configurations for a Kendra knowledge base
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-knowledgebase-kendraknowledgebaseconfiguration.html}
 */
export type KendraKnowledgeBaseConfiguration = {
  /**
   * Arn of a Kendra index
   * @pattern `^arn:aws(|-cn|-us-gov):kendra:[a-z0-9-]{1,20}:([0-9]{12}|):index/([a-zA-Z0-9][a-zA-Z0-9-]{35}|[a-zA-Z0-9][a-zA-Z0-9-]{35}-[a-zA-Z0-9][a-zA-Z0-9-]{35})$`
   */
  KendraIndexArn: string;
};
/**
 * Type definition for `AWS::Bedrock::KnowledgeBase.KnowledgeBaseConfiguration`.
 * Contains details about the embeddings model used for the knowledge base.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-knowledgebase-knowledgebaseconfiguration.html}
 */
export type KnowledgeBaseConfiguration = {
  /**
   * Configurations for a Kendra knowledge base
   */
  KendraKnowledgeBaseConfiguration?: KendraKnowledgeBaseConfiguration;
  /**
   * Configurations for a SQL knowledge base
   */
  SqlKnowledgeBaseConfiguration?: SqlKnowledgeBaseConfiguration;
  /**
   * The type of a knowledge base.
   */
  Type: KnowledgeBaseType;
  /**
   * Contains details about the model used to create vector embeddings for the knowledge base.
   */
  VectorKnowledgeBaseConfiguration?: VectorKnowledgeBaseConfiguration;
};
/**
 * Type definition for `AWS::Bedrock::KnowledgeBase.KnowledgeBaseStatus`.
 * The status of a knowledge base.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-knowledgebase-knowledgebasestatus.html}
 */
export type KnowledgeBaseStatus =
  | "CREATING"
  | "ACTIVE"
  | "DELETING"
  | "UPDATING"
  | "FAILED"
  | "DELETE_UNSUCCESSFUL";
/**
 * Type definition for `AWS::Bedrock::KnowledgeBase.KnowledgeBaseStorageType`.
 * The storage type of a knowledge base.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-knowledgebase-knowledgebasestoragetype.html}
 */
export type KnowledgeBaseStorageType =
  | "OPENSEARCH_SERVERLESS"
  | "PINECONE"
  | "RDS"
  | "MONGO_DB_ATLAS"
  | "NEPTUNE_ANALYTICS"
  | "S3_VECTORS"
  | "OPENSEARCH_MANAGED_CLUSTER";
/**
 * Type definition for `AWS::Bedrock::KnowledgeBase.KnowledgeBaseType`.
 * The type of a knowledge base.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-knowledgebase-knowledgebasetype.html}
 */
export type KnowledgeBaseType = "VECTOR" | "KENDRA" | "SQL";
/**
 * Type definition for `AWS::Bedrock::KnowledgeBase.MongoDbAtlasConfiguration`.
 * Contains the storage configuration of the knowledge base in MongoDb Atlas Cloud.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-knowledgebase-mongodbatlasconfiguration.html}
 */
export type MongoDbAtlasConfiguration = {
  /**
   * Name of the collection within MongoDB Atlas.
   * @maxLength `63`
   * @pattern `^.*$`
   */
  CollectionName: string;
  /**
   * The ARN of the secret that you created in AWS Secrets Manager that is linked to your Amazon Mongo database.
   * @pattern `^arn:aws(|-cn|-us-gov):secretsmanager:[a-z0-9-]{1,20}:([0-9]{12}|):secret:[a-zA-Z0-9!/_+=.@-]{1,512}$`
   */
  CredentialsSecretArn: string;
  /**
   * Name of the database within MongoDB Atlas.
   * @maxLength `63`
   * @pattern `^.*$`
   */
  DatabaseName: string;
  /**
   * MongoDB Atlas endpoint.
   * @maxLength `2048`
   * @pattern `^[a-zA-Z0-9_-]+\.[a-zA-Z0-9_-]+\.mongodb\.net$`
   */
  Endpoint: string;
  /**
   * MongoDB Atlas endpoint service name.
   * @maxLength `255`
   * @pattern `^(?:arn:aws(?:-us-gov|-cn|-iso|-iso-[a-z])*:.+:.*:\d+:.+/.+$|[a-zA-Z0-9*]+[a-zA-Z0-9._-]*)$`
   */
  EndpointServiceName?: string;
  /**
   * Contains the names of the fields to which to map information about the vector store.
   */
  FieldMapping: MongoDbAtlasFieldMapping;
  /**
   * Name of a MongoDB Atlas text index.
   * @maxLength `2048`
   * @pattern `^.*$`
   */
  TextIndexName?: string;
  /**
   * Name of a MongoDB Atlas index.
   * @maxLength `2048`
   * @pattern `^.*$`
   */
  VectorIndexName: string;
};
/**
 * Type definition for `AWS::Bedrock::KnowledgeBase.MongoDbAtlasFieldMapping`.
 * Contains the names of the fields to which to map information about the vector store.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-knowledgebase-mongodbatlasfieldmapping.html}
 */
export type MongoDbAtlasFieldMapping = {
  /**
   * The name of the field in which Amazon Bedrock stores metadata about the vector store.
   * @maxLength `2048`
   * @pattern `^.*$`
   */
  MetadataField: string;
  /**
   * The name of the field in which Amazon Bedrock stores the raw text from your data. The text is split according to the chunking strategy you choose.
   * @maxLength `2048`
   * @pattern `^.*$`
   */
  TextField: string;
  /**
   * The name of the field in which Amazon Bedrock stores the vector embeddings for your data sources.
   * @maxLength `2048`
   * @pattern `^.*$`
   */
  VectorField: string;
};
/**
 * Type definition for `AWS::Bedrock::KnowledgeBase.NeptuneAnalyticsConfiguration`.
 * Contains the configurations to use Neptune Analytics as Vector Store.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-knowledgebase-neptuneanalyticsconfiguration.html}
 */
export type NeptuneAnalyticsConfiguration = {
  /**
   * A mapping of Bedrock Knowledge Base fields to Neptune Analytics fields.
   */
  FieldMapping: NeptuneAnalyticsFieldMapping;
  /**
   * ARN for Neptune Analytics graph database.
   * @minLength `1`
   * @maxLength `255`
   * @pattern `^arn:aws(|-cn|-us-gov):neptune-graph:[a-zA-Z0-9-]*:[0-9]{12}:graph\/g-[a-zA-Z0-9]{10}$`
   */
  GraphArn: string;
};
/**
 * Type definition for `AWS::Bedrock::KnowledgeBase.NeptuneAnalyticsFieldMapping`.
 * A mapping of Bedrock Knowledge Base fields to Neptune Analytics fields.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-knowledgebase-neptuneanalyticsfieldmapping.html}
 */
export type NeptuneAnalyticsFieldMapping = {
  /**
   * The name of the field in which Amazon Bedrock stores metadata about the vector store.
   * @maxLength `2048`
   * @pattern `^.*$`
   */
  MetadataField: string;
  /**
   * The name of the field in which Amazon Bedrock stores the raw text from your data. The text is split according to the chunking strategy you choose.
   * @maxLength `2048`
   * @pattern `^.*$`
   */
  TextField: string;
};
/**
 * Type definition for `AWS::Bedrock::KnowledgeBase.OpenSearchManagedClusterConfiguration`.
 * Contains the storage configuration of the knowledge base in Amazon OpenSearch Service.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-knowledgebase-opensearchmanagedclusterconfiguration.html}
 */
export type OpenSearchManagedClusterConfiguration = {
  /**
   * The Amazon Resource Name (ARN) of the OpenSearch domain.
   * @maxLength `2048`
   * @pattern `^arn:aws(-cn|-us-gov|-eusc|-iso(-[b-f])?)?:es:([a-z]{2,}-){2,}\d:\d{12}:domain/[a-z][a-z0-9-]{3,28}$`
   */
  DomainArn: string;
  /**
   * The endpoint URL the OpenSearch domain.
   * @maxLength `2048`
   * @pattern `^https://.*$`
   */
  DomainEndpoint: string;
  /**
   * A mapping of Bedrock Knowledge Base fields to OpenSearch Managed Cluster field names
   */
  FieldMapping: OpenSearchManagedClusterFieldMapping;
  /**
   * The name of the vector store.
   * @minLength `1`
   * @maxLength `2048`
   * @pattern `^(?![\-_+.])[a-z0-9][a-z0-9\-_\.]*$`
   */
  VectorIndexName: string;
};
/**
 * Type definition for `AWS::Bedrock::KnowledgeBase.OpenSearchManagedClusterFieldMapping`.
 * A mapping of Bedrock Knowledge Base fields to OpenSearch Managed Cluster field names
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-knowledgebase-opensearchmanagedclusterfieldmapping.html}
 */
export type OpenSearchManagedClusterFieldMapping = {
  /**
   * The name of the field in which Amazon Bedrock stores metadata about the vector store.
   * @maxLength `2048`
   * @pattern `^.*$`
   */
  MetadataField: string;
  /**
   * The name of the field in which Amazon Bedrock stores the raw text from your data. The text is split according to the chunking strategy you choose.
   * @maxLength `2048`
   * @pattern `^.*$`
   */
  TextField: string;
  /**
   * The name of the field in which Amazon Bedrock stores the vector embeddings for your data sources.
   * @maxLength `2048`
   * @pattern `^.*$`
   */
  VectorField: string;
};
/**
 * Type definition for `AWS::Bedrock::KnowledgeBase.OpenSearchServerlessConfiguration`.
 * Contains the storage configuration of the knowledge base in Amazon OpenSearch Service.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-knowledgebase-opensearchserverlessconfiguration.html}
 */
export type OpenSearchServerlessConfiguration = {
  /**
   * The ARN of the OpenSearch Service vector store.
   * @maxLength `2048`
   * @pattern `^arn:aws(|-cn|-us-gov|-iso):aoss:[a-z]{2}(-gov)?-[a-z]+-\d{1}:\d{12}:collection/[a-z0-9-]{3,32}$`
   */
  CollectionArn: string;
  /**
   * A mapping of Bedrock Knowledge Base fields to OpenSearch Serverless field names
   */
  FieldMapping: OpenSearchServerlessFieldMapping;
  /**
   * The name of the vector store.
   * @maxLength `2048`
   * @pattern `^.*$`
   */
  VectorIndexName: string;
};
/**
 * Type definition for `AWS::Bedrock::KnowledgeBase.OpenSearchServerlessFieldMapping`.
 * A mapping of Bedrock Knowledge Base fields to OpenSearch Serverless field names
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-knowledgebase-opensearchserverlessfieldmapping.html}
 */
export type OpenSearchServerlessFieldMapping = {
  /**
   * The name of the field in which Amazon Bedrock stores metadata about the vector store.
   * @maxLength `2048`
   * @pattern `^.*$`
   */
  MetadataField: string;
  /**
   * The name of the field in which Amazon Bedrock stores the raw text from your data. The text is split according to the chunking strategy you choose.
   * @maxLength `2048`
   * @pattern `^.*$`
   */
  TextField: string;
  /**
   * The name of the field in which Amazon Bedrock stores the vector embeddings for your data sources.
   * @maxLength `2048`
   * @pattern `^.*$`
   */
  VectorField: string;
};
/**
 * Type definition for `AWS::Bedrock::KnowledgeBase.PineconeConfiguration`.
 * Contains the storage configuration of the knowledge base in Pinecone.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-knowledgebase-pineconeconfiguration.html}
 */
export type PineconeConfiguration = {
  /**
   * The endpoint URL for your index management page.
   * @maxLength `2048`
   * @pattern `^.*$`
   */
  ConnectionString: string;
  /**
   * The ARN of the secret that you created in AWS Secrets Manager that is linked to your Pinecone API key.
   * @pattern `^arn:aws(|-cn|-us-gov):secretsmanager:[a-z0-9-]{1,20}:([0-9]{12}|):secret:[a-zA-Z0-9!/_+=.@-]{1,512}$`
   */
  CredentialsSecretArn: string;
  /**
   * Contains the names of the fields to which to map information about the vector store.
   */
  FieldMapping: PineconeFieldMapping;
  /**
   * The namespace to be used to write new data to your database.
   * @maxLength `2048`
   * @pattern `^.*$`
   */
  Namespace?: string;
};
/**
 * Type definition for `AWS::Bedrock::KnowledgeBase.PineconeFieldMapping`.
 * Contains the names of the fields to which to map information about the vector store.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-knowledgebase-pineconefieldmapping.html}
 */
export type PineconeFieldMapping = {
  /**
   * The name of the field in which Amazon Bedrock stores metadata about the vector store.
   * @maxLength `2048`
   * @pattern `^.*$`
   */
  MetadataField: string;
  /**
   * The name of the field in which Amazon Bedrock stores the raw text from your data. The text is split according to the chunking strategy you choose.
   * @maxLength `2048`
   * @pattern `^.*$`
   */
  TextField: string;
};
/**
 * Type definition for `AWS::Bedrock::KnowledgeBase.QueryEngineType`.
 * SQL query engine type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-knowledgebase-queryenginetype.html}
 */
export type QueryEngineType = "REDSHIFT";
/**
 * Type definition for `AWS::Bedrock::KnowledgeBase.QueryGenerationColumn`.
 * Redshift query generation column
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-knowledgebase-querygenerationcolumn.html}
 */
export type QueryGenerationColumn = {
  /**
   * Description for the attached entity
   * @minLength `1`
   * @maxLength `200`
   */
  Description?: string;
  /**
   * Include or Exclude status for an entity
   */
  Inclusion?: InclusionType;
  /**
   * Query generation column name
   * @minLength `1`
   * @maxLength `127`
   */
  Name?: string;
};
/**
 * Type definition for `AWS::Bedrock::KnowledgeBase.QueryGenerationConfiguration`.
 * Configurations for generating Redshift engine queries
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-knowledgebase-querygenerationconfiguration.html}
 */
export type QueryGenerationConfiguration = {
  /**
   * Max query execution timeout
   * @min `1`
   * @max `200`
   */
  ExecutionTimeoutSeconds?: number;
  /**
   * Context used to improve query generation
   */
  GenerationContext?: QueryGenerationContext;
};
/**
 * Type definition for `AWS::Bedrock::KnowledgeBase.QueryGenerationContext`.
 * Context used to improve query generation
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-knowledgebase-querygenerationcontext.html}
 */
export type QueryGenerationContext = {
  /**
   * List of example queries and results
   * @maxLength `10`
   */
  CuratedQueries?: CuratedQuery[];
  /**
   * List of tables used for Redshift query generation context
   * @maxLength `50`
   */
  Tables?: QueryGenerationTable[];
};
/**
 * Type definition for `AWS::Bedrock::KnowledgeBase.QueryGenerationTable`.
 * Tables used for Redshift query generation context
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-knowledgebase-querygenerationtable.html}
 */
export type QueryGenerationTable = {
  /**
   * List of Redshift query generation columns
   */
  Columns?: QueryGenerationColumn[];
  /**
   * Description for the attached entity
   * @minLength `1`
   * @maxLength `200`
   */
  Description?: string;
  /**
   * Include or Exclude status for an entity
   */
  Inclusion?: InclusionType;
  /**
   * Query generation table name. Must follow three-part notation
   * @pattern `^.*\..*\..*$`
   */
  Name: string;
};
/**
 * Type definition for `AWS::Bedrock::KnowledgeBase.RdsConfiguration`.
 * Contains details about the storage configuration of the knowledge base in Amazon RDS. For more information, see Create a vector index in Amazon RDS.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-knowledgebase-rdsconfiguration.html}
 */
export type RdsConfiguration = {
  /**
   * The ARN of the secret that you created in AWS Secrets Manager that is linked to your Amazon RDS database.
   * @pattern `^arn:aws(|-cn|-us-gov):secretsmanager:[a-z0-9-]{1,20}:([0-9]{12}|):secret:[a-zA-Z0-9!/_+=.@-]{1,512}$`
   */
  CredentialsSecretArn: string;
  /**
   * The name of your Amazon RDS database.
   * @maxLength `63`
   * @pattern `^[a-zA-Z0-9_\-]+$`
   */
  DatabaseName: string;
  /**
   * Contains the names of the fields to which to map information about the vector store.
   */
  FieldMapping: RdsFieldMapping;
  /**
   * The ARN of the vector store.
   * @pattern `^arn:aws(|-cn|-us-gov):rds:[a-zA-Z0-9-]*:[0-9]{12}:cluster:[a-zA-Z0-9-]{1,63}$`
   */
  ResourceArn: string;
  /**
   * The name of the table in the database.
   * @maxLength `63`
   * @pattern `^[a-zA-Z0-9_\.\-]+$`
   */
  TableName: string;
};
/**
 * Type definition for `AWS::Bedrock::KnowledgeBase.RdsFieldMapping`.
 * Contains the names of the fields to which to map information about the vector store.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-knowledgebase-rdsfieldmapping.html}
 */
export type RdsFieldMapping = {
  /**
   * The name of the field in which Amazon Bedrock stores custom metadata about the vector store.
   * @maxLength `63`
   * @pattern `^[a-zA-Z0-9_\-]+$`
   */
  CustomMetadataField?: string;
  /**
   * The name of the field in which Amazon Bedrock stores metadata about the vector store.
   * @maxLength `63`
   * @pattern `^[a-zA-Z0-9_\-]+$`
   */
  MetadataField: string;
  /**
   * The name of the field in which Amazon Bedrock stores the ID for each entry.
   * @maxLength `63`
   * @pattern `^[a-zA-Z0-9_\-]+$`
   */
  PrimaryKeyField: string;
  /**
   * The name of the field in which Amazon Bedrock stores the raw text from your data. The text is split according to the chunking strategy you choose.
   * @maxLength `63`
   * @pattern `^[a-zA-Z0-9_\-]+$`
   */
  TextField: string;
  /**
   * The name of the field in which Amazon Bedrock stores the vector embeddings for your data sources.
   * @maxLength `63`
   * @pattern `^[a-zA-Z0-9_\-]+$`
   */
  VectorField: string;
};
/**
 * Type definition for `AWS::Bedrock::KnowledgeBase.RedshiftConfiguration`.
 * Configurations for a Redshift knowledge base
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-knowledgebase-redshiftconfiguration.html}
 */
export type RedshiftConfiguration = {
  /**
   * Configurations for Redshift query engine
   */
  QueryEngineConfiguration: RedshiftQueryEngineConfiguration;
  /**
   * Configurations for generating Redshift engine queries
   */
  QueryGenerationConfiguration?: QueryGenerationConfiguration;
  /**
   * List of configurations for available Redshift query engine storage types
   * @minLength `1`
   * @maxLength `1`
   */
  StorageConfigurations: RedshiftQueryEngineStorageConfiguration[];
};
/**
 * Type definition for `AWS::Bedrock::KnowledgeBase.RedshiftProvisionedAuthConfiguration`.
 * Configurations for Redshift query engine provisioned auth setup
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-knowledgebase-redshiftprovisionedauthconfiguration.html}
 */
export type RedshiftProvisionedAuthConfiguration = {
  /**
   * Redshift database user
   */
  DatabaseUser?: string;
  /**
   * Provisioned Redshift auth type
   */
  Type: RedshiftProvisionedAuthType;
  /**
   * Arn of a SecretsManager Secret
   * @pattern `^arn:aws(|-cn|-us-gov):secretsmanager:[a-z0-9-]{1,20}:([0-9]{12}|):secret:[a-zA-Z0-9!/_+=.@-]{1,512}$`
   */
  UsernamePasswordSecretArn?: string;
};
/**
 * Type definition for `AWS::Bedrock::KnowledgeBase.RedshiftProvisionedAuthType`.
 * Provisioned Redshift auth type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-knowledgebase-redshiftprovisionedauthtype.html}
 */
export type RedshiftProvisionedAuthType =
  | "IAM"
  | "USERNAME_PASSWORD"
  | "USERNAME";
/**
 * Type definition for `AWS::Bedrock::KnowledgeBase.RedshiftProvisionedConfiguration`.
 * Configurations for provisioned Redshift query engine
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-knowledgebase-redshiftprovisionedconfiguration.html}
 */
export type RedshiftProvisionedConfiguration = {
  /**
   * Configurations for Redshift query engine provisioned auth setup
   */
  AuthConfiguration: RedshiftProvisionedAuthConfiguration;
  /**
   * Redshift cluster identifier
   * @minLength `1`
   * @maxLength `63`
   */
  ClusterIdentifier: string;
};
/**
 * Type definition for `AWS::Bedrock::KnowledgeBase.RedshiftQueryEngineAwsDataCatalogStorageConfiguration`.
 * Configurations for Redshift query engine AWS Data Catalog backed storage
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-knowledgebase-redshiftqueryengineawsdatacatalogstorageconfiguration.html}
 */
export type RedshiftQueryEngineAwsDataCatalogStorageConfiguration = {
  /**
   * List of table names in AWS Data Catalog. Must follow two part notation
   * @minLength `1`
   * @maxLength `1000`
   */
  TableNames: string[];
};
/**
 * Type definition for `AWS::Bedrock::KnowledgeBase.RedshiftQueryEngineConfiguration`.
 * Configurations for Redshift query engine
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-knowledgebase-redshiftqueryengineconfiguration.html}
 */
export type RedshiftQueryEngineConfiguration = {
  /**
   * Configurations for provisioned Redshift query engine
   */
  ProvisionedConfiguration?: RedshiftProvisionedConfiguration;
  /**
   * Configurations for serverless Redshift query engine
   */
  ServerlessConfiguration?: RedshiftServerlessConfiguration;
  /**
   * Redshift query engine type
   */
  Type: RedshiftQueryEngineType;
};
/**
 * Type definition for `AWS::Bedrock::KnowledgeBase.RedshiftQueryEngineRedshiftStorageConfiguration`.
 * Configurations for Redshift query engine Redshift backed storage
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-knowledgebase-redshiftqueryengineredshiftstorageconfiguration.html}
 */
export type RedshiftQueryEngineRedshiftStorageConfiguration = {
  /**
   * Redshift database name
   * @minLength `1`
   * @maxLength `200`
   */
  DatabaseName: string;
};
/**
 * Type definition for `AWS::Bedrock::KnowledgeBase.RedshiftQueryEngineStorageConfiguration`.
 * Configurations for available Redshift query engine storage types
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-knowledgebase-redshiftqueryenginestorageconfiguration.html}
 */
export type RedshiftQueryEngineStorageConfiguration = {
  /**
   * Configurations for Redshift query engine AWS Data Catalog backed storage
   */
  AwsDataCatalogConfiguration?: RedshiftQueryEngineAwsDataCatalogStorageConfiguration;
  /**
   * Configurations for Redshift query engine Redshift backed storage
   */
  RedshiftConfiguration?: RedshiftQueryEngineRedshiftStorageConfiguration;
  /**
   * Redshift query engine storage type
   */
  Type: RedshiftQueryEngineStorageType;
};
/**
 * Type definition for `AWS::Bedrock::KnowledgeBase.RedshiftQueryEngineStorageType`.
 * Redshift query engine storage type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-knowledgebase-redshiftqueryenginestoragetype.html}
 */
export type RedshiftQueryEngineStorageType = "REDSHIFT" | "AWS_DATA_CATALOG";
/**
 * Type definition for `AWS::Bedrock::KnowledgeBase.RedshiftQueryEngineType`.
 * Redshift query engine type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-knowledgebase-redshiftqueryenginetype.html}
 */
export type RedshiftQueryEngineType = "SERVERLESS" | "PROVISIONED";
/**
 * Type definition for `AWS::Bedrock::KnowledgeBase.RedshiftServerlessAuthConfiguration`.
 * Configurations for Redshift query engine serverless auth setup
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-knowledgebase-redshiftserverlessauthconfiguration.html}
 */
export type RedshiftServerlessAuthConfiguration = {
  /**
   * Serverless Redshift auth type
   */
  Type: RedshiftServerlessAuthType;
  /**
   * Arn of a SecretsManager Secret
   * @pattern `^arn:aws(|-cn|-us-gov):secretsmanager:[a-z0-9-]{1,20}:([0-9]{12}|):secret:[a-zA-Z0-9!/_+=.@-]{1,512}$`
   */
  UsernamePasswordSecretArn?: string;
};
/**
 * Type definition for `AWS::Bedrock::KnowledgeBase.RedshiftServerlessAuthType`.
 * Serverless Redshift auth type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-knowledgebase-redshiftserverlessauthtype.html}
 */
export type RedshiftServerlessAuthType = "IAM" | "USERNAME_PASSWORD";
/**
 * Type definition for `AWS::Bedrock::KnowledgeBase.RedshiftServerlessConfiguration`.
 * Configurations for serverless Redshift query engine
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-knowledgebase-redshiftserverlessconfiguration.html}
 */
export type RedshiftServerlessConfiguration = {
  /**
   * Configurations for Redshift query engine serverless auth setup
   */
  AuthConfiguration: RedshiftServerlessAuthConfiguration;
  /**
   * Workgroup arn
   * @pattern `^(arn:(aws(-[a-z]+)*):redshift-serverless:[a-z]{2}(-gov)?-[a-z]+-\d{1}:\d{12}:workgroup/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})$`
   */
  WorkgroupArn: string;
};
/**
 * Type definition for `AWS::Bedrock::KnowledgeBase.S3Location`.
 * An Amazon S3 location.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-knowledgebase-s3location.html}
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
 * Type definition for `AWS::Bedrock::KnowledgeBase.S3VectorsConfiguration`.
 * Contains the storage configuration of the knowledge base for S3 vectors.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-knowledgebase-s3vectorsconfiguration.html}
 */
export type S3VectorsConfiguration = {
  /**
   * The Amazon Resource Name (ARN) of the vector index used for the knowledge base. This ARN identifies the specific vector index resource within Amazon Bedrock.
   */
  IndexArn?: string;
  /**
   * The name of the vector index used for the knowledge base. This name identifies the vector index within the Amazon Bedrock service.
   * @minLength `3`
   * @maxLength `63`
   */
  IndexName?: string;
  /**
   * The Amazon Resource Name (ARN) of the S3 bucket where vector embeddings are stored. This bucket contains the vector data used by the knowledge base.
   */
  VectorBucketArn?: string;
};
/**
 * Type definition for `AWS::Bedrock::KnowledgeBase.SqlKnowledgeBaseConfiguration`.
 * Configurations for a SQL knowledge base
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-knowledgebase-sqlknowledgebaseconfiguration.html}
 */
export type SqlKnowledgeBaseConfiguration = {
  /**
   * Configurations for a Redshift knowledge base
   */
  RedshiftConfiguration?: RedshiftConfiguration;
  /**
   * SQL query engine type
   */
  Type: QueryEngineType;
};
/**
 * Type definition for `AWS::Bedrock::KnowledgeBase.StorageConfiguration`.
 * The vector store service in which the knowledge base is stored.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-knowledgebase-storageconfiguration.html}
 */
export type StorageConfiguration = {
  /**
   * Contains the storage configuration of the knowledge base in MongoDb Atlas Cloud.
   */
  MongoDbAtlasConfiguration?: MongoDbAtlasConfiguration;
  /**
   * Contains the configurations to use Neptune Analytics as Vector Store.
   */
  NeptuneAnalyticsConfiguration?: NeptuneAnalyticsConfiguration;
  /**
   * Contains the storage configuration of the knowledge base in Amazon OpenSearch Service.
   */
  OpensearchManagedClusterConfiguration?: OpenSearchManagedClusterConfiguration;
  /**
   * Contains the storage configuration of the knowledge base in Amazon OpenSearch Service.
   */
  OpensearchServerlessConfiguration?: OpenSearchServerlessConfiguration;
  /**
   * Contains the storage configuration of the knowledge base in Pinecone.
   */
  PineconeConfiguration?: PineconeConfiguration;
  /**
   * Contains details about the storage configuration of the knowledge base in Amazon RDS. For more information, see Create a vector index in Amazon RDS.
   */
  RdsConfiguration?: RdsConfiguration;
  /**
   * Contains the storage configuration of the knowledge base for S3 vectors.
   */
  S3VectorsConfiguration?: S3VectorsConfiguration;
  /**
   * The storage type of a knowledge base.
   */
  Type: KnowledgeBaseStorageType;
};
/**
 * Type definition for `AWS::Bedrock::KnowledgeBase.SupplementalDataStorageConfiguration`.
 * Configurations for supplemental data storage.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-knowledgebase-supplementaldatastorageconfiguration.html}
 */
export type SupplementalDataStorageConfiguration = {
  /**
   * List of supplemental data storage locations.
   * @minLength `1`
   * @maxLength `1`
   */
  SupplementalDataStorageLocations: SupplementalDataStorageLocation[];
};
/**
 * Type definition for `AWS::Bedrock::KnowledgeBase.SupplementalDataStorageLocation`.
 * Supplemental data storage location.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-knowledgebase-supplementaldatastoragelocation.html}
 */
export type SupplementalDataStorageLocation = {
  /**
   * An Amazon S3 location.
   */
  S3Location?: S3Location;
  /**
   * Supplemental data storage location type.
   */
  SupplementalDataStorageLocationType: SupplementalDataStorageLocationType;
};
/**
 * Type definition for `AWS::Bedrock::KnowledgeBase.SupplementalDataStorageLocationType`.
 * Supplemental data storage location type.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-knowledgebase-supplementaldatastoragelocationtype.html}
 */
export type SupplementalDataStorageLocationType = "S3";
/**
 * Type definition for `AWS::Bedrock::KnowledgeBase.TagsMap`.
 * A map of tag keys and values
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-knowledgebase-tagsmap.html}
 */
export type TagsMap = Record<string, string>;
/**
 * Type definition for `AWS::Bedrock::KnowledgeBase.VectorKnowledgeBaseConfiguration`.
 * Contains details about the model used to create vector embeddings for the knowledge base.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-knowledgebase-vectorknowledgebaseconfiguration.html}
 */
export type VectorKnowledgeBaseConfiguration = {
  /**
   * The ARN of the model used to create vector embeddings for the knowledge base.
   * @minLength `20`
   * @maxLength `2048`
   * @pattern `^(arn:aws(-[^:]+)?:[a-z0-9-]+:[a-z0-9-]{1,20}:[0-9]{0,12}:[a-zA-Z0-9-:/._+]+)$`
   */
  EmbeddingModelArn: string;
  /**
   * The embeddings model configuration details for the vector model used in Knowledge Base.
   */
  EmbeddingModelConfiguration?: EmbeddingModelConfiguration;
  /**
   * Configurations for supplemental data storage.
   */
  SupplementalDataStorageConfiguration?: SupplementalDataStorageConfiguration;
};
/**
 * Type definition for `AWS::Bedrock::KnowledgeBase.VideoConfiguration`.
 * Configure the video configuration for multi modal ingestion.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-knowledgebase-videoconfiguration.html}
 */
export type VideoConfiguration = {
  /**
   * Configure the video segmentation configuration for multi modal ingestion.
   */
  SegmentationConfiguration: VideoSegmentationConfiguration;
};
/**
 * Type definition for `AWS::Bedrock::KnowledgeBase.VideoSegmentationConfiguration`.
 * Configure the video segmentation configuration for multi modal ingestion.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-knowledgebase-videosegmentationconfiguration.html}
 */
export type VideoSegmentationConfiguration = {
  /**
   * Duration in seconds to segment the multi modal media
   * @min `1`
   * @max `30`
   */
  FixedLengthDuration: number;
};
/**
 * Definition of AWS::Bedrock::KnowledgeBase Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-knowledgebase.html}
 */
export class BedrockKnowledgeBase extends $Resource<
  "AWS::Bedrock::KnowledgeBase",
  BedrockKnowledgeBaseProperties,
  BedrockKnowledgeBaseAttributes
> {
  public static readonly Type = "AWS::Bedrock::KnowledgeBase";
  constructor(
    logicalId: string,
    properties: BedrockKnowledgeBaseProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, BedrockKnowledgeBase.Type, properties, options);
  }
}
