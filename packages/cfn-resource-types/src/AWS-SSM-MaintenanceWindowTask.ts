import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::SSM::MaintenanceWindowTask
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-maintenancewindowtask.html}
 */
export type SSMMaintenanceWindowTaskProperties = {
  /**
   * The specification for whether tasks should continue to run after the cutoff time specified in the maintenance windows is reached.
   */
  CutoffBehavior?: string;
  /**
   * A description of the task.
   */
  Description?: string;
  /**
   * Information about an Amazon S3 bucket to write Run Command task-level logs to.
   */
  LoggingInfo?: LoggingInfo;
  /**
   * The maximum number of targets this task can be run for, in parallel.
   */
  MaxConcurrency?: string;
  /**
   * The maximum number of errors allowed before this task stops being scheduled.
   */
  MaxErrors?: string;
  /**
   * The task name.
   */
  Name?: string;
  /**
   * The priority of the task in the maintenance window. The lower the number, the higher the priority. Tasks that have the same priority are scheduled in parallel.
   */
  Priority: number;
  /**
   * The Amazon Resource Name (ARN) of the IAM service role for AWS Systems Manager to assume when running a maintenance window task.
   */
  ServiceRoleArn?: string;
  /**
   * The targets (either instances or window target ids).
   */
  Targets?: Target[];
  /**
   * The resource that the task uses during execution.
   */
  TaskArn: string;
  /**
   * The parameters to pass to the task when it runs. Populate only the fields that match the task type. All other fields should be empty.
   */
  TaskInvocationParameters?: TaskInvocationParameters;
  /**
   * The parameters to pass to the task when it runs.
   */
  TaskParameters?: Record<string, any>;
  /**
   * The type of task.
   */
  TaskType: string;
  /**
   * The ID of the maintenance window where the task is registered.
   */
  WindowId: string;
};
/**
 * Attribute type definition for `AWS::SSM::MaintenanceWindowTask`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-maintenancewindowtask.html#aws-resource-ssm-maintenancewindowtask-return-values}
 */
export type SSMMaintenanceWindowTaskAttributes = {
  /**
   * Unique identifier of the maintenance window task.
   */
  WindowTaskId: string;
};
/**
 * Type definition for `AWS::SSM::MaintenanceWindowTask.CloudWatchOutputConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssm-maintenancewindowtask-cloudwatchoutputconfig.html}
 */
export type CloudWatchOutputConfig = {
  /**
   * The name of the CloudWatch log group where you want to send command output.
   */
  CloudWatchLogGroupName?: string;
  /**
   * Enables Systems Manager to send command output to CloudWatch Logs.
   */
  CloudWatchOutputEnabled?: boolean;
};
/**
 * Type definition for `AWS::SSM::MaintenanceWindowTask.LoggingInfo`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssm-maintenancewindowtask-logginginfo.html}
 */
export type LoggingInfo = {
  Region: string;
  S3Bucket: string;
  S3Prefix?: string;
};
/**
 * Type definition for `AWS::SSM::MaintenanceWindowTask.MaintenanceWindowAutomationParameters`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssm-maintenancewindowtask-maintenancewindowautomationparameters.html}
 */
export type MaintenanceWindowAutomationParameters = {
  DocumentVersion?: string;
  Parameters?: Record<string, any>;
};
/**
 * Type definition for `AWS::SSM::MaintenanceWindowTask.MaintenanceWindowLambdaParameters`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssm-maintenancewindowtask-maintenancewindowlambdaparameters.html}
 */
export type MaintenanceWindowLambdaParameters = {
  ClientContext?: string;
  Payload?: string;
  Qualifier?: string;
};
/**
 * Type definition for `AWS::SSM::MaintenanceWindowTask.MaintenanceWindowRunCommandParameters`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssm-maintenancewindowtask-maintenancewindowruncommandparameters.html}
 */
export type MaintenanceWindowRunCommandParameters = {
  CloudWatchOutputConfig?: CloudWatchOutputConfig;
  Comment?: string;
  DocumentHash?: string;
  DocumentHashType?: string;
  DocumentVersion?: string;
  NotificationConfig?: NotificationConfig;
  OutputS3BucketName?: string;
  OutputS3KeyPrefix?: string;
  Parameters?: Record<string, any>;
  ServiceRoleArn?: string;
  TimeoutSeconds?: number;
};
/**
 * Type definition for `AWS::SSM::MaintenanceWindowTask.MaintenanceWindowStepFunctionsParameters`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssm-maintenancewindowtask-maintenancewindowstepfunctionsparameters.html}
 */
export type MaintenanceWindowStepFunctionsParameters = {
  Input?: string;
  Name?: string;
};
/**
 * Type definition for `AWS::SSM::MaintenanceWindowTask.NotificationConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssm-maintenancewindowtask-notificationconfig.html}
 */
export type NotificationConfig = {
  NotificationArn: string;
  NotificationEvents?: string[];
  NotificationType?: string;
};
/**
 * Type definition for `AWS::SSM::MaintenanceWindowTask.Target`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssm-maintenancewindowtask-target.html}
 */
export type Target = {
  Key: string;
  Values: string[];
};
/**
 * Type definition for `AWS::SSM::MaintenanceWindowTask.TaskInvocationParameters`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssm-maintenancewindowtask-taskinvocationparameters.html}
 */
export type TaskInvocationParameters = {
  MaintenanceWindowAutomationParameters?: MaintenanceWindowAutomationParameters;
  MaintenanceWindowLambdaParameters?: MaintenanceWindowLambdaParameters;
  MaintenanceWindowRunCommandParameters?: MaintenanceWindowRunCommandParameters;
  MaintenanceWindowStepFunctionsParameters?: MaintenanceWindowStepFunctionsParameters;
};
/**
 * Resource Type definition for AWS::SSM::MaintenanceWindowTask
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-maintenancewindowtask.html}
 */
export class SSMMaintenanceWindowTask extends $Resource<
  "AWS::SSM::MaintenanceWindowTask",
  SSMMaintenanceWindowTaskProperties,
  SSMMaintenanceWindowTaskAttributes
> {
  public static readonly Type = "AWS::SSM::MaintenanceWindowTask";
  constructor(
    logicalId: string,
    properties: SSMMaintenanceWindowTaskProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, SSMMaintenanceWindowTask.Type, properties, options);
  }
}
