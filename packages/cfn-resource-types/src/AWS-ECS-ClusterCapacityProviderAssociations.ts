import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource type definition for `AWS::ECS::ClusterCapacityProviderAssociations`.
 * Associate a set of ECS Capacity Providers with a specified ECS Cluster
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecs-clustercapacityproviderassociations.html}
 */
export type ECSClusterCapacityProviderAssociationsProperties = {
  /**
   * List of capacity providers to associate with the cluster
   */
  CapacityProviders: (("FARGATE" | "FARGATE_SPOT") | string)[];
  /**
   * The name of the cluster
   * @minLength `1`
   * @maxLength `2048`
   */
  Cluster: string;
  /**
   * List of capacity providers to associate with the cluster
   */
  DefaultCapacityProviderStrategy: CapacityProviderStrategy[];
};
/**
 * Type definition for `AWS::ECS::ClusterCapacityProviderAssociations.CapacityProviderStrategy`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-clustercapacityproviderassociations-capacityproviderstrategy.html}
 */
export type CapacityProviderStrategy = {
  /**
   * @max `100000`
   */
  Base?: number;
  /**
   * If using ec2 auto-scaling, the name of the associated capacity provider. Otherwise FARGATE, FARGATE_SPOT.
   */
  CapacityProvider: ("FARGATE" | "FARGATE_SPOT") | string;
  /**
   * @max `1000`
   */
  Weight?: number;
};
/**
 * Resource type definition for `AWS::ECS::ClusterCapacityProviderAssociations`.
 * Associate a set of ECS Capacity Providers with a specified ECS Cluster
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecs-clustercapacityproviderassociations.html}
 */
export class ECSClusterCapacityProviderAssociations extends $Resource<
  "AWS::ECS::ClusterCapacityProviderAssociations",
  ECSClusterCapacityProviderAssociationsProperties,
  Record<string, never>
> {
  public static readonly Type = "AWS::ECS::ClusterCapacityProviderAssociations";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: ECSClusterCapacityProviderAssociationsProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      ECSClusterCapacityProviderAssociations.Type,
      properties,
      ECSClusterCapacityProviderAssociations.AttributeNames,
      options,
    );
  }
}
