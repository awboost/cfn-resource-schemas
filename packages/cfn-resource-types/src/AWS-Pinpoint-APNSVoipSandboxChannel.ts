import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
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
  constructor(
    logicalId: string,
    properties: PinpointAPNSVoipSandboxChannelProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, PinpointAPNSVoipSandboxChannel.Type, properties, options);
  }
}
