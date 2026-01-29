import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * The AWS::GameLift::ContainerFleet resource creates an Amazon GameLift (GameLift) container fleet to host game servers.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-containerfleet.html}
 */
export type GameLiftContainerFleetProperties = {
  /**
   * Indicates whether to use On-Demand instances or Spot instances for this fleet. If empty, the default is ON_DEMAND. Both categories of instances use identical hardware and configurations based on the instance type selected for this fleet.
   */
  BillingType?: "ON_DEMAND" | "SPOT";
  /**
   * Provides details about how to drain old tasks and replace them with new updated tasks.
   */
  DeploymentConfiguration?: DeploymentConfiguration;
  /**
   * A human-readable description of a fleet.
   * @minLength `1`
   * @maxLength `1024`
   */
  Description?: string;
  /**
   * A unique identifier for an AWS IAM role that manages access to your AWS services. Create a role or look up a role's ARN from the IAM dashboard in the AWS Management Console.
   * @minLength `1`
   * @maxLength `256`
   * @pattern `^arn:aws(-.*)?:[a-z-]+:(([a-z]+-)+[0-9])?:([0-9]{12})?:[^.]+$`
   */
  FleetRoleArn: string;
  /**
   * The name of the container group definition that will be created per game server. You must specify GAME_SERVER container group. You have the option to also specify one PER_INSTANCE container group.
   * @minLength `1`
   * @maxLength `512`
   * @pattern `^[a-zA-Z0-9\-]+$|^arn:.*:containergroupdefinition\/[a-zA-Z0-9\-]+(:[0-9]+)?$`
   */
  GameServerContainerGroupDefinitionName?: string;
  /**
   * The number of desired game server container groups per instance, a number between 1-5000.
   * @min `1`
   * @max `5000`
   */
  GameServerContainerGroupsPerInstance?: number;
  /**
   * A policy that limits the number of game sessions an individual player can create over a span of time for this fleet.
   */
  GameSessionCreationLimitPolicy?: GameSessionCreationLimitPolicy;
  /**
   * Defines the range of ports on the instance that allow inbound traffic to connect with containers in a fleet.
   */
  InstanceConnectionPortRange?: ConnectionPortRange;
  /**
   * A range of IP addresses and port settings that allow inbound traffic to connect to server processes on an Amazon GameLift server.
   * @maxLength `50`
   */
  InstanceInboundPermissions?: IpPermission[];
  /**
   * The name of an EC2 instance type that is supported in Amazon GameLift. A fleet instance type determines the computing resources of each instance in the fleet, including CPU, memory, storage, and networking capacity. Amazon GameLift supports the following EC2 instance types. See Amazon EC2 Instance Types for detailed descriptions.
   * @minLength `1`
   * @maxLength `1024`
   */
  InstanceType?: string;
  /**
   * @maxLength `100`
   */
  Locations?: LocationConfiguration[];
  /**
   * A policy the location and provider of logs from the fleet.
   */
  LogConfiguration?: LogConfiguration;
  /**
   * The name of an Amazon CloudWatch metric group. A metric group aggregates the metrics for all fleets in the group. Specify a string containing the metric group name. You can use an existing name or use a new name to create a new metric group. Currently, this parameter can have only one string.
   * @maxLength `1`
   */
  MetricGroups?: string[];
  /**
   * A game session protection policy to apply to all game sessions hosted on instances in this fleet. When protected, active game sessions cannot be terminated during a scale-down event. If this parameter is not set, instances in this fleet default to no protection. You can change a fleet's protection policy to affect future game sessions on the fleet. You can also set protection for individual game sessions.
   */
  NewGameSessionProtectionPolicy?: "FullProtection" | "NoProtection";
  /**
   * The name of the container group definition that will be created per instance. This field is optional if you specify GameServerContainerGroupDefinitionName.
   * @minLength `1`
   * @maxLength `512`
   * @pattern `^[a-zA-Z0-9\-]+$|^arn:.*:containergroupdefinition\/[a-zA-Z0-9\-]+(:[0-9]+)?$`
   */
  PerInstanceContainerGroupDefinitionName?: string;
  /**
   * A list of rules that control how a fleet is scaled.
   * @maxLength `50`
   */
  ScalingPolicies?: ScalingPolicy[];
  /**
   * An array of key-value pairs to apply to this resource.
   * @maxLength `200`
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::GameLift::ContainerFleet`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-containerfleet.html#aws-resource-gamelift-containerfleet-return-values}
 */
export type GameLiftContainerFleetAttributes = {
  /**
   * A time stamp indicating when this data object was created. Format is a number expressed in Unix time as milliseconds (for example "1469498468.057").
   */
  CreationTime: string;
  /**
   * Provides information about the last deployment ID and its status.
   */
  DeploymentDetails: {
    /**
     * The ID of the last deployment on the container fleet. This field will be empty if the container fleet does not have a ContainerGroupDefinition attached.
     * @maxLength `1024`
     * @pattern `^[a-zA-Z0-9\-]+$|^$`
     */
    LatestDeploymentId: string;
  };
  /**
   * The Amazon Resource Name (ARN) that is assigned to a Amazon GameLift container fleet resource and uniquely identifies it across all AWS Regions.
   * @minLength `1`
   * @maxLength `512`
   * @pattern `^arn:.*:[a-z]*fleet\/[a-z]*fleet-[a-zA-Z0-9\-]+$`
   */
  FleetArn: string;
  /**
   * Unique fleet ID
   * @minLength `1`
   * @maxLength `128`
   * @pattern `^[a-z]*fleet-[a-zA-Z0-9\-]+`
   */
  FleetId: string;
  /**
   * The Amazon Resource Name (ARN) of the game server container group definition. This field will be empty if GameServerContainerGroupDefinitionName is not specified.
   * @maxLength `512`
   * @pattern `^arn:.*:containergroupdefinition\/[a-zA-Z0-9\-]+(:[0-9]+)?$|^$`
   */
  GameServerContainerGroupDefinitionArn: string;
  /**
   * The maximum number of game server container groups per instance, a number between 1-5000.
   * @min `1`
   * @max `5000`
   */
  MaximumGameServerContainerGroupsPerInstance: number;
  /**
   * The Amazon Resource Name (ARN) of the per instance container group definition. This field will be empty if PerInstanceContainerGroupDefinitionName is not specified.
   * @maxLength `512`
   * @pattern `^arn:.*:containergroupdefinition\/[a-zA-Z0-9\-]+(:[0-9]+)?$|^$`
   */
  PerInstanceContainerGroupDefinitionArn: string;
  /**
   * The current status of the container fleet.
   */
  Status:
    | "PENDING"
    | "CREATING"
    | "CREATED"
    | "ACTIVATING"
    | "ACTIVE"
    | "UPDATING"
    | "DELETING";
};
/**
 * Type definition for `AWS::GameLift::ContainerFleet.ConnectionPortRange`.
 * Defines the range of ports on the instance that allow inbound traffic to connect with containers in a fleet.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-containerfleet-connectionportrange.html}
 */
export type ConnectionPortRange = {
  /**
   * A starting value for a range of allowed port numbers.
   * @min `1`
   * @max `60000`
   */
  FromPort: number;
  /**
   * An ending value for a range of allowed port numbers. Port numbers are end-inclusive. This value must be higher than FromPort.
   * @min `1`
   * @max `60000`
   */
  ToPort: number;
};
/**
 * Type definition for `AWS::GameLift::ContainerFleet.DeploymentConfiguration`.
 * Provides details about how to drain old tasks and replace them with new updated tasks.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-containerfleet-deploymentconfiguration.html}
 */
export type DeploymentConfiguration = {
  /**
   * The strategy to apply in case of impairment; defaults to MAINTAIN.
   */
  ImpairmentStrategy?: "MAINTAIN" | "ROLLBACK";
  /**
   * The minimum percentage of healthy required; defaults to 75.
   * @min `30`
   * @max `75`
   */
  MinimumHealthyPercentage?: number;
  /**
   * The protection strategy for deployment on the container fleet; defaults to WITH_PROTECTION.
   */
  ProtectionStrategy?: "WITH_PROTECTION" | "IGNORE_PROTECTION";
};
/**
 * Type definition for `AWS::GameLift::ContainerFleet.DeploymentDetails`.
 * Provides information about the last deployment ID and its status.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-containerfleet-deploymentdetails.html}
 */
export type DeploymentDetails = {
  /**
   * The ID of the last deployment on the container fleet. This field will be empty if the container fleet does not have a ContainerGroupDefinition attached.
   * @maxLength `1024`
   * @pattern `^[a-zA-Z0-9\-]+$|^$`
   */
  LatestDeploymentId?: string;
};
/**
 * Type definition for `AWS::GameLift::ContainerFleet.GameSessionCreationLimitPolicy`.
 * A policy that limits the number of game sessions a player can create on the same fleet. This optional policy gives game owners control over how players can consume available game server resources. A resource creation policy makes the following statement: "An individual player can create a maximum number of new game sessions within a specified time period".

The policy is evaluated when a player tries to create a new game session. For example, assume you have a policy of 10 new game sessions and a time period of 60 minutes. On receiving a CreateGameSession request, Amazon GameLift checks that the player (identified by CreatorId) has created fewer than 10 game sessions in the past 60 minutes.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-containerfleet-gamesessioncreationlimitpolicy.html}
 */
export type GameSessionCreationLimitPolicy = {
  /**
   * The maximum number of game sessions that an individual can create during the policy period.
   * @min `0`
   */
  NewGameSessionsPerCreator?: number;
  /**
   * The time span used in evaluating the resource creation limit policy.
   * @min `0`
   */
  PolicyPeriodInMinutes?: number;
};
/**
 * Type definition for `AWS::GameLift::ContainerFleet.IpPermission`.
 * A range of IP addresses and port settings that allow inbound traffic to connect to server processes on an Amazon GameLift hosting resource. New game sessions that are started on the fleet are assigned an IP address/port number combination, which must fall into the fleet's allowed ranges. For fleets created with a custom game server, the ranges reflect the server's game session assignments. For Realtime Servers fleets, Amazon GameLift automatically opens two port ranges, one for TCP messaging and one for UDP, for use by the Realtime servers.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-containerfleet-ippermission.html}
 */
export type IpPermission = {
  /**
   * A starting value for a range of allowed port numbers.
   * @min `1`
   * @max `60000`
   */
  FromPort: number;
  /**
   * A range of allowed IP addresses. This value must be expressed in CIDR notation. Example: "000.000.000.000/[subnet mask]" or optionally the shortened version "0.0.0.0/[subnet mask]".
   * @pattern `(^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])(/([0-9]|[1-2][0-9]|3[0-2]))$)`
   */
  IpRange: string;
  /**
   * The network communication protocol used by the fleet.
   */
  Protocol: "TCP" | "UDP";
  /**
   * An ending value for a range of allowed port numbers. Port numbers are end-inclusive. This value must be higher than FromPort.
   * @min `1`
   * @max `60000`
   */
  ToPort: number;
};
/**
 * Type definition for `AWS::GameLift::ContainerFleet.LocationCapacity`.
 * Current resource capacity settings in a specified fleet or location. The location value might refer to a fleet's remote location or its home Region.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-containerfleet-locationcapacity.html}
 */
export type LocationCapacity = {
  /**
   * Defaults to MinSize if not defined. The number of EC2 instances you want to maintain in the specified fleet location. This value must fall between the minimum and maximum size limits. If any auto-scaling policy is defined for the container fleet, the desired instance will only be applied once during fleet creation and will be ignored in updates to avoid conflicts with auto-scaling. During updates with any auto-scaling policy defined, if current desired instance is lower than the new MinSize, it will be increased to the new MinSize; if current desired instance is larger than the new MaxSize, it will be decreased to the new MaxSize.
   * @min `0`
   */
  DesiredEC2Instances?: number;
  /**
   * Configuration options for Amazon GameLift Servers-managed capacity behavior.
   */
  ManagedCapacityConfiguration?: ManagedCapacityConfiguration;
  /**
   * The maximum value that is allowed for the fleet's instance count for a location.
   * @min `0`
   */
  MaxSize: number;
  /**
   * The minimum value allowed for the fleet's instance count for a location.
   * @min `0`
   */
  MinSize?: number;
};
/**
 * Type definition for `AWS::GameLift::ContainerFleet.LocationConfiguration`.
 * A remote location where a multi-location fleet can deploy EC2 instances for game hosting.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-containerfleet-locationconfiguration.html}
 */
export type LocationConfiguration = {
  /**
   * @minLength `1`
   * @maxLength `64`
   * @pattern `^[A-Za-z0-9\-]+`
   */
  Location: string;
  /**
   * Current resource capacity settings in a specified fleet or location. The location value might refer to a fleet's remote location or its home Region.
   */
  LocationCapacity?: LocationCapacity;
  /**
   * A list of fleet actions that have been suspended in the fleet location.
   * @maxLength `1`
   */
  StoppedActions?: "AUTO_SCALING"[];
};
/**
 * Type definition for `AWS::GameLift::ContainerFleet.LogConfiguration`.
 * A policy the location and provider of logs from the fleet.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-containerfleet-logconfiguration.html}
 */
export type LogConfiguration = {
  /**
   * Configures the service that provides logs.
   */
  LogDestination?: LogDestination;
  /**
   * If log destination is CLOUDWATCH, logs are sent to the specified log group in Amazon CloudWatch.
   * @minLength `1`
   * @maxLength `512`
   * @pattern `[a-zA-Z0-9:/\-\*]+`
   */
  LogGroupArn?: string;
  /**
   * The name of the S3 bucket to pull logs from if S3 is the LogDestination
   * @minLength `1`
   * @maxLength `1024`
   */
  S3BucketName?: string;
};
/**
 * Type definition for `AWS::GameLift::ContainerFleet.LogDestination`.
 * Configures the service that provides logs.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-containerfleet-logdestination.html}
 */
export type LogDestination = "NONE" | "CLOUDWATCH" | "S3";
/**
 * Type definition for `AWS::GameLift::ContainerFleet.ManagedCapacityConfiguration`.
 * Configuration options for GameLift-managed capacity behavior.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-containerfleet-managedcapacityconfiguration.html}
 */
export type ManagedCapacityConfiguration = {
  /**
   * Length of time, in minutes, that Amazon GameLift Servers will wait before scaling in your MinSize and DesiredInstances to 0 after a period with no game session activity.
   * @min `5`
   * @max `1440`
   */
  ScaleInAfterInactivityMinutes?: number;
  /**
   * The strategy Amazon GameLift Servers will use to automatically scale your capacity to and from zero in response to game session activity. Game session activity refers to any active running sessions or game session requests. When set to SCALE_TO_AND_FROM_ZERO, MinSize must not be specified and will be managed automatically. When set to MANUAL, MinSize is required.
   */
  ZeroCapacityStrategy: "SCALE_TO_AND_FROM_ZERO" | "MANUAL";
};
/**
 * Type definition for `AWS::GameLift::ContainerFleet.ScalingPolicy`.
 * Rule that controls how a fleet is scaled. Scaling policies are uniquely identified by the combination of name and fleet ID.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-containerfleet-scalingpolicy.html}
 */
export type ScalingPolicy = {
  /**
   * Comparison operator to use when measuring a metric against the threshold value.
   */
  ComparisonOperator?:
    | "GreaterThanOrEqualToThreshold"
    | "GreaterThanThreshold"
    | "LessThanThreshold"
    | "LessThanOrEqualToThreshold";
  /**
   * Length of time (in minutes) the metric must be at or beyond the threshold before a scaling event is triggered.
   * @min `1`
   */
  EvaluationPeriods?: number;
  /**
   * Name of the Amazon GameLift-defined metric that is used to trigger a scaling adjustment.
   */
  MetricName:
    | "ActivatingGameSessions"
    | "ActiveGameSessions"
    | "ActiveInstances"
    | "AvailableGameSessions"
    | "AvailablePlayerSessions"
    | "CurrentPlayerSessions"
    | "IdleInstances"
    | "PercentAvailableGameSessions"
    | "PercentIdleInstances"
    | "QueueDepth"
    | "WaitTime"
    | "ConcurrentActivatableGameSessions";
  /**
   * A descriptive label that is associated with a fleet's scaling policy. Policy names do not need to be unique.
   * @minLength `1`
   * @maxLength `1024`
   */
  Name: string;
  /**
   * The type of scaling policy to create. For a target-based policy, set the parameter MetricName to 'PercentAvailableGameSessions' and specify a TargetConfiguration. For a rule-based policy set the following parameters: MetricName, ComparisonOperator, Threshold, EvaluationPeriods, ScalingAdjustmentType, and ScalingAdjustment.
   */
  PolicyType?: "RuleBased" | "TargetBased";
  /**
   * Amount of adjustment to make, based on the scaling adjustment type.
   */
  ScalingAdjustment?: number;
  /**
   * The type of adjustment to make to a fleet's instance count.
   */
  ScalingAdjustmentType?:
    | "ChangeInCapacity"
    | "ExactCapacity"
    | "PercentChangeInCapacity";
  /**
   * An object that contains settings for a target-based scaling policy.
   */
  TargetConfiguration?: TargetConfiguration;
  /**
   * Metric value used to trigger a scaling event.
   */
  Threshold?: number;
};
/**
 * Type definition for `AWS::GameLift::ContainerFleet.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-containerfleet-tag.html}
 */
export type Tag = {
  /**
   * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length.
   * @minLength `1`
   * @maxLength `128`
   */
  Key: string;
  /**
   * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length.
   * @minLength `0`
   * @maxLength `256`
   */
  Value: string;
};
/**
 * Type definition for `AWS::GameLift::ContainerFleet.TargetConfiguration`.
 * Settings for a target-based scaling policy. A target-based policy tracks a particular fleet metric specifies a target value for the metric. As player usage changes, the policy triggers Amazon GameLift to adjust capacity so that the metric returns to the target value. The target configuration specifies settings as needed for the target based policy, including the target value.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-containerfleet-targetconfiguration.html}
 */
export type TargetConfiguration = {
  /**
   * Desired value to use with a target-based scaling policy. The value must be relevant for whatever metric the scaling policy is using. For example, in a policy using the metric PercentAvailableGameSessions, the target value should be the preferred size of the fleet's buffer (the percent of capacity that should be idle and ready for new game sessions).
   */
  TargetValue: number;
};
/**
 * The AWS::GameLift::ContainerFleet resource creates an Amazon GameLift (GameLift) container fleet to host game servers.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-containerfleet.html}
 */
export class GameLiftContainerFleet extends $Resource<
  "AWS::GameLift::ContainerFleet",
  GameLiftContainerFleetProperties,
  GameLiftContainerFleetAttributes
> {
  public static readonly Type = "AWS::GameLift::ContainerFleet";
  constructor(
    logicalId: string,
    properties: GameLiftContainerFleetProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, GameLiftContainerFleet.Type, properties, options);
  }
}
