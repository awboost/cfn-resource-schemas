import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * The AWS::GameLift::Fleet resource creates an Amazon GameLift (GameLift) fleet to host game servers. A fleet is a set of EC2 or Anywhere instances, each of which can host multiple game sessions.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-fleet.html}
 */
export type GameLiftFleetProperties = {
  /**
   * Configuration for Anywhere fleet.
   */
  AnywhereConfiguration?: AnywhereConfiguration;
  /**
   * Determines when and how to apply fleet or location capacities. Allowed options are ON_UPDATE (default), ON_CREATE_AND_UPDATE and ON_CREATE_AND_UPDATE_WITH_AUTOSCALING. If you choose ON_CREATE_AND_UPDATE_WITH_AUTOSCALING, MinSize and MaxSize will still be applied on creation and on updates, but DesiredEC2Instances will only be applied once on fleet creation and will be ignored during updates to prevent conflicts with auto-scaling. During updates with ON_CREATE_AND_UPDATE_WITH_AUTOSCALING chosen, if current desired instance is lower than the new MinSize, it will be increased to the new MinSize; if current desired instance is larger than the new MaxSize, it will be decreased to the new MaxSize.
   */
  ApplyCapacity?:
    | "ON_UPDATE"
    | "ON_CREATE_AND_UPDATE"
    | "ON_CREATE_AND_UPDATE_WITH_AUTOSCALING";
  /**
   * A unique identifier for a build to be deployed on the new fleet. If you are deploying the fleet with a custom game build, you must specify this property. The build must have been successfully uploaded to Amazon GameLift and be in a READY status. This fleet setting cannot be changed once the fleet is created.
   * @pattern `^build-\S+|^arn:.*:build/build-\S+`
   */
  BuildId?: string;
  /**
   * Indicates whether to generate a TLS/SSL certificate for the new fleet. TLS certificates are used for encrypting traffic between game clients and game servers running on GameLift. If this parameter is not set, certificate generation is disabled. This fleet setting cannot be changed once the fleet is created.
   */
  CertificateConfiguration?: CertificateConfiguration;
  /**
   * ComputeType to differentiate EC2 hardware managed by GameLift and Anywhere hardware managed by the customer.
   */
  ComputeType?: "EC2" | "ANYWHERE";
  /**
   * A human-readable description of a fleet.
   * @minLength `1`
   * @maxLength `1024`
   */
  Description?: string;
  /**
   * [DEPRECATED] The number of EC2 instances that you want this fleet to host. When creating a new fleet, GameLift automatically sets this value to "1" and initiates a single instance. Once the fleet is active, update this value to trigger GameLift to add or remove instances from the fleet.
   * @min `0`
   */
  DesiredEC2Instances?: number;
  /**
   * A range of IP addresses and port settings that allow inbound traffic to connect to server processes on an Amazon GameLift server.
   * @maxLength `50`
   */
  EC2InboundPermissions?: IpPermission[];
  /**
   * The name of an EC2 instance type that is supported in Amazon GameLift. A fleet instance type determines the computing resources of each instance in the fleet, including CPU, memory, storage, and networking capacity. Amazon GameLift supports the following EC2 instance types. See Amazon EC2 Instance Types for detailed descriptions.
   * @pattern `^.*..*$`
   */
  EC2InstanceType?: string;
  /**
   * Indicates whether to use On-Demand instances or Spot instances for this fleet. If empty, the default is ON_DEMAND. Both categories of instances use identical hardware and configurations based on the instance type selected for this fleet.
   */
  FleetType?: "ON_DEMAND" | "SPOT";
  /**
   * A unique identifier for an AWS IAM role that manages access to your AWS services. With an instance role ARN set, any application that runs on an instance in this fleet can assume the role, including install scripts, server processes, and daemons (background processes). Create a role or look up a role's ARN from the IAM dashboard in the AWS Management Console.
   * @minLength `1`
   * @pattern `^arn:aws(-.*)?:[a-z-]+:(([a-z]+-)+[0-9])?:([0-9]{12})?:[^.]+$`
   */
  InstanceRoleARN?: string;
  /**
   * Credentials provider implementation that loads credentials from the Amazon EC2 Instance Metadata Service.
   */
  InstanceRoleCredentialsProvider?: "SHARED_CREDENTIAL_FILE";
  /**
   * @minLength `1`
   * @maxLength `100`
   */
  Locations?: LocationConfiguration[];
  /**
   * This parameter is no longer used. When hosting a custom game build, specify where Amazon GameLift should store log files using the Amazon GameLift server API call ProcessReady()
   */
  LogPaths?: string[];
  /**
   * [DEPRECATED] The maximum value that is allowed for the fleet's instance count. When creating a new fleet, GameLift automatically sets this value to "1". Once the fleet is active, you can change this value.
   * @min `0`
   */
  MaxSize?: number;
  /**
   * The name of an Amazon CloudWatch metric group. A metric group aggregates the metrics for all fleets in the group. Specify a string containing the metric group name. You can use an existing name or use a new name to create a new metric group. Currently, this parameter can have only one string.
   * @maxLength `1`
   */
  MetricGroups?: string[];
  /**
   * [DEPRECATED] The minimum value allowed for the fleet's instance count. When creating a new fleet, GameLift automatically sets this value to "0". After the fleet is active, you can change this value.
   * @min `0`
   */
  MinSize?: number;
  /**
   * A descriptive label that is associated with a fleet. Fleet names do not need to be unique.
   * @minLength `1`
   * @maxLength `1024`
   */
  Name: string;
  /**
   * A game session protection policy to apply to all game sessions hosted on instances in this fleet. When protected, active game sessions cannot be terminated during a scale-down event. If this parameter is not set, instances in this fleet default to no protection. You can change a fleet's protection policy to affect future game sessions on the fleet. You can also set protection for individual game sessions.
   */
  NewGameSessionProtectionPolicy?: "FullProtection" | "NoProtection";
  /**
   * A unique identifier for the AWS account with the VPC that you want to peer your Amazon GameLift fleet with. You can find your account ID in the AWS Management Console under account settings.
   * @minLength `1`
   * @maxLength `1024`
   * @pattern `^[0-9]{12}$`
   */
  PeerVpcAwsAccountId?: string;
  /**
   * A unique identifier for a VPC with resources to be accessed by your Amazon GameLift fleet. The VPC must be in the same Region as your fleet. To look up a VPC ID, use the VPC Dashboard in the AWS Management Console.
   * @minLength `1`
   * @maxLength `1024`
   * @pattern `^vpc-\S+`
   */
  PeerVpcId?: string;
  /**
   * A policy that limits the number of game sessions an individual player can create over a span of time for this fleet.
   */
  ResourceCreationLimitPolicy?: ResourceCreationLimitPolicy;
  /**
     * Instructions for launching server processes on each instance in the fleet. Server processes run either a custom game build executable or a Realtime script. The runtime configuration defines the server executables or launch script file, launch parameters, and the number of processes to run concurrently on each instance. When creating a fleet, the runtime configuration must have at least one server process configuration; otherwise the request fails with an invalid request exception.
    
    This parameter is required unless the parameters ServerLaunchPath and ServerLaunchParameters are defined. Runtime configuration has replaced these parameters, but fleets that use them will continue to work.
     */
  RuntimeConfiguration?: RuntimeConfiguration;
  /**
   * A list of rules that control how a fleet is scaled.
   * @maxLength `50`
   */
  ScalingPolicies?: ScalingPolicy[];
  /**
     * A unique identifier for a Realtime script to be deployed on a new Realtime Servers fleet. The script must have been successfully uploaded to Amazon GameLift. This fleet setting cannot be changed once the fleet is created.
    
    Note: It is not currently possible to use the !Ref command to reference a script created with a CloudFormation template for the fleet property ScriptId. Instead, use Fn::GetAtt Script.Arn or Fn::GetAtt Script.Id to retrieve either of these properties as input for ScriptId. Alternatively, enter a ScriptId string manually.
     * @pattern `^script-\S+|^arn:.*:script/script-\S+`
     */
  ScriptId?: string;
  /**
   * This parameter is no longer used but is retained for backward compatibility. Instead, specify server launch parameters in the RuntimeConfiguration parameter. A request must specify either a runtime configuration or values for both ServerLaunchParameters and ServerLaunchPath.
   * @minLength `1`
   * @maxLength `1024`
   */
  ServerLaunchParameters?: string;
  /**
   * This parameter is no longer used. Instead, specify a server launch path using the RuntimeConfiguration parameter. Requests that specify a server launch path and launch parameters instead of a runtime configuration will continue to work.
   * @minLength `1`
   * @maxLength `1024`
   */
  ServerLaunchPath?: string;
  /**
   * An array of key-value pairs to apply to this resource.
   * @maxLength `200`
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::GameLift::Fleet`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-fleet.html#aws-resource-gamelift-fleet-return-values}
 */
export type GameLiftFleetAttributes = {
  /**
   * The Amazon Resource Name (ARN) that is assigned to a Amazon GameLift Servers Fleet resource and uniquely identifies it. ARNs are unique across all Regions. In a GameLift Fleet ARN, the resource ID matches the FleetId value.
   * @pattern `^arn:.*:fleet/[a-z]*fleet-[a-zA-Z0-9\-]+$`
   */
  FleetArn: string;
  /**
   * Unique fleet ID
   * @pattern `^fleet-\S+`
   */
  FleetId: string;
};
/**
 * Type definition for `AWS::GameLift::Fleet.AnywhereConfiguration`.
 * Configuration for Anywhere fleet.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-fleet-anywhereconfiguration.html}
 */
export type AnywhereConfiguration = {
  /**
   * Cost of compute can be specified on Anywhere Fleets to prioritize placement across Queue destinations based on Cost.
   * @minLength `1`
   * @maxLength `11`
   * @pattern `^\d{1,5}(?:\.\d{1,5})?$`
   */
  Cost: string;
};
/**
 * Type definition for `AWS::GameLift::Fleet.CertificateConfiguration`.
 * Information about the use of a TLS/SSL certificate for a fleet. TLS certificate generation is enabled at the fleet level, with one certificate generated for the fleet. When this feature is enabled, the certificate can be retrieved using the GameLift Server SDK call GetInstanceCertificate. All instances in a fleet share the same certificate.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-fleet-certificateconfiguration.html}
 */
export type CertificateConfiguration = {
  CertificateType: "DISABLED" | "GENERATED";
};
/**
 * Type definition for `AWS::GameLift::Fleet.IpPermission`.
 * A range of IP addresses and port settings that allow inbound traffic to connect to server processes on an Amazon GameLift hosting resource. New game sessions that are started on the fleet are assigned an IP address/port number combination, which must fall into the fleet's allowed ranges. For fleets created with a custom game server, the ranges reflect the server's game session assignments. For Realtime Servers fleets, Amazon GameLift automatically opens two port ranges, one for TCP messaging and one for UDP, for use by the Realtime servers.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-fleet-ippermission.html}
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
 * Type definition for `AWS::GameLift::Fleet.LocationCapacity`.
 * Current resource capacity settings in a specified fleet or location. The location value might refer to a fleet's remote location or its home Region.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-fleet-locationcapacity.html}
 */
export type LocationCapacity = {
  /**
   * The number of EC2 instances you want to maintain in the specified fleet location. This value must fall between the minimum and maximum size limits.
   * @min `0`
   */
  DesiredEC2Instances: number;
  /**
   * The maximum value that is allowed for the fleet's instance count for a location. When creating a new fleet, GameLift automatically sets this value to "1". Once the fleet is active, you can change this value.
   * @min `0`
   */
  MaxSize: number;
  /**
   * The minimum value allowed for the fleet's instance count for a location. When creating a new fleet, GameLift automatically sets this value to "0". After the fleet is active, you can change this value.
   * @min `0`
   */
  MinSize: number;
};
/**
 * Type definition for `AWS::GameLift::Fleet.LocationConfiguration`.
 * A remote location where a multi-location fleet can deploy EC2 instances for game hosting.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-fleet-locationconfiguration.html}
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
};
/**
 * Type definition for `AWS::GameLift::Fleet.ResourceCreationLimitPolicy`.
 * A policy that limits the number of game sessions a player can create on the same fleet. This optional policy gives game owners control over how players can consume available game server resources. A resource creation policy makes the following statement: "An individual player can create a maximum number of new game sessions within a specified time period".

The policy is evaluated when a player tries to create a new game session. For example, assume you have a policy of 10 new game sessions and a time period of 60 minutes. On receiving a CreateGameSession request, Amazon GameLift checks that the player (identified by CreatorId) has created fewer than 10 game sessions in the past 60 minutes.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-fleet-resourcecreationlimitpolicy.html}
 */
export type ResourceCreationLimitPolicy = {
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
 * Type definition for `AWS::GameLift::Fleet.RuntimeConfiguration`.
 * A collection of server process configurations that describe the processes to run on each instance in a fleet. All fleets must have a runtime configuration. Each instance in the fleet maintains server processes as specified in the runtime configuration, launching new ones as existing processes end. Each instance regularly checks for an updated runtime configuration makes adjustments as called for.

The runtime configuration enables the instances in a fleet to run multiple processes simultaneously. Potential scenarios are as follows: (1) Run multiple processes of a single game server executable to maximize usage of your hosting resources. (2) Run one or more processes of different executables, such as your game server and a metrics tracking program. (3) Run multiple processes of a single game server but with different launch parameters, for example to run one process on each instance in debug mode.

An Amazon GameLift instance is limited to 50 processes running simultaneously. A runtime configuration must specify fewer than this limit. To calculate the total number of processes specified in a runtime configuration, add the values of the ConcurrentExecutions parameter for each ServerProcess object in the runtime configuration.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-fleet-runtimeconfiguration.html}
 */
export type RuntimeConfiguration = {
  /**
   * The maximum amount of time (in seconds) that a game session can remain in status ACTIVATING. If the game session is not active before the timeout, activation is terminated and the game session status is changed to TERMINATED.
   * @min `1`
   * @max `600`
   */
  GameSessionActivationTimeoutSeconds?: number;
  /**
   * The maximum number of game sessions with status ACTIVATING to allow on an instance simultaneously. This setting limits the amount of instance resources that can be used for new game activations at any one time.
   * @min `1`
   * @max `2147483647`
   */
  MaxConcurrentGameSessionActivations?: number;
  /**
   * A collection of server process configurations that describe which server processes to run on each instance in a fleet.
   * @maxLength `50`
   */
  ServerProcesses?: ServerProcess[];
};
/**
 * Type definition for `AWS::GameLift::Fleet.ScalingPolicy`.
 * Rule that controls how a fleet is scaled. Scaling policies are uniquely identified by the combination of name and fleet ID.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-fleet-scalingpolicy.html}
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
   * @minLength `1`
   * @maxLength `64`
   * @pattern `^[A-Za-z0-9\-]+`
   */
  Location?: string;
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
   * Current status of the scaling policy. The scaling policy can be in force only when in an ACTIVE status. Scaling policies can be suspended for individual fleets. If the policy is suspended for a fleet, the policy status does not change.
   */
  Status?:
    | "ACTIVE"
    | "UPDATE_REQUESTED"
    | "UPDATING"
    | "DELETE_REQUESTED"
    | "DELETING"
    | "DELETED"
    | "ERROR";
  /**
   * An object that contains settings for a target-based scaling policy.
   */
  TargetConfiguration?: TargetConfiguration;
  /**
   * Metric value used to trigger a scaling event.
   */
  Threshold?: number;
  /**
   * The current status of the fleet's scaling policies in a requested fleet location. The status PENDING_UPDATE indicates that an update was requested for the fleet but has not yet been completed for the location.
   */
  UpdateStatus?: "PENDING_UPDATE";
};
/**
 * Type definition for `AWS::GameLift::Fleet.ServerProcess`.
 * A set of instructions for launching server processes on each instance in a fleet. Each instruction set identifies the location of the server executable, optional launch parameters, and the number of server processes with this configuration to maintain concurrently on the instance. Server process configurations make up a fleet's RuntimeConfiguration.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-fleet-serverprocess.html}
 */
