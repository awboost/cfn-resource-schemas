import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::KinesisAnalyticsV2::Application`.
 * Creates an Amazon Kinesis Data Analytics application. For information about creating a Kinesis Data Analytics application, see [Creating an Application](https://docs.aws.amazon.com/kinesisanalytics/latest/java/getting-started.html).
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalyticsv2-application.html}
 */
export type KinesisAnalyticsV2ApplicationProperties = {
  /**
   * Use this parameter to configure the application.
   */
  ApplicationConfiguration?: ApplicationConfiguration;
  /**
   * The description of the application.
   * @minLength `0`
   * @maxLength `1024`
   */
  ApplicationDescription?: string;
  /**
   * Used to configure start of maintenance window.
   */
  ApplicationMaintenanceConfiguration?: ApplicationMaintenanceConfiguration;
  /**
   * To create a Kinesis Data Analytics Studio notebook, you must set the mode to `INTERACTIVE`. However, for a Kinesis Data Analytics for Apache Flink application, the mode is optional.
   */
  ApplicationMode?: "INTERACTIVE" | "STREAMING";
  /**
   * The name of the application.
   * @minLength `1`
   * @maxLength `128`
   * @pattern `^[a-zA-Z0-9_.-]+$`
   */
  ApplicationName?: string;
  /**
   * Specifies run configuration (start parameters) of a Kinesis Data Analytics application. Evaluated on update for RUNNING applications an only.
   */
  RunConfiguration?: RunConfiguration;
  /**
   * The runtime environment for the application.
   */
  RuntimeEnvironment: string;
  /**
   * Specifies the IAM role that the application uses to access external resources.
   * @minLength `1`
   * @maxLength `2048`
   * @pattern `^arn:.*$`
   */
  ServiceExecutionRole: string;
  /**
   * A list of one or more tags to assign to the application. A tag is a key-value pair that identifies an application. Note that the maximum number of application tags includes system tags. The maximum number of user-defined application tags is 50.
   * @minLength `1`
   * @maxLength `50`
   */
  Tags?: Tag[];
};
/**
 * Type definition for `AWS::KinesisAnalyticsV2::Application.ApplicationCodeConfiguration`.
 * Describes code configuration for an application.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-application-applicationcodeconfiguration.html}
 */
export type ApplicationCodeConfiguration = {
  /**
   * The location and type of the application code.
   */
  CodeContent: CodeContent;
  /**
   * Specifies whether the code content is in text or zip format.
   */
  CodeContentType: "PLAINTEXT" | "ZIPFILE";
};
/**
 * Type definition for `AWS::KinesisAnalyticsV2::Application.ApplicationConfiguration`.
 * Specifies the creation parameters for a Kinesis Data Analytics application.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-application-applicationconfiguration.html}
 */
export type ApplicationConfiguration = {
  /**
   * The code location and type parameters for a Flink-based Kinesis Data Analytics application.
   */
  ApplicationCodeConfiguration?: ApplicationCodeConfiguration;
  /**
   * Describes whether snapshots are enabled for a Flink-based Kinesis Data Analytics application.
   */
  ApplicationSnapshotConfiguration?: ApplicationSnapshotConfiguration;
  /**
   * Describes execution properties for a Flink-based Kinesis Data Analytics application.
   */
  EnvironmentProperties?: EnvironmentProperties;
  /**
   * The creation and update parameters for a Flink-based Kinesis Data Analytics application.
   */
  FlinkApplicationConfiguration?: FlinkApplicationConfiguration;
  /**
   * The creation and update parameters for a SQL-based Kinesis Data Analytics application.
   */
  SqlApplicationConfiguration?: SqlApplicationConfiguration;
  /**
   * The array of descriptions of VPC configurations available to the application.
   * @maxLength `1`
   */
  VpcConfigurations?: VpcConfiguration[];
  /**
   * The configuration parameters for a Kinesis Data Analytics Studio notebook.
   */
  ZeppelinApplicationConfiguration?: ZeppelinApplicationConfiguration;
};
/**
 * Type definition for `AWS::KinesisAnalyticsV2::Application.ApplicationMaintenanceConfiguration`.
 * Describes the maintenance configuration for the application.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-application-applicationmaintenanceconfiguration.html}
 */
export type ApplicationMaintenanceConfiguration = {
  /**
   * The start time for the maintenance window.
   * @pattern `^([01][0-9]|2[0-3]):[0-5][0-9]$`
   */
  ApplicationMaintenanceWindowStartTime: string;
};
/**
 * Type definition for `AWS::KinesisAnalyticsV2::Application.ApplicationRestoreConfiguration`.
 * Describes the restore behavior of a restarting application.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-application-applicationrestoreconfiguration.html}
 */
export type ApplicationRestoreConfiguration = {
  /**
   * Specifies how the application should be restored.
   */
  ApplicationRestoreType:
    | "SKIP_RESTORE_FROM_SNAPSHOT"
    | "RESTORE_FROM_LATEST_SNAPSHOT"
    | "RESTORE_FROM_CUSTOM_SNAPSHOT";
  /**
   * The identifier of an existing snapshot of application state to use to restart an application. The application uses this value if RESTORE_FROM_CUSTOM_SNAPSHOT is specified for the ApplicationRestoreType.
   * @minLength `1`
   * @maxLength `256`
   * @pattern `^[a-zA-Z0-9_.-]+$`
   */
  SnapshotName?: string;
};
/**
 * Type definition for `AWS::KinesisAnalyticsV2::Application.ApplicationSnapshotConfiguration`.
 * Describes whether snapshots are enabled for a Flink-based Kinesis Data Analytics application.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-application-applicationsnapshotconfiguration.html}
 */
export type ApplicationSnapshotConfiguration = {
  /**
   * Describes whether snapshots are enabled for a Flink-based Kinesis Data Analytics application.
   */
  SnapshotsEnabled: boolean;
};
/**
 * Type definition for `AWS::KinesisAnalyticsV2::Application.CatalogConfiguration`.
 * The configuration parameters for the default Amazon Glue database. You use this database for SQL queries that you write in a Kinesis Data Analytics Studio notebook.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-application-catalogconfiguration.html}
 */
export type CatalogConfiguration = {
  /**
   * The configuration parameters for the default Amazon Glue database. You use this database for Apache Flink SQL queries and table API transforms that you write in a Kinesis Data Analytics Studio notebook.
   */
  GlueDataCatalogConfiguration?: GlueDataCatalogConfiguration;
};
/**
 * Type definition for `AWS::KinesisAnalyticsV2::Application.CheckpointConfiguration`.
 * Describes an application's checkpointing configuration. Checkpointing is the process of persisting application state for fault tolerance. For more information, see Checkpoints for Fault Tolerance in the Apache Flink Documentation.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-application-checkpointconfiguration.html}
 */
export type CheckpointConfiguration = {
  /**
   * Describes the interval in milliseconds between checkpoint operations.
   * @min `1`
   * @max `9223372036854776000`
   */
  CheckpointInterval?: number;
  /**
   * Describes whether checkpointing is enabled for a Flink-based Kinesis Data Analytics application.
   */
  CheckpointingEnabled?: boolean;
  /**
   * Describes whether the application uses Kinesis Data Analytics' default checkpointing behavior. You must set this property to `CUSTOM` in order to set the `CheckpointingEnabled`, `CheckpointInterval`, or `MinPauseBetweenCheckpoints` parameters.
   */
  ConfigurationType: "DEFAULT" | "CUSTOM";
  /**
   * Describes the minimum time in milliseconds after a checkpoint operation completes that a new checkpoint operation can start. If a checkpoint operation takes longer than the CheckpointInterval, the application otherwise performs continual checkpoint operations. For more information, see Tuning Checkpointing in the Apache Flink Documentation.
   * @min `0`
   * @max `9223372036854776000`
   */
  MinPauseBetweenCheckpoints?: number;
};
/**
 * Type definition for `AWS::KinesisAnalyticsV2::Application.CodeContent`.
 * Specifies either the application code, or the location of the application code, for a Flink-based Kinesis Data Analytics application.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-application-codecontent.html}
 */
export type CodeContent = {
  /**
   * Information about the Amazon S3 bucket that contains the application code.
   */
  S3ContentLocation?: S3ContentLocation;
  /**
   * The text-format code for a Flink-based Kinesis Data Analytics application.
   * @minLength `1`
   * @maxLength `102400`
   */
  TextContent?: string;
  /**
   * The zip-format code for a Flink-based Kinesis Data Analytics application.
   */
  ZipFileContent?: string;
};
/**
 * Type definition for `AWS::KinesisAnalyticsV2::Application.CSVMappingParameters`.
 * For a SQL-based Kinesis Data Analytics application, provides additional mapping information when the record format uses delimiters, such as CSV. For example, the following sample records use CSV format, where the records use the '\n' as the row delimiter and a comma (",") as the column delimiter:
`"name1", "address1"`
`"name2", "address2"`
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-application-csvmappingparameters.html}
 */
export type CSVMappingParameters = {
  /**
   * The column delimiter. For example, in a CSV format, a comma (",") is the typical column delimiter.
   * @minLength `1`
   * @maxLength `1024`
   */
  RecordColumnDelimiter: string;
  /**
   * The row delimiter. For example, in a CSV format, '\n' is the typical row delimiter.
   * @minLength `1`
   * @maxLength `1024`
   */
  RecordRowDelimiter: string;
};
/**
 * Type definition for `AWS::KinesisAnalyticsV2::Application.CustomArtifactConfiguration`.
 * The configuration of connectors and user-defined functions.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-application-customartifactconfiguration.html}
 */
export type CustomArtifactConfiguration = {
  /**
   * Set this to either `UDF` or `DEPENDENCY_JAR`. `UDF` stands for user-defined functions. This type of artifact must be in an S3 bucket. A `DEPENDENCY_JAR` can be in either Maven or an S3 bucket.
   */
  ArtifactType: "DEPENDENCY_JAR" | "UDF";
  /**
   * The parameters required to fully specify a Maven reference.
   */
  MavenReference?: MavenReference;
  /**
   * The location of the custom artifacts.
   */
  S3ContentLocation?: S3ContentLocation;
};
/**
 * Type definition for `AWS::KinesisAnalyticsV2::Application.DeployAsApplicationConfiguration`.
 * The information required to deploy a Kinesis Data Analytics Studio notebook as an application with durable state.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-application-deployasapplicationconfiguration.html}
 */
export type DeployAsApplicationConfiguration = {
  /**
   * The description of an Amazon S3 object that contains the Amazon Data Analytics application, including the Amazon Resource Name (ARN) of the S3 bucket, the name of the Amazon S3 object that contains the data, and the version number of the Amazon S3 object that contains the data.
   */
  S3ContentLocation: S3ContentBaseLocation;
};
/**
 * Type definition for `AWS::KinesisAnalyticsV2::Application.EnvironmentProperties`.
 * Describes execution properties for a Flink-based Kinesis Data Analytics application.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-application-environmentproperties.html}
 */
export type EnvironmentProperties = {
  /**
   * Describes the execution property groups.
   * @maxLength `50`
   */
  PropertyGroups?: PropertyGroup[];
};
/**
 * Type definition for `AWS::KinesisAnalyticsV2::Application.FlinkApplicationConfiguration`.
 * Describes configuration parameters for a Flink-based Kinesis Data Analytics application or a Studio notebook.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-application-flinkapplicationconfiguration.html}
 */
export type FlinkApplicationConfiguration = {
  /**
   * Describes an application's checkpointing configuration. Checkpointing is the process of persisting application state for fault tolerance. For more information, see Checkpoints for Fault Tolerance in the Apache Flink Documentation.
   */
  CheckpointConfiguration?: CheckpointConfiguration;
  /**
   * Describes configuration parameters for Amazon CloudWatch logging for an application.
   */
  MonitoringConfiguration?: MonitoringConfiguration;
  /**
   * Describes parameters for how an application executes multiple tasks simultaneously.
   */
  ParallelismConfiguration?: ParallelismConfiguration;
};
/**
 * Type definition for `AWS::KinesisAnalyticsV2::Application.FlinkRunConfiguration`.
 * Describes the starting parameters for a Flink-based Kinesis Data Analytics application.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-application-flinkrunconfiguration.html}
 */
export type FlinkRunConfiguration = {
  /**
   * When restoring from a snapshot, specifies whether the runtime is allowed to skip a state that cannot be mapped to the new program. Defaults to false. If you update your application without specifying this parameter, AllowNonRestoredState will be set to false, even if it was previously set to true.
   */
  AllowNonRestoredState?: boolean;
};
/**
 * Type definition for `AWS::KinesisAnalyticsV2::Application.GlueDataCatalogConfiguration`.
 * The configuration of the Glue Data Catalog that you use for Apache Flink SQL queries and table API transforms that you write in an application.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-application-gluedatacatalogconfiguration.html}
 */
export type GlueDataCatalogConfiguration = {
  /**
   * The Amazon Resource Name (ARN) of the database.
   * @minLength `1`
   * @maxLength `2048`
   * @pattern `^arn:.*$`
   */
  DatabaseARN?: string;
};
/**
 * Type definition for `AWS::KinesisAnalyticsV2::Application.Input`.
 * When you configure the application input for a SQL-based Kinesis Data Analytics application, you specify the streaming source, the in-application stream name that is created, and the mapping between the two.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-application-input.html}
 */
export type Input = {
  /**
   * Describes the number of in-application streams to create.
   */
  InputParallelism?: InputParallelism;
  /**
   * The InputProcessingConfiguration for the input. An input processor transforms records as they are received from the stream, before the application's SQL code executes. Currently, the only input processing configuration available is InputLambdaProcessor.
   */
  InputProcessingConfiguration?: InputProcessingConfiguration;
  /**
   * Describes the format of the data in the streaming source, and how each data element maps to corresponding columns in the in-application stream that is being created.
   */
  InputSchema: InputSchema;
  /**
   * If the streaming source is an Amazon Kinesis Data Firehose delivery stream, identifies the delivery stream's ARN.
   */
  KinesisFirehoseInput?: KinesisFirehoseInput;
  /**
   * If the streaming source is an Amazon Kinesis data stream, identifies the stream's Amazon Resource Name (ARN).
   */
  KinesisStreamsInput?: KinesisStreamsInput;
  /**
   * The name prefix to use when creating an in-application stream. Suppose that you specify a prefix `"MyInApplicationStream"`. Kinesis Data Analytics then creates one or more (as per the InputParallelism count you specified) in-application streams with the names `"MyInApplicationStream_001"`, `"MyInApplicationStream_002"`, and so on.
   * @minLength `1`
   * @maxLength `32`
   * @pattern `^[^-\s<>&]*$`
   */
  NamePrefix: string;
};
/**
 * Type definition for `AWS::KinesisAnalyticsV2::Application.InputLambdaProcessor`.
 * An object that contains the Amazon Resource Name (ARN) of the Amazon Lambda function that is used to preprocess records in the stream in a SQL-based Kinesis Data Analytics application.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-application-inputlambdaprocessor.html}
 */
export type InputLambdaProcessor = {
  /**
   * The ARN of the Amazon Lambda function that operates on records in the stream.
   * @minLength `1`
   * @maxLength `2048`
   * @pattern `^arn:.*$`
   */
  ResourceARN: string;
};
/**
 * Type definition for `AWS::KinesisAnalyticsV2::Application.InputParallelism`.
 * For a SQL-based Kinesis Data Analytics application, describes the number of in-application streams to create for a given streaming source.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-application-inputparallelism.html}
 */
export type InputParallelism = {
  /**
   * The number of in-application streams to create.
   * @min `1`
   * @max `64`
   */
  Count?: number;
};
/**
 * Type definition for `AWS::KinesisAnalyticsV2::Application.InputProcessingConfiguration`.
 * For an SQL-based Amazon Kinesis Data Analytics application, describes a processor that is used to preprocess the records in the stream before being processed by your application code. Currently, the only input processor available is Amazon Lambda.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-application-inputprocessingconfiguration.html}
 */
export type InputProcessingConfiguration = {
  /**
   * The InputLambdaProcessor that is used to preprocess the records in the stream before being processed by your application code.
   */
  InputLambdaProcessor?: InputLambdaProcessor;
};
/**
 * Type definition for `AWS::KinesisAnalyticsV2::Application.InputSchema`.
 * For a SQL-based Kinesis Data Analytics application, describes the format of the data in the streaming source, and how each data element maps to corresponding columns created in the in-application stream.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-application-inputschema.html}
 */
export type InputSchema = {
  /**
   * A list of `RecordColumn` objects.
   * @maxLength `1000`
   */
  RecordColumns: RecordColumn[];
  /**
   * Specifies the encoding of the records in the streaming source. For example, UTF-8.
   */
  RecordEncoding?: "UTF-8";
  /**
   * Specifies the format of the records on the streaming source.
   */
  RecordFormat: RecordFormat;
};
/**
 * Type definition for `AWS::KinesisAnalyticsV2::Application.JSONMappingParameters`.
 * For a SQL-based Kinesis Data Analytics application, provides additional mapping information when JSON is the record format on the streaming source.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-application-jsonmappingparameters.html}
 */
export type JSONMappingParameters = {
  /**
   * The path to the top-level parent that contains the records.
   * @minLength `1`
   * @maxLength `65535`
   * @pattern `^(?=^\$)(?=^\S+$).*$`
   */
  RecordRowPath: string;
};
/**
 * Type definition for `AWS::KinesisAnalyticsV2::Application.KinesisFirehoseInput`.
 * For a SQL-based Kinesis Data Analytics application, identifies a Kinesis Data Firehose delivery stream as the streaming source. You provide the delivery stream's Amazon Resource Name (ARN).
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-application-kinesisfirehoseinput.html}
 */
export type KinesisFirehoseInput = {
  /**
   * The Amazon Resource Name (ARN) of the delivery stream.
   * @minLength `1`
   * @maxLength `2048`
   * @pattern `^arn:.*$`
   */
  ResourceARN: string;
};
/**
 * Type definition for `AWS::KinesisAnalyticsV2::Application.KinesisStreamsInput`.
 * Identifies a Kinesis data stream as the streaming source. You provide the stream's Amazon Resource Name (ARN).
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-application-kinesisstreamsinput.html}
 */
export type KinesisStreamsInput = {
  /**
   * The ARN of the input Kinesis data stream to read.
   * @minLength `1`
   * @maxLength `2048`
   * @pattern `^arn:.*$`
   */
  ResourceARN: string;
};
/**
 * Type definition for `AWS::KinesisAnalyticsV2::Application.MappingParameters`.
 * When you configure a SQL-based Kinesis Data Analytics application's input at the time of creating or updating an application, provides additional mapping information specific to the record format (such as JSON, CSV, or record fields delimited by some delimiter) on the streaming source.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-application-mappingparameters.html}
 */
export type MappingParameters = {
  /**
   * Provides additional mapping information when the record format uses delimiters (for example, CSV).
   */
  CSVMappingParameters?: CSVMappingParameters;
  /**
   * Provides additional mapping information when JSON is the record format on the streaming source.
   */
  JSONMappingParameters?: JSONMappingParameters;
};
/**
 * Type definition for `AWS::KinesisAnalyticsV2::Application.MavenReference`.
 * The information required to specify a Maven reference. You can use Maven references to specify dependency JAR files.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-application-mavenreference.html}
 */
export type MavenReference = {
  /**
   * The artifact ID of the Maven reference.
   * @minLength `1`
   * @maxLength `256`
   * @pattern `^[a-zA-Z0-9_.-]+$`
   */
  ArtifactId: string;
  /**
   * The group ID of the Maven reference.
   * @minLength `1`
   * @maxLength `256`
   * @pattern `^[a-zA-Z0-9_.-]+$`
   */
  GroupId: string;
  /**
   * The version of the Maven reference.
   * @minLength `1`
   * @maxLength `256`
   * @pattern `^[a-zA-Z0-9_.-]+$`
   */
  Version: string;
};
/**
 * Type definition for `AWS::KinesisAnalyticsV2::Application.MonitoringConfiguration`.
 * Describes configuration parameters for Amazon CloudWatch logging for a Java-based Kinesis Data Analytics application. For more information about CloudWatch logging, see Monitoring.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-application-monitoringconfiguration.html}
 */
export type MonitoringConfiguration = {
  /**
   * Describes whether to use the default CloudWatch logging configuration for an application. You must set this property to CUSTOM in order to set the LogLevel or MetricsLevel parameters.
   */
  ConfigurationType: "DEFAULT" | "CUSTOM";
  /**
   * Describes the verbosity of the CloudWatch Logs for an application.
   */
  LogLevel?: "DEBUG" | "INFO" | "WARN" | "ERROR";
  /**
   * Describes the granularity of the CloudWatch Logs for an application. The Parallelism level is not recommended for applications with a Parallelism over 64 due to excessive costs.
   */
  MetricsLevel?: "APPLICATION" | "OPERATOR" | "PARALLELISM" | "TASK";
};
/**
 * Type definition for `AWS::KinesisAnalyticsV2::Application.ParallelismConfiguration`.
 * Describes parameters for how a Flink-based Kinesis Data Analytics application executes multiple tasks simultaneously. For more information about parallelism, see Parallel Execution in the Apache Flink Documentation
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-application-parallelismconfiguration.html}
 */
export type ParallelismConfiguration = {
  /**
   * Describes whether the Kinesis Data Analytics service can increase the parallelism of the application in response to increased throughput.
   */
  AutoScalingEnabled?: boolean;
  /**
   * Describes whether the application uses the default parallelism for the Kinesis Data Analytics service. You must set this property to `CUSTOM` in order to change your application's `AutoScalingEnabled`, `Parallelism`, or `ParallelismPerKPU` properties.
   */
  ConfigurationType: "CUSTOM" | "DEFAULT";
  /**
   * Describes the initial number of parallel tasks that a Java-based Kinesis Data Analytics application can perform. The Kinesis Data Analytics service can increase this number automatically if ParallelismConfiguration:AutoScalingEnabled is set to true.
   * @min `1`
   */
  Parallelism?: number;
  /**
   * Describes the number of parallel tasks that a Java-based Kinesis Data Analytics application can perform per Kinesis Processing Unit (KPU) used by the application. For more information about KPUs, see Amazon Kinesis Data Analytics Pricing.
   * @min `1`
   */
  ParallelismPerKPU?: number;
};
/**
 * Type definition for `AWS::KinesisAnalyticsV2::Application.PropertyGroup`.
 * Property key-value pairs passed into an application.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-application-propertygroup.html}
 */
export type PropertyGroup = {
  /**
   * Describes the key of an application execution property key-value pair.
   * @minLength `1`
   * @maxLength `50`
   * @pattern `^[a-zA-Z0-9_.-]+$`
   */
  PropertyGroupId?: string;
  /**
   * Describes the value of an application execution property key-value pair.
   */
  PropertyMap?: Record<string, string>;
};
/**
 * Type definition for `AWS::KinesisAnalyticsV2::Application.RecordColumn`.
 * For a SQL-based Kinesis Data Analytics application, describes the mapping of each data element in the streaming source to the corresponding column in the in-application stream.
Also used to describe the format of the reference data source.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-application-recordcolumn.html}
 */
export type RecordColumn = {
  /**
   * A reference to the data element in the streaming input or the reference data source.
   * @minLength `1`
   * @maxLength `65535`
   */
  Mapping?: string;
  /**
   * The name of the column that is created in the in-application input stream or reference table.
   * @minLength `1`
   * @maxLength `256`
   * @pattern `^[^-\s<>&]*$`
   */
  Name: string;
  /**
   * The type of column created in the in-application input stream or reference table.
   * @minLength `1`
   * @maxLength `100`
   */
  SqlType: string;
};
/**
 * Type definition for `AWS::KinesisAnalyticsV2::Application.RecordFormat`.
 * For a SQL-based Kinesis Data Analytics application, describes the record format and relevant mapping information that should be applied to schematize the records on the stream.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-application-recordformat.html}
 */
export type RecordFormat = {
  /**
   * When you configure application input at the time of creating or updating an application, provides additional mapping information specific to the record format (such as JSON, CSV, or record fields delimited by some delimiter) on the streaming source.
   */
  MappingParameters?: MappingParameters;
  /**
   * The type of record format.
   */
  RecordFormatType: "CSV" | "JSON";
};
/**
 * Type definition for `AWS::KinesisAnalyticsV2::Application.RunConfiguration`.
 * Identifies the run configuration (start parameters) of a Kinesis Data Analytics application. This section is evaluated only on stack updates for applications in running RUNNING state and has no effect during manual application start.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-application-runconfiguration.html}
 */
export type RunConfiguration = {
  /**
   * Describes the restore behavior of a restarting application.
   */
  ApplicationRestoreConfiguration?: ApplicationRestoreConfiguration;
  /**
   * Describes the starting parameters for a Flink-based Kinesis Data Analytics application.
   */
  FlinkRunConfiguration?: FlinkRunConfiguration;
};
/**
 * Type definition for `AWS::KinesisAnalyticsV2::Application.S3ContentBaseLocation`.
 * The base location of the Amazon Data Analytics application.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-application-s3contentbaselocation.html}
 */
export type S3ContentBaseLocation = {
  /**
   * The base path for the S3 bucket.
   * @minLength `1`
   * @maxLength `1024`
   * @pattern `^[a-zA-Z0-9/!-_.*'()]+$`
   */
  BasePath?: string;
  /**
   * The Amazon Resource Name (ARN) of the S3 bucket.
   * @minLength `1`
   * @maxLength `2048`
   * @pattern `^arn:.*$`
   */
  BucketARN: string;
};
/**
 * Type definition for `AWS::KinesisAnalyticsV2::Application.S3ContentLocation`.
 * The location of an application or a custom artifact.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-application-s3contentlocation.html}
 */
