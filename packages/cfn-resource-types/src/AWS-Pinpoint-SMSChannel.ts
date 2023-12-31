import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource Type definition for AWS::Pinpoint::SMSChannel
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-smschannel.html}
 */
export type PinpointSMSChannelProperties = {
  ApplicationId: string;
  Enabled?: boolean;
  SenderId?: string;
  ShortCode?: string;
};
/**
 * Attribute type definition for `AWS::Pinpoint::SMSChannel`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-smschannel.html#aws-resource-pinpoint-smschannel-return-values}
 */
export type PinpointSMSChannelAttributes = {
  Id: string;
};
/**
 * Resource Type definition for AWS::Pinpoint::SMSChannel
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-smschannel.html}
 */
export class PinpointSMSChannel extends $Resource<
  "AWS::Pinpoint::SMSChannel",
  PinpointSMSChannelProperties,
  PinpointSMSChannelAttributes
> {
  public static readonly Type = "AWS::Pinpoint::SMSChannel";
  public static readonly AttributeNames = ["Id" as const];
  constructor(
    logicalId: string,
    properties: PinpointSMSChannelProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      PinpointSMSChannel.Type,
      properties,
      PinpointSMSChannel.AttributeNames,
      options,
    );
  }
}
