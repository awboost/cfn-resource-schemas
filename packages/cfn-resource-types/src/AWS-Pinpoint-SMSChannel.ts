import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
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
  constructor(
    logicalId: string,
    properties: PinpointSMSChannelProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, PinpointSMSChannel.Type, properties, options);
  }
}
