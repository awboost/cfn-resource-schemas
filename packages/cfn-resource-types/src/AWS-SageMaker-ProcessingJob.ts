import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::SageMaker::ProcessingJob
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-processingjob.html}
 */
export type SageMakerProcessingJobProperties = {
  /**
   * Configures the processing job to run a specified Docker container image.
   */
  AppSpecification: AppSpecification;
  /**
   * Sets the environment variables in the Docker container
   */
  Environment?: Environment;
  /**
   * Associates a SageMaker job as a trial component with an experiment and trial.
   */
  ExperimentConfig?: ExperimentConfig;
  /**
   * Networking options for a job, such as network traffic encryption between containers, whether to allow inbound and outbound network calls to and from containers, and the VPC subnets and security groups to use for VPC-enabled jobs.
   */
  NetworkConfig?: NetworkConfig;
  /**
   * An array of inputs configuring the data to download into the processing container.
   * @minLength `0`
   * @maxLength `10`
   */
  ProcessingInputs?: ProcessingInputsObject[];
  /**
   * The name of the processing job. The name must be unique within an AWS Region in the AWS account.
   * @minLength `1`
   * @maxLength `63`
   * @pattern `[a-zA-Z0-9](-*[a-zA-Z0-9]){0,62}`
   */
  ProcessingJobName?: string;
  /**
   * Configuration for uploading output from the processing container.
   */
  ProcessingOutputConfig?: ProcessingOutputConfig;
  /**
   * Identifies the resources, ML compute instances, and ML storage volumes to deploy for a processing job. In distributed training, you specify more than one instance.
   */
  ProcessingResources: ProcessingResources;
  /**
   * The Amazon Resource Name (ARN) of an IAM role that Amazon SageMaker can assume to perform tasks on your behalf.
   * @minLength `20`
   * @maxLength `2048`
   * @pattern `arn:aws[a-z\-]*:iam::\d{12}:role/?[a-zA-Z_0-9+=,.@\-_/]+`
   */
  RoleArn: string;
  /**
   * Configures conditions under which the processing job should be stopped, such as how long the processing job has been running. After the condition is met, the processing job is stopped.
   */
  StoppingCondition?: StoppingCondition;
  /**
   * (Optional) An array of key-value pairs. For more information, see Using Cost Allocation Tags(https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html#allocation-whatURL) in the AWS Billing and Cost Management User Guide.
   * @maxLength `50`
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::SageMaker::ProcessingJob`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-processingjob.html#aws-resource-sagemaker-processingjob-return-values}
 */
export type SageMakerProcessingJobAttributes = {
  /**
   * The ARN of an AutoML job associated with this processing job.
   * @maxLength `256`
   */
  AutoMLJobArn: string;
  /**
   * The time at which the processing job was created.
   */
  CreationTime: string;
  /**
   * An optional string, up to one KB in size, that contains metadata from the processing container when the processing job exits.
   * @maxLength `1024`
   * @pattern `[\S\s]*`
   */
  ExitMessage: string;
  /**
   * A string, up to one KB in size, that contains the reason a processing job failed, if it failed.
   * @maxLength `1024`
   */
  FailureReason: string;
  /**
   * The time at which the processing job was last modified.
   */
  LastModifiedTime: string;
  /**
   * The ARN of a monitoring schedule for an endpoint associated with this processing job.
   * @maxLength `256`
   */
  MonitoringScheduleArn: string;
  /**
   * The time at which the processing job completed.
   */
  ProcessingEndTime: string;
  /**
   * The Amazon Resource Name (ARN) of the processing job.
   * @minLength `0`
   * @maxLength `256`
   * @pattern `arn:aws[a-z\-]*:sagemaker:[a-z0-9\-]*:[0-9]{12}:processing-job/.*`
   */
  ProcessingJobArn: string;
  /**
   * Provides the status of a processing job.
   */
  ProcessingJobStatus:
    | "Completed"
    | "InProgress"
    | "Stopping"
    | "Stopped"
    | "Failed";
  /**
   * The time at which the processing job started.
   */
  ProcessingStartTime: string;
  /**
   * The ARN of a training job associated with this processing job
   * @maxLength `256`
   */
  TrainingJobArn: string;
};
/**
 * Type definition for `AWS::SageMaker::ProcessingJob.AppSpecification`.
 * Configures the processing job to run a specified Docker container image.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-processingjob-appspecification.html}
 */
export type AppSpecification = {
  /**
   * The arguments for a container used to run a processing job.
   * @minLength `0`
   * @maxLength `100`
   */
  ContainerArguments?: string[];
  /**
   * The entrypoint for a container used to run a processing job.
   * @minLength `0`
   * @maxLength `100`
   */
  ContainerEntrypoint?: string[];
  /**
   * The container image to be run by the processing job.
   * @minLength `0`
   * @maxLength `256`
   * @pattern `.*`
   */
  ImageUri: string;
};
/**
 * Type definition for `AWS::SageMaker::ProcessingJob.AthenaDatasetDefinition`.
 * Configuration for Athena Dataset Definition input.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-processingjob-athenadatasetdefinition.html}
 */
export type AthenaDatasetDefinition = {
  /**
   * The name of the data catalog used in Athena query execution.
   * @maxLength `256`
   */
  Catalog: string;
  /**
   * The name of the database used in the Athena query execution.
   * @maxLength `255`
   * @pattern `.*`
   */
  Database: string;
  /**
   * The AWS Key Management Service (AWS KMS) key that Amazon SageMaker uses to encrypt data generated from an Athena query execution.
   * @minLength `0`
   * @maxLength `2048`
   * @pattern `[a-zA-Z0-9:/_-]*`
   */
  KmsKeyId?: string;
  /**
   * The compression used for Athena query results.
   */
  OutputCompression?: "GZIP" | "SNAPPY" | "ZLIB";
  /**
   * The data storage format for Athena query results.
   */
  OutputFormat: "PARQUET" | "AVRO" | "ORC" | "JSON" | "TEXTFILE";
  /**
   * The location in Amazon S3 where Athena query results are stored.
   * @minLength `0`
   * @maxLength `1024`
   * @pattern `(https|s3)://([^/]+)/?(.*)`
   */
  OutputS3Uri: string;
  /**
   * The SQL query statements, to be executed.
   * @maxLength `4096`
   * @pattern `[\s\S]+`
   */
  QueryString: string;
  /**
   * The name of the workgroup in which the Athena query is being started.
   * @maxLength `128`
   * @pattern `[a-zA-Z0-9._-]+`
   */
  WorkGroup?: string;
};
/**
 * Type definition for `AWS::SageMaker::ProcessingJob.ClusterConfig`.
 * Configuration for the cluster used to run a processing job.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-processingjob-clusterconfig.html}
 */
export type ClusterConfig = {
  /**
   * The number of ML compute instances to use in the processing job. For distributed processing jobs, specify a value greater than 1. The default value is 1.
   * @min `1`
   * @max `100`
   */
  InstanceCount: number;
  /**
   * The ML compute instance type for the processing job.
   */
  InstanceType:
    | "ml.t3.medium"
    | "ml.t3.large"
    | "ml.t3.xlarge"
    | "ml.t3.2xlarge"
    | "ml.m4.xlarge"
    | "ml.m4.2xlarge"
    | "ml.m4.4xlarge"
    | "ml.m4.10xlarge"
    | "ml.m4.16xlarge"
    | "ml.c4.xlarge"
    | "ml.c4.2xlarge"
    | "ml.c4.4xlarge"
    | "ml.c4.8xlarge"
    | "ml.c5.xlarge"
    | "ml.c5.2xlarge"
    | "ml.c5.4xlarge"
    | "ml.c5.9xlarge"
    | "ml.c5.18xlarge"
    | "ml.m5.large"
    | "ml.m5.xlarge"
    | "ml.m5.2xlarge"
    | "ml.m5.4xlarge"
    | "ml.m5.12xlarge"
    | "ml.m5.24xlarge"
    | "ml.r5.large"
    | "ml.r5.xlarge"
    | "ml.r5.2xlarge"
    | "ml.r5.4xlarge"
    | "ml.r5.8xlarge"
    | "ml.r5.12xlarge"
    | "ml.r5.16xlarge"
    | "ml.r5.24xlarge"
    | "ml.g4dn.xlarge"
    | "ml.g4dn.2xlarge"
    | "ml.g4dn.4xlarge"
    | "ml.g4dn.8xlarge"
    | "ml.g4dn.12xlarge"
    | "ml.g4dn.16xlarge"
    | "ml.g5.xlarge"
    | "ml.g5.2xlarge"
    | "ml.g5.4xlarge"
    | "ml.g5.8xlarge"
    | "ml.g5.16xlarge"
    | "ml.g5.12xlarge"
    | "ml.g5.24xlarge"
    | "ml.g5.48xlarge"
    | "ml.r5d.large"
    | "ml.r5d.xlarge"
    | "ml.r5d.2xlarge"
    | "ml.r5d.4xlarge"
    | "ml.r5d.8xlarge"
    | "ml.r5d.12xlarge"
    | "ml.r5d.16xlarge"
    | "ml.r5d.24xlarge"
    | "ml.g6.xlarge"
    | "ml.g6.2xlarge"
    | "ml.g6.4xlarge"
    | "ml.g6.8xlarge"
    | "ml.g6.12xlarge"
    | "ml.g6.16xlarge"
    | "ml.g6.24xlarge"
    | "ml.g6.48xlarge"
    | "ml.g6e.xlarge"
    | "ml.g6e.2xlarge"
    | "ml.g6e.4xlarge"
    | "ml.g6e.8xlarge"
    | "ml.g6e.12xlarge"
    | "ml.g6e.16xlarge"
    | "ml.g6e.24xlarge"
    | "ml.g6e.48xlarge"
    | "ml.m6i.large"
    | "ml.m6i.xlarge"
    | "ml.m6i.2xlarge"
    | "ml.m6i.4xlarge"
    | "ml.m6i.8xlarge"
    | "ml.m6i.12xlarge"
    | "ml.m6i.16xlarge"
    | "ml.m6i.24xlarge"
    | "ml.m6i.32xlarge"
    | "ml.c6i.xlarge"
    | "ml.c6i.2xlarge"
    | "ml.c6i.4xlarge"
    | "ml.c6i.8xlarge"
    | "ml.c6i.12xlarge"
    | "ml.c6i.16xlarge"
    | "ml.c6i.24xlarge"
    | "ml.c6i.32xlarge"
    | "ml.m7i.large"
    | "ml.m7i.xlarge"
    | "ml.m7i.2xlarge"
    | "ml.m7i.4xlarge"
    | "ml.m7i.8xlarge"
    | "ml.m7i.12xlarge"
    | "ml.m7i.16xlarge"
    | "ml.m7i.24xlarge"
    | "ml.m7i.48xlarge"
    | "ml.c7i.large"
    | "ml.c7i.xlarge"
    | "ml.c7i.2xlarge"
    | "ml.c7i.4xlarge"
    | "ml.c7i.8xlarge"
    | "ml.c7i.12xlarge"
    | "ml.c7i.16xlarge"
    | "ml.c7i.24xlarge"
    | "ml.c7i.48xlarge"
    | "ml.r7i.large"
    | "ml.r7i.xlarge"
    | "ml.r7i.2xlarge"
    | "ml.r7i.4xlarge"
    | "ml.r7i.8xlarge"
    | "ml.r7i.12xlarge"
    | "ml.r7i.16xlarge"
    | "ml.r7i.24xlarge"
    | "ml.r7i.48xlarge";
  /**
   * The AWS Key Management Service (AWS KMS) key that Amazon SageMaker uses to encrypt data on the storage volume attached to the ML compute instance(s) that run the processing job.
   * @minLength `0`
   * @maxLength `2048`
   * @pattern `[a-zA-Z0-9:/_-]*`
   */
  VolumeKmsKeyId?: string;
  /**
   * The size of the ML storage volume in gigabytes that you want to provision. You must specify sufficient ML storage for your scenario.
   * @min `1`
   * @max `16384`
   */
  VolumeSizeInGB: number;
};
/**
 * Type definition for `AWS::SageMaker::ProcessingJob.DatasetDefinition`.
 * Configuration for Dataset Definition inputs. The Dataset Definition input must specify exactly one of either `AthenaDatasetDefinition` or `RedshiftDatasetDefinition` types.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-processingjob-datasetdefinition.html}
 */
export type DatasetDefinition = {
  /**
   * Configuration for Athena Dataset Definition input.
   */
  AthenaDatasetDefinition?: AthenaDatasetDefinition;
  /**
   * Whether the generated dataset is FullyReplicated or ShardedByS3Key (default).
   */
  DataDistributionType?: "FullyReplicated" | "ShardedByS3Key";
  /**
   * Whether to use File or Pipe input mode. In File (default) mode, Amazon SageMaker copies the data from the input source onto the local Amazon Elastic Block Store (Amazon EBS) volumes before starting your training algorithm. This is the most commonly used input mode. In Pipe mode, Amazon SageMaker streams input data from the source directly to your algorithm without using the EBS volume.
   */
  InputMode?: "File" | "Pipe";
  /**
   * The local path where you want Amazon SageMaker to download the Dataset Definition inputs to run a processing job. LocalPath is an absolute path to the input data. This is a required parameter when AppManaged is False (default).
   * @minLength `0`
   * @maxLength `256`
   * @pattern `.*`
   */
  LocalPath?: string;
  /**
   * Configuration for Redshift Dataset Definition input.
   */
  RedshiftDatasetDefinition?: RedshiftDatasetDefinition;
};
/**
 * Type definition for `AWS::SageMaker::ProcessingJob.Environment`.
 * Sets the environment variables in the Docker container
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-processingjob-environment.html}
 */
export type Environment = Record<string, string>;
/**
 * Type definition for `AWS::SageMaker::ProcessingJob.ExperimentConfig`.
 * Associates a SageMaker job as a trial component with an experiment and trial.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-processingjob-experimentconfig.html}
 */
export type ExperimentConfig = {
  /**
   * The name of an existing experiment to associate with the trial component.
   * @maxLength `120`
   * @pattern `[a-zA-Z0-9](-*[a-zA-Z0-9]){0,119}`
   */
  ExperimentName?: string;
  /**
   * The name of the experiment run to associate with the trial component.
   * @maxLength `120`
   * @pattern `[a-zA-Z0-9](-*[a-zA-Z0-9]){0,119}`
   */
  RunName?: string;
  /**
   * The display name for the trial component. If this key isn't specified, the display name is the trial component name.
   * @maxLength `120`
   * @pattern `[a-zA-Z0-9](-*[a-zA-Z0-9]){0,119}`
   */
  TrialComponentDisplayName?: string;
  /**
   * The name of an existing trial to associate the trial component with. If not specified, a new trial is created.
   * @maxLength `120`
   * @pattern `[a-zA-Z0-9](-*[a-zA-Z0-9]){0,119}`
   */
  TrialName?: string;
};
/**
 * Type definition for `AWS::SageMaker::ProcessingJob.FeatureStoreOutput`.
 * Configuration for processing job outputs in Amazon SageMaker Feature Store.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-processingjob-featurestoreoutput.html}
 */
export type FeatureStoreOutput = {
  /**
   * The name of the Amazon SageMaker FeatureGroup to use as the destination for processing job output. Note that your processing script is responsible for putting records into your Feature Store.
   * @maxLength `64`
   * @pattern `[a-zA-Z0-9]([_-]*[a-zA-Z0-9]){0,63}`
   */
  FeatureGroupName: string;
};
/**
 * Type definition for `AWS::SageMaker::ProcessingJob.NetworkConfig`.
 * Networking options for a job, such as network traffic encryption between containers, whether to allow inbound and outbound network calls to and from containers, and the VPC subnets and security groups to use for VPC-enabled jobs.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-processingjob-networkconfig.html}
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
   * Specifies an Amazon Virtual Private Cloud (VPC) that your SageMaker jobs, hosted models, and compute resources have access to. You can control access to and from your resources by configuring a VPC. For more information, see https://docs.aws.amazon.com/sagemaker/latest/dg/infrastructure-give-access.html
   */
  VpcConfig?: VpcConfig;
};
/**
 * Type definition for `AWS::SageMaker::ProcessingJob.ProcessingInputsObject`.
 * The inputs for a processing job. The processing input must specify exactly one of either S3Input or DatasetDefinition types.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-processingjob-processinginputsobject.html}
 */
