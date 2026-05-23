import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Definition of AWS::BedrockAgentCore::Dataset Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrockagentcore-dataset.html}
 */
export type BedrockAgentCoreDatasetProperties = {
  /**
   * Human-readable name for the dataset. Unique within the account (case-insensitive). Immutable after creation.
   * @pattern `^[a-zA-Z][a-zA-Z0-9_]{0,47}$`
   */
  DatasetName: string;
  /**
   * A description of the dataset.
   * @maxLength `200`
   */
  Description?: string;
  /**
   * Optional AWS KMS key ARN for SSE-KMS on service S3 writes.
   * @minLength `1`
   * @maxLength `2048`
   * @pattern `^arn:aws(|-cn|-us-gov):kms:[a-zA-Z0-9-]*:[0-9]{12}:key/[a-zA-Z0-9-]{36}$`
   */
  KmsKeyArn?: string;
  /**
   * Versioned schema type governing the structure of examples. Immutable after creation.
   */
  SchemaType:
    | "AGENTCORE_EVALUATION_PREDEFINED_V1"
    | "AGENTCORE_EVALUATION_SIMULATED_V1";
  /**
   * Source of initial examples. Provide either inline examples or an S3 URI pointing to a JSONL file.
   */
  Source?: DataSourceType;
  /**
   * A list of tags to assign to the dataset.
   * @maxLength `50`
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::BedrockAgentCore::Dataset`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrockagentcore-dataset.html#aws-resource-bedrockagentcore-dataset-return-values}
 */
export type BedrockAgentCoreDatasetAttributes = {
  /**
   * The timestamp when the dataset was created.
   */
  CreatedAt: string;
  /**
   * The Amazon Resource Name (ARN) of the dataset.
   * @pattern `^arn:aws(-[a-z]+)*:bedrock-agentcore:[a-z0-9-]+:[0-9]{12}:dataset/[a-zA-Z0-9_-]{1,110}$`
   */
  DatasetArn: string;
  /**
   * The unique identifier of the dataset.
   * @pattern `^[a-zA-Z0-9_-]{1,110}$`
   */
  DatasetId: string;
  /**
   * The number of examples in the dataset DRAFT.
   */
  ExampleCount: number;
  /**
   * The current status of the dataset.
   */
  Status:
    | "CREATING"
    | "UPDATING"
    | "DELETING"
    | "ACTIVE"
    | "CREATE_FAILED"
    | "UPDATE_FAILED"
    | "DELETE_FAILED";
  /**
   * The timestamp when the dataset was last updated.
   */
  UpdatedAt: string;
};
/**
 * Type definition for `AWS::BedrockAgentCore::Dataset.DataSourceType`.
 * Source of initial examples. Provide either inline examples or an S3 URI pointing to a JSONL file.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrockagentcore-dataset-datasourcetype.html}
 */
export type DataSourceType = {
  /**
   * Inline examples provided directly in the request body.
   */
  InlineExamples?: InlineExamplesSource;
  /**
   * S3 location of a JSONL file containing dataset examples.
   */
  S3Source?: S3Source;
};
/**
 * Type definition for `AWS::BedrockAgentCore::Dataset.InlineExamplesSource`.
 * Inline examples provided directly in the request body.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrockagentcore-dataset-inlineexamplessource.html}
 */
export type InlineExamplesSource = {
  /**
   * Examples to add. Each example is a free-form JSON document validated against the declared schemaType.
   * @minLength `1`
   * @maxLength `1000`
   */
  Examples: Record<string, any>[];
};
/**
 * Type definition for `AWS::BedrockAgentCore::Dataset.S3Source`.
 * S3 location of a JSONL file containing dataset examples.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrockagentcore-dataset-s3source.html}
 */
export type S3Source = {
  /**
   * S3 URI of the JSONL file (e.g. s3://my-bucket/path/to/examples.jsonl).
   * @pattern `^s3://[a-z0-9][a-z0-9.\-]{1,61}[a-z0-9]/.{1,1024}$`
   */
  S3Uri: string;
};
/**
 * Type definition for `AWS::BedrockAgentCore::Dataset.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrockagentcore-dataset-tag.html}
 */
export type Tag = {
  /**
   * @minLength `1`
   * @maxLength `128`
   */
  Key: string;
  /**
   * @minLength `0`
   * @maxLength `256`
   */
  Value: string;
};
/**
 * Definition of AWS::BedrockAgentCore::Dataset Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrockagentcore-dataset.html}
 */
export class BedrockAgentCoreDataset extends $Resource<
  "AWS::BedrockAgentCore::Dataset",
  BedrockAgentCoreDatasetProperties,
  BedrockAgentCoreDatasetAttributes
> {
  public static readonly Type = "AWS::BedrockAgentCore::Dataset";
  constructor(
    logicalId: string,
    properties: BedrockAgentCoreDatasetProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, BedrockAgentCoreDataset.Type, properties, options);
  }
}
