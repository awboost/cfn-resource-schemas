import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * The AWS::Timestream::ScheduledQuery resource creates a Timestream Scheduled Query.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-timestream-scheduledquery.html}
 */
export type TimestreamScheduledQueryProperties = {
  /**
   * Using a ClientToken makes the call to CreateScheduledQuery idempotent, in other words, making the same request repeatedly will produce the same result. Making multiple identical CreateScheduledQuery requests has the same effect as making a single request. If CreateScheduledQuery is called without a ClientToken, the Query SDK generates a ClientToken on your behalf. After 8 hours, any request with the same ClientToken is treated as a new request.
   * @minLength `32`
   * @maxLength `128`
   */
  ClientToken?: string;
  /**
   * Configuration for error reporting. Error reports will be generated when a problem is encountered when writing the query results.
   */
  ErrorReportConfiguration: ErrorReportConfiguration;
  /**
   * The Amazon KMS key used to encrypt the scheduled query resource, at-rest. If the Amazon KMS key is not specified, the scheduled query resource will be encrypted with a Timestream owned Amazon KMS key. To specify a KMS key, use the key ID, key ARN, alias name, or alias ARN. When using an alias name, prefix the name with alias/. If ErrorReportConfiguration uses SSE_KMS as encryption type, the same KmsKeyId is used to encrypt the error report at rest.
   * @minLength `1`
   * @maxLength `2048`
   */
  KmsKeyId?: string;
  /**
   * Notification configuration for the scheduled query. A notification is sent by Timestream when a query run finishes, when the state is updated or when you delete it.
   */
  NotificationConfiguration: NotificationConfiguration;
  /**
   * The query string to run. Parameter names can be specified in the query string @ character followed by an identifier. The named Parameter @scheduled_runtime is reserved and can be used in the query to get the time at which the query is scheduled to run. The timestamp calculated according to the ScheduleConfiguration parameter, will be the value of @scheduled_runtime paramater for each query run. For example, consider an instance of a scheduled query executing on 2021-12-01 00:00:00. For this instance, the @scheduled_runtime parameter is initialized to the timestamp 2021-12-01 00:00:00 when invoking the query.
   * @minLength `1`
   * @maxLength `262144`
   */
  QueryString: string;
  /**
   * Configuration for when the scheduled query is executed.
   */
  ScheduleConfiguration: ScheduleConfiguration;
  /**
   * The ARN for the IAM role that Timestream will assume when running the scheduled query.
   * @minLength `1`
   * @maxLength `2048`
   */
  ScheduledQueryExecutionRoleArn: string;
  /**
   * The name of the scheduled query. Scheduled query names must be unique within each Region.
   * @minLength `1`
   * @maxLength `64`
   * @pattern `[a-zA-Z0-9_.-]+`
   */
  ScheduledQueryName?: string;
  /**
   * A list of key-value pairs to label the scheduled query.
   * @maxLength `200`
   */
  Tags?: Tag[];
  /**
   * Configuration of target store where scheduled query results are written to.
   */
  TargetConfiguration?: TargetConfiguration;
};
/**
 * Attribute type definition for `AWS::Timestream::ScheduledQuery`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-timestream-scheduledquery.html#aws-resource-timestream-scheduledquery-return-values}
 */