export type ProcessingInputsObject = {
  /**
   * When True, input operations such as data download are managed natively by the processing job application. When False (default), input operations are managed by Amazon SageMaker.
   */
  AppManaged?: boolean;
  /**
   * Configuration for Dataset Definition inputs. The Dataset Definition input must specify exactly one of either `AthenaDatasetDefinition` or `RedshiftDatasetDefinition` types.
   */
  DatasetDefinition?: DatasetDefinition;
  /**
   * The name for the processing job input.
   */
  InputName: string;
  /**
   * Configuration for downloading input data from Amazon S3 into the processing container.
   */
  S3Input?: S3Input;
};
/**
 * Type definition for `AWS::SageMaker::ProcessingJob.ProcessingOutputConfig`.
 * Configuration for uploading output from the processing container.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-processingjob-processingoutputconfig.html}
 */
export type ProcessingOutputConfig = {
  /**
   * The AWS Key Management Service (AWS KMS) key that Amazon SageMaker uses to encrypt the processing job output. KmsKeyId can be an ID of a KMS key, ARN of a KMS key, or alias of a KMS key. The KmsKeyId is applied to all outputs.
   * @maxLength `2048`
   * @pattern `[a-zA-Z0-9:/_-]*`
   */
  KmsKeyId?: string;
  /**
   * An array of outputs configuring the data to upload from the processing container.
   * @maxLength `10`
   */
  Outputs: ProcessingOutputsObject[];
};
/**
 * Type definition for `AWS::SageMaker::ProcessingJob.ProcessingOutputsObject`.
 * Describes the results of a processing job. The processing output must specify exactly one of either S3Output or FeatureStoreOutput types.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-processingjob-processingoutputsobject.html}
 */
