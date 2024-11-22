import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::CloudFront::KeyGroup`.
 * A key group.
 A key group contains a list of public keys that you can use with [CloudFront signed URLs and signed cookies](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html).
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-keygroup.html}
 */
export type CloudFrontKeyGroupProperties = {
  /**
   * The key group configuration.
   */
  KeyGroupConfig: KeyGroupConfig;
};
/**
 * Attribute type definition for `AWS::CloudFront::KeyGroup`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-keygroup.html#aws-resource-cloudfront-keygroup-return-values}
 */
export type CloudFrontKeyGroupAttributes = {
  Id: string;
  LastModifiedTime: string;
};
/**
 * Type definition for `AWS::CloudFront::KeyGroup.KeyGroupConfig`.
 * A key group configuration.
 A key group contains a list of public keys that you can use with [CloudFront signed URLs and signed cookies](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html).
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-keygroup-keygroupconfig.html}
 */
export type KeyGroupConfig = {
  /**
   * A comment to describe the key group. The comment cannot be longer than 128 characters.
   */
  Comment?: string;
  /**
   * A list of the identifiers of the public keys in the key group.
   */
  Items: string[];
  /**
   * A name to identify the key group.
   */
  Name: string;
};
/**
 * Resource type definition for `AWS::CloudFront::KeyGroup`.
 * A key group.
 A key group contains a list of public keys that you can use with [CloudFront signed URLs and signed cookies](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html).
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-keygroup.html}
 */
export class CloudFrontKeyGroup extends $Resource<
  "AWS::CloudFront::KeyGroup",
  CloudFrontKeyGroupProperties,
  CloudFrontKeyGroupAttributes
> {
  public static readonly Type = "AWS::CloudFront::KeyGroup";
  constructor(
    logicalId: string,
    properties: CloudFrontKeyGroupProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, CloudFrontKeyGroup.Type, properties, options);
  }
}