export type TimestreamScheduledQueryAttributes = {
  /**
   * Amazon Resource Name of the scheduled query that is generated upon creation.
   * @minLength `1`
   * @maxLength `2048`
   */
  Arn: string;
  /**
   * Configuration for error reporting. Error reports will be generated when a problem is encountered when writing the query results.
   */
  SQErrorReportConfiguration: string;
  /**
   * The Amazon KMS key used to encrypt the scheduled query resource, at-rest. If the Amazon KMS key is not specified, the scheduled query resource will be encrypted with a Timestream owned Amazon KMS key. To specify a KMS key, use the key ID, key ARN, alias name, or alias ARN. When using an alias name, prefix the name with alias/. If ErrorReportConfiguration uses SSE_KMS as encryption type, the same KmsKeyId is used to encrypt the error report at rest.
   */
  SQKmsKeyId: string;
  /**
   * The name of the scheduled query. Scheduled query names must be unique within each Region.
   */
  SQName: string;
  /**
   * Notification configuration for the scheduled query. A notification is sent by Timestream when a query run finishes, when the state is updated or when you delete it.
   */
  SQNotificationConfiguration: string;
  /**
   * The query string to run. Parameter names can be specified in the query string @ character followed by an identifier. The named Parameter @scheduled_runtime is reserved and can be used in the query to get the time at which the query is scheduled to run. The timestamp calculated according to the ScheduleConfiguration parameter, will be the value of @scheduled_runtime paramater for each query run. For example, consider an instance of a scheduled query executing on 2021-12-01 00:00:00. For this instance, the @scheduled_runtime parameter is initialized to the timestamp 2021-12-01 00:00:00 when invoking the query.
   */
  SQQueryString: string;
  /**
   * Configuration for when the scheduled query is executed.
   */
  SQScheduleConfiguration: string;
  /**
   * The ARN for the IAM role that Timestream will assume when running the scheduled query.
   */
  SQScheduledQueryExecutionRoleArn: string;
  /**
   * Configuration of target store where scheduled query results are written to.
   */
  SQTargetConfiguration: string;
};
/**
 * Type definition for `AWS::Timestream::ScheduledQuery.DimensionMapping`.
 * This type is used to map column(s) from the query result to a dimension in the destination table.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-timestream-scheduledquery-dimensionmapping.html}
 */
export type DimensionMapping = {
  /**
   * Type for the dimension.
   */
  DimensionValueType: DimensionValueType;
  /**
   * Column name from query result.
   */
  Name: string;
};
/**
 * Type definition for `AWS::Timestream::ScheduledQuery.DimensionValueType`.
 * Type for the dimension.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-timestream-scheduledquery-dimensionvaluetype.html}
 */
export type DimensionValueType = "VARCHAR";
/**
 * Type definition for `AWS::Timestream::ScheduledQuery.EncryptionOption`.
 * Encryption at rest options for the error reports. If no encryption option is specified, Timestream will choose SSE_S3 as default.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-timestream-scheduledquery-encryptionoption.html}
 */
export type EncryptionOption = "SSE_S3" | "SSE_KMS";
/**
 * Type definition for `AWS::Timestream::ScheduledQuery.ErrorReportConfiguration`.
 * Configuration for error reporting. Error reports will be generated when a problem is encountered when writing the query results.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-timestream-scheduledquery-errorreportconfiguration.html}
 */
export type ErrorReportConfiguration = {
  /**
   * Details on S3 location for error reports that result from running a query.
   */
  S3Configuration: S3Configuration;
};
/**
 * Type definition for `AWS::Timestream::ScheduledQuery.MixedMeasureMapping`.
 * MixedMeasureMappings are mappings that can be used to ingest data into a mixture of narrow and multi measures in the derived table.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-timestream-scheduledquery-mixedmeasuremapping.html}
 */
export type MixedMeasureMapping = {
  /**
   * Refers to the value of the measure name in a result row. This field is required if MeasureNameColumn is provided.
   */
  MeasureName?: string;
  /**
   * Type of the value that is to be read from SourceColumn. If the mapping is for MULTI, use MeasureValueType.MULTI.
   */
  MeasureValueType: MixedMeasureMappingMeasureValueType;
  /**
   * Required. Attribute mappings to be used for mapping query results to ingest data for multi-measure attributes.
   * @minLength `1`
   */
  MultiMeasureAttributeMappings?: MultiMeasureAttributeMapping[];
  /**
   * This field refers to the source column from which the measure value is to be read for result materialization.
   */
  SourceColumn?: string;
  /**
   * Target measure name to be used. If not provided, the target measure name by default would be MeasureName if provided, or SourceColumn otherwise.
   */
  TargetMeasureName?: string;
};
/**
 * Type definition for `AWS::Timestream::ScheduledQuery.MixedMeasureMappingMeasureValueType`.
 * Type of the value that is to be read from SourceColumn. If the mapping is for MULTI, use MeasureValueType.MULTI.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-timestream-scheduledquery-mixedmeasuremappingmeasurevaluetype.html}
 */
