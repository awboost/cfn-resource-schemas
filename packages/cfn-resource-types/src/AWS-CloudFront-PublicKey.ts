import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::CloudFront::PublicKey
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-publickey.html}
 */
export type CloudFrontPublicKeyProperties = {
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
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-publickey-publickeyconfig.html}
 */
export type PublicKeyConfig = {
  CallerReference: string;
  Comment?: string;
  EncodedKey: string;
  Name: string;
};
/**
 * Resource Type definition for AWS::CloudFront::PublicKey
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
