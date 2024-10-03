import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::Glue::Job
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-job.html}
 */
export type GlueJobProperties = {
  /**
   * The number of capacity units that are allocated to this job.
   */
  AllocatedCapacity?: number;
  /**
   * The code that executes a job.
   */
  Command: JobCommand;
  /**
   * Specifies the connections used by a job
   */
  Connections?: ConnectionsList;
  /**
   * The default arguments for this job, specified as name-value pairs.
   */
  DefaultArguments?: Record<string, any>;
  /**
   * A description of the job.
   */
  Description?: string;
  /**
   * Indicates whether the job is run with a standard or flexible execution class.
   */
  ExecutionClass?: string;
  /**
   * The maximum number of concurrent runs that are allowed for this job.
   */
  ExecutionProperty?: ExecutionProperty;
  /**
   * Glue version determines the versions of Apache Spark and Python that AWS Glue supports.
   */
  GlueVersion?: string;
  /**
   * Property description not available.
   */
  JobMode?: string;
  /**
   * Property description not available.
   */
  JobRunQueuingEnabled?: boolean;
  /**
   * This field is reserved for future use.
   */
  LogUri?: string;
  /**
   * Property description not available.
   */
  MaintenanceWindow?: string;
  /**
   * The number of AWS Glue data processing units (DPUs) that can be allocated when this job runs.
   */
  MaxCapacity?: number;
  /**
   * The maximum number of times to retry this job after a JobRun fails
   */
  MaxRetries?: number;
  /**
   * The name you assign to the job definition
   */
  Name?: string;
  /**
   * Non-overridable arguments for this job, specified as name-value pairs.
   */
  NonOverridableArguments?: Record<string, any>;
  /**
   * Specifies configuration properties of a notification.
   */
  NotificationProperty?: NotificationProperty;
  /**
   * The number of workers of a defined workerType that are allocated when a job runs.
   */
  NumberOfWorkers?: number;
  /**
   * The name or Amazon Resource Name (ARN) of the IAM role associated with this job.
   */
  Role: string;
  /**
   * The name of the SecurityConfiguration structure to be used with this job.
   */
  SecurityConfiguration?: string;
  /**
   * The tags to use with this job.
   */
  Tags?: Record<string, any>;
  /**
   * The maximum time that a job run can consume resources before it is terminated and enters TIMEOUT status.
   */
  Timeout?: number;
  /**
   * TThe type of predefined worker that is allocated when a job runs.
   */
  WorkerType?:
    | "Standard"
    | "G.1X"
    | "G.2X"
    | "G.025X"
    | "G.4X"
    | "G.8X"
    | "Z.2X";
};
/**
 * Type definition for `AWS::Glue::Job.ConnectionsList`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-job-connectionslist.html}
 */
export type ConnectionsList = {
  /**
   * A list of connections used by the job.
   */
  Connections?: string[];
};
/**
 * Type definition for `AWS::Glue::Job.ExecutionProperty`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-job-executionproperty.html}
 */
export type ExecutionProperty = {
  /**
   * The maximum number of concurrent runs allowed for the job.
   */
  MaxConcurrentRuns?: number;
};
/**
 * Type definition for `AWS::Glue::Job.JobCommand`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-job-jobcommand.html}
 */
export type JobCommand = {
  /**
   * The name of the job command
   */
  Name?: string;
  /**
   * The Python version being used to execute a Python shell job.
   */
  PythonVersion?: string;
  /**
   * Runtime is used to specify the versions of Ray, Python and additional libraries available in your environment
   */
  Runtime?: string;
  /**
   * Specifies the Amazon Simple Storage Service (Amazon S3) path to a script that executes a job
   */
  ScriptLocation?: string;
};
/**
 * Type definition for `AWS::Glue::Job.NotificationProperty`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-job-notificationproperty.html}
 */
export type NotificationProperty = {
  /**
   * It is the number of minutes to wait before sending a job run delay notification after a job run starts
   */
  NotifyDelayAfter?: number;
};
/**
 * Resource Type definition for AWS::Glue::Job
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-job.html}
 */
export class GlueJob extends $Resource<
  "AWS::Glue::Job",
  GlueJobProperties,
  Record<string, never>
> {
  public static readonly Type = "AWS::Glue::Job";
  constructor(
    logicalId: string,
    properties: GlueJobProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, GlueJob.Type, properties, options);
  }
}
