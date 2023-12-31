import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::Pinpoint::VoiceChannel
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-voicechannel.html}
 */
export type PinpointVoiceChannelProperties = {
  ApplicationId: string;
  Enabled?: boolean;
};
/**
 * Attribute type definition for `AWS::Pinpoint::VoiceChannel`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-voicechannel.html#aws-resource-pinpoint-voicechannel-return-values}
 */
export type PinpointVoiceChannelAttributes = {
  Id: string;
};
/**
 * Resource Type definition for AWS::Pinpoint::VoiceChannel
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-voicechannel.html}
 */
export class PinpointVoiceChannel extends $Resource<
  "AWS::Pinpoint::VoiceChannel",
  PinpointVoiceChannelProperties,
  PinpointVoiceChannelAttributes
> {
  public static readonly Type = "AWS::Pinpoint::VoiceChannel";
  constructor(
    logicalId: string,
    properties: PinpointVoiceChannelProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, PinpointVoiceChannel.Type, properties, options);
  }
}
