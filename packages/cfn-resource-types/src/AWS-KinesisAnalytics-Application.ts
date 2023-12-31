import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::KinesisAnalytics::Application
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalytics-application.html}
 */
export type KinesisAnalyticsApplicationProperties = {
  ApplicationCode?: string;
  ApplicationDescription?: string;
  ApplicationName?: string;
  Inputs: Input[];
};
/**
 * Attribute type definition for `AWS::KinesisAnalytics::Application`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalytics-application.html#aws-resource-kinesisanalytics-application-return-values}
 */
export type KinesisAnalyticsApplicationAttributes = {
  Id: string;
};
/**
 * Type definition for `AWS::KinesisAnalytics::Application.CSVMappingParameters`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalytics-application-csvmappingparameters.html}
 */
export type CSVMappingParameters = {
  RecordColumnDelimiter: string;
  RecordRowDelimiter: string;
};
/**
 * Type definition for `AWS::KinesisAnalytics::Application.Input`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalytics-application-input.html}
 */
export type Input = {
  InputParallelism?: InputParallelism;
  InputProcessingConfiguration?: InputProcessingConfiguration;
  InputSchema: InputSchema;
  KinesisFirehoseInput?: KinesisFirehoseInput;
  KinesisStreamsInput?: KinesisStreamsInput;
  NamePrefix: string;
};
/**
 * Type definition for `AWS::KinesisAnalytics::Application.InputLambdaProcessor`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalytics-application-inputlambdaprocessor.html}
 */
export type InputLambdaProcessor = {
  ResourceARN: string;
  RoleARN: string;
};
/**
 * Type definition for `AWS::KinesisAnalytics::Application.InputParallelism`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalytics-application-inputparallelism.html}
 */
export type InputParallelism = {
  Count?: number;
};
/**
 * Type definition for `AWS::KinesisAnalytics::Application.InputProcessingConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalytics-application-inputprocessingconfiguration.html}
 */
export type InputProcessingConfiguration = {
  InputLambdaProcessor?: InputLambdaProcessor;
};
/**
 * Type definition for `AWS::KinesisAnalytics::Application.InputSchema`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalytics-application-inputschema.html}
 */
export type InputSchema = {
  RecordColumns: RecordColumn[];
  RecordEncoding?: string;
  RecordFormat: RecordFormat;
};
/**
 * Type definition for `AWS::KinesisAnalytics::Application.JSONMappingParameters`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalytics-application-jsonmappingparameters.html}
 */
export type JSONMappingParameters = {
  RecordRowPath: string;
};
/**
 * Type definition for `AWS::KinesisAnalytics::Application.KinesisFirehoseInput`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalytics-application-kinesisfirehoseinput.html}
 */
export type KinesisFirehoseInput = {
  ResourceARN: string;
  RoleARN: string;
};
/**
 * Type definition for `AWS::KinesisAnalytics::Application.KinesisStreamsInput`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalytics-application-kinesisstreamsinput.html}
 */
export type KinesisStreamsInput = {
  ResourceARN: string;
  RoleARN: string;
};
/**
 * Type definition for `AWS::KinesisAnalytics::Application.MappingParameters`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalytics-application-mappingparameters.html}
 */
export type MappingParameters = {
  CSVMappingParameters?: CSVMappingParameters;
  JSONMappingParameters?: JSONMappingParameters;
};
/**
 * Type definition for `AWS::KinesisAnalytics::Application.RecordColumn`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalytics-application-recordcolumn.html}
 */
export type RecordColumn = {
  Mapping?: string;
  Name: string;
  SqlType: string;
};
/**
 * Type definition for `AWS::KinesisAnalytics::Application.RecordFormat`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalytics-application-recordformat.html}
 */
export type RecordFormat = {
  MappingParameters?: MappingParameters;
  RecordFormatType: string;
};
/**
 * Resource Type definition for AWS::KinesisAnalytics::Application
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalytics-application.html}
 */
export class KinesisAnalyticsApplication extends $Resource<
  "AWS::KinesisAnalytics::Application",
  KinesisAnalyticsApplicationProperties,
  KinesisAnalyticsApplicationAttributes
> {
  public static readonly Type = "AWS::KinesisAnalytics::Application";
  constructor(
    logicalId: string,
    properties: KinesisAnalyticsApplicationProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, KinesisAnalyticsApplication.Type, properties, options);
  }
}
