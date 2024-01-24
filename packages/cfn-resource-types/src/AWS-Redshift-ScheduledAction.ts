import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * The `AWS::Redshift::ScheduledAction` resource creates an Amazon Redshift Scheduled Action.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-scheduledaction.html}
 */
export type RedshiftScheduledActionProperties = {
  /**
   * If true, the schedule is enabled. If false, the scheduled action does not trigger.
   */
  Enable?: boolean;
  /**
   * The end time in UTC of the scheduled action. After this time, the scheduled action does not trigger.
   */
  EndTime?: string;
  /**
   * The IAM role to assume to run the target action.
   */
  IamRole?: string;
  /**
   * The schedule in `at( )` or `cron( )` format.
   */
  Schedule?: string;
  /**
   * The description of the scheduled action.
   * @pattern `^(?=^[\x09\x0a\x0d\x20-\xff]*$).{1,255}$`
   */
  ScheduledActionDescription?: string;
  /**
   * The name of the scheduled action. The name must be unique within an account.
   * @pattern `^(?=^[a-z][a-z0-9]*(-[a-z0-9]+)*$).{1,60}$`
   */
  ScheduledActionName: string;
  /**
   * The start time in UTC of the scheduled action. Before this time, the scheduled action does not trigger.
   */
  StartTime?: string;
  /**
   * A JSON format string of the Amazon Redshift API operation with input parameters.
   */
  TargetAction?: ScheduledActionType;
};
/**
 * Attribute type definition for `AWS::Redshift::ScheduledAction`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-scheduledaction.html#aws-resource-redshift-scheduledaction-return-values}
 */
export type RedshiftScheduledActionAttributes = {
  /**
   * List of times when the scheduled action will run.
   */
  NextInvocations: string[];
  /**
   * The state of the scheduled action.
   */
  State: "ACTIVE" | "DISABLED";
};
/**
 * Type definition for `AWS::Redshift::ScheduledAction.PauseClusterMessage`.
 * Describes a pause cluster operation. For example, a scheduled action to run the `PauseCluster` API operation.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-redshift-scheduledaction-pauseclustermessage.html}
 */
export type PauseClusterMessage = {
  ClusterIdentifier: string;
};
/**
 * Type definition for `AWS::Redshift::ScheduledAction.ResizeClusterMessage`.
 * Describes a resize cluster operation. For example, a scheduled action to run the `ResizeCluster` API operation.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-redshift-scheduledaction-resizeclustermessage.html}
 */
export type ResizeClusterMessage = {
  Classic?: boolean;
  ClusterIdentifier: string;
  ClusterType?: string;
  NodeType?: string;
  NumberOfNodes?: number;
};
/**
 * Type definition for `AWS::Redshift::ScheduledAction.ResumeClusterMessage`.
 * Describes a resume cluster operation. For example, a scheduled action to run the `ResumeCluster` API operation.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-redshift-scheduledaction-resumeclustermessage.html}
 */
export type ResumeClusterMessage = {
  ClusterIdentifier: string;
};
/**
 * Type definition for `AWS::Redshift::ScheduledAction.ScheduledActionType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-redshift-scheduledaction-scheduledactiontype.html}
 */
export type ScheduledActionType =
  | {
      /**
       * Describes a resize cluster operation. For example, a scheduled action to run the `ResizeCluster` API operation.
       */
      ResizeCluster?: ResizeClusterMessage;
    }
  | {
      /**
       * Describes a pause cluster operation. For example, a scheduled action to run the `PauseCluster` API operation.
       */
      PauseCluster?: PauseClusterMessage;
    }
  | {
      /**
       * Describes a resume cluster operation. For example, a scheduled action to run the `ResumeCluster` API operation.
       */
      ResumeCluster?: ResumeClusterMessage;
    };
/**
 * The `AWS::Redshift::ScheduledAction` resource creates an Amazon Redshift Scheduled Action.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-scheduledaction.html}
 */
export class RedshiftScheduledAction extends $Resource<
  "AWS::Redshift::ScheduledAction",
  RedshiftScheduledActionProperties,
  RedshiftScheduledActionAttributes
> {
  public static readonly Type = "AWS::Redshift::ScheduledAction";
  constructor(
    logicalId: string,
    properties: RedshiftScheduledActionProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, RedshiftScheduledAction.Type, properties, options);
  }
}