export type MixedMeasureMappingMeasureValueType =
  | "BIGINT"
  | "BOOLEAN"
  | "DOUBLE"
  | "VARCHAR"
  | "MULTI";
/**
 * Type definition for `AWS::Timestream::ScheduledQuery.MultiMeasureAttributeMapping`.
 * An attribute mapping to be used for mapping query results to ingest data for multi-measure attributes.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-timestream-scheduledquery-multimeasureattributemapping.html}
 */
export type MultiMeasureAttributeMapping = {
  /**
   * Value type of the measure value column to be read from the query result.
   */
  MeasureValueType: MultiMeasureAttributeMappingMeasureValueType;
  /**
   * Source measure value column in the query result where the attribute value is to be read.
   */
  SourceColumn: string;
  /**
   * Custom name to be used for attribute name in derived table. If not provided, source column name would be used.
   */
  TargetMultiMeasureAttributeName?: string;
};
/**
 * Type definition for `AWS::Timestream::ScheduledQuery.MultiMeasureAttributeMappingMeasureValueType`.
 * Value type of the measure value column to be read from the query result.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-timestream-scheduledquery-multimeasureattributemappingmeasurevaluetype.html}
 */
export type MultiMeasureAttributeMappingMeasureValueType =
  | "BIGINT"
  | "BOOLEAN"
  | "DOUBLE"
  | "VARCHAR"
  | "TIMESTAMP";
/**
 * Type definition for `AWS::Timestream::ScheduledQuery.MultiMeasureMappings`.
 * Only one of MixedMeasureMappings or MultiMeasureMappings is to be provided. MultiMeasureMappings can be used to ingest data as multi measures in the derived table.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-timestream-scheduledquery-multimeasuremappings.html}
 */
export type MultiMeasureMappings = {
  /**
   * Required. Attribute mappings to be used for mapping query results to ingest data for multi-measure attributes.
   * @minLength `1`
   */
  MultiMeasureAttributeMappings: MultiMeasureAttributeMapping[];
  /**
   * Name of the target multi-measure in the derived table. Required if MeasureNameColumn is not provided. If MeasureNameColumn is provided then the value from that column will be used as the multi-measure name.
   */
  TargetMultiMeasureName?: string;
};
/**
 * Type definition for `AWS::Timestream::ScheduledQuery.NotificationConfiguration`.
 * Notification configuration for the scheduled query. A notification is sent by Timestream when a query run finishes, when the state is updated or when you delete it.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-timestream-scheduledquery-notificationconfiguration.html}
 */
export type NotificationConfiguration = {
  /**
   * SNS configuration for notification upon scheduled query execution.
   */
  SnsConfiguration: SnsConfiguration;
};
/**
 * Type definition for `AWS::Timestream::ScheduledQuery.S3Configuration`.
 * Details on S3 location for error reports that result from running a query.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-timestream-scheduledquery-s3configuration.html}
 */
