import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource schema for AWS::DataSync::Task.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-task.html}
 */
export type DataSyncTaskProperties = {
  /**
   * The ARN of the Amazon CloudWatch log group that is used to monitor and log events in the task.
   * @maxLength `562`
   * @pattern `^arn:(aws|aws-cn|aws-us-gov|aws-iso|aws-iso-b):logs:[a-z\-0-9]*:[0-9]{12}:log-group:([^:\*]*)(:\*)?$`
   */
  CloudWatchLogGroupArn?: string;
  /**
   * The ARN of an AWS storage resource's location.
   * @maxLength `128`
   * @pattern `^arn:(aws|aws-cn|aws-us-gov|aws-iso|aws-iso-b):datasync:[a-z\-0-9]+:[0-9]{12}:location/loc-[0-9a-z]{17}$`
   */
  DestinationLocationArn: string;
  /**
   * @minLength `0`
   * @maxLength `1`
   */
  Excludes?: FilterRule[];
  /**
   * @minLength `0`
   * @maxLength `1`
   */
  Includes?: FilterRule[];
  /**
   * Configures a manifest, which is a list of files or objects that you want DataSync to transfer.
   */
  ManifestConfig?: ManifestConfig;
  /**
   * The name of a task. This value is a text reference that is used to identify the task in the console.
   * @minLength `1`
   * @maxLength `256`
   * @pattern `^[a-zA-Z0-9\s+=._:@/-]+$`
   */
  Name?: string;
  /**
   * Represents the options that are available to control the behavior of a StartTaskExecution operation.
   */
  Options?: Options;
  /**
   * Specifies the schedule you want your task to use for repeated executions.
   */
  Schedule?: TaskSchedule;
  /**
   * The ARN of the source location for the task.
   * @maxLength `128`
   * @pattern `^arn:(aws|aws-cn|aws-us-gov|aws-iso|aws-iso-b):datasync:[a-z\-0-9]+:[0-9]{12}:location/loc-[0-9a-z]{17}$`
   */
  SourceLocationArn: string;
  /**
   * An array of key-value pairs to apply to this resource.
   * @maxLength `50`
   */
  Tags?: Tag[];
  /**
   * Specifies how you want to configure a task report, which provides detailed information about for your Datasync transfer.
   */
  TaskReportConfig?: TaskReportConfig;
};
/**
 * Attribute type definition for `AWS::DataSync::Task`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-task.html#aws-resource-datasync-task-return-values}
 */
export type DataSyncTaskAttributes = {
  /**
   * The Amazon Resource Names (ARNs) of the destination ENIs (Elastic Network Interfaces) that were created for your subnet.
   * @maxLength `128`
   */
  DestinationNetworkInterfaceArns: string[];
  /**
   * The Amazon Resource Names (ARNs) of the source ENIs (Elastic Network Interfaces) that were created for your subnet.
   * @maxLength `128`
   */
  SourceNetworkInterfaceArns: string[];
  /**
   * The status of the task that was described.
   */
  Status: "AVAILABLE" | "CREATING" | "QUEUED" | "RUNNING" | "UNAVAILABLE";
  /**
   * The ARN of the task.
   * @maxLength `128`
   * @pattern `^arn:(aws|aws-cn|aws-us-gov|aws-iso|aws-iso-b):datasync:[a-z\-0-9]*:[0-9]{12}:task/task-[0-9a-f]{17}$`
   */
  TaskArn: string;
};
/**
 * Type definition for `AWS::DataSync::Task.FilterRule`.
 * Specifies which files folders and objects to include or exclude when transferring files from source to destination.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datasync-task-filterrule.html}
 */
export type FilterRule = {
  /**
   * The type of filter rule to apply. AWS DataSync only supports the SIMPLE_PATTERN rule type.
   * @maxLength `128`
   * @pattern `^[A-Z0-9_]+$`
   */
  FilterType?: "SIMPLE_PATTERN";
  /**
   * A single filter string that consists of the patterns to include or exclude. The patterns are delimited by "|".
   * @maxLength `409600`
   * @pattern `^[^\x00]+$`
   */
  Value?: string;
};
/**
 * Type definition for `AWS::DataSync::Task.ManifestConfig`.
 * Configures a manifest, which is a list of files or objects that you want DataSync to transfer.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datasync-task-manifestconfig.html}
 */
export type ManifestConfig = {
  /**
   * Specifies what DataSync uses the manifest for.
   */
  Action?: "TRANSFER";
  /**
   * Specifies the file format of your manifest.
   */
  Format?: "CSV";
  /**
   * Specifies the manifest that you want DataSync to use and where it's hosted.
   */
  Source: {
    /**
     * Specifies the S3 bucket where you're hosting the manifest that you want AWS DataSync to use.
     */
    S3?: ManifestConfigSourceS3;
  };
};
/**
 * Type definition for `AWS::DataSync::Task.ManifestConfigSourceS3`.
 * Specifies the S3 bucket where you're hosting the manifest that you want AWS DataSync to use.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datasync-task-manifestconfigsources3.html}
 */
