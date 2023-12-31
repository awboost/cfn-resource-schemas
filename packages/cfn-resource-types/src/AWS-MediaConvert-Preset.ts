import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource Type definition for AWS::MediaConvert::Preset
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconvert-preset.html}
 */
export type MediaConvertPresetProperties = {
  Category?: string;
  Description?: string;
  Name?: string;
  SettingsJson: Record<string, any>;
  Tags?: Record<string, any>;
};
/**
 * Attribute type definition for `AWS::MediaConvert::Preset`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconvert-preset.html#aws-resource-mediaconvert-preset-return-values}
 */
export type MediaConvertPresetAttributes = {
  Arn: string;
  Id: string;
};
/**
 * Resource Type definition for AWS::MediaConvert::Preset
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconvert-preset.html}
 */
export class MediaConvertPreset extends $Resource<
  "AWS::MediaConvert::Preset",
  MediaConvertPresetProperties,
  MediaConvertPresetAttributes
> {
  public static readonly Type = "AWS::MediaConvert::Preset";
  public static readonly AttributeNames = ["Arn" as const, "Id" as const];
  constructor(
    logicalId: string,
    properties: MediaConvertPresetProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      MediaConvertPreset.Type,
      properties,
      MediaConvertPreset.AttributeNames,
      options,
    );
  }
}
