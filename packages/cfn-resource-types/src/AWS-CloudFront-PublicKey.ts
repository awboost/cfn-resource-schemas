import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
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
  public static readonly AttributeNames = [
    "CreatedTime" as const,
    "Id" as const,
  ];
  constructor(
    logicalId: string,
    properties: CloudFrontPublicKeyProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      CloudFrontPublicKey.Type,
      properties,
      CloudFrontPublicKey.AttributeNames,
      options,
    );
  }
}