export type ProcessingOutputsObject = {
  /**
   * When True, output operations such as data upload are managed natively by the processing job application. When False (default), output operations are managed by Amazon SageMaker.
   */
  AppManaged?: boolean;
  /**
   * Configuration for processing job outputs in Amazon SageMaker Feature Store.
   */
  FeatureStoreOutput?: FeatureStoreOutput;
  /**
   * The name for the processing job output.
   */
  OutputName: string;
  /**
   * Configuration for uploading output data to Amazon S3 from the processing container.
   */
  S3Output?: S3Output;
};
/**
 * Type definition for `AWS::SageMaker::ProcessingJob.ProcessingResources`.
 * Identifies the resources, ML compute instances, and ML storage volumes to deploy for a processing job. In distributed training, you specify more than one instance.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-processingjob-processingresources.html}
 */
export type ProcessingResources = {
  /**
   * Configuration for the cluster used to run a processing job.
   */
  ClusterConfig: ClusterConfig;
};
/**
 * Type definition for `AWS::SageMaker::ProcessingJob.RedshiftDatasetDefinition`.
 * Configuration for Redshift Dataset Definition input.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-processingjob-redshiftdatasetdefinition.html}
 */
export type RedshiftDatasetDefinition = {
  /**
   * The Redshift cluster Identifier.
   * @maxLength `63`
   * @pattern `.*`
   */
  ClusterId: string;
  /**
   * The IAM role attached to your Redshift cluster that Amazon SageMaker uses to generate datasets.
   * @minLength `20`
   * @maxLength `2048`
   * @pattern `arn:aws[a-z\-]*:iam::\d{12}:role/?[a-zA-Z_0-9+=,.@\-_/]+`
   */
  ClusterRoleArn: string;
  /**
   * The name of the Redshift database used in Redshift query execution.
   * @maxLength `64`
   * @pattern `.*`
   */
  Database: string;
  /**
   * The database user name used in Redshift query execution.
   * @maxLength `128`
   * @pattern `.*`
   */
  DbUser: string;
  /**
   * The AWS Key Management Service (AWS KMS) key that Amazon SageMaker uses to encrypt data from a Redshift execution.
   * @minLength `0`
   * @maxLength `2048`
   * @pattern `[a-zA-Z0-9:/_-]*`
   */
  KmsKeyId?: string;
  /**
   * The compression used for Redshift query results.
   */
  OutputCompression?: "None" | "GZIP" | "SNAPPY" | "ZSTD" | "BZIP2";
  /**
   * The data storage format for Redshift query results.
   */
  OutputFormat: "PARQUET" | "CSV";
  /**
   * The location in Amazon S3 where the Redshift query results are stored.
   * @minLength `0`
   * @maxLength `1024`
   * @pattern `(https|s3)://([^/]+)/?(.*)`
   */
  OutputS3Uri: string;
  /**
   * The SQL query statements to be executed.
   * @maxLength `4096`
   * @pattern `[\s\S]+`
   */
  QueryString: string;
};
/**
 * Type definition for `AWS::SageMaker::ProcessingJob.S3Input`.
 * Configuration for downloading input data from Amazon S3 into the processing container.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-processingjob-s3input.html}
 */
