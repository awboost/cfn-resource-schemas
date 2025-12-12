import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource schema for AWS::EKS::Nodegroup
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-nodegroup.html}
 */
export type EKSNodegroupProperties = {
  /**
   * The AMI type for your node group.
   */
  AmiType?: string;
  /**
   * The capacity type of your managed node group.
   */
  CapacityType?: string;
  /**
   * Name of the cluster to create the node group in.
   * @minLength `1`
   */
  ClusterName: string;
  /**
   * The root device disk size (in GiB) for your node group instances.
   */
  DiskSize?: number;
  /**
   * Force the update if the existing node group's pods are unable to be drained due to a pod disruption budget issue.
   */
  ForceUpdateEnabled?: boolean;
  /**
   * Specify the instance types for a node group.
   */
  InstanceTypes?: string[];
  /**
   * The Kubernetes labels to be applied to the nodes in the node group when they are created.
   */
  Labels?: Record<string, string>;
  /**
   * An object representing a node group's launch template specification.
   */
  LaunchTemplate?: LaunchTemplateSpecification;
  /**
   * The node auto repair configuration for node group.
   */
  NodeRepairConfig?: NodeRepairConfig;
  /**
   * The Amazon Resource Name (ARN) of the IAM role to associate with your node group.
   */
  NodeRole: string;
  /**
   * The unique name to give your node group.
   * @minLength `1`
   */
  NodegroupName?: string;
  /**
   * The AMI version of the Amazon EKS-optimized AMI to use with your node group.
   */
  ReleaseVersion?: string;
  /**
   * The remote access (SSH) configuration to use with your node group.
   */
  RemoteAccess?: RemoteAccess;
  /**
   * The scaling configuration details for the Auto Scaling group that is created for your node group.
   */
  ScalingConfig?: ScalingConfig;
  /**
   * The subnets to use for the Auto Scaling group that is created for your node group.
   */
  Subnets: string[];
  /**
   * The metadata, as key-value pairs, to apply to the node group to assist with categorization and organization. Follows same schema as Labels for consistency.
   */
  Tags?: Record<string, string>;
  /**
   * The Kubernetes taints to be applied to the nodes in the node group when they are created.
   */
  Taints?: Taint[];
  /**
   * The node group update configuration.
   */
  UpdateConfig?: UpdateConfig;
  /**
   * The Kubernetes version to use for your managed nodes.
   */
  Version?: string;
};
/**
 * Attribute type definition for `AWS::EKS::Nodegroup`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-nodegroup.html#aws-resource-eks-nodegroup-return-values}
 */
export type EKSNodegroupAttributes = {
  Arn: string;
  Id: string;
};
/**
 * Type definition for `AWS::EKS::Nodegroup.LaunchTemplateSpecification`.
 * An object representing a launch template specification for AWS EKS Nodegroup.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-eks-nodegroup-launchtemplatespecification.html}
 */
export type LaunchTemplateSpecification = {
  /**
   * @minLength `1`
   */
  Id?: string;
  /**
   * @minLength `1`
   */
  Name?: string;
  /**
   * @minLength `1`
   */
  Version?: string;
};
/**
 * Type definition for `AWS::EKS::Nodegroup.NodeRepairConfig`.
 * The node auto repair configuration for node group.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-eks-nodegroup-noderepairconfig.html}
 */