export type S3ContentLocation = {
  /**
   * The Amazon Resource Name (ARN) for the S3 bucket containing the application code.
   * @minLength `1`
   * @maxLength `2048`
   * @pattern `^arn:.*$`
   */
  BucketARN: string;
  /**
   * The file key for the object containing the application code.
   * @minLength `1`
   * @maxLength `1024`
   */
  FileKey: string;
  /**
   * The version of the object containing the application code.
   * @minLength `1`
   * @maxLength `1024`
   */
  ObjectVersion?: string;
};
/**
 * Type definition for `AWS::KinesisAnalyticsV2::Application.SqlApplicationConfiguration`.
 * Describes the inputs, outputs, and reference data sources for a SQL-based Kinesis Data Analytics application.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-application-sqlapplicationconfiguration.html}
 */
export type SqlApplicationConfiguration = {
  /**
   * The array of Input objects describing the input streams used by the application.
   * @maxLength `1`
   */
  Inputs?: Input[];
};
/**
 * Type definition for `AWS::KinesisAnalyticsV2::Application.Tag`.
 * A key-value pair that identifies an application.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-application-tag.html}
 */
export type Tag = {
  /**
   * The key name of the tag. You can specify a value that's 1 to 128 Unicode characters in length and can't be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @minLength `1`
   * @maxLength `128`
   */
  Key: string;
  /**
   * The value for the tag. You can specify a value that's 0 to 256 characters in length.
   * @minLength `0`
   * @maxLength `256`
   */
  Value: string;
};
/**
 * Type definition for `AWS::KinesisAnalyticsV2::Application.VpcConfiguration`.
 * Describes the parameters of a VPC used by the application.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-application-vpcconfiguration.html}
 */
