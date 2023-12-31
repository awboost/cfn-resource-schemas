import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::ECS::PrimaryTaskSet`.
 * A pseudo-resource that manages which of your ECS task sets is primary.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecs-primarytaskset.html}
 */
export type ECSPrimaryTaskSetProperties = {
  /**
   * The short name or full Amazon Resource Name (ARN) of the cluster that hosts the service to create the task set in.
   */
  Cluster: string;
  /**
   * The short name or full Amazon Resource Name (ARN) of the service to create the task set in.
   */
  Service: string;
  /**
   * The ID or full Amazon Resource Name (ARN) of the task set.
   */
  TaskSetId: string;
};
/**
 * Resource type definition for `AWS::ECS::PrimaryTaskSet`.
 * A pseudo-resource that manages which of your ECS task sets is primary.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecs-primarytaskset.html}
 */
export class ECSPrimaryTaskSet extends $Resource<
  "AWS::ECS::PrimaryTaskSet",
  ECSPrimaryTaskSetProperties,
  Record<string, never>
> {
  public static readonly Type = "AWS::ECS::PrimaryTaskSet";
  constructor(
    logicalId: string,
    properties: ECSPrimaryTaskSetProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, ECSPrimaryTaskSet.Type, properties, options);
  }
}
