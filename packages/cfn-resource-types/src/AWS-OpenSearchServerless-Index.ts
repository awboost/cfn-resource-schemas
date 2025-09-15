import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::OpenSearchServerless::Index`.
 * An OpenSearch Serverless index resource
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opensearchserverless-index.html}
 */
export type OpenSearchServerlessIndexProperties = {
  /**
   * The endpoint for the collection.
   */
  CollectionEndpoint: string;
  /**
   * The name of the OpenSearch Serverless index.
   * @pattern `^(?![_-])[a-z][a-z0-9_-]*$`
   */
  IndexName: string;
  /**
   * Index Mappings
   */
  Mappings?: {
    /**
     * Defines the fields within the mapping, including their types and configurations
     */
    Properties?: Record<string, PropertyMapping>;
  };
  /**
   * Index settings
   */
  Settings?: IndexSettings;
};
/**
 * Attribute type definition for `AWS::OpenSearchServerless::Index`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opensearchserverless-index.html#aws-resource-opensearchserverless-index-return-values}
 */
export type OpenSearchServerlessIndexAttributes = {
  /**
   * The unique identifier for the index.
   */
  Uuid: string;
};
/**
 * Type definition for `AWS::OpenSearchServerless::Index.IndexSettings`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opensearchserverless-index-indexsettings.html}
 */
export type IndexSettings = {
  Index?: {
    /**
     * Enable/disable k-nearest neighbor search capability
     */
    Knn?: boolean;
    /**
     * Size of the dynamic list for the nearest neighbors
     */
    KnnAlgoParamEfSearch?: number;
    /**
     * How often to perform refresh operation (e.g. '1s', '5s')
     */
    RefreshInterval?: string;
  };
};
/**
 * Type definition for `AWS::OpenSearchServerless::Index.PropertyMapping`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opensearchserverless-index-propertymapping.html}
 */
export type PropertyMapping = {
  /**
   * Dimension size for vector fields, defines the number of dimensions in the vector
   */
  Dimension?: number;
  /**
   * Whether a field should be indexed
   */
  Index?: boolean;
  /**
   * Configuration for k-NN search method
   */
  Method?: {
    /**
     * The k-NN search engine to use
     */
    Engine?: "nmslib" | "faiss" | "lucene";
    /**
     * The algorithm name for k-NN search
     */
    Name: "hnsw" | "ivf";
    /**
     * Additional parameters for the k-NN algorithm
     */
    Parameters?: {
      /**
       * The size of the dynamic list used during k-NN graph creation
       * @min `1`
       */
      EfConstruction?: number;
      /**
       * Number of neighbors to consider during k-NN search
       * @min `2`
       * @max `100`
       */
      M?: number;
    };
    /**
     * The distance function used for k-NN search
     */
    SpaceType?:
      | "l2"
      | "l1"
      | "linf"
      | "cosinesimil"
      | "innerproduct"
      | "hamming";
  };
  /**
   * Nested fields within an object or nested field type
   */
  Properties?: Record<string, PropertyMapping>;
  /**
   * The field data type. Must be a valid OpenSearch field type.
   */
  Type: "text" | "knn_vector";
  /**
   * Default value for the field when not specified in a document
   */
  Value?: string;
};
/**
 * Resource type definition for `AWS::OpenSearchServerless::Index`.
 * An OpenSearch Serverless index resource
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opensearchserverless-index.html}
 */
export class OpenSearchServerlessIndex extends $Resource<
  "AWS::OpenSearchServerless::Index",
  OpenSearchServerlessIndexProperties,
  OpenSearchServerlessIndexAttributes
> {
  public static readonly Type = "AWS::OpenSearchServerless::Index";
  constructor(
    logicalId: string,
    properties: OpenSearchServerlessIndexProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, OpenSearchServerlessIndex.Type, properties, options);
  }
}