export type NodeRepairConfig = {
  /**
   * Set this value to true to enable node auto repair for the node group.
   */
  Enabled?: boolean;
  /**
   * Specify the maximum number of nodes that can be repaired concurrently or in parallel, expressed as a count of unhealthy nodes. This gives you finer-grained control over the pace of node replacements. When using this, you cannot also set MaxParallelNodesRepairedPercentage at the same time.
   * @min `1`
   */
  MaxParallelNodesRepairedCount?: number;
  /**
   * Specify the maximum number of nodes that can be repaired concurrently or in parallel, expressed as a percentage of unhealthy nodes. This gives you finer-grained control over the pace of node replacements. When using this, you cannot also set MaxParallelNodesRepairedCount at the same time.
   * @min `1`
   * @max `100`
   */
  MaxParallelNodesRepairedPercentage?: number;
  /**
   * Specify a count threshold of unhealthy nodes, above which node auto repair actions will stop. When using this, you cannot also set MaxUnhealthyNodeThresholdPercentage at the same time.
   * @min `1`
   */
  MaxUnhealthyNodeThresholdCount?: number;
  /**
   * Specify a percentage threshold of unhealthy nodes, above which node auto repair actions will stop. When using this, you cannot also set MaxUnhealthyNodeThresholdCount at the same time.
   * @min `1`
   * @max `100`
   */
  MaxUnhealthyNodeThresholdPercentage?: number;
  /**
   * Specify granular overrides for specific repair actions. These overrides control the repair action and the repair delay time before a node is considered eligible for repair. If you use this, you must specify all the values.
   */
  NodeRepairConfigOverrides?: NodeRepairConfigOverrides[];
};
/**
 * Type definition for `AWS::EKS::Nodegroup.NodeRepairConfigOverrides`.
 * Specify granular overrides for specific repair actions. These overrides control the repair action and the repair delay time before a node is considered eligible for repair. If you use this, you must specify all the values.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-eks-nodegroup-noderepairconfigoverrides.html}
 */
export type NodeRepairConfigOverrides = {
  /**
   * Specify the minimum time in minutes to wait before attempting to repair a node with this specific NodeMonitoringCondition and NodeUnhealthyReason.
   * @min `1`
   */
  MinRepairWaitTimeMins?: number;
  /**
   * Specify an unhealthy condition reported by the node monitoring agent that this override would apply to.
   */
  NodeMonitoringCondition?: string;
  /**
   * Specify a reason reported by the node monitoring agent that this override would apply to.
   */
  NodeUnhealthyReason?: string;
  /**
   * Specify the repair action to take for nodes when all of the specified conditions are met.
   */
  RepairAction?: "Replace" | "Reboot" | "NoAction";
};
/**
 * Type definition for `AWS::EKS::Nodegroup.RemoteAccess`.
 * An object representing a remote access configuration specification for AWS EKS Nodegroup.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-eks-nodegroup-remoteaccess.html}
 */
export type RemoteAccess = {
  Ec2SshKey: string;
  SourceSecurityGroups?: string[];
};
/**
 * Type definition for `AWS::EKS::Nodegroup.ScalingConfig`.
 * An object representing a auto scaling group specification for AWS EKS Nodegroup.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-eks-nodegroup-scalingconfig.html}
 */
export type ScalingConfig = {
  /**
   * @min `0`
   */
  DesiredSize?: number;
  /**
   * @min `1`
   */
  MaxSize?: number;
  /**
   * @min `0`
   */
  MinSize?: number;
};
/**
 * Type definition for `AWS::EKS::Nodegroup.Taint`.
 * An object representing a Taint specification for AWS EKS Nodegroup.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-eks-nodegroup-taint.html}
 */
export type Taint = {
  /**
   * @minLength `1`
   */
  Effect?: string;
  /**
   * @minLength `1`
   */
  Key?: string;
  /**
   * @minLength `0`
   */
  Value?: string;
};
/**
 * Type definition for `AWS::EKS::Nodegroup.UpdateConfig`.
 * The node group update configuration.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-eks-nodegroup-updateconfig.html}
 */
export type UpdateConfig = {
  /**
   * The maximum number of nodes unavailable at once during a version update. Nodes will be updated in parallel. This value or maxUnavailablePercentage is required to have a value.The maximum number is 100.
   * @min `1`
   */
  MaxUnavailable?: number;
  /**
   * The maximum percentage of nodes unavailable during a version update. This percentage of nodes will be updated in parallel, up to 100 nodes at once. This value or maxUnavailable is required to have a value.
   * @min `1`
   * @max `100`
   */
  MaxUnavailablePercentage?: number;
  /**
   * The configuration for the behavior to follow during an node group version update of this managed node group. You choose between two possible strategies for replacing nodes during an UpdateNodegroupVersion action.
   */
  UpdateStrategy?: string;
};
/**
 * Resource schema for AWS::EKS::Nodegroup
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-nodegroup.html}
 */
export class EKSNodegroup extends $Resource<
  "AWS::EKS::Nodegroup",
  EKSNodegroupProperties,
  EKSNodegroupAttributes
> {
  public static readonly Type = "AWS::EKS::Nodegroup";
  constructor(
    logicalId: string,
    properties: EKSNodegroupProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, EKSNodegroup.Type, properties, options);
  }
}
