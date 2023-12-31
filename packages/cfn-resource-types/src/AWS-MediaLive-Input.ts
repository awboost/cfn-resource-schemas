import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::MediaLive::Input
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-input.html}
 */
export type MediaLiveInputProperties = {
  Destinations?: InputDestinationRequest[];
  InputDevices?: InputDeviceSettings[];
  InputSecurityGroups?: string[];
  MediaConnectFlows?: MediaConnectFlowRequest[];
  Name?: string;
  RoleArn?: string;
  Sources?: InputSourceRequest[];
  Tags?: Record<string, any>;
  Type?: string;
  Vpc?: InputVpcRequest;
};
/**
 * Attribute type definition for `AWS::MediaLive::Input`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-input.html#aws-resource-medialive-input-return-values}
 */
export type MediaLiveInputAttributes = {
  Arn: string;
  Id: string;
};
/**
 * Type definition for `AWS::MediaLive::Input.InputDestinationRequest`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-input-inputdestinationrequest.html}
 */
export type InputDestinationRequest = {
  StreamName?: string;
};
/**
 * Type definition for `AWS::MediaLive::Input.InputDeviceSettings`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-input-inputdevicesettings.html}
 */
export type InputDeviceSettings = {
  Id?: string;
};
/**
 * Type definition for `AWS::MediaLive::Input.InputSourceRequest`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-input-inputsourcerequest.html}
 */
export type InputSourceRequest = {
  PasswordParam?: string;
  Url?: string;
  Username?: string;
};
/**
 * Type definition for `AWS::MediaLive::Input.InputVpcRequest`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-input-inputvpcrequest.html}
 */
export type InputVpcRequest = {
  SecurityGroupIds?: string[];
  SubnetIds?: string[];
};
/**
 * Type definition for `AWS::MediaLive::Input.MediaConnectFlowRequest`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-input-mediaconnectflowrequest.html}
 */
export type MediaConnectFlowRequest = {
  FlowArn?: string;
};
/**
 * Resource Type definition for AWS::MediaLive::Input
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-input.html}
 */
export class MediaLiveInput extends $Resource<
  "AWS::MediaLive::Input",
  MediaLiveInputProperties,
  MediaLiveInputAttributes
> {
  public static readonly Type = "AWS::MediaLive::Input";
  constructor(
    logicalId: string,
    properties: MediaLiveInputProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, MediaLiveInput.Type, properties, options);
  }
}
