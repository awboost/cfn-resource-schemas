import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::CloudFront::ConnectionGroup`.
 * The connection group for your distribution tenants. When you first create a distribution tenant and you don't specify a connection group, CloudFront will automatically create a default connection group for you. When you create a new distribution tenant and don't specify a connection group, the default one will be associated with your distribution tenant.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-connectiongroup.html}
 */
export type CloudFrontConnectionGroupProperties = {
  /**
   * The ID of the Anycast static IP list.
   */
  AnycastIpListId?: string;
  /**
   * Whether the connection group is enabled.
   */
  Enabled?: boolean;
  /**
   * IPv6 is enabled for the connection group.
   */
  Ipv6Enabled?: boolean;
  /**
   * The name of the connection group.
   */
  Name: string;
  /**
   * A complex type that contains zero or more ``Tag`` elements.
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::CloudFront::ConnectionGroup`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-connectiongroup.html#aws-resource-cloudfront-connectiongroup-return-values}
 */
export type CloudFrontConnectionGroupAttributes = {
  Arn: string;
  CreatedTime: string;
  ETag: string;
  Id: string;
  IsDefault: boolean;
  LastModifiedTime: string;
  RoutingEndpoint: string;
  Status: string;
};
/**
 * Type definition for `AWS::CloudFront::ConnectionGroup.Tag`.
 * A complex type that contains ``Tag`` key and ``Tag`` value.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-connectiongroup-tag.html}
 */
export type Tag = {
  /**
     * A string that contains ``Tag`` key.
     The string length should be between 1 and 128 characters. Valid characters include ``a-z``, ``A-Z``, ``0-9``, space, and the special characters ``_ - . : / = + @``.
     */
  Key: string;
  /**
     * A string that contains an optional ``Tag`` value.
     The string length should be between 0 and 256 characters. Valid characters include ``a-z``, ``A-Z``, ``0-9``, space, and the special characters ``_ - . : / = + @``.
     */
  Value: string;
};
/**
 * Resource type definition for `AWS::CloudFront::ConnectionGroup`.
 * The connection group for your distribution tenants. When you first create a distribution tenant and you don't specify a connection group, CloudFront will automatically create a default connection group for you. When you create a new distribution tenant and don't specify a connection group, the default one will be associated with your distribution tenant.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-connectiongroup.html}
 */
export class CloudFrontConnectionGroup extends $Resource<
  "AWS::CloudFront::ConnectionGroup",
  CloudFrontConnectionGroupProperties,
  CloudFrontConnectionGroupAttributes
> {
  public static readonly Type = "AWS::CloudFront::ConnectionGroup";
  constructor(
    logicalId: string,
    properties: CloudFrontConnectionGroupProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, CloudFrontConnectionGroup.Type, properties, options);
  }
}
