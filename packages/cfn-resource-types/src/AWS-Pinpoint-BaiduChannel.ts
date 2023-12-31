import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::Pinpoint::BaiduChannel
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-baiduchannel.html}
 */
export type PinpointBaiduChannelProperties = {
  ApiKey: string;
  ApplicationId: string;
  Enabled?: boolean;
  SecretKey: string;
};
/**
 * Attribute type definition for `AWS::Pinpoint::BaiduChannel`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-baiduchannel.html#aws-resource-pinpoint-baiduchannel-return-values}
 */
export type PinpointBaiduChannelAttributes = {
  Id: string;
};
/**
 * Resource Type definition for AWS::Pinpoint::BaiduChannel
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-baiduchannel.html}
 */
export class PinpointBaiduChannel extends $Resource<
  "AWS::Pinpoint::BaiduChannel",
  PinpointBaiduChannelProperties,
  PinpointBaiduChannelAttributes
> {
  public static readonly Type = "AWS::Pinpoint::BaiduChannel";
  constructor(
    logicalId: string,
    properties: PinpointBaiduChannelProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, PinpointBaiduChannel.Type, properties, options);
  }
}
