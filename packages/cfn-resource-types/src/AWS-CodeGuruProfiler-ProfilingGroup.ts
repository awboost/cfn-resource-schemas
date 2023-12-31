import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::CodeGuruProfiler::ProfilingGroup`.
 * This resource schema represents the Profiling Group resource in the Amazon CodeGuru Profiler service.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codeguruprofiler-profilinggroup.html}
 */
export type CodeGuruProfilerProfilingGroupProperties = {
  /**
   * The agent permissions attached to this profiling group.
   */
  AgentPermissions?: {
    /**
     * The principals for the agent permissions.
     */
    Principals: string[];
  };
  /**
   * Configuration for Notification Channels for Anomaly Detection feature in CodeGuru Profiler which enables customers to detect anomalies in the application profile for those methods that represent the highest proportion of CPU time or latency
   */
  AnomalyDetectionNotificationConfiguration?: Channel[];
  /**
   * The compute platform of the profiling group.
   */
  ComputePlatform?: "Default" | "AWSLambda";
  /**
   * The name of the profiling group.
   * @minLength `1`
   * @maxLength `255`
   * @pattern `^[\w-]+$`
   */
  ProfilingGroupName: string;
  /**
   * The tags associated with a profiling group.
   * @maxLength `50`
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::CodeGuruProfiler::ProfilingGroup`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codeguruprofiler-profilinggroup.html#aws-resource-codeguruprofiler-profilinggroup-return-values}
 */
export type CodeGuruProfilerProfilingGroupAttributes = {
  /**
   * The Amazon Resource Name (ARN) of the specified profiling group.
   * @pattern `^arn:aws([-\w]*):codeguru-profiler:(([a-z]+-)+[0-9]+):([0-9]{12}):profilingGroup/[^.]+$`
   */
  Arn: string;
};
/**
 * Type definition for `AWS::CodeGuruProfiler::ProfilingGroup.Channel`.
 * Notification medium for users to get alerted for events that occur in application profile. We support SNS topic as a notification channel.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codeguruprofiler-profilinggroup-channel.html}
 */
export type Channel = {
  /**
   * Unique identifier for each Channel in the notification configuration of a Profiling Group
   * @pattern `[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}`
   */
  channelId?: string;
  /**
   * Unique arn of the resource to be used for notifications. We support a valid SNS topic arn as a channel uri.
   * @pattern `^arn:aws([-\w]*):[a-z-]+:(([a-z]+-)+[0-9]+)?:([0-9]{12}):[^.]+$`
   */
  channelUri: string;
};
/**
 * Type definition for `AWS::CodeGuruProfiler::ProfilingGroup.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codeguruprofiler-profilinggroup-tag.html}
 */
export type Tag = {
  /**
   * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. The allowed characters across services are: letters, numbers, and spaces representable in UTF-8, and the following characters: + - = . _ : / @.
   * @minLength `1`
   * @maxLength `128`
   */
  Key: string;
  /**
   * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length. The allowed characters across services are: letters, numbers, and spaces representable in UTF-8, and the following characters: + - = . _ : / @.
   * @minLength `0`
   * @maxLength `256`
   */
  Value: string;
};
/**
 * Resource type definition for `AWS::CodeGuruProfiler::ProfilingGroup`.
 * This resource schema represents the Profiling Group resource in the Amazon CodeGuru Profiler service.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codeguruprofiler-profilinggroup.html}
 */
export class CodeGuruProfilerProfilingGroup extends $Resource<
  "AWS::CodeGuruProfiler::ProfilingGroup",
  CodeGuruProfilerProfilingGroupProperties,
  CodeGuruProfilerProfilingGroupAttributes
> {
  public static readonly Type = "AWS::CodeGuruProfiler::ProfilingGroup";
  constructor(
    logicalId: string,
    properties: CodeGuruProfilerProfilingGroupProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, CodeGuruProfilerProfilingGroup.Type, properties, options);
  }
}
