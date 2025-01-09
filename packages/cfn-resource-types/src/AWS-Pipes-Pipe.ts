import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Definition of AWS::Pipes::Pipe Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html}
 */
export type PipesPipeProperties = {
  /**
   * @minLength `0`
   * @maxLength `512`
   * @pattern `^.*$`
   */
  Description?: string;
  DesiredState?: RequestedPipeState;
  /**
   * @minLength `0`
   * @maxLength `1600`
   * @pattern `^$|arn:(aws[a-zA-Z0-9-]*):([a-zA-Z0-9\-]+):([a-z]{2}((-gov)|(-iso([a-z]?)))?-[a-z]+-\d{1})?:(\d{12})?:(.+)$`
   */
  Enrichment?: string;
  EnrichmentParameters?: PipeEnrichmentParameters;
  /**
   * @minLength `0`
   * @maxLength `2048`
   */
  KmsKeyIdentifier?: string;
  LogConfiguration?: PipeLogConfiguration;
  /**
   * @minLength `1`
   * @maxLength `64`
   * @pattern `^[\.\-_A-Za-z0-9]+$`
   */
  Name?: string;
  /**
   * @minLength `1`
   * @maxLength `1600`
   * @pattern `^arn:(aws[a-zA-Z-]*)?:iam::\d{12}:role/?[a-zA-Z0-9+=,.@\-_/]+$`
   */
  RoleArn: string;
  /**
   * @minLength `1`
   * @maxLength `1600`
   * @pattern `^smk://(([a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9\-]*[a-zA-Z0-9])\.)*([A-Za-z0-9]|[A-Za-z0-9][A-Za-z0-9\-]*[A-Za-z0-9]):[0-9]{1,5}|arn:(aws[a-zA-Z0-9-]*):([a-zA-Z0-9\-]+):([a-z]{2}((-gov)|(-iso([a-z]?)))?-[a-z]+-\d{1})?:(\d{12})?:(.+)$`
   */
  Source: string;
  SourceParameters?: PipeSourceParameters;
  Tags?: TagMap;
  /**
   * @minLength `1`
   * @maxLength `1600`
   * @pattern `^arn:(aws[a-zA-Z0-9-]*):([a-zA-Z0-9\-]+):([a-z]{2}((-gov)|(-iso([a-z]?)))?-[a-z]+-\d{1})?:(\d{12})?:(.+)$`
   */
  Target: string;
  TargetParameters?: PipeTargetParameters;
};
/**
 * Attribute type definition for `AWS::Pipes::Pipe`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#aws-resource-pipes-pipe-return-values}
 */
export type PipesPipeAttributes = {
  /**
   * @minLength `1`
   * @maxLength `1600`
   * @pattern `^arn:aws([a-z]|\-)*:([a-zA-Z0-9\-]+):([a-z]|\d|\-)*:([0-9]{12})?:(.+)$`
   */
  Arn: string;
  CreationTime: string;
  CurrentState: PipeState;
  LastModifiedTime: string;
  /**
   * @minLength `0`
   * @maxLength `512`
   * @pattern `^.*$`
   */
  StateReason: string;
};
/**
 * Type definition for `AWS::Pipes::Pipe.AssignPublicIp`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-assignpublicip.html}
 */
export type AssignPublicIp = "ENABLED" | "DISABLED";
/**
 * Type definition for `AWS::Pipes::Pipe.AwsVpcConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-awsvpcconfiguration.html}
 */
export type AwsVpcConfiguration = {
  AssignPublicIp?: AssignPublicIp;
  /**
   * @minLength `0`
   * @maxLength `5`
   */
  SecurityGroups?: string[];
  /**
   * @minLength `0`
   * @maxLength `16`
   */
  Subnets: string[];
};
/**
 * Type definition for `AWS::Pipes::Pipe.BatchArrayProperties`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-batcharrayproperties.html}
 */
export type BatchArrayProperties = {
  /**
   * @min `2`
   * @max `10000`
   */
  Size?: number;
};
/**
 * Type definition for `AWS::Pipes::Pipe.BatchContainerOverrides`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-batchcontaineroverrides.html}
 */
export type BatchContainerOverrides = {
  Command?: string[];
  Environment?: BatchEnvironmentVariable[];
  InstanceType?: string;
  ResourceRequirements?: BatchResourceRequirement[];
};
/**
 * Type definition for `AWS::Pipes::Pipe.BatchEnvironmentVariable`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-batchenvironmentvariable.html}
 */
export type BatchEnvironmentVariable = {
  Name?: string;
  Value?: string;
};
/**
 * Type definition for `AWS::Pipes::Pipe.BatchJobDependency`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-batchjobdependency.html}
 */
export type BatchJobDependency = {
  JobId?: string;
  Type?: BatchJobDependencyType;
};
/**
 * Type definition for `AWS::Pipes::Pipe.BatchJobDependencyType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-batchjobdependencytype.html}
 */
export type BatchJobDependencyType = "N_TO_N" | "SEQUENTIAL";
/**
 * Type definition for `AWS::Pipes::Pipe.BatchParametersMap`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-batchparametersmap.html}
 */
export type BatchParametersMap = Record<string, string>;
/**
 * Type definition for `AWS::Pipes::Pipe.BatchResourceRequirement`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-batchresourcerequirement.html}
 */
