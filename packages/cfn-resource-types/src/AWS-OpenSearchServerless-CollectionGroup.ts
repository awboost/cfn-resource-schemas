import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::OpenSearchServerless::CollectionGroup
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opensearchserverless-collectiongroup.html}
 */
export type OpenSearchServerlessCollectionGroupProperties = {
  CapacityLimits?: CapacityLimits;
  /**
   * The description of the collection group.
   * @maxLength `1000`
   */
  Description?: string;
  /**
   * The name of the collection group.
   * @minLength `3`
   * @maxLength `32`
   * @pattern `^[a-z][a-z0-9-]{2,31}$`
   */
  Name: string;
  /**
   * Indicates whether standby replicas are used for the collection group.
   */
  StandbyReplicas: "ENABLED" | "DISABLED";
  /**
   * An array of key-value pairs to apply to this resource.
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::OpenSearchServerless::CollectionGroup`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opensearchserverless-collectiongroup.html#aws-resource-opensearchserverless-collectiongroup-return-values}
 */
export type OpenSearchServerlessCollectionGroupAttributes = {
  /**
   * The Amazon Resource Name (ARN) of the collection group.
   */
  Arn: string;
  /**
   * The unique identifier of the collection group.
   * @minLength `3`
   * @maxLength `40`
   */
  Id: string;
};
/**
 * Type definition for `AWS::OpenSearchServerless::CollectionGroup.CapacityLimits`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opensearchserverless-collectiongroup-capacitylimits.html}
 */
export type CapacityLimits = {
  /**
   * The maximum indexing capacity for collections in the group.
   */
  MaxIndexingCapacityInOcu?: number;
  /**
   * The maximum search capacity for collections in the group.
   */
  MaxSearchCapacityInOcu?: number;
  /**
   * The minimum indexing capacity for collections in the group.
   */
  MinIndexingCapacityInOcu?: number;
  /**
   * The minimum search capacity for collections in the group.
   */
  MinSearchCapacityInOcu?: number;
};
/**
 * Type definition for `AWS::OpenSearchServerless::CollectionGroup.Tag`.
 * A map of key-value pairs associated with the collection group.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opensearchserverless-collectiongroup-tag.html}
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
 * Resource Type definition for AWS::OpenSearchServerless::CollectionGroup
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opensearchserverless-collectiongroup.html}
 */
export class OpenSearchServerlessCollectionGroup extends $Resource<
  "AWS::OpenSearchServerless::CollectionGroup",
  OpenSearchServerlessCollectionGroupProperties,
  OpenSearchServerlessCollectionGroupAttributes
> {
  public static readonly Type = "AWS::OpenSearchServerless::CollectionGroup";
  constructor(
    logicalId: string,
    properties: OpenSearchServerlessCollectionGroupProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      OpenSearchServerlessCollectionGroup.Type,
      properties,
      options,
    );
  }
}
