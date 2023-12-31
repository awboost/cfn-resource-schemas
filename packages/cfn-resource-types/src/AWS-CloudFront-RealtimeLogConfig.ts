import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::CloudFront::RealtimeLogConfig
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-realtimelogconfig.html}
 */
export type CloudFrontRealtimeLogConfigProperties = {
  /**
   * @minLength `1`
   */
  EndPoints: EndPoint[];
  /**
   * @minLength `1`
   */
  Fields: string[];
  Name: string;
  /**
   * @min `1`
   * @max `100`
   */
  SamplingRate: number;
};
/**
 * Attribute type definition for `AWS::CloudFront::RealtimeLogConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-realtimelogconfig.html#aws-resource-cloudfront-realtimelogconfig-return-values}
 */
export type CloudFrontRealtimeLogConfigAttributes = {
  Arn: string;
};
/**
 * Type definition for `AWS::CloudFront::RealtimeLogConfig.EndPoint`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-realtimelogconfig-endpoint.html}
 */
export type EndPoint = {
  KinesisStreamConfig: KinesisStreamConfig;
  StreamType: string;
};
/**
 * Type definition for `AWS::CloudFront::RealtimeLogConfig.KinesisStreamConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-realtimelogconfig-kinesisstreamconfig.html}
 */
export type KinesisStreamConfig = {
  RoleArn: string;
  StreamArn: string;
};
/**
 * Resource Type definition for AWS::CloudFront::RealtimeLogConfig
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-realtimelogconfig.html}
 */
export class CloudFrontRealtimeLogConfig extends $Resource<
  "AWS::CloudFront::RealtimeLogConfig",
  CloudFrontRealtimeLogConfigProperties,
  CloudFrontRealtimeLogConfigAttributes
> {
  public static readonly Type = "AWS::CloudFront::RealtimeLogConfig";
  constructor(
    logicalId: string,
    properties: CloudFrontRealtimeLogConfigProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, CloudFrontRealtimeLogConfig.Type, properties, options);
  }
}
