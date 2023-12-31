import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::MediaConvert::JobTemplate
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconvert-jobtemplate.html}
 */
export type MediaConvertJobTemplateProperties = {
  AccelerationSettings?: AccelerationSettings;
  Category?: string;
  Description?: string;
  HopDestinations?: HopDestination[];
  Name?: string;
  Priority?: number;
  Queue?: string;
  SettingsJson: Record<string, any>;
  StatusUpdateInterval?: string;
  Tags?: Record<string, any>;
};
/**
 * Attribute type definition for `AWS::MediaConvert::JobTemplate`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconvert-jobtemplate.html#aws-resource-mediaconvert-jobtemplate-return-values}
 */
export type MediaConvertJobTemplateAttributes = {
  Arn: string;
  Id: string;
};
/**
 * Type definition for `AWS::MediaConvert::JobTemplate.AccelerationSettings`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconvert-jobtemplate-accelerationsettings.html}
 */
export type AccelerationSettings = {
  Mode: string;
};
/**
 * Type definition for `AWS::MediaConvert::JobTemplate.HopDestination`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconvert-jobtemplate-hopdestination.html}
 */
export type HopDestination = {
  Priority?: number;
  Queue?: string;
  WaitMinutes?: number;
};
/**
 * Resource Type definition for AWS::MediaConvert::JobTemplate
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconvert-jobtemplate.html}
 */
export class MediaConvertJobTemplate extends $Resource<
  "AWS::MediaConvert::JobTemplate",
  MediaConvertJobTemplateProperties,
  MediaConvertJobTemplateAttributes
> {
  public static readonly Type = "AWS::MediaConvert::JobTemplate";
  constructor(
    logicalId: string,
    properties: MediaConvertJobTemplateProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, MediaConvertJobTemplate.Type, properties, options);
  }
}