export type BatchResourceRequirement = {
  Type: BatchResourceRequirementType;
  Value: string;
};
/**
 * Type definition for `AWS::Pipes::Pipe.BatchResourceRequirementType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-batchresourcerequirementtype.html}
 */
export type BatchResourceRequirementType = "GPU" | "MEMORY" | "VCPU";
/**
 * Type definition for `AWS::Pipes::Pipe.BatchRetryStrategy`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-batchretrystrategy.html}
 */
export type BatchRetryStrategy = {
  /**
   * @min `1`
   * @max `10`
   */
  Attempts?: number;
};
/**
 * Type definition for `AWS::Pipes::Pipe.CapacityProviderStrategyItem`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-capacityproviderstrategyitem.html}
 */
export type CapacityProviderStrategyItem = {
  /**
   * @min `0`
   * @max `100000`
   */
  Base?: number;
  /**
   * @minLength `1`
   * @maxLength `255`
   */
  CapacityProvider: string;
  /**
   * @min `0`
   * @max `1000`
   */
  Weight?: number;
};
/**
 * Type definition for `AWS::Pipes::Pipe.CloudwatchLogsLogDestination`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-cloudwatchlogslogdestination.html}
 */
export type CloudwatchLogsLogDestination = {
  /**
   * @minLength `1`
   * @maxLength `1600`
   * @pattern `^(^arn:aws([a-z]|\-)*:logs:([a-z]{2}((-gov)|(-iso([a-z]?)))?-[a-z]+-\d{1}):(\d{12}):log-group:.+)$`
   */
  LogGroupArn?: string;
};
/**
 * Type definition for `AWS::Pipes::Pipe.DeadLetterConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-deadletterconfig.html}
 */
export type DeadLetterConfig = {
  /**
   * @minLength `1`
   * @maxLength `1600`
   * @pattern `^arn:(aws[a-zA-Z0-9-]*):([a-zA-Z0-9\-]+):([a-z]{2}((-gov)|(-iso([a-z]?)))?-[a-z]+-\d{1})?:(\d{12})?:(.+)$`
   */
  Arn?: string;
};
/**
 * Type definition for `AWS::Pipes::Pipe.DimensionMapping`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-dimensionmapping.html}
 */
export type DimensionMapping = {
  /**
   * @minLength `1`
   * @maxLength `256`
   */
  DimensionName: string;
  /**
   * @minLength `1`
   * @maxLength `2048`
   */
  DimensionValue: string;
  DimensionValueType: DimensionValueType;
};
/**
 * Type definition for `AWS::Pipes::Pipe.DimensionValueType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-dimensionvaluetype.html}
 */
export type DimensionValueType = "VARCHAR";
/**
 * Type definition for `AWS::Pipes::Pipe.DynamoDBStreamStartPosition`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-dynamodbstreamstartposition.html}
 */
export type DynamoDBStreamStartPosition = "TRIM_HORIZON" | "LATEST";
/**
 * Type definition for `AWS::Pipes::Pipe.EcsContainerOverride`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-ecscontaineroverride.html}
 */
export type EcsContainerOverride = {
  Command?: string[];
  Cpu?: number;
  Environment?: EcsEnvironmentVariable[];
  EnvironmentFiles?: EcsEnvironmentFile[];
  Memory?: number;
  MemoryReservation?: number;
  Name?: string;
  ResourceRequirements?: EcsResourceRequirement[];
};
/**
 * Type definition for `AWS::Pipes::Pipe.EcsEnvironmentFile`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-ecsenvironmentfile.html}
 */
export type EcsEnvironmentFile = {
  Type: EcsEnvironmentFileType;
  Value: string;
};
/**
 * Type definition for `AWS::Pipes::Pipe.EcsEnvironmentFileType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-ecsenvironmentfiletype.html}
 */
export type EcsEnvironmentFileType = "s3";
/**
 * Type definition for `AWS::Pipes::Pipe.EcsEnvironmentVariable`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-ecsenvironmentvariable.html}
 */
export type EcsEnvironmentVariable = {
  Name?: string;
  Value?: string;
};
/**
 * Type definition for `AWS::Pipes::Pipe.EcsEphemeralStorage`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-ecsephemeralstorage.html}
 */
export type EcsEphemeralStorage = {
  /**
   * @min `21`
   * @max `200`
   */
  SizeInGiB: number;
};
/**
 * Type definition for `AWS::Pipes::Pipe.EcsInferenceAcceleratorOverride`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-ecsinferenceacceleratoroverride.html}
 */
export type EcsInferenceAcceleratorOverride = {
  DeviceName?: string;
  DeviceType?: string;
};
/**
 * Type definition for `AWS::Pipes::Pipe.EcsResourceRequirement`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-ecsresourcerequirement.html}
 */
export type EcsResourceRequirement = {
  Type: EcsResourceRequirementType;
  Value: string;
};
/**
 * Type definition for `AWS::Pipes::Pipe.EcsResourceRequirementType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-ecsresourcerequirementtype.html}
 */
export type EcsResourceRequirementType = "GPU" | "InferenceAccelerator";
/**
 * Type definition for `AWS::Pipes::Pipe.EcsTaskOverride`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-ecstaskoverride.html}
 */
