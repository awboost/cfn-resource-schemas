import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource schema for AWS::OpenSearchServerless::CollectionIndex
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opensearchserverless-collectionindex.html}
 */
export type OpenSearchServerlessCollectionIndexProperties = {
  /**
   * The identifier of the collection
   * @minLength `3`
   * @maxLength `40`
   * @pattern `^[a-z0-9]{3,40}$`
   */
  Id: string;
  /**
   * The name of the collection index
   * @minLength `1`
   * @maxLength `255`
   * @pattern `^(?![_-])[a-z][a-z0-9_-]*$`
   */
  IndexName: string;
  /**
   * The Mappings for the collection index
   * @minLength `1`
   * @maxLength `2480`
   * @pattern `[\u0009\u000A\u000D\u0020-\u007E\u00A1-\u00FF]+`
   */
  IndexSchema?: string;
};
/**
 * Resource schema for AWS::OpenSearchServerless::CollectionIndex
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opensearchserverless-collectionindex.html}
 */
export class OpenSearchServerlessCollectionIndex extends $Resource<
  "AWS::OpenSearchServerless::CollectionIndex",
  OpenSearchServerlessCollectionIndexProperties,
  Record<string, never>
> {
  public static readonly Type = "AWS::OpenSearchServerless::CollectionIndex";
  constructor(
    logicalId: string,
    properties: OpenSearchServerlessCollectionIndexProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      OpenSearchServerlessCollectionIndex.Type,
      properties,
      options,
    );
  }
}
