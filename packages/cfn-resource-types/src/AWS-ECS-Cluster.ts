import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::ECS::Cluster`.
 * Create an Elastic Container Service (ECS) cluster.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecs-cluster.html}
 */
export type ECSClusterProperties = {
  CapacityProviders?: string[];
  /**
   * A user-generated string that you use to identify your cluster. If you don't specify a name, AWS CloudFormation generates a unique physical ID for the name.
   */
  ClusterName?: string;
  ClusterSettings?: ClusterSettings[];
  /**
   * The configurations to be set at cluster level.
   */
  Configuration?: ClusterConfiguration;
  DefaultCapacityProviderStrategy?: CapacityProviderStrategyItem[];
  /**
   * Service Connect Configuration default for all services or tasks within this cluster
   */
  ServiceConnectDefaults?: ServiceConnectDefaults;
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::ECS::Cluster`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecs-cluster.html#aws-resource-ecs-cluster-return-values}
 */
export type ECSClusterAttributes = {
  /**
   * The Amazon Resource Name (ARN) of the Amazon ECS cluster, such as arn:aws:ecs:us-east-2:123456789012:cluster/MyECSCluster.
   */
  Arn: string;
};
/**
 * Type definition for `AWS::ECS::Cluster.CapacityProviderStrategyItem`.
 * A capacity provider strategy consists of one or more capacity providers along with the `base` and `weight` to assign to them. A capacity provider must be associated with the cluster to be used in a capacity provider strategy. The PutClusterCapacityProviders API is used to associate a capacity provider with a cluster. Only capacity providers with an `ACTIVE` or `UPDATING` status can be used.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-cluster-capacityproviderstrategyitem.html}
 */
export type CapacityProviderStrategyItem = {
  Base?: number;
  CapacityProvider?: string;
  Weight?: number;
};
/**
 * Type definition for `AWS::ECS::Cluster.ClusterConfiguration`.
 * The configurations to be set at cluster level.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-cluster-clusterconfiguration.html}
 */
export type ClusterConfiguration = {
  /**
   * The configuration for ExecuteCommand.
   */
  ExecuteCommandConfiguration?: ExecuteCommandConfiguration;
};
/**
 * Type definition for `AWS::ECS::Cluster.ClusterSettings`.
 * The setting to use when creating a cluster. This parameter is used to enable CloudWatch Container Insights for a cluster. If this value is specified, it will override the containerInsights value set with PutAccountSetting or PutAccountSettingDefault.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-cluster-clustersettings.html}
 */
export type ClusterSettings = {
  Name?: string;
  Value?: string;
};
/**
 * Type definition for `AWS::ECS::Cluster.ExecuteCommandConfiguration`.
 * The configuration for ExecuteCommand.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-cluster-executecommandconfiguration.html}
 */
export type ExecuteCommandConfiguration = {
  KmsKeyId?: string;
  /**
   * The session logging configuration for ExecuteCommand.
   */
  LogConfiguration?: ExecuteCommandLogConfiguration;
  Logging?: string;
};
/**
 * Type definition for `AWS::ECS::Cluster.ExecuteCommandLogConfiguration`.
 * The session logging configuration for ExecuteCommand.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-cluster-executecommandlogconfiguration.html}
 */
export type ExecuteCommandLogConfiguration = {
  CloudWatchEncryptionEnabled?: boolean;
  CloudWatchLogGroupName?: string;
  S3BucketName?: string;
  S3EncryptionEnabled?: boolean;
  S3KeyPrefix?: string;
};
/**
 * Type definition for `AWS::ECS::Cluster.ServiceConnectDefaults`.
 * Service Connect Configuration default for all services or tasks within this cluster
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-cluster-serviceconnectdefaults.html}
 */
export type ServiceConnectDefaults = {
  /**
   * Service Connect Namespace Name or ARN default for all services or tasks within this cluster
   */
  Namespace?: string;
};
/**
 * Type definition for `AWS::ECS::Cluster.Tag`.
 * The metadata that you apply to the cluster to help you categorize and organize them. Each tag consists of a key and an optional value, both of which you define.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-cluster-tag.html}
 */
export type Tag = {
  Key?: string;
  Value?: string;
};
/**
 * Resource type definition for `AWS::ECS::Cluster`.
 * Create an Elastic Container Service (ECS) cluster.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecs-cluster.html}
 */
export class ECSCluster extends $Resource<
  "AWS::ECS::Cluster",
  ECSClusterProperties,
  ECSClusterAttributes
> {
  public static readonly Type = "AWS::ECS::Cluster";
  constructor(
    logicalId: string,
    properties: ECSClusterProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, ECSCluster.Type, properties, options);
  }
}
