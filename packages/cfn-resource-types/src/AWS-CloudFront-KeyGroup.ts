import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
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
  public static readonly AttributeNames = [
    "Id" as const,
    "LastModifiedTime" as const,
  ];
  constructor(
    logicalId: string,
    properties: CloudFrontKeyGroupProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      CloudFrontKeyGroup.Type,
      properties,
      CloudFrontKeyGroup.AttributeNames,
      options,
    );
  }
}