export type EcsTaskOverride = {
  ContainerOverrides?: EcsContainerOverride[];
  Cpu?: string;
  EphemeralStorage?: EcsEphemeralStorage;
  /**
   * @minLength `1`
   * @maxLength `1600`
   * @pattern `^arn:(aws[a-zA-Z0-9-]*):([a-zA-Z0-9\-]+):([a-z]{2}((-gov)|(-iso([a-z]?)))?-[a-z]+-\d{1})?:(\d{12})?:(.+)|(\$(\.[\w/_-]+(\[(\d+|\*)\])*)*)$`
   */
  ExecutionRoleArn?: string;
  InferenceAcceleratorOverrides?: EcsInferenceAcceleratorOverride[];
  Memory?: string;
  /**
   * @minLength `1`
   * @maxLength `1600`
   * @pattern `^arn:(aws[a-zA-Z0-9-]*):([a-zA-Z0-9\-]+):([a-z]{2}((-gov)|(-iso([a-z]?)))?-[a-z]+-\d{1})?:(\d{12})?:(.+)|(\$(\.[\w/_-]+(\[(\d+|\*)\])*)*)$`
   */
  TaskRoleArn?: string;
};
/**
 * Type definition for `AWS::Pipes::Pipe.EpochTimeUnit`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-epochtimeunit.html}
 */
export type EpochTimeUnit =
  | "MILLISECONDS"
  | "SECONDS"
  | "MICROSECONDS"
  | "NANOSECONDS";
/**
 * Type definition for `AWS::Pipes::Pipe.Filter`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-filter.html}
 */
export type Filter = {
  /**
   * @minLength `0`
   * @maxLength `4096`
   */
  Pattern?: string;
};
/**
 * Type definition for `AWS::Pipes::Pipe.FilterCriteria`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-filtercriteria.html}
 */
export type FilterCriteria = {
  /**
   * @minLength `0`
   * @maxLength `5`
   */
  Filters?: Filter[];
};
/**
 * Type definition for `AWS::Pipes::Pipe.FirehoseLogDestination`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-firehoselogdestination.html}
 */
export type FirehoseLogDestination = {
  /**
   * @minLength `1`
   * @maxLength `1600`
   * @pattern `^(^arn:aws([a-z]|\-)*:firehose:([a-z]{2}((-gov)|(-iso([a-z]?)))?-[a-z]+-\d{1}):(\d{12}):deliverystream/.+)$`
   */
  DeliveryStreamArn?: string;
};
/**
 * Type definition for `AWS::Pipes::Pipe.HeaderParametersMap`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-headerparametersmap.html}
 */
export type HeaderParametersMap = Record<string, string>;
/**
 * Type definition for `AWS::Pipes::Pipe.IncludeExecutionDataOption`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-includeexecutiondataoption.html}
 */
export type IncludeExecutionDataOption = "ALL";
/**
 * Type definition for `AWS::Pipes::Pipe.KinesisStreamStartPosition`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-kinesisstreamstartposition.html}
 */
export type KinesisStreamStartPosition =
  | "TRIM_HORIZON"
  | "LATEST"
  | "AT_TIMESTAMP";
/**
 * Type definition for `AWS::Pipes::Pipe.LaunchType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-launchtype.html}
 */
export type LaunchType = "EC2" | "FARGATE" | "EXTERNAL";
/**
 * Type definition for `AWS::Pipes::Pipe.LogLevel`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-loglevel.html}
 */
export type LogLevel = "OFF" | "ERROR" | "INFO" | "TRACE";
/**
 * Type definition for `AWS::Pipes::Pipe.MeasureValueType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-measurevaluetype.html}
 */
export type MeasureValueType =
  | "DOUBLE"
  | "BIGINT"
  | "VARCHAR"
  | "BOOLEAN"
  | "TIMESTAMP";
/**
 * Type definition for `AWS::Pipes::Pipe.MQBrokerAccessCredentials`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-mqbrokeraccesscredentials.html}
 */
export type MQBrokerAccessCredentials = {
  /**
   * Optional SecretManager ARN which stores the database credentials
   * @minLength `1`
   * @maxLength `1600`
   * @pattern `^(^arn:aws([a-z]|\-)*:secretsmanager:([a-z]{2}((-gov)|(-iso([a-z]?)))?-[a-z]+-\d{1}):(\d{12}):secret:.+)$`
   */
  BasicAuth: string;
};
/**
 * Type definition for `AWS::Pipes::Pipe.MSKAccessCredentials`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-mskaccesscredentials.html}
 */
export type MSKAccessCredentials =
  | {
      /**
       * Optional SecretManager ARN which stores the database credentials
       * @minLength `1`
       * @maxLength `1600`
       * @pattern `^(^arn:aws([a-z]|\-)*:secretsmanager:([a-z]{2}((-gov)|(-iso([a-z]?)))?-[a-z]+-\d{1}):(\d{12}):secret:.+)$`
       */
      SaslScram512Auth: string;
    }
  | {
      /**
       * Optional SecretManager ARN which stores the database credentials
       * @minLength `1`
       * @maxLength `1600`
       * @pattern `^(^arn:aws([a-z]|\-)*:secretsmanager:([a-z]{2}((-gov)|(-iso([a-z]?)))?-[a-z]+-\d{1}):(\d{12}):secret:.+)$`
       */
      ClientCertificateTlsAuth: string;
    };
