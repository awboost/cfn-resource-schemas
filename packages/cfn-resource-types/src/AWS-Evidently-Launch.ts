import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::Evidently::Launch.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-evidently-launch.html}
 */
export type EvidentlyLaunchProperties = {
  /**
   * @minLength `0`
   * @maxLength `160`
   */
  Description?: string;
  /**
   * Start or Stop Launch Launch. Default is not started.
   */
  ExecutionStatus?: ExecutionStatusObject;
  /**
   * @minLength `1`
   * @maxLength `5`
   */
  Groups: LaunchGroupObject[];
  /**
   * @minLength `0`
   * @maxLength `3`
   */
  MetricMonitors?: MetricDefinitionObject[];
  /**
   * @minLength `1`
   * @maxLength `127`
   * @pattern `[-a-zA-Z0-9._]*`
   */
  Name: string;
  /**
   * @minLength `0`
   * @maxLength `2048`
   * @pattern `([-a-zA-Z0-9._]*)|(arn:[^:]*:[^:]*:[^:]*:[^:]*:project/[-a-zA-Z0-9._]*)`
   */
  Project: string;
  /**
   * @minLength `0`
   * @maxLength `127`
   * @pattern `.*`
   */
  RandomizationSalt?: string;
  /**
   * @minLength `1`
   * @maxLength `6`
   */
  ScheduledSplitsConfig: StepConfig[];
  /**
   * An array of key-value pairs to apply to this resource.
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::Evidently::Launch`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-evidently-launch.html#aws-resource-evidently-launch-return-values}
 */
export type EvidentlyLaunchAttributes = {
  /**
   * @pattern `arn:[^:]*:[^:]*:[^:]*:[^:]*:project/[-a-zA-Z0-9._]/‍*launch/[-a-zA-Z0-9._]*`
   */
  Arn: string;
};
/**
 * Type definition for `AWS::Evidently::Launch.ExecutionStatusObject`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-evidently-launch-executionstatusobject.html}
 */
export type ExecutionStatusObject = {
  /**
   * Provide CANCELLED or COMPLETED as the launch desired state. Defaults to Completed if not provided.
   */
  DesiredState?: string;
  /**
   * Provide a reason for stopping the launch. Defaults to empty if not provided.
   */
  Reason?: string;
  /**
   * Provide START or STOP action to apply on a launch
   */
  Status: string;
};
/**
 * Type definition for `AWS::Evidently::Launch.GroupToWeight`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-evidently-launch-grouptoweight.html}
 */
export type GroupToWeight = {
  /**
   * @minLength `1`
   * @maxLength `127`
   * @pattern `[-a-zA-Z0-9._]*`
   */
  GroupName: string;
  SplitWeight: number;
};
/**
 * Type definition for `AWS::Evidently::Launch.LaunchGroupObject`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-evidently-launch-launchgroupobject.html}
 */
export type LaunchGroupObject = {
  /**
   * @minLength `0`
   * @maxLength `160`
   */
  Description?: string;
  Feature: string;
  /**
   * @minLength `1`
   * @maxLength `127`
   * @pattern `[-a-zA-Z0-9._]*`
   */
  GroupName: string;
  Variation: string;
};
/**
 * Type definition for `AWS::Evidently::Launch.MetricDefinitionObject`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-evidently-launch-metricdefinitionobject.html}
 */
export type MetricDefinitionObject = {
  /**
   * The JSON path to reference the entity id in the event.
   */
  EntityIdKey: string;
  /**
   * Event patterns have the same structure as the events they match. Rules use event patterns to select events. An event pattern either matches an event or it doesn't.
   */
  EventPattern?: string;
  /**
   * @minLength `1`
   * @maxLength `255`
   * @pattern `^[\S]+$`
   */
  MetricName: string;
  /**
   * @minLength `1`
   * @maxLength `256`
   * @pattern `.*`
   */
  UnitLabel?: string;
  /**
   * The JSON path to reference the numerical metric value in the event.
   */
  ValueKey: string;
};
/**
 * Type definition for `AWS::Evidently::Launch.SegmentOverride`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-evidently-launch-segmentoverride.html}
 */
export type SegmentOverride = {
  EvaluationOrder: number;
  /**
   * @minLength `1`
   * @maxLength `2048`
   * @pattern `([-a-zA-Z0-9._]*)|(arn:[^:]*:[^:]*:[^:]*:[^:]*:segment/[-a-zA-Z0-9._]*)`
   */
  Segment: string;
  Weights: GroupToWeight[];
};
/**
 * Type definition for `AWS::Evidently::Launch.StepConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-evidently-launch-stepconfig.html}
 */
export type StepConfig = {
  GroupWeights: GroupToWeight[];
  SegmentOverrides?: SegmentOverride[];
  StartTime: string;
};
/**
 * Type definition for `AWS::Evidently::Launch.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-evidently-launch-tag.html}
 */
export type Tag = {
  /**
   * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @minLength `1`
   * @maxLength `128`
   * @pattern `^(?!aws:)[a-zA-Z+-=._:/]+$`
   */
  Key: string;
  /**
   * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @minLength `0`
   * @maxLength `256`
   */
  Value: string;
};
/**
 * Resource Type definition for AWS::Evidently::Launch.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-evidently-launch.html}
 */
export class EvidentlyLaunch extends $Resource<
  "AWS::Evidently::Launch",
  EvidentlyLaunchProperties,
  EvidentlyLaunchAttributes
> {
  public static readonly Type = "AWS::Evidently::Launch";
  constructor(
    logicalId: string,
    properties: EvidentlyLaunchProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, EvidentlyLaunch.Type, properties, options);
  }
}
