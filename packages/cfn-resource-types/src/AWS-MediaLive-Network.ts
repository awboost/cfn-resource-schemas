import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource schema for AWS::MediaLive::Network.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-network.html}
 */
export type MediaLiveNetworkProperties = {
  /**
   * The list of IP address cidr pools for the network
   */
  IpPools: IpPool[];
  /**
   * The user-specified name of the Network to be created.
   */
  Name: string;
  /**
   * The routes for the network
   */
  Routes?: Route[];
  /**
   * A collection of key-value pairs.
   */
  Tags?: Tags[];
};
/**
 * Attribute type definition for `AWS::MediaLive::Network`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-network.html#aws-resource-medialive-network-return-values}
 */
export type MediaLiveNetworkAttributes = {
  /**
   * The ARN of the Network.
   */
  Arn: string;
  AssociatedClusterIds: string[];
  /**
   * The unique ID of the Network.
   */
  Id: string;
  /**
   * The current state of the Network.
   */
  State: NetworkState;
};
/**
 * Type definition for `AWS::MediaLive::Network.IpPool`.
 * IP address cidr pool
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-network-ippool.html}
 */
export type IpPool = {
  /**
   * IP address cidr pool
   */
  Cidr?: string;
};
/**
 * Type definition for `AWS::MediaLive::Network.NetworkState`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-network-networkstate.html}
 */
export type NetworkState =
  | "CREATING"
  | "CREATE_FAILED"
  | "ACTIVE"
  | "DELETING"
  | "IDLE"
  | "IN_USE"
  | "UPDATING"
  | "DELETED"
  | "DELETE_FAILED";
/**
 * Type definition for `AWS::MediaLive::Network.Route`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-network-route.html}
 */
export type Route = {
  /**
   * Ip address cidr
   */
  Cidr?: string;
  /**
   * IP address for the route packet paths
   */
  Gateway?: string;
};
/**
 * Type definition for `AWS::MediaLive::Network.Tags`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-network-tags.html}
 */
export type Tags = {
  Key?: string;
  Value?: string;
};
/**
 * Resource schema for AWS::MediaLive::Network.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-network.html}
 */
export class MediaLiveNetwork extends $Resource<
  "AWS::MediaLive::Network",
  MediaLiveNetworkProperties,
  MediaLiveNetworkAttributes
> {
  public static readonly Type = "AWS::MediaLive::Network";
  constructor(
    logicalId: string,
    properties: MediaLiveNetworkProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, MediaLiveNetwork.Type, properties, options);
  }
}
