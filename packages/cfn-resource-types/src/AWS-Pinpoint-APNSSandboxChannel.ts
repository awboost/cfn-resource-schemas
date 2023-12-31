import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource Type definition for AWS::Pinpoint::APNSSandboxChannel
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-apnssandboxchannel.html}
 */
export type PinpointAPNSSandboxChannelProperties = {
  ApplicationId: string;
  BundleId?: string;
  Certificate?: string;
  DefaultAuthenticationMethod?: string;
  Enabled?: boolean;
  PrivateKey?: string;
  TeamId?: string;
  TokenKey?: string;
  TokenKeyId?: string;
};
/**
 * Attribute type definition for `AWS::Pinpoint::APNSSandboxChannel`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-apnssandboxchannel.html#aws-resource-pinpoint-apnssandboxchannel-return-values}
 */
export type PinpointAPNSSandboxChannelAttributes = {
  Id: string;
};
/**
 * Resource Type definition for AWS::Pinpoint::APNSSandboxChannel
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-apnssandboxchannel.html}
 */
export class PinpointAPNSSandboxChannel extends $Resource<
  "AWS::Pinpoint::APNSSandboxChannel",
  PinpointAPNSSandboxChannelProperties,
  PinpointAPNSSandboxChannelAttributes
> {
  public static readonly Type = "AWS::Pinpoint::APNSSandboxChannel";
  public static readonly AttributeNames = ["Id" as const];
  constructor(
    logicalId: string,
    properties: PinpointAPNSSandboxChannelProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      PinpointAPNSSandboxChannel.Type,
      properties,
      PinpointAPNSSandboxChannel.AttributeNames,
      options,
    );
  }
}
