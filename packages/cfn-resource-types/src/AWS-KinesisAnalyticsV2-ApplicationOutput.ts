import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::KinesisAnalyticsV2::ApplicationOutput
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalyticsv2-applicationoutput.html}
 */
export type KinesisAnalyticsV2ApplicationOutputProperties = {
  ApplicationName: string;
  Output: Output;
};
/**
 * Attribute type definition for `AWS::KinesisAnalyticsV2::ApplicationOutput`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalyticsv2-applicationoutput.html#aws-resource-kinesisanalyticsv2-applicationoutput-return-values}
 */
export type KinesisAnalyticsV2ApplicationOutputAttributes = {
  Id: string;
};
/**
 * Type definition for `AWS::KinesisAnalyticsV2::ApplicationOutput.DestinationSchema`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-applicationoutput-destinationschema.html}
 */
export type DestinationSchema = {
  RecordFormatType?: string;
};
/**
 * Type definition for `AWS::KinesisAnalyticsV2::ApplicationOutput.KinesisFirehoseOutput`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-applicationoutput-kinesisfirehoseoutput.html}
 */
export type KinesisFirehoseOutput = {
  ResourceARN: string;
};
/**
 * Type definition for `AWS::KinesisAnalyticsV2::ApplicationOutput.KinesisStreamsOutput`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-applicationoutput-kinesisstreamsoutput.html}
 */
export type KinesisStreamsOutput = {
  ResourceARN: string;
};
/**
 * Type definition for `AWS::KinesisAnalyticsV2::ApplicationOutput.LambdaOutput`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-applicationoutput-lambdaoutput.html}
 */
export type LambdaOutput = {
  ResourceARN: string;
};
/**
 * Type definition for `AWS::KinesisAnalyticsV2::ApplicationOutput.Output`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-applicationoutput-output.html}
 */
export type Output = {
  DestinationSchema: DestinationSchema;
  KinesisFirehoseOutput?: KinesisFirehoseOutput;
  KinesisStreamsOutput?: KinesisStreamsOutput;
  LambdaOutput?: LambdaOutput;
  Name?: string;
};
/**
 * Resource Type definition for AWS::KinesisAnalyticsV2::ApplicationOutput
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalyticsv2-applicationoutput.html}
 */
export class KinesisAnalyticsV2ApplicationOutput extends $Resource<
  "AWS::KinesisAnalyticsV2::ApplicationOutput",
  KinesisAnalyticsV2ApplicationOutputProperties,
  KinesisAnalyticsV2ApplicationOutputAttributes
> {
  public static readonly Type = "AWS::KinesisAnalyticsV2::ApplicationOutput";
  constructor(
    logicalId: string,
    properties: KinesisAnalyticsV2ApplicationOutputProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      KinesisAnalyticsV2ApplicationOutput.Type,
      properties,
      options,
    );
  }
}
