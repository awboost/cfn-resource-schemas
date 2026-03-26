import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::CloudFront::ConnectionFunction`.
 * A connection function.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-connectionfunction.html}
 */
export type CloudFrontConnectionFunctionProperties = {
  /**
   * A flag that determines whether to automatically publish the function to the ``LIVE`` stage when it’s created. To automatically publish to the ``LIVE`` stage, set this property to ``true``.
   */
  AutoPublish?: boolean;
  /**
   * The code for the connection function.
   */
  ConnectionFunctionCode: string;
  /**
   * Contains configuration information about a CloudFront function.
   */
  ConnectionFunctionConfig: ConnectionFunctionConfig;
  /**
   * The connection function name.
   */
  Name: string;
  /**
   * A complex type that contains zero or more ``Tag`` elements.
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::CloudFront::ConnectionFunction`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-connectionfunction.html#aws-resource-cloudfront-connectionfunction-return-values}
 */
export type CloudFrontConnectionFunctionAttributes = {
  ConnectionFunctionArn: string;
  CreatedTime: string;
  ETag: string;
  Id: string;
  LastModifiedTime: string;
  Stage: "DEVELOPMENT" | "LIVE";
  Status:
    | "UNPUBLISHED"
    | "DEPLOYED"
    | "UNASSOCIATED"
    | "PUBLISHING"
    | "IN_PROGRESS";
};
/**
 * Type definition for `AWS::CloudFront::ConnectionFunction.ConnectionFunctionConfig`.
 * Contains configuration information about a CloudFront function.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-connectionfunction-connectionfunctionconfig.html}
 */
export type ConnectionFunctionConfig = {
  /**
   * A comment to describe the function.
   */
  Comment: string;
  /**
   * The configuration for the key value store associations.
   */
  KeyValueStoreAssociations?: KeyValueStoreAssociation[];
  /**
   * The function's runtime environment version.
   */
  Runtime: "cloudfront-js-2.0";
};
/**
 * Type definition for `AWS::CloudFront::ConnectionFunction.KeyValueStoreAssociation`.
 * The key value store association.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-connectionfunction-keyvaluestoreassociation.html}
 */
export type KeyValueStoreAssociation = {
  /**
   * The Amazon Resource Name (ARN) of the key value store association.
   */
  KeyValueStoreARN: string;
};
/**
 * Type definition for `AWS::CloudFront::ConnectionFunction.Tag`.
 * A complex type that contains ``Tag`` key and ``Tag`` value.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-connectionfunction-tag.html}
 */
export type Tag = {
  /**
     * A string that contains ``Tag`` key.
     The string length should be between 1 and 128 characters. Valid characters include ``a-z``, ``A-Z``, ``0-9``, space, and the special characters ``_ - . : / = + @``.
     * @minLength `1`
     * @maxLength `128`
     * @pattern `^([\p{L}\p{Z}\p{N}_.:/=+\-@]*)$`
     */
  Key: string;
  /**
     * A string that contains an optional ``Tag`` value.
     The string length should be between 0 and 256 characters. Valid characters include ``a-z``, ``A-Z``, ``0-9``, space, and the special characters ``_ - . : / = + @``.
     * @minLength `0`
     * @maxLength `256`
     * @pattern `^([\p{L}\p{Z}\p{N}_.:/=+\-@]*)$`
     */
  Value: string;
};
/**
 * Resource type definition for `AWS::CloudFront::ConnectionFunction`.
 * A connection function.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-connectionfunction.html}
 */
export class CloudFrontConnectionFunction extends $Resource<
  "AWS::CloudFront::ConnectionFunction",
  CloudFrontConnectionFunctionProperties,
  CloudFrontConnectionFunctionAttributes
> {
  public static readonly Type = "AWS::CloudFront::ConnectionFunction";
  constructor(
    logicalId: string,
    properties: CloudFrontConnectionFunctionProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, CloudFrontConnectionFunction.Type, properties, options);
  }
}
