import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::SSM::MaintenanceWindowTask
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-maintenancewindowtask.html}
 */
export type SSMMaintenanceWindowTaskProperties = {
  CutoffBehavior?: string;
  Description?: string;
  LoggingInfo?: LoggingInfo;
  MaxConcurrency?: string;
  MaxErrors?: string;
  Name?: string;
  Priority: number;
  ServiceRoleArn?: string;
  Targets?: Target[];
  TaskArn: string;
  TaskInvocationParameters?: TaskInvocationParameters;
  TaskParameters?: Record<string, any>;
  TaskType: string;
  WindowId: string;
};
/**
 * Attribute type definition for `AWS::SSM::MaintenanceWindowTask`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-maintenancewindowtask.html#aws-resource-ssm-maintenancewindowtask-return-values}
 */
export type SSMMaintenanceWindowTaskAttributes = {
  Id: string;
};
/**
 * Type definition for `AWS::SSM::MaintenanceWindowTask.CloudWatchOutputConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssm-maintenancewindowtask-cloudwatchoutputconfig.html}
 */
export type CloudWatchOutputConfig = {
  CloudWatchLogGroupName?: string;
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
