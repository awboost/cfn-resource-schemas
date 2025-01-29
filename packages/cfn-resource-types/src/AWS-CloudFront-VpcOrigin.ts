import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::CloudFront::VpcOrigin
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-vpcorigin.html}
 */
export type CloudFrontVpcOriginProperties = {
  Tags?: Tag[];
  VpcOriginEndpointConfig: VpcOriginEndpointConfig;
};
/**
 * Attribute type definition for `AWS::CloudFront::VpcOrigin`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-vpcorigin.html#aws-resource-cloudfront-vpcorigin-return-values}
 */
export type CloudFrontVpcOriginAttributes = {
  Arn: string;
  CreatedTime: string;
  Id: string;
  LastModifiedTime: string;
  Status: string;
};
/**
 * Type definition for `AWS::CloudFront::VpcOrigin.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-vpcorigin-tag.html}
 */
export type Tag = {
  Key: string;
  Value: string;
};
/**
 * Type definition for `AWS::CloudFront::VpcOrigin.VpcOriginEndpointConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-vpcorigin-vpcoriginendpointconfig.html}
 */
export type VpcOriginEndpointConfig = {
  Arn: string;
  HTTPPort?: number;
  HTTPSPort?: number;
  Name: string;
  OriginProtocolPolicy?: string;
  OriginSSLProtocols?: string[];
};
/**
 * Resource Type definition for AWS::CloudFront::VpcOrigin
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-vpcorigin.html}
 */
export class CloudFrontVpcOrigin extends $Resource<
  "AWS::CloudFront::VpcOrigin",
  CloudFrontVpcOriginProperties,
  CloudFrontVpcOriginAttributes
> {
  public static readonly Type = "AWS::CloudFront::VpcOrigin";
  constructor(
    logicalId: string,
    properties: CloudFrontVpcOriginProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, CloudFrontVpcOrigin.Type, properties, options);
  }
}
