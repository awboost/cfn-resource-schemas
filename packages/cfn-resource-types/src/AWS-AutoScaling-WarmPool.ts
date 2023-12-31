import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource schema for AWS::AutoScaling::WarmPool.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-autoscaling-warmpool.html}
 */
export type AutoScalingWarmPoolProperties = {
  AutoScalingGroupName: string;
  InstanceReusePolicy?: InstanceReusePolicy;
  MaxGroupPreparedCapacity?: number;
  MinSize?: number;
  PoolState?: string;
};
/**
 * Type definition for `AWS::AutoScaling::WarmPool.InstanceReusePolicy`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-autoscaling-warmpool-instancereusepolicy.html}
 */
export type InstanceReusePolicy = {
  ReuseOnScaleIn?: boolean;
};
/**
 * Resource schema for AWS::AutoScaling::WarmPool.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-autoscaling-warmpool.html}
 */
export class AutoScalingWarmPool extends $Resource<
  "AWS::AutoScaling::WarmPool",
  AutoScalingWarmPoolProperties,
  Record<string, never>
> {
  public static readonly Type = "AWS::AutoScaling::WarmPool";
  constructor(
    logicalId: string,
    properties: AutoScalingWarmPoolProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, AutoScalingWarmPool.Type, properties, options);
  }
}
