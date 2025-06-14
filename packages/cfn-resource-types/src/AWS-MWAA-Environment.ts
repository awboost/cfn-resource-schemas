import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource schema for AWS::MWAA::Environment
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mwaa-environment.html}
 */
export type MWAAEnvironmentProperties = {
  /**
     * Key/value pairs representing Airflow configuration variables.
        Keys are prefixed by their section:
    
        [core]
        dags_folder={AIRFLOW_HOME}/dags
    
        Would be represented as
    
        "core.dags_folder": "{AIRFLOW_HOME}/dags"
     */
  AirflowConfigurationOptions?: Record<string, any>;
  /**
   * Version of airflow to deploy to the environment.
   * @maxLength `32`
   * @pattern `^[0-9a-z.]+$`
   */
  AirflowVersion?: string;
  /**
   * Represents an S3 prefix relative to the root of an S3 bucket.
   * @maxLength `1024`
   * @pattern `.*`
   */
  DagS3Path?: string;
  /**
   * Defines whether the VPC endpoints configured for the environment are created, and managed, by the customer or by Amazon MWAA.
   */
  EndpointManagement?: EndpointManagement;
  /**
   * Templated configuration for airflow processes and backing infrastructure.
   * @minLength `1`
   * @maxLength `1024`
   */
  EnvironmentClass?: string;
  /**
   * IAM role to be used by tasks.
   * @maxLength `1224`
   * @pattern `^arn:(aws|aws-us-gov|aws-cn|aws-iso|aws-iso-b)(-[a-z]+)?:iam::\d{12}:role/?[a-zA-Z_0-9+=,.@\-_/]+$`
   */
  ExecutionRoleArn?: string;
  /**
     * The identifier of the AWS Key Management Service (AWS KMS) customer master key (CMK) to use for MWAA data encryption.
    
        You can specify the CMK using any of the following:
    
        Key ID. For example, key/1234abcd-12ab-34cd-56ef-1234567890ab.
    
        Key alias. For example, alias/ExampleAlias.
    
        Key ARN. For example, arn:aws:kms:us-east-1:012345678910:key/abcd1234-a123-456a-a12b-a123b4cd56ef.
    
        Alias ARN. For example, arn:aws:kms:us-east-1:012345678910:alias/ExampleAlias.
    
        AWS authenticates the CMK asynchronously. Therefore, if you specify an ID, alias, or ARN that is not valid, the action can appear to complete, but eventually fails.
     * @maxLength `1224`
     * @pattern `^(((arn:(aws|aws-us-gov|aws-cn|aws-iso|aws-iso-b)(-[a-z]+)?:kms:[a-z]{2}-[a-z]+-\d:\d+:)?key\/)?[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}|(arn:(aws|aws-us-gov|aws-cn|aws-iso|aws-iso-b):kms:[a-z]{2}-[a-z]+-\d:\d+:)?alias/.+)$`
     */
  KmsKey?: string;
  /**
   * Logging configuration for the environment.
   */
  LoggingConfiguration?: LoggingConfiguration;
  /**
   * Maximum webserver compute units.
   * @min `1`
   */
  MaxWebservers?: number;
  /**
   * Maximum worker compute units.
   * @min `1`
   */
  MaxWorkers?: number;
  /**
   * Minimum webserver compute units.
   * @min `1`
   */
  MinWebservers?: number;
  /**
   * Minimum worker compute units.
   * @min `1`
   */
  MinWorkers?: number;
  /**
   * Customer-defined identifier for the environment, unique per customer region.
   * @minLength `1`
   * @maxLength `80`
   * @pattern `^[a-zA-Z][0-9a-zA-Z\-_]*$`
   */
  Name: string;
  /**
   * Configures the network resources of the environment.
   */
  NetworkConfiguration?: NetworkConfiguration;
  /**
   * Represents an version ID for an S3 object.
   * @maxLength `1024`
   */
  PluginsS3ObjectVersion?: string;
  /**
   * Represents an S3 prefix relative to the root of an S3 bucket.
   * @maxLength `1024`
   * @pattern `.*`
   */
  PluginsS3Path?: string;
  /**
   * Represents an version ID for an S3 object.
   * @maxLength `1024`
   */
  RequirementsS3ObjectVersion?: string;
  /**
   * Represents an S3 prefix relative to the root of an S3 bucket.
   * @maxLength `1024`
   * @pattern `.*`
   */
  RequirementsS3Path?: string;
  /**
   * Scheduler compute units.
   * @min `1`
   */
  Schedulers?: number;
  /**
   * ARN for the AWS S3 bucket to use as the source of DAGs and plugins for the environment.
   * @minLength `1`
   * @maxLength `1224`
   * @pattern `^arn:(aws|aws-us-gov|aws-cn|aws-iso|aws-iso-b)(-[a-z]+)?:s3:::[a-z0-9.\-]+$`
   */
  SourceBucketArn?: string;
  /**
   * Represents an version ID for an S3 object.
   * @maxLength `1024`
   */
  StartupScriptS3ObjectVersion?: string;
  /**
   * Represents an S3 prefix relative to the root of an S3 bucket.
   * @maxLength `1024`
   * @pattern `.*`
   */
  StartupScriptS3Path?: string;
  /**
   * A map of tags for the environment.
   */
  Tags?: Record<string, any>;
  /**
   * Choice for mode of webserver access including over public internet or via private VPC endpoint.
   */
  WebserverAccessMode?: WebserverAccessMode;
  /**
   * Start time for the weekly maintenance window.
   * @maxLength `9`
   * @pattern `(MON|TUE|WED|THU|FRI|SAT|SUN):([01]\d|2[0-3]):(00|30)`
   */
  WeeklyMaintenanceWindowStart?: string;
  /**
   * The worker replacement strategy to use when updating the environment. Valid values: `FORCED`, `GRACEFUL`. FORCED means Apache Airflow workers will be stopped and replaced without waiting for tasks to complete before an update. GRACEFUL means Apache Airflow workers will be able to complete running tasks for up to 12 hours during an update before being stopped and replaced.
   */
  WorkerReplacementStrategy?: WorkerReplacementStrategy;
};
/**
 * Attribute type definition for `AWS::MWAA::Environment`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mwaa-environment.html#aws-resource-mwaa-environment-return-values}
 */
