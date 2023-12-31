import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource Type definition for AWS::Pinpoint::ApplicationSettings
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-applicationsettings.html}
 */
export type PinpointApplicationSettingsProperties = {
  ApplicationId: string;
  CampaignHook?: CampaignHook;
  CloudWatchMetricsEnabled?: boolean;
  Limits?: Limits;
  QuietTime?: QuietTime;
};
/**
 * Attribute type definition for `AWS::Pinpoint::ApplicationSettings`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-applicationsettings.html#aws-resource-pinpoint-applicationsettings-return-values}
 */
export type PinpointApplicationSettingsAttributes = {
  Id: string;
};
/**
 * Type definition for `AWS::Pinpoint::ApplicationSettings.CampaignHook`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-applicationsettings-campaignhook.html}
 */
export type CampaignHook = {
  LambdaFunctionName?: string;
  Mode?: string;
  WebUrl?: string;
};
/**
 * Type definition for `AWS::Pinpoint::ApplicationSettings.Limits`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-applicationsettings-limits.html}
 */
export type Limits = {
  Daily?: number;
  MaximumDuration?: number;
  MessagesPerSecond?: number;
  Total?: number;
};
/**
 * Type definition for `AWS::Pinpoint::ApplicationSettings.QuietTime`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-applicationsettings-quiettime.html}
 */
export type QuietTime = {
  End: string;
  Start: string;
};
/**
 * Resource Type definition for AWS::Pinpoint::ApplicationSettings
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-applicationsettings.html}
 */
export class PinpointApplicationSettings extends $Resource<
  "AWS::Pinpoint::ApplicationSettings",
  PinpointApplicationSettingsProperties,
  PinpointApplicationSettingsAttributes
> {
  public static readonly Type = "AWS::Pinpoint::ApplicationSettings";
  public static readonly AttributeNames = ["Id" as const];
  constructor(
    logicalId: string,
    properties: PinpointApplicationSettingsProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      PinpointApplicationSettings.Type,
      properties,
      PinpointApplicationSettings.AttributeNames,
      options,
    );
  }
}
