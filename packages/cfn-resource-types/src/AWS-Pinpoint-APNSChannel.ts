import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
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
  public static readonly AttributeNames = ["Id" as const];
  constructor(
    logicalId: string,
    properties: PinpointAPNSChannelProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      PinpointAPNSChannel.Type,
      properties,
      PinpointAPNSChannel.AttributeNames,
      options,
    );
  }
}
