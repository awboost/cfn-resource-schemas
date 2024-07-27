import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::Glue::Trigger
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-trigger.html}
 */
export type GlueTriggerProperties = {
  Actions: Action[];
  Description?: string;
  EventBatchingCondition?: EventBatchingCondition;
  Name?: string;
  Predicate?: Predicate;
  Schedule?: string;
  StartOnCreation?: boolean;
  Tags?: Record<string, any>;
  Type: string;
  WorkflowName?: string;
};
/**
 * Attribute type definition for `AWS::Glue::Trigger`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-trigger.html#aws-resource-glue-trigger-return-values}
 */
export type GlueTriggerAttributes = {
  Id: string;
};
/**
 * Type definition for `AWS::Glue::Trigger.Action`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-trigger-action.html}
 */
export type Action = {
  Arguments?: Record<string, any>;
  CrawlerName?: string;
  JobName?: string;
  NotificationProperty?: NotificationProperty;
  SecurityConfiguration?: string;
  Timeout?: number;
};
/**
 * Type definition for `AWS::Glue::Trigger.Condition`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-trigger-condition.html}
 */
export type Condition = {
  CrawlState?: string;
  CrawlerName?: string;
  JobName?: string;
  LogicalOperator?: string;
  State?: string;
};
/**
 * Type definition for `AWS::Glue::Trigger.EventBatchingCondition`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-trigger-eventbatchingcondition.html}
 */
export type EventBatchingCondition = {
  BatchSize: number;
  BatchWindow?: number;
};
/**
 * Type definition for `AWS::Glue::Trigger.NotificationProperty`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-trigger-notificationproperty.html}
 */
export type NotificationProperty = {
  NotifyDelayAfter?: number;
};
/**
 * Type definition for `AWS::Glue::Trigger.Predicate`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-trigger-predicate.html}
 */
export type Predicate = {
  Conditions?: Condition[];
  Logical?: string;
};
/**
 * Resource Type definition for AWS::Glue::Trigger
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-trigger.html}
 */
export class GlueTrigger extends $Resource<
  "AWS::Glue::Trigger",
  GlueTriggerProperties,
  GlueTriggerAttributes
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
