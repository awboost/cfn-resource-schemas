import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource Type definition for AWS::KinesisAnalyticsV2::ApplicationReferenceDataSource
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalyticsv2-applicationreferencedatasource.html}
 */
export type KinesisAnalyticsV2ApplicationReferenceDataSourceProperties = {
  ApplicationName: string;
  ReferenceDataSource: ReferenceDataSource;
};
/**
 * Attribute type definition for `AWS::KinesisAnalyticsV2::ApplicationReferenceDataSource`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalyticsv2-applicationreferencedatasource.html#aws-resource-kinesisanalyticsv2-applicationreferencedatasource-return-values}
 */
export type KinesisAnalyticsV2ApplicationReferenceDataSourceAttributes = {
  Id: string;
};
/**
 * Type definition for `AWS::KinesisAnalyticsV2::ApplicationReferenceDataSource.CSVMappingParameters`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-applicationreferencedatasource-csvmappingparameters.html}
 */
export type CSVMappingParameters = {
  RecordColumnDelimiter: string;
  RecordRowDelimiter: string;
};
/**
 * Type definition for `AWS::KinesisAnalyticsV2::ApplicationReferenceDataSource.JSONMappingParameters`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-applicationreferencedatasource-jsonmappingparameters.html}
 */
export type JSONMappingParameters = {
  RecordRowPath: string;
};
/**
 * Type definition for `AWS::KinesisAnalyticsV2::ApplicationReferenceDataSource.MappingParameters`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-applicationreferencedatasource-mappingparameters.html}
 */
export type MappingParameters = {
  CSVMappingParameters?: CSVMappingParameters;
  JSONMappingParameters?: JSONMappingParameters;
};
/**
 * Type definition for `AWS::KinesisAnalyticsV2::ApplicationReferenceDataSource.RecordColumn`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-applicationreferencedatasource-recordcolumn.html}
 */
export type RecordColumn = {
  Mapping?: string;
  Name: string;
  SqlType: string;
};
/**
 * Type definition for `AWS::KinesisAnalyticsV2::ApplicationReferenceDataSource.RecordFormat`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-applicationreferencedatasource-recordformat.html}
 */
export type RecordFormat = {
  MappingParameters?: MappingParameters;
  RecordFormatType: string;
};
/**
 * Type definition for `AWS::KinesisAnalyticsV2::ApplicationReferenceDataSource.ReferenceDataSource`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-applicationreferencedatasource-referencedatasource.html}
 */
export type ReferenceDataSource = {
  ReferenceSchema: ReferenceSchema;
  S3ReferenceDataSource?: S3ReferenceDataSource;
  TableName?: string;
};
/**
 * Type definition for `AWS::KinesisAnalyticsV2::ApplicationReferenceDataSource.ReferenceSchema`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-applicationreferencedatasource-referenceschema.html}
 */
export type ReferenceSchema = {
  RecordColumns: RecordColumn[];
  RecordEncoding?: string;
  RecordFormat: RecordFormat;
};
/**
 * Type definition for `AWS::KinesisAnalyticsV2::ApplicationReferenceDataSource.S3ReferenceDataSource`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-applicationreferencedatasource-s3referencedatasource.html}
 */
export type S3ReferenceDataSource = {
  BucketARN: string;
  FileKey: string;
};
/**
 * Resource Type definition for AWS::KinesisAnalyticsV2::ApplicationReferenceDataSource
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalyticsv2-applicationreferencedatasource.html}
 */
export class KinesisAnalyticsV2ApplicationReferenceDataSource extends $Resource<
  "AWS::KinesisAnalyticsV2::ApplicationReferenceDataSource",
  KinesisAnalyticsV2ApplicationReferenceDataSourceProperties,
  KinesisAnalyticsV2ApplicationReferenceDataSourceAttributes
> {
  public static readonly Type =
    "AWS::KinesisAnalyticsV2::ApplicationReferenceDataSource";
  public static readonly AttributeNames = ["Id" as const];
  constructor(
    logicalId: string,
    properties: KinesisAnalyticsV2ApplicationReferenceDataSourceProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      KinesisAnalyticsV2ApplicationReferenceDataSource.Type,
      properties,
      KinesisAnalyticsV2ApplicationReferenceDataSource.AttributeNames,
      options,
    );
  }
}
