import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::Connect::RoutingProfile
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-routingprofile.html}
 */
export type ConnectRoutingProfileProperties = {
  /**
   * Whether agents with this routing profile will have their routing order calculated based on longest idle time or time since their last inbound contact.
   */
  AgentAvailabilityTimer?:
    | "TIME_SINCE_LAST_ACTIVITY"
    | "TIME_SINCE_LAST_INBOUND";
  /**
   * The identifier of the default outbound queue for this routing profile.
   * @pattern `^arn:aws[-a-z0-9]*:connect:[-a-z0-9]*:[0-9]{12}:instance/[-a-zA-Z0-9]/‍*queue/[-a-zA-Z0-9]*$`
   */
  DefaultOutboundQueueArn: string;
  /**
   * The description of the routing profile.
   * @minLength `1`
   * @maxLength `250`
   */
  Description: string;
  /**
   * The identifier of the Amazon Connect instance.
   * @pattern `^arn:aws[-a-z0-9]*:connect:[-a-z0-9]*:[0-9]{12}:instance/[-a-zA-Z0-9]*$`
   */
  InstanceArn: string;
  /**
   * The channels agents can handle in the Contact Control Panel (CCP) for this routing profile.
   */
  MediaConcurrencies: MediaConcurrency[];
  /**
   * The name of the routing profile.
   * @minLength `1`
   * @maxLength `127`
   */
  Name: string;
  /**
   * The queues to associate with this routing profile.
   * @minLength `1`
   */
  QueueConfigs?: RoutingProfileQueueConfig[];
  /**
   * An array of key-value pairs to apply to this resource.
   * @maxLength `50`
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::Connect::RoutingProfile`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-routingprofile.html#aws-resource-connect-routingprofile-return-values}
 */
export type ConnectRoutingProfileAttributes = {
  /**
   * The Amazon Resource Name (ARN) of the routing profile.
   * @pattern `^arn:aws[-a-z0-9]*:connect:[-a-z0-9]*:[0-9]{12}:instance/[-a-zA-Z0-9]/‍*routing-profile/[-a-zA-Z0-9]*$`
   */
  RoutingProfileArn: string;
};
/**
 * Type definition for `AWS::Connect::RoutingProfile.BehaviorType`.
 * Specifies the other channels that can be routed to an agent handling their current channel.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-routingprofile-behaviortype.html}
 */
export type BehaviorType = "ROUTE_CURRENT_CHANNEL_ONLY" | "ROUTE_ANY_CHANNEL";
/**
 * Type definition for `AWS::Connect::RoutingProfile.Channel`.
 * The channels that agents can handle in the Contact Control Panel (CCP).
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-routingprofile-channel.html}
 */
export type Channel = "VOICE" | "CHAT" | "TASK" | "EMAIL";
/**
 * Type definition for `AWS::Connect::RoutingProfile.CrossChannelBehavior`.
 * Defines the cross-channel routing behavior that allows an agent working on a contact in one channel to be offered a contact from a different channel.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-routingprofile-crosschannelbehavior.html}
 */
export type CrossChannelBehavior = {
  /**
   * Specifies the other channels that can be routed to an agent handling their current channel.
   */
  BehaviorType: BehaviorType;
};
/**
 * Type definition for `AWS::Connect::RoutingProfile.MediaConcurrency`.
 * Contains information about which channels are supported, and how many contacts an agent can have on a channel simultaneously.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-routingprofile-mediaconcurrency.html}
 */
export type MediaConcurrency = {
  /**
   * The channels that agents can handle in the Contact Control Panel (CCP).
   */
  Channel: Channel;
  /**
   * The number of contacts an agent can have on a channel simultaneously.
   * @min `1`
   * @max `10`
   */
  Concurrency: number;
  /**
   * Defines the cross-channel routing behavior that allows an agent working on a contact in one channel to be offered a contact from a different channel.
   */
  CrossChannelBehavior?: CrossChannelBehavior;
};
/**
 * Type definition for `AWS::Connect::RoutingProfile.RoutingProfileQueueConfig`.
 * Contains information about the queue and channel for which priority and delay can be set.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-routingprofile-routingprofilequeueconfig.html}
 */
export type RoutingProfileQueueConfig = {
  /**
   * The delay, in seconds, a contact should wait in the queue before they are routed to an available agent.
   * @min `0`
   * @max `9999`
   */
  Delay: number;
  /**
   * The order in which contacts are to be handled for the queue.
   * @min `1`
   * @max `99`
   */
  Priority: number;
  /**
   * Contains the channel and queue identifier for a routing profile.
   */
  QueueReference: RoutingProfileQueueReference;
};
/**
 * Type definition for `AWS::Connect::RoutingProfile.RoutingProfileQueueReference`.
 * Contains the channel and queue identifier for a routing profile.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-routingprofile-routingprofilequeuereference.html}
 */
export type RoutingProfileQueueReference = {
  /**
   * The channels that agents can handle in the Contact Control Panel (CCP).
   */
  Channel: Channel;
  /**
   * The Amazon Resource Name (ARN) for the queue.
   * @pattern `^arn:aws[-a-z0-9]*:connect:[-a-z0-9]*:[0-9]{12}:instance/[-a-zA-Z0-9]/‍*queue/[-a-zA-Z0-9]*$`
   */
  QueueArn: string;
};
/**
 * Type definition for `AWS::Connect::RoutingProfile.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-routingprofile-tag.html}
 */
export type Tag = {
  /**
   * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @minLength `1`
   * @maxLength `128`
   * @pattern `^(?!aws:)[a-zA-Z+-=._:/]+$`
   */
  Key: string;
  /**
   * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @maxLength `256`
   */
  Value: string;
};
/**
 * Resource Type definition for AWS::Connect::RoutingProfile
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-routingprofile.html}
 */
export class ConnectRoutingProfile extends $Resource<
  "AWS::Connect::RoutingProfile",
  ConnectRoutingProfileProperties,
  ConnectRoutingProfileAttributes
> {
  public static readonly Type = "AWS::Connect::RoutingProfile";
  constructor(
    logicalId: string,
    properties: ConnectRoutingProfileProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, ConnectRoutingProfile.Type, properties, options);
  }
}
