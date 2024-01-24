import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::CloudFront::KeyValueStore
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-keyvaluestore.html}
 */
export type CloudFrontKeyValueStoreProperties = {
  Comment?: string;
  ImportSource?: ImportSource;
  Name: string;
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
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-keyvaluestore-importsource.html}
 */
export type ImportSource = {
  SourceArn: string;
  SourceType: string;
};
/**
 * Resource Type definition for AWS::CloudFront::KeyValueStore
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
