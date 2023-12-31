import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
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
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: AutoScalingWarmPoolProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      AutoScalingWarmPool.Type,
      properties,
      AutoScalingWarmPool.AttributeNames,
      options,
    );
  }
}
