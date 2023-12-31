import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource Type definition for AWS::Pinpoint::EmailChannel
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-emailchannel.html}
 */
export type PinpointEmailChannelProperties = {
  ApplicationId: string;
  ConfigurationSet?: string;
  Enabled?: boolean;
  FromAddress: string;
  Identity: string;
  RoleArn?: string;
};
/**
 * Attribute type definition for `AWS::Pinpoint::EmailChannel`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-emailchannel.html#aws-resource-pinpoint-emailchannel-return-values}
 */
export type PinpointEmailChannelAttributes = {
  Id: string;
};
/**
 * Resource Type definition for AWS::Pinpoint::EmailChannel
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-emailchannel.html}
 */
export class PinpointEmailChannel extends $Resource<
  "AWS::Pinpoint::EmailChannel",
  PinpointEmailChannelProperties,
  PinpointEmailChannelAttributes
> {
  public static readonly Type = "AWS::Pinpoint::EmailChannel";
  public static readonly AttributeNames = ["Id" as const];
  constructor(
    logicalId: string,
    properties: PinpointEmailChannelProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      PinpointEmailChannel.Type,
      properties,
      PinpointEmailChannel.AttributeNames,
      options,
    );
  }
}