export type S3Configuration = {
  /**
   * Name of the S3 bucket under which error reports will be created.
   * @minLength `3`
   * @maxLength `63`
   * @pattern `[a-z0-9][\.\-a-z0-9]{1,61}[a-z0-9]`
   */
  BucketName: string;
  /**
   * Encryption at rest options for the error reports. If no encryption option is specified, Timestream will choose SSE_S3 as default.
   */
  EncryptionOption?: EncryptionOption;
  /**
   * Prefix for error report keys.
   * @minLength `1`
   * @maxLength `896`
   * @pattern `[a-zA-Z0-9|!\-_*'\(\)]([a-zA-Z0-9]|[!\-_*'\(\)\/.])+`
   */
  ObjectKeyPrefix?: string;
};
/**
 * Type definition for `AWS::Timestream::ScheduledQuery.ScheduleConfiguration`.
 * Configuration for when the scheduled query is executed.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-timestream-scheduledquery-scheduleconfiguration.html}
 */
export type ScheduleConfiguration = {
  /**
   * An expression that denotes when to trigger the scheduled query run. This can be a cron expression or a rate expression.
   * @minLength `1`
   * @maxLength `256`
   */
  ScheduleExpression: string;
};
/**
 * Type definition for `AWS::Timestream::ScheduledQuery.SnsConfiguration`.
 * SNS configuration for notification upon scheduled query execution.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-timestream-scheduledquery-snsconfiguration.html}
 */
export type SnsConfiguration = {
  /**
   * SNS topic ARN that the scheduled query status notifications will be sent to.
   * @minLength `1`
   * @maxLength `2048`
   */
  TopicArn: string;
};
/**
 * Type definition for `AWS::Timestream::ScheduledQuery.Tag`.
 * A key-value pair to label the scheduled query.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-timestream-scheduledquery-tag.html}
 */
export type Tag = {
  /**
   * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @minLength `1`
   * @maxLength `128`
   */
  Key: string;
  /**
   * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @minLength `0`
   * @maxLength `256`
   */
  Value: string;
};
/**
 * Type definition for `AWS::Timestream::ScheduledQuery.TargetConfiguration`.
 * Configuration of target store where scheduled query results are written to.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-timestream-scheduledquery-targetconfiguration.html}
 */
export type TargetConfiguration = {
  /**
   * Configuration needed to write data into the Timestream database and table.
   */
  TimestreamConfiguration: TimestreamConfiguration;
};
/**
 * Type definition for `AWS::Timestream::ScheduledQuery.TimestreamConfiguration`.
 * Configuration needed to write data into the Timestream database and table.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-timestream-scheduledquery-timestreamconfiguration.html}
 */
export type TimestreamConfiguration = {
  /**
   * Name of Timestream database to which the query result will be written.
   */
  DatabaseName: string;
  /**
   * This is to allow mapping column(s) from the query result to the dimension in the destination table.
   */
  DimensionMappings: DimensionMapping[];
  /**
   * Name of the measure name column from the query result.
   */
  MeasureNameColumn?: string;
  /**
   * Specifies how to map measures to multi-measure records.
   * @minLength `1`
   */
  MixedMeasureMappings?: MixedMeasureMapping[];
  /**
   * Only one of MixedMeasureMappings or MultiMeasureMappings is to be provided. MultiMeasureMappings can be used to ingest data as multi measures in the derived table.
   */
  MultiMeasureMappings?: MultiMeasureMappings;
  /**
   * Name of Timestream table that the query result will be written to. The table should be within the same database that is provided in Timestream configuration.
   */
  TableName: string;
  /**
   * Column from query result that should be used as the time column in destination table. Column type for this should be TIMESTAMP.
   */
  TimeColumn: string;
};
/**
 * The AWS::Timestream::ScheduledQuery resource creates a Timestream Scheduled Query.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-timestream-scheduledquery.html}
 */
export class TimestreamScheduledQuery extends $Resource<
  "AWS::Timestream::ScheduledQuery",
  TimestreamScheduledQueryProperties,
  TimestreamScheduledQueryAttributes
> {
  public static readonly Type = "AWS::Timestream::ScheduledQuery";
  constructor(
    logicalId: string,
    properties: TimestreamScheduledQueryProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, TimestreamScheduledQuery.Type, properties, options);
  }
}
