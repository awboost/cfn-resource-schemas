import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
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
  public static readonly AttributeNames = ["Id" as const];
  constructor(
    logicalId: string,
    properties: PinpointVoiceChannelProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      PinpointVoiceChannel.Type,
      properties,
      PinpointVoiceChannel.AttributeNames,
      options,
    );
  }
}
