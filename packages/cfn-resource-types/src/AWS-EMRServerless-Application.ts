import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource schema for AWS::EMRServerless::Application Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emrserverless-application.html}
 */
export type EMRServerlessApplicationProperties = {
  /**
   * The cpu architecture of an application.
   */
  Architecture?: Architecture;
  /**
   * Configuration for Auto Start of Application.
   */
  AutoStartConfiguration?: AutoStartConfiguration;
  /**
   * Configuration for Auto Stop of Application.
   */
  AutoStopConfiguration?: AutoStopConfiguration;
  /**
   * The image configuration.
   */
  ImageConfiguration?: ImageConfigurationInput;
  /**
   * Initial capacity initialized when an Application is started.
   */
  InitialCapacity?: InitialCapacityConfigKeyValuePair[];
  /**
   * Maximum allowed cumulative resources for an Application. No new resources will be created once the limit is hit.
   */
  MaximumCapacity?: MaximumAllowedResources;
  /**
   * Monitoring configuration for batch and interactive JobRun.
   */
  MonitoringConfiguration?: MonitoringConfiguration;
  /**
   * User friendly Application name.
   * @minLength `1`
   * @maxLength `64`
   * @pattern `^[A-Za-z0-9._\/#-]+$`
   */
  Name?: string;
  /**
   * Network Configuration for customer VPC connectivity.
   */
  NetworkConfiguration?: NetworkConfiguration;
  /**
   * EMR release label.
   * @minLength `1`
   * @maxLength `64`
   * @pattern `^[A-Za-z0-9._/-]+$`
   */
  ReleaseLabel: string;
  /**
   * Runtime configuration for batch and interactive JobRun.
   */
  RuntimeConfiguration?: ConfigurationObject[];
  /**
   * Tag map with key and value
   */
  Tags?: Tag[];
  /**
   * The type of the application
   */
  Type: string;
  /**
   * The key-value pairs that specify worker type to WorkerTypeSpecificationInput. This parameter must contain all valid worker types for a Spark or Hive application. Valid worker types include Driver and Executor for Spark applications and HiveDriver and TezTask for Hive applications. You can either set image details in this parameter for each worker type, or in imageConfiguration for all worker types.
   */
  WorkerTypeSpecifications?: WorkerTypeSpecificationInputMap;
};
/**
 * Attribute type definition for `AWS::EMRServerless::Application`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emrserverless-application.html#aws-resource-emrserverless-application-return-values}
 */
export type EMRServerlessApplicationAttributes = {
  /**
   * The ID of the EMR Serverless Application.
   * @minLength `1`
   * @maxLength `64`
   */
  ApplicationId: string;
  /**
   * The Amazon Resource Name (ARN) of the EMR Serverless Application.
   * @pattern `^arn:(aws[a-zA-Z0-9-]*):emr-serverless:.+:(\d{12}):\/applications\/[0-9a-zA-Z]+$`
   */
  Arn: string;
};
/**
 * Type definition for `AWS::EMRServerless::Application.Architecture`.
 * The cpu architecture of an application.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emrserverless-application-architecture.html}
 */
export type Architecture = "ARM64" | "X86_64";
/**
 * Type definition for `AWS::EMRServerless::Application.AutoStartConfiguration`.
 * Configuration for Auto Start of Application
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emrserverless-application-autostartconfiguration.html}
 */
export type AutoStartConfiguration = {
  /**
   * If set to true, the Application will automatically start. Defaults to true.
   */
  Enabled?: boolean;
};
/**
 * Type definition for `AWS::EMRServerless::Application.AutoStopConfiguration`.
 * Configuration for Auto Stop of Application
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emrserverless-application-autostopconfiguration.html}
 */
export type AutoStopConfiguration = {
  /**
   * If set to true, the Application will automatically stop after being idle. Defaults to true.
   */
  Enabled?: boolean;
  /**
   * The amount of time [in minutes] to wait before auto stopping the Application when idle. Defaults to 15 minutes.
   */
  IdleTimeoutMinutes?: number;
};
/**
 * Type definition for `AWS::EMRServerless::Application.CloudWatchLoggingConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emrserverless-application-cloudwatchloggingconfiguration.html}
 */
export type CloudWatchLoggingConfiguration = {
  /**
   * If set to false, CloudWatch logging will be turned off. Defaults to false.
   */
  Enabled?: boolean;
  /**
   * KMS key ARN to encrypt the logs stored in given CloudWatch log-group.
   * @minLength `20`
   * @maxLength `2048`
   * @pattern `^arn:(aws[a-zA-Z0-9-]*):kms:[a-zA-Z0-9\-]*:(\d{12})?:key\/[a-zA-Z0-9-]+$`
   */
  EncryptionKeyArn?: string;
  /**
   * Log-group name to produce log-streams on CloudWatch. If undefined, logs will be produced in a default log-group /aws/emr-serverless
   * @minLength `1`
   * @maxLength `512`
   * @pattern `^[\.\-_/#A-Za-z0-9]+$`
   */
  LogGroupName?: string;
  /**
   * Log-stream name prefix by which log-stream names will start in the CloudWatch Log-group.
   * @minLength `1`
   * @maxLength `512`
   * @pattern `^[^:*]*$`
   */
  LogStreamNamePrefix?: string;
  /**
   * The specific log-streams which need to be uploaded to CloudWatch.
   */
  LogTypeMap?: LogTypeMapKeyValuePair[];
};
/**
 * Type definition for `AWS::EMRServerless::Application.ConfigurationObject`.
 * Configuration for a JobRun.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emrserverless-application-configurationobject.html}
 */
