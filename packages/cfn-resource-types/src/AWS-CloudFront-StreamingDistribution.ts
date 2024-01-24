import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::CloudFront::StreamingDistribution
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-streamingdistribution.html}
 */
export type CloudFrontStreamingDistributionProperties = {
  StreamingDistributionConfig: StreamingDistributionConfig;
  Tags: Tag[];
};
/**
 * Attribute type definition for `AWS::CloudFront::StreamingDistribution`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-streamingdistribution.html#aws-resource-cloudfront-streamingdistribution-return-values}
 */
export type CloudFrontStreamingDistributionAttributes = {
  DomainName: string;
  Id: string;
};
/**
 * Type definition for `AWS::CloudFront::StreamingDistribution.Logging`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-streamingdistribution-logging.html}
 */
export type Logging = {
  Bucket: string;
  Enabled: boolean;
  Prefix: string;
};
/**
 * Type definition for `AWS::CloudFront::StreamingDistribution.S3Origin`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-streamingdistribution-s3origin.html}
 */
export type S3Origin = {
  DomainName: string;
  OriginAccessIdentity: string;
};
/**
 * Type definition for `AWS::CloudFront::StreamingDistribution.StreamingDistributionConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-streamingdistribution-streamingdistributionconfig.html}
 */
export type StreamingDistributionConfig = {
  Aliases?: string[];
  Comment: string;
  Enabled: boolean;
  Logging?: Logging;
  PriceClass?: string;
  S3Origin: S3Origin;
  TrustedSigners: TrustedSigners;
};
/**
 * Type definition for `AWS::CloudFront::StreamingDistribution.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-streamingdistribution-tag.html}
 */
export type Tag = {
  Key: string;
  Value: string;
};
/**
 * Type definition for `AWS::CloudFront::StreamingDistribution.TrustedSigners`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-streamingdistribution-trustedsigners.html}
 */
export type TrustedSigners = {
  AwsAccountNumbers?: string[];
  Enabled: boolean;
};
/**
 * Resource Type definition for AWS::CloudFront::StreamingDistribution
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-streamingdistribution.html}
 */
export class CloudFrontStreamingDistribution extends $Resource<
  "AWS::CloudFront::StreamingDistribution",
  CloudFrontStreamingDistributionProperties,
  CloudFrontStreamingDistributionAttributes
> {
  public static readonly Type = "AWS::CloudFront::StreamingDistribution";
  constructor(
    logicalId: string,
    properties: CloudFrontStreamingDistributionProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, CloudFrontStreamingDistribution.Type, properties, options);
  }
}
