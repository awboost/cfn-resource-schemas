import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * The AWS::GameLift::GameServerGroup resource creates an Amazon GameLift (GameLift) GameServerGroup.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-gameservergroup.html}
 */
export type GameLiftGameServerGroupProperties = {
  /**
   * Configuration settings to define a scaling policy for the Auto Scaling group that is optimized for game hosting
   */
  AutoScalingPolicy?: AutoScalingPolicy;
  /**
   * The fallback balancing method to use for the game server group when Spot Instances in a Region become unavailable or are not viable for game hosting.
   */
  BalancingStrategy?: BalancingStrategy;
  /**
   * The type of delete to perform.
   */
  DeleteOption?: DeleteOption;
  /**
   * An identifier for the new game server group.
   * @minLength `1`
   * @maxLength `128`
   * @pattern `[a-zA-Z0-9-\.]+`
   */
  GameServerGroupName: string;
  /**
   * A flag that indicates whether instances in the game server group are protected from early termination.
   */
  GameServerProtectionPolicy?: GameServerProtectionPolicy;
  /**
   * A set of EC2 instance types to use when creating instances in the group.
   * @minLength `2`
   * @maxLength `20`
   */
  InstanceDefinitions: InstanceDefinition[];
  /**
   * The EC2 launch template that contains configuration settings and game server code to be deployed to all instances in the game server group.
   */
  LaunchTemplate?: LaunchTemplate;
  /**
   * The maximum number of instances allowed in the EC2 Auto Scaling group.
   * @min `1`
   */
  MaxSize?: number;
  /**
   * The minimum number of instances allowed in the EC2 Auto Scaling group.
   */
  MinSize?: number;
  /**
   * The Amazon Resource Name (ARN) for an IAM role that allows Amazon GameLift to access your EC2 Auto Scaling groups.
   * @minLength `1`
   * @maxLength `256`
   * @pattern `^arn:.*:role\/[\w+=,.@-]+`
   */
  RoleArn: string;
  /**
   * A list of labels to assign to the new game server group resource.
   * @maxLength `200`
   */
  Tags?: Tag[];
  /**
   * A list of virtual private cloud (VPC) subnets to use with instances in the game server group.
   * @minLength `1`
   * @maxLength `20`
   */
  VpcSubnets?: string[];
};
/**
 * Attribute type definition for `AWS::GameLift::GameServerGroup`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-gameservergroup.html#aws-resource-gamelift-gameservergroup-return-values}
 */
export type GameLiftGameServerGroupAttributes = {
  /**
     * A generated unique ID for the EC2 Auto Scaling group that is associated with this game server group.
     * @maxLength `256`
     * @pattern `[ -퟿-�𐀀-􏿿
        ]*`
     */
  AutoScalingGroupArn: string;
  /**
   * A generated unique ID for the game server group.
   * @minLength `1`
   * @maxLength `256`
   * @pattern `^arn:.*:gameservergroup\/[a-zA-Z0-9-\.]*`
   */
  GameServerGroupArn: string;
};
/**
 * Type definition for `AWS::GameLift::GameServerGroup.AutoScalingPolicy`.
 * Configuration settings to define a scaling policy for the Auto Scaling group that is optimized for game hosting
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-gameservergroup-autoscalingpolicy.html}
 */
export type AutoScalingPolicy = {
  /**
   * Length of time, in seconds, it takes for a new instance to start new game server processes and register with GameLift FleetIQ.
   */
  EstimatedInstanceWarmup?: number;
  /**
   * Settings for a target-based scaling policy applied to Auto Scaling group.
   */
  TargetTrackingConfiguration: TargetTrackingConfiguration;
};
/**
 * Type definition for `AWS::GameLift::GameServerGroup.BalancingStrategy`.
 * The fallback balancing method to use for the game server group when Spot Instances in a Region become unavailable or are not viable for game hosting.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-gameservergroup-balancingstrategy.html}
 */
export type BalancingStrategy =
  | "SPOT_ONLY"
  | "SPOT_PREFERRED"
  | "ON_DEMAND_ONLY";
/**
 * Type definition for `AWS::GameLift::GameServerGroup.DeleteOption`.
 * The type of delete to perform.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-gameservergroup-deleteoption.html}
 */
export type DeleteOption = "SAFE_DELETE" | "FORCE_DELETE" | "RETAIN";
/**
 * Type definition for `AWS::GameLift::GameServerGroup.GameServerGroup`.
 * Properties that describe a game server group resource. A game server group manages certain properties of a corresponding EC2 Auto Scaling group.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-gameservergroup-gameservergroup.html}
 */
