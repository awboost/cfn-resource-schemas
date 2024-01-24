import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::CloudFront::KeyGroup
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-keygroup.html}
 */
export type CloudFrontKeyGroupProperties = {
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
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-keygroup-keygroupconfig.html}
 */
export type KeyGroupConfig = {
  Comment?: string;
  Items: string[];
  Name: string;
};
/**
 * Resource Type definition for AWS::CloudFront::KeyGroup
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
