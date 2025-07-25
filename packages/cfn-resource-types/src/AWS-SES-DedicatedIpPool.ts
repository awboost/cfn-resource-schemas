import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::SES::DedicatedIpPool
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-dedicatedippool.html}
 */
export type SESDedicatedIpPoolProperties = {
  /**
   * The name of the dedicated IP pool.
   * @pattern `^[a-z0-9_-]{0,64}$`
   */
  PoolName?: string;
  /**
   * Specifies whether the dedicated IP pool is managed or not. The default value is STANDARD.
   * @pattern `^(STANDARD|MANAGED)$`
   */
  ScalingMode?: string;
  /**
   * The tags (keys and values) associated with the dedicated IP pool.
   * @minLength `0`
   * @maxLength `50`
   */
  Tags?: Tag[];
};
/**
 * Type definition for `AWS::SES::DedicatedIpPool.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-dedicatedippool-tag.html}
 */
export type Tag = {
  /**
   * @minLength `1`
   * @maxLength `128`
   */
  Key: string;
  /**
   * @minLength `0`
   * @maxLength `256`
   */
  Value: string;
};
/**
 * Resource Type definition for AWS::SES::DedicatedIpPool
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-dedicatedippool.html}
 */
export class SESDedicatedIpPool extends $Resource<
  "AWS::SES::DedicatedIpPool",
  SESDedicatedIpPoolProperties,
  Record<string, never>
> {
  public static readonly Type = "AWS::SES::DedicatedIpPool";
  constructor(
    logicalId: string,
    properties: SESDedicatedIpPoolProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, SESDedicatedIpPool.Type, properties, options);
  }
}
