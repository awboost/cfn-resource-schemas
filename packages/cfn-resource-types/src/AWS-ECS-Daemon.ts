import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::ECS::Daemon`.
 * Resource schema for AWS ECS Daemon
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecs-daemon.html}
 */
export type ECSDaemonProperties = {
  /**
   * @minLength `1`
   */
  CapacityProviderArns?: string[];
  ClusterArn?: string;
  DaemonName?: string;
  DaemonTaskDefinitionArn?: string;
  DeploymentConfiguration?: DaemonDeploymentConfiguration;
  EnableECSManagedTags?: boolean;
  EnableExecuteCommand?: boolean;
  PropagateTags?: "DAEMON" | "NONE";
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::ECS::Daemon`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecs-daemon.html#aws-resource-ecs-daemon-return-values}
 */
export type ECSDaemonAttributes = {
  CreatedAt: string;
  DaemonArn: string;
  DaemonStatus: DaemonStatus;
  DeploymentArn: string;
  UpdatedAt: string;
};
/**
 * Type definition for `AWS::ECS::Daemon.DaemonAlarmConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-daemon-daemonalarmconfiguration.html}
 */
export type DaemonAlarmConfiguration = {
  AlarmNames?: string[];
  Enable?: boolean;
};
/**
 * Type definition for `AWS::ECS::Daemon.DaemonDeploymentConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-daemon-daemondeploymentconfiguration.html}
 */
export type DaemonDeploymentConfiguration = {
  Alarms?: DaemonAlarmConfiguration;
  /**
   * @min `0`
   * @max `1440`
   */
  BakeTimeInMinutes?: number;
  /**
   * @min `0`
   * @max `100`
   */
  DrainPercent?: number;
};
/**
 * Type definition for `AWS::ECS::Daemon.DaemonStatus`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-daemon-daemonstatus.html}
 */
export type DaemonStatus = "ACTIVE" | "DELETE_IN_PROGRESS";
/**
 * Type definition for `AWS::ECS::Daemon.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-daemon-tag.html}
 */
export type Tag = {
  Key: string;
  Value?: string;
};
/**
 * Resource type definition for `AWS::ECS::Daemon`.
 * Resource schema for AWS ECS Daemon
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecs-daemon.html}
 */
export class ECSDaemon extends $Resource<
  "AWS::ECS::Daemon",
  ECSDaemonProperties,
  ECSDaemonAttributes
> {
  public static readonly Type = "AWS::ECS::Daemon";
  constructor(
    logicalId: string,
    properties: ECSDaemonProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, ECSDaemon.Type, properties, options);
  }
}
