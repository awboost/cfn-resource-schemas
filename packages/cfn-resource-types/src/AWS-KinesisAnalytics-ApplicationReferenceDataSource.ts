import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::KinesisAnalytics::ApplicationReferenceDataSource
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalytics-applicationreferencedatasource.html}
 */
export type KinesisAnalyticsApplicationReferenceDataSourceProperties = {
  ApplicationName: string;
  ReferenceDataSource: ReferenceDataSource;
};
/**
 * Attribute type definition for `AWS::KinesisAnalytics::ApplicationReferenceDataSource`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalytics-applicationreferencedatasource.html#aws-resource-kinesisanalytics-applicationreferencedatasource-return-values}
 */
export type KinesisAnalyticsApplicationReferenceDataSourceAttributes = {
  Id: string;
};
/**
 * Type definition for `AWS::KinesisAnalytics::ApplicationReferenceDataSource.CSVMappingParameters`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalytics-applicationreferencedatasource-csvmappingparameters.html}
 */
export type CSVMappingParameters = {
  RecordColumnDelimiter: string;
  RecordRowDelimiter: string;
};
/**
 * Type definition for `AWS::KinesisAnalytics::ApplicationReferenceDataSource.JSONMappingParameters`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalytics-applicationreferencedatasource-jsonmappingparameters.html}
 */
export type JSONMappingParameters = {
  RecordRowPath: string;
};
/**
 * Type definition for `AWS::KinesisAnalytics::ApplicationReferenceDataSource.MappingParameters`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalytics-applicationreferencedatasource-mappingparameters.html}
 */
export type MappingParameters = {
  CSVMappingParameters?: CSVMappingParameters;
  JSONMappingParameters?: JSONMappingParameters;
};
/**
 * Type definition for `AWS::KinesisAnalytics::ApplicationReferenceDataSource.RecordColumn`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalytics-applicationreferencedatasource-recordcolumn.html}
 */
export type RecordColumn = {
  Mapping?: string;
  Name: string;
  SqlType: string;
};
/**
 * Type definition for `AWS::KinesisAnalytics::ApplicationReferenceDataSource.RecordFormat`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalytics-applicationreferencedatasource-recordformat.html}
 */
export type RecordFormat = {
  MappingParameters?: MappingParameters;
  RecordFormatType: string;
};
/**
 * Type definition for `AWS::KinesisAnalytics::ApplicationReferenceDataSource.ReferenceDataSource`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalytics-applicationreferencedatasource-referencedatasource.html}
 */
export type ReferenceDataSource = {
  ReferenceSchema: ReferenceSchema;
  S3ReferenceDataSource?: S3ReferenceDataSource;
  TableName?: string;
};
/**
 * Type definition for `AWS::KinesisAnalytics::ApplicationReferenceDataSource.ReferenceSchema`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalytics-applicationreferencedatasource-referenceschema.html}
 */
export type ReferenceSchema = {
  RecordColumns: RecordColumn[];
  RecordEncoding?: string;
  RecordFormat: RecordFormat;
};
/**
 * Type definition for `AWS::KinesisAnalytics::ApplicationReferenceDataSource.S3ReferenceDataSource`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalytics-applicationreferencedatasource-s3referencedatasource.html}
 */
export type S3ReferenceDataSource = {
  BucketARN: string;
  FileKey: string;
  ReferenceRoleARN: string;
};
/**
 * Resource Type definition for AWS::KinesisAnalytics::ApplicationReferenceDataSource
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalytics-applicationreferencedatasource.html}
 */
export class KinesisAnalyticsApplicationReferenceDataSource extends $Resource<
  "AWS::KinesisAnalytics::ApplicationReferenceDataSource",
  KinesisAnalyticsApplicationReferenceDataSourceProperties,
  KinesisAnalyticsApplicationReferenceDataSourceAttributes
> {
  public static readonly Type =
    "AWS::KinesisAnalytics::ApplicationReferenceDataSource";
  constructor(
    logicalId: string,
    properties: KinesisAnalyticsApplicationReferenceDataSourceProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      KinesisAnalyticsApplicationReferenceDataSource.Type,
      properties,
      options,
    );
  }
}
