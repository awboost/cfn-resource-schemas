import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::KinesisAnalytics::ApplicationOutput
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalytics-applicationoutput.html}
 */
export type KinesisAnalyticsApplicationOutputProperties = {
  ApplicationName: string;
  Output: Output;
};
/**
 * Attribute type definition for `AWS::KinesisAnalytics::ApplicationOutput`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalytics-applicationoutput.html#aws-resource-kinesisanalytics-applicationoutput-return-values}
 */
export type KinesisAnalyticsApplicationOutputAttributes = {
  Id: string;
};
/**
 * Type definition for `AWS::KinesisAnalytics::ApplicationOutput.DestinationSchema`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalytics-applicationoutput-destinationschema.html}
 */
export type DestinationSchema = {
  RecordFormatType?: string;
};
/**
 * Type definition for `AWS::KinesisAnalytics::ApplicationOutput.KinesisFirehoseOutput`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalytics-applicationoutput-kinesisfirehoseoutput.html}
 */
export type KinesisFirehoseOutput = {
  ResourceARN: string;
  RoleARN: string;
};
/**
 * Type definition for `AWS::KinesisAnalytics::ApplicationOutput.KinesisStreamsOutput`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalytics-applicationoutput-kinesisstreamsoutput.html}
 */
export type KinesisStreamsOutput = {
  ResourceARN: string;
  RoleARN: string;
};
/**
 * Type definition for `AWS::KinesisAnalytics::ApplicationOutput.LambdaOutput`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalytics-applicationoutput-lambdaoutput.html}
 */
export type LambdaOutput = {
  ResourceARN: string;
  RoleARN: string;
};
/**
 * Type definition for `AWS::KinesisAnalytics::ApplicationOutput.Output`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalytics-applicationoutput-output.html}
 */
export type Output = {
  DestinationSchema: DestinationSchema;
  KinesisFirehoseOutput?: KinesisFirehoseOutput;
  KinesisStreamsOutput?: KinesisStreamsOutput;
  LambdaOutput?: LambdaOutput;
  Name?: string;
};
/**
 * Resource Type definition for AWS::KinesisAnalytics::ApplicationOutput
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalytics-applicationoutput.html}
 */
export class KinesisAnalyticsApplicationOutput extends $Resource<
  "AWS::KinesisAnalytics::ApplicationOutput",
  KinesisAnalyticsApplicationOutputProperties,
  KinesisAnalyticsApplicationOutputAttributes
> {
  public static readonly Type = "AWS::KinesisAnalytics::ApplicationOutput";
  constructor(
    logicalId: string,
    properties: KinesisAnalyticsApplicationOutputProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      KinesisAnalyticsApplicationOutput.Type,
      properties,
      options,
    );
  }
}