export type S3Input = {
  /**
   * The local path in your container where you want Amazon SageMaker to write input data to. `LocalPath` is an absolute path to the input data and must begin with `/opt/ml/processing/`. LocalPath is a required parameter when `AppManaged` is `False` (default).
   * @minLength `0`
   * @maxLength `256`
   * @pattern `.*`
   */
  LocalPath?: string;
  /**
   * Whether to GZIP-decompress the data in Amazon S3 as it is streamed into the processing container. `Gzip` can only be used when `Pipe` mode is specified as the `S3InputMode`. In `Pipe` mode, Amazon SageMaker streams input data from the source directly to your container without using the EBS volume.
   */
  S3CompressionType?: "None" | "Gzip";
  /**
   * Whether to distribute the data from Amazon S3 to all processing instances with `FullyReplicated`, or whether the data from Amazon S3 is shared by Amazon S3 key, downloading one shard of data to each processing instance.
   */
  S3DataDistributionType?: "FullyReplicated" | "ShardedByS3Key";
  /**
   * Whether you use an S3Prefix or a ManifestFile for the data type. If you choose S3Prefix, S3Uri identifies a key name prefix. Amazon SageMaker uses all objects with the specified key name prefix for the processing job. If you choose ManifestFile, S3Uri identifies an object that is a manifest file containing a list of object keys that you want Amazon SageMaker to use for the processing job.
   */
  S3DataType: "ManifestFile" | "S3Prefix";
  /**
   * Whether to use File or Pipe input mode. In File mode, Amazon SageMaker copies the data from the input source onto the local ML storage volume before starting your processing container. This is the most commonly used input mode. In Pipe mode, Amazon SageMaker streams input data from the source directly to your processing container into named pipes without using the ML storage volume.
   */
  S3InputMode?: "File" | "Pipe";
  /**
   * The URI of the Amazon S3 prefix Amazon SageMaker downloads data required to run a processing job.
   * @minLength `0`
   * @maxLength `1024`
   * @pattern `(https|s3)://([^/]+)/?(.*)`
   */
  S3Uri: string;
};
/**
 * Type definition for `AWS::SageMaker::ProcessingJob.S3Output`.
 * Configuration for uploading output data to Amazon S3 from the processing container.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-processingjob-s3output.html}
 */