export type MWAAEnvironmentAttributes = {
  /**
   * ARN for the MWAA environment.
   * @minLength `1`
   * @maxLength `1224`
   * @pattern `^arn:(aws|aws-us-gov|aws-cn|aws-iso|aws-iso-b)(-[a-z]+)?:airflow:[a-z0-9\-]+:\d{12}:environment/\w+`
   */
  Arn: string;
  /**
   * The celery executor queue associated with the environment.
   * @maxLength `1224`
   */
  CeleryExecutorQueue: string;
  /**
   * The database VPC endpoint service name.
   * @maxLength `1224`
   */
  DatabaseVpcEndpointService: string;
  /**
   * Logging configuration for the environment.
   */
  LoggingConfiguration: {
    /**
     * Logging configuration for a specific airflow component.
     */
    DagProcessingLogs: {
      /**
       * @maxLength `1224`
       * @pattern `^arn:(aws|aws-us-gov|aws-cn|aws-iso|aws-iso-b)(-[a-z]+)?:logs:[a-z0-9\-]+:\d{12}:log-group:\w+`
       */
      CloudWatchLogGroupArn: string;
    };
    /**
     * Logging configuration for a specific airflow component.
     */
    SchedulerLogs: {
      /**
       * @maxLength `1224`
       * @pattern `^arn:(aws|aws-us-gov|aws-cn|aws-iso|aws-iso-b)(-[a-z]+)?:logs:[a-z0-9\-]+:\d{12}:log-group:\w+`
       */
      CloudWatchLogGroupArn: string;
    };
    /**
     * Logging configuration for a specific airflow component.
     */
    TaskLogs: {
      /**
       * @maxLength `1224`
       * @pattern `^arn:(aws|aws-us-gov|aws-cn|aws-iso|aws-iso-b)(-[a-z]+)?:logs:[a-z0-9\-]+:\d{12}:log-group:\w+`
       */
      CloudWatchLogGroupArn: string;
    };
    /**
     * Logging configuration for a specific airflow component.
     */
    WebserverLogs: {
      /**
       * @maxLength `1224`
       * @pattern `^arn:(aws|aws-us-gov|aws-cn|aws-iso|aws-iso-b)(-[a-z]+)?:logs:[a-z0-9\-]+:\d{12}:log-group:\w+`
       */
      CloudWatchLogGroupArn: string;
    };
    /**
     * Logging configuration for a specific airflow component.
     */
    WorkerLogs: {
      /**
       * @maxLength `1224`
       * @pattern `^arn:(aws|aws-us-gov|aws-cn|aws-iso|aws-iso-b)(-[a-z]+)?:logs:[a-z0-9\-]+:\d{12}:log-group:\w+`
       */
      CloudWatchLogGroupArn: string;
    };
  };
  /**
   * Url endpoint for the environment's Airflow UI.
   * @minLength `1`
   * @maxLength `256`
   * @pattern `^https://.+$`
   */
  WebserverUrl: string;
  /**
   * The webserver VPC endpoint service name, applicable if private webserver access mode selected.
   * @maxLength `1224`
   */
  WebserverVpcEndpointService: string;
};
/**
 * Type definition for `AWS::MWAA::Environment.EndpointManagement`.
 * Defines whether the VPC endpoints configured for the environment are created, and managed, by the customer or by Amazon MWAA.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mwaa-environment-endpointmanagement.html}
 */
