import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::CloudFront::ConnectionFunction
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-connectionfunction.html}
 */
export type CloudFrontConnectionFunctionProperties = {
  AutoPublish?: boolean;
  ConnectionFunctionCode: string;
  ConnectionFunctionConfig: ConnectionFunctionConfig;
  Name: string;
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
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-connectionfunction-connectionfunctionconfig.html}
 */
export type ConnectionFunctionConfig = {
  Comment: string;
  KeyValueStoreAssociations?: KeyValueStoreAssociation[];
  Runtime: "cloudfront-js-2.0";
};
/**
 * Type definition for `AWS::CloudFront::ConnectionFunction.KeyValueStoreAssociation`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-connectionfunction-keyvaluestoreassociation.html}
 */
export type KeyValueStoreAssociation = {
  KeyValueStoreARN: string;
};
/**
 * Type definition for `AWS::CloudFront::ConnectionFunction.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-connectionfunction-tag.html}
 */
export type Tag = {
  /**
   * @minLength `1`
   * @maxLength `128`
   * @pattern `^[a-zA-Z0-9 _.:/=+\-@]{1,128}\Z`
   */
  Key: string;
  /**
   * @minLength `0`
   * @maxLength `256`
   * @pattern `^[a-zA-Z0-9 _.:/=+\-@]{0,256}\Z`
   */
  Value: string;
};
/**
 * Resource Type definition for AWS::CloudFront::ConnectionFunction
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
