import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
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
  public static readonly AttributeNames = ["Id" as const];
  constructor(
    logicalId: string,
    properties: PinpointADMChannelProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      PinpointADMChannel.Type,
      properties,
      PinpointADMChannel.AttributeNames,
      options,
    );
  }
}
