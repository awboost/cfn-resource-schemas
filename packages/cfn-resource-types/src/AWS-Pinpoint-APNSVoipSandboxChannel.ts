import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource Type definition for AWS::Pinpoint::APNSVoipSandboxChannel
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-apnsvoipsandboxchannel.html}
 */
export type PinpointAPNSVoipSandboxChannelProperties = {
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
 * Attribute type definition for `AWS::Pinpoint::APNSVoipSandboxChannel`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-apnsvoipsandboxchannel.html#aws-resource-pinpoint-apnsvoipsandboxchannel-return-values}
 */
export type PinpointAPNSVoipSandboxChannelAttributes = {
  Id: string;
};
/**
 * Resource Type definition for AWS::Pinpoint::APNSVoipSandboxChannel
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-apnsvoipsandboxchannel.html}
 */
export class PinpointAPNSVoipSandboxChannel extends $Resource<
  "AWS::Pinpoint::APNSVoipSandboxChannel",
  PinpointAPNSVoipSandboxChannelProperties,
  PinpointAPNSVoipSandboxChannelAttributes
> {
  public static readonly Type = "AWS::Pinpoint::APNSVoipSandboxChannel";
  public static readonly AttributeNames = ["Id" as const];
  constructor(
    logicalId: string,
    properties: PinpointAPNSVoipSandboxChannelProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      PinpointAPNSVoipSandboxChannel.Type,
      properties,
      PinpointAPNSVoipSandboxChannel.AttributeNames,
      options,
    );
  }
}