/**
 * Type definition for `AWS::Pipes::Pipe.MSKStartPosition`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-mskstartposition.html}
 */
export type MSKStartPosition = "TRIM_HORIZON" | "LATEST";
/**
 * Type definition for `AWS::Pipes::Pipe.MultiMeasureAttributeMapping`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-multimeasureattributemapping.html}
 */
export type MultiMeasureAttributeMapping = {
  /**
   * @minLength `1`
   * @maxLength `2048`
   */
  MeasureValue: string;
  MeasureValueType: MeasureValueType;
  /**
   * @minLength `1`
   * @maxLength `256`
   */
  MultiMeasureAttributeName: string;
};
/**
 * Type definition for `AWS::Pipes::Pipe.MultiMeasureMapping`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-multimeasuremapping.html}
 */
export type MultiMeasureMapping = {
  /**
   * @minLength `1`
   * @maxLength `256`
   */
  MultiMeasureAttributeMappings: MultiMeasureAttributeMapping[];
  /**
   * @minLength `1`
   * @maxLength `256`
   */
  MultiMeasureName: string;
};
/**
 * Type definition for `AWS::Pipes::Pipe.NetworkConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-networkconfiguration.html}
 */
export type NetworkConfiguration = {
  AwsvpcConfiguration?: AwsVpcConfiguration;
};
/**
 * Type definition for `AWS::Pipes::Pipe.OnPartialBatchItemFailureStreams`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-onpartialbatchitemfailurestreams.html}
 */
export type OnPartialBatchItemFailureStreams = "AUTOMATIC_BISECT";
/**
 * Type definition for `AWS::Pipes::Pipe.PipeEnrichmentHttpParameters`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipeenrichmenthttpparameters.html}
 */
export type PipeEnrichmentHttpParameters = {
  HeaderParameters?: HeaderParametersMap;
  PathParameterValues?: string[];
  QueryStringParameters?: QueryStringParametersMap;
};
/**
 * Type definition for `AWS::Pipes::Pipe.PipeEnrichmentParameters`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipeenrichmentparameters.html}
 */
export type PipeEnrichmentParameters = {
  HttpParameters?: PipeEnrichmentHttpParameters;
  /**
   * @minLength `0`
   * @maxLength `8192`
   */
  InputTemplate?: string;
};
/**
 * Type definition for `AWS::Pipes::Pipe.PipeLogConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipelogconfiguration.html}
 */
export type PipeLogConfiguration = {
  CloudwatchLogsLogDestination?: CloudwatchLogsLogDestination;
  FirehoseLogDestination?: FirehoseLogDestination;
  IncludeExecutionData?: IncludeExecutionDataOption[];
  Level?: LogLevel;
  S3LogDestination?: S3LogDestination;
};
/**
 * Type definition for `AWS::Pipes::Pipe.PipeSourceActiveMQBrokerParameters`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipesourceactivemqbrokerparameters.html}
 */
export type PipeSourceActiveMQBrokerParameters = {
  /**
   * @min `1`
   * @max `10000`
   */
  BatchSize?: number;
  Credentials: MQBrokerAccessCredentials;
  /**
   * @min `0`
   * @max `300`
   */
  MaximumBatchingWindowInSeconds?: number;
  /**
   * @minLength `1`
   * @maxLength `1000`
   * @pattern `^[\s\S]*$`
   */
  QueueName: string;
};
/**
 * Type definition for `AWS::Pipes::Pipe.PipeSourceDynamoDBStreamParameters`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipesourcedynamodbstreamparameters.html}
 */
export type PipeSourceDynamoDBStreamParameters = {
  /**
   * @min `1`
   * @max `10000`
   */
  BatchSize?: number;
  DeadLetterConfig?: DeadLetterConfig;
  /**
   * @min `0`
   * @max `300`
   */
  MaximumBatchingWindowInSeconds?: number;
  /**
   * @min `-1`
   * @max `604800`
   */
  MaximumRecordAgeInSeconds?: number;
  /**
   * @min `-1`
   * @max `10000`
   */
  MaximumRetryAttempts?: number;
  OnPartialBatchItemFailure?: OnPartialBatchItemFailureStreams;
  /**
   * @min `1`
   * @max `10`
   */
  ParallelizationFactor?: number;
  StartingPosition: DynamoDBStreamStartPosition;
};
/**
 * Type definition for `AWS::Pipes::Pipe.PipeSourceKinesisStreamParameters`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipesourcekinesisstreamparameters.html}
 */
export type PipeSourceKinesisStreamParameters = {
  /**
   * @min `1`
   * @max `10000`
   */
  BatchSize?: number;
  DeadLetterConfig?: DeadLetterConfig;
  /**
   * @min `0`
   * @max `300`
   */
  MaximumBatchingWindowInSeconds?: number;
  /**
   * @min `-1`
   * @max `604800`
   */
  MaximumRecordAgeInSeconds?: number;
  /**
   * @min `-1`
   * @max `10000`
   */
  MaximumRetryAttempts?: number;
  OnPartialBatchItemFailure?: OnPartialBatchItemFailureStreams;
  /**
   * @min `1`
   * @max `10`
   */
  ParallelizationFactor?: number;
  StartingPosition: KinesisStreamStartPosition;
  StartingPositionTimestamp?: string;
};
/**
 * Type definition for `AWS::Pipes::Pipe.PipeSourceManagedStreamingKafkaParameters`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipesourcemanagedstreamingkafkaparameters.html}
 */