export type S3Output = {
  /**
   * The local path of a directory where you want Amazon SageMaker to upload its contents to Amazon S3. LocalPath is an absolute path to a directory containing output files. This directory will be created by the platform and exist when your container's entrypoint is invoked.
   * @minLength `0`
   * @maxLength `256`
   * @pattern `.*`
   */
  LocalPath?: string;
  /**
   * Whether to upload the results of the processing job continuously or after the job completes.
   */
  S3UploadMode: "Continuous" | "EndOfJob";
  /**
   * A URI that identifies the Amazon S3 bucket where you want Amazon SageMaker to save the results of a processing job.
   * @minLength `0`
   * @maxLength `1024`
   * @pattern `(https|s3)://([^/]+)/?(.*)`
   */
  S3Uri: string;
};
/**
 * Type definition for `AWS::SageMaker::ProcessingJob.StoppingCondition`.
 * Configures conditions under which the processing job should be stopped, such as how long the processing job has been running. After the condition is met, the processing job is stopped.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-processingjob-stoppingcondition.html}
 */
export type StoppingCondition = {
  /**
   * Specifies the maximum runtime in seconds.
   * @min `1`
   * @max `777600`
   */
  MaxRuntimeInSeconds: number;
};
/**
 * Type definition for `AWS::SageMaker::ProcessingJob.Tag`.
 * A tag object that consists of a key and an optional value, used to manage metadata for SageMaker AWS resources.
You can add tags to notebook instances, training jobs, hyperparameter tuning jobs, batch transform jobs, models, labeling jobs, work teams, endpoint configurations, and endpoints. For more information on adding tags to SageMaker resources, see AddTags(https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_AddTags.html).
For more information on adding metadata to your AWS resources with tagging, see Tagging AWS resources(https://docs.aws.amazon.com/tag-editor/latest/userguide/tagging.html). For advice on best practices for managing AWS resources with tagging, see Tagging Best Practices: Implement an Effective AWS Resource Tagging Strategy(https://d1.awsstatic.com/whitepapers/aws-tagging-best-practices.pdf).
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-processingjob-tag.html}
 */
