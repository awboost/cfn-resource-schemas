import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::CloudFront::RealtimeLogConfig`.
 * A real-time log configuration.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-realtimelogconfig.html}
 */
export type CloudFrontRealtimeLogConfigProperties = {
  /**
   * Contains information about the Amazon Kinesis data stream where you are sending real-time log data for this real-time log configuration.
   * @minLength `1`
   */
  EndPoints: EndPoint[];
  /**
     * A list of fields that are included in each real-time log record. In an API response, the fields are provided in the same order in which they are sent to the Amazon Kinesis data stream.
     For more information about fields, see [Real-time log configuration fields](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/real-time-logs.html#understand-real-time-log-config-fields) in the *Amazon CloudFront Developer Guide*.
     * @minLength `1`
     */
  Fields: string[];
  /**
   * The unique name of this real-time log configuration.
   */
  Name: string;
  /**
   * The sampling rate for this real-time log configuration. The sampling rate determines the percentage of viewer requests that are represented in the real-time log data. The sampling rate is an integer between 1 and 100, inclusive.
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
 * Contains information about the Amazon Kinesis data stream where you are sending real-time log data for this real-time log configuration.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-realtimelogconfig-endpoint.html}
 */
export type EndPoint = {
  /**
   * Contains information about the Amazon Kinesis data stream where you are sending real-time log data in a real-time log configuration.
   */
  KinesisStreamConfig: KinesisStreamConfig;
  /**
   * The type of data stream where you are sending real-time log data. The only valid value is ``Kinesis``.
   */
  StreamType: string;
};
/**
 * Type definition for `AWS::CloudFront::RealtimeLogConfig.KinesisStreamConfig`.
 * Contains information about the Amazon Kinesis data stream where you are sending real-time log data.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-realtimelogconfig-kinesisstreamconfig.html}
 */
export type KinesisStreamConfig = {
  /**
     * The Amazon Resource Name (ARN) of an IAMlong (IAM) role that CloudFront can use to send real-time log data to your Kinesis data stream.
     For more information the IAM role, see [Real-time log configuration IAM role](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/real-time-logs.html#understand-real-time-log-config-iam-role) in the *Amazon CloudFront Developer Guide*.
     */
  RoleArn: string;
  /**
   * The Amazon Resource Name (ARN) of the Kinesis data stream where you are sending real-time log data.
   */
  StreamArn: string;
};
/**
 * Resource type definition for `AWS::CloudFront::RealtimeLogConfig`.
 * A real-time log configuration.
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