export type PipeSourceManagedStreamingKafkaParameters = {
  /**
   * @min `1`
   * @max `10000`
   */
  BatchSize?: number;
  /**
   * @minLength `1`
   * @maxLength `200`
   * @pattern `^[a-zA-Z0-9-\/*:_+=.@-]*$`
   */
  ConsumerGroupID?: string;
  Credentials?: MSKAccessCredentials;
  /**
   * @min `0`
   * @max `300`
   */
  MaximumBatchingWindowInSeconds?: number;
  StartingPosition?: MSKStartPosition;
  /**
   * @minLength `1`
   * @maxLength `249`
   * @pattern `^[^.]([a-zA-Z0-9\-_.]+)$`
   */
  TopicName: string;
};
/**
 * Type definition for `AWS::Pipes::Pipe.PipeSourceParameters`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipesourceparameters.html}
 */
export type PipeSourceParameters = {
  ActiveMQBrokerParameters?: PipeSourceActiveMQBrokerParameters;
  DynamoDBStreamParameters?: PipeSourceDynamoDBStreamParameters;
  FilterCriteria?: FilterCriteria;
  KinesisStreamParameters?: PipeSourceKinesisStreamParameters;
  ManagedStreamingKafkaParameters?: PipeSourceManagedStreamingKafkaParameters;
  RabbitMQBrokerParameters?: PipeSourceRabbitMQBrokerParameters;
  SelfManagedKafkaParameters?: PipeSourceSelfManagedKafkaParameters;
  SqsQueueParameters?: PipeSourceSqsQueueParameters;
};
/**
 * Type definition for `AWS::Pipes::Pipe.PipeSourceRabbitMQBrokerParameters`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipesourcerabbitmqbrokerparameters.html}
 */
export type PipeSourceRabbitMQBrokerParameters = {
  /**
   * @min `1`
   * @max `10000`
   */
  BatchSize?: number;
  Credentials: MQBrokerAccessCredentials;
  /**
   * @min `0`
   * @max `300`
   */
  MaximumBatchingWindowInSeconds?: number;
  /**
   * @minLength `1`
   * @maxLength `1000`
   * @pattern `^[\s\S]*$`
   */
  QueueName: string;
  /**
   * @minLength `1`
   * @maxLength `200`
   * @pattern `^[a-zA-Z0-9-\/*:_+=.@-]*$`
   */
  VirtualHost?: string;
};
/**
 * Type definition for `AWS::Pipes::Pipe.PipeSourceSelfManagedKafkaParameters`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipesourceselfmanagedkafkaparameters.html}
 */
export type PipeSourceSelfManagedKafkaParameters = {
  /**
   * @minLength `0`
   * @maxLength `2`
   */
  AdditionalBootstrapServers?: string[];
  /**
   * @min `1`
   * @max `10000`
   */
  BatchSize?: number;
  /**
   * @minLength `1`
   * @maxLength `200`
   * @pattern `^[a-zA-Z0-9-\/*:_+=.@-]*$`
   */
  ConsumerGroupID?: string;
  Credentials?: SelfManagedKafkaAccessConfigurationCredentials;
  /**
   * @min `0`
   * @max `300`
   */
  MaximumBatchingWindowInSeconds?: number;
  /**
   * Optional SecretManager ARN which stores the database credentials
   * @minLength `1`
   * @maxLength `1600`
   * @pattern `^(^arn:aws([a-z]|\-)*:secretsmanager:([a-z]{2}((-gov)|(-iso([a-z]?)))?-[a-z]+-\d{1}):(\d{12}):secret:.+)$`
   */
  ServerRootCaCertificate?: string;
  StartingPosition?: SelfManagedKafkaStartPosition;
  /**
   * @minLength `1`
   * @maxLength `249`
   * @pattern `^[^.]([a-zA-Z0-9\-_.]+)$`
   */
  TopicName: string;
  Vpc?: SelfManagedKafkaAccessConfigurationVpc;
};
/**
 * Type definition for `AWS::Pipes::Pipe.PipeSourceSqsQueueParameters`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipesourcesqsqueueparameters.html}
 */
export type PipeSourceSqsQueueParameters = {
  /**
   * @min `1`
   * @max `10000`
   */
  BatchSize?: number;
  /**
   * @min `0`
   * @max `300`
   */
  MaximumBatchingWindowInSeconds?: number;
};
/**
 * Type definition for `AWS::Pipes::Pipe.PipeState`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipestate.html}
 */
export type PipeState =
  | "RUNNING"
  | "STOPPED"
  | "CREATING"
  | "UPDATING"
  | "DELETING"
  | "STARTING"
  | "STOPPING"
  | "CREATE_FAILED"
  | "UPDATE_FAILED"
  | "START_FAILED"
  | "STOP_FAILED"
  | "DELETE_FAILED"
  | "CREATE_ROLLBACK_FAILED"
  | "DELETE_ROLLBACK_FAILED"
  | "UPDATE_ROLLBACK_FAILED";
/**
 * Type definition for `AWS::Pipes::Pipe.PipeTargetBatchJobParameters`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipetargetbatchjobparameters.html}
 */
