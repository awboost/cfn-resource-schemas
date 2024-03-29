import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::Pinpoint::APNSVoipChannel
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-apnsvoipchannel.html}
 */
export type PinpointAPNSVoipChannelProperties = {
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
 * Attribute type definition for `AWS::Pinpoint::APNSVoipChannel`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-apnsvoipchannel.html#aws-resource-pinpoint-apnsvoipchannel-return-values}
 */
export type PinpointAPNSVoipChannelAttributes = {
  Id: string;
};
/**
 * Resource Type definition for AWS::Pinpoint::APNSVoipChannel
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-apnsvoipchannel.html}
 */
export class PinpointAPNSVoipChannel extends $Resource<
  "AWS::Pinpoint::APNSVoipChannel",
  PinpointAPNSVoipChannelProperties,
  PinpointAPNSVoipChannelAttributes
> {
  public static readonly Type = "AWS::Pinpoint::APNSVoipChannel";
  constructor(
    logicalId: string,
    properties: PinpointAPNSVoipChannelProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, PinpointAPNSVoipChannel.Type, properties, options);
  }
}