export type ManifestConfigSourceS3 = {
  /**
   * Specifies the AWS Identity and Access Management (IAM) role that allows DataSync to access your manifest.
   * @maxLength `2048`
   * @pattern `^arn:(aws|aws-cn|aws-us-gov|aws-iso|aws-iso-b):iam::[0-9]{12}:role/.*$`
   */
  BucketAccessRoleArn?: string;
  /**
   * Specifies the Amazon S3 object key of your manifest.
   * @maxLength `1024`
   * @pattern `^[\p{L}\p{M}\p{Z}\p{S}\p{N}\p{P}\p{C}]*$`
   */
  ManifestObjectPath?: string;
  /**
   * Specifies the object version ID of the manifest that you want DataSync to use.
   * @maxLength `100`
   * @pattern `^.+$`
   */
  ManifestObjectVersionId?: string;
  /**
   * Specifies the Amazon Resource Name (ARN) of the S3 bucket where you're hosting your manifest.
   * @maxLength `156`
   * @pattern `^arn:(aws|aws-cn|aws-us-gov|aws-iso|aws-iso-b):(s3|s3-outposts):[a-z\-0-9]*:[0-9]*:.*$`
   */
  S3BucketArn?: string;
};
/**
 * Type definition for `AWS::DataSync::Task.Options`.
 * Represents the options that are available to control the behavior of a StartTaskExecution operation.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datasync-task-options.html}
 */
export type Options = {
  /**
   * A file metadata value that shows the last time a file was accessed (that is, when the file was read or written to).
   */
  Atime?: "NONE" | "BEST_EFFORT";
  /**
   * A value that limits the bandwidth used by AWS DataSync.
   * @min `-1`
   */
  BytesPerSecond?: number;
  /**
   * The group ID (GID) of the file's owners.
   */
  Gid?: "NONE" | "INT_VALUE" | "NAME" | "BOTH";
  /**
   * A value that determines the types of logs that DataSync publishes to a log stream in the Amazon CloudWatch log group that you provide.
   */
  LogLevel?: "OFF" | "BASIC" | "TRANSFER";
  /**
   * A value that indicates the last time that a file was modified (that is, a file was written to) before the PREPARING phase.
   */
  Mtime?: "NONE" | "PRESERVE";
  /**
   * A value that determines whether object tags should be read from the source object store and written to the destination object store.
   */
  ObjectTags?: "PRESERVE" | "NONE";
  /**
   * A value that determines whether files at the destination should be overwritten or preserved when copying files.
   */
  OverwriteMode?: "ALWAYS" | "NEVER";
  /**
   * A value that determines which users or groups can access a file for a specific purpose such as reading, writing, or execution of the file.
   */
  PosixPermissions?: "NONE" | "PRESERVE";
  /**
   * A value that specifies whether files in the destination that don't exist in the source file system should be preserved.
   */
  PreserveDeletedFiles?: "PRESERVE" | "REMOVE";
  /**
   * A value that determines whether AWS DataSync should preserve the metadata of block and character devices in the source file system, and recreate the files with that device name and metadata on the destination.
   */
  PreserveDevices?: "NONE" | "PRESERVE";
  /**
   * A value that determines which components of the SMB security descriptor are copied during transfer.
   */
  SecurityDescriptorCopyFlags?: "NONE" | "OWNER_DACL" | "OWNER_DACL_SACL";
  /**
   * A value that determines whether tasks should be queued before executing the tasks.
   */
  TaskQueueing?: "ENABLED" | "DISABLED";
  /**
   * A value that determines whether DataSync transfers only the data and metadata that differ between the source and the destination location, or whether DataSync transfers all the content from the source, without comparing to the destination location.
   */
  TransferMode?: "CHANGED" | "ALL";
  /**
   * The user ID (UID) of the file's owner.
   */
  Uid?: "NONE" | "INT_VALUE" | "NAME" | "BOTH";
  /**
   * A value that determines whether a data integrity verification should be performed at the end of a task execution after all data and metadata have been transferred.
   */
  VerifyMode?: "POINT_IN_TIME_CONSISTENT" | "ONLY_FILES_TRANSFERRED" | "NONE";
};
/**
 * Type definition for `AWS::DataSync::Task.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datasync-task-tag.html}
 */
export type Tag = {
  /**
   * The key for an AWS resource tag.
   * @minLength `1`
   * @maxLength `256`
   * @pattern `^[a-zA-Z0-9\s+=._:/-]+$`
   */
  Key: string;
  /**
   * The value for an AWS resource tag.
   * @minLength `1`
   * @maxLength `256`
   * @pattern `^[a-zA-Z0-9\s+=._:@/-]+$`
   */
  Value: string;
};
/**
 * Type definition for `AWS::DataSync::Task.TaskReportConfig`.
 * Specifies how you want to configure a task report, which provides detailed information about for your Datasync transfer.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datasync-task-taskreportconfig.html}
 */