export type PipeTargetBatchJobParameters = {
  ArrayProperties?: BatchArrayProperties;
  ContainerOverrides?: BatchContainerOverrides;
  /**
   * @minLength `0`
   * @maxLength `20`
   */
  DependsOn?: BatchJobDependency[];
  JobDefinition: string;
  JobName: string;
  Parameters?: BatchParametersMap;
  RetryStrategy?: BatchRetryStrategy;
};
/**
 * Type definition for `AWS::Pipes::Pipe.PipeTargetCloudWatchLogsParameters`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipetargetcloudwatchlogsparameters.html}
 */
export type PipeTargetCloudWatchLogsParameters = {
  /**
   * @minLength `1`
   * @maxLength `256`
   */
  LogStreamName?: string;
  /**
   * @minLength `1`
   * @maxLength `256`
   * @pattern `^\$(\.[\w_-]+(\[(\d+|\*)\])*)*$`
   */
  Timestamp?: string;
};
/**
 * Type definition for `AWS::Pipes::Pipe.PipeTargetEcsTaskParameters`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipetargetecstaskparameters.html}
 */
export type PipeTargetEcsTaskParameters = {
  /**
   * @minLength `0`
   * @maxLength `6`
   */
  CapacityProviderStrategy?: CapacityProviderStrategyItem[];
  EnableECSManagedTags?: boolean;
  EnableExecuteCommand?: boolean;
  Group?: string;
  LaunchType?: LaunchType;
  NetworkConfiguration?: NetworkConfiguration;
  Overrides?: EcsTaskOverride;
  /**
   * @minLength `0`
   * @maxLength `10`
   */
  PlacementConstraints?: PlacementConstraint[];
  /**
   * @minLength `0`
   * @maxLength `5`
   */
  PlacementStrategy?: PlacementStrategy[];
  PlatformVersion?: string;
  PropagateTags?: PropagateTags;
  /**
   * @minLength `0`
   * @maxLength `1024`
   */
  ReferenceId?: string;
  Tags?: Tag[];
  /**
   * @min `1`
   */
  TaskCount?: number;
  /**
   * @minLength `1`
   * @maxLength `1600`
   * @pattern `^arn:(aws[a-zA-Z0-9-]*):([a-zA-Z0-9\-]+):([a-z]{2}((-gov)|(-iso([a-z]?)))?-[a-z]+-\d{1})?:(\d{12})?:(.+)|(\$(\.[\w/_-]+(\[(\d+|\*)\])*)*)$`
   */
  TaskDefinitionArn: string;
};
/**
 * Type definition for `AWS::Pipes::Pipe.PipeTargetEventBridgeEventBusParameters`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipetargeteventbridgeeventbusparameters.html}
 */
export type PipeTargetEventBridgeEventBusParameters = {
  /**
   * @minLength `1`
   * @maxLength `128`
   */
  DetailType?: string;
  /**
   * @minLength `1`
   * @maxLength `50`
   * @pattern `^[A-Za-z0-9\-]+[\.][A-Za-z0-9\-]+$`
   */
  EndpointId?: string;
  /**
   * @minLength `0`
   * @maxLength `10`
   */
  Resources?: string[];
  /**
   * @minLength `1`
   * @maxLength `256`
   * @pattern `(?=[/\.\-_A-Za-z0-9]+)((?!aws\.).*)|(\$(\.[\w/_-]+(\[(\d+|\*)\])*)*)`
   */
  Source?: string;
  /**
   * @minLength `1`
   * @maxLength `256`
   * @pattern `^\$(\.[\w/_-]+(\[(\d+|\*)\])*)*$`
   */
  Time?: string;
};
/**
 * Type definition for `AWS::Pipes::Pipe.PipeTargetHttpParameters`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipetargethttpparameters.html}
 */
export type PipeTargetHttpParameters = {
  HeaderParameters?: HeaderParametersMap;
  PathParameterValues?: string[];
  QueryStringParameters?: QueryStringParametersMap;
};
/**
 * Type definition for `AWS::Pipes::Pipe.PipeTargetInvocationType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipetargetinvocationtype.html}
 */
export type PipeTargetInvocationType = "REQUEST_RESPONSE" | "FIRE_AND_FORGET";
/**
 * Type definition for `AWS::Pipes::Pipe.PipeTargetKinesisStreamParameters`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipetargetkinesisstreamparameters.html}
 */
export type PipeTargetKinesisStreamParameters = {
  /**
   * @minLength `0`
   * @maxLength `256`
   */
  PartitionKey: string;
};
/**
 * Type definition for `AWS::Pipes::Pipe.PipeTargetLambdaFunctionParameters`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipetargetlambdafunctionparameters.html}
 */
export type PipeTargetLambdaFunctionParameters = {
  InvocationType?: PipeTargetInvocationType;
};
/**
 * Type definition for `AWS::Pipes::Pipe.PipeTargetParameters`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipetargetparameters.html}
 */
