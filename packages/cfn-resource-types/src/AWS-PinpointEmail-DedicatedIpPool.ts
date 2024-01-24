import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::PinpointEmail::DedicatedIpPool
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpointemail-dedicatedippool.html}
 */
export type PinpointEmailDedicatedIpPoolProperties = {
  PoolName?: string;
  Tags?: Tags[];
};
/**
 * Attribute type definition for `AWS::PinpointEmail::DedicatedIpPool`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpointemail-dedicatedippool.html#aws-resource-pinpointemail-dedicatedippool-return-values}
 */
export type PinpointEmailDedicatedIpPoolAttributes = {
  Id: string;
};
/**
 * Type definition for `AWS::PinpointEmail::DedicatedIpPool.Tags`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpointemail-dedicatedippool-tags.html}
 */
export type Tags = {
  Key?: string;
  Value?: string;
};
/**
 * Resource Type definition for AWS::PinpointEmail::DedicatedIpPool
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpointemail-dedicatedippool.html}
 */
export class PinpointEmailDedicatedIpPool extends $Resource<
  "AWS::PinpointEmail::DedicatedIpPool",
  PinpointEmailDedicatedIpPoolProperties,
  PinpointEmailDedicatedIpPoolAttributes
> {
  public static readonly Type = "AWS::PinpointEmail::DedicatedIpPool";
  constructor(
    logicalId: string,
    properties: PinpointEmailDedicatedIpPoolProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, PinpointEmailDedicatedIpPool.Type, properties, options);
  }
}