export type TaskReportConfig = {
  /**
   * Specifies where DataSync uploads your task report.
   */
  Destination: {
    /**
     * Specifies the Amazon S3 bucket where DataSync uploads your task report.
     */
    S3?: TaskReportConfigDestinationS3;
  };
  /**
   * Specifies whether your task report includes the new version of each object transferred into an S3 bucket, this only applies if you enable versioning on your bucket.
   */
  ObjectVersionIds?: "INCLUDE" | "NONE";
  /**
   * Specifies the type of task report that you want.
   */
  OutputType: "SUMMARY_ONLY" | "STANDARD";
  /**
   * Customizes the reporting level for aspects of your task report. For example, your report might generally only include errors, but you could specify that you want a list of successes and errors just for the files that Datasync attempted to delete in your destination location.
   */
  Overrides?: {
    /**
     * Specifies the level of reporting for the files, objects, and directories that Datasync attempted to delete in your destination location. This only applies if you configure your task to delete data in the destination that isn't in the source.
     */
    Deleted?: {
      /**
       * Specifies whether you want your task report to include only what went wrong with your transfer or a list of what succeeded and didn't.
       */
      ReportLevel?: "ERRORS_ONLY" | "SUCCESSES_AND_ERRORS";
    };
    /**
     * Specifies the level of reporting for the files, objects, and directories that Datasync attempted to skip during your transfer.
     */
    Skipped?: {
      /**
       * Specifies whether you want your task report to include only what went wrong with your transfer or a list of what succeeded and didn't.
       */
      ReportLevel?: "ERRORS_ONLY" | "SUCCESSES_AND_ERRORS";
    };
    /**
     * Specifies the level of reporting for the files, objects, and directories that Datasync attempted to transfer.
     */
    Transferred?: {
      /**
       * Specifies whether you want your task report to include only what went wrong with your transfer or a list of what succeeded and didn't.
       */
      ReportLevel?: "ERRORS_ONLY" | "SUCCESSES_AND_ERRORS";
    };
    /**
     * Specifies the level of reporting for the files, objects, and directories that Datasync attempted to verify at the end of your transfer. This only applies if you configure your task to verify data during and after the transfer (which Datasync does by default)
     */
    Verified?: {
      /**
       * Specifies whether you want your task report to include only what went wrong with your transfer or a list of what succeeded and didn't.
       */
      ReportLevel?: "ERRORS_ONLY" | "SUCCESSES_AND_ERRORS";
    };
  };
  /**
   * Specifies whether you want your task report to include only what went wrong with your transfer or a list of what succeeded and didn't.
   */
  ReportLevel?: "ERRORS_ONLY" | "SUCCESSES_AND_ERRORS";
};
/**
 * Type definition for `AWS::DataSync::Task.TaskReportConfigDestinationS3`.
 * Specifies the Amazon S3 bucket where DataSync uploads your task report.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datasync-task-taskreportconfigdestinations3.html}
 */
export type TaskReportConfigDestinationS3 = {
  /**
   * Specifies the Amazon Resource Name (ARN) of the IAM policy that allows Datasync to upload a task report to your S3 bucket.
   * @maxLength `2048`
   * @pattern `^arn:(aws|aws-cn|aws-us-gov|aws-iso|aws-iso-b):iam::[0-9]{12}:role/.*$`
   */
  BucketAccessRoleArn?: string;
  /**
   * Specifies the ARN of the S3 bucket where Datasync uploads your report.
   * @maxLength `156`
   * @pattern `^arn:(aws|aws-cn|aws-us-gov|aws-iso|aws-iso-b):(s3|s3-outposts):[a-z\-0-9]*:[0-9]*:.*$`
   */
  S3BucketArn?: string;
  /**
   * Specifies a bucket prefix for your report.
   * @maxLength `4096`
   * @pattern `^[a-zA-Z0-9_\-\+\./\(\)\p{Zs}]*$`
   */
  Subdirectory?: string;
};
/**
 * Type definition for `AWS::DataSync::Task.TaskSchedule`.
 * Specifies the schedule you want your task to use for repeated executions.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datasync-task-taskschedule.html}
 */
export type TaskSchedule = {
  /**
   * A cron expression that specifies when AWS DataSync initiates a scheduled transfer from a source to a destination location
   * @maxLength `256`
   * @pattern `^[a-zA-Z0-9\ \_\*\?\,\|\^\-\/\#\s\(\)\+]*$`
   */
  ScheduleExpression?: string;
  /**
   * Specifies status of a schedule.
   */
  Status?: "ENABLED" | "DISABLED";
};
/**
 * Resource schema for AWS::DataSync::Task.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-task.html}
 */
export class DataSyncTask extends $Resource<
  "AWS::DataSync::Task",
  DataSyncTaskProperties,
  DataSyncTaskAttributes
> {
  public static readonly Type = "AWS::DataSync::Task";
  constructor(
    logicalId: string,
    properties: DataSyncTaskProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, DataSyncTask.Type, properties, options);
  }
}
