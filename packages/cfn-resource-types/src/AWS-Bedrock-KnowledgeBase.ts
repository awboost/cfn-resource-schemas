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
  StorageConfiguration: StorageConfiguration;
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
 * Type definition for `AWS::Bedrock::KnowledgeBase.KnowledgeBaseConfiguration`.
 * Contains details about the embeddings model used for the knowledge base.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-knowledgebase-knowledgebaseconfiguration.html}
 */
export type KnowledgeBaseConfiguration = {
  /**
   * The type of a knowledge base.
   */
  Type: KnowledgeBaseType;
  /**
   * Contains details about the model used to create vector embeddings for the knowledge base.
   */
  VectorKnowledgeBaseConfiguration: VectorKnowledgeBaseConfiguration;
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
  | "RDS";
/**
 * Type definition for `AWS::Bedrock::KnowledgeBase.KnowledgeBaseType`.
 * The type of a knowledge base.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-knowledgebase-knowledgebasetype.html}
 */
export type KnowledgeBaseType = "VECTOR";
/**
 * Type definition for `AWS::Bedrock::KnowledgeBase.OpenSearchServerlessConfiguration`.
 * Contains the storage configuration of the knowledge base in Amazon OpenSearch Service.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-knowledgebase-opensearchserverlessconfiguration.html}
 */
export type OpenSearchServerlessConfiguration = {
  /**
   * The ARN of the OpenSearch Service vector store.
   * @maxLength `2048`
   * @pattern `^arn:aws:aoss:[a-z]{2}(-gov)?-[a-z]+-\d{1}:\d{12}:collection/[a-z0-9-]{3,32}$`
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
 * Type definition for `AWS::Bedrock::KnowledgeBase.StorageConfiguration`.
 * The vector store service in which the knowledge base is stored.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-knowledgebase-storageconfiguration.html}
 */
export type StorageConfiguration = {
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
   * The storage type of a knowledge base.
   */
  Type: KnowledgeBaseStorageType;
};
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
   * @pattern `^(arn:aws(-[^:]+)?:bedrock:[a-z0-9-]{1,20}:(([0-9]{12}:custom-model/[a-z0-9-]{1,63}[.]{1}[a-z0-9-]{1,63}/[a-z0-9]{12})|(:foundation-model/[a-z0-9-]{1,63}[.]{1}[a-z0-9-]{1,63}([.:]?[a-z0-9-]{1,63}))|([0-9]{12}:provisioned-model/[a-z0-9]{12})))|([a-z0-9-]{1,63}[.]{1}[a-z0-9-]{1,63}([.:]?[a-z0-9-]{1,63}))|(([0-9a-zA-Z][_-]?)+)$`
   */
  EmbeddingModelArn: string;
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
