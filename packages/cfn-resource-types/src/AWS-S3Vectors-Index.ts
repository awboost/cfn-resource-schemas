import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::S3Vectors::Index
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3vectors-index.html}
 */
export type S3VectorsIndexProperties = {
  /**
   * The data type of the vectors to be inserted into the vector index.
   */
  DataType: DataType;
  /**
   * The dimensions of the vectors to be inserted into the vector index.
   * @min `1`
   * @max `4096`
   */
  Dimension: number;
  /**
   * The distance metric to be used for similarity search.
   */
  DistanceMetric: DistanceMetric;
  /**
   * The name of the vector index to create.
   * @minLength `3`
   * @maxLength `63`
   */
  IndexName?: string;
  /**
   * The metadata configuration for the vector index.
   */
  MetadataConfiguration?: MetadataConfiguration;
  /**
   * The Amazon Resource Name (ARN) of the vector bucket.
   */
  VectorBucketArn?: string;
  /**
   * The name of the vector bucket that contains the vector index.
   * @minLength `3`
   * @maxLength `63`
   */
  VectorBucketName?: string;
};
/**
 * Attribute type definition for `AWS::S3Vectors::Index`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3vectors-index.html#aws-resource-s3vectors-index-return-values}
 */
export type S3VectorsIndexAttributes = {
  /**
   * Date and time when the vector index was created.
   */
  CreationTime: string;
  /**
   * The Amazon Resource Name (ARN) of the index
   */
  IndexArn: string;
};
/**
 * Type definition for `AWS::S3Vectors::Index.DataType`.
 * The data type of the vectors to be inserted into the vector index.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3vectors-index-datatype.html}
 */
export type DataType = "float32";
/**
 * Type definition for `AWS::S3Vectors::Index.DistanceMetric`.
 * The distance metric to be used for similarity search.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3vectors-index-distancemetric.html}
 */
export type DistanceMetric = "cosine" | "euclidean";
/**
 * Type definition for `AWS::S3Vectors::Index.MetadataConfiguration`.
 * The metadata configuration for the vector index.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3vectors-index-metadataconfiguration.html}
 */
export type MetadataConfiguration = {
  /**
   * Non-filterable metadata keys allow you to enrich vectors with additional context during storage and retrieval. Unlike default metadata keys, these keys cannot be used as query filters. Non-filterable metadata keys can be retrieved but cannot be searched, queried, or filtered. You can access non-filterable metadata keys of your vectors after finding the vectors.
   * @minLength `1`
   * @maxLength `10`
   */
  NonFilterableMetadataKeys?: string[];
};
/**
 * Resource Type definition for AWS::S3Vectors::Index
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3vectors-index.html}
 */
export class S3VectorsIndex extends $Resource<
  "AWS::S3Vectors::Index",
  S3VectorsIndexProperties,
  S3VectorsIndexAttributes
> {
  public static readonly Type = "AWS::S3Vectors::Index";
  constructor(
    logicalId: string,
    properties: S3VectorsIndexProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, S3VectorsIndex.Type, properties, options);
  }
}