export type Tag = {
  /**
   * The tag key. Tag keys must be unique per resource.
   * @maxLength `128`
   * @pattern `([\p{L}\p{Z}\p{N}_.:/=+\-@]*)`
   */
  Key: string;
  /**
   * The tag value.
   * @maxLength `256`
   * @pattern `([\p{L}\p{Z}\p{N}_.:/=+\-@]*)`
   */
  Value: string;
};
/**
 * Type definition for `AWS::SageMaker::ProcessingJob.VpcConfig`.
 * Specifies an Amazon Virtual Private Cloud (VPC) that your SageMaker jobs, hosted models, and compute resources have access to. You can control access to and from your resources by configuring a VPC. For more information, see https://docs.aws.amazon.com/sagemaker/latest/dg/infrastructure-give-access.html
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-processingjob-vpcconfig.html}
 */
export type VpcConfig = {
  /**
   * The VPC security group IDs, in the form 'sg-xxxxxxxx'. Specify the security groups for the VPC that is specified in the 'Subnets' field.
   * @minLength `0`
   * @maxLength `5`
   */
  SecurityGroupIds: string[];
  /**
   * The ID of the subnets in the VPC to which you want to connect your training job or model. For information about the availability of specific instance types, see https://docs.aws.amazon.com/sagemaker/latest/dg/regions-quotas.html
   * @minLength `0`
   * @maxLength `16`
   */
  Subnets: string[];
};
/**
 * Resource Type definition for AWS::SageMaker::ProcessingJob
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-processingjob.html}
 */
export class SageMakerProcessingJob extends $Resource<
  "AWS::SageMaker::ProcessingJob",
  SageMakerProcessingJobProperties,
  SageMakerProcessingJobAttributes
> {
  public static readonly Type = "AWS::SageMaker::ProcessingJob";
  constructor(
    logicalId: string,
    properties: SageMakerProcessingJobProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, SageMakerProcessingJob.Type, properties, options);
  }
}
