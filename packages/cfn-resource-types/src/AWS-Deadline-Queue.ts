import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::Deadline::Queue
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-deadline-queue.html}
 */
export type DeadlineQueueProperties = {
  /**
   * @minLength `0`
   * @maxLength `20`
   */
  AllowedStorageProfileIds?: string[];
  DefaultBudgetAction?: DefaultQueueBudgetAction;
  /**
   * @minLength `0`
   * @maxLength `100`
   */
  Description?: string;
  /**
   * @minLength `1`
   * @maxLength `100`
   */
  DisplayName: string;
  /**
   * @pattern `^farm-[0-9a-f]{32}$`
   */
  FarmId: string;
  JobAttachmentSettings?: JobAttachmentSettings;
  JobRunAsUser?: JobRunAsUser;
  /**
   * @minLength `0`
   * @maxLength `20`
   */
  RequiredFileSystemLocationNames?: string[];
  /**
   * @pattern `^arn:(aws[a-zA-Z-]*):iam::\d{12}:role(/[!-.0-~]+)/‍*[\w+=,.@-]+$`
   */
  RoleArn?: string;
  SchedulingConfiguration?: SchedulingConfiguration;
  /**
   * An array of key-value pairs to apply to this resource.
   * @maxLength `50`
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::Deadline::Queue`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-deadline-queue.html#aws-resource-deadline-queue-return-values}
 */
export type DeadlineQueueAttributes = {
  /**
   * @pattern `^arn:*`
   */
  Arn: string;
  /**
   * @pattern `^queue-[0-9a-f]{32}$`
   */
  QueueId: string;
};
/**
 * Type definition for `AWS::Deadline::Queue.DefaultQueueBudgetAction`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-deadline-queue-defaultqueuebudgetaction.html}
 */
export type DefaultQueueBudgetAction =
  | "NONE"
  | "STOP_SCHEDULING_AND_COMPLETE_TASKS"
  | "STOP_SCHEDULING_AND_CANCEL_TASKS";
/**
 * Type definition for `AWS::Deadline::Queue.JobAttachmentSettings`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-deadline-queue-jobattachmentsettings.html}
 */
export type JobAttachmentSettings = {
  /**
   * @minLength `1`
   * @maxLength `63`
   */
  RootPrefix: string;
  /**
   * @minLength `3`
   * @maxLength `63`
   * @pattern `(?!^(\d+\.)+\d+$)(^(([a-z0-9]|[a-z0-9][a-z0-9\-]*[a-z0-9])\.)*([a-z0-9]|[a-z0-9][a-z0-9\-]*[a-z0-9])$)`
   */
  S3BucketName: string;
};
/**
 * Type definition for `AWS::Deadline::Queue.JobRunAsUser`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-deadline-queue-jobrunasuser.html}
 */
export type JobRunAsUser = {
  Posix?: PosixUser;
  RunAs: RunAs;
  Windows?: WindowsUser;
};
/**
 * Type definition for `AWS::Deadline::Queue.PosixUser`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-deadline-queue-posixuser.html}
 */
export type PosixUser = {
  /**
   * @minLength `0`
   * @maxLength `31`
   * @pattern `^(?:[a-z][a-z0-9-]{0,30})?$`
   */
  Group: string;
  /**
   * @minLength `0`
   * @maxLength `31`
   * @pattern `^(?:[a-z][a-z0-9-]{0,30})?$`
   */
  User: string;
};
/**
 * Type definition for `AWS::Deadline::Queue.PriorityBalancedSchedulingConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-deadline-queue-prioritybalancedschedulingconfiguration.html}
 */
export type PriorityBalancedSchedulingConfiguration = {
  /**
   * @min `0`
   * @max `1000`
   */
  RenderingTaskBuffer?: number;
};
/**
 * Type definition for `AWS::Deadline::Queue.PriorityFifoSchedulingConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-deadline-queue-priorityfifoschedulingconfiguration.html}
 */
export type PriorityFifoSchedulingConfiguration = Record<string, any>;
/**
 * Type definition for `AWS::Deadline::Queue.RunAs`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-deadline-queue-runas.html}
 */
export type RunAs = "QUEUE_CONFIGURED_USER" | "WORKER_AGENT_USER";
/**
 * Type definition for `AWS::Deadline::Queue.SchedulingConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-deadline-queue-schedulingconfiguration.html}
 */
export type SchedulingConfiguration =
  | {
      PriorityFifo: PriorityFifoSchedulingConfiguration;
    }
  | {
      PriorityBalanced: PriorityBalancedSchedulingConfiguration;
    }
  | {
      WeightedBalanced: WeightedBalancedSchedulingConfiguration;
    };
/**
 * Type definition for `AWS::Deadline::Queue.SchedulingMaxPriorityOverride`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-deadline-queue-schedulingmaxpriorityoverride.html}
 */
export type SchedulingMaxPriorityOverride = {
  AlwaysScheduleFirst: SchedulingMaxPriorityOverrideAlwaysScheduleFirst;
};
/**
 * Type definition for `AWS::Deadline::Queue.SchedulingMaxPriorityOverrideAlwaysScheduleFirst`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-deadline-queue-schedulingmaxpriorityoverridealwaysschedulefirst.html}
 */
export type SchedulingMaxPriorityOverrideAlwaysScheduleFirst = Record<
  string,
  any
>;
/**
 * Type definition for `AWS::Deadline::Queue.SchedulingMinPriorityOverride`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-deadline-queue-schedulingminpriorityoverride.html}
 */
export type SchedulingMinPriorityOverride = {
  AlwaysScheduleLast: SchedulingMinPriorityOverrideAlwaysScheduleLast;
};
/**
 * Type definition for `AWS::Deadline::Queue.SchedulingMinPriorityOverrideAlwaysScheduleLast`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-deadline-queue-schedulingminpriorityoverridealwaysschedulelast.html}
 */
export type SchedulingMinPriorityOverrideAlwaysScheduleLast = Record<
  string,
  any
>;
/**
 * Type definition for `AWS::Deadline::Queue.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-deadline-queue-tag.html}
 */
export type Tag = {
  /**
   * The key name of the tag. You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @minLength `1`
   * @maxLength `127`
   */
  Key: string;
  /**
   * The value for the tag. You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @minLength `1`
   * @maxLength `255`
   */
  Value: string;
};
/**
 * Type definition for `AWS::Deadline::Queue.WeightedBalancedSchedulingConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-deadline-queue-weightedbalancedschedulingconfiguration.html}
 */
export type WeightedBalancedSchedulingConfiguration = {
  /**
   * @min `-10000`
   * @max `10000`
   */
  ErrorWeight?: number;
  MaxPriorityOverride?: SchedulingMaxPriorityOverride;
  MinPriorityOverride?: SchedulingMinPriorityOverride;
  /**
   * @min `0`
   * @max `10000`
   */
  PriorityWeight?: number;
  /**
   * @min `0`
   * @max `1000`
   */
  RenderingTaskBuffer?: number;
  /**
   * @min `-10000`
   * @max `10000`
   */
  RenderingTaskWeight?: number;
  /**
   * @min `0`
   * @max `10000`
   */
  SubmissionTimeWeight?: number;
};
/**
 * Type definition for `AWS::Deadline::Queue.WindowsUser`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-deadline-queue-windowsuser.html}
 */
export type WindowsUser = {
  /**
   * @minLength `20`
   * @maxLength `2048`
   * @pattern `^arn:(aws[a-zA-Z-]*):secretsmanager:[a-z]{2}((-gov)|(-iso(b?)))?-[a-z]+-\d{1}:\d{12}:secret:[a-zA-Z0-9-/_+=.@]{1,2028}$`
   */
  PasswordArn: string;
  /**
   * @minLength `0`
   * @maxLength `111`
   * @pattern `^[^"'/\[\]:;|=,+*?<>\s]*$`
   */
  User: string;
};
/**
 * Resource Type definition for AWS::Deadline::Queue
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-deadline-queue.html}
 */
export class DeadlineQueue extends $Resource<
  "AWS::Deadline::Queue",
  DeadlineQueueProperties,
  DeadlineQueueAttributes
> {
  public static readonly Type = "AWS::Deadline::Queue";
  constructor(
    logicalId: string,
    properties: DeadlineQueueProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, DeadlineQueue.Type, properties, options);
  }
}
