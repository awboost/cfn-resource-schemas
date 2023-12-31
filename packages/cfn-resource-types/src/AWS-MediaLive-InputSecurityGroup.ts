import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
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
  public static readonly AttributeNames = ["Arn" as const, "Id" as const];
  constructor(
    logicalId: string,
    properties: MediaLiveInputSecurityGroupProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      MediaLiveInputSecurityGroup.Type,
      properties,
      MediaLiveInputSecurityGroup.AttributeNames,
      options,
    );
  }
}
