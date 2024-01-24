import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * The AWS::AutoScaling::ScheduledAction resource specifies an Amazon EC2 Auto Scaling scheduled action so that the Auto Scaling group can change the number of instances available for your application in response to predictable load changes.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-autoscaling-scheduledaction.html}
 */
export type AutoScalingScheduledActionProperties = {
  /**
   * The name of the Auto Scaling group.
   */
  AutoScalingGroupName: string;
  /**
   * The desired capacity is the initial capacity of the Auto Scaling group after the scheduled action runs and the capacity it attempts to maintain.
   */
  DesiredCapacity?: number;
  /**
   * The latest scheduled start time to return. If scheduled action names are provided, this parameter is ignored.
   */
  EndTime?: string;
  /**
   * The minimum size of the Auto Scaling group.
   */
  MaxSize?: number;
  /**
   * The minimum size of the Auto Scaling group.
   */
  MinSize?: number;
  /**
   * The recurring schedule for the action, in Unix cron syntax format. When StartTime and EndTime are specified with Recurrence , they form the boundaries of when the recurring action starts and stops.
   */
  Recurrence?: string;
  /**
   * The earliest scheduled start time to return. If scheduled action names are provided, this parameter is ignored.
   */
  StartTime?: string;
  /**
   * The time zone for the cron expression.
   */
  TimeZone?: string;
};
/**
 * Attribute type definition for `AWS::AutoScaling::ScheduledAction`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-autoscaling-scheduledaction.html#aws-resource-autoscaling-scheduledaction-return-values}
 */
export type AutoScalingScheduledActionAttributes = {
  /**
   * Auto-generated unique identifier
   */
  ScheduledActionName: string;
};
/**
 * The AWS::AutoScaling::ScheduledAction resource specifies an Amazon EC2 Auto Scaling scheduled action so that the Auto Scaling group can change the number of instances available for your application in response to predictable load changes.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-autoscaling-scheduledaction.html}
 */
export class AutoScalingScheduledAction extends $Resource<
  "AWS::AutoScaling::ScheduledAction",
  AutoScalingScheduledActionProperties,
  AutoScalingScheduledActionAttributes
> {
  public static readonly Type = "AWS::AutoScaling::ScheduledAction";
  constructor(
    logicalId: string,
    properties: AutoScalingScheduledActionProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, AutoScalingScheduledAction.Type, properties, options);
  }
}
