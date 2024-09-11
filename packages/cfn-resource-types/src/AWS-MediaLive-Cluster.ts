import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Definition of AWS::MediaLive::Cluster Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-cluster.html}
 */
export type MediaLiveClusterProperties = {
  /**
   * The hardware type for the cluster.
   */
  ClusterType?: ClusterType;
  /**
   * The IAM role your nodes will use.
   * @pattern `^arn:.+:iam:.+:role/.+$`
   */
  InstanceRoleArn?: string;
  /**
   * The user-specified name of the Cluster to be created.
   */
  Name?: string;
  /**
   * On premises settings which will have the interface network mappings and default Output logical interface
   */
  NetworkSettings?: ClusterNetworkSettings;
  /**
   * A collection of key-value pairs.
   */
  Tags?: Tags[];
};
/**
 * Attribute type definition for `AWS::MediaLive::Cluster`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-cluster.html#aws-resource-medialive-cluster-return-values}
 */
export type MediaLiveClusterAttributes = {
  /**
   * The ARN of the Cluster.
   * @pattern `^arn:.+:medialive:.+:cluster:.+$`
   */
  Arn: string;
  /**
   * The MediaLive Channels that are currently running on Nodes in this Cluster.
   */
  ChannelIds: string[];
  /**
   * The unique ID of the Cluster.
   */
  Id: string;
  /**
   * The current state of the Cluster.
   */
  State: ClusterState;
};
/**
 * Type definition for `AWS::MediaLive::Cluster.ClusterNetworkSettings`.
 * On premises settings which will have the interface network mappings and default Output logical interface
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-cluster-clusternetworksettings.html}
 */
export type ClusterNetworkSettings = {
  /**
   * Default value if the customer does not define it in channel Output API
   */
  DefaultRoute?: string;
  /**
   * Network mappings for the cluster
   */
  InterfaceMappings?: InterfaceMapping[];
};
/**
 * Type definition for `AWS::MediaLive::Cluster.ClusterState`.
 * The current state of the Cluster.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-cluster-clusterstate.html}
 */
export type ClusterState =
  | "CREATING"
  | "CREATE_FAILED"
  | "ACTIVE"
  | "DELETING"
  | "DELETED";
/**
 * Type definition for `AWS::MediaLive::Cluster.ClusterType`.
 * The hardware type for the cluster.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-cluster-clustertype.html}
 */
export type ClusterType =
  | "ON_PREMISES"
  | "OUTPOSTS_RACK"
  | "OUTPOSTS_SERVER"
  | "EC2";
/**
 * Type definition for `AWS::MediaLive::Cluster.InterfaceMapping`.
 * Network mappings for the cluster
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-cluster-interfacemapping.html}
 */
export type InterfaceMapping = {
  /**
   * logical interface name, unique in the list
   */
  LogicalInterfaceName?: string;
  /**
   * Network Id to be associated with the logical interface name, can be duplicated in list
   */
  NetworkId?: string;
};
/**
 * Type definition for `AWS::MediaLive::Cluster.Tags`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-cluster-tags.html}
 */
export type Tags = {
  Key?: string;
  Value?: string;
};
/**
 * Definition of AWS::MediaLive::Cluster Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-cluster.html}
 */
export class MediaLiveCluster extends $Resource<
  "AWS::MediaLive::Cluster",
  MediaLiveClusterProperties,
  MediaLiveClusterAttributes
> {
  public static readonly Type = "AWS::MediaLive::Cluster";
  constructor(
    logicalId: string,
    properties: MediaLiveClusterProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, MediaLiveCluster.Type, properties, options);
  }
}
