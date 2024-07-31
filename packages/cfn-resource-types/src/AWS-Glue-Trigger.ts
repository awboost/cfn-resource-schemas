import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::Glue::Trigger
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-trigger.html}
 */
export type GlueTriggerProperties = {
  /**
   * The actions initiated by this trigger.
   */
  Actions: Action[];
  /**
   * A description of this trigger.
   */
  Description?: string;
  /**
   * Batch condition that must be met (specified number of events received or batch time window expired) before EventBridge event trigger fires.
   */
  EventBatchingCondition?: EventBatchingCondition;
  /**
   * The name of the trigger.
   */
  Name?: string;
  /**
   * The predicate of this trigger, which defines when it will fire.
   */
  Predicate?: Predicate;
  /**
   * A cron expression used to specify the schedule.
   */
  Schedule?: string;
  /**
   * Set to true to start SCHEDULED and CONDITIONAL triggers when created. True is not supported for ON_DEMAND triggers.
   */
  StartOnCreation?: boolean;
  /**
   * The tags to use with this trigger.
   */
  Tags?: Record<string, any>;
  /**
   * The type of trigger that this is.
   */
  Type: string;
  /**
   * The name of the workflow associated with the trigger.
   */
  WorkflowName?: string;
};
/**
 * Type definition for `AWS::Glue::Trigger.Action`.
 * The actions initiated by this trigger.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-trigger-action.html}
 */
export type Action = {
  /**
   * The job arguments used when this trigger fires. For this job run, they replace the default arguments set in the job definition itself.
   */
  Arguments?: Record<string, any>;
  /**
   * The name of the crawler to be used with this action.
   */
  CrawlerName?: string;
  /**
   * The name of a job to be executed.
   */
  JobName?: string;
  /**
   * Specifies configuration properties of a job run notification.
   */
  NotificationProperty?: NotificationProperty;
  /**
   * The name of the SecurityConfiguration structure to be used with this action.
   */
  SecurityConfiguration?: string;
  /**
   * The JobRun timeout in minutes. This is the maximum time that a job run can consume resources before it is terminated and enters TIMEOUT status. The default is 2,880 minutes (48 hours). This overrides the timeout value set in the parent job.
   */
  Timeout?: number;
};
/**
 * Type definition for `AWS::Glue::Trigger.Condition`.
 * Defines a condition under which a trigger fires.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-trigger-condition.html}
 */
export type Condition = {
  /**
   * The state of the crawler to which this condition applies.
   */
  CrawlState?: string;
  /**
   * The name of the crawler to which this condition applies.
   */
  CrawlerName?: string;
  /**
   * The name of the job whose JobRuns this condition applies to, and on which this trigger waits.
   */
  JobName?: string;
  /**
   * A logical operator.
   */
  LogicalOperator?: string;
  /**
   * The condition state. Currently, the values supported are SUCCEEDED, STOPPED, TIMEOUT, and FAILED.
   */
  State?: string;
};
/**
 * Type definition for `AWS::Glue::Trigger.EventBatchingCondition`.
 * Batch condition that must be met (specified number of events received or batch time window expired) before EventBridge event trigger fires.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-trigger-eventbatchingcondition.html}
 */
export type EventBatchingCondition = {
  /**
   * Number of events that must be received from Amazon EventBridge before EventBridge event trigger fires.
   */
  BatchSize: number;
  /**
   * Window of time in seconds after which EventBridge event trigger fires. Window starts when first event is received.
   */
  BatchWindow?: number;
};
/**
 * Type definition for `AWS::Glue::Trigger.NotificationProperty`.
 * Specifies configuration properties of a job run notification.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-trigger-notificationproperty.html}
 */
export type NotificationProperty = {
  /**
   * After a job run starts, the number of minutes to wait before sending a job run delay notification
   */
  NotifyDelayAfter?: number;
};
/**
 * Type definition for `AWS::Glue::Trigger.Predicate`.
 * The predicate of this trigger, which defines when it will fire.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-trigger-predicate.html}
 */
export type Predicate = {
  /**
   * A list of the conditions that determine when the trigger will fire.
   */
  Conditions?: Condition[];
  /**
   * An optional field if only one condition is listed. If multiple conditions are listed, then this field is required.
   */
  Logical?: string;
};
/**
 * Resource Type definition for AWS::Glue::Trigger
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-trigger.html}
 */
export class GlueTrigger extends $Resource<
  "AWS::Glue::Trigger",
  GlueTriggerProperties,
  Record<string, never>
> {
  public static readonly Type = "AWS::Glue::Trigger";
  constructor(
    logicalId: string,
    properties: GlueTriggerProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, GlueTrigger.Type, properties, options);
  }
}
