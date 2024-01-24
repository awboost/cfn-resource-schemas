import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Definition of AWS::Scheduler::ScheduleGroup Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-scheduler-schedulegroup.html}
 */
export type SchedulerScheduleGroupProperties = {
  /**
   * @minLength `1`
   * @maxLength `64`
   * @pattern `^[0-9a-zA-Z-_.]+$`
   */
  Name?: string;
  /**
   * The list of tags to associate with the schedule group.
   * @minLength `0`
   * @maxLength `200`
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::Scheduler::ScheduleGroup`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-scheduler-schedulegroup.html#aws-resource-scheduler-schedulegroup-return-values}
 */
export type SchedulerScheduleGroupAttributes = {
  /**
   * The Amazon Resource Name (ARN) of the schedule group.
   * @minLength `1`
   * @maxLength `1224`
   * @pattern `^arn:aws(-[a-z]+)?:scheduler:[a-z0-9\-]+:\d{12}:schedule-group\/[0-9a-zA-Z-_.]+$`
   */
  Arn: string;
  /**
   * The time at which the schedule group was created.
   */
  CreationDate: string;
  /**
   * The time at which the schedule group was last modified.
   */
  LastModificationDate: string;
  /**
   * Specifies the state of the schedule group.
   */
  State: ScheduleGroupState;
};
/**
 * Type definition for `AWS::Scheduler::ScheduleGroup.ScheduleGroupState`.
 * Specifies the state of the schedule group.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-scheduler-schedulegroup-schedulegroupstate.html}
 */
export type ScheduleGroupState = "ACTIVE" | "DELETING";
/**
 * Type definition for `AWS::Scheduler::ScheduleGroup.Tag`.
 * Tag to associate with the resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-scheduler-schedulegroup-tag.html}
 */
export type Tag = {
  /**
   * Key for the tag
   * @minLength `1`
   * @maxLength `128`
   */
  Key: string;
  /**
   * Value for the tag
   * @minLength `1`
   * @maxLength `256`
   */
  Value: string;
};
/**
 * Definition of AWS::Scheduler::ScheduleGroup Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-scheduler-schedulegroup.html}
 */
export class SchedulerScheduleGroup extends $Resource<
  "AWS::Scheduler::ScheduleGroup",
  SchedulerScheduleGroupProperties,
  SchedulerScheduleGroupAttributes
> {
  public static readonly Type = "AWS::Scheduler::ScheduleGroup";
  constructor(
    logicalId: string,
    properties: SchedulerScheduleGroupProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, SchedulerScheduleGroup.Type, properties, options);
  }
}
