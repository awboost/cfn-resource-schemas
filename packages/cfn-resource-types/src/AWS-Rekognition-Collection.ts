import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * The AWS::Rekognition::Collection type creates an Amazon Rekognition Collection. A collection is a logical grouping of information about detected faces which can later be referenced for searches on the group
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rekognition-collection.html}
 */
export type RekognitionCollectionProperties = {
  /**
   * The name of the collection
   * @maxLength `255`
   * @pattern `\A[a-zA-Z0-9_\.\-]+$`
   */
  CollectionId: string;
  /**
   * An array of key-value pairs to apply to this resource.
   * @minLength `0`
   * @maxLength `200`
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::Rekognition::Collection`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rekognition-collection.html#aws-resource-rekognition-collection-return-values}
 */
export type RekognitionCollectionAttributes = {
  /**
   * @maxLength `2048`
   */
  Arn: string;
};
/**
 * Type definition for `AWS::Rekognition::Collection.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rekognition-collection-tag.html}
 */
export type Tag = {
  /**
   * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @maxLength `128`
   * @pattern `\A(?!aws:)[a-zA-Z0-9+\-=\._\:\/@]+$`
   */
  Key: string;
  /**
   * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @maxLength `256`
   * @pattern `\A[a-zA-Z0-9+\-=\._\:\/@]+$`
   */
  Value: string;
};
/**
 * The AWS::Rekognition::Collection type creates an Amazon Rekognition Collection. A collection is a logical grouping of information about detected faces which can later be referenced for searches on the group
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rekognition-collection.html}
 */
export class RekognitionCollection extends $Resource<
  "AWS::Rekognition::Collection",
  RekognitionCollectionProperties,
  RekognitionCollectionAttributes
> {
  public static readonly Type = "AWS::Rekognition::Collection";
  constructor(
    logicalId: string,
    properties: RekognitionCollectionProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, RekognitionCollection.Type, properties, options);
  }
}
