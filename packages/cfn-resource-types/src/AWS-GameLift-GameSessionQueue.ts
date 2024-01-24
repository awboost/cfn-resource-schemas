import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * The AWS::GameLift::GameSessionQueue resource creates an Amazon GameLift (GameLift) game session queue.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-gamesessionqueue.html}
 */
export type GameLiftGameSessionQueueProperties = {
  /**
   * Information that is added to all events that are related to this game session queue.
   * @minLength `1`
   * @maxLength `256`
   * @pattern `[\s\S]*`
   */
  CustomEventData?: string;
  /**
   * A list of fleets and/or fleet aliases that can be used to fulfill game session placement requests in the queue.
   */
  Destinations?: GameSessionQueueDestination[];
  /**
   * A list of locations where a queue is allowed to place new game sessions.
   */
  FilterConfiguration?: FilterConfiguration;
  /**
   * A descriptive label that is associated with game session queue. Queue names must be unique within each Region.
   * @minLength `1`
   * @maxLength `128`
   * @pattern `[a-zA-Z0-9-]+`
   */
  Name: string;
  /**
   * An SNS topic ARN that is set up to receive game session placement notifications.
   * @minLength `1`
   * @maxLength `300`
   * @pattern `[a-zA-Z0-9:_-]*(\.fifo)?`
   */
  NotificationTarget?: string;
  /**
   * A set of policies that act as a sliding cap on player latency.
   */
  PlayerLatencyPolicies?: PlayerLatencyPolicy[];
  /**
   * Custom settings to use when prioritizing destinations and locations for game session placements.
   */
  PriorityConfiguration?: PriorityConfiguration;
  /**
   * An array of key-value pairs to apply to this resource.
   * @maxLength `200`
   */
  Tags?: Tag[];
  /**
   * The maximum time, in seconds, that a new game session placement request remains in the queue.
   * @min `0`
   */
  TimeoutInSeconds?: number;
};
/**
 * Attribute type definition for `AWS::GameLift::GameSessionQueue`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-gamesessionqueue.html#aws-resource-gamelift-gamesessionqueue-return-values}
 */
export type GameLiftGameSessionQueueAttributes = {
  /**
   * The Amazon Resource Name (ARN) that is assigned to a Amazon GameLift game session queue resource and uniquely identifies it.
   * @minLength `1`
   * @maxLength `256`
   * @pattern `^arn:.*:gamesessionqueue\/[a-zA-Z0-9-]+`
   */
  Arn: string;
};
/**
 * Type definition for `AWS::GameLift::GameSessionQueue.FilterConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-gamesessionqueue-filterconfiguration.html}
 */
export type FilterConfiguration = {
  /**
   * A list of locations to allow game session placement in, in the form of AWS Region codes such as us-west-2.
   * @minLength `1`
   * @maxLength `100`
   */
  AllowedLocations?: string[];
};
/**
 * Type definition for `AWS::GameLift::GameSessionQueue.GameSessionQueueDestination`.
 * A fleet or alias designated in a game session queue.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-gamesessionqueue-gamesessionqueuedestination.html}
 */
export type GameSessionQueueDestination = {
  /**
   * @minLength `1`
   * @maxLength `256`
   * @pattern `[a-zA-Z0-9:/-]+`
   */
  DestinationArn?: string;
};
/**
 * Type definition for `AWS::GameLift::GameSessionQueue.PlayerLatencyPolicy`.
 * Sets a latency cap for individual players when placing a game session.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-gamesessionqueue-playerlatencypolicy.html}
 */
export type PlayerLatencyPolicy = {
  /**
   * The maximum latency value that is allowed for any player, in milliseconds. All policies must have a value set for this property.
   * @min `0`
   */
  MaximumIndividualPlayerLatencyMilliseconds?: number;
  /**
   * The length of time, in seconds, that the policy is enforced while placing a new game session.
   * @min `0`
   */
  PolicyDurationSeconds?: number;
};
/**
 * Type definition for `AWS::GameLift::GameSessionQueue.PriorityConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-gamesessionqueue-priorityconfiguration.html}
 */
export type PriorityConfiguration = {
  /**
   * The prioritization order to use for fleet locations, when the PriorityOrder property includes LOCATION.
   * @minLength `1`
   * @maxLength `100`
   */
  LocationOrder?: string[];
  /**
   * The recommended sequence to use when prioritizing where to place new game sessions.
   * @minLength `1`
   * @maxLength `4`
   */
  PriorityOrder?: ("LATENCY" | "COST" | "DESTINATION" | "LOCATION")[];
};
/**
 * Type definition for `AWS::GameLift::GameSessionQueue.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-gamesessionqueue-tag.html}
 */
export type Tag = {
  /**
   * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length.
   * @minLength `1`
   * @maxLength `128`
   */
  Key: string;
  /**
   * The value for the tag. You can specify a value that is 1 to 256 Unicode characters in length.
   * @minLength `1`
   * @maxLength `256`
   */
  Value: string;
};
/**
 * The AWS::GameLift::GameSessionQueue resource creates an Amazon GameLift (GameLift) game session queue.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-gamesessionqueue.html}
 */
export class GameLiftGameSessionQueue extends $Resource<
  "AWS::GameLift::GameSessionQueue",
  GameLiftGameSessionQueueProperties,
  GameLiftGameSessionQueueAttributes
> {
  public static readonly Type = "AWS::GameLift::GameSessionQueue";
  constructor(
    logicalId: string,
    properties: GameLiftGameSessionQueueProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, GameLiftGameSessionQueue.Type, properties, options);
  }
}
