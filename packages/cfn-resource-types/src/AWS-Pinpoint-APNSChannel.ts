import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::Pinpoint::APNSChannel
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-apnschannel.html}
 */
export type PinpointAPNSChannelProperties = {
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
 * Attribute type definition for `AWS::Pinpoint::APNSChannel`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-apnschannel.html#aws-resource-pinpoint-apnschannel-return-values}
 */
export type PinpointAPNSChannelAttributes = {
  Id: string;
};
/**
 * Resource Type definition for AWS::Pinpoint::APNSChannel
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-apnschannel.html}
 */
export class PinpointAPNSChannel extends $Resource<
  "AWS::Pinpoint::APNSChannel",
  PinpointAPNSChannelProperties,
  PinpointAPNSChannelAttributes
> {
  public static readonly Type = "AWS::Pinpoint::APNSChannel";
  constructor(
    logicalId: string,
    properties: PinpointAPNSChannelProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, PinpointAPNSChannel.Type, properties, options);
  }
}