export type GameServerGroup = {
  /**
     * A generated unique ID for the EC2 Auto Scaling group that is associated with this game server group.
     * @maxLength `256`
     * @pattern `[ -퟿-�𐀀-􏿿
        ]*`
     */
  AutoScalingGroupArn?: string;
  /**
   * The fallback balancing method to use for the game server group when Spot Instances in a Region become unavailable or are not viable for game hosting.
   */
  BalancingStrategy?: BalancingStrategy;
  /**
   * A timestamp that indicates when this data object was created.
   */
  CreationTime?: string;
  /**
   * A generated unique ID for the game server group.
   * @minLength `1`
   * @maxLength `256`
   * @pattern `^arn:.*:gameservergroup\/[a-zA-Z0-9-\.]*`
   */
  GameServerGroupArn?: string;
  /**
   * An identifier for the new game server group.
   * @minLength `1`
   * @maxLength `128`
   * @pattern `[a-zA-Z0-9-\.]+`
   */
  GameServerGroupName?: string;
  /**
   * A flag that indicates whether instances in the game server group are protected from early termination.
   */
  GameServerProtectionPolicy?: GameServerProtectionPolicy;
  /**
   * A set of EC2 instance types to use when creating instances in the group.
   * @minLength `2`
   * @maxLength `20`
   */
  InstanceDefinitions?: InstanceDefinition[];
  /**
   * A timestamp that indicates when this game server group was last updated.
   */
  LastUpdatedTime?: string;
  /**
   * The Amazon Resource Name (ARN) for an IAM role that allows Amazon GameLift to access your EC2 Auto Scaling groups.
   * @minLength `1`
   * @maxLength `256`
   * @pattern `^arn:.*:role\/[\w+=,.@-]+`
   */
  RoleArn?: string;
  /**
   * The current status of the game server group.
   */
  Status?: Status;
  /**
   * Additional information about the current game server group status.
   * @minLength `1`
   * @maxLength `1024`
   */
  StatusReason?: string;
  SuspendedActions?: "REPLACE_INSTANCE_TYPES"[];
};
/**
 * Type definition for `AWS::GameLift::GameServerGroup.GameServerProtectionPolicy`.
 * A flag that indicates whether instances in the game server group are protected from early termination.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-gameservergroup-gameserverprotectionpolicy.html}
 */
export type GameServerProtectionPolicy = "NO_PROTECTION" | "FULL_PROTECTION";
/**
 * Type definition for `AWS::GameLift::GameServerGroup.InstanceDefinition`.
 * An allowed instance type for your game server group.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-gameservergroup-instancedefinition.html}
 */
export type InstanceDefinition = {
  /**
   * An EC2 instance type designation.
   */
  InstanceType: string;
  /**
   * Instance weighting that indicates how much this instance type contributes to the total capacity of a game server group.
   * @pattern `^[\u0031-\u0039][\u0030-\u0039]{0,2}$`
   */
  WeightedCapacity?: string;
};
/**
 * Type definition for `AWS::GameLift::GameServerGroup.LaunchTemplate`.
 * The EC2 launch template that contains configuration settings and game server code to be deployed to all instances in the game server group.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-gameservergroup-launchtemplate.html}
 */
export type LaunchTemplate = {
  /**
   * A unique identifier for an existing EC2 launch template.
   */
  LaunchTemplateId?: string;
  /**
   * A readable identifier for an existing EC2 launch template.
   */
  LaunchTemplateName?: string;
  /**
   * The version of the EC2 launch template to use.
   */
  Version?: string;
};
/**
 * Type definition for `AWS::GameLift::GameServerGroup.Status`.
 * The current status of the game server group.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-gameservergroup-status.html}
 */
export type Status =
  | "NEW"
  | "ACTIVATING"
  | "ACTIVE"
  | "DELETE_SCHEDULED"
  | "DELETING"
  | "DELETED"
  | "ERROR";
/**
 * Type definition for `AWS::GameLift::GameServerGroup.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-gameservergroup-tag.html}
 */
export type Tag = {
  /**
   * The key for a developer-defined key:value pair for tagging an AWS resource.
   */
  Key?: string;
  /**
   * The value for a developer-defined key:value pair for tagging an AWS resource.
   */
  Value?: string;
};
/**
 * Type definition for `AWS::GameLift::GameServerGroup.TargetTrackingConfiguration`.
 * Settings for a target-based scaling policy applied to Auto Scaling group.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-gameservergroup-targettrackingconfiguration.html}
 */
export type TargetTrackingConfiguration = {
  /**
   * Desired value to use with a game server group target-based scaling policy.
   */
  TargetValue: number;
};
/**
 * The AWS::GameLift::GameServerGroup resource creates an Amazon GameLift (GameLift) GameServerGroup.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-gameservergroup.html}
 */
export class GameLiftGameServerGroup extends $Resource<
  "AWS::GameLift::GameServerGroup",
  GameLiftGameServerGroupProperties,
  GameLiftGameServerGroupAttributes
> {
  public static readonly Type = "AWS::GameLift::GameServerGroup";
  public static readonly AttributeNames = [
    "AutoScalingGroupArn" as const,
    "GameServerGroupArn" as const,
  ];
  constructor(
    logicalId: string,
    properties: GameLiftGameServerGroupProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      GameLiftGameServerGroup.Type,
      properties,
      GameLiftGameServerGroup.AttributeNames,
      options,
    );
  }
}
