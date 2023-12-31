import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::ECS::ClusterCapacityProviderAssociations`.
 * Associate a set of ECS Capacity Providers with a specified ECS Cluster
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecs-clustercapacityproviderassociations.html}
 */
export type ECSClusterCapacityProviderAssociationsProperties = {
  /**
   * List of capacity providers to associate with the cluster
   */
  CapacityProviders: CapacityProvider[];
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
 * Type definition for `AWS::ECS::ClusterCapacityProviderAssociations.CapacityProvider`.
 * If using ec2 auto-scaling, the name of the associated capacity provider. Otherwise FARGATE, FARGATE_SPOT.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-clustercapacityproviderassociations-capacityprovider.html}
 */
export type CapacityProvider = ("FARGATE" | "FARGATE_SPOT") | string;
/**
 * Type definition for `AWS::ECS::ClusterCapacityProviderAssociations.CapacityProviderStrategy`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-clustercapacityproviderassociations-capacityproviderstrategy.html}
 */
export type CapacityProviderStrategy = {
  /**
   * @min `0`
   * @max `100000`
   */
  Base?: number;
  /**
   * If using ec2 auto-scaling, the name of the associated capacity provider. Otherwise FARGATE, FARGATE_SPOT.
   */
  CapacityProvider: CapacityProvider;
  /**
   * @min `0`
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
  constructor(
    logicalId: string,
    properties: ECSClusterCapacityProviderAssociationsProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      ECSClusterCapacityProviderAssociations.Type,
      properties,
      options,
    );
  }
}
