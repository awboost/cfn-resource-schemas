import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::CloudFront::PublicKey`.
 * A public key that you can use with [signed URLs and signed cookies](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html), or with [field-level encryption](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/field-level-encryption.html).
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-publickey.html}
 */
export type CloudFrontPublicKeyProperties = {
  /**
   * Configuration information about a public key that you can use with [signed URLs and signed cookies](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html), or with [field-level encryption](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/field-level-encryption.html).
   */
  PublicKeyConfig: PublicKeyConfig;
};
/**
 * Attribute type definition for `AWS::CloudFront::PublicKey`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-publickey.html#aws-resource-cloudfront-publickey-return-values}
 */
export type CloudFrontPublicKeyAttributes = {
  CreatedTime: string;
  Id: string;
};
/**
 * Type definition for `AWS::CloudFront::PublicKey.PublicKeyConfig`.
 * Configuration information about a public key that you can use with [signed URLs and signed cookies](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html), or with [field-level encryption](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/field-level-encryption.html).
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-publickey-publickeyconfig.html}
 */
export type PublicKeyConfig = {
  /**
   * A string included in the request to help make sure that the request can't be replayed.
   */
  CallerReference: string;
  /**
   * A comment to describe the public key. The comment cannot be longer than 128 characters.
   */
  Comment?: string;
  /**
   * The public key that you can use with [signed URLs and signed cookies](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html), or with [field-level encryption](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/field-level-encryption.html).
   */
  EncodedKey: string;
  /**
   * A name to help identify the public key.
   */
  Name: string;
};
/**
 * Resource type definition for `AWS::CloudFront::PublicKey`.
 * A public key that you can use with [signed URLs and signed cookies](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html), or with [field-level encryption](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/field-level-encryption.html).
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-publickey.html}
 */
export class CloudFrontPublicKey extends $Resource<
  "AWS::CloudFront::PublicKey",
  CloudFrontPublicKeyProperties,
  CloudFrontPublicKeyAttributes
> {
  public static readonly Type = "AWS::CloudFront::PublicKey";
  constructor(
    logicalId: string,
    properties: CloudFrontPublicKeyProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, CloudFrontPublicKey.Type, properties, options);
  }
}
