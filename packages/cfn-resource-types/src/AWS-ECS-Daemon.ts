import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::ECS::Daemon`.
 * Information about a daemon resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecs-daemon.html}
 */
export type ECSDaemonProperties = {
  /**
   * The Amazon Resource Names (ARNs) of the capacity providers associated with the daemon.
   * @minLength `1`
   */
  CapacityProviderArns?: string[];
  /**
   * The Amazon Resource Name (ARN) of the cluster that the daemon is running in.
   */
  ClusterArn?: string;
  DaemonName?: string;
  /**
   * The Amazon Resource Name (ARN) of the daemon task definition used by this revision.
   */
  DaemonTaskDefinitionArn?: string;
  /**
   * The deployment configuration used for this daemon deployment.
   */
  DeploymentConfiguration?: DaemonDeploymentConfiguration;
  /**
   * Specifies whether Amazon ECS managed tags are turned on for the daemon tasks.
   */
  EnableECSManagedTags?: boolean;
  /**
   * Specifies whether the execute command functionality is turned on for the daemon tasks.
   */
  EnableExecuteCommand?: boolean;
  /**
   * Specifies whether tags are propagated from the daemon to the daemon tasks.
   */
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
 * The CloudWatch alarm configuration for a daemon. When enabled, CloudWatch alarms determine whether a daemon deployment has failed.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-daemon-daemonalarmconfiguration.html}
 */
export type DaemonAlarmConfiguration = {
  /**
   * The CloudWatch alarm names to monitor during a daemon deployment.
   */
  AlarmNames?: string[];
  /**
   * Determines whether to use the CloudWatch alarm option in the daemon deployment process. The default value is ``false``.
   */
  Enable?: boolean;
};
/**
 * Type definition for `AWS::ECS::Daemon.DaemonDeploymentConfiguration`.
 * Optional deployment parameters that control how a daemon rolls out updates across container instances.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-daemon-daemondeploymentconfiguration.html}
 */
export type DaemonDeploymentConfiguration = {
  /**
   * The CloudWatch alarm configuration for the daemon deployment. When alarms are triggered during a deployment, the deployment can be automatically rolled back.
   */
  Alarms?: DaemonAlarmConfiguration;
  /**
   * The amount of time (in minutes) to wait after a successful deployment step before proceeding. This allows time to monitor for issues before continuing. The default value is 0.
   * @min `0`
   * @max `1440`
   */
  BakeTimeInMinutes?: number;
  /**
   * The percentage of container instances to drain simultaneously during a daemon deployment. Valid values are between 0.0 and 100.0.
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
 * The metadata that you apply to a resource to help you categorize and organize them. Each tag consists of a key and an optional value. You define them.
 The following basic restrictions apply to tags:
  +  Maximum number of tags per resource - 50
  +  For each resource, each tag key must be unique, and each tag key can have only one value.
  +  Maximum key length - 128 Unicode characters in UTF-8
  +  Maximum value length - 256 Unicode characters in UTF-8
  +  If your tagging schema is used across multiple services and resources, remember that other services may have restrictions on allowed characters. Generally allowed characters are: letters, numbers, and spaces representable in UTF-8, and the following characters: + - = . _ : / @.
  +  Tag keys and values are case-sensitive.
  +  Do not use ``aws:``, ``AWS:``, or any upper or lowercase combination of such as a prefix for either keys or values as it is reserved for AWS use. You cannot edit or delete tag keys or values with this prefix. Tags with this prefix do not count against your tags per resource limit.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-daemon-tag.html}
 */
export type Tag = {
  /**
   * One part of a key-value pair that make up a tag. A ``key`` is a general label that acts like a category for more specific tag values.
   */
  Key: string;
  /**
   * The optional part of a key-value pair that make up a tag. A ``value`` acts as a descriptor within a tag category (key).
   */
  Value?: string;
};
/**
 * Resource type definition for `AWS::ECS::Daemon`.
 * Information about a daemon resource.
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
