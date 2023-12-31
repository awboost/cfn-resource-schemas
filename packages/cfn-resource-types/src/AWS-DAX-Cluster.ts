import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource Type definition for AWS::DAX::Cluster
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dax-cluster.html}
 */
export type DAXClusterProperties = {
  AvailabilityZones?: string[];
  ClusterEndpointEncryptionType?: string;
  ClusterName?: string;
  Description?: string;
  IAMRoleARN: string;
  NodeType: string;
  NotificationTopicARN?: string;
  ParameterGroupName?: string;
  PreferredMaintenanceWindow?: string;
  ReplicationFactor: number;
  SSESpecification?: SSESpecification;
  SecurityGroupIds?: string[];
  SubnetGroupName?: string;
  Tags?: Record<string, any>;
};
/**
 * Attribute type definition for `AWS::DAX::Cluster`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dax-cluster.html#aws-resource-dax-cluster-return-values}
 */
export type DAXClusterAttributes = {
  Arn: string;
  ClusterDiscoveryEndpoint: string;
  ClusterDiscoveryEndpointURL: string;
  Id: string;
};
/**
 * Type definition for `AWS::DAX::Cluster.SSESpecification`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dax-cluster-ssespecification.html}
 */
export type SSESpecification = {
  SSEEnabled?: boolean;
};
/**
 * Resource Type definition for AWS::DAX::Cluster
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dax-cluster.html}
 */
export class DAXCluster extends $Resource<
  "AWS::DAX::Cluster",
  DAXClusterProperties,
  DAXClusterAttributes
> {
  public static readonly Type = "AWS::DAX::Cluster";
  public static readonly AttributeNames = [
    "Arn" as const,
    "ClusterDiscoveryEndpoint" as const,
    "ClusterDiscoveryEndpointURL" as const,
    "Id" as const,
  ];
  constructor(
    logicalId: string,
    properties: DAXClusterProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      DAXCluster.Type,
      properties,
      DAXCluster.AttributeNames,
      options,
    );
  }
}