export type ConfigurationObject = {
  /**
   * String with a maximum length of 1024.
   * @minLength `1`
   * @maxLength `1024`
   * @pattern `.*\S.*`
   */
  Classification: string;
  Configurations?: ConfigurationObject[];
  Properties?: Record<string, string>;
};
/**
 * Type definition for `AWS::EMRServerless::Application.ImageConfigurationInput`.
 * The image configuration.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emrserverless-application-imageconfigurationinput.html}
 */
export type ImageConfigurationInput = {
  /**
   * The URI of an image in the Amazon ECR registry. This field is required when you create a new application. If you leave this field blank in an update, Amazon EMR will remove the image configuration.
   * @minLength `1`
   * @maxLength `1024`
   * @pattern `^([a-z0-9]+[a-z0-9-.]*)\/((?:[a-z0-9]+(?:[._-][a-z0-9]+)*\/)*[a-z0-9]+(?:[._-][a-z0-9]+)*)(?:\:([a-zA-Z0-9_][a-zA-Z0-9-._]{0,299})|@(sha256:[0-9a-f]{64}))$`
   */
  ImageUri?: string;
};
/**
 * Type definition for `AWS::EMRServerless::Application.InitialCapacityConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emrserverless-application-initialcapacityconfig.html}
 */
export type InitialCapacityConfig = {
  WorkerConfiguration: WorkerConfiguration;
  /**
   * Initial count of workers to be initialized when an Application is started. This count will be continued to be maintained until the Application is stopped
   * @min `1`
   * @max `1000000`
   */
  WorkerCount: number;
};
/**
 * Type definition for `AWS::EMRServerless::Application.InitialCapacityConfigKeyValuePair`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emrserverless-application-initialcapacityconfigkeyvaluepair.html}
 */
export type InitialCapacityConfigKeyValuePair = {
  /**
   * Worker type for an analytics framework.
   * @minLength `1`
   * @maxLength `50`
   * @pattern `^[a-zA-Z]+[-_]*[a-zA-Z]+$`
   */
  Key: string;
  Value: InitialCapacityConfig;
};
/**
 * Type definition for `AWS::EMRServerless::Application.LogTypeMapKeyValuePair`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emrserverless-application-logtypemapkeyvaluepair.html}
 */
export type LogTypeMapKeyValuePair = {
  /**
   * @minLength `1`
   * @maxLength `50`
   * @pattern `^[a-zA-Z]+[-_]*[a-zA-Z]+$`
   */
  Key: string;
  /**
   * List of Applicable values: [STDOUT, STDERR, HIVE_LOG, TEZ_AM, SYSTEM_LOGS]
   * @minLength `1`
   * @maxLength `5`
   */
  Value: string[];
};
/**
 * Type definition for `AWS::EMRServerless::Application.ManagedPersistenceMonitoringConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emrserverless-application-managedpersistencemonitoringconfiguration.html}
 */
export type ManagedPersistenceMonitoringConfiguration = {
  /**
   * If set to false, managed logging will be turned off. Defaults to true.
   */
  Enabled?: boolean;
  /**
   * KMS key ARN to encrypt the logs stored in managed persistence
   * @minLength `20`
   * @maxLength `2048`
   * @pattern `^arn:(aws[a-zA-Z0-9-]*):kms:[a-zA-Z0-9\-]*:(\d{12})?:key\/[a-zA-Z0-9-]+$`
   */
  EncryptionKeyArn?: string;
};
/**
 * Type definition for `AWS::EMRServerless::Application.MaximumAllowedResources`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emrserverless-application-maximumallowedresources.html}
 */
export type MaximumAllowedResources = {
  /**
   * Per worker CPU resource. vCPU is the only supported unit and specifying vCPU is optional.
   * @minLength `1`
   * @maxLength `15`
   * @pattern `^[1-9][0-9]*(\s)?(vCPU|vcpu|VCPU)?$`
   */
  Cpu: string;
  /**
   * Per worker Disk resource. GB is the only supported unit and specifying GB is optional
   * @minLength `1`
   * @maxLength `15`
   * @pattern `^[1-9][0-9]*(\s)?(GB|gb|gB|Gb)$`
   */
  Disk?: string;
  /**
   * Per worker memory resource. GB is the only supported unit and specifying GB is optional.
   * @minLength `1`
   * @maxLength `15`
   * @pattern `^[1-9][0-9]*(\s)?(GB|gb|gB|Gb)?$`
   */
  Memory: string;
};
/**
 * Type definition for `AWS::EMRServerless::Application.MonitoringConfiguration`.
 * Monitoring configuration for batch and interactive JobRun.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emrserverless-application-monitoringconfiguration.html}
 */
