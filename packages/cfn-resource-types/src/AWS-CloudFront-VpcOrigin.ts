import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::CloudFront::VpcOrigin`.
 * An Amazon CloudFront VPC origin.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-vpcorigin.html}
 */
export type CloudFrontVpcOriginProperties = {
  /**
   * A complex type that contains zero or more ``Tag`` elements.
   */
  Tags?: Tag[];
  /**
   * The VPC origin endpoint configuration.
   */
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
 * A complex type that contains ``Tag`` key and ``Tag`` value.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-vpcorigin-tag.html}
 */
export type Tag = {
  /**
     * A string that contains ``Tag`` key.
     The string length should be between 1 and 128 characters. Valid characters include ``a-z``, ``A-Z``, ``0-9``, space, and the special characters ``_ - . : / = + @``.
     */
  Key: string;
  /**
     * A string that contains an optional ``Tag`` value.
     The string length should be between 0 and 256 characters. Valid characters include ``a-z``, ``A-Z``, ``0-9``, space, and the special characters ``_ - . : / = + @``.
     */
  Value: string;
};
/**
 * Type definition for `AWS::CloudFront::VpcOrigin.VpcOriginEndpointConfig`.
 * An Amazon CloudFront VPC origin endpoint configuration.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-vpcorigin-vpcoriginendpointconfig.html}
 */
export type VpcOriginEndpointConfig = {
  /**
   * The ARN of the CloudFront VPC origin endpoint configuration.
   */
  Arn: string;
  /**
   * The HTTP port for the CloudFront VPC origin endpoint configuration. The default value is ``80``.
   */
  HTTPPort?: number;
  /**
   * The HTTPS port of the CloudFront VPC origin endpoint configuration. The default value is ``443``.
   */
  HTTPSPort?: number;
  /**
   * The name of the CloudFront VPC origin endpoint configuration.
   */
  Name: string;
  /**
   * The origin protocol policy for the CloudFront VPC origin endpoint configuration.
   */
  OriginProtocolPolicy?: string;
  OriginSSLProtocols?: string[];
};
/**
 * Resource type definition for `AWS::CloudFront::VpcOrigin`.
 * An Amazon CloudFront VPC origin.
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
