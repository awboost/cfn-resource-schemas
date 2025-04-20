import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::CloudFront::ConnectionGroup
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-connectiongroup.html}
 */
export type CloudFrontConnectionGroupProperties = {
  AnycastIpListId?: string;
  Enabled?: boolean;
  Ipv6Enabled?: boolean;
  Name: string;
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
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-connectiongroup-tag.html}
 */
export type Tag = {
  Key: string;
  Value: string;
};
/**
 * Resource Type definition for AWS::CloudFront::ConnectionGroup
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