export type MonitoringConfiguration = {
  /**
   * CloudWatch logging configurations for a JobRun.
   */
  CloudWatchLoggingConfiguration?: CloudWatchLoggingConfiguration;
  /**
   * Managed log persistence configurations for a JobRun.
   */
  ManagedPersistenceMonitoringConfiguration?: ManagedPersistenceMonitoringConfiguration;
  /**
   * S3 monitoring configurations for a JobRun.
   */
  S3MonitoringConfiguration?: S3MonitoringConfiguration;
};
/**
 * Type definition for `AWS::EMRServerless::Application.NetworkConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emrserverless-application-networkconfiguration.html}
 */
export type NetworkConfiguration = {
  /**
   * The ID of the security groups in the VPC to which you want to connect your job or application.
   * @minLength `1`
   * @maxLength `5`
   */
  SecurityGroupIds?: string[];
  /**
   * The ID of the subnets in the VPC to which you want to connect your job or application.
   * @minLength `1`
   * @maxLength `16`
   */
  SubnetIds?: string[];
};
/**
 * Type definition for `AWS::EMRServerless::Application.S3MonitoringConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emrserverless-application-s3monitoringconfiguration.html}
 */
export type S3MonitoringConfiguration = {
  /**
   * KMS key ARN to encrypt the logs stored in given s3
   * @minLength `20`
   * @maxLength `2048`
   * @pattern `^arn:(aws[a-zA-Z0-9-]*):kms:[a-zA-Z0-9\-]*:(\d{12})?:key\/[a-zA-Z0-9-]+$`
   */
  EncryptionKeyArn?: string;
  /**
   * @minLength `1`
   * @maxLength `10280`
   * @pattern `[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDBFF-\uDC00\uDFFF\r\n\t]*`
   */
  LogUri?: string;
};
/**
 * Type definition for `AWS::EMRServerless::Application.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emrserverless-application-tag.html}
 */
export type Tag = {
  /**
   * The value for the tag. You can specify a value that is 1 to 128 Unicode characters in length. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @minLength `1`
   * @maxLength `128`
   * @pattern `^[A-Za-z0-9 /_.:=+@-]+$`
   */
  Key: string;
  /**
   * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @minLength `0`
   * @maxLength `256`
   * @pattern `^[A-Za-z0-9 /_.:=+@-]*$`
   */
  Value: string;
};
/**
 * Type definition for `AWS::EMRServerless::Application.WorkerConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emrserverless-application-workerconfiguration.html}
 */
export type WorkerConfiguration = {
  /**
   * Per worker CPU resource. vCPU is the only supported unit and specifying vCPU is optional.
   * @minLength `1`
   * @maxLength `15`
   * @pattern `^[1-9][0-9]*(\s)?(vCPU|vcpu|VCPU)?$`
   */
  Cpu: string;
  /**
   * Per worker Disk resource. GB is the only supported unit and specifying GB is optional
   * @minLength `1`
   * @maxLength `15`
   * @pattern `^[1-9][0-9]*(\s)?(GB|gb|gB|Gb)$`
   */
  Disk?: string;
  /**
   * Per worker DiskType resource. Shuffle optimized and Standard are only supported types and specifying diskType is optional
   * @pattern `^(SHUFFLE_OPTIMIZED|[Ss]huffle_[Oo]ptimized|STANDARD|[Ss]tandard)$`
   */
  DiskType?: string;
  /**
   * Per worker memory resource. GB is the only supported unit and specifying GB is optional.
   * @minLength `1`
   * @maxLength `15`
   * @pattern `^[1-9][0-9]*(\s)?(GB|gb|gB|Gb)?$`
   */
  Memory: string;
};
/**
 * Type definition for `AWS::EMRServerless::Application.WorkerTypeSpecificationInput`.
 * The specifications for a worker type.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emrserverless-application-workertypespecificationinput.html}
 */
export type WorkerTypeSpecificationInput = {
  /**
   * The image configuration.
   */
  ImageConfiguration?: ImageConfigurationInput;
};
/**
 * Type definition for `AWS::EMRServerless::Application.WorkerTypeSpecificationInputMap`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emrserverless-application-workertypespecificationinputmap.html}
 */
export type WorkerTypeSpecificationInputMap = Record<
  string,
  WorkerTypeSpecificationInput
>;
/**
 * Resource schema for AWS::EMRServerless::Application Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emrserverless-application.html}
 */
export class EMRServerlessApplication extends $Resource<
  "AWS::EMRServerless::Application",
  EMRServerlessApplicationProperties,
  EMRServerlessApplicationAttributes
> {
  public static readonly Type = "AWS::EMRServerless::Application";
  constructor(
    logicalId: string,
    properties: EMRServerlessApplicationProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, EMRServerlessApplication.Type, properties, options);
  }
}
