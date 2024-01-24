import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::ApplicationAutoScaling::ScalableTarget
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-applicationautoscaling-scalabletarget.html}
 */
export type ApplicationAutoScalingScalableTargetProperties = {
  /**
   * The maximum value that you plan to scale in to. When a scaling policy is in effect, Application Auto Scaling can scale in (contract) as needed to the minimum capacity limit in response to changing demand
   */
  MaxCapacity: number;
  /**
   * The minimum value that you plan to scale in to. When a scaling policy is in effect, Application Auto Scaling can scale in (contract) as needed to the minimum capacity limit in response to changing demand
   */
  MinCapacity: number;
  /**
   * The identifier of the resource associated with the scalable target
   */
  ResourceId: string;
  /**
   * Specify the Amazon Resource Name (ARN) of an Identity and Access Management (IAM) role that allows Application Auto Scaling to modify the scalable target on your behalf.
   */
  RoleARN?: string;
  /**
   * The scalable dimension associated with the scalable target. This string consists of the service namespace, resource type, and scaling property
   */
  ScalableDimension: string;
  /**
   * The scheduled actions for the scalable target. Duplicates aren't allowed.
   */
  ScheduledActions?: ScheduledAction[];
  /**
   * The namespace of the AWS service that provides the resource, or a custom-resource
   */
  ServiceNamespace: string;
  /**
   * An embedded object that contains attributes and attribute values that are used to suspend and resume automatic scaling. Setting the value of an attribute to true suspends the specified scaling activities. Setting it to false (default) resumes the specified scaling activities.
   */
  SuspendedState?: SuspendedState;
};
/**
 * Attribute type definition for `AWS::ApplicationAutoScaling::ScalableTarget`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-applicationautoscaling-scalabletarget.html#aws-resource-applicationautoscaling-scalabletarget-return-values}
 */
export type ApplicationAutoScalingScalableTargetAttributes = {
  /**
   * This value can be returned by using the Ref function. Ref returns the Cloudformation generated ID of the resource in format - ResourceId|ScalableDimension|ServiceNamespace
   */
  Id: string;
};
/**
 * Type definition for `AWS::ApplicationAutoScaling::ScalableTarget.ScalableTargetAction`.
 * specifies the minimum and maximum capacity
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationautoscaling-scalabletarget-scalabletargetaction.html}
 */
export type ScalableTargetAction = {
  MaxCapacity?: number;
  MinCapacity?: number;
};
/**
 * Type definition for `AWS::ApplicationAutoScaling::ScalableTarget.ScheduledAction`.
 * specifies a scheduled action for a scalable target
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationautoscaling-scalabletarget-scheduledaction.html}
 */
export type ScheduledAction = {
  EndTime?: string;
  /**
   * specifies the minimum and maximum capacity
   */
  ScalableTargetAction?: ScalableTargetAction;
  Schedule: string;
  ScheduledActionName: string;
  StartTime?: string;
  Timezone?: string;
};
/**
 * Type definition for `AWS::ApplicationAutoScaling::ScalableTarget.SuspendedState`.
 * specifies whether the scaling activities for a scalable target are in a suspended state
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationautoscaling-scalabletarget-suspendedstate.html}
 */
export type SuspendedState = {
  DynamicScalingInSuspended?: boolean;
  DynamicScalingOutSuspended?: boolean;
  ScheduledScalingSuspended?: boolean;
};
/**
 * Resource Type definition for AWS::ApplicationAutoScaling::ScalableTarget
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-applicationautoscaling-scalabletarget.html}
 */
export class ApplicationAutoScalingScalableTarget extends $Resource<
  "AWS::ApplicationAutoScaling::ScalableTarget",
  ApplicationAutoScalingScalableTargetProperties,
  ApplicationAutoScalingScalableTargetAttributes
> {
  public static readonly Type = "AWS::ApplicationAutoScaling::ScalableTarget";
  constructor(
    logicalId: string,
    properties: ApplicationAutoScalingScalableTargetProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      ApplicationAutoScalingScalableTarget.Type,
      properties,
      options,
    );
  }
}