export type PipeTargetParameters = {
  BatchJobParameters?: PipeTargetBatchJobParameters;
  CloudWatchLogsParameters?: PipeTargetCloudWatchLogsParameters;
  EcsTaskParameters?: PipeTargetEcsTaskParameters;
  EventBridgeEventBusParameters?: PipeTargetEventBridgeEventBusParameters;
  HttpParameters?: PipeTargetHttpParameters;
  /**
   * @minLength `0`
   * @maxLength `8192`
   */
  InputTemplate?: string;
  KinesisStreamParameters?: PipeTargetKinesisStreamParameters;
  LambdaFunctionParameters?: PipeTargetLambdaFunctionParameters;
  RedshiftDataParameters?: PipeTargetRedshiftDataParameters;
  SageMakerPipelineParameters?: PipeTargetSageMakerPipelineParameters;
  SqsQueueParameters?: PipeTargetSqsQueueParameters;
  StepFunctionStateMachineParameters?: PipeTargetStateMachineParameters;
  TimestreamParameters?: PipeTargetTimestreamParameters;
};
/**
 * Type definition for `AWS::Pipes::Pipe.PipeTargetRedshiftDataParameters`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipetargetredshiftdataparameters.html}
 */
export type PipeTargetRedshiftDataParameters = {
  /**
   * Redshift Database
   * @minLength `1`
   * @maxLength `64`
   */
  Database: string;
  /**
   * Database user name
   * @minLength `1`
   * @maxLength `128`
   */
  DbUser?: string;
  /**
   * Optional SecretManager ARN which stores the database credentials
   * @minLength `1`
   * @maxLength `1600`
   * @pattern `^(^arn:aws([a-z]|\-)*:secretsmanager:([a-z]{2}((-gov)|(-iso([a-z]?)))?-[a-z]+-\d{1}):(\d{12}):secret:.+)|(\$(\.[\w/_-]+(\[(\d+|\*)\])*)*)$`
   */
  SecretManagerArn?: string;
  /**
   * A list of SQLs.
   * @minLength `1`
   * @maxLength `40`
   */
  Sqls: string[];
  /**
   * A name for Redshift DataAPI statement which can be used as filter of ListStatement.
   * @minLength `1`
   * @maxLength `500`
   */
  StatementName?: string;
  WithEvent?: boolean;
};
/**
 * Type definition for `AWS::Pipes::Pipe.PipeTargetSageMakerPipelineParameters`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipetargetsagemakerpipelineparameters.html}
 */
export type PipeTargetSageMakerPipelineParameters = {
  /**
   * @minLength `0`
   * @maxLength `200`
   */
  PipelineParameterList?: SageMakerPipelineParameter[];
};
/**
 * Type definition for `AWS::Pipes::Pipe.PipeTargetSqsQueueParameters`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipetargetsqsqueueparameters.html}
 */
export type PipeTargetSqsQueueParameters = {
  /**
   * @minLength `0`
   * @maxLength `100`
   */
  MessageDeduplicationId?: string;
  /**
   * @minLength `0`
   * @maxLength `100`
   */
  MessageGroupId?: string;
};
/**
 * Type definition for `AWS::Pipes::Pipe.PipeTargetStateMachineParameters`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipetargetstatemachineparameters.html}
 */
export type PipeTargetStateMachineParameters = {
  InvocationType?: PipeTargetInvocationType;
};
/**
 * Type definition for `AWS::Pipes::Pipe.PipeTargetTimestreamParameters`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipetargettimestreamparameters.html}
 */
export type PipeTargetTimestreamParameters = {
  /**
   * @minLength `1`
   * @maxLength `128`
   */
  DimensionMappings: DimensionMapping[];
  EpochTimeUnit?: EpochTimeUnit;
  /**
   * @minLength `0`
   * @maxLength `1024`
   */
  MultiMeasureMappings?: MultiMeasureMapping[];
  /**
   * @minLength `0`
   * @maxLength `8192`
   */
  SingleMeasureMappings?: SingleMeasureMapping[];
  TimeFieldType?: TimeFieldType;
  /**
   * @minLength `1`
   * @maxLength `256`
   */
  TimeValue: string;
  /**
   * @minLength `1`
   * @maxLength `256`
   */
  TimestampFormat?: string;
  /**
   * @minLength `1`
   * @maxLength `256`
   */
  VersionValue: string;
};
/**
 * Type definition for `AWS::Pipes::Pipe.PlacementConstraint`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-placementconstraint.html}
 */
export type PlacementConstraint = {
  /**
   * @minLength `0`
   * @maxLength `2000`
   */
  Expression?: string;
  Type?: PlacementConstraintType;
};
/**
 * Type definition for `AWS::Pipes::Pipe.PlacementConstraintType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-placementconstrainttype.html}
 */
export type PlacementConstraintType = "distinctInstance" | "memberOf";
/**
 * Type definition for `AWS::Pipes::Pipe.PlacementStrategy`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-placementstrategy.html}
 */
export type PlacementStrategy = {
  /**
   * @minLength `0`
   * @maxLength `255`
   */
  Field?: string;
  Type?: PlacementStrategyType;
};
/**
 * Type definition for `AWS::Pipes::Pipe.PlacementStrategyType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-placementstrategytype.html}
 */
export type PlacementStrategyType = "random" | "spread" | "binpack";
/**
 * Type definition for `AWS::Pipes::Pipe.PropagateTags`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-propagatetags.html}
 */
export type PropagateTags = "TASK_DEFINITION";
/**
 * Type definition for `AWS::Pipes::Pipe.QueryStringParametersMap`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-querystringparametersmap.html}
 */
export type QueryStringParametersMap = Record<string, string>;
/**
 * Type definition for `AWS::Pipes::Pipe.RequestedPipeState`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-requestedpipestate.html}
 */
