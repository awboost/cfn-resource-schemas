import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
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
  public static readonly AttributeNames = ["Id" as const];
  constructor(
    logicalId: string,
    properties: PinpointBaiduChannelProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      PinpointBaiduChannel.Type,
      properties,
      PinpointBaiduChannel.AttributeNames,
      options,
    );
  }
}