export type EndpointManagement = "CUSTOMER" | "SERVICE";
/**
 * Type definition for `AWS::MWAA::Environment.LoggingConfiguration`.
 * Logging configuration for the environment.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mwaa-environment-loggingconfiguration.html}
 */
export type LoggingConfiguration = {
  /**
   * Logging configuration for a specific airflow component.
   */
  DagProcessingLogs?: ModuleLoggingConfiguration;
  /**
   * Logging configuration for a specific airflow component.
   */
  SchedulerLogs?: ModuleLoggingConfiguration;
  /**
   * Logging configuration for a specific airflow component.
   */
  TaskLogs?: ModuleLoggingConfiguration;
  /**
   * Logging configuration for a specific airflow component.
   */
  WebserverLogs?: ModuleLoggingConfiguration;
  /**
   * Logging configuration for a specific airflow component.
   */
  WorkerLogs?: ModuleLoggingConfiguration;
};
/**
 * Type definition for `AWS::MWAA::Environment.LoggingLevel`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mwaa-environment-logginglevel.html}
 */
export type LoggingLevel = "CRITICAL" | "ERROR" | "WARNING" | "INFO" | "DEBUG";
/**
 * Type definition for `AWS::MWAA::Environment.ModuleLoggingConfiguration`.
 * Logging configuration for a specific airflow component.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mwaa-environment-moduleloggingconfiguration.html}
 */
export type ModuleLoggingConfiguration = {
  Enabled?: boolean;
  LogLevel?: LoggingLevel;
};
/**
 * Type definition for `AWS::MWAA::Environment.NetworkConfiguration`.
 * Configures the network resources of the environment.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mwaa-environment-networkconfiguration.html}
 */
export type NetworkConfiguration = {
  /**
   * A list of security groups to use for the environment.
   * @minLength `1`
   * @maxLength `5`
   */
  SecurityGroupIds?: string[];
  /**
   * A list of subnets to use for the environment. These must be private subnets, in the same VPC, in two different availability zones.
   * @minLength `2`
   * @maxLength `2`
   */
  SubnetIds?: string[];
};
/**
 * Type definition for `AWS::MWAA::Environment.WebserverAccessMode`.
 * Choice for mode of webserver access including over public internet or via private VPC endpoint.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mwaa-environment-webserveraccessmode.html}
 */
export type WebserverAccessMode = "PRIVATE_ONLY" | "PUBLIC_ONLY";
/**
 * Type definition for `AWS::MWAA::Environment.WorkerReplacementStrategy`.
 * The worker replacement strategy to use when updating the environment. Valid values: `FORCED`, `GRACEFUL`. FORCED means Apache Airflow workers will be stopped and replaced without waiting for tasks to complete before an update. GRACEFUL means Apache Airflow workers will be able to complete running tasks for up to 12 hours during an update before being stopped and replaced.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mwaa-environment-workerreplacementstrategy.html}
 */
export type WorkerReplacementStrategy = "FORCED" | "GRACEFUL";
/**
 * Resource schema for AWS::MWAA::Environment
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mwaa-environment.html}
 */
export class MWAAEnvironment extends $Resource<
  "AWS::MWAA::Environment",
  MWAAEnvironmentProperties,
  MWAAEnvironmentAttributes
> {
  public static readonly Type = "AWS::MWAA::Environment";
  constructor(
    logicalId: string,
    properties: MWAAEnvironmentProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, MWAAEnvironment.Type, properties, options);
  }
}
