import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
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
  OrchestrationSendingRoleArn?: string;
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
  constructor(
    logicalId: string,
    properties: PinpointEmailChannelProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, PinpointEmailChannel.Type, properties, options);
  }
}
