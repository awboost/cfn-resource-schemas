import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::CloudFront::KeyValueStore`.
 * The key value store. Use this to separate data from function code, allowing you to update data without having to publish a new version of a function. The key value store holds keys and their corresponding values.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-keyvaluestore.html}
 */
export type CloudFrontKeyValueStoreProperties = {
  /**
   * A comment for the key value store.
   */
  Comment?: string;
  /**
   * The import source for the key value store.
   */
  ImportSource?: ImportSource;
  /**
   * The name of the key value store.
   */
  Name: string;
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::CloudFront::KeyValueStore`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-keyvaluestore.html#aws-resource-cloudfront-keyvaluestore-return-values}
 */
export type CloudFrontKeyValueStoreAttributes = {
  Arn: string;
  Id: string;
  Status: string;
};
/**
 * Type definition for `AWS::CloudFront::KeyValueStore.ImportSource`.
 * The import source for the key value store.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-keyvaluestore-importsource.html}
 */
export type ImportSource = {
  /**
   * The Amazon Resource Name (ARN) of the import source for the key value store.
   */
  SourceArn: string;
  /**
   * The source type of the import source for the key value store.
   */
  SourceType: string;
};
/**
 * Type definition for `AWS::CloudFront::KeyValueStore.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-keyvaluestore-tag.html}
 */
export type Tag = {
  /**
   * @minLength `1`
   * @maxLength `128`
   * @pattern `^([\p{L}\p{Z}\p{N}_.:/=+\-@]*)$`
   */
  Key: string;
  /**
   * @minLength `0`
   * @maxLength `256`
   * @pattern `^([\p{L}\p{Z}\p{N}_.:/=+\-@]*)$`
   */
  Value: string;
};
/**
 * Resource type definition for `AWS::CloudFront::KeyValueStore`.
 * The key value store. Use this to separate data from function code, allowing you to update data without having to publish a new version of a function. The key value store holds keys and their corresponding values.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-keyvaluestore.html}
 */
export class CloudFrontKeyValueStore extends $Resource<
  "AWS::CloudFront::KeyValueStore",
  CloudFrontKeyValueStoreProperties,
  CloudFrontKeyValueStoreAttributes
> {
  public static readonly Type = "AWS::CloudFront::KeyValueStore";
  constructor(
    logicalId: string,
    properties: CloudFrontKeyValueStoreProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, CloudFrontKeyValueStore.Type, properties, options);
  }
}
