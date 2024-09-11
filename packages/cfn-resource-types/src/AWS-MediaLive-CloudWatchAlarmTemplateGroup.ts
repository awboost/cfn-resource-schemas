import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Definition of AWS::MediaLive::CloudWatchAlarmTemplateGroup Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-cloudwatchalarmtemplategroup.html}
 */
export type MediaLiveCloudWatchAlarmTemplateGroupProperties = {
  /**
   * A resource's optional description.
   * @minLength `0`
   * @maxLength `1024`
   */
  Description?: string;
  /**
   * A resource's name. Names must be unique within the scope of a resource type in a specific region.
   * @minLength `1`
   * @maxLength `255`
   * @pattern `^[^\s]+$`
   */
  Name: string;
  /**
   * Represents the tags associated with a resource.
   */
  Tags?: TagMap;
};
/**
 * Attribute type definition for `AWS::MediaLive::CloudWatchAlarmTemplateGroup`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-cloudwatchalarmtemplategroup.html#aws-resource-medialive-cloudwatchalarmtemplategroup-return-values}
 */
export type MediaLiveCloudWatchAlarmTemplateGroupAttributes = {
  /**
   * A cloudwatch alarm template group's ARN (Amazon Resource Name)
   * @pattern `^arn:.+:medialive:.+:cloudwatch-alarm-template-group:.+$`
   */
  Arn: string;
  CreatedAt: string;
  /**
   * A cloudwatch alarm template group's id. AWS provided template groups have ids that start with `aws-`
   * @minLength `7`
   * @maxLength `11`
   * @pattern `^(aws-)?[0-9]{7}$`
   */
  Id: string;
  Identifier: string;
  ModifiedAt: string;
};
/**
 * Type definition for `AWS::MediaLive::CloudWatchAlarmTemplateGroup.TagMap`.
 * Represents the tags associated with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-cloudwatchalarmtemplategroup-tagmap.html}
 */
export type TagMap = Record<string, string>;
/**
 * Definition of AWS::MediaLive::CloudWatchAlarmTemplateGroup Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-cloudwatchalarmtemplategroup.html}
 */
export class MediaLiveCloudWatchAlarmTemplateGroup extends $Resource<
  "AWS::MediaLive::CloudWatchAlarmTemplateGroup",
  MediaLiveCloudWatchAlarmTemplateGroupProperties,
  MediaLiveCloudWatchAlarmTemplateGroupAttributes
> {
  public static readonly Type = "AWS::MediaLive::CloudWatchAlarmTemplateGroup";
  constructor(
    logicalId: string,
    properties: MediaLiveCloudWatchAlarmTemplateGroupProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      MediaLiveCloudWatchAlarmTemplateGroup.Type,
      properties,
      options,
    );
  }
}