export type RequestedPipeState = "RUNNING" | "STOPPED";
/**
 * Type definition for `AWS::Pipes::Pipe.S3LogDestination`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-s3logdestination.html}
 */
export type S3LogDestination = {
  BucketName?: string;
  BucketOwner?: string;
  OutputFormat?: S3OutputFormat;
  Prefix?: string;
};
/**
 * Type definition for `AWS::Pipes::Pipe.S3OutputFormat`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-s3outputformat.html}
 */
export type S3OutputFormat = "json" | "plain" | "w3c";
/**
 * Type definition for `AWS::Pipes::Pipe.SageMakerPipelineParameter`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-sagemakerpipelineparameter.html}
 */
export type SageMakerPipelineParameter = {
  /**
   * @minLength `1`
   * @maxLength `256`
   * @pattern `^[a-zA-Z0-9](-*[a-zA-Z0-9])*|(\$(\.[\w/_-]+(\[(\d+|\*)\])*)*)$`
   */
  Name: string;
  /**
   * @minLength `0`
   * @maxLength `1024`
   */
  Value: string;
};
/**
 * Type definition for `AWS::Pipes::Pipe.SelfManagedKafkaAccessConfigurationCredentials`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-selfmanagedkafkaaccessconfigurationcredentials.html}
 */
export type SelfManagedKafkaAccessConfigurationCredentials =
  | {
      /**
       * Optional SecretManager ARN which stores the database credentials
       * @minLength `1`
       * @maxLength `1600`
       * @pattern `^(^arn:aws([a-z]|\-)*:secretsmanager:([a-z]{2}((-gov)|(-iso([a-z]?)))?-[a-z]+-\d{1}):(\d{12}):secret:.+)$`
       */
      BasicAuth: string;
    }
  | {
      /**
       * Optional SecretManager ARN which stores the database credentials
       * @minLength `1`
       * @maxLength `1600`
       * @pattern `^(^arn:aws([a-z]|\-)*:secretsmanager:([a-z]{2}((-gov)|(-iso([a-z]?)))?-[a-z]+-\d{1}):(\d{12}):secret:.+)$`
       */
      SaslScram512Auth: string;
    }
  | {
      /**
       * Optional SecretManager ARN which stores the database credentials
       * @minLength `1`
       * @maxLength `1600`
       * @pattern `^(^arn:aws([a-z]|\-)*:secretsmanager:([a-z]{2}((-gov)|(-iso([a-z]?)))?-[a-z]+-\d{1}):(\d{12}):secret:.+)$`
       */
      SaslScram256Auth: string;
    }
  | {
      /**
       * Optional SecretManager ARN which stores the database credentials
       * @minLength `1`
       * @maxLength `1600`
       * @pattern `^(^arn:aws([a-z]|\-)*:secretsmanager:([a-z]{2}((-gov)|(-iso([a-z]?)))?-[a-z]+-\d{1}):(\d{12}):secret:.+)$`
       */
      ClientCertificateTlsAuth: string;
    };
/**
 * Type definition for `AWS::Pipes::Pipe.SelfManagedKafkaAccessConfigurationVpc`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-selfmanagedkafkaaccessconfigurationvpc.html}
 */
export type SelfManagedKafkaAccessConfigurationVpc = {
  /**
   * List of SecurityGroupId.
   * @minLength `0`
   * @maxLength `5`
   */
  SecurityGroup?: string[];
  /**
   * List of SubnetId.
   * @minLength `0`
   * @maxLength `16`
   */
  Subnets?: string[];
};
/**
 * Type definition for `AWS::Pipes::Pipe.SelfManagedKafkaStartPosition`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-selfmanagedkafkastartposition.html}
 */
export type SelfManagedKafkaStartPosition = "TRIM_HORIZON" | "LATEST";
/**
 * Type definition for `AWS::Pipes::Pipe.SingleMeasureMapping`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-singlemeasuremapping.html}
 */
export type SingleMeasureMapping = {
  /**
   * @minLength `1`
   * @maxLength `1024`
   */
  MeasureName: string;
  /**
   * @minLength `1`
   * @maxLength `2048`
   */
  MeasureValue: string;
  MeasureValueType: MeasureValueType;
};
/**
 * Type definition for `AWS::Pipes::Pipe.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-tag.html}
 */
export type Tag = {
  /**
   * @minLength `1`
   * @maxLength `128`
   */
  Key: string;
  /**
   * @minLength `0`
   * @maxLength `256`
   */
  Value: string;
};
/**
 * Type definition for `AWS::Pipes::Pipe.TagMap`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-tagmap.html}
 */
export type TagMap = Record<string, string>;
/**
 * Type definition for `AWS::Pipes::Pipe.TimeFieldType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-timefieldtype.html}
 */
export type TimeFieldType = "EPOCH" | "TIMESTAMP_FORMAT";
/**
 * Definition of AWS::Pipes::Pipe Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html}
 */
export class PipesPipe extends $Resource<
  "AWS::Pipes::Pipe",
  PipesPipeProperties,
  PipesPipeAttributes
> {
  public static readonly Type = "AWS::Pipes::Pipe";
  constructor(
    logicalId: string,
    properties: PipesPipeProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, PipesPipe.Type, properties, options);
  }
}
