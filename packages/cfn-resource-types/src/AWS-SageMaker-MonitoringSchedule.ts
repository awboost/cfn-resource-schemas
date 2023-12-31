import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource Type definition for AWS::SageMaker::MonitoringSchedule
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-monitoringschedule.html}
 */
export type SageMakerMonitoringScheduleProperties = {
  /**
   * The name of the endpoint used to run the monitoring job.
   * @maxLength `63`
   * @pattern `^[a-zA-Z0-9](-*[a-zA-Z0-9])*`
   */
  EndpointName?: string;
  /**
   * Contains the reason a monitoring job failed, if it failed.
   * @minLength `1`
   * @maxLength `1024`
   */
  FailureReason?: string;
  /**
   * Describes metadata on the last execution to run, if there was one.
   */
  LastMonitoringExecutionSummary?: MonitoringExecutionSummary;
  /**
   * The configuration object that specifies the monitoring schedule and defines the monitoring job.
   */
  MonitoringScheduleConfig: MonitoringScheduleConfig;
  /**
   * The name of the monitoring schedule.
   * @maxLength `63`
   * @pattern `^[a-zA-Z0-9](-*[a-zA-Z0-9])*$`
   */
  MonitoringScheduleName: string;
  /**
   * The status of a schedule job.
   */
  MonitoringScheduleStatus?: "Pending" | "Failed" | "Scheduled" | "Stopped";
  /**
   * An array of key-value pairs to apply to this resource.
   * @maxLength `50`
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::SageMaker::MonitoringSchedule`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-monitoringschedule.html#aws-resource-sagemaker-monitoringschedule-return-values}
 */
export type SageMakerMonitoringScheduleAttributes = {
  /**
   * The time at which the schedule was created.
   */
  CreationTime: string;
  /**
   * A timestamp that indicates the last time the monitoring job was modified.
   */
  LastModifiedTime: string;
  /**
   * The Amazon Resource Name (ARN) of the monitoring schedule.
   * @minLength `1`
   * @maxLength `256`
   */
  MonitoringScheduleArn: string;
};
/**
 * Type definition for `AWS::SageMaker::MonitoringSchedule.BaselineConfig`.
 * Baseline configuration used to validate that the data conforms to the specified constraints and statistics.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-monitoringschedule-baselineconfig.html}
 */
export type BaselineConfig = {
  /**
   * The baseline constraints resource for a monitoring job.
   */
  ConstraintsResource?: ConstraintsResource;
  /**
   * The baseline statistics resource for a monitoring job.
   */
  StatisticsResource?: StatisticsResource;
};
/**
 * Type definition for `AWS::SageMaker::MonitoringSchedule.BatchTransformInput`.
 * The batch transform input for a monitoring job.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-monitoringschedule-batchtransforminput.html}
 */
export type BatchTransformInput = {
  /**
   * A URI that identifies the Amazon S3 storage location where Batch Transform Job captures data.
   * @maxLength `512`
   * @pattern `^(https|s3)://([^/]+)/?(.*)$`
   */
  DataCapturedDestinationS3Uri: string;
  /**
   * The dataset format of the data to monitor
   */
  DatasetFormat: DatasetFormat;
  /**
   * Indexes or names of the features to be excluded from analysis
   * @maxLength `100`
   */
  ExcludeFeaturesAttribute?: string;
  /**
   * Path to the filesystem where the endpoint data is available to the container.
   * @maxLength `256`
   * @pattern `.*`
   */
  LocalPath: string;
  /**
   * Whether input data distributed in Amazon S3 is fully replicated or sharded by an S3 key. Defauts to FullyReplicated
   */
  S3DataDistributionType?: "FullyReplicated" | "ShardedByS3Key";
  /**
   * Whether the Pipe or File is used as the input mode for transfering data for the monitoring job. Pipe mode is recommended for large datasets. File mode is useful for small files that fit in memory. Defaults to File.
   */
  S3InputMode?: "Pipe" | "File";
};
/**
 * Type definition for `AWS::SageMaker::MonitoringSchedule.ClusterConfig`.
 * Configuration for the cluster used to run model monitoring jobs.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-monitoringschedule-clusterconfig.html}
 */
export type ClusterConfig = {
  /**
   * The number of ML compute instances to use in the model monitoring job. For distributed processing jobs, specify a value greater than 1. The default value is 1.
   * @min `1`
   * @max `100`
   */
  InstanceCount: number;
  /**
   * The ML compute instance type for the processing job.
   */
  InstanceType: string;
  /**
   * The AWS Key Management Service (AWS KMS) key that Amazon SageMaker uses to encrypt data on the storage volume attached to the ML compute instance(s) that run the model monitoring job.
   */
  VolumeKmsKeyId?: string;
  /**
   * The size of the ML storage volume, in gigabytes, that you want to provision. You must specify sufficient ML storage for your scenario.
   * @min `1`
   * @max `16384`
   */
  VolumeSizeInGB: number;
};
/**
 * Type definition for `AWS::SageMaker::MonitoringSchedule.ConstraintsResource`.
 * The baseline constraints resource for a monitoring job.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-monitoringschedule-constraintsresource.html}
 */
export type ConstraintsResource = {
  /**
   * The Amazon S3 URI for baseline constraint file in Amazon S3 that the current monitoring job should validated against.
   * @maxLength `1024`
   * @pattern `^(https|s3)://([^/]+)/?(.*)$`
   */
  S3Uri?: string;
};
/**
 * Type definition for `AWS::SageMaker::MonitoringSchedule.Csv`.
 * The CSV format
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-monitoringschedule-csv.html}
 */
export type Csv = {
  /**
   * A boolean flag indicating if given CSV has header
   */
  Header?: boolean;
};
/**
 * Type definition for `AWS::SageMaker::MonitoringSchedule.DatasetFormat`.
 * The dataset format of the data to monitor
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-monitoringschedule-datasetformat.html}
 */
export type DatasetFormat = {
  /**
   * The CSV format
   */
  Csv?: Csv;
  /**
   * The Json format
   */
  Json?: Json;
  /**
   * A flag indicating if the dataset format is Parquet
   */
  Parquet?: boolean;
};
/**
 * Type definition for `AWS::SageMaker::MonitoringSchedule.EndpointInput`.
 * The endpoint for a monitoring job.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-monitoringschedule-endpointinput.html}
 */
export type EndpointInput = {
  /**
   * The name of the endpoint used to run the monitoring job.
   * @maxLength `63`
   * @pattern `^[a-zA-Z0-9](-*[a-zA-Z0-9])*`
   */
  EndpointName: string;
  /**
   * Indexes or names of the features to be excluded from analysis
   * @maxLength `100`
   */
  ExcludeFeaturesAttribute?: string;
  /**
   * Path to the filesystem where the endpoint data is available to the container.
   * @maxLength `256`
   * @pattern `.*`
   */
  LocalPath: string;
  /**
   * Whether input data distributed in Amazon S3 is fully replicated or sharded by an S3 key. Defauts to FullyReplicated
   */
  S3DataDistributionType?: "FullyReplicated" | "ShardedByS3Key";
  /**
   * Whether the Pipe or File is used as the input mode for transfering data for the monitoring job. Pipe mode is recommended for large datasets. File mode is useful for small files that fit in memory. Defaults to File.
   */
  S3InputMode?: "Pipe" | "File";
};
/**
 * Type definition for `AWS::SageMaker::MonitoringSchedule.Json`.
 * The Json format
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-monitoringschedule-json.html}
 */
export type Json = {
  /**
   * A boolean flag indicating if it is JSON line format
   */
  Line?: boolean;
};
/**
 * Type definition for `AWS::SageMaker::MonitoringSchedule.MonitoringAppSpecification`.
 * Container image configuration object for the monitoring job.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-monitoringschedule-monitoringappspecification.html}
 */
export type MonitoringAppSpecification = {
  /**
   * An array of arguments for the container used to run the monitoring job.
   * @maxLength `50`
   */
  ContainerArguments?: string[];
  /**
   * Specifies the entrypoint for a container used to run the monitoring job.
   * @maxLength `100`
   */
  ContainerEntrypoint?: string[];
  /**
   * The container image to be run by the monitoring job.
   * @maxLength `255`
   * @pattern `.*`
   */
  ImageUri: string;
  /**
   * An Amazon S3 URI to a script that is called after analysis has been performed. Applicable only for the built-in (first party) containers.
   * @maxLength `1024`
   * @pattern `^(https|s3)://([^/]+)/?(.*)$`
   */
  PostAnalyticsProcessorSourceUri?: string;
  /**
   * An Amazon S3 URI to a script that is called per row prior to running analysis. It can base64 decode the payload and convert it into a flatted json so that the built-in container can use the converted data. Applicable only for the built-in (first party) containers
   * @maxLength `1024`
   * @pattern `^(https|s3)://([^/]+)/?(.*)$`
   */
  RecordPreprocessorSourceUri?: string;
};
/**
 * Type definition for `AWS::SageMaker::MonitoringSchedule.MonitoringExecutionSummary`.
 * Summary of information about monitoring job
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-monitoringschedule-monitoringexecutionsummary.html}
 */
export type MonitoringExecutionSummary = {
  /**
   * The time at which the monitoring job was created.
   */
  CreationTime: string;
  /**
   * The name of the endpoint used to run the monitoring job.
   * @maxLength `63`
   * @pattern `^[a-zA-Z0-9](-*[a-zA-Z0-9])*`
   */
  EndpointName?: string;
  /**
   * Contains the reason a monitoring job failed, if it failed.
   * @maxLength `1024`
   */
  FailureReason?: string;
  /**
   * A timestamp that indicates the last time the monitoring job was modified.
   */
  LastModifiedTime: string;
  /**
   * The status of the monitoring job.
   */
  MonitoringExecutionStatus:
    | "Pending"
    | "Completed"
    | "CompletedWithViolations"
    | "InProgress"
    | "Failed"
    | "Stopping"
    | "Stopped";
  /**
   * The name of the monitoring schedule.
   * @maxLength `63`
   * @pattern `^[a-zA-Z0-9](-*[a-zA-Z0-9])*$`
   */
  MonitoringScheduleName: string;
  /**
   * The Amazon Resource Name (ARN) of the monitoring job.
   * @maxLength `256`
   * @pattern `aws[a-z\-]*:sagemaker:[a-z0-9\-]*:[0-9]{12}:processing-job/.*`
   */
  ProcessingJobArn?: string;
  /**
   * The time the monitoring job was scheduled.
   */
  ScheduledTime: string;
};
/**
 * Type definition for `AWS::SageMaker::MonitoringSchedule.MonitoringInput`.
 * The inputs for a monitoring job.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-monitoringschedule-monitoringinput.html}
 */
export type MonitoringInput = {
  /**
   * The batch transform input for a monitoring job.
   */
  BatchTransformInput?: BatchTransformInput;
  /**
   * The endpoint for a monitoring job.
   */
  EndpointInput?: EndpointInput;
};
/**
 * Type definition for `AWS::SageMaker::MonitoringSchedule.MonitoringJobDefinition`.
 * Defines the monitoring job.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-monitoringschedule-monitoringjobdefinition.html}
 */
export type MonitoringJobDefinition = {
  /**
   * Baseline configuration used to validate that the data conforms to the specified constraints and statistics.
   */
  BaselineConfig?: BaselineConfig;
  /**
   * Sets the environment variables in the Docker container
   */
  Environment?: Record<string, string | string>;
  /**
   * Container image configuration object for the monitoring job.
   */
  MonitoringAppSpecification: MonitoringAppSpecification;
  /**
   * The array of inputs for the monitoring job.
   * @minLength `1`
   * @maxLength `1`
   */
  MonitoringInputs: MonitoringInput[];
  /**
   * The output configuration for monitoring jobs.
   */
  MonitoringOutputConfig: MonitoringOutputConfig;
  /**
   * Identifies the resources to deploy for a monitoring job.
   */
  MonitoringResources: MonitoringResources;
  /**
   * Networking options for a job, such as network traffic encryption between containers, whether to allow inbound and outbound network calls to and from containers, and the VPC subnets and security groups to use for VPC-enabled jobs.
   */
  NetworkConfig?: NetworkConfig;
  /**
   * The Amazon Resource Name (ARN) of an IAM role that Amazon SageMaker can assume to perform tasks on your behalf.
   * @minLength `20`
   * @maxLength `2048`
   * @pattern `^arn:aws[a-z\-]*:iam::\d{12}:role/?[a-zA-Z_0-9+=,.@\-_/]+$`
   */
  RoleArn: string;
  /**
   * Specifies a time limit for how long the monitoring job is allowed to run.
   */
  StoppingCondition?: StoppingCondition;
};
/**
 * Type definition for `AWS::SageMaker::MonitoringSchedule.MonitoringOutput`.
 * The output object for a monitoring job.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-monitoringschedule-monitoringoutput.html}
 */
export type MonitoringOutput = {
  /**
   * Information about where and how to store the results of a monitoring job.
   */
  S3Output: S3Output;
};
/**
 * Type definition for `AWS::SageMaker::MonitoringSchedule.MonitoringOutputConfig`.
 * The output configuration for monitoring jobs.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-monitoringschedule-monitoringoutputconfig.html}
 */
export type MonitoringOutputConfig = {
  /**
   * The AWS Key Management Service (AWS KMS) key that Amazon SageMaker uses to encrypt the model artifacts at rest using Amazon S3 server-side encryption.
   * @maxLength `2048`
   * @pattern `.*`
   */
  KmsKeyId?: string;
  /**
   * Monitoring outputs for monitoring jobs. This is where the output of the periodic monitoring jobs is uploaded.
   */
  MonitoringOutputs: MonitoringOutput[];
};
/**
 * Type definition for `AWS::SageMaker::MonitoringSchedule.MonitoringResources`.
 * Identifies the resources to deploy for a monitoring job.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-monitoringschedule-monitoringresources.html}
 */
export type MonitoringResources = {
  /**
   * Configuration for the cluster used to run model monitoring jobs.
   */
  ClusterConfig: ClusterConfig;
};
/**
 * Type definition for `AWS::SageMaker::MonitoringSchedule.MonitoringScheduleConfig`.
 * The configuration object that specifies the monitoring schedule and defines the monitoring job.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-monitoringschedule-monitoringscheduleconfig.html}
 */
export type MonitoringScheduleConfig = {
  /**
   * Defines the monitoring job.
   */
  MonitoringJobDefinition?: MonitoringJobDefinition;
  /**
   * Name of the job definition
   * @minLength `1`
   * @maxLength `63`
   * @pattern `^[a-zA-Z0-9](-*[a-zA-Z0-9])*$`
   */
  MonitoringJobDefinitionName?: string;
  /**
   * The type of monitoring job.
   */
  MonitoringType?: MonitoringType;
  /**
   * Configuration details about the monitoring schedule.
   */
  ScheduleConfig?: ScheduleConfig;
};
/**
 * Type definition for `AWS::SageMaker::MonitoringSchedule.MonitoringType`.
 * The type of monitoring job.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-monitoringschedule-monitoringtype.html}
 */
export type MonitoringType =
  | "DataQuality"
  | "ModelQuality"
  | "ModelBias"
  | "ModelExplainability";
/**
 * Type definition for `AWS::SageMaker::MonitoringSchedule.NetworkConfig`.
 * Networking options for a job, such as network traffic encryption between containers, whether to allow inbound and outbound network calls to and from containers, and the VPC subnets and security groups to use for VPC-enabled jobs.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-monitoringschedule-networkconfig.html}
 */
export type NetworkConfig = {
  /**
   * Whether to encrypt all communications between distributed processing jobs. Choose True to encrypt communications. Encryption provides greater security for distributed processing jobs, but the processing might take longer.
   */
  EnableInterContainerTrafficEncryption?: boolean;
  /**
   * Whether to allow inbound and outbound network calls to and from the containers used for the processing job.
   */
  EnableNetworkIsolation?: boolean;
  /**
   * Specifies a VPC that your training jobs and hosted models have access to. Control access to and from your training and model containers by configuring the VPC.
   */
  VpcConfig?: VpcConfig;
};
/**
 * Type definition for `AWS::SageMaker::MonitoringSchedule.S3Output`.
 * Information about where and how to store the results of a monitoring job.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-monitoringschedule-s3output.html}
 */
export type S3Output = {
  /**
   * The local path to the Amazon S3 storage location where Amazon SageMaker saves the results of a monitoring job. LocalPath is an absolute path for the output data.
   * @maxLength `256`
   * @pattern `.*`
   */
  LocalPath: string;
  /**
   * Whether to upload the results of the monitoring job continuously or after the job completes.
   */
  S3UploadMode?: "Continuous" | "EndOfJob";
  /**
   * A URI that identifies the Amazon S3 storage location where Amazon SageMaker saves the results of a monitoring job.
   * @maxLength `512`
   * @pattern `^(https|s3)://([^/]+)/?(.*)$`
   */
  S3Uri: string;
};
/**
 * Type definition for `AWS::SageMaker::MonitoringSchedule.ScheduleConfig`.
 * Configuration details about the monitoring schedule.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-monitoringschedule-scheduleconfig.html}
 */
export type ScheduleConfig = {
  /**
   * Data Analysis end time, e.g. PT0H
   * @minLength `1`
   * @maxLength `15`
   * @pattern `^.?P.*`
   */
  DataAnalysisEndTime?: string;
  /**
   * Data Analysis start time, e.g. -PT1H
   * @minLength `1`
   * @maxLength `15`
   * @pattern `^.?P.*`
   */
  DataAnalysisStartTime?: string;
  /**
   * A cron expression or 'NOW' that describes details about the monitoring schedule.
   * @minLength `1`
   * @maxLength `256`
   */
  ScheduleExpression: string;
};
/**
 * Type definition for `AWS::SageMaker::MonitoringSchedule.StatisticsResource`.
 * The baseline statistics resource for a monitoring job.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-monitoringschedule-statisticsresource.html}
 */
export type StatisticsResource = {
  /**
   * The Amazon S3 URI for the baseline statistics file in Amazon S3 that the current monitoring job should be validated against.
   * @maxLength `1024`
   * @pattern `^(https|s3)://([^/]+)/?(.*)$`
   */
  S3Uri?: string;
};
/**
 * Type definition for `AWS::SageMaker::MonitoringSchedule.StoppingCondition`.
 * Specifies a time limit for how long the monitoring job is allowed to run.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-monitoringschedule-stoppingcondition.html}
 */
export type StoppingCondition = {
  /**
   * The maximum runtime allowed in seconds.
   * @min `1`
   * @max `86400`
   */
  MaxRuntimeInSeconds: number;
};
/**
 * Type definition for `AWS::SageMaker::MonitoringSchedule.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-monitoringschedule-tag.html}
 */
export type Tag = {
  /**
   * The key name of the tag. You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @minLength `1`
   * @maxLength `128`
   * @pattern `^([\p{L}\p{Z}\p{N}_.:/=+\-@]*)$`
   */
  Key: string;
  /**
   * The value for the tag. You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @maxLength `256`
   * @pattern `^([\p{L}\p{Z}\p{N}_.:/=+\-@]*)$`
   */
  Value: string;
};
/**
 * Type definition for `AWS::SageMaker::MonitoringSchedule.VpcConfig`.
 * Specifies a VPC that your training jobs and hosted models have access to. Control access to and from your training and model containers by configuring the VPC.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-monitoringschedule-vpcconfig.html}
 */
export type VpcConfig = {
  /**
   * The VPC security group IDs, in the form sg-xxxxxxxx. Specify the security groups for the VPC that is specified in the Subnets field.
   * @minLength `1`
   * @maxLength `5`
   */
  SecurityGroupIds: string[];
  /**
   * The ID of the subnets in the VPC to which you want to connect to your monitoring jobs.
   * @minLength `1`
   * @maxLength `16`
   */
  Subnets: string[];
};
/**
 * Resource Type definition for AWS::SageMaker::MonitoringSchedule
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-monitoringschedule.html}
 */
export class SageMakerMonitoringSchedule extends $Resource<
  "AWS::SageMaker::MonitoringSchedule",
  SageMakerMonitoringScheduleProperties,
  SageMakerMonitoringScheduleAttributes
> {
  public static readonly Type = "AWS::SageMaker::MonitoringSchedule";
  public static readonly AttributeNames = [
    "CreationTime" as const,
    "LastModifiedTime" as const,
    "MonitoringScheduleArn" as const,
  ];
  constructor(
    logicalId: string,
    properties: SageMakerMonitoringScheduleProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      SageMakerMonitoringSchedule.Type,
      properties,
      SageMakerMonitoringSchedule.AttributeNames,
      options,
    );
  }
}