export type VpcConfiguration = {
  /**
   * The array of SecurityGroup IDs used by the VPC configuration.
   * @minLength `1`
   * @maxLength `5`
   */
  SecurityGroupIds: string[];
  /**
   * The array of Subnet IDs used by the VPC configuration.
   * @minLength `1`
   * @maxLength `16`
   */
  SubnetIds: string[];
};
/**
 * Type definition for `AWS::KinesisAnalyticsV2::Application.ZeppelinApplicationConfiguration`.
 * The configuration of a Kinesis Data Analytics Studio notebook.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-application-zeppelinapplicationconfiguration.html}
 */
export type ZeppelinApplicationConfiguration = {
  /**
   * The Amazon Glue Data Catalog that you use in queries in a Kinesis Data Analytics Studio notebook.
   */
  CatalogConfiguration?: CatalogConfiguration;
  /**
   * A list of CustomArtifactConfiguration objects.
   * @maxLength `50`
   */
  CustomArtifactsConfiguration?: CustomArtifactConfiguration[];
  /**
   * The information required to deploy a Kinesis Data Analytics Studio notebook as an application with durable state.
   */
  DeployAsApplicationConfiguration?: DeployAsApplicationConfiguration;
  /**
   * The monitoring configuration of a Kinesis Data Analytics Studio notebook.
   */
  MonitoringConfiguration?: ZeppelinMonitoringConfiguration;
};
/**
 * Type definition for `AWS::KinesisAnalyticsV2::Application.ZeppelinMonitoringConfiguration`.
 * Describes configuration parameters for Amazon CloudWatch logging for a Kinesis Data Analytics Studio notebook. For more information about CloudWatch logging, see Monitoring.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-application-zeppelinmonitoringconfiguration.html}
 */
export type ZeppelinMonitoringConfiguration = {
  /**
   * The verbosity of the CloudWatch Logs for an application. You can set it to `INFO`, `WARN`, `ERROR`, or `DEBUG`.
   */
  LogLevel?: "DEBUG" | "INFO" | "WARN" | "ERROR";
};
/**
 * Resource type definition for `AWS::KinesisAnalyticsV2::Application`.
 * Creates an Amazon Kinesis Data Analytics application. For information about creating a Kinesis Data Analytics application, see [Creating an Application](https://docs.aws.amazon.com/kinesisanalytics/latest/java/getting-started.html).
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalyticsv2-application.html}
 */
export class KinesisAnalyticsV2Application extends $Resource<
  "AWS::KinesisAnalyticsV2::Application",
  KinesisAnalyticsV2ApplicationProperties,
  Record<string, never>
> {
  public static readonly Type = "AWS::KinesisAnalyticsV2::Application";
  constructor(
    logicalId: string,
    properties: KinesisAnalyticsV2ApplicationProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, KinesisAnalyticsV2Application.Type, properties, options);
  }
}
