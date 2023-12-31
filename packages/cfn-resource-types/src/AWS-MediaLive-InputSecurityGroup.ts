import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::MediaLive::InputSecurityGroup
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-inputsecuritygroup.html}
 */
export type MediaLiveInputSecurityGroupProperties = {
  Tags?: Record<string, any>;
  WhitelistRules?: InputWhitelistRuleCidr[];
};
/**
 * Attribute type definition for `AWS::MediaLive::InputSecurityGroup`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-inputsecuritygroup.html#aws-resource-medialive-inputsecuritygroup-return-values}
 */
export type MediaLiveInputSecurityGroupAttributes = {
  Arn: string;
  Id: string;
};
/**
 * Type definition for `AWS::MediaLive::InputSecurityGroup.InputWhitelistRuleCidr`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-inputsecuritygroup-inputwhitelistrulecidr.html}
 */
export type InputWhitelistRuleCidr = {
  Cidr?: string;
};
/**
 * Resource Type definition for AWS::MediaLive::InputSecurityGroup
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-inputsecuritygroup.html}
 */
export class MediaLiveInputSecurityGroup extends $Resource<
  "AWS::MediaLive::InputSecurityGroup",
  MediaLiveInputSecurityGroupProperties,
  MediaLiveInputSecurityGroupAttributes
> {
  public static readonly Type = "AWS::MediaLive::InputSecurityGroup";
  constructor(
    logicalId: string,
    properties: MediaLiveInputSecurityGroupProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, MediaLiveInputSecurityGroup.Type, properties, options);
  }
}
