import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource Type definition for AWS::Glue::Job
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-job.html}
 */
export type GlueJobProperties = {
  AllocatedCapacity?: number;
  Command: JobCommand;
  Connections?: ConnectionsList;
  DefaultArguments?: Record<string, any>;
  Description?: string;
  ExecutionClass?: string;
  ExecutionProperty?: ExecutionProperty;
  GlueVersion?: string;
  LogUri?: string;
  MaxCapacity?: number;
  MaxRetries?: number;
  Name?: string;
  NonOverridableArguments?: Record<string, any>;
  NotificationProperty?: NotificationProperty;
  NumberOfWorkers?: number;
  Role: string;
  SecurityConfiguration?: string;
  Tags?: Record<string, any>;
  Timeout?: number;
  WorkerType?: string;
};
/**
 * Attribute type definition for `AWS::Glue::Job`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-job.html#aws-resource-glue-job-return-values}
 */
export type GlueJobAttributes = {
  Id: string;
};
/**
 * Type definition for `AWS::Glue::Job.ConnectionsList`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-job-connectionslist.html}
 */
export type ConnectionsList = {
  Connections?: string[];
};
/**
 * Type definition for `AWS::Glue::Job.ExecutionProperty`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-job-executionproperty.html}
 */
export type ExecutionProperty = {
  MaxConcurrentRuns?: number;
};
/**
 * Type definition for `AWS::Glue::Job.JobCommand`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-job-jobcommand.html}
 */
export type JobCommand = {
  Name?: string;
  PythonVersion?: string;
  Runtime?: string;
  ScriptLocation?: string;
};
/**
 * Type definition for `AWS::Glue::Job.NotificationProperty`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-job-notificationproperty.html}
 */
export type NotificationProperty = {
  NotifyDelayAfter?: number;
};
/**
 * Resource Type definition for AWS::Glue::Job
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-job.html}
 */
export class GlueJob extends $Resource<
  "AWS::Glue::Job",
  GlueJobProperties,
  GlueJobAttributes
> {
  public static readonly Type = "AWS::Glue::Job";
  public static readonly AttributeNames = ["Id" as const];
  constructor(
    logicalId: string,
    properties: GlueJobProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, GlueJob.Type, properties, GlueJob.AttributeNames, options);
  }
}