export type ServerProcess = {
  /**
   * The number of server processes that use this configuration to run concurrently on an instance.
   * @min `1`
   */
  ConcurrentExecutions: number;
  /**
     * The location of the server executable in a custom game build or the name of the Realtime script file that contains the Init() function. Game builds and Realtime scripts are installed on instances at the root:
    
    Windows (for custom game builds only): C:\game. Example: "C:\game\MyGame\server.exe"
    
    Linux: /local/game. Examples: "/local/game/MyGame/server.exe" or "/local/game/MyRealtimeScript.js"
     * @minLength `1`
     * @maxLength `1024`
     * @pattern `^([Cc]:\\game\S+|/local/game/\S+)`
     */
  LaunchPath: string;
  /**
   * An optional list of parameters to pass to the server executable or Realtime script on launch.
   * @minLength `1`
   * @maxLength `1024`
   */
  Parameters?: string;
};
/**
 * Type definition for `AWS::GameLift::Fleet.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-fleet-tag.html}
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
 * Type definition for `AWS::GameLift::Fleet.TargetConfiguration`.
 * Settings for a target-based scaling policy. A target-based policy tracks a particular fleet metric specifies a target value for the metric. As player usage changes, the policy triggers Amazon GameLift to adjust capacity so that the metric returns to the target value. The target configuration specifies settings as needed for the target based policy, including the target value.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-fleet-targetconfiguration.html}
 */
export type TargetConfiguration = {
  /**
   * Desired value to use with a target-based scaling policy. The value must be relevant for whatever metric the scaling policy is using. For example, in a policy using the metric PercentAvailableGameSessions, the target value should be the preferred size of the fleet's buffer (the percent of capacity that should be idle and ready for new game sessions).
   */
  TargetValue: number;
};
/**
 * The AWS::GameLift::Fleet resource creates an Amazon GameLift (GameLift) fleet to host game servers. A fleet is a set of EC2 or Anywhere instances, each of which can host multiple game sessions.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-fleet.html}
 */
export class GameLiftFleet extends $Resource<
  "AWS::GameLift::Fleet",
  GameLiftFleetProperties,
  GameLiftFleetAttributes
> {
  public static readonly Type = "AWS::GameLift::Fleet";
  constructor(
    logicalId: string,
    properties: GameLiftFleetProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, GameLiftFleet.Type, properties, options);
  }
}
