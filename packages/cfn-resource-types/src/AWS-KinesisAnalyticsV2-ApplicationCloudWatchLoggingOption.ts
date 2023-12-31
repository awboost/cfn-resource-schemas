import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource Type definition for AWS::KinesisAnalyticsV2::ApplicationCloudWatchLoggingOption
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalyticsv2-applicationcloudwatchloggingoption.html}
 */
export type KinesisAnalyticsV2ApplicationCloudWatchLoggingOptionProperties = {
  ApplicationName: string;
  CloudWatchLoggingOption: CloudWatchLoggingOption;
};
/**
 * Attribute type definition for `AWS::KinesisAnalyticsV2::ApplicationCloudWatchLoggingOption`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalyticsv2-applicationcloudwatchloggingoption.html#aws-resource-kinesisanalyticsv2-applicationcloudwatchloggingoption-return-values}
 */
export type KinesisAnalyticsV2ApplicationCloudWatchLoggingOptionAttributes = {
  Id: string;
};
/**
 * Type definition for `AWS::KinesisAnalyticsV2::ApplicationCloudWatchLoggingOption.CloudWatchLoggingOption`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-applicationcloudwatchloggingoption-cloudwatchloggingoption.html}
 */
export type CloudWatchLoggingOption = {
  LogStreamARN: string;
};
/**
 * Resource Type definition for AWS::KinesisAnalyticsV2::ApplicationCloudWatchLoggingOption
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalyticsv2-applicationcloudwatchloggingoption.html}
 */
export class KinesisAnalyticsV2ApplicationCloudWatchLoggingOption extends $Resource<
  "AWS::KinesisAnalyticsV2::ApplicationCloudWatchLoggingOption",
  KinesisAnalyticsV2ApplicationCloudWatchLoggingOptionProperties,
  KinesisAnalyticsV2ApplicationCloudWatchLoggingOptionAttributes
> {
  public static readonly Type =
    "AWS::KinesisAnalyticsV2::ApplicationCloudWatchLoggingOption";
  public static readonly AttributeNames = ["Id" as const];
  constructor(
    logicalId: string,
    properties: KinesisAnalyticsV2ApplicationCloudWatchLoggingOptionProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      KinesisAnalyticsV2ApplicationCloudWatchLoggingOption.Type,
      properties,
      KinesisAnalyticsV2ApplicationCloudWatchLoggingOption.AttributeNames,
      options,
    );
  }
}
