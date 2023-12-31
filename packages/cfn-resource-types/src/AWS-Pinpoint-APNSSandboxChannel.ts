import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
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
  constructor(
    logicalId: string,
    properties: PinpointAPNSSandboxChannelProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, PinpointAPNSSandboxChannel.Type, properties, options);
  }
}
