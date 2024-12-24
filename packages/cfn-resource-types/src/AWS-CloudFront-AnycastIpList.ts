import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Definition of AWS::CloudFront::AnycastIpList Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-anycastiplist.html}
 */
export type CloudFrontAnycastIpListProperties = {
  IpCount: number;
  /**
   * @minLength `1`
   * @maxLength `64`
   * @pattern `^[a-zA-Z0-9-_]{1,64}$`
   */
  Name: string;
  Tags?: Tags;
};
/**
 * Attribute type definition for `AWS::CloudFront::AnycastIpList`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-anycastiplist.html#aws-resource-cloudfront-anycastiplist-return-values}
 */
export type CloudFrontAnycastIpListAttributes = {
  AnycastIpList: {
    AnycastIps: string[];
    Arn: string;
    Id: string;
    IpCount: number;
    LastModifiedTime: string;
    /**
     * @minLength `1`
     * @maxLength `64`
     * @pattern `^[a-zA-Z0-9-_]{1,64}$`
     */
    Name: string;
    Status: string;
  };
  ETag: string;
  Id: string;
};
/**
 * Type definition for `AWS::CloudFront::AnycastIpList.AnycastIpList`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-anycastiplist-anycastiplist.html}
 */
export type AnycastIpList = {
  AnycastIps: string[];
  Arn: string;
  Id: string;
  IpCount: number;
  LastModifiedTime: string;
  /**
   * @minLength `1`
   * @maxLength `64`
   * @pattern `^[a-zA-Z0-9-_]{1,64}$`
   */
  Name: string;
  Status: string;
};
/**
 * Type definition for `AWS::CloudFront::AnycastIpList.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-anycastiplist-tag.html}
 */
export type Tag = {
  /**
   * @minLength `1`
   * @maxLength `128`
   * @pattern `^([\p{L}\p{Z}\p{N}_.:/=+\-@]*)$`
   */
  Key: string;
  /**
   * @minLength `0`
   * @maxLength `256`
   * @pattern `^([\p{L}\p{Z}\p{N}_.:/=+\-@]*)$`
   */
  Value?: string;
};
/**
 * Type definition for `AWS::CloudFront::AnycastIpList.Tags`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-anycastiplist-tags.html}
 */
export type Tags = {
  Items?: Tag[];
};
/**
 * Definition of AWS::CloudFront::AnycastIpList Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-anycastiplist.html}
 */
export class CloudFrontAnycastIpList extends $Resource<
  "AWS::CloudFront::AnycastIpList",
  CloudFrontAnycastIpListProperties,
  CloudFrontAnycastIpListAttributes
> {
  public static readonly Type = "AWS::CloudFront::AnycastIpList";
  constructor(
    logicalId: string,
    properties: CloudFrontAnycastIpListProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, CloudFrontAnycastIpList.Type, properties, options);
  }
}
