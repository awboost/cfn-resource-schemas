import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Definition of AWS::MediaLive::CloudWatchAlarmTemplate Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-cloudwatchalarmtemplate.html}
 */
export type MediaLiveCloudWatchAlarmTemplateProperties = {
  /**
   * The comparison operator used to compare the specified statistic and the threshold.
   */
  ComparisonOperator: CloudWatchAlarmTemplateComparisonOperator;
  /**
   * The number of datapoints within the evaluation period that must be breaching to trigger the alarm.
   * @min `1`
   */
  DatapointsToAlarm?: number;
  /**
   * A resource's optional description.
   * @minLength `0`
   * @maxLength `1024`
   */
  Description?: string;
  /**
   * The number of periods over which data is compared to the specified threshold.
   * @min `1`
   */
  EvaluationPeriods: number;
  /**
   * A cloudwatch alarm template group's identifier. Can be either be its id or current name.
   * @pattern `^[^\s]+$`
   */
  GroupIdentifier: string;
  /**
   * The name of the metric associated with the alarm. Must be compatible with targetResourceType.
   * @minLength `0`
   * @maxLength `64`
   */
  MetricName: string;
  /**
   * A resource's name. Names must be unique within the scope of a resource type in a specific region.
   * @minLength `1`
   * @maxLength `255`
   * @pattern `^[^\s]+$`
   */
  Name: string;
  /**
   * The period, in seconds, over which the specified statistic is applied.
   * @min `10`
   * @max `86400`
   */
  Period: number;
  /**
   * The statistic to apply to the alarm's metric data.
   */
  Statistic: CloudWatchAlarmTemplateStatistic;
  /**
   * Represents the tags associated with a resource.
   */
  Tags?: TagMap;
  /**
   * The resource type this template should dynamically generate cloudwatch metric alarms for.
   */
  TargetResourceType: CloudWatchAlarmTemplateTargetResourceType;
  /**
   * The threshold value to compare with the specified statistic.
   */
  Threshold: number;
  /**
   * Specifies how missing data points are treated when evaluating the alarm's condition.
   */
  TreatMissingData: CloudWatchAlarmTemplateTreatMissingData;
};
/**
 * Attribute type definition for `AWS::MediaLive::CloudWatchAlarmTemplate`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-cloudwatchalarmtemplate.html#aws-resource-medialive-cloudwatchalarmtemplate-return-values}
 */
export type MediaLiveCloudWatchAlarmTemplateAttributes = {
  /**
   * A cloudwatch alarm template's ARN (Amazon Resource Name)
   * @pattern `^arn:.+:medialive:.+:cloudwatch-alarm-template:.+$`
   */
  Arn: string;
  CreatedAt: string;
  /**
   * A cloudwatch alarm template group's id. AWS provided template groups have ids that start with `aws-`
   * @minLength `7`
   * @maxLength `11`
   * @pattern `^(aws-)?[0-9]{7}$`
   */
  GroupId: string;
  /**
   * A cloudwatch alarm template's id. AWS provided templates have ids that start with `aws-`
   * @minLength `7`
   * @maxLength `11`
   * @pattern `^(aws-)?[0-9]{7}$`
   */
  Id: string;
  Identifier: string;
  ModifiedAt: string;
};
/**
 * Type definition for `AWS::MediaLive::CloudWatchAlarmTemplate.CloudWatchAlarmTemplateComparisonOperator`.
 * The comparison operator used to compare the specified statistic and the threshold.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-cloudwatchalarmtemplate-cloudwatchalarmtemplatecomparisonoperator.html}
 */
export type CloudWatchAlarmTemplateComparisonOperator =
  | "GreaterThanOrEqualToThreshold"
  | "GreaterThanThreshold"
  | "LessThanThreshold"
  | "LessThanOrEqualToThreshold";
/**
 * Type definition for `AWS::MediaLive::CloudWatchAlarmTemplate.CloudWatchAlarmTemplateStatistic`.
 * The statistic to apply to the alarm's metric data.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-cloudwatchalarmtemplate-cloudwatchalarmtemplatestatistic.html}
 */
export type CloudWatchAlarmTemplateStatistic =
  | "SampleCount"
  | "Average"
  | "Sum"
  | "Minimum"
  | "Maximum";
/**
 * Type definition for `AWS::MediaLive::CloudWatchAlarmTemplate.CloudWatchAlarmTemplateTargetResourceType`.
 * The resource type this template should dynamically generate cloudwatch metric alarms for.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-cloudwatchalarmtemplate-cloudwatchalarmtemplatetargetresourcetype.html}
 */
export type CloudWatchAlarmTemplateTargetResourceType =
  | "CLOUDFRONT_DISTRIBUTION"
  | "MEDIALIVE_MULTIPLEX"
  | "MEDIALIVE_CHANNEL"
  | "MEDIALIVE_INPUT_DEVICE"
  | "MEDIAPACKAGE_CHANNEL"
  | "MEDIAPACKAGE_ORIGIN_ENDPOINT"
  | "MEDIACONNECT_FLOW"
  | "S3_BUCKET";
/**
 * Type definition for `AWS::MediaLive::CloudWatchAlarmTemplate.CloudWatchAlarmTemplateTreatMissingData`.
 * Specifies how missing data points are treated when evaluating the alarm's condition.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-cloudwatchalarmtemplate-cloudwatchalarmtemplatetreatmissingdata.html}
 */
export type CloudWatchAlarmTemplateTreatMissingData =
  | "notBreaching"
  | "breaching"
  | "ignore"
  | "missing";
/**
 * Type definition for `AWS::MediaLive::CloudWatchAlarmTemplate.TagMap`.
 * Represents the tags associated with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-cloudwatchalarmtemplate-tagmap.html}
 */
export type TagMap = Record<string, string>;
/**
 * Definition of AWS::MediaLive::CloudWatchAlarmTemplate Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-cloudwatchalarmtemplate.html}
 */
export class MediaLiveCloudWatchAlarmTemplate extends $Resource<
  "AWS::MediaLive::CloudWatchAlarmTemplate",
  MediaLiveCloudWatchAlarmTemplateProperties,
  MediaLiveCloudWatchAlarmTemplateAttributes
> {
  public static readonly Type = "AWS::MediaLive::CloudWatchAlarmTemplate";
  constructor(
    logicalId: string,
    properties: MediaLiveCloudWatchAlarmTemplateProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      MediaLiveCloudWatchAlarmTemplate.Type,
      properties,
      options,
    );
  }
}
