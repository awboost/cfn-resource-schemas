import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::Pinpoint::ADMChannel
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-admchannel.html}
 */
export type PinpointADMChannelProperties = {
  ApplicationId: string;
  ClientId: string;
  ClientSecret: string;
  Enabled?: boolean;
};
/**
 * Attribute type definition for `AWS::Pinpoint::ADMChannel`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-admchannel.html#aws-resource-pinpoint-admchannel-return-values}
 */
export type PinpointADMChannelAttributes = {
  Id: string;
};
/**
 * Resource Type definition for AWS::Pinpoint::ADMChannel
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-admchannel.html}
 */
export class PinpointADMChannel extends $Resource<
  "AWS::Pinpoint::ADMChannel",
  PinpointADMChannelProperties,
  PinpointADMChannelAttributes
> {
  public static readonly Type = "AWS::Pinpoint::ADMChannel";
  constructor(
    logicalId: string,
    properties: PinpointADMChannelProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, PinpointADMChannel.Type, properties, options);
  }
}
