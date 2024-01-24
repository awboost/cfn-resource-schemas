import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::OpenSearchServerless::Collection`.
 * Amazon OpenSearchServerless collection resource
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opensearchserverless-collection.html}
 */
export type OpenSearchServerlessCollectionProperties = {
  /**
   * The description of the collection
   * @maxLength `1000`
   */
  Description?: string;
  /**
     * The name of the collection.
    
    The name must meet the following criteria:
    Unique to your account and AWS Region
    Starts with a lowercase letter
    Contains only lowercase letters a-z, the numbers 0-9 and the hyphen (-)
    Contains between 3 and 32 characters
    
     * @minLength `3`
     * @maxLength `32`
     * @pattern `^[a-z][a-z0-9-]{2,31}$`
     */
  Name: string;
  /**
   * The possible standby replicas for the collection
   */
  StandbyReplicas?: StandbyReplicas;
  /**
   * List of tags to be added to the resource
   * @minLength `0`
   * @maxLength `50`
   */
  Tags?: Tag[];
  /**
   * The possible types for the collection
   */
  Type?: CollectionType;
};
/**
 * Attribute type definition for `AWS::OpenSearchServerless::Collection`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opensearchserverless-collection.html#aws-resource-opensearchserverless-collection-return-values}
 */
export type OpenSearchServerlessCollectionAttributes = {
  /**
   * The Amazon Resource Name (ARN) of the collection.
   */
  Arn: string;
  /**
   * The endpoint for the collection.
   */
  CollectionEndpoint: string;
  /**
   * The OpenSearch Dashboards endpoint for the collection.
   */
  DashboardEndpoint: string;
  /**
   * The identifier of the collection
   * @minLength `3`
   * @maxLength `40`
   */
  Id: string;
};
/**
 * Type definition for `AWS::OpenSearchServerless::Collection.CollectionType`.
 * The possible types for the collection
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opensearchserverless-collection-collectiontype.html}
 */
export type CollectionType = "SEARCH" | "TIMESERIES" | "VECTORSEARCH";
/**
 * Type definition for `AWS::OpenSearchServerless::Collection.StandbyReplicas`.
 * The possible standby replicas for the collection
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opensearchserverless-collection-standbyreplicas.html}
 */
export type StandbyReplicas = "ENABLED" | "DISABLED";
/**
 * Type definition for `AWS::OpenSearchServerless::Collection.Tag`.
 * A key-value pair metadata associated with resource
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opensearchserverless-collection-tag.html}
 */
export type Tag = {
  /**
   * The key in the key-value pair
   * @minLength `1`
   * @maxLength `128`
   */
  Key: string;
  /**
   * The value in the key-value pair
   * @minLength `0`
   * @maxLength `256`
   */
  Value: string;
};
/**
 * Resource type definition for `AWS::OpenSearchServerless::Collection`.
 * Amazon OpenSearchServerless collection resource
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opensearchserverless-collection.html}
 */
export class OpenSearchServerlessCollection extends $Resource<
  "AWS::OpenSearchServerless::Collection",
  OpenSearchServerlessCollectionProperties,
  OpenSearchServerlessCollectionAttributes
> {
  public static readonly Type = "AWS::OpenSearchServerless::Collection";
  constructor(
    logicalId: string,
    properties: OpenSearchServerlessCollectionProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, OpenSearchServerlessCollection.Type, properties, options);
  }
}
